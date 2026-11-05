var App = App || {
	cssTransformOrigin : function ( $obj ) {
		var origin = $obj.css("-webkit-transform-origin") ||
		    $obj.css("-moz-transform-origin")    ||
		    $obj.css("-ms-transform-origin")     ||
		    $obj.css("-o-transform-origin")      ||
		    $obj.css("transform-origin");
		origin = origin.split(' ');
		return {
			x : parseFloat( origin[0].substring(0, origin[0].length-2) ),
			y : parseFloat( origin[1].substring(0, origin[1].length-2) )
		};
	},
	cssTransformMatrix : function ( $obj ) {
		var matrix = $obj.css("-webkit-transform") ||
		    $obj.css("-moz-transform")    ||
		    $obj.css("-ms-transform")     ||
		    $obj.css("-o-transform")      ||
		    $obj.css("transform");
		matrix = matrix.split(',');
		matrix[0] = matrix[0].substring(7);
		matrix[matrix.length-1] = matrix[matrix.length-1].substring(0,matrix[matrix.length-1].length-1);
		return [
			parseFloat( matrix[0] ),
			parseFloat( matrix[1] ),
			parseFloat( matrix[2] ),
			parseFloat( matrix[3] ),
			parseFloat( matrix[4] ),
			parseFloat( matrix[5] )
		];
	},
	transformPoint : function ( o, m, x, y ) {
		var p = {x: x-o.x, y: y-o.y};
		p = {
			x : m[0] * p.x + m[2] * p.y + m[4],
			y : m[1] * p.x + m[3] * p.y + m[5]
		};
		return {x: p.x+o.x, y: p.y+o.y};
	},
	localToParent : function ( $obj, x, y, parentElement ) {

		var $p = $obj.parent();
		var p = {x: x, y: y};
		
		while ( $p ) {
			pm = App.cssTransformMatrix($p);
			po = App.cssTransformOrigin($p);
			p = App.transformPoint( po, pm, p.x, p.y);

			$p = $p.parent();
			var pe = $p.get(0);
			if ( pe === document.body || pe === parentElement ) break;
		}

		return { x: p.x, y: p.y };
	},
	localToGlobal : function ( $obj, x, y ) {
		return App.localToParent( $obj, x, y, $('#Stage').get(0) );
	}
};