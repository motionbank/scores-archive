/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Symbol_2',
            type:'rect',
            rect:['38','-55','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['38','-55','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_3',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_4',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         }],
         symbolInstances: [
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'Symbol_4',
            symbolName:'Symbol_4'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'Symbol_2',
            symbolName:'Symbol_2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_3}": [
            ["style", "top", '131px'],
            ["style", "left", '163px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_Symbol_2}": [
            ["style", "top", '131px'],
            ["style", "left", '163px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_4}": [
            ["style", "left", '163px'],
            ["style", "top", '131px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '131px'],
            ["style", "left", '163px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid184", tween: [ "style", "${_Symbol_2}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "transform", "${_Symbol_2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1426", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid232", tween: [ "transform", "${_Symbol_1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid368", tween: [ "style", "${_Symbol_3}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "style", "${_Symbol_1}", "left", '163px', { fromValue: '163px'}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_Symbol_2}", "left", '163px', { fromValue: '163px'}], position: 0, duration: 0 },
            { id: "eid367", tween: [ "style", "${_Symbol_3}", "left", '163px', { fromValue: '163px'}], position: 0, duration: 0 },
            { id: "eid381", tween: [ "transform", "${_Symbol_3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1015", tween: [ "style", "${_Symbol_4}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid197", tween: [ "style", "${_Symbol_1}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid1014", tween: [ "style", "${_Symbol_4}", "left", '163px', { fromValue: '163px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Flame": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'flame',
      type: 'group',
      rect: ['0px','0px','56','92','auto','auto'],
      c: [
      {
         id: 'flame1',
         type: 'image',
         rect: ['8px','7px','41px','85px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/flame1.svg','0px','0px']
      },
      {
         id: 'flame2',
         type: 'image',
         rect: ['0px','9px','49px','83px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/flame2.svg','0px','0px']
      },
      {
         id: 'flame3',
         type: 'image',
         rect: ['5px','0px','51px','87px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/flame3.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_flame3}": [
            ["style", "top", '0px'],
            ["style", "height", '87px'],
            ["style", "opacity", '0'],
            ["style", "left", '5px'],
            ["style", "width", '51px']
         ],
         "${_flame1}": [
            ["style", "top", '7px'],
            ["style", "height", '85px'],
            ["style", "opacity", '1'],
            ["style", "left", '8px'],
            ["style", "width", '41px']
         ],
         "${_flame2}": [
            ["style", "top", '9px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '49px']
         ],
         "${_flame}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '92px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3425,
         autoPlay: true,
         timeline: [
            { id: "eid32", tween: [ "transform", "${_flame}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_flame2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 228 },
            { id: "eid12", tween: [ "style", "${_flame2}", "opacity", '0', { fromValue: '1'}], position: 228, duration: 228 },
            { id: "eid59", tween: [ "style", "${_flame2}", "opacity", '1', { fromValue: '0.000000'}], position: 685, duration: 228 },
            { id: "eid60", tween: [ "style", "${_flame2}", "opacity", '0', { fromValue: '1'}], position: 913, duration: 228 },
            { id: "eid68", tween: [ "style", "${_flame2}", "opacity", '1', { fromValue: '0.000000'}], position: 1370, duration: 228 },
            { id: "eid69", tween: [ "style", "${_flame2}", "opacity", '0', { fromValue: '1'}], position: 1598, duration: 228 },
            { id: "eid77", tween: [ "style", "${_flame2}", "opacity", '1', { fromValue: '0.000000'}], position: 2055, duration: 228 },
            { id: "eid78", tween: [ "style", "${_flame2}", "opacity", '0', { fromValue: '1'}], position: 2283, duration: 228 },
            { id: "eid94", tween: [ "style", "${_flame2}", "opacity", '1', { fromValue: '0.000000'}], position: 2740, duration: 228 },
            { id: "eid95", tween: [ "style", "${_flame2}", "opacity", '0', { fromValue: '1'}], position: 2968, duration: 228 },
            { id: "eid33", tween: [ "transform", "${_flame}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "transform", "${_flame}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_flame3}", "opacity", '1', { fromValue: '0'}], position: 228, duration: 228 },
            { id: "eid15", tween: [ "style", "${_flame3}", "opacity", '0', { fromValue: '1'}], position: 457, duration: 228 },
            { id: "eid56", tween: [ "style", "${_flame3}", "opacity", '1', { fromValue: '0'}], position: 913, duration: 228 },
            { id: "eid57", tween: [ "style", "${_flame3}", "opacity", '0', { fromValue: '1'}], position: 1142, duration: 228 },
            { id: "eid65", tween: [ "style", "${_flame3}", "opacity", '1', { fromValue: '0'}], position: 1598, duration: 228 },
            { id: "eid66", tween: [ "style", "${_flame3}", "opacity", '0', { fromValue: '1'}], position: 1827, duration: 228 },
            { id: "eid74", tween: [ "style", "${_flame3}", "opacity", '1', { fromValue: '0'}], position: 2283, duration: 228 },
            { id: "eid75", tween: [ "style", "${_flame3}", "opacity", '0', { fromValue: '1'}], position: 2512, duration: 228 },
            { id: "eid92", tween: [ "style", "${_flame3}", "opacity", '1', { fromValue: '0'}], position: 2968, duration: 228 },
            { id: "eid93", tween: [ "style", "${_flame3}", "opacity", '0', { fromValue: '1'}], position: 3197, duration: 228 },
            { id: "eid5", tween: [ "style", "${_flame1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 228 },
            { id: "eid14", tween: [ "style", "${_flame1}", "opacity", '1', { fromValue: '0.000000'}], position: 457, duration: 228 },
            { id: "eid62", tween: [ "style", "${_flame1}", "opacity", '0', { fromValue: '1'}], position: 685, duration: 228 },
            { id: "eid63", tween: [ "style", "${_flame1}", "opacity", '1', { fromValue: '0.000000'}], position: 1142, duration: 228 },
            { id: "eid71", tween: [ "style", "${_flame1}", "opacity", '0', { fromValue: '1'}], position: 1370, duration: 228 },
            { id: "eid72", tween: [ "style", "${_flame1}", "opacity", '1', { fromValue: '0.000000'}], position: 1827, duration: 228 },
            { id: "eid80", tween: [ "style", "${_flame1}", "opacity", '0', { fromValue: '1'}], position: 2055, duration: 228 },
            { id: "eid81", tween: [ "style", "${_flame1}", "opacity", '1', { fromValue: '0.000000'}], position: 2512, duration: 228 },
            { id: "eid97", tween: [ "style", "${_flame1}", "opacity", '0', { fromValue: '1'}], position: 2740, duration: 228 },
            { id: "eid100", tween: [ "style", "${_flame1}", "opacity", '1', { fromValue: '0.000000'}], position: 3197, duration: 228 }         ]
      }
   }
},
"Match": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'match_burned',
      rect: ['0px','220px','17px','187px','auto','auto'],
      clip: ['rect(-38px 17px 188px 0px)'],
      fill: ['rgba(0,0,0,0)','images/match_burned.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'match',
      rect: ['0px','221px','16px','187px','auto','auto'],
      clip: ['rect(-10px 16px 188px 0px)'],
      fill: ['rgba(0,0,0,0)','images/match.svg','0px','0px']
   },
   {
      id: 'Flame',
      type: 'rect',
      rect: ['-23','160','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Flame',
      symbolName: 'Flame'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '408px'],
            ["style", "width", '51px']
         ],
         "${_match_burned}": [
            ["style", "top", '220px'],
            ["style", "height", '187px'],
            ["style", "left", '0px'],
            ["style", "clip", [-38,17,-4,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '17px']
         ],
         "${_Flame}": [
            ["style", "-webkit-transform-origin", [58.93,80.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.26888'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.28809'],
            ["style", "opacity", '0'],
            ["style", "left", '-23px'],
            ["style", "top", '160px']
         ],
         "${_match}": [
            ["style", "top", '221px'],
            ["style", "height", '187px'],
            ["style", "left", '0px'],
            ["style", "clip", [-8,16,188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '16px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid139", tween: [ "transform", "${_Flame}", "scaleX", '0.91071', { fromValue: '0.28809'}], position: 0, duration: 202 },
            { id: "eid141", tween: [ "transform", "${_Flame}", "scaleX", '0.91071', { fromValue: '0.91071'}], position: 202, duration: 2548 },
            { id: "eid44", tween: [ "transform", "${_Flame}", "scaleX", '0.52172', { fromValue: '0.91071'}], position: 2750, duration: 250 },
            { id: "eid140", tween: [ "transform", "${_Flame}", "scaleY", '0.85719', { fromValue: '0.26888'}], position: 0, duration: 202 },
            { id: "eid142", tween: [ "transform", "${_Flame}", "scaleY", '0.85', { fromValue: '0.85719'}], position: 202, duration: 2388 },
            { id: "eid82", tween: [ "transform", "${_Flame}", "scaleY", '0.58106', { fromValue: '0.85'}], position: 2590, duration: 160 },
            { id: "eid45", tween: [ "transform", "${_Flame}", "scaleY", '0.527', { fromValue: '0.58106'}], position: 2750, duration: 250 },
            { id: "eid41", tween: [ "style", "${_Flame}", "top", '322px', { fromValue: '160px'}], position: 0, duration: 3000 },
            { id: "eid39", tween: [ "style", "${_Flame}", "-webkit-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid2879", tween: [ "style", "${_Flame}", "-moz-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid2880", tween: [ "style", "${_Flame}", "-ms-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid2881", tween: [ "style", "${_Flame}", "msTransformOrigin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid2882", tween: [ "style", "${_Flame}", "-o-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_match}", "clip", [185,16,188,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-8,16,188,0]}], position: 0, duration: 3000 },
            { id: "eid40", tween: [ "style", "${_Flame}", "left", '-19px', { fromValue: '-23px'}], position: 0, duration: 3000 },
            { id: "eid30", tween: [ "style", "${_match_burned}", "clip", [-38,27,64.22333526611328,-7], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-38,17,-4,0]}], position: 0, duration: 1055 },
            { id: "eid34", tween: [ "style", "${_match_burned}", "clip", [-38,32,184,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-38,27,64.22333526611328,-7]}], position: 1055, duration: 1945 },
            { id: "eid46", tween: [ "transform", "${_Flame}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 0, duration: 375 },
            { id: "eid83", tween: [ "transform", "${_Flame}", "rotateZ", '-27deg', { fromValue: '12deg'}], position: 375, duration: 375 },
            { id: "eid84", tween: [ "transform", "${_Flame}", "rotateZ", '5deg', { fromValue: '-27deg'}], position: 750, duration: 500 },
            { id: "eid85", tween: [ "transform", "${_Flame}", "rotateZ", '16deg', { fromValue: '5deg'}], position: 1250, duration: 500 },
            { id: "eid86", tween: [ "transform", "${_Flame}", "rotateZ", '-10deg', { fromValue: '16deg'}], position: 1750, duration: 350 },
            { id: "eid87", tween: [ "transform", "${_Flame}", "rotateZ", '-9deg', { fromValue: '-10deg'}], position: 2100, duration: 400 },
            { id: "eid88", tween: [ "transform", "${_Flame}", "rotateZ", '-15deg', { fromValue: '-9deg'}], position: 2500, duration: 500 },
            { id: "eid104", tween: [ "style", "${_Flame}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 202 },
            { id: "eid106", tween: [ "style", "${_Flame}", "opacity", '0', { fromValue: '1'}], position: 2940, duration: 60 }         ]
      }
   }
},
"Symbol_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'shadowCopy',
      type: 'image',
      rect: ['0px','344px','496px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      id: 'MatchCopy4',
      type: 'rect',
      rect: ['464px','272px','auto','auto','auto','auto']
   },
   {
      id: 'blob_rightCopy2',
      type: 'image',
      rect: ['226px','154px','145px','135px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blob_right.svg','0px','0px']
   },
   {
      id: 'blob_leftCopy',
      type: 'image',
      rect: ['108px','154px','130px','151px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blob_left.svg','0px','0px']
   },
   {
      id: 'blob_midCopy',
      type: 'image',
      rect: ['162px','129px','152px','277px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blob_mid.svg','0px','0px']
   },
   {
      id: 'blob_topCopy',
      type: 'image',
      rect: ['176px','64px','122px','129px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blob_top.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'MatchCopy4',
      symbolName: 'Match'
   }   ]
   },
   states: {
      "Base State": {
         "${_shadowCopy}": [
            ["style", "height", '112px'],
            ["style", "top", '344px'],
            ["style", "left", '0px'],
            ["style", "width", '496px']
         ],
         "${_blob_rightCopy2}": [
            ["style", "height", '135px'],
            ["style", "top", '154px'],
            ["style", "left", '226px'],
            ["style", "width", '145px']
         ],
         "${symbolSelector}": [
            ["style", "height", '456px'],
            ["style", "width", '496px']
         ],
         "${_MatchCopy4}": [
            ["style", "-webkit-transform-origin", [14.94,98.15], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-48px'],
            ["style", "left", '258px'],
            ["transform", "rotateZ", '-35deg']
         ],
         "${_blob_topCopy}": [
            ["style", "height", '129px'],
            ["style", "top", '64px'],
            ["style", "left", '176px'],
            ["style", "width", '122px']
         ],
         "${_blob_leftCopy}": [
            ["style", "height", '151px'],
            ["style", "top", '154px'],
            ["style", "left", '108px'],
            ["style", "width", '130px']
         ],
         "${_blob_midCopy}": [
            ["style", "height", '277px'],
            ["style", "top", '129px'],
            ["style", "left", '162px'],
            ["style", "width", '152px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3940,
         autoPlay: false,
         timeline: [
            { id: "eid200", tween: [ "transform", "${_MatchCopy4}", "rotateZ", '-35deg', { fromValue: '-35deg'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "style", "${_MatchCopy4}", "top", '-197px', { fromValue: '-48px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid216", tween: [ "style", "${_MatchCopy4}", "top", '-48px', { fromValue: '-197px'}], position: 3440, duration: 500, easing: "easeInOutQuad" },
            { id: "eid201", tween: [ "style", "${_MatchCopy4}", "left", '148px', { fromValue: '258px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid215", tween: [ "style", "${_MatchCopy4}", "left", '258px', { fromValue: '148px'}], position: 3440, duration: 500, easing: "easeInOutQuad" },
            { id: "eid221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_MatchCopy4}', [] ], ""], position: 0 },
            { id: "eid222", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_MatchCopy4}', [] ], ""], position: 440 }         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'shadowCopy2',
      type: 'image',
      rect: ['0px','344px','496px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['191','31','325','325','auto','auto'],
      c: [
      {
         id: 'blob_rightCopy3',
         type: 'image',
         rect: ['35px','123px','145px','135px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/blob_right.svg','0px','0px']
      },
      {
         rect: ['142px','41px','41','190','auto','auto'],
         id: 'Match',
         type: 'group',
         transform: [[],['41']],
         c: [
         {
            rect: ['13px','0px','17px','187px','auto','auto'],
            id: 'match_burne',
            type: 'image',
            clip: ['rect(-38px 17px 188px 0px)'],
            fill: ['rgba(0,0,0,0)','images/match_burned.svg','0px','0px']
         },
         {
            rect: ['13px','1px','16px','187px','auto','auto'],
            id: 'match',
            type: 'image',
            clip: ['rect(-10px 16px 188px 0px)'],
            fill: ['rgba(0,0,0,0)','images/match.svg','0px','0px']
         },
         {
            id: 'Flame',
            type: 'rect',
            rect: ['-10px','-60px','auto','auto','auto','auto']
         }]
      }]
   },
   {
      rect: ['108px','154px','130px','151px','auto','auto'],
      id: 'blob_left',
      transform: [[],['-2']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/blob_left.svg','0px','0px']
   },
   {
      id: 'blob_mid',
      type: 'image',
      rect: ['162px','129px','152px','277px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blob_mid.svg','0px','0px']
   },
   {
      id: 'blob_top',
      type: 'image',
      rect: ['176px','64px','122px','129px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blob_top.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Flame',
      symbolName: 'Flame'
   }   ]
   },
   states: {
      "Base State": {
         "${_match_burne}": [
            ["style", "top", '-1px'],
            ["style", "height", '187px'],
            ["style", "clip", [-38,17,-4,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '17px'],
            ["style", "width", '17px']
         ],
         "${_match}": [
            ["style", "top", '1px'],
            ["style", "height", '187px'],
            ["style", "clip", [-8,16,188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '13px'],
            ["style", "width", '16px']
         ],
         "${_shadowCopy2}": [
            ["style", "height", '112px'],
            ["style", "top", '344px'],
            ["style", "left", '0px'],
            ["style", "width", '496px']
         ],
         "${_Group}": [
            ["style", "-webkit-transform-origin", [34.46,44.31], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [34.46,44.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [34.46,44.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [34.46,44.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [34.46,44.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '191px'],
            ["style", "top", '31px']
         ],
         "${_Match}": [
            ["style", "-webkit-transform-origin", [51.22,95.26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51.22,95.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51.22,95.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51.22,95.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51.22,95.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '41deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '142px'],
            ["style", "top", '41px']
         ],
         "${_Flame}": [
            ["style", "-webkit-transform-origin", [58.93,80.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.26888'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.28809'],
            ["style", "opacity", '0'],
            ["style", "left", '-10px'],
            ["style", "top", '-60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '456px'],
            ["style", "width", '496px']
         ],
         "${_blob_left}": [
            ["style", "-webkit-transform-origin", [67.69,26.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [67.69,26.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [67.69,26.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [67.69,26.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [67.69,26.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-2deg'],
            ["style", "height", '151px'],
            ["style", "top", '154px'],
            ["style", "left", '108px'],
            ["style", "width", '130px']
         ],
         "${_blob_top}": [
            ["style", "top", '64px'],
            ["style", "height", '129px'],
            ["style", "left", '176px'],
            ["style", "width", '122px']
         ],
         "${_blob_rightCopy3}": [
            ["style", "height", '135px'],
            ["style", "top", '123px'],
            ["style", "left", '35px'],
            ["style", "width", '145px']
         ],
         "${_blob_mid}": [
            ["style", "height", '277px'],
            ["style", "top", '129px'],
            ["style", "left", '162px'],
            ["style", "width", '152px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2857,
         autoPlay: false,
         timeline: [
            { id: "eid292", tween: [ "transform", "${_Flame}", "scaleX", '0.91071', { fromValue: '0.28809'}], position: 0, duration: 192 },
            { id: "eid305", tween: [ "transform", "${_Flame}", "scaleX", '0.91', { fromValue: '0.91071'}], position: 192, duration: 1474 },
            { id: "eid310", tween: [ "transform", "${_Flame}", "scaleX", '0', { fromValue: '0.91'}], position: 1667, duration: 95 },
            { id: "eid300", tween: [ "style", "${_match_burne}", "clip", [-38,27,64.22333526611328,-7], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-38,17,-4,0]}], position: 202, duration: 853 },
            { id: "eid301", tween: [ "style", "${_match_burne}", "clip", [-38,29.043701171875,113.18089294433594,-4.138816833496094], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-38,27,64.22333526611328,-7]}], position: 1055, duration: 795 },
            { id: "eid309", tween: [ "style", "${_match_burne}", "clip", [-38,29.043701171875,113.18089294433594,-4.138816833496094], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-38,29.043701171875,113.18089294433594,-4.138816833496094]}], position: 1850, duration: 0 },
            { id: "eid321", tween: [ "style", "${_Group}", "left", '191px', { fromValue: '191px'}], position: 1500, duration: 0 },
            { id: "eid315", tween: [ "transform", "${_Match}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 202, easing: "easeInOutQuad" },
            { id: "eid334", tween: [ "transform", "${_Match}", "scaleX", '0', { fromValue: '1'}], position: 2655, duration: 202, easing: "easeInOutQuad" },
            { id: "eid298", tween: [ "style", "${_Flame}", "-webkit-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 2857, duration: 0 },
            { id: "eid2883", tween: [ "style", "${_Flame}", "-moz-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 2857, duration: 0 },
            { id: "eid2884", tween: [ "style", "${_Flame}", "-ms-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 2857, duration: 0 },
            { id: "eid2885", tween: [ "style", "${_Flame}", "msTransformOrigin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 2857, duration: 0 },
            { id: "eid2886", tween: [ "style", "${_Flame}", "-o-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 2857, duration: 0 },
            { id: "eid281", tween: [ "transform", "${_Flame}", "scaleY", '0.85719', { fromValue: '0.26888'}], position: 0, duration: 192 },
            { id: "eid282", tween: [ "transform", "${_Flame}", "scaleY", '0.85253', { fromValue: '0.85719'}], position: 192, duration: 1474 },
            { id: "eid303", tween: [ "transform", "${_Flame}", "scaleY", '0', { fromValue: '0.85253'}], position: 1667, duration: 95 },
            { id: "eid280", tween: [ "style", "${_Flame}", "top", '102px', { fromValue: '-60px'}], position: 0, duration: 2857 },
            { id: "eid316", tween: [ "transform", "${_Match}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 202, easing: "easeInOutQuad" },
            { id: "eid335", tween: [ "transform", "${_Match}", "scaleY", '0', { fromValue: '1'}], position: 2655, duration: 202, easing: "easeInOutQuad" },
            { id: "eid326", tween: [ "transform", "${_Group}", "rotateZ", '-66deg', { fromValue: '0deg'}], position: 1500, duration: 120, easing: "easeInOutQuad" },
            { id: "eid327", tween: [ "transform", "${_Group}", "rotateZ", '24deg', { fromValue: '-66deg'}], position: 1620, duration: 130, easing: "easeInOutQuad" },
            { id: "eid328", tween: [ "transform", "${_Group}", "rotateZ", '-25deg', { fromValue: '24deg'}], position: 1750, duration: 100, easing: "easeInOutQuad" },
            { id: "eid329", tween: [ "transform", "${_Group}", "rotateZ", '14deg', { fromValue: '-25deg'}], position: 1850, duration: 105, easing: "easeInOutQuad" },
            { id: "eid331", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 1955, duration: 145, easing: "easeInOutQuad" },
            { id: "eid322", tween: [ "style", "${_Group}", "top", '31px', { fromValue: '31px'}], position: 1500, duration: 0 },
            { id: "eid314", tween: [ "style", "${_Match}", "-webkit-transform-origin", [51.22,95.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.22,95.26]}], position: 0, duration: 0 },
            { id: "eid2887", tween: [ "style", "${_Match}", "-moz-transform-origin", [51.22,95.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.22,95.26]}], position: 0, duration: 0 },
            { id: "eid2888", tween: [ "style", "${_Match}", "-ms-transform-origin", [51.22,95.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.22,95.26]}], position: 0, duration: 0 },
            { id: "eid2889", tween: [ "style", "${_Match}", "msTransformOrigin", [51.22,95.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.22,95.26]}], position: 0, duration: 0 },
            { id: "eid2890", tween: [ "style", "${_Match}", "-o-transform-origin", [51.22,95.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.22,95.26]}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "style", "${_match}", "clip", [111.01667022705078,16,188,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-8,16,188,0]}], position: 202, duration: 1648 },
            { id: "eid297", tween: [ "style", "${_Flame}", "left", '-6px', { fromValue: '-10px'}], position: 0, duration: 2857 },
            { id: "eid313", tween: [ "transform", "${_Match}", "rotateZ", '41deg', { fromValue: '41deg'}], position: 0, duration: 0 },
            { id: "eid285", tween: [ "transform", "${_Flame}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 0, duration: 357 },
            { id: "eid286", tween: [ "transform", "${_Flame}", "rotateZ", '-27deg', { fromValue: '12deg'}], position: 357, duration: 357 },
            { id: "eid287", tween: [ "transform", "${_Flame}", "rotateZ", '5deg', { fromValue: '-27deg'}], position: 714, duration: 476 },
            { id: "eid288", tween: [ "transform", "${_Flame}", "rotateZ", '16deg', { fromValue: '5deg'}], position: 1190, duration: 476 },
            { id: "eid289", tween: [ "transform", "${_Flame}", "rotateZ", '-10deg', { fromValue: '16deg'}], position: 1667, duration: 333 },
            { id: "eid290", tween: [ "transform", "${_Flame}", "rotateZ", '-9deg', { fromValue: '-10deg'}], position: 2000, duration: 381 },
            { id: "eid291", tween: [ "transform", "${_Flame}", "rotateZ", '-15deg', { fromValue: '-9deg'}], position: 2381, duration: 476 },
            { id: "eid295", tween: [ "style", "${_Flame}", "opacity", '1', { fromValue: '0'}], position: 192, duration: 192 },
            { id: "eid296", tween: [ "style", "${_Flame}", "opacity", '0', { fromValue: '1'}], position: 1762, duration: 57 },
            { id: "eid348", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Flame}', [] ], ""], position: 0 },
            { id: "eid349", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Flame}', [] ], ""], position: 395.21833333333 },
            { id: "eid350", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Flame}', [] ], ""], position: 1666.5833333333 }         ]
      }
   }
},
"Symbol_3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'shadowCopy3',
      type: 'image',
      rect: ['0px','344px','496px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      id: 'MatchCopy6',
      type: 'rect',
      rect: ['464px','272px','auto','auto','auto','auto']
   },
   {
      rect: ['108','64','263','342','auto','auto'],
      id: 'Group4',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['118px','90px','145px','135px','auto','auto'],
         id: 'blob_rightCopy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/blob_right.svg','0px','0px']
      },
      {
         rect: ['0px','90px','130px','151px','auto','auto'],
         id: 'blob_leftCopy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/blob_left.svg','0px','0px']
      },
      {
         rect: ['54px','65px','152px','277px','auto','auto'],
         id: 'blob_midCopy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/blob_mid.svg','0px','0px']
      },
      {
         rect: ['68px','0px','122px','129px','auto','auto'],
         id: 'blob_topCopy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/blob_top.svg','0px','0px']
      }]
   },
   {
      id: 'Flame',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy3',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy4',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy5',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy6',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy7',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy8',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   },
   {
      id: 'FlameCopy9',
      type: 'rect',
      rect: ['285px','333px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FlameCopy4',
      symbolName: 'Flame'
   },
   {
      id: 'Flame',
      symbolName: 'Flame'
   },
   {
      id: 'FlameCopy9',
      symbolName: 'Flame'
   },
   {
      id: 'FlameCopy8',
      symbolName: 'Flame'
   },
   {
      id: 'MatchCopy6',
      symbolName: 'Match'
   },
   {
      id: 'FlameCopy5',
      symbolName: 'Flame'
   },
   {
      id: 'FlameCopy6',
      symbolName: 'Flame'
   },
   {
      id: 'FlameCopy7',
      symbolName: 'Flame'
   },
   {
      id: 'FlameCopy3',
      symbolName: 'Flame'
   }   ]
   },
   states: {
      "Base State": {
         "${_shadowCopy3}": [
            ["style", "height", '112px'],
            ["style", "top", '344px'],
            ["style", "left", '0px'],
            ["style", "width", '496px']
         ],
         "${_blob_midCopy3}": [
            ["style", "-webkit-transform-origin", [50.66,97.47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.66,97.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.66,97.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.66,97.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.66,97.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '277px'],
            ["style", "top", '65px'],
            ["style", "left", '54px'],
            ["style", "width", '152px']
         ],
         "${_FlameCopy6}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [29.35,94.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [29.35,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [29.35,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [29.35,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [29.35,94.33],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '456px'],
            ["style", "width", '496px']
         ],
         "${_FlameCopy8}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [51,93.83], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51,93.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51,93.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51,93.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51,93.83],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FlameCopy5}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [53.57,90.22], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.57,90.22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.57,90.22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.57,90.22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.57,90.22],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_blob_topCopy3}": [
            ["style", "-webkit-transform-origin", [50,94.57], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94.57],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94.57],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94.57],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94.57],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '129px'],
            ["style", "top", '0px'],
            ["style", "left", '68px'],
            ["style", "width", '122px']
         ],
         "${_blob_rightCopy4}": [
            ["style", "-webkit-transform-origin", [33.1,24.44], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [33.1,24.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [33.1,24.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [33.1,24.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [33.1,24.44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '135px'],
            ["style", "top", '90px'],
            ["style", "left", '118px'],
            ["style", "width", '145px']
         ],
         "${_FlameCopy7}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [29,98.09], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [29,98.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [29,98.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [29,98.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [29,98.09],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_blob_leftCopy4}": [
            ["style", "-webkit-transform-origin", [66.92,31.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [66.92,31.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [66.92,31.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [66.92,31.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [66.92,31.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '151px'],
            ["style", "top", '90px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_FlameCopy9}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [51,96.26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51,96.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51,96.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51,96.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51,96.26],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Flame}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [50,90.22], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,90.22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,90.22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,90.22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,90.22],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Group4}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FlameCopy4}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [55.36,93.48], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [55.36,93.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [55.36,93.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [55.36,93.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [55.36,93.48],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_MatchCopy6}": [
            ["style", "-webkit-transform-origin", [14.94,98.15], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '83deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '258px'],
            ["style", "top", '-48px']
         ],
         "${_FlameCopy3}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '254px'],
            ["style", "-webkit-transform-origin", [50,91.3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91.3],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5440,
         autoPlay: false,
         timeline: [
            { id: "eid429", tween: [ "transform", "${_Group4}", "scaleX", '0', { fromValue: '1'}], position: 3630, duration: 370, easing: "easeInOutQuad" },
            { id: "eid501", tween: [ "transform", "${_Group4}", "scaleX", '1', { fromValue: '0'}], position: 4325, duration: 1115, easing: "easeInOutQuad" },
            { id: "eid883", tween: [ "transform", "${_blob_midCopy3}", "rotateZ", '66deg', { fromValue: '0deg'}], position: 3270, duration: 360, easing: "easeInOutQuad" },
            { id: "eid917", tween: [ "transform", "${_blob_midCopy3}", "rotateZ", '0deg', { fromValue: '66deg'}], position: 3630, duration: 695, easing: "easeInOutQuad" },
            { id: "eid384", tween: [ "style", "${_Flame}", "top", '289px', { fromValue: '289px'}], position: 2500, duration: 0 },
            { id: "eid515", tween: [ "style", "${_Flame}", "top", '319px', { fromValue: '289px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid884", tween: [ "transform", "${_blob_leftCopy4}", "rotateZ", '64deg', { fromValue: '0deg'}], position: 3270, duration: 360, easing: "easeInQuad" },
            { id: "eid904", tween: [ "transform", "${_blob_leftCopy4}", "rotateZ", '0deg', { fromValue: '64deg'}], position: 3630, duration: 695, easing: "easeInQuad" },
            { id: "eid907", tween: [ "transform", "${_blob_leftCopy4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4325, duration: 0, easing: "easeInQuad" },
            { id: "eid876", tween: [ "transform", "${_blob_topCopy3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3270, duration: 0, easing: "easeInOutQuad" },
            { id: "eid399", tween: [ "style", "${_FlameCopy4}", "top", '296px', { fromValue: '289px'}], position: 2730, duration: 135, easing: "easeInOutQuad" },
            { id: "eid519", tween: [ "style", "${_FlameCopy4}", "top", '319px', { fromValue: '296px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid419", tween: [ "transform", "${_FlameCopy9}", "scaleX", '1.78571', { fromValue: '0'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid491", tween: [ "transform", "${_FlameCopy9}", "scaleX", '0', { fromValue: '1.78571'}], position: 3730, duration: 325, easing: "easeInOutQuad" },
            { id: "eid421", tween: [ "style", "${_FlameCopy9}", "left", '198px', { fromValue: '254px'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid439", tween: [ "style", "${_FlameCopy9}", "left", '201px', { fromValue: '198px'}], position: 3405, duration: 95, easing: "easeInQuad" },
            { id: "eid873", tween: [ "style", "${_FlameCopy9}", "left", '209px', { fromValue: '201px'}], position: 3500, duration: 230, easing: "easeOutQuad" },
            { id: "eid768", tween: [ "style", "${_Flame}", "-webkit-transform-origin", [50,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2891", tween: [ "style", "${_Flame}", "-moz-transform-origin", [50,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2892", tween: [ "style", "${_Flame}", "-ms-transform-origin", [50,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2893", tween: [ "style", "${_Flame}", "msTransformOrigin", [50,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2894", tween: [ "style", "${_Flame}", "-o-transform-origin", [50,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid400", tween: [ "style", "${_FlameCopy4}", "left", '220px', { fromValue: '254px'}], position: 2730, duration: 135, easing: "easeInOutQuad" },
            { id: "eid759", tween: [ "style", "${_FlameCopy4}", "left", '206px', { fromValue: '220px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid761", tween: [ "style", "${_FlameCopy7}", "-webkit-transform-origin", [29,98.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29,98.09]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2895", tween: [ "style", "${_FlameCopy7}", "-moz-transform-origin", [29,98.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29,98.09]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2896", tween: [ "style", "${_FlameCopy7}", "-ms-transform-origin", [29,98.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29,98.09]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2897", tween: [ "style", "${_FlameCopy7}", "msTransformOrigin", [29,98.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29,98.09]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2898", tween: [ "style", "${_FlameCopy7}", "-o-transform-origin", [29,98.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29,98.09]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid407", tween: [ "transform", "${_FlameCopy6}", "scaleX", '1.64286', { fromValue: '0'}], position: 3000, duration: 135, easing: "easeInOutQuad" },
            { id: "eid493", tween: [ "transform", "${_FlameCopy6}", "scaleX", '0', { fromValue: '1.64286'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid395", tween: [ "transform", "${_FlameCopy3}", "scaleY", '1', { fromValue: '0'}], position: 2595, duration: 135, easing: "easeInOutQuad" },
            { id: "eid482", tween: [ "transform", "${_FlameCopy3}", "scaleY", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid886", tween: [ "style", "${_blob_leftCopy4}", "top", '296px', { fromValue: '90px'}], position: 3270, duration: 360, easing: "easeInQuad" },
            { id: "eid902", tween: [ "style", "${_blob_leftCopy4}", "top", '90px', { fromValue: '296px'}], position: 3630, duration: 695, easing: "easeInQuad" },
            { id: "eid905", tween: [ "style", "${_blob_leftCopy4}", "top", '90px', { fromValue: '90px'}], position: 4325, duration: 0, easing: "easeInQuad" },
            { id: "eid418", tween: [ "style", "${_FlameCopy8}", "left", '170px', { fromValue: '254px'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid443", tween: [ "style", "${_FlameCopy8}", "left", '199px', { fromValue: '170px'}], position: 3405, duration: 325, easing: "easeInOutQuad" },
            { id: "eid401", tween: [ "transform", "${_FlameCopy4}", "scaleY", '1', { fromValue: '0'}], position: 2730, duration: 135, easing: "easeInOutQuad" },
            { id: "eid488", tween: [ "transform", "${_FlameCopy4}", "scaleY", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid760", tween: [ "style", "${_FlameCopy8}", "-webkit-transform-origin", [51,93.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,93.83]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2899", tween: [ "style", "${_FlameCopy8}", "-moz-transform-origin", [51,93.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,93.83]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2900", tween: [ "style", "${_FlameCopy8}", "-ms-transform-origin", [51,93.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,93.83]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2901", tween: [ "style", "${_FlameCopy8}", "msTransformOrigin", [51,93.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,93.83]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2902", tween: [ "style", "${_FlameCopy8}", "-o-transform-origin", [51,93.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,93.83]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid382", tween: [ "transform", "${_MatchCopy6}", "rotateZ", '83deg', { fromValue: '83deg'}], position: 120, duration: 0 },
            { id: "eid422", tween: [ "style", "${_FlameCopy9}", "top", '121px', { fromValue: '289px'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid440", tween: [ "style", "${_FlameCopy9}", "top", '163px', { fromValue: '121px'}], position: 3405, duration: 95, easing: "easeInQuad" },
            { id: "eid874", tween: [ "style", "${_FlameCopy9}", "top", '311px', { fromValue: '163px'}], position: 3500, duration: 230, easing: "easeOutQuad" },
            { id: "eid767", tween: [ "style", "${_FlameCopy3}", "-webkit-transform-origin", [50,91.3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91.3]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2903", tween: [ "style", "${_FlameCopy3}", "-moz-transform-origin", [50,91.3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91.3]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2904", tween: [ "style", "${_FlameCopy3}", "-ms-transform-origin", [50,91.3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91.3]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2905", tween: [ "style", "${_FlameCopy3}", "msTransformOrigin", [50,91.3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91.3]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2906", tween: [ "style", "${_FlameCopy3}", "-o-transform-origin", [50,91.3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91.3]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid412", tween: [ "style", "${_FlameCopy7}", "top", '213px', { fromValue: '289px'}], position: 3135, duration: 135, easing: "easeInOutQuad" },
            { id: "eid525", tween: [ "style", "${_FlameCopy7}", "top", '314px', { fromValue: '213px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid766", tween: [ "style", "${_FlameCopy4}", "-webkit-transform-origin", [55.36,93.48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.36,93.48]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2907", tween: [ "style", "${_FlameCopy4}", "-moz-transform-origin", [55.36,93.48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.36,93.48]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2908", tween: [ "style", "${_FlameCopy4}", "-ms-transform-origin", [55.36,93.48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.36,93.48]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2909", tween: [ "style", "${_FlameCopy4}", "msTransformOrigin", [55.36,93.48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.36,93.48]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2910", tween: [ "style", "${_FlameCopy4}", "-o-transform-origin", [55.36,93.48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.36,93.48]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid402", tween: [ "transform", "${_FlameCopy4}", "scaleX", '1', { fromValue: '0'}], position: 2730, duration: 135, easing: "easeInOutQuad" },
            { id: "eid487", tween: [ "transform", "${_FlameCopy4}", "scaleX", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "transform", "${_FlameCopy9}", "scaleY", '1.78571', { fromValue: '0'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid492", tween: [ "transform", "${_FlameCopy9}", "scaleY", '0', { fromValue: '1.78571'}], position: 3730, duration: 325, easing: "easeInOutQuad" },
            { id: "eid413", tween: [ "style", "${_FlameCopy7}", "left", '237px', { fromValue: '254px'}], position: 3135, duration: 135, easing: "easeInOutQuad" },
            { id: "eid524", tween: [ "style", "${_FlameCopy7}", "left", '225px', { fromValue: '237px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid417", tween: [ "transform", "${_FlameCopy8}", "scaleY", '1.78571', { fromValue: '0'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid486", tween: [ "transform", "${_FlameCopy8}", "scaleY", '0', { fromValue: '1.78571'}], position: 3730, duration: 325, easing: "easeInOutQuad" },
            { id: "eid403", tween: [ "transform", "${_FlameCopy5}", "scaleX", '1', { fromValue: '0'}], position: 2865, duration: 135, easing: "easeInOutQuad" },
            { id: "eid497", tween: [ "transform", "${_FlameCopy5}", "scaleX", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1019", tween: [ "transform", "${_MatchCopy6}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 120, easing: "easeInQuad" },
            { id: "eid434", tween: [ "transform", "${_MatchCopy6}", "scaleY", '0', { fromValue: '1'}], position: 2620, duration: 1175, easing: "easeInQuad" },
            { id: "eid409", tween: [ "transform", "${_FlameCopy6}", "scaleY", '1.64286', { fromValue: '0'}], position: 3000, duration: 135, easing: "easeInOutQuad" },
            { id: "eid494", tween: [ "transform", "${_FlameCopy6}", "scaleY", '0', { fromValue: '1.64286'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid866", tween: [ "style", "${_blob_topCopy3}", "left", '68px', { fromValue: '68px'}], position: 3270, duration: 0, easing: "easeInQuad" },
            { id: "eid406", tween: [ "style", "${_FlameCopy5}", "top", '296px', { fromValue: '289px'}], position: 2865, duration: 135, easing: "easeInOutQuad" },
            { id: "eid520", tween: [ "style", "${_FlameCopy5}", "top", '325px', { fromValue: '296px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid415", tween: [ "transform", "${_FlameCopy8}", "scaleX", '1.78571', { fromValue: '0'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid485", tween: [ "transform", "${_FlameCopy8}", "scaleX", '0', { fromValue: '1.78571'}], position: 3730, duration: 325, easing: "easeInOutQuad" },
            { id: "eid390", tween: [ "transform", "${_Flame}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 135, easing: "easeInOutQuad" },
            { id: "eid495", tween: [ "transform", "${_Flame}", "scaleX", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "transform", "${_FlameCopy3}", "scaleX", '1', { fromValue: '0'}], position: 2595, duration: 135, easing: "easeInOutQuad" },
            { id: "eid481", tween: [ "transform", "${_FlameCopy3}", "scaleX", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid397", tween: [ "style", "${_FlameCopy3}", "left", '237px', { fromValue: '254px'}], position: 2595, duration: 135, easing: "easeInOutQuad" },
            { id: "eid518", tween: [ "style", "${_FlameCopy3}", "left", '192px', { fromValue: '237px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid408", tween: [ "style", "${_FlameCopy6}", "top", '230px', { fromValue: '289px'}], position: 3000, duration: 135, easing: "easeInOutQuad" },
            { id: "eid523", tween: [ "style", "${_FlameCopy6}", "top", '315px', { fromValue: '230px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid765", tween: [ "style", "${_FlameCopy5}", "-webkit-transform-origin", [53.57,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.57,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2911", tween: [ "style", "${_FlameCopy5}", "-moz-transform-origin", [53.57,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.57,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2912", tween: [ "style", "${_FlameCopy5}", "-ms-transform-origin", [53.57,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.57,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2913", tween: [ "style", "${_FlameCopy5}", "msTransformOrigin", [53.57,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.57,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2914", tween: [ "style", "${_FlameCopy5}", "-o-transform-origin", [53.57,90.22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.57,90.22]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid764", tween: [ "style", "${_FlameCopy9}", "-webkit-transform-origin", [51,96.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,96.26]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2915", tween: [ "style", "${_FlameCopy9}", "-moz-transform-origin", [51,96.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,96.26]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2916", tween: [ "style", "${_FlameCopy9}", "-ms-transform-origin", [51,96.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,96.26]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2917", tween: [ "style", "${_FlameCopy9}", "msTransformOrigin", [51,96.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,96.26]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2918", tween: [ "style", "${_FlameCopy9}", "-o-transform-origin", [51,96.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,96.26]}], position: 3730, duration: 0, easing: "easeInOutQuad" },
            { id: "eid405", tween: [ "transform", "${_FlameCopy5}", "scaleY", '1', { fromValue: '0'}], position: 2865, duration: 135, easing: "easeInOutQuad" },
            { id: "eid498", tween: [ "transform", "${_FlameCopy5}", "scaleY", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid410", tween: [ "style", "${_FlameCopy6}", "left", '209px', { fromValue: '254px'}], position: 3000, duration: 135, easing: "easeInOutQuad" },
            { id: "eid522", tween: [ "style", "${_FlameCopy6}", "left", '223px', { fromValue: '209px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid383", tween: [ "style", "${_Flame}", "left", '254px', { fromValue: '254px'}], position: 2500, duration: 0 },
            { id: "eid516", tween: [ "style", "${_Flame}", "left", '206px', { fromValue: '254px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid890", tween: [ "transform", "${_blob_rightCopy4}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 3270, duration: 315, easing: "easeInOutQuad" },
            { id: "eid910", tween: [ "transform", "${_blob_rightCopy4}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 3585, duration: 740, easing: "easeInQuad" },
            { id: "eid913", tween: [ "transform", "${_blob_rightCopy4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4325, duration: 0, easing: "easeOutQuad" },
            { id: "eid411", tween: [ "transform", "${_FlameCopy7}", "scaleX", '1.78571', { fromValue: '0'}], position: 3135, duration: 135, easing: "easeInOutQuad" },
            { id: "eid489", tween: [ "transform", "${_FlameCopy7}", "scaleX", '0', { fromValue: '1.78571'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid416", tween: [ "style", "${_FlameCopy8}", "top", '177px', { fromValue: '289px'}], position: 3270, duration: 135, easing: "easeInOutQuad" },
            { id: "eid444", tween: [ "style", "${_FlameCopy8}", "top", '327px', { fromValue: '177px'}], position: 3405, duration: 325, easing: "easeInOutQuad" },
            { id: "eid889", tween: [ "style", "${_blob_rightCopy4}", "top", '256px', { fromValue: '90px'}], position: 3270, duration: 315, easing: "easeInOutQuad" },
            { id: "eid908", tween: [ "style", "${_blob_rightCopy4}", "top", '90px', { fromValue: '256px'}], position: 3585, duration: 740, easing: "easeInQuad" },
            { id: "eid911", tween: [ "style", "${_blob_rightCopy4}", "top", '90px', { fromValue: '90px'}], position: 4325, duration: 0, easing: "easeOutQuad" },
            { id: "eid398", tween: [ "style", "${_FlameCopy3}", "top", '268px', { fromValue: '289px'}], position: 2595, duration: 135, easing: "easeInOutQuad" },
            { id: "eid517", tween: [ "style", "${_FlameCopy3}", "top", '319px', { fromValue: '268px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid887", tween: [ "style", "${_blob_topCopy3}", "top", '215px', { fromValue: '0px'}], position: 3270, duration: 360, easing: "easeInOutQuad" },
            { id: "eid914", tween: [ "style", "${_blob_topCopy3}", "top", '0px', { fromValue: '215px'}], position: 3630, duration: 695, easing: "easeInQuad" },
            { id: "eid915", tween: [ "style", "${_blob_topCopy3}", "top", '0px', { fromValue: '0px'}], position: 4325, duration: 0, easing: "easeOutQuad" },
            { id: "eid404", tween: [ "style", "${_FlameCopy5}", "left", '220px', { fromValue: '254px'}], position: 2865, duration: 135, easing: "easeInOutQuad" },
            { id: "eid521", tween: [ "style", "${_FlameCopy5}", "left", '210px', { fromValue: '220px'}], position: 3350, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1018", tween: [ "transform", "${_MatchCopy6}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 120, easing: "easeInQuad" },
            { id: "eid433", tween: [ "transform", "${_MatchCopy6}", "scaleX", '0', { fromValue: '1'}], position: 2620, duration: 1175, easing: "easeInQuad" },
            { id: "eid391", tween: [ "transform", "${_Flame}", "scaleY", '1', { fromValue: '0'}], position: 2500, duration: 135, easing: "easeInOutQuad" },
            { id: "eid496", tween: [ "transform", "${_Flame}", "scaleY", '0', { fromValue: '1'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid430", tween: [ "transform", "${_Group4}", "scaleY", '0', { fromValue: '1'}], position: 3630, duration: 370, easing: "easeInOutQuad" },
            { id: "eid502", tween: [ "transform", "${_Group4}", "scaleY", '1', { fromValue: '0'}], position: 4325, duration: 1115, easing: "easeInOutQuad" },
            { id: "eid414", tween: [ "transform", "${_FlameCopy7}", "scaleY", '1.78571', { fromValue: '0'}], position: 3135, duration: 135, easing: "easeInOutQuad" },
            { id: "eid490", tween: [ "transform", "${_FlameCopy7}", "scaleY", '0', { fromValue: '1.78571'}], position: 3675, duration: 325, easing: "easeInOutQuad" },
            { id: "eid885", tween: [ "style", "${_blob_leftCopy4}", "left", '17px', { fromValue: '0px'}], position: 3270, duration: 360, easing: "easeInQuad" },
            { id: "eid903", tween: [ "style", "${_blob_leftCopy4}", "left", '0px', { fromValue: '17px'}], position: 3630, duration: 695, easing: "easeInQuad" },
            { id: "eid906", tween: [ "style", "${_blob_leftCopy4}", "left", '0px', { fromValue: '0px'}], position: 4325, duration: 0, easing: "easeInQuad" },
            { id: "eid762", tween: [ "style", "${_FlameCopy6}", "-webkit-transform-origin", [29.35,94.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29.35,94.33]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2919", tween: [ "style", "${_FlameCopy6}", "-moz-transform-origin", [29.35,94.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29.35,94.33]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2920", tween: [ "style", "${_FlameCopy6}", "-ms-transform-origin", [29.35,94.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29.35,94.33]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2921", tween: [ "style", "${_FlameCopy6}", "msTransformOrigin", [29.35,94.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29.35,94.33]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2922", tween: [ "style", "${_FlameCopy6}", "-o-transform-origin", [29.35,94.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [29.35,94.33]}], position: 3675, duration: 0, easing: "easeInOutQuad" },
            { id: "eid867", tween: [ "style", "${_blob_midCopy3}", "left", '54px', { fromValue: '54px'}], position: 3270, duration: 0, easing: "easeInQuad" },
            { id: "eid888", tween: [ "style", "${_blob_rightCopy4}", "left", '134px', { fromValue: '118px'}], position: 3270, duration: 315, easing: "easeInOutQuad" },
            { id: "eid909", tween: [ "style", "${_blob_rightCopy4}", "left", '118px', { fromValue: '134px'}], position: 3585, duration: 740, easing: "easeInQuad" },
            { id: "eid912", tween: [ "style", "${_blob_rightCopy4}", "left", '118px', { fromValue: '118px'}], position: 4325, duration: 0, easing: "easeOutQuad" },
            { id: "eid871", tween: [ "style", "${_blob_midCopy3}", "top", '65px', { fromValue: '65px'}], position: 3270, duration: 0, easing: "easeInQuad" },
            { id: "eid1064", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_MatchCopy6}', [] ], ""], position: 0 },
            { id: "eid542", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy9}', [] ], ""], position: 0 },
            { id: "eid541", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy8}', [] ], ""], position: 0 },
            { id: "eid545", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy3}', [] ], ""], position: 0 },
            { id: "eid543", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy5}', [] ], ""], position: 0 },
            { id: "eid544", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy6}', [] ], ""], position: 0 },
            { id: "eid539", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy7}', [] ], ""], position: 0 },
            { id: "eid538", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FlameCopy4}', [] ], ""], position: 0 },
            { id: "eid546", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Flame}', [] ], ""], position: 0 },
            { id: "eid753", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_MatchCopy6}', [0] ], ""], position: 120 },
            { id: "eid547", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Flame}', [] ], ""], position: 2500 },
            { id: "eid548", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy3}', [] ], ""], position: 2595 },
            { id: "eid549", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy3}', [] ], ""], position: 2730 },
            { id: "eid550", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy4}', [] ], ""], position: 2730 },
            { id: "eid551", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy5}', [] ], ""], position: 2865 },
            { id: "eid552", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy6}', [] ], ""], position: 3000 },
            { id: "eid553", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy7}', [] ], ""], position: 3135 },
            { id: "eid555", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy9}', [] ], ""], position: 3270 },
            { id: "eid554", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FlameCopy8}', [] ], ""], position: 3270 }         ]
      }
   }
},
"Symbol_4": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'shadowCopy5',
      type: 'image',
      rect: ['0px','344px','496px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['162','129','152','277','auto','auto'],
      id: 'Group5',
      type: 'group',
      transform: [],
      c: [
      {
         id: 'Group6',
         type: 'group',
         rect: ['-54px','25px','263','151','auto','auto'],
         c: [
         {
            rect: ['118px','0px','145px','135px','auto','auto'],
            id: 'blob_rightCopy6',
            transform: [],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/blob_right.svg','0px','0px']
         },
         {
            rect: ['0px','0px','130px','151px','auto','auto'],
            id: 'blob_leftCopy6',
            transform: [],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/blob_left.svg','0px','0px']
         }]
      },
      {
         id: 'MatchCopy8',
         type: 'rect',
         rect: ['302px','143px','auto','auto','auto','auto']
      },
      {
         rect: ['0px','0px','152px','277px','auto','auto'],
         id: 'blob_midCopy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/blob_mid.svg','0px','0px']
      },
      {
         rect: ['14px','-65px','122px','129px','auto','auto'],
         id: 'blob_topCopy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/blob_top.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   {
      id: 'MatchCopy8',
      symbolName: 'Match'
   }   ]
   },
   states: {
      "Base State": {
         "${_blob_midCopy5}": [
            ["style", "top", '0px'],
            ["style", "height", '277px'],
            ["style", "-webkit-transform-origin", [50.66,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.66,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.66,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.66,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.66,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '152px']
         ],
         "${_shadowCopy5}": [
            ["style", "top", '344px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '112px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '496px']
         ],
         "${_MatchCopy8}": [
            ["style", "-webkit-transform-origin", [14.94,98.15], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.94,98.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-78deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '40px'],
            ["style", "top", '-174px']
         ],
         "${_blob_leftCopy6}": [
            ["style", "-webkit-transform-origin", [61.54,28.48], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [61.54,28.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [61.54,28.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [61.54,28.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [61.54,28.48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '151px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_blob_rightCopy6}": [
            ["style", "-webkit-transform-origin", [46.9,27.41], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [46.9,27.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [46.9,27.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [46.9,27.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [46.9,27.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '135px'],
            ["style", "top", '0px'],
            ["style", "left", '118px'],
            ["style", "width", '145px']
         ],
         "${_Group6}": [
            ["style", "left", '-54px'],
            ["style", "top", '25px']
         ],
         "${_Group5}": [
            ["style", "top", '129px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '162px'],
            ["style", "-webkit-transform-origin", [50,92.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,92.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,92.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,92.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,92.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_blob_topCopy5}": [
            ["style", "-webkit-transform-origin", [50.82,88.37], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.82,88.37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.82,88.37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.82,88.37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.82,88.37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '129px'],
            ["style", "top", '-65px'],
            ["style", "left", '14px'],
            ["style", "width", '122px']
         ],
         "${symbolSelector}": [
            ["style", "height", '456px'],
            ["style", "width", '496px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7305,
         autoPlay: false,
         timeline: [
            { id: "eid1128", tween: [ "style", "${_shadowCopy5}", "left", '-8px', { fromValue: '0px'}], position: 3355, duration: 1920, easing: "easeInQuad" },
            { id: "eid1217", tween: [ "style", "${_shadowCopy5}", "left", '0px', { fromValue: '-8px'}], position: 5385, duration: 1920, easing: "easeInQuad" },
            { id: "eid1120", tween: [ "transform", "${_Group5}", "scaleY", '0.23', { fromValue: '1'}], position: 3355, duration: 1920, easing: "easeInQuad" },
            { id: "eid1161", tween: [ "transform", "${_Group5}", "scaleY", '1', { fromValue: '0.23'}], position: 5385, duration: 1920, easing: "easeInQuad" },
            { id: "eid1066", tween: [ "style", "${_MatchCopy8}", "left", '40px', { fromValue: '40px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid1126", tween: [ "transform", "${_shadowCopy5}", "scaleY", '-0.16129', { fromValue: '1'}], position: 3355, duration: 1920, easing: "easeInQuad" },
            { id: "eid1216", tween: [ "transform", "${_shadowCopy5}", "scaleY", '1', { fromValue: '-0.16129'}], position: 5385, duration: 1920, easing: "easeInQuad" },
            { id: "eid1071", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 3105, duration: 223, easing: "easeInQuad" },
            { id: "eid1082", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 3328, duration: 286, easing: "easeInQuad" },
            { id: "eid1135", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 3614, duration: 223, easing: "easeInQuad" },
            { id: "eid1136", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 3837, duration: 286, easing: "easeInQuad" },
            { id: "eid1137", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 4122, duration: 223, easing: "easeInQuad" },
            { id: "eid1138", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 4345, duration: 286, easing: "easeInQuad" },
            { id: "eid1139", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 4631, duration: 223, easing: "easeInQuad" },
            { id: "eid1140", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 4854, duration: 286, easing: "easeInQuad" },
            { id: "eid1171", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 5139, duration: 223, easing: "easeInQuad" },
            { id: "eid1172", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 5362, duration: 286, easing: "easeInQuad" },
            { id: "eid1173", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 5648, duration: 223, easing: "easeInQuad" },
            { id: "eid1174", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 5871, duration: 286, easing: "easeInQuad" },
            { id: "eid1175", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '-51deg', { fromValue: '0deg'}], position: 6156, duration: 223, easing: "easeInQuad" },
            { id: "eid1176", tween: [ "transform", "${_blob_rightCopy6}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 6379, duration: 286, easing: "easeInQuad" },
            { id: "eid1067", tween: [ "style", "${_MatchCopy8}", "top", '-174px', { fromValue: '-174px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid1065", tween: [ "transform", "${_MatchCopy8}", "rotateZ", '-78deg', { fromValue: '-78deg'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid1372", tween: [ "transform", "${_MatchCopy8}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 205, easing: "easeInQuad" },
            { id: "eid1222", tween: [ "transform", "${_MatchCopy8}", "scaleY", '0', { fromValue: '1'}], position: 5275, duration: 110, easing: "easeInQuad" },
            { id: "eid1073", tween: [ "transform", "${_blob_topCopy5}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 3250, duration: 250, easing: "easeInQuad" },
            { id: "eid1319", tween: [ "transform", "${_blob_topCopy5}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 7055, duration: 250, easing: "easeInQuad" },
            { id: "eid1070", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 3105, duration: 223, easing: "easeInQuad" },
            { id: "eid1081", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 3328, duration: 286, easing: "easeInQuad" },
            { id: "eid1129", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 3614, duration: 223, easing: "easeInQuad" },
            { id: "eid1130", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 3837, duration: 286, easing: "easeInQuad" },
            { id: "eid1131", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 4122, duration: 223, easing: "easeInQuad" },
            { id: "eid1132", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 4345, duration: 286, easing: "easeInQuad" },
            { id: "eid1133", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 4631, duration: 223, easing: "easeInQuad" },
            { id: "eid1134", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 4854, duration: 286, easing: "easeInQuad" },
            { id: "eid1163", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 5139, duration: 223, easing: "easeInQuad" },
            { id: "eid1164", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 5362, duration: 286, easing: "easeInQuad" },
            { id: "eid1165", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 5648, duration: 223, easing: "easeInQuad" },
            { id: "eid1166", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 5871, duration: 286, easing: "easeInQuad" },
            { id: "eid1167", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 6156, duration: 223, easing: "easeInQuad" },
            { id: "eid1168", tween: [ "transform", "${_blob_leftCopy6}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 6379, duration: 286, easing: "easeInQuad" },
            { id: "eid1077", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 3355, duration: 235, easing: "easeInQuad" },
            { id: "eid1091", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 3590, duration: 85, easing: "easeInQuad" },
            { id: "eid1092", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 3675, duration: 235, easing: "easeInQuad" },
            { id: "eid1093", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 3910, duration: 85, easing: "easeInQuad" },
            { id: "eid1097", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 3995, duration: 235, easing: "easeInQuad" },
            { id: "eid1098", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 4230, duration: 85, easing: "easeInQuad" },
            { id: "eid1102", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 4315, duration: 235, easing: "easeInQuad" },
            { id: "eid1103", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 4550, duration: 85, easing: "easeInQuad" },
            { id: "eid1107", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 4635, duration: 235, easing: "easeInQuad" },
            { id: "eid1108", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 4870, duration: 85, easing: "easeInQuad" },
            { id: "eid1112", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 4955, duration: 235, easing: "easeInQuad" },
            { id: "eid1113", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 5190, duration: 85, easing: "easeInQuad" },
            { id: "eid1142", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 5385, duration: 235, easing: "easeInQuad" },
            { id: "eid1143", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 5620, duration: 85, easing: "easeInQuad" },
            { id: "eid1144", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 5705, duration: 235, easing: "easeInQuad" },
            { id: "eid1145", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 5940, duration: 85, easing: "easeInQuad" },
            { id: "eid1146", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 6025, duration: 235, easing: "easeInQuad" },
            { id: "eid1147", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 6260, duration: 85, easing: "easeInQuad" },
            { id: "eid1148", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 6345, duration: 235, easing: "easeInQuad" },
            { id: "eid1149", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 6580, duration: 85, easing: "easeInQuad" },
            { id: "eid1150", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 6665, duration: 235, easing: "easeInQuad" },
            { id: "eid1151", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 6900, duration: 85, easing: "easeInQuad" },
            { id: "eid1152", tween: [ "style", "${_Group5}", "top", '76px', { fromValue: '129px'}], position: 6985, duration: 235, easing: "easeInQuad" },
            { id: "eid1153", tween: [ "style", "${_Group5}", "top", '129px', { fromValue: '76px'}], position: 7220, duration: 85, easing: "easeInQuad" },
            { id: "eid1119", tween: [ "transform", "${_Group5}", "scaleX", '0.23', { fromValue: '1'}], position: 3355, duration: 1920, easing: "easeInQuad" },
            { id: "eid1162", tween: [ "transform", "${_Group5}", "scaleX", '1', { fromValue: '0.23'}], position: 5385, duration: 1920, easing: "easeInQuad" },
            { id: "eid1371", tween: [ "transform", "${_MatchCopy8}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 205, easing: "easeInQuad" },
            { id: "eid1221", tween: [ "transform", "${_MatchCopy8}", "scaleX", '0', { fromValue: '1'}], position: 5275, duration: 110, easing: "easeInQuad" },
            { id: "eid1125", tween: [ "transform", "${_shadowCopy5}", "scaleX", '0.16129', { fromValue: '1'}], position: 3355, duration: 1920, easing: "easeInQuad" },
            { id: "eid1215", tween: [ "transform", "${_shadowCopy5}", "scaleX", '1', { fromValue: '0.16129'}], position: 5385, duration: 1920, easing: "easeInQuad" },
            { id: "eid1127", tween: [ "style", "${_shadowCopy5}", "top", '331px', { fromValue: '344px'}], position: 3355, duration: 1920, easing: "easeInQuad" },
            { id: "eid1218", tween: [ "style", "${_shadowCopy5}", "top", '344px', { fromValue: '331px'}], position: 5385, duration: 1920, easing: "easeInQuad" },
            { id: "eid1267", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_MatchCopy8}', [] ], ""], position: 0 },
            { id: "eid1268", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_MatchCopy8}', [] ], ""], position: 120 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-165004090");
