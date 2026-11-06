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
         	var childSyms = sym.getChildSymbols();
           var symNr = Math.floor(Math.random()*childSyms.length);
           var nextSym = childSyms[symNr];
           $('.ani_syms').hide();
           nextSym.play(0);
           nextSym.element.show();
           window.App.sym = nextSym;
         }
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
         

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
         

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1278, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
         

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

})(jQuery, AdobeEdge, "EDGE-529531224");