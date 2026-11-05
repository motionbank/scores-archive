var scale = 1,
	playbackSpeed = 0.5,
	skeleton = new Object(),
	touches = new Object(),
	userTouches = new Object(),
	anim = undefined,
	numFrames = 0,
	theWorld = new Group();

var frame = 1, // 2919, //
	playing = true,
	imgLoadCnt = 0,
	mouseDown = false,
	mousePoint = undefined,
	pMousePoint = undefined,
	clickFrame = 0,
	unclickFrame = 0;

var transition = 15,
	touchSensitivity = 70;
	
var doShrivel = false;

var activeJoint = undefined,
	pActiveJoint = undefined,
	stringPath = new Path({
							strokeColor: new Color(0, 0, 0, 1),
							strokeWidth: '1',
							strokeCap: 'round',
						});
var unclickAng = 0;

var imgLoaded = function(){ 
	imgLoadCnt += 1; 
	if(imgLoadCnt == Object.keys(imgMap).length) {
		loadRig("data/rig.json");
		loadAnimation("data/SaraAssistedSolo.json");
	}
}

var imgMap = {
	"LeftLeg_loc": false,
	"RightLeg_loc": false,
	"Head_End_loc": false,
	"LeftToeBase_loc": false,
	"RightToeBase_loc": false,
	"LeftForeArm_loc": false,
	"RightForeArm_loc": false, 
	"LeftFoot_loc": false,
	"RightFoot_loc": false,
	"Head_loc": false,
	"Spine_loc": false,
	"RightHand_loc": false,
	"LeftHand_loc" : false,
	"RightHandEnd_loc" : false,
	"LeftHandEnd_loc" : false,
	"touch" : false,
	"userTouch" : false,
};

var touchableJoints = [
	// "LeftToeBase_loc",
	// "RightToeBase_loc",
	"LeftForeArm_loc",
	"RightForeArm_loc", 
	"LeftLeg_loc",
	"RightLeg_loc",
	"LeftFoot_loc",
	"RightFoot_loc",
	"RightHand_loc",
	"LeftHand_loc",
	// "Head_End_loc",
	// "RightHandEnd_loc",
	// "LeftHandEnd_loc",
];

var images = new Object();
for( var i in imgMap ) {
	images[i] = new Raster(i); 
	images[i].visible = false;
	images[i].size *= 0.7*view.size.width/1928;		// the image sizes look good at 70% on a 1928 x 1168 screen, scale them to look good on any screen
	images[i].onLoad = imgLoaded;
}

/*
var UIcomponents = {
	slider: {
					type: 'slider',
					label: '',
					value: 0,
					range: [0, 1],
					step: 1
	}
};

var ui = new Palette('Values', UIcomponents, false);
console.log(ui._components["slider"].range[1]);
ui.onChange = function(component, name, value) {
	if(name == 'slider') {
		frame = value;
	}
}		
*/
		
// var shadow;

function onFrame(event) {
	if(playing) {
		if( typeof(anim) != "undefined" ) {
/*			ui._components["slider"].setRange([0,numFrames-1]); */

			
			oldFrame = frame;
			frame += event.delta*30*playbackSpeed;		// 30 FPS
			frame = frame % numFrames;
			if( frame < oldFrame ) {
				frame += 1;
				theWorld.translate( new Point(-28.4*scale, -3.14*scale) );
				oldFrame = frame;
				clickFrame -= numFrames;	// if user is "assisting" the dancer when the animation loop starts over
				unclickFrame -= numFrames;
			}
			
			orientBones(skeleton, "SaraTweak_loc", frame );
			scaleBones(skeleton, "SaraTweak_loc", frame );
			highlightTouches(skeleton, "SaraTweak_loc", frame );
			showImages(skeleton);
			
			theWorld.translate( new Point( 28.4, 3.14 ) * scale*(frame-oldFrame)/numFrames );
			// if(typeof(shadow) != "undefined") shadow.remove();
			// shadow = theWorld.rasterize(1); //skeleton["SaraTweak_loc"].bone.rasterize();
			// shadow.translate(0,view.element.height*0.35);
			// shadow.scale(1,-0.2);
/*			ui._components["slider"].setValue(frame); */
		}	
		if( typeof(activeJoint) != "undefined" ) {
			stringPath.firstSegment.point = skeleton[activeJoint].bone.firstChild.lastSegment.point;
		}
	}
}

function onResize(event) {
	var canvas = view.element,
		w = canvas.width,
		h = canvas.height,
		ratio = w/h,
		rw = Math.min(w,canvas.height/720*1280),
		rh = Math.min(h,canvas.width/1280*720);
	// if( h/720 >= w/1280 ) 
	// { scale = w*0.0031; }
	// else if( h/144
	// { 
		
	scale = Math.min(rw,rh)*0.0029; //31;
	theWorld.position = new Point(rw,rh) * new Point(0.76, 0.8); 
	if( ratio >= 768/288 ) { 
		scale = h*0.004; 
		theWorld.position = new Point(rw,rh) * new Point(1.2, 0.85); 
	}
	
}
	
function showImages( skeleton ) {
	for( joint in skeleton ) {
		if( typeof(skeleton[joint].bone.children[1]) != "undefined" ) {
			// make sure the bone images are visible
			skeleton[joint].bone.children[1].visible = true;
		}
	}
	
}

function createRig( json ) {
	rig = JSON.parse(json);
	for(var link in rig.links) {
		var bone = rig.links[link],
			parent = rig.nodes[bone.target].name,
			joint = rig.nodes[bone.source].name,
			len = bone.length;
		if(joint.indexOf("ToeBase") != -1)	len *= 2;
		// if no joint in the skeleton exists by this name, create a joint
		if( typeof(skeleton[joint]) == "undefined" ) {
			skeleton[joint] = new Object();
			skeleton[joint].angle = 0;
			skeleton[joint].length = len;
			skeleton[joint].bone = new Group();
			var bonePath = new Path({
										segments: [[0,0], [len*scale,0]],
										strokeColor: new Color(0, 0, 0, 0),
										strokeWidth: '1',
										strokeCap: 'round',
									});
			skeleton[joint].bone.addChild(bonePath);
			if(joint == "Hips_loc" || joint == "SaraTweak_loc" || joint.indexOf("ToeEnd") != -1 ) 
			{ bonePath.strokeColor.alpha = 0; }
			else if(Object.keys(images).indexOf(joint) != -1  && !imgMap[joint]) { 
				//bonePath.strokeColor.alpha = 0;
				boneImg = images[joint]; //img.clone();
				imgMap[parent] = true;
				var actualLen = len*scale/boneImg.size.height;
				if( joint == "Head_End_loc" ) {
					boneImg.size *= 2.5*actualLen; 
					boneImg.translate(len*scale*1.25, 0);
				} else if( parent.indexOf("Hand") != -1 ) { 
					boneImg.size *= 1.5*actualLen; 
					boneImg.translate(len*scale*0.75, 0);
				} else { 
					boneImg.size *= actualLen; 
					boneImg.translate(len*scale*0.5, 0);
				}
				boneImg.rotate(-90);
				//boneImg.visible = true;
				skeleton[joint].bone.addChild(boneImg); 
			}
			
			images["touch"].visible = true;
			touchImg = new PlacedSymbol(images["touch"]);
			images["touch"].visible = false;
			touchImg.opacity = 0; //.visible = false;
			touchImg.scale(Math.min(0.7,0.6*scale));
			touches[joint] = touchImg;
			
			images["userTouch"].visible = true;
			userTouchImg = new PlacedSymbol(images["userTouch"]);
			images["userTouch"].visible = false;
			userTouchImg.opacity = 0; //.visible = false;
			userTouchImg.scale(Math.min(0.8,0.7*scale));
			userTouches[joint] = userTouchImg;
			
			skeleton[joint].parent = parent;
			skeleton[joint].children = [];
		}
	}
	// go through the skeleton once to discover parent names 
	// and add child path to group of parent (PaperJS)
	var root = undefined;
	for(var jointNameA in skeleton) {
		var hasParent = false;
		for(var jointNameB in skeleton) {
			if( skeleton[jointNameA].parent == jointNameB ){ //skeleton[jointNameB].children.indexOf(jointNameA) != -1 ){ 
				skeleton[jointNameB].children.push( jointNameA );
				skeleton[jointNameA].bone.position += skeleton[jointNameB].bone.firstChild.lastSegment.point;
				skeleton[jointNameB].bone.addChild(skeleton[jointNameA].bone);
				hasParent = true;
			}
		}
		// remember the skeleton root
		if(hasParent == false) {
			root = jointNameA;
		}
		console.log( jointNameA, skeleton[jointNameA].parent );
	}
	theWorld.addChild(skeleton[root].bone);
	theWorld.rotate(6);
	onResize();
}

function highlightTouches( skeleton, joint, frame ) {
	if( typeof(skeleton[joint]) != "undefined" && typeof(anim[joint.replace('_loc','_vis')]) != "undefined") {
		if( animValue(joint.replace('_loc','_vis'), frame) ) {
			skeleton[joint].bone.firstChild.strokeWidth = 5;
			if( Object.keys(touches).indexOf(joint) != -1 ) { 
				from = animValue(joint.replace('_loc','_vis'), Math.max(1,frame-2));
				to = animValue(joint.replace('_loc','_vis'), Math.min(numFrames-1,frame+2))
				touches[joint].opacity = ease(from,to,0.5); 
			}
		}
		else {
			skeleton[joint].bone.firstChild.strokeWidth = 1;
			if( Object.keys(touches).indexOf(joint) != -1 ) { touches[joint].opacity = 0; }//.visible = false; }
		}
		if( activeJoint == joint || (frame-unclickFrame <= transition && pActiveJoint == joint) ) {
			if( Object.keys(userTouches).indexOf(joint) != -1 ) { 
				var fadeIn = Math.min(1,(frame-clickFrame)*0.2);
				var fadeOut = (transition-(frame-unclickFrame))/transition;	// fade out as the effects wear off  
				if( fadeIn > 0 ) {
					userTouches[joint].opacity = fadeIn; 
					if( unclickFrame > clickFrame )
					{ userTouches[joint].opacity = fadeOut; }
				}
					
			}
		}
		else {
			if( Object.keys(userTouches).indexOf(joint) != -1 ) { userTouches[joint].opacity = 0; }//.visible = false; }
		}
	}
	for( var c in skeleton[joint].children ) {
		var child = skeleton[joint].children[c];
		highlightTouches( skeleton, child, frame );
	}
}

function orientBones( skeleton, joint, frame ) {
	if( typeof(skeleton[joint]) != "undefined" && typeof(animValue(joint, frame)) != "undefined") {
		var ang = animValue(joint, frame) - skeleton[joint].angle;
		if( typeof(skeleton[joint].parent) != "undefined" ) {
			ang -= animValue(skeleton[joint].parent, frame);
		}
		if(!isNaN(ang)){
			skeleton[joint].bone.rotate( ang, skeleton[joint].bone.firstChild.firstSegment.point );
			if( Object.keys(touches).indexOf(joint) != -1 ) {
				touches[joint].rotate(ang);
			}
			if( Object.keys(userTouches).indexOf(joint) != -1 ) {
				userTouches[joint].rotate(ang);
			}
			var boneVec = skeleton[joint].bone.firstChild.lastSegment.point - skeleton[joint].bone.firstChild.firstSegment.point;
			//skeleton[joint].angle = -180*Math.atan2( boneVec.y, boneVec.x )/Math.PI; //
			skeleton[joint].angle = animValue(joint,frame) - animValue(skeleton[joint].parent, frame); //skeleton[joint].bone.matrix.rotation;// + 360)%360;		
		}
		for( var c in skeleton[joint].children ) {
			var child = skeleton[joint].children[c];
			orientBones( skeleton, child, frame );
		}
	}
}

function scaleBones( skeleton, joint, frame ) {
	if( typeof(skeleton[skeleton[joint].parent]) != "undefined" && typeof(animValue( joint.replace('_loc','_len'), frame ) ) != "undefined") {
		skeleton[joint].bone.position += ( skeleton[skeleton[joint].parent].bone.firstChild.lastSegment.point - skeleton[joint].bone.firstChild.firstSegment.point );
		var boneVec = skeleton[joint].bone.firstChild.lastSegment.point - skeleton[joint].bone.firstChild.firstSegment.point;
		var newEndPoint = skeleton[joint].bone.firstChild.firstSegment.point;
		newEndPoint += boneVec.normalize( animValue(joint.replace('_loc','_len'), frame) * scale );
		if( Object.keys(touches).indexOf(joint) != -1 ) {
			touches[joint].position = newEndPoint; //skeleton[joint].bone.firstChild.lastSegment.point;
		}
		if( Object.keys(userTouches).indexOf(joint) != -1 ) {
			userTouches[joint].position = newEndPoint; //skeleton[joint].bone.firstChild.lastSegment.point;
		}
		var ratio = (newEndPoint-skeleton[joint].bone.firstChild.firstSegment.point).length/boneVec.length;
		if(typeof(skeleton[joint].bone.children[1]) != "undefined") { 
			skeleton[joint].bone.children[1].scale(ratio, skeleton[joint].bone.firstChild.firstSegment.point);
		}
		skeleton[joint].bone.firstChild.lastSegment.point = newEndPoint;
	}
	for( var c in skeleton[joint].children ) {
		var child = skeleton[joint].children[c];
		scaleBones( skeleton, child, frame );
	}
}

function animValue(channel, frame) {
	if( channel.indexOf("vis") == -1 ) {
		var damp = interactionDamping(channel),
			offset = interactionChanges(channel);
		return damp*anim[channel][Math.floor(frame)] + offset;
	}
	else {
		return anim[channel][Math.floor(frame)];
	}
}

function interactionDamping(channel) {
	if( typeof(skeleton[channel]) != "undefined" ) { 
		if( ( typeof(activeJoint) != "undefined"  && ( activeJoint == channel || activeJoint == skeleton[channel].parent ) ) ||
			( typeof(pActiveJoint) != "undefined" && frame-unclickFrame <= transition && ( pActiveJoint == channel || pActiveJoint == skeleton[channel].parent ) ) ) {
			return 0.0;
		}
	}
	return 1.0;
}
var thrown = 0;
function interactionChanges(channel) {
	var interp = 0,
		fromAngle = 0,
		targetAngle = 0;
		
	if(mouseDown) {	// transition to pulled state
		interp = Math.min(1,(frame-clickFrame)/transition);
		
		// if activeJoint is the parent of this joint, point this joint down (pseudo-gravity)
		if( typeof(skeleton[channel]) != "undefined" && activeJoint == skeleton[channel].parent ) { 
			fromAngle = anim[channel][Math.floor(clickFrame)];
			targetAngle = 90;
		}
		// if this is the active joint, point towards the mouse
		if( activeJoint == channel) {		
			var jointPoint = skeleton[channel].bone.firstChild.firstSegment.point;
			var interactVec = new Point( mousePoint.x-jointPoint.x, mousePoint.y-jointPoint.y );
			if(thrown > 1) { interactVec *= thrown; }
			var targetAngle = 180*Math.atan2( interactVec.y, interactVec.x )/Math.PI;
			var boneVec = skeleton[channel].bone.firstChild.lastSegment.point - skeleton[channel].bone.firstChild.firstSegment.point;
			var fromAngle = anim[channel][Math.floor(clickFrame)];
			unclickAng = targetAngle;
		}
		// if( targetAngle-fromAngle > 180 ) { targetAngle -= 360; }
		// if( targetAngle-fromAngle < -180 ) { targetAngle += 360; }
		// return ease( fromAngle, targetAngle, interp);
	} else if (frame-unclickFrame <= transition ) {	// transition back to situation normal
		if( !shrivel ) {
			interp = Math.min(1, (frame-unclickFrame)/(transition-thrown*0.875)-thrown*0.125);
			// if activeJoint is the parent of this joint, point this joint down (pseudo-gravity)
			if( typeof(skeleton[channel]) != "undefined" && pActiveJoint == skeleton[channel].parent ) { 
				fromAngle = 90;
				targetAngle = anim[channel][Math.floor(unclickFrame+transition)];
			}
			// if this is the active joint, point towards the mouse
			if( pActiveJoint == channel) {		
				 var jointPoint = skeleton[channel].bone.firstChild.firstSegment.point.clone(),
					 endPoint = skeleton[channel].bone.firstChild.lastSegment.point.clone(),
					 fromAngle = unclickAng; 
					 // = 180*Math.atan2( endPoint.y-jointPoint.y, endPoint.x-jointPoint.x )/Math.PI; //pMousePoint.y-jointPoint.y, pMousePoint.x-jointPoint.x )/Math.PI, //
					 targetAngle = anim[channel][Math.floor(frame)];
			}
			// if( targetAngle-fromAngle > 180 ) { targetAngle -= 360; }
			// if( targetAngle-fromAngle < -180 ) { targetAngle += 360; }
			// return ease( fromAngle, targetAngle, interp);
		} else {
			interp = 2*Math.min(1,(frame-unclickFrame)/transition);
			sign = 1;
			shrivelStrength = 30;
			if( channel.indexOf("R") == 0 ) { sign *= -1; }
			if( pActiveJoint == channel) {
				fromAngle = anim[channel][Math.floor(frame)];
				targetAngle = anim[channel][Math.floor(frame)] +sign*shrivelStrength*2; //*sinT ;
			}
			else if( typeof(skeleton[channel]) != "undefined" && skeleton[channel].children.indexOf(pActiveJoint) != -1 ) {
				//sinT = 0.5*Math.sin((interp+0.5)*Math.PI)+0.5;
				fromAngle = anim[channel][Math.floor(frame)] -90;
				targetAngle = anim[channel][Math.floor(frame)] -90 -sign*shrivelStrength ;//*sinT -150;
			}
			// if( targetAngle-fromAngle > 180 ) { fromAngle -= 360; }
			// if( targetAngle-fromAngle < -180 ) { fromAngle += 360; }
			// return ease( fromAngle, targetAngle, interp);
		}
	}
	if( targetAngle-fromAngle > 180 ) { targetAngle -= 360; }
	if( targetAngle-fromAngle < -180 ) { targetAngle += 360; }
	return ease( fromAngle, targetAngle, interp);
	return 0;
}

function lerp( from, to, t ) {
	return t*to +(1 - t)*from ;
}

function ease(from, to, t) {
	//t = Math.min(1, Math.max(0, t) );
	tt = t*Math.PI - Math.PI*0.5;
	return (0.5*Math.sin(tt) + 0.5)*(to-from) + from;
}

function closestJoint(event) {
	var dist = touchSensitivity,				// find joints within a radius (pixels)
		closest = undefined;
	for( joint in skeleton ) {
		console.log(joint); 
		var dist2mouse = skeleton[joint].bone.firstChild.lastSegment.point.getDistance( event.point );
		if( dist2mouse < dist && touchableJoints.indexOf(joint) != -1 ) {
			dist = dist2mouse;
			closest = joint;
		}
	}
	return closest;
}

function onMouseDown(event) {
	mouseDown = true;
	shrivel = false;
	thrown = 0;
	mousePoint = event.point;
	clickFrame = frame;
	activeJoint = closestJoint(event);
	console.log("closest", activeJoint);
	if( typeof(activeJoint) != "undefined" ){
		stringPath.add(event.point);
		stringPath.add(event.point);
	}
}

var shrivel = false;

function onMouseUp(event) {
	if(event.delta.length > transition)
	{ thrown = Math.min(4,0.04*event.delta.length/(Math.max(1,frame-clickFrame))); console.log("thrown", thrown); }
	else if( doShrivel && (frame - clickFrame) < 7 )
	{ shrivel = true; console.log(" SHRIVEL "); }
	mouseDown = false;
	letGoOfTheString();
}

function onMouseDrag(event) {
	mousePoint = event.point;
	console.log(event.delta.length);
	if( typeof(activeJoint) != "undefined" && event.delta.length < transition ){
		stringPath.lastSegment.point = event.point;
	}
}

function letGoOfTheString() {
	pMousePoint = mousePoint;
	mousePoint = undefined;
	unclickFrame = frame;
	pActiveJoint = activeJoint;
	activeJoint = undefined;
	stringPath.removeSegments();
}

function onKeyDown(event) {
	console.log(event.key, event.key == 'up', event.key == 'down');
	if (event.key == 'up') {
		playbackSpeed *= 2;
	}
	if (event.key == 'down') {
		playbackSpeed *= 0.5;
	}
	playbackSpeed = Math.min(Math.max(0.25,playbackSpeed),8);
	console.log("Speed: ", playbackSpeed);
	
}

function storeAnimation( json ) {
	animData = JSON.parse(json);
	anim = new Object();
	for( var obj in animData ) { anim[ animData[obj].channel ] = animData[obj].values; }
	numFrames = animData[0].values.length-1;
}
	
function loadRig( jsonFile ) {
	return readText( jsonFile, createRig );
}

function loadAnimation( jsonFile ) {
	return readText( jsonFile, storeAnimation );
}

function readText(file,handler) {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			handler(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET",file,true);
	xmlhttp.send();
}