function TextElement ( _duration ) {
    
  var self = this;
  
  this.el = $('<div class="text-container"></div>');
  $("body").append(this.el);
  
  this.duration = _duration;
  
  var text = [
    "want",
    "dog",
    "cake",
    "extremly"
  ];
  
  this.run = function() {
    
    setTimeout(function() {
      self.change();
    }, this.duration);
  };
  
  this.change = function() {
    self.el.html( randomFrom(text) );
  };
};