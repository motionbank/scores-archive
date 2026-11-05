var Timer = window.Timer = (function(){
	return function(){
		var running = false, should_stop = false;
		var callback = function(){};
		var tsLast = -1;
		var tsStart = 0;
		var tsStep = 1000.0 / (arguments[0] || 90);
		this.start = function () {
			if ( running ) return;
			if ( arguments[0] && typeof arguments[0] === 'function' ) {
				callback = arguments[0];
			}
			running = true;
			should_stop = false;
			tsStart = new Date().getTime();
			window.requestAnimationFrame(loop);
		};
		this.stop = function () {
			should_stop = true;
			window.cancelAnimationFrame(loop);
			running = false;
		};
		this.frameRate = function (fps){
			if ( fps ) tsStep = 1000.0 / fps;
			return 1000.0 / tsStep;
		};
		this.reset = function () {
			tsStart = new Date().getTime();
		};
		var loop = function loop () {
			var tsNow = new Date().getTime();
			if ( tsNow - tsLast > tsStep ) {
				tsLast = tsNow;
				callback.apply(null,[tsNow-tsStart]);
			}
			if ( !should_stop ) {
				window.requestAnimationFrame(loop);
			}
		}
	};
})();