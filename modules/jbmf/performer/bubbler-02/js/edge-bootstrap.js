
AdobeEdge.bootstrapCallback(function(compId){

	var debug = false;

	var locpars = new LocationParams();

	var waitfor = locpars.waitfor || 0, waited = 0;

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
			width: 900, height: 600
		});
		
		if ( !debug ) {
			$('.hip_element').hide();
		}

		var body = stage.getSymbol('Body');
		var armLeft = body.getSymbol('ArmLeft');
		var armRight = body.getSymbol('ArmRight');

		var joints = [
			[body, 	   'HipElement'],
			[body,     'SpineElement'],
			[body,     'ShouldersElement'],
			[body,     'HeadElement'],

			[armRight, 'ShoulderElement', 'Right'], // root symbol, symbol, element-ext
			[armRight, 'EllbowElement', 'Right'],
			[armRight, 'WristElement', 'Right'],

			[armLeft,  'ShoulderElement', 'Left'],
			[armLeft,  'EllbowElement', 'Left'],
			[armLeft,  'WristElement', 'Left'],

			[body,     'RightPelvisElement'],
			[body,     'RightKneeElement'],
			[body,     'RightAnkleElement'],

			[body,     'LeftPelvisElement'],
			[body,     'LeftKneeElement'],
			[body,     'LeftAnkleElement']
		];
		var jointIds = {};

		var edge_bindings = [];
		var network = new ShapeNetwork();

		$.each(joints,function(i,j){
			var $el = j[0].$(j[1]);
			var id = j[1] + ( j[2] || '' );

			var c = network.addNode( 0, 0 ); // offsets!
			if (debug) fabricCanvas.add(c);

			var nid = network.totalNodes()-1;
			jointIds[id] = nid;

			var eb = new EdgeBinding( $el, network, nid );
			eb.update();
			edge_bindings.push(eb);
		});

		var connections = {};

		var addConnection = function ( a, b ) {
			var nidA = jointIds[a], nidB = jointIds[b];

			connections[nidA] = connections[nidA] || [];
			connections[nidA].push(nidB);

			var l = network.connectNodes( nidA, nidB, 1 );
			if (debug) fabricCanvas.add(l);
		}

		addConnection( 'LeftAnkleElement', 'LeftKneeElement' );
		addConnection( 'LeftKneeElement', 'LeftPelvisElement' );
		addConnection( 'LeftPelvisElement', 'HipElement' );

		addConnection( 'RightAnkleElement', 'RightKneeElement' );
		addConnection( 'RightKneeElement', 'RightPelvisElement' );
		addConnection( 'RightPelvisElement', 'HipElement' );

		addConnection( 'HipElement', 'SpineElement' );
		addConnection( 'SpineElement', 'ShouldersElement' );
		addConnection( 'ShouldersElement', 'HeadElement' );

		addConnection( 'ShouldersElement', 'ShoulderElementRight' );
		addConnection( 'ShoulderElementRight', 'EllbowElementRight' );
		addConnection( 'EllbowElementRight', 'WristElementRight' );

		addConnection( 'ShouldersElement', 'ShoulderElementLeft' );
		addConnection( 'ShoulderElementLeft', 'EllbowElementLeft' );
		addConnection( 'EllbowElementLeft', 'WristElementLeft' );

		var BubbleConnect = function () {
			this.nodeFrom = arguments[0];
			var getTarget = function (from) {
				if ( connections[from] ) {
					var f = Math.floor(connections[from].length * Math.random());
					return connections[from][f];
				}
			}
			this.nodeTo = getTarget( this.nodeFrom );
			var node = network.getNode( this.nodeFrom );
			this.bubble = new BubbleElement( fabricCanvas, node.x, node.y );
			var t = 0, tStep = 0.008 + Math.random() * 0.01, tDeath = 5 + Math.random()*15;
			this.popped = false;
			this.update = function () {
				if ( typeof this.nodeTo !== 'undefined' ) {
					var pt1 = network.getNode( this.nodeFrom );
					var pt2 = network.getNode( this.nodeTo );
					var xd = pt2.x - pt1.x, yd = pt2.y - pt1.y;
					var pos = $V([pt1.x, pt1.y]), dist = $V([xd,yd]);
					this.bubble.pull( pos.add(dist.multiply(t)), 0.2 );
					this.bubble.update();
					t += tStep;
					if ( t >= 1 ) {
						t = 0;
						tStep *= 0.95;
						this.nodeFrom = this.nodeTo;
						this.nodeTo = getTarget( this.nodeFrom );
						if ( typeof this.nodeTo === 'undefined' ) {
						}
					}
				} else {
					var pt1 = network.getNode( this.nodeFrom );
					this.bubble.pull( $V([pt1.x, pt1.y]), 0.2 );
					this.bubble.update();
					tDeath -= tStep;
					if ( tDeath <= 0 ) {
						this.bubble.dispose();
						this.popped = true;
					}
				}
			}
		}

		var bubbleConnections = [];

		AdobeEdge.Symbol.bindTimelineAction( compId, 'stage', 'Default Timeline', 'update', function (stage, e) {


			$.each(edge_bindings,function(i,c){
				c.update();
			});

			network.update();

			$.each(bubbleConnections,function(i,b){
				b.update();
			});

			for ( var ib = 0; ib < bubbleConnections.length-1; ib++ ) {
				var b1 = bubbleConnections[ib].bubble;
				for ( var ib2 = ib+1; ib2 < bubbleConnections.length; ib2++ ) {
					var b2 = bubbleConnections[ib2].bubble;
					b1.repelOther(b2);
				}
			}

			fabricCanvas.renderAll();

			for ( var bi = bubbleConnections.length-1; bi >= 0; bi-- ) {
				if ( bubbleConnections[bi].popped ) {
					bubbleConnections.splice(bi,1);
				}
			}
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

		if ( true ) {
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

			waited++;
			if ( waited < waitfor ) { return; }

			if ( !armLeft.isPlaying() ) {
				armLeft.play();
			}
			if ( !armRight.isPlaying() ) {
				armRight.play();				
			}
			if ( !body.isPlaying() && Math.random() > 0.75 ) {
				body.play();
			} else {
				body.stop();
			}
			for ( var z0 = 0, z1 = Math.random()*3; z0 < z1 && bubbleConnections.length < 32; z0++ ) {
				bubbleConnections.push( new BubbleConnect( Math.random() > 0.5 ? 15 : 12 ) );
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

	var BubbleElement = function ( fabricCanvas, x, y ) {

		BubbleElement.global = BubbleElement.global || {};
		BubbleElement.global.angle = 0;

		var position = $V([ x || 300, y || 800 ]);
		var target = $V([0,0]);
		var velocity = $V([0,0]);
		var acceleration = $V([0,0]);

		var element = null;
		fabric.Image.fromURL('images/bubble.png', function(img) {
			element = img;
			element.width = element.width * (0.25 + Math.random()*0.75);
			element.height = element.width;
			fabricCanvas.add(element);
		});

		this.update = function () {

			velocity = velocity.add(acceleration);
			position = position.add(velocity);
			acceleration = acceleration.multiply(0);
			velocity = velocity.multiply( 0.1 );

			if ( element ) {
				element.left = position.e(1);
				element.top = position.e(2);

				element.angle = BubbleElement.global.angle;
			}
		}

		this.pull = function ( to, strength ) {
			strength = strength || 0.1;
			var dist = to.subtract(position);
			// dist = dist.toUnitVector();
			dist = dist.multiply( strength );
			this.apply( dist );
		}

		this.apply = function ( force ) {
			acceleration = acceleration.add( force );
		}

		this.repel = function ( pos, strength ) {
			strength = strength || 3;
			var dist = position.subtract( pos );
			var mag = Math.sqrt( dist.e(1)*dist.e(1) + dist.e(2)*dist.e(2) );
			if ( mag < 1 ) mag = 1;
			var thresh = this.radius()*strength;
			if ( mag < thresh ) {
				dist = dist.toUnitVector();
				var force = dist.multiply( -thresh / mag );
				this.apply( force.multiply( -1 ) );
			}
		}

		this.repelOther = function ( other ) {
			var dist = position.subtract( other.position() );
			var mag = Math.sqrt( dist.e(1)*dist.e(1) + dist.e(2)*dist.e(2) );
			if ( mag < 1 ) mag = 1;
			var thresh = (this.radius()+other.radius())*2;
			if ( mag < thresh ) {
				dist = dist.toUnitVector();
				var force = dist.multiply( -thresh / mag );
				this.apply( force.multiply( -1 ) );
				other.apply( force );
			}
		}

		this.radius = function () {
			if ( element ) {
				return element.width / 2;
			} else {
				return 1;
			}
		}

		this.position = function () {
			return position;
		}

		this.dispose = function () {
			fabricCanvas.remove( element );
		}
	}
});