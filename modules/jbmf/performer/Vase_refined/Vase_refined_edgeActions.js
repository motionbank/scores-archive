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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         window.App = window.App || {};
         window.App.nextScene = function () {
         	if ( window.App.sym && window.App.sym.isPlaying() ) return;
         	var symNr = Math.floor(Math.random()*childSyms.length);
         	var nextSym = childSyms[symNr];
         	$('.ani_syms').hide();
         	nextSym.element.show().css({'visibility':'visible'});
         	nextSym.play(0);
         	window.App.sym = nextSym;
         }
         var childSyms = sym.getChildSymbols();
         $('.ani_syms').css({'visibility':'hidden'});
         if ( ! window.App.sym ) {
         	childSyms[0].element.css({'visibility':'visible'});
         }

      });
      //Edge binding end
      
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MArm'
   (function(symbolName) {   
   
   
   
   

   })("Symbol_5");
   //Edge symbol end:'Symbol_5'

   //=========================================================
   
   //Edge symbol: 'Tongue'
   (function(symbolName) {   
   
   
   
   

   })("Symbol_6");
   //Edge symbol end:'Symbol_6'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   
   
   

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   
   
   

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   
   
   

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
      
      
      
      
      
      

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_7'
   (function(symbolName) {   
   
   
   
   

   })("Symbol_7");
   //Edge symbol end:'Symbol_7'

   //=========================================================
   
   //Edge symbol: 'Symbol_8'
   (function(symbolName) {   
   
      

      

   })("Symbol_8");
   //Edge symbol end:'Symbol_8'

})(jQuery, AdobeEdge, "EDGE-13465222");