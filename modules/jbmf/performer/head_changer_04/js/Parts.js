function Head ( _el ) {
  
  this.isRunning = false;
  this.el = $(_el);
  this.posUp = { x: 0, y: -this.el.parent().width()};
  this.currentTarget = $("[data-target]").random().data("target");
  //this.el.css({"top":this.pos.y + "px"});
  
  this.currentFace = $("#face img").first();
  
  this.run = function( _d ) {
    
    this.isRunning = true;
    
    if (Math.random()>0.2) {
      this.moveTop( _d );
    }
    else {
      this.moveHead( _d );
    }
  };
  
  this.moveTop = function( _d ) {
    
    var that = this;
    $("#face .show").removeClass("show");
    
    this.posUp = { x: 0, y: -this.el.parent().width()};
    
    var t = {
      up: Math.floor(_d*2/5),
      wait: Math.floor(_d*1/5),
      down: Math.floor(_d*2/5)
    }
    
    this.el
      // up
      .animate(
        {top: this.posUp.y},
        t.up, 
        "easeOutQuart",
        // ==================================================== show random graphic
        function() {
          that.changeTarget();
          that.changeTop();
          that.changeFace();
        }
      )
      // wait
      .delay( t.wait )
      // down
      .animate(
        {top: 0 }, 
        t.down, 
        "easeOutSine",
        
        function() {
          that.isRunning = false;
          //that.changeHead();
          $("#face").find( that.currentTarget ).addClass("show");
        }
      );
  };
  
  this.moveHead = function( _d ) {
    
    var that = this;
    //$("#face .show").removeClass("show");
    this.posUp = { x: 0, y: -this.el.parent().width()};
    
    var t = {
      up: Math.floor(_d*2/5),
      wait: Math.floor(_d*1/5),
      down: Math.floor(_d*2/5)
    }
    
    $("#head, #face-default")
      // up
      .animate(
        {top: this.posUp.y},
        t.up, 
        "easeOutQuart",
        // ==================================================== show random graphic
        function() {
          that.changeHead();
        }
      )
      // wait
      .delay( t.wait )
      // down
      .animate(
        {top: 0 }, 
        t.down, 
        "easeOutSine",
        
        function() {
          that.isRunning = false;
          //that.changeHead();
          
        }
      );
  };
  
  this.changeTarget = function() {
    if (Math.random()>0.6) this.currentTarget = $("[data-target]").random().data("target");
  };
  
  this.changeTop = function() {
    
    var ac = this.el.find(".asset-container").removeClass("show");
      
    $("#top").find( this.currentTarget )
      .addClass("show")
      .find("img")
        .removeClass("show")
        .random()
        .addClass("show");

  };
  
  this.changeFace = function() {
    
    var ac = $("#face").find( this.currentTarget );
    
    var next = this.currentFace;
    
    while ( this.currentFace.attr("src") === next.attr("src") ) {
      next = ac.find("img").random();
    }
    
    $("#face").find(".asset-container").removeClass("show");
    
    next.addClass("show");
        
    this.currentFace = next;
  };
  
  this.changeHead = function() {
    
    $("#head").find(".asset-container").removeClass("show");
    
    $("#head").find(".asset-container")
      .random()
      .addClass("show")
      .find("img")
        .removeClass("show")
        .random()
        .addClass("show");
  
  };
  
};


function Arms ( _el ) {
  
  this.isRunning = false;
  this.el = $(_el);
  this.posUp = { x: 0, y: -this.el.parent().width()};
  //this.el.css({"top":this.pos.y + "px"});
  
  this.run = function( _d ) {
    
    var that = this;
    this.isRunning = true;
    this.posUp = { x: 0, y: -this.el.parent().width()};

    var t = {
      up: Math.floor(_d*2/5),
      wait: Math.floor(_d*1/5),
      down: Math.floor(_d*2/5)
    }
    
    this.el.find("img")
      // up
      .animate(
        {top: this.posUp.y},
        t.up, 
        "easeOutQuart"
      )
      // wait
      .delay( t.wait )
      // down
      .animate(
        {top: 0 }, 
        t.down, 
        "easeOutSine",
        function() { that.isRunning = false; }
      );
  };
  
};
