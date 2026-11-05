var LocationParams = window.LocationParams = (function(){
	return function () {
		var p = window.location.search.substring(1);
		if ( p && p !== '' ) {
			p = p.split('&');
			if ( p && p.length > 0 ) {
				var m = {};
				for ( var i = 0; i < p.length; i++ ) {
					var s = p[i].split('=');
					m[s[0]] = s[1];
				}
				return m;
			} else {
				return undefined;
			}
		} else {
			return undefined;
		}
	}
})();