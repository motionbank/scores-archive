Array.prototype.getRandom = function() {
  return this[Math.floor(Math.random()*this.length)];
};

// Array.prototype.shuffle = function() {
//   this = this.sort(function() Math.random() - 0.5 );
// };

Array.prototype.shuffle = function() {
var s = [];
while (this.length) s.push(this.splice(Math.random() * this.length, 1)[0]);
while (s.length) this.push(s.pop());
return this;
}

jQuery.prototype.getRandom = function() {
  return $(this[Math.floor(Math.random()*this.length)]);
};

jQuery(function($) {
  
  var sf = 1;
  
  var runs = 0;
  var isRunning = false;
  
  // console.log($("body").css("transform"));
  
  var path = "/Users/mbaer/Documents/_Gestaltung/_Resourcen/GIF/umh_gifs/all/";
  
  var canvas = document.getElementById('canvas');

  canvas.width = window.innerWidth / sf;
  canvas.height = window.innerHeight / sf;
  
  $(window).resize(function() {
    canvas.width = window.innerWidth / sf;
    canvas.height = window.innerHeight / sf;
    draw();
  });
  
  var context = "";

  if (canvas && canvas.getContext) {

    context = canvas.getContext('2d');
    if (context) {
    }
  }
  
  var textSets = [
    ["want","give","fall","come","transform","sit","hop"],
    ["dog","cat","bird","child","you"],
    ["cake","car","tree","apple","bin","round"],
    ["extremely","obviously","instantly","randomly","relentlessly","ultimately"]
  ];
  
  var gradientSets = [
    ['#ff8082','#7c0000'],
    ['blue','black'],
    ["#66b782","#2a462d"],
    ["#ffff68","#897004"]
  ]
  
  gradientSets.shuffle();
  
  var con = $(".text-container");

  // for (var i=0; i < textSets.length; i++) {
  //   $('.text-container').append('<span class="word"></span>');
  // };

  var c = $(".bg");
  var r = 0;
  
  var current = null;

  setup();
  //animation();

  
  var timer = new Timer();
  timer.start(draw);
  
  // $("body").click(function() {
  //   if (!isRunning) animation();
  // });
  
  if ( window.messaging ) {
   window.messaging['>>ping'] = function (req, res) {
     //console.log( 'PING' );
        if (!isRunning) animation();
      };
  } else {
   console.log( 'messaging not available' );
  }
  
  
  function setup() {
    
    runs = 0;
    
    gradientSets.shuffle();
    
    $(".word").remove();
    
    for (var i=0; i < textSets.length; i++) {
      $('.text-container').append('<span class="word" data-index="'+i+'">' + textSets[i].getRandom() + '</span>');
    };
    
    con.each(function() {
       var t = $(this);
       
       var w = t.find(".word")
                .css({"opacity":0})
                .removeClass("active");
                
       var el = w.getRandom()
                 .css("opacity",1)
                 .addClass("active");
    });
    
    setBackgrounds();
    
    draw();
    
  };
  
  function change( _el ) {
    
    gradientSets.shuffle();
    
    var idx = $(".word").getRandom().data("index");
    var nw = textSets[idx].getRandom();    
    $(".text-container .word[data-index='" + idx + "']").html( nw );
    
    runs = 0;
    setBackgrounds();
    draw();
  };

  
  function setBackgrounds() {
    
    $('.text-container').each(function() {
      var t = $(this).find(".word.active");
      $(this).find(".bg").css({
         left: (t.position().left) / sf, 
         top: (t.position().top) / sf, 
         width: t.width() + 20,
         height: t.height() + 5
       });
    });
    
    
  };
  
  
  function animation() {
    
    if (runs === 30) change();
    
    isRunning = true;
    
    var t = con.getRandom();

       c = t.find(".bg");
       
      var els = t.find(".word")
                 .css("opacity",0)
                 .removeClass("active");
      
      var el = els.getRandom();
      el.addClass("active");
      el.delay(100).animate({
        "opacity":1
        },0,function() {
          isRunning = false;
        });

        
      setBackgrounds()
        
      //setTimeout(function() { isRunning = false }, 100);

      runs++;
  };
  
  function draw() {
    
    var con = $(".text-container");

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i=0; i<con.length-1; i++) {
      var cp0 = $(con[i]);
      var c0 = cp0.find(".bg");
      c0.top = (cp0.position().top+c0.position().top) / sf;
      c0.left = c0.position().left / sf;
      var cp1 = $(con[i+1]);
      var c1 = cp1.find(".bg");
      c1.top = (cp1.position().top+c1.position().top) / sf;
      c1.left = c1.position().left / sf;
      
      var hh = c0.height()+c0.top+c1.height()+c1.top;
      var ww = Math.max(c0.left+c0.width(),c1.left+c1.width());
      var grd = context.createLinearGradient(ww/2,0,ww/2,hh );
      
      if ( c0.left < c1.left ) {
        grd.addColorStop(0, gradientSets[0][0] );   
        grd.addColorStop(1, gradientSets[0][1]);
      }
      else {
        grd.addColorStop(0, gradientSets[1][0] );   
        grd.addColorStop(1, gradientSets[1][1] );
      }
        
      context.beginPath();
      context.moveTo(c0.left,c0.top);
      context.lineTo(c0.left+c0.width(),c0.top);

      context.lineTo(c1.left+c1.width(),c1.top);
      context.lineTo(c1.left+c1.width(),c1.top+c1.height());
      context.lineTo(c1.left,c1.top+c1.height());

      context.lineTo(c0.left,c0.top+c0.height());
      


      context.fillStyle = grd;
      context.fill();
      context.closePath();
    
      context.beginPath();
      context.moveTo(c0.left,c0.top);
      context.lineTo(c0.left+c0.width(),c0.top);
      context.lineTo(c0.left+c0.width(),c0.top + c0.height());
      
      // if (c0.left === c1.left && c0.width()<c1.width()) context.lineTo(c1.left+c1.width(),c1.top);
      context.lineTo(c1.left+c1.width(),c1.top+c1.height());
      context.lineTo(c1.left,c1.top+c1.height());
      context.lineTo(c1.left,c1.top);
            
      context.fillStyle = grd;
      context.fill();
      context.closePath();
      
    }
    
  };
  
});