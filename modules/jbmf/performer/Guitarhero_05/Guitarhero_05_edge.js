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
            id:'CanvasContainer',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(184,184,184,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['72','66','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_2',
            type:'rect',
            rect:['72px','67px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_3',
            type:'rect',
            rect:['26px','50px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_4',
            type:'rect',
            rect:['26px','50px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_5',
            type:'rect',
            rect:['26px','50px','auto','auto','auto','auto'],
            userClass:"ani_syms",
            transform:[]
         },
         {
            id:'Symbol_6',
            type:'rect',
            rect:['-46','-16','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_7',
            type:'rect',
            rect:['-46','-16','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_8',
            type:'rect',
            rect:['-46','-16','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_9',
            type:'rect',
            rect:['-46','-16','auto','auto','auto','auto'],
            userClass:"ani_syms"
         }],
         symbolInstances: [
         {
            id:'Symbol_6',
            symbolName:'Symbol_6'
         },
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'Symbol_7',
            symbolName:'Symbol_7'
         },
         {
            id:'Symbol_5',
            symbolName:'Symbol_5'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'Symbol_9',
            symbolName:'Symbol_9'
         },
         {
            id:'Symbol_8',
            symbolName:'Symbol_8'
         },
         {
            id:'Symbol_4',
            symbolName:'Symbol_4'
         },
         {
            id:'Symbol_2',
            symbolName:'Symbol_2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_7}": [
            ["style", "top", '50px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_8}": [
            ["style", "top", '50px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_9}": [
            ["style", "left", '26px'],
            ["style", "top", '50px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '67px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_6}": [
            ["style", "top", '67px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_5}": [
            ["style", "top", '50px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_CanvasContainer}": [
            ["style", "height", '100%'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(252,252,252,0.00)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'visible']
         ],
         "${_Symbol_2}": [
            ["style", "top", '67px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_3}": [
            ["style", "top", '50px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_4}": [
            ["style", "top", '50px'],
            ["style", "left", '26px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 203,
         autoPlay: true,
         timeline: [
            { id: "eid1363", tween: [ "style", "${_Symbol_8}", "top", '50px', { fromValue: '50px'}], position: 203, duration: 0 },
            { id: "eid1050", tween: [ "transform", "${_Symbol_3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1524", tween: [ "style", "${_Symbol_9}", "left", '26px', { fromValue: '26px'}], position: 203, duration: 0, easing: "easeInQuad" },
            { id: "eid1525", tween: [ "style", "${_Symbol_9}", "top", '50px', { fromValue: '50px'}], position: 203, duration: 0, easing: "easeInQuad" },
            { id: "eid1248", tween: [ "style", "${_Symbol_7}", "top", '50px', { fromValue: '50px'}], position: 203, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1048", tween: [ "transform", "${_Symbol_5}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1362", tween: [ "style", "${_Symbol_8}", "left", '26px', { fromValue: '26px'}], position: 203, duration: 0 },
            { id: "eid1249", tween: [ "transform", "${_Symbol_7}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1052", tween: [ "style", "${_Symbol_1}", "top", '67px', { fromValue: '67px'}], position: 203, duration: 0 },
            { id: "eid1058", tween: [ "style", "${_Symbol_5}", "left", '26px', { fromValue: '26px'}], position: 203, duration: 0 },
            { id: "eid1245", tween: [ "style", "${_Symbol_6}", "left", '72px', { fromValue: '72px'}], position: 203, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1059", tween: [ "style", "${_Symbol_4}", "left", '26px', { fromValue: '26px'}], position: 203, duration: 0 },
            { id: "eid1054", tween: [ "style", "${_Symbol_4}", "top", '50px', { fromValue: '50px'}], position: 203, duration: 0 },
            { id: "eid1049", tween: [ "transform", "${_Symbol_4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1247", tween: [ "style", "${_Symbol_7}", "left", '26px', { fromValue: '26px'}], position: 203, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1056", tween: [ "style", "${_Symbol_2}", "top", '67px', { fromValue: '67px'}], position: 203, duration: 0 },
            { id: "eid1053", tween: [ "style", "${_Symbol_5}", "top", '50px', { fromValue: '50px'}], position: 203, duration: 0 },
            { id: "eid1051", tween: [ "transform", "${_Symbol_2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1055", tween: [ "style", "${_Symbol_3}", "top", '50px', { fromValue: '50px'}], position: 203, duration: 0 },
            { id: "eid1246", tween: [ "style", "${_Symbol_6}", "top", '67px', { fromValue: '67px'}], position: 203, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1364", tween: [ "transform", "${_Symbol_8}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1047", tween: [ "transform", "${_Symbol_1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1065", tween: [ "transform", "${_Symbol_6}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 203, duration: 0 },
            { id: "eid1057", tween: [ "style", "${_Symbol_1}", "left", '72px', { fromValue: '72px'}], position: 203, duration: 0 },
            { id: "eid1061", tween: [ "style", "${_Symbol_2}", "left", '72px', { fromValue: '72px'}], position: 203, duration: 0 },
            { id: "eid1060", tween: [ "style", "${_Symbol_3}", "left", '26px', { fromValue: '26px'}], position: 203, duration: 0 }         ]
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
      type: 'image',
      id: 'shadow',
      rect: ['119px','268px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['35','0','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy28',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy4',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy23',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy14',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy8',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_handCopy4}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_RArm}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-4px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '34px'],
            ["transform", "skewX", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '334px'],
            ["style", "width", '395px']
         ],
         "${_RHand}": [
            ["style", "top", '-127px'],
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_bg2}": [
            ["transform", "scaleX", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "top", '-184px']
         ],
         "${_LHand}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "skewY", '0deg']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_LUnderarm}": [
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '6px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_LimbCopy23}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_body}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0.00)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_shadow}": [
            ["style", "top", '268px'],
            ["style", "left", '119px'],
            ["transform", "scaleY", '2.47368'],
            ["transform", "scaleX", '2.72464']
         ],
         "${_hand}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_LimbCopy28}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_LimbCopy8}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_RUnderarm}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_LimbCopy14}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid181", tween: [ "transform", "${_Body}", "skewX", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-148deg'}], position: 0, duration: 109, easing: "easeInOutQuad" },
            { id: "eid24", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-91deg', { fromValue: '-160deg'}], position: 109, duration: 111, easing: "easeInQuad" },
            { id: "eid562", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-91deg'}], position: 220, duration: 66, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-142deg'}], position: 286, duration: 109, easing: "easeInOutQuad" },
            { id: "eid125", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-160deg'}], position: 395, duration: 177, easing: "easeInOutQuad" },
            { id: "eid130", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-142deg'}], position: 571, duration: 109, easing: "easeInOutQuad" },
            { id: "eid131", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-160deg'}], position: 680, duration: 177, easing: "easeInOutQuad" },
            { id: "eid136", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-142deg'}], position: 857, duration: 109, easing: "easeInOutQuad" },
            { id: "eid137", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-160deg'}], position: 966, duration: 177, easing: "easeInOutQuad" },
            { id: "eid142", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-142deg'}], position: 1143, duration: 109, easing: "easeInOutQuad" },
            { id: "eid143", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-160deg'}], position: 1252, duration: 177, easing: "easeInOutQuad" },
            { id: "eid148", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-142deg'}], position: 1429, duration: 109, easing: "easeInOutQuad" },
            { id: "eid149", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-160deg'}], position: 1537, duration: 177, easing: "easeInOutQuad" },
            { id: "eid154", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-160deg', { fromValue: '-142deg'}], position: 1714, duration: 109, easing: "easeInOutQuad" },
            { id: "eid155", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-160deg'}], position: 1823, duration: 177, easing: "easeInOutQuad" },
            { id: "eid1029", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid280", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid185", tween: [ "transform", "${_Body}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 420, easing: "easeInOutQuad" },
            { id: "eid186", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 420, duration: 420, easing: "easeInOutQuad" },
            { id: "eid187", tween: [ "transform", "${_Body}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 841, duration: 377, easing: "easeInOutQuad" },
            { id: "eid544", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1218, duration: 782, easing: "easeInOutQuad" },
            { id: "eid1030", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 0, duration: 109, easing: "easeInOutQuad" },
            { id: "eid23", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 109, duration: 177, easing: "easeInOutQuad" },
            { id: "eid122", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 286, duration: 109, easing: "easeInOutQuad" },
            { id: "eid123", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 395, duration: 177, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 571, duration: 109, easing: "easeInOutQuad" },
            { id: "eid129", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 680, duration: 177, easing: "easeInOutQuad" },
            { id: "eid134", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 857, duration: 109, easing: "easeInOutQuad" },
            { id: "eid135", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 966, duration: 177, easing: "easeInOutQuad" },
            { id: "eid140", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 1143, duration: 109, easing: "easeInOutQuad" },
            { id: "eid141", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 1252, duration: 177, easing: "easeInOutQuad" },
            { id: "eid146", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 1429, duration: 109, easing: "easeInOutQuad" },
            { id: "eid147", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 1537, duration: 177, easing: "easeInOutQuad" },
            { id: "eid152", tween: [ "transform", "${_RArm}", "rotateZ", '246deg', { fromValue: '239deg'}], position: 1714, duration: 109, easing: "easeInOutQuad" },
            { id: "eid153", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '246deg'}], position: 1823, duration: 177, easing: "easeInOutQuad" },
            { id: "eid1028", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 0, duration: 109, easing: "easeInOutQuad" },
            { id: "eid25", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 109, duration: 177, easing: "easeInOutQuad" },
            { id: "eid126", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 286, duration: 109, easing: "easeInOutQuad" },
            { id: "eid127", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 395, duration: 177, easing: "easeInOutQuad" },
            { id: "eid132", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 571, duration: 109, easing: "easeInOutQuad" },
            { id: "eid133", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 680, duration: 177, easing: "easeInOutQuad" },
            { id: "eid138", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 857, duration: 109, easing: "easeInOutQuad" },
            { id: "eid139", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 966, duration: 177, easing: "easeInOutQuad" },
            { id: "eid144", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 1143, duration: 109, easing: "easeInOutQuad" },
            { id: "eid145", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 1252, duration: 177, easing: "easeInOutQuad" },
            { id: "eid150", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 1429, duration: 109, easing: "easeInOutQuad" },
            { id: "eid151", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 1537, duration: 177, easing: "easeInOutQuad" },
            { id: "eid156", tween: [ "transform", "${_LHand}", "rotateZ", '-24deg', { fromValue: '2deg'}], position: 1714, duration: 109, easing: "easeInOutQuad" },
            { id: "eid157", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-24deg'}], position: 1823, duration: 177, easing: "easeInOutQuad" },
            { id: "eid13", tween: [ "transform", "${_RHand}", "rotateZ", '22deg', { fromValue: '7deg'}], position: 0, duration: 680, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "transform", "${_RHand}", "rotateZ", '13deg', { fromValue: '22deg'}], position: 857, duration: 286, easing: "easeInOutQuad" },
            { id: "eid175", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '13deg'}], position: 1320, duration: 680, easing: "easeInOutQuad" },
            { id: "eid198", tween: [ "style", "${_Body}", "top", '-8px', { fromValue: '-4px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid200", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '-8px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid203", tween: [ "style", "${_Body}", "top", '-8px', { fromValue: '-4px'}], position: 500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid204", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '-8px'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid207", tween: [ "style", "${_Body}", "top", '-8px', { fromValue: '-4px'}], position: 1000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid208", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '-8px'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid211", tween: [ "style", "${_Body}", "top", '-8px', { fromValue: '-4px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid212", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '-8px'}], position: 1750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid10", tween: [ "transform", "${_LUnderarm}", "rotateZ", '127deg', { fromValue: '118deg'}], position: 0, duration: 680, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "transform", "${_LUnderarm}", "rotateZ", '116deg', { fromValue: '127deg'}], position: 857, duration: 286, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "transform", "${_LUnderarm}", "rotateZ", '148deg', { fromValue: '116deg'}], position: 1320, duration: 680, easing: "easeInOutQuad" },
            { id: "eid182", tween: [ "transform", "${_Body}", "skewY", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "transform", "${_LArm}", "rotateZ", '186deg', { fromValue: '182deg'}], position: 0, duration: 680, easing: "easeInOutQuad" },
            { id: "eid159", tween: [ "transform", "${_LArm}", "rotateZ", '185deg', { fromValue: '186deg'}], position: 857, duration: 286, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "transform", "${_LArm}", "rotateZ", '167deg', { fromValue: '186deg'}], position: 1320, duration: 680, easing: "easeInOutQuad" },
            { id: "eid197", tween: [ "style", "${_Body}", "left", '33px', { fromValue: '34px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid199", tween: [ "style", "${_Body}", "left", '34px', { fromValue: '33px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid201", tween: [ "style", "${_Body}", "left", '33px', { fromValue: '34px'}], position: 500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid202", tween: [ "style", "${_Body}", "left", '34px', { fromValue: '33px'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid205", tween: [ "style", "${_Body}", "left", '33px', { fromValue: '34px'}], position: 1000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid206", tween: [ "style", "${_Body}", "left", '34px', { fromValue: '33px'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid209", tween: [ "style", "${_Body}", "left", '33px', { fromValue: '34px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid210", tween: [ "style", "${_Body}", "left", '34px', { fromValue: '33px'}], position: 1750, duration: 250, easing: "easeInOutQuad" }         ]
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
      type: 'image',
      id: 'shadow',
      rect: ['119px','268px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['35','0','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         id: 'bodyCopy',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            type: 'image',
            id: 'LimbCopy2',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         },
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy3',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            type: 'image',
            id: 'Limb',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         },
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "scaleX", '0.98'],
            ["style", "height", '136px'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_shadow}": [
            ["style", "top", '268px'],
            ["transform", "scaleX", '2.72464'],
            ["style", "left", '119px'],
            ["transform", "scaleY", '2.47368']
         ],
         "${_RArm}": [
            ["style", "top", '130px'],
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_bodyCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '313px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_LimbCopy}": [
            ["style", "top", '-113px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '695px'],
            ["style", "width", '590px']
         ],
         "${_RHand}": [
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-127px'],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_bg2}": [
            ["transform", "scaleX", '0.38644'],
            ["style", "top", '-184px'],
            ["style", "left", '-159px'],
            ["transform", "scaleY", '0.38644']
         ],
         "${_LHand}": [
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-125px'],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["style", "top", '128px']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_LUnderarm}": [
            ["style", "top", '6px'],
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_handCopy}": [
            ["style", "height", '54px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_LimbCopy2}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-24px'],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_LimbCopy3}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-112px'],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_hand}": [
            ["style", "top", '1px'],
            ["style", "height", '54px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_RUnderarm}": [
            ["style", "top", '9px'],
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewX", '0deg'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '34px'],
            ["style", "top", '-4px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2025,
         autoPlay: false,
         timeline: [
            { id: "eid596", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-142deg', { fromValue: '-148deg'}], position: 0, duration: 215, easing: "easeInOutQuad" },
            { id: "eid597", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-168deg', { fromValue: '-142deg'}], position: 215, duration: 320, easing: "easeInOutQuad" },
            { id: "eid598", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-132deg', { fromValue: '-168deg'}], position: 535, duration: 350, easing: "easeInOutQuad" },
            { id: "eid599", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-164deg', { fromValue: '-132deg'}], position: 885, duration: 210, easing: "easeInOutQuad" },
            { id: "eid600", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-139deg', { fromValue: '-164deg'}], position: 1095, duration: 185, easing: "easeInOutQuad" },
            { id: "eid601", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-165deg', { fromValue: '-139deg'}], position: 1280, duration: 150, easing: "easeInOutQuad" },
            { id: "eid602", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-127deg', { fromValue: '-165deg'}], position: 1430, duration: 240, easing: "easeInOutQuad" },
            { id: "eid603", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-161deg', { fromValue: '-127deg'}], position: 1670, duration: 195, easing: "easeInOutQuad" },
            { id: "eid604", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-161deg'}], position: 1865, duration: 160, easing: "easeInOutQuad" },
            { id: "eid1032", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid611", tween: [ "transform", "${_Body}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 295, easing: "easeInOutQuad" },
            { id: "eid612", tween: [ "transform", "${_Body}", "rotateZ", '-4deg', { fromValue: '5deg'}], position: 295, duration: 290, easing: "easeInOutQuad" },
            { id: "eid613", tween: [ "transform", "${_Body}", "rotateZ", '3deg', { fromValue: '-4deg'}], position: 585, duration: 260, easing: "easeInOutQuad" },
            { id: "eid614", tween: [ "transform", "${_Body}", "rotateZ", '-7deg', { fromValue: '3deg'}], position: 845, duration: 250, easing: "easeInOutQuad" },
            { id: "eid615", tween: [ "transform", "${_Body}", "rotateZ", '8deg', { fromValue: '-7deg'}], position: 1095, duration: 335, easing: "easeInOutQuad" },
            { id: "eid616", tween: [ "transform", "${_Body}", "rotateZ", '1deg', { fromValue: '8deg'}], position: 1430, duration: 240, easing: "easeInOutQuad" },
            { id: "eid617", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1670, duration: 355, easing: "easeInOutQuad" },
            { id: "eid1033", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "transform", "${_RArm}", "rotateZ", '230deg', { fromValue: '239deg'}], position: 0, duration: 215, easing: "easeInOutQuad" },
            { id: "eid605", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '230deg'}], position: 215, duration: 370, easing: "easeInOutQuad" },
            { id: "eid606", tween: [ "transform", "${_RArm}", "rotateZ", '221deg', { fromValue: '239deg'}], position: 585, duration: 510, easing: "easeInOutQuad" },
            { id: "eid607", tween: [ "transform", "${_RArm}", "rotateZ", '241deg', { fromValue: '221deg'}], position: 1095, duration: 405, easing: "easeInOutQuad" },
            { id: "eid608", tween: [ "transform", "${_RArm}", "rotateZ", '232deg', { fromValue: '241deg'}], position: 1500, duration: 260, easing: "easeInOutQuad" },
            { id: "eid609", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '232deg'}], position: 1760, duration: 265, easing: "easeInOutQuad" },
            { id: "eid1031", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid620", tween: [ "style", "${_Body}", "top", '-10px', { fromValue: '-4px'}], position: 0, duration: 295, easing: "easeInOutQuad" },
            { id: "eid622", tween: [ "style", "${_Body}", "top", '-5px', { fromValue: '-10px'}], position: 295, duration: 360, easing: "easeInOutQuad" },
            { id: "eid624", tween: [ "style", "${_Body}", "top", '-8px', { fromValue: '-5px'}], position: 655, duration: 385, easing: "easeInOutQuad" },
            { id: "eid627", tween: [ "style", "${_Body}", "top", '-9px', { fromValue: '-8px'}], position: 1040, duration: 630, easing: "easeInOutQuad" },
            { id: "eid628", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '-9px'}], position: 1670, duration: 355, easing: "easeOutQuad" },
            { id: "eid587", tween: [ "transform", "${_RHand}", "rotateZ", '-32deg', { fromValue: '7deg'}], position: 0, duration: 295, easing: "easeInOutQuad" },
            { id: "eid588", tween: [ "transform", "${_RHand}", "rotateZ", '5deg', { fromValue: '-32deg'}], position: 295, duration: 290, easing: "easeInOutQuad" },
            { id: "eid589", tween: [ "transform", "${_RHand}", "rotateZ", '-32deg', { fromValue: '5deg'}], position: 585, duration: 300, easing: "easeInOutQuad" },
            { id: "eid590", tween: [ "transform", "${_RHand}", "rotateZ", '2deg', { fromValue: '-32deg'}], position: 885, duration: 330, easing: "easeInOutQuad" },
            { id: "eid591", tween: [ "transform", "${_RHand}", "rotateZ", '-22deg', { fromValue: '2deg'}], position: 1215, duration: 285, easing: "easeInOutQuad" },
            { id: "eid592", tween: [ "transform", "${_RHand}", "rotateZ", '5deg', { fromValue: '-22deg'}], position: 1500, duration: 220, easing: "easeInOutQuad" },
            { id: "eid593", tween: [ "transform", "${_RHand}", "rotateZ", '21deg', { fromValue: '5deg'}], position: 1720, duration: 175, easing: "easeInOutQuad" },
            { id: "eid594", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '21deg'}], position: 1895, duration: 130, easing: "easeInOutQuad" },
            { id: "eid579", tween: [ "transform", "${_LUnderarm}", "rotateZ", '125deg', { fromValue: '118deg'}], position: 0, duration: 385, easing: "easeInOutQuad" },
            { id: "eid580", tween: [ "transform", "${_LUnderarm}", "rotateZ", '133deg', { fromValue: '125deg'}], position: 385, duration: 270, easing: "easeInOutQuad" },
            { id: "eid581", tween: [ "transform", "${_LUnderarm}", "rotateZ", '128deg', { fromValue: '133deg'}], position: 655, duration: 265, easing: "easeInOutQuad" },
            { id: "eid582", tween: [ "transform", "${_LUnderarm}", "rotateZ", '133deg', { fromValue: '128deg'}], position: 920, duration: 265, easing: "easeInOutQuad" },
            { id: "eid583", tween: [ "transform", "${_LUnderarm}", "rotateZ", '131deg', { fromValue: '133deg'}], position: 1185, duration: 255, easing: "easeInOutQuad" },
            { id: "eid584", tween: [ "transform", "${_LUnderarm}", "rotateZ", '136deg', { fromValue: '131deg'}], position: 1440, duration: 255, easing: "easeInOutQuad" },
            { id: "eid585", tween: [ "transform", "${_LUnderarm}", "rotateZ", '136deg', { fromValue: '136deg'}], position: 1695, duration: 0, easing: "easeInQuad" },
            { id: "eid586", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '136deg'}], position: 1880, duration: 145, easing: "easeInOutQuad" },
            { id: "eid568", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 0, duration: 0 },
            { id: "eid572", tween: [ "transform", "${_LArm}", "rotateZ", '199deg', { fromValue: '182deg'}], position: 0, duration: 330, easing: "easeInOutQuad" },
            { id: "eid573", tween: [ "transform", "${_LArm}", "rotateZ", '168deg', { fromValue: '199deg'}], position: 330, duration: 325, easing: "easeInOutQuad" },
            { id: "eid574", tween: [ "transform", "${_LArm}", "rotateZ", '201deg', { fromValue: '168deg'}], position: 655, duration: 260, easing: "easeInOutQuad" },
            { id: "eid575", tween: [ "transform", "${_LArm}", "rotateZ", '162deg', { fromValue: '201deg'}], position: 915, duration: 285, easing: "easeInOutQuad" },
            { id: "eid576", tween: [ "transform", "${_LArm}", "rotateZ", '199deg', { fromValue: '162deg'}], position: 1200, duration: 270, easing: "easeInOutQuad" },
            { id: "eid577", tween: [ "transform", "${_LArm}", "rotateZ", '159deg', { fromValue: '199deg'}], position: 1470, duration: 290, easing: "easeInOutQuad" },
            { id: "eid578", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '159deg'}], position: 1760, duration: 265, easing: "easeInOutQuad" },
            { id: "eid621", tween: [ "style", "${_Body}", "left", '35px', { fromValue: '34px'}], position: 0, duration: 295, easing: "easeInOutQuad" },
            { id: "eid623", tween: [ "style", "${_Body}", "left", '36px', { fromValue: '35px'}], position: 295, duration: 745, easing: "easeInOutQuad" },
            { id: "eid626", tween: [ "style", "${_Body}", "left", '34px', { fromValue: '36px'}], position: 1040, duration: 985, easing: "easeInOutQuad" }         ]
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
      type: 'image',
      id: 'shadow',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            type: 'image',
            id: 'LimbCopy3',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         },
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy2',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            type: 'image',
            id: 'LimbCopy',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         },
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'Limb',
               rect: ['-3px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-3px'],
            ["style", "width", '17px']
         ],
         "${_shadow}": [
            ["transform", "scaleX", '2.72464'],
            ["style", "top", '284px'],
            ["transform", "scaleY", '2.47368'],
            ["style", "left", '165px']
         ],
         "${_RArm}": [
            ["style", "top", '130px'],
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '80px'],
            ["style", "top", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_RHand}": [
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-127px'],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_handCopy}": [
            ["style", "height", '54px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_LHand}": [
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-125px'],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["style", "top", '128px']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_LUnderarm}": [
            ["style", "top", '6px'],
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_LimbCopy3}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-24px'],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_LimbCopy2}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-112px'],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_hand}": [
            ["style", "top", '1px'],
            ["style", "height", '54px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_LimbCopy}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "scaleX", '0.98'],
            ["style", "height", '136px'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_body}": [
            ["style", "top", '0px'],
            ["style", "height", '313px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_RUnderarm}": [
            ["style", "top", '9px'],
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_bg2}": [
            ["style", "top", '-184px'],
            ["transform", "scaleX", '0.38644'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3345,
         autoPlay: false,
         timeline: [
            { id: "eid634", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-148deg'}], position: 0, duration: 0 },
            { id: "eid642", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-76deg', { fromValue: '-148deg'}], position: 305, duration: 285, easing: "easeInOutQuad" },
            { id: "eid645", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-91deg', { fromValue: '-76deg'}], position: 590, duration: 300, easing: "easeInOutQuad" },
            { id: "eid648", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-20deg', { fromValue: '-91deg'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid651", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-77deg', { fromValue: '-20deg'}], position: 1315, duration: 510, easing: "easeInOutQuad" },
            { id: "eid654", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-77deg', { fromValue: '-20deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid657", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-77deg', { fromValue: '-20deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid660", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-77deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1035", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid677", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid678", tween: [ "transform", "${_Body}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 305, duration: 585, easing: "easeInOutQuad" },
            { id: "eid679", tween: [ "transform", "${_Body}", "rotateZ", '-6deg', { fromValue: '9deg'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid680", tween: [ "transform", "${_Body}", "rotateZ", '10deg', { fromValue: '-6deg'}], position: 1315, duration: 510, easing: "easeInOutQuad" },
            { id: "eid681", tween: [ "transform", "${_Body}", "rotateZ", '-1deg', { fromValue: '10deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid682", tween: [ "transform", "${_Body}", "rotateZ", '10deg', { fromValue: '-1deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid683", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1036", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid633", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '239deg'}], position: 0, duration: 0 },
            { id: "eid641", tween: [ "transform", "${_RArm}", "rotateZ", '214deg', { fromValue: '239deg'}], position: 305, duration: 285, easing: "easeInOutQuad" },
            { id: "eid644", tween: [ "transform", "${_RArm}", "rotateZ", '142deg', { fromValue: '214deg'}], position: 590, duration: 300, easing: "easeInOutQuad" },
            { id: "eid647", tween: [ "transform", "${_RArm}", "rotateZ", '-33deg', { fromValue: '142deg'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid650", tween: [ "transform", "${_RArm}", "rotateZ", '-231deg', { fromValue: '-33deg'}], position: 1315, duration: 510, easing: "easeInOutQuad" },
            { id: "eid653", tween: [ "transform", "${_RArm}", "rotateZ", '-231deg', { fromValue: '-33deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid656", tween: [ "transform", "${_RArm}", "rotateZ", '-231deg', { fromValue: '-33deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid659", tween: [ "transform", "${_RArm}", "rotateZ", '-121deg', { fromValue: '-231deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1034", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid687", tween: [ "style", "${_Body}", "top", '3px', { fromValue: '12px'}], position: 690, duration: 200, easing: "easeInOutQuad" },
            { id: "eid689", tween: [ "style", "${_Body}", "top", '13px', { fromValue: '3px'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid693", tween: [ "style", "${_Body}", "top", '2px', { fromValue: '13px'}], position: 1315, duration: 510, easing: "easeInOutQuad" },
            { id: "eid695", tween: [ "style", "${_Body}", "top", '10px', { fromValue: '2px'}], position: 1825, duration: 295, easing: "easeInOutQuad" },
            { id: "eid697", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '10px'}], position: 2120, duration: 320, easing: "easeInOutQuad" },
            { id: "eid699", tween: [ "style", "${_Body}", "top", '6px', { fromValue: '-4px'}], position: 2440, duration: 165, easing: "easeInOutQuad" },
            { id: "eid701", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '6px'}], position: 2605, duration: 240, easing: "easeInOutQuad" },
            { id: "eid637", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-26deg', { fromValue: '118deg'}], position: 0, duration: 305, easing: "easeInOutQuad" },
            { id: "eid663", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-49deg', { fromValue: '-26deg'}], position: 305, duration: 585, easing: "easeInOutQuad" },
            { id: "eid666", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-30deg', { fromValue: '-49deg'}], position: 890, duration: 935, easing: "easeInOutQuad" },
            { id: "eid669", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-43deg', { fromValue: '-30deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid672", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-59deg', { fromValue: '-43deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid675", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '-59deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid667", tween: [ "transform", "${_RHand}", "rotateZ", '-38deg', { fromValue: '7deg'}], position: 0, duration: 1825, easing: "easeInOutQuad" },
            { id: "eid670", tween: [ "transform", "${_RHand}", "rotateZ", '-23deg', { fromValue: '-38deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid673", tween: [ "transform", "${_RHand}", "rotateZ", '-16deg', { fromValue: '-23deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid676", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '-16deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid635", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 0, duration: 0 },
            { id: "eid643", tween: [ "transform", "${_LHand}", "rotateZ", '-13deg', { fromValue: '2deg'}], position: 305, duration: 285, easing: "easeInOutQuad" },
            { id: "eid646", tween: [ "transform", "${_LHand}", "rotateZ", '-36deg', { fromValue: '-13deg'}], position: 590, duration: 300, easing: "easeInOutQuad" },
            { id: "eid649", tween: [ "transform", "${_LHand}", "rotateZ", '23deg', { fromValue: '-36deg'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid652", tween: [ "transform", "${_LHand}", "rotateZ", '-16deg', { fromValue: '23deg'}], position: 1315, duration: 510, easing: "easeInOutQuad" },
            { id: "eid655", tween: [ "transform", "${_LHand}", "rotateZ", '-16deg', { fromValue: '23deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid658", tween: [ "transform", "${_LHand}", "rotateZ", '-16deg', { fromValue: '23deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid661", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-16deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid636", tween: [ "transform", "${_LArm}", "rotateZ", '46deg', { fromValue: '182deg'}], position: 0, duration: 305, easing: "easeInOutQuad" },
            { id: "eid662", tween: [ "transform", "${_LArm}", "rotateZ", '59deg', { fromValue: '46deg'}], position: 305, duration: 585, easing: "easeInOutQuad" },
            { id: "eid664", tween: [ "transform", "${_LArm}", "rotateZ", '74deg', { fromValue: '59deg'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid665", tween: [ "transform", "${_LArm}", "rotateZ", '46deg', { fromValue: '74deg'}], position: 1315, duration: 510, easing: "easeInOutQuad" },
            { id: "eid668", tween: [ "transform", "${_LArm}", "rotateZ", '60deg', { fromValue: '46deg'}], position: 1825, duration: 510, easing: "easeInOutQuad" },
            { id: "eid671", tween: [ "transform", "${_LArm}", "rotateZ", '47deg', { fromValue: '60deg'}], position: 2335, duration: 510, easing: "easeInOutQuad" },
            { id: "eid674", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '47deg'}], position: 2845, duration: 500, easing: "easeInOutQuad" },
            { id: "eid686", tween: [ "style", "${_Body}", "left", '78px', { fromValue: '80px'}], position: 690, duration: 200, easing: "easeInOutQuad" },
            { id: "eid688", tween: [ "style", "${_Body}", "left", '76px', { fromValue: '78px'}], position: 890, duration: 425, easing: "easeInOutQuad" },
            { id: "eid691", tween: [ "style", "${_Body}", "left", '75px', { fromValue: '76px'}], position: 1315, duration: 335, easing: "easeInOutQuad" },
            { id: "eid692", tween: [ "style", "${_Body}", "left", '76px', { fromValue: '75px'}], position: 1650, duration: 175, easing: "easeInOutQuad" },
            { id: "eid694", tween: [ "style", "${_Body}", "left", '77px', { fromValue: '76px'}], position: 1825, duration: 295, easing: "easeInOutQuad" },
            { id: "eid696", tween: [ "style", "${_Body}", "left", '75px', { fromValue: '77px'}], position: 2120, duration: 320, easing: "easeInOutQuad" },
            { id: "eid698", tween: [ "style", "${_Body}", "left", '74px', { fromValue: '75px'}], position: 2440, duration: 165, easing: "easeInOutQuad" },
            { id: "eid700", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '74px'}], position: 2605, duration: 240, easing: "easeInOutQuad" }         ]
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
      type: 'image',
      id: 'shadow',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy3',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy2',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'Limb',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_shadow}": [
            ["transform", "scaleX", '2.72464'],
            ["transform", "scaleY", '2.47368'],
            ["style", "left", '165px'],
            ["style", "top", '284px']
         ],
         "${_RArm}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '12px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '80px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_RHand}": [
            ["style", "top", '-126px'],
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_handCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_LHand}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "scaleY", '1']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_LUnderarm}": [
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '6px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_bg2}": [
            ["style", "top", '-184px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleX", '0.38644']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_hand}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_body}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_LimbCopy3}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_RUnderarm}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_LimbCopy}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2460,
         autoPlay: false,
         timeline: [
            { id: "eid707", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-148deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid722", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-123deg', { fromValue: '-148deg'}], position: 615, duration: 385, easing: "easeInOutQuad" },
            { id: "eid734", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-123deg'}], position: 1000, duration: 385, easing: "easeInOutQuad" },
            { id: "eid753", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-123deg', { fromValue: '-148deg'}], position: 1385, duration: 385, easing: "easeInOutQuad" },
            { id: "eid754", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-123deg'}], position: 1770, duration: 385, easing: "easeInOutQuad" },
            { id: "eid706", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '239deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid716", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '239deg'}], position: 615, duration: 0, easing: "easeInOutQuad" },
            { id: "eid709", tween: [ "transform", "${_grip}", "rotateZ", '65deg', { fromValue: '65deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid723", tween: [ "transform", "${_grip}", "rotateZ", '102deg', { fromValue: '65deg'}], position: 615, duration: 385, easing: "easeInOutQuad" },
            { id: "eid750", tween: [ "transform", "${_grip}", "rotateZ", '65deg', { fromValue: '102deg'}], position: 1000, duration: 385, easing: "easeInOutQuad" },
            { id: "eid773", tween: [ "transform", "${_grip}", "rotateZ", '102deg', { fromValue: '65deg'}], position: 1385, duration: 385, easing: "easeInOutQuad" },
            { id: "eid774", tween: [ "transform", "${_grip}", "rotateZ", '65deg', { fromValue: '102deg'}], position: 1770, duration: 385, easing: "easeInOutQuad" },
            { id: "eid1040", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid724", tween: [ "style", "${_grip}", "left", '146px', { fromValue: '140px'}], position: 615, duration: 195, easing: "easeInQuad" },
            { id: "eid726", tween: [ "style", "${_grip}", "left", '133px', { fromValue: '146px'}], position: 810, duration: 190, easing: "easeOutQuad" },
            { id: "eid749", tween: [ "style", "${_grip}", "left", '139px', { fromValue: '133px'}], position: 1000, duration: 190, easing: "easeInQuad" },
            { id: "eid751", tween: [ "style", "${_grip}", "left", '140px', { fromValue: '139px'}], position: 1190, duration: 195, easing: "easeOutQuad" },
            { id: "eid769", tween: [ "style", "${_grip}", "left", '146px', { fromValue: '140px'}], position: 1385, duration: 195, easing: "easeInQuad" },
            { id: "eid770", tween: [ "style", "${_grip}", "left", '133px', { fromValue: '146px'}], position: 1580, duration: 190, easing: "easeOutQuad" },
            { id: "eid771", tween: [ "style", "${_grip}", "left", '139px', { fromValue: '133px'}], position: 1770, duration: 190, easing: "easeInQuad" },
            { id: "eid772", tween: [ "style", "${_grip}", "left", '140px', { fromValue: '139px'}], position: 1960, duration: 195, easing: "easeOutQuad" },
            { id: "eid725", tween: [ "style", "${_grip}", "top", '205px', { fromValue: '162px'}], position: 615, duration: 195, easing: "easeInQuad" },
            { id: "eid727", tween: [ "style", "${_grip}", "top", '238px', { fromValue: '205px'}], position: 810, duration: 190, easing: "easeOutQuad" },
            { id: "eid747", tween: [ "style", "${_grip}", "top", '205px', { fromValue: '238px'}], position: 1000, duration: 190, easing: "easeInQuad" },
            { id: "eid752", tween: [ "style", "${_grip}", "top", '162px', { fromValue: '205px'}], position: 1190, duration: 195, easing: "easeOutQuad" },
            { id: "eid765", tween: [ "style", "${_grip}", "top", '205px', { fromValue: '162px'}], position: 1385, duration: 195, easing: "easeInQuad" },
            { id: "eid766", tween: [ "style", "${_grip}", "top", '238px', { fromValue: '205px'}], position: 1580, duration: 190, easing: "easeOutQuad" },
            { id: "eid767", tween: [ "style", "${_grip}", "top", '205px', { fromValue: '238px'}], position: 1770, duration: 190, easing: "easeInQuad" },
            { id: "eid768", tween: [ "style", "${_grip}", "top", '162px', { fromValue: '205px'}], position: 1960, duration: 195, easing: "easeOutQuad" },
            { id: "eid1041", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1037", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid708", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid718", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 615, duration: 0, easing: "easeInOutQuad" },
            { id: "eid712", tween: [ "transform", "${_RHand}", "rotateZ", '34deg', { fromValue: '7deg'}], position: 0, duration: 305, easing: "easeInOutQuad" },
            { id: "eid802", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '34deg'}], position: 2155, duration: 305, easing: "easeInOutQuad" },
            { id: "eid1039", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid1038", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid711", tween: [ "transform", "${_LUnderarm}", "rotateZ", '148deg', { fromValue: '118deg'}], position: 0, duration: 305, easing: "easeInOutQuad" },
            { id: "eid800", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '148deg'}], position: 2155, duration: 305, easing: "easeInOutQuad" },
            { id: "eid710", tween: [ "transform", "${_LArm}", "rotateZ", '87deg', { fromValue: '182deg'}], position: 0, duration: 305, easing: "easeInOutQuad" },
            { id: "eid797", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '87deg'}], position: 2155, duration: 305, easing: "easeInOutQuad" },
            { id: "eid814", tween: [ "transform", "${_Body}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 0, duration: 305 },
            { id: "eid816", tween: [ "transform", "${_Body}", "rotateZ", '4deg', { fromValue: '7deg'}], position: 875, duration: 125 },
            { id: "eid817", tween: [ "transform", "${_Body}", "rotateZ", '7deg', { fromValue: '4deg'}], position: 1000, duration: 110 },
            { id: "eid818", tween: [ "transform", "${_Body}", "rotateZ", '4deg', { fromValue: '7deg'}], position: 1750, duration: 125 },
            { id: "eid819", tween: [ "transform", "${_Body}", "rotateZ", '7deg', { fromValue: '4deg'}], position: 1875, duration: 110 },
            { id: "eid821", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 2250, duration: 210 }         ]
      }
   }
},
"Symbol_5": {
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
      id: 'shadowCopy',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'BodyCopy',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2Copy',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         type: 'image',
         rect: ['-167px','-225px','590px','695px','auto','auto'],
         id: 'teeth2Copy3',
         transform: [[0,0],[],[],['0.38644','0.38644']],
         clip: ['rect(484.7143249511719px 590px 695px 0px)'],
         fill: ['rgba(0,0,0,0)','images/teeth2.svg','0px','0px']
      },
      {
         type: 'image',
         rect: ['-88px','5px','590px','695px','auto','auto'],
         id: 'teeth2Copy2',
         transform: [[0,0],['175'],[],['0.38644','0.38644']],
         clip: ['rect(504.2744140625px 590px 695px 0px)'],
         fill: ['rgba(0,0,0,0)','images/teeth2.svg','0px','0px']
      },
      {
         id: 'bodyCopy',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArmCopy',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarmCopy',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy7',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHandCopy',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  type: 'image',
                  rect: ['-3px','-112px','43px','155px','auto','auto'],
                  id: 'grip',
                  transform: [[0,0],['-29'],[],['0.89724','0.89724']],
                  clip: ['rect(91.62602996826172px 43px 155px 0px)'],
                  fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
               },
               {
                  id: 'handCopy3',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy6',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArmCopy',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarmCopy',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy5',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHandCopy',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'handCopy2',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy4',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bg2Copy}": [
            ["style", "top", '-184px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleX", '0.38644']
         ],
         "${_teeth2Copy3}": [
            ["style", "top", '-225px'],
            ["transform", "scaleY", '0.38644'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.38644'],
            ["style", "left", '-167px'],
            ["style", "clip", [517.0609130859375,590,695,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_LArmCopy}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "scaleY", '1']
         ],
         "${_handCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_LimbCopy7}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_LimbCopy4}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_grip}": [
            ["style", "-webkit-transform-origin", [51.4,89.06], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51.4,89.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51.4,89.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51.4,89.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51.4,89.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-29deg'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '-3px'],
            ["style", "width", '43px'],
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.89724'],
            ["style", "height", '155px'],
            ["style", "clip", [-1.4184116125106812,43,155,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_LimbCopy6}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_handCopy2}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_bodyCopy}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_RUnderarmCopy}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_RArmCopy}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_shadowCopy}": [
            ["transform", "scaleX", '2.72464'],
            ["transform", "scaleY", '2.47368'],
            ["style", "left", '165px'],
            ["style", "top", '284px']
         ],
         "${_RHandCopy}": [
            ["style", "top", '-127px'],
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_LHandCopy}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_BodyCopy}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '12px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '80px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_teeth2Copy2}": [
            ["style", "top", '5px'],
            ["transform", "scaleY", '0.38644'],
            ["transform", "rotateZ", '175deg'],
            ["transform", "scaleX", '0.38644'],
            ["style", "left", '-88px'],
            ["style", "clip", [530.6388549804688,590,695,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_LimbCopy5}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ],
         "${_LUnderarmCopy}": [
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '6px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2690,
         autoPlay: false,
         timeline: [
            { id: "eid1043", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid804", tween: [ "transform", "${_BodyCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid844", tween: [ "style", "${_teeth2Copy2}", "left", '-90px', { fromValue: '-88px'}], position: 690, duration: 170 },
            { id: "eid871", tween: [ "style", "${_teeth2Copy2}", "left", '-88px', { fromValue: '-90px'}], position: 860, duration: 170 },
            { id: "eid878", tween: [ "style", "${_teeth2Copy2}", "left", '-90px', { fromValue: '-88px'}], position: 1030, duration: 170 },
            { id: "eid879", tween: [ "style", "${_teeth2Copy2}", "left", '-88px', { fromValue: '-90px'}], position: 1200, duration: 170 },
            { id: "eid890", tween: [ "style", "${_teeth2Copy2}", "left", '-90px', { fromValue: '-88px'}], position: 1370, duration: 170 },
            { id: "eid891", tween: [ "style", "${_teeth2Copy2}", "left", '-88px', { fromValue: '-90px'}], position: 1540, duration: 170 },
            { id: "eid902", tween: [ "style", "${_teeth2Copy2}", "left", '-90px', { fromValue: '-88px'}], position: 1710, duration: 170 },
            { id: "eid903", tween: [ "style", "${_teeth2Copy2}", "left", '-88px', { fromValue: '-90px'}], position: 1880, duration: 170 },
            { id: "eid914", tween: [ "style", "${_teeth2Copy2}", "left", '-90px', { fromValue: '-88px'}], position: 2050, duration: 170 },
            { id: "eid915", tween: [ "style", "${_teeth2Copy2}", "left", '-88px', { fromValue: '-90px'}], position: 2220, duration: 170 },
            { id: "eid1042", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid836", tween: [ "style", "${_grip}", "clip", [4.800475120544434,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-1.4184119701385498,43,155,0]}], position: 345, duration: 90 },
            { id: "eid837", tween: [ "style", "${_grip}", "clip", [90.74835968017578,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [4.800475120544434,43,155,0]}], position: 435, duration: 255 },
            { id: "eid854", tween: [ "style", "${_grip}", "clip", [167.70013427734375,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [90.74835968017578,43,155,0]}], position: 690, duration: 170 },
            { id: "eid1021", tween: [ "style", "${_grip}", "clip", [155.34722900390625,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [167.70013427734375,43,155,0]}], position: 860, duration: 1280 },
            { id: "eid1022", tween: [ "style", "${_grip}", "clip", [105.17024993896484,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [155.34722900390625,43,155,0]}], position: 2140, duration: 160 },
            { id: "eid1024", tween: [ "style", "${_grip}", "clip", [71.44577026367188,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [105.17024993896484,43,155,0]}], position: 2300, duration: 160 },
            { id: "eid1027", tween: [ "style", "${_grip}", "clip", [-1.3498876094818115,43,155,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [71.44577026367188,43,155,0]}], position: 2460, duration: 40 },
            { id: "eid845", tween: [ "style", "${_teeth2Copy2}", "top", '-48px', { fromValue: '5px'}], position: 690, duration: 170 },
            { id: "eid870", tween: [ "style", "${_teeth2Copy2}", "top", '5px', { fromValue: '-48px'}], position: 860, duration: 170 },
            { id: "eid876", tween: [ "style", "${_teeth2Copy2}", "top", '-48px', { fromValue: '5px'}], position: 1030, duration: 170 },
            { id: "eid877", tween: [ "style", "${_teeth2Copy2}", "top", '5px', { fromValue: '-48px'}], position: 1200, duration: 170 },
            { id: "eid888", tween: [ "style", "${_teeth2Copy2}", "top", '-48px', { fromValue: '5px'}], position: 1370, duration: 170 },
            { id: "eid889", tween: [ "style", "${_teeth2Copy2}", "top", '5px', { fromValue: '-48px'}], position: 1540, duration: 170 },
            { id: "eid900", tween: [ "style", "${_teeth2Copy2}", "top", '-48px', { fromValue: '5px'}], position: 1710, duration: 170 },
            { id: "eid901", tween: [ "style", "${_teeth2Copy2}", "top", '5px', { fromValue: '-48px'}], position: 1880, duration: 170 },
            { id: "eid912", tween: [ "style", "${_teeth2Copy2}", "top", '-48px', { fromValue: '5px'}], position: 2050, duration: 170 },
            { id: "eid913", tween: [ "style", "${_teeth2Copy2}", "top", '5px', { fromValue: '-48px'}], position: 2220, duration: 170 },
            { id: "eid856", tween: [ "style", "${_teeth2Copy3}", "top", '-184px', { fromValue: '-225px'}], position: 690, duration: 170 },
            { id: "eid873", tween: [ "style", "${_teeth2Copy3}", "top", '-225px', { fromValue: '-184px'}], position: 860, duration: 170 },
            { id: "eid882", tween: [ "style", "${_teeth2Copy3}", "top", '-184px', { fromValue: '-225px'}], position: 1030, duration: 170 },
            { id: "eid883", tween: [ "style", "${_teeth2Copy3}", "top", '-225px', { fromValue: '-184px'}], position: 1200, duration: 170 },
            { id: "eid894", tween: [ "style", "${_teeth2Copy3}", "top", '-184px', { fromValue: '-225px'}], position: 1370, duration: 170 },
            { id: "eid895", tween: [ "style", "${_teeth2Copy3}", "top", '-225px', { fromValue: '-184px'}], position: 1540, duration: 170 },
            { id: "eid906", tween: [ "style", "${_teeth2Copy3}", "top", '-184px', { fromValue: '-225px'}], position: 1710, duration: 170 },
            { id: "eid907", tween: [ "style", "${_teeth2Copy3}", "top", '-225px', { fromValue: '-184px'}], position: 1880, duration: 170 },
            { id: "eid918", tween: [ "style", "${_teeth2Copy3}", "top", '-184px', { fromValue: '-225px'}], position: 2050, duration: 170 },
            { id: "eid919", tween: [ "style", "${_teeth2Copy3}", "top", '-225px', { fromValue: '-184px'}], position: 2220, duration: 170 },
            { id: "eid1046", tween: [ "style", "${_BodyCopy}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1045", tween: [ "style", "${_BodyCopy}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid853", tween: [ "style", "${_grip}", "top", '-163px', { fromValue: '-112px'}], position: 690, duration: 170 },
            { id: "eid1013", tween: [ "style", "${_grip}", "top", '-112px', { fromValue: '-163px'}], position: 860, duration: 1280 },
            { id: "eid852", tween: [ "style", "${_grip}", "left", '-38px', { fromValue: '-3px'}], position: 690, duration: 170 },
            { id: "eid1014", tween: [ "style", "${_grip}", "left", '-3px', { fromValue: '-38px'}], position: 860, duration: 1280 },
            { id: "eid863", tween: [ "style", "${_teeth2Copy3}", "clip", [378.85284423828125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [517.0609130859375,590,695,0]}], position: 690, duration: 170 },
            { id: "eid875", tween: [ "style", "${_teeth2Copy3}", "clip", [517.0609130859375,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [378.85284423828125,590,695,0]}], position: 860, duration: 170 },
            { id: "eid884", tween: [ "style", "${_teeth2Copy3}", "clip", [378.85284423828125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [517.0609130859375,590,695,0]}], position: 1030, duration: 170 },
            { id: "eid885", tween: [ "style", "${_teeth2Copy3}", "clip", [517.0609130859375,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [378.85284423828125,590,695,0]}], position: 1200, duration: 170 },
            { id: "eid896", tween: [ "style", "${_teeth2Copy3}", "clip", [378.85284423828125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [517.0609130859375,590,695,0]}], position: 1370, duration: 170 },
            { id: "eid897", tween: [ "style", "${_teeth2Copy3}", "clip", [517.0609130859375,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [378.85284423828125,590,695,0]}], position: 1540, duration: 170 },
            { id: "eid908", tween: [ "style", "${_teeth2Copy3}", "clip", [378.85284423828125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [517.0609130859375,590,695,0]}], position: 1710, duration: 170 },
            { id: "eid909", tween: [ "style", "${_teeth2Copy3}", "clip", [517.0609130859375,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [378.85284423828125,590,695,0]}], position: 1880, duration: 170 },
            { id: "eid920", tween: [ "style", "${_teeth2Copy3}", "clip", [378.85284423828125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [517.0609130859375,590,695,0]}], position: 2050, duration: 170 },
            { id: "eid921", tween: [ "style", "${_teeth2Copy3}", "clip", [517.0609130859375,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [378.85284423828125,590,695,0]}], position: 2220, duration: 170 },
            { id: "eid823", tween: [ "transform", "${_LArmCopy}", "rotateZ", '157deg', { fromValue: '182deg'}], position: 0, duration: 345 },
            { id: "eid937", tween: [ "transform", "${_LArmCopy}", "rotateZ", '163deg', { fromValue: '157deg'}], position: 860, duration: 340 },
            { id: "eid1000", tween: [ "transform", "${_LArmCopy}", "rotateZ", '167deg', { fromValue: '163deg'}], position: 1200, duration: 300 },
            { id: "eid1001", tween: [ "transform", "${_LArmCopy}", "rotateZ", '166deg', { fromValue: '167deg'}], position: 1500, duration: 340 },
            { id: "eid1002", tween: [ "transform", "${_LArmCopy}", "rotateZ", '156deg', { fromValue: '166deg'}], position: 1840, duration: 300 },
            { id: "eid1003", tween: [ "transform", "${_LArmCopy}", "rotateZ", '233deg', { fromValue: '156deg'}], position: 2140, duration: 160 },
            { id: "eid1025", tween: [ "transform", "${_LArmCopy}", "rotateZ", '182deg', { fromValue: '233deg'}], position: 2300, duration: 390 },
            { id: "eid1044", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid831", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-45deg', { fromValue: '2deg'}], position: 0, duration: 345 },
            { id: "eid834", tween: [ "transform", "${_LHandCopy}", "rotateZ", '29deg', { fromValue: '-45deg'}], position: 345, duration: 345 },
            { id: "eid860", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-16deg', { fromValue: '29deg'}], position: 690, duration: 170 },
            { id: "eid924", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-29deg', { fromValue: '-16deg'}], position: 860, duration: 340 },
            { id: "eid929", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-16deg', { fromValue: '-29deg'}], position: 1200, duration: 300 },
            { id: "eid934", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-29deg', { fromValue: '-16deg'}], position: 1500, duration: 340 },
            { id: "eid935", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-16deg', { fromValue: '-29deg'}], position: 1840, duration: 300 },
            { id: "eid1008", tween: [ "transform", "${_LHandCopy}", "rotateZ", '-81deg', { fromValue: '-16deg'}], position: 2140, duration: 320 },
            { id: "eid1023", tween: [ "transform", "${_LHandCopy}", "rotateZ", '2deg', { fromValue: '-81deg'}], position: 2460, duration: 230 },
            { id: "eid825", tween: [ "transform", "${_RArmCopy}", "rotateZ", '280deg', { fromValue: '239deg'}], position: 0, duration: 345 },
            { id: "eid833", tween: [ "transform", "${_RArmCopy}", "rotateZ", '180deg', { fromValue: '280deg'}], position: 345, duration: 345 },
            { id: "eid859", tween: [ "transform", "${_RArmCopy}", "rotateZ", '183deg', { fromValue: '180deg'}], position: 690, duration: 170 },
            { id: "eid926", tween: [ "transform", "${_RArmCopy}", "rotateZ", '175deg', { fromValue: '183deg'}], position: 860, duration: 340 },
            { id: "eid927", tween: [ "transform", "${_RArmCopy}", "rotateZ", '183deg', { fromValue: '175deg'}], position: 1200, duration: 300 },
            { id: "eid930", tween: [ "transform", "${_RArmCopy}", "rotateZ", '175deg', { fromValue: '183deg'}], position: 1500, duration: 340 },
            { id: "eid931", tween: [ "transform", "${_RArmCopy}", "rotateZ", '257deg', { fromValue: '175deg'}], position: 1840, duration: 300 },
            { id: "eid1006", tween: [ "transform", "${_RArmCopy}", "rotateZ", '302deg', { fromValue: '257deg'}], position: 2140, duration: 320 },
            { id: "eid1018", tween: [ "transform", "${_RArmCopy}", "rotateZ", '239deg', { fromValue: '302deg'}], position: 2460, duration: 230 },
            { id: "eid828", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-139deg', { fromValue: '-148deg'}], position: 0, duration: 345 },
            { id: "eid832", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-127deg', { fromValue: '-139deg'}], position: 345, duration: 345 },
            { id: "eid858", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-90deg', { fromValue: '-127deg'}], position: 690, duration: 170 },
            { id: "eid925", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-83deg', { fromValue: '-90deg'}], position: 860, duration: 340 },
            { id: "eid928", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-90deg', { fromValue: '-83deg'}], position: 1200, duration: 300 },
            { id: "eid932", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-83deg', { fromValue: '-90deg'}], position: 1500, duration: 340 },
            { id: "eid933", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-132deg', { fromValue: '-83deg'}], position: 1840, duration: 300 },
            { id: "eid1007", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-111deg', { fromValue: '-132deg'}], position: 2140, duration: 320 },
            { id: "eid1019", tween: [ "transform", "${_RUnderarmCopy}", "rotateZ", '-148deg', { fromValue: '-111deg'}], position: 2460, duration: 230 },
            { id: "eid855", tween: [ "style", "${_teeth2Copy3}", "left", '-159px', { fromValue: '-167px'}], position: 690, duration: 170 },
            { id: "eid874", tween: [ "style", "${_teeth2Copy3}", "left", '-167px', { fromValue: '-159px'}], position: 860, duration: 170 },
            { id: "eid886", tween: [ "style", "${_teeth2Copy3}", "left", '-159px', { fromValue: '-167px'}], position: 1030, duration: 170 },
            { id: "eid887", tween: [ "style", "${_teeth2Copy3}", "left", '-167px', { fromValue: '-159px'}], position: 1200, duration: 170 },
            { id: "eid898", tween: [ "style", "${_teeth2Copy3}", "left", '-159px', { fromValue: '-167px'}], position: 1370, duration: 170 },
            { id: "eid899", tween: [ "style", "${_teeth2Copy3}", "left", '-167px', { fromValue: '-159px'}], position: 1540, duration: 170 },
            { id: "eid910", tween: [ "style", "${_teeth2Copy3}", "left", '-159px', { fromValue: '-167px'}], position: 1710, duration: 170 },
            { id: "eid911", tween: [ "style", "${_teeth2Copy3}", "left", '-167px', { fromValue: '-159px'}], position: 1880, duration: 170 },
            { id: "eid922", tween: [ "style", "${_teeth2Copy3}", "left", '-159px', { fromValue: '-167px'}], position: 2050, duration: 170 },
            { id: "eid923", tween: [ "style", "${_teeth2Copy3}", "left", '-167px', { fromValue: '-159px'}], position: 2220, duration: 170 },
            { id: "eid824", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '107deg', { fromValue: '118deg'}], position: 0, duration: 345 },
            { id: "eid838", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '144deg', { fromValue: '107deg'}], position: 345, duration: 90 },
            { id: "eid839", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '149deg', { fromValue: '144deg'}], position: 435, duration: 255 },
            { id: "eid862", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '111deg', { fromValue: '149deg'}], position: 690, duration: 170 },
            { id: "eid938", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '100deg', { fromValue: '111deg'}], position: 860, duration: 340 },
            { id: "eid947", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '111deg', { fromValue: '100deg'}], position: 1200, duration: 300 },
            { id: "eid984", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '100deg', { fromValue: '111deg'}], position: 1500, duration: 340 },
            { id: "eid985", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '111deg', { fromValue: '100deg'}], position: 1840, duration: 300 },
            { id: "eid977", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '111deg', { fromValue: '111deg'}], position: 2140, duration: 0 },
            { id: "eid1009", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '27deg', { fromValue: '111deg'}], position: 2140, duration: 160 },
            { id: "eid1026", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '125deg', { fromValue: '27deg'}], position: 2300, duration: 160 },
            { id: "eid1016", tween: [ "transform", "${_LUnderarmCopy}", "rotateZ", '118deg', { fromValue: '125deg'}], position: 2460, duration: 230 },
            { id: "eid847", tween: [ "style", "${_teeth2Copy2}", "clip", [387.15313720703125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [530.6388549804688,590,695,0]}], position: 690, duration: 170 },
            { id: "eid872", tween: [ "style", "${_teeth2Copy2}", "clip", [530.6388549804688,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [387.15313720703125,590,695,0]}], position: 860, duration: 170 },
            { id: "eid880", tween: [ "style", "${_teeth2Copy2}", "clip", [387.15313720703125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [530.6388549804688,590,695,0]}], position: 1030, duration: 170 },
            { id: "eid881", tween: [ "style", "${_teeth2Copy2}", "clip", [530.6388549804688,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [387.15313720703125,590,695,0]}], position: 1200, duration: 170 },
            { id: "eid892", tween: [ "style", "${_teeth2Copy2}", "clip", [387.15313720703125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [530.6388549804688,590,695,0]}], position: 1370, duration: 170 },
            { id: "eid893", tween: [ "style", "${_teeth2Copy2}", "clip", [530.6388549804688,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [387.15313720703125,590,695,0]}], position: 1540, duration: 170 },
            { id: "eid904", tween: [ "style", "${_teeth2Copy2}", "clip", [387.15313720703125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [530.6388549804688,590,695,0]}], position: 1710, duration: 170 },
            { id: "eid905", tween: [ "style", "${_teeth2Copy2}", "clip", [530.6388549804688,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [387.15313720703125,590,695,0]}], position: 1880, duration: 170 },
            { id: "eid916", tween: [ "style", "${_teeth2Copy2}", "clip", [387.15313720703125,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [530.6388549804688,590,695,0]}], position: 2050, duration: 170 },
            { id: "eid917", tween: [ "style", "${_teeth2Copy2}", "clip", [530.6388549804688,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [387.15313720703125,590,695,0]}], position: 2220, duration: 170 },
            { id: "eid827", tween: [ "transform", "${_RHandCopy}", "rotateZ", '15deg', { fromValue: '7deg'}], position: 0, duration: 345 },
            { id: "eid861", tween: [ "transform", "${_RHandCopy}", "rotateZ", '-5deg', { fromValue: '15deg'}], position: 345, duration: 515 },
            { id: "eid939", tween: [ "transform", "${_RHandCopy}", "rotateZ", '6deg', { fromValue: '-5deg'}], position: 860, duration: 340 },
            { id: "eid962", tween: [ "transform", "${_RHandCopy}", "rotateZ", '-5deg', { fromValue: '6deg'}], position: 1200, duration: 300 },
            { id: "eid993", tween: [ "transform", "${_RHandCopy}", "rotateZ", '6deg', { fromValue: '-5deg'}], position: 1500, duration: 340 },
            { id: "eid994", tween: [ "transform", "${_RHandCopy}", "rotateZ", '-5deg', { fromValue: '6deg'}], position: 1840, duration: 300 },
            { id: "eid996", tween: [ "transform", "${_RHandCopy}", "rotateZ", '-5deg', { fromValue: '-5deg'}], position: 2140, duration: 0 },
            { id: "eid1005", tween: [ "transform", "${_RHandCopy}", "rotateZ", '-3deg', { fromValue: '-5deg'}], position: 2140, duration: 320 },
            { id: "eid1017", tween: [ "transform", "${_RHandCopy}", "rotateZ", '7deg', { fromValue: '-3deg'}], position: 2460, duration: 230 }         ]
      }
   }
},
"Symbol_6": {
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
      id: 'shadow',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy3',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy2',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'Limb',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_shadow}": [
            ["transform", "scaleX", '2.72464'],
            ["transform", "scaleY", '2.47368'],
            ["style", "left", '165px'],
            ["style", "top", '284px']
         ],
         "${_RArm}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_LimbCopy}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_RHand}": [
            ["style", "top", '-127px'],
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_handCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_LHand}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "scaleY", '1']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_LUnderarm}": [
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '6px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-4px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '34px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_hand}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_LimbCopy3}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_body}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_RUnderarm}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_bg2}": [
            ["style", "top", '-184px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleX", '0.38644']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4935,
         autoPlay: false,
         timeline: [
            { id: "eid1070", tween: [ "transform", "${_Body}", "skewX", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1097", tween: [ "transform", "${_RUnderarm}", "rotateZ", '4deg', { fromValue: '-148deg'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1120", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-31deg', { fromValue: '4deg'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1130", tween: [ "transform", "${_RUnderarm}", "rotateZ", '28deg', { fromValue: '-31deg'}], position: 845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1136", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-19deg', { fromValue: '28deg'}], position: 1250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1142", tween: [ "transform", "${_RUnderarm}", "rotateZ", '23deg', { fromValue: '-19deg'}], position: 1640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1148", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-9deg', { fromValue: '23deg'}], position: 2120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1218", tween: [ "transform", "${_RUnderarm}", "rotateZ", '23deg', { fromValue: '-9deg'}], position: 2500, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1217", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-19deg', { fromValue: '23deg'}], position: 2880, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1216", tween: [ "transform", "${_RUnderarm}", "rotateZ", '28deg', { fromValue: '-19deg'}], position: 3360, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1215", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-31deg', { fromValue: '28deg'}], position: 3750, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1214", tween: [ "transform", "${_RUnderarm}", "rotateZ", '4deg', { fromValue: '-31deg'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1240", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '4deg'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1081", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1109", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1178", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1237", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1076", tween: [ "style", "${_LHand}", "left", '-20px', { fromValue: '-20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1124", tween: [ "style", "${_LHand}", "left", '-22px', { fromValue: '-20px'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1197", tween: [ "style", "${_LHand}", "left", '-20px', { fromValue: '-22px'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1242", tween: [ "style", "${_LHand}", "left", '-20px', { fromValue: '-20px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1080", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1105", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1171", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1233", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1094", tween: [ "style", "${_LUnderarm}", "top", '7px', { fromValue: '6px'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1100", tween: [ "style", "${_LUnderarm}", "top", '7px', { fromValue: '7px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1157", tween: [ "style", "${_LUnderarm}", "top", '7px', { fromValue: '7px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1226", tween: [ "style", "${_LUnderarm}", "top", '6px', { fromValue: '7px'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1074", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1104", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1172", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1234", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1066", tween: [ "style", "${_Body}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1092", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-1deg', { fromValue: '118deg'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1118", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-28deg', { fromValue: '-1deg'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1127", tween: [ "transform", "${_LUnderarm}", "rotateZ", '26deg', { fromValue: '-28deg'}], position: 845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1133", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-20deg', { fromValue: '26deg'}], position: 1250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1140", tween: [ "transform", "${_LUnderarm}", "rotateZ", '17deg', { fromValue: '-20deg'}], position: 1640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1145", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-17deg', { fromValue: '17deg'}], position: 2120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1203", tween: [ "transform", "${_LUnderarm}", "rotateZ", '17deg', { fromValue: '-17deg'}], position: 2500, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1202", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-20deg', { fromValue: '17deg'}], position: 2880, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1201", tween: [ "transform", "${_LUnderarm}", "rotateZ", '26deg', { fromValue: '-20deg'}], position: 3360, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1200", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-28deg', { fromValue: '26deg'}], position: 3750, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1199", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-1deg', { fromValue: '-28deg'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1228", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '-1deg'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1075", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1107", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1179", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1238", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1071", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1114", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1151", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1220", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1073", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1101", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1165", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1230", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1079", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1102", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1164", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1229", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1093", tween: [ "style", "${_LUnderarm}", "left", '2px', { fromValue: '-1px'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1099", tween: [ "style", "${_LUnderarm}", "left", '2px', { fromValue: '2px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1158", tween: [ "style", "${_LUnderarm}", "left", '2px', { fromValue: '2px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1227", tween: [ "style", "${_LUnderarm}", "left", '-1px', { fromValue: '2px'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1641", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid1251", tween: [ "transform", "${_Body}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 325 },
            { id: "eid1252", tween: [ "transform", "${_Body}", "rotateZ", '1deg', { fromValue: '3deg'}], position: 325, duration: 175 },
            { id: "eid1253", tween: [ "transform", "${_Body}", "rotateZ", '9deg', { fromValue: '1deg'}], position: 500, duration: 345 },
            { id: "eid1254", tween: [ "transform", "${_Body}", "rotateZ", '-9deg', { fromValue: '9deg'}], position: 845, duration: 405 },
            { id: "eid1255", tween: [ "transform", "${_Body}", "rotateZ", '4deg', { fromValue: '-9deg'}], position: 1250, duration: 390 },
            { id: "eid1256", tween: [ "transform", "${_Body}", "rotateZ", '16deg', { fromValue: '4deg'}], position: 1640, duration: 480 },
            { id: "eid1257", tween: [ "transform", "${_Body}", "rotateZ", '-2deg', { fromValue: '16deg'}], position: 2120, duration: 380 },
            { id: "eid1258", tween: [ "transform", "${_Body}", "rotateZ", '12deg', { fromValue: '-2deg'}], position: 2500, duration: 380 },
            { id: "eid1259", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 2880, duration: 480 },
            { id: "eid1260", tween: [ "transform", "${_Body}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 3360, duration: 390 },
            { id: "eid1261", tween: [ "transform", "${_Body}", "rotateZ", '9deg', { fromValue: '-10deg'}], position: 3750, duration: 405 },
            { id: "eid1262", tween: [ "transform", "${_Body}", "rotateZ", '-4deg', { fromValue: '9deg'}], position: 4155, duration: 345 },
            { id: "eid1263", tween: [ "transform", "${_Body}", "rotateZ", '7deg', { fromValue: '-4deg'}], position: 4500, duration: 110 },
            { id: "eid1264", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 4610, duration: 325 },
            { id: "eid1640", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid1639", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid1098", tween: [ "transform", "${_LHand}", "rotateZ", '-8deg', { fromValue: '2deg'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1122", tween: [ "transform", "${_LHand}", "rotateZ", '-29deg', { fromValue: '-8deg'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1131", tween: [ "transform", "${_LHand}", "rotateZ", '16deg', { fromValue: '-29deg'}], position: 845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1137", tween: [ "transform", "${_LHand}", "rotateZ", '-20deg', { fromValue: '16deg'}], position: 1250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1143", tween: [ "transform", "${_LHand}", "rotateZ", '10deg', { fromValue: '-20deg'}], position: 1640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1149", tween: [ "transform", "${_LHand}", "rotateZ", '-7deg', { fromValue: '10deg'}], position: 2120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1187", tween: [ "transform", "${_LHand}", "rotateZ", '-29deg', { fromValue: '-8deg'}], position: 2500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1188", tween: [ "transform", "${_LHand}", "rotateZ", '16deg', { fromValue: '-29deg'}], position: 2845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1189", tween: [ "transform", "${_LHand}", "rotateZ", '-20deg', { fromValue: '16deg'}], position: 3250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1190", tween: [ "transform", "${_LHand}", "rotateZ", '10deg', { fromValue: '-20deg'}], position: 3640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1191", tween: [ "transform", "${_LHand}", "rotateZ", '-7deg', { fromValue: '10deg'}], position: 4120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1244", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-8deg'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1069", tween: [ "style", "${_Body}", "left", '34px', { fromValue: '34px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1095", tween: [ "transform", "${_RHand}", "rotateZ", '15deg', { fromValue: '7deg'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1125", tween: [ "transform", "${_RHand}", "rotateZ", '-28deg', { fromValue: '15deg'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1128", tween: [ "transform", "${_RHand}", "rotateZ", '13deg', { fromValue: '-28deg'}], position: 845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1134", tween: [ "transform", "${_RHand}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 1250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1139", tween: [ "transform", "${_RHand}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 1640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1146", tween: [ "transform", "${_RHand}", "rotateZ", '-5deg', { fromValue: '6deg'}], position: 2120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1208", tween: [ "transform", "${_RHand}", "rotateZ", '6deg', { fromValue: '-5deg'}], position: 2500, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1207", tween: [ "transform", "${_RHand}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 2880, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1206", tween: [ "transform", "${_RHand}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 3360, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1205", tween: [ "transform", "${_RHand}", "rotateZ", '-28deg', { fromValue: '13deg'}], position: 3750, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1204", tween: [ "transform", "${_RHand}", "rotateZ", '15deg', { fromValue: '-28deg'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1232", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '15deg'}], position: 4610, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1082", tween: [ "style", "${_LHand}", "top", '-125px', { fromValue: '-125px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1123", tween: [ "style", "${_LHand}", "top", '-124px', { fromValue: '-125px'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1198", tween: [ "style", "${_LHand}", "top", '-125px', { fromValue: '-124px'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1241", tween: [ "style", "${_LHand}", "top", '-125px', { fromValue: '-125px'}], position: 4610, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1089", tween: [ "transform", "${_LArm}", "rotateZ", '340deg', { fromValue: '182deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1117", tween: [ "transform", "${_LArm}", "rotateZ", '372deg', { fromValue: '340deg'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1126", tween: [ "transform", "${_LArm}", "rotateZ", '338deg', { fromValue: '372deg'}], position: 845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1132", tween: [ "transform", "${_LArm}", "rotateZ", '387deg', { fromValue: '338deg'}], position: 1250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1138", tween: [ "transform", "${_LArm}", "rotateZ", '311deg', { fromValue: '387deg'}], position: 1640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1144", tween: [ "transform", "${_LArm}", "rotateZ", '406deg', { fromValue: '311deg'}], position: 2120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1196", tween: [ "transform", "${_LArm}", "rotateZ", '311deg', { fromValue: '406deg'}], position: 2500, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1195", tween: [ "transform", "${_LArm}", "rotateZ", '387deg', { fromValue: '311deg'}], position: 2880, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1194", tween: [ "transform", "${_LArm}", "rotateZ", '338deg', { fromValue: '387deg'}], position: 3360, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1193", tween: [ "transform", "${_LArm}", "rotateZ", '372deg', { fromValue: '338deg'}], position: 3750, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1192", tween: [ "transform", "${_LArm}", "rotateZ", '340deg', { fromValue: '372deg'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1222", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '340deg'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1067", tween: [ "transform", "${_Body}", "skewY", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1096", tween: [ "transform", "${_RArm}", "rotateZ", '335deg', { fromValue: '239deg'}], position: 0, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1119", tween: [ "transform", "${_RArm}", "rotateZ", '378deg', { fromValue: '335deg'}], position: 500, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1129", tween: [ "transform", "${_RArm}", "rotateZ", '333deg', { fromValue: '378deg'}], position: 845, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1135", tween: [ "transform", "${_RArm}", "rotateZ", '401deg', { fromValue: '333deg'}], position: 1250, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1141", tween: [ "transform", "${_RArm}", "rotateZ", '303deg', { fromValue: '401deg'}], position: 1640, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1147", tween: [ "transform", "${_RArm}", "rotateZ", '393deg', { fromValue: '303deg'}], position: 2120, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1213", tween: [ "transform", "${_RArm}", "rotateZ", '303deg', { fromValue: '393deg'}], position: 2500, duration: 380, easing: "easeInOutQuad" },
            { id: "eid1212", tween: [ "transform", "${_RArm}", "rotateZ", '401deg', { fromValue: '303deg'}], position: 2880, duration: 480, easing: "easeInOutQuad" },
            { id: "eid1211", tween: [ "transform", "${_RArm}", "rotateZ", '333deg', { fromValue: '401deg'}], position: 3360, duration: 390, easing: "easeInOutQuad" },
            { id: "eid1210", tween: [ "transform", "${_RArm}", "rotateZ", '378deg', { fromValue: '333deg'}], position: 3750, duration: 405, easing: "easeInOutQuad" },
            { id: "eid1209", tween: [ "transform", "${_RArm}", "rotateZ", '335deg', { fromValue: '378deg'}], position: 4155, duration: 345, easing: "easeInOutQuad" },
            { id: "eid1236", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '335deg'}], position: 4610, duration: 325, easing: "easeInOutQuad" },
            { id: "eid1077", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1115", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1150", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1219", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 4610, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Symbol_7": {
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
      id: 'shadow',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy3',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy2',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'Limb',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_shadow}": [
            ["style", "top", '284px'],
            ["transform", "scaleY", '2.47368'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '2.72464'],
            ["style", "left", '165px']
         ],
         "${_RArm}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_LimbCopy}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_RHand}": [
            ["style", "top", '-127px'],
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_handCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_LHand}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "scaleY", '1']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_LUnderarm}": [
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '6px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_bg2}": [
            ["style", "top", '-184px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleX", '0.38644']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_hand}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_body}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_LimbCopy3}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_RUnderarm}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '12px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '80px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: false,
         timeline: [
            { id: "eid1293", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-116deg', { fromValue: '-148deg'}], position: 0, duration: 250 },
            { id: "eid1303", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-94deg', { fromValue: '-116deg'}], position: 250, duration: 380 },
            { id: "eid1311", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-116deg', { fromValue: '-94deg'}], position: 630, duration: 210 },
            { id: "eid1336", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-94deg', { fromValue: '-116deg'}], position: 840, duration: 405 },
            { id: "eid1348", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-116deg', { fromValue: '-94deg'}], position: 1245, duration: 255 },
            { id: "eid1355", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-116deg'}], position: 1500, duration: 250 },
            { id: "eid1280", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid1274", tween: [ "style", "${_LHand}", "left", '-20px', { fromValue: '-20px'}], position: 0, duration: 0 },
            { id: "eid1318", tween: [ "transform", "${_shadow}", "scaleY", '3.03234', { fromValue: '2.47368'}], position: 0, duration: 250 },
            { id: "eid1361", tween: [ "transform", "${_shadow}", "scaleY", '2.47368', { fromValue: '3.03234'}], position: 1500, duration: 250 },
            { id: "eid1265", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid1295", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1298", tween: [ "style", "${_Body}", "left", '78px', { fromValue: '80px'}], position: 250, duration: 380 },
            { id: "eid1305", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '78px'}], position: 630, duration: 205 },
            { id: "eid1326", tween: [ "style", "${_Body}", "left", '78px', { fromValue: '80px'}], position: 835, duration: 415 },
            { id: "eid1342", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '78px'}], position: 1250, duration: 250 },
            { id: "eid1353", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '80px'}], position: 1750, duration: 0 },
            { id: "eid1267", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid1296", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1297", tween: [ "style", "${_Body}", "top", '-27px', { fromValue: '12px'}], position: 250, duration: 380 },
            { id: "eid1306", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '-27px'}], position: 630, duration: 205 },
            { id: "eid1327", tween: [ "style", "${_Body}", "top", '-27px', { fromValue: '12px'}], position: 835, duration: 415 },
            { id: "eid1343", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '-27px'}], position: 1250, duration: 250 },
            { id: "eid1352", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '12px'}], position: 1750, duration: 0 },
            { id: "eid1290", tween: [ "transform", "${_LUnderarm}", "rotateZ", '125deg', { fromValue: '118deg'}], position: 0, duration: 250 },
            { id: "eid1301", tween: [ "transform", "${_LUnderarm}", "rotateZ", '95deg', { fromValue: '125deg'}], position: 250, duration: 380 },
            { id: "eid1308", tween: [ "transform", "${_LUnderarm}", "rotateZ", '125deg', { fromValue: '95deg'}], position: 630, duration: 205 },
            { id: "eid1330", tween: [ "transform", "${_LUnderarm}", "rotateZ", '95deg', { fromValue: '125deg'}], position: 835, duration: 410 },
            { id: "eid1345", tween: [ "transform", "${_LUnderarm}", "rotateZ", '125deg', { fromValue: '95deg'}], position: 1245, duration: 255 },
            { id: "eid1349", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '125deg'}], position: 1500, duration: 250 },
            { id: "eid1273", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1269", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid1271", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 0, duration: 0 },
            { id: "eid1278", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 0, duration: 0 },
            { id: "eid1270", tween: [ "style", "${_LUnderarm}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid1314", tween: [ "transform", "${_shadow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1317", tween: [ "transform", "${_shadow}", "scaleX", '3.34', { fromValue: '2.72464'}], position: 0, duration: 250 },
            { id: "eid1360", tween: [ "transform", "${_shadow}", "scaleX", '2.72464', { fromValue: '3.34'}], position: 1500, duration: 250 },
            { id: "eid1281", tween: [ "style", "${_LHand}", "top", '-125px', { fromValue: '-125px'}], position: 0, duration: 0 },
            { id: "eid1294", tween: [ "transform", "${_LHand}", "rotateZ", '-1deg', { fromValue: '2deg'}], position: 0, duration: 250 },
            { id: "eid1356", tween: [ "transform", "${_LHand}", "rotateZ", '-1deg', { fromValue: '-1deg'}], position: 250, duration: 0 },
            { id: "eid1357", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-1deg'}], position: 1500, duration: 250 },
            { id: "eid1292", tween: [ "transform", "${_RArm}", "rotateZ", '297deg', { fromValue: '239deg'}], position: 0, duration: 250 },
            { id: "eid1302", tween: [ "transform", "${_RArm}", "rotateZ", '267deg', { fromValue: '297deg'}], position: 250, duration: 380 },
            { id: "eid1310", tween: [ "transform", "${_RArm}", "rotateZ", '297deg', { fromValue: '267deg'}], position: 630, duration: 210 },
            { id: "eid1335", tween: [ "transform", "${_RArm}", "rotateZ", '267deg', { fromValue: '297deg'}], position: 840, duration: 405 },
            { id: "eid1347", tween: [ "transform", "${_RArm}", "rotateZ", '297deg', { fromValue: '267deg'}], position: 1245, duration: 255 },
            { id: "eid1354", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '297deg'}], position: 1500, duration: 250 },
            { id: "eid1291", tween: [ "transform", "${_RHand}", "rotateZ", '-2deg', { fromValue: '7deg'}], position: 0, duration: 250 },
            { id: "eid1304", tween: [ "transform", "${_RHand}", "rotateZ", '-1deg', { fromValue: '-2deg'}], position: 250, duration: 380 },
            { id: "eid1309", tween: [ "transform", "${_RHand}", "rotateZ", '-2deg', { fromValue: '-1deg'}], position: 630, duration: 205 },
            { id: "eid1332", tween: [ "transform", "${_RHand}", "rotateZ", '-1deg', { fromValue: '-2deg'}], position: 835, duration: 410 },
            { id: "eid1346", tween: [ "transform", "${_RHand}", "rotateZ", '-2deg', { fromValue: '-1deg'}], position: 1245, duration: 255 },
            { id: "eid1350", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '-2deg'}], position: 1500, duration: 250 },
            { id: "eid1289", tween: [ "transform", "${_LArm}", "rotateZ", '55deg', { fromValue: '182deg'}], position: 0, duration: 250 },
            { id: "eid1300", tween: [ "transform", "${_LArm}", "rotateZ", '90deg', { fromValue: '55deg'}], position: 250, duration: 380 },
            { id: "eid1307", tween: [ "transform", "${_LArm}", "rotateZ", '55deg', { fromValue: '90deg'}], position: 630, duration: 205 },
            { id: "eid1328", tween: [ "transform", "${_LArm}", "rotateZ", '90deg', { fromValue: '55deg'}], position: 835, duration: 415 },
            { id: "eid1344", tween: [ "transform", "${_LArm}", "rotateZ", '55deg', { fromValue: '90deg'}], position: 1250, duration: 250 },
            { id: "eid1351", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '55deg'}], position: 1500, duration: 250 },
            { id: "eid1282", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1299", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 250, duration: 0 },
            { id: "eid1266", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid1279", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid1277", tween: [ "style", "${_LUnderarm}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid1272", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid1276", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_8": {
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
      id: 'shadow',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         rect: ['162px','269px','31','12','auto','auto'],
         id: 'Tongue',
         type: 'group',
         transform: [[0,0],['-76']],
         c: [
         {
            rect: ['22px','0px','31','12','auto','auto'],
            id: 'Group4',
            type: 'group',
            transform: [],
            c: [
            {
               type: 'image',
               id: 'TongueTip',
               rect: ['3px','3px','24px','7px','auto','auto'],
               transform: [[0,0],[],[],['1.29','1.74']],
               fill: ['rgba(0,0,0,0)','images/TongueTip.svg','0px','0px']
            }]
         },
         {
            type: 'image',
            id: 'TongueSeg',
            rect: ['3px','3px','24px','7px','auto','auto'],
            transform: [[0,0],[],[],['1.29','1.74']],
            fill: ['rgba(0,0,0,0)','images/TongueSeg.svg','0px','0px']
         }]
      },
      {
         type: 'image',
         rect: ['-167px','-225px','590px','695px','auto','auto'],
         id: 'teeth2Copy',
         transform: [[0,0],[],[],['0.38644','0.38644']],
         clip: ['rect(484.7143249511719px 590px 695px 0px)'],
         fill: ['rgba(0,0,0,0)','images/teeth2.svg','0px','0px']
      },
      {
         type: 'image',
         rect: ['-88px','5px','590px','695px','auto','auto'],
         id: 'teeth2',
         transform: [[0,0],['175'],[],['0.38644','0.38644']],
         clip: ['rect(504.2744140625px 590px 695px 0px)'],
         fill: ['rgba(0,0,0,0)','images/teeth2.svg','0px','0px']
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy3',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  type: 'image',
                  id: 'gripCopy',
                  rect: ['-29px','-99px','43px','155px','auto','auto'],
                  transform: [[0,0],['-29'],[],['0.89724','0.89724']],
                  fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
               },
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'LimbCopy2',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'Limb',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_shadow}": [
            ["transform", "scaleX", '2.72464'],
            ["transform", "scaleY", '2.47368'],
            ["style", "left", '165px'],
            ["style", "top", '284px']
         ],
         "${_gripCopy}": [
            ["style", "top", '-99px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '-29deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '-29px'],
            ["style", "width", '43px']
         ],
         "${_RArm}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_LimbCopy}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_RHand}": [
            ["style", "top", '-127px'],
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-14px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${_TongueTip}": [
            ["transform", "scaleX", '1.29'],
            ["style", "top", '3px'],
            ["style", "left", '3px'],
            ["transform", "scaleY", '1.74']
         ],
         "${_handCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '12px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '80px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LHand}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "scaleY", '1']
         ],
         "${_Tongue}": [
            ["style", "-webkit-transform-origin", [14,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '297px'],
            ["style", "left", '158px'],
            ["transform", "rotateZ", '-76deg']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_LUnderarm}": [
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '6px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '118deg']
         ],
         "${_TongueSeg}": [
            ["transform", "scaleX", '1.29'],
            ["style", "top", '3px'],
            ["transform", "scaleY", '1.74'],
            ["style", "left", '3px']
         ],
         "${_Group4}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [13,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [13,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [13,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [13,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [13,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_teeth2Copy}": [
            ["style", "top", '-225px'],
            ["transform", "scaleY", '0.38644'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.38644'],
            ["style", "left", '-167px'],
            ["style", "clip", [512.3167114257812,590,695,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_teeth2}": [
            ["style", "top", '5px'],
            ["transform", "scaleY", '0.38644'],
            ["transform", "rotateZ", '175deg'],
            ["transform", "scaleX", '0.38644'],
            ["style", "left", '-88px'],
            ["style", "clip", [512.1583862304688,590,695,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_hand}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_LimbCopy3}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${_body}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_RUnderarm}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_bg2}": [
            ["style", "top", '-184px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleX", '0.38644']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3015,
         autoPlay: false,
         timeline: [
            { id: "eid1396", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-120deg', { fromValue: '-148deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid1498", tween: [ "transform", "${_RUnderarm}", "rotateZ", '78deg', { fromValue: '-120deg'}], position: 750, duration: 1325, easing: "easeInOutQuad" },
            { id: "eid1517", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '78deg'}], position: 2685, duration: 330, easing: "easeInQuad" },
            { id: "eid1518", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-148deg'}], position: 3015, duration: 0, easing: "easeOutQuad" },
            { id: "eid1519", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-148deg'}], position: 3015, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1643", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid1378", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid1423", tween: [ "style", "${_teeth2Copy}", "clip", [456.2493591308594,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [512.3167114257812,590,695,0]}], position: 335, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1479", tween: [ "style", "${_teeth2Copy}", "clip", [512.3167114257812,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [456.2493591308594,590,695,0]}], position: 2805, duration: 210, easing: "easeInOutQuad" },
            { id: "eid1374", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1404", tween: [ "transform", "${_Tongue}", "rotateZ", '-76deg', { fromValue: '-76deg'}], position: 0, duration: 0 },
            { id: "eid1370", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1409", tween: [ "style", "${_Tongue}", "left", '158px', { fromValue: '158px'}], position: 0, duration: 0 },
            { id: "eid1430", tween: [ "style", "${_Tongue}", "left", '160px', { fromValue: '158px'}], position: 425, duration: 225, easing: "easeInOutQuad" },
            { id: "eid1461", tween: [ "style", "${_Tongue}", "left", '158px', { fromValue: '160px'}], position: 2500, duration: 225, easing: "easeInOutQuad" },
            { id: "eid1368", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 0, duration: 0 },
            { id: "eid1406", tween: [ "style", "${_Group4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1433", tween: [ "style", "${_Group4}", "top", '0px', { fromValue: '0px'}], position: 500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1454", tween: [ "style", "${_Group4}", "top", '0px', { fromValue: '0px'}], position: 2355, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1407", tween: [ "transform", "${_Group4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1435", tween: [ "transform", "${_Group4}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 750, duration: 100, easing: "easeInOutQuad" },
            { id: "eid1436", tween: [ "transform", "${_Group4}", "rotateZ", '-7deg', { fromValue: '16deg'}], position: 850, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1437", tween: [ "transform", "${_Group4}", "rotateZ", '6deg', { fromValue: '-7deg'}], position: 960, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1438", tween: [ "transform", "${_Group4}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 1075, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1439", tween: [ "transform", "${_Group4}", "rotateZ", '8deg', { fromValue: '-6deg'}], position: 1205, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1440", tween: [ "transform", "${_Group4}", "rotateZ", '-9deg', { fromValue: '8deg'}], position: 1320, duration: 140, easing: "easeInOutQuad" },
            { id: "eid1441", tween: [ "transform", "${_Group4}", "rotateZ", '3deg', { fromValue: '-9deg'}], position: 1460, duration: 135, easing: "easeInOutQuad" },
            { id: "eid1442", tween: [ "transform", "${_Group4}", "rotateZ", '-25deg', { fromValue: '3deg'}], position: 1595, duration: 155, easing: "easeInOutQuad" },
            { id: "eid1443", tween: [ "transform", "${_Group4}", "rotateZ", '12deg', { fromValue: '-25deg'}], position: 1750, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1444", tween: [ "transform", "${_Group4}", "rotateZ", '-41deg', { fromValue: '12deg'}], position: 1915, duration: 160, easing: "easeInOutQuad" },
            { id: "eid1445", tween: [ "transform", "${_Group4}", "rotateZ", '9deg', { fromValue: '-41deg'}], position: 2075, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1446", tween: [ "transform", "${_Group4}", "rotateZ", '-9deg', { fromValue: '9deg'}], position: 2205, duration: 150, easing: "easeInOutQuad" },
            { id: "eid1377", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 0, duration: 0 },
            { id: "eid1367", tween: [ "style", "${_LUnderarm}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid1382", tween: [ "style", "${_teeth2Copy}", "top", '-225px', { fromValue: '-225px'}], position: 0, duration: 0 },
            { id: "eid1421", tween: [ "style", "${_teeth2Copy}", "top", '-201px', { fromValue: '-225px'}], position: 335, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1478", tween: [ "style", "${_teeth2Copy}", "top", '-225px', { fromValue: '-201px'}], position: 2805, duration: 210, easing: "easeInOutQuad" },
            { id: "eid1547", tween: [ "transform", "${_Body}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 335 },
            { id: "eid1549", tween: [ "transform", "${_Body}", "rotateZ", '-5deg', { fromValue: '4deg'}], position: 750, duration: 845 },
            { id: "eid1550", tween: [ "transform", "${_Body}", "rotateZ", '4deg', { fromValue: '-5deg'}], position: 1595, duration: 1090 },
            { id: "eid1551", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 2685, duration: 330 },
            { id: "eid1390", tween: [ "transform", "${_teeth2}", "rotateZ", '175deg', { fromValue: '175deg'}], position: 0, duration: 0 },
            { id: "eid1381", tween: [ "style", "${_teeth2}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid1417", tween: [ "style", "${_teeth2}", "top", '-26px', { fromValue: '5px'}], position: 335, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1484", tween: [ "style", "${_teeth2}", "top", '5px', { fromValue: '-26px'}], position: 2850, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1379", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid1371", tween: [ "style", "${_LHand}", "left", '-20px', { fromValue: '-20px'}], position: 0, duration: 0 },
            { id: "eid1391", tween: [ "transform", "${_teeth2Copy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1642", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid1395", tween: [ "transform", "${_RArm}", "rotateZ", '229deg', { fromValue: '239deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid1496", tween: [ "transform", "${_RArm}", "rotateZ", '334deg', { fromValue: '229deg'}], position: 750, duration: 1325, easing: "easeInOutQuad" },
            { id: "eid1515", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '334deg'}], position: 2685, duration: 330, easing: "easeInQuad" },
            { id: "eid1516", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '239deg'}], position: 3015, duration: 0, easing: "easeOutQuad" },
            { id: "eid1369", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid1394", tween: [ "transform", "${_RHand}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid1492", tween: [ "transform", "${_RHand}", "rotateZ", '-23deg', { fromValue: '-3deg'}], position: 750, duration: 1325, easing: "easeInOutQuad" },
            { id: "eid1511", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '-23deg'}], position: 2685, duration: 330, easing: "easeInQuad" },
            { id: "eid1512", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '7deg'}], position: 3015, duration: 0, easing: "easeOutQuad" },
            { id: "eid1514", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '7deg'}], position: 3015, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1366", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid1392", tween: [ "transform", "${_LArm}", "rotateZ", '136deg', { fromValue: '182deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid1488", tween: [ "transform", "${_LArm}", "rotateZ", '12deg', { fromValue: '136deg'}], position: 750, duration: 1325, easing: "easeInOutQuad" },
            { id: "eid1506", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '12deg'}], position: 2685, duration: 330, easing: "easeInQuad" },
            { id: "eid1507", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '182deg'}], position: 3015, duration: 0, easing: "easeOutQuad" },
            { id: "eid1644", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid1380", tween: [ "style", "${_LHand}", "top", '-125px', { fromValue: '-125px'}], position: 0, duration: 0 },
            { id: "eid1419", tween: [ "style", "${_teeth2}", "clip", [447.8189392089844,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [512.1583862304688,590,695,0]}], position: 335, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1486", tween: [ "style", "${_teeth2}", "clip", [512.1583862304688,590,695,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [447.8189392089844,590,695,0]}], position: 2850, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1408", tween: [ "style", "${_Group4}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid1432", tween: [ "style", "${_Group4}", "left", '23px', { fromValue: '-1px'}], position: 500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1453", tween: [ "style", "${_Group4}", "left", '-1px', { fromValue: '23px'}], position: 2355, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1372", tween: [ "style", "${_teeth2}", "left", '-88px', { fromValue: '-88px'}], position: 0, duration: 0 },
            { id: "eid1416", tween: [ "style", "${_teeth2}", "left", '-86px', { fromValue: '-88px'}], position: 335, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1485", tween: [ "style", "${_teeth2}", "left", '-88px', { fromValue: '-86px'}], position: 2850, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1393", tween: [ "transform", "${_LUnderarm}", "rotateZ", '122deg', { fromValue: '118deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid1491", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-58deg', { fromValue: '122deg'}], position: 750, duration: 1325, easing: "easeInOutQuad" },
            { id: "eid1508", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '-58deg'}], position: 2685, duration: 330, easing: "easeInQuad" },
            { id: "eid1509", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '118deg'}], position: 3015, duration: 0, easing: "easeOutQuad" },
            { id: "eid1510", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '118deg'}], position: 3015, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1376", tween: [ "style", "${_LUnderarm}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid1397", tween: [ "transform", "${_LHand}", "rotateZ", '5deg', { fromValue: '2deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid1497", tween: [ "transform", "${_LHand}", "rotateZ", '21deg', { fromValue: '5deg'}], position: 750, duration: 1325, easing: "easeInOutQuad" },
            { id: "eid1520", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '21deg'}], position: 2685, duration: 330, easing: "easeInQuad" },
            { id: "eid1521", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 3015, duration: 0, easing: "easeOutQuad" },
            { id: "eid1523", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 3015, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1411", tween: [ "style", "${_Tongue}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid1431", tween: [ "style", "${_Tongue}", "top", '268px', { fromValue: '297px'}], position: 425, duration: 225, easing: "easeInOutQuad" },
            { id: "eid1462", tween: [ "style", "${_Tongue}", "top", '297px', { fromValue: '268px'}], position: 2500, duration: 225, easing: "easeInOutQuad" },
            { id: "eid1365", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1373", tween: [ "style", "${_teeth2Copy}", "left", '-167px', { fromValue: '-167px'}], position: 0, duration: 0 },
            { id: "eid1420", tween: [ "style", "${_teeth2Copy}", "left", '-162px', { fromValue: '-167px'}], position: 335, duration: 165, easing: "easeInOutQuad" },
            { id: "eid1480", tween: [ "style", "${_teeth2Copy}", "left", '-167px', { fromValue: '-162px'}], position: 2805, duration: 210, easing: "easeInOutQuad" },
            { id: "eid1375", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_9": {
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
      id: 'shadow',
      rect: ['165px','284px','138px','38px','auto','auto'],
      transform: [[0,0],[],[],['2.72464','2.47368']],
      fill: ['rgba(0,0,0,0)','images/shadow.svg','0px','0px']
   },
   {
      rect: ['81px','16px','266','313','auto','auto'],
      id: 'Body',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['89px','159px','129px','24px','auto','auto'],
         transform: [[0,0],['-10']],
         id: 'Hair',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(184,184,184,0.00)']
      },
      {
         type: 'image',
         id: 'bg2',
         rect: ['-159px','-184px','590px','695px','auto','auto'],
         transform: [[0,0],[],[],['0.38644','0.38644']],
         fill: ['rgba(0,0,0,0)','images/bg2.svg','0px','0px']
      },
      {
         rect: ['8px','228px','79','15','auto','auto'],
         id: 'Armpit',
         type: 'group',
         transform: [[0,0],[],[],['0.10127']],
         c: [
         {
            type: 'image',
            id: 'hair3',
            rect: ['-78px','-6px','236px','17px','auto','auto'],
            transform: [[0,0],[],[],['0.33475','0.33475']],
            fill: ['rgba(0,0,0,0)','images/hair3.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'hair3Copy',
            rect: ['-78px','-3px','236px','17px','auto','auto'],
            transform: [[0,0],[],[],['0.33475','0.33475']],
            fill: ['rgba(0,0,0,0)','images/hair3.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'hair3Copy2',
            rect: ['-78px','0px','236px','17px','auto','auto'],
            transform: [[0,0],[],[],['0.33475','0.33475']],
            fill: ['rgba(0,0,0,0)','images/hair3.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'hair3Copy3',
            rect: ['-78px','3px','236px','17px','auto','auto'],
            transform: [[0,0],[],[],['0.33475','0.33475']],
            fill: ['rgba(0,0,0,0)','images/hair3.svg','0px','0px']
         }]
      },
      {
         id: 'body',
         type: 'image',
         rect: ['0px','0px','266px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'grip',
         rect: ['140px','162px','43px','155px','auto','auto'],
         transform: [[0,0],['65'],[],['0.89724','0.89724']],
         fill: ['rgba(0,0,0,0)','images/grip.svg','0px','0px']
      },
      {
         rect: ['72px','126','8','94','auto','auto'],
         id: 'RArm',
         type: 'group',
         transform: [[0,0],['246']],
         c: [
         {
            type: 'image',
            id: 'LimbCopy2',
            rect: ['-4px','-24px','17px','125px','auto','auto'],
            transform: [[0,0],[],[],['1','0.78333']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         },
         {
            rect: ['8px','9px','8','94','auto','auto'],
            id: 'RUnderarm',
            type: 'group',
            transform: [[0,0],['-142']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy3',
               rect: ['-12px','-112px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-20px','-125px','39','54','auto','auto'],
               id: 'LHand',
               type: 'group',
               transform: [[0,0],['2']],
               c: [
               {
                  id: 'handCopy',
                  type: 'image',
                  rect: ['0px','0px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         }]
      },
      {
         rect: ['251px','126','8','94px','auto','auto'],
         id: 'LArm',
         type: 'group',
         transform: [[0,0],['167']],
         c: [
         {
            rect: ['-1px','6px','8','94','auto','auto'],
            id: 'LUnderarm',
            type: 'group',
            transform: [[0,0],['138']],
            c: [
            {
               type: 'image',
               id: 'LimbCopy',
               rect: ['-6px','-113px','17px','125px','auto','auto'],
               transform: [[0,0],[],[],['1','0.78333']],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['-14px','-127px','39','54','auto','auto'],
               id: 'RHand',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'hand',
                  type: 'image',
                  rect: ['-3px','1px','39px','54px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/hand.svg','0px','0px']
               }]
            }]
         },
         {
            type: 'image',
            id: 'Limb',
            rect: ['-4px','-39px','18px','136px','auto','auto'],
            transform: [[0,0],[],[],['0.98','0.72']],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '-39px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '136px'],
            ["transform", "scaleX", '0.98'],
            ["style", "-webkit-transform-origin", [47,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '18px']
         ],
         "${_shadow}": [
            ["transform", "scaleX", '2.72464'],
            ["transform", "scaleY", '2.47368'],
            ["style", "left", '165px'],
            ["style", "top", '284px']
         ],
         "${_hair3}": [
            ["transform", "scaleX", '0.33475'],
            ["transform", "scaleY", '0.33475'],
            ["style", "left", '-78px'],
            ["style", "top", '-6px']
         ],
         "${_RArm}": [
            ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '130px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '239deg']
         ],
         "${_LimbCopy3}": [
            ["style", "top", '-112px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-12px'],
            ["style", "width", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '422px']
         ],
         "${_RHand}": [
            ["style", "-webkit-transform-origin", [43,83.38], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,83.38],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '7deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-14px'],
            ["style", "top", '-127px']
         ],
         "${_handCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '54px'],
            ["style", "left", '0px'],
            ["style", "width", '39px']
         ],
         "${_bg2}": [
            ["style", "top", '-184px'],
            ["transform", "scaleY", '0.38644'],
            ["style", "left", '-159px'],
            ["transform", "scaleX", '0.38644']
         ],
         "${_LHand}": [
            ["style", "top", '-125px'],
            ["style", "-webkit-transform-origin", [49.52,87.81], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.52,87.81],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LArm}": [
            ["style", "-webkit-transform-origin", [50,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '182deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '251px'],
            ["transform", "scaleY", '1']
         ],
         "${_grip}": [
            ["style", "top", '162px'],
            ["transform", "scaleY", '0.89724'],
            ["transform", "rotateZ", '65deg'],
            ["style", "height", '155px'],
            ["transform", "scaleX", '0.89724'],
            ["style", "left", '140px'],
            ["style", "width", '43px']
         ],
         "${_RUnderarm}": [
            ["style", "-webkit-transform-origin", [-47,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-47,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '9px'],
            ["style", "left", '8px'],
            ["transform", "rotateZ", '-148deg']
         ],
         "${_LUnderarm}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-1px'],
            ["style", "-webkit-transform-origin", [50,4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,4],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_LimbCopy}": [
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "top", '-113px'],
            ["style", "left", '-6px'],
            ["style", "width", '17px']
         ],
         "${_body}": [
            ["style", "height", '313px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.78333'],
            ["style", "height", '125px'],
            ["style", "-webkit-transform-origin", [50,97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-4px'],
            ["style", "width", '17px']
         ],
         "${_Hair}": [
            ["style", "top", '159px'],
            ["color", "background-color", 'rgba(184,184,184,0)'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_hand}": [
            ["style", "height", '54px'],
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "width", '39px']
         ],
         "${_hair3Copy3}": [
            ["style", "top", '3px'],
            ["transform", "scaleX", '0.33475'],
            ["style", "left", '-78px'],
            ["transform", "scaleY", '0.33475']
         ],
         "${_hair3Copy2}": [
            ["style", "top", '0px'],
            ["style", "left", '-78px'],
            ["transform", "scaleY", '0.33475'],
            ["transform", "scaleX", '0.33475']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [65.61,94.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [65.61,94.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '12px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '80px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Armpit}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-29deg'],
            ["transform", "scaleX", '0.10127'],
            ["style", "left", '8px'],
            ["style", "top", '228px']
         ],
         "${_hair3Copy}": [
            ["transform", "scaleX", '0.33475'],
            ["style", "top", '-3px'],
            ["transform", "scaleY", '0.33475'],
            ["style", "left", '-78px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: false,
         timeline: [
            { id: "eid1561", tween: [ "transform", "${_Armpit}", "scaleX", '1.44913', { fromValue: '0.10127'}], position: 435, duration: 375 },
            { id: "eid1634", tween: [ "transform", "${_Armpit}", "scaleX", '0.10127', { fromValue: '1.44913'}], position: 2145, duration: 375 },
            { id: "eid1646", tween: [ "style", "${_Hair}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
            { id: "eid1537", tween: [ "style", "${_RArm}", "top", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid1533", tween: [ "style", "${_Body}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1542", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '118deg'}], position: 0, duration: 0 },
            { id: "eid1576", tween: [ "transform", "${_LUnderarm}", "rotateZ", '-1deg', { fromValue: '118deg'}], position: 810, duration: 355 },
            { id: "eid1611", tween: [ "transform", "${_LUnderarm}", "rotateZ", '118deg', { fromValue: '-1deg'}], position: 2250, duration: 250 },
            { id: "eid1531", tween: [ "style", "${_RUnderarm}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1529", tween: [ "style", "${_RHand}", "left", '-14px', { fromValue: '-14px'}], position: 0, duration: 0 },
            { id: "eid1536", tween: [ "style", "${_RHand}", "top", '-127px', { fromValue: '-127px'}], position: 0, duration: 0 },
            { id: "eid1528", tween: [ "style", "${_LUnderarm}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid1558", tween: [ "style", "${_Armpit}", "top", '228px', { fromValue: '228px'}], position: 435, duration: 0 },
            { id: "eid1581", tween: [ "transform", "${_LArm}", "scaleY", '1.12999', { fromValue: '1'}], position: 810, duration: 355 },
            { id: "eid1615", tween: [ "transform", "${_LArm}", "scaleY", '1', { fromValue: '1.12999'}], position: 2250, duration: 250 },
            { id: "eid1562", tween: [ "transform", "${_Armpit}", "scaleY", '1', { fromValue: '1'}], position: 435, duration: 0 },
            { id: "eid1577", tween: [ "transform", "${_LArm}", "scaleX", '1', { fromValue: '1'}], position: 810, duration: 0 },
            { id: "eid1538", tween: [ "style", "${_RUnderarm}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid1532", tween: [ "style", "${_LHand}", "left", '-20px', { fromValue: '-20px'}], position: 0, duration: 0 },
            { id: "eid1645", tween: [ "style", "${_Hair}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid1526", tween: [ "style", "${_Body}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid1647", tween: [ "transform", "${_Hair}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 0, duration: 0 },
            { id: "eid1543", tween: [ "transform", "${_RHand}", "rotateZ", '7deg', { fromValue: '7deg'}], position: 0, duration: 0 },
            { id: "eid1587", tween: [ "transform", "${_RHand}", "rotateZ", '32deg', { fromValue: '7deg'}], position: 1165, duration: 130 },
            { id: "eid1589", tween: [ "transform", "${_RHand}", "rotateZ", '-20deg', { fromValue: '32deg'}], position: 1295, duration: 140 },
            { id: "eid1591", tween: [ "transform", "${_RHand}", "rotateZ", '38deg', { fromValue: '-20deg'}], position: 1435, duration: 125 },
            { id: "eid1593", tween: [ "transform", "${_RHand}", "rotateZ", '-22deg', { fromValue: '38deg'}], position: 1560, duration: 145 },
            { id: "eid1594", tween: [ "transform", "${_RHand}", "rotateZ", '-20deg', { fromValue: '32deg'}], position: 1705, duration: 140 },
            { id: "eid1596", tween: [ "transform", "${_RHand}", "rotateZ", '38deg', { fromValue: '-20deg'}], position: 1845, duration: 125 },
            { id: "eid1595", tween: [ "transform", "${_RHand}", "rotateZ", '-22deg', { fromValue: '38deg'}], position: 1970, duration: 145 },
            { id: "eid1527", tween: [ "style", "${_LArm}", "left", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid1552", tween: [ "transform", "${_LArm}", "rotateZ", '154deg', { fromValue: '182deg'}], position: 0, duration: 435 },
            { id: "eid1575", tween: [ "transform", "${_LArm}", "rotateZ", '265deg', { fromValue: '154deg'}], position: 810, duration: 355 },
            { id: "eid1586", tween: [ "transform", "${_LArm}", "rotateZ", '254deg', { fromValue: '265deg'}], position: 1165, duration: 130 },
            { id: "eid1588", tween: [ "transform", "${_LArm}", "rotateZ", '270deg', { fromValue: '254deg'}], position: 1295, duration: 140 },
            { id: "eid1590", tween: [ "transform", "${_LArm}", "rotateZ", '258deg', { fromValue: '270deg'}], position: 1435, duration: 125 },
            { id: "eid1592", tween: [ "transform", "${_LArm}", "rotateZ", '269deg', { fromValue: '258deg'}], position: 1560, duration: 145 },
            { id: "eid1603", tween: [ "transform", "${_LArm}", "rotateZ", '265deg', { fromValue: '269deg'}], position: 1705, duration: 140 },
            { id: "eid1604", tween: [ "transform", "${_LArm}", "rotateZ", '259deg', { fromValue: '265deg'}], position: 1845, duration: 125 },
            { id: "eid1605", tween: [ "transform", "${_LArm}", "rotateZ", '268deg', { fromValue: '259deg'}], position: 1970, duration: 145 },
            { id: "eid1606", tween: [ "transform", "${_LArm}", "rotateZ", '154deg', { fromValue: '268deg'}], position: 2115, duration: 135 },
            { id: "eid1607", tween: [ "transform", "${_LArm}", "rotateZ", '182deg', { fromValue: '154deg'}], position: 2250, duration: 250 },
            { id: "eid1540", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1585", tween: [ "transform", "${_RHand}", "scaleY", '0.75', { fromValue: '1'}], position: 810, duration: 355 },
            { id: "eid1613", tween: [ "transform", "${_RHand}", "scaleY", '1', { fromValue: '0.75'}], position: 2145, duration: 355 },
            { id: "eid1557", tween: [ "style", "${_Armpit}", "left", '8px', { fromValue: '8px'}], position: 435, duration: 0 },
            { id: "eid1539", tween: [ "style", "${_LHand}", "top", '-125px', { fromValue: '-125px'}], position: 0, duration: 0 },
            { id: "eid1563", tween: [ "transform", "${_Armpit}", "rotateZ", '-6deg', { fromValue: '-29deg'}], position: 435, duration: 375 },
            { id: "eid1635", tween: [ "transform", "${_Armpit}", "rotateZ", '-29deg', { fromValue: '-6deg'}], position: 2145, duration: 375 },
            { id: "eid1530", tween: [ "style", "${_RArm}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid1554", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-174deg', { fromValue: '-148deg'}], position: 0, duration: 435 },
            { id: "eid1555", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-141deg', { fromValue: '-174deg'}], position: 435, duration: 175 },
            { id: "eid1569", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-95deg', { fromValue: '-141deg'}], position: 610, duration: 200 },
            { id: "eid1631", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-141deg', { fromValue: '-95deg'}], position: 2145, duration: 200 },
            { id: "eid1630", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-174deg', { fromValue: '-141deg'}], position: 2345, duration: 175 },
            { id: "eid1637", tween: [ "transform", "${_RUnderarm}", "rotateZ", '-148deg', { fromValue: '-174deg'}], position: 2520, duration: 230 },
            { id: "eid1553", tween: [ "transform", "${_RArm}", "rotateZ", '296deg', { fromValue: '239deg'}], position: 0, duration: 435 },
            { id: "eid1556", tween: [ "transform", "${_RArm}", "rotateZ", '317deg', { fromValue: '296deg'}], position: 435, duration: 175 },
            { id: "eid1570", tween: [ "transform", "${_RArm}", "rotateZ", '308deg', { fromValue: '317deg'}], position: 610, duration: 200 },
            { id: "eid1629", tween: [ "transform", "${_RArm}", "rotateZ", '317deg', { fromValue: '308deg'}], position: 2145, duration: 200 },
            { id: "eid1628", tween: [ "transform", "${_RArm}", "rotateZ", '296deg', { fromValue: '317deg'}], position: 2345, duration: 175 },
            { id: "eid1636", tween: [ "transform", "${_RArm}", "rotateZ", '239deg', { fromValue: '296deg'}], position: 2520, duration: 230 },
            { id: "eid1582", tween: [ "transform", "${_LUnderarm}", "scaleY", '1.12999', { fromValue: '1'}], position: 810, duration: 355 },
            { id: "eid1610", tween: [ "transform", "${_LUnderarm}", "scaleY", '1', { fromValue: '1.12999'}], position: 2250, duration: 250 },
            { id: "eid1535", tween: [ "style", "${_LUnderarm}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid1546", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 0, duration: 0 },
            { id: "eid1566", tween: [ "transform", "${_LHand}", "rotateZ", '-61deg', { fromValue: '2deg'}], position: 435, duration: 175 },
            { id: "eid1571", tween: [ "transform", "${_LHand}", "rotateZ", '-105deg', { fromValue: '-61deg'}], position: 610, duration: 200 },
            { id: "eid1633", tween: [ "transform", "${_LHand}", "rotateZ", '-61deg', { fromValue: '-105deg'}], position: 2145, duration: 200 },
            { id: "eid1632", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '-61deg'}], position: 2345, duration: 175 },
            { id: "eid1638", tween: [ "transform", "${_LHand}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 2750, duration: 0 },
            { id: "eid1578", tween: [ "transform", "${_LUnderarm}", "scaleX", '1', { fromValue: '1'}], position: 810, duration: 0 },
            { id: "eid1583", tween: [ "transform", "${_RHand}", "scaleX", '1', { fromValue: '1'}], position: 810, duration: 0 },
            { id: "eid1534", tween: [ "style", "${_LArm}", "top", '128px', { fromValue: '128px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-173344486");
