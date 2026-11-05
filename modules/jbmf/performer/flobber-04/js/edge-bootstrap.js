
AdobeEdge.bootstrapCallback(function(compId){

	var debug = false;

	var comp = AdobeEdge.getComposition(compId);
	var stage = comp.getStage();

	var getPointFor = function ( $el, x, y ) {
		var or1 = App.cssTransformOrigin( $el );
		var mt1 = App.cssTransformMatrix( $el );
		var pt1 = App.transformPoint( or1, mt1, x, y );
		return App.localToGlobal( $el, pt1.x, pt1.y );
	}

	var rndColors = (function(){
		var cols = [];
		for ( var i = 0; i < (64 * 48); i++ ) {
			var c = '#'+parseInt( 1000 + 3000 * Math.random() ).toString(16).slice(0,6);
			cols.push( c );
		}
		return cols;
	})();

	var init = function () {

		var $canvas = $('<canvas></canvas>').appendTo(stage.$('CanvasContainer'));
		var fabricCanvas = new fabric.Canvas($canvas.get(0));
		fabricCanvas.setDimensions({
			width: 600, height: 600
		});
		
		if ( !debug ) {
			$('.hip_element').hide();
		}

		var body = stage.getSymbol('Body');
		var armLeft = body.getSymbol('ArmLeft');
		var armRight = body.getSymbol('ArmRight');

		var joints = [
			[body, 'HipElement'],
			[body, 'SpineElement'],
			[body, 'ShouldersElement'],
			[body, 'HeadElement'],

			[armRight, 'ShoulderElement', 'Right'],
			[armRight, 'EllbowElement', 'Right'],
			[armRight, 'WristElement', 'Right'],

			[armLeft, 'ShoulderElement', 'Left'],
			[armLeft, 'EllbowElement', 'Left'],
			[armLeft, 'WristElement', 'Left'], // 9

			[body, 'RightPelvisElement', ''], // 10
			[body, 'RightKneeElement', ''],
			[body, 'RightAnkleElement', ''], // 12

			[body, 'LeftPelvisElement', ''], // 13
			[body, 'LeftKneeElement', ''],
			[body, 'LeftAnkleElement', ''] // 15
		];
		var jointIds = {};

		var edge_bindings = [];
		var network = new ShapeNetwork();
		var connections = [];

		$.each(joints,function(i,j){
			var $el = j[0].$(j[1]);
			var id = j[1] + ( j[2] || '' );

			var c = network.addNode( 0, 0 );
			if (debug) fabricCanvas.add(c);

			var nid = network.totalNodes()-1;
			jointIds[id] = nid;

			var eb = new EdgeBinding( $el, network, nid );
			eb.update();
			edge_bindings.push(eb);
		});

		var skinIds = {};
		var addSkinNode = function (j, x, y, n) {
			var $el = j[0].$( j[1] );
			var id = j[1] + ( j[2] || '' );

			var p = getPointFor( $el, 5, 5 );
			var c = network.addNode( p.x+x, p.y+y, 0 );
			if (debug) fabricCanvas.add(c);

			var nid = network.totalNodes()-1;
			var l = network.connectNodes(nid,jointIds[id], 1);
			if (debug) fabricCanvas.add(l);

			skinIds[n] = nid;

			return nid;
		}

		var connectSkinNode = function ( sid, oid, st ) {
			var l = network.connectNodes( sid, oid, st );
			if (debug) fabricCanvas.add(l);
		}

		addSkinNode( joints[0], -45, -10, 'HipRight' );

		addSkinNode( joints[1], -45, 0, 'SpineRight' ); // 3 Spine

		addSkinNode( joints[2], -45, 25, 'ShouldersRightLow' );

		addSkinNode( joints[4], 0, 35, 'ArmRightShoulderLow' ); // 5 Arm right (character point of view)
		addSkinNode( joints[5], 0, 35, 'ArmRightEllbowLow' );
		
		addSkinNode( joints[6], 0, 35, 'ArmRightWristLow' ); // 7 Arm right wrist
		addSkinNode( joints[6], -35, 0, 'ArmRightWrist' );
		addSkinNode( joints[6], 0, -35, 'ArmRightWristHigh' );
		
		addSkinNode( joints[5], 0, -35, 'ArmRightEllbowHigh' );
		addSkinNode( joints[4], 0, -35, 'ArmRightShoulderHigh' );

		addSkinNode( joints[2], -35, -35, 'ShouldersRightHigh' ); // 12 Neck

		addSkinNode( joints[3], -35, -10, 'HeadRight' ); // 13 Head
		addSkinNode( joints[3], 0, -35, 'HeadTop' );
		addSkinNode( joints[3], 35, -10, 'HeadLeft' );

		addSkinNode( joints[2], 35, -35, 'ShouldersLeftHigh' );

		addSkinNode( joints[7], 0, -35, 'ArmLeftShoulderHigh' ); // 17 Arm left
		addSkinNode( joints[8], 0, -35, 'ArmLeftEllbowHigh' );

		addSkinNode( joints[9], 0, -35, 'ArmLeftWristHigh' ); // 19 Wrist
		addSkinNode( joints[9], 35, 0, 'ArmLeftWrist' );
		addSkinNode( joints[9], 0, 35, 'ArmLeftWristLow' );

		addSkinNode( joints[8], 0, 35, 'ArmLeftEllbowLow' );
		addSkinNode( joints[7], 0, 35, 'ArmLeftShoulderLow' );

		addSkinNode( joints[2], 45, 25, 'ShouldersLeftLow' ); // 24 Neck again

		addSkinNode( joints[1], 45, 0, 'SpineLeft' );

		addSkinNode( joints[0], 45, -10, 'HipLeft' ); // 0 Hip right

		addSkinNode( joints[13], 10, -30, 'LegLeftHipHigh' ); // 26
		addSkinNode( joints[13], 15, 0, 'LegLeftHipLeft' );

		addSkinNode( joints[14], 20, 0, 'LegLeftKneeLeft' ); // 29 Knee left

		addSkinNode( joints[15], 20, 0, 'LegLeftAnkleLeft' );
		addSkinNode( joints[15], 	5, 5, 'LegLeftAnkleLow' );
		addSkinNode( joints[15], -20, 0, 'LegLeftAnkleRight' );

		addSkinNode( joints[14], -25, 0, 'LegLeftKneeRight' );

		addSkinNode( joints[13], -30, 20, 'LegLeftHipRight' );

		addSkinNode( joints[0], 0, 40, 'HipLow' );

		addSkinNode( joints[10], 30, 20, 'LegRightHipLeft' ); // 33 Hip right

		addSkinNode( joints[11], 25, 0, 'LegRightKneeLeft' ); // 34 Knee right

		addSkinNode( joints[12], 20, 0, 'LegRightAnkleLeft' );
		addSkinNode( joints[12], -5, 5, 'LegRightAnkleLow' );
		addSkinNode( joints[12], -20, 0, 'LegRightAnkleRight' );

		addSkinNode( joints[11], -20, 0, 'LegRightKneeRight' );

		addSkinNode( joints[10], -15, 0, 'LegRightHipRight' );
		addSkinNode( joints[10], -10, -30, 'LegRightHipHigh' );

		var prevSkinNodeKey = 'LegRightHipHigh';
		$.each(skinIds,function(k,v){
			connectSkinNode( v, skinIds[prevSkinNodeKey], 1 );
			prevSkinNodeKey = k;
		});

		var st = 0.2;
		var conns = [
			['HipLeft', 			'HipRight', 			st],
			['HipLeft', 			'SpineRight', 			st],
			['HipRight', 			'SpineLeft', 			st],
			['SpineRight', 			'ShouldersLeftLow', 	st],
			['ShouldersRightLow', 	'ShouldersLeftLow', 	st],
			['ShouldersRightLow', 	'SpineLeft', 			st],
			['ShouldersRightLow', 	'ShouldersRightHigh',	st],
			['ShouldersRightLow', 	'ArmRightShoulderHigh', st],
			['ArmRightShoulderLow', 'ShouldersRightHigh', 	st],
			['ArmRightShoulderLow',	'ArmRightEllbowHigh', 	st],
			['ArmRightEllbowLow', 	'ArmRightShoulderHigh', st],
			['ArmRightEllbowLow', 	'ArmRightWristHigh', 	st],
			['ArmRightWristLow', 	'ArmRightEllbowHigh', 	st],
			['ArmRightWristLow', 	'ArmRightWristHigh', 	st],
			['ArmRightWrist', 		'ArmRightEllbowLow', 	st],
			['ArmRightWrist', 		'ArmRightEllbowHigh', 	st],
			['ShouldersRightHigh', 	'ShouldersLeftHigh', 	st],
			['ShouldersRightHigh', 	'HeadLeft', 			st],
			['HeadRight', 			'ShouldersLeftHigh', 	st],
			['HeadRight', 			'HeadLeft', 			st],
			['HeadTop', 			'ShouldersRightHigh', 	st],
			['HeadTop', 			'ShouldersLeftHigh', 	st],
			['ShouldersLeftHigh', 	'ShouldersLeftLow', 	st],
			['ShouldersLeftHigh', 	'ArmLeftShoulderLow', 	st],
			['ArmLeftShoulderHigh',	'ShouldersLeftLow', 	st],
			['ArmLeftShoulderHigh',	'ArmLeftEllbowLow', 	st],
			['ArmLeftEllbowHigh', 	'ArmLeftShoulderLow', 	st],
			['ArmLeftEllbowHigh', 	'ArmLeftWristLow', 		st],
			['ArmLeftWristHigh', 	'ArmLeftEllbowLow', 	st],
			['ArmLeftWristHigh', 	'ArmLeftWristLow', 		st],
			['ArmLeftWrist', 		'ArmLeftEllbowHigh', 	st],
			['ArmLeftWrist', 		'ArmLeftEllbowLow', 	st],
			['HipLeft', 			'HipLow', 				st],
			['HipLeft', 			'LegLeftHipRight', 		st],
			['LegLeftHipHigh', 		'LegLeftHipRight', 		st],
			['LegLeftHipHigh', 		'HipLow', 				st],
			['HipLeft', 			'LegLeftHipLeft', 		st],
			['LegLeftHipLeft', 		'LegLeftKneeRight', 	st],
			['LegLeftKneeLeft', 	'LegLeftHipRight', 		st],
			['LegLeftKneeLeft', 	'LegLeftHipHigh', 		st],
			['LegLeftKneeLeft', 	'LegLeftKneeRight', 	st],
			['LegLeftKneeRight', 	'LegLeftAnkleLeft', 	st],
			['LegLeftKneeLeft', 	'LegLeftAnkleRight', 	st],
			['LegLeftAnkleLeft', 	'LegLeftAnkleRight', 	st],
			['LegLeftKneeLeft', 	'LegLeftAnkleLow', 		st],
			['LegLeftKneeRight', 	'LegLeftAnkleLow', 		st],
			['HipRight', 			'HipLow', 				st],
			['HipRight', 			'LegRightHipRight', 	st],
			['LegRightHipHigh', 	'LegRightHipLeft', 		st],
			['LegRightHipHigh', 	'HipLow', 				st],
			['HipRight', 			'LegRightHipLeft', 		st],
			['LegRightHipLeft', 	'LegRightKneeRight', 	st],
			['LegRightKneeLeft', 	'LegRightHipRight', 	st],
			['LegRightKneeRight', 	'LegRightHipHigh', 		st],
			['LegRightKneeLeft', 	'LegRightKneeRight', 	st],
			['LegRightKneeRight', 	'LegRightAnkleLeft', 	st],
			['LegRightKneeLeft', 	'LegRightAnkleRight', 	st],
			['LegRightAnkleLeft', 	'LegRightAnkleRight', 	st],
			['LegRightKneeLeft', 	'LegRightAnkleLow', 	st],
			['LegRightKneeRight', 	'LegRightAnkleLow', 	st],
		];

		$.each(conns,function(i,c){
			connectSkinNode( skinIds[c[0]], skinIds[c[1]], c[2] );
		});

		if ( debug ) {
			var theCurve = network.getCurve(0, {
				fill : 'none',
				stroke : 'green',
				strokeWidth : 3
			});
			fabricCanvas.add( theCurve );
		}
		var curvePoints = network.getCurvePoints();

		var triangles = [];

		AdobeEdge.Symbol.bindTimelineAction( 
			compId, 'stage', 'Default Timeline', 'update', 
			function (stage, e) {

			$.each(edge_bindings,function(i,c){
				c.update();
			});

			network.update();

			var nodes = network.getNodes(), points = [];
			$.each(nodes,function(i,n){
				points.push({x:n[0],y:n[1]});
			});
			var tris = triangulate(points);

			var curvePoints = network.getCurvePoints();

			$.each(tris,function(i,t){
				if ( !triangles[i] ) {
					triangles[i] = new fabric.Path('M-100,-100',{
						stroke : 'none',
						strokeWidth : '1',
						strokeLineJoin : 'round',
						fill : 'none'
					});
					triangles[i].lineTo( -100, -100 );
					triangles[i].lineTo( -100, -100 );
					triangles[i].close();
					if ( !debug ) fabricCanvas.add( triangles[i] );
				}
				var tx = (t.a.x + t.b.x + t.c.x) / 3,
					ty = (t.a.y + t.b.y + t.c.y) / 3;
				if ( pointInPoly( curvePoints, tx, ty ) ) {
					triangles[i].stroke = triangles[i].fill = rndColors[
						parseInt( ((t.a.x + t.b.x + t.c.x) / 3) / 90 ) +  
						parseInt( ((t.a.y + t.b.y + t.c.y) / 3) / 170 ) * 48
					];
					triangles[i].stroke = 'black';
					// triangles[i].strokeWidth = 
					// 	15 - parseInt( ((t.a.y + t.b.y + t.c.y) / 3) / 25 );

					triangles[i].path[0][1] = t.a.x;
					triangles[i].path[0][2] = t.a.y;

					triangles[i].path[1][1] = t.b.x;
					triangles[i].path[1][2] = t.b.y;

					triangles[i].path[2][1] = t.c.x;
					triangles[i].path[2][2] = t.c.y;
				}
			});

			fabricCanvas.renderAll();

			$.each(triangles,function(i,t){
				t.stroke = t.fill = 'none';
				t.path[0][1] = t.path[0][2] =
				t.path[1][1] = t.path[1][2] =
				t.path[2][1] = t.path[2][2] = -100;
			});
		});

		// http://stackoverflow.com/a/2922778
		var pointInPoly = function ( verts, x, y )
		{
			var i, j, c = false;
			for ( i = 0, k = verts.length, j = k-1; i < k; j = i++ ) {
				if ( ( (verts[i].y > y) != (verts[j].y > y) ) && 
					 ( x < (verts[j].x-verts[i].x) * (y-verts[i].y) / (verts[j].y-verts[i].y) + verts[i].x) )
					c = !c;
			}
			return c;
		}

		// $(stage.element).click(function(e){
		// 	console.log( e.clientX, e.clientY, 
		// 		pointInPoly( curvePoints, e.clientX, e.clientY ) );
		// });

		if ( !debug ) {
			window.messaging = {
				'>>ping' : function (req, res) {
					dance();
				}
			}
		} else {
			var timeoutFn = function(){
				dance();
				clearTimeout(timeoutId);
				timeoutId = setTimeout(timeoutFn,250+Math.random()*500);
			};
			var timeoutId = setTimeout(timeoutFn,0);
		}

		var dance = function () {
			if ( !armLeft.isPlaying() ) {
				armLeft.play();
			} 
			// else if ( Math.random() > 0.5 ) {
			// 	armLeft.stop();
			// }
			if ( !armRight.isPlaying() ) {
				armRight.play();				
			} 
			// else if ( Math.random() > 0.5 ) {
			// 	armRight.stop();
			// }
			if ( !body.isPlaying() && Math.random() > 0.75 ) {
				body.play();
			} else {
				body.stop();
			}
		}

		stage.play(0);
	}

	yepnope({
		nope:[
			'js/fabric.js-1.3.0/all.min.js',
			'js/fabric-path-utils.js',
			'js/sylvester.js',
			'js/css-transform-utils.js',
			'js/delaunay.js',
			'js/net.js'
		],
		complete: init
	});

	var EdgeBinding = (function(){
		var _EdgeBinding = function ( $el, net, nid ){
			this.$element = $el;
			this.network = net;
			this.node_id = nid;
		};
		_EdgeBinding.prototype.update = function () {
			var p = getPointFor( this.$element, 5, 5 );
			this.network.setNode( this.node_id, p.x, p.y );
		};
		return _EdgeBinding;
	})();
});