$(function(){
	var resizeFn = function(){

		var $container = $(window);
		var bodySize = { w: $container.width(), h: $container.height() };

		var $div = $($('.performer').get(0) || $('#Stage').get(0) || $(document.body).children().first().get(0));
		var divSize = { w: $div.width(), h: $div.height() };

		var ratio = (bodySize.h+1) / divSize.h;

		var s = 'scale('+ratio+')';
		var css = {};
		var ext = ['-webkit-','-moz-','-ms-','-o-',''];
		for (var i = 0, k = ext.length, e = null; i < k; i++) { e = ext[i];
			css[e+'transform'] = s; css[e+'transform-origin'] = 'center top';
		}
		$(document.body).css(css);

		//console.log("bs",bodySize,"ds", divSize);
	}
	$(window).resize(resizeFn);

  resizeFn();
})