(function(){

	var isRunning = false;
	var last_k = 'A';

	var lp = new LocationParams();
	var startAt = +(lp.start) || 1;
	var maxEvents = +(lp.max) || -1;
	var hideOnPause = +(lp.hide) || false;
	var currentEvent = 1;

	var nextScene = function () {
		if ( !isRunning && AdobeEdge.getComposition ) {
			if ( currentEvent >= startAt ) {
				var k = last_k || 'A';
				while ( k === last_k ) {
					k = ['A','B','C'][Math.floor(Math.random()*3)];
				}
				AdobeEdge.getComposition('PAGE_'+k).getStage().play(0);
				$('div.visible').hide().removeClass('visible');
				$('#Stage'+k).addClass('visible').show();
				isRunning = true;
				last_k = k;
			}
			currentEvent++;
			if ( (maxEvents > -1) && currentEvent > (startAt+maxEvents) ) {
				currentEvent = 1;
				if ( hideOnPause ) {
					$('div.performer').hide();
				}
			}
		}
	}

	$(document).click(function(){
		nextScene();
	});

	$(function(){
		window.messaging['>>ping'] = function (req, res) {
	      nextScene();
	    };
	});

	var resizeFn = function resizeFn () {
		var $body = $(document.body),
			$stage = $('#StageA',$body);
		
		var scale = $body.height() / $stage.height();

		$body.css({
			'-webkit-transform-origin' : 'top left',
			'-webkit-transform' : 'scale('+scale+')',
			'overflow' : 'hidden'
		});
	}
	$(window).resize(resizeFn);

	AdobeEdge.bootstrapCallback(function(compId) {

		var comp = AdobeEdge.getComposition(compId);
		var stage = comp.getStage();

		if ( hideOnPause ) {
			$('div.performer').hide();
		}

		AdobeEdge.Symbol.bindTimelineAction(compId, "stage", "Default Timeline", "play", function(sym, e) {
			isRunning = true;
			$("#StageA").addClass('visible');
		});

		AdobeEdge.Symbol.bindTimelineAction(compId, "stage", "Default Timeline", "complete", function(sym, e) {	
			isRunning = false;
			//nextScene();
	    });
		
		resizeFn();
	});

})();