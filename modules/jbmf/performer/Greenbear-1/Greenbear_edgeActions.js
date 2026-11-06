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
           var symNr = Math.ceil(Math.random()*4);
           var nextSym = sym.getSymbol('Symbol_'+symNr);
           nextSym.play(0);
           window.App.sym = sym;
         }
      
      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         $('.ani_syms').hide();
         window.App.nextScene();
      
      });
      //Edge binding end
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
      sym.stop();
      sym.element.hide();
      window.App.nextScene();
   
   });
   //Edge binding end
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
      sym.element.show();
   
   });
   //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
      sym.stop();
      sym.element.hide();
      window.App.nextScene();
   
   });
   //Edge binding end
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
      sym.element.show();
   
   });
   //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
      sym.stop();
      sym.element.hide();
      window.App.nextScene();
   
   });
   //Edge binding end
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
      sym.element.show();
   
   });
   //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
      sym.stop();
      sym.element.hide();
      window.App.nextScene();
   
   });
   //Edge binding end
   
   Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
      sym.element.show();
   
   });
   //Edge binding end

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

})(jQuery, AdobeEdge, "EDGE-10352377");