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
            id:'LegR',
            type:'group',
            rect:['130','226','104','161','auto','auto'],
            transform:[],
            c:[
            {
               id:'limb2',
               type:'image',
               rect:['64px','-81px','34px','109px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"limb2.svg",'0px','0px'],
               transform:[[],['180']]
            },
            {
               id:'shoe',
               type:'image',
               rect:['0px','88px','104px','73px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"shoe.svg",'0px','0px'],
               transform:[]
            }]
         },
         {
            id:'LegL',
            type:'group',
            rect:['254','226','136','172','auto','auto'],
            transform:[],
            c:[
            {
               id:'limb2Copy',
               type:'image',
               rect:['19px','-82px','34px','109px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"limb2.svg",'0px','0px'],
               transform:[[],['146']]
            },
            {
               id:'shoeCopy',
               type:'image',
               rect:['7px','61px','104px','73px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"shoe.svg",'0px','0px'],
               transform:[[],['-53']]
            }]
         },
         {
            id:'HandR',
            type:'group',
            rect:['95','46','105','105','auto','auto'],
            transform:[],
            c:[
            {
               id:'limb2Copy2',
               type:'image',
               rect:['73px','-4px','34px','109px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"limb2.svg",'0px','0px'],
               transform:[[],['316'],[],['0.77415','0.77415']]
            },
            {
               id:'hand4',
               type:'image',
               rect:['24px','17px','47px','53px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"hand4.svg",'0px','0px'],
               transform:[[],['-111']]
            }]
         },
         {
            id:'Body',
            type:'group',
            rect:['119px','67px','269','206','auto','auto'],
            transform:[],
            c:[
            {
               id:'trian2',
               type:'image',
               rect:['0px','0px','208px','206px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"trian2.svg",'0px','0px']
            },
            {
               id:'trian2Copy',
               type:'image',
               rect:['78px','0px','191px','189px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"trian2.svg",'0px','0px']
            },
            {
               id:'eyeR',
               type:'image',
               rect:['139px','4px','43px','43px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eye.svg",'0px','0px'],
               transform:[]
            },
            {
               id:'eyeRCopy',
               type:'image',
               rect:['159px','39px','43px','43px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eye.svg",'0px','0px'],
               transform:[]
            }]
         },
         {
            id:'ArmL',
            type:'group',
            rect:['338px','111px','103','91','auto','auto'],
            transform:[],
            c:[
            {
               id:'LimbL',
               type:'image',
               rect:['3px','-25px','34px','109px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"limb2.svg",'0px','0px'],
               transform:[[],['416'],[],['0.77415','0.77415']]
            },
            {
               id:'HandL',
               type:'image',
               rect:['55px','0px','48px','48px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"hand22.svg",'0px','0px'],
               transform:[]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_limb2Copy}": [
            ["style", "-webkit-transform-origin", [26.49,88.76], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [26.49,88.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [26.49,88.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [26.49,88.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [26.49,88.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-82px'],
            ["style", "left", '19px'],
            ["transform", "rotateZ", '146deg']
         ],
         "${_ArmL}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [12.41,75.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [12.41,75.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [12.41,75.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [12.41,75.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [12.41,75.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '317px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Body}": [
            ["style", "top", '67px'],
            ["style", "left", '119px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_limb2}": [
            ["style", "-webkit-transform-origin", [32.35,87.16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-81px'],
            ["style", "left", '64px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_HandL}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [27.08,62.5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [27.08,62.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [27.08,62.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [27.08,62.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [27.08,62.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '55px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_eyeRCopy}": [
            ["style", "top", '45px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '176px']
         ],
         "${_LegR}": [
            ["style", "-webkit-transform-origin", [72.12,8.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_shoe}": [
            ["style", "top", '88px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [75.96,27.4], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [75.96,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [75.96,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [75.96,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [75.96,27.4],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_limb2Copy2}": [
            ["style", "top", '-4px'],
            ["transform", "scaleY", '0.77415'],
            ["transform", "rotateZ", '316deg'],
            ["transform", "scaleX", '0.77415'],
            ["style", "left", '73px'],
            ["style", "-webkit-transform-origin", [32.35,87.16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_hand4}": [
            ["style", "-webkit-transform-origin", [25.44,47.93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [25.44,47.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [25.44,47.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [25.44,47.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [25.44,47.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '17px'],
            ["style", "left", '24px'],
            ["transform", "rotateZ", '-111deg']
         ],
         "${_trian2}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_LimbL}": [
            ["style", "top", '-25px'],
            ["transform", "scaleY", '0.77415'],
            ["transform", "rotateZ", '416deg'],
            ["transform", "scaleX", '0.77415'],
            ["style", "left", '3px'],
            ["style", "-webkit-transform-origin", [32.35,87.16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.35,87.16],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_shoeCopy}": [
            ["style", "top", '61px'],
            ["style", "-webkit-transform-origin", [68.44,33.64], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [68.44,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [68.44,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [68.44,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [68.44,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '7px'],
            ["transform", "rotateZ", '-53deg']
         ],
         "${_eyeR}": [
            ["style", "top", '10px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '156px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_LegL}": [
            ["style", "-webkit-transform-origin", [21.71,8.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [21.71,8.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [21.71,8.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [21.71,8.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [21.71,8.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_trian2Copy}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "left", '78px'],
            ["style", "height", '189px'],
            ["transform", "scaleX", '1'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '191px']
         ],
         "${_HandR}": [
            ["style", "-webkit-transform-origin", [82.5,92.68], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid269", tween: [ "style", "${_eyeRCopy}", "left", '139px', { fromValue: '176px'}], position: 0, duration: 655 },
            { id: "eid270", tween: [ "style", "${_eyeRCopy}", "left", '178px', { fromValue: '139px'}], position: 655, duration: 345 },
            { id: "eid129", tween: [ "transform", "${_ArmL}", "rotateZ", '132deg', { fromValue: '0deg'}], position: 0, duration: 370 },
            { id: "eid130", tween: [ "transform", "${_ArmL}", "rotateZ", '0deg', { fromValue: '132deg'}], position: 370, duration: 630 },
            { id: "eid143", tween: [ "style", "${_eyeL}", "top", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "transform", "${_LegR}", "rotateZ", '-66deg', { fromValue: '0deg'}], position: 0, duration: 750 },
            { id: "eid122", tween: [ "transform", "${_LegR}", "rotateZ", '0deg', { fromValue: '-66deg'}], position: 750, duration: 250 },
            { id: "eid140", tween: [ "transform", "${_eyeL}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_trian2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid293", tween: [ "style", "${_trian2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid294", tween: [ "style", "${_trian2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "style", "${_trian2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid296", tween: [ "style", "${_trian2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_trian2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0 },
            { id: "eid297", tween: [ "style", "${_trian2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0 },
            { id: "eid298", tween: [ "style", "${_trian2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0 },
            { id: "eid299", tween: [ "style", "${_trian2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0 },
            { id: "eid300", tween: [ "style", "${_trian2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1000, duration: 0 },
            { id: "eid146", tween: [ "style", "${_eyeL}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_trian2Copy}", "left", '47px', { fromValue: '78px'}], position: 0, duration: 750 },
            { id: "eid180", tween: [ "style", "${_trian2Copy}", "left", '78px', { fromValue: '47px'}], position: 750, duration: 250 },
            { id: "eid138", tween: [ "transform", "${_eyeL}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "style", "${_eyeR}", "left", '119px', { fromValue: '156px'}], position: 0, duration: 655 },
            { id: "eid274", tween: [ "style", "${_eyeR}", "left", '158px', { fromValue: '119px'}], position: 655, duration: 345 },
            { id: "eid188", tween: [ "style", "${_ArmL}", "left", '274px', { fromValue: '317px'}], position: 0, duration: 750 },
            { id: "eid189", tween: [ "style", "${_ArmL}", "left", '317px', { fromValue: '274px'}], position: 750, duration: 250 },
            { id: "eid275", tween: [ "style", "${_eyeR}", "top", '0px', { fromValue: '10px'}], position: 0, duration: 655 },
            { id: "eid276", tween: [ "style", "${_eyeR}", "top", '10px', { fromValue: '0px'}], position: 655, duration: 345 },
            { id: "eid136", tween: [ "transform", "${_eyeL}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "style", "${_eyeL}", "width", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "style", "${_eyeL}", "height", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid271", tween: [ "style", "${_eyeRCopy}", "top", '31px', { fromValue: '41px'}], position: 0, duration: 655 },
            { id: "eid272", tween: [ "style", "${_eyeRCopy}", "top", '45px', { fromValue: '31px'}], position: 655, duration: 345 },
            { id: "eid134", tween: [ "transform", "${_HandL}", "rotateZ", '67deg', { fromValue: '0deg'}], position: 0, duration: 655 },
            { id: "eid135", tween: [ "transform", "${_HandL}", "rotateZ", '0deg', { fromValue: '67deg'}], position: 655, duration: 345 },
            { id: "eid190", tween: [ "style", "${_ArmL}", "top", '102px', { fromValue: '116px'}], position: 0, duration: 750 },
            { id: "eid191", tween: [ "style", "${_ArmL}", "top", '116px', { fromValue: '102px'}], position: 750, duration: 250 },
            { id: "eid125", tween: [ "transform", "${_HandR}", "rotateZ", '-161deg', { fromValue: '0deg'}], position: 0, duration: 655 },
            { id: "eid126", tween: [ "transform", "${_HandR}", "rotateZ", '0deg', { fromValue: '-161deg'}], position: 655, duration: 345 },
            { id: "eid117", tween: [ "transform", "${_LegL}", "rotateZ", '50deg', { fromValue: '0deg'}], position: 0, duration: 655 },
            { id: "eid118", tween: [ "transform", "${_LegL}", "rotateZ", '0deg', { fromValue: '50deg'}], position: 655, duration: 345 }         ]
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
})(jQuery, AdobeEdge, "PAGE_A");
