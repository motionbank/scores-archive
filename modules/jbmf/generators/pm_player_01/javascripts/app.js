(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var _cmp = 'components/';
  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf(_cmp) === 0) {
        start = _cmp.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return _cmp + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var _reg = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (_reg.test(name) ? root + '/' + name : name).split('/');
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
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  require._cache = cache;
  globals.require = require;
})();
require.register("config/config", function(exports, require, module) {
module.exports = {
	// PieceMaker 2 event data is served from static JSON extracted from the
	// restored heroku pg dump (api/jbmf/pm2/<vid>.json). The live API and its
	// host are gone; see jbmf/MODERNIZATION.md §6.
	flowplayer : {
		// filming MP4s are self-hosted (mirrored from CloudFront);
		// see media/README.md
		file_host : '/media',
		base_url : 'jbmf/piecemaker'
	},
	analytics : {
		id : 'UA-41625019-1'
	}
}
});

;require.register("js/classes/player.api", function(exports, require, module) {

// #Player API

module.exports = {

	// ##Controlling video playback
			
	play : function () {
	},
	seekTo : function () {
	},
	pause : function () {
	},
	stop : function () {
	},
	playing : function () {
	},
	paused : function () {
	},
	currentTime : function ( seconds ) {
	},
	fps : function () {
		return 25.0;
	},

	// loop : function ( yesno ) {
	// },
	
	/*speed : function ( speed ) {
	},
	quality : function ( quality ) {
	},*/

	// ##Working with playlists

	// ##Controlling video sound settings

	mute : function ( yesno ) {
	},
	muted : function () {
	},
	volume : function ( volume ) {
	},

	// ##Video information

	load : function ( videoId, targetElement, callback ) {
	},
	// unload: function () {
	// },
	// destroy : function () {
	// },
	title : function () {
	},
	duration : function () {
	},
	size : function () {
	},
	url : function () {
	},
	service : function () {
	},

	/*qualities : function () {
	},
	speeds : function () {
	},*/

}
});

;require.register("js/classes/player.flowplayer", function(exports, require, module) {
module.exports = (function(){

	// Native HTML5 implementation replacing the flowplayer-5.4.3/Flash-RTMP
	// stack. Keeps the exact interface the pm_player app code expects:
	// Backbone events (player:ready, player:time-change, player:playing,
	// player:finished) plus the player.api methods (currentTime, duration,
	// play/pause, seekTo, volume, mute, speed...). Media is self-hosted
	// (config.flowplayer.file_host, mirrored from CloudFront into /media).

	var html_tpl = require('js/templates/player/flowplayer');

	var FlowplayerPlayer = function () {

		var self = this;

		_.extend(this, Backbone.Events);

		var video_dat 	= arguments[0];
		var video_obj 	= video_dat.raw;
		var vimeo_file 	= video_dat.file;

		var local_config = arguments[2];

		var $parent = $( arguments[1] );
		var config = require('config/config').flowplayer;

		var $element = $( html_tpl );
		var is_vertical = $('body.vertical').get(0) ? true : false;

		var player = self.player = document.createElement('video');
		player.setAttribute('playsinline', 'playsinline');
		player.setAttribute('webkit-playsinline', 'webkit-playsinline');
		player.preload = 'auto';
		player.src = config.file_host + '/' + config.base_url + '/' + encodeURIComponent(vimeo_file) + '.mp4';

		$element.append( player ).appendTo( $parent );

		var player_speed = 1, player_muted = false, player_volume = 1, player_time = 0;

		var setPlayerSize = function () {
			var v = { width: player.videoWidth, height: player.videoHeight };
			if ( v.width && v.height ) {
				$('.fp-ratio').css({
					'padding-top' : (100.0 / ( v.width / v.height )) + '%'
				});
				if ( is_vertical ) {
					var fn = function(){
						if ( !player ) return $(window).unbind('resize',fn);
						var r = $(window).height() / v.height;
						$('.flowplayer-container').css({
							width:(r*v.width)+'px',
						});
					};
					$(window).resize(fn);
					fn();
				}
			}
			$(document.body).css({
				overflow: 'hidden'
			});
		}

		var ready = false;
		player.addEventListener('loadedmetadata', function(){
			if ( ready ) return;
			ready = true;
			_.extend(self,PlayerApiImpl);
			setPlayerSize();
			self.trigger( 'player:ready', self );
		});
		player.addEventListener('error', function(){
			console.log( 'Error occured!', player.error );
		});
		player.addEventListener('timeupdate', function(){
			player_time = player.currentTime;
			self.trigger( 'player:time-change', player_time );
		});
		player.addEventListener('volumechange', function(){
			player_volume = player.volume;
			player_muted = player.muted;
		});
		player.addEventListener('play',function(){
			self.trigger('player:playing');
		})
		player.addEventListener('ended',function(){
			self.trigger('player:finished');
		});

		var PlayerApiImpl = 
			_.extend( require('js/classes/player.api'), {
						
			play : function () {
				var p = player.play();
				if ( p && p.catch ) p.catch(function(){});
			},
			seekTo : function ( sec ) {
				this.currentTime( sec );
			},
			pause : function () {
				player.pause();
			},
			stop : function () {
				player.pause();
				this.currentTime( 0 );
			},
			currentTime : function ( sec ) {
				if ( sec !== undefined ) {
					if ( ready ) {
						player.currentTime = sec;
					} else {
						player.addEventListener('loadedmetadata', function(){
							player.currentTime = sec;
						}, { once: true });
					}
					player_time = sec;
					self.trigger('player:time-change',player_time);
				} else {
					return player.currentTime;
				};
			},
			fps : function () {
				return 1.0 * (video_dat.fps || 25);
			},
			loop : function ( yesno ) {
				if ( yesno !== undefined ) {
					player.loop = !!yesno;
				}
				return player.loop;
			},
			playing : function () {
				return !player.paused && !player.ended;
			},
			paused : function () {
				return player.paused;
			},
			speed : function ( val ) {
				if ( val !== undefined ) {
					player.playbackRate = val;
					player_speed = val;
				}
				return player.playbackRate;
			},
			speeds : function () {
				return [0.5, 0.75, 1, 1.25, 1.5, 2];
			},
			quality : function ( q ) {
				return null;
			},
			qualities : function () {
				return null;
			},

			// playlists

			// controlling sound

			mute : function ( set ) {
				player.muted = set ? true : false;
				player_muted = player.muted;
			},
			muted : function () {
				return player_muted;
			},
			volume : function ( val ) {
				if ( val !== undefined ) {
					var v = val < 0 ? 0 : (val > 1 ? 1 : val);
					player.volume = v;
					player_volume = v;
				}
				return player_volume;
			},

			// getting information

			duration : function () {
				return player.duration || 0;
			}

		});
	}

	return FlowplayerPlayer;
})();
});

require.register("js/classes/player", function(exports, require, module) {
module.exports = function () {
	try {
		var player = require('js/classes/player.'+arguments[0].toLowerCase());
		return player;
	} catch (e) {
		// ignore
	}
	return require('js/classes/player.flowplayer');
}
});

;require.register("js/classes/player.vimeo", function(exports, require, module) {
module.exports = (function(){

	// https://github.com/vimeo/player-api/tree/master/javascript

	// https://developer.vimeo.com/apis/simple

	var url_info_tpl 	= "http://vimeo.com/api/v2/video/<%= video_id %>.json";
	var url_iframe_tpl  = "http://player.vimeo.com/video/<%= video_id %>?api=1&player_id=<%= iframe_id %>";
	var html_iframe_tpl = require('js/templates/player/vimeo');

	var VimeoPlayer = function () {
		if ( '$f' in window ) {

			var self = this;

			_.extend(this, Backbone.Events);

			var vimeo_id = arguments[0];
			var dom_element = $( arguments[1] );

			var iframe_id = "vimeo-iframe-"+vimeo_id;
			var iframe_url = _.template(url_iframe_tpl,{
				video_id: vimeo_id, iframe_id: iframe_id});
			
			var iframe = $(_.template(html_iframe_tpl,{
				iframe_id:iframe_id}));
			var player = self.player = null;

			var state = -1;
			var VM_PLAYING = 0;
			var VM_PAUSED = 1;
			var VM_FINISHED = 1;

			var currentTimeProg = 0;
			var durationProg = 0;

			iframe.load(function(){
				player = self.player = $f( iframe.get(0) );
				player.addEvent('ready',function(){
					
					/* {
					    "percent":"0.326",
					    "bytesLoaded":"32159909",
					    "bytesTotal":"98650027",
					    "duration":"365.507"
					} */
					player.addEvent('loadProgress',function(){

					});

					/* {
						"seconds":"4.308",
						"percent":"0.012",
						"duration":"359.000"
					} */
					player.addEvent('playProgress',function(prog){
						currentTimeProg = parseFloat( prog.seconds );
						durationProg 	= parseFloat( prog.duration );
					});

					player.addEvent('play',function(){
						state = VM_PLAYING;
						self.trigger('player:playing');
					});
					
					player.addEvent('pause',function(){
						state = VM_PAUSED;
						self.trigger('player:paused');
					});

					player.addEvent('finish',function(){
						state = VM_FINISHED;
						self.trigger('player:finished');
					});

					/*{
					    "seconds":"192.622",
					    "percent":"0.527",
					    "duration":"365.507"
					}*/
					player.addEvent('seek',function(prog){
						// seconds get floored to int
						// currentTimeProg = parseFloat( prog.seconds );
						// durationProg 	= parseFloat( prog.duration );
					});

					_.extend( self, PlayerApiImpl );
					
					self.trigger( 'player:ready', self );
				});
			});

			iframe.attr('src',iframe_url);

			dom_element.append( iframe );

		} else {
			throw( 'VimeoPlayer: froogaloop not loaded' );
		}

		// https://developer.vimeo.com/player/js-api

		var PlayerApiImpl = 
			_.extend( require('js/classes/player.api'), {

			play : function () {
				self.player.api('play');
			},
			seekTo : function ( secs ) {
				self.player.api( 'seekTo', +secs );
			},
			pause : function () {
				self.player.api('pause');
			},
			stop : function () {
				self.player.api('pause');
				self.currentTime(0);
			},
			playing : function () {
				return state === VM_PLAYING;
			},
			paused : function () {
				return state === VM_PAUSED;
			},
			currentTime : function ( seconds ) {
				if ( seconds ) {
					// seekTo can only jump to full seconds, not ms
					self.player.api('seekTo',seconds);
					if ( seconds >= 0 && seconds <= self.duration() )
						return seconds;
				}
				return currentTimeProg;
			},

			mute : function ( yesno ) {
				self.player.api('setVolume',0);
			},
			muted : function () {
				return self.volume() === 0;
			},
			volume : function ( volume ) {
				if ( volume ) {
					self.player.api('setVolume', volume );
				}
				return self.player.api('getVolume');
			},

			load : function ( videoId, targetElement, callback ) {
			},
			title : function () {
			},
			duration : function () {
				//return self.player.api('getDuration');
				return durationProg;
			},
			size : function () {
				return {
					width: self.player.api('getVideoWidth'),
					height: self.player.api('getVideoHeight')
				};
			},
			url : function () {
				return self.player.api('getVideoUrl');
			},
			service : function () {
				return 'Vimeo';
			}

		});
	}

	return VimeoPlayer;

})();
});

require.register("js/classes/player.youtube", function(exports, require, module) {
module.exports = (function(){

	var YouTubePlayer = function () {

		_.extend(this, Backbone.Events);

		var self = this;
		var player = null;
		var state = -1;

		var debug = true;

		if ( 'YT' in window ) {
			if ( arguments.length >= 2 ) {

				var yt_video_id = arguments[0].service_id;
				var vid_fps = arguments[0].fps || 25;

				var dom_element = arguments[1];

				var local_config = arguments[2];

				var last_poll_ts = -1;
				var poller = new PlayerTimePoller( 
					1000 / vid_fps, 
					function(){
						var now = self.currentTime();
						if ( last_poll_ts !== now ) {
							last_poll_ts = now;
							self.trigger( 'player:time-change', now );
						}
					});

				// Links:
				// JS Player API http://goo.gl/ZMS4I
				// Iframe API http://goo.gl/JQOT4

				// var iframe = $(_.template(html_iframe_tpl,{
				// 	origin: window.location.origin,
				// 	modestbranding: 1,
				// }));
				// $(dom_element).append(iframe);

				// http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio

				var tpl = require('js/templates/player/youtube')();
				$el = $( tpl );
				$iframe_container = $('.yt-iframe-container',$el);
				$(dom_element).empty();
				$(dom_element).append($el);

				player = new YT.Player(
					$iframe_container.get(0), 
					{
						//height: '100%', 
						//width: '100%',
						//videoId: yt_video_id,
						playerVars: {	// http://goo.gl/Bm6Ko
							// controls    : 1,
							// autohide    : 1,
							modestbranding : 1, // less branding
							rel 		   : 0, // show "related" at end off
							disablekb 	   : 1, // disable keyboard shortcuts
							//theme		   : 'light'
							fs 			   : 0, // fullscreenbutton off
							iv_load_policy : 3, // annotations off
							//playerapiid    : 'player_id_'+parseInt(Math.random() * 10000)

							// loop		    : local_config && local_config.loop ? true : false,
							// start			: Math.floor( local_config && +(local_config.from) || 0 ),
							// end 			: local_config && +(local_config.to) || undefined,
						}
					});

				player.addEventListener( 'onError', function () {
					if ( debug ) console.log( arguments );
					throw( 'YouTubePlayer ... error' );
				});

				player.addEventListener( 'onPlaybackQualityChange', function () {
					if ( debug ) console.log( 'YouTubePlayer.onPlaybackQualityChange', arguments );
					var qualities = [
						'small',
						'medium',
						'large',
						'hd720',
						'hd1080',
						'highres'
					];
				});

				player.addEventListener( 'onPlaybackRateChange', function () {
					if ( debug ) console.log( 'YouTubePlayer.onPlaybackRateChange', arguments );
				});

				player.addEventListener( 'onStateChange', function () {

					if ( debug ) console.log( 'YouTubePlayer.onStateChange', arguments );
					var state = (arguments && arguments[0] && arguments[0].data) ? arguments[0].data : -1;
					var states = [
						-1, // unstarted
						YT.PlayerState.ENDED,
						YT.PlayerState.PLAYING,
						YT.PlayerState.PAUSED,
						YT.PlayerState.BUFFERING,
						YT.PlayerState.CUED
					];
					if ( states.indexOf( state ) !== -1 ) {
						self.state = state;
						if ( state === YT.PlayerState.PLAYING ) {
							self.trigger('player:playing');
							self.trigger( 'player:time-change', self.currentTime() );
							poller.start();
						} else if ( state === YT.PlayerState.PAUSED ) {
							self.trigger('player:paused');
							poller.stop();
						} else if ( state === YT.PlayerState.CUED ) {
							//iframe = $('iframe',dom_element);
						} else if ( state === YT.PlayerState.ENDED ) {
							poller.stop();
							self.trigger('player:finished');
						} else if ( state === YT.PlayerState.BUFFERING ) {
							poller.stop();
						} else {
							poller.stop();
						}
					}
				});

				player.addEventListener( 'onApiChange', function () {
					if ( debug ) console.log( 'YouTubePlayer.onApiChange', arguments );
				});

				player.addEventListener( 'onReady', function(){

					player.cueVideoById({
						videoId: yt_video_id,
						startSeconds: 0,
						//endSeconds: XX,
						suggestedQuality: 'large' // 480px, see: http://goo.gl/F1zi5j
					});

					_.extend( self, PlayerApiImpl );

					self.trigger( 'player:ready', self );
				});

			} else {
				throw( 'YouTubePlayer: Not enough arguments for' );
			}
		} else {
			//console.log( YT, 'YT' in window );
			throw( 'YouTubePlayer: Native Goole YouTube player API not available' );
		}

		var PlayerApiImpl = 
			_.extend( require('js/classes/player.api'), {
						
			// controlling video
			
			play : function () {
				player.playVideo();
			},
			seekTo : function ( secs ) {
				player.seekTo( secs );
			},
			pause : function () {
				player.pauseVideo();
			},
			stop : function () {
				player.stopVideo();
			},
			currentTime : function ( sec ) {
				if ( sec !== undefined ) {
					player.seekTo( sec );
					self.trigger('player:time-change',sec);
				}
				else return player.getCurrentTime();
			},
			playing : function () {
				return this.state === YT.PlayerState.PLAYING;
			},
			paused : function () {
				return this.state === YT.PlayerState.PAUSED;
			},
			speed : function ( val ) {
				if ( val !== undefined ) {
					player.setPlaybackRate( val );
				}
				return player.getPlaybackRate();
			},
			speeds : function () {
				return player.getAvailablePlaybackRates();
			},
			quality : function ( q ) {
				var qualities = player.getAvailableQualityLevels();
				if ( q && qualities.indexOf(q) !== -1 ) {
					player.setPlaybackQuality( q );
				}
				return player.getPlaybackQuality();
			},
			qualities : function () {
				return player.getAvailableQualityLevels();
			},

			// playlists

			// controlling sound

			mute : function ( set ) {
				if ( set === false ) {
					player.unMute();
				} else {
					player.mute();
				}
			},
			muted : function () {
				return player.isMuted();
			},
			volume : function ( val ) {
				if ( val !== undefined ) {
					player.setVolume( val * 100 );
				}
				return player.getVolume();
			},

			// getting information

			duration : function () {
				return player.getDuration();
			}

		});
	};

	var PlayerTimePoller = function (delay, callback) {
		
		var self = this;

		var polling = false;
		var ts = -1;

		this.start = function () {
			window.cancelAnimationFrame( ts );
			polling = true;
			self.poll();
		}

		this.poll = function () {
			ts = window.requestAnimationFrame( self.poll, self );
			callback();
		}

		this.stop = function () {
			window.cancelAnimationFrame( ts );
			polling = false;
		}
	}
	
	return YouTubePlayer;
})();
});

require.register("js/helpers/animframe", function(exports, require, module) {
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
});

require.register("js/helpers/locparams", function(exports, require, module) {
module.exports = function () {
	var p = window.location.search.substring(1).split('&');
	if ( p && p.length > 0 ) {
		var m = {}; for ( var i = 0; i < p.length; i++ ) {
			var s = p[i].split('=');
			m[s[0]] = s[1];
		}
		return m;
	} else {
		return null;
	}
}
});

;require.register("js/helpers/timer", function(exports, require, module) {
require('js/helpers/animframe');

module.exports = function(){
	var running = false, should_stop = false;
	var callback = function(){};
	var tsLast = -1;
	var tsStart = 0;
	var tsStep = 1000.0 / (arguments[0] || 90);
	this.start = function () {
		if ( running ) return;
		if ( arguments[0] && typeof arguments[0] === 'function' ) {
			callback = arguments[0];
		}
		running = true;
		should_stop = false;
		tsStart = new Date().getTime();
		window.requestAnimationFrame(loop);
	};
	this.stop = function () {
		should_stop = true;
		window.cancelAnimationFrame(loop);
		running = false;
	};
	this.frameRate = function (fps){
		tsStep = 1000.0 / fps;
	};
	this.reset = function () {
		tsStart = new Date().getTime();
	};
	var loop = function loop () {
		var tsNow = new Date().getTime();
		if ( tsNow - tsLast > tsStep ) {
			tsLast = tsNow;
			callback.apply(null,[tsNow-tsStart]);
		}
		if ( !should_stop ) {
			window.requestAnimationFrame(loop);
		}
	}
}
});

;require.register("js/initialize", function(exports, require, module) {
var LocationParams 	= require('js/helpers/locparams'),
	Timer 			= require('js/helpers/timer'),
	config 			= require('config/config');

module.exports = function(){

	_.extend(this, Backbone.Events);

	var location_params = new LocationParams();

	var parentWindow = null;
	var postmessenger = new PostMessenger(window);
	var listener_id = null;

	if ( location_params && 'domain' in location_params ) {
		postmessenger.accept( location_params.domain );
	}

	var videoId = location_params.vid || 29130;
	var groupId = location_params.gid || 40;
	var performers = (function(){
		if ( location_params.perfs ) {
			return location_params.perfs.split(',');
		}
		return null;
	})();
	var types = (function(){
		if ( location_params.types ) {
			return location_params.types.split(',');
		}
		return ['scene','annotation','marker'];
	})();
	var angle = location_params.angle;
	var auto_play = location_params.autoplay || false;
	var vertical_fill = location_params.vert || false;

	if ( vertical_fill ) $(document.body).addClass('vertical');

	var loop = location_params.loop || false;
	var from = location_params.from || 0;
	var to = location_params.to || false;
	var volume = location_params.vol || false;

	var local_config = {
		performers: performers,
		types: types,
		video_id: videoId,
		group_id: groupId,
		auto_play: auto_play,
		loop : loop,
		vertical_fill : vertical_fill,
		time : {
			from : from, to : to
		},
		volume : volume
	};

	// console.log(local_config);

	var group = null, video = null, events = null, player = null;

	postmessenger.on('connect?',function(req,res){
		parentWindow = req.source;
		listener_id = req.data.listener_id;
		res.send('connect!');
	});

	// postmessenger.on(/^>>.+/,function(req, res){
	// });

	postmessenger.on('>>ping',function(req, res){
		var data = req.data;
		if ( data.title && events ) {
			for ( var i = 0, e = null; i < events.length; i++ ) {
				e = events[i];
				if ( e.fields.title && e.fields.title === data.title ) {
					if ( player && video ) {
						var t = (e.utc_timestamp.getTime() - video.utc_timestamp.getTime()) / 1000.0;
						player.currentTime( t );
						break;
					}
				}
			}
		}
	});

	postmessenger.accept('https://www.youtube.com');

	// PieceMaker 2 data, pre-extracted from the restored heroku pg dump into
	// static JSON (api/jbmf/pm2/<vid>.json): { video: {..}, events: [..] }.
	// Shape matches what PieceMakerApi.getGroup/getEvent/findEvents returned
	// (utc_timestamp as Date, fields dict), so all downstream code is unchanged.
	var loadPm2Data = function ( vid, done ) {
		$.getJSON( '/api/jbmf/pm2/' + vid + '.json' )
			.done(function ( data ) {
				if ( data && data.video ) {
					var toDates = function ( e ) {
						e.utc_timestamp = new Date( e.utc_timestamp * 1000.0 );
						return e;
					};
					toDates( data.video );
					data.events = ( data.events || [] ).map( toDates );
					done( data.video, data.events );
				} else {
					console.log( 'No video!' );
				}
			})
			.fail(function ( jqxhr, status, err ) {
				console.log( 'No PM2 data for vid ' + vid + ':', status, err );
			});
	};

	loadPm2Data( videoId, function ( v, eventsRaw ) {
		video = v;
		$(document.body).addClass('pm-connected');
		var events_filtered = _.filter(eventsRaw,function(e){
			var has_perfs = true;
			if ( performers ) {
				if ( 'performers' in e.fields ) {
					var eperfs = e.fields.performers.split(',');
					if ( eperfs ) {
						has_perfs = _.intersection(eperfs,performers).length > 0;
					}
				} else {
					has_perfs = false;
				}
			}
			var is_type = types && types.indexOf(e.type) !== -1;
			return has_perfs && is_type;
		});
		if ( events_filtered && events_filtered.length > 0 ) {
			pmFullyLoaded( events_filtered );
			delete events;
			events = events_filtered;
		}

		if ( from ) {
			from = fixFromTo(from);
			local_config.from = from;
		}
		if ( to ) {
			to = fixFromTo(to,true);
			if ( from && to <= from ) to = from + 0.34; // 1 frame?
			local_config.to = to;
		}

		initPlayer();
	});

	var $player_container = $('.player-container');

	var initPlayer = function initPlayer () {

		var player_type = 'flowplayer';
		if ( 'vid_service' in video.fields ) {
			player_type = video.fields['vid_service'].toLowerCase();
		}
		var file = video.fields.file || video.fields.title;
		if ( angle ) {
			if ( 'alt-angle-'+angle in video.fields ) {
				file = video.fields['alt-angle-'+angle];
			}
		}
		var video_dat = {
			file : file,
			service_id : video.fields.vid_service_id || 'flowplayer',
			raw : video,
			fps : +(video.fields.fps) || 25
		};
		
		var PlayerClass = require('js/classes/player.'+player_type);
		player = new PlayerClass( video_dat, $player_container.get(0), local_config );

		player.on( "player:time-change", function( t ) {
			timeChanged(t);
			if ( to && t >= to ) {
				if ( loop ) {
					player.currentTime( from || 0 );
				} else {
					player.pause();
				}
			} else if ( loop && t >= player.duration() ) {
				player.currentTime( from || 0 );
			}
		});

		player.on( "player:finished", function(p) {
			if ( loop ) {
				player.currentTime( from || 0 );
				player.play();
			}
		});

		player.on( "player:ready", function(p) {
			if ( from ) {
				p.currentTime( from );
			}
			if ( auto_play ) p.play();
			if ( volume ) p.volume(volume);
 		});
	}

	var fixFromTo = function ( fromTo, isTo ) {
		if ( /^e(-[0-9]+)?$/i.test(fromTo) && events && video ) {
			fromTo = +(fromTo.substring(2)) || (isTo ? events.length-1 : 0);
			if ( fromTo < events.length ) {
				fromTo = (events[fromTo].utc_timestamp.getTime() - video.utc_timestamp.getTime()) / 1000.0;
			} else {
				fromTo = 0;
			}
		} else {
			fromTo = +(fromTo) || 0;
		}
		return fromTo;
	}
	
	var timeChanged = function () {};
	var pmFullyLoaded = function pmFullyLoaded ( events ) {

		var video_fps = 1 / (+(video.fields.fps) || 25);
		var vfps2 = 4 * video_fps;
		var video_utc = video.utc_timestamp.getTime() / 1000.0;
		// var lastEventTime  = events[events.length-1].utc_timestamp.getTime() - video_utc;
		// var firstEventTime = events[0].utc_timestamp.getTime() 				 - video_utc;
		var last_event = null, last_i = 0, last_t = -1;
		var speed = 1;

		timeChanged = function (t) {
			if ( last_t > t ) {
				last_event = null;
				last_i = 0;
			}
			last_t = t;
			for ( var i = last_i; i < events.length; i++ ) {
				var e = events[i];
				var et = e.utc_timestamp.getTime() / 1000.0;
				var er = et - video_utc;
				var ed = e.duration;
				if ( (t >= er && t <= er+ed) || (ed < 0.1 && Math.abs(er-t) <= vfps2) ) {
					if ( e !== last_event ) {
						//console.log( '<EVENT>', e.fields.title, '@', t );
						postmessenger.send(
							'>>ping',
							{ title: e.fields.title, event: e },
							parentWindow,
							location_params.domain
						);
						last_event = e;
						last_i = i;
					}
					break;
				}
			}
		}
	}
}
});

;require.register("js/templates/player/flowplayer", function(exports, require, module) {
module.exports = "<div class=\"flowplayer-container\"></div>";

});

require.register("js/templates/player/vimeo", function(exports, require, module) {
module.exports = "<iframe id=\"<%= iframe_id %>\" class=\"vid-service-player\" src=\"\" allowfullscreen></iframe>";

});

require.register("js/templates/player/youtube", function(exports, require, module) {
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"yt-player-container\">\n	<div class=\"yt-player-ratio\"></div>\n	<div class=\"yt-iframe-container\"></div>\n</div>\n";
  });
});


//# sourceMappingURL=app.js.map