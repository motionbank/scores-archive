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
            id:'shadow',
            type:'image',
            rect:['205px','456px','180px','42px','auto','auto'],
            opacity:0.51386589403974,
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'Body',
            type:'rect',
            rect:['264','228','auto','auto','auto','auto']
         },
         {
            id:'CanvasContainer',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'Body',
            symbolName:'Body'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Body}": [
            ["style", "top", '312px'],
            ["style", "left", '290px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_shadow}": [
            ["style", "top", '456px'],
            ["style", "height", '42px'],
            ["transform", "scaleX", '-1'],
            ["style", "opacity", '0'],
            ["style", "left", '205px'],
            ["style", "width", '180px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'visible']
         ],
         "${_CanvasContainer}": [
            ["style", "top", '0px'],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 606.18603214963,
         autoPlay: false,
         labels: {
            "started": 457
         },
         timeline: [
            { id: "eid10352", tween: [ "style", "${_shadow}", "opacity", '0.6018992384106', { fromValue: '0.000000'}], position: 0, duration: 457 },
            { id: "eid4813", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 457, duration: 0 },
            { id: "eid5671", tween: [ "style", "${_Body}", "top", '312px', { fromValue: '312px'}], position: 457, duration: 0 },
            { id: "eid4855", tween: [ "style", "${_Body}", "left", '290px', { fromValue: '290px'}], position: 457, duration: 0 }         ]
      }
   }
},
"Body": {
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
      id: 'Hip',
      type: 'group',
      rect: ['0','0','10','10','auto','auto'],
      c: [
      {
         id: 'Pelvis',
         type: 'group',
         rect: ['0','0','10','66','auto','auto'],
         c: [
         {
            id: 'RightLeg',
            type: 'group',
            rect: ['35px','40px','10','66','auto','auto'],
            c: [
            {
               id: 'RightKnee',
               type: 'group',
               rect: ['0px','75px','10','10','auto','auto'],
               c: [
               {
                  id: 'RightAnkle',
                  type: 'group',
                  rect: ['0px','0px','10','10','auto','auto'],
                  c: [
                  {
                     id: 'RightAnkleElement',
                     type: 'rect',
                     rect: ['55px','-40px','auto','auto','auto','auto']
                  }]
               },
               {
                  id: 'RightKneeElement',
                  type: 'rect',
                  rect: ['55px','-40px','auto','auto','auto','auto']
               }]
            },
            {
               id: 'RightPelvisElement',
               type: 'rect',
               rect: ['55px','-40px','auto','auto','auto','auto']
            }]
         },
         {
            id: 'LeftLeg',
            type: 'group',
            rect: ['-38px','40px','10','66','auto','auto'],
            c: [
            {
               id: 'LeftKnee',
               type: 'group',
               rect: ['0px','75px','10','10','auto','auto'],
               c: [
               {
                  id: 'LeftAnkle',
                  type: 'group',
                  rect: ['0px','0px','10','10','auto','auto'],
                  c: [
                  {
                     id: 'LeftAnkleElement',
                     type: 'rect',
                     rect: ['55px','-40px','auto','auto','auto','auto']
                  }]
               },
               {
                  id: 'LeftKneeElement',
                  type: 'rect',
                  rect: ['55px','-40px','auto','auto','auto','auto']
               }]
            },
            {
               id: 'LeftPelvisElement',
               type: 'rect',
               rect: ['55px','-40px','auto','auto','auto','auto']
            }]
         }]
      },
      {
         id: 'Spine',
         type: 'group',
         rect: ['0','-71px','10','10','auto','auto'],
         c: [
         {
            id: 'Shoulders',
            type: 'group',
            rect: ['0','-65px','10','10','auto','auto'],
            c: [
            {
               id: 'Head',
               type: 'group',
               rect: ['0','-51px','10','10','auto','auto'],
               c: [
               {
                  id: 'HeadElement',
                  type: 'rect',
                  rect: ['126px','17px','auto','auto','auto','auto']
               }]
            },
            {
               id: 'ArmLeft',
               type: 'rect',
               rect: ['270','108px','auto','auto','auto','auto']
            },
            {
               id: 'ArmRight',
               type: 'rect',
               rect: ['270','108px','auto','auto','auto','auto']
            },
            {
               id: 'ShouldersElement',
               type: 'rect',
               rect: ['126','17','auto','auto','auto','auto']
            }]
         },
         {
            id: 'SpineElement',
            type: 'rect',
            rect: ['460','4','auto','auto','auto','auto']
         }]
      },
      {
         id: 'HipElement',
         type: 'rect',
         rect: ['0','0','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'ShouldersElement',
      symbolName: 'Element'
   },
   {
      id: 'RightAnkleElement',
      symbolName: 'Element'
   },
   {
      id: 'HipElement',
      symbolName: 'Element'
   },
   {
      id: 'ArmRight',
      symbolName: 'Arm'
   },
   {
      id: 'ArmLeft',
      symbolName: 'Arm'
   },
   {
      id: 'SpineElement',
      symbolName: 'Element'
   },
   {
      id: 'LeftKneeElement',
      symbolName: 'Element'
   },
   {
      id: 'HeadElement',
      symbolName: 'Element'
   },
   {
      id: 'RightKneeElement',
      symbolName: 'Element'
   },
   {
      id: 'LeftPelvisElement',
      symbolName: 'Element'
   },
   {
      id: 'LeftAnkleElement',
      symbolName: 'Element'
   },
   {
      id: 'RightPelvisElement',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_RightPelvisElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Hip}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_RightAnkleElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_HeadElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LeftAnkleElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ],
         "${_LeftPelvisElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_RightAnkle}": [
            ["style", "top", '53px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Pelvis}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '66px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Spine}": [
            ["style", "top", '-51px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_RightKneeElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_LeftLeg}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '66px'],
            ["style", "top", '40px'],
            ["style", "left", '-38px'],
            ["style", "width", '10px']
         ],
         "${_Shoulders}": [
            ["style", "top", '-55px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_LeftAnkle}": [
            ["style", "top", '53px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_ShouldersElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LeftKneeElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_HipElement}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_ArmRight}": [
            ["style", "top", '5px'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '10px'],
            ["style", "left", '-61px'],
            ["style", "width", '10px']
         ],
         "${_RightKnee}": [
            ["style", "top", '65px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_RightLeg}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '66px'],
            ["style", "top", '40px'],
            ["style", "left", '35px'],
            ["style", "width", '10px']
         ],
         "${_ArmLeft}": [
            ["style", "top", '5px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '10px'],
            ["style", "left", '56px'],
            ["style", "width", '10px']
         ],
         "${_LeftKnee}": [
            ["style", "top", '65px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_SpineElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head}": [
            ["style", "top", '-71px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3358,
         autoPlay: true,
         labels: {
            "Movement-1": 851,
            "Movement-2": 2369
         },
         timeline: [
            { id: "eid5659", tween: [ "style", "${_LeftAnkle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8943", tween: [ "style", "${_LeftAnkle}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8892", tween: [ "style", "${_LeftAnkle}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9070", tween: [ "style", "${_LeftAnkle}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9134", tween: [ "style", "${_LeftAnkle}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9194", tween: [ "style", "${_LeftAnkle}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4427", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid9388", tween: [ "transform", "${_Spine}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 851, duration: 87 },
            { id: "eid9389", tween: [ "transform", "${_Spine}", "rotateZ", '-5deg', { fromValue: '-3deg'}], position: 938, duration: 312 },
            { id: "eid9394", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 1250, duration: 210 },
            { id: "eid9395", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9107", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9167", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4540", tween: [ "transform", "${_RightKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8919", tween: [ "transform", "${_RightKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8859", tween: [ "transform", "${_RightKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9086", tween: [ "transform", "${_RightKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9108", tween: [ "transform", "${_RightKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9168", tween: [ "transform", "${_RightKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid6907", tween: [ "style", "${_LeftAnkle}", "top", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
            { id: "eid8924", tween: [ "style", "${_LeftAnkle}", "top", '53px', { fromValue: '53px'}], position: 851, duration: 0 },
            { id: "eid8991", tween: [ "style", "${_LeftAnkle}", "top", '59px', { fromValue: '53px'}], position: 1000, duration: 691 },
            { id: "eid9069", tween: [ "style", "${_LeftAnkle}", "top", '53px', { fromValue: '59px'}], position: 1691, duration: 309 },
            { id: "eid9225", tween: [ "style", "${_LeftAnkle}", "top", '55px', { fromValue: '53px'}], position: 2369, duration: 198 },
            { id: "eid9226", tween: [ "style", "${_LeftAnkle}", "top", '48px', { fromValue: '55px'}], position: 2567, duration: 494 },
            { id: "eid9250", tween: [ "style", "${_LeftAnkle}", "top", '53px', { fromValue: '48px'}], position: 3061, duration: 297 },
            { id: "eid4395", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8956", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid9040", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9147", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9207", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid72", tween: [ "style", "${_ShouldersElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4489", tween: [ "transform", "${_LeftLeg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8913", tween: [ "transform", "${_LeftLeg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8975", tween: [ "transform", "${_LeftLeg}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1000, duration: 98 },
            { id: "eid8978", tween: [ "transform", "${_LeftLeg}", "rotateZ", '3deg', { fromValue: '4deg'}], position: 1098, duration: 362 },
            { id: "eid8984", tween: [ "transform", "${_LeftLeg}", "rotateZ", '1deg', { fromValue: '3deg'}], position: 1460, duration: 231 },
            { id: "eid9059", tween: [ "transform", "${_LeftLeg}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1691, duration: 309 },
            { id: "eid9219", tween: [ "transform", "${_LeftLeg}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 2369, duration: 198 },
            { id: "eid9220", tween: [ "transform", "${_LeftLeg}", "rotateZ", '-12deg', { fromValue: '4deg'}], position: 2567, duration: 494 },
            { id: "eid9244", tween: [ "transform", "${_LeftLeg}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 3061, duration: 297 },
            { id: "eid5649", tween: [ "style", "${_RightAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8947", tween: [ "style", "${_RightAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8899", tween: [ "style", "${_RightAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9091", tween: [ "style", "${_RightAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9138", tween: [ "style", "${_RightAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9198", tween: [ "style", "${_RightAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4553", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 0, duration: 0 },
            { id: "eid8934", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 851, duration: 0 },
            { id: "eid8867", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 1000, duration: 0 },
            { id: "eid9051", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 2000, duration: 0 },
            { id: "eid9124", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 2369, duration: 0 },
            { id: "eid9184", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 3358, duration: 0 },
            { id: "eid4490", tween: [ "style", "${_LeftLeg}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid8932", tween: [ "style", "${_LeftLeg}", "top", '40px', { fromValue: '40px'}], position: 851, duration: 0 },
            { id: "eid8869", tween: [ "style", "${_LeftLeg}", "top", '40px', { fromValue: '40px'}], position: 1000, duration: 0 },
            { id: "eid9057", tween: [ "style", "${_LeftLeg}", "top", '40px', { fromValue: '40px'}], position: 2000, duration: 0 },
            { id: "eid9221", tween: [ "style", "${_LeftLeg}", "top", '39px', { fromValue: '40px'}], position: 2369, duration: 198 },
            { id: "eid9222", tween: [ "style", "${_LeftLeg}", "top", '40px', { fromValue: '39px'}], position: 2567, duration: 791 },
            { id: "eid4547", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 0, duration: 0 },
            { id: "eid8925", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 851, duration: 0 },
            { id: "eid8864", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 1000, duration: 0 },
            { id: "eid9042", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 2000, duration: 0 },
            { id: "eid9115", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 2369, duration: 0 },
            { id: "eid9175", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 3358, duration: 0 },
            { id: "eid5642", tween: [ "style", "${_RightAnkle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8954", tween: [ "style", "${_RightAnkle}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8898", tween: [ "style", "${_RightAnkle}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9088", tween: [ "style", "${_RightAnkle}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9145", tween: [ "style", "${_RightAnkle}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9205", tween: [ "style", "${_RightAnkle}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4539", tween: [ "transform", "${_LeftKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8910", tween: [ "transform", "${_LeftKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8853", tween: [ "transform", "${_LeftKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9068", tween: [ "transform", "${_LeftKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9099", tween: [ "transform", "${_LeftKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9159", tween: [ "transform", "${_LeftKneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4555", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8939", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid9036", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9130", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9190", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4561", tween: [ "style", "${_LeftKneeElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8948", tween: [ "style", "${_LeftKneeElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8891", tween: [ "style", "${_LeftKneeElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9067", tween: [ "style", "${_LeftKneeElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9139", tween: [ "style", "${_LeftKneeElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9199", tween: [ "style", "${_LeftKneeElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid5701", tween: [ "style", "${_RightKneeElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8938", tween: [ "style", "${_RightKneeElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8878", tween: [ "style", "${_RightKneeElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9084", tween: [ "style", "${_RightKneeElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9128", tween: [ "style", "${_RightKneeElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9188", tween: [ "style", "${_RightKneeElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4403", tween: [ "style", "${_LeftKnee}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8959", tween: [ "style", "${_LeftKnee}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8890", tween: [ "style", "${_LeftKnee}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9064", tween: [ "style", "${_LeftKnee}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9151", tween: [ "style", "${_LeftKnee}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9211", tween: [ "style", "${_LeftKnee}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid87", tween: [ "style", "${_HeadElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "transform", "${_HeadElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_SpineElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4562", tween: [ "style", "${_RightKneeElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8957", tween: [ "style", "${_RightKneeElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8897", tween: [ "style", "${_RightKneeElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9085", tween: [ "style", "${_RightKneeElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9148", tween: [ "style", "${_RightKneeElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9208", tween: [ "style", "${_RightKneeElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid5698", tween: [ "style", "${_LeftKneeElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8929", tween: [ "style", "${_LeftKneeElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8872", tween: [ "style", "${_LeftKneeElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9066", tween: [ "style", "${_LeftKneeElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9119", tween: [ "style", "${_LeftKneeElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9179", tween: [ "style", "${_LeftKneeElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4552", tween: [ "style", "${_Pelvis}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8941", tween: [ "style", "${_Pelvis}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8868", tween: [ "style", "${_Pelvis}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9054", tween: [ "style", "${_Pelvis}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9132", tween: [ "style", "${_Pelvis}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9192", tween: [ "style", "${_Pelvis}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4556", tween: [ "style", "${_ArmLeft}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid8936", tween: [ "style", "${_ArmLeft}", "top", '5px', { fromValue: '5px'}], position: 851, duration: 0 },
            { id: "eid8866", tween: [ "style", "${_ArmLeft}", "top", '5px', { fromValue: '5px'}], position: 1000, duration: 0 },
            { id: "eid9048", tween: [ "style", "${_ArmLeft}", "top", '5px', { fromValue: '5px'}], position: 2000, duration: 0 },
            { id: "eid9126", tween: [ "style", "${_ArmLeft}", "top", '5px', { fromValue: '5px'}], position: 2369, duration: 0 },
            { id: "eid9186", tween: [ "style", "${_ArmLeft}", "top", '5px', { fromValue: '5px'}], position: 3358, duration: 0 },
            { id: "eid6908", tween: [ "style", "${_RightAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8928", tween: [ "style", "${_RightAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8880", tween: [ "style", "${_RightAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9090", tween: [ "style", "${_RightAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9118", tween: [ "style", "${_RightAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9178", tween: [ "style", "${_RightAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4541", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8922", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8973", tween: [ "transform", "${_Pelvis}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 1000, duration: 98 },
            { id: "eid8977", tween: [ "transform", "${_Pelvis}", "rotateZ", '1deg', { fromValue: '-4deg'}], position: 1098, duration: 362 },
            { id: "eid8985", tween: [ "transform", "${_Pelvis}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 1460, duration: 231 },
            { id: "eid9056", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 1691, duration: 309 },
            { id: "eid9217", tween: [ "transform", "${_Pelvis}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 2369, duration: 198 },
            { id: "eid9218", tween: [ "transform", "${_Pelvis}", "rotateZ", '6deg', { fromValue: '-5deg'}], position: 2567, duration: 494 },
            { id: "eid9243", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 3061, duration: 297 },
            { id: "eid4439", tween: [ "transform", "${_RightKnee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8914", tween: [ "transform", "${_RightKnee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8982", tween: [ "transform", "${_RightKnee}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 1000, duration: 460 },
            { id: "eid8987", tween: [ "transform", "${_RightKnee}", "rotateZ", '2deg', { fromValue: '-4deg'}], position: 1460, duration: 231 },
            { id: "eid9083", tween: [ "transform", "${_RightKnee}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1691, duration: 309 },
            { id: "eid9229", tween: [ "transform", "${_RightKnee}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 2369, duration: 198 },
            { id: "eid9230", tween: [ "transform", "${_RightKnee}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 2567, duration: 791 },
            { id: "eid4545", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 0, duration: 0 },
            { id: "eid8917", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 851, duration: 0 },
            { id: "eid8847", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 1000, duration: 0 },
            { id: "eid9050", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 2000, duration: 0 },
            { id: "eid9106", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 2369, duration: 0 },
            { id: "eid9166", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 3358, duration: 0 },
            { id: "eid4565", tween: [ "style", "${_LeftPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8946", tween: [ "style", "${_LeftPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8889", tween: [ "style", "${_LeftPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9061", tween: [ "style", "${_LeftPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9137", tween: [ "style", "${_LeftPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9197", tween: [ "style", "${_LeftPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid113", tween: [ "transform", "${_ShouldersElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid4543", tween: [ "transform", "${_LeftPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8908", tween: [ "transform", "${_LeftPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8851", tween: [ "transform", "${_LeftPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9062", tween: [ "transform", "${_LeftPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9097", tween: [ "transform", "${_LeftPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9157", tween: [ "transform", "${_LeftPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid5708", tween: [ "style", "${_LeftAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8926", tween: [ "style", "${_LeftAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8874", tween: [ "style", "${_LeftAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9072", tween: [ "style", "${_LeftAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9116", tween: [ "style", "${_LeftAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9176", tween: [ "style", "${_LeftAnkleElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid112", tween: [ "transform", "${_SpineElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid4535", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid8904", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 851, duration: 0 },
            { id: "eid8846", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 1000, duration: 0 },
            { id: "eid9047", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 2000, duration: 0 },
            { id: "eid9093", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 2369, duration: 0 },
            { id: "eid9153", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 3358, duration: 0 },
            { id: "eid5646", tween: [ "transform", "${_RightAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8909", tween: [ "transform", "${_RightAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8861", tween: [ "transform", "${_RightAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9092", tween: [ "transform", "${_RightAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9098", tween: [ "transform", "${_RightAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9158", tween: [ "transform", "${_RightAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4558", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8944", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8883", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9043", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9135", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9195", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid5643", tween: [ "transform", "${_RightAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8916", tween: [ "transform", "${_RightAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8860", tween: [ "transform", "${_RightAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9089", tween: [ "transform", "${_RightAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9235", tween: [ "transform", "${_RightAnkle}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 2369, duration: 198 },
            { id: "eid9236", tween: [ "transform", "${_RightAnkle}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 2567, duration: 791 },
            { id: "eid5740", tween: [ "style", "${_RightPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8931", tween: [ "style", "${_RightPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8876", tween: [ "style", "${_RightPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9078", tween: [ "style", "${_RightPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9121", tween: [ "style", "${_RightPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9181", tween: [ "style", "${_RightPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid5664", tween: [ "style", "${_LeftAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8945", tween: [ "style", "${_LeftAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8893", tween: [ "style", "${_LeftAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9073", tween: [ "style", "${_LeftAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9136", tween: [ "style", "${_LeftAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9196", tween: [ "style", "${_LeftAnkleElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4557", tween: [ "style", "${_ArmRight}", "left", '-61px', { fromValue: '-61px'}], position: 0, duration: 0 },
            { id: "eid8942", tween: [ "style", "${_ArmRight}", "left", '-61px', { fromValue: '-61px'}], position: 851, duration: 0 },
            { id: "eid8884", tween: [ "style", "${_ArmRight}", "left", '-61px', { fromValue: '-61px'}], position: 1000, duration: 0 },
            { id: "eid9046", tween: [ "style", "${_ArmRight}", "left", '-61px', { fromValue: '-61px'}], position: 2000, duration: 0 },
            { id: "eid9133", tween: [ "style", "${_ArmRight}", "left", '-61px', { fromValue: '-61px'}], position: 2369, duration: 0 },
            { id: "eid9193", tween: [ "style", "${_ArmRight}", "left", '-61px', { fromValue: '-61px'}], position: 3358, duration: 0 },
            { id: "eid4542", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8915", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8848", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9053", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9104", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9164", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4559", tween: [ "style", "${_RightPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8950", tween: [ "style", "${_RightPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8895", tween: [ "style", "${_RightPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9079", tween: [ "style", "${_RightPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9141", tween: [ "style", "${_RightPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9201", tween: [ "style", "${_RightPelvisElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4563", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8960", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8887", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9055", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9152", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9212", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid4554", tween: [ "style", "${_LeftPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8927", tween: [ "style", "${_LeftPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8870", tween: [ "style", "${_LeftPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9060", tween: [ "style", "${_LeftPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9117", tween: [ "style", "${_LeftPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9177", tween: [ "style", "${_LeftPelvisElement}", "top", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid73", tween: [ "style", "${_ShouldersElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4544", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8920", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid9038", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9110", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9170", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4536", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid9390", tween: [ "transform", "${_Shoulders}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 851, duration: 87 },
            { id: "eid9391", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 938, duration: 62 },
            { id: "eid9392", tween: [ "transform", "${_Shoulders}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
            { id: "eid9393", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1250, duration: 210 },
            { id: "eid9398", tween: [ "transform", "${_Shoulders}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1580, duration: 63 },
            { id: "eid9399", tween: [ "transform", "${_Shoulders}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 1643, duration: 193 },
            { id: "eid9400", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1836, duration: 164 },
            { id: "eid9401", tween: [ "transform", "${_Shoulders}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 2369, duration: 74 },
            { id: "eid9402", tween: [ "transform", "${_Shoulders}", "rotateZ", '-2deg', { fromValue: '1deg'}], position: 2443, duration: 248 },
            { id: "eid9403", tween: [ "transform", "${_Shoulders}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 2691, duration: 250 },
            { id: "eid9404", tween: [ "transform", "${_Shoulders}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 2941, duration: 333 },
            { id: "eid9405", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 3274, duration: 84 },
            { id: "eid86", tween: [ "style", "${_HeadElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4538", tween: [ "transform", "${_RightLeg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8911", tween: [ "transform", "${_RightLeg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8974", tween: [ "transform", "${_RightLeg}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 1000, duration: 98 },
            { id: "eid8981", tween: [ "transform", "${_RightLeg}", "rotateZ", '2deg', { fromValue: '5deg'}], position: 1098, duration: 362 },
            { id: "eid9077", tween: [ "transform", "${_RightLeg}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1460, duration: 540 },
            { id: "eid9227", tween: [ "transform", "${_RightLeg}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 2369, duration: 198 },
            { id: "eid9228", tween: [ "transform", "${_RightLeg}", "rotateZ", '-2deg', { fromValue: '9deg'}], position: 2567, duration: 494 },
            { id: "eid9245", tween: [ "transform", "${_RightLeg}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 3061, duration: 297 },
            { id: "eid5742", tween: [ "style", "${_RightKnee}", "top", '65px', { fromValue: '65px'}], position: 0, duration: 0 },
            { id: "eid8933", tween: [ "style", "${_RightKnee}", "top", '65px', { fromValue: '65px'}], position: 851, duration: 0 },
            { id: "eid8983", tween: [ "style", "${_RightKnee}", "top", '62px', { fromValue: '65px'}], position: 1000, duration: 460 },
            { id: "eid8988", tween: [ "style", "${_RightKnee}", "top", '66px', { fromValue: '62px'}], position: 1460, duration: 231 },
            { id: "eid9081", tween: [ "style", "${_RightKnee}", "top", '65px', { fromValue: '66px'}], position: 1691, duration: 309 },
            { id: "eid9231", tween: [ "style", "${_RightKnee}", "top", '67px', { fromValue: '65px'}], position: 2369, duration: 198 },
            { id: "eid9232", tween: [ "style", "${_RightKnee}", "top", '65px', { fromValue: '67px'}], position: 2567, duration: 791 },
            { id: "eid4546", tween: [ "style", "${_ArmRight}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid8923", tween: [ "style", "${_ArmRight}", "top", '5px', { fromValue: '5px'}], position: 851, duration: 0 },
            { id: "eid8865", tween: [ "style", "${_ArmRight}", "top", '5px', { fromValue: '5px'}], position: 1000, duration: 0 },
            { id: "eid9045", tween: [ "style", "${_ArmRight}", "top", '5px', { fromValue: '5px'}], position: 2000, duration: 0 },
            { id: "eid9113", tween: [ "style", "${_ArmRight}", "top", '5px', { fromValue: '5px'}], position: 2369, duration: 0 },
            { id: "eid9173", tween: [ "style", "${_ArmRight}", "top", '5px', { fromValue: '5px'}], position: 3358, duration: 0 },
            { id: "eid5660", tween: [ "transform", "${_LeftAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8905", tween: [ "transform", "${_LeftAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8854", tween: [ "transform", "${_LeftAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9071", tween: [ "transform", "${_LeftAnkle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9248", tween: [ "transform", "${_LeftAnkle}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 2369, duration: 692 },
            { id: "eid9249", tween: [ "transform", "${_LeftAnkle}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 3061, duration: 297 },
            { id: "eid5718", tween: [ "style", "${_LeftKnee}", "top", '65px', { fromValue: '65px'}], position: 0, duration: 0 },
            { id: "eid8940", tween: [ "style", "${_LeftKnee}", "top", '65px', { fromValue: '65px'}], position: 851, duration: 0 },
            { id: "eid8976", tween: [ "style", "${_LeftKnee}", "top", '69px', { fromValue: '65px'}], position: 1000, duration: 98 },
            { id: "eid8980", tween: [ "style", "${_LeftKnee}", "top", '61px', { fromValue: '69px'}], position: 1098, duration: 362 },
            { id: "eid8990", tween: [ "style", "${_LeftKnee}", "top", '64px', { fromValue: '61px'}], position: 1460, duration: 231 },
            { id: "eid9063", tween: [ "style", "${_LeftKnee}", "top", '65px', { fromValue: '64px'}], position: 1691, duration: 309 },
            { id: "eid9223", tween: [ "style", "${_LeftKnee}", "top", '67px', { fromValue: '65px'}], position: 2369, duration: 198 },
            { id: "eid9224", tween: [ "style", "${_LeftKnee}", "top", '64px', { fromValue: '67px'}], position: 2567, duration: 494 },
            { id: "eid9251", tween: [ "style", "${_LeftKnee}", "top", '65px', { fromValue: '64px'}], position: 3061, duration: 297 },
            { id: "eid4393", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8967", tween: [ "style", "${_Hip}", "left", '-2px', { fromValue: '0px'}], position: 851, duration: 247 },
            { id: "eid8968", tween: [ "style", "${_Hip}", "left", '2px', { fromValue: '-2px'}], position: 1098, duration: 362 },
            { id: "eid8970", tween: [ "style", "${_Hip}", "left", '3px', { fromValue: '2px'}], position: 1460, duration: 216 },
            { id: "eid8972", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '3px'}], position: 1676, duration: 324 },
            { id: "eid9034", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9213", tween: [ "style", "${_Hip}", "left", '-5px', { fromValue: '0px'}], position: 2369, duration: 198 },
            { id: "eid9214", tween: [ "style", "${_Hip}", "left", '8px', { fromValue: '-5px'}], position: 2567, duration: 494 },
            { id: "eid9241", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '8px'}], position: 3061, duration: 297 },
            { id: "eid5820", tween: [ "style", "${_LeftLeg}", "left", '36px', { fromValue: '-38px'}], position: 0, duration: 0 },
            { id: "eid8951", tween: [ "style", "${_LeftLeg}", "left", '36px', { fromValue: '36px'}], position: 851, duration: 0 },
            { id: "eid8888", tween: [ "style", "${_LeftLeg}", "left", '36px', { fromValue: '36px'}], position: 1000, duration: 0 },
            { id: "eid9058", tween: [ "style", "${_LeftLeg}", "left", '36px', { fromValue: '36px'}], position: 2000, duration: 0 },
            { id: "eid9142", tween: [ "style", "${_LeftLeg}", "left", '36px', { fromValue: '36px'}], position: 2369, duration: 0 },
            { id: "eid9202", tween: [ "style", "${_LeftLeg}", "left", '36px', { fromValue: '36px'}], position: 3358, duration: 0 },
            { id: "eid4435", tween: [ "transform", "${_LeftKnee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8921", tween: [ "transform", "${_LeftKnee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8979", tween: [ "transform", "${_LeftKnee}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 1000, duration: 460 },
            { id: "eid8986", tween: [ "transform", "${_LeftKnee}", "rotateZ", '2deg', { fromValue: '-7deg'}], position: 1460, duration: 231 },
            { id: "eid9065", tween: [ "transform", "${_LeftKnee}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1691, duration: 309 },
            { id: "eid9246", tween: [ "transform", "${_LeftKnee}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 2369, duration: 692 },
            { id: "eid9247", tween: [ "transform", "${_LeftKnee}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 3061, duration: 297 },
            { id: "eid4537", tween: [ "transform", "${_RightPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8912", tween: [ "transform", "${_RightPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8857", tween: [ "transform", "${_RightPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9080", tween: [ "transform", "${_RightPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9101", tween: [ "transform", "${_RightPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9161", tween: [ "transform", "${_RightPelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4425", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8833", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid9035", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9109", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9169", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4407", tween: [ "style", "${_RightKnee}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8952", tween: [ "style", "${_RightKnee}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8896", tween: [ "style", "${_RightKnee}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9082", tween: [ "style", "${_RightKnee}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9143", tween: [ "style", "${_RightKnee}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9203", tween: [ "style", "${_RightKnee}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid5821", tween: [ "style", "${_RightLeg}", "left", '-41px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid8949", tween: [ "style", "${_RightLeg}", "left", '-41px', { fromValue: '-41px'}], position: 851, duration: 0 },
            { id: "eid8894", tween: [ "style", "${_RightLeg}", "left", '-41px', { fromValue: '-41px'}], position: 1000, duration: 0 },
            { id: "eid9076", tween: [ "style", "${_RightLeg}", "left", '-41px', { fromValue: '-41px'}], position: 2000, duration: 0 },
            { id: "eid9140", tween: [ "style", "${_RightLeg}", "left", '-41px', { fromValue: '-41px'}], position: 2369, duration: 0 },
            { id: "eid9200", tween: [ "style", "${_RightLeg}", "left", '-41px', { fromValue: '-41px'}], position: 3358, duration: 0 },
            { id: "eid5662", tween: [ "transform", "${_LeftAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid8907", tween: [ "transform", "${_LeftAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 851, duration: 0 },
            { id: "eid8855", tween: [ "transform", "${_LeftAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid9074", tween: [ "transform", "${_LeftAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid9096", tween: [ "transform", "${_LeftAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2369, duration: 0 },
            { id: "eid9156", tween: [ "transform", "${_LeftAnkleElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3358, duration: 0 },
            { id: "eid4567", tween: [ "style", "${_ArmLeft}", "left", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid8955", tween: [ "style", "${_ArmLeft}", "left", '56px', { fromValue: '56px'}], position: 851, duration: 0 },
            { id: "eid8885", tween: [ "style", "${_ArmLeft}", "left", '56px', { fromValue: '56px'}], position: 1000, duration: 0 },
            { id: "eid9049", tween: [ "style", "${_ArmLeft}", "left", '56px', { fromValue: '56px'}], position: 2000, duration: 0 },
            { id: "eid9146", tween: [ "style", "${_ArmLeft}", "left", '56px', { fromValue: '56px'}], position: 2369, duration: 0 },
            { id: "eid9206", tween: [ "style", "${_ArmLeft}", "left", '56px', { fromValue: '56px'}], position: 3358, duration: 0 },
            { id: "eid4564", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8953", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid8886", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid9052", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9144", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9204", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid69", tween: [ "style", "${_SpineElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4411", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 0, duration: 0 },
            { id: "eid8937", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 851, duration: 0 },
            { id: "eid9039", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 2000, duration: 0 },
            { id: "eid9127", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 2369, duration: 0 },
            { id: "eid9187", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 3358, duration: 0 },
            { id: "eid5741", tween: [ "style", "${_RightLeg}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid8930", tween: [ "style", "${_RightLeg}", "top", '40px', { fromValue: '40px'}], position: 851, duration: 0 },
            { id: "eid8875", tween: [ "style", "${_RightLeg}", "top", '40px', { fromValue: '40px'}], position: 1000, duration: 0 },
            { id: "eid9075", tween: [ "style", "${_RightLeg}", "top", '40px', { fromValue: '40px'}], position: 2000, duration: 0 },
            { id: "eid9120", tween: [ "style", "${_RightLeg}", "top", '40px', { fromValue: '40px'}], position: 2369, duration: 0 },
            { id: "eid9180", tween: [ "style", "${_RightLeg}", "top", '40px', { fromValue: '40px'}], position: 3358, duration: 0 },
            { id: "eid4566", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8958", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 851, duration: 0 },
            { id: "eid9037", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9150", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 2369, duration: 0 },
            { id: "eid9210", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 3358, duration: 0 },
            { id: "eid5713", tween: [ "style", "${_RightAnkle}", "top", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
            { id: "eid8935", tween: [ "style", "${_RightAnkle}", "top", '53px', { fromValue: '53px'}], position: 851, duration: 0 },
            { id: "eid8989", tween: [ "style", "${_RightAnkle}", "top", '55px', { fromValue: '53px'}], position: 1000, duration: 98 },
            { id: "eid9087", tween: [ "style", "${_RightAnkle}", "top", '53px', { fromValue: '55px'}], position: 1691, duration: 309 },
            { id: "eid9233", tween: [ "style", "${_RightAnkle}", "top", '47px', { fromValue: '53px'}], position: 2369, duration: 198 },
            { id: "eid9234", tween: [ "style", "${_RightAnkle}", "top", '53px', { fromValue: '47px'}], position: 2567, duration: 791 },
            { id: "eid4409", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8965", tween: [ "style", "${_Hip}", "top", '-3px', { fromValue: '0px'}], position: 851, duration: 247 },
            { id: "eid8966", tween: [ "style", "${_Hip}", "top", '4px', { fromValue: '-3px'}], position: 1098, duration: 362 },
            { id: "eid8969", tween: [ "style", "${_Hip}", "top", '-4px', { fromValue: '4px'}], position: 1460, duration: 216 },
            { id: "eid8971", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '-4px'}], position: 1676, duration: 324 },
            { id: "eid9033", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid9215", tween: [ "style", "${_Hip}", "top", '1px', { fromValue: '0px'}], position: 2369, duration: 198 },
            { id: "eid9216", tween: [ "style", "${_Hip}", "top", '4px', { fromValue: '1px'}], position: 2567, duration: 494 },
            { id: "eid9242", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '4px'}], position: 3061, duration: 297 }         ]
      }
   }
},
"Element": {
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
      userClass: 'hip_element',
      rect: ['0px','0px','10px','10px','auto','auto'],
      id: 'HipElement',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ],
         "${_HipElement}": [
            ["color", "background-color", 'rgba(255,0,0,0.00)'],
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
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
            { id: "eid10349", tween: [ "color", "${_HipElement}", "background-color", 'rgba(255,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,0.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid10348", tween: [ "style", "${_HipElement}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 }         ]
      }
   }
},
"Arm": {
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
      id: 'Shoulder',
      type: 'group',
      rect: ['0','0','10','10','auto','auto'],
      c: [
      {
         id: 'Ellbow',
         type: 'group',
         rect: ['0','40px','10','10','auto','auto'],
         c: [
         {
            id: 'Wrist',
            type: 'group',
            rect: ['0','45px','10','10','auto','auto'],
            c: [
            {
               id: 'WristElement',
               type: 'rect',
               rect: ['0px','0px','auto','auto','auto','auto']
            }]
         },
         {
            id: 'EllbowElement',
            type: 'rect',
            rect: ['0px','0px','auto','auto','auto','auto']
         }]
      },
      {
         id: 'ShoulderElement',
         type: 'rect',
         rect: ['0px','0px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'EllbowElement',
      symbolName: 'Element'
   },
   {
      id: 'WristElement',
      symbolName: 'Element'
   },
   {
      id: 'ShoulderElement',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_Wrist}": [
            ["style", "top", '45px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Ellbow}": [
            ["style", "top", '40px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_EllbowElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_WristElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ],
         "${_Shoulder}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ShoulderElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13250,
         autoPlay: false,
         labels: {
            "Movement-1": 701,
            "Movement-2": 2086,
            "Movement-3": 3321,
            "Movement-4": 4704,
            "Movement-5": 6000,
            "Movement-6": 7312,
            "Movement-7": 8750,
            "Movement-8": 10055,
            "Movement-9": 11381
         },
         timeline: [
            { id: "eid104", tween: [ "transform", "${_EllbowElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5528", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5563", tween: [ "transform", "${_Shoulder}", "rotateZ", '-40deg', { fromValue: '0deg'}], position: 701, duration: 500 },
            { id: "eid5564", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-40deg'}], position: 1201, duration: 500 },
            { id: "eid6084", tween: [ "transform", "${_Shoulder}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 2086, duration: 164 },
            { id: "eid6085", tween: [ "transform", "${_Shoulder}", "rotateZ", '5deg', { fromValue: '26deg'}], position: 2250, duration: 203 },
            { id: "eid6102", tween: [ "transform", "${_Shoulder}", "rotateZ", '54deg', { fromValue: '5deg'}], position: 2453, duration: 192 },
            { id: "eid6106", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '54deg'}], position: 2645, duration: 232 },
            { id: "eid6172", tween: [ "transform", "${_Shoulder}", "rotateZ", '-74deg', { fromValue: '0deg'}], position: 3321, duration: 179 },
            { id: "eid6173", tween: [ "transform", "${_Shoulder}", "rotateZ", '-151deg', { fromValue: '-74deg'}], position: 3500, duration: 250 },
            { id: "eid6180", tween: [ "transform", "${_Shoulder}", "rotateZ", '-22deg', { fromValue: '-151deg'}], position: 3750, duration: 205 },
            { id: "eid6183", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-22deg'}], position: 3955, duration: 221 },
            { id: "eid6401", tween: [ "transform", "${_Shoulder}", "rotateZ", '-92deg', { fromValue: '0deg'}], position: 4704, duration: 208 },
            { id: "eid6402", tween: [ "transform", "${_Shoulder}", "rotateZ", '-89deg', { fromValue: '-92deg'}], position: 4912, duration: 263 },
            { id: "eid6409", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-89deg'}], position: 5175, duration: 212 },
            { id: "eid6414", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5595, duration: 0 },
            { id: "eid6472", tween: [ "transform", "${_Shoulder}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 6000, duration: 750 },
            { id: "eid6473", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 6750, duration: 71 },
            { id: "eid6537", tween: [ "transform", "${_Shoulder}", "rotateZ", '73deg', { fromValue: '0deg'}], position: 7312, duration: 154 },
            { id: "eid6538", tween: [ "transform", "${_Shoulder}", "rotateZ", '69deg', { fromValue: '73deg'}], position: 7466, duration: 228 },
            { id: "eid6551", tween: [ "transform", "${_Shoulder}", "rotateZ", '85deg', { fromValue: '69deg'}], position: 7694, duration: 206 },
            { id: "eid6555", tween: [ "transform", "${_Shoulder}", "rotateZ", '65deg', { fromValue: '85deg'}], position: 7900, duration: 169 },
            { id: "eid6558", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '65deg'}], position: 8069, duration: 215 },
            { id: "eid6611", tween: [ "transform", "${_Shoulder}", "rotateZ", '89deg', { fromValue: '0deg'}], position: 8750, duration: 124 },
            { id: "eid6612", tween: [ "transform", "${_Shoulder}", "rotateZ", '59deg', { fromValue: '89deg'}], position: 8874, duration: 126 },
            { id: "eid6613", tween: [ "transform", "${_Shoulder}", "rotateZ", '92deg', { fromValue: '59deg'}], position: 9000, duration: 190 },
            { id: "eid6614", tween: [ "transform", "${_Shoulder}", "rotateZ", '15deg', { fromValue: '92deg'}], position: 9190, duration: 209 },
            { id: "eid6615", tween: [ "transform", "${_Shoulder}", "rotateZ", '87deg', { fromValue: '15deg'}], position: 9399, duration: 175 },
            { id: "eid6616", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '87deg'}], position: 9574, duration: 176 },
            { id: "eid9436", tween: [ "transform", "${_Shoulder}", "rotateZ", '68deg', { fromValue: '0deg'}], position: 10055, duration: 146 },
            { id: "eid9437", tween: [ "transform", "${_Shoulder}", "rotateZ", '140deg', { fromValue: '68deg'}], position: 10201, duration: 549 },
            { id: "eid9453", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '140deg'}], position: 10750, duration: 250 },
            { id: "eid9871", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11381, duration: 0 },
            { id: "eid9912", tween: [ "transform", "${_Shoulder}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 11562, duration: 30 },
            { id: "eid9917", tween: [ "transform", "${_Shoulder}", "rotateZ", '168deg', { fromValue: '180deg'}], position: 11592, duration: 693 },
            { id: "eid9930", tween: [ "transform", "${_Shoulder}", "rotateZ", '169deg', { fromValue: '168deg'}], position: 12285, duration: 80 },
            { id: "eid9918", tween: [ "transform", "${_Shoulder}", "rotateZ", '45deg', { fromValue: '169deg'}], position: 12365, duration: 338 },
            { id: "eid9931", tween: [ "transform", "${_Shoulder}", "rotateZ", '180deg', { fromValue: '45deg'}], position: 12750, duration: 169 },
            { id: "eid9932", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 12971, duration: 279 },
            { id: "eid5533", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
            { id: "eid5571", tween: [ "style", "${_Wrist}", "top", '187px', { fromValue: '45px'}], position: 701, duration: 500 },
            { id: "eid5572", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '187px'}], position: 1201, duration: 500 },
            { id: "eid6092", tween: [ "style", "${_Wrist}", "top", '166px', { fromValue: '45px'}], position: 2086, duration: 164 },
            { id: "eid6093", tween: [ "style", "${_Wrist}", "top", '73px', { fromValue: '166px'}], position: 2250, duration: 203 },
            { id: "eid6103", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '73px'}], position: 2453, duration: 424 },
            { id: "eid6178", tween: [ "style", "${_Wrist}", "top", '62px', { fromValue: '45px'}], position: 3321, duration: 179 },
            { id: "eid6179", tween: [ "style", "${_Wrist}", "top", '97px', { fromValue: '62px'}], position: 3500, duration: 250 },
            { id: "eid6182", tween: [ "style", "${_Wrist}", "top", '113px', { fromValue: '97px'}], position: 3750, duration: 205 },
            { id: "eid6186", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '113px'}], position: 3955, duration: 221 },
            { id: "eid6405", tween: [ "style", "${_Wrist}", "top", '92px', { fromValue: '45px'}], position: 4704, duration: 208 },
            { id: "eid6406", tween: [ "style", "${_Wrist}", "top", '8px', { fromValue: '92px'}], position: 4912, duration: 588 },
            { id: "eid6417", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '8px'}], position: 5500, duration: 95 },
            { id: "eid6485", tween: [ "style", "${_Wrist}", "top", '29px', { fromValue: '45px'}], position: 6000, duration: 204 },
            { id: "eid6486", tween: [ "style", "${_Wrist}", "top", '58px', { fromValue: '29px'}], position: 6204, duration: 266 },
            { id: "eid6490", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '58px'}], position: 6470, duration: 351 },
            { id: "eid6559", tween: [ "style", "${_Wrist}", "top", '98px', { fromValue: '45px'}], position: 7312, duration: 302 },
            { id: "eid6560", tween: [ "style", "${_Wrist}", "top", '96px', { fromValue: '98px'}], position: 7614, duration: 220 },
            { id: "eid6563", tween: [ "style", "${_Wrist}", "top", '86px', { fromValue: '96px'}], position: 7834, duration: 235 },
            { id: "eid6564", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '86px'}], position: 8069, duration: 215 },
            { id: "eid6587", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '45px'}], position: 8750, duration: 0 },
            { id: "eid6607", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '45px'}], position: 9750, duration: 0 },
            { id: "eid9442", tween: [ "style", "${_Wrist}", "top", '91px', { fromValue: '45px'}], position: 10055, duration: 262 },
            { id: "eid9443", tween: [ "style", "${_Wrist}", "top", '59px', { fromValue: '91px'}], position: 10317, duration: 136 },
            { id: "eid9450", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '59px'}], position: 10453, duration: 547 },
            { id: "eid9905", tween: [ "style", "${_Wrist}", "top", '7px', { fromValue: '45px'}], position: 11381, duration: 83 },
            { id: "eid9906", tween: [ "style", "${_Wrist}", "top", '-3px', { fromValue: '7px'}], position: 11464, duration: 98 },
            { id: "eid9910", tween: [ "style", "${_Wrist}", "top", '52px', { fromValue: '-3px'}], position: 11562, duration: 346 },
            { id: "eid9916", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '52px'}], position: 11908, duration: 1342 },
            { id: "eid96", tween: [ "style", "${_ShoulderElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_ShoulderElement}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid5531", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5544", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 701, duration: 0 },
            { id: "eid5557", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 1701, duration: 0 },
            { id: "eid6082", tween: [ "style", "${_Shoulder}", "top", '68px', { fromValue: '0px'}], position: 2086, duration: 164 },
            { id: "eid6083", tween: [ "style", "${_Shoulder}", "top", '21px', { fromValue: '68px'}], position: 2250, duration: 203 },
            { id: "eid6099", tween: [ "style", "${_Shoulder}", "top", '-10px', { fromValue: '21px'}], position: 2453, duration: 192 },
            { id: "eid6107", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '-10px'}], position: 2645, duration: 232 },
            { id: "eid6157", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 3321, duration: 0 },
            { id: "eid6166", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 4176, duration: 0 },
            { id: "eid6386", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 4704, duration: 0 },
            { id: "eid6395", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 5595, duration: 0 },
            { id: "eid6445", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
            { id: "eid6454", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 6821, duration: 0 },
            { id: "eid6522", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 7312, duration: 0 },
            { id: "eid6531", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 8284, duration: 0 },
            { id: "eid6585", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid6605", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 9750, duration: 0 },
            { id: "eid9421", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 10055, duration: 0 },
            { id: "eid9427", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 11000, duration: 0 },
            { id: "eid9874", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 11381, duration: 0 },
            { id: "eid9899", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 13250, duration: 0 },
            { id: "eid90", tween: [ "style", "${_ShoulderElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "style", "${_ShoulderElement}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid94", tween: [ "style", "${_WristElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5534", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5547", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 701, duration: 0 },
            { id: "eid5559", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 1701, duration: 0 },
            { id: "eid6100", tween: [ "style", "${_Shoulder}", "left", '20px', { fromValue: '0px'}], position: 2086, duration: 367 },
            { id: "eid6101", tween: [ "style", "${_Shoulder}", "left", '-1px', { fromValue: '20px'}], position: 2453, duration: 192 },
            { id: "eid6108", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '-1px'}], position: 2645, duration: 232 },
            { id: "eid6160", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 3321, duration: 0 },
            { id: "eid6169", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 4176, duration: 0 },
            { id: "eid6389", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 4704, duration: 0 },
            { id: "eid6398", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 5595, duration: 0 },
            { id: "eid6448", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
            { id: "eid6457", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 6821, duration: 0 },
            { id: "eid6525", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 7312, duration: 0 },
            { id: "eid6534", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 8284, duration: 0 },
            { id: "eid6588", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid6608", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 9750, duration: 0 },
            { id: "eid9424", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 10055, duration: 0 },
            { id: "eid9430", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 11000, duration: 0 },
            { id: "eid9877", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 11381, duration: 0 },
            { id: "eid9902", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 13250, duration: 0 },
            { id: "eid98", tween: [ "style", "${_EllbowElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid92", tween: [ "style", "${_EllbowElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5530", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5543", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 701, duration: 0 },
            { id: "eid5554", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1701, duration: 0 },
            { id: "eid6094", tween: [ "transform", "${_Wrist}", "rotateZ", '31deg', { fromValue: '0deg'}], position: 2086, duration: 164 },
            { id: "eid6095", tween: [ "transform", "${_Wrist}", "rotateZ", '-28deg', { fromValue: '31deg'}], position: 2250, duration: 203 },
            { id: "eid6096", tween: [ "transform", "${_Wrist}", "rotateZ", '-85deg', { fromValue: '-28deg'}], position: 2453, duration: 192 },
            { id: "eid6104", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '-85deg'}], position: 2645, duration: 232 },
            { id: "eid6156", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3321, duration: 0 },
            { id: "eid6165", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4176, duration: 0 },
            { id: "eid6411", tween: [ "transform", "${_Wrist}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 4704, duration: 471 },
            { id: "eid6412", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 5175, duration: 420 },
            { id: "eid6476", tween: [ "transform", "${_Wrist}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 6000, duration: 204 },
            { id: "eid6478", tween: [ "transform", "${_Wrist}", "rotateZ", '-62deg', { fromValue: '45deg'}], position: 6204, duration: 205 },
            { id: "eid6479", tween: [ "transform", "${_Wrist}", "rotateZ", '16deg', { fromValue: '-62deg'}], position: 6409, duration: 177 },
            { id: "eid6480", tween: [ "transform", "${_Wrist}", "rotateZ", '-20deg', { fromValue: '16deg'}], position: 6586, duration: 164 },
            { id: "eid6477", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 6750, duration: 71 },
            { id: "eid6521", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7312, duration: 0 },
            { id: "eid6530", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8284, duration: 0 },
            { id: "eid6593", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8750, duration: 0 },
            { id: "eid6604", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9750, duration: 0 },
            { id: "eid9444", tween: [ "transform", "${_Wrist}", "rotateZ", '35deg', { fromValue: '0deg'}], position: 10138, duration: 63 },
            { id: "eid9445", tween: [ "transform", "${_Wrist}", "rotateZ", '-5deg', { fromValue: '35deg'}], position: 10201, duration: 175 },
            { id: "eid9448", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 10376, duration: 77 },
            { id: "eid9451", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11000, duration: 0 },
            { id: "eid9873", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11381, duration: 0 },
            { id: "eid9898", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 13250, duration: 0 },
            { id: "eid102", tween: [ "transform", "${_ShoulderElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "transform", "${_ShoulderElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid5536", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5549", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 701, duration: 0 },
            { id: "eid5556", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 1701, duration: 0 },
            { id: "eid6066", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 2086, duration: 0 },
            { id: "eid6081", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 2877, duration: 0 },
            { id: "eid6162", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 3321, duration: 0 },
            { id: "eid6171", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 4176, duration: 0 },
            { id: "eid6391", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 4704, duration: 0 },
            { id: "eid6400", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 5595, duration: 0 },
            { id: "eid6450", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
            { id: "eid6459", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 6821, duration: 0 },
            { id: "eid6561", tween: [ "style", "${_Wrist}", "left", '43px', { fromValue: '0px'}], position: 7312, duration: 522 },
            { id: "eid6562", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '43px'}], position: 7834, duration: 450 },
            { id: "eid6590", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid6610", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 9750, duration: 0 },
            { id: "eid9426", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 10055, duration: 0 },
            { id: "eid9432", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 11000, duration: 0 },
            { id: "eid9879", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 11381, duration: 0 },
            { id: "eid9904", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 13250, duration: 0 },
            { id: "eid5532", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid5565", tween: [ "style", "${_Ellbow}", "top", '93px', { fromValue: '40px'}], position: 701, duration: 500 },
            { id: "eid5566", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '93px'}], position: 1201, duration: 500 },
            { id: "eid6088", tween: [ "style", "${_Ellbow}", "top", '72px', { fromValue: '40px'}], position: 2086, duration: 164 },
            { id: "eid6089", tween: [ "style", "${_Ellbow}", "top", '117px', { fromValue: '72px'}], position: 2250, duration: 203 },
            { id: "eid6098", tween: [ "style", "${_Ellbow}", "top", '48px', { fromValue: '117px'}], position: 2453, duration: 192 },
            { id: "eid6109", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '48px'}], position: 2645, duration: 232 },
            { id: "eid6176", tween: [ "style", "${_Ellbow}", "top", '52px', { fromValue: '40px'}], position: 3321, duration: 179 },
            { id: "eid6177", tween: [ "style", "${_Ellbow}", "top", '86px', { fromValue: '52px'}], position: 3500, duration: 250 },
            { id: "eid6181", tween: [ "style", "${_Ellbow}", "top", '75px', { fromValue: '86px'}], position: 3750, duration: 205 },
            { id: "eid6185", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '75px'}], position: 3955, duration: 221 },
            { id: "eid6403", tween: [ "style", "${_Ellbow}", "top", '91px', { fromValue: '40px'}], position: 4704, duration: 208 },
            { id: "eid6404", tween: [ "style", "${_Ellbow}", "top", '61px', { fromValue: '91px'}], position: 4912, duration: 263 },
            { id: "eid6410", tween: [ "style", "${_Ellbow}", "top", '46px', { fromValue: '61px'}], position: 5175, duration: 325 },
            { id: "eid6416", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '46px'}], position: 5500, duration: 95 },
            { id: "eid6487", tween: [ "style", "${_Ellbow}", "top", '59px', { fromValue: '40px'}], position: 6000, duration: 204 },
            { id: "eid6488", tween: [ "style", "${_Ellbow}", "top", '26px', { fromValue: '59px'}], position: 6204, duration: 266 },
            { id: "eid6489", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '26px'}], position: 6470, duration: 351 },
            { id: "eid6523", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 7312, duration: 0 },
            { id: "eid6532", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 8284, duration: 0 },
            { id: "eid6586", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 8750, duration: 0 },
            { id: "eid6606", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 9750, duration: 0 },
            { id: "eid9438", tween: [ "style", "${_Ellbow}", "top", '88px', { fromValue: '40px'}], position: 10138, duration: 133 },
            { id: "eid9439", tween: [ "style", "${_Ellbow}", "top", '69px', { fromValue: '88px'}], position: 10271, duration: 105 },
            { id: "eid9447", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '69px'}], position: 10376, duration: 624 },
            { id: "eid9907", tween: [ "style", "${_Ellbow}", "top", '28px', { fromValue: '40px'}], position: 11381, duration: 83 },
            { id: "eid9908", tween: [ "style", "${_Ellbow}", "top", '1px', { fromValue: '28px'}], position: 11464, duration: 98 },
            { id: "eid9909", tween: [ "style", "${_Ellbow}", "top", '48px', { fromValue: '1px'}], position: 11562, duration: 346 },
            { id: "eid9915", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '48px'}], position: 11908, duration: 1342 },
            { id: "eid5535", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5569", tween: [ "style", "${_Ellbow}", "left", '-1px', { fromValue: '0px'}], position: 701, duration: 500 },
            { id: "eid5570", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '-1px'}], position: 1201, duration: 500 },
            { id: "eid6086", tween: [ "style", "${_Ellbow}", "left", '23px', { fromValue: '0px'}], position: 2086, duration: 164 },
            { id: "eid6087", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '23px'}], position: 2250, duration: 627 },
            { id: "eid6161", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 3321, duration: 0 },
            { id: "eid6170", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 4176, duration: 0 },
            { id: "eid6390", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 4704, duration: 0 },
            { id: "eid6399", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 5595, duration: 0 },
            { id: "eid6449", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
            { id: "eid6458", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 6821, duration: 0 },
            { id: "eid6526", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 7312, duration: 0 },
            { id: "eid6535", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 8284, duration: 0 },
            { id: "eid6589", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid6609", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 9750, duration: 0 },
            { id: "eid9425", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 10138, duration: 0 },
            { id: "eid9431", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 11000, duration: 0 },
            { id: "eid9878", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 11381, duration: 0 },
            { id: "eid9903", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 13250, duration: 0 },
            { id: "eid100", tween: [ "style", "${_WristElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "transform", "${_WristElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5529", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5567", tween: [ "transform", "${_Ellbow}", "rotateZ", '-148deg', { fromValue: '0deg'}], position: 701, duration: 250 },
            { id: "eid6050", tween: [ "transform", "${_Ellbow}", "rotateZ", '-20deg', { fromValue: '-148deg'}], position: 951, duration: 250 },
            { id: "eid5568", tween: [ "transform", "${_Ellbow}", "rotateZ", '191deg', { fromValue: '-20deg'}], position: 1201, duration: 250 },
            { id: "eid6051", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '191deg'}], position: 1451, duration: 250 },
            { id: "eid6090", tween: [ "transform", "${_Ellbow}", "rotateZ", '52deg', { fromValue: '0deg'}], position: 2086, duration: 164 },
            { id: "eid6091", tween: [ "transform", "${_Ellbow}", "rotateZ", '7deg', { fromValue: '52deg'}], position: 2250, duration: 203 },
            { id: "eid6097", tween: [ "transform", "${_Ellbow}", "rotateZ", '-67deg', { fromValue: '7deg'}], position: 2453, duration: 192 },
            { id: "eid6105", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-67deg'}], position: 2645, duration: 232 },
            { id: "eid6174", tween: [ "transform", "${_Ellbow}", "rotateZ", '-25deg', { fromValue: '0deg'}], position: 3321, duration: 179 },
            { id: "eid6175", tween: [ "transform", "${_Ellbow}", "rotateZ", '-118deg', { fromValue: '-25deg'}], position: 3500, duration: 455 },
            { id: "eid6184", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-118deg'}], position: 3955, duration: 221 },
            { id: "eid6407", tween: [ "transform", "${_Ellbow}", "rotateZ", '169deg', { fromValue: '0deg'}], position: 4704, duration: 208 },
            { id: "eid6408", tween: [ "transform", "${_Ellbow}", "rotateZ", '58deg', { fromValue: '169deg'}], position: 4912, duration: 263 },
            { id: "eid6413", tween: [ "transform", "${_Ellbow}", "rotateZ", '-125deg', { fromValue: '58deg'}], position: 5175, duration: 212 },
            { id: "eid6415", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-125deg'}], position: 5387, duration: 208 },
            { id: "eid6474", tween: [ "transform", "${_Ellbow}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 6000, duration: 750 },
            { id: "eid6475", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 6750, duration: 71 },
            { id: "eid6520", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7312, duration: 0 },
            { id: "eid6553", tween: [ "transform", "${_Ellbow}", "rotateZ", '103deg', { fromValue: '0deg'}], position: 7466, duration: 228 },
            { id: "eid6554", tween: [ "transform", "${_Ellbow}", "rotateZ", '-80deg', { fromValue: '103deg'}], position: 7694, duration: 206 },
            { id: "eid6556", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-80deg'}], position: 7900, duration: 169 },
            { id: "eid6557", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8284, duration: 0 },
            { id: "eid6592", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8750, duration: 0 },
            { id: "eid6618", tween: [ "transform", "${_Ellbow}", "rotateZ", '120deg', { fromValue: '0deg'}], position: 8874, duration: 126 },
            { id: "eid6619", tween: [ "transform", "${_Ellbow}", "rotateZ", '130deg', { fromValue: '120deg'}], position: 9000, duration: 315 },
            { id: "eid6620", tween: [ "transform", "${_Ellbow}", "rotateZ", '92deg', { fromValue: '130deg'}], position: 9315, duration: 127 },
            { id: "eid6621", tween: [ "transform", "${_Ellbow}", "rotateZ", '6deg', { fromValue: '92deg'}], position: 9442, duration: 181 },
            { id: "eid6622", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 9623, duration: 127 },
            { id: "eid9440", tween: [ "transform", "${_Ellbow}", "rotateZ", '-151deg', { fromValue: '0deg'}], position: 10138, duration: 133 },
            { id: "eid9441", tween: [ "transform", "${_Ellbow}", "rotateZ", '-47deg', { fromValue: '-151deg'}], position: 10271, duration: 105 },
            { id: "eid9446", tween: [ "transform", "${_Ellbow}", "rotateZ", '2deg', { fromValue: '-47deg'}], position: 10376, duration: 216 },
            { id: "eid9452", tween: [ "transform", "${_Ellbow}", "rotateZ", '70deg', { fromValue: '2deg'}], position: 10592, duration: 25 },
            { id: "eid9454", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '70deg'}], position: 10617, duration: 383 },
            { id: "eid9919", tween: [ "transform", "${_Ellbow}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 11381, duration: 847 },
            { id: "eid9920", tween: [ "transform", "${_Ellbow}", "rotateZ", '42deg', { fromValue: '18deg'}], position: 12228, duration: 522 },
            { id: "eid9923", tween: [ "transform", "${_Ellbow}", "rotateZ", '-36deg', { fromValue: '42deg'}], position: 12750, duration: 90 },
            { id: "eid9924", tween: [ "transform", "${_Ellbow}", "rotateZ", '26deg', { fromValue: '-36deg'}], position: 12840, duration: 131 },
            { id: "eid9925", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 12971, duration: 279 }         ]
      }
   }
},
"Leg": {
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
      id: 'Knee',
      type: 'group',
      rect: ['0','36px','10','10','auto','auto'],
      c: [
      {
         id: 'KneeElement',
         type: 'rect',
         rect: ['55px','-40px','auto','auto','auto','auto']
      }]
   },
   {
      id: 'PelvisElement',
      type: 'rect',
      rect: ['55px','-40px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'PelvisElement',
      symbolName: 'Element'
   },
   {
      id: 'KneeElement',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_PelvisElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${_Knee}": [
            ["style", "top", '56px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${_KneeElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5750,
         autoPlay: true,
         labels: {
            "Movement-1": 750,
            "Movement-2": 3000,
            "Movement-3": 4852
         },
         timeline: [
            { id: "eid2267", tween: [ "style", "${_Knee}", "top", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid2594", tween: [ "style", "${_Knee}", "top", '95px', { fromValue: '56px'}], position: 750, duration: 361 },
            { id: "eid2595", tween: [ "style", "${_Knee}", "top", '39px', { fromValue: '95px'}], position: 1111, duration: 539 },
            { id: "eid2921", tween: [ "style", "${_Knee}", "top", '137px', { fromValue: '39px'}], position: 1650, duration: 227 },
            { id: "eid2599", tween: [ "style", "${_Knee}", "top", '56px', { fromValue: '137px'}], position: 1877, duration: 277 },
            { id: "eid2611", tween: [ "style", "${_Knee}", "top", '38px', { fromValue: '56px'}], position: 3000, duration: 500 },
            { id: "eid2613", tween: [ "style", "${_Knee}", "top", '180px', { fromValue: '38px'}], position: 3500, duration: 405 },
            { id: "eid2619", tween: [ "style", "${_Knee}", "top", '94px', { fromValue: '180px'}], position: 3905, duration: 214 },
            { id: "eid2972", tween: [ "style", "${_Knee}", "top", '56px', { fromValue: '94px'}], position: 4119, duration: 131 },
            { id: "eid2753", tween: [ "style", "${_Knee}", "top", '143px', { fromValue: '56px'}], position: 4852, duration: 273 },
            { id: "eid2754", tween: [ "style", "${_Knee}", "top", '127px', { fromValue: '143px'}], position: 5125, duration: 375 },
            { id: "eid2758", tween: [ "style", "${_Knee}", "top", '81px', { fromValue: '127px'}], position: 5500, duration: 110 },
            { id: "eid2760", tween: [ "style", "${_Knee}", "top", '56px', { fromValue: '81px'}], position: 5610, duration: 140 },
            { id: "eid1335", tween: [ "transform", "${_PelvisElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1334", tween: [ "style", "${_PelvisElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1357", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid2588", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 750, duration: 0 },
            { id: "eid2591", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2154, duration: 0 },
            { id: "eid2608", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
            { id: "eid2617", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4250, duration: 0 },
            { id: "eid2747", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4852, duration: 0 },
            { id: "eid2750", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid1368", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid2596", tween: [ "style", "${_Knee}", "left", '10px', { fromValue: '0px'}], position: 750, duration: 361 },
            { id: "eid2597", tween: [ "style", "${_Knee}", "left", '10px', { fromValue: '10px'}], position: 1111, duration: 0 },
            { id: "eid2920", tween: [ "style", "${_Knee}", "left", '55px', { fromValue: '10px'}], position: 1650, duration: 227 },
            { id: "eid2598", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '55px'}], position: 1877, duration: 277 },
            { id: "eid2612", tween: [ "style", "${_Knee}", "left", '-5px', { fromValue: '0px'}], position: 3000, duration: 500 },
            { id: "eid2970", tween: [ "style", "${_Knee}", "left", '22px', { fromValue: '-5px'}], position: 3500, duration: 405 },
            { id: "eid2618", tween: [ "style", "${_Knee}", "left", '51px', { fromValue: '22px'}], position: 3905, duration: 214 },
            { id: "eid2971", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '51px'}], position: 4119, duration: 131 },
            { id: "eid2755", tween: [ "style", "${_Knee}", "left", '34px', { fromValue: '0px'}], position: 4852, duration: 273 },
            { id: "eid2756", tween: [ "style", "${_Knee}", "left", '-17px', { fromValue: '34px'}], position: 5125, duration: 375 },
            { id: "eid2757", tween: [ "style", "${_Knee}", "left", '10px', { fromValue: '-17px'}], position: 5500, duration: 110 },
            { id: "eid2759", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '10px'}], position: 5610, duration: 140 },
            { id: "eid1333", tween: [ "style", "${_PelvisElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1328", tween: [ "style", "${_KneeElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1325", tween: [ "style", "${_KneeElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1327", tween: [ "transform", "${_KneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-5003160");
