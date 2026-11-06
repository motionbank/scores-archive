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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Symbol_1',
            type:'rect',
            rect:['308','146','auto','auto','auto','auto'],
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
            rect:['-15','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_4',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_5',
            type:'rect',
            rect:['-15px','0px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_6',
            type:'rect',
            rect:['-30','0','auto','auto','auto','auto'],
            userClass:"ani_syms"
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'Symbol_6',
            symbolName:'Symbol_6'
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
            ["style", "left", '293px'],
            ["style", "top", '146px']
         ],
         "${_Symbol_5}": [
            ["style", "left", '293px'],
            ["style", "top", '146px']
         ],
         "${_Symbol_2}": [
            ["style", "left", '308px'],
            ["style", "top", '146px']
         ],
         "${_Symbol_4}": [
            ["style", "top", '146px'],
            ["style", "left", '293px']
         ],
         "${_Symbol_1}": [
            ["style", "left", '308px'],
            ["style", "top", '146px']
         ],
         "${_Symbol_6}": [
            ["style", "left", '278px'],
            ["style", "top", '146px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '800px']
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
            { id: "eid1076", tween: [ "style", "${_Symbol_6}", "left", '278px', { fromValue: '278px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid410", tween: [ "style", "${_Symbol_4}", "left", '293px', { fromValue: '293px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid467", tween: [ "style", "${_Symbol_5}", "left", '293px', { fromValue: '293px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid468", tween: [ "style", "${_Symbol_5}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid401", tween: [ "style", "${_Symbol_3}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1072", tween: [ "style", "${_Symbol_6}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid409", tween: [ "style", "${_Symbol_4}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid872", tween: [ "style", "${_Symbol_1}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Symbol_3}", "left", '293px', { fromValue: '293px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid871", tween: [ "style", "${_Symbol_1}", "left", '308px', { fromValue: '308px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Symbol_2}", "left", '308px', { fromValue: '308px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid12", tween: [ "style", "${_Symbol_2}", "top", '146px', { fromValue: '146px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Shadow3',
      type: 'image',
      rect: ['-31px','251px','280px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
   },
   {
      id: 'Trunk',
      type: 'image',
      rect: ['44px','35px','89px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
   },
   {
      rect: ['73px','0px','16px','129px','auto','auto'],
      id: 'Branch_02',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
   },
   {
      rect: ['82px','35px','38px','45px','auto','auto'],
      id: 'Branch_03',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
   },
   {
      rect: ['15px','119px','93px','81px','auto','auto'],
      id: 'Branch_04',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
   },
   {
      rect: ['0px','168px','73px','11px','auto','auto'],
      id: 'Branch_05',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
   },
   {
      rect: ['98px','80px','43px','77px','auto','auto'],
      id: 'Branch_07',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
   },
   {
      rect: ['133px','133px','34px','81px','auto','auto'],
      id: 'Branch_01',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
   },
   {
      rect: ['98px','128px','103px','127px','auto','auto'],
      id: 'Branch_08',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['0','0','225','283','auto','auto'],
      c: [
      {
         rect: ['133px','210px','33px','41px','auto','auto'],
         id: 'Branch_09',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
      },
      {
         rect: ['94px','244px','105px','33px','auto','auto'],
         id: 'Branch_10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
      },
      {
         rect: ['125px','171px','30px','45px','auto','auto'],
         id: 'Leaf_01',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['151px','119px','30px','45px','auto','auto'],
         id: 'Leaf_12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['181px','131px','30px','45px','auto','auto'],
         id: 'Leaf_04',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['55px','157px','30px','45px','auto','auto'],
         id: 'Leaf_02',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      },
      {
         rect: ['112px','238px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['88px','130px','30px','45px','auto','auto'],
         id: 'Leaf_03',
         transform: [[],['-13']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
      },
      {
         rect: ['7px','106px','30px','45px','auto','auto'],
         id: 'Leaf_05',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['58px','96px','30px','45px','auto','auto'],
         id: 'Leaf_06',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['120px','65px','30px','45px','auto','auto'],
         id: 'Leaf_07',
         transform: [[],['-11']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
      },
      {
         rect: ['103px','23px','30px','45px','auto','auto'],
         id: 'Leaf_08',
         transform: [[],['-14']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['88px','177px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['173px','232px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['73px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['32px','57px','30px','45px','auto','auto'],
         id: 'Leaf_10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['-15px','162px','30px','45px','auto','auto'],
         id: 'Leaf_11Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      }]
   },
   {
      id: 'Group2Copy',
      type: 'group',
      rect: ['0','0px','225','283','auto','auto'],
      c: [
      {
         rect: ['151px','119px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['125px','171px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy4',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['181px','131px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy4',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['133px','210px','33px','41px','auto','auto'],
         id: 'Branch_09Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
      },
      {
         rect: ['94px','244px','105px','33px','auto','auto'],
         id: 'Branch_10Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
      },
      {
         rect: ['55px','157px','30px','45px','auto','auto'],
         id: 'Leaf_02Copy',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      },
      {
         rect: ['112px','238px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['88px','130px','30px','45px','auto','auto'],
         id: 'Leaf_03Copy',
         transform: [[],['-13']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
      },
      {
         rect: ['7px','106px','30px','45px','auto','auto'],
         id: 'Leaf_05Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['58px','96px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['120px','65px','30px','45px','auto','auto'],
         id: 'Leaf_07Copy',
         transform: [[],['-11']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
      },
      {
         rect: ['103px','23px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy8',
         transform: [[],['-14']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['88px','177px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy7',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['173px','232px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['73px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['32px','57px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','162px','30px','45px','auto','auto'],
         id: 'Leaf_11Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Branch_01}": [
            ["style", "top", '133px'],
            ["style", "left", '133px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_05}": [
            ["style", "top", '168px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_04}": [
            ["style", "top", '119px'],
            ["style", "left", '15px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_11Copy2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["motion", "location", '0px 162px']
         ],
         "${_Leaf_08Copy6}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '173px'],
            ["style", "top", '232px']
         ],
         "${_Branch_10Copy}": [
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '94px'],
            ["style", "top", '244px']
         ],
         "${_Leaf_05}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '22px 106px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_12}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '166px 119px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_01Copy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-27deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '125px'],
            ["style", "top", '171px']
         ],
         "${_Leaf_03Copy}": [
            ["style", "top", '130px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-13deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '88px']
         ],
         "${_Leaf_10Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '32px'],
            ["style", "top", '57px']
         ],
         "${_Leaf_05Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '7px'],
            ["style", "top", '106px']
         ],
         "${_Leaf_01}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-27deg'],
            ["transform", "scaleX", '1'],
            ["motion", "location", '140px 171px']
         ],
         "${_Branch_08}": [
            ["style", "top", '128px'],
            ["style", "left", '98px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_09Copy}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '133px'],
            ["style", "top", '210px']
         ],
         "${_Branch_02}": [
            ["style", "top", '0px'],
            ["style", "left", '73px'],
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_06}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '73px 96px'],
            ["transform", "scaleX", '1']
         ],
         "${_Branch_07}": [
            ["style", "top", '80px'],
            ["style", "left", '98px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Shadow3}": [
            ["style", "top", '251px'],
            ["style", "left", '-30px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Leaf_10}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '47px 57px'],
            ["transform", "scaleX", '1']
         ],
         "${_Trunk}": [
            ["style", "left", '44px'],
            ["style", "top", '35px']
         ],
         "${_Leaf_03}": [
            ["transform", "scaleX", '1'],
            ["motion", "location", '103px 152.5px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_Leaf_07}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-11deg'],
            ["transform", "scaleX", '1'],
            ["motion", "location", '135px 65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '348px'],
            ["style", "width", '225px']
         ],
         "${_Leaf_02Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '26deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '55px'],
            ["style", "top", '157px']
         ],
         "${_Leaf_09}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '88px 0px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_02}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '26deg'],
            ["transform", "scaleX", '1'],
            ["motion", "location", '70px 157px']
         ],
         "${_Branch_03}": [
            ["style", "top", '35px'],
            ["style", "left", '82px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_06Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '127px 238px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_08Copy2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '188px 232px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_08Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '103px 177px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_09Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '73px'],
            ["style", "top", '0px']
         ],
         "${_Branch_09}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_10}": [
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '99.9955px 266.0011px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_04}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-19deg'],
            ["motion", "location", '196px 131px'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_11Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '-15px'],
            ["style", "top", '162px']
         ],
         "${_Leaf_06Copy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '58px'],
            ["style", "top", '96px']
         ],
         "${_Leaf_08Copy7}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '88px'],
            ["style", "top", '177px']
         ],
         "${_Leaf_06Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '112px'],
            ["style", "top", '238px']
         ],
         "${_Leaf_07Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-11deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '120px'],
            ["style", "top", '65px']
         ],
         "${_Leaf_08}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-14deg'],
            ["transform", "scaleX", '1'],
            ["motion", "location", '118px 23px']
         ],
         "${_Leaf_04Copy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-19deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '181px'],
            ["style", "top", '131px']
         ],
         "${_Leaf_12Copy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '151px'],
            ["style", "top", '119px']
         ],
         "${_Leaf_08Copy8}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-14deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '103px'],
            ["style", "top", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1170,
         autoPlay: false,
         timeline: [
            { id: "eid303", tween: [ "transform", "${_Leaf_06}", "rotateZ", '64deg', { fromValue: '0deg'}], position: 315, duration: 290, easing: "easeInOutQuad" },
            { id: "eid289", tween: [ "transform", "${_Leaf_11Copy2}", "rotateZ", '56deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid297", tween: [ "transform", "${_Leaf_08Copy}", "rotateZ", '-36deg', { fromValue: '0deg'}], position: 165, duration: 360, easing: "easeInOutQuad" },
            { id: "eid290", tween: [ "motion", "${_Leaf_10}", [[47,57,0,0],[-2.38,148.94,1.89,78.39,3.02,125.53],[57.48,213.98,40.65,77.27]]], position: 0, duration: 315, easing: "easeInQuad" },
            { id: "eid329", tween: [ "motion", "${_Leaf_10}", [[57.48,213.98,28.11,53.43],[118.4,229.14,123.75,117.39,44.81,42.5],[188,325,0,0]]], position: 315, duration: 254, easing: "easeOutQuad" },
            { id: "eid386", tween: [ "transform", "${_Leaf_06}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid153", tween: [ "transform", "${_Leaf_11Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid155", tween: [ "transform", "${_Leaf_06Copy5}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid150", tween: [ "transform", "${_Branch_09Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid374", tween: [ "transform", "${_Leaf_06Copy}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid316", tween: [ "motion", "${_Leaf_12}", [[166,119,0,0],[147.49,230.58,99.75,204.75]]], position: 389, duration: 168, easing: "easeInQuad" },
            { id: "eid318", tween: [ "motion", "${_Leaf_12}", [[147.49,230.58,99.75,204.75],[299,392,0,0]]], position: 556, duration: 168, easing: "easeOutQuad" },
            { id: "eid174", tween: [ "transform", "${_Leaf_12Copy4}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid394", tween: [ "transform", "${_Leaf_09}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid367", tween: [ "transform", "${_Leaf_05}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid294", tween: [ "motion", "${_Leaf_08Copy2}", [[188,232,0,0],[238,243.62,58.5,68.25]]], position: 250, duration: 199, easing: "easeInQuad" },
            { id: "eid327", tween: [ "motion", "${_Leaf_08Copy2}", [[238,243.62,26.1,30.45],[230.75,307.27,16.92,58.09,13.63,46.8],[266,323,0,0]]], position: 449, duration: 199, easing: "easeOutQuad" },
            { id: "eid302", tween: [ "motion", "${_Leaf_06}", [[73,96,0,0],[13.6,173.77,-16.02,54.59,-45.55,155.17],[34.83,250.33,-38.12,68.63,-28.06,50.51],[6.82,320.17,-73.16,59.01,-52.61,42.44],[-60.58,336.48,0,0]]], position: 315, duration: 290, easing: "easeInOutQuad" },
            { id: "eid167", tween: [ "transform", "${_Leaf_09Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid305", tween: [ "transform", "${_Leaf_05}", "rotateZ", '-32deg', { fromValue: '0deg'}], position: 417, duration: 383, easing: "easeInOutQuad" },
            { id: "eid373", tween: [ "transform", "${_Branch_10}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid295", tween: [ "transform", "${_Leaf_08Copy2}", "rotateZ", '44deg', { fromValue: '0deg'}], position: 250, duration: 397, easing: "easeInOutQuad" },
            { id: "eid308", tween: [ "motion", "${_Leaf_06Copy}", [[127,238,0,0],[112.14,300.01,51.75,115.5]]], position: 256, duration: 173, easing: "easeInQuad" },
            { id: "eid322", tween: [ "motion", "${_Leaf_06Copy}", [[112.14,300.01,21.43,47.82],[179.72,328.68,67.23,68.87,47.5,48.66],[196,392,0,0]]], position: 429, duration: 173, easing: "easeOutQuad" },
            { id: "eid156", tween: [ "transform", "${_Leaf_06Copy5}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid306", tween: [ "motion", "${_Leaf_03}", [[103,152.5,0,0],[72.54,253.76,32.65,75.38,56.76,131.03],[167.76,309.2,4.02,69.52]]], position: 95, duration: 161, easing: "easeInQuad" },
            { id: "eid323", tween: [ "motion", "${_Leaf_03}", [[167.76,309.2,11.01,190.35],[117.68,406.3,0,0]]], position: 256, duration: 161, easing: "easeOutQuad" },
            { id: "eid390", tween: [ "transform", "${_Leaf_02}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid398", tween: [ "transform", "${_Leaf_08Copy}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid385", tween: [ "transform", "${_Leaf_11Copy2}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid164", tween: [ "transform", "${_Leaf_10Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid381", tween: [ "transform", "${_Leaf_10}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid299", tween: [ "transform", "${_Leaf_08}", "rotateZ", '62deg', { fromValue: '-14deg'}], position: 165, duration: 468, easing: "easeInOutQuad" },
            { id: "eid378", tween: [ "transform", "${_Branch_09}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid171", tween: [ "transform", "${_Leaf_04Copy4}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "transform", "${_Branch_10Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid369", tween: [ "transform", "${_Leaf_03}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid371", tween: [ "transform", "${_Leaf_08}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid154", tween: [ "transform", "${_Leaf_11Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid389", tween: [ "transform", "${_Leaf_12}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "transform", "${_Leaf_10Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid170", tween: [ "transform", "${_Leaf_08Copy6}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid304", tween: [ "motion", "${_Leaf_05}", [[22,106,0,0],[23.07,201.28,-36.92,68.35,-69.76,129.14],[-56.82,255.13,-4.93,69.3]]], position: 417, duration: 191, easing: "easeInQuad" },
            { id: "eid324", tween: [ "motion", "${_Leaf_05}", [[-56.82,255.13,-6.1,85.69],[-84.33,330.46,51.59,80.44,38.59,60.17],[3,373,0,0]]], position: 609, duration: 191, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "motion", "${_Leaf_07}", [[135,65,0,0],[158.99,154.97,-1.27,56.38,-3.26,144.95],[120.98,211.03,30.24,60.04]]], position: 95, duration: 237, easing: "easeInQuad" },
            { id: "eid325", tween: [ "motion", "${_Leaf_07}", [[120.98,211.03,39.27,77.96],[203.37,256.62,135.65,115.66,77.51,66.09],[279,350.86,0,0]]], position: 332, duration: 237, easing: "easeOutQuad" },
            { id: "eid399", tween: [ "transform", "${_Leaf_08Copy}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid370", tween: [ "transform", "${_Leaf_08}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid388", tween: [ "transform", "${_Leaf_12}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "transform", "${_Leaf_10}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid376", tween: [ "transform", "${_Leaf_04}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid397", tween: [ "transform", "${_Leaf_01}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid293", tween: [ "transform", "${_Leaf_09}", "rotateZ", '-42deg', { fromValue: '0deg'}], position: 171, duration: 434, easing: "easeInOutQuad" },
            { id: "eid175", tween: [ "transform", "${_Leaf_01Copy4}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid314", tween: [ "motion", "${_Leaf_01}", [[140,171,0,0],[155.98,262.79,82.02,152.11]]], position: 171, duration: 177, easing: "easeInQuad" },
            { id: "eid319", tween: [ "motion", "${_Leaf_01}", [[155.98,262.79,82.02,152.11],[249.37,373.81,0,0]]], position: 348, duration: 177, easing: "easeOutQuad" },
            { id: "eid875", tween: [ "style", "${_Shadow3}", "left", '-30px', { fromValue: '-30px'}], position: 0, duration: 0 },
            { id: "eid182", tween: [ "transform", "${_Leaf_03Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid152", tween: [ "transform", "${_Leaf_02Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid312", tween: [ "motion", "${_Leaf_04}", [[196,131,0,0],[228.21,258.65,102.75,174.66]]], position: 315, duration: 159, easing: "easeInQuad" },
            { id: "eid320", tween: [ "motion", "${_Leaf_04}", [[228.21,258.65,102.75,174.66],[333,363.88,0,0]]], position: 474, duration: 159, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "motion", "${_Leaf_08}", [[118,23,0,0],[126.07,144.31,38.43,78.81,75.84,155.51],[203.5,199.15,15.04,100.16,13.46,89.6],[138.04,288.35,-32.72,114.4,-23.98,83.86],[168.55,359.63,0,0]]], position: 165, duration: 468, easing: "easeInOutQuad" },
            { id: "eid177", tween: [ "transform", "${_Leaf_07Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid395", tween: [ "transform", "${_Leaf_09}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid384", tween: [ "transform", "${_Leaf_11Copy2}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid151", tween: [ "transform", "${_Leaf_02Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid158", tween: [ "transform", "${_Leaf_06Copy4}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid172", tween: [ "transform", "${_Leaf_04Copy4}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "transform", "${_Leaf_12Copy4}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid149", tween: [ "transform", "${_Branch_09Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid393", tween: [ "transform", "${_Leaf_08Copy2}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid311", tween: [ "transform", "${_Leaf_02}", "rotateZ", '72deg', { fromValue: '26deg'}], position: 164, duration: 336, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "transform", "${_Leaf_08Copy2}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid309", tween: [ "transform", "${_Leaf_06Copy}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 256, duration: 345, easing: "easeInOutQuad" },
            { id: "eid165", tween: [ "transform", "${_Leaf_08Copy8}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid366", tween: [ "transform", "${_Leaf_05}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid181", tween: [ "transform", "${_Leaf_03Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid372", tween: [ "transform", "${_Branch_10}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid315", tween: [ "transform", "${_Leaf_01}", "rotateZ", '21deg', { fromValue: '-27deg'}], position: 171, duration: 354, easing: "easeInOutQuad" },
            { id: "eid379", tween: [ "transform", "${_Branch_09}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid176", tween: [ "transform", "${_Leaf_01Copy4}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid377", tween: [ "transform", "${_Leaf_04}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid160", tween: [ "transform", "${_Leaf_05Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid159", tween: [ "transform", "${_Leaf_05Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid874", tween: [ "style", "${_Shadow3}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "transform", "${_Leaf_07Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid301", tween: [ "transform", "${_Leaf_07}", "rotateZ", '-63deg', { fromValue: '-11deg'}], position: 95, duration: 474, easing: "easeInOutQuad" },
            { id: "eid157", tween: [ "transform", "${_Leaf_06Copy4}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid313", tween: [ "transform", "${_Leaf_04}", "rotateZ", '-52deg', { fromValue: '-19deg'}], position: 315, duration: 318, easing: "easeInOutQuad" },
            { id: "eid169", tween: [ "transform", "${_Leaf_08Copy6}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid296", tween: [ "motion", "${_Leaf_08Copy}", [[103,177,0,0],[48.46,214.09,-11.25,24.5,-37.71,82.13],[53.83,230.64,-7.21,28.06]]], position: 165, duration: 180, easing: "easeInQuad" },
            { id: "eid326", tween: [ "motion", "${_Leaf_08Copy}", [[53.83,230.64,-14.67,57.1],[15.61,291.98,-16.72,75.63,-12.67,57.32],[30,336,0,0]]], position: 345, duration: 180, easing: "easeOutQuad" },
            { id: "eid375", tween: [ "transform", "${_Leaf_06Copy}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid307", tween: [ "transform", "${_Leaf_03}", "rotateZ", '109deg', { fromValue: '-13deg'}], position: 95, duration: 322, easing: "easeInOutQuad" },
            { id: "eid292", tween: [ "motion", "${_Leaf_09}", [[88,0,0,0],[70.34,101.91,20.18,87.18,33.55,144.92],[125,179.38,-7.89,96.34]]], position: 171, duration: 218, easing: "easeInQuad" },
            { id: "eid328", tween: [ "motion", "${_Leaf_09}", [[125,179.38,-6.5,79.37],[55.08,238.3,-58.27,152.75,-26.11,68.45],[60,342,0,0]]], position: 389, duration: 218, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "transform", "${_Leaf_08Copy8}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid179", tween: [ "transform", "${_Leaf_08Copy7}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid387", tween: [ "transform", "${_Leaf_06}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid391", tween: [ "transform", "${_Leaf_02}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid161", tween: [ "transform", "${_Branch_10Copy}", "scaleX", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid368", tween: [ "transform", "${_Leaf_03}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid180", tween: [ "transform", "${_Leaf_08Copy7}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" },
            { id: "eid291", tween: [ "transform", "${_Leaf_10}", "rotateZ", '28deg', { fromValue: '0deg'}], position: 0, duration: 315, easing: "easeInQuad" },
            { id: "eid330", tween: [ "transform", "${_Leaf_10}", "rotateZ", '-52deg', { fromValue: '28deg'}], position: 315, duration: 254, easing: "easeOutQuad" },
            { id: "eid288", tween: [ "motion", "${_Leaf_11Copy2}", [[0,162,0,0],[40.82,248.23,-6.29,130.08]]], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid331", tween: [ "motion", "${_Leaf_11Copy2}", [[40.82,248.23,-2.94,60.75],[-7.19,284.78,-38.45,54.6,-33.69,47.84],[-8.39,335.44,0,0]]], position: 250, duration: 250, easing: "easeOutQuad" },
            { id: "eid383", tween: [ "transform", "${_Leaf_07}", "scaleY", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid317", tween: [ "transform", "${_Leaf_12}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 389, duration: 335, easing: "easeInOutQuad" },
            { id: "eid396", tween: [ "transform", "${_Leaf_01}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid310", tween: [ "motion", "${_Leaf_02}", [[70,157,0,0],[34.16,283.32,-125.84,160.93]]], position: 164, duration: 168, easing: "easeInQuad" },
            { id: "eid321", tween: [ "motion", "${_Leaf_02}", [[34.16,283.32,-125.84,160.93],[-97.79,371.58,0,0]]], position: 332, duration: 168, easing: "easeOutQuad" },
            { id: "eid382", tween: [ "transform", "${_Leaf_07}", "scaleX", '0', { fromValue: '1'}], position: 800, duration: 250, easing: "easeInOutQuad" },
            { id: "eid168", tween: [ "transform", "${_Leaf_09Copy}", "scaleY", '1', { fromValue: '0'}], position: 960, duration: 210, easing: "easeInOutQuad" }         ]
      }
   }
},
"Symbol_2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-30px','251px','280px','125px','auto','auto'],
      id: 'Shadow3Copy2',
      type: 'image',
      clip: ['rect(0px 279.9697265625px 125px 0px)'],
      fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
   },
   {
      id: 'Trunk',
      type: 'image',
      rect: ['44px','35px','89px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
   },
   {
      rect: ['73px','0px','16px','129px','auto','auto'],
      id: 'Branch_02',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
   },
   {
      rect: ['82px','35px','38px','45px','auto','auto'],
      id: 'Branch_03',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
   },
   {
      rect: ['15px','119px','93px','81px','auto','auto'],
      id: 'Branch_04',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
   },
   {
      rect: ['0px','168px','73px','11px','auto','auto'],
      id: 'Branch_05',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
   },
   {
      rect: ['98px','80px','43px','77px','auto','auto'],
      id: 'Branch_07',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
   },
   {
      rect: ['98px','128px','103','127','auto','auto'],
      id: 'GroupCopy2',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy3',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy3',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy2',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy2',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      }]
   },
   {
      rect: ['133px','210px','33px','41px','auto','auto'],
      id: 'Branch_09',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
   },
   {
      rect: ['94px','244px','105px','33px','auto','auto'],
      id: 'Branch_10',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
   },
   {
      rect: ['55px','157px','30px','45px','auto','auto'],
      id: 'Leaf_02',
      transform: [[],['26']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
   },
   {
      rect: ['112px','238px','30px','45px','auto','auto'],
      id: 'Leaf_06Copy3',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
   },
   {
      rect: ['88px','130px','30px','45px','auto','auto'],
      id: 'Leaf_03',
      transform: [[],['-13']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
   },
   {
      rect: ['7px','106px','30px','45px','auto','auto'],
      id: 'Leaf_05',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
   },
   {
      rect: ['58px','96px','30px','45px','auto','auto'],
      id: 'Leaf_06Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
   },
   {
      rect: ['120px','65px','30px','45px','auto','auto'],
      id: 'Leaf_07',
      transform: [[],['-11']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
   },
   {
      rect: ['103px','23px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy5',
      transform: [[],['-14']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      rect: ['88px','177px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy4',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      rect: ['173px','232px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy3',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      rect: ['73px','0px','30px','45px','auto','auto'],
      id: 'Leaf_09',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
   },
   {
      rect: ['32px','57px','30px','45px','auto','auto'],
      id: 'Leaf_10',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
   },
   {
      rect: ['-15px','162px','30px','45px','auto','auto'],
      id: 'Leaf_11',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Leaf_08Copy3}": [
            ["style", "top", '232px'],
            ["style", "left", '173px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_01Copy2}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Branch_05}": [
            ["style", "top", '168px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_04}": [
            ["style", "top", '119px'],
            ["style", "left", '15px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_02}": [
            ["style", "top", '157px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '55px'],
            ["transform", "rotateZ", '26deg']
         ],
         "${_Leaf_01Copy3}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_08Copy5}": [
            ["style", "top", '23px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '-14deg']
         ],
         "${_Branch_08Copy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_02}": [
            ["style", "top", '0px'],
            ["style", "left", '73px'],
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_01Copy2}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_03}": [
            ["style", "top", '130px'],
            ["style", "left", '88px'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_Leaf_11}": [
            ["style", "top", '162px'],
            ["style", "left", '-15px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Shadow3Copy2}": [
            ["style", "top", '251px'],
            ["style", "left", '-30px'],
            ["style", "clip", [0,279.9697265625,125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Leaf_04Copy2}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_10}": [
            ["style", "top", '57px'],
            ["style", "left", '32px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Trunk}": [
            ["style", "left", '44px'],
            ["style", "top", '35px']
         ],
         "${_Leaf_07}": [
            ["style", "top", '65px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '120px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '348px'],
            ["style", "width", '225px']
         ],
         "${_Leaf_12Copy3}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_09}": [
            ["style", "top", '0px'],
            ["style", "left", '73px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_01Copy3}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_03}": [
            ["style", "top", '35px'],
            ["style", "left", '82px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy4}": [
            ["style", "top", '177px'],
            ["style", "left", '88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_12Copy2}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_08Copy3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_06Copy2}": [
            ["style", "top", '96px'],
            ["style", "left", '58px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_06Copy3}": [
            ["style", "top", '238px'],
            ["style", "left", '112px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_GroupCopy2}": [
            ["style", "top", '128px'],
            ["style", "-webkit-transform-origin", [10.68,86.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '98px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_10}": [
            ["style", "top", '244px'],
            ["style", "left", '94px'],
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_09}": [
            ["style", "top", '210px'],
            ["style", "left", '133px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_05}": [
            ["style", "top", '106px'],
            ["style", "left", '7px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_04Copy3}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Branch_07}": [
            ["style", "top", '80px'],
            ["style", "left", '98px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
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
            { id: "eid188", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 0, duration: 138, easing: "easeInOutQuad" },
            { id: "eid189", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '-3deg', { fromValue: '30deg'}], position: 138, duration: 113, easing: "easeInOutQuad" },
            { id: "eid190", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '25deg', { fromValue: '-3deg'}], position: 251, duration: 118, easing: "easeInOutQuad" },
            { id: "eid191", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '2deg', { fromValue: '25deg'}], position: 369, duration: 124, easing: "easeInOutQuad" },
            { id: "eid192", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '19deg', { fromValue: '2deg'}], position: 493, duration: 140, easing: "easeInOutQuad" },
            { id: "eid193", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '-3deg', { fromValue: '19deg'}], position: 634, duration: 118, easing: "easeInOutQuad" },
            { id: "eid194", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '22deg', { fromValue: '-3deg'}], position: 752, duration: 140, easing: "easeInOutQuad" },
            { id: "eid195", tween: [ "transform", "${_GroupCopy2}", "rotateZ", '0deg', { fromValue: '22deg'}], position: 893, duration: 107, easing: "easeInOutQuad" },
            { id: "eid877", tween: [ "style", "${_Shadow3Copy2}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid876", tween: [ "style", "${_Shadow3Copy2}", "left", '-30px', { fromValue: '-30px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-15px','251px','280px','125px','auto','auto'],
      borderRadius: ['0px','0px','0px','0px'],
      id: 'Shadow3Copy3',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
   },
   {
      id: 'TrunkCopy',
      type: 'image',
      rect: ['59px','35px','89px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
   },
   {
      rect: ['88px','0px','16px','129px','auto','auto'],
      id: 'Branch_02Copy',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
   },
   {
      rect: ['97px','35px','38px','45px','auto','auto'],
      id: 'Branch_03Copy',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
   },
   {
      rect: ['30','119','93','81','auto','auto'],
      id: 'Group3',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['0px','0px','93px','81px','auto','auto'],
         id: 'Branch_04Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
      },
      {
         rect: ['-8px','-13px','30px','45px','auto','auto'],
         id: 'Leaf_05Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['-15px','49px','73px','11px','auto','auto'],
         id: 'Branch_05Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
      },
      {
         rect: ['-30px','43px','30px','45px','auto','auto'],
         id: 'Leaf_11Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      },
      {
         rect: ['40px','38px','30px','45px','auto','auto'],
         id: 'Leaf_02Copy2',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      }]
   },
   {
      rect: ['113px','80px','43px','77px','auto','auto'],
      id: 'Branch_07Copy',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
   },
   {
      rect: ['113px','128px','103','127','auto','auto'],
      id: 'GroupCopy3',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy6',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy6',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy5',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy5',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      }]
   },
   {
      rect: ['148px','210px','33px','41px','auto','auto'],
      id: 'Branch_09Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
   },
   {
      rect: ['109px','244px','105px','33px','auto','auto'],
      id: 'Branch_10Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
   },
   {
      rect: ['127px','238px','30px','45px','auto','auto'],
      id: 'Leaf_06Copy7',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
   },
   {
      rect: ['103px','130px','30px','45px','auto','auto'],
      id: 'Leaf_03Copy2',
      transform: [[],['-13']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
   },
   {
      rect: ['73px','96px','30px','45px','auto','auto'],
      id: 'Leaf_06Copy6',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
   },
   {
      rect: ['135px','65px','30px','45px','auto','auto'],
      id: 'Leaf_07Copy2',
      transform: [[],['-11']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
   },
   {
      rect: ['118px','23px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy11',
      transform: [[],['-14']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      rect: ['103px','177px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy10',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      rect: ['188px','232px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy9',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      rect: ['88px','0px','30px','45px','auto','auto'],
      id: 'Leaf_09Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
   },
   {
      rect: ['47px','57px','30px','45px','auto','auto'],
      id: 'Leaf_10Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Leaf_08Copy11}": [
            ["style", "top", '23px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '118px'],
            ["transform", "rotateZ", '-14deg']
         ],
         "${_Leaf_05Copy2}": [
            ["style", "top", '-13px'],
            ["style", "left", '-8px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_GroupCopy3}": [
            ["style", "top", '128px'],
            ["style", "-webkit-transform-origin", [10.68,86.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_10Copy2}": [
            ["style", "top", '57px'],
            ["style", "left", '47px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy10}": [
            ["style", "top", '177px'],
            ["style", "left", '103px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_01Copy4}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_09Copy2}": [
            ["style", "top", '210px'],
            ["style", "left", '148px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_01Copy6}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_07Copy2}": [
            ["style", "top", '65px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '135px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Leaf_04Copy6}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Branch_01Copy5}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_08Copy5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_12Copy5}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_10Copy2}": [
            ["style", "top", '244px'],
            ["style", "left", '109px'],
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Shadow3Copy3}": [
            ["style", "top", '251px'],
            ["style", "left", '-15px']
         ],
         "${_Leaf_01Copy5}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Branch_07Copy}": [
            ["style", "top", '80px'],
            ["style", "left", '113px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '348px'],
            ["style", "width", '240px']
         ],
         "${_Branch_05Copy}": [
            ["style", "top", '49px'],
            ["style", "left", '-15px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_02Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '88px'],
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_03Copy2}": [
            ["style", "top", '130px'],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_TrunkCopy}": [
            ["style", "left", '59px'],
            ["style", "top", '35px']
         ],
         "${_Branch_03Copy}": [
            ["style", "top", '35px'],
            ["style", "left", '97px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_06Copy6}": [
            ["style", "top", '96px'],
            ["style", "left", '73px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy9}": [
            ["style", "top", '232px'],
            ["style", "left", '188px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_06Copy7}": [
            ["style", "top", '238px'],
            ["style", "left", '127px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_04Copy5}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Group3}": [
            ["style", "-webkit-transform-origin", [93.55,91.36], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_04Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_02Copy2}": [
            ["style", "top", '38px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '40px'],
            ["transform", "rotateZ", '26deg']
         ],
         "${_Leaf_09Copy2}": [
            ["style", "top", '0px'],
            ["style", "left", '88px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_12Copy6}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_11Copy3}": [
            ["style", "top", '43px'],
            ["style", "left", '-30px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_08Copy4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
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
            { id: "eid879", tween: [ "style", "${_Shadow3Copy3}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid403", tween: [ "transform", "${_Group3}", "rotateZ", '-46deg', { fromValue: '0deg'}], position: 0, duration: 311, easing: "easeInOutQuad" },
            { id: "eid404", tween: [ "transform", "${_Group3}", "rotateZ", '-9deg', { fromValue: '-46deg'}], position: 311, duration: 118, easing: "easeInOutQuad" },
            { id: "eid405", tween: [ "transform", "${_Group3}", "rotateZ", '-43deg', { fromValue: '-9deg'}], position: 429, duration: 134, easing: "easeInOutQuad" },
            { id: "eid406", tween: [ "transform", "${_Group3}", "rotateZ", '3deg', { fromValue: '-43deg'}], position: 562, duration: 155, easing: "easeInOutQuad" },
            { id: "eid407", tween: [ "transform", "${_Group3}", "rotateZ", '-44deg', { fromValue: '3deg'}], position: 717, duration: 168, easing: "easeInOutQuad" },
            { id: "eid408", tween: [ "transform", "${_Group3}", "rotateZ", '0deg', { fromValue: '-44deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid878", tween: [ "style", "${_Shadow3Copy3}", "left", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_4": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Shadow3Copy4',
      type: 'image',
      rect: ['-15px','251px','280px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
   },
   {
      id: 'TrunkCopy2',
      type: 'image',
      rect: ['59px','35px','89px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
   },
   {
      rect: ['88px','0px','16px','129px','auto','auto'],
      id: 'Branch_02Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
   },
   {
      rect: ['97px','35px','38px','45px','auto','auto'],
      id: 'Branch_03Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
   },
   {
      rect: ['30px','119px','93','81','auto','auto'],
      id: 'Group3',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['0px','0px','93px','81px','auto','auto'],
         id: 'Branch_04Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
      },
      {
         rect: ['-8px','-13px','30px','45px','auto','auto'],
         id: 'Leaf_05Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['-15px','49px','73px','11px','auto','auto'],
         id: 'Branch_05Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
      },
      {
         rect: ['-30px','43px','30px','45px','auto','auto'],
         id: 'Leaf_11Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      },
      {
         rect: ['40px','38px','30px','45px','auto','auto'],
         id: 'Leaf_02Copy3',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      }]
   },
   {
      rect: ['113px','80px','43px','77px','auto','auto'],
      id: 'Branch_07Copy2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
   },
   {
      rect: ['113px','128px','103','127','auto','auto'],
      id: 'GroupCopy4',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy9',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy9',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy10',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy10',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy8',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy8',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy9',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy9',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy9',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy7',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy7',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy8',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy8',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy8',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['35px','5px','34px','81px','auto','auto'],
         id: 'Branch_01Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['0px','0px','103px','127px','auto','auto'],
         id: 'Branch_08Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy7',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['53px','-9px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['27px','43px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy7',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['83px','3px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy7',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      }]
   },
   {
      rect: ['148px','210px','33px','41px','auto','auto'],
      id: 'Branch_09Copy3',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
   },
   {
      rect: ['109px','244px','105px','33px','auto','auto'],
      id: 'Branch_10Copy3',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
   },
   {
      rect: ['127px','238px','30px','45px','auto','auto'],
      id: 'Leaf_06Copy9',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
   },
   {
      rect: ['103px','130px','30px','45px','auto','auto'],
      id: 'Leaf_03Copy3',
      transform: [[],['-13']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
   },
   {
      rect: ['73px','96px','30px','45px','auto','auto'],
      id: 'Leaf_06Copy8',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
   },
   {
      rect: ['135px','65px','30px','45px','auto','auto'],
      id: 'Leaf_07Copy3',
      transform: [[],['-11']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
   },
   {
      rect: ['118px','23px','30px','45px','auto','auto'],
      id: 'Leaf_08Copy14',
      transform: [[],['-14']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
   },
   {
      id: 'Group5',
      type: 'group',
      rect: ['103','177','30','45','auto','auto'],
      c: [
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy7',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy8',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy9',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy15',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      }]
   },
   {
      id: 'Group4',
      type: 'group',
      rect: ['188','232','30','45','auto','auto'],
      c: [
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      }]
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['87','0','31','46','auto','auto'],
      c: [
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['1px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy7',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      }]
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['47','57','30','45','auto','auto'],
      c: [
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','0px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy14',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "top", '119px'],
            ["style", "-webkit-transform-origin", [93.55,91.36], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [93.55,91.36],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '30px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy14}": [
            ["style", "top", '23px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '118px'],
            ["transform", "rotateZ", '-14deg']
         ],
         "${_Leaf_04Copy8}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_09Copy7}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy6}": [
            ["style", "top", '-9px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_10Copy10}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_01Copy10}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_06Copy8}": [
            ["style", "top", '96px'],
            ["style", "left", '73px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_09Copy4}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy7}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_08Copy8}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_01Copy7}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_10Copy3}": [
            ["style", "top", '244px'],
            ["style", "left", '109px'],
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_09Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_GroupCopy4}": [
            ["style", "top", '128px'],
            ["style", "-webkit-transform-origin", [10.68,86.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.68,86.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_10Copy13}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy4}": [
            ["style", "top", '-9px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_10Copy14}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_05Copy3}": [
            ["style", "top", '-13px'],
            ["style", "left", '-8px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_10Copy4}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08Copy7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy15}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy9}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08Copy6}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_09Copy3}": [
            ["style", "top", '210px'],
            ["style", "left", '148px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_02Copy2}": [
            ["style", "top", '0px'],
            ["style", "left", '88px'],
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_10Copy3}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy3}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_01Copy9}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_12Copy10}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_10Copy11}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_01Copy6}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy10}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy11}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_11Copy4}": [
            ["style", "top", '43px'],
            ["style", "left", '-30px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_05Copy2}": [
            ["style", "top", '49px'],
            ["style", "left", '-15px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_03Copy3}": [
            ["style", "top", '130px'],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_Leaf_06Copy9}": [
            ["style", "top", '238px'],
            ["style", "left", '127px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_01Copy9}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TrunkCopy2}": [
            ["style", "left", '59px'],
            ["style", "top", '35px']
         ],
         "${_Leaf_08Copy12}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_04Copy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_12Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08Copy8}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_09Copy3}": [
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_07Copy2}": [
            ["style", "top", '80px'],
            ["style", "left", '113px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_10Copy12}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy9}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_08Copy11}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08Copy9}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy7}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '348px'],
            ["style", "width", '240px']
         ],
         "${_Leaf_12Copy3}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_03Copy2}": [
            ["style", "top", '35px'],
            ["style", "left", '97px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy4}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy7}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy2}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_09Copy2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_09Copy}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy2}": [
            ["style", "top", '-9px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '53px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_09Copy6}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy10}": [
            ["style", "top", '3px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_12Copy9}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_07Copy3}": [
            ["style", "top", '65px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '135px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Branch_01Copy8}": [
            ["style", "top", '5px'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_08Copy13}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Leaf_02Copy3}": [
            ["style", "top", '38px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '40px'],
            ["transform", "rotateZ", '26deg']
         ],
         "${_Leaf_01Copy8}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_01Copy7}": [
            ["style", "top", '43px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Shadow3Copy4}": [
            ["style", "left", '-15px'],
            ["style", "top", '251px']
         ],
         "${_Leaf_12Copy8}": [
            ["style", "top", '-9px'],
            ["style", "left", '53px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
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
            { id: "eid1015", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1016", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1017", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 260, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1018", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '205deg', { fromValue: '157deg'}], position: 370, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1019", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '254deg', { fromValue: '205deg'}], position: 480, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1020", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '297deg', { fromValue: '254deg'}], position: 595, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1030", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '0deg', { fromValue: '297deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid928", tween: [ "transform", "${_Leaf_08Copy2}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid929", tween: [ "transform", "${_Leaf_08Copy2}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 120, easing: "easeInOutQuad" },
            { id: "eid930", tween: [ "transform", "${_Leaf_08Copy2}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 250, duration: 105, easing: "easeInOutQuad" },
            { id: "eid952", tween: [ "transform", "${_Leaf_08Copy2}", "rotateZ", '0deg', { fromValue: '157deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid981", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid982", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 125, easing: "easeInOutQuad" },
            { id: "eid983", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 255, duration: 105, easing: "easeInOutQuad" },
            { id: "eid984", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '205deg', { fromValue: '157deg'}], position: 360, duration: 110, easing: "easeInOutQuad" },
            { id: "eid985", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '254deg', { fromValue: '205deg'}], position: 470, duration: 120, easing: "easeInOutQuad" },
            { id: "eid986", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '297deg', { fromValue: '254deg'}], position: 590, duration: 110, easing: "easeInOutQuad" },
            { id: "eid995", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '0deg', { fromValue: '297deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1010", tween: [ "transform", "${_Leaf_12Copy6}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1011", tween: [ "transform", "${_Leaf_12Copy6}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1012", tween: [ "transform", "${_Leaf_12Copy6}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 260, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1013", tween: [ "transform", "${_Leaf_12Copy6}", "rotateZ", '205deg', { fromValue: '157deg'}], position: 370, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1014", tween: [ "transform", "${_Leaf_12Copy6}", "rotateZ", '254deg', { fromValue: '205deg'}], position: 480, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1027", tween: [ "transform", "${_Leaf_12Copy6}", "rotateZ", '0deg', { fromValue: '254deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1000", tween: [ "transform", "${_Leaf_12Copy2}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1031", tween: [ "transform", "${_Leaf_12Copy2}", "rotateZ", '0deg', { fromValue: '40deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid926", tween: [ "transform", "${_Leaf_08Copy}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid927", tween: [ "transform", "${_Leaf_08Copy}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 120, easing: "easeInOutQuad" },
            { id: "eid953", tween: [ "transform", "${_Leaf_08Copy}", "rotateZ", '0deg', { fromValue: '89deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1001", tween: [ "transform", "${_Leaf_12Copy3}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1002", tween: [ "transform", "${_Leaf_12Copy3}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1029", tween: [ "transform", "${_Leaf_12Copy3}", "rotateZ", '0deg', { fromValue: '89deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid892", tween: [ "transform", "${_Leaf_09Copy2}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 120, easing: "easeInOutQuad" },
            { id: "eid893", tween: [ "transform", "${_Leaf_09Copy2}", "rotateZ", '89deg', { fromValue: '39deg'}], position: 120, duration: 125, easing: "easeInOutQuad" },
            { id: "eid919", tween: [ "transform", "${_Leaf_09Copy2}", "rotateZ", '0deg', { fromValue: '89deg'}], position: 880, duration: 120, easing: "easeInOutQuad" },
            { id: "eid881", tween: [ "style", "${_Shadow3Copy4}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0 },
            { id: "eid967", tween: [ "transform", "${_Leaf_08Copy8}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid968", tween: [ "transform", "${_Leaf_08Copy8}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 125, easing: "easeInOutQuad" },
            { id: "eid996", tween: [ "transform", "${_Leaf_08Copy8}", "rotateZ", '0deg', { fromValue: '89deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid880", tween: [ "style", "${_Shadow3Copy4}", "left", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid969", tween: [ "transform", "${_Leaf_08Copy9}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid970", tween: [ "transform", "${_Leaf_08Copy9}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 125, easing: "easeInOutQuad" },
            { id: "eid971", tween: [ "transform", "${_Leaf_08Copy9}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 255, duration: 105, easing: "easeInOutQuad" },
            { id: "eid993", tween: [ "transform", "${_Leaf_08Copy9}", "rotateZ", '0deg', { fromValue: '157deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid972", tween: [ "transform", "${_Leaf_08Copy10}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid973", tween: [ "transform", "${_Leaf_08Copy10}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 125, easing: "easeInOutQuad" },
            { id: "eid974", tween: [ "transform", "${_Leaf_08Copy10}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 255, duration: 105, easing: "easeInOutQuad" },
            { id: "eid975", tween: [ "transform", "${_Leaf_08Copy10}", "rotateZ", '205deg', { fromValue: '157deg'}], position: 360, duration: 110, easing: "easeInOutQuad" },
            { id: "eid998", tween: [ "transform", "${_Leaf_08Copy10}", "rotateZ", '0deg', { fromValue: '205deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid891", tween: [ "transform", "${_Leaf_09Copy}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 120, easing: "easeInOutQuad" },
            { id: "eid923", tween: [ "transform", "${_Leaf_09Copy}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 880, duration: 120, easing: "easeInOutQuad" },
            { id: "eid925", tween: [ "transform", "${_Leaf_08}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid956", tween: [ "transform", "${_Leaf_08}", "rotateZ", '0deg', { fromValue: '40deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1006", tween: [ "transform", "${_Leaf_12Copy5}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1007", tween: [ "transform", "${_Leaf_12Copy5}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1008", tween: [ "transform", "${_Leaf_12Copy5}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 260, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1009", tween: [ "transform", "${_Leaf_12Copy5}", "rotateZ", '205deg', { fromValue: '157deg'}], position: 370, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1028", tween: [ "transform", "${_Leaf_12Copy5}", "rotateZ", '0deg', { fromValue: '205deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1003", tween: [ "transform", "${_Leaf_12Copy4}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1004", tween: [ "transform", "${_Leaf_12Copy4}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 130, easing: "easeInOutQuad" },
            { id: "eid1005", tween: [ "transform", "${_Leaf_12Copy4}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 260, duration: 110, easing: "easeInOutQuad" },
            { id: "eid1032", tween: [ "transform", "${_Leaf_12Copy4}", "rotateZ", '0deg', { fromValue: '157deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid418", tween: [ "transform", "${_Leaf_10Copy4}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 0, duration: 122, easing: "easeInOutQuad" },
            { id: "eid456", tween: [ "transform", "${_Leaf_10Copy4}", "rotateZ", '0deg', { fromValue: '-39deg'}], position: 878, duration: 122, easing: "easeInOutQuad" },
            { id: "eid966", tween: [ "transform", "${_Leaf_08Copy7}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid997", tween: [ "transform", "${_Leaf_08Copy7}", "rotateZ", '0deg', { fromValue: '40deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "transform", "${_Leaf_10Copy11}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 0, duration: 122, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "transform", "${_Leaf_10Copy11}", "rotateZ", '-89deg', { fromValue: '-39deg'}], position: 122, duration: 122, easing: "easeInOutQuad" },
            { id: "eid424", tween: [ "transform", "${_Leaf_10Copy11}", "rotateZ", '-155deg', { fromValue: '-89deg'}], position: 244, duration: 98, easing: "easeInOutQuad" },
            { id: "eid458", tween: [ "transform", "${_Leaf_10Copy11}", "rotateZ", '0deg', { fromValue: '-155deg'}], position: 878, duration: 122, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "transform", "${_Leaf_10Copy10}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 0, duration: 122, easing: "easeInOutQuad" },
            { id: "eid421", tween: [ "transform", "${_Leaf_10Copy10}", "rotateZ", '-89deg', { fromValue: '-39deg'}], position: 122, duration: 122, easing: "easeInOutQuad" },
            { id: "eid455", tween: [ "transform", "${_Leaf_10Copy10}", "rotateZ", '0deg', { fromValue: '-89deg'}], position: 878, duration: 122, easing: "easeInOutQuad" },
            { id: "eid901", tween: [ "transform", "${_Leaf_09Copy6}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 120, easing: "easeInOutQuad" },
            { id: "eid902", tween: [ "transform", "${_Leaf_09Copy6}", "rotateZ", '89deg', { fromValue: '39deg'}], position: 120, duration: 125, easing: "easeInOutQuad" },
            { id: "eid903", tween: [ "transform", "${_Leaf_09Copy6}", "rotateZ", '156deg', { fromValue: '89deg'}], position: 245, duration: 105, easing: "easeInOutQuad" },
            { id: "eid904", tween: [ "transform", "${_Leaf_09Copy6}", "rotateZ", '204deg', { fromValue: '156deg'}], position: 350, duration: 95, easing: "easeInOutQuad" },
            { id: "eid905", tween: [ "transform", "${_Leaf_09Copy6}", "rotateZ", '251deg', { fromValue: '204deg'}], position: 445, duration: 120, easing: "easeInOutQuad" },
            { id: "eid921", tween: [ "transform", "${_Leaf_09Copy6}", "rotateZ", '0deg', { fromValue: '251deg'}], position: 880, duration: 120, easing: "easeInOutQuad" },
            { id: "eid897", tween: [ "transform", "${_Leaf_09Copy5}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 120, easing: "easeInOutQuad" },
            { id: "eid898", tween: [ "transform", "${_Leaf_09Copy5}", "rotateZ", '89deg', { fromValue: '39deg'}], position: 120, duration: 125, easing: "easeInOutQuad" },
            { id: "eid899", tween: [ "transform", "${_Leaf_09Copy5}", "rotateZ", '156deg', { fromValue: '89deg'}], position: 245, duration: 105, easing: "easeInOutQuad" },
            { id: "eid900", tween: [ "transform", "${_Leaf_09Copy5}", "rotateZ", '204deg', { fromValue: '156deg'}], position: 350, duration: 95, easing: "easeInOutQuad" },
            { id: "eid922", tween: [ "transform", "${_Leaf_09Copy5}", "rotateZ", '0deg', { fromValue: '204deg'}], position: 880, duration: 120, easing: "easeInOutQuad" },
            { id: "eid940", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid941", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 120, easing: "easeInOutQuad" },
            { id: "eid942", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 250, duration: 105, easing: "easeInOutQuad" },
            { id: "eid943", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '204deg', { fromValue: '157deg'}], position: 355, duration: 100, easing: "easeInOutQuad" },
            { id: "eid944", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '253deg', { fromValue: '204deg'}], position: 455, duration: 125, easing: "easeInOutQuad" },
            { id: "eid945", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '297deg', { fromValue: '253deg'}], position: 580, duration: 105, easing: "easeInOutQuad" },
            { id: "eid955", tween: [ "transform", "${_Leaf_08Copy5}", "rotateZ", '0deg', { fromValue: '297deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid894", tween: [ "transform", "${_Leaf_09Copy4}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 120, easing: "easeInOutQuad" },
            { id: "eid895", tween: [ "transform", "${_Leaf_09Copy4}", "rotateZ", '89deg', { fromValue: '39deg'}], position: 120, duration: 125, easing: "easeInOutQuad" },
            { id: "eid896", tween: [ "transform", "${_Leaf_09Copy4}", "rotateZ", '156deg', { fromValue: '89deg'}], position: 245, duration: 105, easing: "easeInOutQuad" },
            { id: "eid920", tween: [ "transform", "${_Leaf_09Copy4}", "rotateZ", '0deg', { fromValue: '156deg'}], position: 880, duration: 120, easing: "easeInOutQuad" },
            { id: "eid976", tween: [ "transform", "${_Leaf_08Copy11}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid977", tween: [ "transform", "${_Leaf_08Copy11}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 125, easing: "easeInOutQuad" },
            { id: "eid978", tween: [ "transform", "${_Leaf_08Copy11}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 255, duration: 105, easing: "easeInOutQuad" },
            { id: "eid979", tween: [ "transform", "${_Leaf_08Copy11}", "rotateZ", '205deg', { fromValue: '157deg'}], position: 360, duration: 110, easing: "easeInOutQuad" },
            { id: "eid980", tween: [ "transform", "${_Leaf_08Copy11}", "rotateZ", '254deg', { fromValue: '205deg'}], position: 470, duration: 120, easing: "easeInOutQuad" },
            { id: "eid994", tween: [ "transform", "${_Leaf_08Copy11}", "rotateZ", '0deg', { fromValue: '254deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid935", tween: [ "transform", "${_Leaf_08Copy4}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid936", tween: [ "transform", "${_Leaf_08Copy4}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 120, easing: "easeInOutQuad" },
            { id: "eid937", tween: [ "transform", "${_Leaf_08Copy4}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 250, duration: 105, easing: "easeInOutQuad" },
            { id: "eid938", tween: [ "transform", "${_Leaf_08Copy4}", "rotateZ", '204deg', { fromValue: '157deg'}], position: 355, duration: 100, easing: "easeInOutQuad" },
            { id: "eid939", tween: [ "transform", "${_Leaf_08Copy4}", "rotateZ", '253deg', { fromValue: '204deg'}], position: 455, duration: 125, easing: "easeInOutQuad" },
            { id: "eid954", tween: [ "transform", "${_Leaf_08Copy4}", "rotateZ", '0deg', { fromValue: '253deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid931", tween: [ "transform", "${_Leaf_08Copy3}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 0, duration: 130, easing: "easeInOutQuad" },
            { id: "eid932", tween: [ "transform", "${_Leaf_08Copy3}", "rotateZ", '89deg', { fromValue: '40deg'}], position: 130, duration: 120, easing: "easeInOutQuad" },
            { id: "eid933", tween: [ "transform", "${_Leaf_08Copy3}", "rotateZ", '157deg', { fromValue: '89deg'}], position: 250, duration: 105, easing: "easeInOutQuad" },
            { id: "eid934", tween: [ "transform", "${_Leaf_08Copy3}", "rotateZ", '204deg', { fromValue: '157deg'}], position: 355, duration: 100, easing: "easeInOutQuad" },
            { id: "eid957", tween: [ "transform", "${_Leaf_08Copy3}", "rotateZ", '0deg', { fromValue: '204deg'}], position: 885, duration: 115, easing: "easeInOutQuad" },
            { id: "eid906", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 0, duration: 120, easing: "easeInOutQuad" },
            { id: "eid907", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '89deg', { fromValue: '39deg'}], position: 120, duration: 125, easing: "easeInOutQuad" },
            { id: "eid908", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '156deg', { fromValue: '89deg'}], position: 245, duration: 105, easing: "easeInOutQuad" },
            { id: "eid909", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '204deg', { fromValue: '156deg'}], position: 350, duration: 95, easing: "easeInOutQuad" },
            { id: "eid910", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '251deg', { fromValue: '204deg'}], position: 445, duration: 120, easing: "easeInOutQuad" },
            { id: "eid911", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '297deg', { fromValue: '251deg'}], position: 565, duration: 110, easing: "easeInOutQuad" },
            { id: "eid918", tween: [ "transform", "${_Leaf_09Copy7}", "rotateZ", '0deg', { fromValue: '297deg'}], position: 880, duration: 120, easing: "easeInOutQuad" },
            { id: "eid425", tween: [ "transform", "${_Leaf_10Copy12}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 0, duration: 122, easing: "easeInOutQuad" },
            { id: "eid426", tween: [ "transform", "${_Leaf_10Copy12}", "rotateZ", '-89deg', { fromValue: '-39deg'}], position: 122, duration: 122, easing: "easeInOutQuad" },
            { id: "eid427", tween: [ "transform", "${_Leaf_10Copy12}", "rotateZ", '-155deg', { fromValue: '-89deg'}], position: 244, duration: 98, easing: "easeInOutQuad" },
            { id: "eid428", tween: [ "transform", "${_Leaf_10Copy12}", "rotateZ", '-204deg', { fromValue: '-155deg'}], position: 341, duration: 102, easing: "easeInOutQuad" },
            { id: "eid454", tween: [ "transform", "${_Leaf_10Copy12}", "rotateZ", '0deg', { fromValue: '-204deg'}], position: 878, duration: 122, easing: "easeInOutQuad" },
            { id: "eid434", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 0, duration: 122, easing: "easeInOutQuad" },
            { id: "eid435", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '-89deg', { fromValue: '-39deg'}], position: 122, duration: 122, easing: "easeInOutQuad" },
            { id: "eid436", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '-155deg', { fromValue: '-89deg'}], position: 244, duration: 98, easing: "easeInOutQuad" },
            { id: "eid437", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '-204deg', { fromValue: '-155deg'}], position: 341, duration: 102, easing: "easeInOutQuad" },
            { id: "eid438", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '-251deg', { fromValue: '-204deg'}], position: 444, duration: 112, easing: "easeInOutQuad" },
            { id: "eid439", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '-297deg', { fromValue: '-251deg'}], position: 556, duration: 102, easing: "easeInOutQuad" },
            { id: "eid457", tween: [ "transform", "${_Leaf_10Copy14}", "rotateZ", '0deg', { fromValue: '-297deg'}], position: 878, duration: 122, easing: "easeInOutQuad" },
            { id: "eid429", tween: [ "transform", "${_Leaf_10Copy13}", "rotateZ", '-39deg', { fromValue: '0deg'}], position: 0, duration: 122, easing: "easeInOutQuad" },
            { id: "eid430", tween: [ "transform", "${_Leaf_10Copy13}", "rotateZ", '-89deg', { fromValue: '-39deg'}], position: 122, duration: 122, easing: "easeInOutQuad" },
            { id: "eid431", tween: [ "transform", "${_Leaf_10Copy13}", "rotateZ", '-155deg', { fromValue: '-89deg'}], position: 244, duration: 98, easing: "easeInOutQuad" },
            { id: "eid432", tween: [ "transform", "${_Leaf_10Copy13}", "rotateZ", '-204deg', { fromValue: '-155deg'}], position: 341, duration: 102, easing: "easeInOutQuad" },
            { id: "eid433", tween: [ "transform", "${_Leaf_10Copy13}", "rotateZ", '-251deg', { fromValue: '-204deg'}], position: 444, duration: 112, easing: "easeInOutQuad" },
            { id: "eid453", tween: [ "transform", "${_Leaf_10Copy13}", "rotateZ", '0deg', { fromValue: '-251deg'}], position: 878, duration: 122, easing: "easeInOutQuad" }         ]
      }
   }
},
"Symbol_5": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group4',
      type: 'group',
      rect: ['0px','0px','240','348','auto','auto'],
      c: [
      {
         rect: ['-32px','251px','280px','125px','auto','auto'],
         id: 'Shadow3Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
      },
      {
         id: 'TrunkCopy3',
         type: 'image',
         rect: ['59px','35px','89px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
      },
      {
         rect: ['88px','0px','16px','129px','auto','auto'],
         id: 'Branch_02Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
      },
      {
         rect: ['97px','35px','38px','45px','auto','auto'],
         id: 'Branch_03Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
      },
      {
         rect: ['30px','119px','93px','81px','auto','auto'],
         id: 'Branch_04Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
      },
      {
         rect: ['15px','168px','73px','11px','auto','auto'],
         id: 'Branch_05Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
      },
      {
         rect: ['113px','80px','43px','77px','auto','auto'],
         id: 'Branch_07Copy3',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
      },
      {
         rect: ['148px','133px','34px','81px','auto','auto'],
         id: 'Branch_01Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['113px','128px','103px','127px','auto','auto'],
         id: 'Branch_08Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['148px','133px','34px','81px','auto','auto'],
         id: 'Branch_01Copy10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['113px','128px','103px','127px','auto','auto'],
         id: 'Branch_08Copy10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['148px','210px','33px','41px','auto','auto'],
         id: 'Branch_09Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
      },
      {
         rect: ['109px','244px','105px','33px','auto','auto'],
         id: 'Branch_10Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
      },
      {
         rect: ['166px','119px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['140px','171px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy12',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['196px','131px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy12',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['166px','119px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['140px','171px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy11',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['196px','131px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy11',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['70px','157px','30px','45px','auto','auto'],
         id: 'Leaf_02Copy4',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      },
      {
         rect: ['127px','238px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['103px','130px','30px','45px','auto','auto'],
         id: 'Leaf_03Copy4',
         transform: [[],['-13']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
      },
      {
         rect: ['22px','106px','30px','45px','auto','auto'],
         id: 'Leaf_05Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['73px','96px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['135px','65px','30px','45px','auto','auto'],
         id: 'Leaf_07Copy4',
         transform: [[],['-11']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
      },
      {
         rect: ['118px','23px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy17',
         transform: [[],['-14']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['103px','177px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy16',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['188px','232px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy15',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['88px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['47px','57px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy15',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','162px','30px','45px','auto','auto'],
         id: 'Leaf_11Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      }]
   },
   {
      rect: ['0','0','240','348','auto','auto'],
      id: 'Group4Copy',
      type: 'group',
      transform: [[],[],[],['0','0']],
      c: [
      {
         id: 'Shadow3Copy6',
         type: 'image',
         rect: ['-15px','251px','280px','125px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
      },
      {
         id: 'TrunkCopy4',
         type: 'image',
         rect: ['59px','35px','89px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
      },
      {
         rect: ['88px','0px','16px','129px','auto','auto'],
         id: 'Branch_02Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
      },
      {
         rect: ['97px','35px','38px','45px','auto','auto'],
         id: 'Branch_03Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
      },
      {
         rect: ['30px','119px','93px','81px','auto','auto'],
         id: 'Branch_04Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
      },
      {
         rect: ['15px','168px','73px','11px','auto','auto'],
         id: 'Branch_05Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
      },
      {
         rect: ['113px','80px','43px','77px','auto','auto'],
         id: 'Branch_07Copy4',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
      },
      {
         rect: ['148px','133px','34px','81px','auto','auto'],
         id: 'Branch_01Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['113px','128px','103px','127px','auto','auto'],
         id: 'Branch_08Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['166px','119px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy14',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['140px','171px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy14',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['196px','131px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy14',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['148px','133px','34px','81px','auto','auto'],
         id: 'Branch_01Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['113px','128px','103px','127px','auto','auto'],
         id: 'Branch_08Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['166px','119px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['140px','171px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy13',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['196px','131px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy13',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['148px','210px','33px','41px','auto','auto'],
         id: 'Branch_09Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
      },
      {
         rect: ['109px','244px','105px','33px','auto','auto'],
         id: 'Branch_10Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
      },
      {
         rect: ['70px','157px','30px','45px','auto','auto'],
         id: 'Leaf_02Copy5',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      },
      {
         rect: ['127px','238px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['103px','130px','30px','45px','auto','auto'],
         id: 'Leaf_03Copy5',
         transform: [[],['-13']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
      },
      {
         rect: ['22px','106px','30px','45px','auto','auto'],
         id: 'Leaf_05Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['73px','96px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['135px','65px','30px','45px','auto','auto'],
         id: 'Leaf_07Copy5',
         transform: [[],['-11']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
      },
      {
         rect: ['118px','23px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy20',
         transform: [[],['-14']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['103px','177px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy19',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['188px','232px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy18',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['88px','0px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy5',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['47px','57px','30px','45px','auto','auto'],
         id: 'Leaf_10Copy16',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['0px','162px','30px','45px','auto','auto'],
         id: 'Leaf_11Copy6',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Branch_08Copy10}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_06Copy10}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '96px'],
            ["style", "left", '73px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_10Copy16}": [
            ["style", "top", '57px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '47px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_05Copy5}": [
            ["style", "top", '106px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '22px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy13}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '131px'],
            ["style", "left", '196px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_09Copy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '88px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_11Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '162px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy12}": [
            ["style", "top", '131px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '196px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_11Copy6}": [
            ["style", "top", '162px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08Copy11}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_01Copy12}": [
            ["style", "top", '171px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '140px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Group4}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_Leaf_04Copy14}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '131px'],
            ["style", "left", '196px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Leaf_12Copy12}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '119px'],
            ["style", "left", '166px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy19}": [
            ["style", "top", '177px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy18}": [
            ["style", "top", '232px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '188px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_09Copy5}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '88px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_06Copy11}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '238px'],
            ["style", "left", '127px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_TrunkCopy4}": [
            ["style", "top", '35px'],
            ["style", "left", '59px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_01Copy10}": [
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '133px'],
            ["style", "left", '148px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy13}": [
            ["style", "top", '119px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '166px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy11}": [
            ["style", "top", '131px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '196px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Branch_02Copy3}": [
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '88px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy14}": [
            ["style", "top", '119px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '166px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group4Copy}": [
            ["transform", "scaleX", '0'],
            ["transform", "scaleY", '0'],
            ["style", "-webkit-transform-origin", [52.5,98.28], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [52.5,98.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [52.5,98.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [52.5,98.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [52.5,98.28],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Branch_10Copy5}": [
            ["style", "top", '244px'],
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '109px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_02Copy4}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '88px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_05Copy4}": [
            ["style", "top", '168px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_09Copy5}": [
            ["style", "top", '210px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '148px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_07Copy4}": [
            ["style", "top", '65px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '135px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Leaf_08Copy17}": [
            ["style", "top", '23px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '118px'],
            ["transform", "rotateZ", '-14deg']
         ],
         "${_Branch_07Copy4}": [
            ["style", "top", '80px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_03Copy4}": [
            ["style", "top", '35px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '97px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy20}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '23px'],
            ["style", "left", '118px'],
            ["transform", "rotateZ", '-14deg']
         ],
         "${_Leaf_08Copy16}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '177px'],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_06Copy12}": [
            ["style", "top", '96px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '73px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_04Copy4}": [
            ["style", "top", '119px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '30px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_TrunkCopy3}": [
            ["style", "-webkit-transform-origin", [71.91,95.85], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [71.91,95.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [71.91,95.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [71.91,95.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [71.91,95.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '35px'],
            ["style", "left", '59px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_07Copy3}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '80px'],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy11}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '119px'],
            ["style", "left", '166px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_02Copy4}": [
            ["style", "top", '157px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '70px'],
            ["transform", "rotateZ", '26deg']
         ],
         "${_Branch_09Copy4}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '210px'],
            ["style", "left", '148px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_10Copy4}": [
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '244px'],
            ["style", "left", '109px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shadow3Copy5}": [
            ["style", "-webkit-transform-origin", [55.6,73.92], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [55.6,73.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [55.6,73.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [55.6,73.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [55.6,73.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-15px'],
            ["style", "top", '251px']
         ],
         "${symbolSelector}": [
            ["style", "height", '348px'],
            ["style", "width", '240px']
         ],
         "${_Branch_01Copy11}": [
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '133px'],
            ["style", "left", '148px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_04Copy3}": [
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '119px'],
            ["style", "left", '30px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_01Copy11}": [
            ["style", "top", '171px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '140px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Branch_08Copy13}": [
            ["style", "top", '128px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '113px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_06Copy13}": [
            ["style", "top", '238px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '127px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shadow3Copy6}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '-15px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '251px']
         ],
         "${_Leaf_01Copy13}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '171px'],
            ["style", "left", '140px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_05Copy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '106px'],
            ["style", "left", '22px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_01Copy12}": [
            ["style", "top", '133px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '148px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_01Copy14}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '171px'],
            ["style", "left", '140px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Leaf_10Copy15}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '57px'],
            ["style", "left", '47px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_03Copy4}": [
            ["style", "top", '130px'],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_Leaf_03Copy5}": [
            ["style", "top", '130px'],
            ["style", "left", '103px'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_Leaf_07Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '65px'],
            ["style", "left", '135px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Leaf_02Copy5}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '157px'],
            ["style", "left", '70px'],
            ["transform", "rotateZ", '26deg']
         ],
         "${_Branch_01Copy13}": [
            ["style", "top", '133px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '148px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_05Copy3}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '168px'],
            ["style", "left", '15px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy15}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '232px'],
            ["style", "left", '188px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_03Copy3}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '35px'],
            ["style", "left", '97px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08Copy12}": [
            ["style", "top", '128px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '113px'],
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
            { id: "eid659", tween: [ "style", "${_Leaf_08Copy17}", "left", '78px', { fromValue: '118px'}], position: 80, duration: 326, easing: "easeInOutQuad" },
            { id: "eid887", tween: [ "transform", "${_Shadow3Copy5}", "scaleX", '0.94', { fromValue: '1'}], position: 215, duration: 320, easing: "easeInOutQuad" },
            { id: "eid720", tween: [ "transform", "${_Group4}", "scaleX", '0', { fromValue: '1'}], position: 761, duration: 109, easing: "easeInOutQuad" },
            { id: "eid705", tween: [ "style", "${_Branch_05Copy3}", "left", '0px', { fromValue: '15px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid704", tween: [ "style", "${_Branch_07Copy3}", "left", '134px', { fromValue: '113px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid700", tween: [ "style", "${_Branch_01Copy11}", "left", '165px', { fromValue: '148px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid707", tween: [ "transform", "${_Branch_04Copy3}", "rotateZ", '-29deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid680", tween: [ "style", "${_Leaf_12Copy12}", "top", '332px', { fromValue: '119px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid665", tween: [ "style", "${_Leaf_05Copy4}", "top", '349px', { fromValue: '106px'}], position: 105, duration: 326, easing: "easeInOutQuad" },
            { id: "eid888", tween: [ "transform", "${_Shadow3Copy5}", "scaleY", '0.25', { fromValue: '1'}], position: 215, duration: 320, easing: "easeInOutQuad" },
            { id: "eid1051", tween: [ "transform", "${_Leaf_12Copy12}", "rotateZ", '-55deg', { fromValue: '0deg'}], position: 0, duration: 315, easing: "easeInOutQuad" },
            { id: "eid667", tween: [ "style", "${_Leaf_03Copy4}", "left", '154px', { fromValue: '103px'}], position: 50, duration: 326, easing: "easeInOutQuad" },
            { id: "eid679", tween: [ "style", "${_Leaf_12Copy12}", "left", '293px', { fromValue: '166px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid699", tween: [ "transform", "${_Branch_01Copy11}", "rotateZ", '62deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid676", tween: [ "style", "${_Leaf_01Copy11}", "top", '330px', { fromValue: '171px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid684", tween: [ "style", "${_Leaf_04Copy12}", "top", '348px', { fromValue: '131px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid671", tween: [ "style", "${_Leaf_02Copy4}", "left", '-78px', { fromValue: '70px'}], position: 35, duration: 326, easing: "easeInOutQuad" },
            { id: "eid692", tween: [ "style", "${_Branch_08Copy10}", "top", '221px', { fromValue: '128px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid708", tween: [ "style", "${_Branch_04Copy3}", "top", '257px', { fromValue: '119px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid681", tween: [ "style", "${_Leaf_01Copy12}", "left", '306px', { fromValue: '140px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1065", tween: [ "transform", "${_Leaf_08Copy15}", "rotateZ", '55deg', { fromValue: '0deg'}], position: 300, duration: 315, easing: "easeInOutQuad" },
            { id: "eid694", tween: [ "style", "${_Branch_01Copy10}", "left", '152px', { fromValue: '148px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid666", tween: [ "style", "${_Leaf_05Copy4}", "left", '-65px', { fromValue: '22px'}], position: 105, duration: 326, easing: "easeInOutQuad" },
            { id: "eid703", tween: [ "style", "${_Branch_07Copy3}", "top", '264px', { fromValue: '80px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid712", tween: [ "style", "${_Branch_03Copy3}", "top", '291px', { fromValue: '35px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid669", tween: [ "style", "${_Leaf_06Copy11}", "left", '197px', { fromValue: '127px'}], position: 95, duration: 326, easing: "easeInOutQuad" },
            { id: "eid717", tween: [ "transform", "${_TrunkCopy3}", "rotateZ", '-85deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid651", tween: [ "style", "${_Leaf_10Copy15}", "left", '-15px', { fromValue: '47px'}], position: 195, duration: 326, easing: "easeInOutQuad" },
            { id: "eid889", tween: [ "style", "${_Shadow3Copy5}", "left", '-14px', { fromValue: '-15px'}], position: 0, duration: 755, easing: "easeInOutQuad" },
            { id: "eid678", tween: [ "style", "${_Leaf_12Copy11}", "top", '337px', { fromValue: '119px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid693", tween: [ "transform", "${_Branch_01Copy10}", "rotateZ", '63deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid715", tween: [ "style", "${_Branch_02Copy3}", "top", '218px', { fromValue: '0px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid697", tween: [ "style", "${_Branch_08Copy11}", "top", '219px', { fromValue: '128px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1052", tween: [ "transform", "${_Leaf_01Copy12}", "rotateZ", '-75deg', { fromValue: '-27deg'}], position: 0, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1064", tween: [ "transform", "${_Leaf_08Copy16}", "rotateZ", '-54deg', { fromValue: '0deg'}], position: 40, duration: 315, easing: "easeInOutQuad" },
            { id: "eid702", tween: [ "transform", "${_Branch_07Copy3}", "rotateZ", '51deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid690", tween: [ "transform", "${_Branch_08Copy10}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1054", tween: [ "transform", "${_Leaf_12Copy11}", "rotateZ", '-66deg', { fromValue: '0deg'}], position: 0, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1055", tween: [ "transform", "${_Leaf_01Copy11}", "rotateZ", '-63deg', { fromValue: '-27deg'}], position: 0, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1056", tween: [ "transform", "${_Leaf_04Copy11}", "rotateZ", '-59deg', { fromValue: '-19deg'}], position: 70, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1057", tween: [ "transform", "${_Leaf_02Copy4}", "rotateZ", '58deg', { fromValue: '26deg'}], position: 35, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1058", tween: [ "transform", "${_Leaf_06Copy11}", "rotateZ", '-52deg', { fromValue: '0deg'}], position: 95, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1059", tween: [ "transform", "${_Leaf_03Copy4}", "rotateZ", '-59deg', { fromValue: '-13deg'}], position: 50, duration: 315, easing: "easeInOutQuad" },
            { id: "eid682", tween: [ "style", "${_Leaf_01Copy12}", "top", '340px', { fromValue: '171px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1060", tween: [ "transform", "${_Leaf_05Copy4}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 105, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1061", tween: [ "transform", "${_Leaf_06Copy10}", "rotateZ", '-48deg', { fromValue: '0deg'}], position: 80, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1062", tween: [ "transform", "${_Leaf_07Copy4}", "rotateZ", '48deg', { fromValue: '-11deg'}], position: 50, duration: 315, easing: "easeInOutQuad" },
            { id: "eid1063", tween: [ "transform", "${_Leaf_08Copy17}", "rotateZ", '-44deg', { fromValue: '-14deg'}], position: 80, duration: 315, easing: "easeInOutQuad" },
            { id: "eid660", tween: [ "style", "${_Leaf_08Copy17}", "top", '343px', { fromValue: '23px'}], position: 80, duration: 326, easing: "easeInOutQuad" },
            { id: "eid655", tween: [ "style", "${_Leaf_08Copy15}", "top", '345px', { fromValue: '232px'}], position: 300, duration: 326, easing: "easeInOutQuad" },
            { id: "eid674", tween: [ "style", "${_Leaf_04Copy11}", "top", '344px', { fromValue: '131px'}], position: 70, duration: 326, easing: "easeInOutQuad" },
            { id: "eid672", tween: [ "style", "${_Leaf_02Copy4}", "top", '340px', { fromValue: '157px'}], position: 35, duration: 326, easing: "easeInOutQuad" },
            { id: "eid724", tween: [ "transform", "${_Group4Copy}", "scaleX", '1', { fromValue: '0'}], position: 870, duration: 130, easing: "easeInOutQuad" },
            { id: "eid691", tween: [ "style", "${_Branch_08Copy10}", "left", '131px', { fromValue: '113px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid725", tween: [ "transform", "${_Group4Copy}", "scaleY", '1', { fromValue: '0'}], position: 870, duration: 130, easing: "easeInOutQuad" },
            { id: "eid657", tween: [ "style", "${_Leaf_08Copy16}", "left", '46px', { fromValue: '103px'}], position: 40, duration: 326, easing: "easeInOutQuad" },
            { id: "eid883", tween: [ "transform", "${_Shadow3Copy6}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid689", tween: [ "style", "${_Branch_09Copy4}", "top", '306px', { fromValue: '210px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid663", tween: [ "style", "${_Leaf_06Copy10}", "left", '127px', { fromValue: '73px'}], position: 80, duration: 326, easing: "easeInOutQuad" },
            { id: "eid662", tween: [ "style", "${_Leaf_07Copy4}", "left", '116px', { fromValue: '135px'}], position: 50, duration: 326, easing: "easeInOutQuad" },
            { id: "eid695", tween: [ "style", "${_Branch_01Copy10}", "top", '264px', { fromValue: '133px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid653", tween: [ "style", "${_Leaf_09Copy4}", "left", '15px', { fromValue: '88px'}], position: 120, duration: 326, easing: "easeInOutQuad" },
            { id: "eid706", tween: [ "style", "${_Branch_05Copy3}", "top", '339px', { fromValue: '168px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid683", tween: [ "style", "${_Leaf_04Copy12}", "left", '-119px', { fromValue: '196px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid884", tween: [ "transform", "${_Shadow3Copy6}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid698", tween: [ "style", "${_Branch_08Copy11}", "left", '123px', { fromValue: '113px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid686", tween: [ "style", "${_Branch_10Copy4}", "top", '325px', { fromValue: '244px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid649", tween: [ "style", "${_Leaf_11Copy5}", "top", '329px', { fromValue: '162px'}], position: 125, duration: 326, easing: "easeInOutQuad" },
            { id: "eid687", tween: [ "transform", "${_Branch_09Copy4}", "rotateZ", '55deg', { fromValue: '0deg'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid713", tween: [ "transform", "${_Branch_02Copy3}", "rotateZ", '-95deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid711", tween: [ "style", "${_Branch_03Copy3}", "left", '120px', { fromValue: '97px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid709", tween: [ "style", "${_Branch_04Copy3}", "left", '28px', { fromValue: '30px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid882", tween: [ "style", "${_Shadow3Copy5}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid664", tween: [ "style", "${_Leaf_06Copy10}", "top", '335px', { fromValue: '96px'}], position: 80, duration: 326, easing: "easeInOutQuad" },
            { id: "eid714", tween: [ "style", "${_Branch_02Copy3}", "left", '89px', { fromValue: '88px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid654", tween: [ "style", "${_Leaf_09Copy4}", "top", '359px', { fromValue: '0px'}], position: 120, duration: 326, easing: "easeInOutQuad" },
            { id: "eid673", tween: [ "style", "${_Leaf_04Copy11}", "left", '195px', { fromValue: '196px'}], position: 70, duration: 326, easing: "easeInOutQuad" },
            { id: "eid721", tween: [ "transform", "${_Group4}", "scaleY", '0', { fromValue: '1'}], position: 761, duration: 109, easing: "easeInOutQuad" },
            { id: "eid670", tween: [ "style", "${_Leaf_06Copy11}", "top", '352px', { fromValue: '238px'}], position: 95, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1068", tween: [ "transform", "${_Leaf_11Copy5}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 125, duration: 315, easing: "easeInOutQuad" },
            { id: "eid652", tween: [ "style", "${_Leaf_10Copy15}", "top", '339px', { fromValue: '57px'}], position: 195, duration: 326, easing: "easeInOutQuad" },
            { id: "eid710", tween: [ "transform", "${_Branch_03Copy3}", "rotateZ", '54deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid650", tween: [ "style", "${_Leaf_11Copy5}", "left", '-33px', { fromValue: '0px'}], position: 125, duration: 326, easing: "easeInOutQuad" },
            { id: "eid656", tween: [ "style", "${_Leaf_08Copy15}", "left", '63px', { fromValue: '188px'}], position: 300, duration: 326, easing: "easeInOutQuad" },
            { id: "eid677", tween: [ "style", "${_Leaf_12Copy11}", "left", '242px', { fromValue: '166px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid675", tween: [ "style", "${_Leaf_01Copy11}", "left", '248px', { fromValue: '140px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid685", tween: [ "style", "${_Branch_10Copy4}", "left", '169px', { fromValue: '109px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid688", tween: [ "style", "${_Branch_09Copy4}", "left", '169px', { fromValue: '148px'}], position: 0, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1070", tween: [ "transform", "${_Leaf_09Copy4}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 120, duration: 325, easing: "easeInOutQuad" },
            { id: "eid668", tween: [ "style", "${_Leaf_03Copy4}", "top", '355px', { fromValue: '130px'}], position: 50, duration: 326, easing: "easeInOutQuad" },
            { id: "eid701", tween: [ "style", "${_Branch_01Copy11}", "top", '264px', { fromValue: '133px'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1053", tween: [ "transform", "${_Leaf_04Copy12}", "rotateZ", '55deg', { fromValue: '-19deg'}], position: 0, duration: 315, easing: "easeInOutQuad" },
            { id: "eid696", tween: [ "transform", "${_Branch_08Copy11}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 217, duration: 326, easing: "easeInOutQuad" },
            { id: "eid1069", tween: [ "transform", "${_Leaf_10Copy15}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 195, duration: 320, easing: "easeInOutQuad" },
            { id: "eid658", tween: [ "style", "${_Leaf_08Copy16}", "top", '355px', { fromValue: '177px'}], position: 40, duration: 326, easing: "easeInOutQuad" },
            { id: "eid661", tween: [ "style", "${_Leaf_07Copy4}", "top", '346px', { fromValue: '65px'}], position: 50, duration: 326, easing: "easeInOutQuad" }         ]
      }
   }
},
"Symbol_6": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','251px','280px','125px','auto','auto'],
      id: 'Shadow3',
      type: 'image',
      clip: ['rect(0px 279.9697265625px 125px 0px)'],
      fill: ['rgba(0,0,0,0)','images/Shadow.png','0px','0px']
   },
   {
      id: 'Group6',
      type: 'group',
      rect: ['10','-80','236','413','auto','auto'],
      c: [
      {
         id: 'Trunk',
         type: 'image',
         rect: ['64px','115px','89px','313px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Trunk.svg','0px','0px']
      },
      {
         rect: ['93px','80px','16px','129px','auto','auto'],
         id: 'Branch_02',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_02.svg','0px','0px']
      },
      {
         rect: ['102px','115px','38px','45px','auto','auto'],
         id: 'Branch_03',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_03.svg','0px','0px']
      },
      {
         rect: ['35px','199px','93px','81px','auto','auto'],
         id: 'Branch_04',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_04.svg','0px','0px']
      },
      {
         rect: ['20px','248px','73px','11px','auto','auto'],
         id: 'Branch_05',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_05.svg','0px','0px']
      },
      {
         rect: ['118px','160px','43px','77px','auto','auto'],
         id: 'Branch_07',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_07.svg','0px','0px']
      },
      {
         rect: ['171px','199px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy13',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['145px','251px','30px','45px','auto','auto'],
         id: 'Leaf_01Copy',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['201px','211px','30px','45px','auto','auto'],
         id: 'Leaf_04Copy',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['153px','213px','34px','81px','auto','auto'],
         id: 'Branch_01',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_01.svg','0px','0px']
      },
      {
         rect: ['118px','208px','103px','127px','auto','auto'],
         id: 'Branch_08',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_08.svg','0px','0px']
      },
      {
         rect: ['171px','199px','30px','45px','auto','auto'],
         id: 'Leaf_12Copy12',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_12.svg','0px','0px']
      },
      {
         rect: ['145px','251px','30px','45px','auto','auto'],
         id: 'Leaf_01',
         transform: [[],['-27']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_01.svg','0px','0px']
      },
      {
         rect: ['201px','211px','30px','45px','auto','auto'],
         id: 'Leaf_04',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_04.svg','0px','0px']
      },
      {
         rect: ['153px','290px','33px','41px','auto','auto'],
         id: 'Branch_09',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_09.svg','0px','0px']
      },
      {
         rect: ['114px','324px','105px','33px','auto','auto'],
         id: 'Branch_10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Branch_10.svg','0px','0px']
      },
      {
         rect: ['75px','237px','30px','45px','auto','auto'],
         id: 'Leaf_02',
         transform: [[],['26']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_02.svg','0px','0px']
      },
      {
         rect: ['132px','318px','30px','45px','auto','auto'],
         id: 'Leaf_06Copy',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['108px','210px','30px','45px','auto','auto'],
         id: 'Leaf_03',
         transform: [[],['-13']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_03.svg','0px','0px']
      },
      {
         rect: ['27px','186px','30px','45px','auto','auto'],
         id: 'Leaf_05',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_05.svg','0px','0px']
      },
      {
         rect: ['78px','176px','30px','45px','auto','auto'],
         id: 'Leaf_06',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_06.svg','0px','0px']
      },
      {
         rect: ['140px','145px','30px','45px','auto','auto'],
         id: 'Leaf_07',
         transform: [[],['-11']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_07.svg','0px','0px']
      },
      {
         rect: ['123px','103px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy18',
         transform: [[],['-14']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['108px','257px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy17',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['193px','312px','30px','45px','auto','auto'],
         id: 'Leaf_08Copy16',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_08.svg','0px','0px']
      },
      {
         rect: ['93px','80px','30px','45px','auto','auto'],
         id: 'Leaf_09Copy8',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_09.svg','0px','0px']
      },
      {
         rect: ['52px','137px','30px','45px','auto','auto'],
         id: 'Leaf_10',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_10.svg','0px','0px']
      },
      {
         rect: ['5px','242px','30px','45px','auto','auto'],
         id: 'Leaf_11',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Leaf_11.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Branch_01}": [
            ["style", "top", '213px'],
            ["style", "-webkit-transform-origin", [14.71,91.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.71,91.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '153px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_05}": [
            ["style", "top", '248px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '20px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_04}": [
            ["style", "top", '199px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '35px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04}": [
            ["style", "top", '211px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '201px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Group6}": [
            ["style", "top", '-80px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '10px']
         ],
         "${_Leaf_08Copy17}": [
            ["style", "top", '257px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '108px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_05}": [
            ["style", "top", '186px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_01}": [
            ["style", "top", '251px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '145px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Branch_02}": [
            ["style", "top", '80px'],
            ["style", "-webkit-transform-origin", [31.25,93.8], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.25,93.8],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '93px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_06}": [
            ["style", "top", '176px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '78px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy12}": [
            ["style", "top", '199px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '171px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_07}": [
            ["style", "top", '160px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '118px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_11}": [
            ["style", "top", '242px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy18}": [
            ["style", "top", '103px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '123px'],
            ["transform", "rotateZ", '-14deg']
         ],
         "${_Shadow3}": [
            ["style", "top", '251px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "clip", [0,279.9697265625,125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Leaf_10}": [
            ["style", "top", '137px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '52px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Trunk}": [
            ["style", "top", '115px'],
            ["style", "left", '64px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_07}": [
            ["style", "top", '145px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '140px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '376px'],
            ["style", "width", '280px']
         ],
         "${_Leaf_01Copy}": [
            ["style", "top", '251px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '145px'],
            ["transform", "rotateZ", '-27deg']
         ],
         "${_Branch_03}": [
            ["style", "top", '115px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '102px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_09}": [
            ["style", "top", '290px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '153px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_12Copy13}": [
            ["style", "top", '199px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '171px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_09Copy8}": [
            ["style", "top", '80px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '93px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_08Copy16}": [
            ["style", "top", '312px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '193px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_04Copy}": [
            ["style", "top", '211px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '201px'],
            ["transform", "rotateZ", '-19deg']
         ],
         "${_Branch_10}": [
            ["style", "top", '324px'],
            ["style", "-webkit-transform-origin", [5.71,66.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5.71,66.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '114px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Leaf_02}": [
            ["style", "top", '237px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '75px'],
            ["transform", "rotateZ", '26deg']
         ],
         "${_Leaf_03}": [
            ["style", "top", '210px'],
            ["style", "left", '108px'],
            ["transform", "rotateZ", '-13deg']
         ],
         "${_Leaf_06Copy}": [
            ["style", "top", '318px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '132px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Branch_08}": [
            ["style", "top", '208px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '118px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid1081", tween: [ "style", "${_Leaf_08Copy17}", "left", '108px', { fromValue: '108px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1174", tween: [ "style", "${_Leaf_08Copy17}", "left", '108px', { fromValue: '108px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1303", tween: [ "style", "${_Branch_08}", "left", '113px', { fromValue: '118px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1304", tween: [ "style", "${_Branch_08}", "left", '118px', { fromValue: '113px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1088", tween: [ "style", "${_Leaf_02}", "left", '75px', { fromValue: '75px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1181", tween: [ "style", "${_Leaf_02}", "left", '75px', { fromValue: '75px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1087", tween: [ "style", "${_Leaf_06Copy}", "left", '132px', { fromValue: '132px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1180", tween: [ "style", "${_Leaf_06Copy}", "left", '132px', { fromValue: '132px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1353", tween: [ "style", "${_Leaf_04Copy}", "left", '87px', { fromValue: '201px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1354", tween: [ "style", "${_Leaf_04Copy}", "left", '201px', { fromValue: '87px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1297", tween: [ "transform", "${_Branch_07}", "rotateZ", '95deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1298", tween: [ "transform", "${_Branch_07}", "rotateZ", '0deg', { fromValue: '95deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1307", tween: [ "style", "${_Leaf_12Copy12}", "top", '261px', { fromValue: '199px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1308", tween: [ "style", "${_Leaf_12Copy12}", "top", '199px', { fromValue: '261px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1337", tween: [ "style", "${_Leaf_01}", "top", '264px', { fromValue: '251px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1338", tween: [ "style", "${_Leaf_01}", "top", '251px', { fromValue: '264px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1403", tween: [ "style", "${_Leaf_10}", "top", '267px', { fromValue: '137px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1404", tween: [ "style", "${_Leaf_10}", "top", '137px', { fromValue: '267px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1355", tween: [ "style", "${_Leaf_04Copy}", "top", '252px', { fromValue: '211px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1356", tween: [ "style", "${_Leaf_04Copy}", "top", '211px', { fromValue: '252px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1357", tween: [ "transform", "${_Leaf_12Copy12}", "rotateZ", '-223deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1358", tween: [ "transform", "${_Leaf_12Copy12}", "rotateZ", '0deg', { fromValue: '-223deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1359", tween: [ "style", "${_Leaf_12Copy13}", "left", '79px', { fromValue: '171px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1360", tween: [ "style", "${_Leaf_12Copy13}", "left", '171px', { fromValue: '79px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1299", tween: [ "style", "${_Leaf_12Copy12}", "left", '87px', { fromValue: '171px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1300", tween: [ "style", "${_Leaf_12Copy12}", "left", '171px', { fromValue: '87px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1420", tween: [ "style", "${_Group6}", "top", '27px', { fromValue: '-80px'}], position: 0, duration: 645, easing: "easeInOutQuad" },
            { id: "eid1421", tween: [ "style", "${_Group6}", "top", '-80px', { fromValue: '27px'}], position: 645, duration: 855, easing: "easeInOutQuad" },
            { id: "eid1379", tween: [ "style", "${_Leaf_06}", "left", '112px', { fromValue: '78px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1380", tween: [ "style", "${_Leaf_06}", "left", '78px', { fromValue: '112px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1339", tween: [ "transform", "${_Leaf_01Copy}", "rotateZ", '-119deg', { fromValue: '-27deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1340", tween: [ "transform", "${_Leaf_01Copy}", "rotateZ", '-27deg', { fromValue: '-119deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1389", tween: [ "style", "${_Leaf_08Copy18}", "left", '104px', { fromValue: '123px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1390", tween: [ "style", "${_Leaf_08Copy18}", "left", '123px', { fromValue: '104px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1275", tween: [ "transform", "${_Branch_02}", "rotateZ", '46deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1276", tween: [ "transform", "${_Branch_02}", "rotateZ", '0deg', { fromValue: '46deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1335", tween: [ "style", "${_Leaf_01}", "left", '102px', { fromValue: '145px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1336", tween: [ "style", "${_Leaf_01}", "left", '145px', { fromValue: '102px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1391", tween: [ "style", "${_Leaf_08Copy18}", "top", '241px', { fromValue: '103px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1392", tween: [ "style", "${_Leaf_08Copy18}", "top", '103px', { fromValue: '241px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1281", tween: [ "style", "${_Branch_04}", "top", '205px', { fromValue: '199px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1282", tween: [ "style", "${_Branch_04}", "top", '199px', { fromValue: '205px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1341", tween: [ "style", "${_Leaf_01Copy}", "left", '98px', { fromValue: '145px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1342", tween: [ "style", "${_Leaf_01Copy}", "left", '145px', { fromValue: '98px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1331", tween: [ "style", "${_Leaf_08Copy16}", "top", '295px', { fromValue: '312px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1332", tween: [ "style", "${_Leaf_08Copy16}", "top", '312px', { fromValue: '295px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1323", tween: [ "style", "${_Branch_10}", "top", '250px', { fromValue: '324px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1324", tween: [ "style", "${_Branch_10}", "top", '324px', { fromValue: '250px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1169", tween: [ "transform", "${_Shadow3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1262", tween: [ "transform", "${_Shadow3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1166", tween: [ "transform", "${_Branch_03}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1259", tween: [ "transform", "${_Branch_03}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1305", tween: [ "style", "${_Branch_08}", "top", '157px', { fromValue: '208px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1306", tween: [ "style", "${_Branch_08}", "top", '208px', { fromValue: '157px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1363", tween: [ "transform", "${_Leaf_12Copy13}", "rotateZ", '55deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1364", tween: [ "transform", "${_Leaf_12Copy13}", "rotateZ", '0deg', { fromValue: '55deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1118", tween: [ "style", "${_Leaf_06Copy}", "top", '318px', { fromValue: '318px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1211", tween: [ "style", "${_Leaf_06Copy}", "top", '318px', { fromValue: '318px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1383", tween: [ "style", "${_Leaf_07}", "left", '120px', { fromValue: '140px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1384", tween: [ "style", "${_Leaf_07}", "left", '140px', { fromValue: '120px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1277", tween: [ "style", "${_Branch_03}", "left", '128px', { fromValue: '102px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1278", tween: [ "style", "${_Branch_03}", "left", '102px', { fromValue: '128px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1401", tween: [ "style", "${_Leaf_10}", "left", '104px', { fromValue: '52px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1402", tween: [ "style", "${_Leaf_10}", "left", '52px', { fromValue: '104px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1311", tween: [ "style", "${_Branch_01}", "left", '108px', { fromValue: '153px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1312", tween: [ "style", "${_Branch_01}", "left", '153px', { fromValue: '108px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1293", tween: [ "style", "${_Branch_07}", "top", '213px', { fromValue: '160px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1294", tween: [ "style", "${_Branch_07}", "top", '160px', { fromValue: '213px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1373", tween: [ "style", "${_Leaf_05}", "top", '271px', { fromValue: '186px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1374", tween: [ "style", "${_Leaf_05}", "top", '186px', { fromValue: '271px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1301", tween: [ "transform", "${_Branch_08}", "rotateZ", '103deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1302", tween: [ "transform", "${_Branch_08}", "rotateZ", '0deg', { fromValue: '103deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1289", tween: [ "style", "${_Branch_05}", "left", '41px', { fromValue: '20px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1290", tween: [ "style", "${_Branch_05}", "left", '20px', { fromValue: '41px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1317", tween: [ "style", "${_Branch_09}", "left", '112px', { fromValue: '153px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1318", tween: [ "style", "${_Branch_09}", "left", '153px', { fromValue: '112px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1327", tween: [ "transform", "${_Leaf_08Copy16}", "rotateZ", '-74deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1328", tween: [ "transform", "${_Leaf_08Copy16}", "rotateZ", '0deg', { fromValue: '-74deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1397", tween: [ "style", "${_Leaf_09Copy8}", "top", '234px', { fromValue: '80px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1398", tween: [ "style", "${_Leaf_09Copy8}", "top", '80px', { fromValue: '234px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1419", tween: [ "style", "${_Group6}", "left", '-4px', { fromValue: '10px'}], position: 0, duration: 645, easing: "easeInOutQuad" },
            { id: "eid1423", tween: [ "style", "${_Group6}", "left", '10px', { fromValue: '-4px'}], position: 645, duration: 855, easing: "easeInOutQuad" },
            { id: "eid1343", tween: [ "style", "${_Leaf_01Copy}", "top", '244px', { fromValue: '251px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1344", tween: [ "style", "${_Leaf_01Copy}", "top", '251px', { fromValue: '244px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1413", tween: [ "transform", "${_Group6}", "scaleX", '0.61', { fromValue: '1'}], position: 0, duration: 645, easing: "easeInOutQuad" },
            { id: "eid1424", tween: [ "transform", "${_Group6}", "scaleX", '1', { fromValue: '0.61'}], position: 645, duration: 855, easing: "easeInOutQuad" },
            { id: "eid1414", tween: [ "transform", "${_Group6}", "scaleY", '0.61', { fromValue: '1'}], position: 0, duration: 645, easing: "easeInOutQuad" },
            { id: "eid1422", tween: [ "transform", "${_Group6}", "scaleY", '1', { fromValue: '0.61'}], position: 645, duration: 855, easing: "easeInOutQuad" },
            { id: "eid1351", tween: [ "transform", "${_Leaf_04Copy}", "rotateZ", '-147deg', { fromValue: '-19deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1352", tween: [ "transform", "${_Leaf_04Copy}", "rotateZ", '-19deg', { fromValue: '-147deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1408", tween: [ "style", "${_Shadow3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1410", tween: [ "style", "${_Shadow3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1406", tween: [ "transform", "${_Group6}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid1107", tween: [ "style", "${_Shadow3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1200", tween: [ "style", "${_Shadow3}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1112", tween: [ "style", "${_Leaf_08Copy17}", "top", '257px', { fromValue: '257px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1205", tween: [ "style", "${_Leaf_08Copy17}", "top", '257px', { fromValue: '257px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1168", tween: [ "transform", "${_Trunk}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1261", tween: [ "transform", "${_Trunk}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1285", tween: [ "transform", "${_Branch_04}", "rotateZ", '-63deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1286", tween: [ "transform", "${_Branch_04}", "rotateZ", '0deg', { fromValue: '-63deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1291", tween: [ "transform", "${_Branch_05}", "rotateZ", '-74deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1292", tween: [ "transform", "${_Branch_05}", "rotateZ", '0deg', { fromValue: '-74deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1393", tween: [ "transform", "${_Leaf_09Copy8}", "rotateZ", '72deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1394", tween: [ "transform", "${_Leaf_09Copy8}", "rotateZ", '0deg', { fromValue: '72deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1349", tween: [ "style", "${_Leaf_04}", "top", '253px', { fromValue: '211px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1350", tween: [ "style", "${_Leaf_04}", "top", '211px', { fromValue: '253px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1367", tween: [ "style", "${_Leaf_11}", "top", '270px', { fromValue: '242px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1368", tween: [ "style", "${_Leaf_11}", "top", '242px', { fromValue: '270px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1319", tween: [ "style", "${_Branch_09}", "top", '219px', { fromValue: '290px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1320", tween: [ "style", "${_Branch_09}", "top", '290px', { fromValue: '219px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1369", tween: [ "transform", "${_Leaf_11}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1370", tween: [ "transform", "${_Leaf_11}", "rotateZ", '0deg', { fromValue: '42deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1361", tween: [ "style", "${_Leaf_12Copy13}", "top", '264px', { fromValue: '199px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1362", tween: [ "style", "${_Leaf_12Copy13}", "top", '199px', { fromValue: '264px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1309", tween: [ "transform", "${_Branch_01}", "rotateZ", '115deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1310", tween: [ "transform", "${_Branch_01}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1149", tween: [ "transform", "${_Leaf_06Copy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1242", tween: [ "transform", "${_Leaf_06Copy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1333", tween: [ "transform", "${_Leaf_01}", "rotateZ", '-88deg', { fromValue: '-27deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1334", tween: [ "transform", "${_Leaf_01}", "rotateZ", '-27deg', { fromValue: '-88deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1375", tween: [ "transform", "${_Leaf_05}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1376", tween: [ "transform", "${_Leaf_05}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1365", tween: [ "style", "${_Leaf_11}", "left", '88px', { fromValue: '5px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1366", tween: [ "style", "${_Leaf_11}", "left", '5px', { fromValue: '88px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1325", tween: [ "transform", "${_Branch_10}", "rotateZ", '-152deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1326", tween: [ "transform", "${_Branch_10}", "rotateZ", '0deg', { fromValue: '-152deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1347", tween: [ "style", "${_Leaf_04}", "left", '96px', { fromValue: '201px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1348", tween: [ "style", "${_Leaf_04}", "left", '201px', { fromValue: '96px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1315", tween: [ "transform", "${_Branch_09}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1316", tween: [ "transform", "${_Branch_09}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1265", tween: [ "style", "${_Trunk}", "left", '67px', { fromValue: '64px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1266", tween: [ "style", "${_Trunk}", "left", '64px', { fromValue: '67px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1150", tween: [ "transform", "${_Leaf_02}", "rotateZ", '26deg', { fromValue: '26deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1243", tween: [ "transform", "${_Leaf_02}", "rotateZ", '26deg', { fromValue: '26deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1371", tween: [ "style", "${_Leaf_05}", "left", '93px', { fromValue: '27px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1372", tween: [ "style", "${_Leaf_05}", "left", '27px', { fromValue: '93px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1387", tween: [ "transform", "${_Leaf_08Copy18}", "rotateZ", '-62deg', { fromValue: '-14deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1388", tween: [ "transform", "${_Leaf_08Copy18}", "rotateZ", '-14deg', { fromValue: '-62deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1138", tween: [ "style", "${_Shadow3}", "top", '251px', { fromValue: '251px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1231", tween: [ "style", "${_Shadow3}", "top", '251px', { fromValue: '251px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1385", tween: [ "style", "${_Leaf_07}", "top", '253px', { fromValue: '145px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1386", tween: [ "style", "${_Leaf_07}", "top", '145px', { fromValue: '253px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1263", tween: [ "style", "${_Trunk}", "top", '0px', { fromValue: '115px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1264", tween: [ "style", "${_Trunk}", "top", '115px', { fromValue: '0px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1345", tween: [ "transform", "${_Leaf_04}", "rotateZ", '-122deg', { fromValue: '-19deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1346", tween: [ "transform", "${_Leaf_04}", "rotateZ", '-19deg', { fromValue: '-122deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1146", tween: [ "transform", "${_Leaf_06}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1239", tween: [ "transform", "${_Leaf_06}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1313", tween: [ "style", "${_Branch_01}", "top", '218px', { fromValue: '213px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1314", tween: [ "style", "${_Branch_01}", "top", '213px', { fromValue: '218px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1381", tween: [ "transform", "${_Leaf_07}", "rotateZ", '-53deg', { fromValue: '-11deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1382", tween: [ "transform", "${_Leaf_07}", "rotateZ", '-11deg', { fromValue: '-53deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1148", tween: [ "transform", "${_Leaf_03}", "rotateZ", '-13deg', { fromValue: '-13deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1241", tween: [ "transform", "${_Leaf_03}", "rotateZ", '-13deg', { fromValue: '-13deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1143", tween: [ "transform", "${_Leaf_08Copy17}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1236", tween: [ "transform", "${_Leaf_08Copy17}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1329", tween: [ "style", "${_Leaf_08Copy16}", "left", '117px', { fromValue: '193px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1330", tween: [ "style", "${_Leaf_08Copy16}", "left", '193px', { fromValue: '117px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1287", tween: [ "style", "${_Branch_05}", "top", '287px', { fromValue: '248px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1288", tween: [ "style", "${_Branch_05}", "top", '248px', { fromValue: '287px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1117", tween: [ "style", "${_Leaf_03}", "top", '210px', { fromValue: '210px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1210", tween: [ "style", "${_Leaf_03}", "top", '210px', { fromValue: '210px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1273", tween: [ "style", "${_Branch_02}", "top", '165px', { fromValue: '80px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1274", tween: [ "style", "${_Branch_02}", "top", '80px', { fromValue: '165px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1271", tween: [ "style", "${_Branch_02}", "left", '105px', { fromValue: '93px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1272", tween: [ "style", "${_Branch_02}", "left", '93px', { fromValue: '105px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1279", tween: [ "style", "${_Branch_03}", "top", '248px', { fromValue: '115px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1280", tween: [ "style", "${_Branch_03}", "top", '115px', { fromValue: '248px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1399", tween: [ "transform", "${_Leaf_10}", "rotateZ", '120deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1400", tween: [ "transform", "${_Leaf_10}", "rotateZ", '0deg', { fromValue: '120deg'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1295", tween: [ "style", "${_Branch_07}", "left", '130px', { fromValue: '118px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1296", tween: [ "style", "${_Branch_07}", "left", '118px', { fromValue: '130px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1321", tween: [ "style", "${_Branch_10}", "left", '94px', { fromValue: '114px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1322", tween: [ "style", "${_Branch_10}", "left", '114px', { fromValue: '94px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1283", tween: [ "style", "${_Branch_04}", "left", '21px', { fromValue: '35px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1284", tween: [ "style", "${_Branch_04}", "left", '35px', { fromValue: '21px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_Leaf_03}", "left", '108px', { fromValue: '108px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1179", tween: [ "style", "${_Leaf_03}", "left", '108px', { fromValue: '108px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1119", tween: [ "style", "${_Leaf_02}", "top", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1212", tween: [ "style", "${_Leaf_02}", "top", '237px', { fromValue: '237px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1395", tween: [ "style", "${_Leaf_09Copy8}", "left", '115px', { fromValue: '93px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1396", tween: [ "style", "${_Leaf_09Copy8}", "left", '93px', { fromValue: '115px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid1377", tween: [ "style", "${_Leaf_06}", "top", '290px', { fromValue: '176px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1378", tween: [ "style", "${_Leaf_06}", "top", '176px', { fromValue: '290px'}], position: 250, duration: 1250, easing: "easeInOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-13068930");
