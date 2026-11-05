
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

	var init = function () {

		var $canvas = $('<canvas></canvas>').appendTo(stage.$('CanvasContainer'));
		var fabricCanvas = new fabric.Canvas($canvas.get(0));
		fabricCanvas.setDimensions({
			width: 600, height: 600
		});

		var body = stage.getSymbol('Body');
		var armLeft = body.getSymbol('ArmLeft');
		var armRight = body.getSymbol('ArmRight');
		var legLeft = body.getSymbol('LegLeft');
		var legRight = body.getSymbol('LegRight');

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

			[legRight, 'PelvisElement', 'Right'],
			[legRight, 'KneeElement', 'Right'],

			[legLeft, 'PelvisElement', 'Left'],
			[legLeft, 'KneeElement', 'Left']
		];
		var jointIds = {};

		var edge_bindings = [];
		var network = new ShapeNetwork();
		var connections = [];

		$.each(joints,function(i,j){
			var $el = j[0].$(j[1]);
			var id = j[1] + ( j[2] || '' );

			var c = network.addNode( 0, 0, false );
			if (debug) fabricCanvas.add(c);

			var nid = network.totalNodes()-1;
			jointIds[id] = nid;

			var eb = new EdgeBinding( $el, network, nid );
			eb.update();
			edge_bindings.push(eb);
		});

		var skinIds = {};
		var addSkinNode = function (j, x, y, n) {
			var $el = j[0].$(j[1]);
			var id = j[1] + ( j[2] || '' );

			var p = getPointFor( $el, 5, 5 );
			var c = network.addNode( p.x+x, p.y+y, true );
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

		addSkinNode( joints[0], -45, 0, 'HipRight' );

		addSkinNode( joints[1], -45, 0, 'SpineRight' ); // 3 Spine

		addSkinNode( joints[2], -45, 25, 'ShouldersRightLow' );

		addSkinNode( joints[4], 0, 25, 'ArmRightShoulderLow' ); // 5 Arm right (character point of view)
		addSkinNode( joints[5], 0, 25, 'ArmRightEllbowLow' );
		
		addSkinNode( joints[6], 0, 25, 'ArmRightWristLow' ); // 7 Arm right wrist
		addSkinNode( joints[6], -25, 0, 'ArmRightWrist' );
		addSkinNode( joints[6], 0, -25, 'ArmRightWristHigh' );
		
		addSkinNode( joints[5], 0, -25, 'ArmRightEllbowHigh' );
		addSkinNode( joints[4], 0, -25, 'ArmRightShoulderHigh' );

		addSkinNode( joints[2], -35, -35, 'ShouldersRightHigh' ); // 12 Neck

		addSkinNode( joints[3], -35, 0, 'HeadRight' ); // 13 Head
		addSkinNode( joints[3], 0, -35, 'HeadTop' );
		addSkinNode( joints[3], 35, 0, 'HeadLeft' );

		addSkinNode( joints[2], 35, -35, 'ShouldersLeftHigh' );

		addSkinNode( joints[7], 0, -25, 'ArmLeftShoulderHigh' ); // 17 Arm left
		addSkinNode( joints[8], 0, -25, 'ArmLeftEllbowHigh' );

		addSkinNode( joints[9], 0, -25, 'ArmLeftWristHigh' ); // 19 Wrist
		addSkinNode( joints[9], 25, 0, 'ArmLeftWrist' );
		addSkinNode( joints[9], 0, 25, 'ArmLeftWristLow' );

		addSkinNode( joints[8], 0, 25, 'ArmLeftEllbowLow' );
		addSkinNode( joints[7], 0, 25, 'ArmLeftShoulderLow' );

		addSkinNode( joints[2], 45, 25, 'ShouldersLeftLow' ); // 24 Neck again

		addSkinNode( joints[1], 45, 0, 'SpineLeft' );

		addSkinNode( joints[0], 45, 0, 'HipLeft' ); // 0 Hip right

		addSkinNode( joints[10], 0, -35, 'LegLeftHipHigh' ); // 26
		addSkinNode( joints[10], 15, 0, 'LegLeftHipLeft' );

		addSkinNode( joints[11], 25, 0, 'LegLeftKneeLeft' ); // 29 Knee left
		addSkinNode( joints[11], 0, 25, 'LegLeftKneeLow' );
		addSkinNode( joints[11], -25, 0, 'LegLeftKneeRight' );

		addSkinNode( joints[10], -25, 0, 'LegLeftHipRight' );

		addSkinNode( joints[0], 0, 20, 'HipLow' );

		addSkinNode( joints[12], 25, 0, 'LegRightHipLeft' ); // 33 Hip right

		addSkinNode( joints[13], 25, 0, 'LegRightKneeLeft' ); // 34 Knee right
		addSkinNode( joints[13], 0, 25, 'LegRightKneeLow' );
		addSkinNode( joints[13], -25, 0, 'LegRightKneeRight' );

		addSkinNode( joints[12], -15, 0, 'LegRightHipRight' );
		addSkinNode( joints[12], 0, -35, 'LegRightHipHigh' );

		var prevSkinNodeKey = 'LegRightHipHigh';
		$.each(skinIds,function(k,v){
			connectSkinNode( v, skinIds[prevSkinNodeKey], 1 );
			prevSkinNodeKey = k;
		});

		var st = 1;
		var conns = [
			[skinIds['HipLeft'], 		skinIds['HipRight'], st],
			[skinIds['HipLeft'], 		skinIds['SpineRight'], st],
			// [skinIds['HipLow'],			skinIds['SpineLeft'], st],
			// [skinIds['HipLow'],			skinIds['SpineRight'], st],
			[skinIds['HipRight'], 		skinIds['SpineLeft'], st],
			[skinIds['SpineRight'], 	skinIds['ShouldersLeftLow'], st],
			[skinIds['ShouldersRightLow'], skinIds['ShouldersLeftLow'], st],
			[skinIds['ShouldersRightLow'], skinIds['SpineLeft'], st],
			[skinIds['ShouldersRightLow'], skinIds['ShouldersRightHigh'], st],
			[skinIds['ShouldersRightLow'], skinIds['ArmRightShoulderHigh'], st],
			[skinIds['ArmRightShoulderLow'], skinIds['ShouldersRightHigh'], st],
			[skinIds['ArmRightShoulderLow'], skinIds['ArmRightEllbowHigh'], st],
			[skinIds['ArmRightEllbowLow'], skinIds['ArmRightShoulderHigh'], st],
			[skinIds['ArmRightEllbowLow'], skinIds['ArmRightWristHigh'], st],
			[skinIds['ArmRightWristLow'], skinIds['ArmRightEllbowHigh'], st],
			[skinIds['ArmRightWristLow'], skinIds['ArmRightWristHigh'], st],
			[skinIds['ArmRightWrist'], skinIds['ArmRightEllbowLow'], st],
			[skinIds['ArmRightWrist'], skinIds['ArmRightEllbowHigh'], st],
			[skinIds['ShouldersRightHigh'], skinIds['ShouldersLeftHigh'], st],
			[skinIds['ShouldersRightHigh'], skinIds['HeadLeft'], st],
			[skinIds['HeadRight'], skinIds['ShouldersLeftHigh'], st],
			[skinIds['HeadRight'], skinIds['HeadLeft'], st],
			[skinIds['HeadTop'], skinIds['ShouldersRightHigh'], st],
			[skinIds['HeadTop'], skinIds['ShouldersLeftHigh'], st],
			[skinIds['ShouldersLeftHigh'], skinIds['ShouldersLeftLow'], st],
			[skinIds['ShouldersLeftHigh'], skinIds['ArmLeftShoulderLow'], st],
			[skinIds['ArmLeftShoulderHigh'], skinIds['ShouldersLeftLow'], st],
			[skinIds['ArmLeftShoulderHigh'], skinIds['ArmLeftEllbowLow'], st],
			[skinIds['ArmLeftEllbowHigh'], skinIds['ArmLeftShoulderLow'], st],
			[skinIds['ArmLeftEllbowHigh'], skinIds['ArmLeftWristLow'], st],
			[skinIds['ArmLeftWristHigh'], skinIds['ArmLeftEllbowLow'], st],
			[skinIds['ArmLeftWristHigh'], skinIds['ArmLeftWristLow'], st],
			[skinIds['ArmLeftWrist'], skinIds['ArmLeftEllbowHigh'], st],
			[skinIds['ArmLeftWrist'], skinIds['ArmLeftEllbowLow'], st],

			[skinIds['HipLeft'], skinIds['HipLow'], st],
			[skinIds['HipLeft'], skinIds['LegLeftHipRight'], st],
			[skinIds['LegLeftHipHigh'], skinIds['LegLeftHipRight'], st],
			[skinIds['LegLeftHipHigh'], skinIds['HipLow'], st],
			[skinIds['HipLeft'], skinIds['LegLeftHipLeft'], st],
			[skinIds['LegLeftHipLeft'], skinIds['LegLeftKneeRight'], st],
			[skinIds['LegLeftKneeLeft'], skinIds['LegLeftHipRight'], st],
			[skinIds['LegLeftKneeLeft'], skinIds['LegLeftHipHigh'], st],
			[skinIds['LegLeftKneeLeft'], skinIds['LegLeftKneeRight'], st],
			[skinIds['LegLeftKneeLow'], skinIds['LegLeftHipRight'], st],
			[skinIds['LegLeftKneeLow'], skinIds['LegLeftHipLeft'], st],
			[skinIds['HipRight'], skinIds['HipLow'], st],
			[skinIds['HipRight'], skinIds['LegRightHipRight'], st],
			[skinIds['LegRightHipHigh'], skinIds['LegRightHipLeft'], st],
			[skinIds['LegRightHipHigh'], skinIds['HipLow'], st],
			[skinIds['HipRight'], skinIds['LegRightHipLeft'], st],
			[skinIds['LegRightHipLeft'], skinIds['LegRightKneeRight'], st],
			[skinIds['LegRightKneeLeft'], skinIds['LegRightHipRight'], st],
			[skinIds['LegRightKneeRight'], skinIds['LegRightHipHigh'], st],
			[skinIds['LegRightKneeLeft'], skinIds['LegRightKneeRight'], st],
			[skinIds['LegRightKneeLow'], skinIds['LegRightHipRight'], st],
			[skinIds['LegRightKneeLow'], skinIds['LegRightHipLeft'], st],
		];

		$.each(conns,function(i,c){
			connectSkinNode( c[0], c[1], c[2] );
		});

		fabricCanvas.add( network.getCurve({
			//fill : 'rgba(0,0,0,'+(debug?0.1:1)+')',
			fill : 'none',
			stroke : '#e84526',
			strokeWidth : debug ? 1 : 10
		}));


		if ( !debug ) {
			$('.hip_element').hide();
		}

		AdobeEdge.Symbol.bindTimelineAction( compId, 'stage', 'Default Timeline', 'update', function (stage, e) {

			$.each(edge_bindings,function(i,c){
				c.update();
			});

			network.update();

			fabricCanvas.renderAll();
		});

		$(stage.element).click(function( e ){
			network.pullNode( 0, e.offsetX, e.offsetY, 0.5 );
		});
	}

	yepnope({
		nope:[
			'js/fabric.js-1.3.0/all.min.js',
			'js/fabric-path-utils.js',
			'js/sylvester.js',
			'js/css-transform-utils.js',
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