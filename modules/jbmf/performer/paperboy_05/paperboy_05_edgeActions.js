/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rect_to_top_front_1'
   (function(symbolName) {   
   
   })("rect_to_top_back");
   //Edge symbol end:'rect_to_top_back'

   //=========================================================
   
   //Edge symbol: 'rect_to_top_front_1'
   (function(symbolName) {   
   
   })("rect_to_right_back");
   //Edge symbol end:'rect_to_right_back'

   //=========================================================
   
   //Edge symbol: 'rect_to_right_front_1'
   (function(symbolName) {   
   
      })("rect_to_left_back");
   //Edge symbol end:'rect_to_left_back'

   //=========================================================
   
   //Edge symbol: 'Front'
   (function(symbolName) {   
   
   })("Front");
   //Edge symbol end:'Front'

   //=========================================================
   
   //Edge symbol: 'Back'
   (function(symbolName) {   
   
   })("Back");
   //Edge symbol end:'Back'

   //=========================================================
   
   //Edge symbol: 'Base'
   (function(symbolName) {   
   
   })("Base");
   //Edge symbol end:'Base'

   //=========================================================
   
   //Edge symbol: 'TileTexture'
   (function(symbolName) {   
   
   })("TileTexture");
   //Edge symbol end:'TileTexture'

   //=========================================================
   
   //Edge symbol: 'rag_hand'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop( Math.floor(Math.random()*3).toString() );
         //sym.stop( "2" );

      });
      //Edge binding end

   })("rag_end");
   //Edge symbol end:'rag_end'

   //=========================================================
   
   //Edge symbol: 'rag_straight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop( Math.floor(Math.random()*4).toString() );

      });
      //Edge binding end

   })("rag_straight");
   //Edge symbol end:'rag_straight'

   //=========================================================
   
   //Edge symbol: 'rag_angle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop( Math.floor(Math.random()*2).toString() );

      });
      //Edge binding end

   })("rag_angle");
   //Edge symbol end:'rag_angle'

   //=========================================================
   
   //Edge symbol: 'BG'
   (function(symbolName) {   
   
   })("BG");
   //Edge symbol end:'BG'

   //=========================================================
   
   //Edge symbol: 'straight_flute'
   (function(symbolName) {   
   
   })("straight_flute");
   //Edge symbol end:'straight_flute'

   //=========================================================
   
   //Edge symbol: 'wind_rad'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("wind_rad");
   //Edge symbol end:'wind_rad'

   //=========================================================
   
   //Edge symbol: 'straight_reach'
   (function(symbolName) {   
   
   })("straight_reach");
   //Edge symbol end:'straight_reach'

   //=========================================================
   
   //Edge symbol: 'rag_hand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 911, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("end_hand");
   //Edge symbol end:'end_hand'

   //=========================================================
   
   //Edge symbol: 'end_mouth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play("loop");

      });
      //Edge binding end

   })("end_mouth");
   //Edge symbol end:'end_mouth'

   //=========================================================
   
   //Edge symbol: 'end_rocket'
   (function(symbolName) {   
   
   })("end_rocket");
   //Edge symbol end:'end_rocket'

})(jQuery, AdobeEdge, "EDGE-308395229");