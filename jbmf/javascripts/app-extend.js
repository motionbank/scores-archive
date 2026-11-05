(function() {
  "use strict";
  var t = "undefined" == typeof window ? global : window;
  if ("function" != typeof t.require) {
    var e = {},
      n = {},
      i = {},
      r = {}.hasOwnProperty,
      s = /^\.\.?(\/|$)/,
      o = function(t, e) {
        for (var n, i = [], r = (s.test(e) ? t + "/" + e : e).split("/"), o = 0, a = r.length; a > o; o++) n = r[o], ".." === n ? i.pop() : "." !== n && "" !== n && i.push(n);
        return i.join("/")
      },
      a = function(t) {
        return t.split("/").slice(0, -1).join("/")
      },
      l = function(e) {
        return function(n) {
          var i = o(a(e), n);
          return t.require(i, e)
        }
      },
      c = function(t, e) {
        var i = {
          id: t,
          exports: {}
        };
        return n[t] = i, e(i.exports, l(t), i), i.exports
      },
      u = function(t) {
        return i[t] ? u(i[t]) : t
      },
      h = function(t, i) {
        null == i && (i = "/");
        var s = u(t);
        if (r.call(n, s)) return n[s].exports;
        if (r.call(e, s)) return c(s, e[s]);
        throw Error("Cannot find module '" + t + "' from '" + i + "'")
      };
    h.alias = function(t, e) {
      i[e] = t
    }, h.reset = function() {
      e = {}, n = {}, i = {}
    };
    var p = /\.[^.\/]+$/,
      f = /\/index(\.[^\/]+)?$/,
      d = function(t) {
        if (p.test(t)) {
          var e = t.replace(p, "");
          r.call(i, e) && i[e].replace(p, "") !== e + "/index" || (i[e] = t)
        }
        if (f.test(t)) {
          var n = t.replace(f, "");
          r.call(i, n) || (i[n] = t)
        }
      };
    h.register = h.define = function(t, i) {
      if ("object" == typeof t)
        for (var s in t) r.call(t, s) && h.register(s, t[s]);
      else e[t] = i, delete n[t], d(t)
    }, h.list = function() {
      var t = [];
      for (var n in e) r.call(e, n) && t.push(n);
      return t
    }, h.brunch = !0, h._cache = n, t.require = h
  }
})(), require.register("config/config.js", function(t, e, n) {
  n.exports = {
    debug: !1,
    islocal: !1,
    apiHost: "",
    apiBaseUrl: "api/jbmf/",
    adminHost: "",
    baseUrl: "/jbmf",
    assetHost: "",
    cloudFront: {
      baseUrl: "/jbmf/app",
      fileHost: "d35vpnmjdsiejq.cloudfront.net",
      streamer: "s12vlv7g59gljg.cloudfront.net"
    },
    pieceMaker: {
      apiKey: "a79c66c0bb4864c06bc44c0233ebd2d2b1100fbe",
      host: "localhost:3000",
      basePath: "/jbmf/piecemaker"
    },
    title: {
      title: "Seven Duets"
    }
  }
}), require.register("views/templates/cover.hbs", function(t, e, n) {
  n.exports = Handlebars.template(function(t, e, n, i, r) {
    return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), r = r || {}, '<h1><a href="#/set/sets">SEVEN DUETS</a></h1>\n<p><a href="#/set/sets">Fragments, movements and insights from the interplay between Jonathan Burrows and Matteo Fargion.</a></p>\n\n<div id="portal">\n	<style>\n		#portal .error { background-color:white; color:black; padding:1em; }\n		#portal .hidden { display:none; }\n\n		@-webkit-keyframes fade { from {opacity: 1;} to {opacity: 0;} }\n		@keyframes fade { from {opacity: 1;} to {opacity: 0;} }\n		#portal .loading { -webkit-animation: fade 1s infinite alternate; animation: fade 1s infinite alternate; }\n	</style>\n\n	<p class="enter">\n		<a href="#/set/sets">» Enter here</a><br />\n		<small>(Use most recent version of: Chrome, Firefox or Safari)</small>\n	</p>\n\n	<p class="loading hidden">\n		Loading<span id="wait">...</span>\n	</p>\n	\n	<p class="error hidden">\n	</p>\n\n</div>\n\n<!-- <p></p>\n<p><a href="mailto:feedback@motionbank.org">Send us feedback!</a></p> -->'
  })
});
