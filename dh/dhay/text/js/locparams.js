var LocationParams = window.LocationParams = (function(){
	return function () {
		var p = window.location.search.substring(1).split('&');
		if ( p && p.length > 0 ) {
			var m = null; 
			for ( var i = 0; i < p.length; i++ ) {
				var s = p[i].split('=');
				if ( s && s[0] && s[1] ) {
					if ( !m ) m = {};
					m[s[0]] = s[1];
				}
			}
			return m;
		} else {
			return null;
		}
	}
})();