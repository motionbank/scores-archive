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
            id:'ArmR',
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
               id:'Group',
               type:'group',
               rect:['156','10','63','78','auto','auto'],
               c:[
               {
                  id:'eyeR',
                  type:'image',
                  rect:['0px','0px','43px','43px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"eye.svg",'0px','0px'],
                  transform:[]
               },
               {
                  id:'eyeRCopy',
                  type:'image',
                  rect:['20px','35px','43px','43px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"eye.svg",'0px','0px'],
                  transform:[]
               }]
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
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '119px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
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
            ["style", "top", '35px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '20px']
         ],
         "${_LegR}": [
            ["style", "top", '226px'],
            ["style", "-webkit-transform-origin", [72.12,8.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [72.12,8.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '130px'],
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
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group}": [
            ["style", "left", '156px'],
            ["style", "top", '10px']
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
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
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
            ["style", "top", '226px'],
            ["style", "left", '254px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_trian2Copy}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '78px'],
            ["style", "width", '191px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '189px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_ArmR}": [
            ["style", "-webkit-transform-origin", [82.5,92.68], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.5,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '46px'],
            ["style", "left", '95px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1001,
         autoPlay: false,
         timeline: [
            { id: "eid518", tween: [ "transform", "${_ArmR}", "rotateZ", '-82deg', { fromValue: '0deg'}], position: 0, duration: 427 },
            { id: "eid519", tween: [ "transform", "${_ArmR}", "rotateZ", '0deg', { fromValue: '-82deg'}], position: 427, duration: 573 },
            { id: "eid147", tween: [ "style", "${_eyeL}", "width", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "transform", "${_ArmL}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 0, duration: 427 },
            { id: "eid550", tween: [ "transform", "${_ArmL}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 427, duration: 573 },
            { id: "eid143", tween: [ "style", "${_eyeL}", "top", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid508", tween: [ "transform", "${_LegR}", "rotateZ", '-59deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid509", tween: [ "transform", "${_LegR}", "rotateZ", '0deg', { fromValue: '-59deg'}], position: 500, duration: 500 },
            { id: "eid140", tween: [ "transform", "${_eyeL}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_eyeL}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid506", tween: [ "style", "${_LegR}", "top", '207px', { fromValue: '226px'}], position: 0, duration: 500 },
            { id: "eid507", tween: [ "style", "${_LegR}", "top", '226px', { fromValue: '207px'}], position: 500, duration: 500 },
            { id: "eid534", tween: [ "style", "${_trian2Copy}", "left", '73px', { fromValue: '78px'}], position: 0, duration: 349 },
            { id: "eid538", tween: [ "style", "${_trian2Copy}", "left", '78px', { fromValue: '73px'}], position: 637, duration: 363 },
            { id: "eid495", tween: [ "style", "${_trian2}", "left", '52px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid496", tween: [ "style", "${_trian2}", "left", '0px', { fromValue: '52px'}], position: 500, duration: 500 },
            { id: "eid535", tween: [ "style", "${_trian2Copy}", "top", '-5px', { fromValue: '0px'}], position: 0, duration: 349 },
            { id: "eid539", tween: [ "style", "${_trian2Copy}", "top", '0px', { fromValue: '-5px'}], position: 637, duration: 363 },
            { id: "eid543", tween: [ "style", "${_Group}", "left", '157px', { fromValue: '156px'}], position: 0, duration: 349 },
            { id: "eid546", tween: [ "style", "${_Group}", "left", '156px', { fromValue: '157px'}], position: 637, duration: 363 },
            { id: "eid504", tween: [ "style", "${_LegR}", "left", '178px', { fromValue: '130px'}], position: 0, duration: 500 },
            { id: "eid505", tween: [ "style", "${_LegR}", "left", '130px', { fromValue: '178px'}], position: 500, duration: 500 },
            { id: "eid520", tween: [ "style", "${_LegL}", "left", '254px', { fromValue: '254px'}], position: 0, duration: 0 },
            { id: "eid530", tween: [ "style", "${_LegL}", "left", '254px', { fromValue: '254px'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "transform", "${_eyeL}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid482", tween: [ "transform", "${_trian2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid494", tween: [ "transform", "${_trian2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "eid542", tween: [ "style", "${_Group}", "top", '1px', { fromValue: '10px'}], position: 0, duration: 349 },
            { id: "eid547", tween: [ "style", "${_Group}", "top", '10px', { fromValue: '1px'}], position: 637, duration: 363 },
            { id: "eid521", tween: [ "style", "${_LegL}", "top", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid529", tween: [ "style", "${_LegL}", "top", '226px', { fromValue: '226px'}], position: 1000, duration: 0 },
            { id: "eid148", tween: [ "style", "${_eyeL}", "height", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
            { id: "eid516", tween: [ "style", "${_ArmR}", "top", '50px', { fromValue: '46px'}], position: 0, duration: 427 },
            { id: "eid517", tween: [ "style", "${_ArmR}", "top", '46px', { fromValue: '50px'}], position: 427, duration: 573 },
            { id: "eid497", tween: [ "style", "${_trian2}", "top", '-6px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid498", tween: [ "style", "${_trian2}", "top", '0px', { fromValue: '-6px'}], position: 500, duration: 500 },
            { id: "eid136", tween: [ "transform", "${_eyeL}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid514", tween: [ "style", "${_ArmR}", "left", '135px', { fromValue: '95px'}], position: 0, duration: 427 },
            { id: "eid515", tween: [ "style", "${_ArmR}", "left", '95px', { fromValue: '135px'}], position: 427, duration: 573 },
            { id: "eid526", tween: [ "transform", "${_LegL}", "rotateZ", '46deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid531", tween: [ "transform", "${_LegL}", "rotateZ", '0deg', { fromValue: '46deg'}], position: 688, duration: 313 }         ]
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
})(jQuery, AdobeEdge, "PAGE_C");
