jQuery(function(){
	new App(AppConfig).start(window, document);
}); // jQuery.ready

var App = (function(){

	// - - - - - - - - - - - - - -
	//  private vars
	// - - - - - - - - - - - - - -

	var socket = null;

	/* see PieceMakerLib.js */
	var pm;  
	var video;

	var app;
	var canvas;
	var sketch; /* see Processing.js */
	var config;
	var onLocalhost = false;
	
	var group, video;
	var sceneEvents = [], dataEvents = [];

	// postmessenger

	var loc_params = new LocationParams();
	var parentWindow = null;
	var postmessenger = new PostMessenger(window);
	var listener_id = null;

	// - - - - - - - - - - - - - -
	//  App class
	// - - - - - - - - - - - - - -

	var App = function ( confs ) {
		app = this;
		config = confs;
	}

	App.prototype = {
		start: function (window, document) {
			
			onLocalhost = window.location.href.match(/^http:\/\/127\.0\.0\.1.*/) || 
                  		  window.location.href.match(/^http:\/\/localhost.*/);
            
            onLocalhost = false;

            if ( loc_params && 'domain' in loc_params ) {
				postmessenger.accept( loc_params.domain );
			}

			postmessenger.on('connect?',function(req,res){
				parentWindow = req.source;
				listener_id = req.data.listener_id;
				res.send('connect!');
			});

			// postmessenger.on(/^>>.+/,function(req, res){
			// });

			postmessenger.on('>>ping',function(req, res){
				//var data = req.data;
				sketch.ping();
			});

			pm = new PieceMakerApi(config.piecemaker);

			$(window).resize(resizeFn);

			loadSketch();

			socket = io.connect( config.socket_io.host );
			socket.on( 'data>', SocketCallbacks.trigger );
		},
		getCanvasWidth : function () {
			return canvas.width();
		},
		getCanvasHeight : function () {
			return canvas.height();
		},
		randomMarkers : function ( n ) {
			randomMarkers( n );
		}
	}

	// - - - - - - - - - - - - - -
	//  SOCKET IO
	// - - - - - - - - - - - - - -

	var SocketCallbacks = (function(){
		var callbacks = {last:0};
		var getKey = function ( key ) {
			key = key || 'generic';
			var t = (new Date()).getTime();
			var n = ++callbacks.last;
			key =  t + '_' + n + '_' + key;
			return key;
		}
		var addCallback = function ( cb ) {
			var k = getKey();
			callbacks[k] = cb || function(){};
			return k;
		}
		var triggerCallback = function ( key ) {
			if ( key in callbacks ) {
				callbacks[key].apply(null,arguments);
				delete callbacks[key];
			}
		}
		return {
			add : addCallback,
			trigger : triggerCallback
		};
	})();

	// - - - - - - - - - - - - - -
	//  private functs
	// - - - - - - - - - - - - - -

	var resizeFn = function(){

		var $container = $(window);
		var bodySize = { w: $container.width(), h: $container.height() };

		var $div = $( $('#'+getProcessingSketchId()).get(0) );
		var divSize = { w: $div.width(), h: $div.height() };

		var ratio = (bodySize.h+1) / divSize.h;

		var s = 'scale('+ratio+')';
		var css = {};
		var ext = ['-webkit-','-moz-','-ms-','-o-',''];
		for (var i = 0, k = ext.length, e = null; i < k; i++) { e = ext[i];
			css[e+'transform'] = s; css[e+'transform-origin'] = 'center top';
		}
		$(document.body).css(css);
	}

	var videoLoaded = function () {

		video.recorded_at = new Date( video.recorded_at_float);
		var from = (video.utc_timestamp.getTime() / 1000);
		var to = from + video.duration;
		pm.listEventsBetween( group.id, from, to, eventsLoaded );

		setLoadingStatus( "Loading markers ..." );
	};

	var eventsLoaded = function ( evts ) {

		if ( !evts || evts.total <= 0 ) {

			throw( 'No events for video' );

		} else {

			sequenceEvents( evts );
		}
	}

	var sequenceEvents = function ( events ) {
		
		setLoadingStatus( "Processing markers ..." );

		dataEvents = [];
		sceneEvents = [];

		var data = [];
		var dataLoaded = 0;
		var scenes = [];

		var fps30 = 1000 / 30.0;
		var fps25 = 1000 / 25.0;

		for ( var i = 0, k = events.length; i < k; i++ ) {

			var event = events[i];
			if ( !(event.type == 'scene' || event.type == 'data') ) continue;

			if ( event.type == 'scene' && event.duration > 0 && event.fields.performers ) {

				if ( event.fields.title &&
					 scenes.indexOf( event.fields.title ) == -1 ) {
					scenes.push( event.fields.title );
				}

				sceneEvents.push( event );

			} else if ( event.type == 'data' ) {

				dataEvents[event.fields.performers] = event;
			}
		}

		sketch.setLoaded( true );
		if ( !parentWindow ) {
			var loopFn = function(){
				sketch.ping();
				setTimeout( loopFn, parseInt( 200 + Math.random()*1000, 10 ) );
			};
			loopFn();
		}
		randomMarkers();

	} // sequenceEvents(), is rather lengthy

	var prepareCanvas = function () {

		// var canvasElement = canvas.get(0);
		// var canvasPosition = getElementPosition(canvasElement);

		// canvasElement.addEventListener( 'dragenter', function (e) {
		// 	if (e.preventDefault) e.preventDefault();
		// 	sketch.dragEnter();
		// 	return false;
		// });

		// canvasElement.addEventListener( 'dragover', function (e) {
		// 	if (e.preventDefault) e.preventDefault();
		// 	e.dataTransfer.dropEffect = 'copy';
		// 	sketch.dragOver( e.pageX-canvasPosition.x, 
		// 					 e.pageY-canvasPosition.y );
		// 	return false;
		// });

		// canvasElement.addEventListener( 'dragleave', function () {
		// 	sketch.dragLeave();
		// });

		// canvasElement.addEventListener( 'drop', function (e) {
		// 	if (e.stopPropagation) e.stopPropagation();
		// 	if (e.preventDefault) e.preventDefault();
		// 	sketch.dragDrop( e.dataTransfer.getData('text/plain'), 
		// 					 e.pageX-canvasPosition.x, 
		// 					 e.pageY-canvasPosition.y );
		// 	return false;
		// });
	}

	var randomMarkers = function ( num ) {

		if ( !num ) num = Math.random()*10;

		for ( var n = 0, i= 0, k = num; n < 1+k; n++ ) {
			
			i = parseInt( Math.random()*sceneEvents.length, 10 );
			
			var scene = sceneEvents[i];
			var data = dataEvents[scene.fields.performers];

			socket.emit( 
				'>data', 
				SocketCallbacks.add( 
				 	(function(scnEvt, datEvt){ 
				 		return function (k,dat) {
							// console.log( 'Received data for ' + scnEvt.id + ' ' + 
							// 								    scnEvt.fields.title + ' ' + 
							// 								    scnEvt.fields.performers );
							var dataClean = cleanData(dat);
							sketch.addData( scnEvt, datEvt, dataClean );
						}
					})(scene, data)
				),
				{
					from : 		 scene.utc_timestamp.getTime() / 1000.0,
					duration : 	 scene.duration,
					data_event : data
				});
		}
	}

	var cleanData = function(raw){
		var rows = [];
		var lines = raw.split("\n");
		for ( var l = "", i = 0, m = lines.length; i < m; i++ ) {
	    	l = lines[i];
	        if ( l[0] === '#' || l === '' ) continue;
	        var dataRaw = l.split(",");
	        var data = [];
	        for ( var d = 0, k = dataRaw.length; d < k-1; d++ ) {
	            if ( d < 4 ) {
	                data[d] = parseFloat( dataRaw[d].trim() );
	            } else {
	            	var dataXYZ = dataRaw[d].replace("(","").replace(")","").trim().split(" ");
	                data[d] = [];
	                for ( var n = 0, r = dataXYZ.length; n < r; n++ ) {
	                	data[d].push( parseFloat( dataXYZ[n] ) );
	                }
	            }
	        }
	        rows[data[0]] = data;
	    }
	    rows = rows.filter(function(){return true;}); // reset index
	    return rows;
	};

	var loadSketch = function () {

		canvas = jQuery('canvas');
		// canvas.css('width','970px');
		// canvas.css('height','500px');

		// scale into window once
		resizeFn();

		jQuery.get( config.sketch.name+'.pde', function(sketchCode){

    		var s = new Processing( canvas.get(0), sketchCode );
    		sketchLoaded( s );
    	});
	};

	var sketchLoaded = function ( s ) {

		sketch = s;
		sketch.setApp( app );

		jQuery('#loading').hide();
		canvas.parent().show();

		pm.listGroups(function(groups){
			group = groups[0];
			pm.listEventsOfType( group.id, 'video', function( vids ){
				for ( var v in vids ) {
					if ( vids[v].fields && vids[v].fields.title && 
						 vids[v].fields.title === '20120516_001_jbmf' ) {
						video = vids[v];
						//console.log( video );
						videoLoaded();
						return;
					}
				}
			});
		});

		setLoadingStatus( "Loading track ..." );
	};

	var setLoadingStatus = function ( msg ) {
		sketch.setLoadingStatus(msg); //isSketchLoaded( config.id, function(s){ s.setLoadingStatus(msg) });
	}

	var jsonParse = function ( json ) {
		return eval( '(' + json + ');' );
	}

	var getElementPosition = function ( obj ) {
	    var curleft = curtop = 0;
	    if (obj.offsetParent) {
	        do {
	            curleft += obj.offsetLeft;
	            curtop  += obj.offsetTop;
	        } while (obj = obj.offsetParent);
	        return {x:curleft,y:curtop};
	    }
	    return undefined;
	}

	return App;
})();