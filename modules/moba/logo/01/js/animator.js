/*
 +	Class Animator
 +
 +	fjenett, 2012
 +
 L + + + + + + + + + + + + + + */

var Animator = (function(){
	var listeners = [];
	var msStarted = currentFrame = -1;
	var animationHandler = function (t) {
		currentFrame++;
		for ( var i = 0, k = listeners.length; i < k; i++ ) {
			listeners[i].update(t);
		}
		for ( var i = 0, k = listeners.length; i < k; i++ ) {
			listeners[i].render(t);
		}
		requestAnimationFrame( animationHandler );
	}
	var Animator = function (opts) {
		var listener = {
			update: function () {},
			render: function () {}
		};
		if ( opts ) {
			if ( 'onUpdate' in opts && typeof opts.onUpdate == 'function' ) {
				listener.update = function (t) {
					opts.onUpdate.apply( opts.context || null, [t] );
				}
			}
			if ( 'onRender' in opts && typeof opts.onRender == 'function' ) {
				listener.render = function (t) {
					opts.onRender.apply( opts.context || null, [t] );
				}
			}
		}
		listeners.push(listener);
	}
	Animator.prototype = {
		start: function () {
			if ( msStarted == -1 ) msStarted = new Date().getTime();
			if ( currentFrame == -1 ) currentFrame = 0;
			animationHandler( msStarted );
		},
		pause: function () {
			deleteAnimationFrame( animationHandler );
		},
		stop: function () {
			deleteAnimationFrame();
			msStarted = currentFrame = -1;
		},
		currentFrame: function () {
			return currentFrame;
		}
	}
	return Animator;
})();