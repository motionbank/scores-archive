"use strict";

// SCORE
var assistedSolo = true;
//var assistedSolo = false;

var initNbodies = assistedSolo ? 3 : 4;
var nBodies = initNbodies;
var nPnts = 8;  // number of nodes connected to make a body  (Trio:8; P+S:6)
//var nPnts = 6;  // number of nodes connected to make a body  (Trio:8; P+S:6)
var maxTouches = 3;
var chooseClosestNodes = true;
var lightTouches = true;
var soloistId = 1;

// experimental testing
var useRandomColors = true;
var maxResetFrequency = 30000;
var clicksAddBodies = !assistedSolo;

// fade assistants in/out
var fadeTimer;  // assistants fade in and out periodically
var fadeWait = 50000;
var fadeBack = 20000;
var fadeDuration = 1000;
var fadeOut = true;

// soloist occasional drifting motion
var soloistDrifting = false;
var driftTimer;
var driftWait = 9000;
var driftDuration = 3000;

// PUSHING QUALITIES
var maxPushTime = 10000;
var maxWaitTime = 10000;  // max ms before next touch
var minWaitTime = 2000;  // max ms before next touch
//var maxWaitTime = 20000;  // max ms before next touch
var waitChance = 0.8;  // after touching, chance it waits before new touch
var maxPushSpeed = .3;
var minPushSpeed = 0.2;
var maxReachSpeed = 2;
var minReachSpeed = 0.6;
var easeDist = 50;
var closeDist = 2.5;
var minEaseSpeed = 0.4;
var defWinHeight = 720;  // default window height
var winScale = 1.0;      // used to adjust size and speed based on window size

// DRAWING
var reshapeTime = 1000; // how long to flow into new spline? (in ms)
var drawNumbers = 0;  // draw node numbers
var drawEdges = 1;  // draw internal edges
var edgeWidth = drawEdges; // 0 for invisible, 1 to see
var drawNodeOutlines = 1;
var edgeOpacity = .3;
var circleOpacity = .3;
var shapeOpacity = .85;
var circleOutline = 0;

// SVG
var w, h, center;
var nodes, edges, lineFunction, contours, features, svg, features, dataset,
    force, debug;
var eDist, circleR;

// force directed graph parameters
var friction = 0.01;  // slows nodes moving through space
var gravity = 0.1;  // attraction of all nodes back towards center
//var linkStrength = .25; // increase to stabilize link lengths
var linkStrength = .5; // increase to stabilize link lengths
var chargeScale = 256;
var theta = 2;  // charge pushes further (default 0.8)

// Color
var malColor = ["#c33555", "#b5a97d", "#255286", "#2f4d63", "#299b75",
		"#4d69bb", "#7e5060", "#b97c4d", "#c9b261", ];
// re-arranged colors so first 3 are sarah/thomas/mat shirts, for assisted solo
// thomas's colors first, then bebe's
// not using "131719" because it's "black" ("sara pants")
var d3Colors = d3.scale.category20().domain(d3.range(0,20));  // used for "randomColor"
var colorOffset = ~~(20 * Math.random());   // used for "randomColor" mode
var randomColors = [];
var hueShift = 1;

var node_drag;
var easeFunc;
var firstTime = 1;  // distinguish creation from resets

//var sound = document.createElement('audio');

/////////////////////////////////////////////////
function fadeAssistants() {
    //console.log("fading");

    nodes.selectAll("circle")
	.filter(function(C) { return C.id !== 1; })
	.transition()
        .duration(fadeDuration)
	.style("opacity", function() { return ((fadeOut) ? 0 : circleOpacity); });

    edges.transition()
	.filter(function(E) { return E.id !== 1; })
        .duration(fadeDuration)
	.style("opacity", function(d,i) { return ((fadeOut) ? 0 : edgeOpacity); });

    /*
    contours.transition()
	.filter(function(C) { return C.id !== 1; })
        .duration(fadeDuration)
	.style("opacity", function(d,i) { return ((fadeOut) ? 0 : shapeOpacity); }); */

    fadeOut = !fadeOut;	

    startFadeTimer();
}
/////////////////////////////////////////////////
function startFadeTimer() {
    var duration = fadeOut ? fadeWait : fadeBack;
    fadeTimer = setTimeout(function () { fadeAssistants(); }, duration);
    duration = undefined;  // closure leak fix?
}

/////////////////////////////////////////////////
function soloistDrift() {
    var choices = [], choice, i, j;
    //console.log("drift");

    // find all available nodes not currently involved in pushing
    for (i = 0; i < (nPnts - 1); i += 1) {  // i is local index (not center node)
        j = nodeIndex(1, i); // j is global index
        if ((dataset.nodes[j].isaTarget !== true) &&   // don't use targets
            (dataset.nodes[j].drag !== true) &&   // not nodes being dragged
            (dataset.nodes[j].isaHand !== true) &&   // don't use hands
            (dataset.nodes[j].isaFoot !== true)    // don't use feet
           ) {
	    choices.push(j);  // recording LOCAL index
	}
    }

    choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice);

    // random endpoint
    var v1, v1n, driftDist, vec, endP;
    v1 = [Math.random() - 0.5, Math.random() - 0.5];
    v1n = normVec(v1);  // randome normalized direction
    driftDist = 100 * winScale;
    vec = scaleVec(v1n, driftDist);
    endP = addVec(vec, getNodePos(j));
    console.log(endP);

//FIXME    var node = nodes.selectAll("g").select([:id=j]);

    startDriftTimer();
}
/////////////////////////////////////////////////
function startDriftTimer() {
    var duration = driftWait;
    driftTimer = setTimeout(function () { soloistDrift(); }, duration);
    duration = undefined;  // closure leak fix?
}
/////////////////////////////////////////////////
function getColor(i) {
    //if(useRandomColors === true) { return randomColors[i % nBodies]; }
    if(useRandomColors === true) { return randomColors[i]; }
    else { return malColor[i % 9]; }  // 9 colors in costume color list
}
/////////////////////////////////////////////////
function addRandomColor() {
    var hue = Math.random() * 360;
    var saturation = 0.2 + Math.random() * 0.4;
    var lightness = 0.2 + Math.random() * 0.4;
    randomColors.push(d3.hsl(hue, saturation, lightness).toString());

    //randomColors[i] = d3.hsl(hue, saturation, lightness).toString();
    //console.log(randomColors[i]);
    //randomColors[i] = d3.hsl(hue, 0.5, 0.5);
}
/////////////////////////////////////////////////
function changeColor(b) {
    var c = d3.hsl(getColor(b));
    var newHue = (c.h + hueShift) % 360;
    c = d3.hsl(newHue, c.s, c.l);
    randomColors[b] = c.toString();

    dataset.bodies[b].color = randomColors[b];

    for(var i = b*nPnts; i < (b+1)*nPnts; i++) {
	dataset.nodes[i].color = c.darker().toString();
    }
}
/////////////////////////////////////////////////
function nodeIndex(body, i) {
    return ((body * nPnts) + i);  // last node of each body is center node
}
/////////////////////////////////////////////////
function getBodyPos(i) {
    var j = (i + 1) * nPnts - 1;  // last node of each body is center node
    return [dataset.nodes[j].x, dataset.nodes[j].y];
}
/////////////////////////////////////////////////
function getNodePos(j) {
    return [dataset.nodes[j].x, dataset.nodes[j].y];
}
/////////////////////////////////////////////////
function bodyCentroid(b) {
    var i, cx=0, cy=0, p;

    for(i = 0; i < nPnts; i += 1) {
	p = getBodyNodePos(b, i);
	cx += p[0];
	cy += p[1];
    }
    cx /= nPnts;      
    cy /= nPnts;
    return [cx, cy];
}
/////////////////////////////////////////////////
function calcDist(p1, p2) {
    return Math.sqrt((p2[0] - p1[0]) * (p2[0] - p1[0]) +
                     (p2[1] - p1[1]) * (p2[1] - p1[1]));
}
/////////////////////////////////////////////////
function getBodyNodePos(i, j) {
    var k = nodeIndex(i, j);  // last node of each body is center node
    //var k = i * nPnts + j;  // last node of each body is center node
    return [dataset.nodes[k].x, dataset.nodes[k].y];
}
/////////////////////////////////////////////////
// ignores center node (assumes it's last in list) and rest are outside "skin"
// uses center node for body1 position
// compares to each outer skin node for body2
// note: body might be inside out so should consider all nodes?  FIXME
function findClosestNodes(b1, b2) {
    var b1p = getBodyPos(b1), dists = [], i;
    for (i = 0; i < nPnts - 1; i += 1) {
        dists.push({"d": calcDist(b1p, getBodyNodePos(b2, i)), "i": i});
    }
    return dists.sort(function (a, b) {return a.d - b.d; });
}
/////////////////////////////////////////////////
function calcNodeDist(n1, n2) {
    return Math.sqrt((n2.x - n1.x) * (n2.x - n1.x) +
             (n2.y - n1.y) * (n2.y - n1.y));
}
/////////////////////////////////////////////////
function scaleVec(v, s) { return [v[0] * s, v[1] * s]; }
/////////////////////////////////////////////////
function addVec(v1, v2) { return [v1[0] + v2[0], v1[1] + v2[1]]; }
/////////////////////////////////////////////////
function getVecXY(p1, p2) { return [p1.x - p2.x, p1.y - p2.y]; }
/////////////////////////////////////////////////
function vecTo(p1, p2) { return [p2[0] - p1[0], p2[1] - p1[1]]; } 
//////////////////////////////////////////
function lengthVec(v) { return calcDist(v, [0, 0]); }
//////////////////////////////////////////
function normVec(v) {
    var L = lengthVec(v);
    if (L > 0) {
        return [v[0] / L, v[1] / L];
    }
    alert("ERROR: normVec() zero length vector");
}
//////////////////////////////////////////
function printVec(name, v) {
    console.log(name + ": [" + v[0] + ", " + v[1] + "]");
}
//////////////////////////////////////////
function calcEDist() {
    var radius = 200;
    if(!assistedSolo && (initNbodies>1)) { radius *= 0.75; }  // smaller for push/shoving 
    eDist = winScale * (radius / Math.sqrt(initNbodies));  // edge distance (body radius)
}
//////////////////////////////////////////
function createBodyNodesEdgeData(b, cx, cy) {
    var pn, mid, i, j; // k, barDist;

    pn = b * nPnts;  // prev num nodes

    mid = pn + (nPnts - 1);  // index of middle node of new body
    dataset.nodes[mid] = { "x": cx, "y": cy, "id": b, "i": nPnts - 1,
                           "color": "#000000", "isaHand": false,
			   "isaFoot": false, "isaTarget": false,
			   fixed: true  // starts frozen
			 };
    
    for (i = 0; i < (nPnts - 1); i += 1) {  // outer edge nodes
        dataset.nodes[pn + i] = { 
	    "x": cx + eDist * Math.sin(i * 2 * Math.PI / (nPnts - 1)),
            "y": cy + eDist * Math.cos(i * 2 * Math.PI / (nPnts - 1)),
            "id": b, "i": i, "isaTarget": false, "drag": false,
            "isaHand": false, "isaFoot": false,
            "color": getColor(b) };
	
	dataset.nodes[pn + i].fixed = true; // everyone starts still
    }

    for (i = 0; i < (nPnts - 1); i += 1) {  // outer edge nodes
        j = (i < (nPnts - 2)) ? i + 1 : 0;  // next node wraps at end
	
        // outer edges
        dataset.edges.push({ 
	    "source": dataset.nodes[i+pn], "target": dataset.nodes[j+pn], 
	    "dist": eDist, id: b});
	//"source": i + pn, "target": j + pn, "dist": eDist, id: b});
	
        // inner star
        //dataset.edges.push({ "source": i + pn, "target": nPnts - 1 + pn,
        dataset.edges.push({ "source": dataset.nodes[i+pn], 
			     "target": dataset.nodes[nPnts-1+pn],
                             "dist": eDist / 2, id: b});
	
        // internal cross bars
        //var k = (i + 2) % (nPnts - 1);
        //dataset.edges.push({ "source": i + pn, "target": k + pn, "dist": eDist, id: b}); 
    }
}
//////////////////////////////////////////
function generateBodyData(cx, cy) {   // http://bl.ocks.org/mbostock/929623
    //console.log(dataset);
//    alert(cx+" "+cy);

    if(useRandomColors === true) { addRandomColor(); }  // 

    var b = dataset.bodies.length;  // this will be body number b
    dataset.bodies.push({ "id": b, "x": cx, "y": cy, "color": getColor(b) });
    createBodyNodesEdgeData(b, cx, cy);

    nBodies = dataset.bodies.length;  // nBodies have now been created (mostly)

    // create a timer to go off occasionally for a reset
    if(assistedSolo && (b !== 1)) { createResetTimer(b); }
}
//////////////////////////////////////////
function generateData() {
    var b, M, N, cx, cy;

    if(w === undefined) { alert("w is undefined in generateData()"); }
    calcEDist();

    dataset = { nodes: [], edges: [], bodies: [], touches: [] };

    M = (initNbodies > 1)? (1 + Math.floor(Math.sqrt(initNbodies - 1))) : 1;  // grid width
    if(assistedSolo && (M === 2)) { M = 3; }  // line up 3 person a.solo
    N = Math.ceil(initNbodies / M);  // grid height
    //alert("MNw: "+M+" "+N+" "+w);

    for (b = 0; b < initNbodies; b += 1) { 
	cx = (w / M) * ((b % M) + 0.5);  // cell width * (column + 0.5)
	if(assistedSolo) {
	    if((b === 0) && (Math.random() > 0.5)) { cx = -eDist * 3; }
	    else if((b===2) && (Math.random() > 0.5)) { cx = w + eDist * 3; }
	}

	cy = (h / N) * (0.5 + Math.floor(b / M));

	generateBodyData(cx, cy); 
    }
    
    //console.log(dataset);
    return dataset;
}
////////////////////////////////////////////
function initForce() {
    if(eDist === undefined) { alert("eDist is undefined in initForce()"); }

    if(force === undefined) { force = d3.layout.force(); }  // there can be only one

    //force = d3.layout.force()
    force.nodes(dataset.nodes)
        .links(dataset.edges)
        .size([w, h])
        .linkDistance(function (d) { return d.dist; })
        .charge([-eDist * chargeScale])
        .gravity(gravity)
        .theta(theta * winScale)
        .linkStrength(linkStrength * winScale)
        .friction(friction)
        .start();
}
////////////////////////////////////////////
function edgeDist(d) {
    return d.dist;
}
////////////////////////////////////////////
function addBody(point) {
    //force.stop();
    generateBodyData(point[0], point[1]); 
    addShapes();
    force.start();
    createTouches(nBodies-1, maxTouches, false); // from newest body
    resetNodes(nBodies-1);
}
////////////////////////////////////////////
function initSVG() {
    svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .on("mousedown", function () { 
	    if(clicksAddBodies === true) { 
		var point = d3.mouse(this);
		addBody(point);
		d3.event.preventDefault(); 
	    }
	});

    features = svg.append("g"); // group transform for the object

/*
    debug = features.append("text")
        .attr('x', 0)
        .attr('y', 20)
//	.text("test")
        .attr('class', 'debug');
*/

    createShapes();
}
////////////////////////////////////////////
function orderPoints(bid) {  // uses atan2 to resort points around center point
    var i, points;

    points = dataset.nodes.slice(bid * nPnts, (bid + 1) * nPnts - 1);

/*    if(dataset.nodes.length < (bid+1) * nPnts) {  // numNodes < slice id?
	points = dataset.nodes.slice(bid * nPnts, (bid + 1) * nPnts - 1);
    } else { 
	console.log("PROBLEM: dataset.nodes.length="+dataset.nodes.length+
		    " bid="+bid+" nPnts="+nPnts+" wanted="+((bid+1)*nPnts)-1);
    } */

/*    if(points === undefined) { 
	var wanted = (bid+1)*nPnts-1;
	console.log("PROBLEM: dataset.nodes.length="+dataset.nodes.length+
		    " bid="+bid+" nPnts="+nPnts+" wanted="+wanted);
	alert("points undefined in orderPoints"); 
    } */

    for (i = 0; i < points.length; i += 1) {
	points[i].angle = 
	    Math.atan2(points[i].y - dataset.nodes[((bid+1) * nPnts) - 1].y, 
		       points[i].x - dataset.nodes[((bid+1) * nPnts) - 1].x);
	//if(isNaN(points[i].angle)) { console.log("points[i]=NaN"+" i="+i+" bid="+bid); }
    }

    /*
      console.log(bid);
      console.log(points.sort(function (a, b) {
                                    return a.angle - b.angle; 
                                }).map(function(a) { 
                                  	    return "("+a.i+":"+a.angle+") "; 
                                       }).join());
				       alert("pause");
				       }
    */

    return points.sort(function (a, b) {return a.angle - b.angle; });  // bangle
}
////////////////////////////////////////////
function addShapes() {
    var g;

    contours = features.selectAll("path")  // filled spline path shape
        .data(dataset.bodies);

    contours.enter()
        .append("path")
        .attr("d", function (b) {
            return lineFunction(orderPoints(b.id)); }) 
            /*return lineFunction(dataset.nodes.slice(b.id * nPnts,
                                (b.id + 1) * nPnts - 1)); })*/
        .attr("stroke", function (d, i) { return d3.rgb(getColor(i)).darker(); })
	.attr("stroke-width", 1)
        .attr("opacity", shapeOpacity)
	.attr("fill", function (d, i) { return d3.rgb(d.color); });
	//.attr("fill", function (d, i) { return d3.rgb(getColor(i)); });

    nodes = features.selectAll("g")
        .data(dataset.nodes);

    nodes.enter()
	.append("g")
        .attr('transform', function (d) { 
	         return 'translate(' + d.x + ',' + d.y + ')';})
	.append("circle")
        .attr("fill", function (d) { return d3.rgb(d.color).darker(1); })
        .attr("id", function (d, i) { return "c" + i; })
      //.attr("stroke", function (d) { return d3.rgb(d.color); })
        .attr("stroke", "white")
        .attr("stroke-width", circleOutline)
        .attr("opacity", function (d, i) { 
	    if((i % nPnts) === (nPnts - 1)) { return 0; }
	    else if(assistedSolo && (i >= nPnts) && (i < (nPnts*2))) { return 0.8; }
	    else { return circleOpacity; }
	  })
        .attr("r", circleR)
	.on("mouseover", function(d,i){dataset.nodes[i].fixed = true;})
	.on("mouseout", function(d,i){
	    if((dataset.nodes[i].isaHand !== true) &&
	       !(assistedSolo && (i>=nPnts) && (i<(2*nPnts))) &&  // soloist stays
	       (dataset.nodes[i].isaFoot !== true)) {
		dataset.nodes[i].fixed = false;
	    }
	});

    nodes = features.selectAll("g").call(node_drag);

    if(lightTouches && features) { 
	nodes = features.selectAll("g")
            .on("click", function(d,i) {
		//debug.text(i);
		adjustEdgeDists(i);
	    });
    }

    edges = features.selectAll("line")  // edges between nodes
	.data(dataset.edges);

    edges.enter()
        .append("line")
	.style("opacity", edgeOpacity)
        .style("stroke", function (d) { 
	                   return d3.rgb(getColor((d.id) % 9)).darker(); })
        .style("stroke-width", edgeWidth);

    // blue on rollover, back when not
    /*	.on("mouseover", function(){d3.select(this).style("fill", "blue");})
	.on("mouseout", 
	    function(d){ 
	        d3.select(this).style("fill", d3.rgb(d.color).darker(1));}); */

    if(drawNumbers) {  // number the nodes
	features.selectAll("g")
	    .append("text")
            .attr('y', 4)
            .attr('class', 'id')
          //.text(function (d) { return d.i; });
            .text(function (d, i) { return i; });
    }
}
////////////////////////////////////////////
function createShapes() {
    if(eDist === undefined) { alert("eDist is undefined in createShape()"); }
    circleR = eDist / 6;  // size of the node circles, in pixels

    addShapes();
}
//////////////////////////////////////////////
function tock() {  // update SVG elements from updated data

    // update SVG circle transforms to match d3 fdg node positions
    nodes.attr('transform', function (d) {  // update g's circle + label
        return 'translate(' + d.x + ',' + d.y + ')';
    });

    // update SVG line positions to match d3 fdg edge positions
    edges.attr("x1", function (d) { return d.source.x; }) // update edges
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

    // body color may have changed in data
    contours.attr("fill", function (d, i) { 
	return d3.rgb(dataset.bodies[i].color); });  

    // interpoloate contour shape through reordered points around center
    contours.transition()
        .duration(reshapeTime)
        .ease("linear")
	.attr("d", function (b) { 
	    return lineFunction(orderPoints(b.id)); })
	.filter(function(C) { return C.id !== 1; })
	.style("opacity", function(d,i) { 
	    return ((fadeOut) ? shapeOpacity : 0); });
}
////////////////////////////////////////////
// WINDOW RESIZING
// http://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
////////////////////////////////////////////
function initWindowSize() {
    var win = window, d = document, e = d.documentElement,
        gt = d.getElementsByTagName('body')[0];

    w = win.innerWidth || e.clientWidth || gt.clientWidth;
    h = win.innerHeight || e.clientHeight || gt.clientHeight;
    center = [w/2, h/2];
    winScale = Math.min(w, h) / defWinHeight;
}
///////////////////////////////////////////////////////
function updateWindow() {
    initializeAll();
}
///////////////////////////////////////////////////////
function adjustEdgeDists(i) {  // small random adjustments to linkDistance
    var j, L;

    // select the edges whose source or target is circle i
    d3.selectAll("line").filter(function(L,j) {
	//console.log(L);
	if(L.source.i === i || L.target.i === i) { 
	    if(Math.random() < 0.5) { // shorter or longer?
		dataset.edges[j].dist = eDist * (0.3 + (0.7 * Math.random()));
	    } else {
		dataset.edges[j].dist = eDist * (1.0 + (0.2 * Math.random()));
	    }
	};
    });

    //d3.selectAll("line").style("stroke", function(L) {  // make edges red
    //   return (L.source.i === i || L.target.i === i) ? "f00" : "ccc"; });

    force.linkDistance(function (d) { return d.dist; })  // update edges in force
    force.start();  // only uses linkDist at force start
}
///////////////////////////////////////////////////////
// NODE DRAGGING CODE (from http://bl.ocks.org/norrs/2883411 )

function dragstart(d, i) {

    // don't mess with pushing hands
    if ((d.isaHand !== true) && (d.isaTarget !== true)) { // don't drag hands/targets
	d.fixed = true;   // pin/immobilize dragged nodes
	d.drag = true;
    }

    d3.event.sourceEvent.stopPropagation();

    // force.stop() // stops force auto positioning before you start dragging
}
//-----------
function dragmove(d, i) {

    if ((d.isaHand !== true) && (d.isaTarget !== true)) { // don't drag hands/targets

	// changed from add-to-setting to solve tug-of-war w/procedural positioning
	d.px = d3.event.x;
	d.py = d3.event.y;
	d.x = d3.event.x;
	d.y = d3.event.y;
    /*d.px += d3.event.dx;
      d.py += d3.event.dy;
      d.x += d3.event.dx;
      d.y += d3.event.dy; */
	//tock();

	if(((i+1) % nPnts) === 0 ) { // if dragging a center node
	    // then drag move ALL of dragged bodies nodes
	    for(var j = i-nPnts+1; j<i; j++) {
		var v = [ d3.event.dx, d3.event.dy ];
		moveNode(j, v);
	    }
	}

	force.resume();
    }
}
//-----------
function dragend(d, i) {
    //d.fixed = true;   // pin/immobilize dragged nodes
    if ((d.isaHand !== true) &&    // no hand dragging
	(d.isaTarget !== true) &&  // no target dragging
	!(assistedSolo && (i>=nPnts)&&(i<(nPnts*2))) ) {  // soloist stay put when dropped
        d.fixed = false;   // release dragged node to forces
    }
    d.drag = false;
    tock();
    //force.resume();
    d3.event.sourceEvent.stopPropagation();
}
///////////////////////////////////////////////
function newTouch(from, to) {
    return { "actions": [ "choose", "moveClose", "reach", "push" ],
             "from": from, "to": to,  // body indices
             "hand": -1, "target": -1, // local node indices (0..nPnts - 1)
             "pushTo": {} // XY position nodes should be moved to
           };
}
///////////////////////////////////////////////
function createTouch(from, to, wait) {
    //console.log("createTouch(" + from + "," + to + ")");
    var touch = newTouch(from, to);
    if(wait) { touch.actions.unshift("start"); }
    dataset.touches.push(touch);
}
//////////////////////////////////////////
function createTouches(b, numTouches, wait) {  // 
    var i = 0, otherBody = 0;

    for (i = 0; i < numTouches; i += 1) {  // create numTouches
        if (assistedSolo) {
	    if(b !== 1) {  // 1st person gets pushed, doesn't push
		createTouch(b, 1, wait); // everyone push 1st person 
	    }
        } else {
            otherBody = Math.floor((b + 1 + (Math.random() *
					     (nBodies - 2)))) % nBodies;
            if ((otherBody < 0) || (otherBody >= nBodies)) { 
		alert("otherBody prob"); 
	    }
	    createTouch(b, otherBody, wait);
        }
    }
}
//////////////////////////////////////////
function initializeTouches(numTouches) {
    var b = 0;
    dataset.touches = [];

    if(nBodies < 2) { return; }  // no touches if only one body in world

    for (b = 0; b < nBodies; b += 1) {  // each body gets numTouches
	createTouches(b, numTouches, true);
    }
}

/////////////////////////////////////////////////
function findFreeNode(T, type) {  // returns LOCAL index
// b1 is body we're looking on; type is "hand", "target", etc;
// b2 is other body (for calculating node proximities
// prev is the global index of a previously targetted node (if used)
    var choice, choices = [], i, j, whichOne, otherBodyPos, b1, b2;

    if(type === "hand") { b1 = T.from; b2 = T.to; }
    else if(type === "target") { b1 = T.to; b2 = T.from; }
    
    // find all available nodes usable for pushing
    for (i = 0; i < (nPnts - 1); i += 1) {  // not center node
        j = nodeIndex(b1, i);
        if ((dataset.nodes[j].isaTarget !== true) &&   // don't use targets
            (dataset.nodes[j].drag !== true) &&   // not nodes being dragged
            (dataset.nodes[j].isaHand !== true) &&   // don't use hands
            (dataset.nodes[j].isaFoot !== true)    // don't use feet
           ) {

	    if(!((type === "target") && 
		 (dataset.nodes[nodeIndex(b2, T.hand)].prevTarget === j))) {
		choices.push(i);  // recording LOCAL index
	    }
        }
    }

    if (choices.length > 0) {  // founds some nodes?

	if(chooseClosestNodes) {

	    // sort available choices based on distance from hand
	    choices.sort(function (c1, c2) {
		// calc distance from this node to b2's center
		var otherBodyPos = getBodyNodePos(b2, nPnts-1);
		return (calcDist(getBodyNodePos(b1, c1), otherBodyPos) -
			calcDist(getBodyNodePos(b1, c2), otherBodyPos));
	    });

            whichOne = 0;
	}
	else {  // just choose a random one
            whichOne = Math.floor(Math.random() * choices.length);
	}

        choice = choices[whichOne];

    } else {
      //  console.log("no choices: " + b1 + " " + type);
    }

    choices = i = j = whichOne = otherBodyPos = undefined; //closure leak

    return choice;  // returning LOCAL index
}
/////////////////////////////////////////////////
function stopWaiting(T) {
    var i;

    T.actions.shift();  // remove "wait" from the actions list in T
    T.waiting = false;

    for(i=0; i<nPnts; i++) {
	var j = (T.from * nPnts) + i;
	if((dataset.nodes[j].isaHand !== true) && 
	   (dataset.nodes[j].isaTarget !== true) && 
	   (dataset.nodes[j].drag !== true)) {
	    var k = (T.from*nPnts)+i;
	    dataset.nodes[k].fixed = false; // allowed to move
	    //console.log("stop waiting node "+i+" "+k);
	}
    }

    force.resume();
}
/////////////////////////////////////////////////
function startTouch(T) {
    var duration;
    //console.log("starting");

    if(T.waiting !== true) {
	// always wait at start
	// start a waiting timer; call STOP when done
	duration = (T.from * 1000) + (Math.random() * maxWaitTime);
	T.waitTimer = setTimeout(function () { stopWaiting(T); }, duration);
	T.waiting = true;
    }
    duration = undefined;  // leak fix?
}
/////////////////////////////////////////////////
function waitTouch(T) {
    var duration;
    //console.log("waiting");

    if(T.waiting !== true) {
	// start a waiting timer; call STOP when done
	duration = minWaitTime + (Math.random() * (maxWaitTime - minWaitTime));
	T.waitTimer = setTimeout(function () { stopWaiting(T); }, duration);
	T.waiting = true;
    }
    duration = undefined;  // leak fix?
}
/////////////////////////////////////////////////
function chooseTouch(T) {
    var hand, target;
    //console.log("chose " + T.from + " " + T.to + "\n");

    T.hand = findFreeNode(T, "hand");  // stores LOCAL index
    if (T.hand === undefined) { return; }   // no hands available

    T.target = findFreeNode(T, "target");  // returns LOCAL index
    if (T.target === undefined) { return; }   // no targets available

    // if here then hand and target selected successfully
    T.actions.shift();  // remove choosing from action stack

    hand = nodeIndex(T.from, T.hand);
    dataset.nodes[hand].isaHand = true;
    dataset.nodes[hand].fixed = true;  // going to move "manually"

    target = nodeIndex(T.to, T.target);
    dataset.nodes[target].isaTarget = true;

    // don't do the same combination twice
    // store with hand memory of last target
    dataset.nodes[hand].prevTarget = target;  // global node index

    //console.log("chose " + hand + " to " + target);
}
/////////////////////////////////////////////////
function circleColor(i, v) {  // node number, and amount brighter/darker
    var c = nodes.selectAll("circle#c" + i);

    if (v > 0) {
        c.style("fill", function (d) { return d3.rgb(d.color).brighter(v); });
    } else {
        c.style("fill", function (d) { return d3.rgb(d.color).darker(-v); });
    }

    /*c.style("fill", "white")    // transition white to black
      .transition()
      .duration(2000)
      .style("fill", d3.rgb("black"));
    */
}
/////////////////////////////////////////////////
function moveNode(i, v) {
    dataset.nodes[i].x += v[0];
    dataset.nodes[i].y += v[1];
    dataset.nodes[i].px = dataset.nodes[i].x;
    dataset.nodes[i].py = dataset.nodes[i].y;

    force.resume();
}
/////////////////////////////////////////////////
function moveClose(T) {  // body is too far to reach; "walk" closer
    var hand = nodeIndex(T.from, T.hand),  // toucher node's hand
        target = nodeIndex(T.to, T.target),  // target node
    //closeDist = eDist * 1.5,  // close enough? then start reaching
        closeDist = eDist * 1.0,  // close enough? then start reaching
        dir, Ndir, speed, move;

    //console.log("moveClose");

    // close enough? then start reaching
    if (calcNodeDist(dataset.nodes[hand], dataset.nodes[target]) < closeDist) {
        T.actions.shift();  // stop "walking", go to next action (reach)
//        circleColor(hand, 0);  // make hand brighter

	T.maxSpeed = minReachSpeed + (Math.random() * maxReachSpeed);
	//T.speed = T.maxSpeed * winScale;
	T.speed = T.maxSpeed * (eDist / 200);
	T.reachStart = getNodePos(hand); // needed for ease-in calc

        return;
    }

    if (dataset.nodes[hand].drag !== true) {  // don't move drag nodes
        dir = getVecXY(dataset.nodes[target], dataset.nodes[hand]); //to target
        Ndir = normVec(dir); // normalize
        speed = 3 * winScale;  // movement speed
        move = [Ndir[0] * speed, Ndir[1] * speed];
        moveNode(hand, move);
        force.resume();
    }
}
/////////////////////////////////////////////////
function chooseFoot(b) {  // returns global node number. fix node to push from
    // currently chooses first available
    // will reuse a foot instead of adding a new one (?)
    var i, j;

    for (i = 0; i < (nPnts - 1); i += 1) {
        j = nodeIndex(b, i);
        if ((dataset.nodes[j].isaTarget !== true) && // don't choose targets
            (dataset.nodes[j].isaHand !== true) &&   // don't choose hands
            (dataset.nodes[j].drag !== true)) {   // nodes dragged make bad feet
            return j;
        }
    }
    return -1;
}
/////////////////////////////////////////////////
function plantFoot(b, i, val) {  // accepts and stores global node number
    //          console.log(b + " " + i + " " + val);
    //var c = nodes.selectAll("circle#c" + (i || dataset.bodies[b].foot));
    var c = nodes.selectAll("circle#c" + i); // circle svg

    if (val) {  // if going to plant foot then record and set node.fixed to true
        dataset.bodies[b].foot = i;
        dataset.nodes[dataset.bodies[b].foot].fixed = true;
        dataset.nodes[dataset.bodies[b].foot].isaFoot = true;
    } else {
        if(!assistedSolo || (b != 1)) {  // always free pusher feet
	    dataset.nodes[dataset.bodies[b].foot].fixed = false; 
	}  

        dataset.nodes[dataset.bodies[b].foot].isaFoot = false;
        dataset.bodies[b].foot = undefined;
    }

    if (c && val) { c.style("stroke", "black"); }
    //if (c && val) { c.style("stroke", "red"); }
    else if (c && !val) {  c.style("stroke", "white"); }

    force.resume();
}
/////////////////////////////////////////////////
// set T.pushSpeed based on % through duration
function createSpeedTimer(T, duration) {
    if(duration === 0) { return; }

    T.duration = duration;
    T.startTime = 0;
    d3.timer(function(elapsed) {
	if(T.startTime === 0) { T.startTime = elapsed; }  // first time
	else if(elapsed >= (T.startTime+T.duration)) { return true; } //end
	else {  // update speed
	    var change = elapsed - T.startTime;
	    var percent = change/T.duration;
	    if(percent < 0.5) {	// first half of push
		T.speed = T.maxSpeed * easeFunc(2 * percent); 
	    }
	    else {  // 2nd half of push
		T.speed = T.maxSpeed * (1 - easeFunc(2 * (percent-0.5))); 
	    }

	    /*debug.text(change.toFixed(2)+" "+~~T.duration+" "+
		       (change/T.duration).toFixed(2)+" "+
		       easeFunc(change/T.duration).toFixed(2));*/
	}
    });
}
/////////////////////////////////////////////////
function calcEasedReachSpeed(T, hand, target) {

    // if almost there, ease out speed
    var targetDist = calcNodeDist(dataset.nodes[hand], dataset.nodes[target]);
    //debug.text(targetDist.toFixed(2));
    if(targetDist < easeDist) {
	
	// hack to stop fleeing targets
	if(targetDist < (easeDist * 0.5)) { dataset.nodes[target].fixed = true; }

        return minEaseSpeed + 
	    ((T.maxSpeed - minEaseSpeed) * easeFunc(targetDist / easeDist));
    }

    // else if just started moving (near where started) ease-in speed
    var travelDist = calcDist(getNodePos(hand), T.reachStart);
    if(travelDist < easeDist) {
        return minEaseSpeed + 
	    ((T.maxSpeed - minEaseSpeed) * easeFunc(travelDist / easeDist));
    }

    return T.speed; // else reach at scaled speed
    //return T.maxSpeed; // else reach at top speed
}
/////////////////////////////////////////////////
function reachHand(T) {  // move hand node towards specified target node
    var hand = nodeIndex(T.from, T.hand), target = nodeIndex(T.to, T.target),
        touchDist, pfoot, dir, Ndir, speed, move, duration;
    //console.log("reaching");

    // detect if target has moved out of arm reach. 
    // If so go back to walking towards target body
    if (calcNodeDist(dataset.nodes[hand], dataset.nodes[target]) > (closeDist*eDist)) {
        T.actions.unshift("moveClose");
        // put color back to moving, not reaching for state reveal
        //var handCircle = nodes.selectAll("circle#c" + hand);
        //handCircle.style("fill", function (d) { return d3.rgb(d.color); });
        return;
    }

    // if contact made, initiate PUSHING
    touchDist = circleR * 0.9;  
    if (calcNodeDist(dataset.nodes[hand], dataset.nodes[target]) < touchDist) {
        T.actions.shift();

	if(dataset.bodies[T.from].foot === undefined) {
            pfoot = chooseFoot(T.from);  // plant foot if available and none
            if (pfoot !== -1) { plantFoot(T.from, pfoot, true); }
	}
	if(dataset.bodies[T.to].foot === undefined) {
            pfoot = chooseFoot(T.to); // target plant foot if available/none
            if (pfoot !== -1) { plantFoot(T.to, pfoot, true); }
	}

        dataset.nodes[hand].fixed = true;    // manual update, not forces
        dataset.nodes[target].fixed = true;  // manual update, not forces

        //circleColor(nodeIndex(T.to, T.target), 0);  // make target brighter

        //sound.play();

	// start a pushing duration timer; call STOP when done
        duration = 1000 + (Math.random() * maxPushTime);
        T.pushTimer = setTimeout(function () { stopPushing(T); }, duration);

	// start a d3.timer to update time remaining, for speed easing
	T.maxSpeed = (minPushSpeed + (maxPushSpeed * Math.random()));
	createSpeedTimer(T, duration);

	// randomly adjust edges attached to pushed node
	adjustEdgeDists(hand);

	// adjust color
	//changeColor(T.from);
	changeColor(T.to);

        return;
    }

    // not pushing yet, so unless dragging move hand towards target
    if (dataset.nodes[hand].drag !== true) {  // don't move dragged nodes
        // calc vector to target; normalize; scale by speed
        dir = getVecXY(dataset.nodes[target], dataset.nodes[hand]);
        Ndir = normVec(dir);

	// ease speed in and out (instead of just using T.maxSpeed)
	//T.speed = calcEasedReachSpeed(T, hand, target) * winScale;
	T.speed = T.maxSpeed;

        //T.speed = T.maxSpeed;
        move = [Ndir[0] * T.speed, Ndir[1] * T.speed];
        moveNode(hand, move);
        //printVec("move", move);
    }
}
/////////////////////////////////////////////////
function allNodesFixed(b) {
    var i, j;
    for (i = 0; i < nPnts - 1; i += 1) {
        j = nodeIndex(b, i);
	if (dataset.nodes[j].fixed !== true) { 
	    return false;  // note that we found one at least one free
	} 
    }
    return true;
}
/////////////////////////////////////////////////
function findAndFreeANode(T) {
    var fixedFree = [], i, j, whichOne;

    for (i = 0; i < nPnts - 1; i += 1) {
        j = nodeIndex(T.to, i);

	if((dataset.nodes[j].isaHand !== true) &&  // don't free hands
	   (dataset.nodes[j].isaTarget !== true) &&  // don't free targets
	   (dataset.nodes[j].drag !== true)) {     // don't free dragged stuff
            fixedFree.push(j);
        }
    }
    if (fixedFree.length > 0) {   // found some

	if(Math.random() > 0.7) {  // free random one
            whichOne = Math.floor(Math.random() * fixedFree.length);
	} 
	else {  // free furthest one
	    fixedFree.sort(function (a, b) {
		return (calcDist(getNodePos(b), center) -
			calcDist(getNodePos(a), center));
	    });	    
            whichOne = 0;
	}
        dataset.nodes[fixedFree[whichOne]].fixed = false;        
    }
    force.resume();
}
/////////////////////////////////////////////////
function stopPushing(T) {
    var hand = nodeIndex(T.from, T.hand), target = nodeIndex(T.to, T.target),
        targetCircle, handCircle;

    T.actions.shift();  // remove "push" from the actions list in T

    dataset.nodes[hand].fixed = false;

    if (!assistedSolo) {  // free the target node to move
	dataset.nodes[target].fixed = false;
    }
    else if(allNodesFixed(T.to)) { // assistedSolo: free one node if all frozen
	findAndFreeANode(T);
    }

    dataset.nodes[hand].isaHand = false;  // hand is no longer a hand
    if (dataset.bodies[T.from].foot !== undefined) { 
	plantFoot(T.from, dataset.bodies[T.from].foot, false); 
    }

    dataset.nodes[target].isaTarget = false;  // target is no longer a target
    if (dataset.bodies[T.to].foot !== undefined) {
	plantFoot(T.to, dataset.bodies[T.to].foot, false);   // unplant foot
    }

    // reset colors
    targetCircle = nodes.selectAll("circle#c" + target);
    targetCircle.style("fill", function (d) { d3.rgb(d.color); }); // orig color
    handCircle = nodes.selectAll("circle#c" + hand);
    handCircle.style("fill", function (d) { d3.rgb(d.color); }); // orig color

    //console.log("released " + hand + " to " + target);
    force.resume();
}
/////////////////////////////////////////////////
function calcPush(T) {  // returns a movement vector (not a new position)
    var v1, v1n, v2, v2n, dir, dirN, speed = 0.1;

    // random push direction
    /* v1 = [Math.random() - 0.5, Math.random() - 0.5];
    v1n = normVec(v1);
    return scaleVec(v1n, T.speed); */

    // calc vector from pusher body to hand
    v1 = vecTo(bodyCentroid(T.from), getBodyNodePos(T.from, T.hand));
    v1n = normVec(v1);
    //return scaleVec(v1n, T.speed);

    v2 = vecTo(bodyCentroid(T.to), getBodyNodePos(T.to, T.target));
    v2n = normVec(v2);
    dir = addVec(v1, v2);
    dirN = normVec(dir);
    return scaleVec(dirN, T.speed);
}
/////////////////////////////////////////////////
function pushContact(T) {  // given a "Touch"
    var hand = nodeIndex(T.from, T.hand),
        target = nodeIndex(T.to, T.target),
        move;
    //console.log("pushing");

    move = calcPush(T);
    moveNode(hand, move);
    moveNode(target, move);

    if(assistedSolo) { // address prob of getting pushed out of frame
	
	var baseProb = 0.02;
	var maxDist = Math.min(w/2, h/2);
	//var normDistFromCenter = calcDist(bodyCentroid(1), center);
	var normDistFromCenter = calcDist(getBodyPos(1), center);
	var prob = baseProb * (calcDist(bodyCentroid(1), [w/2, h/2]) / maxDist);
	if(Math.random() < prob) {  // small chance, bigger if far from center
	    findAndFreeANode(T);
	}
    }
    force.resume();
}
///////////////////////////////////////////////
function handleTouch(T) {
    /* debug.text(T.actions[0] + " " + nodeIndex(T.from,T.hand) + 
	       " " + nodeIndex(T.to,T.target) + " " +
	       "speed: " + T.speed);  */
    if (T.actions.length > 0) {
        switch(T.actions[0]) {
        case "start" :
            startTouch(T);
            break;
        case "wait" :
            waitTouch(T);
            break;
        case "choose" :
            chooseTouch(T);
            break;
        case "moveClose" :
            moveClose(T);
            break;
        case "reach" :
            reachHand(T);
            break;
        case "push" :
            pushContact(T);
            break;
        default: 
            console.log("huh?");
        }
    }
}
//////////////////////////////////////////////
// separated from tock because multiple foci requires e (force) sent,
// but other tick usage (e.g. drag and resize) does not,
// BUT breaks if they send "force" arg for some reason
// no longer using multiple foci so moot
//function tick(e) {
function tick() {
    var i, from, to; //k
    // Push nodes toward their designated foci
    //          var k = 0.04 * e.alpha;
    //          dataset.nodes.forEach(function (o, i) {
    //              o.x += (dataset.bodies[o.id].x - o.x) * k;
    //              o.y += (dataset.bodies[o.id].y - o.y) * k;
    //          });  // http://bl.ocks.org/mbostock/1021953

    if (dataset.touches !== 'undefined' && dataset.touches.length > 0) {

        //console.log(dataset.touches.length);
        for (i = 0; i < dataset.touches.length; i += 1) {  // handle each touch in world
            if (dataset.touches[i].actions.length > 0) {
                handleTouch(dataset.touches[i]); // do its first action
            }
            else { // no actions left; refill the touch with new info
                from = dataset.touches[i].from;  // copy old "from" body index
                if (assistedSolo) {
                    //to = nBodies - 1;
                    to = 1;  // touching the soloist
                } else {  // pick another dancer to touch
                    to = (from + 1 + Math.floor(Math.random() * 
						(nBodies - 2))) % nBodies;
                }

                dataset.touches[i] = newTouch(from, to);  // add a fresh new touch

		// probably put a "wait" on front of action list
		if(Math.random() < waitChance) { 
		    dataset.touches[i].actions.unshift("wait");
		}
            }
	}
    } 
    
    tock();
}
///////////////////////////////////////////////////////////////////////
function resetNodes(b) {
    // reset nodes so not pushing/hands/etc
    for(var i=0; i<nPnts; i++) {
	var j = (b*nPnts)+i;
	dataset.nodes[j].fixed = false;
	dataset.nodes[j].isaHand = false;
    }
}
///////////////////////////////////////////////////////////////////////
// give assistant all new touches (with "wait" on front)
function resetAssistant(b) {
    //console.log("reset "+b);

    // reset b's touches
    for(var t=0; t < dataset.touches.length; t++) {

	if(dataset.touches[t].from === b) {

	    var target = nodeIndex(dataset.touches[t].to, dataset.touches[t].target);
	    dataset.nodes[target].isaTarget = false;  // target is no longer a target

	    var touch = newTouch(b, 1);
	    touch.actions.unshift("wait");  // put wait on beginning
	    dataset.touches[t] = touch;
	    //console.log("now "+b+" "+t+": "+touch.actions);
	}
    }

    resetNodes(b);

    force.resume();
    
    createResetTimer(b);
}
///////////////////////////////////////////////////////////////////////
function createResetTimer(b) {
    dataset.bodies[b].resetTimer = setTimeout(function () { resetAssistant(b); }, 
				      10000 + (Math.random() * maxResetFrequency));
}
///////////////////////////////////////////////////////////////////////
function initializeAll() {
    initWindowSize();

    if(firstTime) {
	node_drag = d3.behavior.drag()  // http://bl.ocks.org/norrs/2883411
	    .on("dragstart", dragstart)
	    .on("drag", dragmove)
	    .on("dragend", dragend);

	lineFunction = d3.svg.line()  // for spline through verts
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .tension(0.45)
            .interpolate("cardinal-closed"); 
    } 
    else {  // clean up old timers
	for(var t=0; t < dataset.touches.length; t++) {
	    clearTimeout(dataset.touches[t].waitTimer);
	    clearTimeout(dataset.touches[t].pushTimer);
	}
	for (var b = 0; b < nBodies; b += 1) { 
	    clearTimeout(dataset.bodies[b].resetTimer);
	}
	clearTimeout(fadeTimer);
    }

    dataset = generateData();  // uses width/height
    initForce();   // requires dataset

    circleR = eDist / 6;  // size of the node circles, in pixels
    easeDist = 64 * winScale;  // ease in/out when how close (func of screen size)

    if(svg != undefined) { svg.remove(); }  // redo 
    initSVG();

    initializeTouches(maxTouches);  // arg is num touches per body 
    //for(var i=0; i<dataset.touches.length; i++) {
    //      console.log(dataset.touches[i].actions); }

    if(firstTime) { 
	window.onresize = updateWindow; 
	force.on("tick", tick);
	easeFunc = d3.ease("quad-in-out");
	//easeFunc = d3.ease("cubic-in-out");
    }

    easeDist = 64 * winScale;  // ease in/out when how close (func of screen size)

    if(assistedSolo) { 
	fadeOut = true; 
	startFadeTimer(); 
//	startDriftTimer();  // add additional occasional solo motion
    }

    //sound.setAttribute('src', 'womp.wav');


    firstTime = 0;
}

initializeAll();

