function Cluck () {
  
  var self = this;
  
  var els = new Array();
  var shadows = $(".shadow");
  
  els.objs = new Array();
  els.last = null;
  $(".line").each(function() {
    els.objs.push({el:$(this),lr:0});
  });
  
  this.slow = false;
  this.block = false;
  this.fast = false;
  this.duration = 0;
  
  var fastRuns = 0;
  var fastMax = 0;
  
  
  this.run = function() {
    
    var that = this;
    
    this.duration = Math.floor(Math.random()*100+100);
    
    // fast
    if ( Math.random()>0.9 && !this.slow && !this.block && !this.fast) {
      this.fast = true;
      fastMax = Math.floor(Math.random()*5+5);
    }
    
    if (this.fast) {
      this.duration = Math.floor(Math.random()*70+70);
      fastRuns++;
      if (fastRuns>fastMax) {
        this.fast = false;
        fastRuns = 0;
      }
    }
    
    // slow
    if ( Math.random()>0.9 && !this.slow && !this.block && !this.fast) {
      this.duration = 2000;
      this.slow = true;
      this.block = true;
    }
    
    if (!this.slow) {
      setTimeout(function() {
        window.messaging.send('>>ping',{title:'clock'});
      }, this.duration-10);
    }
    
    // reset all
    if ( !this.slow && Math.random()>0.95) {
      for (var i=0; i < els.objs.length; i++) {    

        this.rotate( els.objs[i], this.duration, 0 );
      };
    }
    else {
      

      var el = els.last || els.objs.getRandom();

      this.rotate( el, this.duration );

      if (that.slow) {
        els.last = el;
      }
      else {
        els.last = null;
        
        // chance for second rotation
        if (Math.random()>0.3) {
          this.rotate( els.objs.getRandom(), this.duration );
        }
      }
    }

    if (!this.slow) this.block = false;
    this.slow = false;
  };
  
  this.rotate = function( _obj, _dur, _r ) {
        
    el = $(_obj.el);
    
    var lr = _obj.lr;
    
    var r = lr;
    while (r===lr) {
      r = Math.floor(Math.random()*7);
      r *= 45;
    }
    
    if (_r !== undefined) r = _r;
    
    var sh = $( shadows[els.objs.indexOf(_obj)] );
    // console.log(sh);
            
    this.transform(el, r, 1, _dur);
    this.transform(sh, r, 1, _dur);
    
    _obj.lr = r;
  };
  
  this.transform = function( _obj, _r, _sy, _dur ) {
    
    $(_obj).css({
      "-webkit-transition": "-webkit-transform " + _dur + "ms ease-in",
         "-moz-transition":    "-moz-transform " + _dur + "ms ease-in",
           "-o-transition":      "-o-transform " + _dur + "ms ease-in",
          "-ms-transition":     "-ms-transform " + _dur + "ms ease-in",
              "transition":         "transform " + _dur + "ms ease-in",
      "-webkit-transform":  "rotate(" + _r + "deg)",//scale(1," + _sy + ")",
      "-moz-transform":     "rotate(" + _r + "deg)",//scale(1," + _sy + ")",
      "-o-transform":       "rotate(" + _r + "deg)",//scale(1," + _sy + ")",
      "-ms-transform":      "rotate(" + _r + "deg)",//scale(1," + _sy + ")",
      "transform":          "rotate(" + _r + "deg)"//scale(1," + _sy + ")"
    });
  };
};