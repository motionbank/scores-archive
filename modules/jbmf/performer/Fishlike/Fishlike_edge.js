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
            rect:['340px','171px','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_2',
            type:'rect',
            rect:['0','-204','auto','auto','auto','auto'],
            userClass:"ani_syms"
         },
         {
            id:'Symbol_3',
            type:'rect',
            rect:['82','37','auto','auto','auto','auto'],
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
            id:'Symbol_2',
            symbolName:'Symbol_2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_3}": [
            ["style", "top", '8px'],
            ["style", "left", '35px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_Symbol_2}": [
            ["style", "top", '75px'],
            ["style", "left", '99px']
         ],
         "${_Symbol_1}": [
            ["style", "left", '136px'],
            ["style", "top", '142px']
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
            { id: "eid1250", tween: [ "style", "${_Symbol_3}", "left", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid1245", tween: [ "style", "${_Symbol_2}", "top", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
            { id: "eid1247", tween: [ "style", "${_Symbol_2}", "left", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid1249", tween: [ "style", "${_Symbol_1}", "left", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
            { id: "eid1236", tween: [ "style", "${_Symbol_1}", "top", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
            { id: "eid1251", tween: [ "style", "${_Symbol_3}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 }         ]
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
      rect: ['101px','388px','307px','100px','auto','auto'],
      id: 'Shadow2',
      transform: [[],[],[],['1.65798','0.67']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Shadow2.svg','0px','0px']
   },
   {
      id: 'Group5',
      type: 'group',
      rect: ['-136px','-204px','579','482','auto','auto'],
      c: [
      {
         rect: ['426px','402px','86px','45px','auto','auto'],
         id: 'FinsideBack',
         transform: [[],['36']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         rect: ['351px','215px','116px','61px','auto','auto'],
         id: 'FinsideTop',
         transform: [[],[],[],['1.5']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['142px','240px','437px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'Head',
         type: 'image',
         rect: ['136px','238px','149px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
      },
      {
         id: 'Group',
         type: 'group',
         rect: ['255px','0px','45','45','auto','auto'],
         c: [
         {
            id: 'FinLow',
            type: 'image',
            rect: ['318px','350px','72px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/FinLow.svg','0px','0px']
         },
         {
            id: 'FinLowCopy',
            type: 'image',
            rect: ['318px','350px','72px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/FinLow.svg','0px','0px']
         },
         {
            id: 'FinTop',
            type: 'image',
            rect: ['318px','206px','72px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/FinTop.svg','0px','0px']
         },
         {
            id: 'FinTopCopy',
            type: 'image',
            rect: ['318px','206px','72px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/FinTop.svg','0px','0px']
         },
         {
            id: 'Eye',
            type: 'image',
            rect: ['-62px','277px','45px','45px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
         }]
      },
      {
         rect: ['291px','441px','86px','45px','auto','auto'],
         id: 'FinsideLowFront',
         transform: [[],['36']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'Finside',
         type: 'image',
         rect: ['329px','317px','116px','61px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_FinTop}": [
            ["style", "-webkit-transform-origin", [0,115.97], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,115.97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,115.97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,115.97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,115.97],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '206px'],
            ["style", "left", '318px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FinsideTop}": [
            ["style", "top", '215px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.5'],
            ["style", "left", '351px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FinsideLowFront}": [
            ["style", "top", '441px'],
            ["transform", "rotateZ", '36deg'],
            ["style", "height", '45px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '291px'],
            ["style", "width", '86px']
         ],
         "${_FinsideBack}": [
            ["style", "top", '402px'],
            ["transform", "rotateZ", '36deg'],
            ["style", "height", '45px'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '426px'],
            ["style", "width", '86px']
         ],
         "${_FinLowCopy}": [
            ["style", "top", '350px'],
            ["style", "-webkit-transform-origin", [-4.58,-17.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-4.58,-17.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-4.58,-17.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-4.58,-17.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-4.58,-17.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '318px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group5}": [
            ["style", "top", '-204px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-136px'],
            ["transform", "scaleY", '1']
         ],
         "${_Finside}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '317px'],
            ["style", "left", '329px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Shadow2}": [
            ["style", "top", '279px'],
            ["transform", "scaleX", '1.65798'],
            ["transform", "scaleY", '0.67'],
            ["style", "left", '66px']
         ],
         "${_Eye}": [
            ["style", "top", '277px'],
            ["style", "left", '-62px']
         ],
         "${_Group}": [
            ["style", "left", '255px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '303px'],
            ["style", "width", '504px']
         ],
         "${_FinLow}": [
            ["style", "-webkit-transform-origin", [-2.76,-14.56], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-2.76,-14.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-2.76,-14.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-2.76,-14.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-2.76,-14.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '350px'],
            ["style", "left", '318px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FinTopCopy}": [
            ["style", "top", '206px'],
            ["style", "-webkit-transform-origin", [1.39,115.28], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [1.39,115.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [1.39,115.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [1.39,115.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [1.39,115.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '318px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '240px'],
            ["style", "left", '142px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Head}": [
            ["style", "top", '240px'],
            ["style", "left", '136px'],
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
            { id: "eid76", tween: [ "style", "${_FinsideBack}", "top", '422px', { fromValue: '402px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid223", tween: [ "style", "${_FinsideBack}", "top", '402px', { fromValue: '422px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid891", tween: [ "style", "${_Group5}", "left", '-100px', { fromValue: '-136px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1218", tween: [ "style", "${_Group5}", "left", '-28px', { fromValue: '-100px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid1219", tween: [ "style", "${_Group5}", "left", '-28px', { fromValue: '-28px'}], position: 607, duration: 714, easing: "easeInQuad" },
            { id: "eid1220", tween: [ "style", "${_Group5}", "left", '-100px', { fromValue: '-28px'}], position: 1321, duration: 179, easing: "easeOutQuad" },
            { id: "eid896", tween: [ "style", "${_Group5}", "left", '-136px', { fromValue: '-100px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1259", tween: [ "style", "${_Shadow2}", "top", '284px', { fromValue: '279px'}], position: 0, duration: 250 },
            { id: "eid1263", tween: [ "style", "${_Shadow2}", "top", '372px', { fromValue: '284px'}], position: 250, duration: 357 },
            { id: "eid1274", tween: [ "style", "${_Shadow2}", "top", '287px', { fromValue: '372px'}], position: 1321, duration: 252 },
            { id: "eid1318", tween: [ "style", "${_Shadow2}", "top", '279px', { fromValue: '287px'}], position: 1573, duration: 177 },
            { id: "eid82", tween: [ "style", "${_FinsideLowFront}", "top", '427px', { fromValue: '441px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid199", tween: [ "style", "${_FinsideLowFront}", "top", '441px', { fromValue: '427px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid44", tween: [ "style", "${_Body}", "top", '340px', { fromValue: '240px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid217", tween: [ "style", "${_Body}", "top", '240px', { fromValue: '340px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid75", tween: [ "style", "${_FinsideBack}", "left", '374px', { fromValue: '426px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid224", tween: [ "style", "${_FinsideBack}", "left", '426px', { fromValue: '374px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid85", tween: [ "style", "${_Eye}", "left", '0px', { fromValue: '-62px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid201", tween: [ "style", "${_Eye}", "left", '-62px', { fromValue: '0px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid48", tween: [ "style", "${_FinLow}", "top", '44px', { fromValue: '350px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid211", tween: [ "style", "${_FinLow}", "top", '350px', { fromValue: '44px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid73", tween: [ "style", "${_Finside}", "top", '428px', { fromValue: '317px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "style", "${_Finside}", "top", '317px', { fromValue: '428px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid42", tween: [ "transform", "${_Body}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid153", tween: [ "transform", "${_Body}", "rotateZ", '-86deg', { fromValue: '-90deg'}], position: 607, duration: 164, easing: "easeInOutQuad" },
            { id: "eid154", tween: [ "transform", "${_Body}", "rotateZ", '-98deg', { fromValue: '-86deg'}], position: 771, duration: 175, easing: "easeInOutQuad" },
            { id: "eid161", tween: [ "transform", "${_Body}", "rotateZ", '-86deg', { fromValue: '-98deg'}], position: 946, duration: 175, easing: "easeInOutQuad" },
            { id: "eid164", tween: [ "transform", "${_Body}", "rotateZ", '-90deg', { fromValue: '-86deg'}], position: 1121, duration: 200, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid72", tween: [ "style", "${_Finside}", "left", '307px', { fromValue: '329px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid175", tween: [ "style", "${_Finside}", "left", '329px', { fromValue: '307px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid74", tween: [ "transform", "${_FinsideBack}", "rotateZ", '90deg', { fromValue: '36deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid148", tween: [ "transform", "${_FinsideBack}", "rotateZ", '98deg', { fromValue: '90deg'}], position: 607, duration: 179, easing: "easeInOutQuad" },
            { id: "eid156", tween: [ "transform", "${_FinsideBack}", "rotateZ", '84deg', { fromValue: '98deg'}], position: 786, duration: 161, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "transform", "${_FinsideBack}", "rotateZ", '98deg', { fromValue: '84deg'}], position: 946, duration: 189, easing: "easeInOutQuad" },
            { id: "eid166", tween: [ "transform", "${_FinsideBack}", "rotateZ", '90deg', { fromValue: '98deg'}], position: 1136, duration: 186, easing: "easeInOutQuad" },
            { id: "eid225", tween: [ "transform", "${_FinsideBack}", "rotateZ", '36deg', { fromValue: '90deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid49", tween: [ "style", "${_FinLow}", "left", '24px', { fromValue: '318px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid212", tween: [ "style", "${_FinLow}", "left", '318px', { fromValue: '24px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "style", "${_FinsideTop}", "top", '441px', { fromValue: '215px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid220", tween: [ "style", "${_FinsideTop}", "top", '215px', { fromValue: '441px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid61", tween: [ "transform", "${_FinLowCopy}", "rotateZ", '-52deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid96", tween: [ "transform", "${_FinLowCopy}", "rotateZ", '-412deg', { fromValue: '-52deg'}], position: 607, duration: 714, easing: "easeInOutQuad" },
            { id: "eid210", tween: [ "transform", "${_FinLowCopy}", "rotateZ", '0deg', { fromValue: '-412deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "style", "${_Eye}", "top", '0px', { fromValue: '277px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid202", tween: [ "style", "${_Eye}", "top", '277px', { fromValue: '0px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid39", tween: [ "transform", "${_Head}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid216", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid100", tween: [ "transform", "${_Finside}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid147", tween: [ "transform", "${_Finside}", "rotateZ", '98deg', { fromValue: '90deg'}], position: 607, duration: 180, easing: "easeInOutQuad" },
            { id: "eid158", tween: [ "transform", "${_Finside}", "rotateZ", '86deg', { fromValue: '98deg'}], position: 788, duration: 159, easing: "easeInOutQuad" },
            { id: "eid159", tween: [ "transform", "${_Finside}", "rotateZ", '98deg', { fromValue: '86deg'}], position: 946, duration: 175, easing: "easeInOutQuad" },
            { id: "eid168", tween: [ "transform", "${_Finside}", "rotateZ", '90deg', { fromValue: '98deg'}], position: 1121, duration: 200, easing: "easeInOutQuad" },
            { id: "eid176", tween: [ "transform", "${_Finside}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid43", tween: [ "style", "${_Body}", "left", '293px', { fromValue: '142px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid218", tween: [ "style", "${_Body}", "left", '142px', { fromValue: '293px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "style", "${_FinsideTop}", "left", '-94px', { fromValue: '351px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid221", tween: [ "style", "${_FinsideTop}", "left", '351px', { fromValue: '-94px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "transform", "${_FinTopCopy}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid87", tween: [ "transform", "${_FinTopCopy}", "rotateZ", '-450deg', { fromValue: '-90deg'}], position: 607, duration: 714, easing: "easeInOutQuad" },
            { id: "eid205", tween: [ "transform", "${_FinTopCopy}", "rotateZ", '0deg', { fromValue: '-450deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid46", tween: [ "style", "${_FinTop}", "left", '23px', { fromValue: '318px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid206", tween: [ "style", "${_FinTop}", "left", '318px', { fromValue: '23px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid925", tween: [ "transform", "${_Group5}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid929", tween: [ "transform", "${_Group5}", "scaleX", '1', { fromValue: '0.8'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1257", tween: [ "transform", "${_Shadow2}", "scaleY", '0.67', { fromValue: '0.67'}], position: 0, duration: 0 },
            { id: "eid1261", tween: [ "transform", "${_Shadow2}", "scaleY", '0.45', { fromValue: '0.67'}], position: 250, duration: 357 },
            { id: "eid1275", tween: [ "transform", "${_Shadow2}", "scaleY", '0.67', { fromValue: '0.45'}], position: 1321, duration: 252 },
            { id: "eid1319", tween: [ "transform", "${_Shadow2}", "scaleY", '0.67', { fromValue: '0.67'}], position: 1750, duration: 0 },
            { id: "eid1260", tween: [ "transform", "${_Shadow2}", "scaleX", '1.45603', { fromValue: '1.65798'}], position: 0, duration: 250 },
            { id: "eid1264", tween: [ "transform", "${_Shadow2}", "scaleX", '1.886', { fromValue: '1.45603'}], position: 250, duration: 357 },
            { id: "eid1279", tween: [ "transform", "${_Shadow2}", "scaleX", '1.45603', { fromValue: '1.886'}], position: 1321, duration: 252 },
            { id: "eid1321", tween: [ "transform", "${_Shadow2}", "scaleX", '1.65798', { fromValue: '1.45603'}], position: 1573, duration: 177 },
            { id: "eid59", tween: [ "style", "${_FinLowCopy}", "left", '26px', { fromValue: '318px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid209", tween: [ "style", "${_FinLowCopy}", "left", '318px', { fromValue: '26px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid54", tween: [ "style", "${_FinTopCopy}", "left", '21px', { fromValue: '318px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid204", tween: [ "style", "${_FinTopCopy}", "left", '318px', { fromValue: '21px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid62", tween: [ "transform", "${_FinLow}", "rotateZ", '46deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid98", tween: [ "transform", "${_FinLow}", "rotateZ", '-314deg', { fromValue: '46deg'}], position: 607, duration: 714, easing: "easeInOutQuad" },
            { id: "eid213", tween: [ "transform", "${_FinLow}", "rotateZ", '0deg', { fromValue: '-314deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid933", tween: [ "style", "${_Group}", "left", '299px', { fromValue: '255px'}], position: 607, duration: 179, easing: "easeInOutQuad" },
            { id: "eid935", tween: [ "style", "${_Group}", "left", '206px', { fromValue: '299px'}], position: 786, duration: 161, easing: "easeInOutQuad" },
            { id: "eid936", tween: [ "style", "${_Group}", "left", '299px', { fromValue: '206px'}], position: 946, duration: 175, easing: "easeInOutQuad" },
            { id: "eid938", tween: [ "style", "${_Group}", "left", '255px', { fromValue: '299px'}], position: 1121, duration: 200, easing: "easeInOutQuad" },
            { id: "eid1258", tween: [ "style", "${_Shadow2}", "left", '98px', { fromValue: '66px'}], position: 0, duration: 250 },
            { id: "eid1322", tween: [ "style", "${_Shadow2}", "left", '98px', { fromValue: '98px'}], position: 607, duration: 0 },
            { id: "eid1277", tween: [ "style", "${_Shadow2}", "left", '98px', { fromValue: '98px'}], position: 1321, duration: 252 },
            { id: "eid1320", tween: [ "style", "${_Shadow2}", "left", '66px', { fromValue: '98px'}], position: 1573, duration: 177 },
            { id: "eid40", tween: [ "style", "${_Head}", "left", '114px', { fromValue: '136px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid215", tween: [ "style", "${_Head}", "left", '136px', { fromValue: '114px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid92", tween: [ "transform", "${_FinTop}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 607, duration: 714, easing: "easeInOutQuad" },
            { id: "eid77", tween: [ "transform", "${_FinsideTop}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid146", tween: [ "transform", "${_FinsideTop}", "rotateZ", '98deg', { fromValue: '90deg'}], position: 607, duration: 179, easing: "easeInOutQuad" },
            { id: "eid155", tween: [ "transform", "${_FinsideTop}", "rotateZ", '87deg', { fromValue: '98deg'}], position: 786, duration: 161, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "transform", "${_FinsideTop}", "rotateZ", '98deg', { fromValue: '87deg'}], position: 946, duration: 189, easing: "easeInOutQuad" },
            { id: "eid165", tween: [ "transform", "${_FinsideTop}", "rotateZ", '90deg', { fromValue: '98deg'}], position: 1136, duration: 186, easing: "easeInOutQuad" },
            { id: "eid222", tween: [ "transform", "${_FinsideTop}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid41", tween: [ "style", "${_Head}", "top", '274px', { fromValue: '240px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid214", tween: [ "style", "${_Head}", "top", '240px', { fromValue: '274px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid934", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '0px'}], position: 607, duration: 179, easing: "easeInOutQuad" },
            { id: "eid937", tween: [ "style", "${_Group}", "top", '-8px', { fromValue: '-1px'}], position: 786, duration: 336, easing: "easeInOutQuad" },
            { id: "eid939", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '-8px'}], position: 1121, duration: 200, easing: "easeInOutQuad" },
            { id: "eid53", tween: [ "style", "${_FinTopCopy}", "top", '-144px', { fromValue: '206px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid203", tween: [ "style", "${_FinTopCopy}", "top", '206px', { fromValue: '-144px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid57", tween: [ "style", "${_FinLowCopy}", "top", '48px', { fromValue: '350px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid208", tween: [ "style", "${_FinLowCopy}", "top", '350px', { fromValue: '48px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid892", tween: [ "style", "${_Group5}", "top", '-143px', { fromValue: '-204px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1225", tween: [ "style", "${_Group5}", "top", '7px', { fromValue: '-143px'}], position: 250, duration: 357, easing: "easeInQuad" },
            { id: "eid1226", tween: [ "style", "${_Group5}", "top", '-143px', { fromValue: '7px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid1217", tween: [ "style", "${_Group5}", "top", '-204px', { fromValue: '-143px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid45", tween: [ "style", "${_FinTop}", "top", '-144px', { fromValue: '206px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid207", tween: [ "style", "${_FinTop}", "top", '206px', { fromValue: '-144px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid81", tween: [ "style", "${_FinsideLowFront}", "left", '455px', { fromValue: '291px'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid198", tween: [ "style", "${_FinsideLowFront}", "left", '291px', { fromValue: '455px'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '90deg', { fromValue: '36deg'}], position: 250, duration: 357, easing: "easeInOutQuad" },
            { id: "eid145", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '98deg', { fromValue: '90deg'}], position: 607, duration: 180, easing: "easeInOutQuad" },
            { id: "eid157", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '87deg', { fromValue: '98deg'}], position: 788, duration: 159, easing: "easeInOutQuad" },
            { id: "eid160", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '98deg', { fromValue: '87deg'}], position: 946, duration: 175, easing: "easeInOutQuad" },
            { id: "eid167", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '90deg', { fromValue: '98deg'}], position: 1121, duration: 200, easing: "easeInOutQuad" },
            { id: "eid200", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '36deg', { fromValue: '90deg'}], position: 1321, duration: 179, easing: "easeInOutQuad" },
            { id: "eid926", tween: [ "transform", "${_Group5}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid930", tween: [ "transform", "${_Group5}", "scaleY", '1', { fromValue: '0.8'}], position: 1500, duration: 250, easing: "easeInOutQuad" }         ]
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
      rect: ['90px','351px','307px','100px','auto','auto'],
      id: 'Shadow2Copy2',
      transform: [[],[],[],['1.65798','0.67']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Shadow2.svg','0px','0px']
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['-101px','70px','571','679','auto','auto'],
      c: [
      {
         id: 'Tentacle',
         type: 'image',
         rect: ['115px','244px','367px','67px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Tentacle.svg','0px','0px']
      },
      {
         id: 'TentacleCopy',
         type: 'image',
         rect: ['115px','244px','367px','67px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Tentacle.svg','0px','0px']
      },
      {
         id: 'TentacleCopy2',
         type: 'image',
         rect: ['115px','244px','367px','67px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Tentacle.svg','0px','0px']
      },
      {
         id: 'TentacleCopy3',
         type: 'image',
         rect: ['115px','244px','367px','67px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Tentacle.svg','0px','0px']
      },
      {
         rect: ['391px','332px','86px','45px','auto','auto'],
         id: 'FinsideBack',
         transform: [[],['36']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         rect: ['258px','145px','116px','61px','auto','auto'],
         id: 'FinsideTop',
         transform: [[],[],[],['1.5']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'Body',
         type: 'image',
         rect: ['107px','170px','437px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'Head',
         type: 'image',
         rect: ['101px','168px','149px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
      },
      {
         rect: ['256px','371px','86px','45px','auto','auto'],
         id: 'FinsideLowFront',
         transform: [[],['36']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'FinsideCopy4',
         type: 'image',
         rect: ['294px','247px','116px','61px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'FinLowCopy2',
         type: 'image',
         rect: ['538px','280px','72px','144px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/FinLow.svg','0px','0px']
      },
      {
         id: 'FinTopCopy2',
         type: 'image',
         rect: ['538px','136px','72px','144px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/FinTop.svg','0px','0px']
      },
      {
         rect: ['158px','207px','45px','45px','auto','auto'],
         id: 'Eye',
         type: 'image',
         clip: ['rect(0px 45px 45px 0px)'],
         fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
      },
      {
         id: 'EyeCopy',
         type: 'image',
         rect: ['241px','207px','45px','45px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
      }]
   },
   {
      id: 'Ink',
      type: 'image',
      rect: ['-31px','289px','341px','296px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Ink.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "top", '-67px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-64px'],
            ["style", "-webkit-transform-origin", [49.21,42.12], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.21,42.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.21,42.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.21,42.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.21,42.12],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TentacleCopy3}": [
            ["style", "-webkit-transform-origin", [4.36,62.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '67px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "top", '244px'],
            ["style", "left", '115px'],
            ["style", "width", '367px']
         ],
         "${_FinsideBack}": [
            ["style", "top", '282px'],
            ["transform", "rotateZ", '36deg'],
            ["style", "height", '45px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '407px'],
            ["style", "width", '86px']
         ],
         "${_TentacleCopy2}": [
            ["style", "top", '244px'],
            ["style", "height", '67px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [4.36,62.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '115px'],
            ["style", "width", '367px']
         ],
         "${_EyeCopy}": [
            ["style", "top", '207px'],
            ["style", "left", '158px'],
            ["style", "clip", [0,45,44,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Body}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '107px'],
            ["style", "top", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '494px'],
            ["style", "width", '509px']
         ],
         "${_Shadow2Copy2}": [
            ["style", "top", '351px'],
            ["transform", "scaleY", '0.67'],
            ["transform", "scaleX", '1.65798'],
            ["style", "opacity", '1'],
            ["style", "left", '90px']
         ],
         "${_TentacleCopy}": [
            ["style", "-webkit-transform-origin", [4.36,62.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '67px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "top", '244px'],
            ["style", "left", '115px'],
            ["style", "width", '367px']
         ],
         "${_FinsideTop}": [
            ["style", "top", '145px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.5'],
            ["style", "left", '258px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Tentacle}": [
            ["style", "top", '244px'],
            ["style", "height", '67px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [4.36,62.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.36,62.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '115px'],
            ["style", "width", '367px']
         ],
         "${_FinTopCopy2}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '538px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Ink}": [
            ["style", "top", '131px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "height", '327px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '376px']
         ],
         "${_Head}": [
            ["style", "top", '170px'],
            ["style", "left", '101px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FinsideLowFront}": [
            ["style", "top", '320px'],
            ["transform", "rotateZ", '36deg'],
            ["style", "height", '45px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '272px'],
            ["style", "width", '86px']
         ],
         "${_Eye}": [
            ["style", "top", '207px'],
            ["style", "left", '158px'],
            ["style", "clip", [0,45,44,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FinLowCopy2}": [
            ["style", "top", '280px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '538px'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_FinsideCopy4}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '247px'],
            ["style", "left", '294px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1393,
         autoPlay: false,
         timeline: [
            { id: "eid507", tween: [ "style", "${_Ink}", "opacity", '0', { fromValue: '1'}], position: 1078, duration: 163, easing: "easeInOutQuad" },
            { id: "eid954", tween: [ "transform", "${_Group3}", "scaleX", '0.7', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid955", tween: [ "transform", "${_Group3}", "scaleX", '0.67', { fromValue: '0.7'}], position: 370, duration: 547, easing: "easeInOutQuad" },
            { id: "eid402", tween: [ "transform", "${_Group3}", "scaleX", '0', { fromValue: '0.67'}], position: 917, duration: 175, easing: "easeInOutQuad" },
            { id: "eid502", tween: [ "transform", "${_Group3}", "scaleX", '1', { fromValue: '0'}], position: 1250, duration: 143, easing: "easeInOutQuad" },
            { id: "eid381", tween: [ "transform", "${_Ink}", "scaleY", '1', { fromValue: '0'}], position: 816, duration: 262, easing: "easeInOutQuad" },
            { id: "eid314", tween: [ "transform", "${_TentacleCopy3}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid330", tween: [ "transform", "${_TentacleCopy3}", "rotateZ", '29deg', { fromValue: '42deg'}], position: 370, duration: 240, easing: "easeInOutQuad" },
            { id: "eid331", tween: [ "transform", "${_TentacleCopy3}", "rotateZ", '42deg', { fromValue: '29deg'}], position: 610, duration: 193, easing: "easeInOutQuad" },
            { id: "eid353", tween: [ "transform", "${_TentacleCopy3}", "rotateZ", '37deg', { fromValue: '42deg'}], position: 803, duration: 222, easing: "easeInOutQuad" },
            { id: "eid354", tween: [ "transform", "${_TentacleCopy3}", "rotateZ", '42deg', { fromValue: '37deg'}], position: 1025, duration: 210, easing: "easeInOutQuad" },
            { id: "eid482", tween: [ "transform", "${_TentacleCopy3}", "rotateZ", '0deg', { fromValue: '42deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid272", tween: [ "style", "${_Body}", "top", '257px', { fromValue: '170px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid471", tween: [ "style", "${_Body}", "top", '170px', { fromValue: '257px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid371", tween: [ "style", "${_Eye}", "clip", [0,45,23,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,45,44,0]}], position: 740, duration: 190, easing: "easeInOutQuad" },
            { id: "eid454", tween: [ "style", "${_Eye}", "clip", [0,45,44,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,45,23,0]}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1293", tween: [ "style", "${_Shadow2Copy2}", "opacity", '0', { fromValue: '1'}], position: 994, duration: 241 },
            { id: "eid1309", tween: [ "style", "${_Shadow2Copy2}", "opacity", '1', { fromValue: '0'}], position: 1278, duration: 115 },
            { id: "eid313", tween: [ "style", "${_TentacleCopy3}", "left", '266px', { fromValue: '115px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid481", tween: [ "style", "${_TentacleCopy3}", "left", '115px', { fromValue: '266px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid281", tween: [ "style", "${_FinsideBack}", "left", '182px', { fromValue: '407px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid572", tween: [ "style", "${_FinsideBack}", "left", '407px', { fromValue: '182px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1301", tween: [ "transform", "${_Shadow2Copy2}", "scaleY", '0.19642', { fromValue: '0.67'}], position: 0, duration: 1278 },
            { id: "eid1305", tween: [ "transform", "${_Shadow2Copy2}", "scaleY", '0.67', { fromValue: '0.19642'}], position: 1278, duration: 115 },
            { id: "eid295", tween: [ "style", "${_FinLowCopy2}", "left", '211px', { fromValue: '538px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid464", tween: [ "style", "${_FinLowCopy2}", "left", '538px', { fromValue: '211px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid302", tween: [ "style", "${_Tentacle}", "top", '297px', { fromValue: '244px'}], position: 0, duration: 244, easing: "easeInOutQuad" },
            { id: "eid491", tween: [ "style", "${_Tentacle}", "top", '244px', { fromValue: '297px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1285", tween: [ "style", "${_Shadow2Copy2}", "left", '45px', { fromValue: '90px'}], position: 0, duration: 370 },
            { id: "eid1287", tween: [ "style", "${_Shadow2Copy2}", "left", '84px', { fromValue: '45px'}], position: 370, duration: 370 },
            { id: "eid1289", tween: [ "style", "${_Shadow2Copy2}", "left", '51px', { fromValue: '84px'}], position: 740, duration: 254 },
            { id: "eid1302", tween: [ "style", "${_Shadow2Copy2}", "left", '17px', { fromValue: '51px'}], position: 994, duration: 284 },
            { id: "eid1306", tween: [ "style", "${_Shadow2Copy2}", "left", '90px', { fromValue: '17px'}], position: 1278, duration: 115 },
            { id: "eid265", tween: [ "transform", "${_FinsideTop}", "rotateZ", '-86deg', { fromValue: '0deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid476", tween: [ "transform", "${_FinsideTop}", "rotateZ", '0deg', { fromValue: '-86deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1286", tween: [ "style", "${_Shadow2Copy2}", "top", '385px', { fromValue: '351px'}], position: 0, duration: 370 },
            { id: "eid1288", tween: [ "style", "${_Shadow2Copy2}", "top", '388px', { fromValue: '385px'}], position: 370, duration: 370 },
            { id: "eid1290", tween: [ "style", "${_Shadow2Copy2}", "top", '386px', { fromValue: '388px'}], position: 740, duration: 254 },
            { id: "eid1303", tween: [ "style", "${_Shadow2Copy2}", "top", '382px', { fromValue: '386px'}], position: 994, duration: 284 },
            { id: "eid1304", tween: [ "style", "${_Shadow2Copy2}", "top", '351px', { fromValue: '382px'}], position: 1278, duration: 115 },
            { id: "eid292", tween: [ "transform", "${_FinLowCopy2}", "scaleY", '0.42361', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid461", tween: [ "transform", "${_FinLowCopy2}", "scaleY", '1', { fromValue: '0.42361'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid270", tween: [ "transform", "${_Body}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid474", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid262", tween: [ "style", "${_Head}", "top", '135px', { fromValue: '170px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid468", tween: [ "style", "${_Head}", "top", '170px', { fromValue: '135px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid412", tween: [ "style", "${_FinTopCopy2}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1278, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1323", tween: [ "style", "${_FinTopCopy2}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1278, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1324", tween: [ "style", "${_FinTopCopy2}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1278, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1325", tween: [ "style", "${_FinTopCopy2}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1278, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1326", tween: [ "style", "${_FinTopCopy2}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1278, duration: 0, easing: "easeInOutQuad" },
            { id: "eid956", tween: [ "transform", "${_Group3}", "scaleY", '0.7', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid957", tween: [ "transform", "${_Group3}", "scaleY", '0.67', { fromValue: '0.7'}], position: 370, duration: 547, easing: "easeInOutQuad" },
            { id: "eid403", tween: [ "transform", "${_Group3}", "scaleY", '0', { fromValue: '0.67'}], position: 917, duration: 175, easing: "easeInOutQuad" },
            { id: "eid501", tween: [ "transform", "${_Group3}", "scaleY", '1', { fromValue: '0'}], position: 1250, duration: 143, easing: "easeInOutQuad" },
            { id: "eid269", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '-43deg', { fromValue: '36deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid569", tween: [ "transform", "${_FinsideLowFront}", "rotateZ", '36deg', { fromValue: '-43deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid279", tween: [ "transform", "${_FinsideBack}", "rotateZ", '-110deg', { fromValue: '36deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid573", tween: [ "transform", "${_FinsideBack}", "rotateZ", '36deg', { fromValue: '-110deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid296", tween: [ "style", "${_FinLowCopy2}", "top", '265px', { fromValue: '280px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid460", tween: [ "style", "${_FinLowCopy2}", "top", '280px', { fromValue: '265px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid294", tween: [ "transform", "${_FinTopCopy2}", "scaleY", '0.42361', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid456", tween: [ "transform", "${_FinTopCopy2}", "scaleY", '1', { fromValue: '0.42361'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "transform", "${_Ink}", "scaleX", '1', { fromValue: '0'}], position: 816, duration: 262, easing: "easeInOutQuad" },
            { id: "eid298", tween: [ "style", "${_FinTopCopy2}", "top", '121px', { fromValue: '136px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid455", tween: [ "style", "${_FinTopCopy2}", "top", '136px', { fromValue: '121px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid297", tween: [ "style", "${_FinTopCopy2}", "left", '211px', { fromValue: '538px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid459", tween: [ "style", "${_FinTopCopy2}", "left", '538px', { fromValue: '211px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid267", tween: [ "style", "${_FinsideLowFront}", "left", '294px', { fromValue: '272px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid568", tween: [ "style", "${_FinsideLowFront}", "left", '272px', { fromValue: '294px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1049", tween: [ "style", "${_Ink}", "left", '55px', { fromValue: '0px'}], position: 816, duration: 262, easing: "easeInOutQuad" },
            { id: "eid306", tween: [ "transform", "${_TentacleCopy}", "rotateZ", '83deg', { fromValue: '0deg'}], position: 0, duration: 397, easing: "easeInOutQuad" },
            { id: "eid328", tween: [ "transform", "${_TentacleCopy}", "rotateZ", '90deg', { fromValue: '83deg'}], position: 397, duration: 233, easing: "easeInOutQuad" },
            { id: "eid333", tween: [ "transform", "${_TentacleCopy}", "rotateZ", '83deg', { fromValue: '90deg'}], position: 629, duration: 187, easing: "easeInOutQuad" },
            { id: "eid347", tween: [ "transform", "${_TentacleCopy}", "rotateZ", '99deg', { fromValue: '83deg'}], position: 816, duration: 215, easing: "easeInOutQuad" },
            { id: "eid348", tween: [ "transform", "${_TentacleCopy}", "rotateZ", '83deg', { fromValue: '99deg'}], position: 1031, duration: 204, easing: "easeInOutQuad" },
            { id: "eid489", tween: [ "transform", "${_TentacleCopy}", "rotateZ", '0deg', { fromValue: '83deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid260", tween: [ "transform", "${_Head}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid470", tween: [ "transform", "${_Head}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid370", tween: [ "style", "${_EyeCopy}", "clip", [0,45,23,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,45,44,0]}], position: 740, duration: 190, easing: "easeInOutQuad" },
            { id: "eid453", tween: [ "style", "${_EyeCopy}", "clip", [0,45,44,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,45,23,0]}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid324", tween: [ "transform", "${_TentacleCopy3}", "scaleX", '0.62156', { fromValue: '1'}], position: 370, duration: 433, easing: "easeInOutQuad" },
            { id: "eid335", tween: [ "transform", "${_TentacleCopy3}", "scaleX", '0.66579', { fromValue: '0.62156'}], position: 803, duration: 222, easing: "easeInQuad" },
            { id: "eid355", tween: [ "transform", "${_TentacleCopy3}", "scaleX", '1', { fromValue: '0.66579'}], position: 1025, duration: 210, easing: "easeOutQuad" },
            { id: "eid958", tween: [ "style", "${_Group3}", "left", '-23px', { fromValue: '-64px'}], position: 370, duration: 346, easing: "easeInQuad" },
            { id: "eid974", tween: [ "style", "${_Group3}", "left", '-69px', { fromValue: '-23px'}], position: 717, duration: 200, easing: "easeOutQuad" },
            { id: "eid511", tween: [ "style", "${_Group3}", "left", '-113px', { fromValue: '-69px'}], position: 917, duration: 175, easing: "easeInOutQuad" },
            { id: "eid513", tween: [ "style", "${_Group3}", "left", '-66px', { fromValue: '-113px'}], position: 1250, duration: 143, easing: "easeInOutQuad" },
            { id: "eid305", tween: [ "style", "${_TentacleCopy}", "left", '193px', { fromValue: '115px'}], position: 0, duration: 397, easing: "easeInOutQuad" },
            { id: "eid487", tween: [ "style", "${_TentacleCopy}", "left", '115px', { fromValue: '193px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid282", tween: [ "style", "${_FinsideBack}", "top", '177px', { fromValue: '282px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid571", tween: [ "style", "${_FinsideBack}", "top", '282px', { fromValue: '177px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid959", tween: [ "style", "${_Group3}", "top", '-32px', { fromValue: '-67px'}], position: 370, duration: 346, easing: "easeInQuad" },
            { id: "eid975", tween: [ "style", "${_Group3}", "top", '-28px', { fromValue: '-32px'}], position: 717, duration: 200, easing: "easeOutQuad" },
            { id: "eid512", tween: [ "style", "${_Group3}", "top", '41px', { fromValue: '-28px'}], position: 917, duration: 175, easing: "easeInOutQuad" },
            { id: "eid514", tween: [ "style", "${_Group3}", "top", '-50px', { fromValue: '41px'}], position: 1250, duration: 143, easing: "easeInOutQuad" },
            { id: "eid264", tween: [ "style", "${_FinsideTop}", "left", '258px', { fromValue: '258px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid570", tween: [ "style", "${_FinsideTop}", "left", '258px', { fromValue: '258px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid307", tween: [ "style", "${_TentacleCopy2}", "top", '247px', { fromValue: '244px'}], position: 0, duration: 376, easing: "easeInOutQuad" },
            { id: "eid485", tween: [ "style", "${_TentacleCopy2}", "top", '244px', { fromValue: '247px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid300", tween: [ "transform", "${_Tentacle}", "rotateZ", '113deg', { fromValue: '0deg'}], position: 0, duration: 244, easing: "easeInOutQuad" },
            { id: "eid327", tween: [ "transform", "${_Tentacle}", "rotateZ", '103deg', { fromValue: '113deg'}], position: 244, duration: 275, easing: "easeInOutQuad" },
            { id: "eid334", tween: [ "transform", "${_Tentacle}", "rotateZ", '113deg', { fromValue: '103deg'}], position: 519, duration: 221, easing: "easeInOutQuad" },
            { id: "eid344", tween: [ "transform", "${_Tentacle}", "rotateZ", '118deg', { fromValue: '113deg'}], position: 740, duration: 254, easing: "easeInOutQuad" },
            { id: "eid345", tween: [ "transform", "${_Tentacle}", "rotateZ", '113deg', { fromValue: '118deg'}], position: 994, duration: 241, easing: "easeInOutQuad" },
            { id: "eid492", tween: [ "transform", "${_Tentacle}", "rotateZ", '0deg', { fromValue: '113deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid326", tween: [ "transform", "${_TentacleCopy2}", "scaleX", '0.75124', { fromValue: '1'}], position: 376, duration: 429, easing: "easeInOutQuad" },
            { id: "eid336", tween: [ "transform", "${_TentacleCopy2}", "scaleX", '0.75713', { fromValue: '0.75124'}], position: 806, duration: 220, easing: "easeInQuad" },
            { id: "eid352", tween: [ "transform", "${_TentacleCopy2}", "scaleX", '1', { fromValue: '0.75713'}], position: 1026, duration: 209, easing: "easeOutQuad" },
            { id: "eid325", tween: [ "transform", "${_TentacleCopy}", "scaleX", '0.75124', { fromValue: '1'}], position: 397, duration: 419, easing: "easeInOutQuad" },
            { id: "eid337", tween: [ "transform", "${_TentacleCopy}", "scaleX", '0.68865', { fromValue: '0.75124'}], position: 816, duration: 215, easing: "easeInQuad" },
            { id: "eid349", tween: [ "transform", "${_TentacleCopy}", "scaleX", '1', { fromValue: '0.68865'}], position: 1031, duration: 204, easing: "easeOutQuad" },
            { id: "eid278", tween: [ "style", "${_EyeCopy}", "left", '241px', { fromValue: '158px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid452", tween: [ "style", "${_EyeCopy}", "left", '158px', { fromValue: '241px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid312", tween: [ "style", "${_TentacleCopy3}", "top", '267px', { fromValue: '244px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid480", tween: [ "style", "${_TentacleCopy3}", "top", '244px', { fromValue: '267px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid310", tween: [ "transform", "${_TentacleCopy2}", "rotateZ", '62deg', { fromValue: '0deg'}], position: 0, duration: 376, easing: "easeInOutQuad" },
            { id: "eid329", tween: [ "transform", "${_TentacleCopy2}", "rotateZ", '72deg', { fromValue: '62deg'}], position: 376, duration: 238, easing: "easeInOutQuad" },
            { id: "eid332", tween: [ "transform", "${_TentacleCopy2}", "rotateZ", '62deg', { fromValue: '72deg'}], position: 614, duration: 191, easing: "easeInOutQuad" },
            { id: "eid350", tween: [ "transform", "${_TentacleCopy2}", "rotateZ", '73deg', { fromValue: '62deg'}], position: 806, duration: 220, easing: "easeInOutQuad" },
            { id: "eid351", tween: [ "transform", "${_TentacleCopy2}", "rotateZ", '62deg', { fromValue: '73deg'}], position: 1026, duration: 209, easing: "easeInOutQuad" },
            { id: "eid486", tween: [ "transform", "${_TentacleCopy2}", "rotateZ", '0deg', { fromValue: '62deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid304", tween: [ "style", "${_TentacleCopy}", "top", '226px', { fromValue: '244px'}], position: 0, duration: 397, easing: "easeInOutQuad" },
            { id: "eid488", tween: [ "style", "${_TentacleCopy}", "top", '244px', { fromValue: '226px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid301", tween: [ "style", "${_Tentacle}", "left", '144px', { fromValue: '115px'}], position: 0, duration: 244, easing: "easeInOutQuad" },
            { id: "eid490", tween: [ "style", "${_Tentacle}", "left", '115px', { fromValue: '144px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid261", tween: [ "style", "${_Head}", "left", '161px', { fromValue: '101px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid469", tween: [ "style", "${_Head}", "left", '101px', { fromValue: '161px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid290", tween: [ "transform", "${_FinTopCopy2}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid374", tween: [ "transform", "${_FinTopCopy2}", "rotateZ", '97deg', { fromValue: '90deg'}], position: 717, duration: 110, easing: "easeInOutQuad" },
            { id: "eid457", tween: [ "transform", "${_FinTopCopy2}", "rotateZ", '0deg', { fromValue: '97deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid323", tween: [ "transform", "${_Tentacle}", "scaleX", '0.62156', { fromValue: '1'}], position: 244, duration: 495, easing: "easeInOutQuad" },
            { id: "eid338", tween: [ "transform", "${_Tentacle}", "scaleX", '0.68865', { fromValue: '0.62156'}], position: 740, duration: 254, easing: "easeInQuad" },
            { id: "eid346", tween: [ "transform", "${_Tentacle}", "scaleX", '1', { fromValue: '0.68865'}], position: 994, duration: 241, easing: "easeOutQuad" },
            { id: "eid1284", tween: [ "transform", "${_Shadow2Copy2}", "scaleX", '0.81107', { fromValue: '1.65798'}], position: 0, duration: 370 },
            { id: "eid1300", tween: [ "transform", "${_Shadow2Copy2}", "scaleX", '0.23778', { fromValue: '0.81107'}], position: 370, duration: 908 },
            { id: "eid1307", tween: [ "transform", "${_Shadow2Copy2}", "scaleX", '1.65798', { fromValue: '0.23778'}], position: 1278, duration: 115 },
            { id: "eid291", tween: [ "transform", "${_FinLowCopy2}", "scaleX", '0.42361', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid463", tween: [ "transform", "${_FinLowCopy2}", "scaleX", '1', { fromValue: '0.42361'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid1190", tween: [ "style", "${_Ink}", "top", '131px', { fromValue: '131px'}], position: 803, duration: 0, easing: "easeInOutQuad" },
            { id: "eid271", tween: [ "style", "${_Body}", "left", '236px', { fromValue: '107px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid473", tween: [ "style", "${_Body}", "left", '107px', { fromValue: '236px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid268", tween: [ "style", "${_FinsideLowFront}", "top", '184px', { fromValue: '320px'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid567", tween: [ "style", "${_FinsideLowFront}", "top", '320px', { fromValue: '184px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid309", tween: [ "style", "${_TentacleCopy2}", "left", '232px', { fromValue: '115px'}], position: 0, duration: 376, easing: "easeInOutQuad" },
            { id: "eid484", tween: [ "style", "${_TentacleCopy2}", "left", '115px', { fromValue: '232px'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid293", tween: [ "transform", "${_FinTopCopy2}", "scaleX", '0.42361', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid458", tween: [ "transform", "${_FinTopCopy2}", "scaleX", '1', { fromValue: '0.42361'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid274", tween: [ "transform", "${_Body}", "scaleX", '0.39817', { fromValue: '1'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid472", tween: [ "transform", "${_Body}", "scaleX", '1', { fromValue: '0.39817'}], position: 1278, duration: 115, easing: "easeInOutQuad" },
            { id: "eid289", tween: [ "transform", "${_FinLowCopy2}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 370, easing: "easeInOutQuad" },
            { id: "eid375", tween: [ "transform", "${_FinLowCopy2}", "rotateZ", '97deg', { fromValue: '90deg'}], position: 717, duration: 110, easing: "easeInOutQuad" },
            { id: "eid462", tween: [ "transform", "${_FinLowCopy2}", "rotateZ", '0deg', { fromValue: '97deg'}], position: 1278, duration: 115, easing: "easeInOutQuad" }         ]
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
      rect: ['151px','421px','307px','100px','auto','auto'],
      id: 'Shadow2Copy',
      transform: [[],[],[],['1.65798','0.67']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Shadow2.svg','0px','0px']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['107','-25','517','415','auto','auto'],
      c: [
      {
         rect: ['284px','357px','86px','45px','auto','auto'],
         id: 'FinsideBackCopy',
         transform: [[],['36']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         rect: ['151px','170px','116px','61px','auto','auto'],
         id: 'FinsideTopCopy',
         transform: [[],[],[],['1.5']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'BodyCopy',
         type: 'image',
         rect: ['0px','195px','437px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body.svg','0px','0px']
      },
      {
         id: 'HeadCopy',
         type: 'image',
         rect: ['-6px','193px','149px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Head.svg','0px','0px']
      },
      {
         rect: ['149px','396px','86px','45px','auto','auto'],
         id: 'FinsideLowFrontCopy2',
         transform: [[],['36']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'FinsideCopy5',
         type: 'image',
         rect: ['187px','272px','116px','61px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Finside.svg','0px','0px']
      },
      {
         id: 'FinLowCopy4',
         type: 'image',
         rect: ['431px','305px','72px','144px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/FinLow.svg','0px','0px']
      },
      {
         id: 'FinTopCopy4',
         type: 'image',
         rect: ['431px','161px','72px','144px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/FinTop.svg','0px','0px']
      },
      {
         id: 'EyeCopy2',
         type: 'image',
         rect: ['134px','232px','45px','45px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Eye.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_FinsideLowFrontCopy2}": [
            ["style", "top", '345px'],
            ["transform", "rotateZ", '36deg'],
            ["style", "height", '45px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '165px'],
            ["style", "width", '86px']
         ],
         "${_Shadow2Copy}": [
            ["style", "top", '421px'],
            ["transform", "scaleX", '1.65798'],
            ["transform", "scaleY", '0.67'],
            ["style", "left", '151px']
         ],
         "${_FinsideTopCopy}": [
            ["style", "top", '170px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.5'],
            ["style", "left", '151px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_HeadCopy}": [
            ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-6px'],
            ["style", "top", '195px']
         ],
         "${_Group}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '107px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-25px']
         ],
         "${_FinsideCopy5}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '187px'],
            ["style", "top", '272px']
         ],
         "${_FinsideBackCopy}": [
            ["style", "top", '307px'],
            ["transform", "rotateZ", '36deg'],
            ["style", "height", '45px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '300px'],
            ["style", "width", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '679px'],
            ["style", "width", '610px']
         ],
         "${_BodyCopy}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '195px']
         ],
         "${_FinLowCopy4}": [
            ["style", "top", '305px'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '431px'],
            ["transform", "scaleY", '1']
         ],
         "${_EyeCopy2}": [
            ["style", "top", '232px'],
            ["style", "left", '51px'],
            ["style", "clip", [0,45,44,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '0deg']
         ],
         "${_FinTopCopy4}": [
            ["style", "top", '161px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '431px'],
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
         duration: 1932,
         autoPlay: false,
         timeline: [
            { id: "eid678", tween: [ "style", "${_EyeCopy2}", "left", '164px', { fromValue: '51px'}], position: 0, duration: 285, easing: "easeInQuad" },
            { id: "eid694", tween: [ "style", "${_EyeCopy2}", "left", '233px', { fromValue: '164px'}], position: 285, duration: 118, easing: "easeInOutQuad" },
            { id: "eid696", tween: [ "style", "${_EyeCopy2}", "left", '62px', { fromValue: '233px'}], position: 402, duration: 118, easing: "easeOutQuad" },
            { id: "eid748", tween: [ "style", "${_EyeCopy2}", "left", '250px', { fromValue: '62px'}], position: 520, duration: 470, easing: "easeInOutQuad" },
            { id: "eid763", tween: [ "style", "${_EyeCopy2}", "left", '62px', { fromValue: '250px'}], position: 990, duration: 470, easing: "easeInOutQuad" },
            { id: "eid776", tween: [ "style", "${_EyeCopy2}", "left", '233px', { fromValue: '62px'}], position: 1460, duration: 118, easing: "easeOutQuad" },
            { id: "eid775", tween: [ "style", "${_EyeCopy2}", "left", '164px', { fromValue: '233px'}], position: 1577, duration: 118, easing: "easeInOutQuad" },
            { id: "eid774", tween: [ "style", "${_EyeCopy2}", "left", '51px', { fromValue: '164px'}], position: 1695, duration: 235, easing: "easeInQuad" },
            { id: "eid754", tween: [ "transform", "${_FinsideCopy5}", "scaleX", '-1', { fromValue: '1'}], position: 520, duration: 470, easing: "easeInOutQuad" },
            { id: "eid760", tween: [ "transform", "${_FinsideCopy5}", "scaleX", '1', { fromValue: '-1'}], position: 990, duration: 470, easing: "easeInOutQuad" },
            { id: "eid679", tween: [ "style", "${_EyeCopy2}", "top", '214px', { fromValue: '232px'}], position: 0, duration: 285, easing: "easeInQuad" },
            { id: "eid695", tween: [ "style", "${_EyeCopy2}", "top", '80px', { fromValue: '214px'}], position: 285, duration: 118, easing: "easeInOutQuad" },
            { id: "eid697", tween: [ "style", "${_EyeCopy2}", "top", '8px', { fromValue: '80px'}], position: 402, duration: 118, easing: "easeOutQuad" },
            { id: "eid756", tween: [ "style", "${_EyeCopy2}", "top", '2px', { fromValue: '8px'}], position: 520, duration: 470, easing: "easeInOutQuad" },
            { id: "eid764", tween: [ "style", "${_EyeCopy2}", "top", '8px', { fromValue: '2px'}], position: 990, duration: 470, easing: "easeInOutQuad" },
            { id: "eid779", tween: [ "style", "${_EyeCopy2}", "top", '80px', { fromValue: '8px'}], position: 1460, duration: 118, easing: "easeOutQuad" },
            { id: "eid778", tween: [ "style", "${_EyeCopy2}", "top", '214px', { fromValue: '80px'}], position: 1577, duration: 118, easing: "easeInOutQuad" },
            { id: "eid777", tween: [ "style", "${_EyeCopy2}", "top", '232px', { fromValue: '214px'}], position: 1695, duration: 235, easing: "easeInQuad" },
            { id: "eid688", tween: [ "style", "${_FinsideBackCopy}", "left", '431px', { fromValue: '300px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid800", tween: [ "style", "${_FinsideBackCopy}", "left", '300px', { fromValue: '431px'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid677", tween: [ "style", "${_FinsideCopy5}", "top", '184px', { fromValue: '272px'}], position: 0, duration: 285, easing: "easeInQuad" },
            { id: "eid681", tween: [ "style", "${_FinsideCopy5}", "top", '0px', { fromValue: '184px'}], position: 285, duration: 235, easing: "easeOutQuad" },
            { id: "eid755", tween: [ "style", "${_FinsideCopy5}", "top", '-6px', { fromValue: '0px'}], position: 520, duration: 470, easing: "easeInOutQuad" },
            { id: "eid761", tween: [ "style", "${_FinsideCopy5}", "top", '0px', { fromValue: '-6px'}], position: 990, duration: 470, easing: "easeInOutQuad" },
            { id: "eid785", tween: [ "style", "${_FinsideCopy5}", "top", '184px', { fromValue: '0px'}], position: 1460, duration: 235, easing: "easeOutQuad" },
            { id: "eid786", tween: [ "style", "${_FinsideCopy5}", "top", '272px', { fromValue: '184px'}], position: 1695, duration: 235, easing: "easeInQuad" },
            { id: "eid687", tween: [ "transform", "${_FinsideBackCopy}", "rotateZ", '0deg', { fromValue: '36deg'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid801", tween: [ "transform", "${_FinsideBackCopy}", "rotateZ", '36deg', { fromValue: '0deg'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid683", tween: [ "style", "${_FinsideLowFrontCopy2}", "left", '148px', { fromValue: '165px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid794", tween: [ "style", "${_FinsideLowFrontCopy2}", "left", '165px', { fromValue: '148px'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid715", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 125, easing: "easeInOutQuad" },
            { id: "eid718", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '-1', { fromValue: '0'}], position: 625, duration: 125, easing: "easeInOutQuad" },
            { id: "eid725", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '0', { fromValue: '-1'}], position: 750, duration: 125, easing: "easeInOutQuad" },
            { id: "eid724", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '1', { fromValue: '0'}], position: 875, duration: 125, easing: "easeInOutQuad" },
            { id: "eid728", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '0', { fromValue: '1'}], position: 1000, duration: 125, easing: "easeInOutQuad" },
            { id: "eid729", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '-1', { fromValue: '0'}], position: 1125, duration: 125, easing: "easeInOutQuad" },
            { id: "eid730", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '0', { fromValue: '-1'}], position: 1250, duration: 125, easing: "easeInOutQuad" },
            { id: "eid731", tween: [ "transform", "${_FinTopCopy4}", "scaleY", '1', { fromValue: '0'}], position: 1375, duration: 125, easing: "easeInOutQuad" },
            { id: "eid710", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 125, easing: "easeInOutQuad" },
            { id: "eid719", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '-1', { fromValue: '0'}], position: 625, duration: 125, easing: "easeInOutQuad" },
            { id: "eid727", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '0', { fromValue: '-1'}], position: 750, duration: 125, easing: "easeInOutQuad" },
            { id: "eid726", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '1', { fromValue: '0'}], position: 875, duration: 125, easing: "easeInOutQuad" },
            { id: "eid732", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '0', { fromValue: '1'}], position: 1000, duration: 125, easing: "easeInOutQuad" },
            { id: "eid733", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '-1', { fromValue: '0'}], position: 1125, duration: 125, easing: "easeInOutQuad" },
            { id: "eid734", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '0', { fromValue: '-1'}], position: 1250, duration: 125, easing: "easeInOutQuad" },
            { id: "eid735", tween: [ "transform", "${_FinLowCopy4}", "scaleY", '1', { fromValue: '0'}], position: 1375, duration: 125, easing: "easeInOutQuad" },
            { id: "eid682", tween: [ "transform", "${_FinsideLowFrontCopy2}", "rotateZ", '180deg', { fromValue: '36deg'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid795", tween: [ "transform", "${_FinsideLowFrontCopy2}", "rotateZ", '36deg', { fromValue: '180deg'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid1068", tween: [ "style", "${_Group}", "left", '82px', { fromValue: '107px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid1070", tween: [ "style", "${_Group}", "left", '63px', { fromValue: '82px'}], position: 285, duration: 347, easing: "easeInOutQuad" },
            { id: "eid1071", tween: [ "style", "${_Group}", "left", '81px', { fromValue: '63px'}], position: 632, duration: 246, easing: "easeInOutQuad" },
            { id: "eid1073", tween: [ "style", "${_Group}", "left", '61px', { fromValue: '81px'}], position: 878, duration: 169, easing: "easeInOutQuad" },
            { id: "eid1076", tween: [ "style", "${_Group}", "left", '75px', { fromValue: '61px'}], position: 1047, duration: 222, easing: "easeInOutQuad" },
            { id: "eid1078", tween: [ "style", "${_Group}", "left", '63px', { fromValue: '75px'}], position: 1269, duration: 179, easing: "easeInOutQuad" },
            { id: "eid1079", tween: [ "style", "${_Group}", "left", '79px', { fromValue: '63px'}], position: 1447, duration: 162, easing: "easeInOutQuad" },
            { id: "eid1081", tween: [ "style", "${_Group}", "left", '107px', { fromValue: '79px'}], position: 1609, duration: 321, easing: "easeInOutQuad" },
            { id: "eid670", tween: [ "transform", "${_HeadCopy}", "scaleY", '0.48322', { fromValue: '1'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid812", tween: [ "transform", "${_HeadCopy}", "scaleY", '1', { fromValue: '0.48322'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid672", tween: [ "transform", "${_FinsideTopCopy}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 142, duration: 142, easing: "easeInOutQuad" },
            { id: "eid1088", tween: [ "transform", "${_FinsideTopCopy}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 1577, duration: 178, easing: "easeInOutQuad" },
            { id: "eid684", tween: [ "style", "${_FinsideLowFrontCopy2}", "top", '282px', { fromValue: '345px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid793", tween: [ "style", "${_FinsideLowFrontCopy2}", "top", '345px', { fromValue: '282px'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid671", tween: [ "style", "${_HeadCopy}", "left", '83px', { fromValue: '-6px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid811", tween: [ "style", "${_HeadCopy}", "left", '-6px', { fromValue: '83px'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid668", tween: [ "transform", "${_HeadCopy}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid813", tween: [ "transform", "${_HeadCopy}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid1067", tween: [ "style", "${_Group}", "top", '29px', { fromValue: '-25px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid1069", tween: [ "style", "${_Group}", "top", '19px', { fromValue: '29px'}], position: 285, duration: 347, easing: "easeInOutQuad" },
            { id: "eid1072", tween: [ "style", "${_Group}", "top", '28px', { fromValue: '19px'}], position: 632, duration: 246, easing: "easeInOutQuad" },
            { id: "eid1074", tween: [ "style", "${_Group}", "top", '23px', { fromValue: '28px'}], position: 878, duration: 169, easing: "easeInOutQuad" },
            { id: "eid1075", tween: [ "style", "${_Group}", "top", '30px', { fromValue: '23px'}], position: 1047, duration: 222, easing: "easeInOutQuad" },
            { id: "eid1077", tween: [ "style", "${_Group}", "top", '21px', { fromValue: '30px'}], position: 1269, duration: 179, easing: "easeInOutQuad" },
            { id: "eid1080", tween: [ "style", "${_Group}", "top", '23px', { fromValue: '21px'}], position: 1447, duration: 162, easing: "easeInOutQuad" },
            { id: "eid1082", tween: [ "style", "${_Group}", "top", '-25px', { fromValue: '23px'}], position: 1609, duration: 321, easing: "easeInOutQuad" },
            { id: "eid676", tween: [ "style", "${_FinsideCopy5}", "left", '318px', { fromValue: '187px'}], position: 0, duration: 285, easing: "easeInQuad" },
            { id: "eid680", tween: [ "style", "${_FinsideCopy5}", "left", '178px', { fromValue: '318px'}], position: 285, duration: 235, easing: "easeOutQuad" },
            { id: "eid752", tween: [ "style", "${_FinsideCopy5}", "left", '179px', { fromValue: '178px'}], position: 520, duration: 470, easing: "easeInOutQuad" },
            { id: "eid762", tween: [ "style", "${_FinsideCopy5}", "left", '178px', { fromValue: '179px'}], position: 990, duration: 470, easing: "easeInOutQuad" },
            { id: "eid788", tween: [ "style", "${_FinsideCopy5}", "left", '318px', { fromValue: '178px'}], position: 1460, duration: 235, easing: "easeOutQuad" },
            { id: "eid787", tween: [ "style", "${_FinsideCopy5}", "left", '187px', { fromValue: '318px'}], position: 1695, duration: 235, easing: "easeInQuad" },
            { id: "eid669", tween: [ "transform", "${_HeadCopy}", "scaleX", '0.48322', { fromValue: '1'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid810", tween: [ "transform", "${_HeadCopy}", "scaleX", '1', { fromValue: '0.48322'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid673", tween: [ "style", "${_FinsideTopCopy}", "left", '179px', { fromValue: '151px'}], position: 142, duration: 142, easing: "easeInOutQuad" },
            { id: "eid1087", tween: [ "style", "${_FinsideTopCopy}", "left", '151px', { fromValue: '179px'}], position: 1577, duration: 178, easing: "easeInOutQuad" },
            { id: "eid674", tween: [ "style", "${_FinsideTopCopy}", "top", '165px', { fromValue: '170px'}], position: 142, duration: 142, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_FinsideTopCopy}", "top", '170px', { fromValue: '165px'}], position: 1577, duration: 178, easing: "easeInOutQuad" },
            { id: "eid689", tween: [ "style", "${_FinsideBackCopy}", "top", '282px', { fromValue: '307px'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid799", tween: [ "style", "${_FinsideBackCopy}", "top", '307px', { fromValue: '282px'}], position: 1577, duration: 355, easing: "easeInOutQuad" },
            { id: "eid675", tween: [ "transform", "${_FinsideCopy5}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 0, duration: 285, easing: "easeInOutQuad" },
            { id: "eid789", tween: [ "transform", "${_FinsideCopy5}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1460, duration: 470, easing: "easeInOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-529531224");
