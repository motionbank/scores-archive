fabric.Path.prototype.moveTo = function ( x, y ) {
	this.path.push([
		'M', x, y
	]);
};

fabric.Path.prototype.lineTo = function ( x, y ) {
	this.path.push([
		'L', x, y
	]);
};

fabric.Path.prototype.curveTo = function ( x1, y1, x2, y2, x, y ) {
	if ( arguments.length === 6 ) {
		this.path.push([
			'C', x1, y1, x2, y2, x, y
		]);
	} else if ( arguments.length === 4 ) {
		this.path.push([
			'Q', x1, y1, x2, y2
		]);
	}
};

fabric.Path.prototype.close = function () {
	this.path.push([
		'Z'
	]);
};