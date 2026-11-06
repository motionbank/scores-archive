
var App = (function () {
    
    /*
     + private variables
     L + + + + + + + + + + + + */
     
    var app, sketch;
    var videos, video;
    
    /*
     + class definition
     L + + + + + + + + + + + + */
    
    var App = function ( s ) {
        
        app = this;
        sketch = s;
        onLocalhost = window.location.href.match(/^http:\/\/127\.0\.0\.1.*/) || 
                      window.location.href.match(/^http:\/\/localhost.*/)    ||
                      window.location.href.match(/^http:\/\/[^/]+\.local.*/);
        // NTTF video list + per-video 'data' events, pre-extracted from the
        // restored notimetofly heroku pg dump into videos.json. The PM1 API
        // (notimetofly.herokuapp.com) is gone.
        jQuery.getJSON('videos.json').done(app.videosLoaded);
    }
    App.prototype = {
//        pieceLoaded : function ( p ) {
//            if ( p ) {
//                piece = p;
//                pm.loadVideosForPiece( piece.id, app.videosLoaded );
//            }
//        },
        videosLoaded : function ( videos_ ) {
            videos = videos_ || [];
            if ( videos.length > 0 ) {
                var sel = document.createElement('select');
                for ( var i = 0, k = videos.length; i < k; i++ ) {
                    var opt = document.createElement('option');
                    opt.setAttribute('value',videos[i].id);
                    opt.textContent = videos[i].title;
                    sel.appendChild( opt );
                }
                jQuery(sel).change(function(){
                    app.videoLoaded( videos[+jQuery(this).val()] || videos[0] );
                });
                if ( !window.appEmbedded ) {
                    var selBlock = jQuery( '#video-selection' ).get(0);
                    selBlock.appendChild( sel );
                }
            }
            app.videoLoaded( videos[0] );
        },
        videoLoaded : function ( v ) {
            video = v;
            app.eventsLoaded( { events: video.data_events || [] } );
        },
        eventsLoaded : function ( data ) {
            if ( data.events.length > 0 ) {
                var eventsRaw = data.events;
                var dataEvent = null;
                for ( var i = 0, k = eventsRaw.length; i < k; i++ ) {
                    if ( eventsRaw[i].event_type === 'data' || eventsRaw[i].description ) {
                        dataEvent = eventsRaw[i];
                        break;
                    }
                }
                if ( dataEvent && dataEvent.data && dataEvent.data.file ) {
                    // PM1 stored tiny JS-object-literal descriptions ({file:"..", fps:50});
                    // parse them safely instead of eval-ing them
                    try {
                        dataEvent.data = JSON.parse( dataEvent.description
                            .replace( /([{,])\s*([A-Za-z_][A-Za-z0-9_]*)\s*:/g, '$1"$2":' )
                            .replace( /'/g, '"' ) );
                    } catch ( e ) {
                        console.error( 'data_inspect: unparseable event description', dataEvent.description, e );
                        dataEvent.data = null;
                    }
//                    app.loadDataEvent( dataEvent, dataEvent.data.file.replace( '.txt', '_25fps.txt' ) );
//                    app.loadDataEvent( dataEvent, dataEvent.data.file.replace( '.txt', '_alt.txt' ) );
//                    app.loadDataEvent( dataEvent, dataEvent.data.file.replace( '.txt', '_left_wrist.txt' ) );
                    //app.loadDataEvent( dataEvent, dataEvent.data.file );
                    app.loadDataEvent( dataEvent.data.file.replace( '.txt', '_com.txt' ) );
                }
            }
        },
        loadDataEvent : function ( dataFile ) {
            jQuery.ajax({
                url: 'data/' + dataFile,
                success: function ( resp ) {
                    app.eventDataLoaded( resp );
                },
                error: function () {
                    console.error( 'data_inspect: failed to load track data', arguments );
                }
            });
        },
        eventDataLoaded : function ( data ) {
            var trackData = [];
            data = data.split("\n");
            for ( var i = 0, k = data.length; i < k; i++ ) {
                var v = data[i].split( " " );
                if ( v[0] && v[1] && v[2] )
                    trackData.push( [parseFloat(v[0]), parseFloat(v[1]), parseFloat(v[2])] );
            }
            sketch.setData( trackData );
        }
    }
    return App;
})();
