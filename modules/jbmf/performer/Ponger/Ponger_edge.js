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
            id:'Symbol_1',
            type:'rect',
            rect:['29','219','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_2',
            type:'rect',
            rect:['1','0','auto','auto','auto','auto'],
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
            rect:['-19px','0px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_5',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'Symbol_5',
            symbolName:'Symbol_5'
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
            ["style", "top", '359px'],
            ["style", "left", '10px']
         ],
         "${_Symbol_5}": [
            ["style", "top", '359px'],
            ["style", "left", '10px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '600px'],
            ["style", "width", '550px']
         ],
         "${_Symbol_2}": [
            ["style", "left", '10px'],
            ["style", "top", '359px']
         ],
         "${_Symbol_1}": [
            ["style", "left", '29px'],
            ["style", "top", '359px']
         ],
         "${_Symbol_4}": [
            ["style", "left", '10px'],
            ["style", "top", '359px']
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
            { id: "eid468", tween: [ "style", "${_Symbol_2}", "top", '359px', { fromValue: '359px'}], position: 0, duration: 0 },
            { id: "eid419", tween: [ "style", "${_Symbol_5}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid467", tween: [ "style", "${_Symbol_5}", "top", '359px', { fromValue: '359px'}], position: 0, duration: 0 },
            { id: "eid469", tween: [ "style", "${_Symbol_3}", "top", '359px', { fromValue: '359px'}], position: 0, duration: 0 },
            { id: "eid471", tween: [ "style", "${_Symbol_4}", "top", '359px', { fromValue: '359px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Symbol_2}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid316", tween: [ "style", "${_Symbol_3}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid317", tween: [ "style", "${_Symbol_1}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid470", tween: [ "style", "${_Symbol_1}", "top", '359px', { fromValue: '359px'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_Symbol_4}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeOutQuad" }         ]
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
      rect: ['66px','72px','307px','100px','auto','auto'],
      id: 'Shadow2',
      transform: [[],[],[],['0.75924','0.75924']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      id: 'Ponger',
      type: 'group',
      rect: ['148','0','182','149','auto','auto'],
      c: [
      {
         rect: ['121px','68px','61','12','auto','auto'],
         id: 'LArms',
         type: 'group',
         transform: [],
         c: [
         {
            rect: ['50px','0','61','12','auto','auto'],
            id: 'UArm',
            type: 'group',
            transform: [],
            c: [
            {
               id: 'LimbCopy',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['58px','-12px','101','35','auto','auto'],
               id: 'Group5',
               type: 'group',
               transform: [],
               c: [
               {
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  id: 'Racket',
                  transform: [],
                  type: 'image',
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'Hand',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            rect: ['0px','0px','61px','12px','auto','auto'],
            id: 'Limb',
            transform: [],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['48px','68px','61','12','auto','auto'],
         id: 'RArms',
         type: 'group',
         transform: [[],['-180']],
         c: [
         {
            rect: ['50px','0','61','12','auto','auto'],
            id: 'UArmCopy',
            type: 'group',
            transform: [],
            c: [
            {
               id: 'LimbCopy3',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['58px','-12px','101','35','auto','auto'],
               id: 'Group5Copy',
               type: 'group',
               transform: [],
               c: [
               {
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  id: 'RacketCopy',
                  transform: [[],[],[],['1','-1']],
                  type: 'image',
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            rect: ['0px','0px','61px','12px','auto','auto'],
            id: 'LimbCopy2',
            transform: [],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         id: 'Group3',
         type: 'group',
         rect: ['143px','73px','20','20','auto','auto'],
         c: [
         {
            id: 'Ball',
            type: 'image',
            rect: ['-68px','-18px','20px','20px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ball.svg','0px','0px']
         }]
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['5px','0px','127px','149px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'LEye',
         type: 'group',
         rect: ['87px','28px','25','25','auto','auto'],
         c: [
         {
            id: 'Eyeball',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'Pupil',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      },
      {
         rect: ['72px','5px','25px','25px','auto','auto'],
         id: 'UEye',
         type: 'group',
         transform: [],
         c: [
         {
            id: 'EyeballCopy',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Limb}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Group3}": [
            ["style", "top", '73px'],
            ["style", "left", '143px']
         ],
         "${_HandCopy}": [
            ["style", "height", '20px'],
            ["style", "top", '-4px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_Pupil}": [
            ["style", "top", '7px'],
            ["style", "height", '12px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_Shadow2}": [
            ["style", "top", '72px'],
            ["transform", "scaleX", '0.75924'],
            ["transform", "scaleY", '0.75924'],
            ["style", "left", '66px']
         ],
         "${_Eyeball}": [
            ["style", "top", '0px'],
            ["style", "height", '25px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_EyeballCopy}": [
            ["style", "height", '25px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Group5Copy}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_RacketCopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '-1'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_LArms}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '101px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group5}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_Ball}": [
            ["transform", "scaleY", '1'],
            ["style", "height", '20px'],
            ["motion", "location", '-57.816669689942px -7.8600463867188px'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '1'],
            ["style", "width", '20px']
         ],
         "${_LimbCopy}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_UEye}": [
            ["style", "top", '5px'],
            ["style", "left", '72px']
         ],
         "${_PupilCopy}": [
            ["style", "height", '12px'],
            ["style", "top", '7px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '478px']
         ],
         "${_LEye}": [
            ["style", "left", '87px'],
            ["style", "top", '28px']
         ],
         "${_UArm}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Hand}": [
            ["style", "top", '-4px'],
            ["style", "height", '20px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_Body}": [
            ["style", "top", '0px'],
            ["style", "height", '149px'],
            ["style", "left", '5px'],
            ["style", "width", '127px']
         ],
         "${_LimbCopy2}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_RArms}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '28px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${_UArmCopy}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Racket}": [
            ["style", "top", '0px'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_LimbCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2115,
         autoPlay: false,
         timeline: [
            { id: "eid10", tween: [ "style", "${_PupilCopy}", "top", '9px', { fromValue: '7px'}], position: 0, duration: 231, easing: "easeInOutQuad" },
            { id: "eid18", tween: [ "style", "${_PupilCopy}", "top", '6px', { fromValue: '9px'}], position: 231, duration: 153, easing: "easeInOutQuad" },
            { id: "eid19", tween: [ "style", "${_PupilCopy}", "top", '2px', { fromValue: '6px'}], position: 384, duration: 211, easing: "easeInOutQuad" },
            { id: "eid25", tween: [ "style", "${_PupilCopy}", "top", '8px', { fromValue: '2px'}], position: 594, duration: 293, easing: "easeInOutQuad" },
            { id: "eid45", tween: [ "style", "${_PupilCopy}", "top", '0px', { fromValue: '8px'}], position: 887, duration: 375, easing: "easeInOutQuad" },
            { id: "eid52", tween: [ "style", "${_PupilCopy}", "top", '7px', { fromValue: '0px'}], position: 1262, duration: 377, easing: "easeInOutQuad" },
            { id: "eid37", tween: [ "transform", "${_UArmCopy}", "rotateZ", '28deg', { fromValue: '0deg'}], position: 887, duration: 111 },
            { id: "eid43", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '28deg'}], position: 1389, duration: 111 },
            { id: "eid462", tween: [ "style", "${_Ball}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 115, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "transform", "${_LArms}", "rotateZ", '-37deg', { fromValue: '0deg'}], position: 325, duration: 222, easing: "easeInOutQuad" },
            { id: "eid30", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-37deg'}], position: 1040, duration: 153, easing: "easeInOutQuad" },
            { id: "eid65", tween: [ "style", "${_RArms}", "left", '28px', { fromValue: '28px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "style", "${_LArms}", "left", '101px', { fromValue: '101px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid15", tween: [ "transform", "${_UArm}", "rotateZ", '-59deg', { fromValue: '0deg'}], position: 231, duration: 140, easing: "easeInOutQuad" },
            { id: "eid31", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '-59deg'}], position: 1122, duration: 140, easing: "easeInOutQuad" },
            { id: "eid460", tween: [ "transform", "${_Ball}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_PupilCopy}", "left", '13px', { fromValue: '7px'}], position: 0, duration: 231, easing: "easeInOutQuad" },
            { id: "eid20", tween: [ "style", "${_PupilCopy}", "left", '2px', { fromValue: '13px'}], position: 231, duration: 364, easing: "easeInOutQuad" },
            { id: "eid26", tween: [ "style", "${_PupilCopy}", "left", '1px', { fromValue: '2px'}], position: 594, duration: 293, easing: "easeInOutQuad" },
            { id: "eid46", tween: [ "style", "${_PupilCopy}", "left", '5px', { fromValue: '1px'}], position: 887, duration: 375, easing: "easeInOutQuad" },
            { id: "eid51", tween: [ "style", "${_PupilCopy}", "left", '13px', { fromValue: '5px'}], position: 1262, duration: 377, easing: "easeInOutQuad" },
            { id: "eid53", tween: [ "style", "${_PupilCopy}", "left", '7px', { fromValue: '13px'}], position: 1639, duration: 251, easing: "easeInQuad" },
            { id: "eid2", tween: [ "motion", "${_Ball}", [[-57.82,-7.86,0,0],[108.52,-7.86,35.5,0,148.54,0],[131.96,-7.86,9.14,0]]], position: 0, duration: 240, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "motion", "${_Ball}", [[131.96,-7.86,2.4,0],[133.18,-7.86,0,0,0,0],[133.28,-8.38,2.05,-11.69,0.18,-1.03],[120.55,-62.54,-66.66,-98.75,-50.86,-75.32],[-21.28,-140.59,-212.34,-28.33]]], position: 240, duration: 232 },
            { id: "eid59", tween: [ "motion", "${_Ball}", [[-21.28,-140.59,-35.19,-4.69],[-58.25,-142.99,-557.85,0.36,-38.74,0.03],[-273.34,-6.86,0,0]]], position: 472, duration: 415, easing: "easeInQuad" },
            { id: "eid33", tween: [ "motion", "${_Ball}", [[-273.34,-6.86,0,0],[-68.82,-151.56,506.45,-5.88]]], position: 887, duration: 375 },
            { id: "eid34", tween: [ "motion", "${_Ball}", [[-68.82,-151.56,581.56,-6.75],[138.98,-8.86,0,0]]], position: 1262, duration: 377, easing: "easeInQuad" },
            { id: "eid44", tween: [ "motion", "${_Ball}", [[138.98,-8.86,0,0],[-67.82,-8.86,0,0]]], position: 1639, duration: 476, easing: "easeInOutQuad" },
            { id: "eid8", tween: [ "style", "${_Pupil}", "top", '8px', { fromValue: '7px'}], position: 0, duration: 231, easing: "easeInOutQuad" },
            { id: "eid17", tween: [ "style", "${_Pupil}", "top", '5px', { fromValue: '8px'}], position: 231, duration: 153, easing: "easeInOutQuad" },
            { id: "eid22", tween: [ "style", "${_Pupil}", "top", '1px', { fromValue: '5px'}], position: 384, duration: 211, easing: "easeInOutQuad" },
            { id: "eid24", tween: [ "style", "${_Pupil}", "top", '7px', { fromValue: '1px'}], position: 594, duration: 293, easing: "easeInOutQuad" },
            { id: "eid47", tween: [ "style", "${_Pupil}", "top", '0px', { fromValue: '7px'}], position: 887, duration: 375, easing: "easeInOutQuad" },
            { id: "eid49", tween: [ "style", "${_Pupil}", "top", '7px', { fromValue: '0px'}], position: 1262, duration: 377, easing: "easeInOutQuad" },
            { id: "eid7", tween: [ "style", "${_Pupil}", "left", '13px', { fromValue: '7px'}], position: 0, duration: 231, easing: "easeInOutQuad" },
            { id: "eid21", tween: [ "style", "${_Pupil}", "left", '2px', { fromValue: '13px'}], position: 231, duration: 364, easing: "easeInOutQuad" },
            { id: "eid23", tween: [ "style", "${_Pupil}", "left", '1px', { fromValue: '2px'}], position: 594, duration: 293, easing: "easeInOutQuad" },
            { id: "eid48", tween: [ "style", "${_Pupil}", "left", '6px', { fromValue: '1px'}], position: 887, duration: 375, easing: "easeInOutQuad" },
            { id: "eid50", tween: [ "style", "${_Pupil}", "left", '13px', { fromValue: '6px'}], position: 1262, duration: 377, easing: "easeInOutQuad" },
            { id: "eid57", tween: [ "style", "${_Pupil}", "left", '7px', { fromValue: '13px'}], position: 1639, duration: 251, easing: "easeInOutQuad" },
            { id: "eid35", tween: [ "transform", "${_RArms}", "rotateZ", '-171deg', { fromValue: '-180deg'}], position: 887, duration: 60 },
            { id: "eid42", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-171deg'}], position: 1500, duration: 60 },
            { id: "eid459", tween: [ "transform", "${_Ball}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" }         ]
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
      transform: [[0,0],[],[],['0.75924','0.75924']],
      id: 'Shadow2',
      type: 'image',
      rect: ['83px','72px','307px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      id: 'Ponger',
      type: 'group',
      rect: ['147px','0px','182','149','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'LArms',
         rect: ['121px','68px','61','12','auto','auto'],
         transform: [],
         c: [
         {
            type: 'group',
            id: 'UArmCopy',
            rect: ['50px','0','61','12','auto','auto'],
            transform: [],
            c: [
            {
               id: 'LimbCopy3',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               type: 'group',
               id: 'Group5Copy',
               rect: ['58px','-12px','101','35','auto','auto'],
               transform: [],
               c: [
               {
                  transform: [],
                  id: 'RacketCopy',
                  type: 'image',
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'LimbCopy2',
            type: 'image',
            rect: ['0px','0px','61px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'RArms',
         rect: ['48px','68px','61','12','auto','auto'],
         transform: [[0,0],['-180']],
         c: [
         {
            type: 'group',
            id: 'UArm',
            rect: ['50px','0','61','12','auto','auto'],
            transform: [],
            c: [
            {
               id: 'LimbCopy',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               type: 'group',
               id: 'Group5',
               rect: ['58px','-12px','101','35','auto','auto'],
               transform: [],
               c: [
               {
                  transform: [[0,0],[],[],['1','-1']],
                  id: 'Racket',
                  type: 'image',
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'Hand',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'Limb',
            type: 'image',
            rect: ['0px','0px','61px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         id: 'Ball',
         type: 'image',
         rect: ['83px','47px','20px','20px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Ball.svg','0px','0px']
      },
      {
         id: 'BallCopy',
         type: 'image',
         rect: ['83px','47px','20px','20px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Ball.svg','0px','0px']
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['25px','0px','127px','149px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'LEye',
         type: 'group',
         rect: ['107px','28px','25','25','auto','auto'],
         c: [
         {
            id: 'EyeballCopy',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'UEye',
         rect: ['92px','5px','25px','25px','auto','auto'],
         transform: [],
         c: [
         {
            id: 'Eyeball',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'Pupil',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Hand}": [
            ["style", "height", '20px'],
            ["style", "top", '-4px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_BallCopy}": [
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '20px'],
            ["style", "opacity", '1'],
            ["motion", "location", '89.400001525879px 57px'],
            ["style", "width", '20px']
         ],
         "${_Ponger}": [
            ["style", "left", '147px'],
            ["style", "top", '0px']
         ],
         "${_RArms}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '48px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${_Pupil}": [
            ["style", "height", '12px'],
            ["style", "top", '7px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_Shadow2}": [
            ["transform", "scaleX", '0.75924'],
            ["style", "left", '83px'],
            ["transform", "scaleY", '0.75924'],
            ["style", "top", '72px']
         ],
         "${_Eyeball}": [
            ["style", "height", '25px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_EyeballCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '25px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Group5Copy}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_RacketCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_LimbCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Group5}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_Ball}": [
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["motion", "location", '89.400001525879px 57px'],
            ["style", "opacity", '1'],
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '477px']
         ],
         "${_UEye}": [
            ["style", "top", '5px'],
            ["style", "left", '92px']
         ],
         "${_Body}": [
            ["style", "top", '0px'],
            ["style", "height", '149px'],
            ["style", "left", '25px'],
            ["style", "width", '127px']
         ],
         "${_Limb}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_LEye}": [
            ["style", "left", '107px'],
            ["style", "top", '28px']
         ],
         "${_UArm}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LimbCopy3}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_HandCopy}": [
            ["style", "top", '-4px'],
            ["style", "height", '20px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_UArmCopy}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LArms}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '121px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Racket}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '-1'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_PupilCopy}": [
            ["style", "top", '7px'],
            ["style", "height", '12px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
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
            { id: "eid234", tween: [ "style", "${_PupilCopy}", "top", '8px', { fromValue: '7px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid240", tween: [ "style", "${_PupilCopy}", "top", '1px', { fromValue: '8px'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid241", tween: [ "style", "${_PupilCopy}", "top", '7px', { fromValue: '1px'}], position: 750, duration: 210, easing: "easeOutQuad" },
            { id: "eid249", tween: [ "style", "${_PupilCopy}", "top", '1px', { fromValue: '8px'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid250", tween: [ "style", "${_PupilCopy}", "top", '7px', { fromValue: '1px'}], position: 1500, duration: 210, easing: "easeOutQuad" },
            { id: "eid257", tween: [ "style", "${_PupilCopy}", "top", '1px', { fromValue: '8px'}], position: 1790, duration: 500, easing: "easeOutQuad" },
            { id: "eid258", tween: [ "style", "${_PupilCopy}", "top", '7px', { fromValue: '1px'}], position: 2290, duration: 210, easing: "easeOutQuad" },
            { id: "eid262", tween: [ "style", "${_PupilCopy}", "top", '7px', { fromValue: '7px'}], position: 2690, duration: 0, easing: "easeOutQuad" },
            { id: "eid457", tween: [ "transform", "${_BallCopy}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid239", tween: [ "style", "${_Pupil}", "top", '8px', { fromValue: '7px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid238", tween: [ "style", "${_Pupil}", "top", '1px', { fromValue: '8px'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid242", tween: [ "style", "${_Pupil}", "top", '8px', { fromValue: '1px'}], position: 750, duration: 210, easing: "easeOutQuad" },
            { id: "eid245", tween: [ "style", "${_Pupil}", "top", '1px', { fromValue: '8px'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid246", tween: [ "style", "${_Pupil}", "top", '8px', { fromValue: '1px'}], position: 1500, duration: 210, easing: "easeOutQuad" },
            { id: "eid253", tween: [ "style", "${_Pupil}", "top", '1px', { fromValue: '8px'}], position: 1790, duration: 500, easing: "easeOutQuad" },
            { id: "eid254", tween: [ "style", "${_Pupil}", "top", '8px', { fromValue: '1px'}], position: 2290, duration: 210, easing: "easeOutQuad" },
            { id: "eid260", tween: [ "style", "${_Pupil}", "top", '8px', { fromValue: '8px'}], position: 2690, duration: 0, easing: "easeOutQuad" },
            { id: "eid466", tween: [ "style", "${_Ball}", "opacity", '0', { fromValue: '1'}], position: 2625, duration: 65, easing: "easeOutQuad" },
            { id: "eid464", tween: [ "style", "${_BallCopy}", "opacity", '0', { fromValue: '1'}], position: 2630, duration: 60, easing: "easeOutQuad" },
            { id: "eid231", tween: [ "style", "${_PupilCopy}", "left", '13px', { fromValue: '7px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid235", tween: [ "style", "${_PupilCopy}", "left", '12px', { fromValue: '13px'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid237", tween: [ "style", "${_PupilCopy}", "left", '13px', { fromValue: '12px'}], position: 750, duration: 210, easing: "easeOutQuad" },
            { id: "eid247", tween: [ "style", "${_PupilCopy}", "left", '12px', { fromValue: '13px'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid248", tween: [ "style", "${_PupilCopy}", "left", '13px', { fromValue: '12px'}], position: 1500, duration: 210, easing: "easeOutQuad" },
            { id: "eid255", tween: [ "style", "${_PupilCopy}", "left", '12px', { fromValue: '13px'}], position: 1790, duration: 500, easing: "easeOutQuad" },
            { id: "eid256", tween: [ "style", "${_PupilCopy}", "left", '13px', { fromValue: '12px'}], position: 2290, duration: 210, easing: "easeOutQuad" },
            { id: "eid261", tween: [ "style", "${_PupilCopy}", "left", '7px', { fromValue: '13px'}], position: 2500, duration: 190, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "transform", "${_RArms}", "rotateZ", '-168deg', { fromValue: '-180deg'}], position: 250, duration: 130, easing: "easeOutQuad" },
            { id: "eid108", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-168deg'}], position: 785, duration: 130, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "transform", "${_RArms}", "rotateZ", '-168deg', { fromValue: '-180deg'}], position: 1000, duration: 130, easing: "easeOutQuad" },
            { id: "eid115", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-168deg'}], position: 1535, duration: 130, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "transform", "${_RArms}", "rotateZ", '-168deg', { fromValue: '-180deg'}], position: 1750, duration: 130, easing: "easeOutQuad" },
            { id: "eid123", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-168deg'}], position: 2285, duration: 130, easing: "easeOutQuad" },
            { id: "eid230", tween: [ "style", "${_Pupil}", "left", '2px', { fromValue: '7px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid233", tween: [ "style", "${_Pupil}", "left", '3px', { fromValue: '2px'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid236", tween: [ "style", "${_Pupil}", "left", '1px', { fromValue: '3px'}], position: 750, duration: 210, easing: "easeOutQuad" },
            { id: "eid243", tween: [ "style", "${_Pupil}", "left", '3px', { fromValue: '2px'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid244", tween: [ "style", "${_Pupil}", "left", '1px', { fromValue: '3px'}], position: 1500, duration: 210, easing: "easeOutQuad" },
            { id: "eid251", tween: [ "style", "${_Pupil}", "left", '3px', { fromValue: '2px'}], position: 1790, duration: 500, easing: "easeOutQuad" },
            { id: "eid252", tween: [ "style", "${_Pupil}", "left", '1px', { fromValue: '3px'}], position: 2290, duration: 210, easing: "easeOutQuad" },
            { id: "eid259", tween: [ "style", "${_Pupil}", "left", '7px', { fromValue: '1px'}], position: 2500, duration: 190, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "motion", "${_Ball}", [[89.4,57,0,0],[295.37,57,0,0]]], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid80", tween: [ "motion", "${_Ball}", [[295.37,57,0,0],[295.37,-103,0,0]]], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "motion", "${_Ball}", [[295.37,-103,0,0],[295.37,57,0,0]]], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "motion", "${_Ball}", [[295.37,57,0,0],[295.37,-103,0,0]]], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "motion", "${_Ball}", [[295.37,-103,0,0],[295.37,57,0,0]]], position: 1500, duration: 250, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "motion", "${_Ball}", [[295.37,57,0,0],[295.37,-103,0,0]]], position: 1750, duration: 500, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "motion", "${_Ball}", [[295.37,-103,0,0],[295.37,57,0,0]]], position: 2250, duration: 250, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "motion", "${_Ball}", [[295.37,57,0,0],[85.37,57,0,0]]], position: 2500, duration: 190, easing: "easeOutQuad" },
            { id: "eid456", tween: [ "transform", "${_Ball}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "motion", "${_BallCopy}", [[89.4,57,0,0],[-113.55,57,0,0]]], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid79", tween: [ "motion", "${_BallCopy}", [[-113.55,57,0,0],[-113.55,-103,0,0]]], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "motion", "${_BallCopy}", [[-113.55,-103,0,0],[-113.55,57,0,0]]], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "motion", "${_BallCopy}", [[-113.55,57,0,0],[-113.55,-103,0,0]]], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "motion", "${_BallCopy}", [[-113.55,-103,0,0],[-113.55,57,0,0]]], position: 1500, duration: 250, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "motion", "${_BallCopy}", [[-113.55,57,0,0],[-113.55,-103,0,0]]], position: 1750, duration: 500, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "motion", "${_BallCopy}", [[-113.55,-103,0,0],[-113.55,57,0,0]]], position: 2250, duration: 250, easing: "easeOutQuad" },
            { id: "eid132", tween: [ "motion", "${_BallCopy}", [[-113.55,57,0,0],[76.5,57,0,0]]], position: 2500, duration: 190, easing: "easeOutQuad" },
            { id: "eid105", tween: [ "transform", "${_UArm}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 250, duration: 300, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '27deg'}], position: 615, duration: 300, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "transform", "${_UArm}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 1000, duration: 300, easing: "easeOutQuad" },
            { id: "eid116", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '27deg'}], position: 1365, duration: 300, easing: "easeOutQuad" },
            { id: "eid125", tween: [ "transform", "${_UArm}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 1750, duration: 300, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '27deg'}], position: 2115, duration: 300, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "transform", "${_UArmCopy}", "rotateZ", '-34deg', { fromValue: '0deg'}], position: 315, duration: 300, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '-34deg'}], position: 660, duration: 300, easing: "easeOutQuad" },
            { id: "eid120", tween: [ "transform", "${_UArmCopy}", "rotateZ", '-34deg', { fromValue: '0deg'}], position: 1000, duration: 300, easing: "easeOutQuad" },
            { id: "eid121", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '-34deg'}], position: 1365, duration: 300, easing: "easeOutQuad" },
            { id: "eid129", tween: [ "transform", "${_UArmCopy}", "rotateZ", '-34deg', { fromValue: '0deg'}], position: 1790, duration: 300, easing: "easeOutQuad" },
            { id: "eid128", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '-34deg'}], position: 2155, duration: 300, easing: "easeOutQuad" },
            { id: "eid93", tween: [ "transform", "${_LArms}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 250, duration: 130, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 830, duration: 130, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "transform", "${_LArms}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1000, duration: 130, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 1535, duration: 130, easing: "easeOutQuad" },
            { id: "eid126", tween: [ "transform", "${_LArms}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1790, duration: 130, easing: "easeOutQuad" },
            { id: "eid127", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 2325, duration: 130, easing: "easeOutQuad" },
            { id: "eid458", tween: [ "transform", "${_BallCopy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid455", tween: [ "transform", "${_Ball}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" }         ]
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
      transform: [[0,0],[],[],['0.75924','0.75924']],
      id: 'Shadow2Copy',
      type: 'image',
      rect: ['83px','72px','307px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      id: 'Ponger',
      type: 'group',
      rect: ['147px','0px','182','149','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'LArms',
         rect: ['121px','68px','61','12','auto','auto'],
         transform: [],
         c: [
         {
            type: 'group',
            id: 'UArmCopy',
            rect: ['50px','0','61','12','auto','auto'],
            transform: [],
            c: [
            {
               id: 'LimbCopy3',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               type: 'group',
               id: 'Group5Copy',
               rect: ['58px','-12px','101','35','auto','auto'],
               transform: [],
               c: [
               {
                  transform: [],
                  id: 'RacketCopy',
                  type: 'image',
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'LimbCopy2',
            type: 'image',
            rect: ['0px','0px','61px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'RArms',
         rect: ['48px','68px','61','12','auto','auto'],
         transform: [[0,0],['-180']],
         c: [
         {
            type: 'group',
            id: 'UArm',
            rect: ['50px','0','61','12','auto','auto'],
            transform: [],
            c: [
            {
               id: 'LimbCopy',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               type: 'group',
               id: 'Group5',
               rect: ['58px','-12px','101','35','auto','auto'],
               transform: [],
               c: [
               {
                  transform: [[0,0],[],[],['1','-1']],
                  id: 'Racket',
                  type: 'image',
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'Hand',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'Limb',
            type: 'image',
            rect: ['0px','0px','61px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['25px','0px','127px','149px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'LEye',
         type: 'group',
         rect: ['107px','28px','25','25','auto','auto'],
         c: [
         {
            id: 'EyeballCopy',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'UEye',
         rect: ['92px','5px','25px','25px','auto','auto'],
         transform: [],
         c: [
         {
            id: 'Eyeball',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'Pupil',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Hand}": [
            ["style", "height", '20px'],
            ["style", "top", '-4px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_Ponger}": [
            ["style", "left", '147px'],
            ["style", "top", '0px']
         ],
         "${_RArms}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '48px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${_Pupil}": [
            ["style", "height", '12px'],
            ["style", "top", '7px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_PupilCopy}": [
            ["style", "top", '7px'],
            ["style", "height", '12px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_LArms}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '121px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_EyeballCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '25px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Group5Copy}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_RacketCopy}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_Group5}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '477px']
         ],
         "${_Eyeball}": [
            ["style", "height", '25px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_UEye}": [
            ["style", "top", '5px'],
            ["style", "left", '92px']
         ],
         "${_Body}": [
            ["style", "top", '0px'],
            ["style", "height", '149px'],
            ["style", "left", '25px'],
            ["style", "width", '127px']
         ],
         "${_LimbCopy3}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_LEye}": [
            ["style", "left", '107px'],
            ["style", "top", '28px']
         ],
         "${_UArm}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Limb}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_HandCopy}": [
            ["style", "top", '-4px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '20px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_LimbCopy2}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_LimbCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Shadow2Copy}": [
            ["transform", "scaleX", '0.75924'],
            ["style", "left", '83px'],
            ["transform", "scaleY", '0.75924'],
            ["style", "top", '72px']
         ],
         "${_Racket}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_UArmCopy}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
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
            { id: "eid274", tween: [ "transform", "${_UArmCopy}", "rotateZ", '-63deg', { fromValue: '0deg'}], position: 0, duration: 400, easing: "easeOutQuad" },
            { id: "eid289", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '-63deg'}], position: 400, duration: 200, easing: "easeOutQuad" },
            { id: "eid299", tween: [ "transform", "${_UArmCopy}", "rotateZ", '-63deg', { fromValue: '0deg'}], position: 684, duration: 400, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '-63deg'}], position: 1084, duration: 200, easing: "easeOutQuad" },
            { id: "eid311", tween: [ "transform", "${_UArmCopy}", "rotateZ", '-63deg', { fromValue: '0deg'}], position: 1400, duration: 400, easing: "easeOutQuad" },
            { id: "eid312", tween: [ "transform", "${_UArmCopy}", "rotateZ", '0deg', { fromValue: '-63deg'}], position: 1800, duration: 200, easing: "easeOutQuad" },
            { id: "eid278", tween: [ "transform", "${_RacketCopy}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 0, duration: 400, easing: "easeOutQuad" },
            { id: "eid290", tween: [ "transform", "${_RacketCopy}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 400, duration: 200, easing: "easeOutQuad" },
            { id: "eid301", tween: [ "transform", "${_RacketCopy}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 684, duration: 400, easing: "easeOutQuad" },
            { id: "eid302", tween: [ "transform", "${_RacketCopy}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 1084, duration: 200, easing: "easeOutQuad" },
            { id: "eid313", tween: [ "transform", "${_RacketCopy}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 1400, duration: 400, easing: "easeOutQuad" },
            { id: "eid314", tween: [ "transform", "${_RacketCopy}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 1800, duration: 200, easing: "easeOutQuad" },
            { id: "eid273", tween: [ "transform", "${_LArms}", "rotateZ", '-70deg', { fromValue: '0deg'}], position: 0, duration: 400, easing: "easeOutQuad" },
            { id: "eid288", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-70deg'}], position: 400, duration: 200, easing: "easeOutQuad" },
            { id: "eid297", tween: [ "transform", "${_LArms}", "rotateZ", '-70deg', { fromValue: '0deg'}], position: 684, duration: 400, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-70deg'}], position: 1084, duration: 200, easing: "easeOutQuad" },
            { id: "eid309", tween: [ "transform", "${_LArms}", "rotateZ", '-70deg', { fromValue: '0deg'}], position: 1400, duration: 400, easing: "easeOutQuad" },
            { id: "eid310", tween: [ "transform", "${_LArms}", "rotateZ", '0deg', { fromValue: '-70deg'}], position: 1800, duration: 200, easing: "easeOutQuad" },
            { id: "eid272", tween: [ "transform", "${_Racket}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 0, duration: 400, easing: "easeOutQuad" },
            { id: "eid287", tween: [ "transform", "${_Racket}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 400, duration: 200, easing: "easeOutQuad" },
            { id: "eid295", tween: [ "transform", "${_Racket}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 684, duration: 400, easing: "easeOutQuad" },
            { id: "eid296", tween: [ "transform", "${_Racket}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 1084, duration: 200, easing: "easeOutQuad" },
            { id: "eid307", tween: [ "transform", "${_Racket}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 1400, duration: 400, easing: "easeOutQuad" },
            { id: "eid308", tween: [ "transform", "${_Racket}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 1800, duration: 200, easing: "easeOutQuad" },
            { id: "eid270", tween: [ "transform", "${_RArms}", "rotateZ", '-111deg', { fromValue: '-180deg'}], position: 0, duration: 400, easing: "easeOutQuad" },
            { id: "eid285", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-111deg'}], position: 400, duration: 200, easing: "easeOutQuad" },
            { id: "eid291", tween: [ "transform", "${_RArms}", "rotateZ", '-111deg', { fromValue: '-180deg'}], position: 684, duration: 400, easing: "easeOutQuad" },
            { id: "eid292", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-111deg'}], position: 1084, duration: 200, easing: "easeOutQuad" },
            { id: "eid303", tween: [ "transform", "${_RArms}", "rotateZ", '-111deg', { fromValue: '-180deg'}], position: 1400, duration: 400, easing: "easeOutQuad" },
            { id: "eid304", tween: [ "transform", "${_RArms}", "rotateZ", '-180deg', { fromValue: '-111deg'}], position: 1800, duration: 200, easing: "easeOutQuad" },
            { id: "eid271", tween: [ "transform", "${_UArm}", "rotateZ", '65deg', { fromValue: '0deg'}], position: 0, duration: 400, easing: "easeOutQuad" },
            { id: "eid286", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '65deg'}], position: 400, duration: 200, easing: "easeOutQuad" },
            { id: "eid293", tween: [ "transform", "${_UArm}", "rotateZ", '65deg', { fromValue: '0deg'}], position: 684, duration: 400, easing: "easeOutQuad" },
            { id: "eid294", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '65deg'}], position: 1084, duration: 200, easing: "easeOutQuad" },
            { id: "eid305", tween: [ "transform", "${_UArm}", "rotateZ", '65deg', { fromValue: '0deg'}], position: 1400, duration: 400, easing: "easeOutQuad" },
            { id: "eid306", tween: [ "transform", "${_UArm}", "rotateZ", '0deg', { fromValue: '65deg'}], position: 1800, duration: 200, easing: "easeOutQuad" }         ]
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
      transform: [[0,0],[],[],['0.75924','0.75924']],
      id: 'Shadow2Copy2',
      type: 'image',
      rect: ['83px','72px','307px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      id: 'PongerCopy',
      type: 'group',
      rect: ['167px','0px','182','149','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'LArmsCopy',
         rect: ['121px','68px','61','12','auto','auto'],
         transform: [],
         c: [
         {
            type: 'group',
            id: 'UArmCopy3',
            rect: ['50px','0','61','12','auto','auto'],
            transform: [],
            c: [
            {
               id: 'LimbCopy7',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               type: 'group',
               id: 'Group5Copy3',
               rect: ['58px','-12px','101','35','auto','auto'],
               transform: [],
               c: [
               {
                  transform: [],
                  id: 'RacketCopy3',
                  type: 'image',
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy3',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'LimbCopy6',
            type: 'image',
            rect: ['0px','0px','61px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'RArmsCopy',
         rect: ['48px','68px','61','12','auto','auto'],
         transform: [[0,0],['-180']],
         c: [
         {
            type: 'group',
            id: 'UArmCopy2',
            rect: ['50px','0','61','12','auto','auto'],
            transform: [],
            c: [
            {
               id: 'LimbCopy5',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               type: 'group',
               id: 'Group5Copy2',
               rect: ['58px','-12px','101','35','auto','auto'],
               transform: [],
               c: [
               {
                  transform: [[0,0],[],[],['1','-1']],
                  id: 'RacketCopy2',
                  type: 'image',
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy2',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            transform: [],
            id: 'LimbCopy4',
            type: 'image',
            rect: ['0px','0px','61px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         id: 'Group3',
         type: 'group',
         rect: ['143px','73px','20','20','auto','auto'],
         c: [
         {
            id: 'BallCopy2',
            type: 'image',
            rect: ['-68px','-18px','20px','20px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ball.svg','0px','0px']
         }]
      },
      {
         id: 'BodyCopy',
         type: 'image',
         rect: ['5px','0px','127px','149px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'LEyeCopy',
         type: 'group',
         rect: ['87px','28px','25','25','auto','auto'],
         c: [
         {
            id: 'EyeballCopy3',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy3',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      },
      {
         type: 'group',
         id: 'UEyeCopy',
         rect: ['72px','5px','25px','25px','auto','auto'],
         transform: [],
         c: [
         {
            id: 'EyeballCopy2',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy2',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PupilCopy2}": [
            ["style", "height", '12px'],
            ["style", "top", '7px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_Group3}": [
            ["style", "top", '73px'],
            ["style", "left", '143px']
         ],
         "${_UEyeCopy}": [
            ["style", "top", '5px'],
            ["style", "left", '72px']
         ],
         "${_HandCopy3}": [
            ["style", "top", '-4px'],
            ["style", "height", '20px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_Group5Copy2}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_RacketCopy2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_LimbCopy7}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Shadow2Copy2}": [
            ["style", "top", '72px'],
            ["transform", "scaleY", '0.75924'],
            ["transform", "scaleX", '0.75924'],
            ["style", "opacity", '1'],
            ["style", "left", '83px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '477px']
         ],
         "${_LimbCopy6}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Group5Copy3}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_LimbCopy4}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_RacketCopy3}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_LEyeCopy}": [
            ["style", "left", '87px'],
            ["style", "top", '28px']
         ],
         "${_UArmCopy3}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_BodyCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '149px'],
            ["style", "left", '5px'],
            ["style", "width", '127px']
         ],
         "${_HandCopy2}": [
            ["style", "height", '20px'],
            ["style", "top", '-4px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_EyeballCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '25px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_PongerCopy}": [
            ["style", "left", '167px'],
            ["style", "top", '0px']
         ],
         "${_BallCopy2}": [
            ["motion", "location", '-57.82px -7.86px'],
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ],
         "${_PupilCopy3}": [
            ["style", "top", '7px'],
            ["style", "height", '12px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_RArmsCopy}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '28px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${_LimbCopy5}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_UArmCopy2}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_EyeballCopy2}": [
            ["style", "height", '25px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_LArmsCopy}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '101px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2450,
         autoPlay: false,
         timeline: [
            { id: "eid332", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 10, duration: 105, easing: "easeOutQuad" },
            { id: "eid335", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '-15deg', { fromValue: '18deg'}], position: 115, duration: 135, easing: "easeOutQuad" },
            { id: "eid345", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '18deg', { fromValue: '-15deg'}], position: 250, duration: 145, easing: "easeOutQuad" },
            { id: "eid353", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '-15deg', { fromValue: '18deg'}], position: 395, duration: 135, easing: "easeOutQuad" },
            { id: "eid354", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '18deg', { fromValue: '-15deg'}], position: 530, duration: 145, easing: "easeOutQuad" },
            { id: "eid365", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '-15deg', { fromValue: '18deg'}], position: 680, duration: 135, easing: "easeOutQuad" },
            { id: "eid366", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '18deg', { fromValue: '-15deg'}], position: 815, duration: 145, easing: "easeOutQuad" },
            { id: "eid377", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '-15deg', { fromValue: '18deg'}], position: 965, duration: 135, easing: "easeOutQuad" },
            { id: "eid378", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '18deg', { fromValue: '-15deg'}], position: 1100, duration: 145, easing: "easeOutQuad" },
            { id: "eid389", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '-15deg', { fromValue: '18deg'}], position: 1250, duration: 135, easing: "easeOutQuad" },
            { id: "eid390", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '18deg', { fromValue: '-15deg'}], position: 1385, duration: 145, easing: "easeOutQuad" },
            { id: "eid402", tween: [ "transform", "${_RacketCopy2}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 1530, duration: 660, easing: "easeOutQuad" },
            { id: "eid337", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 10, duration: 100, easing: "easeOutQuad" },
            { id: "eid340", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '8deg', { fromValue: '-23deg'}], position: 110, duration: 140, easing: "easeOutQuad" },
            { id: "eid346", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '-23deg', { fromValue: '8deg'}], position: 250, duration: 140, easing: "easeOutQuad" },
            { id: "eid355", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '8deg', { fromValue: '-23deg'}], position: 390, duration: 140, easing: "easeOutQuad" },
            { id: "eid356", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '-23deg', { fromValue: '8deg'}], position: 530, duration: 140, easing: "easeOutQuad" },
            { id: "eid367", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '8deg', { fromValue: '-23deg'}], position: 675, duration: 140, easing: "easeOutQuad" },
            { id: "eid368", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '-23deg', { fromValue: '8deg'}], position: 815, duration: 140, easing: "easeOutQuad" },
            { id: "eid379", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '8deg', { fromValue: '-23deg'}], position: 960, duration: 140, easing: "easeOutQuad" },
            { id: "eid380", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '-23deg', { fromValue: '8deg'}], position: 1100, duration: 140, easing: "easeOutQuad" },
            { id: "eid391", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '8deg', { fromValue: '-23deg'}], position: 1245, duration: 140, easing: "easeOutQuad" },
            { id: "eid392", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '-23deg', { fromValue: '8deg'}], position: 1385, duration: 140, easing: "easeOutQuad" },
            { id: "eid403", tween: [ "transform", "${_LArmsCopy}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 1525, duration: 665, easing: "easeOutQuad" },
            { id: "eid485", tween: [ "transform", "${_Shadow2Copy2}", "scaleY", '0.47127', { fromValue: '0.75924'}], position: 0, duration: 1525 },
            { id: "eid487", tween: [ "transform", "${_Shadow2Copy2}", "scaleY", '0.75924', { fromValue: '0.47127'}], position: 1525, duration: 660 },
            { id: "eid331", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 10, duration: 105, easing: "easeOutQuad" },
            { id: "eid334", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '-9deg', { fromValue: '27deg'}], position: 115, duration: 135, easing: "easeOutQuad" },
            { id: "eid344", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '27deg', { fromValue: '-9deg'}], position: 250, duration: 145, easing: "easeOutQuad" },
            { id: "eid351", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '-9deg', { fromValue: '27deg'}], position: 395, duration: 135, easing: "easeOutQuad" },
            { id: "eid352", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '27deg', { fromValue: '-9deg'}], position: 530, duration: 145, easing: "easeOutQuad" },
            { id: "eid363", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '-9deg', { fromValue: '27deg'}], position: 680, duration: 135, easing: "easeOutQuad" },
            { id: "eid364", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '27deg', { fromValue: '-9deg'}], position: 815, duration: 145, easing: "easeOutQuad" },
            { id: "eid375", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '-9deg', { fromValue: '27deg'}], position: 965, duration: 135, easing: "easeOutQuad" },
            { id: "eid376", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '27deg', { fromValue: '-9deg'}], position: 1100, duration: 145, easing: "easeOutQuad" },
            { id: "eid387", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '-9deg', { fromValue: '27deg'}], position: 1250, duration: 135, easing: "easeOutQuad" },
            { id: "eid388", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '27deg', { fromValue: '-9deg'}], position: 1385, duration: 145, easing: "easeOutQuad" },
            { id: "eid401", tween: [ "transform", "${_UArmCopy2}", "rotateZ", '0deg', { fromValue: '27deg'}], position: 1530, duration: 660, easing: "easeOutQuad" },
            { id: "eid330", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-157deg', { fromValue: '-180deg'}], position: 10, duration: 100, easing: "easeOutQuad" },
            { id: "eid333", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-194deg', { fromValue: '-157deg'}], position: 110, duration: 140, easing: "easeOutQuad" },
            { id: "eid343", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-157deg', { fromValue: '-194deg'}], position: 250, duration: 140, easing: "easeOutQuad" },
            { id: "eid349", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-194deg', { fromValue: '-157deg'}], position: 390, duration: 140, easing: "easeOutQuad" },
            { id: "eid350", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-157deg', { fromValue: '-194deg'}], position: 530, duration: 140, easing: "easeOutQuad" },
            { id: "eid361", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-194deg', { fromValue: '-157deg'}], position: 675, duration: 140, easing: "easeOutQuad" },
            { id: "eid362", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-157deg', { fromValue: '-194deg'}], position: 815, duration: 140, easing: "easeOutQuad" },
            { id: "eid373", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-194deg', { fromValue: '-157deg'}], position: 960, duration: 140, easing: "easeOutQuad" },
            { id: "eid374", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-157deg', { fromValue: '-194deg'}], position: 1100, duration: 140, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-194deg', { fromValue: '-157deg'}], position: 1245, duration: 140, easing: "easeOutQuad" },
            { id: "eid386", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-157deg', { fromValue: '-194deg'}], position: 1385, duration: 140, easing: "easeOutQuad" },
            { id: "eid400", tween: [ "transform", "${_RArmsCopy}", "rotateZ", '-180deg', { fromValue: '-157deg'}], position: 1525, duration: 665, easing: "easeOutQuad" },
            { id: "eid475", tween: [ "style", "${_Shadow2Copy2}", "opacity", '0.6015625', { fromValue: '1'}], position: 0, duration: 1525 },
            { id: "eid483", tween: [ "style", "${_Shadow2Copy2}", "opacity", '1', { fromValue: '0.6015625'}], position: 1525, duration: 660 },
            { id: "eid488", tween: [ "style", "${_Shadow2Copy2}", "opacity", '0.79', { fromValue: '1'}], position: 2185, duration: 145 },
            { id: "eid489", tween: [ "style", "${_Shadow2Copy2}", "opacity", '0.99', { fromValue: '0.7900000214576721'}], position: 2330, duration: 120 },
            { id: "eid484", tween: [ "transform", "${_Shadow2Copy2}", "scaleX", '0.47127', { fromValue: '0.75924'}], position: 0, duration: 1525 },
            { id: "eid486", tween: [ "transform", "${_Shadow2Copy2}", "scaleX", '0.75924', { fromValue: '0.47127'}], position: 1525, duration: 660 },
            { id: "eid473", tween: [ "style", "${_Shadow2Copy2}", "top", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid338", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '-36deg', { fromValue: '0deg'}], position: 10, duration: 100, easing: "easeOutQuad" },
            { id: "eid341", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '20deg', { fromValue: '-36deg'}], position: 110, duration: 140, easing: "easeOutQuad" },
            { id: "eid347", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '-36deg', { fromValue: '20deg'}], position: 250, duration: 140, easing: "easeOutQuad" },
            { id: "eid357", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '20deg', { fromValue: '-36deg'}], position: 390, duration: 140, easing: "easeOutQuad" },
            { id: "eid358", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '-36deg', { fromValue: '20deg'}], position: 530, duration: 140, easing: "easeOutQuad" },
            { id: "eid369", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '20deg', { fromValue: '-36deg'}], position: 675, duration: 140, easing: "easeOutQuad" },
            { id: "eid370", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '-36deg', { fromValue: '20deg'}], position: 815, duration: 140, easing: "easeOutQuad" },
            { id: "eid381", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '20deg', { fromValue: '-36deg'}], position: 960, duration: 140, easing: "easeOutQuad" },
            { id: "eid382", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '-36deg', { fromValue: '20deg'}], position: 1100, duration: 140, easing: "easeOutQuad" },
            { id: "eid393", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '20deg', { fromValue: '-36deg'}], position: 1245, duration: 140, easing: "easeOutQuad" },
            { id: "eid394", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '-36deg', { fromValue: '20deg'}], position: 1385, duration: 140, easing: "easeOutQuad" },
            { id: "eid404", tween: [ "transform", "${_UArmCopy3}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 1525, duration: 665, easing: "easeOutQuad" },
            { id: "eid410", tween: [ "style", "${_PupilCopy3}", "top", '12px', { fromValue: '7px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid417", tween: [ "style", "${_PupilCopy3}", "top", '7px', { fromValue: '12px'}], position: 2200, duration: 250, easing: "easeOutQuad" },
            { id: "eid339", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 5, duration: 105, easing: "easeOutQuad" },
            { id: "eid342", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '17deg', { fromValue: '-20deg'}], position: 110, duration: 140, easing: "easeOutQuad" },
            { id: "eid348", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '-20deg', { fromValue: '17deg'}], position: 250, duration: 140, easing: "easeOutQuad" },
            { id: "eid359", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '17deg', { fromValue: '-20deg'}], position: 390, duration: 140, easing: "easeOutQuad" },
            { id: "eid360", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '-20deg', { fromValue: '17deg'}], position: 530, duration: 140, easing: "easeOutQuad" },
            { id: "eid371", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '17deg', { fromValue: '-20deg'}], position: 675, duration: 140, easing: "easeOutQuad" },
            { id: "eid372", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '-20deg', { fromValue: '17deg'}], position: 815, duration: 140, easing: "easeOutQuad" },
            { id: "eid383", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '17deg', { fromValue: '-20deg'}], position: 960, duration: 140, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '-20deg', { fromValue: '17deg'}], position: 1100, duration: 140, easing: "easeOutQuad" },
            { id: "eid395", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '17deg', { fromValue: '-20deg'}], position: 1245, duration: 140, easing: "easeOutQuad" },
            { id: "eid396", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '-20deg', { fromValue: '17deg'}], position: 1385, duration: 140, easing: "easeOutQuad" },
            { id: "eid405", tween: [ "transform", "${_RacketCopy3}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 1525, duration: 660, easing: "easeOutQuad" },
            { id: "eid323", tween: [ "style", "${_PongerCopy}", "top", '-164px', { fromValue: '0px'}], position: 0, duration: 1525, easing: "easeOutQuad" },
            { id: "eid397", tween: [ "style", "${_PongerCopy}", "top", '0px', { fromValue: '-164px'}], position: 1525, duration: 660, easing: "easeOutQuad" },
            { id: "eid398", tween: [ "style", "${_PongerCopy}", "top", '-18px', { fromValue: '0px'}], position: 2185, duration: 145, easing: "easeOutQuad" },
            { id: "eid399", tween: [ "style", "${_PongerCopy}", "top", '0px', { fromValue: '-18px'}], position: 2330, duration: 120, easing: "easeOutQuad" },
            { id: "eid321", tween: [ "style", "${_PongerCopy}", "left", '167px', { fromValue: '167px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid472", tween: [ "style", "${_Shadow2Copy2}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
            { id: "eid411", tween: [ "style", "${_PupilCopy2}", "top", '12px', { fromValue: '7px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid416", tween: [ "style", "${_PupilCopy2}", "top", '7px', { fromValue: '12px'}], position: 2200, duration: 250, easing: "easeOutQuad" }         ]
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
      rect: ['83px','72px','307px','100px','auto','auto'],
      id: 'Shadow2Copy3',
      transform: [[],[],[],['0.75924','0.75924']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Shadow.svg','0px','0px']
   },
   {
      id: 'PongerCopy2',
      type: 'group',
      rect: ['167px','0px','182','149','auto','auto'],
      c: [
      {
         rect: ['121px','68px','61','12','auto','auto'],
         id: 'LArmsCopy2',
         type: 'group',
         transform: [],
         c: [
         {
            rect: ['50px','0','61','12','auto','auto'],
            id: 'UArmCopy5',
            type: 'group',
            transform: [],
            c: [
            {
               id: 'LimbCopy11',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['58px','-12px','101','35','auto','auto'],
               id: 'Group5Copy5',
               type: 'group',
               transform: [],
               c: [
               {
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  id: 'RacketCopy5',
                  transform: [],
                  type: 'image',
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy5',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            rect: ['0px','0px','61px','12px','auto','auto'],
            id: 'LimbCopy10',
            transform: [],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         rect: ['48px','68px','61','12','auto','auto'],
         id: 'RArmsCopy2',
         type: 'group',
         transform: [[],['-180']],
         c: [
         {
            rect: ['50px','0','61','12','auto','auto'],
            id: 'UArmCopy4',
            type: 'group',
            transform: [],
            c: [
            {
               id: 'LimbCopy9',
               type: 'image',
               rect: ['0px','0px','61px','12px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
            },
            {
               rect: ['58px','-12px','101','35','auto','auto'],
               id: 'Group5Copy4',
               type: 'group',
               transform: [],
               c: [
               {
                  rect: ['0px','0px','101px','35px','auto','auto'],
                  id: 'RacketCopy4',
                  transform: [[],[],[],['1','-1']],
                  type: 'image',
                  fill: ['rgba(0,0,0,0)','images/Racket.svg','0px','0px']
               }]
            },
            {
               id: 'HandCopy4',
               type: 'image',
               rect: ['51px','-4px','20px','20px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Hand.svg','0px','0px']
            }]
         },
         {
            rect: ['0px','0px','61px','12px','auto','auto'],
            id: 'LimbCopy8',
            transform: [],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/Limb.svg','0px','0px']
         }]
      },
      {
         id: 'Group3Copy',
         type: 'group',
         rect: ['143px','73px','20','20','auto','auto'],
         c: [
         {
            id: 'BallCopy3',
            type: 'image',
            rect: ['-68px','-18px','20px','20px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Ball.svg','0px','0px']
         }]
      },
      {
         id: 'BodyCopy2',
         type: 'image',
         rect: ['5px','0px','127px','149px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'LEyeCopy2',
         type: 'group',
         rect: ['87px','28px','25','25','auto','auto'],
         c: [
         {
            id: 'EyeballCopy5',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy5',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      },
      {
         rect: ['72px','5px','25px','25px','auto','auto'],
         id: 'UEyeCopy2',
         type: 'group',
         transform: [],
         c: [
         {
            id: 'EyeballCopy4',
            type: 'image',
            rect: ['0px','0px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eyeball.svg','0px','0px']
         },
         {
            id: 'PupilCopy4',
            type: 'image',
            rect: ['7px','7px','12px','12px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Pupil.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RacketCopy5}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_PupilCopy4}": [
            ["style", "height", '12px'],
            ["style", "top", '7px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_Group5Copy5}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_LArmsCopy2}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '101px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UEyeCopy2}": [
            ["motion", "location", '84.5px 17.5px']
         ],
         "${_HandCopy5}": [
            ["style", "top", '-4px'],
            ["style", "height", '20px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '477px']
         ],
         "${_LimbCopy11}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_EyeballCopy5}": [
            ["style", "top", '0px'],
            ["style", "height", '25px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_BodyCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '149px'],
            ["style", "left", '5px'],
            ["style", "width", '127px']
         ],
         "${_HandCopy4}": [
            ["style", "height", '20px'],
            ["style", "top", '-4px'],
            ["style", "left", '51px'],
            ["style", "width", '20px']
         ],
         "${_LimbCopy9}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_RArmsCopy2}": [
            ["style", "-webkit-transform-origin", [11.07,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.07,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '68px'],
            ["style", "left", '28px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${_EyeballCopy4}": [
            ["style", "height", '25px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Group5Copy4}": [
            ["style", "-webkit-transform-origin", [5.94,50.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.94,50.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '58px'],
            ["style", "top", '-12px']
         ],
         "${_LimbCopy10}": [
            ["style", "top", '0px'],
            ["style", "height", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_PupilCopy5}": [
            ["style", "top", '7px'],
            ["style", "height", '12px'],
            ["style", "left", '7px'],
            ["style", "width", '12px']
         ],
         "${_LEyeCopy2}": [
            ["style", "left", '87px'],
            ["style", "top", '28px']
         ],
         "${_PongerCopy2}": [
            ["style", "left", '167px'],
            ["style", "top", '0px']
         ],
         "${_LimbCopy8}": [
            ["style", "height", '12px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_BallCopy3}": [
            ["motion", "location", '-58px -8px'],
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ],
         "${_RacketCopy4}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["style", "-webkit-transform-origin", [7.18,51.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.18,51.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_UArmCopy5}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_UArmCopy4}": [
            ["style", "-webkit-transform-origin", [8,49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8,49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '50px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group3Copy}": [
            ["style", "top", '73px'],
            ["style", "left", '143px']
         ],
         "${_Shadow2Copy3}": [
            ["transform", "scaleX", '0.75924'],
            ["style", "top", '72px'],
            ["style", "left", '83px'],
            ["transform", "scaleY", '0.75924']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1910,
         autoPlay: false,
         timeline: [
            { id: "eid426", tween: [ "transform", "${_UArmCopy5}", "rotateZ", '-158deg', { fromValue: '0deg'}], position: 5, duration: 300, easing: "easeOutQuad" },
            { id: "eid443", tween: [ "transform", "${_UArmCopy5}", "rotateZ", '0deg', { fromValue: '-158deg'}], position: 1075, duration: 510, easing: "easeOutQuad" },
            { id: "eid425", tween: [ "transform", "${_RacketCopy5}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 5, duration: 300, easing: "easeOutQuad" },
            { id: "eid444", tween: [ "transform", "${_RacketCopy5}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 1075, duration: 510, easing: "easeOutQuad" },
            { id: "eid427", tween: [ "transform", "${_LArmsCopy2}", "rotateZ", '55deg', { fromValue: '0deg'}], position: 5, duration: 300, easing: "easeOutQuad" },
            { id: "eid442", tween: [ "transform", "${_LArmsCopy2}", "rotateZ", '0deg', { fromValue: '55deg'}], position: 1075, duration: 510, easing: "easeOutQuad" },
            { id: "eid449", tween: [ "motion", "${_UEyeCopy2}", [[84.5,17.5,0,0],[84.5,17.5,0,0]]], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid433", tween: [ "motion", "${_UEyeCopy2}", [[84.5,17.5,0,0],[-137.24,64.5,0,0]]], position: 250, duration: 510, easing: "easeOutQuad" },
            { id: "eid434", tween: [ "motion", "${_UEyeCopy2}", [[-137.24,64.5,0,0],[224.83,-114.49,313.35,0]]], position: 760, duration: 640, easing: "easeOutQuad" },
            { id: "eid435", tween: [ "motion", "${_UEyeCopy2}", [[224.83,-114.49,74.14,0],[280.16,64.5,0,0,0,0],[146.72,-20.81,0,0,-115.1,10.52],[131.35,-17.99,-45.45,30.67,-13.47,9.09],[84.5,17.5,0,0]]], position: 1400, duration: 510, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-94320482");
