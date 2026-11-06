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
            rect:['264','228','auto','auto','auto','auto']
         },
         {
            id:'CanvasContainer',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'shadow',
            type:'image',
            rect:['154px','465px','291px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
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
            ["style", "top", '275px'],
            ["style", "left", '290px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_shadow}": [
            ["style", "top", '465px'],
            ["style", "left", '154px'],
            ["style", "height", '60px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '600px'],
            ["style", "width", '600px']
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
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid2907", tween: [ "style", "${_Body}", "top", '275px', { fromValue: '275px'}], position: 500, duration: 0 },
            { id: "eid1473", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid1472", tween: [ "style", "${_Body}", "left", '290px', { fromValue: '290px'}], position: 500, duration: 0 }         ]
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
         rect: ['0','40','10','10','auto','auto'],
         c: [
         {
            id: 'LegLeft',
            type: 'rect',
            rect: ['-55px','0','auto','auto','auto','auto']
         },
         {
            id: 'LegRight',
            type: 'rect',
            rect: ['-55','0','auto','auto','auto','auto']
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
      id: 'LegLeft',
      symbolName: 'Leg'
   },
   {
      id: 'SpineElement',
      symbolName: 'Element'
   },
   {
      id: 'ShouldersElement',
      symbolName: 'Element'
   },
   {
      id: 'HipElement',
      symbolName: 'Element'
   },
   {
      id: 'HeadElement',
      symbolName: 'Element'
   },
   {
      id: 'ArmRight',
      symbolName: 'Arm'
   },
   {
      id: 'LegRight',
      symbolName: 'Leg'
   },
   {
      id: 'ArmLeft',
      symbolName: 'Arm'
   }   ]
   },
   states: {
      "Base State": {
         "${_LegRight}": [
            ["style", "top", '40px'],
            ["style", "left", '66px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Hip}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Pelvis}": [
            ["style", "top", '20px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_LegLeft}": [
            ["transform", "scaleX", '-1'],
            ["style", "top", '40px'],
            ["style", "left", '-64px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Spine}": [
            ["style", "top", '-51px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ShouldersElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_HipElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ArmRight}": [
            ["transform", "scaleX", '-1'],
            ["style", "top", '5px'],
            ["style", "left", '-61px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_HeadElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ArmLeft}": [
            ["style", "top", '5px'],
            ["style", "left", '56px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ],
         "${_SpineElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shoulders}": [
            ["style", "top", '-55px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head}": [
            ["style", "top", '-71px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7661,
         autoPlay: true,
         labels: {
            "Movement-1": 1000,
            "Movement-2": 2500,
            "Movement-3": 4000,
            "Movement-4": 6500
         },
         timeline: [
            { id: "eid67", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid3029", tween: [ "transform", "${_Spine}", "rotateZ", '-29deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid3030", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 1500, duration: 500 },
            { id: "eid3036", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid3050", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
            { id: "eid3107", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid3111", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid3273", tween: [ "transform", "${_Spine}", "rotateZ", '-19deg', { fromValue: '0deg'}], position: 6500, duration: 250 },
            { id: "eid3274", tween: [ "transform", "${_Spine}", "rotateZ", '0deg', { fromValue: '-19deg'}], position: 6750, duration: 911 },
            { id: "eid170", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 0, duration: 0 },
            { id: "eid1010", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-59deg', { fromValue: '-90deg'}], position: 1000, duration: 193 },
            { id: "eid1011", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-111deg', { fromValue: '-59deg'}], position: 1193, duration: 401 },
            { id: "eid1012", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-111deg'}], position: 1594, duration: 406 },
            { id: "eid1031", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-128deg', { fromValue: '-90deg'}], position: 2500, duration: 250 },
            { id: "eid1032", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-63deg', { fromValue: '-128deg'}], position: 2750, duration: 383 },
            { id: "eid1033", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-63deg'}], position: 3133, duration: 367 },
            { id: "eid1049", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-166deg', { fromValue: '-90deg'}], position: 4000, duration: 406 },
            { id: "eid1050", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-98deg', { fromValue: '-166deg'}], position: 4406, duration: 494 },
            { id: "eid1052", tween: [ "transform", "${_ArmLeft}", "rotateZ", '9deg', { fromValue: '-98deg'}], position: 4900, duration: 230 },
            { id: "eid1054", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '9deg'}], position: 5130, duration: 620 },
            { id: "eid3301", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-142deg', { fromValue: '-90deg'}], position: 6500, duration: 250 },
            { id: "eid3302", tween: [ "transform", "${_ArmLeft}", "rotateZ", '-90deg', { fromValue: '-142deg'}], position: 6750, duration: 911 },
            { id: "eid2412", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid3031", tween: [ "transform", "${_Shoulders}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid3032", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 1500, duration: 500 },
            { id: "eid3033", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid3034", tween: [ "transform", "${_Shoulders}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 2500, duration: 348 },
            { id: "eid3088", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 2848, duration: 652 },
            { id: "eid3125", tween: [ "transform", "${_Shoulders}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 4000, duration: 900 },
            { id: "eid3126", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 4900, duration: 850 },
            { id: "eid3234", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6500, duration: 0 },
            { id: "eid3264", tween: [ "transform", "${_Shoulders}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7661, duration: 0 },
            { id: "eid113", tween: [ "transform", "${_ShouldersElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1346", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid2648", tween: [ "transform", "${_LegRight}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid2654", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 1500, duration: 500 },
            { id: "eid2682", tween: [ "transform", "${_LegRight}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 2500, duration: 500 },
            { id: "eid2683", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 3000, duration: 500 },
            { id: "eid2731", tween: [ "transform", "${_LegRight}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 4000, duration: 598 },
            { id: "eid2732", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 4598, duration: 1152 },
            { id: "eid3281", tween: [ "transform", "${_LegRight}", "rotateZ", '-28deg', { fromValue: '0deg'}], position: 6500, duration: 250 },
            { id: "eid3282", tween: [ "transform", "${_LegRight}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 6750, duration: 911 },
            { id: "eid112", tween: [ "transform", "${_SpineElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid213", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid998", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '76px'}], position: 1000, duration: 0 },
            { id: "eid1009", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '76px'}], position: 2000, duration: 0 },
            { id: "eid1018", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '76px'}], position: 2500, duration: 0 },
            { id: "eid1021", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '76px'}], position: 3500, duration: 0 },
            { id: "eid456", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '76px'}], position: 4000, duration: 0 },
            { id: "eid474", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '76px'}], position: 5750, duration: 0 },
            { id: "eid3297", tween: [ "style", "${_ArmLeft}", "left", '73px', { fromValue: '76px'}], position: 6500, duration: 250 },
            { id: "eid3298", tween: [ "style", "${_ArmLeft}", "left", '76px', { fromValue: '73px'}], position: 6750, duration: 911 },
            { id: "eid72", tween: [ "style", "${_ShouldersElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid2512", tween: [ "style", "${_LegRight}", "left", '66px', { fromValue: '66px'}], position: 0, duration: 0 },
            { id: "eid2649", tween: [ "style", "${_LegRight}", "left", '70px', { fromValue: '66px'}], position: 1000, duration: 500 },
            { id: "eid2653", tween: [ "style", "${_LegRight}", "left", '66px', { fromValue: '70px'}], position: 1500, duration: 500 },
            { id: "eid3147", tween: [ "style", "${_LegRight}", "left", '74px', { fromValue: '66px'}], position: 2500, duration: 500 },
            { id: "eid3148", tween: [ "style", "${_LegRight}", "left", '66px', { fromValue: '74px'}], position: 3000, duration: 500 },
            { id: "eid2723", tween: [ "style", "${_LegRight}", "left", '55px', { fromValue: '66px'}], position: 4000, duration: 598 },
            { id: "eid2724", tween: [ "style", "${_LegRight}", "left", '66px', { fromValue: '55px'}], position: 4598, duration: 1152 },
            { id: "eid3283", tween: [ "style", "${_LegRight}", "left", '83px', { fromValue: '66px'}], position: 6500, duration: 250 },
            { id: "eid3284", tween: [ "style", "${_LegRight}", "left", '66px', { fromValue: '83px'}], position: 6750, duration: 911 },
            { id: "eid62", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3007", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid3023", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3046", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid3087", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid3099", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid3117", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
            { id: "eid3224", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 6500, duration: 0 },
            { id: "eid3244", tween: [ "style", "${_Shoulders}", "left", '0px', { fromValue: '0px'}], position: 7661, duration: 0 },
            { id: "eid174", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 0, duration: 0 },
            { id: "eid3006", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 1000, duration: 0 },
            { id: "eid3022", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 2000, duration: 0 },
            { id: "eid3068", tween: [ "style", "${_Head}", "top", '-53px', { fromValue: '-71px'}], position: 2500, duration: 500 },
            { id: "eid3077", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-53px'}], position: 3000, duration: 500 },
            { id: "eid3078", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 3500, duration: 0 },
            { id: "eid489", tween: [ "style", "${_Head}", "top", '-40px', { fromValue: '-71px'}], position: 4000, duration: 1130 },
            { id: "eid490", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-40px'}], position: 5130, duration: 620 },
            { id: "eid3217", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 6500, duration: 0 },
            { id: "eid3257", tween: [ "style", "${_Head}", "top", '-71px', { fromValue: '-71px'}], position: 7661, duration: 0 },
            { id: "eid1527", tween: [ "style", "${_LegLeft}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid2783", tween: [ "style", "${_LegLeft}", "top", '15px', { fromValue: '40px'}], position: 1000, duration: 500 },
            { id: "eid2784", tween: [ "style", "${_LegLeft}", "top", '40px', { fromValue: '15px'}], position: 1500, duration: 500 },
            { id: "eid2691", tween: [ "style", "${_LegLeft}", "top", '39px', { fromValue: '40px'}], position: 2500, duration: 500 },
            { id: "eid2692", tween: [ "style", "${_LegLeft}", "top", '40px', { fromValue: '39px'}], position: 3000, duration: 500 },
            { id: "eid2729", tween: [ "style", "${_LegLeft}", "top", '63px', { fromValue: '40px'}], position: 4000, duration: 598 },
            { id: "eid2730", tween: [ "style", "${_LegLeft}", "top", '40px', { fromValue: '63px'}], position: 4598, duration: 1152 },
            { id: "eid3289", tween: [ "style", "${_LegLeft}", "top", '14px', { fromValue: '40px'}], position: 6500, duration: 250 },
            { id: "eid3290", tween: [ "style", "${_LegLeft}", "top", '40px', { fromValue: '14px'}], position: 6750, duration: 911 },
            { id: "eid212", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-61px'}], position: 0, duration: 0 },
            { id: "eid1001", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-81px'}], position: 1000, duration: 0 },
            { id: "eid3024", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-81px'}], position: 2000, duration: 0 },
            { id: "eid1015", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-81px'}], position: 2500, duration: 0 },
            { id: "eid1024", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-81px'}], position: 3500, duration: 0 },
            { id: "eid453", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-81px'}], position: 4000, duration: 0 },
            { id: "eid471", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-81px'}], position: 5750, duration: 0 },
            { id: "eid3293", tween: [ "style", "${_ArmRight}", "left", '-60px', { fromValue: '-81px'}], position: 6500, duration: 250 },
            { id: "eid3294", tween: [ "style", "${_ArmRight}", "left", '-81px', { fromValue: '-60px'}], position: 6750, duration: 911 },
            { id: "eid2413", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 0, duration: 0 },
            { id: "eid3002", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 1000, duration: 0 },
            { id: "eid3017", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 2000, duration: 0 },
            { id: "eid3041", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 2500, duration: 0 },
            { id: "eid3086", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 3500, duration: 0 },
            { id: "eid3098", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 4000, duration: 0 },
            { id: "eid3113", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 5750, duration: 0 },
            { id: "eid3214", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 6500, duration: 0 },
            { id: "eid3254", tween: [ "style", "${_Shoulders}", "top", '-55px', { fromValue: '-55px'}], position: 7661, duration: 0 },
            { id: "eid2172", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 0, duration: 0 },
            { id: "eid3004", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 1000, duration: 0 },
            { id: "eid3020", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 2000, duration: 0 },
            { id: "eid3040", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 2500, duration: 0 },
            { id: "eid3055", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 3500, duration: 0 },
            { id: "eid3104", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 4000, duration: 0 },
            { id: "eid3115", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 5750, duration: 0 },
            { id: "eid3218", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 6500, duration: 0 },
            { id: "eid3258", tween: [ "style", "${_Spine}", "top", '-51px', { fromValue: '-51px'}], position: 7661, duration: 0 },
            { id: "eid116", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid3001", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid3016", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid3064", tween: [ "transform", "${_Head}", "rotateZ", '-16deg', { fromValue: '0deg'}], position: 2500, duration: 500 },
            { id: "eid3081", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '-16deg'}], position: 3000, duration: 500 },
            { id: "eid443", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid461", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid3237", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6500, duration: 0 },
            { id: "eid3267", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7661, duration: 0 },
            { id: "eid109", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3010", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid3027", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3044", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid3059", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid3102", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid3120", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
            { id: "eid3225", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 6500, duration: 0 },
            { id: "eid3245", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 7661, duration: 0 },
            { id: "eid1352", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3008", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid3025", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3048", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid3063", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid3100", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid3118", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
            { id: "eid3220", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 6500, duration: 0 },
            { id: "eid3240", tween: [ "style", "${_Pelvis}", "left", '0px', { fromValue: '0px'}], position: 7661, duration: 0 },
            { id: "eid73", tween: [ "style", "${_ShouldersElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid2205", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid3003", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 1000, duration: 0 },
            { id: "eid3019", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 2000, duration: 0 },
            { id: "eid3043", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 2500, duration: 0 },
            { id: "eid3058", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 3500, duration: 0 },
            { id: "eid3103", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 4000, duration: 0 },
            { id: "eid3114", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 5750, duration: 0 },
            { id: "eid3210", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 6500, duration: 0 },
            { id: "eid3250", tween: [ "style", "${_Pelvis}", "top", '20px', { fromValue: '20px'}], position: 7661, duration: 0 },
            { id: "eid1526", tween: [ "style", "${_LegRight}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid2650", tween: [ "style", "${_LegRight}", "top", '22px', { fromValue: '40px'}], position: 1000, duration: 500 },
            { id: "eid2652", tween: [ "style", "${_LegRight}", "top", '40px', { fromValue: '22px'}], position: 1500, duration: 500 },
            { id: "eid3149", tween: [ "style", "${_LegRight}", "top", '-22px', { fromValue: '40px'}], position: 2500, duration: 500 },
            { id: "eid3150", tween: [ "style", "${_LegRight}", "top", '40px', { fromValue: '-22px'}], position: 3000, duration: 500 },
            { id: "eid2725", tween: [ "style", "${_LegRight}", "top", '63px', { fromValue: '40px'}], position: 4000, duration: 598 },
            { id: "eid2726", tween: [ "style", "${_LegRight}", "top", '40px', { fromValue: '63px'}], position: 4598, duration: 1152 },
            { id: "eid3285", tween: [ "style", "${_LegRight}", "top", '64px', { fromValue: '40px'}], position: 6500, duration: 250 },
            { id: "eid3286", tween: [ "style", "${_LegRight}", "top", '40px', { fromValue: '64px'}], position: 6750, duration: 911 },
            { id: "eid87", tween: [ "style", "${_HeadElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "transform", "${_HeadElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1348", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid2998", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid3013", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid3038", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid3053", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
            { id: "eid3106", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid3110", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid3230", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6500, duration: 0 },
            { id: "eid3260", tween: [ "transform", "${_Pelvis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7661, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3009", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid3026", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3045", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid3060", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid3101", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid3119", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
            { id: "eid3228", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 6500, duration: 0 },
            { id: "eid3248", tween: [ "style", "${_Spine}", "left", '0px', { fromValue: '0px'}], position: 7661, duration: 0 },
            { id: "eid71", tween: [ "style", "${_SpineElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3011", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid3028", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3066", tween: [ "style", "${_Head}", "left", '-32px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid3079", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '-32px'}], position: 3000, duration: 500 },
            { id: "eid3080", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid487", tween: [ "style", "${_Head}", "left", '-25px', { fromValue: '0px'}], position: 4000, duration: 1130 },
            { id: "eid488", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '-25px'}], position: 5130, duration: 620 },
            { id: "eid3227", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 6500, duration: 0 },
            { id: "eid3247", tween: [ "style", "${_Head}", "left", '0px', { fromValue: '0px'}], position: 7661, duration: 0 },
            { id: "eid111", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid3000", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid3015", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid3035", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid3049", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
            { id: "eid3108", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid3112", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid3235", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6500, duration: 0 },
            { id: "eid3265", tween: [ "transform", "${_HipElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7661, duration: 0 },
            { id: "eid2178", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3005", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid3021", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid3039", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid3054", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid3105", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 4000, duration: 0 },
            { id: "eid3116", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
            { id: "eid3215", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 6500, duration: 0 },
            { id: "eid3255", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 7661, duration: 0 },
            { id: "eid66", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "transform", "${_Hip}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid185", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 500 },
            { id: "eid208", tween: [ "transform", "${_Hip}", "rotateZ", '-22deg', { fromValue: '0deg'}], position: 2500, duration: 500 },
            { id: "eid209", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '-22deg'}], position: 3000, duration: 500 },
            { id: "eid439", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid457", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid3275", tween: [ "transform", "${_Hip}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 6500, duration: 250 },
            { id: "eid3276", tween: [ "transform", "${_Hip}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 6750, duration: 911 },
            { id: "eid60", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid2553", tween: [ "style", "${_Hip}", "left", '-6px', { fromValue: '0px'}], position: 1000, duration: 500 },
            { id: "eid2554", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '-6px'}], position: 1500, duration: 500 },
            { id: "eid2557", tween: [ "style", "${_Hip}", "left", '16px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid2558", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '16px'}], position: 3000, duration: 500 },
            { id: "eid2563", tween: [ "style", "${_Hip}", "left", '-3px', { fromValue: '0px'}], position: 4000, duration: 250 },
            { id: "eid2564", tween: [ "style", "${_Hip}", "left", '-3px', { fromValue: '-3px'}], position: 4250, duration: 0 },
            { id: "eid2566", tween: [ "style", "${_Hip}", "left", '2px', { fromValue: '-3px'}], position: 4750, duration: 500 },
            { id: "eid2567", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '2px'}], position: 5250, duration: 500 },
            { id: "eid3277", tween: [ "style", "${_Hip}", "left", '-7px', { fromValue: '0px'}], position: 6500, duration: 250 },
            { id: "eid3278", tween: [ "style", "${_Hip}", "left", '-1px', { fromValue: '-7px'}], position: 6750, duration: 250 },
            { id: "eid3303", tween: [ "style", "${_Hip}", "left", '0px', { fromValue: '-1px'}], position: 7000, duration: 661 },
            { id: "eid86", tween: [ "style", "${_HeadElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1347", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid2651", tween: [ "transform", "${_LegLeft}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid2657", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 1500, duration: 500 },
            { id: "eid2693", tween: [ "transform", "${_LegLeft}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 2500, duration: 500 },
            { id: "eid2694", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 3000, duration: 500 },
            { id: "eid2733", tween: [ "transform", "${_LegLeft}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 4000, duration: 598 },
            { id: "eid2734", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 4598, duration: 1152 },
            { id: "eid3233", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6500, duration: 0 },
            { id: "eid3263", tween: [ "transform", "${_LegLeft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7661, duration: 0 },
            { id: "eid69", tween: [ "style", "${_SpineElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid1002", tween: [ "transform", "${_ArmRight}", "rotateZ", '66deg', { fromValue: '90deg'}], position: 1000, duration: 344 },
            { id: "eid1003", tween: [ "transform", "${_ArmRight}", "rotateZ", '79deg', { fromValue: '66deg'}], position: 1344, duration: 250 },
            { id: "eid1004", tween: [ "transform", "${_ArmRight}", "rotateZ", '73deg', { fromValue: '79deg'}], position: 1594, duration: 406 },
            { id: "eid1029", tween: [ "transform", "${_ArmRight}", "rotateZ", '58deg', { fromValue: '90deg'}], position: 2500, duration: 250 },
            { id: "eid1030", tween: [ "transform", "${_ArmRight}", "rotateZ", '74deg', { fromValue: '58deg'}], position: 2750, duration: 383 },
            { id: "eid1034", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '74deg'}], position: 3133, duration: 367 },
            { id: "eid1047", tween: [ "transform", "${_ArmRight}", "rotateZ", '170deg', { fromValue: '90deg'}], position: 4000, duration: 406 },
            { id: "eid1048", tween: [ "transform", "${_ArmRight}", "rotateZ", '100deg', { fromValue: '170deg'}], position: 4406, duration: 494 },
            { id: "eid1051", tween: [ "transform", "${_ArmRight}", "rotateZ", '-15deg', { fromValue: '100deg'}], position: 4900, duration: 230 },
            { id: "eid1053", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '-15deg'}], position: 5130, duration: 620 },
            { id: "eid3291", tween: [ "transform", "${_ArmRight}", "rotateZ", '169deg', { fromValue: '90deg'}], position: 6500, duration: 250 },
            { id: "eid3292", tween: [ "transform", "${_ArmRight}", "rotateZ", '90deg', { fromValue: '169deg'}], position: 6750, duration: 911 },
            { id: "eid211", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid997", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-2px'}], position: 1000, duration: 0 },
            { id: "eid1008", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-2px'}], position: 2000, duration: 0 },
            { id: "eid1017", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-2px'}], position: 2500, duration: 0 },
            { id: "eid1020", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-2px'}], position: 3500, duration: 0 },
            { id: "eid450", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-2px'}], position: 4000, duration: 0 },
            { id: "eid468", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-2px'}], position: 5750, duration: 0 },
            { id: "eid3299", tween: [ "style", "${_ArmLeft}", "top", '-20px', { fromValue: '-2px'}], position: 6500, duration: 250 },
            { id: "eid3300", tween: [ "style", "${_ArmLeft}", "top", '-2px', { fromValue: '-20px'}], position: 6750, duration: 911 },
            { id: "eid2478", tween: [ "style", "${_LegLeft}", "left", '-64px', { fromValue: '-64px'}], position: 0, duration: 0 },
            { id: "eid2781", tween: [ "style", "${_LegLeft}", "left", '-50px', { fromValue: '-64px'}], position: 1000, duration: 500 },
            { id: "eid2782", tween: [ "style", "${_LegLeft}", "left", '-64px', { fromValue: '-50px'}], position: 1500, duration: 500 },
            { id: "eid2689", tween: [ "style", "${_LegLeft}", "left", '-68px', { fromValue: '-64px'}], position: 2500, duration: 500 },
            { id: "eid2690", tween: [ "style", "${_LegLeft}", "left", '-64px', { fromValue: '-68px'}], position: 3000, duration: 500 },
            { id: "eid2727", tween: [ "style", "${_LegLeft}", "left", '-41px', { fromValue: '-64px'}], position: 4000, duration: 598 },
            { id: "eid2728", tween: [ "style", "${_LegLeft}", "left", '-64px', { fromValue: '-41px'}], position: 4598, duration: 1152 },
            { id: "eid3287", tween: [ "style", "${_LegLeft}", "left", '-54px', { fromValue: '-64px'}], position: 6500, duration: 250 },
            { id: "eid3288", tween: [ "style", "${_LegLeft}", "left", '-64px', { fromValue: '-54px'}], position: 6750, duration: 911 },
            { id: "eid210", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid1000", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-2px'}], position: 1000, duration: 0 },
            { id: "eid3018", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-2px'}], position: 2000, duration: 0 },
            { id: "eid1014", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-2px'}], position: 2500, duration: 0 },
            { id: "eid1023", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-2px'}], position: 3500, duration: 0 },
            { id: "eid447", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-2px'}], position: 4000, duration: 0 },
            { id: "eid465", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-2px'}], position: 5750, duration: 0 },
            { id: "eid3295", tween: [ "style", "${_ArmRight}", "top", '-29px', { fromValue: '-2px'}], position: 6500, duration: 250 },
            { id: "eid3296", tween: [ "style", "${_ArmRight}", "top", '-2px', { fromValue: '-29px'}], position: 6750, duration: 911 },
            { id: "eid63", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid2555", tween: [ "style", "${_Hip}", "top", '11px', { fromValue: '0px'}], position: 1000, duration: 500 },
            { id: "eid2556", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '11px'}], position: 1500, duration: 500 },
            { id: "eid2559", tween: [ "style", "${_Hip}", "top", '11px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid2560", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '11px'}], position: 3000, duration: 500 },
            { id: "eid2561", tween: [ "style", "${_Hip}", "top", '-6px', { fromValue: '0px'}], position: 4000, duration: 250 },
            { id: "eid2562", tween: [ "style", "${_Hip}", "top", '4px', { fromValue: '-6px'}], position: 4250, duration: 500 },
            { id: "eid2565", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '4px'}], position: 4750, duration: 1000 },
            { id: "eid3279", tween: [ "style", "${_Hip}", "top", '-54px', { fromValue: '0px'}], position: 6500, duration: 250 },
            { id: "eid3280", tween: [ "style", "${_Hip}", "top", '-79px', { fromValue: '-54px'}], position: 6750, duration: 250 },
            { id: "eid3304", tween: [ "style", "${_Hip}", "top", '0px', { fromValue: '-79px'}], position: 7000, duration: 661 }         ]
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
      rect: ['0px','0px','10px','10px','auto','auto'],
      userClass: 'hip_element',
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
         "${_HipElement}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "top", '0px'],
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
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "style", "${_HipElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid3204", tween: [ "color", "${_HipElement}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_HipElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
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
         "${_EllbowElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ShoulderElement}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
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
         "${_Shoulder}": [
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14250,
         autoPlay: true,
         labels: {
            "Movement-1": 349,
            "Movement-2": 2500,
            "Movement-3": 4750,
            "Movement-4": 8250,
            "Movement-5": 10500,
            "Movement-6": 12500
         },
         timeline: [
            { id: "eid104", tween: [ "transform", "${_EllbowElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "transform", "${_Shoulder}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 349, duration: 254 },
            { id: "eid127", tween: [ "transform", "${_Shoulder}", "rotateZ", '-39deg', { fromValue: '-44deg'}], position: 603, duration: 833 },
            { id: "eid128", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-39deg'}], position: 1436, duration: 564 },
            { id: "eid153", tween: [ "transform", "${_Shoulder}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 2500, duration: 425 },
            { id: "eid158", tween: [ "transform", "${_Shoulder}", "rotateZ", '-74deg', { fromValue: '-20deg'}], position: 3500, duration: 424 },
            { id: "eid164", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-74deg'}], position: 3924, duration: 326 },
            { id: "eid905", tween: [ "transform", "${_Shoulder}", "rotateZ", '-33deg', { fromValue: '0deg'}], position: 4750, duration: 500 },
            { id: "eid906", tween: [ "transform", "${_Shoulder}", "rotateZ", '-65deg', { fromValue: '-33deg'}], position: 5250, duration: 750 },
            { id: "eid907", tween: [ "transform", "${_Shoulder}", "rotateZ", '63deg', { fromValue: '-65deg'}], position: 6000, duration: 623 },
            { id: "eid908", tween: [ "transform", "${_Shoulder}", "rotateZ", '-17deg', { fromValue: '63deg'}], position: 6623, duration: 479 },
            { id: "eid909", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 7102, duration: 648 },
            { id: "eid645", tween: [ "transform", "${_Shoulder}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 8250, duration: 250 },
            { id: "eid646", tween: [ "transform", "${_Shoulder}", "rotateZ", '-10deg', { fromValue: '6deg'}], position: 8500, duration: 250 },
            { id: "eid647", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 8750, duration: 1121 },
            { id: "eid702", tween: [ "transform", "${_Shoulder}", "rotateZ", '-98deg', { fromValue: '0deg'}], position: 10500, duration: 250 },
            { id: "eid703", tween: [ "transform", "${_Shoulder}", "rotateZ", '-75deg', { fromValue: '-98deg'}], position: 10750, duration: 412 },
            { id: "eid707", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '-75deg'}], position: 11162, duration: 588 },
            { id: "eid1121", tween: [ "transform", "${_Shoulder}", "rotateZ", '-37deg', { fromValue: '0deg'}], position: 12500, duration: 401 },
            { id: "eid1122", tween: [ "transform", "${_Shoulder}", "rotateZ", '40deg', { fromValue: '-37deg'}], position: 12901, duration: 442 },
            { id: "eid1137", tween: [ "transform", "${_Shoulder}", "rotateZ", '0deg', { fromValue: '40deg'}], position: 13343, duration: 907 },
            { id: "eid93", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '45px'}], position: 4750, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '45px'}], position: 7750, duration: 0 },
            { id: "eid639", tween: [ "style", "${_Wrist}", "top", '16px', { fromValue: '45px'}], position: 8250, duration: 395 },
            { id: "eid640", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '16px'}], position: 8645, duration: 1226 },
            { id: "eid731", tween: [ "style", "${_Wrist}", "top", '119px', { fromValue: '45px'}], position: 10500, duration: 341 },
            { id: "eid732", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '119px'}], position: 10841, duration: 909 },
            { id: "eid1131", tween: [ "style", "${_Wrist}", "top", '138px', { fromValue: '45px'}], position: 12500, duration: 401 },
            { id: "eid1132", tween: [ "style", "${_Wrist}", "top", '28px', { fromValue: '138px'}], position: 12901, duration: 599 },
            { id: "eid1140", tween: [ "style", "${_Wrist}", "top", '45px', { fromValue: '28px'}], position: 13500, duration: 750 },
            { id: "eid96", tween: [ "style", "${_ShoulderElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_ShoulderElement}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 349, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid162", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 4250, duration: 0 },
            { id: "eid221", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 4750, duration: 0 },
            { id: "eid227", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 7750, duration: 0 },
            { id: "eid618", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 8250, duration: 0 },
            { id: "eid627", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 9871, duration: 0 },
            { id: "eid677", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 10500, duration: 0 },
            { id: "eid688", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 11750, duration: 0 },
            { id: "eid1101", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 12500, duration: 0 },
            { id: "eid1111", tween: [ "style", "${_Shoulder}", "top", '0px', { fromValue: '0px'}], position: 14250, duration: 0 },
            { id: "eid90", tween: [ "style", "${_ShoulderElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "style", "${_ShoulderElement}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid94", tween: [ "style", "${_WristElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 349, duration: 0 },
            { id: "eid125", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid143", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid163", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 4250, duration: 0 },
            { id: "eid224", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 4750, duration: 0 },
            { id: "eid230", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 7750, duration: 0 },
            { id: "eid621", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 8250, duration: 0 },
            { id: "eid630", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 9871, duration: 0 },
            { id: "eid678", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 10500, duration: 0 },
            { id: "eid691", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 11750, duration: 0 },
            { id: "eid1099", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 12500, duration: 0 },
            { id: "eid1114", tween: [ "style", "${_Shoulder}", "left", '0px', { fromValue: '0px'}], position: 14250, duration: 0 },
            { id: "eid91", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 349, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 2000, duration: 0 },
            { id: "eid151", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 2500, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 4250, duration: 0 },
            { id: "eid222", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 4750, duration: 0 },
            { id: "eid228", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '40px'}], position: 7750, duration: 0 },
            { id: "eid637", tween: [ "style", "${_Ellbow}", "top", '16px', { fromValue: '40px'}], position: 8250, duration: 395 },
            { id: "eid638", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '16px'}], position: 8645, duration: 1226 },
            { id: "eid727", tween: [ "style", "${_Ellbow}", "top", '94px', { fromValue: '40px'}], position: 10500, duration: 341 },
            { id: "eid728", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '94px'}], position: 10841, duration: 909 },
            { id: "eid1127", tween: [ "style", "${_Ellbow}", "top", '116px', { fromValue: '40px'}], position: 12500, duration: 401 },
            { id: "eid1128", tween: [ "style", "${_Ellbow}", "top", '40px', { fromValue: '116px'}], position: 12901, duration: 1349 },
            { id: "eid102", tween: [ "transform", "${_ShoulderElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "transform", "${_ShoulderElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid105", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4750, duration: 0 },
            { id: "eid235", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7750, duration: 0 },
            { id: "eid617", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8250, duration: 0 },
            { id: "eid626", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9871, duration: 0 },
            { id: "eid680", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10500, duration: 0 },
            { id: "eid687", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11750, duration: 0 },
            { id: "eid1105", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 12500, duration: 0 },
            { id: "eid1110", tween: [ "transform", "${_Wrist}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 14250, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 4750, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 7750, duration: 0 },
            { id: "eid623", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 8250, duration: 0 },
            { id: "eid632", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '0px'}], position: 9871, duration: 0 },
            { id: "eid729", tween: [ "style", "${_Wrist}", "left", '-3px', { fromValue: '0px'}], position: 10500, duration: 341 },
            { id: "eid730", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '-3px'}], position: 10841, duration: 909 },
            { id: "eid1129", tween: [ "style", "${_Wrist}", "left", '-5px', { fromValue: '0px'}], position: 12500, duration: 401 },
            { id: "eid1130", tween: [ "style", "${_Wrist}", "left", '-3px', { fromValue: '-5px'}], position: 12901, duration: 599 },
            { id: "eid1139", tween: [ "style", "${_Wrist}", "left", '0px', { fromValue: '-3px'}], position: 13500, duration: 750 },
            { id: "eid92", tween: [ "style", "${_EllbowElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_EllbowElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 349, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid150", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 4250, duration: 0 },
            { id: "eid225", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 4750, duration: 0 },
            { id: "eid231", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 7750, duration: 0 },
            { id: "eid622", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 8250, duration: 0 },
            { id: "eid631", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '0px'}], position: 9871, duration: 0 },
            { id: "eid725", tween: [ "style", "${_Ellbow}", "left", '-5px', { fromValue: '0px'}], position: 10500, duration: 341 },
            { id: "eid726", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '-5px'}], position: 10841, duration: 909 },
            { id: "eid1125", tween: [ "style", "${_Ellbow}", "left", '2px', { fromValue: '0px'}], position: 12500, duration: 401 },
            { id: "eid1126", tween: [ "style", "${_Ellbow}", "left", '0px', { fromValue: '2px'}], position: 12901, duration: 1349 },
            { id: "eid100", tween: [ "style", "${_WristElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "transform", "${_WristElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "transform", "${_Ellbow}", "rotateZ", '67deg', { fromValue: '0deg'}], position: 349, duration: 320 },
            { id: "eid142", tween: [ "transform", "${_Ellbow}", "rotateZ", '29deg', { fromValue: '67deg'}], position: 669, duration: 412 },
            { id: "eid138", tween: [ "transform", "${_Ellbow}", "rotateZ", '43deg', { fromValue: '29deg'}], position: 1081, duration: 505 },
            { id: "eid139", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '43deg'}], position: 1586, duration: 414 },
            { id: "eid152", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
            { id: "eid155", tween: [ "transform", "${_Ellbow}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 2847, duration: 403 },
            { id: "eid161", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 3750, duration: 500 },
            { id: "eid219", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4750, duration: 0 },
            { id: "eid911", tween: [ "transform", "${_Ellbow}", "rotateZ", '-59deg', { fromValue: '0deg'}], position: 5892, duration: 358 },
            { id: "eid912", tween: [ "transform", "${_Ellbow}", "rotateZ", '-49deg', { fromValue: '-59deg'}], position: 6250, duration: 250 },
            { id: "eid913", tween: [ "transform", "${_Ellbow}", "rotateZ", '51deg', { fromValue: '-49deg'}], position: 6500, duration: 500 },
            { id: "eid914", tween: [ "transform", "${_Ellbow}", "rotateZ", '-17deg', { fromValue: '51deg'}], position: 7000, duration: 500 },
            { id: "eid915", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 7500, duration: 250 },
            { id: "eid616", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8250, duration: 0 },
            { id: "eid625", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9871, duration: 0 },
            { id: "eid704", tween: [ "transform", "${_Ellbow}", "rotateZ", '-91deg', { fromValue: '0deg'}], position: 10500, duration: 341 },
            { id: "eid705", tween: [ "transform", "${_Ellbow}", "rotateZ", '54deg', { fromValue: '-91deg'}], position: 10841, duration: 321 },
            { id: "eid706", tween: [ "transform", "${_Ellbow}", "rotateZ", '-29deg', { fromValue: '54deg'}], position: 11162, duration: 338 },
            { id: "eid708", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 11500, duration: 250 },
            { id: "eid1123", tween: [ "transform", "${_Ellbow}", "rotateZ", '53deg', { fromValue: '0deg'}], position: 12500, duration: 401 },
            { id: "eid1124", tween: [ "transform", "${_Ellbow}", "rotateZ", '96deg', { fromValue: '53deg'}], position: 12901, duration: 442 },
            { id: "eid1138", tween: [ "transform", "${_Ellbow}", "rotateZ", '0deg', { fromValue: '96deg'}], position: 13343, duration: 907 }         ]
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
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '87px'],
            ["style", "opacity", '0'],
            ["style", "left", '5px'],
            ["style", "width", '51px']
         ],
         "${_flame1}": [
            ["style", "top", '7px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '85px'],
            ["style", "opacity", '1'],
            ["style", "left", '8px'],
            ["style", "width", '41px']
         ],
         "${_flame2}": [
            ["style", "top", '9px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '49px']
         ],
         "${symbolSelector}": [
            ["style", "height", '92px'],
            ["style", "width", '56px']
         ],
         "${_flame}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
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
            { id: "eid25", tween: [ "subproperty", "${_flame1}", "filter.blur", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "subproperty", "${_flame1}", "filter.blur", '0px', { fromValue: '0px'}], position: 685, duration: 0 },
            { id: "eid70", tween: [ "subproperty", "${_flame1}", "filter.blur", '0px', { fromValue: '0px'}], position: 1370, duration: 0 },
            { id: "eid79", tween: [ "subproperty", "${_flame1}", "filter.blur", '0px', { fromValue: '0px'}], position: 2055, duration: 0 },
            { id: "eid98", tween: [ "subproperty", "${_flame1}", "filter.blur", '0px', { fromValue: '0px'}], position: 2740, duration: 0 },
            { id: "eid99", tween: [ "subproperty", "${_flame1}", "filter.blur", '0px', { fromValue: '0px'}], position: 3425, duration: 0 },
            { id: "eid26", tween: [ "subproperty", "${_flame3}", "filter.blur", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "subproperty", "${_flame3}", "filter.blur", '0px', { fromValue: '0px'}], position: 685, duration: 0 },
            { id: "eid64", tween: [ "subproperty", "${_flame3}", "filter.blur", '0px', { fromValue: '0px'}], position: 1370, duration: 0 },
            { id: "eid73", tween: [ "subproperty", "${_flame3}", "filter.blur", '0px', { fromValue: '0px'}], position: 2055, duration: 0 },
            { id: "eid91", tween: [ "subproperty", "${_flame3}", "filter.blur", '0px', { fromValue: '0px'}], position: 3425, duration: 0 },
            { id: "eid33", tween: [ "transform", "${_flame}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "subproperty", "${_flame2}", "filter.blur", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "subproperty", "${_flame2}", "filter.blur", '0px', { fromValue: '0px'}], position: 685, duration: 0 },
            { id: "eid67", tween: [ "subproperty", "${_flame2}", "filter.blur", '0px', { fromValue: '0px'}], position: 1370, duration: 0 },
            { id: "eid76", tween: [ "subproperty", "${_flame2}", "filter.blur", '0px', { fromValue: '0px'}], position: 2055, duration: 0 },
            { id: "eid96", tween: [ "subproperty", "${_flame2}", "filter.blur", '0px', { fromValue: '0px'}], position: 2740, duration: 0 },
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
      rect: ['0px','220px','17px','187px','auto','auto'],
      id: 'match_burned',
      type: 'image',
      clip: ['rect(-38px 17px 188px 0px)'],
      fill: ['rgba(0,0,0,0)','images/match_burned.svg','0px','0px']
   },
   {
      rect: ['0px','221px','16px','187px','auto','auto'],
      id: 'match',
      type: 'image',
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
         "${_match}": [
            ["style", "top", '221px'],
            ["style", "height", '187px'],
            ["style", "clip", [-8,16,188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '16px']
         ],
         "${_match_burned}": [
            ["style", "top", '220px'],
            ["style", "height", '187px'],
            ["style", "clip", [-38,17,-4,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '17px']
         ],
         "${_Flame}": [
            ["style", "-webkit-transform-origin", [58.93,80.43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [58.93,80.43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.85'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.91071'],
            ["style", "opacity", '0'],
            ["style", "left", '-23px'],
            ["style", "top", '160px']
         ],
         "${symbolSelector}": [
            ["style", "height", '408px'],
            ["style", "width", '51px']
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
            { id: "eid44", tween: [ "transform", "${_Flame}", "scaleX", '0.52172', { fromValue: '0.91071'}], position: 2750, duration: 250 },
            { id: "eid82", tween: [ "transform", "${_Flame}", "scaleY", '0.58106', { fromValue: '0.85'}], position: 2590, duration: 160 },
            { id: "eid45", tween: [ "transform", "${_Flame}", "scaleY", '0.527', { fromValue: '0.58106'}], position: 2750, duration: 250 },
            { id: "eid41", tween: [ "style", "${_Flame}", "top", '322px', { fromValue: '160px'}], position: 0, duration: 3000 },
            { id: "eid104", tween: [ "style", "${_Flame}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 55 },
            { id: "eid106", tween: [ "style", "${_Flame}", "opacity", '0', { fromValue: '1'}], position: 2940, duration: 60 },
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
            { id: "eid39", tween: [ "style", "${_Flame}", "-webkit-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid3349", tween: [ "style", "${_Flame}", "-moz-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid3350", tween: [ "style", "${_Flame}", "-ms-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid3351", tween: [ "style", "${_Flame}", "msTransformOrigin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 },
            { id: "eid3352", tween: [ "style", "${_Flame}", "-o-transform-origin", [58.93,80.43], { valueTemplate: '@@0@@% @@1@@%', fromValue: [58.93,80.43]}], position: 3000, duration: 0 }         ]
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
         "${_Knee}": [
            ["style", "top", '56px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ],
         "${_KneeElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${_PelvisElement}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
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
            { id: "eid1328", tween: [ "style", "${_KneeElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
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
            { id: "eid1357", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid2588", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 750, duration: 0 },
            { id: "eid2591", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2154, duration: 0 },
            { id: "eid2608", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
            { id: "eid2617", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4250, duration: 0 },
            { id: "eid2747", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4852, duration: 0 },
            { id: "eid2750", tween: [ "transform", "${_Knee}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid1327", tween: [ "transform", "${_KneeElement}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1333", tween: [ "style", "${_PelvisElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1325", tween: [ "style", "${_KneeElement}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1334", tween: [ "style", "${_PelvisElement}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
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
