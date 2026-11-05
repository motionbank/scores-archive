
var range = function range () {
	var from = 0, to = 0, step = 1, cb = function(){};
	if ( arguments.length < 2 ) {
		throw( 'need range( to, callback ) as a minimum' );
		return;
	}
	if ( arguments.length === 2 ) {
		to = arguments[0];
		cb = arguments[1];
	} else if ( arguments.length === 3 ) {
		from = arguments[0];
		to = arguments[1];
		cb = arguments[2];
	} else if ( arguments.length === 4 ) {
		from = arguments[0];
		to = arguments[1];
		step = arguments[2];
		cb = arguments[3];
	}
	if ( from > to && step > 0 ) {
		throw( 'from > to' );
		return;
	}
	for ( var i = from; i < to; i += step ) {
		cb.apply(null,[i]);
	}
};

(function(Edge){
	Edge.bootstrapCallback(function(compId){

		var comp = Edge.getComposition(compId);
		var stage = comp.getStage();

		var $canvas = $('<canvas></canvas>');
		var $canvasContainer = stage.$('CanvasContainer');
		if ( $canvasContainer.length == 0 ) {
			$canvasContainer = $(stage.element);
		}
		var fabricCanvas = new fabric.Canvas($canvas.get(0));
		fabricCanvas.setDimensions({
			width: 600, height: 800
		});
		$canvasContainer.append($canvas);

		var getHairTracker = function () {
			if ( !window.App.sym ) return false;
			var hair = window.App.sym.$('Hair');
			return hair;
		}

		var updateBallBodyFn = function (xo,yo,st) {
			return function (sym) {
				var $elm = sym.$('Hair');
				if ( !$elm ) return;
				var w1 = $elm.width();
				var h1 = $elm.height();
				var or1 = App.cssTransformOrigin( $elm );
				var mt1 = App.cssTransformMatrix( $elm );
				var pt1 = App.transformPoint( or1, mt1, w1*xo, h1*yo );
				pt1 = App.localToGlobal( $elm, pt1.x, pt1.y );
				this.pull( $V([pt1.x,pt1.y]), st );
			}
		};

		var updateBallBallFn = function ( other, st ) {
			return function () {
				this.pull( other.position(), st );
			};
		}
		
		var balls = [], numBalls = 3, numHairs = 4, prevBall = null, hairs = [];
		range(numHairs,function(c){
			range(numBalls,function(r){
				var ball = new BubbleElement(fabricCanvas);
				ball.element.radius *= 1+(r/3.0)+Math.random();
				if ( r === 0 ) {
					ball.element.radius = 15;
				}
				balls.push(ball);
				if ( r === 0 ) {
					ball.updatePositionCallback = updateBallBodyFn( 0.25 + (c/(numHairs-1.0))*0.5, 0.5, 1 );
				} else {
					ball.updatePositionCallback = updateBallBallFn( prevBall, 0.1 );
				}
				prevBall = ball;
			});
			var hair = new HairElement( fabricCanvas, balls.slice(c*numBalls,c*numBalls+numBalls) );
			hairs.push( hair );
		});
		
		var rCenter = 90;
		var timeLineUpdateCallback = function ( sym, event ) {

			var c = $V([300,0]);
			$.each(balls,function(i,b){
				b.update(sym);
				b.pull(c,0.02);
			});

			$.each(hairs,function(i,h){
				h.update();
			});

			// var $elm = sym.$('Hair');
			// if ( !$elm ) return;
			// var w1 = $elm.width();
			// var h1 = $elm.height();
			// var or1 = App.cssTransformOrigin( $elm );
			// var mt1 = App.cssTransformMatrix( $elm );
			// var pt1 = App.transformPoint( or1, mt1, w1/2, h1/2 );
			// pt1 = App.localToGlobal( $elm, pt1.x, pt1.y );

			for ( var i = 0; i < balls.length-1; i++ ) {
				var b1 = balls[i];
				for ( var n = i; n < balls.length; n++ ) {
					var b2 = balls[n];
					b1.repelOther(b2,1.5);
				}

				//b1.repel( $V([pt1.x,pt1.y]), 2 );
			}

			//rCenter = rCenter < 5 ? 5 : rCenter/2;

			fabricCanvas.renderAll();
		}
		$.each(stage.getChildSymbols(),function(i,sym){
			Edge.Symbol.bindTimelineAction( 
				compId, sym.getSymbolTypeName(), 
				'Default Timeline', 'update', 
				timeLineUpdateCallback );
		});
	});
})(AdobeEdge);

var BubbleElement = function ( fabricCanvas ) {

	var position = $V([ Math.random()*600, -900 ]);
	var velocity = $V([0,0]);
	var acceleration = $V([0,0]);

	this.element = null;

	this.element = new fabric.Circle({
		fill: 'rgba(255,255,255,0.5)',
		stroke: 'rgba(0,0,0,0.8)',
		strokeWidth: 0,
		radius: 10
	});
	//fabricCanvas.add(this.element);

	this.updatePositionCallback = function () {
	}

	this.update = function () {

		this.updatePositionCallback.apply(this,arguments);

		velocity = velocity.add(acceleration);
		position = position.add(velocity);

		acceleration = acceleration.multiply(0);
		velocity = velocity.multiply( 0.1 );

		this.element.left = position.e(1);
		this.element.top = position.e(2);
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

	this.repelOther = function ( other, st ) {
		var dist = position.subtract( other.position() );
		var mag = Math.sqrt( dist.e(1)*dist.e(1) + dist.e(2)*dist.e(2) );
		if ( mag < 1 ) mag = 1;
		var thresh = (this.radius()+other.radius())*2*st;
		if ( mag < thresh ) {
			dist = dist.toUnitVector();
			var force = dist.multiply( -thresh / mag );
			this.apply( force.multiply( -1 ) );
			other.apply( force );
		}
	}

	this.radius = function () {
		return this.element.radius;
	}

	this.position = function () {
		return position;
	}
};

var HairElement = function ( fabricCanvas, _balls ) {

	var balls = _balls, lines = [], curve = null;

	var colors = ['#6E4526', '#815837', '#764D2D'];

	curve = new fabric.Path('M0,0',{
		//stroke: 'black',
		//strokeWidth: 0,
		fill: colors[parseInt(Math.random()*colors.length)]
	});
	curve.curveTo(
		Math.random()*100,Math.random()*100,
		Math.random()*100,Math.random()*100,
		Math.random()*100,Math.random()*100 );
	fabricCanvas.add(curve);

	range(balls.length-1,function(){
		
		var line = new fabric.Path('M0,0',{
			stroke: 'black',
			strokeWidth: 2
		});
		line.lineTo(Math.random()*100,Math.random()*100);
		lines.push(line);
		//fabricCanvas.add(line);
		
		curve.curveTo(
			Math.random()*100,Math.random()*100,
			Math.random()*100,Math.random()*100,
			Math.random()*100,Math.random()*100 );
		curve.curveTo(
			Math.random()*100,Math.random()*100,
			Math.random()*100,Math.random()*100,
			Math.random()*100,Math.random()*100 );
	});
	curve.close();

	this.update = function () {
		var prevDist = null, cConst = 1.61;
		range(balls.length-1,function(l){

			var b1 = balls[l], b1_pos = b1.position();
			var b2 = balls[l+1], b2_pos = b2.position();

			var b1_rad = b1.radius();
			var b2_rad = b2.radius();


			var dist = b1_pos.subtract(b2_pos);
			dist = dist.toUnitVector();

			var aDist = dist.dup();
			if ( prevDist ) {
				aDist = aDist.add(prevDist).multiply(0.5).toUnitVector();
			}

			var left = aDist.rotate( Math.PI / 2.0, $V([0,0]) );
			var right = aDist.rotate( Math.PI / -2.0, $V([0,0]) );

			var line = lines[l];

			var t0 = b1_pos.add(left.multiply(b1_rad));
			var t3 = b2_pos.add(left.multiply(b2_rad));
			var t1 = t0.subtract(aDist.multiply(b1_rad*cConst));
			var t2 = t3.add(aDist.multiply(b2_rad*cConst));

			line.path[0][1] = b1_pos.e(1);
			line.path[0][2] = b1_pos.e(2);
			line.path[1][1] = b2_pos.e(1);
			line.path[1][2] = b2_pos.e(2);

			if ( l === 0 ) {
				curve.path[0][1] = t0.e(1);
				curve.path[0][2] = t0.e(2);
			}

			curve.path[l+1][1] = t1.e(1);
			curve.path[l+1][2] = t1.e(2);
			curve.path[l+1][3] = t2.e(1);
			curve.path[l+1][4] = t2.e(2);
			curve.path[l+1][5] = t3.e(1);
			curve.path[l+1][6] = t3.e(2);

			if ( l === balls.length-2 ) {
				var t4 = t3.subtract(aDist.multiply(b1_rad*cConst));
				curve.path[l+2][1] = t4.e(1);
				curve.path[l+2][2] = t4.e(2);
			}

			t0 = b1_pos.add(right.multiply(b1_rad));
			t3 = b2_pos.add(right.multiply(b2_rad));
			t1 = t0.subtract(aDist.multiply(b1_rad*cConst));
			t2 = t3.add(aDist.multiply(b2_rad*cConst));

			var l2 = (balls.length*2)-1-l;

			curve.path[l2-1][5] = t3.e(1);
			curve.path[l2-1][6] = t3.e(2);
			curve.path[l2][1] = t2.e(1);
			curve.path[l2][2] = t2.e(2);
			curve.path[l2][3] = t1.e(1);
			curve.path[l2][4] = t1.e(2);

			if ( l === 0 ) {
				curve.path[l2][5] = t0.e(1);
				curve.path[l2][6] = t0.e(2);
			}

			if ( l === balls.length-2 ) {
				var t4 = t3.subtract(aDist.multiply(b1_rad*cConst));
				curve.path[l2-1][3] = t4.e(1);
				curve.path[l2-1][4] = t4.e(2);
			}

			prevDist = dist;
		});

		
	}
};