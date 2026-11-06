(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("config/config-default", function(_exports, _require, module) {
  module.exports = {
  	debug : false,
  	islocal : false,
  	host : 'scores.motionbank.org',
  	apiHost : 'deborah-hay-app.eu01.aws.af.cm',
  	adminHost : 'deborah-hay-app-admin.eu01.aws.af.cm',
  	baseUrl : '/dh',
  	cloudFront : {
  		baseUrl : '/dh/app',
  		fileHost : '/media',
  		//fileHost : 'motionbank-media.s3.amazonaws.com',
  		streamer : 's12vlv7g59gljg.cloudfront.net'
  	},
  	pieceMaker : {
  		apiKey : 'a79c66c0bb4864c06bc44c0233ebd2d2b1100fbe',
  		host : 'notimetofly.herokuapp.com',
  		basePath : '/dh/piecemaker'
  	},
  	fauxmeo : {
  		host : 'piecemaker.local',
  		basePath : '/video/fauxmeo'
  	}
  };
});
window.require.register("config/config-example", function(_exports, _require, module) {
  module.exports = {
  	debug : false,
  	islocal : false,
  	host : 'scores.motionbank.org',
  	apiHost : 'your.api.host.(back-app/app.js).here',
  	adminHost : 'your.api.host.(back-app/editor.js).here',
  	baseUrl : '/dh',
  	cloudFront : {
  		baseUrl : '/dh/app',
  		fileHost : 'dXXXXXXXXXXXXXXX.cloudfront.net',
  		streamer : 'sXXXXXXXXXXXXXXX.cloudfront.net'
  	},
  	pieceMaker : {
  		apiKey : 'YourApiKeyXXXXXXXXXXXXXXXXXXXXXXX',
  		host : 'your.piecemaker.instance.here',
  		basePath : '/dh/piecemaker'
  	},
  	fauxmeo : {
  		host : 'your.local.video.streamer.host.here',
  		basePath : '/video/fauxmeo'
  	}
  };
});
window.require.register("config/config-local", function(_exports, _require, module) {
  module.exports = {
  	debug : false,
  	islocal : true,
  	host : 'dhayapp.local',
  	apiHost : 'localhost:5555',
  	adminHost : 'localhost:5556',
  	baseUrl : '',
  	cloudFront : {
  		baseUrl : '/dh/app',
  		fileHost : '/media',
  		streamer : 's12vlv7g59gljg.cloudfront.net'
  	},
  	pieceMaker : {
  		apiKey : 'a79c66c0bb4864c06bc44c0233ebd2d2b1100fbe',
  		host : 'localhost:3000',
  		basePath : '/piecemaker'
  	},
  	fauxmeo : {
  		host : 'piecemaker.local',
  		basePath : '/video/fauxmeo'
  	}
  };
});
window.require.register("config/config-test", function(_exports, _require, module) {
  module.exports = {
  	debug : false,
  	islocal : false,
  	host : 'scores.wp10610991.server-he.de',
  	apiHost : 'deborah-hay-app-test.eu01.aws.af.cm',
  	adminHost : 'deborah-hay-app-test-admin.eu01.aws.af.cm',
  	baseUrl : '/dh',
  	cloudFront : {
  		baseUrl : '/dh/app',
  		fileHost : '/media',
  		//fileHost : 'motionbank-media.s3.amazonaws.com',
  		streamer : 's12vlv7g59gljg.cloudfront.net'
  	},
  	pieceMaker : {
  		apiKey : 'a79c66c0bb4864c06bc44c0233ebd2d2b1100fbe',
  		host : 'notimetofly.herokuapp.com',
  		basePath : '/dh/piecemaker'
  	},
  	fauxmeo : {
  		host : 'piecemaker.local',
  		basePath : '/video/fauxmeo'
  	}
  };
});
window.require.register("config/config", function(_exports, _require, module) {
  module.exports = {
  	debug : false,
  	islocal : false,
  	host : 'scores.motionbank.org',
  	apiHost : 'deborah-hay-app.eu01.aws.af.cm',
  	adminHost : 'deborah-hay-app-admin.eu01.aws.af.cm',
  	baseUrl : '/dh',
  	cloudFront : {
  		baseUrl : '/dh/app',
  		fileHost : '/media',
  		//fileHost : 'motionbank-media.s3.amazonaws.com',
  		streamer : 's12vlv7g59gljg.cloudfront.net'
  	},
  	pieceMaker : {
  		apiKey : 'a79c66c0bb4864c06bc44c0233ebd2d2b1100fbe',
  		host : 'notimetofly.herokuapp.com',
  		basePath : '/dh/piecemaker'
  	},
  	fauxmeo : {
  		host : 'piecemaker.local',
  		basePath : '/video/fauxmeo'
  	}
  };
});
window.require.register("init", function(_exports, require, _module) {
  /**
   *	
   */

  jQuery(function(){

  	var initializer = new Initializer();
  	var app = null;

  	/*
  	 + 	initializations begin here
  	 +
  	 L + + + + + + + + + + + + + + + + + + + + + */

  	initializer.add( function initCreateApp (next){
  		app = new (require('js/app'))( initializer, slider );
  		next();
  	});

  	initializer.add( 'later', function initBBHistoryStart (next){
  		Backbone.history.start();
  		next();
  	});
  	
  	initializer.start();

  	/*
  	 + 	listen for window changes, this is a tough nut
  	 +
  	 L + + + + + + + + + + + + + + + + + + + + + */

  	jQuery(window).resize(function(){
  		//console.log( 'window size changed' );
  		app.sizeChanged();
  	});
  });
  
});
window.require.register("js/app", function(_exports, require, module) {
  /**
   *	Main app.
   */


  var App = module.exports = (function(){

  	/*
  	 +	static private variables
  	 +
  	 L + + + + + + + + + + + + + + + + + + + + + + + + + + */

  	 // /(localhost|.+\.local)/.test(window.location.host)
  	var config = require('config/config');

  	var app = null;
  	var appState = null;
  	var appStarted = false;

  	var router = null, gridView = null;

  	var pm = null, pmCache = null;

  	var messenger = null;

  	var currentScene = 'fred + ginger';
  	var currentPerformance = ('D02T03,D04T03,D06T03'.split(',')[parseInt(Math.random()*3)]);
  	var currentSet = false;

  	var sets = {}, setsById = {};

  	/*
  	 +	static private helpers
  	 +
  	 L + + + + + + + + + + + + + + + + + + + + + + + + + + */

  	var debug = function () {
  		if ( config && config.debug ) {
  			for ( var i = 0; i < arguments.length; i++ ) {
  				console.log( arguments[i] );
  			}
  		}
  	}

  	var apiPieceLoaded = function ( piece ) {
  		//console.log( 'Piece loaded: ' + piece.id );
  	}

  	/*
  	 +	"class" App
  	 +
  	 L + + + + + + + + + + + + + + + + + + + + + + + + + + */

  	var App = function ( initializer ) {

  		app = this;
  		_.extend( this, Backbone.Events );
  		
  		initializer.add( 'last', function initCreatePieceMaker (next){
  			pm = new PieceMakerApi( this, config.pieceMaker.apiKey, 'http://' + config.pieceMaker.host );
  	    	pm.loadPiece( 3, function pmPieceLoaded (){
  	    		apiPieceLoaded.apply(this,arguments);
  	    		next();
  	    	});
  		}, this);

  		messenger = new PostMessenger(window);

  		messenger.on( 'piecemakerapi', function msgrPmApi (req,resp) {
  			var cacheKey = '[' + req.data.options.type + '] ' + req.data.options.url;
  			if ( cacheKey in pmCache && pmCache[cacheKey] ) {
  				resp.send('piecemakerapi',{
  					data: pmCache[cacheKey],
  					requestId: req.data.requestId
  				});
  			} else {
  				pm.fetch( req.data.options, 
  					function ( data ) {
  						if ( req.data.options.type == 'get' ) {
  							pmCache[cacheKey] = data;
  						}
  						resp.send('piecemakerapi',{
  							data: data,
  							requestId: req.data.requestId
  						});
  					}, 
  					function ( err ) {
  						// TODO, handle this
  						if ( config && config.debug ) console.log( err );
  				});
  			}
  		});

  		messenger.on( 'log', function msgrLog (req,resp){
  			if ( config && config.debug ) console.log(req.data);
  		});

  		messenger.on( 'get-scene', function msgrGetScene (req,resp){
  			resp.send('set-scene',currentScene);
  		});

  		messenger.on( 'set-scene', function msgrSetScene (req,resp){
  			currentScene = req.data;
  			app.trigger('change:scene',currentScene);
  		});

  		app.on('change:recording',function(rec){
  			currentPerformance = rec;
  		});

  		messenger.on( 'get-config', function msgrGetConfig (req,resp){
  			resp.send('set-config',config);
  		});

  		messenger.accept( 'http://player.vimeo.com' );
  		
  		// messenger.on({
  		// 	matcher: 'finish', 
  		// 	callback: function msgrVimeoFinish ( req, resp ) {
  		// 		app.trigger('vimeo:finish', req, resp);
  		// 	},
  		// 	nameAlias: 'event'
  		// });

  		// messenger.on({
  		// 	matcher: 'ready', 
  		// 	callback: function msgrVimeoReady ( req, resp ) {
  		// 		app.trigger('vimeo:ready', req, resp);
  		// 	},
  		// 	nameAlias: 'event'
  		// });

  		/*
  		- getperformance ()
  		- performance changed (perf-id)
  		- getscene ()
  		- scene changed (scene-id)
  		- time changed (time)
  		- next in line (line-id)
  		*/

  		gridView = new (require('js/views/set-view'))( {}, app );

  		var startApp = function ( next ) {

  			if ( appStarted ) return;
  			
  			var $menuContainer = jQuery('#main-menu-container');

  			var dur = 1200;

  			jQuery( '#content' ).
  				css({
  					opacity: 0
  				}).
  				show().
  				animate({
  					opacity: 1
  				},{
  					duration: dur, 
  					query: false,
  					complete: function () {
  						setTimeout(function(){
  							jQuery( '#main-title a' ).html('...');
  							jQuery( '.content', $menuContainer ).show();
  							next();
  						}, dur/2);
  					}
  				});

  			jQuery( '#cover' ).
  				animate({
  					opacity: 0
  				},{
  					duration: (2*dur)/3, 
  					query: false,
  					complete : function () {
  						jQuery( this ).hide();
  					}
  				});

  			appStarted = true;
  		};

  		router = new (require('js/router'))();

  		router.on('all',function(){
  			if ( !appStarted ) {
  				var cb = (function(app,args){return function () {
  					app.trigger.apply( app, args );
  				}})(app, arguments);
  				startApp( cb );
  			} else {
  				app.trigger.apply(app,arguments);
  			}
  		});

  		router.on('route:changeset',function(set){
  			currentSet = set;
  		});

  		router.on('route:selectset',function(set){
  		});

  		var apiRetrys = 0;
  		initializer.add( function initAppApi (next){
  			jQuery.ajax({
  				url: 'http://' + config.apiHost + '/users/1/sets',
  				dataType: 'json',
  				success: function jqAjaxSuccessUserSets (userWithSets) {
  					sets = {}; setsById = {};
  					_.each(userWithSets.sets,function(set){
  						if ( !sets[set.path] ) {
  							sets[set.path] = set;
  							setsById['id-'+set.id] = set;
  						} else {
  							throw( 'Duplicate path!', set.path, set.id, sets[set.path].id );
  						}
  					});
  					next();
  				},
  				error:function (err) {
  					if ( apiRetrys < 5 ) {
  						setTimeout( function initAppApiRetry () {
  							if ( config && config.debug ) console.log( 'Retry (@1) ' + apiRetrys );
  							initAppApi( next );
  						}, 200 + (apiRetrys * 200) );
  						apiRetrys++;
  					} else {
  						throw(err);
  					}
  				}
  			});
  		}, this);

  		appState = new (require('js/models/appstate'))({id:1});
  	}
  	App.prototype = {
  		getPostMessenger : function () {
  			return messenger;
  		},
  		getScene : function () {
  			return currentScene;
  		},
  		getPerformance : function () {
  			return currentPerformance;
  		},
  		getSet : function ( setUrl ) {
  			return sets[setUrl];
  		},
  		getSetById : function ( setId ) {
  			return setsById['id-'+setId];
  		},
  		getSets : function () {
  			return sets;
  		},
  		getConfig : function () {
  			return config;
  		},
  		sizeChanged : function () {
  			gridView.sizeChanged();
  		},
  		navigate : function () {
  			router.navigate.apply( router, arguments ); // pass on
  		}
  	}
  	return App;
  })();
});
window.require.register("js/models/appstate", function(_exports, _require, module) {
  /**
   *	
   */

  var AppStateModel = module.exports = Backbone.Model.extend({

  	localStorage: new Backbone.LocalStorage("AppStateModel"),

  	defaults : {
  		performances : [],
  		scenes : [],
  		tiles : [] // a 2D array
  	},

  });
});
window.require.register("js/models/cell-model", function(_exports, _require, module) {
  
  var CellModel = module.exports = Backbone.Model.extend({

  	defaults : {
  		title : 'Missing Title Here',
  		description: '',
  		type : 'missing-type',
  		poster : null,
  		/* each field in fields [] will be mapped to this.field_key = field_value */
  		sets : [ /* sets it belongs to */ ]
  	},

  	initialize : function ( opts ) {
  		this.set( opts );
  		var self = this;
  		_.map( opts.fields, function (f) {
  			// if ( self.get( f.name ) === undefined ) {

  				// TODO!
  			if ( f.name == 'play-next' ) {
  				self.set( 'play-next-key', 'vimeo-id' );
  				self.set( 'play-next-value', f.value );
  			} else {
  				self.set( f.name, f.value );
  			}

  			// } else {
  			// 	console.log( 'Possible cell field conflict: ', opts, f );
  			// }

  			//console.log( f );
  		});
  	}

  });
});
window.require.register("js/models/set-model", function(_exports, _require, module) {
  
  var SetModel = module.exports = Backbone.Model.extend({

  	defaults : {
  		title : 'A set title',
  		description : 'A longer text describing this set',
  		path : 'path/to/this/set',
  		poster : '',
  		grid_cols : '',
  		grid_rows : '',
  		cell_width : '',
  		cell_height : '',
  		creator : { /* a user */ },
  		cells : [ /* some cells */ ]
  	},

  	initialize : function () {

  	}

  });
});
window.require.register("js/router", function(_exports, _require, module) {
  /*
   +	A quite standard backbone router .. 
   +
   L + + + + + + + + + + + + + + + + + + + + + + + + */

  var Router = module.exports = Backbone.Router.extend({

  	initialize : function () {
  	},

  	routes : {
  		'set/:setname'  : 'changeset',
  		'sets'			: 'selectset'
  	}
  	
  });
});
window.require.register("js/slider", function(_exports, _require, module) {
  
  var $mainMenuContainer 		= null,
  	$mainMenuSlider 		= null,
  	$mainMenuSliderLink 	= null,
  	currentRatio 			= 0;

  var SliderController = function( app ) {

  	_.extend( this, Backbone.Events );

  	var self = this;

  	app.on( 'change:position', function (direction) {
  		if ( direction === '<<' ) {
  			stepOnce( 0.5, -1 );
  		} else {
  			stepOnce( 0.5,  1 );
  		}
  	});

  	var stepOnce = function ( len, dir ) {
  		var sliderWidth = $mainMenuSliderLink.width();
  		var step = sliderWidth / ($mainMenuContainer.width() * 1.0 - sliderWidth);
  		var nextRatio = currentRatio + (step * len) * dir;
  		if ( nextRatio >= 0 && nextRatio <= 1 ) {
  			self.setPosition( nextRatio );
  		} else if ( nextRatio > 1 && currentRatio !== 1 ) {
  			self.setPosition( 1 );
  		}  else if ( nextRatio < 0 && currentRatio !== 0 ) {
  			self.setPosition( 0 );
  		}
  	};

  	$mainMenuContainer = jQuery('#main-menu-container');
  	$mainMenuSlider = jQuery( '#slider', $mainMenuContainer ); // TODO: safari insists on the line being inside ul
  	$mainMenuSliderLink = jQuery( 'a', $mainMenuSlider );

  	var dragAreaWidth = $mainMenuContainer.width();
  	var isDragging = false, isHover = false;

  	$mainMenuSlider.draggable({
  		axis: 'x',
  		containment: $mainMenuContainer,
  		cursor : 'pointer',
  		start : function () {
  			dragAreaWidth = $mainMenuContainer.width() - $mainMenuSlider.width();
  			isDragging = true;
  		},
  		drag : function (evt, drag) {
  			self.setPosition( drag.position.left / dragAreaWidth );
  		},
  		stop: function (evt, drag) {
  			isDragging = false;
  			if ( !isHover ) {
  				//$mainMenuSliderLink.animate({height: '8px'},{duration:100});
  				$mainMenuSliderLink.css({cursor:'default'});
  			}
  		}
  	});

  	$mainMenuSlider.hover(function(evt){
  		isHover = true;
  		//$mainMenuSliderLink.animate({height: '72px'},{duration:100});
  		$mainMenuSliderLink.css({cursor:'move'});
  	},function(evt){
  		isHover = false;
  		if ( !isDragging ) {
  			//$mainMenuSliderLink.animate({height: '8px'},{duration:100});
  			$mainMenuSliderLink.css({cursor:'default'});
  		}
  	});

  	jQuery(window).keydown(function(evt){
  		if ( evt.which == 37 ) {
  			stepOnce( 0.5, -1 );
  		} else if ( evt.which == 39 ) {
  			stepOnce( 0.5,  1 );
  		}
  	});

  	this.setSize( 0.1 );
  };

  SliderController.prototype = {
  	setPosition : function (r,trigger) {
  		if ( r < 0 || r > 1 ) {
  			throw( 'Bad parameter for setPosition()' ); return;
  		}
  		$mainMenuSlider.css({
  			left: (r * ($mainMenuContainer.width() - $mainMenuSliderLink.width())) + 'px'
  		});
  		if ( trigger === undefined || trigger === true )
  			this.trigger('change:slider',r);
  		currentRatio = r;
  	},
  	setSize : function ( r ) {
  		if ( r < 0 || r > 1 ) {
  			throw( 'Bad parameter for setSize() ' + r ); return;
  		}
  		if ( r == 1 ) return this.hide();

  		var containerWidth = $mainMenuContainer.width();
  		var sliderWidth = $mainMenuSliderLink.width();

  		var sizePx = r * containerWidth;
  		if ( sizePx < 10 ) sizePx = 10;

  		$mainMenuSliderLink.css({width: sizePx});

  		// TODO: reset ratio
  	},
  	show : function () {
  		$mainMenuSlider.show();
  	},
  	hide : function () {
  		$mainMenuSlider.hide();
  	}
  };

  module.exports = SliderController;
  
});
window.require.register("js/templates/cell-view-tmpl", function(_exports, _require, module) {
  module.exports = "\n	<div class=\"info\">\n		<h1 class=\"title\"><% if ( link ) { %><a href=\"<%= link %>\"><% } %><%= title %></h1><% if ( link ) { %></a><% } %>\n		<div class=\"description\"><%= description %></div>\n	</div>\n\n<div class=\"content\"><%= content %></div>";
  
});
window.require.register("js/views/cell-view-context", function(_exports, require, module) {
  
  var CellView = require('js/views/cell-view');
  var __super = CellView.prototype;

  var CellViewContext = module.exports = require('js/views/cell-view').extend({
  	
  	initialize: function () {

  		// call initialize on super!
  		__super.initialize.apply(this,arguments);

  		this.respondToSceneChange = this.respondToRecordingChange = false;
  	},
  	
  	activate : function () {

  		this.$el.addClass( 'active' );
  		this.isActive = true;

  		var self 	= this,
  			app 	= this.getApp(),
  			config 	= app.getConfig(),
  			iframeWin = null;

  		if ( config.islocal ) {

  			var vimeoFileName = this.cell.get('vimeo-file');

  			if ( !vimeoFileName ) {
  				vimeoFileName = this.cell.get('title_org').split('---')[1];
  				vimeoFileName = vimeoFileName.replace(/^[\s]*/g,'').replace(/[\s]*$/g,'');
  				if ( vimeoFileName.indexOf('.mp4') !== -1 ) vimeoFileName = vimeoFileName.replace('.mp4','');
  			}

  			this.iframe = jQuery( '<iframe id="iframe-'+this.cid+'" '+
  									 'src="modules/flowplayer/fauxmeo.html?'+
  									 	'vimeo-id='+this.cell.get('vimeo-id')+'&'+
  									 	'vimeo-file='+vimeoFileName+'" '+
  									 'frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' );
  		} else {

  			this.iframe = jQuery( '<iframe id="iframe-'+this.cid+'" '+
  										 'src="http://player.vimeo.com/video/'+this.cell.get('vimeo-id')+'?api=1" '+
  										 'frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' );
  		}
  		
  		var messenger = self.messenger = new PostMessenger(window);

  		if ( !config.islocal ) {

  			messenger.accept( 'http://player.vimeo.com' )

  			messenger.on({
  				matcher: 'finish', 
  				callback: function(req, resp){
  					console.log( messenger.hash + '-finish' );
  					app.trigger( 'grid:activate-next-by-attr', 
  								 self.cell.get('play-next-key'),
  								 self.cell.get('play-next-value') );
  					self.deactivate();
  				},
  				nameAlias: 'event'
  			});

  			messenger.on({
  				matcher: 'ready', 
  				callback: function( req, resp ){
  					console.log( messenger.hash + '-ready' );
  					resp.send({
  						name: 'play', data: '',
  						nameAlias: 'method'
  					});
  				},
  				nameAlias: 'event'
  			});

  		} else {

  			messenger.on( 'fauxmeo:ready', function(req, resp){

  			});

  			messenger.on( 'fauxmeo:finish', function(req, resp){
  				if ( req.message.source === iframeWin ) {
  					app.trigger( 'grid:activate-next-by-attr',
  								 self.cell.get('play-next-key'),
  								 self.cell.get('play-next-value') );
  					self.deactivate();
  					messenger.disconnect();
  				} else {
  				}
  			});

  		}

  		this.iframe.load( function () {

  			iframeWin = document.getElementById('iframe-'+self.cid).contentWindow;

  			if ( !config.islocal ) {

  				messenger.send({
  					name: 'addEventListener', data: 'finish', 
  					receiver: iframeWin, receiverOrigin: 'http://player.vimeo.com',
  					nameAlias: 'method', dataAlias: 'value'
  				});

  			} else {
  				
  				messenger.send( 'connect', config, iframeWin );
  			
  			}
  		});

  		this.$container.empty();
  		this.$container.append( this.iframe );
  	},

  	deactivate : function () {
  		
  		__super.deactivate.apply(this,arguments);
  		
  		if ( this.messenger ) {
  			this.messenger.disconnect();
  			this.messenger = null;
  		}
  	}
  });
});
window.require.register("js/views/cell-view-recording", function(_exports, require, module) {
  
  var CellView = require('js/views/cell-view');
  var __super = CellView.prototype;

  var currentlyPlaying = null;

  var CellViewRecording = module.exports = require('js/views/cell-view').extend({

  	respondToSceneChange : true,

  	iFrameWindow : null,
  	messenger : null,

  	render: function () {

  		// call render on super!
  		var rendered = __super.render.apply(this,arguments);

  		if ( this.cell.get('auto-activate-on-start') ) {
  			this.activate();
  		}

  		return rendered;
  	},

  	activate : function () {

  		this.$el.addClass( 'active' );
  		this.isActive = true;

  		var self = this;
  		var app = this.getApp();
  		var config = app.getConfig();

  		currentlyPlaying = this;

  		this.iframe = jQuery( '<iframe id="iframe-'+this.cid+'" '+
  									 'src="'+this.cell.get('content-url')+'?'+
  									 	'v='+this.cell.get('file-name')+'&'+
  									 	'id='+this.cell.get('videoId')+'" '+
  									 'frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' );

  		this.iframe.load(function(){

  			self.iFrameWindow = document.getElementById('iframe-'+self.cid).contentWindow;

  			// TODO: potantially problematic as you'd see some old / unrelated material
  			if ( self.cell.get('recording') ) {
  				app.trigger('change:recording', self.cell.get('recording'));
  			}

  			messenger = app.getPostMessenger();
  			messenger.send( 'connect', config, self.iFrameWindow );

  			messenger.on( 'flowplayer:finish', function(req, resp){
  				app.trigger( 'grid:activate-next-by-attr', 
  							 currentlyPlaying.cell.get('play-next-key'), 
  							 currentlyPlaying.cell.get('play-next-value') ); // TODO! why are these not all called?

  				currentlyPlaying = null;
  				self.deactivate();
  			});
  		});

  		this.$container.empty();
  		this.$container.append( this.iframe );
  	},

  	sceneChanged : function (newScene) {
  		var app = this.getApp();

  		if ( this.isVisible ) {
  			if ( !this.isActive ) {
  				var config = app.getConfig();
  				var imgSrc = 'http://' + config.cloudFront.fileHost + 
  								config.cloudFront.baseUrl + '/cells/recording/full/' +
  								this.cell.get('file-name')+'-'+newScene.replace(/[^-a-z0-9]/gi,'-').replace(/-+/ig,'-')+'.png';
  				var img = new Image();
  				var self = this;
  				img.onload = function () {
  					self.$el.css({
  						'background-image': 'url("'+imgSrc+'")'
  					});
  				}
  				img.onerror = function () {
  					self.$el.css({
  						'background-image': 'url("http://' + config.cloudFront.fileHost + 
  								config.cloudFront.baseUrl + '/cells/poster/full/missing.jpg")'
  					});
  				}
  				img.src = imgSrc;
  			} else {
  				app.getPostMessenger().send( 'set-scene', newScene, this.iFrameWindow );
  			}
  		}
  	}
  });
});
window.require.register("js/views/cell-view-set-link", function(_exports, require, module) {
  
  var CellView = require('js/views/cell-view');
  var __super = CellView.prototype;

  var CellViewSetLink = module.exports = CellView.extend({

  	respondToSceneChange : false,
  	respondToRecordingChange : false,

  	initialize : function () {

  		__super.initialize.apply( this, arguments );
  	
  		var setId = this.cell.get('set-id');
  		var set = this.set = this.getApp().getSetById( setId );

  		if ( !this.set ) {
  			throw( 'Unable to find that set! ' + setId );
  		}

  		this.cell.set( 'title', 		'Set: ' + set.title );
  		this.cell.set( 'description', 	set.description );
  		this.cell.set( 'link', 			'#set/' + set.path );
  	},

  	render : function () {

  		__super.render.apply( this, arguments );

  		var self = this;
  		var app = this.getApp();
  		var config = app.getConfig();

  		var imgSrc 	= 'http://' +
  						config.cloudFront.fileHost + 
  						config.cloudFront.baseUrl + 
  						'/sets/poster/full/' +
  						this.set.poster;

  		this.$el.css({
  			'background-image' : 'url('+imgSrc+')'
  		});

  		this.$el.click(function(){
  			app.navigate( 'set/' + self.set.path, true );
  		});

  		return this.$el;
  	},

  	show : function () {

  		__super.show.apply( this, arguments );

  	}

  });
});
window.require.register("js/views/cell-view-text", function(_exports, require, module) {
  
  var CellView = require('js/views/cell-view');
  var __super = CellView.prototype;

  var CellViewText = module.exports = CellView.extend({

  	// instance variables

  	iframe : null,
  	iframeWindow : null,
  	postmessenger : null,

  	initialize: function () {

  		// call initialize on super!
  		__super.initialize.apply(this,arguments);
  	},

  	render : function () {

  		__super.render.apply(this,arguments);

  		this.$el.addClass( 'active' );
  		this.isActive = true;

  		var self = this;
  		var config = this.getApp().getConfig();

  		self.postmessenger = this.getApp().getPostMessenger();
  		
  		this.iframe = jQuery( '<iframe id="iframe-'+this.cid+'" '+
  									 'src="'+this.cell.get('content-url')+'" '+
  									 'frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' );
  		this.iframe.load(function(){
  			
  			self.iframeWindow = document.getElementById('iframe-'+self.cid).contentWindow;
  			self.postmessenger.send( 'connect', config, self.iframeWindow );
  		
  		});

  		this.$container.empty();
  		this.$container.append( this.iframe );

  		return this.$el;
  	},

  	deactivate : function () {
  		// noop
  	},

  	sceneChanged : function ( newScene ) {

  		if ( this.isVisible ) {

  			this.postmessenger.send( 'set-scene', newScene, this.iframeWindow );
  		}
  	}
  });
});
window.require.register("js/views/cell-view-visualization", function(_exports, require, module) {
  
  var CellView = module.exports = require('js/views/cell-view').extend({

  	respondToSceneChange : true,

  	recordingChanged : function ( newRecording ) {
  		
  		this.sceneChanged( this.currentScene );
  	},

  	sceneChanged : function ( newScene ) {
  		this.currentScene = newScene;

  		if ( newScene && this.isVisible && !this.isActive ) {

  			var self 	= this;
  			var app 	= this.getApp();
  			var config 	= app.getConfig();

  			var scene 	= newScene.replace(/[^-a-z0-9]/gi,'-').replace(/-+/ig,'-');
  			var imgSrc 	= 'http://' + config.cloudFront.fileHost + 
  								config.cloudFront.baseUrl + 
  									'/cells/visualization/full/'+this.cell.get('base-path');

  			var pathPieces = [];

  			if ( this.respondToRecordingChange === true ) {
  				pathPieces.push( app.getPerformance() );
  			}

  			if ( this.respondToSceneChange === true ) {
  				pathPieces.push( scene );
  			}

  			imgSrc += pathPieces.join('_');

  			imgSrc += '.png';

  			if ( this.cell.get('fixed-image') ) {
  				imgSrc = 'http://' + config.cloudFront.fileHost + 
  								config.cloudFront.baseUrl + 
  									'/cells/visualization/full/' + this.cell.get('fixed-image');
  			}

  			var img = new Image();
  			img.onload = function () {
  				self.$el.css({
  					'background-image': 'url("'+imgSrc+'")'
  				});
  			}
  			img.onerror = function () {
  				self.$el.css({
  					'background-image': 'url("http://' + config.cloudFront.fileHost + 
  							config.cloudFront.baseUrl + '/cells/poster/full/missing.jpg")'
  				});
  			}
  			img.src = imgSrc;
  		}
  	}
  });
});
window.require.register("js/views/cell-view", function(_exports, require, module) {
  
  var CellModel = null;
  var app = null, config = null;

  var CellView = module.exports = Backbone.View.extend({

  	tagName : 'article',
  	attributes : {
  		'class' : 'cell'
  	},

  	cell : null,
  	isVisible : false,
  	isActive : false,

  	currentRecording : '',
  	currentScene : '',

  	respondToSceneChange : false,
  	respondToRecordingChange : false,

  	$h1Title : null, 
  	$container : null,

  	initialize : function ( opts, mainApp ) {

  		app = mainApp;

  		config = app.getConfig();

  		CellModel = CellModel || require('js/models/cell-model');

  		this.cell = new CellModel( opts );

  		this.respondToRecordingChange 	= this.cell.get('per-recording') === 'true' ? true : false;
  		this.respondToSceneChange 		= this.cell.get('per-scene') === 'false' ? false : true;

  		//if ( this.respondToSceneChange ) {
  			app.on( 'change:scene', function bbChangeScene (){
  				this.sceneChanged.apply(this,arguments);
  			}, this);
  		//}

  		//if ( this.respondToRecordingChange ) {
  			app.on( 'change:recording', function bbChangeRecording (){
  				this.recordingChanged.apply(this, arguments);
  			}, this);
  		//}

  		this.hide();
  	},

  	render : function () {

  		this.$el.addClass( 'type-'+this.cell.get('type') );
  		
  		var elHtml = _.template( require('js/templates/cell-view-tmpl'), {
  			title : this.cell.get('title'),
  			link : this.cell.get('link'),
  			description : this.cell.get('description') || '',
  			content : this.cell.get('content') || '',
  		});

  		this.$el.html( elHtml );
  		this.$container = jQuery( '.content', this.$el );

  		var previewImg = this.cell.get('poster');
  		if ( !previewImg ) {
  			this.$el.addClass( 'no-img' );
  		}

  		var self = this;
  		var app = this.getApp();

  		if ( 'title,text,visualization'.split(',').indexOf(this.cell.get('type')) === -1 ) {

  			this.$el.click(function(evt){
  				if ( self.isActive ) return;
  				evt.preventDefault();

  				app.trigger('grid:deactivate-all');
  				app.trigger('grid:activate',self.cid);
  				self.activate();
  			});
  		}

  		return this.$el;
  	},

  	show : function () {

  		if ( this.isVisible ) return;

  		this.$el.show();
  		this.isVisible = true;

  		var self = this;
  		var scene = app.getScene();
  		var cellType = this.cell.get('type');

  		if ( this.respondToSceneChange && scene ) { 

  			this.sceneChanged( scene );

  		} else if ( cellType !== 'title' && cellType !== 'text' ) {

  			var imgSrc = this.cell.get('poster');

  			if ( this.$el.css('background-image') === 'none' && imgSrc ) {
  				imgSrc = 'http://' + config.cloudFront.fileHost + config.cloudFront.baseUrl + '/cells/poster/full/' + imgSrc;
  				var img = new Image();
  				img.onload = function () {
  					self.$el.css({
  						backgroundImage:'url("'+imgSrc+'")'
  					});
  				};
  				img.onerror = function () {
  					self.$el.css({
  						'background-image': 'url("http://' + config.cloudFront.fileHost + 
  								config.cloudFront.baseUrl + '/cells/poster/full/missing.jpg")'
  					});
  				};
  				img.src = imgSrc;
  			}
  		}
  	},

  	hide : function () {
  		this.$el.hide();
  		this.isVisible = false;
  	},

  	activate : function () {
  	},

  	deactivate : function () {
  	
  		this.$el.removeClass( 'active' );
  		this.isActive = false;

  		this.sceneChanged( app.getScene() );

  		this.$container.html('');
  	},

  	recordingChanged : function (newRecording) {
  	},

  	sceneChanged : function (newScene) {
  		if ( this.isVisible && !this.isActive ) {
  			//console.log( 'scene changed: ' + newScene );
  		}
  	},

  	getApp : function () {
  		return app;
  	},

  	getConfig : function () {
  		return config;
  	}
  });
});
window.require.register("js/views/select-set-view", function(_exports, _require, module) {
  
  var app 		= null, 
  	rendered 	= false, 
  	config 		= null,
  	$mainTitleLink = null;

  var SelectSetView = module.exports = Backbone.View.extend({

  	el : '#select-set-view',

  	initialize : function ( _, gv, mapp ) {

  		app = mapp;
  		config = app.getConfig();

  		app.on( 'route:selectset', function () {
  			this.show();
  		}, this);

  		app.on( 'route:changeset', function () {
  			this.hide();
  		}, this);

  		$mainTitleLink = jQuery('#main-title a');
  	},

  	render : function () {

  		var $sets = jQuery('#set-list');
  		var sets = app.getSets();
  		var self = this;
  		var containers = [];

  		_.map(sets,function(set,path){
  			var $setContainer = jQuery( '<div class="set left" />' );
  			var $setLink = jQuery( '<a href="#set/'+path+'">'+
  										'<div class="title">'+set.title+'</div>'+
  										'<img src="http://' + config.cloudFront.fileHost + config.cloudFront.baseUrl + 
  																	'/sets/poster/medium/'+set.poster+'" />'+
  									'</a>' );
  			$setContainer.append( $setLink );
  			containers.push( $setContainer );
  		});
  		$sets.append( containers );

  		rendered = true;
  	},

  	show : function () {
  		
  		if ( !rendered ) {
  			this.render();
  		}

  		$mainTitleLink.html('Sets curated by Motion Bank');
  		$mainTitleLink.attr('href','#sets');
  		
  		this.$el.show();
  	},

  	hide : function () {
  		this.$el.hide();
  	}

  });
});
window.require.register("js/views/set-view", function(_exports, require, module) {
  
  var cellData = {}, cellViews = {}, cellViewsArr = [];
  var categories = [];

  var views = {};

  var currentSet = null;

  var cellBorderHandle = 5;
  var gridXVisible = 4, gridYVisible = 3;
  var cellWidth, cellHeight;
  var lastRatio = 0.0;

  var app = null, config = null, setSelectorView = null;
  $mainTitleLink = null, $backgroundGrid = null;

  var clickedCellCid = null;
  var showCellInfo = false;

  var autoPlayTid = -1;

  var GridView = module.exports = Backbone.View.extend({

  	el : '#grid-view',

  	initialize : function ( _, mainapp ) {

  		var self = this;
  		app = mainapp;
  		config = app.getConfig();

  		$mainTitleLink = jQuery('#main-title a');
  		$backgroundGrid = jQuery('#background-grid');

  		this.$elParent = this.$el.parent();
  		
  		// app.on( 'change:slider', function bbChangeSliderCB (val) {
  		// 	this.setPosition( val );
  		// }, this);

  		app.on( 'route:changeset', function bbRouteChangeSetCB (nextSetName){
  			this.loadSet(nextSetName);
  		}, this);

  		app.on( 'route:selectset', function () {
  			this.deactivateAll();
  			this.$elParent.hide();
  		}, this);

  		app.on( 'grid:activate-next-by-attr', this.activateNextByAttr, this );
  		app.on( 'grid:deactivate-all', this.deactivateAll, this );
  		app.on( 'grid:activate', this.setClicked, this );

  		setSelectorView = new (require('js/views/select-set-view'))({}, self, app);

  		var touchEventManager = this.$el.hammer();
  		touchEventManager.on('swiperight', function (event) {
  			event.stopPropagation();
  			app.trigger('change:position','<<');
  		});
  		touchEventManager.on('swipeleft', function (event) {
  			event.stopPropagation();
  			app.trigger('change:position','>>');
  		});

  		jQuery('#show-cell-infos-item').click(function(evt){
  			evt.preventDefault();
  			showCellInfo = !showCellInfo;
  			if ( showCellInfo ) {
  				jQuery('.cell').addClass('with-info');
  			} else {
  				jQuery('.cell').removeClass('with-info');
  			}
  		});

  		jQuery('#toggle-set-selector-item').click(function(evt){
  			var selectorVisible = setSelectorView.$el.css('display') === 'block';
  			var $item = jQuery(this);
  			var $link = jQuery('a',$item);
  			if ( selectorVisible ) {
  				$item.attr('title',$link.data('title-set'));
  				$link.attr('href','#set/' + ((currentSet && currentSet.path)||'overview'));
  			} else {
  				$item.attr('title',$link.data('title-selector'));
  				$link.attr('href','#set/sets');
  			}
  		});

  		this.$el.parent().scroll(function(){
  			self.setPosition( self.getPosition() );
  		});
  	},

  	loadSet : function ( setUrl ) {
  		
  		var set = app.getSet( setUrl );

  		if ( !set ) {
  			throw( 'Set could not be loaded: ' + setUrl );
  			return;
  		}

  		if ( currentSet === set ) {
  			this.show();
  			return;
  		}

  		if ( !set.cells ) {
  			var self = this;
  			(function(){
  				var apiRetrys = 0;
  				var callApi = function () {
  					jQuery.ajax({
  						url: 'http://' + config.apiHost + '/sets/' + set.id,
  						dataType:'json',
  						success:function(data){
  							set.cells = data.cells;
  							self.loadSet( set.path );
  						},
  						error:function(err){
  							if ( apiRetrys < 5 ) {
  								setTimeout( function initAppApiRetry () {
  									if ( config && config.debug ) console.log( 'Retry (@2) ' + apiRetrys );
  									callApi();
  								}, 200 + (apiRetrys * 200) );
  								apiRetrys++;
  							} else {
  								throw(err);
  							}
  						}
  					});
  				}
  				callApi();
  			})();
  			return;
  		}

  		currentSet = set;
  		this.show();

  		this.deactivateAll();

  		this.updateGridDimensions();

  		views.CellView = views.CellView || require('js/views/cell-view');

  		this.$el.empty(); // TODO: more sane way of cleaning up?

  		cellViews = {};
  		cellViewsArr = [];
  		clickedCellCid = null;

  		var renderedCells = [];

  		for ( var i = 0; i < currentSet.cells.length; i++ ) {

  			var opts = currentSet.cells[i];
  			
  			try {
  				views[opts.type] = views[opts.type] || require('js/views/cell-view-'+opts.type);
  			} catch (e) { /* ignore */ }

  			if ( opts.title ) {
  				opts['title_org'] = opts.title;
  				opts.title = opts.title.replace(/[\s]*---.+$/,'');
  			}

  			var cv = new ( views[opts.type] || views.CellView )( opts, app );
  			renderedCells.push( cv.render() );

  			cellViews[opts.type] = cellViews[opts.type] || [];
  			cellViews[opts.type].push( cv );

  			cellViewsArr.push( cv );
  		}

  		this.$el.append( renderedCells );

  		this.setPosition( 0 );
  	},

  	updateVisibleCells : function () {

  		if ( !cellData || !currentSet ) return;

  		var w = this.$el.parent().width();
  		var h = this.$el.parent().height();

  		var gridWidth = currentSet.grid_cols;
  		var xFrom = Math.round( lastRatio * (gridWidth - gridXVisible) );

  		var cw = 100.0/gridWidth;
  		var ch = 100.0/gridYVisible;

  		var absCw = (1.0*w)/gridXVisible,
  			absCh = (1.0*h)/gridYVisible;

  		_.each( cellViewsArr, function(cv, i){ 

  			var cellDim = cv.cell.get('extra');

  			cv.$el.removeClass('lastcol').removeClass('lastrow');

  			// ... not too far left or right
  			if ( !( (cellDim.x + (cellDim.width-1)) < xFrom - 1 ||
  					 cellDim.x > xFrom + gridXVisible + 1 ) 
  				) {
  				
  				var left  = cw * cellDim.x;
  				var width = cw * cellDim.width;

  				// show, set position and size in % to make responsive
  				cv.show();
  				cv.$el.css({
  					left: 	left+'%',
  					top: 	(ch*cellDim.y)+'%',
  					width: 	width+'%',
  					height: (ch*cellDim.height)+'%'
  				});

  				// add media-query style classes to cells
  				cv.$el.attr( 'class', cv.$el.attr('class').replace(/cell-(width|height)-[0-9]+/ig,'') );
  				cv.$el.addClass( 'cell-width-'+ (parseInt((absCw*cellDim.width) /50)*50) ).
  					   addClass( 'cell-height-'+(parseInt((absCh*cellDim.height)/50)*50) );

  				if ( (cellDim.x-xFrom) + cellDim.width >= gridXVisible ) {
  					cv.$el.addClass('lastcol');
  				}
  				if ( cellDim.y+cellDim.height >= gridYVisible ) {
  					cv.$el.addClass('lastrow');
  				}
  			} else {
  				cv.hide();
  			}

  			if ( showCellInfo ) {
  				cv.$el.addClass('with-info');
  			} else {
  				cv.$el.removeClass('with-info');
  			}
  		});

  		this.checkSlider();
  	},

  	updateGridDimensions : function () {

  		if ( !currentSet ) return;

  		var w = this.$el.parent().width();
  		var h = this.$el.parent().height();
  		
  		var ch = parseInt( Math.floor( h / currentSet.grid_rows ) );
  		var cw = (currentSet.cell_width / currentSet.cell_height) * ch;

  		gridXVisible = parseInt( w / cw );
  		gridYVisible = currentSet.grid_rows;

  		if ( w - (gridXVisible * cw) > cw / 2 ) {
  			gridXVisible++;
  		}
  		cw = parseInt( Math.floor( w / gridXVisible ) );

  		this.$el.css({
  			width: parseInt( cw * currentSet.grid_cols ) + 'px'
  		});

  		cellWidth = cw;
  		cellHeight = ch;

  		// $backgroundGrid.empty();
  		// var rows = [];
  		// for ( var iy = 0; iy < gridYVisible; iy++ ) {
  		// 	var cols = [];
  		// 	for ( var ix = 0; ix < gridXVisible; ix++ ) {
  		// 		var col = jQuery('<td></td>');
  		// 		col.css({
  		// 			width: (100.0/gridXVisible)+'%'
  		// 		});
  		// 		if ( ix == gridXVisible-1 ) {
  		// 			col.addClass('lastcol');
  		// 		}
  		// 		cols.push(col);
  		// 	}
  		// 	var row = jQuery('<tr></tr>');
  		// 	if ( iy == gridYVisible-1 ) {
  		// 		row.addClass('lastrow');
  		// 	}
  		// 	row.append(cols);
  		// 	rows.push( row );
  		// }
  		// $backgroundGrid.append(rows);

  		this.checkSlider();
  	},

  	setPosition : function ( ratio ) {

  		if ( !cellData || !currentSet ) return;

  		lastRatio = ratio;

  		var $p = this.$el.parent();
  		$p.scrollLeft( ratio * (this.$el.width() - $p.width()) );

  		this.updateVisibleCells();
  	},

  	getPosition : function () {
  		var $p = this.$el.parent();
  		var v = $p.scrollLeft() / (this.$el.width()-$p.width());
  		return v;
  	},

  	checkSlider : function () {

  		if ( currentSet.grid_cols <= gridXVisible ) {

  		} else {

  			// TODO: scroll window into view!

  		}
  	},

  	show : function () {

  		if ( currentSet ) {
  			$mainTitleLink.html( currentSet.title );
  			$mainTitleLink.attr( 'href', '#set/'+currentSet.path );
  		}

  		this.$elParent.show();
  		if ( cellData.cells && cellData.cells.length > (gridXVisible * gridYVisible) ) { // if returning to same as before
  			// TODO: still needed?
  		}
  		this.setPosition(0);
  	},

  	deactivateAll : function () {
  		if ( cellData && cellViewsArr ) {
  			for ( var i = 0; i < cellViewsArr.length; i++ ) {
  				cellViewsArr[i].deactivate();
  			}
  		}

  		clearTimeout( autoPlayTid );
  	},

  	setClicked : function ( cell_cid ) {
  		clickedCellCid = cell_cid;
  	},

  	activateNextByAttr : function ( key, value ) {

  		if ( !key || !value ) return;
  		
  		var self = this;

  		clearTimeout( autoPlayTid );

  		for ( var i = 0; i < cellViewsArr.length; i++ ) {
  			var cell = cellViewsArr[i];
  			if ( cell.cell.get(key) === value ) {
  				cell.activate();

  				var cellDim = cell.cell.get('extra');
  				var r = (cellDim.x + cellDim.width / 2.0 - gridXVisible / 2.0) / (currentSet.grid_cols - gridXVisible); // TODO: something is wrong here
  				
  				if ( r < 0 ) r = 0;
  				if ( r > 1 ) r = 1;
  				
  				// TODO: scroll window into view?
  				// app.getSlider().setPosition( r, false );
  				this.setPosition( r );

  				var autoplayOnLocal = true; /* app.getConfig().islocal */
				if ( autoplayOnLocal ) {
  					autoPlayTid = setTimeout(function(){
  						var cellm 	= cell.cell,
  							key 	= cellm.get('play-next-key'),
  							value 	= cellm.get('play-next-value');
  						if ( key && value ) {
  							cell.deactivate();
  							self.activateNextByAttr( key, value );
  						}
  					}, 1000 * 60 * 4 );
  				}

  				return;
  			}
  		}
  	},

  	// playNext : function ( prevCellView ) {

  	// 	var i = cellViewsArr.indexOf( prevCellView );
  	// 	if ( i === -1 ) return;
  	// 	var n = i+1;
  	// 	n %= cellViewsArr.length;
  	// 	if ( cellViewsArr[n].cid === clickedCellCid ) return;
  	// 	while ( cellViewsArr[n].isVisible === false 
  	// 			|| cellViewsArr[n].$el.hasClass('type-context') !== true ) {
  	// 		n++;
  	// 		n %= cellViewsArr.length;
  	// 		if ( n === i ) return;
  	// 		if ( cellViewsArr[n].cid === clickedCellCid ) return;
  	// 	}
  	// 	cellViewsArr[n].activate();
  	// },

  	getApp : function () {
  		return app;
  	},

  	sizeChanged : function () {
  		if ( currentSet ) {

  			var gridXVisiblePrev = gridXVisible, gridYVisiblePrev = gridYVisible;
  			this.updateGridDimensions();

  			if ( gridXVisible !== gridXVisiblePrev || gridYVisible !== gridYVisiblePrev ) {

  				this.updateVisibleCells();
  			}
  		}
  	}

  });
});
