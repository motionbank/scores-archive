$(function(){
	var lp = new LocationParams(), waitfor = lp.waitfor || 0, waited = 0;

	$('#Stage').click(function(){
    	waited++;
		if ( waited >= waitfor ) window.App.nextScene();
    });

    window.messaging = {
		'>>ping' : function (req, res) {
			waited++;
			if ( waited >= waitfor ) window.App.nextScene();
		}
	}
});

AdobeEdge.bootstrapCallback(function(compId){
	var comp = AdobeEdge.getComposition(compId);
	var stage = comp.getStage();
});