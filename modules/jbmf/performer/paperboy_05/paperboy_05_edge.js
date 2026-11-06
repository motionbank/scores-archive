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
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '1100px'],
            ["style", "width", '1000px']
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
},
"rect_to_top_back": {
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
      id: 'TileTexture',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      rect: ['1px','0px','149px','134px','auto','auto'],
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,102,102,1)']
   }],
   symbolInstances: [
   {
      id: 'TileTexture',
      symbolName: 'TileTexture'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '150px'],
            ["style", "top", '-150px'],
            ["transform", "scaleY", '-1'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '150px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_TileTexture}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-1'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '-150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 126,
         autoPlay: false,
         timeline: [
            { id: "eid4482", tween: [ "style", "${_TileTexture}", "top", '-150px', { fromValue: '-150px'}], position: 0, duration: 0 },
            { id: "eid4484", tween: [ "transform", "${_Rectangle7}", "scaleY", '0', { fromValue: '-1'}], position: 0, duration: 63 },
            { id: "eid4485", tween: [ "transform", "${_Rectangle7}", "scaleY", '1', { fromValue: '0'}], position: 63, duration: 63 },
            { id: "eid4489", tween: [ "transform", "${_Rectangle7}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid4128", tween: [ "transform", "${_TileTexture}", "scaleY", '0', { fromValue: '-1'}], position: 0, duration: 63 },
            { id: "eid4129", tween: [ "transform", "${_TileTexture}", "scaleY", '1', { fromValue: '0'}], position: 63, duration: 63 },
            { id: "eid5501", tween: [ "style", "${_Rectangle7}", "width", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid5502", tween: [ "style", "${_Rectangle7}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4127", tween: [ "style", "${_TileTexture}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8007", tween: [ "style", "${_TileTexture}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8008", tween: [ "style", "${_TileTexture}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8009", tween: [ "style", "${_TileTexture}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8010", tween: [ "style", "${_TileTexture}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid5500", tween: [ "style", "${_Rectangle7}", "height", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4483", tween: [ "style", "${_Rectangle7}", "top", '-150px', { fromValue: '-150px'}], position: 0, duration: 0 },
            { id: "eid4480", tween: [ "transform", "${_TileTexture}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid4490", tween: [ "style", "${_Rectangle7}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8011", tween: [ "style", "${_Rectangle7}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8012", tween: [ "style", "${_Rectangle7}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8013", tween: [ "style", "${_Rectangle7}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid8014", tween: [ "style", "${_Rectangle7}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 0, duration: 0 },
            { id: "eid4492", tween: [ "style", "${_Rectangle7}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 125 },
            { id: "eid4130", tween: [ "transform", "${_TileTexture}", "skewX", '89deg', { fromValue: '0deg'}], position: 0, duration: 63 },
            { id: "eid4131", tween: [ "transform", "${_TileTexture}", "skewX", '-86.4deg', { fromValue: '89deg'}], position: 63, duration: 2 },
            { id: "eid4132", tween: [ "transform", "${_TileTexture}", "skewX", '0deg', { fromValue: '-86.4deg'}], position: 65, duration: 61 },
            { id: "eid4486", tween: [ "transform", "${_Rectangle7}", "skewX", '89deg', { fromValue: '0deg'}], position: 0, duration: 63 },
            { id: "eid4487", tween: [ "transform", "${_Rectangle7}", "skewX", '-86.4deg', { fromValue: '89deg'}], position: 63, duration: 2 },
            { id: "eid4488", tween: [ "transform", "${_Rectangle7}", "skewX", '0deg', { fromValue: '-86.4deg'}], position: 65, duration: 61 }         ]
      }
   }
},
"rect_to_right_back": {
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
      id: 'TileTexture',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['1px','1px','149px','134px','auto','auto'],
      fill: ['rgba(102,102,102,1)']
   }],
   symbolInstances: [
   {
      id: 'TileTexture',
      symbolName: 'TileTexture'
   }   ]
   },
   states: {
      "Base State": {
         "${_TileTexture}": [
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '150px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle4}": [
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["transform", "skewY", '0deg'],
            ["style", "height", '150px'],
            ["transform", "scaleX", '-1'],
            ["style", "opacity", '1'],
            ["style", "left", '150px'],
            ["style", "width", '150px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 125,
         autoPlay: false,
         timeline: [
            { id: "eid5472", tween: [ "style", "${_TileTexture}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid5471", tween: [ "style", "${_Rectangle4}", "width", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4234", tween: [ "transform", "${_Rectangle4}", "skewY", '21deg', { fromValue: '0deg'}], position: 0, duration: 62 },
            { id: "eid4235", tween: [ "transform", "${_Rectangle4}", "skewY", '-19.53deg', { fromValue: '21deg'}], position: 62, duration: 4 },
            { id: "eid4236", tween: [ "transform", "${_Rectangle4}", "skewY", '0deg', { fromValue: '-19.53deg'}], position: 67, duration: 58 },
            { id: "eid4232", tween: [ "transform", "${_Rectangle4}", "scaleX", '0', { fromValue: '-1'}], position: 0, duration: 62 },
            { id: "eid4233", tween: [ "transform", "${_Rectangle4}", "scaleX", '1', { fromValue: '0'}], position: 62, duration: 62 },
            { id: "eid4110", tween: [ "style", "${_TileTexture}", "left", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4224", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 125 },
            { id: "eid5470", tween: [ "style", "${_Rectangle4}", "height", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4237", tween: [ "style", "${_Rectangle4}", "left", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4108", tween: [ "transform", "${_TileTexture}", "scaleX", '0', { fromValue: '-1'}], position: 0, duration: 62 },
            { id: "eid4109", tween: [ "transform", "${_TileTexture}", "scaleX", '1', { fromValue: '0'}], position: 62, duration: 62 },
            { id: "eid4238", tween: [ "style", "${_Rectangle4}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8015", tween: [ "style", "${_Rectangle4}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8016", tween: [ "style", "${_Rectangle4}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8017", tween: [ "style", "${_Rectangle4}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8018", tween: [ "style", "${_Rectangle4}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid4105", tween: [ "transform", "${_TileTexture}", "skewY", '21deg', { fromValue: '0deg'}], position: 0, duration: 62 },
            { id: "eid4106", tween: [ "transform", "${_TileTexture}", "skewY", '-19.53deg', { fromValue: '21deg'}], position: 62, duration: 4 },
            { id: "eid4107", tween: [ "transform", "${_TileTexture}", "skewY", '0deg', { fromValue: '-19.53deg'}], position: 67, duration: 58 },
            { id: "eid5475", tween: [ "style", "${_Rectangle4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4104", tween: [ "style", "${_TileTexture}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8019", tween: [ "style", "${_TileTexture}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8020", tween: [ "style", "${_TileTexture}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8021", tween: [ "style", "${_TileTexture}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid8022", tween: [ "style", "${_TileTexture}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 }         ]
      }
   }
},
"rect_to_left_back": {
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
      id: 'TileTexture',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      rect: ['0px','1px','149px','134px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,102,102,1)']
   }],
   symbolInstances: [
   {
      id: 'TileTexture',
      symbolName: 'TileTexture'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["transform", "skewY", '0deg'],
            ["style", "height", '150px'],
            ["transform", "scaleX", '-1'],
            ["style", "opacity", '1'],
            ["style", "left", '-150px'],
            ["style", "width", '150px']
         ],
         "${_TileTexture}": [
            ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '-150px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 125,
         autoPlay: false,
         timeline: [
            { id: "eid5473", tween: [ "style", "${_TileTexture}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4194", tween: [ "transform", "${_Rectangle3}", "scaleX", '0', { fromValue: '-1'}], position: 0, duration: 62 },
            { id: "eid4195", tween: [ "transform", "${_Rectangle3}", "scaleX", '1', { fromValue: '0'}], position: 62, duration: 62 },
            { id: "eid4202", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 125 },
            { id: "eid5420", tween: [ "style", "${_Rectangle3}", "height", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4196", tween: [ "transform", "${_Rectangle3}", "skewY", '-21deg', { fromValue: '0deg'}], position: 0, duration: 62 },
            { id: "eid4197", tween: [ "transform", "${_Rectangle3}", "skewY", '19.66deg', { fromValue: '-21deg'}], position: 62, duration: 4 },
            { id: "eid4198", tween: [ "transform", "${_Rectangle3}", "skewY", '0deg', { fromValue: '19.66deg'}], position: 66, duration: 59 },
            { id: "eid5474", tween: [ "style", "${_Rectangle3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid4087", tween: [ "style", "${_TileTexture}", "left", '-150px', { fromValue: '-150px'}], position: 0, duration: 0 },
            { id: "eid4081", tween: [ "style", "${_TileTexture}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8023", tween: [ "style", "${_TileTexture}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8024", tween: [ "style", "${_TileTexture}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8025", tween: [ "style", "${_TileTexture}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8026", tween: [ "style", "${_TileTexture}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid4085", tween: [ "transform", "${_TileTexture}", "scaleX", '0', { fromValue: '-1'}], position: 0, duration: 62 },
            { id: "eid4086", tween: [ "transform", "${_TileTexture}", "scaleX", '1', { fromValue: '0'}], position: 62, duration: 62 },
            { id: "eid4200", tween: [ "style", "${_Rectangle3}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8027", tween: [ "style", "${_Rectangle3}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8028", tween: [ "style", "${_Rectangle3}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8029", tween: [ "style", "${_Rectangle3}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid8030", tween: [ "style", "${_Rectangle3}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid4082", tween: [ "transform", "${_TileTexture}", "skewY", '-21deg', { fromValue: '0deg'}], position: 0, duration: 62 },
            { id: "eid4083", tween: [ "transform", "${_TileTexture}", "skewY", '19.66deg', { fromValue: '-21deg'}], position: 62, duration: 4 },
            { id: "eid4084", tween: [ "transform", "${_TileTexture}", "skewY", '0deg', { fromValue: '19.66deg'}], position: 66, duration: 59 },
            { id: "eid5416", tween: [ "style", "${_Rectangle3}", "width", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid4199", tween: [ "style", "${_Rectangle3}", "left", '-150px', { fromValue: '-150px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Front": {
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
      rect: ['0px','0px','347px','286px','auto','auto'],
      id: 'Front',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(145,145,145,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Front}": [
            ["color", "background-color", 'rgba(145,145,145,0.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '286px'],
            ["style", "width", '347px']
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
},
"Back": {
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
      id: 'Back',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','422px','354px','auto','auto'],
      fill: ['rgba(145,145,145,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Back}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '354px'],
            ["style", "width", '422px']
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
},
"Base": {
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
      type: 'image',
      id: 'shadow-28',
      rect: ['-114px','94px','377px','87px','auto','auto'],
      transform: [[0,0],[],[],['1','0.32269']],
      fill: ['rgba(0,0,0,0)','images/shadow-28.svg','0px','0px']
   },
   {
      id: 'BG',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'tiles-212',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles-21.svg','0px','0px']
   },
   {
      id: 'gradient-292',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gradient-29.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'BG',
      symbolName: 'BG'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_shadow-28}": [
            ["style", "top", '94px'],
            ["style", "left", '-114px'],
            ["transform", "scaleY", '0.32269']
         ],
         "${_tiles-212}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_gradient-292}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 39,
         autoPlay: true,
         timeline: [
            { id: "eid6260", tween: [ "style", "${_gradient-292}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid6261", tween: [ "style", "${_gradient-292}", "opacity", '1', { fromValue: '1'}], position: 39, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"TileTexture": {
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
      id: 'BG2',
      type: 'rect',
      rect: ['17px','22px','auto','auto','auto','auto']
   },
   {
      id: 'tile__',
      type: 'image',
      rect: ['0px','0px','149px','134px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tile__.svg','0px','0px']
   },
   {
      id: 'tile-09',
      type: 'image',
      rect: ['0px','0px','149px','134px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tile-09.svg','0px','0px']
   },
   {
      id: 'rag_angle',
      type: 'rect',
      rect: ['202','97','auto','auto','auto','auto']
   },
   {
      id: 'rag_straight_ver',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'rag_straight_hor',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'rag_straight_hor2',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'rag_hand_top',
      type: 'rect',
      rect: ['158','39','auto','auto','auto','auto']
   },
   {
      id: 'rag_hand_left',
      type: 'rect',
      rect: ['158','39','auto','auto','auto','auto']
   },
   {
      id: 'rag_hand_right',
      type: 'rect',
      rect: ['158','39','auto','auto','auto','auto']
   },
   {
      id: 'gradient-29',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gradient-29.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'rag_hand_right',
      symbolName: 'rag_end'
   },
   {
      id: 'rag_hand_left',
      symbolName: 'rag_end'
   },
   {
      id: 'BG2',
      symbolName: 'BG'
   },
   {
      id: 'rag_straight_hor',
      symbolName: 'rag_straight'
   },
   {
      id: 'rag_hand_top',
      symbolName: 'rag_end'
   },
   {
      id: 'rag_straight_hor2',
      symbolName: 'rag_straight'
   },
   {
      id: 'rag_straight_ver',
      symbolName: 'rag_straight'
   },
   {
      id: 'rag_angle',
      symbolName: 'rag_angle'
   }   ]
   },
   states: {
      "Base State": {
         "${_rag_hand_left}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_rag_straight_hor}": [
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '0']
         ],
         "${_rag_hand_right}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_rag_angle}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${_rag_straight_ver}": [
            ["style", "opacity", '1']
         ],
         "${_tile-09}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_rag_hand_top}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_tile__}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_BG2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_rag_straight_hor2}": [
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_gradient-29}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 684,
         autoPlay: false,
         labels: {
            "bottomToTop": 0,
            "bottomToRight": 79,
            "bottomToLeft": 167,
            "leftToRight": 250,
            "leftToTop": 315,
            "rightToLeft": 380,
            "rightToTop": 456,
            "endLeft": 544,
            "endRight": 612,
            "endTop": 684
         },
         timeline: [
            { id: "eid5579", tween: [ "style", "${_rag_hand_top}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5580", tween: [ "style", "${_rag_hand_top}", "opacity", '1', { fromValue: '0'}], position: 684, duration: 0 },
            { id: "eid5621", tween: [ "transform", "${_rag_straight_hor}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 250, duration: 0 },
            { id: "eid5581", tween: [ "style", "${_rag_hand_left}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5582", tween: [ "style", "${_rag_hand_left}", "opacity", '1', { fromValue: '1'}], position: 544, duration: 0 },
            { id: "eid5583", tween: [ "style", "${_rag_hand_left}", "opacity", '0', { fromValue: '0.33505097517731'}], position: 612, duration: 0 },
            { id: "eid5584", tween: [ "transform", "${_rag_hand_left}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 544, duration: 0 },
            { id: "eid5658", tween: [ "transform", "${_rag_angle}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 79, duration: 0 },
            { id: "eid5689", tween: [ "transform", "${_rag_angle}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 167, duration: 0 },
            { id: "eid5692", tween: [ "transform", "${_rag_angle}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 315, duration: 0 },
            { id: "eid5695", tween: [ "transform", "${_rag_angle}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 456, duration: 0 },
            { id: "eid6347", tween: [ "style", "${_BG2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid6346", tween: [ "style", "${_BG2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid5585", tween: [ "transform", "${_rag_hand_right}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 544, duration: 0 },
            { id: "eid5589", tween: [ "transform", "${_rag_hand_right}", "rotateZ", '270deg', { fromValue: '90deg'}], position: 612, duration: 0 },
            { id: "eid5614", tween: [ "style", "${_rag_straight_ver}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid5615", tween: [ "style", "${_rag_straight_ver}", "opacity", '0', { fromValue: '1'}], position: 79, duration: 0 },
            { id: "eid5662", tween: [ "style", "${_rag_angle}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5663", tween: [ "style", "${_rag_angle}", "opacity", '1', { fromValue: '0'}], position: 79, duration: 0 },
            { id: "eid5664", tween: [ "style", "${_rag_angle}", "opacity", '1', { fromValue: '1'}], position: 167, duration: 0 },
            { id: "eid5690", tween: [ "style", "${_rag_angle}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 0 },
            { id: "eid5691", tween: [ "style", "${_rag_angle}", "opacity", '1', { fromValue: '0'}], position: 315, duration: 0 },
            { id: "eid5693", tween: [ "style", "${_rag_angle}", "opacity", '0', { fromValue: '1'}], position: 380, duration: 0 },
            { id: "eid5694", tween: [ "style", "${_rag_angle}", "opacity", '1', { fromValue: '0'}], position: 456, duration: 0 },
            { id: "eid5696", tween: [ "style", "${_rag_angle}", "opacity", '0', { fromValue: '1'}], position: 544, duration: 0 },
            { id: "eid5627", tween: [ "style", "${_rag_straight_hor2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5628", tween: [ "style", "${_rag_straight_hor2}", "opacity", '1', { fromValue: '0'}], position: 380, duration: 0 },
            { id: "eid5629", tween: [ "style", "${_rag_straight_hor2}", "opacity", '0', { fromValue: '1'}], position: 445, duration: 0 },
            { id: "eid5618", tween: [ "style", "${_rag_straight_hor}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5619", tween: [ "style", "${_rag_straight_hor}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "eid5620", tween: [ "style", "${_rag_straight_hor}", "opacity", '0', { fromValue: '1'}], position: 315, duration: 0 },
            { id: "eid5586", tween: [ "style", "${_rag_hand_right}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5587", tween: [ "style", "${_rag_hand_right}", "opacity", '1', { fromValue: '0'}], position: 612, duration: 0 },
            { id: "eid5588", tween: [ "style", "${_rag_hand_right}", "opacity", '0', { fromValue: '1'}], position: 684, duration: 0 }         ]
      }
   }
},
"rag_end": {
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
      id: 'rag_hand',
      type: 'rect',
      rect: ['-30','-22','auto','auto','auto','auto']
   },
   {
      id: 'end_mouth',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'end_rocket',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'end_rocket',
      symbolName: 'end_rocket'
   },
   {
      id: 'end_mouth',
      symbolName: 'end_mouth'
   },
   {
      id: 'rag_hand',
      symbolName: 'end_hand'
   }   ]
   },
   states: {
      "Base State": {
         "${_end_mouth}": [
            ["style", "opacity", '0']
         ],
         "${_end_rocket}": [
            ["style", "opacity", '0']
         ],
         "${_rag_hand}": [
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 206,
         autoPlay: true,
         labels: {
            "0": 51,
            "1": 125,
            "2": 206
         },
         timeline: [
            { id: "eid7399", tween: [ "style", "${_end_rocket}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7400", tween: [ "style", "${_end_rocket}", "opacity", '1', { fromValue: '0'}], position: 206, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7282", tween: [ "style", "${_end_mouth}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7283", tween: [ "style", "${_end_mouth}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7398", tween: [ "style", "${_end_mouth}", "opacity", '0', { fromValue: '1'}], position: 206, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7215", tween: [ "style", "${_rag_hand}", "opacity", '1', { fromValue: '1'}], position: 51, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7216", tween: [ "style", "${_rag_hand}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7246", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rag_hand}', [] ], ""], position: 0 },
            { id: "eid7308", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_end_mouth}', [] ], ""], position: 0 },
            { id: "eid7428", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_end_rocket}', [] ], ""], position: 0 },
            { id: "eid7247", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rag_hand}', [] ], ""], position: 51 },
            { id: "eid7309", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_end_mouth}', [] ], ""], position: 125 },
            { id: "eid7429", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_end_rocket}', [] ], ""], position: 206 }         ]
      }
   }
},
"rag_straight": {
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
      id: 'tiles-21',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles-21.svg','0px','0px']
   },
   {
      id: 'straight_flute',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'tiles__straight_02',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles__straight_02.svg','0px','0px']
   },
   {
      id: 'straight_reach',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'straight_reach',
      symbolName: 'straight_reach'
   },
   {
      id: 'straight_flute',
      symbolName: 'straight_flute'
   }   ]
   },
   states: {
      "Base State": {
         "${_tiles__straight_02}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_straight_flute}": [
            ["style", "opacity", '0.000000']
         ],
         "${_tiles-21}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_straight_reach}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 212,
         autoPlay: true,
         labels: {
            "0": 52,
            "1": 103,
            "2": 157
         },
         timeline: [
            { id: "eid6436", tween: [ "style", "${_tiles-21}", "opacity", '1', { fromValue: '1'}], position: 52, duration: 0, easing: "easeInOutQuad" },
            { id: "eid6437", tween: [ "style", "${_tiles-21}", "opacity", '0', { fromValue: '1'}], position: 103, duration: 0, easing: "easeInOutQuad" },
            { id: "eid6522", tween: [ "style", "${_straight_flute}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 52, duration: 0, easing: "easeInOutQuad" },
            { id: "eid6916", tween: [ "style", "${_straight_flute}", "opacity", '1', { fromValue: '0.000000'}], position: 103, duration: 0 },
            { id: "eid6917", tween: [ "style", "${_straight_flute}", "opacity", '0', { fromValue: '1'}], position: 157, duration: 0 },
            { id: "eid6919", tween: [ "style", "${_tiles__straight_02}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid6918", tween: [ "style", "${_tiles__straight_02}", "opacity", '1', { fromValue: '0'}], position: 157, duration: 0 },
            { id: "eid7032", tween: [ "style", "${_tiles__straight_02}", "opacity", '0', { fromValue: '1'}], position: 212, duration: 0 }         ]
      }
   }
},
"rag_angle": {
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
      id: 'tiles-20',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles-20.svg','0px','0px']
   },
   {
      id: 'wind_rad',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'wind_rad',
      symbolName: 'wind_rad'
   }   ]
   },
   states: {
      "Base State": {
         "${_wind_rad}": [
            ["style", "opacity", '0']
         ],
         "${_tiles-20}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 141.24609375,
         autoPlay: true,
         labels: {
            "0": 69,
            "1": 141
         },
         timeline: [
            { id: "eid6772", tween: [ "style", "${_wind_rad}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid6773", tween: [ "style", "${_wind_rad}", "opacity", '1', { fromValue: '0'}], position: 141, duration: 0 },
            { id: "eid6830", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_wind_rad}', [] ], ""], position: 0 },
            { id: "eid6831", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_wind_rad}', [] ], ""], position: 141 }         ]
      }
   }
},
"BG": {
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
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(250,254,232,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(250,254,232,1.00)']
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
},
"straight_flute": {
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
      type: 'image',
      id: 'straight2-30',
      opacity: 1,
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/straight2-30.svg','0px','0px']
   },
   {
      transform: [[0,0],['-90']],
      id: 'pust-31',
      type: 'image',
      rect: ['24px','-20px','99px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pust-31.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pust-31}": [
            ["style", "-webkit-transform-origin", [45.32,93.85], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [45.32,93.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [45.32,93.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [45.32,93.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [45.32,93.85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.16'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.16'],
            ["style", "opacity", '1'],
            ["style", "left", '24px'],
            ["style", "top", '-20px']
         ],
         "${_straight2-30}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 922,
         autoPlay: true,
         timeline: [
            { id: "eid6542", tween: [ "style", "${_pust-31}", "opacity", '0', { fromValue: '1'}], position: 633, duration: 289, easing: "easeInOutQuad" },
            { id: "eid6540", tween: [ "transform", "${_pust-31}", "scaleY", '0.6', { fromValue: '0.16'}], position: 0, duration: 680, easing: "easeInOutQuad" },
            { id: "eid6539", tween: [ "transform", "${_pust-31}", "scaleX", '0.6', { fromValue: '0.16'}], position: 0, duration: 680, easing: "easeInOutQuad" },
            { id: "eid6544", tween: [ "style", "${_pust-31}", "left", '-2px', { fromValue: '24px'}], position: 217, duration: 705, easing: "easeInQuad" }         ]
      }
   }
},
"wind_rad": {
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
      id: 'ragdoll_ankle_02',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ragdoll_ankle_02.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ragdoll_ankle_02}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.77167'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.77167'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid6742", tween: [ "transform", "${_ragdoll_ankle_02}", "rotateZ", '1440deg', { fromValue: '0deg'}], position: 0, duration: 6000 },
            { id: "eid7157", tween: [ "transform", "${_ragdoll_ankle_02}", "scaleY", '0.77167', { fromValue: '0.77167'}], position: 2239, duration: 0 },
            { id: "eid7156", tween: [ "transform", "${_ragdoll_ankle_02}", "scaleX", '0.77167', { fromValue: '0.77167'}], position: 2239, duration: 0 }         ]
      }
   }
},
"straight_reach": {
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
      id: 'tiles_straight_03',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_03.svg','0px','0px']
   },
   {
      transform: [[0,0],['180']],
      id: 'tiles_straight_03Copy',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_03.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],[],['49.8671%','74.2382%']],
      id: 'tiles_straight_03b',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_03b.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tiles_straight_03b}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [49.87,74.24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.87,74.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.87,74.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.87,74.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.87,74.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_tiles_straight_03Copy}": [
            ["style", "top", '53px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_tiles_straight_03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 343.19921875,
         autoPlay: true,
         timeline: [
            { id: "eid7041", tween: [ "style", "${_tiles_straight_03Copy}", "top", '0px', { fromValue: '53px'}], position: 0, duration: 343 },
            { id: "eid7038", tween: [ "transform", "${_tiles_straight_03b}", "scaleY", '1', { fromValue: '0.27922'}], position: 0, duration: 343 }         ]
      }
   }
},
"end_hand": {
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
      id: 'hand-27',
      type: 'image',
      rect: ['30px','22px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hand-27.svg','0px','0px']
   },
   {
      transform: [],
      id: 'wrist-26',
      type: 'image',
      rect: ['30px','22px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wrist-26.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hand-27}": [
            ["style", "-webkit-transform-origin", [49.84,61.69], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.84,61.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.84,61.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.84,61.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.84,61.69],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '22px'],
            ["style", "left", '30px'],
            ["transform", "rotateZ", '-23deg']
         ],
         "${_wrist-26}": [
            ["style", "-webkit-transform-origin", [50.12,61.76], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.12,61.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.12,61.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.12,61.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.12,61.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '30px'],
            ["style", "top", '22px']
         ],
         "${symbolSelector}": [
            ["style", "height", '197px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 911,
         autoPlay: true,
         timeline: [
            { id: "eid5752", tween: [ "style", "${_hand-27}", "-webkit-transform-origin", [49.84,61.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.84,61.69]}], position: 0, duration: 0 },
            { id: "eid8031", tween: [ "style", "${_hand-27}", "-moz-transform-origin", [49.84,61.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.84,61.69]}], position: 0, duration: 0 },
            { id: "eid8032", tween: [ "style", "${_hand-27}", "-ms-transform-origin", [49.84,61.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.84,61.69]}], position: 0, duration: 0 },
            { id: "eid8033", tween: [ "style", "${_hand-27}", "msTransformOrigin", [49.84,61.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.84,61.69]}], position: 0, duration: 0 },
            { id: "eid8034", tween: [ "style", "${_hand-27}", "-o-transform-origin", [49.84,61.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.84,61.69]}], position: 0, duration: 0 },
            { id: "eid5754", tween: [ "transform", "${_hand-27}", "rotateZ", '21deg', { fromValue: '-23deg'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid5755", tween: [ "transform", "${_hand-27}", "rotateZ", '-23deg', { fromValue: '21deg'}], position: 459, duration: 452, easing: "easeInOutQuad" }         ]
      }
   }
},
"end_mouth": {
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
      id: 'tiles_straight_04b',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_04b.svg','0px','0px']
   },
   {
      id: 'tiles_straight_04',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_04.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tiles_straight_04b}": [
            ["style", "left", '0px'],
            ["style", "top", '24px']
         ],
         "${_tiles_straight_04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "loop": 500
         },
         timeline: [
            { id: "eid7219", tween: [ "style", "${_tiles_straight_04b}", "top", '0px', { fromValue: '24px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid7220", tween: [ "style", "${_tiles_straight_04b}", "top", '7px', { fromValue: '0px'}], position: 500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid7221", tween: [ "style", "${_tiles_straight_04b}", "top", '0px', { fromValue: '7px'}], position: 750, duration: 250, easing: "easeInOutQuad" }         ]
      }
   }
},
"end_rocket": {
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
      id: 'tiles_straight_05',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_05.svg','0px','0px']
   },
   {
      id: 'tiles_straight_05b',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tiles_straight_05b.svg','0px','0px']
   },
   {
      rect: ['55px','-343px','41px','41px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(255,255,255,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tiles_straight_05}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-35px'],
            ["style", "width", '200px'],
            ["style", "top", '-403px'],
            ["transform", "scaleY", '0'],
            ["style", "height", '200px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
         ],
         "${_tiles_straight_05b}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 976.5835622877,
         autoPlay: true,
         timeline: [
            { id: "eid7403", tween: [ "style", "${_tiles_straight_05}", "top", '-415px', { fromValue: '0px'}], position: 206, duration: 359, easing: "easeInExpo" },
            { id: "eid7927", tween: [ "style", "${_Ellipse}", "height", '200px', { fromValue: '200px'}], position: 531, duration: 0, easing: "easeInExpo" },
            { id: "eid7946", tween: [ "transform", "${_Ellipse}", "scaleY", '2', { fromValue: '0'}], position: 531, duration: 445, easing: "easeInExpo" },
            { id: "eid7521", tween: [ "style", "${_tiles_straight_05}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInExpo" },
            { id: "eid7520", tween: [ "style", "${_tiles_straight_05}", "display", 'none', { fromValue: 'block'}], position: 565, duration: 0, easing: "easeInExpo" },
            { id: "eid7945", tween: [ "transform", "${_Ellipse}", "scaleX", '2', { fromValue: '0'}], position: 531, duration: 445, easing: "easeInExpo" },
            { id: "eid7926", tween: [ "style", "${_Ellipse}", "width", '200px', { fromValue: '200px'}], position: 531, duration: 0, easing: "easeInExpo" },
            { id: "eid7949", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,0)'}], position: 531, duration: 203, easing: "easeInExpo" },
            { id: "eid7950", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 734, duration: 140, easing: "easeInExpo" },
            { id: "eid7932", tween: [ "style", "${_Ellipse}", "left", '-35px', { fromValue: '-35px'}], position: 531, duration: 0, easing: "easeInExpo" },
            { id: "eid7935", tween: [ "style", "${_Ellipse}", "top", '-403px', { fromValue: '-403px'}], position: 531, duration: 0, easing: "easeInExpo" },
            { id: "eid7947", tween: [ "style", "${_Ellipse}", "border-width", '0px', { fromValue: '10px'}], position: 818, duration: 159, easing: "easeInExpo" }         ]
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
})(jQuery, AdobeEdge, "EDGE-308395229");
