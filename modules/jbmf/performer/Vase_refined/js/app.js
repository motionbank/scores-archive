$(function(){
	$('#Stage').click(function(){
		window.App.nextScene();
	});
	window.messaging = $.extend(window.messaging,{
		'>>ping' : function (req, res) {
			window.App.nextScene();
		}
	});
	AdobeEdge.bootstrapCallback(function(compId){
		var comp = AdobeEdge.getComposition(compId);
		var stage = comp.getStage();
		var children = stage.getChildSymbols();
		$.each(children,function(i,c){
			var instanceName = stage.idLookup['#'+c.element.attr('id')];
			AdobeEdge.Symbol.bindTimelineAction(compId,instanceName,'Default Timeline','complete',function(sym,e){
				window.messaging.send('>>ping',{'scene':instanceName});
			});
		});
		var lp = new LocationParams();
		if ( lp.starter ) {
			setTimeout( window.App.nextScene, parseInt( 3000 + Math.random() * 3000, 10) );
		}
	});
});