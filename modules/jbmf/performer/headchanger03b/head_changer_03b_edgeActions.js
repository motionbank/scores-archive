/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 63, function(sym, e) {
         // Zeitleiste an der angegebenen Position anhalten (ms oder Beschriftung)
         sym.stop("arms_up");
         
         var currentScene = sym.getVariable("currentScene");
         var currentHat = currentScene.hats.getRandom();
         sym.setVariable("currentHat", currentHat);
         
         sym.getSymbol("Hat").stop( currentHat );
         
         setTimeout(function(){
         		sym.playReverse();
         	}, 200);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop("arms_down");
         
         // very first round
         var scenes = sym.getVariable("scenes");
         var runs = sym.getVariable("runs");
         var currentScene = sym.getVariable("currentScene");
         
         if (runs === -1) {
         	//console.log("first");
         	sym.getSymbol(currentScene.top).stop("active");
         }
         
         sym.setVariable("isRunning", false);
         sym.setVariable("runs", (runs+1));
         runs = sym.getVariable("runs");
         
         //console.log( runs );
         
         sym.getSymbol("Face").stop( sym.getVariable("faces").getRandom() );
         
         if (runs===sym.getVariable("stayRuns")) {
         
         	sym.setVariable("runs", 0);
         	sym.setVariable("stayRuns", Math.floor(Math.random()*4+2) );
         
         	var lastScene = currentScene;
         	currentScene = scenes.getRandom();
         	sym.setVariable("currentScene", currentScene);
         
         	if (currentScene.top !== lastScene.top) {
         		sym.getSymbol(lastScene.top).play("out");
         		sym.getSymbol(currentScene.top).play("in");
         	}
         
         	//console.log(currentScene);
         }
         
         
         
         //setTimeout(function(){
         //		sym.play();
         //	}, 800);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         Array.prototype.getRandom = function() {
         	return this[ Math.floor(Math.random()*this.length)];
         }
         
         var scenes = [
         	{
         		top: "TopTree",
         		hats: ["hat_nest", "hat_laub"]
         	},
         	{
         		top: "TopUfo",
         		hats: ["hat_slime","hat_alien","hat_tube"]
         	},
         	{
         		top: "TopCloud",
         		hats: ["hat_beard","hat_fliegerhelm"]
         	}
         ];
         
         
         sym.setVariable("isRunning", false);
         
         sym.setVariable("faces", ["face01","face02","face03","face04"]);
         
         sym.setVariable("runs", -1);
         sym.setVariable("stayRuns", 4);
         var s = scenes.getRandom();
         sym.setVariable("currentScene", s);
         sym.setVariable("currentHat", s.hats.getRandom());
         
         
         sym.setVariable("scenes", scenes);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7, function(sym, e) {
         sym.setVariable("isRunning", true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Starter}", "click", function(sym, e) {
         if (!sym.getVariable("isRunning")) sym.play("arms_down");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Cover'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("HatAll");
   //Edge symbol end:'HatAll'

   //=========================================================
   
   //Edge symbol: 'Top'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 342, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 577, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Top");
   //Edge symbol end:'Top'

   //=========================================================
   
   //Edge symbol: 'TopUfo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 380, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 724, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("TopUfo");
   //Edge symbol end:'TopUfo'

   //=========================================================
   
   //Edge symbol: 'TopCloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 335, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 737, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("TopCloud");
   //Edge symbol end:'TopCloud'

   //=========================================================
   
   //Edge symbol: 'Face'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop("face04");

      });
      //Edge binding end

   })("Face");
   //Edge symbol end:'Face'

   //=========================================================
   
   //Edge symbol: 'Starter'
   (function(symbolName) {   
   
   })("Starter");
   //Edge symbol end:'Starter'

})(jQuery, AdobeEdge, "EDGE-11456972");