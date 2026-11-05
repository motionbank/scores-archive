var App = App || {};

App.arm = function ( fabric_canvas ) {

	this.shape = new fabric.Path('M0,0',{
		selectable : false,
		fill : 'rgba(29,20,100,1)'
	});
	
	this.shape.curveTo(20,0,40,0,60,0);
	this.shape.curveTo(80,0,100,0,120,0);
	this.shape.curveTo(140,0,140,20,120,20);
	this.shape.curveTo(100,20,80,20,60,20);
	this.shape.curveTo(40,20,20,20,0,20);

	fabric_canvas.add(this.shape);

	this.update = function ( sym, elm1, elm2, elm3 ) {

		var s = 1.1;

		var $obj = sym.$(elm1);
		var symPos = sym.element.position();
		var w = $obj.width();
		var h = $obj.height();
		var o = App.cssTransformOrigin( $obj );
		var m = App.cssTransformMatrix( $obj );
		var p = App.transformPoint( o, m, 0, h/2 );
		p = App.localToGlobal( $obj, p.x, p.y );

		this.shape.path[0][1] = p.x;
		this.shape.path[0][2] = p.y;
		p = App.transformPoint( o, m, 0, 1.5*h * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[1][1] = p.x;
		this.shape.path[1][2] = p.y;
		p = App.transformPoint( o, m, w, 1.5*h * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[5][3] = p.x;
		this.shape.path[5][4] = p.y;
		p = App.transformPoint( o, m, w, h/2 );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[5][5] = p.x;
		this.shape.path[5][6] = p.y;
		
		$obj.css("opacity",0);

		$obj = sym.$(elm2);
		w = $obj.width();
		h = $obj.height();
		o = App.cssTransformOrigin( $obj );
		m = App.cssTransformMatrix( $obj );
		p = App.transformPoint( o, m, 0, -h/2 * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[1][3] = p.x;
		this.shape.path[1][4] = p.y;
		p = App.transformPoint( o, m, 0, h/2 );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[1][5] = p.x;
		this.shape.path[1][6] = p.y;
		p = App.transformPoint( o, m, 0, 1.5*h * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[2][1] = p.x;
		this.shape.path[2][2] = p.y;
		p = App.transformPoint( o, m, w, 1.5*h * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[4][3] = p.x;
		this.shape.path[4][4] = p.y;
		p = App.transformPoint( o, m, w, h/2 );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[4][5] = p.x;
		this.shape.path[4][6] = p.y;
		p = App.transformPoint( o, m, w, -h/2 * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[5][1] = p.x;
		this.shape.path[5][2] = p.y;
		
		$obj.css("opacity",0);

		$obj = sym.$(elm3);
		w = $obj.width();
		h = $obj.height();
		o = App.cssTransformOrigin( $obj );
		m = App.cssTransformMatrix( $obj );
		p = App.transformPoint( o, m, 0, -h/2 * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[2][3] = p.x;
		this.shape.path[2][4] = p.y;
		p = App.transformPoint( o, m, 0, h/2 );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[2][5] = p.x;
		this.shape.path[2][6] = p.y;
		p = App.transformPoint( o, m, 0, 1.5*h * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[3][1] = p.x;
		this.shape.path[3][2] = p.y;
		p = App.transformPoint( o, m, w, 1.5*h * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[3][3] = p.x;
		this.shape.path[3][4] = p.y;
		p = App.transformPoint( o, m, w, h/2 );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[3][5] = p.x;
		this.shape.path[3][6] = p.y;
		p = App.transformPoint( o, m, w, -h/2 * s );
		p = App.localToGlobal( $obj, p.x, p.y );
		this.shape.path[4][1] = p.x;
		this.shape.path[4][2] = p.y;
		
		$obj.css("opacity",0);
	}
}