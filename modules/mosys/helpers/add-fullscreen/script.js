// fjenett - 2014-05-04
// adds fullscreen functionality to cells with class "add-fullscreen"
jQuery(function(){
	var $ = jQuery;
	$(document.head).append('<link href="style.css" rel="stylesheet" />');
	$('.cell.add-fullscreen').each(function(n,img){
		var $img = $(img);
		var $icon = $('<div class="fs-icon"></div>'); 
		$img.append($icon);
		var closeFs = function (r) {
			$img.removeClass('is-fullscreen');
			$img.removeClass($img.data('fs-class'));
			$img.data('fs-class','');
			$('#'+r).remove();
		}
		$icon.click(function(evt){
			evt.preventDefault();
			var r = $img.data('fs-class');
			if ( r ) {
				closeFs(r);
			} else {
				var l = $img.parent().position().left * -1;
				var w = $(window).width();
				var r = 'fs-'+(new Date().getTime());
				var bg = $img.css('background-color');
				if ( !bg || bg === 'rgba(0, 0, 0, 0)' ) {
					bg = '#1d2121 !important';
				}
				$(document.head).append('<style id="'+r+'">.'+r+'{'+
					'top:0 !important;'+
					'left:'+l+'px !important;'+
					'height:100% !important;'+
					'width:'+w+'px !important;'+
					'z-index: 9999999 !important;'+
					'background-color: '+bg+';'+
					//'background-size: contain !important;'+
				'}</style>');
				$img.data('fs-class',r);
				$img.addClass(r);
				$img.addClass('is-fullscreen');
			}
			return false;
		});
		var keyFn = function(evt){
			if (evt.keyCode === 27) { //ESC
				var r = $img.data('fs-class');
				closeFs(r);
				//$(window).unbind('keydown',keyFn);
			}
		}
		$(window).bind('keydown',keyFn);
	});
});