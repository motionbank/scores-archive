
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

		var body = stage.getSymbol('Body');
		var rump = body.getSymbol('Rump');
		var spine = rump.getSymbol('Spine');
		var armRight = spine.getSymbol('ArmRight');
		var armLeft = spine.getSymbol('ArmLeft');
		var head = spine.getSymbol('Head');
		var legLeft = body.getSymbol('LegLeft');
		var legRight = body.getSymbol('LegRight');

		var conns = [];
		conns.push( new ElementConnect( fabricCanvas, armRight.$('Wrist_Element'), armRight.$('Ellbow_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, armRight.$('Ellbow_Element'), armRight.$('Shoulder_Element') ) );

		conns.push( new ElementConnect( fabricCanvas, armLeft.$('Wrist_Element'), armLeft.$('Ellbow_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, armLeft.$('Ellbow_Element'), armLeft.$('Shoulder_Element') ) );

		conns.push( new ElementConnect( fabricCanvas, armRight.$('Shoulder_Element'), head.$('Neck_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, armLeft.$('Shoulder_Element'), head.$('Neck_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, head.$('Neck_Element'), head.$('Head_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, head.$('Neck_Element'), spine.$('Spine_Top_Element') ) );

		conns.push( new ElementConnect( fabricCanvas, legLeft.$('Ankle_Element'), legLeft.$('Knee_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, legLeft.$('Knee_Element'), legLeft.$('Hip_Element') ) );

		conns.push( new ElementConnect( fabricCanvas, legRight.$('Ankle_Element'), legRight.$('Knee_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, legRight.$('Knee_Element'), legRight.$('Hip_Element') ) );

		conns.push( new ElementConnect( fabricCanvas, legRight.$('Hip_Element'), spine.$('Spine_Low_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, legLeft.$('Hip_Element'), spine.$('Spine_Low_Element') ) );

		conns.push( new ElementConnect( fabricCanvas, spine.$('Spine_Low_Element'), spine.$('Spine_Middle_Element') ) );
		conns.push( new ElementConnect( fabricCanvas, spine.$('Spine_Middle_Element'), spine.$('Spine_Top_Element') ) );
		
		var global_bubbles = [];
		$.each(conns,function(i,c){
			global_bubbles = global_bubbles.concat(c.bubbles());
		});

		Edge.Symbol.bindTimelineAction(compId, 'stage', 'Default Timeline', 'update', function (stage, event) {
			
			$.each(conns,function(i,c){
				c.update();
			});

			// BubbleElement.global.angle = 
			// 	Math.sin((new Date().getTime() / 5000.0)+Math.random()*0.1) * 35;
			
			var $head = head.$('Head_Element');
			var w1 = $head.width();
			var h1 = $head.height();
			var or1 = App.cssTransformOrigin( $head );
			var mt1 = App.cssTransformMatrix( $head );
			var pt1 = App.transformPoint( or1, mt1, w1/2, h1/2 );
			pt1 = App.localToGlobal( $head, pt1.x, pt1.y );
			pt1 = $V([pt1.x, pt1.y]);

			try {

			for ( var ib = 0; ib < global_bubbles.length-1; ib++ ) {
				var b1 = global_bubbles[ib];
				for ( var ib2 = ib+1; ib2 < global_bubbles.length; ib2++ ) {
					var b2 = global_bubbles[ib2];
					b1.repelOther(b2);
				}
				b1.repel(pt1,12);
			}

			$.each(global_bubbles,function(i,b){
				b.update();
			});
		} catch (e) {
			console.log( e.message );
		}

			fabricCanvas.renderAll();
		});
	});
})(AdobeEdge);

var BubbleElement = function ( fabricCanvas ) {

	BubbleElement.global = BubbleElement.global || {};
	BubbleElement.global.angle = 0;

	var position = $V([100 + Math.random()*100,100 + Math.random()*100]);
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

		element.left = position.e(1);
		element.top = position.e(2);

		element.angle = BubbleElement.global.angle;
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
		return element.width / 2;
	}

	this.position = function () {
		return position;
	}
}

var ElementConnect = function ( fabricCanvas, $elm1, $elm2, callback ) {

	var max_locations = 1.0 + parseInt( Math.random()*7 );

	var bubbles = [];
	for ( var b = 0; b < max_locations; b++ ) {
		var bubble = new BubbleElement( fabricCanvas );
		bubbles.push( bubble );
	}

	this.update = function () {

		var w1 = $elm1.width();
		var h1 = $elm1.height();
		var or1 = App.cssTransformOrigin( $elm1 );
		var mt1 = App.cssTransformMatrix( $elm1 );
		var pt1 = App.transformPoint( or1, mt1, w1/2, h1/2 );
		pt1 = App.localToGlobal( $elm1, pt1.x, pt1.y );

		var w2 = $elm2.width();
		var h2 = $elm2.height();
		var or2 = App.cssTransformOrigin( $elm2 );
		var mt2 = App.cssTransformMatrix( $elm2 );
		var pt2 = App.transformPoint( or2, mt2, w2/2, h2/2 );
		pt2 = App.localToGlobal( $elm2, pt2.x, pt2.y );

		var xd = pt2.x - pt1.x, yd = pt2.y - pt1.y;
		var xs = xd / (max_locations-1), ys = yd / (max_locations-1);
		var pos = $V([pt1.x, pt1.y]), step = $V([xs,ys]);
		for ( var l = 0; l < max_locations; l++ ) {
			bubbles[l].pull( pos, 0.2 );
			pos = pos.add( step );
		}
	};

	this.bubbles = function () {
		return bubbles;
	}
};