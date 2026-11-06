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
            id:'body',
            type:'image',
            rect:['260px','582px','480px','617px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"head_changer_03_body-02.svg",'0px','0px']
         },
         {
            id:'CanvasContainer',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            opacity:1,
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Shoulder2',
            type:'rect',
            rect:['55px','65px','41px','41px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'Elbow2',
            type:'rect',
            rect:['45px','151px','41px','41px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Wrist2',
            type:'rect',
            rect:['50px','277px','31px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Shoulder',
            type:'rect',
            rect:['55px','65px','41px','41px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'Elbow',
            type:'rect',
            rect:['45px','151px','41px','41px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Wrist',
            type:'rect',
            rect:['50px','277px','31px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Face',
            type:'rect',
            rect:['49px','913px','auto','auto','auto','auto']
         },
         {
            id:'Hat',
            type:'rect',
            rect:['307px','548px','auto','auto','auto','auto'],
            clip:['rect(0px 386pxpx 242pxpx 0px)']
         },
         {
            id:'TopTree',
            type:'rect',
            rect:['118','-302','auto','auto','auto','auto']
         },
         {
            id:'TopUfo',
            type:'rect',
            rect:['-100','-235','auto','auto','auto','auto']
         },
         {
            id:'TopCloud',
            type:'rect',
            rect:['154','103','auto','auto','auto','auto']
         },
         {
            id:'Starter',
            type:'rect',
            rect:['831','997','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Hat',
            symbolName:'HatAll'
         },
         {
            id:'Starter',
            symbolName:'Starter'
         },
         {
            id:'TopTree',
            symbolName:'Top'
         },
         {
            id:'Face',
            symbolName:'Face'
         },
         {
            id:'TopCloud',
            symbolName:'TopCloud'
         },
         {
            id:'TopUfo',
            symbolName:'TopUfo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Wrist2}": [
            ["transform", "rotateZ", '-260deg'],
            ["transform", "scaleX", '0.64516'],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '31px'],
            ["style", "top", '663px'],
            ["transform", "scaleY", '0.3125'],
            ["style", "height", '64px'],
            ["style", "left", '581px']
         ],
         "${_Face}": [
            ["style", "left", '431px'],
            ["style", "top", '633px']
         ],
         "${_Elbow}": [
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '2.1043'],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '20px'],
            ["style", "top", '774px'],
            ["transform", "scaleY", '0.83333'],
            ["style", "height", '24px'],
            ["style", "left", '215px']
         ],
         "${_Wrist}": [
            ["transform", "rotateZ", '-93deg'],
            ["transform", "scaleX", '0.64516'],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '31px'],
            ["style", "top", '663px'],
            ["transform", "scaleY", '0.3125'],
            ["style", "height", '64px'],
            ["style", "left", '385px']
         ],
         "${_Shoulder2}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-77deg'],
            ["transform", "scaleX", '3.12'],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '20px'],
            ["style", "top", '813px'],
            ["transform", "skewY", '0.03deg'],
            ["style", "height", '20px'],
            ["transform", "scaleY", '2.83934'],
            ["style", "left", '568px']
         ],
         "${_TopUfo}": [
            ["style", "left", '147px'],
            ["style", "top", '116px']
         ],
         "${_Hat}": [
            ["style", "top", '534px'],
            ["style", "clip", [-276,386,352,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '314px']
         ],
         "${_Shoulder}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '74deg'],
            ["transform", "scaleX", '3.12'],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '20px'],
            ["style", "top", '813px'],
            ["transform", "skewY", '0.03deg'],
            ["style", "height", '20px'],
            ["style", "left", '410px'],
            ["transform", "scaleY", '2.83934']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '1000px'],
            ["style", "height", '1600px'],
            ["style", "overflow", 'visible']
         ],
         "${_Elbow2}": [
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '2.1043'],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '20px'],
            ["style", "top", '775px'],
            ["transform", "scaleY", '0.83333'],
            ["style", "height", '24px'],
            ["style", "left", '767px']
         ],
         "${_body}": [
            ["style", "left", '260px'],
            ["style", "top", '582px']
         ],
         "${_CanvasContainer}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "height", '100%'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 63,
         autoPlay: true,
         labels: {
            "arms_down": 0,
            "arms_up": 63
         },
         timeline: [
            { id: "eid560", tween: [ "style", "${_Elbow}", "height", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "style", "${_Shoulder}", "width", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid482", tween: [ "transform", "${_Shoulder2}", "skewY", '0.03deg', { fromValue: '0.03deg'}], position: 0, duration: 0 },
            { id: "eid410", tween: [ "style", "${_Shoulder2}", "height", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "transform", "${_Shoulder2}", "rotateZ", '-118deg', { fromValue: '-77deg'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid569", tween: [ "style", "${_Shoulder}", "top", '813px', { fromValue: '813px'}], position: 0, duration: 0 },
            { id: "eid566", tween: [ "style", "${_Elbow}", "left", '243px', { fromValue: '215px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid542", tween: [ "transform", "${_Elbow2}", "scaleX", '2.1043', { fromValue: '2.1043'}], position: 0, duration: 0 },
            { id: "eid445", tween: [ "style", "${_Wrist2}", "top", '289px', { fromValue: '663px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid562", tween: [ "transform", "${_Elbow}", "rotateZ", '-192deg', { fromValue: '-180deg'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid552", tween: [ "transform", "${_Wrist}", "scaleY", '0.3125', { fromValue: '0.3125'}], position: 0, duration: 0 },
            { id: "eid570", tween: [ "style", "${_Shoulder}", "height", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid581", tween: [ "style", "${_Shoulder}", "left", '410px', { fromValue: '410px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid421", tween: [ "style", "${_Wrist2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid554", tween: [ "style", "${_Wrist}", "height", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
            { id: "eid614", tween: [ "style", "${_TopUfo}", "left", '147px', { fromValue: '147px'}], position: 39, duration: 0, easing: "easeInQuad" },
            { id: "eid555", tween: [ "style", "${_Wrist}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid615", tween: [ "style", "${_TopUfo}", "top", '116px', { fromValue: '116px'}], position: 39, duration: 0, easing: "easeInQuad" },
            { id: "eid525", tween: [ "transform", "${_Shoulder2}", "scaleX", '3.12', { fromValue: '3.12'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "transform", "${_Wrist2}", "scaleY", '0.3125', { fromValue: '0.3125'}], position: 0, duration: 0 },
            { id: "eid553", tween: [ "transform", "${_Wrist}", "rotateZ", '-179deg', { fromValue: '-93deg'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid568", tween: [ "style", "${_Elbow}", "width", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid587", tween: [ "style", "${_Hat}", "top", '179px', { fromValue: '534px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid509", tween: [ "style", "${_Elbow2}", "height", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid447", tween: [ "style", "${_Elbow2}", "top", '665px', { fromValue: '775px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid441", tween: [ "transform", "${_Wrist2}", "scaleX", '0.64516', { fromValue: '0.64516'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "transform", "${_Shoulder}", "scaleY", '2.83934', { fromValue: '2.83934'}], position: 0, duration: 0 },
            { id: "eid561", tween: [ "transform", "${_Elbow}", "scaleY", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid564", tween: [ "transform", "${_Elbow}", "scaleX", '2.1043', { fromValue: '2.1043'}], position: 0, duration: 0 },
            { id: "eid430", tween: [ "style", "${_Wrist2}", "height", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
            { id: "eid548", tween: [ "transform", "${_Elbow2}", "scaleY", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid431", tween: [ "style", "${_Wrist2}", "width", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_Shoulder2}", "width", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid574", tween: [ "transform", "${_Shoulder}", "scaleX", '3.12', { fromValue: '3.12'}], position: 0, duration: 0 },
            { id: "eid551", tween: [ "transform", "${_Wrist}", "scaleX", '0.64516', { fromValue: '0.64516'}], position: 0, duration: 0 },
            { id: "eid575", tween: [ "transform", "${_Shoulder}", "skewY", '0.03deg', { fromValue: '0.03deg'}], position: 0, duration: 0 },
            { id: "eid544", tween: [ "style", "${_Shoulder2}", "top", '813px', { fromValue: '813px'}], position: 0, duration: 0 },
            { id: "eid446", tween: [ "style", "${_Elbow2}", "left", '713px', { fromValue: '767px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid586", tween: [ "style", "${_Hat}", "left", '315px', { fromValue: '314px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid558", tween: [ "style", "${_Elbow}", "top", '665px', { fromValue: '774px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid565", tween: [ "style", "${_Elbow}", "opacity", '1', { fromValue: '1'}], position: 39, duration: 0 },
            { id: "eid420", tween: [ "style", "${_Elbow2}", "opacity", '1', { fromValue: '1'}], position: 39, duration: 0 },
            { id: "eid534", tween: [ "style", "${_Wrist2}", "left", '581px', { fromValue: '581px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_Wrist}", "top", '289px', { fromValue: '663px'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid540", tween: [ "style", "${_Shoulder2}", "left", '568px', { fromValue: '568px'}], position: 0, duration: 0 },
            { id: "eid433", tween: [ "style", "${_Elbow2}", "width", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid927", tween: [ "style", "${_Hat}", "clip", [-107,386,352,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-154,386,352,0]}], position: 0, duration: 23, easing: "easeInQuad" },
            { id: "eid681", tween: [ "style", "${_Hat}", "clip", [11,386,356,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-107,386,352,0]}], position: 23, duration: 20 },
            { id: "eid620", tween: [ "style", "${_Hat}", "clip", [102,386,356.78063964844,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [11,386,356,0]}], position: 43, duration: 11 },
            { id: "eid894", tween: [ "style", "${_Hat}", "clip", [192,386,357,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [102,386,356.78063964844,0]}], position: 54, duration: 9 },
            { id: "eid1019", tween: [ "style", "${_Face}", "left", '431px', { fromValue: '431px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid539", tween: [ "transform", "${_Shoulder2}", "scaleY", '2.83934', { fromValue: '2.83934'}], position: 0, duration: 0 },
            { id: "eid580", tween: [ "style", "${_Wrist}", "left", '385px', { fromValue: '385px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid448", tween: [ "transform", "${_Elbow2}", "rotateZ", '-171deg', { fromValue: '-180deg'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid530", tween: [ "transform", "${_Wrist2}", "rotateZ", '-180deg', { fromValue: '-260deg'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid572", tween: [ "transform", "${_Shoulder}", "rotateZ", '109deg', { fromValue: '74deg'}], position: 0, duration: 63, easing: "easeInQuad" },
            { id: "eid557", tween: [ "style", "${_Wrist}", "width", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid1020", tween: [ "style", "${_Face}", "top", '633px', { fromValue: '633px'}], position: 0, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"HatAll": {
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
      rect: ['0px','0px','386px','242px','auto','auto'],
      id: 'cover_cloud',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cover_cloud.svg','0px','0px']
   },
   {
      id: 'hat_laub',
      type: 'image',
      rect: ['-45px','0px','455px','346px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hat_laub.svg','0px','0px']
   },
   {
      id: 'hat_slime',
      type: 'image',
      rect: ['58px','0px','269px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hat_slime.svg','0px','0px']
   },
   {
      rect: ['61px','66px','248px','234px','auto','auto'],
      id: 'hat_alien',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/hat_alien.svg','0px','0px']
   },
   {
      id: 'hat_tube',
      type: 'image',
      rect: ['49px','-114px','268px','408px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hat_tube.svg','0px','0px']
   },
   {
      id: 'hat_beard',
      type: 'image',
      rect: ['77px','114px','221px','161px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hat_beard.svg','0px','0px']
   },
   {
      id: 'hat_fliegerhelm',
      type: 'image',
      rect: ['74px','57px','225px','222px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hat_fliegerhelm.svg','0px','0px']
   },
   {
      id: 'hat_nest',
      type: 'image',
      rect: ['-34px','249px','454px','209px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hat_nest.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cover_cloud}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_hat_laub}": [
            ["style", "top", '-52px'],
            ["style", "opacity", '0'],
            ["style", "left", '-59px']
         ],
         "${_hat_slime}": [
            ["style", "top", '55px'],
            ["style", "opacity", '0'],
            ["style", "left", '55px']
         ],
         "${_hat_fliegerhelm}": [
            ["style", "top", '57px'],
            ["style", "opacity", '0'],
            ["style", "left", '74px']
         ],
         "${_hat_tube}": [
            ["style", "top", '-114px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px']
         ],
         "${_hat_nest}": [
            ["style", "top", '26px'],
            ["style", "opacity", '0'],
            ["style", "left", '-52px']
         ],
         "${symbolSelector}": [
            ["style", "height", '242px'],
            ["style", "width", '386px']
         ],
         "${_hat_alien}": [
            ["style", "top", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '61px']
         ],
         "${_hat_beard}": [
            ["style", "top", '114px'],
            ["style", "opacity", '0'],
            ["style", "left", '77px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 838,
         autoPlay: true,
         labels: {
            "off": 0,
            "hat_cloud": 96,
            "hat_nest": 218,
            "hat_laub": 329,
            "hat_slime": 437,
            "hat_alien": 560,
            "hat_tube": 655,
            "hat_beard": 750,
            "hat_fliegerhelm": 838
         },
         timeline: [
            { id: "eid866", tween: [ "style", "${_hat_slime}", "opacity", '0', { fromValue: '0'}], position: 96, duration: 0, easing: "easeInQuad" },
            { id: "eid865", tween: [ "style", "${_hat_slime}", "opacity", '1', { fromValue: '0'}], position: 437, duration: 0, easing: "easeInQuad" },
            { id: "eid899", tween: [ "style", "${_hat_slime}", "opacity", '0', { fromValue: '1'}], position: 560, duration: 0, easing: "easeInQuad" },
            { id: "eid990", tween: [ "style", "${_hat_fliegerhelm}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid989", tween: [ "style", "${_hat_fliegerhelm}", "opacity", '1', { fromValue: '0'}], position: 838, duration: 0, easing: "easeInQuad" },
            { id: "eid876", tween: [ "style", "${_hat_slime}", "top", '55px', { fromValue: '55px'}], position: 437, duration: 0, easing: "easeInQuad" },
            { id: "eid610", tween: [ "style", "${_hat_nest}", "top", '26px', { fromValue: '26px'}], position: 218, duration: 0, easing: "easeInQuad" },
            { id: "eid875", tween: [ "style", "${_hat_nest}", "top", '16px', { fromValue: '26px'}], position: 437, duration: 0, easing: "easeInQuad" },
            { id: "eid603", tween: [ "style", "${_hat_nest}", "opacity", '0', { fromValue: '0'}], position: 96, duration: 0, easing: "easeInQuad" },
            { id: "eid605", tween: [ "style", "${_hat_nest}", "opacity", '1', { fromValue: '0'}], position: 218, duration: 0, easing: "easeInQuad" },
            { id: "eid609", tween: [ "style", "${_hat_nest}", "opacity", '0', { fromValue: '1'}], position: 329, duration: 0, easing: "easeInQuad" },
            { id: "eid886", tween: [ "style", "${_cover_cloud}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid602", tween: [ "style", "${_cover_cloud}", "opacity", '1', { fromValue: '0'}], position: 96, duration: 0, easing: "easeInQuad" },
            { id: "eid606", tween: [ "style", "${_cover_cloud}", "opacity", '0', { fromValue: '1'}], position: 218, duration: 0, easing: "easeInQuad" },
            { id: "eid611", tween: [ "style", "${_hat_nest}", "left", '-52px', { fromValue: '-52px'}], position: 218, duration: 0, easing: "easeInQuad" },
            { id: "eid612", tween: [ "style", "${_hat_laub}", "left", '-59px', { fromValue: '-59px'}], position: 329, duration: 0, easing: "easeInQuad" },
            { id: "eid613", tween: [ "style", "${_hat_laub}", "top", '-52px', { fromValue: '-52px'}], position: 329, duration: 0, easing: "easeInQuad" },
            { id: "eid607", tween: [ "style", "${_hat_laub}", "opacity", '0', { fromValue: '0'}], position: 96, duration: 0, easing: "easeInQuad" },
            { id: "eid608", tween: [ "style", "${_hat_laub}", "opacity", '1', { fromValue: '0'}], position: 329, duration: 0, easing: "easeInQuad" },
            { id: "eid856", tween: [ "style", "${_hat_laub}", "opacity", '0', { fromValue: '1'}], position: 437, duration: 0, easing: "easeInQuad" },
            { id: "eid877", tween: [ "style", "${_hat_slime}", "left", '55px', { fromValue: '55px'}], position: 437, duration: 0, easing: "easeInQuad" },
            { id: "eid909", tween: [ "style", "${_hat_tube}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid952", tween: [ "style", "${_hat_tube}", "opacity", '1', { fromValue: '0'}], position: 655, duration: 0, easing: "easeInQuad" },
            { id: "eid953", tween: [ "style", "${_hat_tube}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid954", tween: [ "style", "${_hat_beard}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid955", tween: [ "style", "${_hat_beard}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid988", tween: [ "style", "${_hat_beard}", "opacity", '0', { fromValue: '1'}], position: 838, duration: 0, easing: "easeInQuad" },
            { id: "eid902", tween: [ "style", "${_hat_alien}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid903", tween: [ "style", "${_hat_alien}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 0, easing: "easeInQuad" },
            { id: "eid908", tween: [ "style", "${_hat_alien}", "opacity", '0', { fromValue: '1'}], position: 655, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"Top": {
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
      rect: ['0px','0px','724px','850px','auto','auto'],
      id: 'head_changer_03_top_tree-03',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/head_changer_03_top_tree-03.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_head_changer_03_top_tree-03}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [49.72,12.76], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.72,12.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.72,12.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.72,12.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.72,12.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-111deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '850px'],
            ["style", "width", '724px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 576.9140625,
         autoPlay: true,
         labels: {
            "in": 135,
            "active": 306,
            "out": 378
         },
         timeline: [
            { id: "eid591", tween: [ "transform", "${_head_changer_03_top_tree-03}", "rotateZ", '0deg', { fromValue: '-111deg'}], position: 135, duration: 207, easing: "easeOutBack" },
            { id: "eid594", tween: [ "transform", "${_head_changer_03_top_tree-03}", "rotateZ", '108deg', { fromValue: '0deg'}], position: 429, duration: 148, easing: "easeInQuad" }         ]
      }
   }
},
"TopUfo": {
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
      id: 'top_ufo',
      type: 'image',
      rect: ['0px','0px','720px','920px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/top_ufo.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_top_ufo}": [
            ["style", "-webkit-transform-origin", [47.06,-50.51], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.06,-50.51],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.06,-50.51],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.06,-50.51],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.06,-50.51],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-91deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '920px'],
            ["style", "width", '720px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 724,
         autoPlay: true,
         labels: {
            "in": 108,
            "active": 380,
            "out": 545
         },
         timeline: [
            { id: "eid628", tween: [ "style", "${_top_ufo}", "-webkit-transform-origin", [47.06,-50.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.06,-50.51]}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1140", tween: [ "style", "${_top_ufo}", "-moz-transform-origin", [47.06,-50.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.06,-50.51]}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1141", tween: [ "style", "${_top_ufo}", "-ms-transform-origin", [47.06,-50.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.06,-50.51]}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1142", tween: [ "style", "${_top_ufo}", "msTransformOrigin", [47.06,-50.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.06,-50.51]}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1143", tween: [ "style", "${_top_ufo}", "-o-transform-origin", [47.06,-50.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.06,-50.51]}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid630", tween: [ "transform", "${_top_ufo}", "rotateZ", '0deg', { fromValue: '-91deg'}], position: 108, duration: 272, easing: "easeOutBack" },
            { id: "eid637", tween: [ "transform", "${_top_ufo}", "rotateZ", '96deg', { fromValue: '0deg'}], position: 545, duration: 179, easing: "easeOutQuad" }         ]
      }
   }
},
"TopCloud": {
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
      transform: [],
      id: 'top_cloud',
      type: 'image',
      rect: ['0px','0px','720px','460px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/top_cloud.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_top_cloud}": [
            ["style", "-webkit-transform-origin", [49.37,-96.55], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.37,-96.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.37,-96.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.37,-96.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.37,-96.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '-31px'],
            ["transform", "rotateZ", '-95deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '460px'],
            ["style", "width", '720px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 737,
         autoPlay: true,
         labels: {
            "in": 99,
            "active": 335,
            "out": 500
         },
         timeline: [
            { id: "eid764", tween: [ "transform", "${_top_cloud}", "rotateZ", '0deg', { fromValue: '-95deg'}], position: 99, duration: 236, easing: "easeInQuad" },
            { id: "eid770", tween: [ "transform", "${_top_cloud}", "rotateZ", '97deg', { fromValue: '0deg'}], position: 500, duration: 237, easing: "easeInQuad" },
            { id: "eid851", tween: [ "style", "${_top_cloud}", "left", '-31px', { fromValue: '-31px'}], position: 500, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"Face": {
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
      id: 'face01',
      type: 'image',
      rect: ['0px','0px','138px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/face01.svg','0px','0px']
   },
   {
      id: 'face02',
      type: 'image',
      rect: ['0px','0px','138px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/face02.svg','0px','0px']
   },
   {
      id: 'face03',
      type: 'image',
      rect: ['0px','0px','138px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/face03.svg','0px','0px']
   },
   {
      id: 'face04',
      type: 'image',
      rect: ['0px','0px','138px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/face04.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_face03}": [
            ["style", "top", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '-15px']
         ],
         "${_face02}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '19px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '138px']
         ],
         "${_face04}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px']
         ],
         "${_face01}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 318,
         autoPlay: true,
         labels: {
            "face01": 57,
            "face02": 150,
            "face03": 222,
            "face04": 318
         },
         timeline: [
            { id: "eid1031", tween: [ "style", "${_face02}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1038", tween: [ "style", "${_face02}", "opacity", '1', { fromValue: '0'}], position: 150, duration: 0 },
            { id: "eid1039", tween: [ "style", "${_face02}", "opacity", '0', { fromValue: '1'}], position: 222, duration: 0 },
            { id: "eid1032", tween: [ "style", "${_face01}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1036", tween: [ "style", "${_face01}", "opacity", '1', { fromValue: '0'}], position: 57, duration: 0 },
            { id: "eid1037", tween: [ "style", "${_face01}", "opacity", '0', { fromValue: '1'}], position: 150, duration: 0 },
            { id: "eid1054", tween: [ "style", "${_face03}", "top", '6px', { fromValue: '6px'}], position: 222, duration: 0 },
            { id: "eid1078", tween: [ "style", "${_face03}", "top", '16px', { fromValue: '6px'}], position: 231, duration: 0 },
            { id: "eid1055", tween: [ "style", "${_face03}", "left", '-15px', { fromValue: '-15px'}], position: 222, duration: 0 },
            { id: "eid1079", tween: [ "style", "${_face03}", "left", '-5px', { fromValue: '-15px'}], position: 231, duration: 0 },
            { id: "eid1057", tween: [ "style", "${_face04}", "top", '0px', { fromValue: '0px'}], position: 318, duration: 0 },
            { id: "eid1030", tween: [ "style", "${_face03}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1040", tween: [ "style", "${_face03}", "opacity", '1', { fromValue: '0'}], position: 222, duration: 0 },
            { id: "eid1041", tween: [ "style", "${_face03}", "opacity", '0', { fromValue: '1'}], position: 318, duration: 0 },
            { id: "eid1029", tween: [ "style", "${_face04}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1033", tween: [ "style", "${_face04}", "opacity", '1', { fromValue: '1'}], position: 318, duration: 0 },
            { id: "eid1056", tween: [ "style", "${_face04}", "left", '-5px', { fromValue: '-5px'}], position: 318, duration: 0 },
            { id: "eid1053", tween: [ "style", "${_face02}", "left", '19px', { fromValue: '19px'}], position: 150, duration: 0 },
            { id: "eid1051", tween: [ "style", "${_face01}", "left", '-5px', { fromValue: '-5px'}], position: 57, duration: 0 }         ]
      }
   }
},
"Starter": {
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
      rect: ['0px','0px','0px','0px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(201,65,65,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '138px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(201,65,65,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
         ]
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
})(jQuery, AdobeEdge, "EDGE-11456972");
