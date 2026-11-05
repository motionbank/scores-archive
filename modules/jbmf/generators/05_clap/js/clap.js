function Clap ( ) {
  
  var self = this;
  
  this.isRunning = false;
  
  var path = "img/";
  // var srcTop = ["hand_down_02.png", "ball01.png","face01.png", "heart.gif"];
  // var srcBottom = ["hand_up_02.png", "handgreen.png", "smilies_bottom.png"];
  
  var srcTop = ["01-01down.png", "01-02down.png", "01-05down.png"];
  var srcBottom = ["01-03up.png", "01-04up.png"];
  
  // var stage = new createjs.Stage("canvas");
  // var w = stage.canvas.width;
  // var h = stage.canvas.height;
  // var center = {x:stage.canvas.height/2, y:stage.canvas.width/2};
  
  // var c = agent();
  // stage.addChild(c);
  
  var center = {x: $("#content").width()/2, y: $("#content").height()/2 };
  
  var claps = 0;
  
  this.callBack = function() {};
  
  this.el = $('.clap-container');
  
  var cntBottom = {};
  cntBottom.el = $('.container-front');
  cntBottom.el.css({top: center.y -cntBottom.el.height()/2});
  
  var cntTop = {};
  cntTop.el = $('.container-back');
  cntTop.el.css({top: center.y -cntTop.el.height()/2});
  
  this.el.show();
  // stage.update();
  
  //var interval = window.setInterval(draw,20);
  
  var rt = 7;
  var rb = 5;
  
  // this.init = function( _duration) {
  //   self.run();
  //   
  //   dOpen = Math.floor(_duration/5*3);
  //   dClose = _duration - dOpen;
  // };
  
  this.run = function( _duration, _pm ) {
    
    //console.log("run clap");
    
    // self.callBack();
    this.isRunning = true;
    var that = this;
    
    // timings
    var dPause = 0;
    if (Math.random()>0.8) dPause = 1000;
    var dOpen = Math.floor((_duration)/5*3);
    var dClose = _duration - dOpen;
    
    center = {x: $("#content").width()/2, y: $("#content").height()/2 };
    var dist = {top: $("#content").width()/2, bottom: $("#content").width()/4};

    // TOP
    // up
    // cntTop.el.animate({top: center.y - dist.top - cntTop.el.height()/2},dOpen, "easeOutQuad", function() {
    //   // pause
    //   setTimeout(function() {
    //     // down
    //     cntTop.el.animate({top: center.y -cntTop.el.height()/2},dClose, "easeInQuart", function() {
    //       if (claps%rt === 0) {
    // 
    //         setTimeout(function() {
    //           cntTop.el.find("img").attr("src", path + randomFrom( srcTop ) );
    //         }, 0);
    //         rt = Math.random()*7+1|0;
    //       }
    //     });
    //   }, dPause);
    // });
    
    // up / pause / down / change if
    cntTop.el.animate({top: center.y - dist.top - cntTop.el.height()/2},dOpen, "easeOutQuad").delay(dPause)
             .animate({top: center.y -cntTop.el.height()/2},dClose, "easeInQuart", function() {
               if (claps%rt === 0) {

                 setTimeout(function() {
                   cntTop.el.find("img").attr("src", path + randomFrom( srcTop ) );
                 }, 0);
                 rt = Math.random()*7+1|0;
               }
             });
    
    // BOTTOM
    // // up
    // cntBottom.el.animate({top: center.y + dist.bottom -cntBottom.el.height()/2},dOpen, "easeOutQuad", function() {
    //   // pause
    //   setTimeout(function() {
    //     // down
    //     cntBottom.el.animate({top: center.y -cntBottom.el.height()/2},dClose, "easeInQuart", function() {
    //       if (claps%rb === 0) {
    //         setTimeout(function() {
    //           cntBottom.el.find("img").attr("src", path + randomFrom( srcBottom ) );
    //         }, 0);
    //         rb = Math.random()*7+1|0;
    //       }
    // 
    //       // END OF ANIMATION
    //       that.isRunning = false;
    //       _pm.send('>>ping',{title:'hands clap'});
    //       
    //       var nd = (Math.random()>0.7) ? config.duration + Math.random()*500-250 : config.duration;
    //       that.run( nd, _pm );
    //     });
    //   }, dPause);
    // });
    
    // up / pause / down / change if
    cntBottom.el.animate({top: center.y + dist.bottom -cntBottom.el.height()/2},dOpen, "easeOutQuad").delay(dPause)
                .animate({top: center.y -cntBottom.el.height()/2},dClose, "easeInQuart", function() {
                  if (claps%rb === 0) {
                    setTimeout(function() {
                      cntBottom.el.find("img").attr("src", path + randomFrom( srcBottom ) );
                    }, 0);
                    rb = Math.random()*7+1|0;
                  }
                  // END OF ANIMATION
                  that.isRunning = false;
                  _pm.send('>>ping',{title:'hands clap'});

                  var nd = (Math.random()>0.7) ? config.duration + Math.random()*500-250 : config.duration;
                  that.run( nd, _pm );
                });
    claps++;
    
  };
  

  
};