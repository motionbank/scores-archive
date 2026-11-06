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
            id:'Symbol_4',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_3',
            type:'rect',
            rect:['0','-1','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['60px','248px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         }],
         symbolInstances: [
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
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
         "${_Symbol_3}": [
            ["style", "top", '247px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "left", '60px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '900px'],
            ["style", "width", '1000px']
         ],
         "${_Symbol_2}": [
            ["style", "top", '248px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "left", '62px']
         ],
         "${_Symbol_4}": [
            ["style", "top", '248px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "left", '62px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '248px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "left", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid661", tween: [ "transform", "${_Symbol_3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid868", tween: [ "transform", "${_Symbol_4}", "scaleY", '0.72', { fromValue: '0.72'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid866", tween: [ "transform", "${_Symbol_4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1175", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "transform", "${_Symbol_1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid659", tween: [ "style", "${_Symbol_3}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "style", "${_Symbol_2}", "top", '248px', { fromValue: '248px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Symbol_1}", "top", '248px', { fromValue: '248px'}], position: 0, duration: 0 },
            { id: "eid867", tween: [ "transform", "${_Symbol_4}", "scaleX", '0.72', { fromValue: '0.72'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid654", tween: [ "transform", "${_Symbol_2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid5", tween: [ "style", "${_Symbol_1}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid656", tween: [ "style", "${_Symbol_2}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid660", tween: [ "style", "${_Symbol_3}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
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
      type: 'group',
      id: 'BackLeg',
      rect: ['426px','286px','165','264','auto','auto'],
      transform: [],
      c: [
      {
         id: 'BackLegMid',
         type: 'group',
         rect: ['0','0','145','264','auto','auto'],
         c: [
         {
            id: 'BackFeet',
            type: 'group',
            rect: ['0','228','143','36','auto','auto'],
            c: [
            {
               id: 'LegCopy',
               type: 'image',
               rect: ['0px','0px','143px','36px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'UnterLegCopy',
            type: 'image',
            rect: ['28px','0px','117px','264px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
         }]
      },
      {
         id: 'OberLegCopy',
         type: 'image',
         rect: ['28px','0px','137px','135px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
      }]
   },
   {
      id: 'Shadow',
      type: 'image',
      rect: ['21px','449px','879px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      type: 'group',
      id: 'BodyAll',
      rect: ['0px','153px','879','447','auto','auto'],
      transform: [],
      c: [
      {
         type: 'group',
         id: 'BackArm',
         rect: ['281px','155px','121','254','auto','auto'],
         transform: [],
         c: [
         {
            type: 'group',
            id: 'BackUnterArm',
            rect: ['0','116','119','138','auto','auto'],
            transform: [],
            c: [
            {
               type: 'group',
               id: 'BackPaw',
               rect: ['0px','88px','50','50','auto','auto'],
               transform: [],
               c: [
               {
                  id: 'PawCopy',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArmCopy',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArmCopy',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['195px','0px','472px','360px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         transform: [],
         id: 'Tail',
         type: 'image',
         rect: ['642px','121px','81px','80px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Tail.svg','0px','0px']
      },
      {
         id: 'HeadAll',
         type: 'group',
         rect: ['53px','-153px','304','246','auto','auto'],
         c: [
         {
            transform: [],
            id: 'Ear',
            type: 'image',
            rect: ['184px','0px','88px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            transform: [],
            id: 'Head',
            type: 'image',
            rect: ['2px','33px','302px','211px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
         },
         {
            transform: [],
            id: 'EarCopy',
            type: 'image',
            rect: ['216px','0px','88px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            id: 'Nose',
            type: 'image',
            rect: ['0px','149px','32px','33px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Nose.svg','0px','0px']
         },
         {
            id: 'Eye',
            type: 'image',
            rect: ['76px','90px','27px','39px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
         },
         {
            transform: [],
            id: 'Band',
            type: 'image',
            rect: ['101px','42px','198px','81px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Band.svg','0px','0px']
         }]
      },
      {
         id: 'FrontArm',
         type: 'group',
         rect: ['199px','180px','121','254','auto','auto'],
         c: [
         {
            type: 'group',
            id: 'FrontUnterArm',
            rect: ['0','116','119','138','auto','auto'],
            transform: [],
            c: [
            {
               id: 'FrontPaw',
               type: 'group',
               rect: ['0','88','50','50','auto','auto'],
               c: [
               {
                  id: 'Paw',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArm',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArm',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      }]
   },
   {
      type: 'group',
      id: 'Frontleg',
      rect: ['412px','317px','165','264','auto','auto'],
      transform: [],
      c: [
      {
         id: 'FrontlegMid',
         type: 'group',
         rect: ['0','0','145','264','auto','auto'],
         c: [
         {
            id: 'FrontFeet',
            type: 'group',
            rect: ['0','228','143','36','auto','auto'],
            c: [
            {
               id: 'Leg',
               type: 'image',
               rect: ['0px','0px','143px','36px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'UnterLeg',
            type: 'image',
            rect: ['28px','0px','117px','264px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
         }]
      },
      {
         id: 'OberLeg',
         type: 'image',
         rect: ['28px','0px','137px','135px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nose}": [
            ["style", "left", '0px'],
            ["style", "top", '149px']
         ],
         "${_EarCopy}": [
            ["style", "-webkit-transform-origin", [38.64,80.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '216px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_OberLegCopy}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_OberArm}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_Band}": [
            ["style", "top", '42px'],
            ["style", "left", '101px'],
            ["style", "-webkit-transform-origin", [44.44,77.78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_PawCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Ear}": [
            ["style", "-webkit-transform-origin", [42.05,58.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '184px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackUnterArm}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [87.39,8.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_HeadAll}": [
            ["style", "top", '-153px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterArmCopy}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_Frontleg}": [
            ["style", "top", '317px'],
            ["style", "left", '412px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Eye}": [
            ["style", "top", '90px'],
            ["style", "left", '76px'],
            ["style", "clip", [-4.662959575653076,27,45.114410400390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontArm}": [
            ["style", "-webkit-transform-origin", [82.5,6.06], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '180px'],
            ["style", "left", '199px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackLegMid}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head}": [
            ["style", "top", '33px'],
            ["transform", "skewY", '-0.36deg'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '2px'],
            ["style", "-webkit-transform-origin", [79.14,81.3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FrontUnterArm}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [86.94,11.19], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterLeg}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '624px'],
            ["style", "width", '900px']
         ],
         "${_LegCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Tail}": [
            ["style", "-webkit-transform-origin", [20.99,52.5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '642px'],
            ["style", "top", '121px']
         ],
         "${_BackPaw}": [
            ["style", "top", '88px'],
            ["style", "-webkit-transform-origin", [76,24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontPaw}": [
            ["style", "-webkit-transform-origin", [73.65,25.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '88px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_OberLeg}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_UnterArm}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_BackLeg}": [
            ["style", "top", '286px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '426px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shadow}": [
            ["style", "left", '21px'],
            ["style", "top", '449px']
         ],
         "${_OberArmCopy}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_Paw}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_BodyAll}": [
            ["style", "-webkit-transform-origin", [63.59,63.09], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '153px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackArm}": [
            ["style", "top", '155px'],
            ["style", "-webkit-transform-origin", [83.47,6.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '281px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Body}": [
            ["style", "left", '195px'],
            ["style", "top", '0px']
         ],
         "${_UnterLegCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_BackFeet}": [
            ["style", "top", '228px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2350,
         autoPlay: false,
         timeline: [
            { id: "eid25", tween: [ "transform", "${_Tail}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_FrontPaw}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid36", tween: [ "transform", "${_BackPaw}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 390, duration: 0 },
            { id: "eid16", tween: [ "style", "${_FrontArm}", "top", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "transform", "${_BackFeet}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 390, duration: 0 },
            { id: "eid28", tween: [ "style", "${_BackArm}", "left", '281px', { fromValue: '281px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_Eye}", "clip", [16.011749267578125,27,24.439796447753906,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-4.662959575653076,27,45.114410400390625,0]}], position: 500, duration: 65, easing: "easeInOutQuad" },
            { id: "eid150", tween: [ "style", "${_Eye}", "clip", [-8.064943313598633,27,45.84013366699219,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [16.011749267578125,27,24.439796447753906,0]}], position: 565, duration: 45, easing: "easeInOutQuad" },
            { id: "eid155", tween: [ "style", "${_Eye}", "clip", [16.011749267578125,27,24.439796447753906,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-4.662959575653076,27,45.114410400390625,0]}], position: 925, duration: 65, easing: "easeInOutQuad" },
            { id: "eid156", tween: [ "style", "${_Eye}", "clip", [-8.064943313598633,27,45.84013366699219,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [16.011749267578125,27,24.439796447753906,0]}], position: 990, duration: 45, easing: "easeInOutQuad" },
            { id: "eid161", tween: [ "style", "${_Eye}", "clip", [16.011749267578125,27,24.439796447753906,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-4.662959575653076,27,45.114410400390625,0]}], position: 1500, duration: 65, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "style", "${_Eye}", "clip", [-8.064943313598633,27,45.84013366699219,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [16.011749267578125,27,24.439796447753906,0]}], position: 1565, duration: 45, easing: "easeInOutQuad" },
            { id: "eid167", tween: [ "style", "${_Eye}", "clip", [16.011749267578125,27,24.439796447753906,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-4.662959575653076,27,45.114410400390625,0]}], position: 2030, duration: 65, easing: "easeInOutQuad" },
            { id: "eid168", tween: [ "style", "${_Eye}", "clip", [-8.064943313598633,27,45.84013366699219,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [16.011749267578125,27,24.439796447753906,0]}], position: 2095, duration: 45, easing: "easeInOutQuad" },
            { id: "eid20", tween: [ "style", "${_FrontUnterArm}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid92", tween: [ "style", "${_FrontPaw}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid144", tween: [ "style", "${_Eye}", "left", '76px', { fromValue: '76px'}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9", tween: [ "style", "${_BodyAll}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid133", tween: [ "transform", "${_Ear}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid141", tween: [ "transform", "${_Ear}", "rotateZ", '-43deg', { fromValue: '0deg'}], position: 2140, duration: 110, easing: "easeInOutQuad" },
            { id: "eid143", tween: [ "transform", "${_Ear}", "rotateZ", '0deg', { fromValue: '-43deg'}], position: 2250, duration: 100, easing: "easeInOutQuad" },
            { id: "eid48", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '25deg', { fromValue: '0deg'}], position: 390, duration: 265, easing: "easeInOutQuad" },
            { id: "eid70", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 655, duration: 265, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '25deg', { fromValue: '0deg'}], position: 920, duration: 265, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 1185, duration: 265, easing: "easeInOutQuad" },
            { id: "eid88", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '25deg', { fromValue: '0deg'}], position: 1450, duration: 265, easing: "easeInOutQuad" },
            { id: "eid89", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 1715, duration: 265, easing: "easeInOutQuad" },
            { id: "eid135", tween: [ "style", "${_Ear}", "left", '184px', { fromValue: '184px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid63", tween: [ "transform", "${_HeadAll}", "rotateZ", '-21deg', { fromValue: '0deg'}], position: 0, duration: 390, easing: "easeInOutQuad" },
            { id: "eid129", tween: [ "transform", "${_HeadAll}", "rotateZ", '0deg', { fromValue: '-21deg'}], position: 995, duration: 1040, easing: "easeInOutQuad" },
            { id: "eid32", tween: [ "style", "${_BackUnterArm}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_BackUnterArm}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "transform", "${_FrontArm}", "rotateZ", '84deg', { fromValue: '0deg'}], position: 390, duration: 265, easing: "easeInOutQuad" },
            { id: "eid69", tween: [ "transform", "${_FrontArm}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 655, duration: 265, easing: "easeInOutQuad" },
            { id: "eid74", tween: [ "transform", "${_FrontArm}", "rotateZ", '84deg', { fromValue: '0deg'}], position: 920, duration: 265, easing: "easeInOutQuad" },
            { id: "eid75", tween: [ "transform", "${_FrontArm}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 1185, duration: 265, easing: "easeInOutQuad" },
            { id: "eid84", tween: [ "transform", "${_FrontArm}", "rotateZ", '84deg', { fromValue: '0deg'}], position: 1450, duration: 265, easing: "easeInOutQuad" },
            { id: "eid85", tween: [ "transform", "${_FrontArm}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 1715, duration: 265, easing: "easeInOutQuad" },
            { id: "eid39", tween: [ "style", "${_BackFeet}", "left", '0px', { fromValue: '0px'}], position: 390, duration: 0 },
            { id: "eid31", tween: [ "style", "${_BackArm}", "top", '155px', { fromValue: '155px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_FrontArm}", "left", '199px', { fromValue: '199px'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_BackLegMid}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 390, duration: 0 },
            { id: "eid26", tween: [ "transform", "${_Tail}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_BackPaw}", "left", '0px', { fromValue: '0px'}], position: 390, duration: 0 },
            { id: "eid145", tween: [ "style", "${_Eye}", "top", '90px', { fromValue: '90px'}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid10", tween: [ "style", "${_BodyAll}", "top", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_BackFeet}", "top", '228px', { fromValue: '228px'}], position: 390, duration: 0 },
            { id: "eid21", tween: [ "style", "${_FrontUnterArm}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_HeadAll}", "left", '40px', { fromValue: '53px'}], position: 0, duration: 390, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "style", "${_HeadAll}", "left", '53px', { fromValue: '40px'}], position: 995, duration: 1040, easing: "easeInOutQuad" },
            { id: "eid11", tween: [ "transform", "${_BodyAll}", "rotateZ", '44deg', { fromValue: '0deg'}], position: 0, duration: 390, easing: "easeInOutQuad" },
            { id: "eid131", tween: [ "transform", "${_BodyAll}", "rotateZ", '0deg', { fromValue: '44deg'}], position: 1830, duration: 390, easing: "easeInOutQuad" },
            { id: "eid136", tween: [ "style", "${_EarCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid40", tween: [ "style", "${_BackLeg}", "top", '286px', { fromValue: '286px'}], position: 390, duration: 0 },
            { id: "eid37", tween: [ "style", "${_BackLeg}", "left", '426px', { fromValue: '426px'}], position: 390, duration: 0 },
            { id: "eid33", tween: [ "style", "${_BackPaw}", "top", '88px', { fromValue: '88px'}], position: 390, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_BackUnterArm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid55", tween: [ "transform", "${_BackUnterArm}", "rotateZ", '43deg', { fromValue: '0deg'}], position: 650, duration: 345, easing: "easeInOutQuad" },
            { id: "eid108", tween: [ "transform", "${_BackUnterArm}", "rotateZ", '0deg', { fromValue: '43deg'}], position: 995, duration: 345, easing: "easeInOutQuad" },
            { id: "eid111", tween: [ "transform", "${_BackUnterArm}", "rotateZ", '43deg', { fromValue: '0deg'}], position: 1340, duration: 345, easing: "easeInOutQuad" },
            { id: "eid112", tween: [ "transform", "${_BackUnterArm}", "rotateZ", '0deg', { fromValue: '43deg'}], position: 1685, duration: 345, easing: "easeInOutQuad" },
            { id: "eid137", tween: [ "style", "${_Ear}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid132", tween: [ "transform", "${_EarCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid140", tween: [ "transform", "${_EarCopy}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 2140, duration: 110, easing: "easeInOutQuad" },
            { id: "eid142", tween: [ "transform", "${_EarCopy}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2250, duration: 100, easing: "easeInOutQuad" },
            { id: "eid34", tween: [ "transform", "${_BackArm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "transform", "${_BackArm}", "rotateZ", '89deg', { fromValue: '0deg'}], position: 650, duration: 345, easing: "easeInOutQuad" },
            { id: "eid107", tween: [ "transform", "${_BackArm}", "rotateZ", '0deg', { fromValue: '89deg'}], position: 995, duration: 345, easing: "easeInOutQuad" },
            { id: "eid110", tween: [ "transform", "${_BackArm}", "rotateZ", '89deg', { fromValue: '0deg'}], position: 1340, duration: 345, easing: "easeInOutQuad" },
            { id: "eid109", tween: [ "transform", "${_BackArm}", "rotateZ", '0deg', { fromValue: '89deg'}], position: 1685, duration: 345, easing: "easeInOutQuad" },
            { id: "eid43", tween: [ "transform", "${_BackLeg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 390, duration: 0 },
            { id: "eid65", tween: [ "style", "${_HeadAll}", "top", '-98px', { fromValue: '-153px'}], position: 0, duration: 390, easing: "easeInOutQuad" },
            { id: "eid127", tween: [ "style", "${_HeadAll}", "top", '-153px', { fromValue: '-98px'}], position: 995, duration: 1040, easing: "easeInOutQuad" },
            { id: "eid41", tween: [ "style", "${_BackLegMid}", "top", '0px', { fromValue: '0px'}], position: 390, duration: 0 },
            { id: "eid38", tween: [ "style", "${_BackLegMid}", "left", '0px', { fromValue: '0px'}], position: 390, duration: 0 },
            { id: "eid146", tween: [ "transform", "${_Eye}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid134", tween: [ "style", "${_EarCopy}", "left", '216px', { fromValue: '216px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid49", tween: [ "transform", "${_FrontPaw}", "rotateZ", '-54deg', { fromValue: '0deg'}], position: 390, duration: 265, easing: "easeInOutQuad" },
            { id: "eid71", tween: [ "transform", "${_FrontPaw}", "rotateZ", '0deg', { fromValue: '-54deg'}], position: 655, duration: 265, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "transform", "${_FrontPaw}", "rotateZ", '-54deg', { fromValue: '0deg'}], position: 920, duration: 265, easing: "easeInOutQuad" },
            { id: "eid81", tween: [ "transform", "${_FrontPaw}", "rotateZ", '0deg', { fromValue: '-54deg'}], position: 1185, duration: 265, easing: "easeInOutQuad" },
            { id: "eid90", tween: [ "transform", "${_FrontPaw}", "rotateZ", '-54deg', { fromValue: '0deg'}], position: 1450, duration: 265, easing: "easeInOutQuad" },
            { id: "eid91", tween: [ "transform", "${_FrontPaw}", "rotateZ", '0deg', { fromValue: '-54deg'}], position: 1715, duration: 265, easing: "easeInOutQuad" },
            { id: "eid27", tween: [ "transform", "${_Tail}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "transform", "${_Tail}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 390, duration: 175, easing: "easeInOutQuad" },
            { id: "eid115", tween: [ "transform", "${_Tail}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 565, duration: 185, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "transform", "${_Tail}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 750, duration: 175, easing: "easeInOutQuad" },
            { id: "eid117", tween: [ "transform", "${_Tail}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 925, duration: 185, easing: "easeInOutQuad" },
            { id: "eid118", tween: [ "transform", "${_Tail}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 1110, duration: 175, easing: "easeInOutQuad" },
            { id: "eid119", tween: [ "transform", "${_Tail}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 1285, duration: 185, easing: "easeInOutQuad" },
            { id: "eid120", tween: [ "transform", "${_Tail}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 1470, duration: 175, easing: "easeInOutQuad" },
            { id: "eid121", tween: [ "transform", "${_Tail}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 1645, duration: 185, easing: "easeInOutQuad" },
            { id: "eid122", tween: [ "transform", "${_Tail}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 1830, duration: 175, easing: "easeInOutQuad" },
            { id: "eid123", tween: [ "transform", "${_Tail}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 2005, duration: 185, easing: "easeInOutQuad" }         ]
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
      id: 'Shadow',
      type: 'image',
      rect: ['21px','449px','879px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      type: 'group',
      id: 'BodyAll',
      rect: ['0px','153px','879','447','auto','auto'],
      transform: [],
      c: [
      {
         type: 'group',
         id: 'BackLeg',
         rect: ['426px','133px','165','264','auto','auto'],
         transform: [],
         c: [
         {
            id: 'BackLegMid',
            type: 'group',
            rect: ['0','0','145','264','auto','auto'],
            c: [
            {
               id: 'BackFeet',
               type: 'group',
               rect: ['0','228','143','36','auto','auto'],
               c: [
               {
                  id: 'LegCopy',
                  type: 'image',
                  rect: ['0px','0px','143px','36px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
               }]
            },
            {
               transform: [],
               id: 'UnterLegCopy',
               type: 'image',
               rect: ['28px','0px','117px','264px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
            }]
         },
         {
            id: 'OberLegCopy',
            type: 'image',
            rect: ['28px','0px','137px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'BackArm',
         rect: ['281px','155px','121','254','auto','auto'],
         transform: [],
         c: [
         {
            type: 'group',
            id: 'BackUnterArm',
            rect: ['0','116','119','138','auto','auto'],
            transform: [],
            c: [
            {
               type: 'group',
               id: 'BackPaw',
               rect: ['0px','88px','50','50','auto','auto'],
               transform: [],
               c: [
               {
                  id: 'PawCopy',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArmCopy',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArmCopy',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['195px','0px','472px','360px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         transform: [],
         id: 'Tail',
         type: 'image',
         rect: ['642px','121px','81px','80px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Tail.svg','0px','0px']
      },
      {
         id: 'HeadAll',
         type: 'group',
         rect: ['53px','-153px','304','246','auto','auto'],
         c: [
         {
            transform: [],
            id: 'EarCopy',
            type: 'image',
            rect: ['184px','0px','88px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            transform: [],
            id: 'Head',
            type: 'image',
            rect: ['2px','33px','302px','211px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
         },
         {
            transform: [],
            id: 'Ear',
            type: 'image',
            rect: ['216px','0px','88px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            id: 'Nose',
            type: 'image',
            rect: ['0px','149px','32px','33px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Nose.svg','0px','0px']
         },
         {
            id: 'Eye',
            type: 'image',
            rect: ['76px','90px','27px','39px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
         },
         {
            transform: [],
            id: 'Band',
            type: 'image',
            rect: ['101px','42px','198px','81px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Band.svg','0px','0px']
         }]
      },
      {
         id: 'FrontArm',
         type: 'group',
         rect: ['199px','180px','121','254','auto','auto'],
         c: [
         {
            type: 'group',
            id: 'FrontUnterArm',
            rect: ['0','116','119','138','auto','auto'],
            transform: [],
            c: [
            {
               id: 'FrontPaw',
               type: 'group',
               rect: ['0','88','50','50','auto','auto'],
               c: [
               {
                  id: 'Paw',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArm',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArm',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'Frontleg',
         rect: ['412px','164px','165','264','auto','auto'],
         transform: [],
         c: [
         {
            id: 'FrontlegMid',
            type: 'group',
            rect: ['0','0','145','264','auto','auto'],
            c: [
            {
               id: 'FrontFeet',
               type: 'group',
               rect: ['0','228','143','36','auto','auto'],
               c: [
               {
                  id: 'Leg',
                  type: 'image',
                  rect: ['0px','0px','143px','36px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
               }]
            },
            {
               transform: [],
               id: 'UnterLeg',
               type: 'image',
               rect: ['28px','0px','117px','264px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
            }]
         },
         {
            id: 'OberLeg',
            type: 'image',
            rect: ['28px','0px','137px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nose}": [
            ["style", "left", '0px'],
            ["style", "top", '149px']
         ],
         "${_EarCopy}": [
            ["style", "-webkit-transform-origin", [42.05,58.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '184px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Body}": [
            ["style", "left", '195px'],
            ["style", "top", '0px']
         ],
         "${_FrontlegMid}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [33.67,8.87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_OberArm}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_Band}": [
            ["style", "top", '42px'],
            ["style", "left", '101px'],
            ["style", "-webkit-transform-origin", [44.44,77.78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_PawCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Ear}": [
            ["style", "-webkit-transform-origin", [38.64,80.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '216px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackUnterArm}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [87.39,8.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_HeadAll}": [
            ["style", "top", '-153px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterArmCopy}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_Frontleg}": [
            ["style", "top", '164px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '412px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackLeg}": [
            ["style", "top", '133px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '426px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontArm}": [
            ["style", "-webkit-transform-origin", [82.5,6.06], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '180px'],
            ["style", "left", '199px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackLegMid}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [30.63,6.13], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head}": [
            ["style", "top", '33px'],
            ["transform", "skewY", '-0.36deg'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '2px'],
            ["style", "-webkit-transform-origin", [79.14,81.3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FrontUnterArm}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [86.94,11.19], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterLeg}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FrontFeet}": [
            ["style", "top", '228px'],
            ["style", "-webkit-transform-origin", [86.17,44.53], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LegCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Tail}": [
            ["style", "-webkit-transform-origin", [20.99,52.5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '642px'],
            ["style", "top", '121px']
         ],
         "${_BackPaw}": [
            ["style", "top", '88px'],
            ["style", "-webkit-transform-origin", [76,24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontPaw}": [
            ["style", "-webkit-transform-origin", [73.65,25.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '88px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_OberLeg}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_BackFeet}": [
            ["style", "top", '228px'],
            ["style", "-webkit-transform-origin", [89.52,49.53], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shadow}": [
            ["style", "left", '21px'],
            ["style", "top", '449px']
         ],
         "${_Eye}": [
            ["style", "top", '90px'],
            ["style", "left", '76px'],
            ["style", "clip", [-4.6629600524902,27,45.114410400391,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Paw}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_OberArmCopy}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_Leg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_BodyAll}": [
            ["style", "-webkit-transform-origin", [63.59,63.09], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '153px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackArm}": [
            ["style", "top", '155px'],
            ["style", "-webkit-transform-origin", [83.47,6.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '281px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '624px'],
            ["style", "width", '900px']
         ],
         "${_UnterLegCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_UnterArm}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_OberLegCopy}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1050,
         autoPlay: false,
         timeline: [
            { id: "eid225", tween: [ "style", "${_FrontPaw}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "transform", "${_BackPaw}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid258", tween: [ "transform", "${_BackPaw}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid642", tween: [ "transform", "${_BackPaw}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid643", tween: [ "transform", "${_BackPaw}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid189", tween: [ "style", "${_FrontArm}", "top", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "transform", "${_BackFeet}", "rotateZ", '-28deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid261", tween: [ "transform", "${_BackFeet}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid648", tween: [ "transform", "${_BackFeet}", "rotateZ", '-28deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid649", tween: [ "transform", "${_BackFeet}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "style", "${_BackArm}", "left", '281px', { fromValue: '281px'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_FrontUnterArm}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_FrontPaw}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "transform", "${_FrontlegMid}", "rotateZ", '83deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid252", tween: [ "transform", "${_FrontlegMid}", "rotateZ", '0deg', { fromValue: '83deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid630", tween: [ "transform", "${_FrontlegMid}", "rotateZ", '83deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid631", tween: [ "transform", "${_FrontlegMid}", "rotateZ", '0deg', { fromValue: '83deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid211", tween: [ "style", "${_BodyAll}", "left", '-8px', { fromValue: '0px'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid250", tween: [ "style", "${_BodyAll}", "left", '0px', { fromValue: '-8px'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid650", tween: [ "style", "${_BodyAll}", "left", '-8px', { fromValue: '0px'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid651", tween: [ "style", "${_BodyAll}", "left", '0px', { fromValue: '-8px'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid228", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid255", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid636", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid637", tween: [ "transform", "${_FrontUnterArm}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid180", tween: [ "style", "${_FrontlegMid}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "style", "${_Frontleg}", "left", '412px', { fromValue: '412px'}], position: 0, duration: 0 },
            { id: "eid175", tween: [ "style", "${_BackLeg}", "left", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
            { id: "eid194", tween: [ "style", "${_BackUnterArm}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid182", tween: [ "style", "${_BackUnterArm}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_HeadAll}", "left", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_BackFeet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_BackArm}", "top", '155px', { fromValue: '155px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_FrontArm}", "left", '199px', { fromValue: '199px'}], position: 0, duration: 0 },
            { id: "eid232", tween: [ "transform", "${_BackLegMid}", "rotateZ", '43deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid260", tween: [ "transform", "${_BackLegMid}", "rotateZ", '0deg', { fromValue: '43deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid646", tween: [ "transform", "${_BackLegMid}", "rotateZ", '43deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid647", tween: [ "transform", "${_BackLegMid}", "rotateZ", '0deg', { fromValue: '43deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid192", tween: [ "style", "${_FrontlegMid}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid210", tween: [ "style", "${_BodyAll}", "top", '-162px', { fromValue: '153px'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid249", tween: [ "style", "${_BodyAll}", "top", '153px', { fromValue: '-162px'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid652", tween: [ "style", "${_BodyAll}", "top", '-162px', { fromValue: '153px'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid653", tween: [ "style", "${_BodyAll}", "top", '153px', { fromValue: '-162px'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid197", tween: [ "style", "${_BackFeet}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_FrontUnterArm}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "transform", "${_FrontPaw}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_FrontFeet}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "transform", "${_BackUnterArm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "transform", "${_BackLeg}", "rotateZ", '-85deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid259", tween: [ "transform", "${_BackLeg}", "rotateZ", '0deg', { fromValue: '-85deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid644", tween: [ "transform", "${_BackLeg}", "rotateZ", '-85deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid645", tween: [ "transform", "${_BackLeg}", "rotateZ", '0deg', { fromValue: '-85deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid187", tween: [ "style", "${_BackLeg}", "top", '133px', { fromValue: '133px'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "style", "${_BackPaw}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "style", "${_Frontleg}", "top", '164px', { fromValue: '164px'}], position: 0, duration: 0 },
            { id: "eid188", tween: [ "style", "${_HeadAll}", "top", '-153px', { fromValue: '-153px'}], position: 0, duration: 0 },
            { id: "eid181", tween: [ "style", "${_FrontFeet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "transform", "${_BackArm}", "rotateZ", '84deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid257", tween: [ "transform", "${_BackArm}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid640", tween: [ "transform", "${_BackArm}", "rotateZ", '84deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid641", tween: [ "transform", "${_BackArm}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid212", tween: [ "transform", "${_Frontleg}", "rotateZ", '-81deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid251", tween: [ "transform", "${_Frontleg}", "rotateZ", '0deg', { fromValue: '-81deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid626", tween: [ "transform", "${_Frontleg}", "rotateZ", '-81deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid627", tween: [ "transform", "${_Frontleg}", "rotateZ", '0deg', { fromValue: '-81deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid203", tween: [ "transform", "${_BodyAll}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_BackLegMid}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_BackLegMid}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "transform", "${_HeadAll}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid256", tween: [ "transform", "${_HeadAll}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid638", tween: [ "transform", "${_HeadAll}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid639", tween: [ "transform", "${_HeadAll}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid218", tween: [ "transform", "${_FrontArm}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid254", tween: [ "transform", "${_FrontArm}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 375, duration: 125, easing: "easeInOutQuad" },
            { id: "eid634", tween: [ "transform", "${_FrontArm}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 500, duration: 400, easing: "easeInOutQuad" },
            { id: "eid635", tween: [ "transform", "${_FrontArm}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid217", tween: [ "transform", "${_FrontFeet}", "rotateZ", '-37deg', { fromValue: '0deg'}], position: 0, duration: 375, easing: "easeInOutQuad" },
            { id: "eid253", tween: [ "transform", "${_FrontFeet}", "rotateZ", '0deg', { fromValue: '-37deg'}], position: 375, duration: 150, easing: "easeInOutQuad" },
            { id: "eid632", tween: [ "transform", "${_FrontFeet}", "rotateZ", '-37deg', { fromValue: '0deg'}], position: 525, duration: 375, easing: "easeInOutQuad" },
            { id: "eid633", tween: [ "transform", "${_FrontFeet}", "rotateZ", '0deg', { fromValue: '-37deg'}], position: 900, duration: 150, easing: "easeInOutQuad" },
            { id: "eid183", tween: [ "style", "${_BackPaw}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
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
      id: 'ShadowCopy2',
      type: 'image',
      rect: ['21px','450px','879px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Egg',
      rect: ['126px','-9px','1024px','768px','auto','auto'],
      transform: [[0,0],[],[],['0.13379','0.13379'],['50.0004%','72.6384%']],
      fill: ['rgba(0,0,0,0)','images/Egg.svg','0px','0px']
   },
   {
      rect: ['0px','154px','879','447','auto','auto'],
      id: 'BodyAllCopy2',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['426px','133px','165','264','auto','auto'],
         id: 'BackLegCopy2',
         type: 'group',
         transform: [],
         c: [
         {
            id: 'BackLegMidCopy2',
            type: 'group',
            rect: ['0','0','145','264','auto','auto'],
            c: [
            {
               id: 'BackFeetCopy2',
               type: 'group',
               rect: ['0','228','143','36','auto','auto'],
               c: [
               {
                  id: 'LegCopy5',
                  type: 'image',
                  rect: ['0px','0px','143px','36px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
               }]
            },
            {
               type: 'image',
               id: 'UnterLegCopy5',
               rect: ['28px','0px','117px','264px','auto','auto'],
               transform: [],
               fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
            }]
         },
         {
            id: 'OberLegCopy5',
            type: 'image',
            rect: ['28px','0px','137px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
         }]
      },
      {
         rect: ['281px','155px','121','254','auto','auto'],
         id: 'BackArmCopy2',
         type: 'group',
         transform: [],
         c: [
         {
            rect: ['0','116','119','138','auto','auto'],
            id: 'BackUnterArmCopy2',
            type: 'group',
            transform: [],
            c: [
            {
               rect: ['0px','88px','50','50','auto','auto'],
               id: 'BackPawCopy2',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'PawCopy5',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArmCopy5',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArmCopy5',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         id: 'BodyCopy2',
         type: 'image',
         rect: ['195px','0px','472px','360px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'TailCopy2',
         rect: ['642px','121px','81px','80px','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/Tail.svg','0px','0px']
      },
      {
         id: 'HeadAllCopy2',
         type: 'group',
         rect: ['53px','-153px','304','246','auto','auto'],
         c: [
         {
            type: 'image',
            id: 'EarCopy5',
            rect: ['184px','0px','88px','84px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'HeadCopy2',
            rect: ['2px','33px','302px','211px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'EarCopy4',
            rect: ['216px','0px','88px','84px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            id: 'NoseCopy2',
            type: 'image',
            rect: ['0px','149px','32px','33px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Nose.svg','0px','0px']
         },
         {
            id: 'EyeCopy2',
            type: 'image',
            rect: ['76px','90px','27px','39px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'BandCopy2',
            rect: ['101px','42px','198px','81px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Band.svg','0px','0px']
         }]
      },
      {
         id: 'FrontArmCopy2',
         type: 'group',
         rect: ['199px','180px','121','254','auto','auto'],
         c: [
         {
            rect: ['0','116','119','138','auto','auto'],
            id: 'FrontUnterArmCopy2',
            type: 'group',
            transform: [],
            c: [
            {
               id: 'FrontPawCopy2',
               type: 'group',
               rect: ['0','88','50','50','auto','auto'],
               c: [
               {
                  id: 'PawCopy4',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArmCopy4',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArmCopy4',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         rect: ['412px','164px','165','264','auto','auto'],
         id: 'FrontlegCopy2',
         type: 'group',
         transform: [],
         c: [
         {
            id: 'FrontlegMidCopy2',
            type: 'group',
            rect: ['0','0','145','264','auto','auto'],
            c: [
            {
               id: 'FrontFeetCopy2',
               type: 'group',
               rect: ['0','228','143','36','auto','auto'],
               c: [
               {
                  id: 'LegCopy4',
                  type: 'image',
                  rect: ['0px','0px','143px','36px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
               }]
            },
            {
               type: 'image',
               id: 'UnterLegCopy4',
               rect: ['28px','0px','117px','264px','auto','auto'],
               transform: [],
               fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
            }]
         },
         {
            id: 'OberLegCopy4',
            type: 'image',
            rect: ['28px','0px','137px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_FrontlegMidCopy2}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [33.67,8.87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [33.67,8.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LegCopy4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_FrontArmCopy2}": [
            ["style", "-webkit-transform-origin", [82.5,6.06], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '180px'],
            ["style", "left", '199px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackUnterArmCopy2}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [87.39,8.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BodyAllCopy2}": [
            ["style", "-webkit-transform-origin", [63.59,63.09], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [63.59,63.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '153px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterLegCopy5}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FrontUnterArmCopy2}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [86.94,11.19], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterLegCopy4}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_OberLegCopy5}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_BackFeetCopy2}": [
            ["style", "top", '228px'],
            ["style", "-webkit-transform-origin", [89.52,49.53], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.52,49.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_EarCopy4}": [
            ["style", "-webkit-transform-origin", [38.64,80.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '216px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ShadowCopy2}": [
            ["style", "left", '21px'],
            ["style", "top", '450px']
         ],
         "${_NoseCopy2}": [
            ["style", "left", '0px'],
            ["style", "top", '149px']
         ],
         "${_OberArmCopy4}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_BackPawCopy2}": [
            ["style", "top", '88px'],
            ["style", "-webkit-transform-origin", [76,24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_EarCopy5}": [
            ["style", "-webkit-transform-origin", [42.05,58.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '184px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontPawCopy2}": [
            ["style", "-webkit-transform-origin", [73.65,25.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '88px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '625px'],
            ["style", "width", '900px']
         ],
         "${_OberLegCopy4}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_FrontFeetCopy2}": [
            ["style", "top", '228px'],
            ["style", "-webkit-transform-origin", [86.17,44.53], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.17,44.53],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontlegCopy2}": [
            ["style", "top", '164px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '412px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BodyCopy2}": [
            ["style", "left", '195px'],
            ["style", "top", '0px']
         ],
         "${_TailCopy2}": [
            ["style", "-webkit-transform-origin", [20.99,52.5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '642px'],
            ["style", "top", '121px']
         ],
         "${_BackLegCopy2}": [
            ["style", "top", '133px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '426px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackLegMidCopy2}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [30.63,6.13], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [30.63,6.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Egg}": [
            ["style", "top", '-170px'],
            ["transform", "scaleY", '0.13379'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.13379'],
            ["style", "left", '45px'],
            ["style", "-webkit-transform-origin", [50,72.64], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,72.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,72.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,72.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,72.64],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_OberArmCopy5}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_UnterArmCopy5}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_LegCopy5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_HeadAllCopy2}": [
            ["style", "top", '-153px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BandCopy2}": [
            ["style", "top", '42px'],
            ["style", "left", '101px'],
            ["style", "-webkit-transform-origin", [44.44,77.78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_PawCopy5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_HeadCopy2}": [
            ["style", "top", '33px'],
            ["transform", "skewY", '-0.36deg'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '2px'],
            ["style", "-webkit-transform-origin", [79.14,81.3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_UnterArmCopy4}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_EyeCopy2}": [
            ["style", "top", '90px'],
            ["style", "left", '76px'],
            ["style", "clip", [-4.6629600524902,27,45.114410400391,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackArmCopy2}": [
            ["style", "top", '155px'],
            ["style", "-webkit-transform-origin", [83.47,6.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '281px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_PawCopy4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3085,
         autoPlay: false,
         timeline: [
            { id: "eid730", tween: [ "style", "${_Egg}", "top", '-85px', { fromValue: '-170px'}], position: 0, duration: 415, easing: "easeInOutQuad" },
            { id: "eid728", tween: [ "style", "${_Egg}", "top", '-9px', { fromValue: '-85px'}], position: 805, duration: 195, easing: "easeInOutQuad" },
            { id: "eid820", tween: [ "style", "${_Egg}", "top", '-23px', { fromValue: '-9px'}], position: 1165, duration: 250, easing: "easeInOutQuad" },
            { id: "eid861", tween: [ "style", "${_Egg}", "top", '-60px', { fromValue: '-23px'}], position: 2275, duration: 195, easing: "easeInOutQuad" },
            { id: "eid863", tween: [ "style", "${_Egg}", "top", '-180px', { fromValue: '-60px'}], position: 2470, duration: 615, easing: "easeInOutQuad" },
            { id: "eid680", tween: [ "style", "${_FrontArmCopy2}", "top", '180px', { fromValue: '180px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid707", tween: [ "style", "${_BodyAllCopy2}", "left", '8px', { fromValue: '0px'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid798", tween: [ "style", "${_BodyAllCopy2}", "left", '0px', { fromValue: '8px'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid843", tween: [ "style", "${_BodyAllCopy2}", "left", '8px', { fromValue: '0px'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid844", tween: [ "style", "${_BodyAllCopy2}", "left", '0px', { fromValue: '8px'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid706", tween: [ "style", "${_BodyAllCopy2}", "top", '242px', { fromValue: '153px'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid797", tween: [ "style", "${_BodyAllCopy2}", "top", '153px', { fromValue: '242px'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid841", tween: [ "style", "${_BodyAllCopy2}", "top", '242px', { fromValue: '153px'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid842", tween: [ "style", "${_BodyAllCopy2}", "top", '153px', { fromValue: '242px'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid729", tween: [ "style", "${_Egg}", "left", '123px', { fromValue: '45px'}], position: 0, duration: 415, easing: "easeInOutQuad" },
            { id: "eid727", tween: [ "style", "${_Egg}", "left", '126px', { fromValue: '123px'}], position: 805, duration: 195, easing: "easeInOutQuad" },
            { id: "eid819", tween: [ "style", "${_Egg}", "left", '127px', { fromValue: '126px'}], position: 1165, duration: 250, easing: "easeInOutQuad" },
            { id: "eid860", tween: [ "style", "${_Egg}", "left", '96px', { fromValue: '127px'}], position: 2275, duration: 195, easing: "easeInOutQuad" },
            { id: "eid862", tween: [ "style", "${_Egg}", "left", '49px', { fromValue: '96px'}], position: 2470, duration: 615, easing: "easeInOutQuad" },
            { id: "eid668", tween: [ "style", "${_FrontPawCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid663", tween: [ "style", "${_FrontlegCopy2}", "left", '412px', { fromValue: '412px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid719", tween: [ "transform", "${_HeadAllCopy2}", "rotateZ", '-16deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid742", tween: [ "transform", "${_HeadAllCopy2}", "rotateZ", '0deg', { fromValue: '-16deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid835", tween: [ "transform", "${_HeadAllCopy2}", "rotateZ", '-16deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid836", tween: [ "transform", "${_HeadAllCopy2}", "rotateZ", '0deg', { fromValue: '-16deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid687", tween: [ "style", "${_BackLegCopy2}", "top", '133px', { fromValue: '133px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid681", tween: [ "style", "${_FrontUnterArmCopy2}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid716", tween: [ "transform", "${_FrontArmCopy2}", "rotateZ", '-32deg', { fromValue: '0deg'}], position: 250, duration: 360, easing: "easeInOutQuad" },
            { id: "eid810", tween: [ "transform", "${_FrontArmCopy2}", "rotateZ", '0deg', { fromValue: '-32deg'}], position: 805, duration: 360, easing: "easeInOutQuad" },
            { id: "eid837", tween: [ "transform", "${_FrontArmCopy2}", "rotateZ", '-32deg', { fromValue: '0deg'}], position: 1915, duration: 360, easing: "easeInOutQuad" },
            { id: "eid838", tween: [ "transform", "${_FrontArmCopy2}", "rotateZ", '0deg', { fromValue: '-32deg'}], position: 2470, duration: 360, easing: "easeInOutQuad" },
            { id: "eid696", tween: [ "transform", "${_FrontPawCopy2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid818", tween: [ "transform", "${_Egg}", "rotateZ", '-76deg', { fromValue: '0deg'}], position: 1165, duration: 250, easing: "easeInOutQuad" },
            { id: "eid859", tween: [ "transform", "${_Egg}", "rotateZ", '-132deg', { fromValue: '-76deg'}], position: 2275, duration: 195, easing: "easeInOutQuad" },
            { id: "eid666", tween: [ "style", "${_FrontArmCopy2}", "left", '199px', { fromValue: '199px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid684", tween: [ "style", "${_BackArmCopy2}", "top", '155px', { fromValue: '155px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid672", tween: [ "style", "${_BackPawCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid685", tween: [ "style", "${_BackUnterArmCopy2}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid718", tween: [ "transform", "${_BackArmCopy2}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid815", tween: [ "transform", "${_BackArmCopy2}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid825", tween: [ "transform", "${_BackArmCopy2}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid826", tween: [ "transform", "${_BackArmCopy2}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid732", tween: [ "style", "${_TailCopy2}", "left", '642px', { fromValue: '642px'}], position: 415, duration: 0, easing: "easeInOutQuad" },
            { id: "eid664", tween: [ "style", "${_FrontlegMidCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid705", tween: [ "transform", "${_BodyAllCopy2}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid799", tween: [ "transform", "${_BodyAllCopy2}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid845", tween: [ "transform", "${_BodyAllCopy2}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid846", tween: [ "transform", "${_BodyAllCopy2}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid717", tween: [ "transform", "${_FrontUnterArmCopy2}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 250, duration: 360, easing: "easeInOutQuad" },
            { id: "eid811", tween: [ "transform", "${_FrontUnterArmCopy2}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 805, duration: 360, easing: "easeInOutQuad" },
            { id: "eid839", tween: [ "transform", "${_FrontUnterArmCopy2}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 1915, duration: 360, easing: "easeInOutQuad" },
            { id: "eid840", tween: [ "transform", "${_FrontUnterArmCopy2}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 2470, duration: 360, easing: "easeInOutQuad" },
            { id: "eid710", tween: [ "transform", "${_FrontFeetCopy2}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid809", tween: [ "transform", "${_FrontFeetCopy2}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid853", tween: [ "transform", "${_FrontFeetCopy2}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid854", tween: [ "transform", "${_FrontFeetCopy2}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid673", tween: [ "style", "${_BackLegCopy2}", "left", '426px', { fromValue: '426px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid667", tween: [ "style", "${_FrontUnterArmCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid682", tween: [ "style", "${_FrontPawCopy2}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid699", tween: [ "transform", "${_BackUnterArmCopy2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid689", tween: [ "style", "${_BackFeetCopy2}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid708", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '32deg', { fromValue: '0deg'}], position: 0, duration: 345, easing: "easeInOutQuad" },
            { id: "eid713", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '17deg', { fromValue: '32deg'}], position: 345, duration: 265, easing: "easeInOutQuad" },
            { id: "eid803", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '32deg', { fromValue: '17deg'}], position: 805, duration: 265, easing: "easeInOutQuad" },
            { id: "eid802", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 1070, duration: 345, easing: "easeInOutQuad" },
            { id: "eid847", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '32deg', { fromValue: '0deg'}], position: 1670, duration: 345, easing: "easeInOutQuad" },
            { id: "eid848", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '17deg', { fromValue: '32deg'}], position: 2015, duration: 265, easing: "easeInOutQuad" },
            { id: "eid849", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '32deg', { fromValue: '17deg'}], position: 2475, duration: 265, easing: "easeInOutQuad" },
            { id: "eid850", tween: [ "transform", "${_FrontlegCopy2}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 2740, duration: 345, easing: "easeInOutQuad" },
            { id: "eid703", tween: [ "transform", "${_BackFeetCopy2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid679", tween: [ "style", "${_FrontFeetCopy2}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid671", tween: [ "style", "${_BackUnterArmCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid688", tween: [ "style", "${_BackLegMidCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid720", tween: [ "style", "${_HeadAllCopy2}", "left", '14px', { fromValue: '53px'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid741", tween: [ "style", "${_HeadAllCopy2}", "left", '53px', { fromValue: '14px'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid833", tween: [ "style", "${_HeadAllCopy2}", "left", '14px', { fromValue: '53px'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid834", tween: [ "style", "${_HeadAllCopy2}", "left", '53px', { fromValue: '14px'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid700", tween: [ "transform", "${_BackPawCopy2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid709", tween: [ "transform", "${_FrontlegMidCopy2}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid808", tween: [ "transform", "${_FrontlegMidCopy2}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid851", tween: [ "transform", "${_FrontlegMidCopy2}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid852", tween: [ "transform", "${_FrontlegMidCopy2}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid678", tween: [ "style", "${_FrontlegMidCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid715", tween: [ "transform", "${_BackLegMidCopy2}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid817", tween: [ "transform", "${_BackLegMidCopy2}", "rotateZ", '0deg', { fromValue: '33deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid829", tween: [ "transform", "${_BackLegMidCopy2}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid830", tween: [ "transform", "${_BackLegMidCopy2}", "rotateZ", '0deg', { fromValue: '33deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid670", tween: [ "style", "${_BackArmCopy2}", "left", '281px', { fromValue: '281px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid675", tween: [ "style", "${_BackFeetCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid734", tween: [ "transform", "${_TailCopy2}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 415, duration: 140, easing: "easeInOutQuad" },
            { id: "eid735", tween: [ "transform", "${_TailCopy2}", "rotateZ", '-15deg', { fromValue: '4deg'}], position: 555, duration: 140, easing: "easeInOutQuad" },
            { id: "eid736", tween: [ "transform", "${_TailCopy2}", "rotateZ", '-3deg', { fromValue: '-15deg'}], position: 695, duration: 110, easing: "easeInOutQuad" },
            { id: "eid721", tween: [ "style", "${_HeadAllCopy2}", "top", '-98px', { fromValue: '-153px'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid740", tween: [ "style", "${_HeadAllCopy2}", "top", '-153px', { fromValue: '-98px'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid831", tween: [ "style", "${_HeadAllCopy2}", "top", '-98px', { fromValue: '-153px'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid832", tween: [ "style", "${_HeadAllCopy2}", "top", '-153px', { fromValue: '-98px'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid677", tween: [ "style", "${_FrontlegCopy2}", "top", '164px', { fromValue: '164px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid686", tween: [ "style", "${_BackPawCopy2}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid714", tween: [ "transform", "${_BackLegCopy2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 610, easing: "easeInOutQuad" },
            { id: "eid814", tween: [ "transform", "${_BackLegCopy2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 805, duration: 610, easing: "easeInOutQuad" },
            { id: "eid827", tween: [ "transform", "${_BackLegCopy2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1670, duration: 610, easing: "easeInOutQuad" },
            { id: "eid828", tween: [ "transform", "${_BackLegCopy2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2475, duration: 610, easing: "easeInOutQuad" },
            { id: "eid665", tween: [ "style", "${_FrontFeetCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid733", tween: [ "style", "${_TailCopy2}", "top", '121px', { fromValue: '121px'}], position: 415, duration: 0, easing: "easeInOutQuad" },
            { id: "eid674", tween: [ "style", "${_BackLegMidCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
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
      id: 'ShadowCopy3',
      type: 'image',
      rect: ['21px','449px','879px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      rect: ['0px','153px','879','447','auto','auto'],
      id: 'BodyAllCopy4',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['281px','155px','121','254','auto','auto'],
         id: 'BackArmCopy4',
         type: 'group',
         transform: [],
         c: [
         {
            rect: ['0','116','119','138','auto','auto'],
            id: 'BackUnterArmCopy4',
            type: 'group',
            transform: [],
            c: [
            {
               rect: ['0px','88px','50','50','auto','auto'],
               id: 'BackPawCopy4',
               type: 'group',
               transform: [],
               c: [
               {
                  id: 'PawCopy9',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArmCopy9',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArmCopy9',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         rect: ['426px','133px','165','264','auto','auto'],
         id: 'BackLegCopy4',
         type: 'group',
         transform: [],
         c: [
         {
            id: 'BackLegMidCopy4',
            type: 'group',
            rect: ['0','0','145','264','auto','auto'],
            c: [
            {
               id: 'BackFeetCopy4',
               type: 'group',
               rect: ['0','228','143','36','auto','auto'],
               c: [
               {
                  id: 'LegCopy9',
                  type: 'image',
                  rect: ['0px','0px','143px','36px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
               }]
            },
            {
               type: 'image',
               id: 'UnterLegCopy9',
               rect: ['28px','0px','117px','264px','auto','auto'],
               transform: [],
               fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
            }]
         },
         {
            id: 'OberLegCopy9',
            type: 'image',
            rect: ['28px','0px','137px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
         }]
      },
      {
         id: 'BodyCopy4',
         type: 'image',
         rect: ['195px','0px','472px','360px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'TailCopy4',
         rect: ['642px','121px','81px','80px','auto','auto'],
         transform: [],
         fill: ['rgba(0,0,0,0)','images/Tail.svg','0px','0px']
      },
      {
         id: 'HeadAllCopy4',
         type: 'group',
         rect: ['53px','-153px','304','246','auto','auto'],
         c: [
         {
            type: 'image',
            id: 'EarCopy9',
            rect: ['184px','0px','88px','84px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'HeadCopy4',
            rect: ['2px','33px','302px','211px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'EarCopy8',
            rect: ['216px','0px','88px','84px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Ear.svg','0px','0px']
         },
         {
            id: 'NoseCopy4',
            type: 'image',
            rect: ['0px','149px','32px','33px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Nose.svg','0px','0px']
         },
         {
            id: 'EyeCopy4',
            type: 'image',
            rect: ['76px','90px','27px','39px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'BandCopy4',
            rect: ['101px','42px','198px','81px','auto','auto'],
            transform: [],
            fill: ['rgba(0,0,0,0)','images/Band.svg','0px','0px']
         }]
      },
      {
         id: 'FrontArmCopy4',
         type: 'group',
         rect: ['199px','180px','121','254','auto','auto'],
         c: [
         {
            rect: ['0','116','119','138','auto','auto'],
            id: 'FrontUnterArmCopy4',
            type: 'group',
            transform: [],
            c: [
            {
               id: 'FrontPawCopy4',
               type: 'group',
               rect: ['0','88','50','50','auto','auto'],
               c: [
               {
                  id: 'PawCopy8',
                  type: 'image',
                  rect: ['0px','0px','50px','50px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Paw.svg','0px','0px']
               }]
            },
            {
               id: 'UnterArmCopy8',
               type: 'image',
               rect: ['23px','0px','96px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/UnterArm.svg','0px','0px']
            }]
         },
         {
            id: 'OberArmCopy8',
            type: 'image',
            rect: ['81px','0px','40px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberArm.svg','0px','0px']
         }]
      },
      {
         rect: ['412px','164px','165','264','auto','auto'],
         id: 'FrontlegCopy4',
         type: 'group',
         transform: [],
         c: [
         {
            id: 'FrontlegMidCopy4',
            type: 'group',
            rect: ['0','0','145','264','auto','auto'],
            c: [
            {
               id: 'FrontFeetCopy4',
               type: 'group',
               rect: ['0','228','143','36','auto','auto'],
               c: [
               {
                  id: 'LegCopy8',
                  type: 'image',
                  rect: ['0px','0px','143px','36px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Leg.svg','0px','0px']
               }]
            },
            {
               type: 'image',
               id: 'UnterLegCopy8',
               rect: ['28px','0px','117px','264px','auto','auto'],
               transform: [],
               fill: ['rgba(0,0,0,0)','images/UnterLeg.svg','0px','0px']
            }]
         },
         {
            id: 'OberLegCopy8',
            type: 'image',
            rect: ['28px','0px','137px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/OberLeg.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_UnterLegCopy8}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_ShadowCopy3}": [
            ["style", "left", '21px'],
            ["style", "top", '449px']
         ],
         "${_OberArmCopy9}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_FrontPawCopy4}": [
            ["style", "-webkit-transform-origin", [73.65,25.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.65,25.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '88px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackPawCopy4}": [
            ["style", "top", '88px'],
            ["style", "-webkit-transform-origin", [76,24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [76,24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterArmCopy8}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_FrontFeetCopy4}": [
            ["style", "top", '228px'],
            ["style", "-webkit-transform-origin", [88.65,54.27], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [88.65,54.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [88.65,54.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [88.65,54.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [88.65,54.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_PawCopy8}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_BackLegMidCopy4}": [
            ["style", "top", '7px'],
            ["style", "-webkit-transform-origin", [34,5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [34,5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [34,5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [34,5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [34,5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-3px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_PawCopy9}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EyeCopy4}": [
            ["style", "top", '90px'],
            ["style", "left", '76px'],
            ["style", "clip", [-4.6629600524902,27,45.114410400391,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontUnterArmCopy4}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [86.94,11.19], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.94,11.19],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BodyCopy4}": [
            ["style", "left", '195px'],
            ["style", "top", '0px']
         ],
         "${_FrontArmCopy4}": [
            ["style", "-webkit-transform-origin", [82.5,6.06], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.5,6.06],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '180px'],
            ["style", "left", '199px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackArmCopy4}": [
            ["style", "top", '155px'],
            ["style", "-webkit-transform-origin", [83.47,6.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83.47,6.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '281px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BodyAllCopy4}": [
            ["style", "-webkit-transform-origin", [34.04,43.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [34.04,43.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [34.04,43.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [34.04,43.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [34.04,43.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '153px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UnterLegCopy9}": [
            ["style", "top", '0px'],
            ["style", "left", '28px'],
            ["style", "-webkit-transform-origin", [14.53,6.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.53,6.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '624px'],
            ["style", "width", '900px']
         ],
         "${_NoseCopy4}": [
            ["style", "left", '0px'],
            ["style", "top", '149px']
         ],
         "${_BackFeetCopy4}": [
            ["style", "top", '228px'],
            ["style", "-webkit-transform-origin", [89.54,53.03], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.54,53.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.54,53.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.54,53.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.54,53.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BackLegCopy4}": [
            ["style", "top", '133px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '426px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_OberArmCopy8}": [
            ["style", "left", '81px'],
            ["style", "top", '0px']
         ],
         "${_TailCopy4}": [
            ["style", "-webkit-transform-origin", [20.99,52.5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20.99,52.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '642px'],
            ["style", "top", '121px']
         ],
         "${_BandCopy4}": [
            ["style", "top", '42px'],
            ["style", "left", '101px'],
            ["style", "-webkit-transform-origin", [44.44,77.78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [44.44,77.78],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FrontlegCopy4}": [
            ["style", "top", '164px'],
            ["style", "-webkit-transform-origin", [89.09,44.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [89.09,44.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '412px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_OberLegCopy8}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_HeadAllCopy4}": [
            ["style", "top", '-153px'],
            ["style", "-webkit-transform-origin", [78.04,78.32], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [78.04,78.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [78.04,78.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [78.04,78.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [78.04,78.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FrontlegMidCopy4}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [30.26,7.07], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [30.26,7.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [30.26,7.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [30.26,7.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [30.26,7.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LegCopy9}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EarCopy8}": [
            ["style", "-webkit-transform-origin", [38.64,80.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.64,80.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '216px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LegCopy8}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_OberLegCopy9}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${_UnterArmCopy9}": [
            ["style", "left", '23px'],
            ["style", "top", '0px']
         ],
         "${_BackUnterArmCopy4}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [87.39,8.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [87.39,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_HeadCopy4}": [
            ["style", "top", '33px'],
            ["transform", "skewY", '-0.36deg'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '2px'],
            ["style", "-webkit-transform-origin", [79.14,81.3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [79.14,81.3],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_EarCopy9}": [
            ["style", "-webkit-transform-origin", [42.05,58.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.05,58.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '184px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2065,
         autoPlay: false,
         timeline: [
            { id: "eid912", tween: [ "transform", "${_FrontUnterArmCopy4}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid1010", tween: [ "transform", "${_FrontUnterArmCopy4}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid887", tween: [ "style", "${_FrontPawCopy4}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid929", tween: [ "transform", "${_BackLegMidCopy4}", "rotateZ", '98deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid947", tween: [ "transform", "${_BackLegMidCopy4}", "rotateZ", '120deg', { fromValue: '98deg'}], position: 565, duration: 300, easing: "easeInOutQuad" },
            { id: "eid977", tween: [ "transform", "${_BackLegMidCopy4}", "rotateZ", '138deg', { fromValue: '120deg'}], position: 865, duration: 385, easing: "easeInOutQuad" },
            { id: "eid982", tween: [ "transform", "${_BackLegMidCopy4}", "rotateZ", '98deg', { fromValue: '138deg'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid985", tween: [ "transform", "${_BackLegMidCopy4}", "rotateZ", '0deg', { fromValue: '98deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid920", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 0, duration: 165, easing: "easeInOutQuad" },
            { id: "eid971", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '-193deg', { fromValue: '-9deg'}], position: 165, duration: 260, easing: "easeInOutQuad" },
            { id: "eid948", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '-175deg', { fromValue: '-193deg'}], position: 425, duration: 440, easing: "easeInOutQuad" },
            { id: "eid972", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '-211deg', { fromValue: '-175deg'}], position: 865, duration: 215, easing: "easeInOutQuad" },
            { id: "eid989", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '-193deg', { fromValue: '-211deg'}], position: 1080, duration: 670, easing: "easeInOutQuad" },
            { id: "eid990", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '-9deg', { fromValue: '-193deg'}], position: 1750, duration: 110, easing: "easeInOutQuad" },
            { id: "eid991", tween: [ "transform", "${_FrontlegCopy4}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 1860, duration: 205, easing: "easeInOutQuad" },
            { id: "eid979", tween: [ "style", "${_BackLegMidCopy4}", "top", '7px', { fromValue: '7px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid924", tween: [ "style", "${_HeadAllCopy4}", "left", '17px', { fromValue: '53px'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid1037", tween: [ "style", "${_HeadAllCopy4}", "left", '53px', { fromValue: '17px'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid881", tween: [ "style", "${_BackPawCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid934", tween: [ "transform", "${_BackFeetCopy4}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid945", tween: [ "transform", "${_BackFeetCopy4}", "rotateZ", '-28deg', { fromValue: '-45deg'}], position: 565, duration: 300, easing: "easeInOutQuad" },
            { id: "eid976", tween: [ "transform", "${_BackFeetCopy4}", "rotateZ", '-10deg', { fromValue: '-28deg'}], position: 865, duration: 385, easing: "easeInOutQuad" },
            { id: "eid983", tween: [ "transform", "${_BackFeetCopy4}", "rotateZ", '-45deg', { fromValue: '-10deg'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid986", tween: [ "transform", "${_BackFeetCopy4}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid917", tween: [ "style", "${_FrontlegCopy4}", "left", '412px', { fromValue: '412px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid892", tween: [ "style", "${_BackArmCopy4}", "top", '155px', { fromValue: '155px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid918", tween: [ "style", "${_FrontlegCopy4}", "top", '164px', { fromValue: '164px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid978", tween: [ "style", "${_BackLegMidCopy4}", "left", '-3px', { fromValue: '-3px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid872", tween: [ "style", "${_FrontArmCopy4}", "left", '199px', { fromValue: '199px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid880", tween: [ "style", "${_BackUnterArmCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid907", tween: [ "transform", "${_BackPawCopy4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid885", tween: [ "style", "${_FrontArmCopy4}", "top", '180px', { fromValue: '180px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid876", tween: [ "style", "${_BackLegCopy4}", "left", '426px', { fromValue: '426px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid953", tween: [ "transform", "${_FrontFeetCopy4}", "rotateZ", '-48deg', { fromValue: '0deg'}], position: 0, duration: 425, easing: "easeInOutQuad" },
            { id: "eid954", tween: [ "transform", "${_FrontFeetCopy4}", "rotateZ", '-36deg', { fromValue: '-48deg'}], position: 425, duration: 440, easing: "easeInOutQuad" },
            { id: "eid974", tween: [ "transform", "${_FrontFeetCopy4}", "rotateZ", '-11deg', { fromValue: '-36deg'}], position: 865, duration: 215, easing: "easeInOutQuad" },
            { id: "eid1006", tween: [ "transform", "${_FrontFeetCopy4}", "rotateZ", '-36deg', { fromValue: '-11deg'}], position: 1080, duration: 196, easing: "easeInOutQuad" },
            { id: "eid1005", tween: [ "transform", "${_FrontFeetCopy4}", "rotateZ", '-48deg', { fromValue: '-36deg'}], position: 1276, duration: 401, easing: "easeInOutQuad" },
            { id: "eid1004", tween: [ "transform", "${_FrontFeetCopy4}", "rotateZ", '0deg', { fromValue: '-48deg'}], position: 1677, duration: 388, easing: "easeInOutQuad" },
            { id: "eid911", tween: [ "transform", "${_FrontArmCopy4}", "rotateZ", '122deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid950", tween: [ "transform", "${_FrontArmCopy4}", "rotateZ", '122deg', { fromValue: '122deg'}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1008", tween: [ "transform", "${_FrontArmCopy4}", "rotateZ", '0deg', { fromValue: '122deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid889", tween: [ "style", "${_BackLegCopy4}", "top", '133px', { fromValue: '133px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid894", tween: [ "style", "${_BackPawCopy4}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid921", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '37deg', { fromValue: '0deg'}], position: 0, duration: 146, easing: "easeInOutQuad" },
            { id: "eid970", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '93deg', { fromValue: '37deg'}], position: 146, duration: 230, easing: "easeInOutQuad" },
            { id: "eid949", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '137deg', { fromValue: '93deg'}], position: 376, duration: 389, easing: "easeInOutQuad" },
            { id: "eid973", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '115deg', { fromValue: '137deg'}], position: 765, duration: 190, easing: "easeInOutQuad" },
            { id: "eid975", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '124deg', { fromValue: '115deg'}], position: 955, duration: 150, easing: "easeInOutQuad" },
            { id: "eid999", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '115deg', { fromValue: '124deg'}], position: 1105, duration: 150, easing: "easeInOutQuad" },
            { id: "eid998", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '137deg', { fromValue: '115deg'}], position: 1256, duration: 190, easing: "easeInOutQuad" },
            { id: "eid997", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '93deg', { fromValue: '137deg'}], position: 1446, duration: 389, easing: "easeInOutQuad" },
            { id: "eid996", tween: [ "transform", "${_FrontlegMidCopy4}", "rotateZ", '0deg', { fromValue: '93deg'}], position: 1835, duration: 230, easing: "easeInOutQuad" },
            { id: "eid893", tween: [ "style", "${_BackUnterArmCopy4}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid910", tween: [ "transform", "${_BodyAllCopy4}", "rotateZ", '-123deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid988", tween: [ "transform", "${_BodyAllCopy4}", "rotateZ", '0deg', { fromValue: '-123deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid871", tween: [ "style", "${_FrontFeetCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid873", tween: [ "style", "${_FrontUnterArmCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid906", tween: [ "transform", "${_BackUnterArmCopy4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid914", tween: [ "transform", "${_FrontPawCopy4}", "rotateZ", '-47deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid943", tween: [ "transform", "${_BackArmCopy4}", "rotateZ", '107deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid1126", tween: [ "transform", "${_BackArmCopy4}", "rotateZ", '0deg', { fromValue: '107deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid870", tween: [ "style", "${_FrontlegMidCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid923", tween: [ "transform", "${_HeadAllCopy4}", "rotateZ", '104deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid1038", tween: [ "transform", "${_HeadAllCopy4}", "rotateZ", '0deg', { fromValue: '104deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid869", tween: [ "style", "${_BodyAllCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid933", tween: [ "style", "${_BackFeetCopy4}", "-webkit-transform-origin", [89.54,53.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [89.54,53.03]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1188", tween: [ "style", "${_BackFeetCopy4}", "-moz-transform-origin", [89.54,53.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [89.54,53.03]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1189", tween: [ "style", "${_BackFeetCopy4}", "-ms-transform-origin", [89.54,53.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [89.54,53.03]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1190", tween: [ "style", "${_BackFeetCopy4}", "msTransformOrigin", [89.54,53.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [89.54,53.03]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1191", tween: [ "style", "${_BackFeetCopy4}", "-o-transform-origin", [89.54,53.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [89.54,53.03]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid925", tween: [ "style", "${_HeadAllCopy4}", "top", '-41px', { fromValue: '-153px'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid1036", tween: [ "style", "${_HeadAllCopy4}", "top", '-153px', { fromValue: '-41px'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid891", tween: [ "style", "${_BackFeetCopy4}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid908", tween: [ "style", "${_BodyAllCopy4}", "-webkit-transform-origin", [34.04,43.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34.04,43.7]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1192", tween: [ "style", "${_BodyAllCopy4}", "-moz-transform-origin", [34.04,43.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34.04,43.7]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1193", tween: [ "style", "${_BodyAllCopy4}", "-ms-transform-origin", [34.04,43.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34.04,43.7]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1194", tween: [ "style", "${_BodyAllCopy4}", "msTransformOrigin", [34.04,43.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34.04,43.7]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1195", tween: [ "style", "${_BodyAllCopy4}", "-o-transform-origin", [34.04,43.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34.04,43.7]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid942", tween: [ "style", "${_BackLegMidCopy4}", "-webkit-transform-origin", [34,5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34,5]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1196", tween: [ "style", "${_BackLegMidCopy4}", "-moz-transform-origin", [34,5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34,5]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1197", tween: [ "style", "${_BackLegMidCopy4}", "-ms-transform-origin", [34,5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34,5]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1198", tween: [ "style", "${_BackLegMidCopy4}", "msTransformOrigin", [34,5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34,5]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1199", tween: [ "style", "${_BackLegMidCopy4}", "-o-transform-origin", [34,5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [34,5]}], position: 565, duration: 0, easing: "easeInOutQuad" },
            { id: "eid882", tween: [ "style", "${_BodyAllCopy4}", "top", '153px', { fromValue: '153px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid886", tween: [ "style", "${_FrontUnterArmCopy4}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid884", tween: [ "style", "${_FrontFeetCopy4}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid878", tween: [ "style", "${_BackFeetCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid926", tween: [ "transform", "${_BackLegCopy4}", "rotateZ", '-160deg', { fromValue: '0deg'}], position: 0, duration: 565, easing: "easeInOutQuad" },
            { id: "eid944", tween: [ "transform", "${_BackLegCopy4}", "rotateZ", '-181deg', { fromValue: '-160deg'}], position: 565, duration: 300, easing: "easeInOutQuad" },
            { id: "eid980", tween: [ "transform", "${_BackLegCopy4}", "rotateZ", '-157deg', { fromValue: '-181deg'}], position: 865, duration: 385, easing: "easeInOutQuad" },
            { id: "eid981", tween: [ "transform", "${_BackLegCopy4}", "rotateZ", '-160deg', { fromValue: '-157deg'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid984", tween: [ "transform", "${_BackLegCopy4}", "rotateZ", '0deg', { fromValue: '-160deg'}], position: 1500, duration: 565, easing: "easeInOutQuad" },
            { id: "eid883", tween: [ "style", "${_FrontlegMidCopy4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid879", tween: [ "style", "${_BackArmCopy4}", "left", '281px', { fromValue: '281px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid874", tween: [ "style", "${_FrontPawCopy4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-10352377");
