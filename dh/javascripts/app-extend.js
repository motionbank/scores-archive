(function() {
  "use strict";
  var t = "undefined" != typeof window ? window : global;
  if ("function" != typeof t.require) {
    var e = {},
      n = {},
      i = function(t, e) {
        return {}.hasOwnProperty.call(t, e)
      },
      r = function(t, e) {
        var n, i, r = [];
        n = /^\.\.?(\/|$)/.test(e) ? [t, e].join("/").split("/") : e.split("/");
        for (var s = 0, o = n.length; o > s; s++) i = n[s], ".." === i ? r.pop() : "." !== i && "" !== i && r.push(i);
        return r.join("/")
      },
      s = function(t) {
        return t.split("/").slice(0, -1).join("/")
      },
      o = function(e) {
        return function(n) {
          var i = s(e),
            o = r(i, n);
          return t.require(o, e)
        }
      },
      a = function(t, e) {
        var i = {
          id: t,
          exports: {}
        };
        return n[t] = i, e(i.exports, o(t), i), i.exports
      },
      l = function(t, s) {
        var o = r(t, ".");
        if (null == s && (s = "/"), i(n, o)) return n[o].exports;
        if (i(e, o)) return a(o, e[o]);
        var l = r(o, "./index");
        if (i(n, l)) return n[l].exports;
        if (i(e, l)) return a(l, e[l]);
        throw Error('Cannot find module "' + t + '" from ' + '"' + s + '"')
      },
      c = function(t, n) {
        if ("object" == typeof t)
          for (var r in t) i(t, r) && (e[r] = t[r]);
        else e[t] = n
      },
      u = function() {
        var t = [];
        for (var n in e) i(e, n) && t.push(n);
        return t
      };
    t.require = l, t.require.define = c, t.require.register = c, t.require.list = u, t.require.brunch = !0
  }
})(), require.register("config/config", function(_t, _e, n) {
  n.exports = {
    debug: !1,
    islocal: !1,
    apiHost: "",
    apiBaseUrl: "api/deborah_hay",
    adminHost: "",
    baseUrl: "/dh",
    assetHost: "",
    cloudFront: {
      baseUrl: "/dh/app",
      fileHost: "d35vpnmjdsiejq.cloudfront.net",
      streamer: "s12vlv7g59gljg.cloudfront.net"
    },
    pieceMaker: {
      apiKey: "0310X9kgAiTWuMIt",
      host: "deborah-hay-pm2.herokuapp.com",
      basePath: "/dh/piecemaker"
    },
    title: {
      title: "Using The Sky"
    }
  }
}), require.register("views/cell-types/cell-recording-view", function(_t, e, n) {
  var i = e("views/cell-types/cell-iframe-view"),
    r = e("postmessenger"),
    s = e("config/config");
  n.exports = i.extend({
    getURLParameter: function(t) {
      t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var e = this.model.get("iframe-src"),
        n = RegExp("[\\?&]" + t + "=([^&#]*)"),
        i = n.exec(e);
      return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
    },
    initialize: function() {
      i.prototype.initialize.apply(this, arguments), this.template = e("views/templates/cell-types/cell-iframe");
      var t = this;
      r.on(">>set-scene", function(e) {
        var n = "https://" + s.cloudFront.fileHost + s.cloudFront.baseUrl + "/cells/recording/full/" + t.getURLParameter("file") + "-" + e.data.replace(/[^-a-z0-9]/gi, "-").replace(/-+/gi, "-") + ".png",
          i = new Image;
        i.onload = function() {
          t.$el.css("background-image", "url(" + n + ")")
        }, i.onerror = function() {
          t.$el.css("background-image", "url(" + t.model.getPosterImageURL() + ")")
        }, i.src = n
      }), r.on("set>fetch-answer", function(t) {
        console.log("recording: fetch-answer", t)
      })
    },
    open: function() {
      i.prototype.open.apply(this, arguments), this.publishEvent(">>set-recording", this.getURLParameter("rec"))
    },
    close: function() {
      var t = this.$el.css("background-image");
      i.prototype.close.apply(this, arguments);
      // re-apply a scene overlay that was set during playback — but never
      // "none" (the state open() leaves us in), which would wipe the poster
      // image that the base close() just restored (dark grey cell bug)
      "none" !== t && this.$el.css("background-image", t);
    }
  })
}), require.register("views/cell-types/cell-visualization-view", function(_t, e, n) {
  var i = e("views/cell-view"),
    r = (e("postmessenger"), e("config/config"));
  n.exports = i.extend({
    currentRecording: null,
    currentScene: null,
    initialize: function() {
      i.prototype.initialize.apply(this, arguments);
      var t = this;
      this.subscribeEvent("dispatcher:>>set-scene", function(e) {
        t.setScene(e, t.currentRecording)
      }), this.subscribeEvent(">>set-recording", function(e) {
        t.setScene(t.currentScene, e)
      }), this.setScene(null, null)
    },
    setScene: function(t, e) {
      if (!t) {
        var n = this.model.get("scene");
        t = n ? n : "fred + ginger"
      }
      if (this.currentScene = t, !e) {
        var i = this.model.get("recording");
        e = i ? i : "D01T01"
      }
      this.currentRecording = e, t = t.replace(/[^-a-z0-9]/gi, "-").replace(/-+/gi, "-");
      var s = "https://" + r.cloudFront.fileHost + r.cloudFront.baseUrl + "/cells/visualization/full/" + this.model.get("base-path"),
        o = [];
      this.model.getFlag("per-recording") && o.push(e), "false" !== this.model.get("per-scene") && o.push(t), s += o.join("_"), s += ".png", "false" === this.model.get("per-scene") && "false" === this.model.get("per-recording") && (s = this.model.get("poster_image").url), this.model.get("fixed-image") && (s = "https://" + r.cloudFront.fileHost + r.cloudFront.baseUrl + "/cells/visualization/full/" + this.model.get("fixed-image"));
      var a = new Image,
        l = this;
      a.onload = function() {
        l.$el.css({
          "background-image": 'url("' + s + '")'
        })
      }, a.onerror = function() {
        l.$el.css({
          "background-image": 'url("https://' + r.cloudFront.fileHost + r.cloudFront.baseUrl + '/cells/poster/full/missing.jpg")'
        })
      }, a.src = s
    }
  })
}), require.register("views/templates/cover", function(_t, _e, n) {
  n.exports = Handlebars.template(function(t, _e, n, _i, _r) {
    return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), _r = _r || {}, '<h1><a href="#/set/sets">USING THE SKY</a></h1>\n<p><a href="#/set/sets">An exploration of Deborah Hay\'s solo \'No Time To Fly\' by Motion Bank.</a></p>\n\n<div id="portal">\n	<style>\n		#portal .error { background-color:white; color:black; padding:1em; }\n		#portal .hidden { display:none; }\n\n		@-webkit-keyframes fade { from {opacity: 1;} to {opacity: 0;} }\n		@keyframes fade { from {opacity: 1;} to {opacity: 0;} }\n		#portal .loading { -webkit-animation: fade 1s infinite alternate; animation: fade 1s infinite alternate; }\n	</style>\n\n	<p class="enter">\n		<a href="#/set/sets">» Enter here</a><br />\n		<small>(Use most recent version of: Chrome, Firefox or Safari)</small>\n	</p>\n\n	<p class="loading hidden">\n		Loading<span id="wait">...</span>\n	</p>\n	\n	<p class="error hidden">\n	</p>\n\n</div>\n\n<!-- <p></p>\n<p><a href="mailto:feedback@motionbank.org">Send us feedback!</a></p> -->'
  })
});
