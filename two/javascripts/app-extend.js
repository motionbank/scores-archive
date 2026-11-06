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
})(), require.register("config/config", function(t, e, n) {
  n.exports = {
    debug: !1,
    islocal: !1,
    apiHost: "",
    apiBaseUrl: "api/two",
    adminHost: "",
    baseUrl: "/two",
    assetHost: "",
    cloudFront: {
      baseUrl: "/two/app",
      fileHost: "/media",
      streamer: "s12vlv7g59gljg.cloudfront.net"
    },
    title: {
      title: "TWO"
    }
  }
}), require.register("views/templates/cover", function(t, e, n) {
  n.exports = Handlebars.template(function(t, e, n, i, r) {
    return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), r = r || {}, '<h1><a href="#/set/sets">TWO</a></h1>\n<p><a href="#/set/sets">Bebe Miller / Thomas Hauert<br/>\n	Encounters with the dancing mind and the thinking body.</a></p>\n\n<div id="portal">\n	<style>\n		#portal .error { background-color:white; color:black; padding:1em; }\n		#portal .hidden { display:none; }\n\n		@-webkit-keyframes fade { from {opacity: 1;} to {opacity: 0;} }\n		@keyframes fade { from {opacity: 1;} to {opacity: 0;} }\n		#portal .loading { -webkit-animation: fade 1s infinite alternate; animation: fade 1s infinite alternate; }\n	</style>\n\n	<p class="enter">\n		<a href="#/set/sets">» Enter here</a><br />\n		<small>(Use most recent version of: Chrome, Firefox or Safari)</small>\n	</p>\n\n	<p class="loading hidden">\n		Loading<span id="wait">...</span>\n	</p>\n	\n	<p class="error hidden">\n	</p>\n\n</div>\n\n<!-- <p></p>\n<p><a href="mailto:feedback@motionbank.org">Send us feedback!</a></p> -->'
  })
});
