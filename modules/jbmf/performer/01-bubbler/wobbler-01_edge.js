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
            id:'Body',
            type:'rect',
            rect:['269','95','auto','auto','auto','auto']
         },
         {
            id:'CanvasContainer',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(6,0,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '600px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_CanvasContainer}": [
            ["style", "top", '0px'],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(6,0,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Body}": [
            ["style", "top", '127px'],
            ["style", "left", '251px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 450,
         autoPlay: true,
         timeline: [
            { id: "eid443", tween: [ "style", "${_Body}", "top", '127px', { fromValue: '127px'}], position: 450, duration: 0 },
            { id: "eid155", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 450, duration: 0 },
            { id: "eid442", tween: [ "style", "${_Body}", "left", '251px', { fromValue: '251px'}], position: 450, duration: 0 }         ]
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
      type: 'group',
      id: 'Shoulder',
      rect: ['0','0','10','10','auto','auto'],
      transform: [],
      c: [
      {
         type: 'group',
         id: 'Ellbow',
         rect: ['0','60px','10','10','auto','auto'],
         transform: [],
         c: [
         {
            id: 'Wrist',
            type: 'group',
            rect: ['0','63px','10','10','auto','auto'],
            c: [
            {
               id: 'Hand',
               type: 'image',
               rect: ['-10px','6px','30px','30px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/bubble_head.png','0px','0px']
            },
            {
               id: 'Wrist_Element',
               type: 'rect',
               rect: ['336px','-8px','auto','auto','auto','auto']
            }]
         },
         {
            id: 'Ellbow_Element',
            type: 'rect',
            rect: ['336px','55px','auto','auto','auto','auto']
         }]
      },
      {
         id: 'Shoulder_Element',
         type: 'rect',
         rect: ['336px','115px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'Shoulder_Element',
      symbolName: 'Element'
   },
   {
      id: 'Ellbow_Element',
      symbolName: 'Element'
   },
   {
      id: 'Wrist_Element',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_Hand}": [
            ["style", "top", '6px'],
            ["style", "height", '30px'],
            ["style", "left", '-10px'],
            ["style", "width", '30px']
         ],
         "${_Wrist}": [
            ["style", "top", '63px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Ellbow}": [
            ["style", "top", '60px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '10px']
         ],
         "${_Wrist_Element}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shoulder_Element}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shoulder}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Ellbow_Element}": [
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
         duration: 8500,
         autoPlay: true,
         labels: {
            "Movement-1": 120,
            "Movement-2": 2568,
            "Movement-3": 4659,
            "Movement-4": 6894
         },
         timeline: [
            { id: "eid418", tween: [ "style", "${_Shoulder_Element}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_Shoulder}", "rotateZ", '-77deg', { fromValue: '0deg'}], position: 120, duration: 362 },
            { id: "eid49", tween: [ "transform", "${_Shoulder}", "rotateZ", '-47deg', { fromValue: '-77deg'}], position: 696, duration: 219 },
            { id: "eid51", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-47deg'}], position: 916, duration: 144 },
            { id: "eid55", tween: [ "transform", "${_Shoulder}", "rotateZ", '-85deg', { fromValue: '0deg'}], position: 2568, duration: 320 },
            { id: "eid57", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-85deg'}], position: 3020, duration: 401 },
            { id: "eid68", tween: [ "transform", "${_Shoulder}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 4659, duration: 277 },
            { id: "eid70", tween: [ "transform", "${_Shoulder}", "rotateZ", '-32deg', { fromValue: '10deg'}], position: 4936, duration: 209 },
            { id: "eid73", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-32deg'}], position: 5145, duration: 176 },
            { id: "eid453", tween: [ "transform", "${_Shoulder}", "rotateZ", '-98deg', { fromValue: '0deg'}], position: 6894, duration: 356 },
            { id: "eid458", tween: [ "transform", "${_Shoulder}", "rotateZ", '-111deg', { fromValue: '-98deg'}], position: 7250, duration: 250 },
            { id: "eid464", tween: [ "transform", "${_Shoulder}", "rotateZ", '-139deg', { fromValue: '-111deg'}], position: 7500, duration: 250 },
            { id: "eid465", tween: [ "transform", "${_Shoulder}", "rotateZ", '-58deg', { fromValue: '-139deg'}], position: 7750, duration: 395 },
            { id: "eid468", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-58deg'}], position: 8145, duration: 355 },
            { id: "eid33", tween: [ "style", "${_Wrist}", "top", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "style", "${_Wrist}", "top", '17px', { fromValue: '63px'}], position: 6894, duration: 258 },
            { id: "eid460", tween: [ "style", "${_Wrist}", "top", '7px', { fromValue: '17px'}], position: 7152, duration: 218 },
            { id: "eid461", tween: [ "style", "${_Wrist}", "top", '20px', { fromValue: '7px'}], position: 7370, duration: 130 },
            { id: "eid462", tween: [ "style", "${_Wrist}", "top", '65px', { fromValue: '20px'}], position: 7500, duration: 250 },
            { id: "eid467", tween: [ "style", "${_Wrist}", "top", '14px', { fromValue: '65px'}], position: 7750, duration: 395 },
            { id: "eid470", tween: [ "style", "${_Wrist}", "top", '63px', { fromValue: '14px'}], position: 8145, duration: 355 },
            { id: "eid433", tween: [ "transform", "${_Shoulder_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_Shoulder}", "top", '30px', { fromValue: '0px'}], position: 4659, duration: 277 },
            { id: "eid71", tween: [ "style", "${_Shoulder}", "top", '20px', { fromValue: '30px'}], position: 4936, duration: 209 },
            { id: "eid72", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '20px'}], position: 5145, duration: 176 },
            { id: "eid448", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 6894, duration: 0 },
            { id: "eid411", tween: [ "style", "${_Wrist_Element}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid434", tween: [ "transform", "${_Ellbow_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 4659, duration: 0 },
            { id: "eid451", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 6894, duration: 0 },
            { id: "eid412", tween: [ "style", "${_Wrist_Element}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid435", tween: [ "transform", "${_Wrist_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid446", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6894, duration: 0 },
            { id: "eid473", tween: [ "transform", "${_Wrist}", "rotateZ", '-43deg', { fromValue: '0deg'}], position: 7887, duration: 258 },
            { id: "eid474", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '-43deg'}], position: 8145, duration: 355 },
            { id: "eid23", tween: [ "style", "${_Ellbow}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ellbow}", "top", '60px', { fromValue: '60px'}], position: 4659, duration: 0 },
            { id: "eid459", tween: [ "style", "${_Ellbow}", "top", '55px', { fromValue: '60px'}], position: 6894, duration: 606 },
            { id: "eid471", tween: [ "style", "${_Ellbow}", "top", '60px', { fromValue: '55px'}], position: 7500, duration: 1000 },
            { id: "eid39", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid452", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 6894, duration: 0 },
            { id: "eid416", tween: [ "style", "${_Shoulder_Element}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid413", tween: [ "style", "${_Ellbow_Element}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 4659, duration: 0 },
            { id: "eid450", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 6894, duration: 0 },
            { id: "eid415", tween: [ "style", "${_Ellbow_Element}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "transform", "${_Ellbow}", "rotateZ", '99deg', { fromValue: '0deg'}], position: 120, duration: 288 },
            { id: "eid26", tween: [ "transform", "${_Ellbow}", "rotateZ", '12deg', { fromValue: '99deg'}], position: 408, duration: 288 },
            { id: "eid50", tween: [ "transform", "${_Ellbow}", "rotateZ", '-26deg', { fromValue: '12deg'}], position: 696, duration: 219 },
            { id: "eid52", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 916, duration: 144 },
            { id: "eid58", tween: [ "transform", "${_Ellbow}", "rotateZ", '-49deg', { fromValue: '0deg'}], position: 2568, duration: 151 },
            { id: "eid59", tween: [ "transform", "${_Ellbow}", "rotateZ", '19deg', { fromValue: '-49deg'}], position: 2719, duration: 232 },
            { id: "eid60", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '19deg'}], position: 2951, duration: 470 },
            { id: "eid69", tween: [ "transform", "${_Ellbow}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 4659, duration: 277 },
            { id: "eid74", tween: [ "transform", "${_Ellbow}", "rotateZ", '85deg', { fromValue: '16deg'}], position: 4936, duration: 209 },
            { id: "eid75", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '85deg'}], position: 5145, duration: 316 },
            { id: "eid454", tween: [ "transform", "${_Ellbow}", "rotateZ", '151deg', { fromValue: '0deg'}], position: 6894, duration: 356 },
            { id: "eid457", tween: [ "transform", "${_Ellbow}", "rotateZ", '236deg', { fromValue: '151deg'}], position: 7250, duration: 250 },
            { id: "eid463", tween: [ "transform", "${_Ellbow}", "rotateZ", '325deg', { fromValue: '236deg'}], position: 7500, duration: 250 },
            { id: "eid466", tween: [ "transform", "${_Ellbow}", "rotateZ", '291deg', { fromValue: '325deg'}], position: 7750, duration: 395 },
            { id: "eid469", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '291deg'}], position: 8145, duration: 355 }         ]
      }
   }
},
"Rump": {
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
      id: 'Spine',
      type: 'rect',
      rect: ['0','172','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Spine',
      symbolName: 'Spine'
   }   ]
   },
   states: {
      "Base State": {
         "${_Spine}": [
            ["style", "top", '146px']
         ],
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2324,
         autoPlay: true,
         labels: {
            "Movement-1": 435,
            "Movement-2": 1750
         },
         timeline: [
            { id: "eid313", tween: [ "style", "${_Spine}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Head": {
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
      id: 'Neck',
      type: 'group',
      rect: ['0','0px','40px','40px','auto','auto'],
      c: [
      {
         id: 'Head',
         type: 'group',
         rect: ['0','-50px','40px','50px','auto','auto'],
         c: [
         {
            id: 'Head_Element',
            type: 'rect',
            rect: ['562px','374px','auto','auto','auto','auto']
         },
         {
            id: 'bubble_head',
            type: 'image',
            rect: ['-22px','-53px','84px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/bubble_head.png','0px','0px']
         }]
      },
      {
         id: 'Neck_Element',
         type: 'rect',
         rect: ['562','324','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'Neck_Element',
      symbolName: 'Element'
   },
   {
      id: 'Head_Element',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_Head}": [
            ["style", "top", '-50px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "width", '40px']
         ],
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '40px']
         ],
         "${_Neck}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '40px'],
            ["style", "left", '0px'],
            ["style", "width", '40px']
         ],
         "${_Neck_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_bubble_head}": [
            ["style", "top", '-53px'],
            ["style", "height", '84px'],
            ["style", "left", '-22px'],
            ["style", "width", '84px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: true,
         labels: {
            "Movement-1": 500
         },
         timeline: [
            { id: "eid440", tween: [ "transform", "${_Head_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_Head_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid420", tween: [ "style", "${_Neck_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "transform", "${_Neck}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid119", tween: [ "transform", "${_Neck}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 500, duration: 362 },
            { id: "eid120", tween: [ "transform", "${_Neck}", "rotateZ", '-2deg', { fromValue: '4deg'}], position: 862, duration: 574 },
            { id: "eid121", tween: [ "transform", "${_Neck}", "rotateZ", '4deg', { fromValue: '-2deg'}], position: 1436, duration: 740 },
            { id: "eid122", tween: [ "transform", "${_Neck}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 2176, duration: 574 },
            { id: "eid111", tween: [ "style", "${_Head}", "top", '-50px', { fromValue: '-50px'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Neck}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid439", tween: [ "transform", "${_Neck_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid423", tween: [ "style", "${_Head_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid419", tween: [ "style", "${_Neck_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Neck}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
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
      type: 'group',
      id: 'Hip',
      rect: ['0','0','40','40','auto','auto'],
      transform: [],
      c: [
      {
         type: 'group',
         id: 'Knee',
         rect: ['0','100px','40','40','auto','auto'],
         transform: [],
         c: [
         {
            id: 'Ankle',
            type: 'group',
            rect: ['0','85px','40','40','auto','auto'],
            c: [
            {
               id: 'Ankle_Element',
               type: 'rect',
               rect: ['15','15','auto','auto','auto','auto']
            }]
         },
         {
            id: 'Knee_Element',
            type: 'rect',
            rect: ['13','12','auto','auto','auto','auto']
         }]
      },
      {
         id: 'Hip_Element',
         type: 'rect',
         rect: ['13px','112px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'Knee_Element',
      symbolName: 'Element'
   },
   {
      id: 'Hip_Element',
      symbolName: 'Element'
   },
   {
      id: 'Ankle_Element',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_Hip_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Hip}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Ankle}": [
            ["style", "top", '85px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '40px']
         ],
         "${_Knee}": [
            ["style", "top", '100px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Ankle_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Knee_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "Movement-1": 575,
            "Movement-2": 1500,
            "Movement-3": 2937
         },
         timeline: [
            { id: "eid167", tween: [ "style", "${_Knee}", "top", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_Knee}", "top", '100px', { fromValue: '100px'}], position: 575, duration: 0 },
            { id: "eid287", tween: [ "style", "${_Knee}", "top", '100px', { fromValue: '100px'}], position: 1500, duration: 0 },
            { id: "eid296", tween: [ "style", "${_Knee}", "top", '100px', { fromValue: '100px'}], position: 2500, duration: 0 },
            { id: "eid295", tween: [ "style", "${_Knee}", "top", '74px', { fromValue: '100px'}], position: 2937, duration: 324 },
            { id: "eid288", tween: [ "style", "${_Knee}", "top", '100px', { fromValue: '74px'}], position: 3261, duration: 739 },
            { id: "eid408", tween: [ "style", "${_Ankle_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid189", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 575, duration: 0 },
            { id: "eid209", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid292", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid263", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 2937, duration: 0 },
            { id: "eid271", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '0px'}], position: 575, duration: 0 },
            { id: "eid285", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid297", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid294", tween: [ "style", "${_Knee}", "left", '15px', { fromValue: '0px'}], position: 2937, duration: 324 },
            { id: "eid286", tween: [ "style", "${_Knee}", "left", '0px', { fromValue: '15px'}], position: 3261, duration: 739 },
            { id: "eid404", tween: [ "transform", "${_Hip_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_Ankle}", "top", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid187", tween: [ "style", "${_Ankle}", "top", '85px', { fromValue: '85px'}], position: 575, duration: 0 },
            { id: "eid219", tween: [ "style", "${_Ankle}", "top", '85px', { fromValue: '85px'}], position: 1500, duration: 0 },
            { id: "eid298", tween: [ "style", "${_Ankle}", "top", '85px', { fromValue: '85px'}], position: 2500, duration: 0 },
            { id: "eid268", tween: [ "style", "${_Ankle}", "top", '85px', { fromValue: '85px'}], position: 2937, duration: 0 },
            { id: "eid276", tween: [ "style", "${_Ankle}", "top", '85px', { fromValue: '85px'}], position: 4000, duration: 0 },
            { id: "eid403", tween: [ "style", "${_Hip_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid405", tween: [ "transform", "${_Knee_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid393", tween: [ "style", "${_Knee_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid401", tween: [ "style", "${_Hip_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid407", tween: [ "style", "${_Ankle_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "transform", "${_Hip}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 575, duration: 175 },
            { id: "eid200", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 750, duration: 250 },
            { id: "eid211", tween: [ "transform", "${_Hip}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 1500, duration: 403 },
            { id: "eid215", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 1903, duration: 597 },
            { id: "eid293", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid306", tween: [ "transform", "${_Hip}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 2937, duration: 455 },
            { id: "eid307", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 3392, duration: 608 },
            { id: "eid161", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "transform", "${_Knee}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 575, duration: 175 },
            { id: "eid199", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 750, duration: 250 },
            { id: "eid212", tween: [ "transform", "${_Knee}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1500, duration: 305 },
            { id: "eid221", tween: [ "transform", "${_Knee}", "rotateZ", '5deg', { fromValue: '-10deg'}], position: 1805, duration: 195 },
            { id: "eid216", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 2000, duration: 500 },
            { id: "eid304", tween: [ "transform", "${_Knee}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 2937, duration: 455 },
            { id: "eid305", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 3392, duration: 608 },
            { id: "eid165", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 575, duration: 0 },
            { id: "eid206", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid291", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid262", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 2937, duration: 0 },
            { id: "eid270", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid406", tween: [ "transform", "${_Ankle_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid394", tween: [ "style", "${_Knee_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid175", tween: [ "style", "${_Ankle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_Ankle}", "left", '0px', { fromValue: '0px'}], position: 575, duration: 0 },
            { id: "eid220", tween: [ "style", "${_Ankle}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid299", tween: [ "style", "${_Ankle}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid269", tween: [ "style", "${_Ankle}", "left", '0px', { fromValue: '0px'}], position: 2937, duration: 0 },
            { id: "eid277", tween: [ "style", "${_Ankle}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid163", tween: [ "transform", "${_Ankle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "transform", "${_Ankle}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 575, duration: 175 },
            { id: "eid201", tween: [ "transform", "${_Ankle}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 750, duration: 250 },
            { id: "eid214", tween: [ "transform", "${_Ankle}", "rotateZ", '-19deg', { fromValue: '0deg'}], position: 1500, duration: 500 },
            { id: "eid218", tween: [ "transform", "${_Ankle}", "rotateZ", '0deg', { fromValue: '-19deg'}], position: 2000, duration: 500 },
            { id: "eid267", tween: [ "transform", "${_Ankle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2937, duration: 0 },
            { id: "eid278", tween: [ "transform", "${_Ankle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 }         ]
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
      type: 'group',
      id: 'Hip',
      rect: ['-43px','172px','125','40','auto','auto'],
      transform: [],
      c: [
      {
         id: 'Rump',
         type: 'rect',
         rect: ['-124px','-239px','auto','auto','auto','auto']
      },
      {
         id: 'LegRight',
         type: 'rect',
         rect: ['0px','0px','auto','auto','auto','auto']
      },
      {
         id: 'LegLeft',
         type: 'rect',
         rect: ['403px','20px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'LegRight',
      symbolName: 'Leg'
   },
   {
      id: 'LegLeft',
      symbolName: 'Leg'
   },
   {
      id: 'Rump',
      symbolName: 'Rump'
   }   ]
   },
   states: {
      "Base State": {
         "${_LegRight}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Hip}": [
            ["style", "top", '172px'],
            ["style", "left", '-43px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Rump}": [
            ["style", "top", '-172px'],
            ["style", "left", '40px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '40px']
         ],
         "${_LegLeft}": [
            ["style", "top", '0px'],
            ["style", "left", '85px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: true,
         labels: {
            "Movement-1": 500,
            "Movement-2": 2000
         },
         timeline: [
            { id: "eid142", tween: [ "transform", "${_LegRight}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
            { id: "eid143", tween: [ "style", "${_LegRight}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid240", tween: [ "style", "${_LegRight}", "left", '3px', { fromValue: '0px'}], position: 500, duration: 250 },
            { id: "eid244", tween: [ "style", "${_LegRight}", "left", '0px', { fromValue: '3px'}], position: 750, duration: 323 },
            { id: "eid248", tween: [ "style", "${_LegRight}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid252", tween: [ "style", "${_LegRight}", "left", '0px', { fromValue: '0px'}], position: 2750, duration: 0 },
            { id: "eid157", tween: [ "style", "${_Hip}", "left", '-43px', { fromValue: '-43px'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "style", "${_Hip}", "left", '-43px', { fromValue: '-43px'}], position: 500, duration: 0 },
            { id: "eid130", tween: [ "transform", "${_Rump}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "transform", "${_Rump}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid156", tween: [ "style", "${_Hip}", "top", '172px', { fromValue: '172px'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_Hip}", "top", '172px', { fromValue: '172px'}], position: 500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rump}", "top", '-172px', { fromValue: '-172px'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_Rump}", "top", '-172px', { fromValue: '-172px'}], position: 500, duration: 0 },
            { id: "eid150", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid141", tween: [ "style", "${_LegLeft}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid239", tween: [ "style", "${_LegLeft}", "top", '-4px', { fromValue: '0px'}], position: 500, duration: 250 },
            { id: "eid243", tween: [ "style", "${_LegLeft}", "top", '0px', { fromValue: '-4px'}], position: 750, duration: 323 },
            { id: "eid258", tween: [ "style", "${_LegLeft}", "top", '-4px', { fromValue: '0px'}], position: 2000, duration: 250 },
            { id: "eid259", tween: [ "style", "${_LegLeft}", "top", '-10px', { fromValue: '-4px'}], position: 2250, duration: 250 },
            { id: "eid260", tween: [ "style", "${_LegLeft}", "top", '0px', { fromValue: '-10px'}], position: 2500, duration: 250 },
            { id: "eid158", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "transform", "${_Hip}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid235", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 750, duration: 323 },
            { id: "eid237", tween: [ "transform", "${_Hip}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2000, duration: 623 },
            { id: "eid238", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2623, duration: 127 },
            { id: "eid140", tween: [ "style", "${_LegLeft}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid232", tween: [ "style", "${_LegLeft}", "left", '85px', { fromValue: '85px'}], position: 500, duration: 0 },
            { id: "eid242", tween: [ "style", "${_LegLeft}", "left", '85px', { fromValue: '85px'}], position: 1073, duration: 0 },
            { id: "eid256", tween: [ "style", "${_LegLeft}", "left", '81px', { fromValue: '85px'}], position: 2000, duration: 250 },
            { id: "eid257", tween: [ "style", "${_LegLeft}", "left", '85px', { fromValue: '81px'}], position: 2250, duration: 500 },
            { id: "eid152", tween: [ "style", "${_LegRight}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "style", "${_LegRight}", "top", '4px', { fromValue: '0px'}], position: 500, duration: 250 },
            { id: "eid245", tween: [ "style", "${_LegRight}", "top", '0px', { fromValue: '4px'}], position: 750, duration: 323 },
            { id: "eid254", tween: [ "style", "${_LegRight}", "top", '10px', { fromValue: '0px'}], position: 2000, duration: 250 },
            { id: "eid255", tween: [ "style", "${_LegRight}", "top", '0px', { fromValue: '10px'}], position: 2250, duration: 500 },
            { id: "eid151", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid149", tween: [ "style", "${_Rump}", "left", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_Rump}", "left", '40px', { fromValue: '40px'}], position: 500, duration: 0 }         ]
      }
   }
},
"Spine": {
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
      id: 'Spine_Low',
      type: 'group',
      rect: ['0','0','40','40','auto','auto'],
      c: [
      {
         id: 'Spine_Middle',
         type: 'group',
         rect: ['0','-60px','40','40','auto','auto'],
         c: [
         {
            id: 'Spine_Top',
            type: 'group',
            rect: ['0','-54px','40','40','auto','auto'],
            c: [
            {
               id: 'Head',
               type: 'rect',
               rect: ['313','62px','auto','auto','auto','auto']
            },
            {
               id: 'Shoulders',
               type: 'group',
               rect: ['-26px','-20px','92','10','auto','auto'],
               c: [
               {
                  id: 'ArmLeft',
                  type: 'rect',
                  rect: ['82px','0px','auto','auto','auto','auto']
               },
               {
                  id: 'ArmRight',
                  type: 'rect',
                  rect: ['0px','0px','auto','auto','auto','auto']
               }]
            },
            {
               id: 'Spine_Top_Element',
               type: 'rect',
               rect: ['513px','79px','auto','auto','auto','auto']
            }]
         },
         {
            id: 'Spine_Middle_Element',
            type: 'rect',
            rect: ['513px','25px','auto','auto','auto','auto']
         }]
      },
      {
         id: 'Spine_Low_Element',
         type: 'rect',
         rect: ['513','-35','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'ArmLeft',
      symbolName: 'Arm'
   },
   {
      id: 'Spine_Middle_Element',
      symbolName: 'Element'
   },
   {
      id: 'Head',
      symbolName: 'Head'
   },
   {
      id: 'Spine_Low_Element',
      symbolName: 'Element'
   },
   {
      id: 'ArmRight',
      symbolName: 'Arm'
   },
   {
      id: 'Spine_Top_Element',
      symbolName: 'Element'
   }   ]
   },
   states: {
      "Base State": {
         "${_Spine_Low}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Spine_Middle}": [
            ["style", "top", '-60px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Spine_Top_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ArmRight}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '-30px']
         ],
         "${_Spine_Top}": [
            ["style", "top", '-54px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ArmLeft}": [
            ["style", "top", '0px'],
            ["style", "left", '112px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Spine_Middle_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '40px']
         ],
         "${_Shoulders}": [
            ["style", "top", '-20px'],
            ["style", "left", '-26px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Spine_Low_Element}": [
            ["style", "top", '15px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head}": [
            ["style", "top", '-55px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "Movement-1": 500,
            "Movement-2": 1500
         },
         timeline: [
            { id: "eid436", tween: [ "transform", "${_Spine_Low_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "transform", "${_Spine_Top}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid343", tween: [ "transform", "${_Spine_Top}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 500, duration: 82 },
            { id: "eid346", tween: [ "transform", "${_Spine_Top}", "rotateZ", '-3deg', { fromValue: '4deg'}], position: 582, duration: 112 },
            { id: "eid347", tween: [ "transform", "${_Spine_Top}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 694, duration: 147 },
            { id: "eid361", tween: [ "transform", "${_Spine_Top}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 1500, duration: 131 },
            { id: "eid362", tween: [ "transform", "${_Spine_Top}", "rotateZ", '5deg', { fromValue: '-9deg'}], position: 1631, duration: 119 },
            { id: "eid367", tween: [ "transform", "${_Spine_Top}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1750, duration: 250 },
            { id: "eid431", tween: [ "style", "${_Spine_Top_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid379", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid378", tween: [ "transform", "${_ArmLeft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid376", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid432", tween: [ "style", "${_Spine_Middle_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid425", tween: [ "style", "${_Spine_Low_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid320", tween: [ "style", "${_Spine_Low}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid335", tween: [ "style", "${_Spine_Low}", "top", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid353", tween: [ "style", "${_Spine_Low}", "top", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid426", tween: [ "style", "${_Spine_Low_Element}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_ArmRight}", "left", '-30px', { fromValue: '-30px'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid342", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 500, duration: 82 },
            { id: "eid345", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '3deg', { fromValue: '-5deg'}], position: 582, duration: 112 },
            { id: "eid348", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 694, duration: 147 },
            { id: "eid360", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 1500, duration: 131 },
            { id: "eid363", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '11deg', { fromValue: '-8deg'}], position: 1631, duration: 178 },
            { id: "eid366", tween: [ "transform", "${_Spine_Middle}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 1809, duration: 191 },
            { id: "eid438", tween: [ "transform", "${_Spine_Top_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid324", tween: [ "style", "${_Spine_Top}", "top", '-54px', { fromValue: '-54px'}], position: 0, duration: 0 },
            { id: "eid337", tween: [ "style", "${_Spine_Top}", "top", '-54px', { fromValue: '-54px'}], position: 500, duration: 0 },
            { id: "eid355", tween: [ "style", "${_Spine_Top}", "top", '-54px', { fromValue: '-54px'}], position: 1500, duration: 0 },
            { id: "eid386", tween: [ "style", "${_ArmLeft}", "left", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid437", tween: [ "transform", "${_Spine_Middle_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid383", tween: [ "style", "${_Shoulders}", "left", '-26px', { fromValue: '-26px'}], position: 0, duration: 0 },
            { id: "eid389", tween: [ "transform", "${_Spine_Low}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid341", tween: [ "transform", "${_Spine_Low}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 500, duration: 82 },
            { id: "eid344", tween: [ "transform", "${_Spine_Low}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 582, duration: 112 },
            { id: "eid349", tween: [ "transform", "${_Spine_Low}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 694, duration: 147 },
            { id: "eid359", tween: [ "transform", "${_Spine_Low}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 1500, duration: 131 },
            { id: "eid364", tween: [ "transform", "${_Spine_Low}", "rotateZ", '-7deg', { fromValue: '-4deg'}], position: 1631, duration: 178 },
            { id: "eid365", tween: [ "transform", "${_Spine_Low}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1809, duration: 191 },
            { id: "eid429", tween: [ "style", "${_Spine_Top_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid330", tween: [ "style", "${_Spine_Top}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid340", tween: [ "style", "${_Spine_Top}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid358", tween: [ "style", "${_Spine_Top}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid368", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid387", tween: [ "style", "${_Head}", "top", '-55px', { fromValue: '-55px'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "transform", "${_ArmRight}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
            { id: "eid373", tween: [ "transform", "${_ArmRight}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid428", tween: [ "style", "${_Spine_Middle_Element}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid328", tween: [ "style", "${_Spine_Middle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid339", tween: [ "style", "${_Spine_Middle}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid357", tween: [ "style", "${_Spine_Middle}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid326", tween: [ "style", "${_Spine_Low}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid338", tween: [ "style", "${_Spine_Low}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid356", tween: [ "style", "${_Spine_Low}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
            { id: "eid322", tween: [ "style", "${_Spine_Middle}", "top", '-60px', { fromValue: '-60px'}], position: 0, duration: 0 },
            { id: "eid336", tween: [ "style", "${_Spine_Middle}", "top", '-60px', { fromValue: '-60px'}], position: 500, duration: 0 },
            { id: "eid354", tween: [ "style", "${_Spine_Middle}", "top", '-60px', { fromValue: '-60px'}], position: 1500, duration: 0 },
            { id: "eid382", tween: [ "style", "${_ArmLeft}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid380", tween: [ "style", "${_Shoulders}", "top", '-20px', { fromValue: '-20px'}], position: 0, duration: 0 },
            { id: "eid381", tween: [ "style", "${_ArmRight}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid377", tween: [ "transform", "${_ArmRight}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 }         ]
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
      type: 'rect',
      id: 'Element',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','10px','10px','auto','auto'],
      fill: ['rgba(255,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Element}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,255,0.00)'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
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
         duration: 575,
         autoPlay: true,
         timeline: [
            { id: "eid539", tween: [ "style", "${_Element}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_Element}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid194", tween: [ "style", "${_Element}", "left", '0px', { fromValue: '0px'}], position: 575, duration: 0 },
            { id: "eid164", tween: [ "transform", "${_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid182", tween: [ "transform", "${_Element}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 575, duration: 0 },
            { id: "eid170", tween: [ "style", "${_Element}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid188", tween: [ "style", "${_Element}", "top", '0px', { fromValue: '0px'}], position: 575, duration: 0 },
            { id: "eid540", tween: [ "color", "${_Element}", "background-color", 'rgba(0,0,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,255,0.00)'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-6508916");
