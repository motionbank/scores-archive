AdobeEdge.bootstrapCallback(function(compId){
  
  Array.prototype.getRandom = function() {
    return this[Math.floor(Math.random()*this.length)];
  };
  Array.prototype.last = function() {
    return this[this.length-1];
  };
  
  var maxTiles;
  
  var runs;
  var runsReverse;
  var backwards;
  var toRemove;
  var anchor;
  var tilesAdded = [];
  var lastDirection;
  var nextDirection;
  var nextTile;
  
  var tileBase = {
      "symbol":"Base",
      "direction":"top",
      "layer":"front"
    };
  
  var tilesRight = [
    {
      "symbol":"rect_to_right_back",
      "direction":"right",
      "layer":"back"
    }
  ];
  
  var tilesLeft = [
    {
      "symbol":"rect_to_left_back",
      "direction":"left",
      "layer":"back"
    }
  ];
  
  var tilesTop = [
    {
      "symbol":"rect_to_top_back",
      "direction":"top",
      "layer":"back"
    }
  ];
  
  var tiles           = tilesTop.concat(tilesRight, tilesLeft);
  var tilesLastRight  = tilesTop.concat(tilesRight);
  var tilesLastLeft   = tilesTop.concat(tilesLeft);

  
  var composition = AdobeEdge.getComposition(compId);
  var stage = composition.getStage();
  
  var $stage = $(stage.element);
  

  
  var animation = playForward;
  
  var reverseLoop = null;
  var isRunning = false;
  
  //addCallback(tileBase.symbol);
  
  for (var i=0; i < tiles.length; i++) {
    addCallback( tiles[i].symbol );
  };
  
  // base
  
  
  
  
  // START_________________________________________
  reset();
  init();
  
  
  // $("body").click(function() {
  //   if (!isRunning && animation !== playReverse ) animation();
  // });
  // 
  
  //  PING
    if ( window.messaging ) {
   window.messaging['>>ping'] = function (req, res) {
     //console.log( 'PING' );
        if (!isRunning && animation !== playReverse ) animation();
      };
  } else {
   console.log( 'messaging not available' );
  }
  
  function init() {
    var index = (tileBase.layer==="back") ? 0 : null;
    var el = stage.createChildSymbol( tileBase.symbol, "#Stage", index);
    //el.play();
    var $el = el.element;
    $el.css({
      "position":"absolute",
      "top": 900,
      "left": 425
    });
  };
  
  function reset() {
    
    window.clearInterval( reverseLoop );
    
    for (var i=0; i < tilesAdded.length; i++) {
      tilesAdded[i].deleteSymbol();
    };
    
    tilesAdded = [];
    lastDirection = "top";
    nextDirection = "top";
    
    maxTiles = Math.floor(Math.random()*4+3);
    
    runs = 0;
    runsReverse = maxTiles;
    
    backwards = false;
    
    toRemove = null;
    
    nextTile = tilesTop.getRandom();
    
    anchor = {
      top:900,
      left:425
    };
    
    animation = playForward;
    //animation();
  };
  

  function playForward() {
    
    if (runs<maxTiles) {
      
      isRunning = true;
      //console.log("forward");
     
      var tile = nextTile;
      
      var index = (tile.layer==="back") ? 0 : null;

      var el = stage.createChildSymbol( tile.symbol, "#Stage", index);
      
      
      // POSITION
      
      var $el = el.element;
      $el.css({
        "position":"absolute",
        "top": anchor.top,
        "left": anchor.left
      });
       
      
      // NEXT
      
      lastDirection = tile.direction;
      
      if (lastDirection==="right") {
        nextTile = tilesLastRight.getRandom();
      }
      else if (lastDirection==="left") {
        nextTile = tilesLastLeft.getRandom();
      }
      else {
        nextTile = tiles.getRandom();
      }
      
      nextDirection = nextTile.direction;
      
      
      
      // if (tilesAdded.length>0) {
        if (tile.direction === "right") anchor.left += $el.width();
        if (tile.direction === "top")   anchor.top -= $el.height();
        if (tile.direction === "left")  anchor.left -= $el.width();
      // }
      
      // first tile => base
      // else {
      //   nextTile = tilesTop[0];
      //   nextDirection = nextTile.direction;
      // }
      
      
      // TEXTURE
      
      // if (tilesAdded.length>0) {
        
        var label;

        var ld = lastDirection;
        var nd = nextDirection;

        if      ( ld==="top"   && nd==="top" )     label = "bottomToTop";
        else if ( ld==="top"   && nd==="right" )   label = "bottomToRight";
        else if ( ld==="top"   && nd==="left" )    label = "bottomToLeft";
        else if ( ld==="right" && nd==="right" )   label = "leftToRight";
        else if ( ld==="right" && nd==="top" )     label = "leftToTop";
        else if ( ld==="left"  && nd==="left" )    label = "rightToLeft";
        else if ( ld==="left"  && nd==="top" )     label = "rightToTop";
        
        // use end tile
        if (runs===maxTiles-1) {
          if      (ld==="top")    label = "endTop";
          else if (ld==="right")  label = "endLeft";
          else if (ld==="left")   label = "endRight";
        }
        
        el.getSymbol("TileTexture").stop(label);
      // }
      
      
      // ----
      
      tilesAdded.push(el);
      
      
      el.play();
      runs++;
      
      //checkShadow();
    }
    
    if (runs===maxTiles){
      animation = playReverse;
      
      setTimeout(function() {
        //animation();
        
        reverseLoop = window.setInterval(function() { animation (); },125);
      }, 2000);
    }
  };
  
  

  function playReverse() {
    
    if (runsReverse>0) {
      //console.log("reverse");

      if (toRemove !== null) toRemove.element.hide();

      backwards = true;
      var tile = tilesAdded[runsReverse-1];
      toRemove = tile;

      tile.playReverse();
      runsReverse--;
      
      //checkShadow();
    }
    else reset();
  };
  
  function addCallback( _symbol ) {
    
    AdobeEdge.Symbol.bindTimelineAction(
     compId, _symbol, "Default Timeline", "complete", 
     function(sym, e) {
       
       isRunning = false;
       // setTimeout(function() {
       //   //if (animation===playReverse) animation();
       // }, getRandomTime() );
    });
  };
  
  function getRandomTime() {
    var t = 0;
    if (!backwards) {
      if (Math.random()>0.8) {
        t = Math.random()*500; 
      }
    }
    return t;
  };
  
  function checkShadow() {
    var st = $("#Stage");
    var x = 425;
    var w = -100000;
    
    st.find(">*").each(function() {
      var t = $(this);
      x = Math.min(x,t.position().left);
    });
    
    st.find(">*").each(function() {
      var t = $(this);
      
      w = Math.max(w,x+t.width());
    });
    
    //w = 150;
    
    //console.log(x,w);
    
    $(".shadow").css({
      "position":"absolute",
      "left":"50%",
      "margin-left": x,
      "top":800,
      "width":w,
      "height":20,
      "background":"black"
    });
  };
  
});