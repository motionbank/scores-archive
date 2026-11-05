AdobeEdge.bootstrapCallback(function(compId){
	
	var composition = AdobeEdge.getComposition(compId);
	var stage = composition.getStage();

	var $stage = $(stage.element);
	var $canvas_container = $('#Stage_CanvasContainer');
	var $canvas = $('#fabric_canvas',$canvas_container);
	if ( $canvas.length === 0 ) {
		$canvas = $('<canvas id="fabric_canvas"></canvas>');
		$canvas_container.append($canvas);
	}

	var canvas = new fabric.Canvas($canvas.get(0));

	canvas.setDimensions({
		width: 1000,
		height: 1600
	});

	// canvas.add( new fabric.Rect({
	// 	width: 200, height: 200,
	// 	fill: 'red', stroke: 'green',
	// 	left: 0, top: 0
	// }));

  	var arm = new App.arm(canvas);
	var arm2 = new App.arm(canvas);
  
	AdobeEdge.Symbol.bindTimelineAction(
		compId, 'stage', "Default Timeline", "update", 
		function(sym, e) {
      		arm.update(  sym,'Shoulder', 'Elbow', 'Wrist' );
			arm2.update( sym,'Shoulder2','Elbow2','Wrist2');
			canvas.renderAll();
		});

	if ( window.messaging ) {
		window.messaging['>>ping'] = function (req, res) {
			//console.log( 'PING' );
	      if (!stage.getVariable("isRunning")) stage.play("arms_down");
	    };
	} else {
		console.log( 'messaging not available' );
	}
});