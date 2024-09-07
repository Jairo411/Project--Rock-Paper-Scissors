/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.viewport
{
    border:1px solid #000;
    display: block;
    margin:auto;
    width: 1024px;
    height: 768px;
}
h1{
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;IAEI,qBAAqB;IACrB,cAAc;IACd,WAAW;IACX,aAAa;IACb,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB","sourcesContent":[".viewport\n{\n    border:1px solid #000;\n    display: block;\n    margin:auto;\n    width: 1024px;\n    height: 768px;\n}\nh1{\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const threeJsMod= __webpack_require__(/*! threejs-math */ "./node_modules/threejs-math/build/threejs-math.cjs");
class gameObject{
    constructor(id_,Image_){
        this.id= id_;
        this.Image= Image_;
        this.transform= new threeJsMod.Matrix3();
        this.x=0;
        this.y=0;
    }

}
class UI_Square{
    constructor(x_,y_,width_,height_,offSetX_,offSetY_)
    {
        this.x=x_;
        this.y=y_;
        this.width=width_;
        this.height=height_;
        this.offSetX=offSetX_;
        this.offSetY=offSetY_;
        this.image= new Image();
    }
    
//You're comparing here P and Q 
// Not P in comparison to the bounding box
    collisionDetection(pointX_,pointY_)
    {
    let pVec2= new threeJsMod.Vector2(0,0);
    pVec2.x = pointX_;
    pVec2.y = pointY_;

    let boundingBox = [new threeJsMod.Vector2(),new threeJsMod.Vector2(), new threeJsMod.Vector2(), new threeJsMod.Vector2()];

    //min,min
    boundingBox[0].set(this.x,this.y);
    //min,max
    boundingBox[1].set(this.x,this.y+this.height);
    //max,min
    boundingBox[2].set(this.x+this.width,this.y);
    //max,max
    boundingBox[3].set(this.x+this.width,this.y+this.height);


        ///Change this to use MATH library
         ///Get point turn it into a vec2 
   // let pVec2=[point_.x,point_.y];
    // Get bounding box position, turn it into a vec2
    let qVec2= new threeJsMod.Vector2();
    //Get clamped Q on B to P

    //comparing each point of my bounding box 
    // in relation to my arbitary point
    // I think I need to compare each point, with each other point
    for(let i =0; i< boundingBox.length; i++)
    {
        //conditions for being outside
        // outside of min,min
        if(pVec2.x < boundingBox[i].x && pVec2.y < boundingBox[i].y)
        {
            pVec2= boundingBox[i];
            
            console.log("I am outside of min,min");
        }
        // outside of min,max
        if(pVec2.x < boundingBox[i].x && pVec2.y > boundingBox[i].y)
        {
            pVec2 = boundingBox[i];
            console.log("I am outside of min,max");
        }
        // outside of max,min
        if(pVec2.x > boundingBox[i].x && pVec2.y < boundingBox[i].y)
        {
            pVec2 = boundingBox[i];
            console.log("I am outside of max, min");
        }
        // outside max,max
        if(pVec2.x > boundingBox[i].x && pVec2.y > boundingBox[i].y)
        {
            pVec2 = boundingBox[i];
            console.log("I am outside of max, max");
        }
    }
}

    ReturnBoundingBox()
    {
        
    }
}


exports.gameObject= gameObject;
exports.UI_Square=UI_Square;
exports.threeJsMod=threeJsMod;


/***/ }),

/***/ "./public/images/paper.png":
/*!*********************************!*\
  !*** ./public/images/paper.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ffcd4d99f6bb48e99b20.png";

/***/ }),

/***/ "./public/images/rock.png":
/*!********************************!*\
  !*** ./public/images/rock.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4bacbecd2a7e085024b.png";

/***/ }),

/***/ "./public/images/scissors.png":
/*!************************************!*\
  !*** ./public/images/scissors.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca7d276f31ad60f4bf0a.png";

/***/ }),

/***/ "./public/images/smallpaper.png":
/*!**************************************!*\
  !*** ./public/images/smallpaper.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e35684ed06cb8d4f580.png";

/***/ }),

/***/ "./public/images/smallrock.png":
/*!*************************************!*\
  !*** ./public/images/smallrock.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9cc61ac1ce1c25e4ff83.png";

/***/ }),

/***/ "./public/images/smallscissors.png":
/*!*****************************************!*\
  !*** ./public/images/smallscissors.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54f99c8d8e7d22f352d6.png";

/***/ }),

/***/ "./node_modules/threejs-math/build/threejs-math.cjs":
/*!**********************************************************!*\
  !*** ./node_modules/threejs-math/build/threejs-math.cjs ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const REVISION = '144dev';
const MOUSE = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
};
const TOUCH = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
};
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const CullFaceFrontBack = 3;
const BasicShadowMap = 0;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBFormat = 1022; // @deprecated since r137

const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;
const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const LoopOnce = 2200;
const LoopRepeat = 2201;
const LoopPingPong = 2202;
const InterpolateDiscrete = 2300;
const InterpolateLinear = 2301;
const InterpolateSmooth = 2302;
const ZeroCurvatureEnding = 2400;
const ZeroSlopeEnding = 2401;
const WrapAroundEnding = 2402;
const NormalAnimationBlendMode = 2500;
const AdditiveAnimationBlendMode = 2501;
const TrianglesDrawMode = 0;
const TriangleStripDrawMode = 1;
const TriangleFanDrawMode = 2;
const LinearEncoding = 3000;
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1; // Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.

const NoColorSpace = '';
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const ZeroStencilOp = 0;
const KeepStencilOp = 7680;
const ReplaceStencilOp = 7681;
const IncrementStencilOp = 7682;
const DecrementStencilOp = 7683;
const IncrementWrapStencilOp = 34055;
const DecrementWrapStencilOp = 34056;
const InvertStencilOp = 5386;
const NeverStencilFunc = 512;
const LessStencilFunc = 513;
const EqualStencilFunc = 514;
const LessEqualStencilFunc = 515;
const GreaterStencilFunc = 516;
const NotEqualStencilFunc = 517;
const GreaterEqualStencilFunc = 518;
const AlwaysStencilFunc = 519;
const StaticDrawUsage = 35044;
const DynamicDrawUsage = 35048;
const StreamDrawUsage = 35040;
const StaticReadUsage = 35045;
const DynamicReadUsage = 35049;
const StreamReadUsage = 35041;
const StaticCopyUsage = 35046;
const DynamicCopyUsage = 35050;
const StreamCopyUsage = 35042;
const GLSL1 = '100';
const GLSL3 = '300 es';
const _SRGBAFormat = 1035; // fallback for WebGL 1

class Vector2 {
	constructor(x = 0, y = 0) {
		Vector2.prototype.isVector2 = true;
		this.x = x;
		this.y = y;
	}

	get width() {
		return this.x;
	}

	set width(value) {
		this.x = value;
	}

	get height() {
		return this.y;
	}

	set height(value) {
		this.y = value;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	setScalar(scalar) {
		this.x = scalar;
		this.y = scalar;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				this.x = value;
				break;

			case 1:
				this.y = value;
				break;

			default:
				throw new Error('index is out of range: ' + index);
		}

		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0:
				return this.x;

			case 1:
				return this.y;

			default:
				throw new Error('index is out of range: ' + index);
		}
	}

	clone() {
		return new this.constructor(this.x, this.y);
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	addScalar(s) {
		this.x += s;
		this.y += s;
		return this;
	}

	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		return this;
	}

	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	subScalar(s) {
		this.x -= s;
		this.y -= s;
		return this;
	}

	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		return this;
	}

	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}

	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	divide(v) {
		this.x /= v.x;
		this.y /= v.y;
		return this;
	}

	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}

	applyMatrix3(m) {
		const x = this.x,
					y = this.y;
		const e = m.elements;
		this.x = e[0] * x + e[3] * y + e[6];
		this.y = e[1] * x + e[4] * y + e[7];
		return this;
	}

	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		return this;
	}

	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		return this;
	}

	clamp(min, max) {
		// assumes min < max, componentwise
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		return this;
	}

	clampScalar(minVal, maxVal) {
		this.x = Math.max(minVal, Math.min(maxVal, this.x));
		this.y = Math.max(minVal, Math.min(maxVal, this.y));
		return this;
	}

	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}

	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	}

	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	}

	roundToZero() {
		this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
		return this;
	}

	negate() {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	dot(v) {
		return this.x * v.x + this.y * v.y;
	}

	cross(v) {
		return this.x * v.y - this.y * v.x;
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}

	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	angle() {
		// computes the angle in radians with respect to the positive x-axis
		const angle = Math.atan2(-this.y, -this.x) + Math.PI;
		return angle;
	}

	distanceTo(v) {
		return Math.sqrt(this.distanceToSquared(v));
	}

	distanceToSquared(v) {
		const dx = this.x - v.x,
					dy = this.y - v.y;
		return dx * dx + dy * dy;
	}

	manhattanDistanceTo(v) {
		return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
	}

	setLength(length) {
		return this.normalize().multiplyScalar(length);
	}

	lerp(v, alpha) {
		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;
		return this;
	}

	lerpVectors(v1, v2, alpha) {
		this.x = v1.x + (v2.x - v1.x) * alpha;
		this.y = v1.y + (v2.y - v1.y) * alpha;
		return this;
	}

	equals(v) {
		return v.x === this.x && v.y === this.y;
	}

	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.x = attribute.getX( index );
	// 	this.y = attribute.getY( index );
	// 	return this;
	// }


	rotateAround(center, angle) {
		const c = Math.cos(angle),
					s = Math.sin(angle);
		const x = this.x - center.x;
		const y = this.y - center.y;
		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;
		return this;
	}

	random() {
		this.x = Math.random();
		this.y = Math.random();
		return this;
	}

	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
	}

}

const _lut = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI; // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

function generateUUID() {
	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff]; // .toLowerCase() here flattens concatenated strings to save heap memory space.

	return uuid.toLowerCase();
}

function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
} // compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation


function euclideanModulo(n, m) {
	return (n % m + m) % m;
} // Linear mapping from range <a1, a2> to range <b1, b2>


function mapLinear(x, a1, a2, b1, b2) {
	return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
} // https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/


function inverseLerp(x, y, value) {
	if (x !== y) {
		return (value - x) / (y - x);
	} else {
		return 0;
	}
} // https://en.wikipedia.org/wiki/Linear_interpolation


function lerp(x, y, t) {
	return (1 - t) * x + t * y;
} // http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/


function damp(x, y, lambda, dt) {
	return lerp(x, y, 1 - Math.exp(-lambda * dt));
} // https://www.desmos.com/calculator/vcsjnyz7x4


function pingpong(x, length = 1) {
	return length - Math.abs(euclideanModulo(x, length * 2) - length);
} // http://en.wikipedia.org/wiki/Smoothstep


function smoothstep(x, min, max) {
	if (x <= min) return 0;
	if (x >= max) return 1;
	x = (x - min) / (max - min);
	return x * x * (3 - 2 * x);
}

function smootherstep(x, min, max) {
	if (x <= min) return 0;
	if (x >= max) return 1;
	x = (x - min) / (max - min);
	return x * x * x * (x * (x * 6 - 15) + 10);
} // Random integer from <low, high> interval


function randInt(low, high) {
	return low + Math.floor(Math.random() * (high - low + 1));
} // Random float from <low, high> interval


function randFloat(low, high) {
	return low + Math.random() * (high - low);
} // Random float from <-range/2, range/2> interval


function randFloatSpread(range) {
	return range * (0.5 - Math.random());
} // Deterministic pseudo-random float in the interval [ 0, 1 ]


function seededRandom(s) {
	if (s !== undefined) _seed = s; // Mulberry32 generator

	let t = _seed += 0x6D2B79F5;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function degToRad(degrees) {
	return degrees * DEG2RAD;
}

function radToDeg(radians) {
	return radians * RAD2DEG;
}

function isPowerOfTwo(value) {
	return (value & value - 1) === 0 && value !== 0;
}

function ceilPowerOfTwo(value) {
	return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
}

function floorPowerOfTwo(value) {
	return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}

function setQuaternionFromProperEuler(q, a, b, c, order) {
	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles
	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians
	const cos = Math.cos;
	const sin = Math.sin;
	const c2 = cos(b / 2);
	const s2 = sin(b / 2);
	const c13 = cos((a + c) / 2);
	const s13 = sin((a + c) / 2);
	const c1_3 = cos((a - c) / 2);
	const s1_3 = sin((a - c) / 2);
	const c3_1 = cos((c - a) / 2);
	const s3_1 = sin((c - a) / 2);

	switch (order) {
		case 'XYX':
			q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
			break;

		case 'YZY':
			q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
			break;

		case 'ZXZ':
			q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
			break;

		case 'XZX':
			q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
			break;

		case 'YXY':
			q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
			break;

		case 'ZYZ':
			q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
			break;

		default:
			console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order);
	}
}

function denormalize(value, array) {
	switch (array.constructor) {
		case Float32Array:
			return value;

		case Uint16Array:
			return value / 65535.0;

		case Uint8Array:
			return value / 255.0;

		case Int16Array:
			return Math.max(value / 32767.0, -1.0);

		case Int8Array:
			return Math.max(value / 127.0, -1.0);

		default:
			throw new Error('Invalid component type.');
	}
}

function normalize(value, array) {
	switch (array.constructor) {
		case Float32Array:
			return value;

		case Uint16Array:
			return Math.round(value * 65535.0);

		case Uint8Array:
			return Math.round(value * 255.0);

		case Int16Array:
			return Math.round(value * 32767.0);

		case Int8Array:
			return Math.round(value * 127.0);

		default:
			throw new Error('Invalid component type.');
	}
}

var MathUtils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	generateUUID: generateUUID,
	clamp: clamp,
	euclideanModulo: euclideanModulo,
	mapLinear: mapLinear,
	inverseLerp: inverseLerp,
	lerp: lerp,
	damp: damp,
	pingpong: pingpong,
	smoothstep: smoothstep,
	smootherstep: smootherstep,
	randInt: randInt,
	randFloat: randFloat,
	randFloatSpread: randFloatSpread,
	seededRandom: seededRandom,
	degToRad: degToRad,
	radToDeg: radToDeg,
	isPowerOfTwo: isPowerOfTwo,
	ceilPowerOfTwo: ceilPowerOfTwo,
	floorPowerOfTwo: floorPowerOfTwo,
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	normalize: normalize,
	denormalize: denormalize
});

class Quaternion {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.isQuaternion = true;
		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;
	}

	static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
		// fuzz-free, array-based Quaternion SLERP operation
		let x0 = src0[srcOffset0 + 0],
				y0 = src0[srcOffset0 + 1],
				z0 = src0[srcOffset0 + 2],
				w0 = src0[srcOffset0 + 3];
		const x1 = src1[srcOffset1 + 0],
					y1 = src1[srcOffset1 + 1],
					z1 = src1[srcOffset1 + 2],
					w1 = src1[srcOffset1 + 3];

		if (t === 0) {
			dst[dstOffset + 0] = x0;
			dst[dstOffset + 1] = y0;
			dst[dstOffset + 2] = z0;
			dst[dstOffset + 3] = w0;
			return;
		}

		if (t === 1) {
			dst[dstOffset + 0] = x1;
			dst[dstOffset + 1] = y1;
			dst[dstOffset + 2] = z1;
			dst[dstOffset + 3] = w1;
			return;
		}

		if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
						dir = cos >= 0 ? 1 : -1,
						sqrSin = 1 - cos * cos; // Skip the Slerp for tiny steps to avoid numeric problems:

			if (sqrSin > Number.EPSILON) {
				const sin = Math.sqrt(sqrSin),
							len = Math.atan2(sin, cos * dir);
				s = Math.sin(s * len) / sin;
				t = Math.sin(t * len) / sin;
			}

			const tDir = t * dir;
			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir; // Normalize in case we just did a lerp:

			if (s === 1 - t) {
				const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;
			}
		}

		dst[dstOffset] = x0;
		dst[dstOffset + 1] = y0;
		dst[dstOffset + 2] = z0;
		dst[dstOffset + 3] = w0;
	}

	static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
		const x0 = src0[srcOffset0];
		const y0 = src0[srcOffset0 + 1];
		const z0 = src0[srcOffset0 + 2];
		const w0 = src0[srcOffset0 + 3];
		const x1 = src1[srcOffset1];
		const y1 = src1[srcOffset1 + 1];
		const z1 = src1[srcOffset1 + 2];
		const w1 = src1[srcOffset1 + 3];
		dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
		return dst;
	}

	get x() {
		return this._x;
	}

	set x(value) {
		this._x = value;

		this._onChangeCallback();
	}

	get y() {
		return this._y;
	}

	set y(value) {
		this._y = value;

		this._onChangeCallback();
	}

	get z() {
		return this._z;
	}

	set z(value) {
		this._z = value;

		this._onChangeCallback();
	}

	get w() {
		return this._w;
	}

	set w(value) {
		this._w = value;

		this._onChangeCallback();
	}

	set(x, y, z, w) {
		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;
	}

	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}

	copy(quaternion) {
		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;
	}

	setFromEuler(euler, update) {
		const x = euler._x,
					y = euler._y,
					z = euler._z,
					order = euler._order; // http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;
		const c1 = cos(x / 2);
		const c2 = cos(y / 2);
		const c3 = cos(z / 2);
		const s1 = sin(x / 2);
		const s2 = sin(y / 2);
		const s3 = sin(z / 2);

		switch (order) {
			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order);
		}

		if (update !== false) this._onChangeCallback();
		return this;
	}

	setFromAxisAngle(axis, angle) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
		// assumes axis is normalized
		const halfAngle = angle / 2,
					s = Math.sin(halfAngle);
		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos(halfAngle);

		this._onChangeCallback();

		return this;
	}

	setFromRotationMatrix(m) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
		const te = m.elements,
					m11 = te[0],
					m12 = te[4],
					m13 = te[8],
					m21 = te[1],
					m22 = te[5],
					m23 = te[9],
					m31 = te[2],
					m32 = te[6],
					m33 = te[10],
					trace = m11 + m22 + m33;

		if (trace > 0) {
			const s = 0.5 / Math.sqrt(trace + 1.0);
			this._w = 0.25 / s;
			this._x = (m32 - m23) * s;
			this._y = (m13 - m31) * s;
			this._z = (m21 - m12) * s;
		} else if (m11 > m22 && m11 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			this._w = (m32 - m23) / s;
			this._x = 0.25 * s;
			this._y = (m12 + m21) / s;
			this._z = (m13 + m31) / s;
		} else if (m22 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			this._w = (m13 - m31) / s;
			this._x = (m12 + m21) / s;
			this._y = 0.25 * s;
			this._z = (m23 + m32) / s;
		} else {
			const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			this._w = (m21 - m12) / s;
			this._x = (m13 + m31) / s;
			this._y = (m23 + m32) / s;
			this._z = 0.25 * s;
		}

		this._onChangeCallback();

		return this;
	}

	setFromUnitVectors(vFrom, vTo) {
		// assumes direction vectors vFrom and vTo are normalized
		let r = vFrom.dot(vTo) + 1;

		if (r < Number.EPSILON) {
			// vFrom and vTo point in opposite directions
			r = 0;

			if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
				this._x = -vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;
			} else {
				this._x = 0;
				this._y = -vFrom.z;
				this._z = vFrom.y;
				this._w = r;
			}
		} else {
			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;
		}

		return this.normalize();
	}

	angleTo(q) {
		return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
	}

	rotateTowards(q, step) {
		const angle = this.angleTo(q);
		if (angle === 0) return this;
		const t = Math.min(1, step / angle);
		this.slerp(q, t);
		return this;
	}

	identity() {
		return this.set(0, 0, 0, 1);
	}

	invert() {
		// quaternion is assumed to have unit length
		return this.conjugate();
	}

	conjugate() {
		this._x *= -1;
		this._y *= -1;
		this._z *= -1;

		this._onChangeCallback();

		return this;
	}

	dot(v) {
		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
	}

	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}

	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}

	normalize() {
		let l = this.length();

		if (l === 0) {
			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;
		} else {
			l = 1 / l;
			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;
		}

		this._onChangeCallback();

		return this;
	}

	multiply(q) {
		return this.multiplyQuaternions(this, q);
	}

	premultiply(q) {
		return this.multiplyQuaternions(q, this);
	}

	multiplyQuaternions(a, b) {
		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
		const qax = a._x,
					qay = a._y,
					qaz = a._z,
					qaw = a._w;
		const qbx = b._x,
					qby = b._y,
					qbz = b._z,
					qbw = b._w;
		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;
	}

	slerp(qb, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(qb);
		const x = this._x,
					y = this._y,
					z = this._z,
					w = this._w; // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if (cosHalfTheta < 0) {
			this._w = -qb._w;
			this._x = -qb._x;
			this._y = -qb._y;
			this._z = -qb._z;
			cosHalfTheta = -cosHalfTheta;
		} else {
			this.copy(qb);
		}

		if (cosHalfTheta >= 1.0) {
			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;
			return this;
		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if (sqrSinHalfTheta <= Number.EPSILON) {
			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;
			this.normalize();

			this._onChangeCallback();

			return this;
		}

		const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
		const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
		const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
					ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
		this._w = w * ratioA + this._w * ratioB;
		this._x = x * ratioA + this._x * ratioB;
		this._y = y * ratioA + this._y * ratioB;
		this._z = z * ratioA + this._z * ratioB;

		this._onChangeCallback();

		return this;
	}

	slerpQuaternions(qa, qb, t) {
		return this.copy(qa).slerp(qb, t);
	}

	random() {
		// Derived from http://planning.cs.uiuc.edu/node198.html
		// Note, this source uses w, x, y, z ordering,
		// so we swap the order below.
		const u1 = Math.random();
		const sqrt1u1 = Math.sqrt(1 - u1);
		const sqrtu1 = Math.sqrt(u1);
		const u2 = 2 * Math.PI * Math.random();
		const u3 = 2 * Math.PI * Math.random();
		return this.set(sqrt1u1 * Math.cos(u2), sqrtu1 * Math.sin(u3), sqrtu1 * Math.cos(u3), sqrt1u1 * Math.sin(u2));
	}

	equals(quaternion) {
		return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
	}

	fromArray(array, offset = 0) {
		this._x = array[offset];
		this._y = array[offset + 1];
		this._z = array[offset + 2];
		this._w = array[offset + 3];

		this._onChangeCallback();

		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this._x;
		array[offset + 1] = this._y;
		array[offset + 2] = this._z;
		array[offset + 3] = this._w;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this._x = attribute.getX( index );
	// 	this._y = attribute.getY( index );
	// 	this._z = attribute.getZ( index );
	// 	this._w = attribute.getW( index );
	// 	return this;
	// }


	_onChange(callback) {
		this._onChangeCallback = callback;
		return this;
	}

	_onChangeCallback() {}

	*[Symbol.iterator]() {
		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;
	}

}

class Vector3 {
	constructor(x = 0, y = 0, z = 0) {
		Vector3.prototype.isVector3 = true;
		this.x = x;
		this.y = y;
		this.z = z;
	}

	set(x, y, z) {
		if (z === undefined) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	setScalar(scalar) {
		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setZ(z) {
		this.z = z;
		return this;
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				this.x = value;
				break;

			case 1:
				this.y = value;
				break;

			case 2:
				this.z = value;
				break;

			default:
				throw new Error('index is out of range: ' + index);
		}

		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0:
				return this.x;

			case 1:
				return this.y;

			case 2:
				return this.z;

			default:
				throw new Error('index is out of range: ' + index);
		}
	}

	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}

	addScalar(s) {
		this.x += s;
		this.y += s;
		this.z += s;
		return this;
	}

	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		return this;
	}

	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}

	subScalar(s) {
		this.x -= s;
		this.y -= s;
		this.z -= s;
		return this;
	}

	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		return this;
	}

	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		return this;
	}

	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	multiplyVectors(a, b) {
		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;
		return this;
	}

	applyEuler(euler) {
		return this.applyQuaternion(_quaternion$1.setFromEuler(euler));
	}

	applyAxisAngle(axis, angle) {
		return this.applyQuaternion(_quaternion$1.setFromAxisAngle(axis, angle));
	}

	applyMatrix3(m) {
		const x = this.x,
					y = this.y,
					z = this.z;
		const e = m.elements;
		this.x = e[0] * x + e[3] * y + e[6] * z;
		this.y = e[1] * x + e[4] * y + e[7] * z;
		this.z = e[2] * x + e[5] * y + e[8] * z;
		return this;
	}

	applyNormalMatrix(m) {
		return this.applyMatrix3(m).normalize();
	}

	applyMatrix4(m) {
		const x = this.x,
					y = this.y,
					z = this.z;
		const e = m.elements;
		const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
		this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
		this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
		this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
		return this;
	}

	applyQuaternion(q) {
		const x = this.x,
					y = this.y,
					z = this.z;
		const qx = q.x,
					qy = q.y,
					qz = q.z,
					qw = q.w; // calculate quat * vector

		const ix = qw * x + qy * z - qz * y;
		const iy = qw * y + qz * x - qx * z;
		const iz = qw * z + qx * y - qy * x;
		const iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

		this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		return this;
	} // project( camera ) {
	// 	return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );
	// }
	// unproject( camera ) {
	// 	return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );
	// }


	transformDirection(m) {
		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction
		const x = this.x,
					y = this.y,
					z = this.z;
		const e = m.elements;
		this.x = e[0] * x + e[4] * y + e[8] * z;
		this.y = e[1] * x + e[5] * y + e[9] * z;
		this.z = e[2] * x + e[6] * y + e[10] * z;
		return this.normalize();
	}

	divide(v) {
		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		return this;
	}

	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}

	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		this.z = Math.min(this.z, v.z);
		return this;
	}

	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		this.z = Math.max(this.z, v.z);
		return this;
	}

	clamp(min, max) {
		// assumes min < max, componentwise
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		this.z = Math.max(min.z, Math.min(max.z, this.z));
		return this;
	}

	clampScalar(minVal, maxVal) {
		this.x = Math.max(minVal, Math.min(maxVal, this.x));
		this.y = Math.max(minVal, Math.min(maxVal, this.y));
		this.z = Math.max(minVal, Math.min(maxVal, this.z));
		return this;
	}

	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}

	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		return this;
	}

	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.z = Math.ceil(this.z);
		return this;
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		return this;
	}

	roundToZero() {
		this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
		this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
		return this;
	}

	negate() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this;
	}

	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	} // TODO lengthSquared?


	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}

	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	setLength(length) {
		return this.normalize().multiplyScalar(length);
	}

	lerp(v, alpha) {
		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;
		this.z += (v.z - this.z) * alpha;
		return this;
	}

	lerpVectors(v1, v2, alpha) {
		this.x = v1.x + (v2.x - v1.x) * alpha;
		this.y = v1.y + (v2.y - v1.y) * alpha;
		this.z = v1.z + (v2.z - v1.z) * alpha;
		return this;
	}

	cross(v) {
		return this.crossVectors(this, v);
	}

	crossVectors(a, b) {
		const ax = a.x,
					ay = a.y,
					az = a.z;
		const bx = b.x,
					by = b.y,
					bz = b.z;
		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;
		return this;
	}

	projectOnVector(v) {
		const denominator = v.lengthSq();
		if (denominator === 0) return this.set(0, 0, 0);
		const scalar = v.dot(this) / denominator;
		return this.copy(v).multiplyScalar(scalar);
	}

	projectOnPlane(planeNormal) {
		_vector$3.copy(this).projectOnVector(planeNormal);

		return this.sub(_vector$3);
	}

	reflect(normal) {
		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length
		return this.sub(_vector$3.copy(normal).multiplyScalar(2 * this.dot(normal)));
	}

	angleTo(v) {
		const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
		if (denominator === 0) return Math.PI / 2;
		const theta = this.dot(v) / denominator; // clamp, to handle numerical problems

		return Math.acos(clamp(theta, -1, 1));
	}

	distanceTo(v) {
		return Math.sqrt(this.distanceToSquared(v));
	}

	distanceToSquared(v) {
		const dx = this.x - v.x,
					dy = this.y - v.y,
					dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;
	}

	manhattanDistanceTo(v) {
		return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
	}

	setFromSpherical(s) {
		return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
	}

	setFromSphericalCoords(radius, phi, theta) {
		const sinPhiRadius = Math.sin(phi) * radius;
		this.x = sinPhiRadius * Math.sin(theta);
		this.y = Math.cos(phi) * radius;
		this.z = sinPhiRadius * Math.cos(theta);
		return this;
	}

	setFromCylindrical(c) {
		return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
	}

	setFromCylindricalCoords(radius, theta, y) {
		this.x = radius * Math.sin(theta);
		this.y = y;
		this.z = radius * Math.cos(theta);
		return this;
	}

	setFromMatrixPosition(m) {
		const e = m.elements;
		this.x = e[12];
		this.y = e[13];
		this.z = e[14];
		return this;
	}

	setFromMatrixScale(m) {
		const sx = this.setFromMatrixColumn(m, 0).length();
		const sy = this.setFromMatrixColumn(m, 1).length();
		const sz = this.setFromMatrixColumn(m, 2).length();
		this.x = sx;
		this.y = sy;
		this.z = sz;
		return this;
	}

	setFromMatrixColumn(m, index) {
		return this.fromArray(m.elements, index * 4);
	}

	setFromMatrix3Column(m, index) {
		return this.fromArray(m.elements, index * 3);
	}

	setFromEuler(e) {
		this.x = e._x;
		this.y = e._y;
		this.z = e._z;
		return this;
	}

	equals(v) {
		return v.x === this.x && v.y === this.y && v.z === this.z;
	}

	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		this.z = array[offset + 2];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		array[offset + 2] = this.z;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.x = attribute.getX( index );
	// 	this.y = attribute.getY( index );
	// 	this.z = attribute.getZ( index );
	// 	return this;
	// }


	random() {
		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		return this;
	}

	randomDirection() {
		// Derived from https://mathworld.wolfram.com/SpherePointPicking.html
		const u = (Math.random() - 0.5) * 2;
		const t = Math.random() * Math.PI * 2;
		const f = Math.sqrt(1 - u ** 2);
		this.x = f * Math.cos(t);
		this.y = f * Math.sin(t);
		this.z = u;
		return this;
	}

	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
		yield this.z;
	}

}

const _vector$3 = /*@__PURE__*/new Vector3();

const _quaternion$1 = /*@__PURE__*/new Quaternion();

const _vector$2 = /*@__PURE__*/new Vector2();

class Box2 {
	constructor(min = new Vector2(+Infinity, +Infinity), max = new Vector2(-Infinity, -Infinity)) {
		this.isBox2 = true;
		this.min = min;
		this.max = max;
	}

	set(min, max) {
		this.min.copy(min);
		this.max.copy(max);
		return this;
	}

	setFromPoints(points) {
		this.makeEmpty();

		for (let i = 0, il = points.length; i < il; i++) {
			this.expandByPoint(points[i]);
		}

		return this;
	}

	setFromCenterAndSize(center, size) {
		const halfSize = _vector$2.copy(size).multiplyScalar(0.5);

		this.min.copy(center).sub(halfSize);
		this.max.copy(center).add(halfSize);
		return this;
	}

	clone() {
		return new this.constructor().copy(this);
	}

	copy(box) {
		this.min.copy(box.min);
		this.max.copy(box.max);
		return this;
	}

	makeEmpty() {
		this.min.x = this.min.y = +Infinity;
		this.max.x = this.max.y = -Infinity;
		return this;
	}

	isEmpty() {
		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
		return this.max.x < this.min.x || this.max.y < this.min.y;
	}

	getCenter(target = new Vector2()) {
		return this.isEmpty() ? target.set(0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
	}

	getSize(target = new Vector2()) {
		return this.isEmpty() ? target.set(0, 0) : target.subVectors(this.max, this.min);
	}

	expandByPoint(point) {
		this.min.min(point);
		this.max.max(point);
		return this;
	}

	expandByVector(vector) {
		this.min.sub(vector);
		this.max.add(vector);
		return this;
	}

	expandByScalar(scalar) {
		this.min.addScalar(-scalar);
		this.max.addScalar(scalar);
		return this;
	}

	containsPoint(point) {
		return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y ? false : true;
	}

	containsBox(box) {
		return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y;
	}

	getParameter(point, target) {
		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.
		return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y));
	}

	intersectsBox(box) {
		// using 4 splitting planes to rule out intersections
		return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y ? false : true;
	}

	clampPoint(point, target) {
		return target.copy(point).clamp(this.min, this.max);
	}

	distanceToPoint(point) {
		const clampedPoint = _vector$2.copy(point).clamp(this.min, this.max);

		return clampedPoint.sub(point).length();
	}

	intersect(box) {
		this.min.max(box.min);
		this.max.min(box.max);
		return this;
	}

	union(box) {
		this.min.min(box.min);
		this.max.max(box.max);
		return this;
	}

	translate(offset) {
		this.min.add(offset);
		this.max.add(offset);
		return this;
	}

	equals(box) {
		return box.min.equals(this.min) && box.max.equals(this.max);
	}

}

class Box3 {
	constructor(min = new Vector3(+Infinity, +Infinity, +Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = true;
		this.min = min;
		this.max = max;
	}

	set(min, max) {
		this.min.copy(min);
		this.max.copy(max);
		return this;
	}

	setFromArray(array) {
		let minX = +Infinity;
		let minY = +Infinity;
		let minZ = +Infinity;
		let maxX = -Infinity;
		let maxY = -Infinity;
		let maxZ = -Infinity;

		for (let i = 0, l = array.length; i < l; i += 3) {
			const x = array[i];
			const y = array[i + 1];
			const z = array[i + 2];
			if (x < minX) minX = x;
			if (y < minY) minY = y;
			if (z < minZ) minZ = z;
			if (x > maxX) maxX = x;
			if (y > maxY) maxY = y;
			if (z > maxZ) maxZ = z;
		}

		this.min.set(minX, minY, minZ);
		this.max.set(maxX, maxY, maxZ);
		return this;
	} // setFromBufferAttribute( attribute ) {
	// 	let minX = + Infinity;
	// 	let minY = + Infinity;
	// 	let minZ = + Infinity;
	// 	let maxX = - Infinity;
	// 	let maxY = - Infinity;
	// 	let maxZ = - Infinity;
	// 	for ( let i = 0, l = attribute.count; i < l; i ++ ) {
	// 		const x = attribute.getX( i );
	// 		const y = attribute.getY( i );
	// 		const z = attribute.getZ( i );
	// 		if ( x < minX ) minX = x;
	// 		if ( y < minY ) minY = y;
	// 		if ( z < minZ ) minZ = z;
	// 		if ( x > maxX ) maxX = x;
	// 		if ( y > maxY ) maxY = y;
	// 		if ( z > maxZ ) maxZ = z;
	// 	}
	// 	this.min.set( minX, minY, minZ );
	// 	this.max.set( maxX, maxY, maxZ );
	// 	return this;
	// }


	setFromPoints(points) {
		this.makeEmpty();

		for (let i = 0, il = points.length; i < il; i++) {
			this.expandByPoint(points[i]);
		}

		return this;
	}

	setFromCenterAndSize(center, size) {
		const halfSize = _vector$1.copy(size).multiplyScalar(0.5);

		this.min.copy(center).sub(halfSize);
		this.max.copy(center).add(halfSize);
		return this;
	}

	setFromObject(object, precise = false) {
		this.makeEmpty();
		return this.expandByObject(object, precise);
	}

	clone() {
		return new this.constructor().copy(this);
	}

	copy(box) {
		this.min.copy(box.min);
		this.max.copy(box.max);
		return this;
	}

	makeEmpty() {
		this.min.x = this.min.y = this.min.z = +Infinity;
		this.max.x = this.max.y = this.max.z = -Infinity;
		return this;
	}

	isEmpty() {
		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}

	getCenter(target = new Vector3()) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
	}

	getSize(target = new Vector3()) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
	}

	expandByPoint(point) {
		this.min.min(point);
		this.max.max(point);
		return this;
	}

	expandByVector(vector) {
		this.min.sub(vector);
		this.max.add(vector);
		return this;
	}

	expandByScalar(scalar) {
		this.min.addScalar(-scalar);
		this.max.addScalar(scalar);
		return this;
	} // expandByObject( object, precise = false ) {
	// 	// Computes the world-axis-aligned bounding box of an object (including its children),
	// 	// accounting for both the object's, and children's, world transforms
	// 	object.updateWorldMatrix( false, false );
	// 	const geometry = object.geometry;
	// 	if ( geometry !== undefined ) {
	// 		if ( precise && geometry.attributes != undefined && geometry.attributes.position !== undefined ) {
	// 			const position = geometry.attributes.position;
	// 			for ( let i = 0, l = position.count; i < l; i ++ ) {
	// 				_vector.fromBufferAttribute( position, i ).applyMatrix4( object.matrixWorld );
	// 				this.expandByPoint( _vector );
	// 			}
	// 		} else {
	// 			if ( geometry.boundingBox === null ) {
	// 				geometry.computeBoundingBox();
	// 			}
	// 			_box.copy( geometry.boundingBox );
	// 			_box.applyMatrix4( object.matrixWorld );
	// 			this.union( _box );
	// 		}
	// 	}
	// 	const children = object.children;
	// 	for ( let i = 0, l = children.length; i < l; i ++ ) {
	// 		this.expandByObject( children[ i ], precise );
	// 	}
	// 	return this;
	// }


	containsPoint(point) {
		return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
	}

	containsBox(box) {
		return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
	}

	getParameter(point, target) {
		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.
		return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y), (point.z - this.min.z) / (this.max.z - this.min.z));
	}

	intersectsBox(box) {
		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z ? false : true;
	}

	intersectsSphere(sphere) {
		// Find the point on the AABB closest to the sphere center.
		this.clampPoint(sphere.center, _vector$1); // If that point is inside the sphere, the AABB and sphere intersect.

		return _vector$1.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
	}

	intersectsPlane(plane) {
		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.
		let min, max;

		if (plane.normal.x > 0) {
			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;
		} else {
			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;
		}

		if (plane.normal.y > 0) {
			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;
		} else {
			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;
		}

		if (plane.normal.z > 0) {
			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;
		} else {
			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;
		}

		return min <= -plane.constant && max >= -plane.constant;
	}

	intersectsTriangle(triangle) {
		if (this.isEmpty()) {
			return false;
		} // compute box center and extents


		this.getCenter(_center);

		_extents.subVectors(this.max, _center); // translate triangle to aabb origin


		_v0$1.subVectors(triangle.a, _center);

		_v1$3.subVectors(triangle.b, _center);

		_v2$1.subVectors(triangle.c, _center); // compute edge vectors for triangle


		_f0.subVectors(_v1$3, _v0$1);

		_f1.subVectors(_v2$1, _v1$3);

		_f2.subVectors(_v0$1, _v2$1); // test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)


		let axes = [0, -_f0.z, _f0.y, 0, -_f1.z, _f1.y, 0, -_f2.z, _f2.y, _f0.z, 0, -_f0.x, _f1.z, 0, -_f1.x, _f2.z, 0, -_f2.x, -_f0.y, _f0.x, 0, -_f1.y, _f1.x, 0, -_f2.y, _f2.x, 0];

		if (!satForAxes(axes, _v0$1, _v1$3, _v2$1, _extents)) {
			return false;
		} // test 3 face normals from the aabb


		axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];

		if (!satForAxes(axes, _v0$1, _v1$3, _v2$1, _extents)) {
			return false;
		} // finally testing the face normal of the triangle
		// use already existing triangle edge vectors here


		_triangleNormal.crossVectors(_f0, _f1);

		axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
		return satForAxes(axes, _v0$1, _v1$3, _v2$1, _extents);
	}

	clampPoint(point, target) {
		return target.copy(point).clamp(this.min, this.max);
	}

	distanceToPoint(point) {
		const clampedPoint = _vector$1.copy(point).clamp(this.min, this.max);

		return clampedPoint.sub(point).length();
	}

	getBoundingSphere(target) {
		this.getCenter(target.center);
		target.radius = this.getSize(_vector$1).length() * 0.5;
		return target;
	}

	intersect(box) {
		this.min.max(box.min);
		this.max.min(box.max); // ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.

		if (this.isEmpty()) this.makeEmpty();
		return this;
	}

	union(box) {
		this.min.min(box.min);
		this.max.max(box.max);
		return this;
	}

	applyMatrix4(matrix) {
		// transform of empty box is an empty box.
		if (this.isEmpty()) return this; // NOTE: I am using a binary pattern to specify all 2^3 combinations below

		_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix); // 000


		_points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix); // 001


		_points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix); // 010


		_points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix); // 011


		_points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix); // 100


		_points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix); // 101


		_points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix); // 110


		_points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix); // 111


		this.setFromPoints(_points);
		return this;
	}

	translate(offset) {
		this.min.add(offset);
		this.max.add(offset);
		return this;
	}

	equals(box) {
		return box.min.equals(this.min) && box.max.equals(this.max);
	}

}

const _points = [/*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3()];

const _vector$1 = /*@__PURE__*/new Vector3();

const _box$1 = /*@__PURE__*/new Box3(); // triangle centered vertices


const _v0$1 = /*@__PURE__*/new Vector3();

const _v1$3 = /*@__PURE__*/new Vector3();

const _v2$1 = /*@__PURE__*/new Vector3(); // triangle edge vectors


const _f0 = /*@__PURE__*/new Vector3();

const _f1 = /*@__PURE__*/new Vector3();

const _f2 = /*@__PURE__*/new Vector3();

const _center = /*@__PURE__*/new Vector3();

const _extents = /*@__PURE__*/new Vector3();

const _triangleNormal = /*@__PURE__*/new Vector3();

const _testAxis = /*@__PURE__*/new Vector3();

function satForAxes(axes, v0, v1, v2, extents) {
	for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
		_testAxis.fromArray(axes, i); // project the aabb onto the separating axis


		const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z); // project all 3 vertices of the triangle onto the separating axis

		const p0 = v0.dot(_testAxis);
		const p1 = v1.dot(_testAxis);
		const p2 = v2.dot(_testAxis); // actual test, basically see if either of the most extreme of the triangle points intersects r

		if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;
		}
	}

	return true;
}

function SRGBToLinear(c) {
	return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
	return c < 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
} // JavaScript RGB-to-RGB transforms, defined as
// FN[InputColorSpace][OutputColorSpace] callback functions.

const FN = {
	[SRGBColorSpace]: {
		[LinearSRGBColorSpace]: SRGBToLinear
	},
	[LinearSRGBColorSpace]: {
		[SRGBColorSpace]: LinearToSRGB
	}
};
const ColorManagement = {
	legacyMode: true,

	get workingColorSpace() {
		return LinearSRGBColorSpace;
	},

	set workingColorSpace(colorSpace) {
		console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
	},

	convert: function (color, sourceColorSpace, targetColorSpace) {
		if (this.legacyMode || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
			return color;
		}

		if (FN[sourceColorSpace] && FN[sourceColorSpace][targetColorSpace] !== undefined) {
			const fn = FN[sourceColorSpace][targetColorSpace];
			color.r = fn(color.r);
			color.g = fn(color.g);
			color.b = fn(color.b);
			return color;
		}

		throw new Error('Unsupported color space conversion.');
	},
	fromWorkingColorSpace: function (color, targetColorSpace) {
		return this.convert(color, this.workingColorSpace, targetColorSpace);
	},
	toWorkingColorSpace: function (color, sourceColorSpace) {
		return this.convert(color, sourceColorSpace, this.workingColorSpace);
	}
};

const _colorKeywords = {
	'aliceblue': 0xF0F8FF,
	'antiquewhite': 0xFAEBD7,
	'aqua': 0x00FFFF,
	'aquamarine': 0x7FFFD4,
	'azure': 0xF0FFFF,
	'beige': 0xF5F5DC,
	'bisque': 0xFFE4C4,
	'black': 0x000000,
	'blanchedalmond': 0xFFEBCD,
	'blue': 0x0000FF,
	'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A,
	'burlywood': 0xDEB887,
	'cadetblue': 0x5F9EA0,
	'chartreuse': 0x7FFF00,
	'chocolate': 0xD2691E,
	'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED,
	'cornsilk': 0xFFF8DC,
	'crimson': 0xDC143C,
	'cyan': 0x00FFFF,
	'darkblue': 0x00008B,
	'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B,
	'darkgray': 0xA9A9A9,
	'darkgreen': 0x006400,
	'darkgrey': 0xA9A9A9,
	'darkkhaki': 0xBDB76B,
	'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F,
	'darkorange': 0xFF8C00,
	'darkorchid': 0x9932CC,
	'darkred': 0x8B0000,
	'darksalmon': 0xE9967A,
	'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B,
	'darkslategray': 0x2F4F4F,
	'darkslategrey': 0x2F4F4F,
	'darkturquoise': 0x00CED1,
	'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493,
	'deepskyblue': 0x00BFFF,
	'dimgray': 0x696969,
	'dimgrey': 0x696969,
	'dodgerblue': 0x1E90FF,
	'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0,
	'forestgreen': 0x228B22,
	'fuchsia': 0xFF00FF,
	'gainsboro': 0xDCDCDC,
	'ghostwhite': 0xF8F8FF,
	'gold': 0xFFD700,
	'goldenrod': 0xDAA520,
	'gray': 0x808080,
	'green': 0x008000,
	'greenyellow': 0xADFF2F,
	'grey': 0x808080,
	'honeydew': 0xF0FFF0,
	'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C,
	'indigo': 0x4B0082,
	'ivory': 0xFFFFF0,
	'khaki': 0xF0E68C,
	'lavender': 0xE6E6FA,
	'lavenderblush': 0xFFF0F5,
	'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD,
	'lightblue': 0xADD8E6,
	'lightcoral': 0xF08080,
	'lightcyan': 0xE0FFFF,
	'lightgoldenrodyellow': 0xFAFAD2,
	'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90,
	'lightgrey': 0xD3D3D3,
	'lightpink': 0xFFB6C1,
	'lightsalmon': 0xFFA07A,
	'lightseagreen': 0x20B2AA,
	'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899,
	'lightslategrey': 0x778899,
	'lightsteelblue': 0xB0C4DE,
	'lightyellow': 0xFFFFE0,
	'lime': 0x00FF00,
	'limegreen': 0x32CD32,
	'linen': 0xFAF0E6,
	'magenta': 0xFF00FF,
	'maroon': 0x800000,
	'mediumaquamarine': 0x66CDAA,
	'mediumblue': 0x0000CD,
	'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB,
	'mediumseagreen': 0x3CB371,
	'mediumslateblue': 0x7B68EE,
	'mediumspringgreen': 0x00FA9A,
	'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585,
	'midnightblue': 0x191970,
	'mintcream': 0xF5FFFA,
	'mistyrose': 0xFFE4E1,
	'moccasin': 0xFFE4B5,
	'navajowhite': 0xFFDEAD,
	'navy': 0x000080,
	'oldlace': 0xFDF5E6,
	'olive': 0x808000,
	'olivedrab': 0x6B8E23,
	'orange': 0xFFA500,
	'orangered': 0xFF4500,
	'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA,
	'palegreen': 0x98FB98,
	'paleturquoise': 0xAFEEEE,
	'palevioletred': 0xDB7093,
	'papayawhip': 0xFFEFD5,
	'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F,
	'pink': 0xFFC0CB,
	'plum': 0xDDA0DD,
	'powderblue': 0xB0E0E6,
	'purple': 0x800080,
	'rebeccapurple': 0x663399,
	'red': 0xFF0000,
	'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1,
	'saddlebrown': 0x8B4513,
	'salmon': 0xFA8072,
	'sandybrown': 0xF4A460,
	'seagreen': 0x2E8B57,
	'seashell': 0xFFF5EE,
	'sienna': 0xA0522D,
	'silver': 0xC0C0C0,
	'skyblue': 0x87CEEB,
	'slateblue': 0x6A5ACD,
	'slategray': 0x708090,
	'slategrey': 0x708090,
	'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F,
	'steelblue': 0x4682B4,
	'tan': 0xD2B48C,
	'teal': 0x008080,
	'thistle': 0xD8BFD8,
	'tomato': 0xFF6347,
	'turquoise': 0x40E0D0,
	'violet': 0xEE82EE,
	'wheat': 0xF5DEB3,
	'white': 0xFFFFFF,
	'whitesmoke': 0xF5F5F5,
	'yellow': 0xFFFF00,
	'yellowgreen': 0x9ACD32
};
const _rgb = {
	r: 0,
	g: 0,
	b: 0
};
const _hslA = {
	h: 0,
	s: 0,
	l: 0
};
const _hslB = {
	h: 0,
	s: 0,
	l: 0
};

function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
	return p;
}

function toComponents(source, target) {
	target.r = source.r;
	target.g = source.g;
	target.b = source.b;
	return target;
}

class Color {
	constructor(r, g, b) {
		this.isColor = true;
		this.r = 1;
		this.g = 1;
		this.b = 1;

		if (g === undefined && b === undefined) {
			// r is THREE.Color, hex or string
			return this.set(r);
		}

		return this.setRGB(r, g, b);
	}

	set(value) {
		if (value && value.isColor) {
			this.copy(value);
		} else if (typeof value === 'number') {
			this.setHex(value);
		} else if (typeof value === 'string') {
			this.setStyle(value);
		}

		return this;
	}

	setScalar(scalar) {
		this.r = scalar;
		this.g = scalar;
		this.b = scalar;
		return this;
	}

	setHex(hex, colorSpace = SRGBColorSpace) {
		hex = Math.floor(hex);
		this.r = (hex >> 16 & 255) / 255;
		this.g = (hex >> 8 & 255) / 255;
		this.b = (hex & 255) / 255;
		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}

	setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
		this.r = r;
		this.g = g;
		this.b = b;
		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}

	setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo(h, 1);
		s = clamp(s, 0, 1);
		l = clamp(l, 0, 1);

		if (s === 0) {
			this.r = this.g = this.b = l;
		} else {
			const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
			const q = 2 * l - p;
			this.r = hue2rgb(q, p, h + 1 / 3);
			this.g = hue2rgb(q, p, h);
			this.b = hue2rgb(q, p, h - 1 / 3);
		}

		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}

	setStyle(style, colorSpace = SRGBColorSpace) {
		function handleAlpha(string) {
			if (string === undefined) return;

			if (parseFloat(string) < 1) {
				console.warn('THREE.Color: Alpha component of ' + style + ' will be ignored.');
			}
		}

		let m;

		if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
			// rgb / hsl
			let color;
			const name = m[1];
			const components = m[2];

			switch (name) {
				case 'rgb':
				case 'rgba':
					if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						// rgb(255,0,0) rgba(255,0,0,0.5)
						this.r = Math.min(255, parseInt(color[1], 10)) / 255;
						this.g = Math.min(255, parseInt(color[2], 10)) / 255;
						this.b = Math.min(255, parseInt(color[3], 10)) / 255;
						ColorManagement.toWorkingColorSpace(this, colorSpace);
						handleAlpha(color[4]);
						return this;
					}

					if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
						this.r = Math.min(100, parseInt(color[1], 10)) / 100;
						this.g = Math.min(100, parseInt(color[2], 10)) / 100;
						this.b = Math.min(100, parseInt(color[3], 10)) / 100;
						ColorManagement.toWorkingColorSpace(this, colorSpace);
						handleAlpha(color[4]);
						return this;
					}

					break;

				case 'hsl':
				case 'hsla':
					if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
						const h = parseFloat(color[1]) / 360;
						const s = parseFloat(color[2]) / 100;
						const l = parseFloat(color[3]) / 100;
						handleAlpha(color[4]);
						return this.setHSL(h, s, l, colorSpace);
					}

					break;
			}
		} else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
			// hex color
			const hex = m[1];
			const size = hex.length;

			if (size === 3) {
				// #ff0
				this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
				this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
				this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
				ColorManagement.toWorkingColorSpace(this, colorSpace);
				return this;
			} else if (size === 6) {
				// #ff0000
				this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
				this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
				this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
				ColorManagement.toWorkingColorSpace(this, colorSpace);
				return this;
			}
		}

		if (style && style.length > 0) {
			return this.setColorName(style, colorSpace);
		}

		return this;
	}

	setColorName(style, colorSpace = SRGBColorSpace) {
		// color keywords
		const hex = _colorKeywords[style.toLowerCase()];

		if (hex !== undefined) {
			// red
			this.setHex(hex, colorSpace);
		} else {
			// unknown color
			console.warn('THREE.Color: Unknown color ' + style);
		}

		return this;
	}

	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}

	copy(color) {
		this.r = color.r;
		this.g = color.g;
		this.b = color.b;
		return this;
	}

	copySRGBToLinear(color) {
		this.r = SRGBToLinear(color.r);
		this.g = SRGBToLinear(color.g);
		this.b = SRGBToLinear(color.b);
		return this;
	}

	copyLinearToSRGB(color) {
		this.r = LinearToSRGB(color.r);
		this.g = LinearToSRGB(color.g);
		this.b = LinearToSRGB(color.b);
		return this;
	}

	convertSRGBToLinear() {
		this.copySRGBToLinear(this);
		return this;
	}

	convertLinearToSRGB() {
		this.copyLinearToSRGB(this);
		return this;
	}

	getHex(colorSpace = SRGBColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		return clamp(_rgb.r * 255, 0, 255) << 16 ^ clamp(_rgb.g * 255, 0, 255) << 8 ^ clamp(_rgb.b * 255, 0, 255) << 0;
	}

	getHexString(colorSpace = SRGBColorSpace) {
		return ('000000' + this.getHex(colorSpace).toString(16)).slice(-6);
	}

	getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
		// h,s,l ranges are in 0.0 - 1.0
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		const r = _rgb.r,
					g = _rgb.g,
					b = _rgb.b;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let hue, saturation;
		const lightness = (min + max) / 2.0;

		if (min === max) {
			hue = 0;
			saturation = 0;
		} else {
			const delta = max - min;
			saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);

			switch (max) {
				case r:
					hue = (g - b) / delta + (g < b ? 6 : 0);
					break;

				case g:
					hue = (b - r) / delta + 2;
					break;

				case b:
					hue = (r - g) / delta + 4;
					break;
			}

			hue /= 6;
		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;
		return target;
	}

	getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		target.r = _rgb.r;
		target.g = _rgb.g;
		target.b = _rgb.b;
		return target;
	}

	getStyle(colorSpace = SRGBColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);

		if (colorSpace !== SRGBColorSpace) {
			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${colorSpace} ${_rgb.r} ${_rgb.g} ${_rgb.b})`;
		}

		return `rgb(${_rgb.r * 255 | 0},${_rgb.g * 255 | 0},${_rgb.b * 255 | 0})`;
	}

	offsetHSL(h, s, l) {
		this.getHSL(_hslA);
		_hslA.h += h;
		_hslA.s += s;
		_hslA.l += l;
		this.setHSL(_hslA.h, _hslA.s, _hslA.l);
		return this;
	}

	add(color) {
		this.r += color.r;
		this.g += color.g;
		this.b += color.b;
		return this;
	}

	addColors(color1, color2) {
		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;
		return this;
	}

	addScalar(s) {
		this.r += s;
		this.g += s;
		this.b += s;
		return this;
	}

	sub(color) {
		this.r = Math.max(0, this.r - color.r);
		this.g = Math.max(0, this.g - color.g);
		this.b = Math.max(0, this.b - color.b);
		return this;
	}

	multiply(color) {
		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;
		return this;
	}

	multiplyScalar(s) {
		this.r *= s;
		this.g *= s;
		this.b *= s;
		return this;
	}

	lerp(color, alpha) {
		this.r += (color.r - this.r) * alpha;
		this.g += (color.g - this.g) * alpha;
		this.b += (color.b - this.b) * alpha;
		return this;
	}

	lerpColors(color1, color2, alpha) {
		this.r = color1.r + (color2.r - color1.r) * alpha;
		this.g = color1.g + (color2.g - color1.g) * alpha;
		this.b = color1.b + (color2.b - color1.b) * alpha;
		return this;
	}

	lerpHSL(color, alpha) {
		this.getHSL(_hslA);
		color.getHSL(_hslB);
		const h = lerp(_hslA.h, _hslB.h, alpha);
		const s = lerp(_hslA.s, _hslB.s, alpha);
		const l = lerp(_hslA.l, _hslB.l, alpha);
		this.setHSL(h, s, l);
		return this;
	}

	equals(c) {
		return c.r === this.r && c.g === this.g && c.b === this.b;
	}

	fromArray(array, offset = 0) {
		this.r = array[offset];
		this.g = array[offset + 1];
		this.b = array[offset + 2];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.r;
		array[offset + 1] = this.g;
		array[offset + 2] = this.b;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.r = attribute.getX( index );
	// 	this.g = attribute.getY( index );
	// 	this.b = attribute.getZ( index );
	// 	if ( attribute.normalized === true ) {
	// 		// assuming Uint8Array
	// 		this.r /= 255;
	// 		this.g /= 255;
	// 		this.b /= 255;
	// 	}
	// 	return this;
	// }


	toJSON() {
		return this.getHex();
	}

	*[Symbol.iterator]() {
		yield this.r;
		yield this.g;
		yield this.b;
	}

}

Color.NAMES = _colorKeywords;

/**
 * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
 */
class Cylindrical {
	constructor(radius = 1, theta = 0, y = 0) {
		this.radius = radius; // distance from the origin to a point in the x-z plane

		this.theta = theta; // counterclockwise angle in the x-z plane measured in radians from the positive z-axis

		this.y = y; // height above the x-z plane

		return this;
	}

	set(radius, theta, y) {
		this.radius = radius;
		this.theta = theta;
		this.y = y;
		return this;
	}

	copy(other) {
		this.radius = other.radius;
		this.theta = other.theta;
		this.y = other.y;
		return this;
	}

	setFromVector3(v) {
		return this.setFromCartesianCoords(v.x, v.y, v.z);
	}

	setFromCartesianCoords(x, y, z) {
		this.radius = Math.sqrt(x * x + z * z);
		this.theta = Math.atan2(x, z);
		this.y = y;
		return this;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

class Matrix4 {
	constructor() {
		Matrix4.prototype.isMatrix4 = true;
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	}

	set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
		const te = this.elements;
		te[0] = n11;
		te[4] = n12;
		te[8] = n13;
		te[12] = n14;
		te[1] = n21;
		te[5] = n22;
		te[9] = n23;
		te[13] = n24;
		te[2] = n31;
		te[6] = n32;
		te[10] = n33;
		te[14] = n34;
		te[3] = n41;
		te[7] = n42;
		te[11] = n43;
		te[15] = n44;
		return this;
	}

	identity() {
		this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this;
	}

	clone() {
		return new Matrix4().fromArray(this.elements);
	}

	copy(m) {
		const te = this.elements;
		const me = m.elements;
		te[0] = me[0];
		te[1] = me[1];
		te[2] = me[2];
		te[3] = me[3];
		te[4] = me[4];
		te[5] = me[5];
		te[6] = me[6];
		te[7] = me[7];
		te[8] = me[8];
		te[9] = me[9];
		te[10] = me[10];
		te[11] = me[11];
		te[12] = me[12];
		te[13] = me[13];
		te[14] = me[14];
		te[15] = me[15];
		return this;
	}

	copyPosition(m) {
		const te = this.elements,
					me = m.elements;
		te[12] = me[12];
		te[13] = me[13];
		te[14] = me[14];
		return this;
	}

	setFromMatrix3(m) {
		const me = m.elements;
		this.set(me[0], me[3], me[6], 0, me[1], me[4], me[7], 0, me[2], me[5], me[8], 0, 0, 0, 0, 1);
		return this;
	}

	extractBasis(xAxis, yAxis, zAxis) {
		xAxis.setFromMatrixColumn(this, 0);
		yAxis.setFromMatrixColumn(this, 1);
		zAxis.setFromMatrixColumn(this, 2);
		return this;
	}

	makeBasis(xAxis, yAxis, zAxis) {
		this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
		return this;
	}

	extractRotation(m) {
		// this method does not support reflection matrices
		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$2.setFromMatrixColumn(m, 0).length();

		const scaleY = 1 / _v1$2.setFromMatrixColumn(m, 1).length();

		const scaleZ = 1 / _v1$2.setFromMatrixColumn(m, 2).length();

		te[0] = me[0] * scaleX;
		te[1] = me[1] * scaleX;
		te[2] = me[2] * scaleX;
		te[3] = 0;
		te[4] = me[4] * scaleY;
		te[5] = me[5] * scaleY;
		te[6] = me[6] * scaleY;
		te[7] = 0;
		te[8] = me[8] * scaleZ;
		te[9] = me[9] * scaleZ;
		te[10] = me[10] * scaleZ;
		te[11] = 0;
		te[12] = 0;
		te[13] = 0;
		te[14] = 0;
		te[15] = 1;
		return this;
	}

	makeRotationFromEuler(euler) {
		const te = this.elements;
		const x = euler.x,
					y = euler.y,
					z = euler.z;
		const a = Math.cos(x),
					b = Math.sin(x);
		const c = Math.cos(y),
					d = Math.sin(y);
		const e = Math.cos(z),
					f = Math.sin(z);

		if (euler.order === 'XYZ') {
			const ae = a * e,
						af = a * f,
						be = b * e,
						bf = b * f;
			te[0] = c * e;
			te[4] = -c * f;
			te[8] = d;
			te[1] = af + be * d;
			te[5] = ae - bf * d;
			te[9] = -b * c;
			te[2] = bf - ae * d;
			te[6] = be + af * d;
			te[10] = a * c;
		} else if (euler.order === 'YXZ') {
			const ce = c * e,
						cf = c * f,
						de = d * e,
						df = d * f;
			te[0] = ce + df * b;
			te[4] = de * b - cf;
			te[8] = a * d;
			te[1] = a * f;
			te[5] = a * e;
			te[9] = -b;
			te[2] = cf * b - de;
			te[6] = df + ce * b;
			te[10] = a * c;
		} else if (euler.order === 'ZXY') {
			const ce = c * e,
						cf = c * f,
						de = d * e,
						df = d * f;
			te[0] = ce - df * b;
			te[4] = -a * f;
			te[8] = de + cf * b;
			te[1] = cf + de * b;
			te[5] = a * e;
			te[9] = df - ce * b;
			te[2] = -a * d;
			te[6] = b;
			te[10] = a * c;
		} else if (euler.order === 'ZYX') {
			const ae = a * e,
						af = a * f,
						be = b * e,
						bf = b * f;
			te[0] = c * e;
			te[4] = be * d - af;
			te[8] = ae * d + bf;
			te[1] = c * f;
			te[5] = bf * d + ae;
			te[9] = af * d - be;
			te[2] = -d;
			te[6] = b * c;
			te[10] = a * c;
		} else if (euler.order === 'YZX') {
			const ac = a * c,
						ad = a * d,
						bc = b * c,
						bd = b * d;
			te[0] = c * e;
			te[4] = bd - ac * f;
			te[8] = bc * f + ad;
			te[1] = f;
			te[5] = a * e;
			te[9] = -b * e;
			te[2] = -d * e;
			te[6] = ad * f + bc;
			te[10] = ac - bd * f;
		} else if (euler.order === 'XZY') {
			const ac = a * c,
						ad = a * d,
						bc = b * c,
						bd = b * d;
			te[0] = c * e;
			te[4] = -f;
			te[8] = d * e;
			te[1] = ac * f + bd;
			te[5] = a * e;
			te[9] = ad * f - bc;
			te[2] = bc * f - ad;
			te[6] = b * e;
			te[10] = bd * f + ac;
		} // bottom row


		te[3] = 0;
		te[7] = 0;
		te[11] = 0; // last column

		te[12] = 0;
		te[13] = 0;
		te[14] = 0;
		te[15] = 1;
		return this;
	}

	makeRotationFromQuaternion(q) {
		return this.compose(_zero, q, _one);
	}

	lookAt(eye, target, up) {
		const te = this.elements;

		_z.subVectors(eye, target);

		if (_z.lengthSq() === 0) {
			// eye and target are in the same position
			_z.z = 1;
		}

		_z.normalize();

		_x.crossVectors(up, _z);

		if (_x.lengthSq() === 0) {
			// up and z are parallel
			if (Math.abs(up.z) === 1) {
				_z.x += 0.0001;
			} else {
				_z.z += 0.0001;
			}

			_z.normalize();

			_x.crossVectors(up, _z);
		}

		_x.normalize();

		_y.crossVectors(_z, _x);

		te[0] = _x.x;
		te[4] = _y.x;
		te[8] = _z.x;
		te[1] = _x.y;
		te[5] = _y.y;
		te[9] = _z.y;
		te[2] = _x.z;
		te[6] = _y.z;
		te[10] = _z.z;
		return this;
	}

	multiply(m) {
		return this.multiplyMatrices(this, m);
	}

	premultiply(m) {
		return this.multiplyMatrices(m, this);
	}

	multiplyMatrices(a, b) {
		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;
		const a11 = ae[0],
					a12 = ae[4],
					a13 = ae[8],
					a14 = ae[12];
		const a21 = ae[1],
					a22 = ae[5],
					a23 = ae[9],
					a24 = ae[13];
		const a31 = ae[2],
					a32 = ae[6],
					a33 = ae[10],
					a34 = ae[14];
		const a41 = ae[3],
					a42 = ae[7],
					a43 = ae[11],
					a44 = ae[15];
		const b11 = be[0],
					b12 = be[4],
					b13 = be[8],
					b14 = be[12];
		const b21 = be[1],
					b22 = be[5],
					b23 = be[9],
					b24 = be[13];
		const b31 = be[2],
					b32 = be[6],
					b33 = be[10],
					b34 = be[14];
		const b41 = be[3],
					b42 = be[7],
					b43 = be[11],
					b44 = be[15];
		te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
		return this;
	}

	multiplyScalar(s) {
		const te = this.elements;
		te[0] *= s;
		te[4] *= s;
		te[8] *= s;
		te[12] *= s;
		te[1] *= s;
		te[5] *= s;
		te[9] *= s;
		te[13] *= s;
		te[2] *= s;
		te[6] *= s;
		te[10] *= s;
		te[14] *= s;
		te[3] *= s;
		te[7] *= s;
		te[11] *= s;
		te[15] *= s;
		return this;
	}

	determinant() {
		const te = this.elements;
		const n11 = te[0],
					n12 = te[4],
					n13 = te[8],
					n14 = te[12];
		const n21 = te[1],
					n22 = te[5],
					n23 = te[9],
					n24 = te[13];
		const n31 = te[2],
					n32 = te[6],
					n33 = te[10],
					n34 = te[14];
		const n41 = te[3],
					n42 = te[7],
					n43 = te[11],
					n44 = te[15]; //TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
	}

	transpose() {
		const te = this.elements;
		let tmp;
		tmp = te[1];
		te[1] = te[4];
		te[4] = tmp;
		tmp = te[2];
		te[2] = te[8];
		te[8] = tmp;
		tmp = te[6];
		te[6] = te[9];
		te[9] = tmp;
		tmp = te[3];
		te[3] = te[12];
		te[12] = tmp;
		tmp = te[7];
		te[7] = te[13];
		te[13] = tmp;
		tmp = te[11];
		te[11] = te[14];
		te[14] = tmp;
		return this;
	}

	setPosition(x, y, z) {
		const te = this.elements;

		if (x.isVector3) {
			te[12] = x.x;
			te[13] = x.y;
			te[14] = x.z;
		} else {
			te[12] = x;
			te[13] = y;
			te[14] = z;
		}

		return this;
	}

	invert() {
		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,
					n11 = te[0],
					n21 = te[1],
					n31 = te[2],
					n41 = te[3],
					n12 = te[4],
					n22 = te[5],
					n32 = te[6],
					n42 = te[7],
					n13 = te[8],
					n23 = te[9],
					n33 = te[10],
					n43 = te[11],
					n14 = te[12],
					n24 = te[13],
					n34 = te[14],
					n44 = te[15],
					t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
					t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
					t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
					t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
		if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		const detInv = 1 / det;
		te[0] = t11 * detInv;
		te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
		te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
		te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
		te[4] = t12 * detInv;
		te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
		te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
		te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
		te[8] = t13 * detInv;
		te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
		te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
		te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
		te[12] = t14 * detInv;
		te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
		te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
		te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
		return this;
	}

	scale(v) {
		const te = this.elements;
		const x = v.x,
					y = v.y,
					z = v.z;
		te[0] *= x;
		te[4] *= y;
		te[8] *= z;
		te[1] *= x;
		te[5] *= y;
		te[9] *= z;
		te[2] *= x;
		te[6] *= y;
		te[10] *= z;
		te[3] *= x;
		te[7] *= y;
		te[11] *= z;
		return this;
	}

	getMaxScaleOnAxis() {
		const te = this.elements;
		const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
		const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
		const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
		return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
	}

	makeTranslation(x, y, z) {
		this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
		return this;
	}

	makeRotationX(theta) {
		const c = Math.cos(theta),
					s = Math.sin(theta);
		this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
		return this;
	}

	makeRotationY(theta) {
		const c = Math.cos(theta),
					s = Math.sin(theta);
		this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
		return this;
	}

	makeRotationZ(theta) {
		const c = Math.cos(theta),
					s = Math.sin(theta);
		this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this;
	}

	makeRotationAxis(axis, angle) {
		// Based on http://www.gamedev.net/reference/articles/article1199.asp
		const c = Math.cos(angle);
		const s = Math.sin(angle);
		const t = 1 - c;
		const x = axis.x,
					y = axis.y,
					z = axis.z;
		const tx = t * x,
					ty = t * y;
		this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
		return this;
	}

	makeScale(x, y, z) {
		this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
		return this;
	}

	makeShear(xy, xz, yx, yz, zx, zy) {
		this.set(1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1, 0, 0, 0, 0, 1);
		return this;
	}

	compose(position, quaternion, scale) {
		const te = this.elements;
		const x = quaternion._x,
					y = quaternion._y,
					z = quaternion._z,
					w = quaternion._w;
		const x2 = x + x,
					y2 = y + y,
					z2 = z + z;
		const xx = x * x2,
					xy = x * y2,
					xz = x * z2;
		const yy = y * y2,
					yz = y * z2,
					zz = z * z2;
		const wx = w * x2,
					wy = w * y2,
					wz = w * z2;
		const sx = scale.x,
					sy = scale.y,
					sz = scale.z;
		te[0] = (1 - (yy + zz)) * sx;
		te[1] = (xy + wz) * sx;
		te[2] = (xz - wy) * sx;
		te[3] = 0;
		te[4] = (xy - wz) * sy;
		te[5] = (1 - (xx + zz)) * sy;
		te[6] = (yz + wx) * sy;
		te[7] = 0;
		te[8] = (xz + wy) * sz;
		te[9] = (yz - wx) * sz;
		te[10] = (1 - (xx + yy)) * sz;
		te[11] = 0;
		te[12] = position.x;
		te[13] = position.y;
		te[14] = position.z;
		te[15] = 1;
		return this;
	}

	decompose(position, quaternion, scale) {
		const te = this.elements;

		let sx = _v1$2.set(te[0], te[1], te[2]).length();

		const sy = _v1$2.set(te[4], te[5], te[6]).length();

		const sz = _v1$2.set(te[8], te[9], te[10]).length(); // if determine is negative, we need to invert one scale


		const det = this.determinant();
		if (det < 0) sx = -sx;
		position.x = te[12];
		position.y = te[13];
		position.z = te[14]; // scale the rotation part

		_m1.copy(this);

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;
		_m1.elements[0] *= invSX;
		_m1.elements[1] *= invSX;
		_m1.elements[2] *= invSX;
		_m1.elements[4] *= invSY;
		_m1.elements[5] *= invSY;
		_m1.elements[6] *= invSY;
		_m1.elements[8] *= invSZ;
		_m1.elements[9] *= invSZ;
		_m1.elements[10] *= invSZ;
		quaternion.setFromRotationMatrix(_m1);
		scale.x = sx;
		scale.y = sy;
		scale.z = sz;
		return this;
	}

	makePerspective(left, right, top, bottom, near, far) {
		const te = this.elements;
		const x = 2 * near / (right - left);
		const y = 2 * near / (top - bottom);
		const a = (right + left) / (right - left);
		const b = (top + bottom) / (top - bottom);
		const c = -(far + near) / (far - near);
		const d = -2 * far * near / (far - near);
		te[0] = x;
		te[4] = 0;
		te[8] = a;
		te[12] = 0;
		te[1] = 0;
		te[5] = y;
		te[9] = b;
		te[13] = 0;
		te[2] = 0;
		te[6] = 0;
		te[10] = c;
		te[14] = d;
		te[3] = 0;
		te[7] = 0;
		te[11] = -1;
		te[15] = 0;
		return this;
	}

	makeOrthographic(left, right, top, bottom, near, far) {
		const te = this.elements;
		const w = 1.0 / (right - left);
		const h = 1.0 / (top - bottom);
		const p = 1.0 / (far - near);
		const x = (right + left) * w;
		const y = (top + bottom) * h;
		const z = (far + near) * p;
		te[0] = 2 * w;
		te[4] = 0;
		te[8] = 0;
		te[12] = -x;
		te[1] = 0;
		te[5] = 2 * h;
		te[9] = 0;
		te[13] = -y;
		te[2] = 0;
		te[6] = 0;
		te[10] = -2 * p;
		te[14] = -z;
		te[3] = 0;
		te[7] = 0;
		te[11] = 0;
		te[15] = 1;
		return this;
	}

	equals(matrix) {
		const te = this.elements;
		const me = matrix.elements;

		for (let i = 0; i < 16; i++) {
			if (te[i] !== me[i]) return false;
		}

		return true;
	}

	fromArray(array, offset = 0) {
		for (let i = 0; i < 16; i++) {
			this.elements[i] = array[i + offset];
		}

		return this;
	}

	toArray(array = [], offset = 0) {
		const te = this.elements;
		array[offset] = te[0];
		array[offset + 1] = te[1];
		array[offset + 2] = te[2];
		array[offset + 3] = te[3];
		array[offset + 4] = te[4];
		array[offset + 5] = te[5];
		array[offset + 6] = te[6];
		array[offset + 7] = te[7];
		array[offset + 8] = te[8];
		array[offset + 9] = te[9];
		array[offset + 10] = te[10];
		array[offset + 11] = te[11];
		array[offset + 12] = te[12];
		array[offset + 13] = te[13];
		array[offset + 14] = te[14];
		array[offset + 15] = te[15];
		return array;
	}

}

const _v1$2 = /*@__PURE__*/new Vector3();

const _m1 = /*@__PURE__*/new Matrix4();

const _zero = /*@__PURE__*/new Vector3(0, 0, 0);

const _one = /*@__PURE__*/new Vector3(1, 1, 1);

const _x = /*@__PURE__*/new Vector3();

const _y = /*@__PURE__*/new Vector3();

const _z = /*@__PURE__*/new Vector3();

const _matrix = /*@__PURE__*/new Matrix4();

const _quaternion = /*@__PURE__*/new Quaternion();

class Euler {
	constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
		this.isEuler = true;
		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;
	}

	get x() {
		return this._x;
	}

	set x(value) {
		this._x = value;

		this._onChangeCallback();
	}

	get y() {
		return this._y;
	}

	set y(value) {
		this._y = value;

		this._onChangeCallback();
	}

	get z() {
		return this._z;
	}

	set z(value) {
		this._z = value;

		this._onChangeCallback();
	}

	get order() {
		return this._order;
	}

	set order(value) {
		this._order = value;

		this._onChangeCallback();
	}

	set(x, y, z, order = this._order) {
		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;
	}

	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}

	copy(euler) {
		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;
	}

	setFromRotationMatrix(m, order = this._order, update = true) {
		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
		const te = m.elements;
		const m11 = te[0],
					m12 = te[4],
					m13 = te[8];
		const m21 = te[1],
					m22 = te[5],
					m23 = te[9];
		const m31 = te[2],
					m32 = te[6],
					m33 = te[10];

		switch (order) {
			case 'XYZ':
				this._y = Math.asin(clamp(m13, -1, 1));

				if (Math.abs(m13) < 0.9999999) {
					this._x = Math.atan2(-m23, m33);
					this._z = Math.atan2(-m12, m11);
				} else {
					this._x = Math.atan2(m32, m22);
					this._z = 0;
				}

				break;

			case 'YXZ':
				this._x = Math.asin(-clamp(m23, -1, 1));

				if (Math.abs(m23) < 0.9999999) {
					this._y = Math.atan2(m13, m33);
					this._z = Math.atan2(m21, m22);
				} else {
					this._y = Math.atan2(-m31, m11);
					this._z = 0;
				}

				break;

			case 'ZXY':
				this._x = Math.asin(clamp(m32, -1, 1));

				if (Math.abs(m32) < 0.9999999) {
					this._y = Math.atan2(-m31, m33);
					this._z = Math.atan2(-m12, m22);
				} else {
					this._y = 0;
					this._z = Math.atan2(m21, m11);
				}

				break;

			case 'ZYX':
				this._y = Math.asin(-clamp(m31, -1, 1));

				if (Math.abs(m31) < 0.9999999) {
					this._x = Math.atan2(m32, m33);
					this._z = Math.atan2(m21, m11);
				} else {
					this._x = 0;
					this._z = Math.atan2(-m12, m22);
				}

				break;

			case 'YZX':
				this._z = Math.asin(clamp(m21, -1, 1));

				if (Math.abs(m21) < 0.9999999) {
					this._x = Math.atan2(-m23, m22);
					this._y = Math.atan2(-m31, m11);
				} else {
					this._x = 0;
					this._y = Math.atan2(m13, m33);
				}

				break;

			case 'XZY':
				this._z = Math.asin(-clamp(m12, -1, 1));

				if (Math.abs(m12) < 0.9999999) {
					this._x = Math.atan2(m32, m22);
					this._y = Math.atan2(m13, m11);
				} else {
					this._x = Math.atan2(-m23, m33);
					this._y = 0;
				}

				break;

			default:
				console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order);
		}

		this._order = order;
		if (update === true) this._onChangeCallback();
		return this;
	}

	setFromQuaternion(q, order, update) {
		_matrix.makeRotationFromQuaternion(q);

		return this.setFromRotationMatrix(_matrix, order, update);
	}

	setFromVector3(v, order = this._order) {
		return this.set(v.x, v.y, v.z, order);
	}

	reorder(newOrder) {
		// WARNING: this discards revolution information -bhouston
		_quaternion.setFromEuler(this);

		return this.setFromQuaternion(_quaternion, newOrder);
	}

	equals(euler) {
		return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
	}

	fromArray(array) {
		this._x = array[0];
		this._y = array[1];
		this._z = array[2];
		if (array[3] !== undefined) this._order = array[3];

		this._onChangeCallback();

		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this._x;
		array[offset + 1] = this._y;
		array[offset + 2] = this._z;
		array[offset + 3] = this._order;
		return array;
	}

	_onChange(callback) {
		this._onChangeCallback = callback;
		return this;
	}

	_onChangeCallback() {}

	*[Symbol.iterator]() {
		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;
	} // @deprecated since r138, 02cf0df1cb4575d5842fef9c85bb5a89fe020d53


	toVector3() {
		console.error('THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead');
	}

}

Euler.DefaultOrder = 'XYZ';
Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];

/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 */
class Interpolant {
	constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
		this.parameterPositions = parameterPositions;
		this._cachedIndex = 0;
		this.resultBuffer = resultBuffer !== undefined ? resultBuffer : new sampleValues.constructor(sampleSize);
		this.sampleValues = sampleValues;
		this.valueSize = sampleSize;
		this.settings = null;
		this.DefaultSettings_ = {};
	}

	evaluate(t) {
		const pp = this.parameterPositions;
		let i1 = this._cachedIndex,
				t1 = pp[i1],
				t0 = pp[i1 - 1];

		validate_interval: {
			seek: {
				let right;

				linear_scan: {
					//- See http://jsperf.com/comparison-to-undefined/3
					//- slower code:
					//-
					//- 				if ( t >= t1 || t1 === undefined ) {
					forward_scan: if (!(t < t1)) {
						for (let giveUpAt = i1 + 2;;) {
							if (t1 === undefined) {
								if (t < t0) break forward_scan; // after end

								i1 = pp.length;
								this._cachedIndex = i1;
								return this.copySampleValue_(i1 - 1);
							}

							if (i1 === giveUpAt) break; // this loop

							t0 = t1;
							t1 = pp[++i1];

							if (t < t1) {
								// we have arrived at the sought interval
								break seek;
							}
						} // prepare binary search on the right side of the index


						right = pp.length;
						break linear_scan;
					} //- slower code:
					//-					if ( t < t0 || t0 === undefined ) {


					if (!(t >= t0)) {
						// looping?
						const t1global = pp[1];

						if (t < t1global) {
							i1 = 2; // + 1, using the scan for the details

							t0 = t1global;
						} // linear reverse scan


						for (let giveUpAt = i1 - 2;;) {
							if (t0 === undefined) {
								// before start
								this._cachedIndex = 0;
								return this.copySampleValue_(0);
							}

							if (i1 === giveUpAt) break; // this loop

							t1 = t0;
							t0 = pp[--i1 - 1];

							if (t >= t0) {
								// we have arrived at the sought interval
								break seek;
							}
						} // prepare binary search on the left side of the index


						right = i1;
						i1 = 0;
						break linear_scan;
					} // the interval is valid


					break validate_interval;
				} // linear scan
				// binary search


				while (i1 < right) {
					const mid = i1 + right >>> 1;

					if (t < pp[mid]) {
						right = mid;
					} else {
						i1 = mid + 1;
					}
				}

				t1 = pp[i1];
				t0 = pp[i1 - 1]; // check boundary cases, again

				if (t0 === undefined) {
					this._cachedIndex = 0;
					return this.copySampleValue_(0);
				}

				if (t1 === undefined) {
					i1 = pp.length;
					this._cachedIndex = i1;
					return this.copySampleValue_(i1 - 1);
				}
			} // seek


			this._cachedIndex = i1;
			this.intervalChanged_(i1, t0, t1);
		} // validate_interval


		return this.interpolate_(i1, t0, t, t1);
	}

	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}

	copySampleValue_(index) {
		// copies a sample value to the result buffer
		const result = this.resultBuffer,
					values = this.sampleValues,
					stride = this.valueSize,
					offset = index * stride;

		for (let i = 0; i !== stride; ++i) {
			result[i] = values[offset + i];
		}

		return result;
	} // Template methods for derived classes:


	interpolate_() {
		throw new Error('call to abstract method'); // implementations shall return this.resultBuffer
	}

	intervalChanged_() {// empty
	}

}

const _startP = /*@__PURE__*/new Vector3();

const _startEnd = /*@__PURE__*/new Vector3();

class Line3 {
	constructor(start = new Vector3(), end = new Vector3()) {
		this.start = start;
		this.end = end;
	}

	set(start, end) {
		this.start.copy(start);
		this.end.copy(end);
		return this;
	}

	copy(line) {
		this.start.copy(line.start);
		this.end.copy(line.end);
		return this;
	}

	getCenter(target) {
		return target.addVectors(this.start, this.end).multiplyScalar(0.5);
	}

	delta(target) {
		return target.subVectors(this.end, this.start);
	}

	distanceSq() {
		return this.start.distanceToSquared(this.end);
	}

	distance() {
		return this.start.distanceTo(this.end);
	}

	at(t, target) {
		return this.delta(target).multiplyScalar(t).add(this.start);
	}

	closestPointToPointParameter(point, clampToLine) {
		_startP.subVectors(point, this.start);

		_startEnd.subVectors(this.end, this.start);

		const startEnd2 = _startEnd.dot(_startEnd);

		const startEnd_startP = _startEnd.dot(_startP);

		let t = startEnd_startP / startEnd2;

		if (clampToLine) {
			t = clamp(t, 0, 1);
		}

		return t;
	}

	closestPointToPoint(point, clampToLine, target) {
		const t = this.closestPointToPointParameter(point, clampToLine);
		return this.delta(target).multiplyScalar(t).add(this.start);
	}

	applyMatrix4(matrix) {
		this.start.applyMatrix4(matrix);
		this.end.applyMatrix4(matrix);
		return this;
	}

	equals(line) {
		return line.start.equals(this.start) && line.end.equals(this.end);
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

class Matrix3 {
	constructor() {
		Matrix3.prototype.isMatrix3 = true;
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
	}

	set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
		const te = this.elements;
		te[0] = n11;
		te[1] = n21;
		te[2] = n31;
		te[3] = n12;
		te[4] = n22;
		te[5] = n32;
		te[6] = n13;
		te[7] = n23;
		te[8] = n33;
		return this;
	}

	identity() {
		this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
		return this;
	}

	copy(m) {
		const te = this.elements;
		const me = m.elements;
		te[0] = me[0];
		te[1] = me[1];
		te[2] = me[2];
		te[3] = me[3];
		te[4] = me[4];
		te[5] = me[5];
		te[6] = me[6];
		te[7] = me[7];
		te[8] = me[8];
		return this;
	}

	extractBasis(xAxis, yAxis, zAxis) {
		xAxis.setFromMatrix3Column(this, 0);
		yAxis.setFromMatrix3Column(this, 1);
		zAxis.setFromMatrix3Column(this, 2);
		return this;
	}

	setFromMatrix4(m) {
		const me = m.elements;
		this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
		return this;
	}

	multiply(m) {
		return this.multiplyMatrices(this, m);
	}

	premultiply(m) {
		return this.multiplyMatrices(m, this);
	}

	multiplyMatrices(a, b) {
		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;
		const a11 = ae[0],
					a12 = ae[3],
					a13 = ae[6];
		const a21 = ae[1],
					a22 = ae[4],
					a23 = ae[7];
		const a31 = ae[2],
					a32 = ae[5],
					a33 = ae[8];
		const b11 = be[0],
					b12 = be[3],
					b13 = be[6];
		const b21 = be[1],
					b22 = be[4],
					b23 = be[7];
		const b31 = be[2],
					b32 = be[5],
					b33 = be[8];
		te[0] = a11 * b11 + a12 * b21 + a13 * b31;
		te[3] = a11 * b12 + a12 * b22 + a13 * b32;
		te[6] = a11 * b13 + a12 * b23 + a13 * b33;
		te[1] = a21 * b11 + a22 * b21 + a23 * b31;
		te[4] = a21 * b12 + a22 * b22 + a23 * b32;
		te[7] = a21 * b13 + a22 * b23 + a23 * b33;
		te[2] = a31 * b11 + a32 * b21 + a33 * b31;
		te[5] = a31 * b12 + a32 * b22 + a33 * b32;
		te[8] = a31 * b13 + a32 * b23 + a33 * b33;
		return this;
	}

	multiplyScalar(s) {
		const te = this.elements;
		te[0] *= s;
		te[3] *= s;
		te[6] *= s;
		te[1] *= s;
		te[4] *= s;
		te[7] *= s;
		te[2] *= s;
		te[5] *= s;
		te[8] *= s;
		return this;
	}

	determinant() {
		const te = this.elements;
		const a = te[0],
					b = te[1],
					c = te[2],
					d = te[3],
					e = te[4],
					f = te[5],
					g = te[6],
					h = te[7],
					i = te[8];
		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
	}

	invert() {
		const te = this.elements,
					n11 = te[0],
					n21 = te[1],
					n31 = te[2],
					n12 = te[3],
					n22 = te[4],
					n32 = te[5],
					n13 = te[6],
					n23 = te[7],
					n33 = te[8],
					t11 = n33 * n22 - n32 * n23,
					t12 = n32 * n13 - n33 * n12,
					t13 = n23 * n12 - n22 * n13,
					det = n11 * t11 + n21 * t12 + n31 * t13;
		if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		const detInv = 1 / det;
		te[0] = t11 * detInv;
		te[1] = (n31 * n23 - n33 * n21) * detInv;
		te[2] = (n32 * n21 - n31 * n22) * detInv;
		te[3] = t12 * detInv;
		te[4] = (n33 * n11 - n31 * n13) * detInv;
		te[5] = (n31 * n12 - n32 * n11) * detInv;
		te[6] = t13 * detInv;
		te[7] = (n21 * n13 - n23 * n11) * detInv;
		te[8] = (n22 * n11 - n21 * n12) * detInv;
		return this;
	}

	transpose() {
		let tmp;
		const m = this.elements;
		tmp = m[1];
		m[1] = m[3];
		m[3] = tmp;
		tmp = m[2];
		m[2] = m[6];
		m[6] = tmp;
		tmp = m[5];
		m[5] = m[7];
		m[7] = tmp;
		return this;
	}

	getNormalMatrix(matrix4) {
		return this.setFromMatrix4(matrix4).invert().transpose();
	}

	transposeIntoArray(r) {
		const m = this.elements;
		r[0] = m[0];
		r[1] = m[3];
		r[2] = m[6];
		r[3] = m[1];
		r[4] = m[4];
		r[5] = m[7];
		r[6] = m[2];
		r[7] = m[5];
		r[8] = m[8];
		return this;
	}

	setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
		const c = Math.cos(rotation);
		const s = Math.sin(rotation);
		this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
		return this;
	} //


	scale(sx, sy) {
		this.premultiply(_m3.makeScale(sx, sy));
		return this;
	}

	rotate(theta) {
		this.premultiply(_m3.makeRotation(-theta));
		return this;
	}

	translate(tx, ty) {
		this.premultiply(_m3.makeTranslation(tx, ty));
		return this;
	} // for 2D Transforms


	makeTranslation(x, y) {
		this.set(1, 0, x, 0, 1, y, 0, 0, 1);
		return this;
	}

	makeRotation(theta) {
		// counterclockwise
		const c = Math.cos(theta);
		const s = Math.sin(theta);
		this.set(c, -s, 0, s, c, 0, 0, 0, 1);
		return this;
	}

	makeScale(x, y) {
		this.set(x, 0, 0, 0, y, 0, 0, 0, 1);
		return this;
	} //


	equals(matrix) {
		const te = this.elements;
		const me = matrix.elements;

		for (let i = 0; i < 9; i++) {
			if (te[i] !== me[i]) return false;
		}

		return true;
	}

	fromArray(array, offset = 0) {
		for (let i = 0; i < 9; i++) {
			this.elements[i] = array[i + offset];
		}

		return this;
	}

	toArray(array = [], offset = 0) {
		const te = this.elements;
		array[offset] = te[0];
		array[offset + 1] = te[1];
		array[offset + 2] = te[2];
		array[offset + 3] = te[3];
		array[offset + 4] = te[4];
		array[offset + 5] = te[5];
		array[offset + 6] = te[6];
		array[offset + 7] = te[7];
		array[offset + 8] = te[8];
		return array;
	}

	clone() {
		return new this.constructor().fromArray(this.elements);
	}

}

const _m3 = /*@__PURE__*/new Matrix3();

const _vector1 = /*@__PURE__*/new Vector3();

const _vector2 = /*@__PURE__*/new Vector3();

const _normalMatrix = /*@__PURE__*/new Matrix3();

class Plane {
	constructor(normal = new Vector3(1, 0, 0), constant = 0) {
		this.isPlane = true; // normal is assumed to be normalized

		this.normal = normal;
		this.constant = constant;
	}

	set(normal, constant) {
		this.normal.copy(normal);
		this.constant = constant;
		return this;
	}

	setComponents(x, y, z, w) {
		this.normal.set(x, y, z);
		this.constant = w;
		return this;
	}

	setFromNormalAndCoplanarPoint(normal, point) {
		this.normal.copy(normal);
		this.constant = -point.dot(this.normal);
		return this;
	}

	setFromCoplanarPoints(a, b, c) {
		const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize(); // Q: should an error be thrown if normal is zero (e.g. degenerate plane)?


		this.setFromNormalAndCoplanarPoint(normal, a);
		return this;
	}

	copy(plane) {
		this.normal.copy(plane.normal);
		this.constant = plane.constant;
		return this;
	}

	normalize() {
		// Note: will lead to a divide by zero if the plane is invalid.
		const inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar(inverseNormalLength);
		this.constant *= inverseNormalLength;
		return this;
	}

	negate() {
		this.constant *= -1;
		this.normal.negate();
		return this;
	}

	distanceToPoint(point) {
		return this.normal.dot(point) + this.constant;
	}

	distanceToSphere(sphere) {
		return this.distanceToPoint(sphere.center) - sphere.radius;
	}

	projectPoint(point, target) {
		return target.copy(this.normal).multiplyScalar(-this.distanceToPoint(point)).add(point);
	}

	intersectLine(line, target) {
		const direction = line.delta(_vector1);
		const denominator = this.normal.dot(direction);

		if (denominator === 0) {
			// line is coplanar, return origin
			if (this.distanceToPoint(line.start) === 0) {
				return target.copy(line.start);
			} // Unsure if this is the correct method to handle this case.


			return null;
		}

		const t = -(line.start.dot(this.normal) + this.constant) / denominator;

		if (t < 0 || t > 1) {
			return null;
		}

		return target.copy(direction).multiplyScalar(t).add(line.start);
	}

	intersectsLine(line) {
		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
		const startSign = this.distanceToPoint(line.start);
		const endSign = this.distanceToPoint(line.end);
		return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
	}

	intersectsBox(box) {
		return box.intersectsPlane(this);
	}

	intersectsSphere(sphere) {
		return sphere.intersectsPlane(this);
	}

	coplanarPoint(target) {
		return target.copy(this.normal).multiplyScalar(-this.constant);
	}

	applyMatrix4(matrix, optionalNormalMatrix) {
		const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);

		const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
		const normal = this.normal.applyMatrix3(normalMatrix).normalize();
		this.constant = -referencePoint.dot(normal);
		return this;
	}

	translate(offset) {
		this.constant -= offset.dot(this.normal);
		return this;
	}

	equals(plane) {
		return plane.normal.equals(this.normal) && plane.constant === this.constant;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

const _vector = /*@__PURE__*/new Vector3();

const _segCenter = /*@__PURE__*/new Vector3();

const _segDir = /*@__PURE__*/new Vector3();

const _diff = /*@__PURE__*/new Vector3();

const _edge1 = /*@__PURE__*/new Vector3();

const _edge2 = /*@__PURE__*/new Vector3();

const _normal = /*@__PURE__*/new Vector3();

class Ray {
	constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
		this.origin = origin;
		this.direction = direction;
	}

	set(origin, direction) {
		this.origin.copy(origin);
		this.direction.copy(direction);
		return this;
	}

	copy(ray) {
		this.origin.copy(ray.origin);
		this.direction.copy(ray.direction);
		return this;
	}

	at(t, target = new Vector3()) {
		return target.copy(this.direction).multiplyScalar(t).add(this.origin);
	}

	lookAt(v) {
		this.direction.copy(v).sub(this.origin).normalize();
		return this;
	}

	recast(t) {
		this.origin.copy(this.at(t, _vector));
		return this;
	}

	closestPointToPoint(point, target = new Vector3()) {
		target.subVectors(point, this.origin);
		const directionDistance = target.dot(this.direction);

		if (directionDistance < 0) {
			return target.copy(this.origin);
		}

		return target.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
	}

	distanceToPoint(point) {
		return Math.sqrt(this.distanceSqToPoint(point));
	}

	distanceSqToPoint(point) {
		const directionDistance = _vector.subVectors(point, this.origin).dot(this.direction); // point behind the ray


		if (directionDistance < 0) {
			return this.origin.distanceToSquared(point);
		}

		_vector.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);

		return _vector.distanceToSquared(point);
	}

	distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment
		_segCenter.copy(v0).add(v1).multiplyScalar(0.5);

		_segDir.copy(v1).sub(v0).normalize();

		_diff.copy(this.origin).sub(_segCenter);

		const segExtent = v0.distanceTo(v1) * 0.5;
		const a01 = -this.direction.dot(_segDir);

		const b0 = _diff.dot(this.direction);

		const b1 = -_diff.dot(_segDir);

		const c = _diff.lengthSq();

		const det = Math.abs(1 - a01 * a01);
		let s0, s1, sqrDist, extDet;

		if (det > 0) {
			// The ray and segment are not parallel.
			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if (s0 >= 0) {
				if (s1 >= -extDet) {
					if (s1 <= extDet) {
						// region 0
						// Minimum at interior points of ray and segment.
						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
					} else {
						// region 1
						s1 = segExtent;
						s0 = Math.max(0, -(a01 * s1 + b0));
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					}
				} else {
					// region 5
					s1 = -segExtent;
					s0 = Math.max(0, -(a01 * s1 + b0));
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				}
			} else {
				if (s1 <= -extDet) {
					// region 4
					s0 = Math.max(0, -(-a01 * segExtent + b0));
					s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				} else if (s1 <= extDet) {
					// region 3
					s0 = 0;
					s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
					sqrDist = s1 * (s1 + 2 * b1) + c;
				} else {
					// region 2
					s0 = Math.max(0, -(a01 * segExtent + b0));
					s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				}
			}
		} else {
			// Ray and segment are parallel.
			s1 = a01 > 0 ? -segExtent : segExtent;
			s0 = Math.max(0, -(a01 * s1 + b0));
			sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
		}

		if (optionalPointOnRay) {
			optionalPointOnRay.copy(this.direction).multiplyScalar(s0).add(this.origin);
		}

		if (optionalPointOnSegment) {
			optionalPointOnSegment.copy(_segDir).multiplyScalar(s1).add(_segCenter);
		}

		return sqrDist;
	}

	intersectSphere(sphere, target = new Vector3()) {
		_vector.subVectors(sphere.center, this.origin);

		const tca = _vector.dot(this.direction);

		const d2 = _vector.dot(_vector) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;
		if (d2 > radius2) return null;
		const thc = Math.sqrt(radius2 - d2); // t0 = first intersect point - entrance on front of sphere

		const t0 = tca - thc; // t1 = second intersect point - exit point on back of sphere

		const t1 = tca + thc; // test to see if both t0 and t1 are behind the ray - if so, return null

		if (t0 < 0 && t1 < 0) return null; // test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.

		if (t0 < 0) return this.at(t1, target); // else t0 is in front of the ray, so return the first collision point scaled by t0

		return this.at(t0, target);
	}

	intersectsSphere(sphere) {
		return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
	}

	distanceToPlane(plane) {
		const denominator = plane.normal.dot(this.direction);

		if (denominator === 0) {
			// line is coplanar, return origin
			if (plane.distanceToPoint(this.origin) === 0) {
				return 0;
			} // Null is preferable to undefined since undefined means.... it is undefined


			return null;
		}

		const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator; // Return if the ray never intersects the plane

		return t >= 0 ? t : null;
	}

	intersectPlane(plane, target) {
		const t = this.distanceToPlane(plane);

		if (t === null) {
			return null;
		}

		return this.at(t, target);
	}

	intersectsPlane(plane) {
		// check if the ray lies on the plane first
		const distToPoint = plane.distanceToPoint(this.origin);

		if (distToPoint === 0) {
			return true;
		}

		const denominator = plane.normal.dot(this.direction);

		if (denominator * distToPoint < 0) {
			return true;
		} // ray origin is behind the plane (and is pointing behind it)


		return false;
	}

	intersectBox(box, target) {
		let tmin, tmax, tymin, tymax, tzmin, tzmax;
		const invdirx = 1 / this.direction.x,
					invdiry = 1 / this.direction.y,
					invdirz = 1 / this.direction.z;
		const origin = this.origin;

		if (invdirx >= 0) {
			tmin = (box.min.x - origin.x) * invdirx;
			tmax = (box.max.x - origin.x) * invdirx;
		} else {
			tmin = (box.max.x - origin.x) * invdirx;
			tmax = (box.min.x - origin.x) * invdirx;
		}

		if (invdiry >= 0) {
			tymin = (box.min.y - origin.y) * invdiry;
			tymax = (box.max.y - origin.y) * invdiry;
		} else {
			tymin = (box.max.y - origin.y) * invdiry;
			tymax = (box.min.y - origin.y) * invdiry;
		}

		if (tmin > tymax || tymin > tmax) return null; // These lines also handle the case where tmin or tmax is NaN
		// (result of 0 * Infinity). x !== x returns true if x is NaN

		if (tymin > tmin || tmin !== tmin) tmin = tymin;
		if (tymax < tmax || tmax !== tmax) tmax = tymax;

		if (invdirz >= 0) {
			tzmin = (box.min.z - origin.z) * invdirz;
			tzmax = (box.max.z - origin.z) * invdirz;
		} else {
			tzmin = (box.max.z - origin.z) * invdirz;
			tzmax = (box.min.z - origin.z) * invdirz;
		}

		if (tmin > tzmax || tzmin > tmax) return null;
		if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
		if (tzmax < tmax || tmax !== tmax) tmax = tzmax; //return point closest to the ray (positive side)

		if (tmax < 0) return null;
		return this.at(tmin >= 0 ? tmin : tmax, target);
	}

	intersectsBox(box) {
		return this.intersectBox(box, _vector) !== null;
	}

	intersectTriangle(a, b, c, backfaceCulling, target) {
		// Compute the offset origin, edges, and normal.
		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
		_edge1.subVectors(b, a);

		_edge2.subVectors(c, a);

		_normal.crossVectors(_edge1, _edge2); // Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//	 |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//	 |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//	 |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)


		let DdN = this.direction.dot(_normal);
		let sign;

		if (DdN > 0) {
			if (backfaceCulling) return null;
			sign = 1;
		} else if (DdN < 0) {
			sign = -1;
			DdN = -DdN;
		} else {
			return null;
		}

		_diff.subVectors(this.origin, a);

		const DdQxE2 = sign * this.direction.dot(_edge2.crossVectors(_diff, _edge2)); // b1 < 0, no intersection

		if (DdQxE2 < 0) {
			return null;
		}

		const DdE1xQ = sign * this.direction.dot(_edge1.cross(_diff)); // b2 < 0, no intersection

		if (DdE1xQ < 0) {
			return null;
		} // b1+b2 > 1, no intersection


		if (DdQxE2 + DdE1xQ > DdN) {
			return null;
		} // Line intersects triangle, check if ray does.


		const QdN = -sign * _diff.dot(_normal); // t < 0, no intersection


		if (QdN < 0) {
			return null;
		} // Ray intersects triangle.


		return this.at(QdN / DdN, target);
	}

	applyMatrix4(matrix4) {
		this.origin.applyMatrix4(matrix4);
		this.direction.transformDirection(matrix4);
		return this;
	}

	equals(ray) {
		return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

const _box = /*@__PURE__*/new Box3();

const _v1$1 = /*@__PURE__*/new Vector3();

const _toFarthestPoint = /*@__PURE__*/new Vector3();

const _toPoint = /*@__PURE__*/new Vector3();

class Sphere {
	constructor(center = new Vector3(), radius = -1) {
		this.center = center;
		this.radius = radius;
	}

	set(center, radius) {
		this.center.copy(center);
		this.radius = radius;
		return this;
	}

	setFromPoints(points, optionalCenter) {
		const center = this.center;

		if (optionalCenter !== undefined) {
			center.copy(optionalCenter);
		} else {
			_box.setFromPoints(points).getCenter(center);
		}

		let maxRadiusSq = 0;

		for (let i = 0, il = points.length; i < il; i++) {
			maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
		}

		this.radius = Math.sqrt(maxRadiusSq);
		return this;
	}

	copy(sphere) {
		this.center.copy(sphere.center);
		this.radius = sphere.radius;
		return this;
	}

	isEmpty() {
		return this.radius < 0;
	}

	makeEmpty() {
		this.center.set(0, 0, 0);
		this.radius = -1;
		return this;
	}

	containsPoint(point) {
		return point.distanceToSquared(this.center) <= this.radius * this.radius;
	}

	distanceToPoint(point) {
		return point.distanceTo(this.center) - this.radius;
	}

	intersectsSphere(sphere) {
		const radiusSum = this.radius + sphere.radius;
		return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
	}

	intersectsBox(box) {
		return box.intersectsSphere(this);
	}

	intersectsPlane(plane) {
		return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
	}

	clampPoint(point, target) {
		const deltaLengthSq = this.center.distanceToSquared(point);
		target.copy(point);

		if (deltaLengthSq > this.radius * this.radius) {
			target.sub(this.center).normalize();
			target.multiplyScalar(this.radius).add(this.center);
		}

		return target;
	}

	getBoundingBox(target) {
		if (this.isEmpty()) {
			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;
		}

		target.set(this.center, this.center);
		target.expandByScalar(this.radius);
		return target;
	}

	applyMatrix4(matrix) {
		this.center.applyMatrix4(matrix);
		this.radius = this.radius * matrix.getMaxScaleOnAxis();
		return this;
	}

	translate(offset) {
		this.center.add(offset);
		return this;
	}

	expandByPoint(point) {
		if (this.isEmpty()) {
			this.center.copy(point);
			this.radius = 0;
			return this;
		} // from https://github.com/juj/MathGeoLib/blob/2940b99b99cfe575dd45103ef20f4019dee15b54/src/Geometry/Sphere.cpp#L649-L671


		_toPoint.subVectors(point, this.center);

		const lengthSq = _toPoint.lengthSq();

		if (lengthSq > this.radius * this.radius) {
			const length = Math.sqrt(lengthSq);
			const missingRadiusHalf = (length - this.radius) * 0.5; // Nudge this sphere towards the target point. Add half the missing distance to radius,
			// and the other half to position. This gives a tighter enclosure, instead of if
			// the whole missing distance were just added to radius.

			this.center.add(_toPoint.multiplyScalar(missingRadiusHalf / length));
			this.radius += missingRadiusHalf;
		}

		return this;
	}

	union(sphere) {
		// handle empty sphere cases
		if (sphere.isEmpty()) {
			return;
		} else if (this.isEmpty()) {
			this.copy(sphere);
			return this;
		} // from https://github.com/juj/MathGeoLib/blob/2940b99b99cfe575dd45103ef20f4019dee15b54/src/Geometry/Sphere.cpp#L759-L769
		// To enclose another sphere into this sphere, we only need to enclose two points:
		// 1) Enclose the farthest point on the other sphere into this sphere.
		// 2) Enclose the opposite point of the farthest point into this sphere.


		if (this.center.equals(sphere.center) === true) {
			_toFarthestPoint.set(0, 0, 1).multiplyScalar(sphere.radius);
		} else {
			_toFarthestPoint.subVectors(sphere.center, this.center).normalize().multiplyScalar(sphere.radius);
		}

		this.expandByPoint(_v1$1.copy(sphere.center).add(_toFarthestPoint));
		this.expandByPoint(_v1$1.copy(sphere.center).sub(_toFarthestPoint));
		return this;
	}

	equals(sphere) {
		return sphere.center.equals(this.center) && sphere.radius === this.radius;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

/**
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The polar angle (phi) is measured from the positive y-axis. The positive y-axis is up.
 * The azimuthal angle (theta) is measured from the positive z-axis.
 */

class Spherical {
	constructor(radius = 1, phi = 0, theta = 0) {
		this.radius = radius;
		this.phi = phi; // polar angle

		this.theta = theta; // azimuthal angle

		return this;
	}

	set(radius, phi, theta) {
		this.radius = radius;
		this.phi = phi;
		this.theta = theta;
		return this;
	}

	copy(other) {
		this.radius = other.radius;
		this.phi = other.phi;
		this.theta = other.theta;
		return this;
	} // restrict phi to be between EPS and PI-EPS


	makeSafe() {
		const EPS = 0.000001;
		this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));
		return this;
	}

	setFromVector3(v) {
		return this.setFromCartesianCoords(v.x, v.y, v.z);
	}

	setFromCartesianCoords(x, y, z) {
		this.radius = Math.sqrt(x * x + y * y + z * z);

		if (this.radius === 0) {
			this.theta = 0;
			this.phi = 0;
		} else {
			this.theta = Math.atan2(x, z);
			this.phi = Math.acos(clamp(y / this.radius, -1, 1));
		}

		return this;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

const _v0 = /*@__PURE__*/new Vector3();

const _v1 = /*@__PURE__*/new Vector3();

const _v2 = /*@__PURE__*/new Vector3();

const _v3 = /*@__PURE__*/new Vector3();

const _vab = /*@__PURE__*/new Vector3();

const _vac = /*@__PURE__*/new Vector3();

const _vbc = /*@__PURE__*/new Vector3();

const _vap = /*@__PURE__*/new Vector3();

const _vbp = /*@__PURE__*/new Vector3();

const _vcp = /*@__PURE__*/new Vector3();

class Triangle {
	constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	static getNormal(a, b, c, target) {
		target.subVectors(c, b);

		_v0.subVectors(a, b);

		target.cross(_v0);
		const targetLengthSq = target.lengthSq();

		if (targetLengthSq > 0) {
			return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
		}

		return target.set(0, 0, 0);
	} // static/instance method to calculate barycentric coordinates
	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html


	static getBarycoord(point, a, b, c, target) {
		_v0.subVectors(c, a);

		_v1.subVectors(b, a);

		_v2.subVectors(point, a);

		const dot00 = _v0.dot(_v0);

		const dot01 = _v0.dot(_v1);

		const dot02 = _v0.dot(_v2);

		const dot11 = _v1.dot(_v1);

		const dot12 = _v1.dot(_v2);

		const denom = dot00 * dot11 - dot01 * dot01; // collinear or singular triangle

		if (denom === 0) {
			// arbitrary location outside of triangle?
			// not sure if this is the best idea, maybe should be returning undefined
			return target.set(-2, -1, -1);
		}

		const invDenom = 1 / denom;
		const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		const v = (dot00 * dot12 - dot01 * dot02) * invDenom; // barycentric coordinates must always sum to 1

		return target.set(1 - u - v, v, u);
	}

	static containsPoint(point, a, b, c) {
		this.getBarycoord(point, a, b, c, _v3);
		return _v3.x >= 0 && _v3.y >= 0 && _v3.x + _v3.y <= 1;
	}

	static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
		this.getBarycoord(point, p1, p2, p3, _v3);
		target.set(0, 0);
		target.addScaledVector(uv1, _v3.x);
		target.addScaledVector(uv2, _v3.y);
		target.addScaledVector(uv3, _v3.z);
		return target;
	}

	static isFrontFacing(a, b, c, direction) {
		_v0.subVectors(c, b);

		_v1.subVectors(a, b); // strictly front facing


		return _v0.cross(_v1).dot(direction) < 0 ? true : false;
	}

	set(a, b, c) {
		this.a.copy(a);
		this.b.copy(b);
		this.c.copy(c);
		return this;
	}

	setFromPointsAndIndices(points, i0, i1, i2) {
		this.a.copy(points[i0]);
		this.b.copy(points[i1]);
		this.c.copy(points[i2]);
		return this;
	} // setFromAttributeAndIndices( attribute, i0, i1, i2 ) {
	// 	this.a.fromBufferAttribute( attribute, i0 );
	// 	this.b.fromBufferAttribute( attribute, i1 );
	// 	this.c.fromBufferAttribute( attribute, i2 );
	// 	return this;
	// }


	clone() {
		return new this.constructor().copy(this);
	}

	copy(triangle) {
		this.a.copy(triangle.a);
		this.b.copy(triangle.b);
		this.c.copy(triangle.c);
		return this;
	}

	getArea() {
		_v0.subVectors(this.c, this.b);

		_v1.subVectors(this.a, this.b);

		return _v0.cross(_v1).length() * 0.5;
	}

	getMidpoint(target) {
		return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}

	getNormal(target) {
		return Triangle.getNormal(this.a, this.b, this.c, target);
	}

	getPlane(target) {
		return target.setFromCoplanarPoints(this.a, this.b, this.c);
	}

	getBarycoord(point, target) {
		return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
	}

	getUV(point, uv1, uv2, uv3, target) {
		return Triangle.getUV(point, this.a, this.b, this.c, uv1, uv2, uv3, target);
	}

	containsPoint(point) {
		return Triangle.containsPoint(point, this.a, this.b, this.c);
	}

	isFrontFacing(direction) {
		return Triangle.isFrontFacing(this.a, this.b, this.c, direction);
	}

	intersectsBox(box) {
		return box.intersectsTriangle(this);
	}

	closestPointToPoint(p, target) {
		const a = this.a,
					b = this.b,
					c = this.c;
		let v, w; // algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors(b, a);

		_vac.subVectors(c, a);

		_vap.subVectors(p, a);

		const d1 = _vab.dot(_vap);

		const d2 = _vac.dot(_vap);

		if (d1 <= 0 && d2 <= 0) {
			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy(a);
		}

		_vbp.subVectors(p, b);

		const d3 = _vab.dot(_vbp);

		const d4 = _vac.dot(_vbp);

		if (d3 >= 0 && d4 <= d3) {
			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy(b);
		}

		const vc = d1 * d4 - d3 * d2;

		if (vc <= 0 && d1 >= 0 && d3 <= 0) {
			v = d1 / (d1 - d3); // edge region of AB; barycentric coords (1-v, v, 0)

			return target.copy(a).addScaledVector(_vab, v);
		}

		_vcp.subVectors(p, c);

		const d5 = _vab.dot(_vcp);

		const d6 = _vac.dot(_vcp);

		if (d6 >= 0 && d5 <= d6) {
			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy(c);
		}

		const vb = d5 * d2 - d1 * d6;

		if (vb <= 0 && d2 >= 0 && d6 <= 0) {
			w = d2 / (d2 - d6); // edge region of AC; barycentric coords (1-w, 0, w)

			return target.copy(a).addScaledVector(_vac, w);
		}

		const va = d3 * d6 - d5 * d4;

		if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
			_vbc.subVectors(c, b);

			w = (d4 - d3) / (d4 - d3 + (d5 - d6)); // edge region of BC; barycentric coords (0, 1-w, w)

			return target.copy(b).addScaledVector(_vbc, w); // edge region of BC
		} // face region


		const denom = 1 / (va + vb + vc); // u = va * denom

		v = vb * denom;
		w = vc * denom;
		return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
	}

	equals(triangle) {
		return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
	}

}

class Vector4 {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		Vector4.prototype.isVector4 = true;
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}

	get width() {
		return this.z;
	}

	set width(value) {
		this.z = value;
	}

	get height() {
		return this.w;
	}

	set height(value) {
		this.w = value;
	}

	set(x, y, z, w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		return this;
	}

	setScalar(scalar) {
		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setZ(z) {
		this.z = z;
		return this;
	}

	setW(w) {
		this.w = w;
		return this;
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				this.x = value;
				break;

			case 1:
				this.y = value;
				break;

			case 2:
				this.z = value;
				break;

			case 3:
				this.w = value;
				break;

			default:
				throw new Error('index is out of range: ' + index);
		}

		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0:
				return this.x;

			case 1:
				return this.y;

			case 2:
				return this.z;

			case 3:
				return this.w;

			default:
				throw new Error('index is out of range: ' + index);
		}
	}

	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = v.w !== undefined ? v.w : 1;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;
		return this;
	}

	addScalar(s) {
		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;
		return this;
	}

	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;
		return this;
	}

	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;
		return this;
	}

	subScalar(s) {
		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;
		return this;
	}

	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;
		return this;
	}

	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;
		return this;
	}

	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;
		return this;
	}

	applyMatrix4(m) {
		const x = this.x,
					y = this.y,
					z = this.z,
					w = this.w;
		const e = m.elements;
		this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
		this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
		this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
		this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
		return this;
	}

	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}

	setAxisAngleFromQuaternion(q) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
		// q is assumed to be normalized
		this.w = 2 * Math.acos(q.w);
		const s = Math.sqrt(1 - q.w * q.w);

		if (s < 0.0001) {
			this.x = 1;
			this.y = 0;
			this.z = 0;
		} else {
			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;
		}

		return this;
	}

	setAxisAngleFromRotationMatrix(m) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
		let angle, x, y, z; // variables for result

		const epsilon = 0.01,
					// margin to allow for rounding errors
		epsilon2 = 0.1,
					// margin to distinguish between 0 and 180 degrees
		te = m.elements,
					m11 = te[0],
					m12 = te[4],
					m13 = te[8],
					m21 = te[1],
					m22 = te[5],
					m23 = te[9],
					m31 = te[2],
					m32 = te[6],
					m33 = te[10];

		if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms
			if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
				// this singularity is identity matrix so angle = 0
				this.set(1, 0, 0, 0);
				return this; // zero angle, arbitrary axis
			} // otherwise this singularity is angle = 180


			angle = Math.PI;
			const xx = (m11 + 1) / 2;
			const yy = (m22 + 1) / 2;
			const zz = (m33 + 1) / 2;
			const xy = (m12 + m21) / 4;
			const xz = (m13 + m31) / 4;
			const yz = (m23 + m32) / 4;

			if (xx > yy && xx > zz) {
				// m11 is the largest diagonal term
				if (xx < epsilon) {
					x = 0;
					y = 0.707106781;
					z = 0.707106781;
				} else {
					x = Math.sqrt(xx);
					y = xy / x;
					z = xz / x;
				}
			} else if (yy > zz) {
				// m22 is the largest diagonal term
				if (yy < epsilon) {
					x = 0.707106781;
					y = 0;
					z = 0.707106781;
				} else {
					y = Math.sqrt(yy);
					x = xy / y;
					z = yz / y;
				}
			} else {
				// m33 is the largest diagonal term so base result on this
				if (zz < epsilon) {
					x = 0.707106781;
					y = 0.707106781;
					z = 0;
				} else {
					z = Math.sqrt(zz);
					x = xz / z;
					y = yz / z;
				}
			}

			this.set(x, y, z, angle);
			return this; // return 180 deg rotation
		} // as we have reached here there are no singularities so we can handle normally


		let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12)); // used to normalize

		if (Math.abs(s) < 0.001) s = 1; // prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = (m32 - m23) / s;
		this.y = (m13 - m31) / s;
		this.z = (m21 - m12) / s;
		this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
		return this;
	}

	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		this.z = Math.min(this.z, v.z);
		this.w = Math.min(this.w, v.w);
		return this;
	}

	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		this.z = Math.max(this.z, v.z);
		this.w = Math.max(this.w, v.w);
		return this;
	}

	clamp(min, max) {
		// assumes min < max, componentwise
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		this.z = Math.max(min.z, Math.min(max.z, this.z));
		this.w = Math.max(min.w, Math.min(max.w, this.w));
		return this;
	}

	clampScalar(minVal, maxVal) {
		this.x = Math.max(minVal, Math.min(maxVal, this.x));
		this.y = Math.max(minVal, Math.min(maxVal, this.y));
		this.z = Math.max(minVal, Math.min(maxVal, this.z));
		this.w = Math.max(minVal, Math.min(maxVal, this.w));
		return this;
	}

	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}

	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		this.w = Math.floor(this.w);
		return this;
	}

	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.z = Math.ceil(this.z);
		this.w = Math.ceil(this.w);
		return this;
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		this.w = Math.round(this.w);
		return this;
	}

	roundToZero() {
		this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
		this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
		this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
		return this;
	}

	negate() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		this.w = -this.w;
		return this;
	}

	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}

	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}

	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	setLength(length) {
		return this.normalize().multiplyScalar(length);
	}

	lerp(v, alpha) {
		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;
		this.z += (v.z - this.z) * alpha;
		this.w += (v.w - this.w) * alpha;
		return this;
	}

	lerpVectors(v1, v2, alpha) {
		this.x = v1.x + (v2.x - v1.x) * alpha;
		this.y = v1.y + (v2.y - v1.y) * alpha;
		this.z = v1.z + (v2.z - v1.z) * alpha;
		this.w = v1.w + (v2.w - v1.w) * alpha;
		return this;
	}

	equals(v) {
		return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
	}

	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		this.z = array[offset + 2];
		this.w = array[offset + 3];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		array[offset + 2] = this.z;
		array[offset + 3] = this.w;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.x = attribute.getX( index );
	// 	this.y = attribute.getY( index );
	// 	this.z = attribute.getZ( index );
	// 	this.w = attribute.getW( index );
	// 	return this;
	// }


	random() {
		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();
		return this;
	}

	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;
	}

}

exports.ACESFilmicToneMapping = ACESFilmicToneMapping;
exports.AddEquation = AddEquation;
exports.AddOperation = AddOperation;
exports.AdditiveAnimationBlendMode = AdditiveAnimationBlendMode;
exports.AdditiveBlending = AdditiveBlending;
exports.AlphaFormat = AlphaFormat;
exports.AlwaysDepth = AlwaysDepth;
exports.AlwaysStencilFunc = AlwaysStencilFunc;
exports.BackSide = BackSide;
exports.BasicDepthPacking = BasicDepthPacking;
exports.BasicShadowMap = BasicShadowMap;
exports.Box2 = Box2;
exports.Box3 = Box3;
exports.ByteType = ByteType;
exports.CineonToneMapping = CineonToneMapping;
exports.ClampToEdgeWrapping = ClampToEdgeWrapping;
exports.Color = Color;
exports.ColorManagement = ColorManagement;
exports.CubeReflectionMapping = CubeReflectionMapping;
exports.CubeRefractionMapping = CubeRefractionMapping;
exports.CubeUVReflectionMapping = CubeUVReflectionMapping;
exports.CullFaceBack = CullFaceBack;
exports.CullFaceFront = CullFaceFront;
exports.CullFaceFrontBack = CullFaceFrontBack;
exports.CullFaceNone = CullFaceNone;
exports.CustomBlending = CustomBlending;
exports.CustomToneMapping = CustomToneMapping;
exports.Cylindrical = Cylindrical;
exports.DecrementStencilOp = DecrementStencilOp;
exports.DecrementWrapStencilOp = DecrementWrapStencilOp;
exports.DepthFormat = DepthFormat;
exports.DepthStencilFormat = DepthStencilFormat;
exports.DoubleSide = DoubleSide;
exports.DstAlphaFactor = DstAlphaFactor;
exports.DstColorFactor = DstColorFactor;
exports.DynamicCopyUsage = DynamicCopyUsage;
exports.DynamicDrawUsage = DynamicDrawUsage;
exports.DynamicReadUsage = DynamicReadUsage;
exports.EqualDepth = EqualDepth;
exports.EqualStencilFunc = EqualStencilFunc;
exports.EquirectangularReflectionMapping = EquirectangularReflectionMapping;
exports.EquirectangularRefractionMapping = EquirectangularRefractionMapping;
exports.Euler = Euler;
exports.FloatType = FloatType;
exports.FrontSide = FrontSide;
exports.GLSL1 = GLSL1;
exports.GLSL3 = GLSL3;
exports.GreaterDepth = GreaterDepth;
exports.GreaterEqualDepth = GreaterEqualDepth;
exports.GreaterEqualStencilFunc = GreaterEqualStencilFunc;
exports.GreaterStencilFunc = GreaterStencilFunc;
exports.HalfFloatType = HalfFloatType;
exports.IncrementStencilOp = IncrementStencilOp;
exports.IncrementWrapStencilOp = IncrementWrapStencilOp;
exports.IntType = IntType;
exports.Interpolant = Interpolant;
exports.InterpolateDiscrete = InterpolateDiscrete;
exports.InterpolateLinear = InterpolateLinear;
exports.InterpolateSmooth = InterpolateSmooth;
exports.InvertStencilOp = InvertStencilOp;
exports.KeepStencilOp = KeepStencilOp;
exports.LessDepth = LessDepth;
exports.LessEqualDepth = LessEqualDepth;
exports.LessEqualStencilFunc = LessEqualStencilFunc;
exports.LessStencilFunc = LessStencilFunc;
exports.Line3 = Line3;
exports.LinearEncoding = LinearEncoding;
exports.LinearFilter = LinearFilter;
exports.LinearMipMapLinearFilter = LinearMipMapLinearFilter;
exports.LinearMipMapNearestFilter = LinearMipMapNearestFilter;
exports.LinearMipmapLinearFilter = LinearMipmapLinearFilter;
exports.LinearMipmapNearestFilter = LinearMipmapNearestFilter;
exports.LinearSRGBColorSpace = LinearSRGBColorSpace;
exports.LinearToSRGB = LinearToSRGB;
exports.LinearToneMapping = LinearToneMapping;
exports.LoopOnce = LoopOnce;
exports.LoopPingPong = LoopPingPong;
exports.LoopRepeat = LoopRepeat;
exports.LuminanceAlphaFormat = LuminanceAlphaFormat;
exports.LuminanceFormat = LuminanceFormat;
exports.MOUSE = MOUSE;
exports.MathUtils = MathUtils;
exports.Matrix3 = Matrix3;
exports.Matrix4 = Matrix4;
exports.MaxEquation = MaxEquation;
exports.MinEquation = MinEquation;
exports.MirroredRepeatWrapping = MirroredRepeatWrapping;
exports.MixOperation = MixOperation;
exports.MultiplyBlending = MultiplyBlending;
exports.MultiplyOperation = MultiplyOperation;
exports.NearestFilter = NearestFilter;
exports.NearestMipMapLinearFilter = NearestMipMapLinearFilter;
exports.NearestMipMapNearestFilter = NearestMipMapNearestFilter;
exports.NearestMipmapLinearFilter = NearestMipmapLinearFilter;
exports.NearestMipmapNearestFilter = NearestMipmapNearestFilter;
exports.NeverDepth = NeverDepth;
exports.NeverStencilFunc = NeverStencilFunc;
exports.NoBlending = NoBlending;
exports.NoColorSpace = NoColorSpace;
exports.NoToneMapping = NoToneMapping;
exports.NormalAnimationBlendMode = NormalAnimationBlendMode;
exports.NormalBlending = NormalBlending;
exports.NotEqualDepth = NotEqualDepth;
exports.NotEqualStencilFunc = NotEqualStencilFunc;
exports.ObjectSpaceNormalMap = ObjectSpaceNormalMap;
exports.OneFactor = OneFactor;
exports.OneMinusDstAlphaFactor = OneMinusDstAlphaFactor;
exports.OneMinusDstColorFactor = OneMinusDstColorFactor;
exports.OneMinusSrcAlphaFactor = OneMinusSrcAlphaFactor;
exports.OneMinusSrcColorFactor = OneMinusSrcColorFactor;
exports.PCFShadowMap = PCFShadowMap;
exports.PCFSoftShadowMap = PCFSoftShadowMap;
exports.Plane = Plane;
exports.Quaternion = Quaternion;
exports.REVISION = REVISION;
exports.RGBADepthPacking = RGBADepthPacking;
exports.RGBAFormat = RGBAFormat;
exports.RGBAIntegerFormat = RGBAIntegerFormat;
exports.RGBA_ASTC_10x10_Format = RGBA_ASTC_10x10_Format;
exports.RGBA_ASTC_10x5_Format = RGBA_ASTC_10x5_Format;
exports.RGBA_ASTC_10x6_Format = RGBA_ASTC_10x6_Format;
exports.RGBA_ASTC_10x8_Format = RGBA_ASTC_10x8_Format;
exports.RGBA_ASTC_12x10_Format = RGBA_ASTC_12x10_Format;
exports.RGBA_ASTC_12x12_Format = RGBA_ASTC_12x12_Format;
exports.RGBA_ASTC_4x4_Format = RGBA_ASTC_4x4_Format;
exports.RGBA_ASTC_5x4_Format = RGBA_ASTC_5x4_Format;
exports.RGBA_ASTC_5x5_Format = RGBA_ASTC_5x5_Format;
exports.RGBA_ASTC_6x5_Format = RGBA_ASTC_6x5_Format;
exports.RGBA_ASTC_6x6_Format = RGBA_ASTC_6x6_Format;
exports.RGBA_ASTC_8x5_Format = RGBA_ASTC_8x5_Format;
exports.RGBA_ASTC_8x6_Format = RGBA_ASTC_8x6_Format;
exports.RGBA_ASTC_8x8_Format = RGBA_ASTC_8x8_Format;
exports.RGBA_BPTC_Format = RGBA_BPTC_Format;
exports.RGBA_ETC2_EAC_Format = RGBA_ETC2_EAC_Format;
exports.RGBA_PVRTC_2BPPV1_Format = RGBA_PVRTC_2BPPV1_Format;
exports.RGBA_PVRTC_4BPPV1_Format = RGBA_PVRTC_4BPPV1_Format;
exports.RGBA_S3TC_DXT1_Format = RGBA_S3TC_DXT1_Format;
exports.RGBA_S3TC_DXT3_Format = RGBA_S3TC_DXT3_Format;
exports.RGBA_S3TC_DXT5_Format = RGBA_S3TC_DXT5_Format;
exports.RGBFormat = RGBFormat;
exports.RGB_ETC1_Format = RGB_ETC1_Format;
exports.RGB_ETC2_Format = RGB_ETC2_Format;
exports.RGB_PVRTC_2BPPV1_Format = RGB_PVRTC_2BPPV1_Format;
exports.RGB_PVRTC_4BPPV1_Format = RGB_PVRTC_4BPPV1_Format;
exports.RGB_S3TC_DXT1_Format = RGB_S3TC_DXT1_Format;
exports.RGFormat = RGFormat;
exports.RGIntegerFormat = RGIntegerFormat;
exports.Ray = Ray;
exports.RedFormat = RedFormat;
exports.RedIntegerFormat = RedIntegerFormat;
exports.ReinhardToneMapping = ReinhardToneMapping;
exports.RepeatWrapping = RepeatWrapping;
exports.ReplaceStencilOp = ReplaceStencilOp;
exports.ReverseSubtractEquation = ReverseSubtractEquation;
exports.SRGBColorSpace = SRGBColorSpace;
exports.SRGBToLinear = SRGBToLinear;
exports.ShortType = ShortType;
exports.Sphere = Sphere;
exports.Spherical = Spherical;
exports.SrcAlphaFactor = SrcAlphaFactor;
exports.SrcAlphaSaturateFactor = SrcAlphaSaturateFactor;
exports.SrcColorFactor = SrcColorFactor;
exports.StaticCopyUsage = StaticCopyUsage;
exports.StaticDrawUsage = StaticDrawUsage;
exports.StaticReadUsage = StaticReadUsage;
exports.StreamCopyUsage = StreamCopyUsage;
exports.StreamDrawUsage = StreamDrawUsage;
exports.StreamReadUsage = StreamReadUsage;
exports.SubtractEquation = SubtractEquation;
exports.SubtractiveBlending = SubtractiveBlending;
exports.TOUCH = TOUCH;
exports.TangentSpaceNormalMap = TangentSpaceNormalMap;
exports.Triangle = Triangle;
exports.TriangleFanDrawMode = TriangleFanDrawMode;
exports.TriangleStripDrawMode = TriangleStripDrawMode;
exports.TrianglesDrawMode = TrianglesDrawMode;
exports.UVMapping = UVMapping;
exports.UnsignedByteType = UnsignedByteType;
exports.UnsignedInt248Type = UnsignedInt248Type;
exports.UnsignedIntType = UnsignedIntType;
exports.UnsignedShort4444Type = UnsignedShort4444Type;
exports.UnsignedShort5551Type = UnsignedShort5551Type;
exports.UnsignedShortType = UnsignedShortType;
exports.VSMShadowMap = VSMShadowMap;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Vector4 = Vector4;
exports.WrapAroundEnding = WrapAroundEnding;
exports.ZeroCurvatureEnding = ZeroCurvatureEnding;
exports.ZeroFactor = ZeroFactor;
exports.ZeroSlopeEnding = ZeroSlopeEnding;
exports.ZeroStencilOp = ZeroStencilOp;
exports._SRGBAFormat = _SRGBAFormat;
exports.sRGBEncoding = sRGBEncoding;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/main-script.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_images_paper_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/images/paper.png */ "./public/images/paper.png");
/* harmony import */ var _public_images_rock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/images/rock.png */ "./public/images/rock.png");
/* harmony import */ var _public_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/scissors.png */ "./public/images/scissors.png");
/* harmony import */ var _public_images_smallpaper_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/smallpaper.png */ "./public/images/smallpaper.png");
/* harmony import */ var _public_images_smallrock_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/smallrock.png */ "./public/images/smallrock.png");
/* harmony import */ var _public_images_smallscissors_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/smallscissors.png */ "./public/images/smallscissors.png");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");







const modules = __webpack_require__(/*! ./classes */ "./src/classes.js");

//GLOBAL VARIABLES
let mouseCoords = {};
mouseCoords.pos = new modules.threeJsMod.Vector2(0, 0);
///CANVAS VARIABLES
let canvas;
let context;
///CANVAS VARIABLES

///GAME LOOP VARIALES
let isrunning = false;
let secondsPassed;
let oldTimeStamp = 0.0;
let fps;
///GAME LOOP VARIABLES

///GAMEOBJECT REFERENCE VARIABLES
///ENTITY HOLDER///
let EntityHolder = [];
let UIHolder = [];
//GLOBAL VARIABLES

const Scene0 = {
    CreateScene() {


        let rockObj = new modules.gameObject(0, new Image(700, 700));
        let scissorObj = new modules.gameObject(1, new Image(700, 700));
        let paperObj = new modules.gameObject(2, new Image(700, 700));


        rockObj.Image.src = _public_images_rock_png__WEBPACK_IMPORTED_MODULE_1__;
        scissorObj.Image.src = _public_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__;
        paperObj.Image.src = _public_images_paper_png__WEBPACK_IMPORTED_MODULE_0__;


        //only going to push in two objects 
        EntityHolder.push(rockObj);
        EntityHolder.push(scissorObj);
        //    EntityHolder.push(paperObj);

        ResetOrigin();

        rockObj.transform.translate(350, 350);
        scissorObj.transform.translate(650, 350);

        this.CreateUI();
    },
    CreateUI() {

        let UI_S = new modules.UI_Square(240, 500, 150, 150, 25, 20);
        let UI_S1 = new modules.UI_Square(440, 500, 150, 150, 35, 35);
        let UI_S2 = new modules.UI_Square(640, 500, 150, 150, 35, 10);

        //Creating UI objects that use, the rock, paper, scissors assets 
        //They may appear to be the same like my gameObject objects, but 
        //they're not, they peform and serve different functions.
        let smallpaper = new Image();
        smallpaper.src = _public_images_smallpaper_png__WEBPACK_IMPORTED_MODULE_3__;
        let smallrock = new Image();
        smallrock.src = _public_images_smallrock_png__WEBPACK_IMPORTED_MODULE_4__;
        let smallscissor = new Image();
        smallscissor.src = _public_images_smallscissors_png__WEBPACK_IMPORTED_MODULE_5__;


        UI_S.image = smallpaper;
        UI_S1.image = smallrock;
        UI_S2.image = smallscissor;


        UIHolder.push(UI_S);
        UIHolder.push(UI_S1);
        UIHolder.push(UI_S2);

    },
    Render() {
        //Render GameObjects
        for (let i = 0; i < EntityHolder.length; i++) {
  
            DrawSprite(EntityHolder[i].Image, EntityHolder[i].x, EntityHolder[i].y);
        }
        //Render UI Objects
        for (let i = 0; i < UIHolder.length; i++) {
            DrawUISquare(UIHolder[i]);
        }
    },

    Update() {
        //scene logic for game objects goes here
        for (let i = 0; i < EntityHolder.length; i++) {
            //New way of accessing all elements of entity holder without 
            //constantly having to write code to access EntityHolder
            let tempEntity = EntityHolder[i];


            tempEntity.x = tempEntity.transform.elements[6];
            tempEntity.y = tempEntity.transform.elements[7];
        }
      
    },
    Events(){
          //scene logic for UI objects goes here 
          for (let i =0; i< UIHolder.length; i++)
            {
                UIHolder[i].collisionDetection(mouseCoords.pos.x,mouseCoords.pos.y);
                console.log("I am UI box number: "+i);
            }
    },
    ClearScene() {
        // write code here to clear scene
        //Hardcoded screen width and screen height value
        context.clearRect(0,0,1024,768);
    },
};




//Scene Drawer helper function
function ResetOrigin() {
    for (let i = 0; i < EntityHolder.length; i++) {
        let resetOrigin = new modules.threeJsMod.Vector2(0, 0);

        let tempEntity = EntityHolder[i];

        resetOrigin.x = tempEntity.Image.width;
        resetOrigin.y = tempEntity.Image.height;

        resetOrigin.x = resetOrigin.x / 2;
        resetOrigin.y = resetOrigin.y / 2;

        tempEntity.x += resetOrigin.x * -1;
        tempEntity.y += resetOrigin.y * -1;

        tempEntity.transform.elements[6]=tempEntity.x;
        tempEntity.transform.elements[7]=tempEntity.y;

    }
}

function DrawSprite(CanvasImageSource_, x_source, y_source) {
    context.drawImage(CanvasImageSource_, x_source, y_source, CanvasImageSource_.width, CanvasImageSource_.height);
}

function DrawUISquare(UI_square) {
    //Create Box
    context.fillRect(UI_square.x, UI_square.y, UI_square.width, UI_square.height);
    //Hardcoded offset leaving UI_square with offset variable just in case I want to do cool stuff with it.
    //clear UI box
    context.clearRect(UI_square.x + 5, UI_square.y + 5, UI_square.width - 10, UI_square.height - 10);
    //Draw image inside box
    context.drawImage(UI_square.image, UI_square.x + UI_square.offSetX, UI_square.y + UI_square.offSetY, UI_square.image.width, UI_square.image.height);

}

function Intialization() {

    // refactorCSS();
    canvas = document.getElementsByClassName("viewport")[0];

    console.log(canvas);

    context = canvas.getContext("2d");


    isrunning = true;
    Scene0.CreateScene();

    if (isrunning === true) {
        //in order to use this properly I need to calculate the speed at which the canvas is running, convert it to miliseconds then divide it by my desire frame rate
        // the units of time here are in milliseconds
        //Creating a 16 ms delay on purpose
        window.setInterval(gameloop, 1000 / 60);
    }
}


function calculateGameLoop(timeStamp) {
    //I think that when the first time this gets excuted timestamp equals originally zero
    //In order lock the frame rate, what you need is to make it so that the frame rate equals the same amount of executions in a second
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    //calculate fps 
    fps = Math.round(1 / secondsPassed);

    //Draw number to the screen 
    context.fillStyle = 'white';
    context.fillRect(930, 0, 200, 100);
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 930, 30);
}


function gameloop(timeStamp) {
    Scene0.ClearScene();
    Scene0.Update();
    Scene0.Render();
    if (isrunning == true) {
        //  window.requestAnimationFrame(gameloop);
        window.setInterval(gameloop, 1000 / 60);
    }
    /*request animation frame will actually set the frame rate of my canvas 
    there is no need to actually get the steps of my web browser and then use those 
    steps to simulate my game logic.
     */

}

function refactorCSS() {
    let style_text = "\n";

    let style_elements =
        document.getElementsByTagName("STYLE");

    if (style_elements.length == 0)
        alert("No Style Tag!");
    else {
        for (let i = 0; i < style_elements.length; i++)
            style_text += style_elements[i].outerHTML;

        style_text = style_text.toString().
            replace(/\t/g, '').split('\r\n');

        alert(style_text);
        injectCSSIntoHTML(style_text);
    }
}

function injectCSSIntoHTML(string_) {
    document.body.insertAdjacentHTML("beforeend", string_);
}

Intialization();

canvas.addEventListener("click", (e) => {
    mouseCoords.pos.x = e.clientX;
    mouseCoords.pos.y = e.clientY;
    console.log("X and Y position of Mouse click:" + mouseCoords.pos.x + "," + mouseCoords.pos.y);

    Scene0.Events()
});

/* you don't even need to add this*/
document.addEventListener("keyup", (e) => {
    console.log(e.key + ":button was pressed");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxzQ0FBc0MsNEJBQTRCLHFCQUFxQixrQkFBa0Isb0JBQW9CLG9CQUFvQixHQUFHLEtBQUsseUJBQXlCLEdBQUcsbUJBQW1CO0FBQ25YO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Rkw7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVaQUF1Wjs7QUFFdlo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQSwwQ0FBMEM7OztBQUcxQzs7QUFFQTs7QUFFQSx5Q0FBeUM7OztBQUd6Qzs7QUFFQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkMsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF3Qzs7O0FBR3hDOztBQUVBOztBQUVBLDBDQUEwQzs7O0FBRzFDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUMsZ0NBQWdDOzs7QUFHaEMsdUhBQXVIOztBQUV2SDtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU87QUFDNUQ7O0FBRUEsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLGlCQUFpQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QixzQkFBc0I7O0FBRXRCLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVEQUF1RDs7O0FBR3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUEscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7OztBQUd6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0ZBQXdGOzs7QUFHeEY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2Qyx3QkFBd0I7O0FBRXhCLHdCQUF3Qjs7QUFFeEIscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUEsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQSw2RUFBNkU7O0FBRTdFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBLGdGQUFnRjs7QUFFaEY7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSiwwQ0FBMEM7OztBQUcxQztBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCOzs7QUFHeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxzQkFBc0I7O0FBRWhFLG1EQUFtRDtBQUNuRCxJQUFJOzs7QUFHSixvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLElBQUk7OztBQUdKLHdHQUF3Rzs7QUFFeEcsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsa0NBQWtDO0FBQ2xDLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osWUFBWTtBQUNaLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsV0FBVztBQUNYLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7Ozs7OztVQ24vTHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNGO0FBQ1E7QUFDSTtBQUNGO0FBQ1E7QUFDMUM7QUFDMUIsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsNEJBQTRCLG9EQUFTO0FBQ3JDLCtCQUErQix3REFBYTtBQUM1Qyw2QkFBNkIscURBQVU7OztBQUd2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwREFBZTtBQUN4QztBQUNBLHdCQUF3Qix5REFBYztBQUN0QztBQUNBLDJCQUEyQiw2REFBa0I7OztBQUc3QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7O0FBS0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3RocmVlanMtbWF0aC9idWlsZC90aHJlZWpzLW1hdGguY2pzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9zcmMvbWFpbi1zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC52aWV3cG9ydFxue1xuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogMTAyNHB4O1xuICAgIGhlaWdodDogNzY4cHg7XG59XG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZpZXdwb3J0XFxue1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwMDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6IDEwMjRweDtcXG4gICAgaGVpZ2h0OiA3NjhweDtcXG59XFxuaDF7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0aHJlZUpzTW9kPSByZXF1aXJlKFwidGhyZWVqcy1tYXRoXCIpO1xuY2xhc3MgZ2FtZU9iamVjdHtcbiAgICBjb25zdHJ1Y3RvcihpZF8sSW1hZ2VfKXtcbiAgICAgICAgdGhpcy5pZD0gaWRfO1xuICAgICAgICB0aGlzLkltYWdlPSBJbWFnZV87XG4gICAgICAgIHRoaXMudHJhbnNmb3JtPSBuZXcgdGhyZWVKc01vZC5NYXRyaXgzKCk7XG4gICAgICAgIHRoaXMueD0wO1xuICAgICAgICB0aGlzLnk9MDtcbiAgICB9XG5cbn1cbmNsYXNzIFVJX1NxdWFyZXtcbiAgICBjb25zdHJ1Y3Rvcih4Xyx5Xyx3aWR0aF8saGVpZ2h0XyxvZmZTZXRYXyxvZmZTZXRZXylcbiAgICB7XG4gICAgICAgIHRoaXMueD14XztcbiAgICAgICAgdGhpcy55PXlfO1xuICAgICAgICB0aGlzLndpZHRoPXdpZHRoXztcbiAgICAgICAgdGhpcy5oZWlnaHQ9aGVpZ2h0XztcbiAgICAgICAgdGhpcy5vZmZTZXRYPW9mZlNldFhfO1xuICAgICAgICB0aGlzLm9mZlNldFk9b2ZmU2V0WV87XG4gICAgICAgIHRoaXMuaW1hZ2U9IG5ldyBJbWFnZSgpO1xuICAgIH1cbiAgICBcbi8vWW91J3JlIGNvbXBhcmluZyBoZXJlIFAgYW5kIFEgXG4vLyBOb3QgUCBpbiBjb21wYXJpc29uIHRvIHRoZSBib3VuZGluZyBib3hcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24ocG9pbnRYXyxwb2ludFlfKVxuICAgIHtcbiAgICBsZXQgcFZlYzI9IG5ldyB0aHJlZUpzTW9kLlZlY3RvcjIoMCwwKTtcbiAgICBwVmVjMi54ID0gcG9pbnRYXztcbiAgICBwVmVjMi55ID0gcG9pbnRZXztcblxuICAgIGxldCBib3VuZGluZ0JveCA9IFtuZXcgdGhyZWVKc01vZC5WZWN0b3IyKCksbmV3IHRocmVlSnNNb2QuVmVjdG9yMigpLCBuZXcgdGhyZWVKc01vZC5WZWN0b3IyKCksIG5ldyB0aHJlZUpzTW9kLlZlY3RvcjIoKV07XG5cbiAgICAvL21pbixtaW5cbiAgICBib3VuZGluZ0JveFswXS5zZXQodGhpcy54LHRoaXMueSk7XG4gICAgLy9taW4sbWF4XG4gICAgYm91bmRpbmdCb3hbMV0uc2V0KHRoaXMueCx0aGlzLnkrdGhpcy5oZWlnaHQpO1xuICAgIC8vbWF4LG1pblxuICAgIGJvdW5kaW5nQm94WzJdLnNldCh0aGlzLngrdGhpcy53aWR0aCx0aGlzLnkpO1xuICAgIC8vbWF4LG1heFxuICAgIGJvdW5kaW5nQm94WzNdLnNldCh0aGlzLngrdGhpcy53aWR0aCx0aGlzLnkrdGhpcy5oZWlnaHQpO1xuXG5cbiAgICAgICAgLy8vQ2hhbmdlIHRoaXMgdG8gdXNlIE1BVEggbGlicmFyeVxuICAgICAgICAgLy8vR2V0IHBvaW50IHR1cm4gaXQgaW50byBhIHZlYzIgXG4gICAvLyBsZXQgcFZlYzI9W3BvaW50Xy54LHBvaW50Xy55XTtcbiAgICAvLyBHZXQgYm91bmRpbmcgYm94IHBvc2l0aW9uLCB0dXJuIGl0IGludG8gYSB2ZWMyXG4gICAgbGV0IHFWZWMyPSBuZXcgdGhyZWVKc01vZC5WZWN0b3IyKCk7XG4gICAgLy9HZXQgY2xhbXBlZCBRIG9uIEIgdG8gUFxuXG4gICAgLy9jb21wYXJpbmcgZWFjaCBwb2ludCBvZiBteSBib3VuZGluZyBib3ggXG4gICAgLy8gaW4gcmVsYXRpb24gdG8gbXkgYXJiaXRhcnkgcG9pbnRcbiAgICAvLyBJIHRoaW5rIEkgbmVlZCB0byBjb21wYXJlIGVhY2ggcG9pbnQsIHdpdGggZWFjaCBvdGhlciBwb2ludFxuICAgIGZvcihsZXQgaSA9MDsgaTwgYm91bmRpbmdCb3gubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICAvL2NvbmRpdGlvbnMgZm9yIGJlaW5nIG91dHNpZGVcbiAgICAgICAgLy8gb3V0c2lkZSBvZiBtaW4sbWluXG4gICAgICAgIGlmKHBWZWMyLnggPCBib3VuZGluZ0JveFtpXS54ICYmIHBWZWMyLnkgPCBib3VuZGluZ0JveFtpXS55KVxuICAgICAgICB7XG4gICAgICAgICAgICBwVmVjMj0gYm91bmRpbmdCb3hbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBvdXRzaWRlIG9mIG1pbixtaW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3V0c2lkZSBvZiBtaW4sbWF4XG4gICAgICAgIGlmKHBWZWMyLnggPCBib3VuZGluZ0JveFtpXS54ICYmIHBWZWMyLnkgPiBib3VuZGluZ0JveFtpXS55KVxuICAgICAgICB7XG4gICAgICAgICAgICBwVmVjMiA9IGJvdW5kaW5nQm94W2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIG91dHNpZGUgb2YgbWluLG1heFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdXRzaWRlIG9mIG1heCxtaW5cbiAgICAgICAgaWYocFZlYzIueCA+IGJvdW5kaW5nQm94W2ldLnggJiYgcFZlYzIueSA8IGJvdW5kaW5nQm94W2ldLnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBWZWMyID0gYm91bmRpbmdCb3hbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gb3V0c2lkZSBvZiBtYXgsIG1pblwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdXRzaWRlIG1heCxtYXhcbiAgICAgICAgaWYocFZlYzIueCA+IGJvdW5kaW5nQm94W2ldLnggJiYgcFZlYzIueSA+IGJvdW5kaW5nQm94W2ldLnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBWZWMyID0gYm91bmRpbmdCb3hbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gb3V0c2lkZSBvZiBtYXgsIG1heFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICAgIFJldHVybkJvdW5kaW5nQm94KClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnRzLmdhbWVPYmplY3Q9IGdhbWVPYmplY3Q7XG5leHBvcnRzLlVJX1NxdWFyZT1VSV9TcXVhcmU7XG5leHBvcnRzLnRocmVlSnNNb2Q9dGhyZWVKc01vZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgUkVWSVNJT04gPSAnMTQ0ZGV2JztcbmNvbnN0IE1PVVNFID0ge1xuXHRMRUZUOiAwLFxuXHRNSURETEU6IDEsXG5cdFJJR0hUOiAyLFxuXHRST1RBVEU6IDAsXG5cdERPTExZOiAxLFxuXHRQQU46IDJcbn07XG5jb25zdCBUT1VDSCA9IHtcblx0Uk9UQVRFOiAwLFxuXHRQQU46IDEsXG5cdERPTExZX1BBTjogMixcblx0RE9MTFlfUk9UQVRFOiAzXG59O1xuY29uc3QgQ3VsbEZhY2VOb25lID0gMDtcbmNvbnN0IEN1bGxGYWNlQmFjayA9IDE7XG5jb25zdCBDdWxsRmFjZUZyb250ID0gMjtcbmNvbnN0IEN1bGxGYWNlRnJvbnRCYWNrID0gMztcbmNvbnN0IEJhc2ljU2hhZG93TWFwID0gMDtcbmNvbnN0IFBDRlNoYWRvd01hcCA9IDE7XG5jb25zdCBQQ0ZTb2Z0U2hhZG93TWFwID0gMjtcbmNvbnN0IFZTTVNoYWRvd01hcCA9IDM7XG5jb25zdCBGcm9udFNpZGUgPSAwO1xuY29uc3QgQmFja1NpZGUgPSAxO1xuY29uc3QgRG91YmxlU2lkZSA9IDI7XG5jb25zdCBOb0JsZW5kaW5nID0gMDtcbmNvbnN0IE5vcm1hbEJsZW5kaW5nID0gMTtcbmNvbnN0IEFkZGl0aXZlQmxlbmRpbmcgPSAyO1xuY29uc3QgU3VidHJhY3RpdmVCbGVuZGluZyA9IDM7XG5jb25zdCBNdWx0aXBseUJsZW5kaW5nID0gNDtcbmNvbnN0IEN1c3RvbUJsZW5kaW5nID0gNTtcbmNvbnN0IEFkZEVxdWF0aW9uID0gMTAwO1xuY29uc3QgU3VidHJhY3RFcXVhdGlvbiA9IDEwMTtcbmNvbnN0IFJldmVyc2VTdWJ0cmFjdEVxdWF0aW9uID0gMTAyO1xuY29uc3QgTWluRXF1YXRpb24gPSAxMDM7XG5jb25zdCBNYXhFcXVhdGlvbiA9IDEwNDtcbmNvbnN0IFplcm9GYWN0b3IgPSAyMDA7XG5jb25zdCBPbmVGYWN0b3IgPSAyMDE7XG5jb25zdCBTcmNDb2xvckZhY3RvciA9IDIwMjtcbmNvbnN0IE9uZU1pbnVzU3JjQ29sb3JGYWN0b3IgPSAyMDM7XG5jb25zdCBTcmNBbHBoYUZhY3RvciA9IDIwNDtcbmNvbnN0IE9uZU1pbnVzU3JjQWxwaGFGYWN0b3IgPSAyMDU7XG5jb25zdCBEc3RBbHBoYUZhY3RvciA9IDIwNjtcbmNvbnN0IE9uZU1pbnVzRHN0QWxwaGFGYWN0b3IgPSAyMDc7XG5jb25zdCBEc3RDb2xvckZhY3RvciA9IDIwODtcbmNvbnN0IE9uZU1pbnVzRHN0Q29sb3JGYWN0b3IgPSAyMDk7XG5jb25zdCBTcmNBbHBoYVNhdHVyYXRlRmFjdG9yID0gMjEwO1xuY29uc3QgTmV2ZXJEZXB0aCA9IDA7XG5jb25zdCBBbHdheXNEZXB0aCA9IDE7XG5jb25zdCBMZXNzRGVwdGggPSAyO1xuY29uc3QgTGVzc0VxdWFsRGVwdGggPSAzO1xuY29uc3QgRXF1YWxEZXB0aCA9IDQ7XG5jb25zdCBHcmVhdGVyRXF1YWxEZXB0aCA9IDU7XG5jb25zdCBHcmVhdGVyRGVwdGggPSA2O1xuY29uc3QgTm90RXF1YWxEZXB0aCA9IDc7XG5jb25zdCBNdWx0aXBseU9wZXJhdGlvbiA9IDA7XG5jb25zdCBNaXhPcGVyYXRpb24gPSAxO1xuY29uc3QgQWRkT3BlcmF0aW9uID0gMjtcbmNvbnN0IE5vVG9uZU1hcHBpbmcgPSAwO1xuY29uc3QgTGluZWFyVG9uZU1hcHBpbmcgPSAxO1xuY29uc3QgUmVpbmhhcmRUb25lTWFwcGluZyA9IDI7XG5jb25zdCBDaW5lb25Ub25lTWFwcGluZyA9IDM7XG5jb25zdCBBQ0VTRmlsbWljVG9uZU1hcHBpbmcgPSA0O1xuY29uc3QgQ3VzdG9tVG9uZU1hcHBpbmcgPSA1O1xuY29uc3QgVVZNYXBwaW5nID0gMzAwO1xuY29uc3QgQ3ViZVJlZmxlY3Rpb25NYXBwaW5nID0gMzAxO1xuY29uc3QgQ3ViZVJlZnJhY3Rpb25NYXBwaW5nID0gMzAyO1xuY29uc3QgRXF1aXJlY3Rhbmd1bGFyUmVmbGVjdGlvbk1hcHBpbmcgPSAzMDM7XG5jb25zdCBFcXVpcmVjdGFuZ3VsYXJSZWZyYWN0aW9uTWFwcGluZyA9IDMwNDtcbmNvbnN0IEN1YmVVVlJlZmxlY3Rpb25NYXBwaW5nID0gMzA2O1xuY29uc3QgUmVwZWF0V3JhcHBpbmcgPSAxMDAwO1xuY29uc3QgQ2xhbXBUb0VkZ2VXcmFwcGluZyA9IDEwMDE7XG5jb25zdCBNaXJyb3JlZFJlcGVhdFdyYXBwaW5nID0gMTAwMjtcbmNvbnN0IE5lYXJlc3RGaWx0ZXIgPSAxMDAzO1xuY29uc3QgTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIgPSAxMDA0O1xuY29uc3QgTmVhcmVzdE1pcE1hcE5lYXJlc3RGaWx0ZXIgPSAxMDA0O1xuY29uc3QgTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlciA9IDEwMDU7XG5jb25zdCBOZWFyZXN0TWlwTWFwTGluZWFyRmlsdGVyID0gMTAwNTtcbmNvbnN0IExpbmVhckZpbHRlciA9IDEwMDY7XG5jb25zdCBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyID0gMTAwNztcbmNvbnN0IExpbmVhck1pcE1hcE5lYXJlc3RGaWx0ZXIgPSAxMDA3O1xuY29uc3QgTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyID0gMTAwODtcbmNvbnN0IExpbmVhck1pcE1hcExpbmVhckZpbHRlciA9IDEwMDg7XG5jb25zdCBVbnNpZ25lZEJ5dGVUeXBlID0gMTAwOTtcbmNvbnN0IEJ5dGVUeXBlID0gMTAxMDtcbmNvbnN0IFNob3J0VHlwZSA9IDEwMTE7XG5jb25zdCBVbnNpZ25lZFNob3J0VHlwZSA9IDEwMTI7XG5jb25zdCBJbnRUeXBlID0gMTAxMztcbmNvbnN0IFVuc2lnbmVkSW50VHlwZSA9IDEwMTQ7XG5jb25zdCBGbG9hdFR5cGUgPSAxMDE1O1xuY29uc3QgSGFsZkZsb2F0VHlwZSA9IDEwMTY7XG5jb25zdCBVbnNpZ25lZFNob3J0NDQ0NFR5cGUgPSAxMDE3O1xuY29uc3QgVW5zaWduZWRTaG9ydDU1NTFUeXBlID0gMTAxODtcbmNvbnN0IFVuc2lnbmVkSW50MjQ4VHlwZSA9IDEwMjA7XG5jb25zdCBBbHBoYUZvcm1hdCA9IDEwMjE7XG5jb25zdCBSR0JGb3JtYXQgPSAxMDIyOyAvLyBAZGVwcmVjYXRlZCBzaW5jZSByMTM3XG5cbmNvbnN0IFJHQkFGb3JtYXQgPSAxMDIzO1xuY29uc3QgTHVtaW5hbmNlRm9ybWF0ID0gMTAyNDtcbmNvbnN0IEx1bWluYW5jZUFscGhhRm9ybWF0ID0gMTAyNTtcbmNvbnN0IERlcHRoRm9ybWF0ID0gMTAyNjtcbmNvbnN0IERlcHRoU3RlbmNpbEZvcm1hdCA9IDEwMjc7XG5jb25zdCBSZWRGb3JtYXQgPSAxMDI4O1xuY29uc3QgUmVkSW50ZWdlckZvcm1hdCA9IDEwMjk7XG5jb25zdCBSR0Zvcm1hdCA9IDEwMzA7XG5jb25zdCBSR0ludGVnZXJGb3JtYXQgPSAxMDMxO1xuY29uc3QgUkdCQUludGVnZXJGb3JtYXQgPSAxMDMzO1xuY29uc3QgUkdCX1MzVENfRFhUMV9Gb3JtYXQgPSAzMzc3NjtcbmNvbnN0IFJHQkFfUzNUQ19EWFQxX0Zvcm1hdCA9IDMzNzc3O1xuY29uc3QgUkdCQV9TM1RDX0RYVDNfRm9ybWF0ID0gMzM3Nzg7XG5jb25zdCBSR0JBX1MzVENfRFhUNV9Gb3JtYXQgPSAzMzc3OTtcbmNvbnN0IFJHQl9QVlJUQ180QlBQVjFfRm9ybWF0ID0gMzU4NDA7XG5jb25zdCBSR0JfUFZSVENfMkJQUFYxX0Zvcm1hdCA9IDM1ODQxO1xuY29uc3QgUkdCQV9QVlJUQ180QlBQVjFfRm9ybWF0ID0gMzU4NDI7XG5jb25zdCBSR0JBX1BWUlRDXzJCUFBWMV9Gb3JtYXQgPSAzNTg0MztcbmNvbnN0IFJHQl9FVEMxX0Zvcm1hdCA9IDM2MTk2O1xuY29uc3QgUkdCX0VUQzJfRm9ybWF0ID0gMzc0OTI7XG5jb25zdCBSR0JBX0VUQzJfRUFDX0Zvcm1hdCA9IDM3NDk2O1xuY29uc3QgUkdCQV9BU1RDXzR4NF9Gb3JtYXQgPSAzNzgwODtcbmNvbnN0IFJHQkFfQVNUQ181eDRfRm9ybWF0ID0gMzc4MDk7XG5jb25zdCBSR0JBX0FTVENfNXg1X0Zvcm1hdCA9IDM3ODEwO1xuY29uc3QgUkdCQV9BU1RDXzZ4NV9Gb3JtYXQgPSAzNzgxMTtcbmNvbnN0IFJHQkFfQVNUQ182eDZfRm9ybWF0ID0gMzc4MTI7XG5jb25zdCBSR0JBX0FTVENfOHg1X0Zvcm1hdCA9IDM3ODEzO1xuY29uc3QgUkdCQV9BU1RDXzh4Nl9Gb3JtYXQgPSAzNzgxNDtcbmNvbnN0IFJHQkFfQVNUQ184eDhfRm9ybWF0ID0gMzc4MTU7XG5jb25zdCBSR0JBX0FTVENfMTB4NV9Gb3JtYXQgPSAzNzgxNjtcbmNvbnN0IFJHQkFfQVNUQ18xMHg2X0Zvcm1hdCA9IDM3ODE3O1xuY29uc3QgUkdCQV9BU1RDXzEweDhfRm9ybWF0ID0gMzc4MTg7XG5jb25zdCBSR0JBX0FTVENfMTB4MTBfRm9ybWF0ID0gMzc4MTk7XG5jb25zdCBSR0JBX0FTVENfMTJ4MTBfRm9ybWF0ID0gMzc4MjA7XG5jb25zdCBSR0JBX0FTVENfMTJ4MTJfRm9ybWF0ID0gMzc4MjE7XG5jb25zdCBSR0JBX0JQVENfRm9ybWF0ID0gMzY0OTI7XG5jb25zdCBMb29wT25jZSA9IDIyMDA7XG5jb25zdCBMb29wUmVwZWF0ID0gMjIwMTtcbmNvbnN0IExvb3BQaW5nUG9uZyA9IDIyMDI7XG5jb25zdCBJbnRlcnBvbGF0ZURpc2NyZXRlID0gMjMwMDtcbmNvbnN0IEludGVycG9sYXRlTGluZWFyID0gMjMwMTtcbmNvbnN0IEludGVycG9sYXRlU21vb3RoID0gMjMwMjtcbmNvbnN0IFplcm9DdXJ2YXR1cmVFbmRpbmcgPSAyNDAwO1xuY29uc3QgWmVyb1Nsb3BlRW5kaW5nID0gMjQwMTtcbmNvbnN0IFdyYXBBcm91bmRFbmRpbmcgPSAyNDAyO1xuY29uc3QgTm9ybWFsQW5pbWF0aW9uQmxlbmRNb2RlID0gMjUwMDtcbmNvbnN0IEFkZGl0aXZlQW5pbWF0aW9uQmxlbmRNb2RlID0gMjUwMTtcbmNvbnN0IFRyaWFuZ2xlc0RyYXdNb2RlID0gMDtcbmNvbnN0IFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSA9IDE7XG5jb25zdCBUcmlhbmdsZUZhbkRyYXdNb2RlID0gMjtcbmNvbnN0IExpbmVhckVuY29kaW5nID0gMzAwMDtcbmNvbnN0IHNSR0JFbmNvZGluZyA9IDMwMDE7XG5jb25zdCBCYXNpY0RlcHRoUGFja2luZyA9IDMyMDA7XG5jb25zdCBSR0JBRGVwdGhQYWNraW5nID0gMzIwMTtcbmNvbnN0IFRhbmdlbnRTcGFjZU5vcm1hbE1hcCA9IDA7XG5jb25zdCBPYmplY3RTcGFjZU5vcm1hbE1hcCA9IDE7IC8vIENvbG9yIHNwYWNlIHN0cmluZyBpZGVudGlmaWVycywgbWF0Y2hpbmcgQ1NTIENvbG9yIE1vZHVsZSBMZXZlbCA0IGFuZCBXZWJHUFUgbmFtZXMgd2hlcmUgYXZhaWxhYmxlLlxuXG5jb25zdCBOb0NvbG9yU3BhY2UgPSAnJztcbmNvbnN0IFNSR0JDb2xvclNwYWNlID0gJ3NyZ2InO1xuY29uc3QgTGluZWFyU1JHQkNvbG9yU3BhY2UgPSAnc3JnYi1saW5lYXInO1xuY29uc3QgWmVyb1N0ZW5jaWxPcCA9IDA7XG5jb25zdCBLZWVwU3RlbmNpbE9wID0gNzY4MDtcbmNvbnN0IFJlcGxhY2VTdGVuY2lsT3AgPSA3NjgxO1xuY29uc3QgSW5jcmVtZW50U3RlbmNpbE9wID0gNzY4MjtcbmNvbnN0IERlY3JlbWVudFN0ZW5jaWxPcCA9IDc2ODM7XG5jb25zdCBJbmNyZW1lbnRXcmFwU3RlbmNpbE9wID0gMzQwNTU7XG5jb25zdCBEZWNyZW1lbnRXcmFwU3RlbmNpbE9wID0gMzQwNTY7XG5jb25zdCBJbnZlcnRTdGVuY2lsT3AgPSA1Mzg2O1xuY29uc3QgTmV2ZXJTdGVuY2lsRnVuYyA9IDUxMjtcbmNvbnN0IExlc3NTdGVuY2lsRnVuYyA9IDUxMztcbmNvbnN0IEVxdWFsU3RlbmNpbEZ1bmMgPSA1MTQ7XG5jb25zdCBMZXNzRXF1YWxTdGVuY2lsRnVuYyA9IDUxNTtcbmNvbnN0IEdyZWF0ZXJTdGVuY2lsRnVuYyA9IDUxNjtcbmNvbnN0IE5vdEVxdWFsU3RlbmNpbEZ1bmMgPSA1MTc7XG5jb25zdCBHcmVhdGVyRXF1YWxTdGVuY2lsRnVuYyA9IDUxODtcbmNvbnN0IEFsd2F5c1N0ZW5jaWxGdW5jID0gNTE5O1xuY29uc3QgU3RhdGljRHJhd1VzYWdlID0gMzUwNDQ7XG5jb25zdCBEeW5hbWljRHJhd1VzYWdlID0gMzUwNDg7XG5jb25zdCBTdHJlYW1EcmF3VXNhZ2UgPSAzNTA0MDtcbmNvbnN0IFN0YXRpY1JlYWRVc2FnZSA9IDM1MDQ1O1xuY29uc3QgRHluYW1pY1JlYWRVc2FnZSA9IDM1MDQ5O1xuY29uc3QgU3RyZWFtUmVhZFVzYWdlID0gMzUwNDE7XG5jb25zdCBTdGF0aWNDb3B5VXNhZ2UgPSAzNTA0NjtcbmNvbnN0IER5bmFtaWNDb3B5VXNhZ2UgPSAzNTA1MDtcbmNvbnN0IFN0cmVhbUNvcHlVc2FnZSA9IDM1MDQyO1xuY29uc3QgR0xTTDEgPSAnMTAwJztcbmNvbnN0IEdMU0wzID0gJzMwMCBlcyc7XG5jb25zdCBfU1JHQkFGb3JtYXQgPSAxMDM1OyAvLyBmYWxsYmFjayBmb3IgV2ViR0wgMVxuXG5jbGFzcyBWZWN0b3IyIHtcblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG5cdFx0VmVjdG9yMi5wcm90b3R5cGUuaXNWZWN0b3IyID0gdHJ1ZTtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMueDtcblx0fVxuXG5cdHNldCB3aWR0aCh2YWx1ZSkge1xuXHRcdHRoaXMueCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy55O1xuXHR9XG5cblx0c2V0IGhlaWdodCh2YWx1ZSkge1xuXHRcdHRoaXMueSA9IHZhbHVlO1xuXHR9XG5cblx0c2V0KHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy54ID0gc2NhbGFyO1xuXHRcdHRoaXMueSA9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFgoeCkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRZKHkpIHtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0dGhpcy54ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMueSA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDb21wb25lbnQoaW5kZXgpIHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJldHVybiB0aGlzLng7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuIHRoaXMueTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMueCwgdGhpcy55KTtcblx0fVxuXG5cdGNvcHkodikge1xuXHRcdHRoaXMueCA9IHYueDtcblx0XHR0aGlzLnkgPSB2Lnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGQodikge1xuXHRcdHRoaXMueCArPSB2Lng7XG5cdFx0dGhpcy55ICs9IHYueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxhcihzKSB7XG5cdFx0dGhpcy54ICs9IHM7XG5cdFx0dGhpcy55ICs9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggKyBiLng7XG5cdFx0dGhpcy55ID0gYS55ICsgYi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGVkVmVjdG9yKHYsIHMpIHtcblx0XHR0aGlzLnggKz0gdi54ICogcztcblx0XHR0aGlzLnkgKz0gdi55ICogcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1Yih2KSB7XG5cdFx0dGhpcy54IC09IHYueDtcblx0XHR0aGlzLnkgLT0gdi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViU2NhbGFyKHMpIHtcblx0XHR0aGlzLnggLT0gcztcblx0XHR0aGlzLnkgLT0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1YlZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCAtIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgLSBiLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseSh2KSB7XG5cdFx0dGhpcy54ICo9IHYueDtcblx0XHR0aGlzLnkgKj0gdi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy54ICo9IHNjYWxhcjtcblx0XHR0aGlzLnkgKj0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGl2aWRlKHYpIHtcblx0XHR0aGlzLnggLz0gdi54O1xuXHRcdHRoaXMueSAvPSB2Lnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXZpZGVTY2FsYXIoc2NhbGFyKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlTY2FsYXIoMSAvIHNjYWxhcik7XG5cdH1cblxuXHRhcHBseU1hdHJpeDMobSkge1xuXHRcdGNvbnN0IHggPSB0aGlzLngsXG5cdFx0XHRcdFx0eSA9IHRoaXMueTtcblx0XHRjb25zdCBlID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnggPSBlWzBdICogeCArIGVbM10gKiB5ICsgZVs2XTtcblx0XHR0aGlzLnkgPSBlWzFdICogeCArIGVbNF0gKiB5ICsgZVs3XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1pbih2KSB7XG5cdFx0dGhpcy54ID0gTWF0aC5taW4odGhpcy54LCB2LngpO1xuXHRcdHRoaXMueSA9IE1hdGgubWluKHRoaXMueSwgdi55KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1heCh2KSB7XG5cdFx0dGhpcy54ID0gTWF0aC5tYXgodGhpcy54LCB2LngpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KHRoaXMueSwgdi55KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wKG1pbiwgbWF4KSB7XG5cdFx0Ly8gYXNzdW1lcyBtaW4gPCBtYXgsIGNvbXBvbmVudHdpc2Vcblx0XHR0aGlzLnggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHRoaXMueCkpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdGhpcy55KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcFNjYWxhcihtaW5WYWwsIG1heFZhbCkge1xuXHRcdHRoaXMueCA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLngpKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy55KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcExlbmd0aChtaW4sIG1heCkge1xuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKGxlbmd0aCB8fCAxKS5tdWx0aXBseVNjYWxhcihNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbGVuZ3RoKSkpO1xuXHR9XG5cblx0Zmxvb3IoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5mbG9vcih0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGguZmxvb3IodGhpcy55KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNlaWwoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5jZWlsKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5jZWlsKHRoaXMueSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3VuZCgpIHtcblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm91bmRUb1plcm8oKSB7XG5cdFx0dGhpcy54ID0gdGhpcy54IDwgMCA/IE1hdGguY2VpbCh0aGlzLngpIDogTWF0aC5mbG9vcih0aGlzLngpO1xuXHRcdHRoaXMueSA9IHRoaXMueSA8IDAgPyBNYXRoLmNlaWwodGhpcy55KSA6IE1hdGguZmxvb3IodGhpcy55KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5lZ2F0ZSgpIHtcblx0XHR0aGlzLnggPSAtdGhpcy54O1xuXHRcdHRoaXMueSA9IC10aGlzLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkb3Qodikge1xuXHRcdHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XG5cdH1cblxuXHRjcm9zcyh2KSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueDtcblx0fVxuXG5cdGxlbmd0aFNxKCkge1xuXHRcdHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG5cdH1cblxuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuXHR9XG5cblx0bWFuaGF0dGFuTGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLngpICsgTWF0aC5hYnModGhpcy55KTtcblx0fVxuXG5cdG5vcm1hbGl6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSB8fCAxKTtcblx0fVxuXG5cdGFuZ2xlKCkge1xuXHRcdC8vIGNvbXB1dGVzIHRoZSBhbmdsZSBpbiByYWRpYW5zIHdpdGggcmVzcGVjdCB0byB0aGUgcG9zaXRpdmUgeC1heGlzXG5cdFx0Y29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKC10aGlzLnksIC10aGlzLngpICsgTWF0aC5QSTtcblx0XHRyZXR1cm4gYW5nbGU7XG5cdH1cblxuXHRkaXN0YW5jZVRvKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VUb1NxdWFyZWQodikpO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1NxdWFyZWQodikge1xuXHRcdGNvbnN0IGR4ID0gdGhpcy54IC0gdi54LFxuXHRcdFx0XHRcdGR5ID0gdGhpcy55IC0gdi55O1xuXHRcdHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcblx0fVxuXG5cdG1hbmhhdHRhbkRpc3RhbmNlVG8odikge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLnggLSB2LngpICsgTWF0aC5hYnModGhpcy55IC0gdi55KTtcblx0fVxuXG5cdHNldExlbmd0aChsZW5ndGgpIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihsZW5ndGgpO1xuXHR9XG5cblx0bGVycCh2LCBhbHBoYSkge1xuXHRcdHRoaXMueCArPSAodi54IC0gdGhpcy54KSAqIGFscGhhO1xuXHRcdHRoaXMueSArPSAodi55IC0gdGhpcy55KSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGVycFZlY3RvcnModjEsIHYyLCBhbHBoYSkge1xuXHRcdHRoaXMueCA9IHYxLnggKyAodjIueCAtIHYxLngpICogYWxwaGE7XG5cdFx0dGhpcy55ID0gdjEueSArICh2Mi55IC0gdjEueSkgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyh2KSB7XG5cdFx0cmV0dXJuIHYueCA9PT0gdGhpcy54ICYmIHYueSA9PT0gdGhpcy55O1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0dGhpcy54ID0gYXJyYXlbb2Zmc2V0XTtcblx0XHR0aGlzLnkgPSBhcnJheVtvZmZzZXQgKyAxXTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGFycmF5W29mZnNldF0gPSB0aGlzLng7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLnk7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9IC8vIGZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaW5kZXggKSB7XG5cdC8vIFx0dGhpcy54ID0gYXR0cmlidXRlLmdldFgoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy55ID0gYXR0cmlidXRlLmdldFkoIGluZGV4ICk7XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdHJvdGF0ZUFyb3VuZChjZW50ZXIsIGFuZ2xlKSB7XG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKSxcblx0XHRcdFx0XHRzID0gTWF0aC5zaW4oYW5nbGUpO1xuXHRcdGNvbnN0IHggPSB0aGlzLnggLSBjZW50ZXIueDtcblx0XHRjb25zdCB5ID0gdGhpcy55IC0gY2VudGVyLnk7XG5cdFx0dGhpcy54ID0geCAqIGMgLSB5ICogcyArIGNlbnRlci54O1xuXHRcdHRoaXMueSA9IHggKiBzICsgeSAqIGMgKyBjZW50ZXIueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJhbmRvbSgpIHtcblx0XHR0aGlzLnggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHRoaXMueSA9IE1hdGgucmFuZG9tKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0eWllbGQgdGhpcy54O1xuXHRcdHlpZWxkIHRoaXMueTtcblx0fVxuXG59XG5cbmNvbnN0IF9sdXQgPSBbJzAwJywgJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzBhJywgJzBiJywgJzBjJywgJzBkJywgJzBlJywgJzBmJywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzFhJywgJzFiJywgJzFjJywgJzFkJywgJzFlJywgJzFmJywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzI1JywgJzI2JywgJzI3JywgJzI4JywgJzI5JywgJzJhJywgJzJiJywgJzJjJywgJzJkJywgJzJlJywgJzJmJywgJzMwJywgJzMxJywgJzMyJywgJzMzJywgJzM0JywgJzM1JywgJzM2JywgJzM3JywgJzM4JywgJzM5JywgJzNhJywgJzNiJywgJzNjJywgJzNkJywgJzNlJywgJzNmJywgJzQwJywgJzQxJywgJzQyJywgJzQzJywgJzQ0JywgJzQ1JywgJzQ2JywgJzQ3JywgJzQ4JywgJzQ5JywgJzRhJywgJzRiJywgJzRjJywgJzRkJywgJzRlJywgJzRmJywgJzUwJywgJzUxJywgJzUyJywgJzUzJywgJzU0JywgJzU1JywgJzU2JywgJzU3JywgJzU4JywgJzU5JywgJzVhJywgJzViJywgJzVjJywgJzVkJywgJzVlJywgJzVmJywgJzYwJywgJzYxJywgJzYyJywgJzYzJywgJzY0JywgJzY1JywgJzY2JywgJzY3JywgJzY4JywgJzY5JywgJzZhJywgJzZiJywgJzZjJywgJzZkJywgJzZlJywgJzZmJywgJzcwJywgJzcxJywgJzcyJywgJzczJywgJzc0JywgJzc1JywgJzc2JywgJzc3JywgJzc4JywgJzc5JywgJzdhJywgJzdiJywgJzdjJywgJzdkJywgJzdlJywgJzdmJywgJzgwJywgJzgxJywgJzgyJywgJzgzJywgJzg0JywgJzg1JywgJzg2JywgJzg3JywgJzg4JywgJzg5JywgJzhhJywgJzhiJywgJzhjJywgJzhkJywgJzhlJywgJzhmJywgJzkwJywgJzkxJywgJzkyJywgJzkzJywgJzk0JywgJzk1JywgJzk2JywgJzk3JywgJzk4JywgJzk5JywgJzlhJywgJzliJywgJzljJywgJzlkJywgJzllJywgJzlmJywgJ2EwJywgJ2ExJywgJ2EyJywgJ2EzJywgJ2E0JywgJ2E1JywgJ2E2JywgJ2E3JywgJ2E4JywgJ2E5JywgJ2FhJywgJ2FiJywgJ2FjJywgJ2FkJywgJ2FlJywgJ2FmJywgJ2IwJywgJ2IxJywgJ2IyJywgJ2IzJywgJ2I0JywgJ2I1JywgJ2I2JywgJ2I3JywgJ2I4JywgJ2I5JywgJ2JhJywgJ2JiJywgJ2JjJywgJ2JkJywgJ2JlJywgJ2JmJywgJ2MwJywgJ2MxJywgJ2MyJywgJ2MzJywgJ2M0JywgJ2M1JywgJ2M2JywgJ2M3JywgJ2M4JywgJ2M5JywgJ2NhJywgJ2NiJywgJ2NjJywgJ2NkJywgJ2NlJywgJ2NmJywgJ2QwJywgJ2QxJywgJ2QyJywgJ2QzJywgJ2Q0JywgJ2Q1JywgJ2Q2JywgJ2Q3JywgJ2Q4JywgJ2Q5JywgJ2RhJywgJ2RiJywgJ2RjJywgJ2RkJywgJ2RlJywgJ2RmJywgJ2UwJywgJ2UxJywgJ2UyJywgJ2UzJywgJ2U0JywgJ2U1JywgJ2U2JywgJ2U3JywgJ2U4JywgJ2U5JywgJ2VhJywgJ2ViJywgJ2VjJywgJ2VkJywgJ2VlJywgJ2VmJywgJ2YwJywgJ2YxJywgJ2YyJywgJ2YzJywgJ2Y0JywgJ2Y1JywgJ2Y2JywgJ2Y3JywgJ2Y4JywgJ2Y5JywgJ2ZhJywgJ2ZiJywgJ2ZjJywgJ2ZkJywgJ2ZlJywgJ2ZmJ107XG5sZXQgX3NlZWQgPSAxMjM0NTY3O1xuY29uc3QgREVHMlJBRCA9IE1hdGguUEkgLyAxODA7XG5jb25zdCBSQUQyREVHID0gMTgwIC8gTWF0aC5QSTsgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvaG93LXRvLWNyZWF0ZS1hLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0LzIxOTYzMTM2IzIxOTYzMTM2XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpIHtcblx0Y29uc3QgZDAgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdGNvbnN0IGQxID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRjb25zdCBkMiA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0Y29uc3QgZDMgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdGNvbnN0IHV1aWQgPSBfbHV0W2QwICYgMHhmZl0gKyBfbHV0W2QwID4+IDggJiAweGZmXSArIF9sdXRbZDAgPj4gMTYgJiAweGZmXSArIF9sdXRbZDAgPj4gMjQgJiAweGZmXSArICctJyArIF9sdXRbZDEgJiAweGZmXSArIF9sdXRbZDEgPj4gOCAmIDB4ZmZdICsgJy0nICsgX2x1dFtkMSA+PiAxNiAmIDB4MGYgfCAweDQwXSArIF9sdXRbZDEgPj4gMjQgJiAweGZmXSArICctJyArIF9sdXRbZDIgJiAweDNmIHwgMHg4MF0gKyBfbHV0W2QyID4+IDggJiAweGZmXSArICctJyArIF9sdXRbZDIgPj4gMTYgJiAweGZmXSArIF9sdXRbZDIgPj4gMjQgJiAweGZmXSArIF9sdXRbZDMgJiAweGZmXSArIF9sdXRbZDMgPj4gOCAmIDB4ZmZdICsgX2x1dFtkMyA+PiAxNiAmIDB4ZmZdICsgX2x1dFtkMyA+PiAyNCAmIDB4ZmZdOyAvLyAudG9Mb3dlckNhc2UoKSBoZXJlIGZsYXR0ZW5zIGNvbmNhdGVuYXRlZCBzdHJpbmdzIHRvIHNhdmUgaGVhcCBtZW1vcnkgc3BhY2UuXG5cblx0cmV0dXJuIHV1aWQudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcbn0gLy8gY29tcHV0ZSBldWNsaWRlYW4gbW9kdWxvIG9mIG0gJSBuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Nb2R1bG9fb3BlcmF0aW9uXG5cblxuZnVuY3Rpb24gZXVjbGlkZWFuTW9kdWxvKG4sIG0pIHtcblx0cmV0dXJuIChuICUgbSArIG0pICUgbTtcbn0gLy8gTGluZWFyIG1hcHBpbmcgZnJvbSByYW5nZSA8YTEsIGEyPiB0byByYW5nZSA8YjEsIGIyPlxuXG5cbmZ1bmN0aW9uIG1hcExpbmVhcih4LCBhMSwgYTIsIGIxLCBiMikge1xuXHRyZXR1cm4gYjEgKyAoeCAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcbn0gLy8gaHR0cHM6Ly93d3cuZ2FtZWRldi5uZXQvdHV0b3JpYWxzL3Byb2dyYW1taW5nL2dlbmVyYWwtYW5kLWdhbWVwbGF5LXByb2dyYW1taW5nL2ludmVyc2UtbGVycC1hLXN1cGVyLXVzZWZ1bC15ZXQtb2Z0ZW4tb3Zlcmxvb2tlZC1mdW5jdGlvbi1yNTIzMC9cblxuXG5mdW5jdGlvbiBpbnZlcnNlTGVycCh4LCB5LCB2YWx1ZSkge1xuXHRpZiAoeCAhPT0geSkge1xuXHRcdHJldHVybiAodmFsdWUgLSB4KSAvICh5IC0geCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cbn0gLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2ludGVycG9sYXRpb25cblxuXG5mdW5jdGlvbiBsZXJwKHgsIHksIHQpIHtcblx0cmV0dXJuICgxIC0gdCkgKiB4ICsgdCAqIHk7XG59IC8vIGh0dHA6Ly93d3cucm9yeWRyaXNjb2xsLmNvbS8yMDE2LzAzLzA3L2ZyYW1lLXJhdGUtaW5kZXBlbmRlbnQtZGFtcGluZy11c2luZy1sZXJwL1xuXG5cbmZ1bmN0aW9uIGRhbXAoeCwgeSwgbGFtYmRhLCBkdCkge1xuXHRyZXR1cm4gbGVycCh4LCB5LCAxIC0gTWF0aC5leHAoLWxhbWJkYSAqIGR0KSk7XG59IC8vIGh0dHBzOi8vd3d3LmRlc21vcy5jb20vY2FsY3VsYXRvci92Y3Nqbnl6N3g0XG5cblxuZnVuY3Rpb24gcGluZ3BvbmcoeCwgbGVuZ3RoID0gMSkge1xuXHRyZXR1cm4gbGVuZ3RoIC0gTWF0aC5hYnMoZXVjbGlkZWFuTW9kdWxvKHgsIGxlbmd0aCAqIDIpIC0gbGVuZ3RoKTtcbn0gLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbW9vdGhzdGVwXG5cblxuZnVuY3Rpb24gc21vb3Roc3RlcCh4LCBtaW4sIG1heCkge1xuXHRpZiAoeCA8PSBtaW4pIHJldHVybiAwO1xuXHRpZiAoeCA+PSBtYXgpIHJldHVybiAxO1xuXHR4ID0gKHggLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cdHJldHVybiB4ICogeCAqICgzIC0gMiAqIHgpO1xufVxuXG5mdW5jdGlvbiBzbW9vdGhlcnN0ZXAoeCwgbWluLCBtYXgpIHtcblx0aWYgKHggPD0gbWluKSByZXR1cm4gMDtcblx0aWYgKHggPj0gbWF4KSByZXR1cm4gMTtcblx0eCA9ICh4IC0gbWluKSAvIChtYXggLSBtaW4pO1xuXHRyZXR1cm4geCAqIHggKiB4ICogKHggKiAoeCAqIDYgLSAxNSkgKyAxMCk7XG59IC8vIFJhbmRvbSBpbnRlZ2VyIGZyb20gPGxvdywgaGlnaD4gaW50ZXJ2YWxcblxuXG5mdW5jdGlvbiByYW5kSW50KGxvdywgaGlnaCkge1xuXHRyZXR1cm4gbG93ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cgKyAxKSk7XG59IC8vIFJhbmRvbSBmbG9hdCBmcm9tIDxsb3csIGhpZ2g+IGludGVydmFsXG5cblxuZnVuY3Rpb24gcmFuZEZsb2F0KGxvdywgaGlnaCkge1xuXHRyZXR1cm4gbG93ICsgTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KTtcbn0gLy8gUmFuZG9tIGZsb2F0IGZyb20gPC1yYW5nZS8yLCByYW5nZS8yPiBpbnRlcnZhbFxuXG5cbmZ1bmN0aW9uIHJhbmRGbG9hdFNwcmVhZChyYW5nZSkge1xuXHRyZXR1cm4gcmFuZ2UgKiAoMC41IC0gTWF0aC5yYW5kb20oKSk7XG59IC8vIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgWyAwLCAxIF1cblxuXG5mdW5jdGlvbiBzZWVkZWRSYW5kb20ocykge1xuXHRpZiAocyAhPT0gdW5kZWZpbmVkKSBfc2VlZCA9IHM7IC8vIE11bGJlcnJ5MzIgZ2VuZXJhdG9yXG5cblx0bGV0IHQgPSBfc2VlZCArPSAweDZEMkI3OUY1O1xuXHR0ID0gTWF0aC5pbXVsKHQgXiB0ID4+PiAxNSwgdCB8IDEpO1xuXHR0IF49IHQgKyBNYXRoLmltdWwodCBeIHQgPj4+IDcsIHQgfCA2MSk7XG5cdHJldHVybiAoKHQgXiB0ID4+PiAxNCkgPj4+IDApIC8gNDI5NDk2NzI5Njtcbn1cblxuZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuXHRyZXR1cm4gZGVncmVlcyAqIERFRzJSQUQ7XG59XG5cbmZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpIHtcblx0cmV0dXJuIHJhZGlhbnMgKiBSQUQyREVHO1xufVxuXG5mdW5jdGlvbiBpc1Bvd2VyT2ZUd28odmFsdWUpIHtcblx0cmV0dXJuICh2YWx1ZSAmIHZhbHVlIC0gMSkgPT09IDAgJiYgdmFsdWUgIT09IDA7XG59XG5cbmZ1bmN0aW9uIGNlaWxQb3dlck9mVHdvKHZhbHVlKSB7XG5cdHJldHVybiBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpKTtcbn1cblxuZnVuY3Rpb24gZmxvb3JQb3dlck9mVHdvKHZhbHVlKSB7XG5cdHJldHVybiBNYXRoLnBvdygyLCBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKSk7XG59XG5cbmZ1bmN0aW9uIHNldFF1YXRlcm5pb25Gcm9tUHJvcGVyRXVsZXIocSwgYSwgYiwgYywgb3JkZXIpIHtcblx0Ly8gSW50cmluc2ljIFByb3BlciBFdWxlciBBbmdsZXMgLSBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXVsZXJfYW5nbGVzXG5cdC8vIHJvdGF0aW9ucyBhcmUgYXBwbGllZCB0byB0aGUgYXhlcyBpbiB0aGUgb3JkZXIgc3BlY2lmaWVkIGJ5ICdvcmRlcidcblx0Ly8gcm90YXRpb24gYnkgYW5nbGUgJ2EnIGlzIGFwcGxpZWQgZmlyc3QsIHRoZW4gYnkgYW5nbGUgJ2InLCB0aGVuIGJ5IGFuZ2xlICdjJ1xuXHQvLyBhbmdsZXMgYXJlIGluIHJhZGlhbnNcblx0Y29uc3QgY29zID0gTWF0aC5jb3M7XG5cdGNvbnN0IHNpbiA9IE1hdGguc2luO1xuXHRjb25zdCBjMiA9IGNvcyhiIC8gMik7XG5cdGNvbnN0IHMyID0gc2luKGIgLyAyKTtcblx0Y29uc3QgYzEzID0gY29zKChhICsgYykgLyAyKTtcblx0Y29uc3QgczEzID0gc2luKChhICsgYykgLyAyKTtcblx0Y29uc3QgYzFfMyA9IGNvcygoYSAtIGMpIC8gMik7XG5cdGNvbnN0IHMxXzMgPSBzaW4oKGEgLSBjKSAvIDIpO1xuXHRjb25zdCBjM18xID0gY29zKChjIC0gYSkgLyAyKTtcblx0Y29uc3QgczNfMSA9IHNpbigoYyAtIGEpIC8gMik7XG5cblx0c3dpdGNoIChvcmRlcikge1xuXHRcdGNhc2UgJ1hZWCc6XG5cdFx0XHRxLnNldChjMiAqIHMxMywgczIgKiBjMV8zLCBzMiAqIHMxXzMsIGMyICogYzEzKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnWVpZJzpcblx0XHRcdHEuc2V0KHMyICogczFfMywgYzIgKiBzMTMsIHMyICogYzFfMywgYzIgKiBjMTMpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICdaWFonOlxuXHRcdFx0cS5zZXQoczIgKiBjMV8zLCBzMiAqIHMxXzMsIGMyICogczEzLCBjMiAqIGMxMyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgJ1haWCc6XG5cdFx0XHRxLnNldChjMiAqIHMxMywgczIgKiBzM18xLCBzMiAqIGMzXzEsIGMyICogYzEzKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnWVhZJzpcblx0XHRcdHEuc2V0KHMyICogYzNfMSwgYzIgKiBzMTMsIHMyICogczNfMSwgYzIgKiBjMTMpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICdaWVonOlxuXHRcdFx0cS5zZXQoczIgKiBzM18xLCBzMiAqIGMzXzEsIGMyICogczEzLCBjMiAqIGMxMyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk1hdGhVdGlsczogLnNldFF1YXRlcm5pb25Gcm9tUHJvcGVyRXVsZXIoKSBlbmNvdW50ZXJlZCBhbiB1bmtub3duIG9yZGVyOiAnICsgb3JkZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlbm9ybWFsaXplKHZhbHVlLCBhcnJheSkge1xuXHRzd2l0Y2ggKGFycmF5LmNvbnN0cnVjdG9yKSB7XG5cdFx0Y2FzZSBGbG9hdDMyQXJyYXk6XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRjYXNlIFVpbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIHZhbHVlIC8gNjU1MzUuMDtcblxuXHRcdGNhc2UgVWludDhBcnJheTpcblx0XHRcdHJldHVybiB2YWx1ZSAvIDI1NS4wO1xuXG5cdFx0Y2FzZSBJbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIE1hdGgubWF4KHZhbHVlIC8gMzI3NjcuMCwgLTEuMCk7XG5cblx0XHRjYXNlIEludDhBcnJheTpcblx0XHRcdHJldHVybiBNYXRoLm1heCh2YWx1ZSAvIDEyNy4wLCAtMS4wKTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29tcG9uZW50IHR5cGUuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBhcnJheSkge1xuXHRzd2l0Y2ggKGFycmF5LmNvbnN0cnVjdG9yKSB7XG5cdFx0Y2FzZSBGbG9hdDMyQXJyYXk6XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRjYXNlIFVpbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiA2NTUzNS4wKTtcblxuXHRcdGNhc2UgVWludDhBcnJheTpcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMjU1LjApO1xuXG5cdFx0Y2FzZSBJbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAzMjc2Ny4wKTtcblxuXHRcdGNhc2UgSW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMjcuMCk7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbXBvbmVudCB0eXBlLicpO1xuXHR9XG59XG5cbnZhciBNYXRoVXRpbHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG5cdF9fcHJvdG9fXzogbnVsbCxcblx0REVHMlJBRDogREVHMlJBRCxcblx0UkFEMkRFRzogUkFEMkRFRyxcblx0Z2VuZXJhdGVVVUlEOiBnZW5lcmF0ZVVVSUQsXG5cdGNsYW1wOiBjbGFtcCxcblx0ZXVjbGlkZWFuTW9kdWxvOiBldWNsaWRlYW5Nb2R1bG8sXG5cdG1hcExpbmVhcjogbWFwTGluZWFyLFxuXHRpbnZlcnNlTGVycDogaW52ZXJzZUxlcnAsXG5cdGxlcnA6IGxlcnAsXG5cdGRhbXA6IGRhbXAsXG5cdHBpbmdwb25nOiBwaW5ncG9uZyxcblx0c21vb3Roc3RlcDogc21vb3Roc3RlcCxcblx0c21vb3RoZXJzdGVwOiBzbW9vdGhlcnN0ZXAsXG5cdHJhbmRJbnQ6IHJhbmRJbnQsXG5cdHJhbmRGbG9hdDogcmFuZEZsb2F0LFxuXHRyYW5kRmxvYXRTcHJlYWQ6IHJhbmRGbG9hdFNwcmVhZCxcblx0c2VlZGVkUmFuZG9tOiBzZWVkZWRSYW5kb20sXG5cdGRlZ1RvUmFkOiBkZWdUb1JhZCxcblx0cmFkVG9EZWc6IHJhZFRvRGVnLFxuXHRpc1Bvd2VyT2ZUd286IGlzUG93ZXJPZlR3byxcblx0Y2VpbFBvd2VyT2ZUd286IGNlaWxQb3dlck9mVHdvLFxuXHRmbG9vclBvd2VyT2ZUd286IGZsb29yUG93ZXJPZlR3byxcblx0c2V0UXVhdGVybmlvbkZyb21Qcm9wZXJFdWxlcjogc2V0UXVhdGVybmlvbkZyb21Qcm9wZXJFdWxlcixcblx0bm9ybWFsaXplOiBub3JtYWxpemUsXG5cdGRlbm9ybWFsaXplOiBkZW5vcm1hbGl6ZVxufSk7XG5cbmNsYXNzIFF1YXRlcm5pb24ge1xuXHRjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCB3ID0gMSkge1xuXHRcdHRoaXMuaXNRdWF0ZXJuaW9uID0gdHJ1ZTtcblx0XHR0aGlzLl94ID0geDtcblx0XHR0aGlzLl95ID0geTtcblx0XHR0aGlzLl96ID0gejtcblx0XHR0aGlzLl93ID0gdztcblx0fVxuXG5cdHN0YXRpYyBzbGVycEZsYXQoZHN0LCBkc3RPZmZzZXQsIHNyYzAsIHNyY09mZnNldDAsIHNyYzEsIHNyY09mZnNldDEsIHQpIHtcblx0XHQvLyBmdXp6LWZyZWUsIGFycmF5LWJhc2VkIFF1YXRlcm5pb24gU0xFUlAgb3BlcmF0aW9uXG5cdFx0bGV0IHgwID0gc3JjMFtzcmNPZmZzZXQwICsgMF0sXG5cdFx0XHRcdHkwID0gc3JjMFtzcmNPZmZzZXQwICsgMV0sXG5cdFx0XHRcdHowID0gc3JjMFtzcmNPZmZzZXQwICsgMl0sXG5cdFx0XHRcdHcwID0gc3JjMFtzcmNPZmZzZXQwICsgM107XG5cdFx0Y29uc3QgeDEgPSBzcmMxW3NyY09mZnNldDEgKyAwXSxcblx0XHRcdFx0XHR5MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDFdLFxuXHRcdFx0XHRcdHoxID0gc3JjMVtzcmNPZmZzZXQxICsgMl0sXG5cdFx0XHRcdFx0dzEgPSBzcmMxW3NyY09mZnNldDEgKyAzXTtcblxuXHRcdGlmICh0ID09PSAwKSB7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgMF0gPSB4MDtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAxXSA9IHkwO1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDJdID0gejA7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgM10gPSB3MDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodCA9PT0gMSkge1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDBdID0geDE7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgMV0gPSB5MTtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAyXSA9IHoxO1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDNdID0gdzE7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHcwICE9PSB3MSB8fCB4MCAhPT0geDEgfHwgeTAgIT09IHkxIHx8IHowICE9PSB6MSkge1xuXHRcdFx0bGV0IHMgPSAxIC0gdDtcblx0XHRcdGNvbnN0IGNvcyA9IHgwICogeDEgKyB5MCAqIHkxICsgejAgKiB6MSArIHcwICogdzEsXG5cdFx0XHRcdFx0XHRkaXIgPSBjb3MgPj0gMCA/IDEgOiAtMSxcblx0XHRcdFx0XHRcdHNxclNpbiA9IDEgLSBjb3MgKiBjb3M7IC8vIFNraXAgdGhlIFNsZXJwIGZvciB0aW55IHN0ZXBzIHRvIGF2b2lkIG51bWVyaWMgcHJvYmxlbXM6XG5cblx0XHRcdGlmIChzcXJTaW4gPiBOdW1iZXIuRVBTSUxPTikge1xuXHRcdFx0XHRjb25zdCBzaW4gPSBNYXRoLnNxcnQoc3FyU2luKSxcblx0XHRcdFx0XHRcdFx0bGVuID0gTWF0aC5hdGFuMihzaW4sIGNvcyAqIGRpcik7XG5cdFx0XHRcdHMgPSBNYXRoLnNpbihzICogbGVuKSAvIHNpbjtcblx0XHRcdFx0dCA9IE1hdGguc2luKHQgKiBsZW4pIC8gc2luO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0RGlyID0gdCAqIGRpcjtcblx0XHRcdHgwID0geDAgKiBzICsgeDEgKiB0RGlyO1xuXHRcdFx0eTAgPSB5MCAqIHMgKyB5MSAqIHREaXI7XG5cdFx0XHR6MCA9IHowICogcyArIHoxICogdERpcjtcblx0XHRcdHcwID0gdzAgKiBzICsgdzEgKiB0RGlyOyAvLyBOb3JtYWxpemUgaW4gY2FzZSB3ZSBqdXN0IGRpZCBhIGxlcnA6XG5cblx0XHRcdGlmIChzID09PSAxIC0gdCkge1xuXHRcdFx0XHRjb25zdCBmID0gMSAvIE1hdGguc3FydCh4MCAqIHgwICsgeTAgKiB5MCArIHowICogejAgKyB3MCAqIHcwKTtcblx0XHRcdFx0eDAgKj0gZjtcblx0XHRcdFx0eTAgKj0gZjtcblx0XHRcdFx0ejAgKj0gZjtcblx0XHRcdFx0dzAgKj0gZjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRkc3RbZHN0T2Zmc2V0XSA9IHgwO1xuXHRcdGRzdFtkc3RPZmZzZXQgKyAxXSA9IHkwO1xuXHRcdGRzdFtkc3RPZmZzZXQgKyAyXSA9IHowO1xuXHRcdGRzdFtkc3RPZmZzZXQgKyAzXSA9IHcwO1xuXHR9XG5cblx0c3RhdGljIG11bHRpcGx5UXVhdGVybmlvbnNGbGF0KGRzdCwgZHN0T2Zmc2V0LCBzcmMwLCBzcmNPZmZzZXQwLCBzcmMxLCBzcmNPZmZzZXQxKSB7XG5cdFx0Y29uc3QgeDAgPSBzcmMwW3NyY09mZnNldDBdO1xuXHRcdGNvbnN0IHkwID0gc3JjMFtzcmNPZmZzZXQwICsgMV07XG5cdFx0Y29uc3QgejAgPSBzcmMwW3NyY09mZnNldDAgKyAyXTtcblx0XHRjb25zdCB3MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDNdO1xuXHRcdGNvbnN0IHgxID0gc3JjMVtzcmNPZmZzZXQxXTtcblx0XHRjb25zdCB5MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDFdO1xuXHRcdGNvbnN0IHoxID0gc3JjMVtzcmNPZmZzZXQxICsgMl07XG5cdFx0Y29uc3QgdzEgPSBzcmMxW3NyY09mZnNldDEgKyAzXTtcblx0XHRkc3RbZHN0T2Zmc2V0XSA9IHgwICogdzEgKyB3MCAqIHgxICsgeTAgKiB6MSAtIHowICogeTE7XG5cdFx0ZHN0W2RzdE9mZnNldCArIDFdID0geTAgKiB3MSArIHcwICogeTEgKyB6MCAqIHgxIC0geDAgKiB6MTtcblx0XHRkc3RbZHN0T2Zmc2V0ICsgMl0gPSB6MCAqIHcxICsgdzAgKiB6MSArIHgwICogeTEgLSB5MCAqIHgxO1xuXHRcdGRzdFtkc3RPZmZzZXQgKyAzXSA9IHcwICogdzEgLSB4MCAqIHgxIC0geTAgKiB5MSAtIHowICogejE7XG5cdFx0cmV0dXJuIGRzdDtcblx0fVxuXG5cdGdldCB4KCkge1xuXHRcdHJldHVybiB0aGlzLl94O1xuXHR9XG5cblx0c2V0IHgodmFsdWUpIHtcblx0XHR0aGlzLl94ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRnZXQgeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5feTtcblx0fVxuXG5cdHNldCB5KHZhbHVlKSB7XG5cdFx0dGhpcy5feSA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0Z2V0IHooKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3o7XG5cdH1cblxuXHRzZXQgeih2YWx1ZSkge1xuXHRcdHRoaXMuX3ogPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdGdldCB3KCkge1xuXHRcdHJldHVybiB0aGlzLl93O1xuXHR9XG5cblx0c2V0IHcodmFsdWUpIHtcblx0XHR0aGlzLl93ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRzZXQoeCwgeSwgeiwgdykge1xuXHRcdHRoaXMuX3ggPSB4O1xuXHRcdHRoaXMuX3kgPSB5O1xuXHRcdHRoaXMuX3ogPSB6O1xuXHRcdHRoaXMuX3cgPSB3O1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5feCwgdGhpcy5feSwgdGhpcy5feiwgdGhpcy5fdyk7XG5cdH1cblxuXHRjb3B5KHF1YXRlcm5pb24pIHtcblx0XHR0aGlzLl94ID0gcXVhdGVybmlvbi54O1xuXHRcdHRoaXMuX3kgPSBxdWF0ZXJuaW9uLnk7XG5cdFx0dGhpcy5feiA9IHF1YXRlcm5pb24uejtcblx0XHR0aGlzLl93ID0gcXVhdGVybmlvbi53O1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tRXVsZXIoZXVsZXIsIHVwZGF0ZSkge1xuXHRcdGNvbnN0IHggPSBldWxlci5feCxcblx0XHRcdFx0XHR5ID0gZXVsZXIuX3ksXG5cdFx0XHRcdFx0eiA9IGV1bGVyLl96LFxuXHRcdFx0XHRcdG9yZGVyID0gZXVsZXIuX29yZGVyOyAvLyBodHRwOi8vd3d3Lm1hdGh3b3Jrcy5jb20vbWF0bGFiY2VudHJhbC9maWxlZXhjaGFuZ2UvXG5cdFx0Ly8gXHQyMDY5Ni1mdW5jdGlvbi10by1jb252ZXJ0LWJldHdlZW4tZGNtLWV1bGVyLWFuZ2xlcy1xdWF0ZXJuaW9ucy1hbmQtZXVsZXItdmVjdG9ycy9cblx0XHQvL1x0Y29udGVudC9TcGluQ2FsYy5tXG5cblx0XHRjb25zdCBjb3MgPSBNYXRoLmNvcztcblx0XHRjb25zdCBzaW4gPSBNYXRoLnNpbjtcblx0XHRjb25zdCBjMSA9IGNvcyh4IC8gMik7XG5cdFx0Y29uc3QgYzIgPSBjb3MoeSAvIDIpO1xuXHRcdGNvbnN0IGMzID0gY29zKHogLyAyKTtcblx0XHRjb25zdCBzMSA9IHNpbih4IC8gMik7XG5cdFx0Y29uc3QgczIgPSBzaW4oeSAvIDIpO1xuXHRcdGNvbnN0IHMzID0gc2luKHogLyAyKTtcblxuXHRcdHN3aXRjaCAob3JkZXIpIHtcblx0XHRcdGNhc2UgJ1hZWic6XG5cdFx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG5cdFx0XHRcdHRoaXMuX3kgPSBjMSAqIHMyICogYzMgLSBzMSAqIGMyICogczM7XG5cdFx0XHRcdHRoaXMuX3ogPSBjMSAqIGMyICogczMgKyBzMSAqIHMyICogYzM7XG5cdFx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdZWFonOlxuXHRcdFx0XHR0aGlzLl94ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl96ID0gYzEgKiBjMiAqIHMzIC0gczEgKiBzMiAqIGMzO1xuXHRcdFx0XHR0aGlzLl93ID0gYzEgKiBjMiAqIGMzICsgczEgKiBzMiAqIHMzO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWlhZJzpcblx0XHRcdFx0dGhpcy5feCA9IHMxICogYzIgKiBjMyAtIGMxICogczIgKiBzMztcblx0XHRcdFx0dGhpcy5feSA9IGMxICogczIgKiBjMyArIHMxICogYzIgKiBzMztcblx0XHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcblx0XHRcdFx0dGhpcy5fdyA9IGMxICogYzIgKiBjMyAtIHMxICogczIgKiBzMztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1pZWCc6XG5cdFx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7XG5cdFx0XHRcdHRoaXMuX3kgPSBjMSAqIHMyICogYzMgKyBzMSAqIGMyICogczM7XG5cdFx0XHRcdHRoaXMuX3ogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7XG5cdFx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdZWlgnOlxuXHRcdFx0XHR0aGlzLl94ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl96ID0gYzEgKiBjMiAqIHMzIC0gczEgKiBzMiAqIGMzO1xuXHRcdFx0XHR0aGlzLl93ID0gYzEgKiBjMiAqIGMzIC0gczEgKiBzMiAqIHMzO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWFpZJzpcblx0XHRcdFx0dGhpcy5feCA9IHMxICogYzIgKiBjMyAtIGMxICogczIgKiBzMztcblx0XHRcdFx0dGhpcy5feSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcblx0XHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcblx0XHRcdFx0dGhpcy5fdyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuUXVhdGVybmlvbjogLnNldEZyb21FdWxlcigpIGVuY291bnRlcmVkIGFuIHVua25vd24gb3JkZXI6ICcgKyBvcmRlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHVwZGF0ZSAhPT0gZmFsc2UpIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21BeGlzQW5nbGUoYXhpcywgYW5nbGUpIHtcblx0XHQvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvYW5nbGVUb1F1YXRlcm5pb24vaW5kZXguaHRtXG5cdFx0Ly8gYXNzdW1lcyBheGlzIGlzIG5vcm1hbGl6ZWRcblx0XHRjb25zdCBoYWxmQW5nbGUgPSBhbmdsZSAvIDIsXG5cdFx0XHRcdFx0cyA9IE1hdGguc2luKGhhbGZBbmdsZSk7XG5cdFx0dGhpcy5feCA9IGF4aXMueCAqIHM7XG5cdFx0dGhpcy5feSA9IGF4aXMueSAqIHM7XG5cdFx0dGhpcy5feiA9IGF4aXMueiAqIHM7XG5cdFx0dGhpcy5fdyA9IE1hdGguY29zKGhhbGZBbmdsZSk7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Sb3RhdGlvbk1hdHJpeChtKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cblx0XHQvLyBhc3N1bWVzIHRoZSB1cHBlciAzeDMgb2YgbSBpcyBhIHB1cmUgcm90YXRpb24gbWF0cml4IChpLmUsIHVuc2NhbGVkKVxuXHRcdGNvbnN0IHRlID0gbS5lbGVtZW50cyxcblx0XHRcdFx0XHRtMTEgPSB0ZVswXSxcblx0XHRcdFx0XHRtMTIgPSB0ZVs0XSxcblx0XHRcdFx0XHRtMTMgPSB0ZVs4XSxcblx0XHRcdFx0XHRtMjEgPSB0ZVsxXSxcblx0XHRcdFx0XHRtMjIgPSB0ZVs1XSxcblx0XHRcdFx0XHRtMjMgPSB0ZVs5XSxcblx0XHRcdFx0XHRtMzEgPSB0ZVsyXSxcblx0XHRcdFx0XHRtMzIgPSB0ZVs2XSxcblx0XHRcdFx0XHRtMzMgPSB0ZVsxMF0sXG5cdFx0XHRcdFx0dHJhY2UgPSBtMTEgKyBtMjIgKyBtMzM7XG5cblx0XHRpZiAodHJhY2UgPiAwKSB7XG5cdFx0XHRjb25zdCBzID0gMC41IC8gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKTtcblx0XHRcdHRoaXMuX3cgPSAwLjI1IC8gcztcblx0XHRcdHRoaXMuX3ggPSAobTMyIC0gbTIzKSAqIHM7XG5cdFx0XHR0aGlzLl95ID0gKG0xMyAtIG0zMSkgKiBzO1xuXHRcdFx0dGhpcy5feiA9IChtMjEgLSBtMTIpICogcztcblx0XHR9IGVsc2UgaWYgKG0xMSA+IG0yMiAmJiBtMTEgPiBtMzMpIHtcblx0XHRcdGNvbnN0IHMgPSAyLjAgKiBNYXRoLnNxcnQoMS4wICsgbTExIC0gbTIyIC0gbTMzKTtcblx0XHRcdHRoaXMuX3cgPSAobTMyIC0gbTIzKSAvIHM7XG5cdFx0XHR0aGlzLl94ID0gMC4yNSAqIHM7XG5cdFx0XHR0aGlzLl95ID0gKG0xMiArIG0yMSkgLyBzO1xuXHRcdFx0dGhpcy5feiA9IChtMTMgKyBtMzEpIC8gcztcblx0XHR9IGVsc2UgaWYgKG0yMiA+IG0zMykge1xuXHRcdFx0Y29uc3QgcyA9IDIuMCAqIE1hdGguc3FydCgxLjAgKyBtMjIgLSBtMTEgLSBtMzMpO1xuXHRcdFx0dGhpcy5fdyA9IChtMTMgLSBtMzEpIC8gcztcblx0XHRcdHRoaXMuX3ggPSAobTEyICsgbTIxKSAvIHM7XG5cdFx0XHR0aGlzLl95ID0gMC4yNSAqIHM7XG5cdFx0XHR0aGlzLl96ID0gKG0yMyArIG0zMikgLyBzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBzID0gMi4wICogTWF0aC5zcXJ0KDEuMCArIG0zMyAtIG0xMSAtIG0yMik7XG5cdFx0XHR0aGlzLl93ID0gKG0yMSAtIG0xMikgLyBzO1xuXHRcdFx0dGhpcy5feCA9IChtMTMgKyBtMzEpIC8gcztcblx0XHRcdHRoaXMuX3kgPSAobTIzICsgbTMyKSAvIHM7XG5cdFx0XHR0aGlzLl96ID0gMC4yNSAqIHM7XG5cdFx0fVxuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tVW5pdFZlY3RvcnModkZyb20sIHZUbykge1xuXHRcdC8vIGFzc3VtZXMgZGlyZWN0aW9uIHZlY3RvcnMgdkZyb20gYW5kIHZUbyBhcmUgbm9ybWFsaXplZFxuXHRcdGxldCByID0gdkZyb20uZG90KHZUbykgKyAxO1xuXG5cdFx0aWYgKHIgPCBOdW1iZXIuRVBTSUxPTikge1xuXHRcdFx0Ly8gdkZyb20gYW5kIHZUbyBwb2ludCBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zXG5cdFx0XHRyID0gMDtcblxuXHRcdFx0aWYgKE1hdGguYWJzKHZGcm9tLngpID4gTWF0aC5hYnModkZyb20ueikpIHtcblx0XHRcdFx0dGhpcy5feCA9IC12RnJvbS55O1xuXHRcdFx0XHR0aGlzLl95ID0gdkZyb20ueDtcblx0XHRcdFx0dGhpcy5feiA9IDA7XG5cdFx0XHRcdHRoaXMuX3cgPSByO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5feCA9IDA7XG5cdFx0XHRcdHRoaXMuX3kgPSAtdkZyb20uejtcblx0XHRcdFx0dGhpcy5feiA9IHZGcm9tLnk7XG5cdFx0XHRcdHRoaXMuX3cgPSByO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjcm9zc1ZlY3RvcnMoIHZGcm9tLCB2VG8gKTsgLy8gaW5saW5lZCB0byBhdm9pZCBjeWNsaWMgZGVwZW5kZW5jeSBvbiBWZWN0b3IzXG5cdFx0XHR0aGlzLl94ID0gdkZyb20ueSAqIHZUby56IC0gdkZyb20ueiAqIHZUby55O1xuXHRcdFx0dGhpcy5feSA9IHZGcm9tLnogKiB2VG8ueCAtIHZGcm9tLnggKiB2VG8uejtcblx0XHRcdHRoaXMuX3ogPSB2RnJvbS54ICogdlRvLnkgLSB2RnJvbS55ICogdlRvLng7XG5cdFx0XHR0aGlzLl93ID0gcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcblx0fVxuXG5cdGFuZ2xlVG8ocSkge1xuXHRcdHJldHVybiAyICogTWF0aC5hY29zKE1hdGguYWJzKGNsYW1wKHRoaXMuZG90KHEpLCAtMSwgMSkpKTtcblx0fVxuXG5cdHJvdGF0ZVRvd2FyZHMocSwgc3RlcCkge1xuXHRcdGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZVRvKHEpO1xuXHRcdGlmIChhbmdsZSA9PT0gMCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgdCA9IE1hdGgubWluKDEsIHN0ZXAgLyBhbmdsZSk7XG5cdFx0dGhpcy5zbGVycChxLCB0KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlkZW50aXR5KCkge1xuXHRcdHJldHVybiB0aGlzLnNldCgwLCAwLCAwLCAxKTtcblx0fVxuXG5cdGludmVydCgpIHtcblx0XHQvLyBxdWF0ZXJuaW9uIGlzIGFzc3VtZWQgdG8gaGF2ZSB1bml0IGxlbmd0aFxuXHRcdHJldHVybiB0aGlzLmNvbmp1Z2F0ZSgpO1xuXHR9XG5cblx0Y29uanVnYXRlKCkge1xuXHRcdHRoaXMuX3ggKj0gLTE7XG5cdFx0dGhpcy5feSAqPSAtMTtcblx0XHR0aGlzLl96ICo9IC0xO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkb3Qodikge1xuXHRcdHJldHVybiB0aGlzLl94ICogdi5feCArIHRoaXMuX3kgKiB2Ll95ICsgdGhpcy5feiAqIHYuX3ogKyB0aGlzLl93ICogdi5fdztcblx0fVxuXG5cdGxlbmd0aFNxKCkge1xuXHRcdHJldHVybiB0aGlzLl94ICogdGhpcy5feCArIHRoaXMuX3kgKiB0aGlzLl95ICsgdGhpcy5feiAqIHRoaXMuX3ogKyB0aGlzLl93ICogdGhpcy5fdztcblx0fVxuXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuX3ggKiB0aGlzLl94ICsgdGhpcy5feSAqIHRoaXMuX3kgKyB0aGlzLl96ICogdGhpcy5feiArIHRoaXMuX3cgKiB0aGlzLl93KTtcblx0fVxuXG5cdG5vcm1hbGl6ZSgpIHtcblx0XHRsZXQgbCA9IHRoaXMubGVuZ3RoKCk7XG5cblx0XHRpZiAobCA9PT0gMCkge1xuXHRcdFx0dGhpcy5feCA9IDA7XG5cdFx0XHR0aGlzLl95ID0gMDtcblx0XHRcdHRoaXMuX3ogPSAwO1xuXHRcdFx0dGhpcy5fdyA9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGwgPSAxIC8gbDtcblx0XHRcdHRoaXMuX3ggPSB0aGlzLl94ICogbDtcblx0XHRcdHRoaXMuX3kgPSB0aGlzLl95ICogbDtcblx0XHRcdHRoaXMuX3ogPSB0aGlzLl96ICogbDtcblx0XHRcdHRoaXMuX3cgPSB0aGlzLl93ICogbDtcblx0XHR9XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KHEpIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKHRoaXMsIHEpO1xuXHR9XG5cblx0cHJlbXVsdGlwbHkocSkge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5UXVhdGVybmlvbnMocSwgdGhpcyk7XG5cdH1cblxuXHRtdWx0aXBseVF1YXRlcm5pb25zKGEsIGIpIHtcblx0XHQvLyBmcm9tIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvcmVhbE5vcm1lZEFsZ2VicmEvcXVhdGVybmlvbnMvY29kZS9pbmRleC5odG1cblx0XHRjb25zdCBxYXggPSBhLl94LFxuXHRcdFx0XHRcdHFheSA9IGEuX3ksXG5cdFx0XHRcdFx0cWF6ID0gYS5feixcblx0XHRcdFx0XHRxYXcgPSBhLl93O1xuXHRcdGNvbnN0IHFieCA9IGIuX3gsXG5cdFx0XHRcdFx0cWJ5ID0gYi5feSxcblx0XHRcdFx0XHRxYnogPSBiLl96LFxuXHRcdFx0XHRcdHFidyA9IGIuX3c7XG5cdFx0dGhpcy5feCA9IHFheCAqIHFidyArIHFhdyAqIHFieCArIHFheSAqIHFieiAtIHFheiAqIHFieTtcblx0XHR0aGlzLl95ID0gcWF5ICogcWJ3ICsgcWF3ICogcWJ5ICsgcWF6ICogcWJ4IC0gcWF4ICogcWJ6O1xuXHRcdHRoaXMuX3ogPSBxYXogKiBxYncgKyBxYXcgKiBxYnogKyBxYXggKiBxYnkgLSBxYXkgKiBxYng7XG5cdFx0dGhpcy5fdyA9IHFhdyAqIHFidyAtIHFheCAqIHFieCAtIHFheSAqIHFieSAtIHFheiAqIHFiejtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2xlcnAocWIsIHQpIHtcblx0XHRpZiAodCA9PT0gMCkgcmV0dXJuIHRoaXM7XG5cdFx0aWYgKHQgPT09IDEpIHJldHVybiB0aGlzLmNvcHkocWIpO1xuXHRcdGNvbnN0IHggPSB0aGlzLl94LFxuXHRcdFx0XHRcdHkgPSB0aGlzLl95LFxuXHRcdFx0XHRcdHogPSB0aGlzLl96LFxuXHRcdFx0XHRcdHcgPSB0aGlzLl93OyAvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL3NsZXJwL1xuXG5cdFx0bGV0IGNvc0hhbGZUaGV0YSA9IHcgKiBxYi5fdyArIHggKiBxYi5feCArIHkgKiBxYi5feSArIHogKiBxYi5fejtcblxuXHRcdGlmIChjb3NIYWxmVGhldGEgPCAwKSB7XG5cdFx0XHR0aGlzLl93ID0gLXFiLl93O1xuXHRcdFx0dGhpcy5feCA9IC1xYi5feDtcblx0XHRcdHRoaXMuX3kgPSAtcWIuX3k7XG5cdFx0XHR0aGlzLl96ID0gLXFiLl96O1xuXHRcdFx0Y29zSGFsZlRoZXRhID0gLWNvc0hhbGZUaGV0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb3B5KHFiKTtcblx0XHR9XG5cblx0XHRpZiAoY29zSGFsZlRoZXRhID49IDEuMCkge1xuXHRcdFx0dGhpcy5fdyA9IHc7XG5cdFx0XHR0aGlzLl94ID0geDtcblx0XHRcdHRoaXMuX3kgPSB5O1xuXHRcdFx0dGhpcy5feiA9IHo7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRjb25zdCBzcXJTaW5IYWxmVGhldGEgPSAxLjAgLSBjb3NIYWxmVGhldGEgKiBjb3NIYWxmVGhldGE7XG5cblx0XHRpZiAoc3FyU2luSGFsZlRoZXRhIDw9IE51bWJlci5FUFNJTE9OKSB7XG5cdFx0XHRjb25zdCBzID0gMSAtIHQ7XG5cdFx0XHR0aGlzLl93ID0gcyAqIHcgKyB0ICogdGhpcy5fdztcblx0XHRcdHRoaXMuX3ggPSBzICogeCArIHQgKiB0aGlzLl94O1xuXHRcdFx0dGhpcy5feSA9IHMgKiB5ICsgdCAqIHRoaXMuX3k7XG5cdFx0XHR0aGlzLl96ID0gcyAqIHogKyB0ICogdGhpcy5fejtcblx0XHRcdHRoaXMubm9ybWFsaXplKCk7XG5cblx0XHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2luSGFsZlRoZXRhID0gTWF0aC5zcXJ0KHNxclNpbkhhbGZUaGV0YSk7XG5cdFx0Y29uc3QgaGFsZlRoZXRhID0gTWF0aC5hdGFuMihzaW5IYWxmVGhldGEsIGNvc0hhbGZUaGV0YSk7XG5cdFx0Y29uc3QgcmF0aW9BID0gTWF0aC5zaW4oKDEgLSB0KSAqIGhhbGZUaGV0YSkgLyBzaW5IYWxmVGhldGEsXG5cdFx0XHRcdFx0cmF0aW9CID0gTWF0aC5zaW4odCAqIGhhbGZUaGV0YSkgLyBzaW5IYWxmVGhldGE7XG5cdFx0dGhpcy5fdyA9IHcgKiByYXRpb0EgKyB0aGlzLl93ICogcmF0aW9CO1xuXHRcdHRoaXMuX3ggPSB4ICogcmF0aW9BICsgdGhpcy5feCAqIHJhdGlvQjtcblx0XHR0aGlzLl95ID0geSAqIHJhdGlvQSArIHRoaXMuX3kgKiByYXRpb0I7XG5cdFx0dGhpcy5feiA9IHogKiByYXRpb0EgKyB0aGlzLl96ICogcmF0aW9CO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzbGVycFF1YXRlcm5pb25zKHFhLCBxYiwgdCkge1xuXHRcdHJldHVybiB0aGlzLmNvcHkocWEpLnNsZXJwKHFiLCB0KTtcblx0fVxuXG5cdHJhbmRvbSgpIHtcblx0XHQvLyBEZXJpdmVkIGZyb20gaHR0cDovL3BsYW5uaW5nLmNzLnVpdWMuZWR1L25vZGUxOTguaHRtbFxuXHRcdC8vIE5vdGUsIHRoaXMgc291cmNlIHVzZXMgdywgeCwgeSwgeiBvcmRlcmluZyxcblx0XHQvLyBzbyB3ZSBzd2FwIHRoZSBvcmRlciBiZWxvdy5cblx0XHRjb25zdCB1MSA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc3Qgc3FydDF1MSA9IE1hdGguc3FydCgxIC0gdTEpO1xuXHRcdGNvbnN0IHNxcnR1MSA9IE1hdGguc3FydCh1MSk7XG5cdFx0Y29uc3QgdTIgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc3QgdTMgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG5cdFx0cmV0dXJuIHRoaXMuc2V0KHNxcnQxdTEgKiBNYXRoLmNvcyh1MiksIHNxcnR1MSAqIE1hdGguc2luKHUzKSwgc3FydHUxICogTWF0aC5jb3ModTMpLCBzcXJ0MXUxICogTWF0aC5zaW4odTIpKTtcblx0fVxuXG5cdGVxdWFscyhxdWF0ZXJuaW9uKSB7XG5cdFx0cmV0dXJuIHF1YXRlcm5pb24uX3ggPT09IHRoaXMuX3ggJiYgcXVhdGVybmlvbi5feSA9PT0gdGhpcy5feSAmJiBxdWF0ZXJuaW9uLl96ID09PSB0aGlzLl96ICYmIHF1YXRlcm5pb24uX3cgPT09IHRoaXMuX3c7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHR0aGlzLl94ID0gYXJyYXlbb2Zmc2V0XTtcblx0XHR0aGlzLl95ID0gYXJyYXlbb2Zmc2V0ICsgMV07XG5cdFx0dGhpcy5feiA9IGFycmF5W29mZnNldCArIDJdO1xuXHRcdHRoaXMuX3cgPSBhcnJheVtvZmZzZXQgKyAzXTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRoaXMuX3g7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLl95O1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGhpcy5fejtcblx0XHRhcnJheVtvZmZzZXQgKyAzXSA9IHRoaXMuX3c7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9IC8vIGZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaW5kZXggKSB7XG5cdC8vIFx0dGhpcy5feCA9IGF0dHJpYnV0ZS5nZXRYKCBpbmRleCApO1xuXHQvLyBcdHRoaXMuX3kgPSBhdHRyaWJ1dGUuZ2V0WSggaW5kZXggKTtcblx0Ly8gXHR0aGlzLl96ID0gYXR0cmlidXRlLmdldFooIGluZGV4ICk7XG5cdC8vIFx0dGhpcy5fdyA9IGF0dHJpYnV0ZS5nZXRXKCBpbmRleCApO1xuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRfb25DaGFuZ2UoY2FsbGJhY2spIHtcblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRfb25DaGFuZ2VDYWxsYmFjaygpIHt9XG5cblx0KltTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHlpZWxkIHRoaXMuX3g7XG5cdFx0eWllbGQgdGhpcy5feTtcblx0XHR5aWVsZCB0aGlzLl96O1xuXHRcdHlpZWxkIHRoaXMuX3c7XG5cdH1cblxufVxuXG5jbGFzcyBWZWN0b3IzIHtcblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCkge1xuXHRcdFZlY3RvcjMucHJvdG90eXBlLmlzVmVjdG9yMyA9IHRydWU7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMueiA9IHo7XG5cdH1cblxuXHRzZXQoeCwgeSwgeikge1xuXHRcdGlmICh6ID09PSB1bmRlZmluZWQpIHogPSB0aGlzLno7IC8vIHNwcml0ZS5zY2FsZS5zZXQoeCx5KVxuXG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMueiA9IHo7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy54ID0gc2NhbGFyO1xuXHRcdHRoaXMueSA9IHNjYWxhcjtcblx0XHR0aGlzLnogPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRYKHgpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0WSh5KSB7XG5cdFx0dGhpcy55ID0geTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFooeikge1xuXHRcdHRoaXMueiA9IHo7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRDb21wb25lbnQoaW5kZXgsIHZhbHVlKSB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnggPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy55ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMueiA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDb21wb25lbnQoaW5kZXgpIHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJldHVybiB0aGlzLng7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuIHRoaXMueTtcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy56O1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueik7XG5cdH1cblxuXHRjb3B5KHYpIHtcblx0XHR0aGlzLnggPSB2Lng7XG5cdFx0dGhpcy55ID0gdi55O1xuXHRcdHRoaXMueiA9IHYuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZCh2KSB7XG5cdFx0dGhpcy54ICs9IHYueDtcblx0XHR0aGlzLnkgKz0gdi55O1xuXHRcdHRoaXMueiArPSB2Lno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsYXIocykge1xuXHRcdHRoaXMueCArPSBzO1xuXHRcdHRoaXMueSArPSBzO1xuXHRcdHRoaXMueiArPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkVmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54ICsgYi54O1xuXHRcdHRoaXMueSA9IGEueSArIGIueTtcblx0XHR0aGlzLnogPSBhLnogKyBiLno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsZWRWZWN0b3Iodiwgcykge1xuXHRcdHRoaXMueCArPSB2LnggKiBzO1xuXHRcdHRoaXMueSArPSB2LnkgKiBzO1xuXHRcdHRoaXMueiArPSB2LnogKiBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViKHYpIHtcblx0XHR0aGlzLnggLT0gdi54O1xuXHRcdHRoaXMueSAtPSB2Lnk7XG5cdFx0dGhpcy56IC09IHYuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1YlNjYWxhcihzKSB7XG5cdFx0dGhpcy54IC09IHM7XG5cdFx0dGhpcy55IC09IHM7XG5cdFx0dGhpcy56IC09IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWJWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggLSBiLng7XG5cdFx0dGhpcy55ID0gYS55IC0gYi55O1xuXHRcdHRoaXMueiA9IGEueiAtIGIuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KHYpIHtcblx0XHR0aGlzLnggKj0gdi54O1xuXHRcdHRoaXMueSAqPSB2Lnk7XG5cdFx0dGhpcy56ICo9IHYuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMueCAqPSBzY2FsYXI7XG5cdFx0dGhpcy55ICo9IHNjYWxhcjtcblx0XHR0aGlzLnogKj0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggKiBiLng7XG5cdFx0dGhpcy55ID0gYS55ICogYi55O1xuXHRcdHRoaXMueiA9IGEueiAqIGIuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFwcGx5RXVsZXIoZXVsZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5hcHBseVF1YXRlcm5pb24oX3F1YXRlcm5pb24kMS5zZXRGcm9tRXVsZXIoZXVsZXIpKTtcblx0fVxuXG5cdGFwcGx5QXhpc0FuZ2xlKGF4aXMsIGFuZ2xlKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlRdWF0ZXJuaW9uKF9xdWF0ZXJuaW9uJDEuc2V0RnJvbUF4aXNBbmdsZShheGlzLCBhbmdsZSkpO1xuXHR9XG5cblx0YXBwbHlNYXRyaXgzKG0pIHtcblx0XHRjb25zdCB4ID0gdGhpcy54LFxuXHRcdFx0XHRcdHkgPSB0aGlzLnksXG5cdFx0XHRcdFx0eiA9IHRoaXMuejtcblx0XHRjb25zdCBlID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnggPSBlWzBdICogeCArIGVbM10gKiB5ICsgZVs2XSAqIHo7XG5cdFx0dGhpcy55ID0gZVsxXSAqIHggKyBlWzRdICogeSArIGVbN10gKiB6O1xuXHRcdHRoaXMueiA9IGVbMl0gKiB4ICsgZVs1XSAqIHkgKyBlWzhdICogejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFwcGx5Tm9ybWFsTWF0cml4KG0pIHtcblx0XHRyZXR1cm4gdGhpcy5hcHBseU1hdHJpeDMobSkubm9ybWFsaXplKCk7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobSkge1xuXHRcdGNvbnN0IHggPSB0aGlzLngsXG5cdFx0XHRcdFx0eSA9IHRoaXMueSxcblx0XHRcdFx0XHR6ID0gdGhpcy56O1xuXHRcdGNvbnN0IGUgPSBtLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHcgPSAxIC8gKGVbM10gKiB4ICsgZVs3XSAqIHkgKyBlWzExXSAqIHogKyBlWzE1XSk7XG5cdFx0dGhpcy54ID0gKGVbMF0gKiB4ICsgZVs0XSAqIHkgKyBlWzhdICogeiArIGVbMTJdKSAqIHc7XG5cdFx0dGhpcy55ID0gKGVbMV0gKiB4ICsgZVs1XSAqIHkgKyBlWzldICogeiArIGVbMTNdKSAqIHc7XG5cdFx0dGhpcy56ID0gKGVbMl0gKiB4ICsgZVs2XSAqIHkgKyBlWzEwXSAqIHogKyBlWzE0XSkgKiB3O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXBwbHlRdWF0ZXJuaW9uKHEpIHtcblx0XHRjb25zdCB4ID0gdGhpcy54LFxuXHRcdFx0XHRcdHkgPSB0aGlzLnksXG5cdFx0XHRcdFx0eiA9IHRoaXMuejtcblx0XHRjb25zdCBxeCA9IHEueCxcblx0XHRcdFx0XHRxeSA9IHEueSxcblx0XHRcdFx0XHRxeiA9IHEueixcblx0XHRcdFx0XHRxdyA9IHEudzsgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWN0b3JcblxuXHRcdGNvbnN0IGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuXHRcdGNvbnN0IGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6O1xuXHRcdGNvbnN0IGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuXHRcdGNvbnN0IGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogejsgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuXG5cdFx0dGhpcy54ID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcblx0XHR0aGlzLnkgPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6O1xuXHRcdHRoaXMueiA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy8gcHJvamVjdCggY2FtZXJhICkge1xuXHQvLyBcdHJldHVybiB0aGlzLmFwcGx5TWF0cml4NCggY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZSApLmFwcGx5TWF0cml4NCggY2FtZXJhLnByb2plY3Rpb25NYXRyaXggKTtcblx0Ly8gfVxuXHQvLyB1bnByb2plY3QoIGNhbWVyYSApIHtcblx0Ly8gXHRyZXR1cm4gdGhpcy5hcHBseU1hdHJpeDQoIGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4SW52ZXJzZSApLmFwcGx5TWF0cml4NCggY2FtZXJhLm1hdHJpeFdvcmxkICk7XG5cdC8vIH1cblxuXG5cdHRyYW5zZm9ybURpcmVjdGlvbihtKSB7XG5cdFx0Ly8gaW5wdXQ6IFRIUkVFLk1hdHJpeDQgYWZmaW5lIG1hdHJpeFxuXHRcdC8vIHZlY3RvciBpbnRlcnByZXRlZCBhcyBhIGRpcmVjdGlvblxuXHRcdGNvbnN0IHggPSB0aGlzLngsXG5cdFx0XHRcdFx0eSA9IHRoaXMueSxcblx0XHRcdFx0XHR6ID0gdGhpcy56O1xuXHRcdGNvbnN0IGUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMueCA9IGVbMF0gKiB4ICsgZVs0XSAqIHkgKyBlWzhdICogejtcblx0XHR0aGlzLnkgPSBlWzFdICogeCArIGVbNV0gKiB5ICsgZVs5XSAqIHo7XG5cdFx0dGhpcy56ID0gZVsyXSAqIHggKyBlWzZdICogeSArIGVbMTBdICogejtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcblx0fVxuXG5cdGRpdmlkZSh2KSB7XG5cdFx0dGhpcy54IC89IHYueDtcblx0XHR0aGlzLnkgLz0gdi55O1xuXHRcdHRoaXMueiAvPSB2Lno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXZpZGVTY2FsYXIoc2NhbGFyKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlTY2FsYXIoMSAvIHNjYWxhcik7XG5cdH1cblxuXHRtaW4odikge1xuXHRcdHRoaXMueCA9IE1hdGgubWluKHRoaXMueCwgdi54KTtcblx0XHR0aGlzLnkgPSBNYXRoLm1pbih0aGlzLnksIHYueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5taW4odGhpcy56LCB2LnopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWF4KHYpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1heCh0aGlzLngsIHYueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgodGhpcy55LCB2LnkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KHRoaXMueiwgdi56KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wKG1pbiwgbWF4KSB7XG5cdFx0Ly8gYXNzdW1lcyBtaW4gPCBtYXgsIGNvbXBvbmVudHdpc2Vcblx0XHR0aGlzLnggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHRoaXMueCkpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdGhpcy55KSk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgobWluLnosIE1hdGgubWluKG1heC56LCB0aGlzLnopKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wU2NhbGFyKG1pblZhbCwgbWF4VmFsKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueCkpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLnkpKTtcblx0XHR0aGlzLnogPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy56KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcExlbmd0aChtaW4sIG1heCkge1xuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKGxlbmd0aCB8fCAxKS5tdWx0aXBseVNjYWxhcihNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbGVuZ3RoKSkpO1xuXHR9XG5cblx0Zmxvb3IoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5mbG9vcih0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGguZmxvb3IodGhpcy55KTtcblx0XHR0aGlzLnogPSBNYXRoLmZsb29yKHRoaXMueik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjZWlsKCkge1xuXHRcdHRoaXMueCA9IE1hdGguY2VpbCh0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGguY2VpbCh0aGlzLnkpO1xuXHRcdHRoaXMueiA9IE1hdGguY2VpbCh0aGlzLnopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm91bmQoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcblx0XHR0aGlzLnogPSBNYXRoLnJvdW5kKHRoaXMueik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3VuZFRvWmVybygpIHtcblx0XHR0aGlzLnggPSB0aGlzLnggPCAwID8gTWF0aC5jZWlsKHRoaXMueCkgOiBNYXRoLmZsb29yKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gdGhpcy55IDwgMCA/IE1hdGguY2VpbCh0aGlzLnkpIDogTWF0aC5mbG9vcih0aGlzLnkpO1xuXHRcdHRoaXMueiA9IHRoaXMueiA8IDAgPyBNYXRoLmNlaWwodGhpcy56KSA6IE1hdGguZmxvb3IodGhpcy56KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5lZ2F0ZSgpIHtcblx0XHR0aGlzLnggPSAtdGhpcy54O1xuXHRcdHRoaXMueSA9IC10aGlzLnk7XG5cdFx0dGhpcy56ID0gLXRoaXMuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRvdCh2KSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueSArIHRoaXMueiAqIHYuejtcblx0fSAvLyBUT0RPIGxlbmd0aFNxdWFyZWQ/XG5cblxuXHRsZW5ndGhTcSgpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56O1xuXHR9XG5cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56KTtcblx0fVxuXG5cdG1hbmhhdHRhbkxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModGhpcy54KSArIE1hdGguYWJzKHRoaXMueSkgKyBNYXRoLmFicyh0aGlzLnopO1xuXHR9XG5cblx0bm9ybWFsaXplKCkge1xuXHRcdHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpIHx8IDEpO1xuXHR9XG5cblx0c2V0TGVuZ3RoKGxlbmd0aCkge1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGxlbmd0aCk7XG5cdH1cblxuXHRsZXJwKHYsIGFscGhhKSB7XG5cdFx0dGhpcy54ICs9ICh2LnggLSB0aGlzLngpICogYWxwaGE7XG5cdFx0dGhpcy55ICs9ICh2LnkgLSB0aGlzLnkpICogYWxwaGE7XG5cdFx0dGhpcy56ICs9ICh2LnogLSB0aGlzLnopICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXJwVmVjdG9ycyh2MSwgdjIsIGFscGhhKSB7XG5cdFx0dGhpcy54ID0gdjEueCArICh2Mi54IC0gdjEueCkgKiBhbHBoYTtcblx0XHR0aGlzLnkgPSB2MS55ICsgKHYyLnkgLSB2MS55KSAqIGFscGhhO1xuXHRcdHRoaXMueiA9IHYxLnogKyAodjIueiAtIHYxLnopICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjcm9zcyh2KSB7XG5cdFx0cmV0dXJuIHRoaXMuY3Jvc3NWZWN0b3JzKHRoaXMsIHYpO1xuXHR9XG5cblx0Y3Jvc3NWZWN0b3JzKGEsIGIpIHtcblx0XHRjb25zdCBheCA9IGEueCxcblx0XHRcdFx0XHRheSA9IGEueSxcblx0XHRcdFx0XHRheiA9IGEuejtcblx0XHRjb25zdCBieCA9IGIueCxcblx0XHRcdFx0XHRieSA9IGIueSxcblx0XHRcdFx0XHRieiA9IGIuejtcblx0XHR0aGlzLnggPSBheSAqIGJ6IC0gYXogKiBieTtcblx0XHR0aGlzLnkgPSBheiAqIGJ4IC0gYXggKiBiejtcblx0XHR0aGlzLnogPSBheCAqIGJ5IC0gYXkgKiBieDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByb2plY3RPblZlY3Rvcih2KSB7XG5cdFx0Y29uc3QgZGVub21pbmF0b3IgPSB2Lmxlbmd0aFNxKCk7XG5cdFx0aWYgKGRlbm9taW5hdG9yID09PSAwKSByZXR1cm4gdGhpcy5zZXQoMCwgMCwgMCk7XG5cdFx0Y29uc3Qgc2NhbGFyID0gdi5kb3QodGhpcykgLyBkZW5vbWluYXRvcjtcblx0XHRyZXR1cm4gdGhpcy5jb3B5KHYpLm11bHRpcGx5U2NhbGFyKHNjYWxhcik7XG5cdH1cblxuXHRwcm9qZWN0T25QbGFuZShwbGFuZU5vcm1hbCkge1xuXHRcdF92ZWN0b3IkMy5jb3B5KHRoaXMpLnByb2plY3RPblZlY3RvcihwbGFuZU5vcm1hbCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zdWIoX3ZlY3RvciQzKTtcblx0fVxuXG5cdHJlZmxlY3Qobm9ybWFsKSB7XG5cdFx0Ly8gcmVmbGVjdCBpbmNpZGVudCB2ZWN0b3Igb2ZmIHBsYW5lIG9ydGhvZ29uYWwgdG8gbm9ybWFsXG5cdFx0Ly8gbm9ybWFsIGlzIGFzc3VtZWQgdG8gaGF2ZSB1bml0IGxlbmd0aFxuXHRcdHJldHVybiB0aGlzLnN1YihfdmVjdG9yJDMuY29weShub3JtYWwpLm11bHRpcGx5U2NhbGFyKDIgKiB0aGlzLmRvdChub3JtYWwpKSk7XG5cdH1cblxuXHRhbmdsZVRvKHYpIHtcblx0XHRjb25zdCBkZW5vbWluYXRvciA9IE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkgKiB2Lmxlbmd0aFNxKCkpO1xuXHRcdGlmIChkZW5vbWluYXRvciA9PT0gMCkgcmV0dXJuIE1hdGguUEkgLyAyO1xuXHRcdGNvbnN0IHRoZXRhID0gdGhpcy5kb3QodikgLyBkZW5vbWluYXRvcjsgLy8gY2xhbXAsIHRvIGhhbmRsZSBudW1lcmljYWwgcHJvYmxlbXNcblxuXHRcdHJldHVybiBNYXRoLmFjb3MoY2xhbXAodGhldGEsIC0xLCAxKSk7XG5cdH1cblxuXHRkaXN0YW5jZVRvKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VUb1NxdWFyZWQodikpO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1NxdWFyZWQodikge1xuXHRcdGNvbnN0IGR4ID0gdGhpcy54IC0gdi54LFxuXHRcdFx0XHRcdGR5ID0gdGhpcy55IC0gdi55LFxuXHRcdFx0XHRcdGR6ID0gdGhpcy56IC0gdi56O1xuXHRcdHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHo7XG5cdH1cblxuXHRtYW5oYXR0YW5EaXN0YW5jZVRvKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdi54KSArIE1hdGguYWJzKHRoaXMueSAtIHYueSkgKyBNYXRoLmFicyh0aGlzLnogLSB2LnopO1xuXHR9XG5cblx0c2V0RnJvbVNwaGVyaWNhbChzKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbVNwaGVyaWNhbENvb3JkcyhzLnJhZGl1cywgcy5waGksIHMudGhldGEpO1xuXHR9XG5cblx0c2V0RnJvbVNwaGVyaWNhbENvb3JkcyhyYWRpdXMsIHBoaSwgdGhldGEpIHtcblx0XHRjb25zdCBzaW5QaGlSYWRpdXMgPSBNYXRoLnNpbihwaGkpICogcmFkaXVzO1xuXHRcdHRoaXMueCA9IHNpblBoaVJhZGl1cyAqIE1hdGguc2luKHRoZXRhKTtcblx0XHR0aGlzLnkgPSBNYXRoLmNvcyhwaGkpICogcmFkaXVzO1xuXHRcdHRoaXMueiA9IHNpblBoaVJhZGl1cyAqIE1hdGguY29zKHRoZXRhKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21DeWxpbmRyaWNhbChjKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbUN5bGluZHJpY2FsQ29vcmRzKGMucmFkaXVzLCBjLnRoZXRhLCBjLnkpO1xuXHR9XG5cblx0c2V0RnJvbUN5bGluZHJpY2FsQ29vcmRzKHJhZGl1cywgdGhldGEsIHkpIHtcblx0XHR0aGlzLnggPSByYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnogPSByYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tTWF0cml4UG9zaXRpb24obSkge1xuXHRcdGNvbnN0IGUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMueCA9IGVbMTJdO1xuXHRcdHRoaXMueSA9IGVbMTNdO1xuXHRcdHRoaXMueiA9IGVbMTRdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU1hdHJpeFNjYWxlKG0pIHtcblx0XHRjb25zdCBzeCA9IHRoaXMuc2V0RnJvbU1hdHJpeENvbHVtbihtLCAwKS5sZW5ndGgoKTtcblx0XHRjb25zdCBzeSA9IHRoaXMuc2V0RnJvbU1hdHJpeENvbHVtbihtLCAxKS5sZW5ndGgoKTtcblx0XHRjb25zdCBzeiA9IHRoaXMuc2V0RnJvbU1hdHJpeENvbHVtbihtLCAyKS5sZW5ndGgoKTtcblx0XHR0aGlzLnggPSBzeDtcblx0XHR0aGlzLnkgPSBzeTtcblx0XHR0aGlzLnogPSBzejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21NYXRyaXhDb2x1bW4obSwgaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5mcm9tQXJyYXkobS5lbGVtZW50cywgaW5kZXggKiA0KTtcblx0fVxuXG5cdHNldEZyb21NYXRyaXgzQ29sdW1uKG0sIGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZnJvbUFycmF5KG0uZWxlbWVudHMsIGluZGV4ICogMyk7XG5cdH1cblxuXHRzZXRGcm9tRXVsZXIoZSkge1xuXHRcdHRoaXMueCA9IGUuX3g7XG5cdFx0dGhpcy55ID0gZS5feTtcblx0XHR0aGlzLnogPSBlLl96O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHYpIHtcblx0XHRyZXR1cm4gdi54ID09PSB0aGlzLnggJiYgdi55ID09PSB0aGlzLnkgJiYgdi56ID09PSB0aGlzLno7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHR0aGlzLnggPSBhcnJheVtvZmZzZXRdO1xuXHRcdHRoaXMueSA9IGFycmF5W29mZnNldCArIDFdO1xuXHRcdHRoaXMueiA9IGFycmF5W29mZnNldCArIDJdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRoaXMueDtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRoaXMueTtcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXMuejtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0gLy8gZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpbmRleCApIHtcblx0Ly8gXHR0aGlzLnggPSBhdHRyaWJ1dGUuZ2V0WCggaW5kZXggKTtcblx0Ly8gXHR0aGlzLnkgPSBhdHRyaWJ1dGUuZ2V0WSggaW5kZXggKTtcblx0Ly8gXHR0aGlzLnogPSBhdHRyaWJ1dGUuZ2V0WiggaW5kZXggKTtcblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0cmFuZG9tKCkge1xuXHRcdHRoaXMueCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0dGhpcy55ID0gTWF0aC5yYW5kb20oKTtcblx0XHR0aGlzLnogPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmFuZG9tRGlyZWN0aW9uKCkge1xuXHRcdC8vIERlcml2ZWQgZnJvbSBodHRwczovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9TcGhlcmVQb2ludFBpY2tpbmcuaHRtbFxuXHRcdGNvbnN0IHUgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyO1xuXHRcdGNvbnN0IHQgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG5cdFx0Y29uc3QgZiA9IE1hdGguc3FydCgxIC0gdSAqKiAyKTtcblx0XHR0aGlzLnggPSBmICogTWF0aC5jb3ModCk7XG5cdFx0dGhpcy55ID0gZiAqIE1hdGguc2luKHQpO1xuXHRcdHRoaXMueiA9IHU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0eWllbGQgdGhpcy54O1xuXHRcdHlpZWxkIHRoaXMueTtcblx0XHR5aWVsZCB0aGlzLno7XG5cdH1cblxufVxuXG5jb25zdCBfdmVjdG9yJDMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3F1YXRlcm5pb24kMSA9IC8qQF9fUFVSRV9fKi9uZXcgUXVhdGVybmlvbigpO1xuXG5jb25zdCBfdmVjdG9yJDIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjIoKTtcblxuY2xhc3MgQm94MiB7XG5cdGNvbnN0cnVjdG9yKG1pbiA9IG5ldyBWZWN0b3IyKCtJbmZpbml0eSwgK0luZmluaXR5KSwgbWF4ID0gbmV3IFZlY3RvcjIoLUluZmluaXR5LCAtSW5maW5pdHkpKSB7XG5cdFx0dGhpcy5pc0JveDIgPSB0cnVlO1xuXHRcdHRoaXMubWluID0gbWluO1xuXHRcdHRoaXMubWF4ID0gbWF4O1xuXHR9XG5cblx0c2V0KG1pbiwgbWF4KSB7XG5cdFx0dGhpcy5taW4uY29weShtaW4pO1xuXHRcdHRoaXMubWF4LmNvcHkobWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Qb2ludHMocG9pbnRzKSB7XG5cdFx0dGhpcy5tYWtlRW1wdHkoKTtcblxuXHRcdGZvciAobGV0IGkgPSAwLCBpbCA9IHBvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHR0aGlzLmV4cGFuZEJ5UG9pbnQocG9pbnRzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21DZW50ZXJBbmRTaXplKGNlbnRlciwgc2l6ZSkge1xuXHRcdGNvbnN0IGhhbGZTaXplID0gX3ZlY3RvciQyLmNvcHkoc2l6ZSkubXVsdGlwbHlTY2FsYXIoMC41KTtcblxuXHRcdHRoaXMubWluLmNvcHkoY2VudGVyKS5zdWIoaGFsZlNpemUpO1xuXHRcdHRoaXMubWF4LmNvcHkoY2VudGVyKS5hZGQoaGFsZlNpemUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG5cdGNvcHkoYm94KSB7XG5cdFx0dGhpcy5taW4uY29weShib3gubWluKTtcblx0XHR0aGlzLm1heC5jb3B5KGJveC5tYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZUVtcHR5KCkge1xuXHRcdHRoaXMubWluLnggPSB0aGlzLm1pbi55ID0gK0luZmluaXR5O1xuXHRcdHRoaXMubWF4LnggPSB0aGlzLm1heC55ID0gLUluZmluaXR5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aXNFbXB0eSgpIHtcblx0XHQvLyB0aGlzIGlzIGEgbW9yZSByb2J1c3QgY2hlY2sgZm9yIGVtcHR5IHRoYW4gKCB2b2x1bWUgPD0gMCApIGJlY2F1c2Ugdm9sdW1lIGNhbiBnZXQgcG9zaXRpdmUgd2l0aCB0d28gbmVnYXRpdmUgYXhlc1xuXHRcdHJldHVybiB0aGlzLm1heC54IDwgdGhpcy5taW4ueCB8fCB0aGlzLm1heC55IDwgdGhpcy5taW4ueTtcblx0fVxuXG5cdGdldENlbnRlcih0YXJnZXQgPSBuZXcgVmVjdG9yMigpKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNFbXB0eSgpID8gdGFyZ2V0LnNldCgwLCAwKSA6IHRhcmdldC5hZGRWZWN0b3JzKHRoaXMubWluLCB0aGlzLm1heCkubXVsdGlwbHlTY2FsYXIoMC41KTtcblx0fVxuXG5cdGdldFNpemUodGFyZ2V0ID0gbmV3IFZlY3RvcjIoKSkge1xuXHRcdHJldHVybiB0aGlzLmlzRW1wdHkoKSA/IHRhcmdldC5zZXQoMCwgMCkgOiB0YXJnZXQuc3ViVmVjdG9ycyh0aGlzLm1heCwgdGhpcy5taW4pO1xuXHR9XG5cblx0ZXhwYW5kQnlQb2ludChwb2ludCkge1xuXHRcdHRoaXMubWluLm1pbihwb2ludCk7XG5cdFx0dGhpcy5tYXgubWF4KHBvaW50KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4cGFuZEJ5VmVjdG9yKHZlY3Rvcikge1xuXHRcdHRoaXMubWluLnN1Yih2ZWN0b3IpO1xuXHRcdHRoaXMubWF4LmFkZCh2ZWN0b3IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXhwYW5kQnlTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy5taW4uYWRkU2NhbGFyKC1zY2FsYXIpO1xuXHRcdHRoaXMubWF4LmFkZFNjYWxhcihzY2FsYXIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29udGFpbnNQb2ludChwb2ludCkge1xuXHRcdHJldHVybiBwb2ludC54IDwgdGhpcy5taW4ueCB8fCBwb2ludC54ID4gdGhpcy5tYXgueCB8fCBwb2ludC55IDwgdGhpcy5taW4ueSB8fCBwb2ludC55ID4gdGhpcy5tYXgueSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXG5cdGNvbnRhaW5zQm94KGJveCkge1xuXHRcdHJldHVybiB0aGlzLm1pbi54IDw9IGJveC5taW4ueCAmJiBib3gubWF4LnggPD0gdGhpcy5tYXgueCAmJiB0aGlzLm1pbi55IDw9IGJveC5taW4ueSAmJiBib3gubWF4LnkgPD0gdGhpcy5tYXgueTtcblx0fVxuXG5cdGdldFBhcmFtZXRlcihwb2ludCwgdGFyZ2V0KSB7XG5cdFx0Ly8gVGhpcyBjYW4gcG90ZW50aWFsbHkgaGF2ZSBhIGRpdmlkZSBieSB6ZXJvIGlmIHRoZSBib3hcblx0XHQvLyBoYXMgYSBzaXplIGRpbWVuc2lvbiBvZiAwLlxuXHRcdHJldHVybiB0YXJnZXQuc2V0KChwb2ludC54IC0gdGhpcy5taW4ueCkgLyAodGhpcy5tYXgueCAtIHRoaXMubWluLngpLCAocG9pbnQueSAtIHRoaXMubWluLnkpIC8gKHRoaXMubWF4LnkgLSB0aGlzLm1pbi55KSk7XG5cdH1cblxuXHRpbnRlcnNlY3RzQm94KGJveCkge1xuXHRcdC8vIHVzaW5nIDQgc3BsaXR0aW5nIHBsYW5lcyB0byBydWxlIG91dCBpbnRlcnNlY3Rpb25zXG5cdFx0cmV0dXJuIGJveC5tYXgueCA8IHRoaXMubWluLnggfHwgYm94Lm1pbi54ID4gdGhpcy5tYXgueCB8fCBib3gubWF4LnkgPCB0aGlzLm1pbi55IHx8IGJveC5taW4ueSA+IHRoaXMubWF4LnkgPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHRjbGFtcFBvaW50KHBvaW50LCB0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkocG9pbnQpLmNsYW1wKHRoaXMubWluLCB0aGlzLm1heCk7XG5cdH1cblxuXHRkaXN0YW5jZVRvUG9pbnQocG9pbnQpIHtcblx0XHRjb25zdCBjbGFtcGVkUG9pbnQgPSBfdmVjdG9yJDIuY29weShwb2ludCkuY2xhbXAodGhpcy5taW4sIHRoaXMubWF4KTtcblxuXHRcdHJldHVybiBjbGFtcGVkUG9pbnQuc3ViKHBvaW50KS5sZW5ndGgoKTtcblx0fVxuXG5cdGludGVyc2VjdChib3gpIHtcblx0XHR0aGlzLm1pbi5tYXgoYm94Lm1pbik7XG5cdFx0dGhpcy5tYXgubWluKGJveC5tYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dW5pb24oYm94KSB7XG5cdFx0dGhpcy5taW4ubWluKGJveC5taW4pO1xuXHRcdHRoaXMubWF4Lm1heChib3gubWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyYW5zbGF0ZShvZmZzZXQpIHtcblx0XHR0aGlzLm1pbi5hZGQob2Zmc2V0KTtcblx0XHR0aGlzLm1heC5hZGQob2Zmc2V0KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhib3gpIHtcblx0XHRyZXR1cm4gYm94Lm1pbi5lcXVhbHModGhpcy5taW4pICYmIGJveC5tYXguZXF1YWxzKHRoaXMubWF4KTtcblx0fVxuXG59XG5cbmNsYXNzIEJveDMge1xuXHRjb25zdHJ1Y3RvcihtaW4gPSBuZXcgVmVjdG9yMygrSW5maW5pdHksICtJbmZpbml0eSwgK0luZmluaXR5KSwgbWF4ID0gbmV3IFZlY3RvcjMoLUluZmluaXR5LCAtSW5maW5pdHksIC1JbmZpbml0eSkpIHtcblx0XHR0aGlzLmlzQm94MyA9IHRydWU7XG5cdFx0dGhpcy5taW4gPSBtaW47XG5cdFx0dGhpcy5tYXggPSBtYXg7XG5cdH1cblxuXHRzZXQobWluLCBtYXgpIHtcblx0XHR0aGlzLm1pbi5jb3B5KG1pbik7XG5cdFx0dGhpcy5tYXguY29weShtYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUFycmF5KGFycmF5KSB7XG5cdFx0bGV0IG1pblggPSArSW5maW5pdHk7XG5cdFx0bGV0IG1pblkgPSArSW5maW5pdHk7XG5cdFx0bGV0IG1pblogPSArSW5maW5pdHk7XG5cdFx0bGV0IG1heFggPSAtSW5maW5pdHk7XG5cdFx0bGV0IG1heFkgPSAtSW5maW5pdHk7XG5cdFx0bGV0IG1heFogPSAtSW5maW5pdHk7XG5cblx0XHRmb3IgKGxldCBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkgKz0gMykge1xuXHRcdFx0Y29uc3QgeCA9IGFycmF5W2ldO1xuXHRcdFx0Y29uc3QgeSA9IGFycmF5W2kgKyAxXTtcblx0XHRcdGNvbnN0IHogPSBhcnJheVtpICsgMl07XG5cdFx0XHRpZiAoeCA8IG1pblgpIG1pblggPSB4O1xuXHRcdFx0aWYgKHkgPCBtaW5ZKSBtaW5ZID0geTtcblx0XHRcdGlmICh6IDwgbWluWikgbWluWiA9IHo7XG5cdFx0XHRpZiAoeCA+IG1heFgpIG1heFggPSB4O1xuXHRcdFx0aWYgKHkgPiBtYXhZKSBtYXhZID0geTtcblx0XHRcdGlmICh6ID4gbWF4WikgbWF4WiA9IHo7XG5cdFx0fVxuXG5cdFx0dGhpcy5taW4uc2V0KG1pblgsIG1pblksIG1pblopO1xuXHRcdHRoaXMubWF4LnNldChtYXhYLCBtYXhZLCBtYXhaKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvLyBzZXRGcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUgKSB7XG5cdC8vIFx0bGV0IG1pblggPSArIEluZmluaXR5O1xuXHQvLyBcdGxldCBtaW5ZID0gKyBJbmZpbml0eTtcblx0Ly8gXHRsZXQgbWluWiA9ICsgSW5maW5pdHk7XG5cdC8vIFx0bGV0IG1heFggPSAtIEluZmluaXR5O1xuXHQvLyBcdGxldCBtYXhZID0gLSBJbmZpbml0eTtcblx0Ly8gXHRsZXQgbWF4WiA9IC0gSW5maW5pdHk7XG5cdC8vIFx0Zm9yICggbGV0IGkgPSAwLCBsID0gYXR0cmlidXRlLmNvdW50OyBpIDwgbDsgaSArKyApIHtcblx0Ly8gXHRcdGNvbnN0IHggPSBhdHRyaWJ1dGUuZ2V0WCggaSApO1xuXHQvLyBcdFx0Y29uc3QgeSA9IGF0dHJpYnV0ZS5nZXRZKCBpICk7XG5cdC8vIFx0XHRjb25zdCB6ID0gYXR0cmlidXRlLmdldFooIGkgKTtcblx0Ly8gXHRcdGlmICggeCA8IG1pblggKSBtaW5YID0geDtcblx0Ly8gXHRcdGlmICggeSA8IG1pblkgKSBtaW5ZID0geTtcblx0Ly8gXHRcdGlmICggeiA8IG1pblogKSBtaW5aID0gejtcblx0Ly8gXHRcdGlmICggeCA+IG1heFggKSBtYXhYID0geDtcblx0Ly8gXHRcdGlmICggeSA+IG1heFkgKSBtYXhZID0geTtcblx0Ly8gXHRcdGlmICggeiA+IG1heFogKSBtYXhaID0gejtcblx0Ly8gXHR9XG5cdC8vIFx0dGhpcy5taW4uc2V0KCBtaW5YLCBtaW5ZLCBtaW5aICk7XG5cdC8vIFx0dGhpcy5tYXguc2V0KCBtYXhYLCBtYXhZLCBtYXhaICk7XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdHNldEZyb21Qb2ludHMocG9pbnRzKSB7XG5cdFx0dGhpcy5tYWtlRW1wdHkoKTtcblxuXHRcdGZvciAobGV0IGkgPSAwLCBpbCA9IHBvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHR0aGlzLmV4cGFuZEJ5UG9pbnQocG9pbnRzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21DZW50ZXJBbmRTaXplKGNlbnRlciwgc2l6ZSkge1xuXHRcdGNvbnN0IGhhbGZTaXplID0gX3ZlY3RvciQxLmNvcHkoc2l6ZSkubXVsdGlwbHlTY2FsYXIoMC41KTtcblxuXHRcdHRoaXMubWluLmNvcHkoY2VudGVyKS5zdWIoaGFsZlNpemUpO1xuXHRcdHRoaXMubWF4LmNvcHkoY2VudGVyKS5hZGQoaGFsZlNpemUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU9iamVjdChvYmplY3QsIHByZWNpc2UgPSBmYWxzZSkge1xuXHRcdHRoaXMubWFrZUVtcHR5KCk7XG5cdFx0cmV0dXJuIHRoaXMuZXhwYW5kQnlPYmplY3Qob2JqZWN0LCBwcmVjaXNlKTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxuXHRjb3B5KGJveCkge1xuXHRcdHRoaXMubWluLmNvcHkoYm94Lm1pbik7XG5cdFx0dGhpcy5tYXguY29weShib3gubWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VFbXB0eSgpIHtcblx0XHR0aGlzLm1pbi54ID0gdGhpcy5taW4ueSA9IHRoaXMubWluLnogPSArSW5maW5pdHk7XG5cdFx0dGhpcy5tYXgueCA9IHRoaXMubWF4LnkgPSB0aGlzLm1heC56ID0gLUluZmluaXR5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aXNFbXB0eSgpIHtcblx0XHQvLyB0aGlzIGlzIGEgbW9yZSByb2J1c3QgY2hlY2sgZm9yIGVtcHR5IHRoYW4gKCB2b2x1bWUgPD0gMCApIGJlY2F1c2Ugdm9sdW1lIGNhbiBnZXQgcG9zaXRpdmUgd2l0aCB0d28gbmVnYXRpdmUgYXhlc1xuXHRcdHJldHVybiB0aGlzLm1heC54IDwgdGhpcy5taW4ueCB8fCB0aGlzLm1heC55IDwgdGhpcy5taW4ueSB8fCB0aGlzLm1heC56IDwgdGhpcy5taW4uejtcblx0fVxuXG5cdGdldENlbnRlcih0YXJnZXQgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNFbXB0eSgpID8gdGFyZ2V0LnNldCgwLCAwLCAwKSA6IHRhcmdldC5hZGRWZWN0b3JzKHRoaXMubWluLCB0aGlzLm1heCkubXVsdGlwbHlTY2FsYXIoMC41KTtcblx0fVxuXG5cdGdldFNpemUodGFyZ2V0ID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdHJldHVybiB0aGlzLmlzRW1wdHkoKSA/IHRhcmdldC5zZXQoMCwgMCwgMCkgOiB0YXJnZXQuc3ViVmVjdG9ycyh0aGlzLm1heCwgdGhpcy5taW4pO1xuXHR9XG5cblx0ZXhwYW5kQnlQb2ludChwb2ludCkge1xuXHRcdHRoaXMubWluLm1pbihwb2ludCk7XG5cdFx0dGhpcy5tYXgubWF4KHBvaW50KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4cGFuZEJ5VmVjdG9yKHZlY3Rvcikge1xuXHRcdHRoaXMubWluLnN1Yih2ZWN0b3IpO1xuXHRcdHRoaXMubWF4LmFkZCh2ZWN0b3IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXhwYW5kQnlTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy5taW4uYWRkU2NhbGFyKC1zY2FsYXIpO1xuXHRcdHRoaXMubWF4LmFkZFNjYWxhcihzY2FsYXIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vIGV4cGFuZEJ5T2JqZWN0KCBvYmplY3QsIHByZWNpc2UgPSBmYWxzZSApIHtcblx0Ly8gXHQvLyBDb21wdXRlcyB0aGUgd29ybGQtYXhpcy1hbGlnbmVkIGJvdW5kaW5nIGJveCBvZiBhbiBvYmplY3QgKGluY2x1ZGluZyBpdHMgY2hpbGRyZW4pLFxuXHQvLyBcdC8vIGFjY291bnRpbmcgZm9yIGJvdGggdGhlIG9iamVjdCdzLCBhbmQgY2hpbGRyZW4ncywgd29ybGQgdHJhbnNmb3Jtc1xuXHQvLyBcdG9iamVjdC51cGRhdGVXb3JsZE1hdHJpeCggZmFsc2UsIGZhbHNlICk7XG5cdC8vIFx0Y29uc3QgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XG5cdC8vIFx0aWYgKCBnZW9tZXRyeSAhPT0gdW5kZWZpbmVkICkge1xuXHQvLyBcdFx0aWYgKCBwcmVjaXNlICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMgIT0gdW5kZWZpbmVkICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcblx0Ly8gXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXHQvLyBcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBwb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkgKysgKSB7XG5cdC8vIFx0XHRcdFx0X3ZlY3Rvci5mcm9tQnVmZmVyQXR0cmlidXRlKCBwb3NpdGlvbiwgaSApLmFwcGx5TWF0cml4NCggb2JqZWN0Lm1hdHJpeFdvcmxkICk7XG5cdC8vIFx0XHRcdFx0dGhpcy5leHBhbmRCeVBvaW50KCBfdmVjdG9yICk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdGlmICggZ2VvbWV0cnkuYm91bmRpbmdCb3ggPT09IG51bGwgKSB7XG5cdC8vIFx0XHRcdFx0Z2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KCk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdFx0X2JveC5jb3B5KCBnZW9tZXRyeS5ib3VuZGluZ0JveCApO1xuXHQvLyBcdFx0XHRfYm94LmFwcGx5TWF0cml4NCggb2JqZWN0Lm1hdHJpeFdvcmxkICk7XG5cdC8vIFx0XHRcdHRoaXMudW5pb24oIF9ib3ggKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cdC8vIFx0Y29uc3QgY2hpbGRyZW4gPSBvYmplY3QuY2hpbGRyZW47XG5cdC8vIFx0Zm9yICggbGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSArKyApIHtcblx0Ly8gXHRcdHRoaXMuZXhwYW5kQnlPYmplY3QoIGNoaWxkcmVuWyBpIF0sIHByZWNpc2UgKTtcblx0Ly8gXHR9XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdGNvbnRhaW5zUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gcG9pbnQueCA8IHRoaXMubWluLnggfHwgcG9pbnQueCA+IHRoaXMubWF4LnggfHwgcG9pbnQueSA8IHRoaXMubWluLnkgfHwgcG9pbnQueSA+IHRoaXMubWF4LnkgfHwgcG9pbnQueiA8IHRoaXMubWluLnogfHwgcG9pbnQueiA+IHRoaXMubWF4LnogPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHRjb250YWluc0JveChib3gpIHtcblx0XHRyZXR1cm4gdGhpcy5taW4ueCA8PSBib3gubWluLnggJiYgYm94Lm1heC54IDw9IHRoaXMubWF4LnggJiYgdGhpcy5taW4ueSA8PSBib3gubWluLnkgJiYgYm94Lm1heC55IDw9IHRoaXMubWF4LnkgJiYgdGhpcy5taW4ueiA8PSBib3gubWluLnogJiYgYm94Lm1heC56IDw9IHRoaXMubWF4Lno7XG5cdH1cblxuXHRnZXRQYXJhbWV0ZXIocG9pbnQsIHRhcmdldCkge1xuXHRcdC8vIFRoaXMgY2FuIHBvdGVudGlhbGx5IGhhdmUgYSBkaXZpZGUgYnkgemVybyBpZiB0aGUgYm94XG5cdFx0Ly8gaGFzIGEgc2l6ZSBkaW1lbnNpb24gb2YgMC5cblx0XHRyZXR1cm4gdGFyZ2V0LnNldCgocG9pbnQueCAtIHRoaXMubWluLngpIC8gKHRoaXMubWF4LnggLSB0aGlzLm1pbi54KSwgKHBvaW50LnkgLSB0aGlzLm1pbi55KSAvICh0aGlzLm1heC55IC0gdGhpcy5taW4ueSksIChwb2ludC56IC0gdGhpcy5taW4ueikgLyAodGhpcy5tYXgueiAtIHRoaXMubWluLnopKTtcblx0fVxuXG5cdGludGVyc2VjdHNCb3goYm94KSB7XG5cdFx0Ly8gdXNpbmcgNiBzcGxpdHRpbmcgcGxhbmVzIHRvIHJ1bGUgb3V0IGludGVyc2VjdGlvbnMuXG5cdFx0cmV0dXJuIGJveC5tYXgueCA8IHRoaXMubWluLnggfHwgYm94Lm1pbi54ID4gdGhpcy5tYXgueCB8fCBib3gubWF4LnkgPCB0aGlzLm1pbi55IHx8IGJveC5taW4ueSA+IHRoaXMubWF4LnkgfHwgYm94Lm1heC56IDwgdGhpcy5taW4ueiB8fCBib3gubWluLnogPiB0aGlzLm1heC56ID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0aW50ZXJzZWN0c1NwaGVyZShzcGhlcmUpIHtcblx0XHQvLyBGaW5kIHRoZSBwb2ludCBvbiB0aGUgQUFCQiBjbG9zZXN0IHRvIHRoZSBzcGhlcmUgY2VudGVyLlxuXHRcdHRoaXMuY2xhbXBQb2ludChzcGhlcmUuY2VudGVyLCBfdmVjdG9yJDEpOyAvLyBJZiB0aGF0IHBvaW50IGlzIGluc2lkZSB0aGUgc3BoZXJlLCB0aGUgQUFCQiBhbmQgc3BoZXJlIGludGVyc2VjdC5cblxuXHRcdHJldHVybiBfdmVjdG9yJDEuZGlzdGFuY2VUb1NxdWFyZWQoc3BoZXJlLmNlbnRlcikgPD0gc3BoZXJlLnJhZGl1cyAqIHNwaGVyZS5yYWRpdXM7XG5cdH1cblxuXHRpbnRlcnNlY3RzUGxhbmUocGxhbmUpIHtcblx0XHQvLyBXZSBjb21wdXRlIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGRvdCBwcm9kdWN0IHZhbHVlcy4gSWYgdGhvc2UgdmFsdWVzXG5cdFx0Ly8gYXJlIG9uIHRoZSBzYW1lIHNpZGUgKGJhY2sgb3IgZnJvbnQpIG9mIHRoZSBwbGFuZSwgdGhlbiB0aGVyZSBpcyBubyBpbnRlcnNlY3Rpb24uXG5cdFx0bGV0IG1pbiwgbWF4O1xuXG5cdFx0aWYgKHBsYW5lLm5vcm1hbC54ID4gMCkge1xuXHRcdFx0bWluID0gcGxhbmUubm9ybWFsLnggKiB0aGlzLm1pbi54O1xuXHRcdFx0bWF4ID0gcGxhbmUubm9ybWFsLnggKiB0aGlzLm1heC54O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtaW4gPSBwbGFuZS5ub3JtYWwueCAqIHRoaXMubWF4Lng7XG5cdFx0XHRtYXggPSBwbGFuZS5ub3JtYWwueCAqIHRoaXMubWluLng7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYW5lLm5vcm1hbC55ID4gMCkge1xuXHRcdFx0bWluICs9IHBsYW5lLm5vcm1hbC55ICogdGhpcy5taW4ueTtcblx0XHRcdG1heCArPSBwbGFuZS5ub3JtYWwueSAqIHRoaXMubWF4Lnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbiArPSBwbGFuZS5ub3JtYWwueSAqIHRoaXMubWF4Lnk7XG5cdFx0XHRtYXggKz0gcGxhbmUubm9ybWFsLnkgKiB0aGlzLm1pbi55O1xuXHRcdH1cblxuXHRcdGlmIChwbGFuZS5ub3JtYWwueiA+IDApIHtcblx0XHRcdG1pbiArPSBwbGFuZS5ub3JtYWwueiAqIHRoaXMubWluLno7XG5cdFx0XHRtYXggKz0gcGxhbmUubm9ybWFsLnogKiB0aGlzLm1heC56O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtaW4gKz0gcGxhbmUubm9ybWFsLnogKiB0aGlzLm1heC56O1xuXHRcdFx0bWF4ICs9IHBsYW5lLm5vcm1hbC56ICogdGhpcy5taW4uejtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluIDw9IC1wbGFuZS5jb25zdGFudCAmJiBtYXggPj0gLXBsYW5lLmNvbnN0YW50O1xuXHR9XG5cblx0aW50ZXJzZWN0c1RyaWFuZ2xlKHRyaWFuZ2xlKSB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSAvLyBjb21wdXRlIGJveCBjZW50ZXIgYW5kIGV4dGVudHNcblxuXG5cdFx0dGhpcy5nZXRDZW50ZXIoX2NlbnRlcik7XG5cblx0XHRfZXh0ZW50cy5zdWJWZWN0b3JzKHRoaXMubWF4LCBfY2VudGVyKTsgLy8gdHJhbnNsYXRlIHRyaWFuZ2xlIHRvIGFhYmIgb3JpZ2luXG5cblxuXHRcdF92MCQxLnN1YlZlY3RvcnModHJpYW5nbGUuYSwgX2NlbnRlcik7XG5cblx0XHRfdjEkMy5zdWJWZWN0b3JzKHRyaWFuZ2xlLmIsIF9jZW50ZXIpO1xuXG5cdFx0X3YyJDEuc3ViVmVjdG9ycyh0cmlhbmdsZS5jLCBfY2VudGVyKTsgLy8gY29tcHV0ZSBlZGdlIHZlY3RvcnMgZm9yIHRyaWFuZ2xlXG5cblxuXHRcdF9mMC5zdWJWZWN0b3JzKF92MSQzLCBfdjAkMSk7XG5cblx0XHRfZjEuc3ViVmVjdG9ycyhfdjIkMSwgX3YxJDMpO1xuXG5cdFx0X2YyLnN1YlZlY3RvcnMoX3YwJDEsIF92MiQxKTsgLy8gdGVzdCBhZ2FpbnN0IGF4ZXMgdGhhdCBhcmUgZ2l2ZW4gYnkgY3Jvc3MgcHJvZHVjdCBjb21iaW5hdGlvbnMgb2YgdGhlIGVkZ2VzIG9mIHRoZSB0cmlhbmdsZSBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBhYWJiXG5cdFx0Ly8gbWFrZSBhbiBheGlzIHRlc3Rpbmcgb2YgZWFjaCBvZiB0aGUgMyBzaWRlcyBvZiB0aGUgYWFiYiBhZ2FpbnN0IGVhY2ggb2YgdGhlIDMgc2lkZXMgb2YgdGhlIHRyaWFuZ2xlID0gOSBheGlzIG9mIHNlcGFyYXRpb25cblx0XHQvLyBheGlzX2lqID0gdV9pIHggZl9qICh1MCwgdTEsIHUyID0gZmFjZSBub3JtYWxzIG9mIGFhYmIgPSB4LHkseiBheGVzIHZlY3RvcnMgc2luY2UgYWFiYiBpcyBheGlzIGFsaWduZWQpXG5cblxuXHRcdGxldCBheGVzID0gWzAsIC1fZjAueiwgX2YwLnksIDAsIC1fZjEueiwgX2YxLnksIDAsIC1fZjIueiwgX2YyLnksIF9mMC56LCAwLCAtX2YwLngsIF9mMS56LCAwLCAtX2YxLngsIF9mMi56LCAwLCAtX2YyLngsIC1fZjAueSwgX2YwLngsIDAsIC1fZjEueSwgX2YxLngsIDAsIC1fZjIueSwgX2YyLngsIDBdO1xuXG5cdFx0aWYgKCFzYXRGb3JBeGVzKGF4ZXMsIF92MCQxLCBfdjEkMywgX3YyJDEsIF9leHRlbnRzKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gLy8gdGVzdCAzIGZhY2Ugbm9ybWFscyBmcm9tIHRoZSBhYWJiXG5cblxuXHRcdGF4ZXMgPSBbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV07XG5cblx0XHRpZiAoIXNhdEZvckF4ZXMoYXhlcywgX3YwJDEsIF92MSQzLCBfdjIkMSwgX2V4dGVudHMpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSAvLyBmaW5hbGx5IHRlc3RpbmcgdGhlIGZhY2Ugbm9ybWFsIG9mIHRoZSB0cmlhbmdsZVxuXHRcdC8vIHVzZSBhbHJlYWR5IGV4aXN0aW5nIHRyaWFuZ2xlIGVkZ2UgdmVjdG9ycyBoZXJlXG5cblxuXHRcdF90cmlhbmdsZU5vcm1hbC5jcm9zc1ZlY3RvcnMoX2YwLCBfZjEpO1xuXG5cdFx0YXhlcyA9IFtfdHJpYW5nbGVOb3JtYWwueCwgX3RyaWFuZ2xlTm9ybWFsLnksIF90cmlhbmdsZU5vcm1hbC56XTtcblx0XHRyZXR1cm4gc2F0Rm9yQXhlcyhheGVzLCBfdjAkMSwgX3YxJDMsIF92MiQxLCBfZXh0ZW50cyk7XG5cdH1cblxuXHRjbGFtcFBvaW50KHBvaW50LCB0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkocG9pbnQpLmNsYW1wKHRoaXMubWluLCB0aGlzLm1heCk7XG5cdH1cblxuXHRkaXN0YW5jZVRvUG9pbnQocG9pbnQpIHtcblx0XHRjb25zdCBjbGFtcGVkUG9pbnQgPSBfdmVjdG9yJDEuY29weShwb2ludCkuY2xhbXAodGhpcy5taW4sIHRoaXMubWF4KTtcblxuXHRcdHJldHVybiBjbGFtcGVkUG9pbnQuc3ViKHBvaW50KS5sZW5ndGgoKTtcblx0fVxuXG5cdGdldEJvdW5kaW5nU3BoZXJlKHRhcmdldCkge1xuXHRcdHRoaXMuZ2V0Q2VudGVyKHRhcmdldC5jZW50ZXIpO1xuXHRcdHRhcmdldC5yYWRpdXMgPSB0aGlzLmdldFNpemUoX3ZlY3RvciQxKS5sZW5ndGgoKSAqIDAuNTtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0aW50ZXJzZWN0KGJveCkge1xuXHRcdHRoaXMubWluLm1heChib3gubWluKTtcblx0XHR0aGlzLm1heC5taW4oYm94Lm1heCk7IC8vIGVuc3VyZSB0aGF0IGlmIHRoZXJlIGlzIG5vIG92ZXJsYXAsIHRoZSByZXN1bHQgaXMgZnVsbHkgZW1wdHksIG5vdCBzbGlnaHRseSBlbXB0eSB3aXRoIG5vbi1pbmYvK2luZiB2YWx1ZXMgdGhhdCB3aWxsIGNhdXNlIHN1YnNlcXVlbmNlIGludGVyc2VjdHMgdG8gZXJyb25lb3VzbHkgcmV0dXJuIHZhbGlkIHZhbHVlcy5cblxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgdGhpcy5tYWtlRW1wdHkoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHVuaW9uKGJveCkge1xuXHRcdHRoaXMubWluLm1pbihib3gubWluKTtcblx0XHR0aGlzLm1heC5tYXgoYm94Lm1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobWF0cml4KSB7XG5cdFx0Ly8gdHJhbnNmb3JtIG9mIGVtcHR5IGJveCBpcyBhbiBlbXB0eSBib3guXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gdGhpczsgLy8gTk9URTogSSBhbSB1c2luZyBhIGJpbmFyeSBwYXR0ZXJuIHRvIHNwZWNpZnkgYWxsIDJeMyBjb21iaW5hdGlvbnMgYmVsb3dcblxuXHRcdF9wb2ludHNbMF0uc2V0KHRoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWluLnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAwMDBcblxuXG5cdFx0X3BvaW50c1sxXS5zZXQodGhpcy5taW4ueCwgdGhpcy5taW4ueSwgdGhpcy5tYXgueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDAwMVxuXG5cblx0XHRfcG9pbnRzWzJdLnNldCh0aGlzLm1pbi54LCB0aGlzLm1heC55LCB0aGlzLm1pbi56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMDEwXG5cblxuXHRcdF9wb2ludHNbM10uc2V0KHRoaXMubWluLngsIHRoaXMubWF4LnksIHRoaXMubWF4LnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAwMTFcblxuXG5cdFx0X3BvaW50c1s0XS5zZXQodGhpcy5tYXgueCwgdGhpcy5taW4ueSwgdGhpcy5taW4ueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDEwMFxuXG5cblx0XHRfcG9pbnRzWzVdLnNldCh0aGlzLm1heC54LCB0aGlzLm1pbi55LCB0aGlzLm1heC56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMTAxXG5cblxuXHRcdF9wb2ludHNbNl0uc2V0KHRoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWluLnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAxMTBcblxuXG5cdFx0X3BvaW50c1s3XS5zZXQodGhpcy5tYXgueCwgdGhpcy5tYXgueSwgdGhpcy5tYXgueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDExMVxuXG5cblx0XHR0aGlzLnNldEZyb21Qb2ludHMoX3BvaW50cyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmFuc2xhdGUob2Zmc2V0KSB7XG5cdFx0dGhpcy5taW4uYWRkKG9mZnNldCk7XG5cdFx0dGhpcy5tYXguYWRkKG9mZnNldCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMoYm94KSB7XG5cdFx0cmV0dXJuIGJveC5taW4uZXF1YWxzKHRoaXMubWluKSAmJiBib3gubWF4LmVxdWFscyh0aGlzLm1heCk7XG5cdH1cblxufVxuXG5jb25zdCBfcG9pbnRzID0gWy8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKV07XG5cbmNvbnN0IF92ZWN0b3IkMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfYm94JDEgPSAvKkBfX1BVUkVfXyovbmV3IEJveDMoKTsgLy8gdHJpYW5nbGUgY2VudGVyZWQgdmVydGljZXNcblxuXG5jb25zdCBfdjAkMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdjEkMyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdjIkMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpOyAvLyB0cmlhbmdsZSBlZGdlIHZlY3RvcnNcblxuXG5jb25zdCBfZjAgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2YxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9mMiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfY2VudGVyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9leHRlbnRzID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF90cmlhbmdsZU5vcm1hbCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdGVzdEF4aXMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuZnVuY3Rpb24gc2F0Rm9yQXhlcyhheGVzLCB2MCwgdjEsIHYyLCBleHRlbnRzKSB7XG5cdGZvciAobGV0IGkgPSAwLCBqID0gYXhlcy5sZW5ndGggLSAzOyBpIDw9IGo7IGkgKz0gMykge1xuXHRcdF90ZXN0QXhpcy5mcm9tQXJyYXkoYXhlcywgaSk7IC8vIHByb2plY3QgdGhlIGFhYmIgb250byB0aGUgc2VwYXJhdGluZyBheGlzXG5cblxuXHRcdGNvbnN0IHIgPSBleHRlbnRzLnggKiBNYXRoLmFicyhfdGVzdEF4aXMueCkgKyBleHRlbnRzLnkgKiBNYXRoLmFicyhfdGVzdEF4aXMueSkgKyBleHRlbnRzLnogKiBNYXRoLmFicyhfdGVzdEF4aXMueik7IC8vIHByb2plY3QgYWxsIDMgdmVydGljZXMgb2YgdGhlIHRyaWFuZ2xlIG9udG8gdGhlIHNlcGFyYXRpbmcgYXhpc1xuXG5cdFx0Y29uc3QgcDAgPSB2MC5kb3QoX3Rlc3RBeGlzKTtcblx0XHRjb25zdCBwMSA9IHYxLmRvdChfdGVzdEF4aXMpO1xuXHRcdGNvbnN0IHAyID0gdjIuZG90KF90ZXN0QXhpcyk7IC8vIGFjdHVhbCB0ZXN0LCBiYXNpY2FsbHkgc2VlIGlmIGVpdGhlciBvZiB0aGUgbW9zdCBleHRyZW1lIG9mIHRoZSB0cmlhbmdsZSBwb2ludHMgaW50ZXJzZWN0cyByXG5cblx0XHRpZiAoTWF0aC5tYXgoLU1hdGgubWF4KHAwLCBwMSwgcDIpLCBNYXRoLm1pbihwMCwgcDEsIHAyKSkgPiByKSB7XG5cdFx0XHQvLyBwb2ludHMgb2YgdGhlIHByb2plY3RlZCB0cmlhbmdsZSBhcmUgb3V0c2lkZSB0aGUgcHJvamVjdGVkIGhhbGYtbGVuZ3RoIG9mIHRoZSBhYWJiXG5cdFx0XHQvLyB0aGUgYXhpcyBpcyBzZXBhcmF0aW5nIGFuZCB3ZSBjYW4gZXhpdFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBTUkdCVG9MaW5lYXIoYykge1xuXHRyZXR1cm4gYyA8IDAuMDQwNDUgPyBjICogMC4wNzczOTkzODA4IDogTWF0aC5wb3coYyAqIDAuOTQ3ODY3Mjk4NiArIDAuMDUyMTMyNzAxNCwgMi40KTtcbn1cbmZ1bmN0aW9uIExpbmVhclRvU1JHQihjKSB7XG5cdHJldHVybiBjIDwgMC4wMDMxMzA4ID8gYyAqIDEyLjkyIDogMS4wNTUgKiBNYXRoLnBvdyhjLCAwLjQxNjY2KSAtIDAuMDU1O1xufSAvLyBKYXZhU2NyaXB0IFJHQi10by1SR0IgdHJhbnNmb3JtcywgZGVmaW5lZCBhc1xuLy8gRk5bSW5wdXRDb2xvclNwYWNlXVtPdXRwdXRDb2xvclNwYWNlXSBjYWxsYmFjayBmdW5jdGlvbnMuXG5cbmNvbnN0IEZOID0ge1xuXHRbU1JHQkNvbG9yU3BhY2VdOiB7XG5cdFx0W0xpbmVhclNSR0JDb2xvclNwYWNlXTogU1JHQlRvTGluZWFyXG5cdH0sXG5cdFtMaW5lYXJTUkdCQ29sb3JTcGFjZV06IHtcblx0XHRbU1JHQkNvbG9yU3BhY2VdOiBMaW5lYXJUb1NSR0Jcblx0fVxufTtcbmNvbnN0IENvbG9yTWFuYWdlbWVudCA9IHtcblx0bGVnYWN5TW9kZTogdHJ1ZSxcblxuXHRnZXQgd29ya2luZ0NvbG9yU3BhY2UoKSB7XG5cdFx0cmV0dXJuIExpbmVhclNSR0JDb2xvclNwYWNlO1xuXHR9LFxuXG5cdHNldCB3b3JraW5nQ29sb3JTcGFjZShjb2xvclNwYWNlKSB7XG5cdFx0Y29uc29sZS53YXJuKCdUSFJFRS5Db2xvck1hbmFnZW1lbnQ6IC53b3JraW5nQ29sb3JTcGFjZSBpcyByZWFkb25seS4nKTtcblx0fSxcblxuXHRjb252ZXJ0OiBmdW5jdGlvbiAoY29sb3IsIHNvdXJjZUNvbG9yU3BhY2UsIHRhcmdldENvbG9yU3BhY2UpIHtcblx0XHRpZiAodGhpcy5sZWdhY3lNb2RlIHx8IHNvdXJjZUNvbG9yU3BhY2UgPT09IHRhcmdldENvbG9yU3BhY2UgfHwgIXNvdXJjZUNvbG9yU3BhY2UgfHwgIXRhcmdldENvbG9yU3BhY2UpIHtcblx0XHRcdHJldHVybiBjb2xvcjtcblx0XHR9XG5cblx0XHRpZiAoRk5bc291cmNlQ29sb3JTcGFjZV0gJiYgRk5bc291cmNlQ29sb3JTcGFjZV1bdGFyZ2V0Q29sb3JTcGFjZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uc3QgZm4gPSBGTltzb3VyY2VDb2xvclNwYWNlXVt0YXJnZXRDb2xvclNwYWNlXTtcblx0XHRcdGNvbG9yLnIgPSBmbihjb2xvci5yKTtcblx0XHRcdGNvbG9yLmcgPSBmbihjb2xvci5nKTtcblx0XHRcdGNvbG9yLmIgPSBmbihjb2xvci5iKTtcblx0XHRcdHJldHVybiBjb2xvcjtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGNvbG9yIHNwYWNlIGNvbnZlcnNpb24uJyk7XG5cdH0sXG5cdGZyb21Xb3JraW5nQ29sb3JTcGFjZTogZnVuY3Rpb24gKGNvbG9yLCB0YXJnZXRDb2xvclNwYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udmVydChjb2xvciwgdGhpcy53b3JraW5nQ29sb3JTcGFjZSwgdGFyZ2V0Q29sb3JTcGFjZSk7XG5cdH0sXG5cdHRvV29ya2luZ0NvbG9yU3BhY2U6IGZ1bmN0aW9uIChjb2xvciwgc291cmNlQ29sb3JTcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnZlcnQoY29sb3IsIHNvdXJjZUNvbG9yU3BhY2UsIHRoaXMud29ya2luZ0NvbG9yU3BhY2UpO1xuXHR9XG59O1xuXG5jb25zdCBfY29sb3JLZXl3b3JkcyA9IHtcblx0J2FsaWNlYmx1ZSc6IDB4RjBGOEZGLFxuXHQnYW50aXF1ZXdoaXRlJzogMHhGQUVCRDcsXG5cdCdhcXVhJzogMHgwMEZGRkYsXG5cdCdhcXVhbWFyaW5lJzogMHg3RkZGRDQsXG5cdCdhenVyZSc6IDB4RjBGRkZGLFxuXHQnYmVpZ2UnOiAweEY1RjVEQyxcblx0J2Jpc3F1ZSc6IDB4RkZFNEM0LFxuXHQnYmxhY2snOiAweDAwMDAwMCxcblx0J2JsYW5jaGVkYWxtb25kJzogMHhGRkVCQ0QsXG5cdCdibHVlJzogMHgwMDAwRkYsXG5cdCdibHVldmlvbGV0JzogMHg4QTJCRTIsXG5cdCdicm93bic6IDB4QTUyQTJBLFxuXHQnYnVybHl3b29kJzogMHhERUI4ODcsXG5cdCdjYWRldGJsdWUnOiAweDVGOUVBMCxcblx0J2NoYXJ0cmV1c2UnOiAweDdGRkYwMCxcblx0J2Nob2NvbGF0ZSc6IDB4RDI2OTFFLFxuXHQnY29yYWwnOiAweEZGN0Y1MCxcblx0J2Nvcm5mbG93ZXJibHVlJzogMHg2NDk1RUQsXG5cdCdjb3Juc2lsayc6IDB4RkZGOERDLFxuXHQnY3JpbXNvbic6IDB4REMxNDNDLFxuXHQnY3lhbic6IDB4MDBGRkZGLFxuXHQnZGFya2JsdWUnOiAweDAwMDA4Qixcblx0J2RhcmtjeWFuJzogMHgwMDhCOEIsXG5cdCdkYXJrZ29sZGVucm9kJzogMHhCODg2MEIsXG5cdCdkYXJrZ3JheSc6IDB4QTlBOUE5LFxuXHQnZGFya2dyZWVuJzogMHgwMDY0MDAsXG5cdCdkYXJrZ3JleSc6IDB4QTlBOUE5LFxuXHQnZGFya2toYWtpJzogMHhCREI3NkIsXG5cdCdkYXJrbWFnZW50YSc6IDB4OEIwMDhCLFxuXHQnZGFya29saXZlZ3JlZW4nOiAweDU1NkIyRixcblx0J2RhcmtvcmFuZ2UnOiAweEZGOEMwMCxcblx0J2RhcmtvcmNoaWQnOiAweDk5MzJDQyxcblx0J2RhcmtyZWQnOiAweDhCMDAwMCxcblx0J2RhcmtzYWxtb24nOiAweEU5OTY3QSxcblx0J2RhcmtzZWFncmVlbic6IDB4OEZCQzhGLFxuXHQnZGFya3NsYXRlYmx1ZSc6IDB4NDgzRDhCLFxuXHQnZGFya3NsYXRlZ3JheSc6IDB4MkY0RjRGLFxuXHQnZGFya3NsYXRlZ3JleSc6IDB4MkY0RjRGLFxuXHQnZGFya3R1cnF1b2lzZSc6IDB4MDBDRUQxLFxuXHQnZGFya3Zpb2xldCc6IDB4OTQwMEQzLFxuXHQnZGVlcHBpbmsnOiAweEZGMTQ5Myxcblx0J2RlZXBza3libHVlJzogMHgwMEJGRkYsXG5cdCdkaW1ncmF5JzogMHg2OTY5NjksXG5cdCdkaW1ncmV5JzogMHg2OTY5NjksXG5cdCdkb2RnZXJibHVlJzogMHgxRTkwRkYsXG5cdCdmaXJlYnJpY2snOiAweEIyMjIyMixcblx0J2Zsb3JhbHdoaXRlJzogMHhGRkZBRjAsXG5cdCdmb3Jlc3RncmVlbic6IDB4MjI4QjIyLFxuXHQnZnVjaHNpYSc6IDB4RkYwMEZGLFxuXHQnZ2FpbnNib3JvJzogMHhEQ0RDREMsXG5cdCdnaG9zdHdoaXRlJzogMHhGOEY4RkYsXG5cdCdnb2xkJzogMHhGRkQ3MDAsXG5cdCdnb2xkZW5yb2QnOiAweERBQTUyMCxcblx0J2dyYXknOiAweDgwODA4MCxcblx0J2dyZWVuJzogMHgwMDgwMDAsXG5cdCdncmVlbnllbGxvdyc6IDB4QURGRjJGLFxuXHQnZ3JleSc6IDB4ODA4MDgwLFxuXHQnaG9uZXlkZXcnOiAweEYwRkZGMCxcblx0J2hvdHBpbmsnOiAweEZGNjlCNCxcblx0J2luZGlhbnJlZCc6IDB4Q0Q1QzVDLFxuXHQnaW5kaWdvJzogMHg0QjAwODIsXG5cdCdpdm9yeSc6IDB4RkZGRkYwLFxuXHQna2hha2knOiAweEYwRTY4Qyxcblx0J2xhdmVuZGVyJzogMHhFNkU2RkEsXG5cdCdsYXZlbmRlcmJsdXNoJzogMHhGRkYwRjUsXG5cdCdsYXduZ3JlZW4nOiAweDdDRkMwMCxcblx0J2xlbW9uY2hpZmZvbic6IDB4RkZGQUNELFxuXHQnbGlnaHRibHVlJzogMHhBREQ4RTYsXG5cdCdsaWdodGNvcmFsJzogMHhGMDgwODAsXG5cdCdsaWdodGN5YW4nOiAweEUwRkZGRixcblx0J2xpZ2h0Z29sZGVucm9keWVsbG93JzogMHhGQUZBRDIsXG5cdCdsaWdodGdyYXknOiAweEQzRDNEMyxcblx0J2xpZ2h0Z3JlZW4nOiAweDkwRUU5MCxcblx0J2xpZ2h0Z3JleSc6IDB4RDNEM0QzLFxuXHQnbGlnaHRwaW5rJzogMHhGRkI2QzEsXG5cdCdsaWdodHNhbG1vbic6IDB4RkZBMDdBLFxuXHQnbGlnaHRzZWFncmVlbic6IDB4MjBCMkFBLFxuXHQnbGlnaHRza3libHVlJzogMHg4N0NFRkEsXG5cdCdsaWdodHNsYXRlZ3JheSc6IDB4Nzc4ODk5LFxuXHQnbGlnaHRzbGF0ZWdyZXknOiAweDc3ODg5OSxcblx0J2xpZ2h0c3RlZWxibHVlJzogMHhCMEM0REUsXG5cdCdsaWdodHllbGxvdyc6IDB4RkZGRkUwLFxuXHQnbGltZSc6IDB4MDBGRjAwLFxuXHQnbGltZWdyZWVuJzogMHgzMkNEMzIsXG5cdCdsaW5lbic6IDB4RkFGMEU2LFxuXHQnbWFnZW50YSc6IDB4RkYwMEZGLFxuXHQnbWFyb29uJzogMHg4MDAwMDAsXG5cdCdtZWRpdW1hcXVhbWFyaW5lJzogMHg2NkNEQUEsXG5cdCdtZWRpdW1ibHVlJzogMHgwMDAwQ0QsXG5cdCdtZWRpdW1vcmNoaWQnOiAweEJBNTVEMyxcblx0J21lZGl1bXB1cnBsZSc6IDB4OTM3MERCLFxuXHQnbWVkaXVtc2VhZ3JlZW4nOiAweDNDQjM3MSxcblx0J21lZGl1bXNsYXRlYmx1ZSc6IDB4N0I2OEVFLFxuXHQnbWVkaXVtc3ByaW5nZ3JlZW4nOiAweDAwRkE5QSxcblx0J21lZGl1bXR1cnF1b2lzZSc6IDB4NDhEMUNDLFxuXHQnbWVkaXVtdmlvbGV0cmVkJzogMHhDNzE1ODUsXG5cdCdtaWRuaWdodGJsdWUnOiAweDE5MTk3MCxcblx0J21pbnRjcmVhbSc6IDB4RjVGRkZBLFxuXHQnbWlzdHlyb3NlJzogMHhGRkU0RTEsXG5cdCdtb2NjYXNpbic6IDB4RkZFNEI1LFxuXHQnbmF2YWpvd2hpdGUnOiAweEZGREVBRCxcblx0J25hdnknOiAweDAwMDA4MCxcblx0J29sZGxhY2UnOiAweEZERjVFNixcblx0J29saXZlJzogMHg4MDgwMDAsXG5cdCdvbGl2ZWRyYWInOiAweDZCOEUyMyxcblx0J29yYW5nZSc6IDB4RkZBNTAwLFxuXHQnb3JhbmdlcmVkJzogMHhGRjQ1MDAsXG5cdCdvcmNoaWQnOiAweERBNzBENixcblx0J3BhbGVnb2xkZW5yb2QnOiAweEVFRThBQSxcblx0J3BhbGVncmVlbic6IDB4OThGQjk4LFxuXHQncGFsZXR1cnF1b2lzZSc6IDB4QUZFRUVFLFxuXHQncGFsZXZpb2xldHJlZCc6IDB4REI3MDkzLFxuXHQncGFwYXlhd2hpcCc6IDB4RkZFRkQ1LFxuXHQncGVhY2hwdWZmJzogMHhGRkRBQjksXG5cdCdwZXJ1JzogMHhDRDg1M0YsXG5cdCdwaW5rJzogMHhGRkMwQ0IsXG5cdCdwbHVtJzogMHhEREEwREQsXG5cdCdwb3dkZXJibHVlJzogMHhCMEUwRTYsXG5cdCdwdXJwbGUnOiAweDgwMDA4MCxcblx0J3JlYmVjY2FwdXJwbGUnOiAweDY2MzM5OSxcblx0J3JlZCc6IDB4RkYwMDAwLFxuXHQncm9zeWJyb3duJzogMHhCQzhGOEYsXG5cdCdyb3lhbGJsdWUnOiAweDQxNjlFMSxcblx0J3NhZGRsZWJyb3duJzogMHg4QjQ1MTMsXG5cdCdzYWxtb24nOiAweEZBODA3Mixcblx0J3NhbmR5YnJvd24nOiAweEY0QTQ2MCxcblx0J3NlYWdyZWVuJzogMHgyRThCNTcsXG5cdCdzZWFzaGVsbCc6IDB4RkZGNUVFLFxuXHQnc2llbm5hJzogMHhBMDUyMkQsXG5cdCdzaWx2ZXInOiAweEMwQzBDMCxcblx0J3NreWJsdWUnOiAweDg3Q0VFQixcblx0J3NsYXRlYmx1ZSc6IDB4NkE1QUNELFxuXHQnc2xhdGVncmF5JzogMHg3MDgwOTAsXG5cdCdzbGF0ZWdyZXknOiAweDcwODA5MCxcblx0J3Nub3cnOiAweEZGRkFGQSxcblx0J3NwcmluZ2dyZWVuJzogMHgwMEZGN0YsXG5cdCdzdGVlbGJsdWUnOiAweDQ2ODJCNCxcblx0J3Rhbic6IDB4RDJCNDhDLFxuXHQndGVhbCc6IDB4MDA4MDgwLFxuXHQndGhpc3RsZSc6IDB4RDhCRkQ4LFxuXHQndG9tYXRvJzogMHhGRjYzNDcsXG5cdCd0dXJxdW9pc2UnOiAweDQwRTBEMCxcblx0J3Zpb2xldCc6IDB4RUU4MkVFLFxuXHQnd2hlYXQnOiAweEY1REVCMyxcblx0J3doaXRlJzogMHhGRkZGRkYsXG5cdCd3aGl0ZXNtb2tlJzogMHhGNUY1RjUsXG5cdCd5ZWxsb3cnOiAweEZGRkYwMCxcblx0J3llbGxvd2dyZWVuJzogMHg5QUNEMzJcbn07XG5jb25zdCBfcmdiID0ge1xuXHRyOiAwLFxuXHRnOiAwLFxuXHRiOiAwXG59O1xuY29uc3QgX2hzbEEgPSB7XG5cdGg6IDAsXG5cdHM6IDAsXG5cdGw6IDBcbn07XG5jb25zdCBfaHNsQiA9IHtcblx0aDogMCxcblx0czogMCxcblx0bDogMFxufTtcblxuZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG5cdGlmICh0IDwgMCkgdCArPSAxO1xuXHRpZiAodCA+IDEpIHQgLT0gMTtcblx0aWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG5cdGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuXHRpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogKDIgLyAzIC0gdCk7XG5cdHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiB0b0NvbXBvbmVudHMoc291cmNlLCB0YXJnZXQpIHtcblx0dGFyZ2V0LnIgPSBzb3VyY2Uucjtcblx0dGFyZ2V0LmcgPSBzb3VyY2UuZztcblx0dGFyZ2V0LmIgPSBzb3VyY2UuYjtcblx0cmV0dXJuIHRhcmdldDtcbn1cblxuY2xhc3MgQ29sb3Ige1xuXHRjb25zdHJ1Y3RvcihyLCBnLCBiKSB7XG5cdFx0dGhpcy5pc0NvbG9yID0gdHJ1ZTtcblx0XHR0aGlzLnIgPSAxO1xuXHRcdHRoaXMuZyA9IDE7XG5cdFx0dGhpcy5iID0gMTtcblxuXHRcdGlmIChnID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyByIGlzIFRIUkVFLkNvbG9yLCBoZXggb3Igc3RyaW5nXG5cdFx0XHRyZXR1cm4gdGhpcy5zZXQocik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc2V0UkdCKHIsIGcsIGIpO1xuXHR9XG5cblx0c2V0KHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLmlzQ29sb3IpIHtcblx0XHRcdHRoaXMuY29weSh2YWx1ZSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLnNldEhleCh2YWx1ZSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnNldFN0eWxlKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnIgPSBzY2FsYXI7XG5cdFx0dGhpcy5nID0gc2NhbGFyO1xuXHRcdHRoaXMuYiA9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEhleChoZXgsIGNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdGhleCA9IE1hdGguZmxvb3IoaGV4KTtcblx0XHR0aGlzLnIgPSAoaGV4ID4+IDE2ICYgMjU1KSAvIDI1NTtcblx0XHR0aGlzLmcgPSAoaGV4ID4+IDggJiAyNTUpIC8gMjU1O1xuXHRcdHRoaXMuYiA9IChoZXggJiAyNTUpIC8gMjU1O1xuXHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0UkdCKHIsIGcsIGIsIGNvbG9yU3BhY2UgPSBDb2xvck1hbmFnZW1lbnQud29ya2luZ0NvbG9yU3BhY2UpIHtcblx0XHR0aGlzLnIgPSByO1xuXHRcdHRoaXMuZyA9IGc7XG5cdFx0dGhpcy5iID0gYjtcblx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEhTTChoLCBzLCBsLCBjb2xvclNwYWNlID0gQ29sb3JNYW5hZ2VtZW50LndvcmtpbmdDb2xvclNwYWNlKSB7XG5cdFx0Ly8gaCxzLGwgcmFuZ2VzIGFyZSBpbiAwLjAgLSAxLjBcblx0XHRoID0gZXVjbGlkZWFuTW9kdWxvKGgsIDEpO1xuXHRcdHMgPSBjbGFtcChzLCAwLCAxKTtcblx0XHRsID0gY2xhbXAobCwgMCwgMSk7XG5cblx0XHRpZiAocyA9PT0gMCkge1xuXHRcdFx0dGhpcy5yID0gdGhpcy5nID0gdGhpcy5iID0gbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcCA9IGwgPD0gMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuXHRcdFx0Y29uc3QgcSA9IDIgKiBsIC0gcDtcblx0XHRcdHRoaXMuciA9IGh1ZTJyZ2IocSwgcCwgaCArIDEgLyAzKTtcblx0XHRcdHRoaXMuZyA9IGh1ZTJyZ2IocSwgcCwgaCk7XG5cdFx0XHR0aGlzLmIgPSBodWUycmdiKHEsIHAsIGggLSAxIC8gMyk7XG5cdFx0fVxuXG5cdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRTdHlsZShzdHlsZSwgY29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0ZnVuY3Rpb24gaGFuZGxlQWxwaGEoc3RyaW5nKSB7XG5cdFx0XHRpZiAoc3RyaW5nID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoc3RyaW5nKSA8IDEpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5Db2xvcjogQWxwaGEgY29tcG9uZW50IG9mICcgKyBzdHlsZSArICcgd2lsbCBiZSBpZ25vcmVkLicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBtO1xuXG5cdFx0aWYgKG0gPSAvXigoPzpyZ2J8aHNsKWE/KVxcKChbXlxcKV0qKVxcKS8uZXhlYyhzdHlsZSkpIHtcblx0XHRcdC8vIHJnYiAvIGhzbFxuXHRcdFx0bGV0IGNvbG9yO1xuXHRcdFx0Y29uc3QgbmFtZSA9IG1bMV07XG5cdFx0XHRjb25zdCBjb21wb25lbnRzID0gbVsyXTtcblxuXHRcdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRcdGNhc2UgJ3JnYic6XG5cdFx0XHRcdGNhc2UgJ3JnYmEnOlxuXHRcdFx0XHRcdGlmIChjb2xvciA9IC9eXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyooPzosXFxzKihcXGQqXFwuP1xcZCspXFxzKik/JC8uZXhlYyhjb21wb25lbnRzKSkge1xuXHRcdFx0XHRcdFx0Ly8gcmdiKDI1NSwwLDApIHJnYmEoMjU1LDAsMCwwLjUpXG5cdFx0XHRcdFx0XHR0aGlzLnIgPSBNYXRoLm1pbigyNTUsIHBhcnNlSW50KGNvbG9yWzFdLCAxMCkpIC8gMjU1O1xuXHRcdFx0XHRcdFx0dGhpcy5nID0gTWF0aC5taW4oMjU1LCBwYXJzZUludChjb2xvclsyXSwgMTApKSAvIDI1NTtcblx0XHRcdFx0XHRcdHRoaXMuYiA9IE1hdGgubWluKDI1NSwgcGFyc2VJbnQoY29sb3JbM10sIDEwKSkgLyAyNTU7XG5cdFx0XHRcdFx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRcdFx0XHRcdGhhbmRsZUFscGhhKGNvbG9yWzRdKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjb2xvciA9IC9eXFxzKihcXGQrKVxcJVxccyosXFxzKihcXGQrKVxcJVxccyosXFxzKihcXGQrKVxcJVxccyooPzosXFxzKihcXGQqXFwuP1xcZCspXFxzKik/JC8uZXhlYyhjb21wb25lbnRzKSkge1xuXHRcdFx0XHRcdFx0Ly8gcmdiKDEwMCUsMCUsMCUpIHJnYmEoMTAwJSwwJSwwJSwwLjUpXG5cdFx0XHRcdFx0XHR0aGlzLnIgPSBNYXRoLm1pbigxMDAsIHBhcnNlSW50KGNvbG9yWzFdLCAxMCkpIC8gMTAwO1xuXHRcdFx0XHRcdFx0dGhpcy5nID0gTWF0aC5taW4oMTAwLCBwYXJzZUludChjb2xvclsyXSwgMTApKSAvIDEwMDtcblx0XHRcdFx0XHRcdHRoaXMuYiA9IE1hdGgubWluKDEwMCwgcGFyc2VJbnQoY29sb3JbM10sIDEwKSkgLyAxMDA7XG5cdFx0XHRcdFx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRcdFx0XHRcdGhhbmRsZUFscGhhKGNvbG9yWzRdKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHRcdGNhc2UgJ2hzbGEnOlxuXHRcdFx0XHRcdGlmIChjb2xvciA9IC9eXFxzKihcXGQqXFwuP1xcZCspXFxzKixcXHMqKFxcZCpcXC4/XFxkKylcXCVcXHMqLFxccyooXFxkKlxcLj9cXGQrKVxcJVxccyooPzosXFxzKihcXGQqXFwuP1xcZCspXFxzKik/JC8uZXhlYyhjb21wb25lbnRzKSkge1xuXHRcdFx0XHRcdFx0Ly8gaHNsKDEyMCw1MCUsNTAlKSBoc2xhKDEyMCw1MCUsNTAlLDAuNSlcblx0XHRcdFx0XHRcdGNvbnN0IGggPSBwYXJzZUZsb2F0KGNvbG9yWzFdKSAvIDM2MDtcblx0XHRcdFx0XHRcdGNvbnN0IHMgPSBwYXJzZUZsb2F0KGNvbG9yWzJdKSAvIDEwMDtcblx0XHRcdFx0XHRcdGNvbnN0IGwgPSBwYXJzZUZsb2F0KGNvbG9yWzNdKSAvIDEwMDtcblx0XHRcdFx0XHRcdGhhbmRsZUFscGhhKGNvbG9yWzRdKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnNldEhTTChoLCBzLCBsLCBjb2xvclNwYWNlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG0gPSAvXlxcIyhbQS1GYS1mXFxkXSspJC8uZXhlYyhzdHlsZSkpIHtcblx0XHRcdC8vIGhleCBjb2xvclxuXHRcdFx0Y29uc3QgaGV4ID0gbVsxXTtcblx0XHRcdGNvbnN0IHNpemUgPSBoZXgubGVuZ3RoO1xuXG5cdFx0XHRpZiAoc2l6ZSA9PT0gMykge1xuXHRcdFx0XHQvLyAjZmYwXG5cdFx0XHRcdHRoaXMuciA9IHBhcnNlSW50KGhleC5jaGFyQXQoMCkgKyBoZXguY2hhckF0KDApLCAxNikgLyAyNTU7XG5cdFx0XHRcdHRoaXMuZyA9IHBhcnNlSW50KGhleC5jaGFyQXQoMSkgKyBoZXguY2hhckF0KDEpLCAxNikgLyAyNTU7XG5cdFx0XHRcdHRoaXMuYiA9IHBhcnNlSW50KGhleC5jaGFyQXQoMikgKyBoZXguY2hhckF0KDIpLCAxNikgLyAyNTU7XG5cdFx0XHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0gZWxzZSBpZiAoc2l6ZSA9PT0gNikge1xuXHRcdFx0XHQvLyAjZmYwMDAwXG5cdFx0XHRcdHRoaXMuciA9IHBhcnNlSW50KGhleC5jaGFyQXQoMCkgKyBoZXguY2hhckF0KDEpLCAxNikgLyAyNTU7XG5cdFx0XHRcdHRoaXMuZyA9IHBhcnNlSW50KGhleC5jaGFyQXQoMikgKyBoZXguY2hhckF0KDMpLCAxNikgLyAyNTU7XG5cdFx0XHRcdHRoaXMuYiA9IHBhcnNlSW50KGhleC5jaGFyQXQoNCkgKyBoZXguY2hhckF0KDUpLCAxNikgLyAyNTU7XG5cdFx0XHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc3R5bGUgJiYgc3R5bGUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0Q29sb3JOYW1lKHN0eWxlLCBjb2xvclNwYWNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldENvbG9yTmFtZShzdHlsZSwgY29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0Ly8gY29sb3Iga2V5d29yZHNcblx0XHRjb25zdCBoZXggPSBfY29sb3JLZXl3b3Jkc1tzdHlsZS50b0xvd2VyQ2FzZSgpXTtcblxuXHRcdGlmIChoZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gcmVkXG5cdFx0XHR0aGlzLnNldEhleChoZXgsIGNvbG9yU3BhY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB1bmtub3duIGNvbG9yXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLkNvbG9yOiBVbmtub3duIGNvbG9yICcgKyBzdHlsZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG5cdH1cblxuXHRjb3B5KGNvbG9yKSB7XG5cdFx0dGhpcy5yID0gY29sb3Iucjtcblx0XHR0aGlzLmcgPSBjb2xvci5nO1xuXHRcdHRoaXMuYiA9IGNvbG9yLmI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5U1JHQlRvTGluZWFyKGNvbG9yKSB7XG5cdFx0dGhpcy5yID0gU1JHQlRvTGluZWFyKGNvbG9yLnIpO1xuXHRcdHRoaXMuZyA9IFNSR0JUb0xpbmVhcihjb2xvci5nKTtcblx0XHR0aGlzLmIgPSBTUkdCVG9MaW5lYXIoY29sb3IuYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5TGluZWFyVG9TUkdCKGNvbG9yKSB7XG5cdFx0dGhpcy5yID0gTGluZWFyVG9TUkdCKGNvbG9yLnIpO1xuXHRcdHRoaXMuZyA9IExpbmVhclRvU1JHQihjb2xvci5nKTtcblx0XHR0aGlzLmIgPSBMaW5lYXJUb1NSR0IoY29sb3IuYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb252ZXJ0U1JHQlRvTGluZWFyKCkge1xuXHRcdHRoaXMuY29weVNSR0JUb0xpbmVhcih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvbnZlcnRMaW5lYXJUb1NSR0IoKSB7XG5cdFx0dGhpcy5jb3B5TGluZWFyVG9TUkdCKHRoaXMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0SGV4KGNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdENvbG9yTWFuYWdlbWVudC5mcm9tV29ya2luZ0NvbG9yU3BhY2UodG9Db21wb25lbnRzKHRoaXMsIF9yZ2IpLCBjb2xvclNwYWNlKTtcblx0XHRyZXR1cm4gY2xhbXAoX3JnYi5yICogMjU1LCAwLCAyNTUpIDw8IDE2IF4gY2xhbXAoX3JnYi5nICogMjU1LCAwLCAyNTUpIDw8IDggXiBjbGFtcChfcmdiLmIgKiAyNTUsIDAsIDI1NSkgPDwgMDtcblx0fVxuXG5cdGdldEhleFN0cmluZyhjb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHRyZXR1cm4gKCcwMDAwMDAnICsgdGhpcy5nZXRIZXgoY29sb3JTcGFjZSkudG9TdHJpbmcoMTYpKS5zbGljZSgtNik7XG5cdH1cblxuXHRnZXRIU0wodGFyZ2V0LCBjb2xvclNwYWNlID0gQ29sb3JNYW5hZ2VtZW50LndvcmtpbmdDb2xvclNwYWNlKSB7XG5cdFx0Ly8gaCxzLGwgcmFuZ2VzIGFyZSBpbiAwLjAgLSAxLjBcblx0XHRDb2xvck1hbmFnZW1lbnQuZnJvbVdvcmtpbmdDb2xvclNwYWNlKHRvQ29tcG9uZW50cyh0aGlzLCBfcmdiKSwgY29sb3JTcGFjZSk7XG5cdFx0Y29uc3QgciA9IF9yZ2Iucixcblx0XHRcdFx0XHRnID0gX3JnYi5nLFxuXHRcdFx0XHRcdGIgPSBfcmdiLmI7XG5cdFx0Y29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdFx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdFx0bGV0IGh1ZSwgc2F0dXJhdGlvbjtcblx0XHRjb25zdCBsaWdodG5lc3MgPSAobWluICsgbWF4KSAvIDIuMDtcblxuXHRcdGlmIChtaW4gPT09IG1heCkge1xuXHRcdFx0aHVlID0gMDtcblx0XHRcdHNhdHVyYXRpb24gPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcblx0XHRcdHNhdHVyYXRpb24gPSBsaWdodG5lc3MgPD0gMC41ID8gZGVsdGEgLyAobWF4ICsgbWluKSA6IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXG5cdFx0XHRzd2l0Y2ggKG1heCkge1xuXHRcdFx0XHRjYXNlIHI6XG5cdFx0XHRcdFx0aHVlID0gKGcgLSBiKSAvIGRlbHRhICsgKGcgPCBiID8gNiA6IDApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgZzpcblx0XHRcdFx0XHRodWUgPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgYjpcblx0XHRcdFx0XHRodWUgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRodWUgLz0gNjtcblx0XHR9XG5cblx0XHR0YXJnZXQuaCA9IGh1ZTtcblx0XHR0YXJnZXQucyA9IHNhdHVyYXRpb247XG5cdFx0dGFyZ2V0LmwgPSBsaWdodG5lc3M7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGdldFJHQih0YXJnZXQsIGNvbG9yU3BhY2UgPSBDb2xvck1hbmFnZW1lbnQud29ya2luZ0NvbG9yU3BhY2UpIHtcblx0XHRDb2xvck1hbmFnZW1lbnQuZnJvbVdvcmtpbmdDb2xvclNwYWNlKHRvQ29tcG9uZW50cyh0aGlzLCBfcmdiKSwgY29sb3JTcGFjZSk7XG5cdFx0dGFyZ2V0LnIgPSBfcmdiLnI7XG5cdFx0dGFyZ2V0LmcgPSBfcmdiLmc7XG5cdFx0dGFyZ2V0LmIgPSBfcmdiLmI7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGdldFN0eWxlKGNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdENvbG9yTWFuYWdlbWVudC5mcm9tV29ya2luZ0NvbG9yU3BhY2UodG9Db21wb25lbnRzKHRoaXMsIF9yZ2IpLCBjb2xvclNwYWNlKTtcblxuXHRcdGlmIChjb2xvclNwYWNlICE9PSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdFx0Ly8gUmVxdWlyZXMgQ1NTIENvbG9yIE1vZHVsZSBMZXZlbCA0IChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWNvbG9yLTQvKS5cblx0XHRcdHJldHVybiBgY29sb3IoJHtjb2xvclNwYWNlfSAke19yZ2Iucn0gJHtfcmdiLmd9ICR7X3JnYi5ifSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgcmdiKCR7X3JnYi5yICogMjU1IHwgMH0sJHtfcmdiLmcgKiAyNTUgfCAwfSwke19yZ2IuYiAqIDI1NSB8IDB9KWA7XG5cdH1cblxuXHRvZmZzZXRIU0woaCwgcywgbCkge1xuXHRcdHRoaXMuZ2V0SFNMKF9oc2xBKTtcblx0XHRfaHNsQS5oICs9IGg7XG5cdFx0X2hzbEEucyArPSBzO1xuXHRcdF9oc2xBLmwgKz0gbDtcblx0XHR0aGlzLnNldEhTTChfaHNsQS5oLCBfaHNsQS5zLCBfaHNsQS5sKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZChjb2xvcikge1xuXHRcdHRoaXMuciArPSBjb2xvci5yO1xuXHRcdHRoaXMuZyArPSBjb2xvci5nO1xuXHRcdHRoaXMuYiArPSBjb2xvci5iO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkQ29sb3JzKGNvbG9yMSwgY29sb3IyKSB7XG5cdFx0dGhpcy5yID0gY29sb3IxLnIgKyBjb2xvcjIucjtcblx0XHR0aGlzLmcgPSBjb2xvcjEuZyArIGNvbG9yMi5nO1xuXHRcdHRoaXMuYiA9IGNvbG9yMS5iICsgY29sb3IyLmI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsYXIocykge1xuXHRcdHRoaXMuciArPSBzO1xuXHRcdHRoaXMuZyArPSBzO1xuXHRcdHRoaXMuYiArPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViKGNvbG9yKSB7XG5cdFx0dGhpcy5yID0gTWF0aC5tYXgoMCwgdGhpcy5yIC0gY29sb3Iucik7XG5cdFx0dGhpcy5nID0gTWF0aC5tYXgoMCwgdGhpcy5nIC0gY29sb3IuZyk7XG5cdFx0dGhpcy5iID0gTWF0aC5tYXgoMCwgdGhpcy5iIC0gY29sb3IuYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseShjb2xvcikge1xuXHRcdHRoaXMuciAqPSBjb2xvci5yO1xuXHRcdHRoaXMuZyAqPSBjb2xvci5nO1xuXHRcdHRoaXMuYiAqPSBjb2xvci5iO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlTY2FsYXIocykge1xuXHRcdHRoaXMuciAqPSBzO1xuXHRcdHRoaXMuZyAqPSBzO1xuXHRcdHRoaXMuYiAqPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGVycChjb2xvciwgYWxwaGEpIHtcblx0XHR0aGlzLnIgKz0gKGNvbG9yLnIgLSB0aGlzLnIpICogYWxwaGE7XG5cdFx0dGhpcy5nICs9IChjb2xvci5nIC0gdGhpcy5nKSAqIGFscGhhO1xuXHRcdHRoaXMuYiArPSAoY29sb3IuYiAtIHRoaXMuYikgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxlcnBDb2xvcnMoY29sb3IxLCBjb2xvcjIsIGFscGhhKSB7XG5cdFx0dGhpcy5yID0gY29sb3IxLnIgKyAoY29sb3IyLnIgLSBjb2xvcjEucikgKiBhbHBoYTtcblx0XHR0aGlzLmcgPSBjb2xvcjEuZyArIChjb2xvcjIuZyAtIGNvbG9yMS5nKSAqIGFscGhhO1xuXHRcdHRoaXMuYiA9IGNvbG9yMS5iICsgKGNvbG9yMi5iIC0gY29sb3IxLmIpICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXJwSFNMKGNvbG9yLCBhbHBoYSkge1xuXHRcdHRoaXMuZ2V0SFNMKF9oc2xBKTtcblx0XHRjb2xvci5nZXRIU0woX2hzbEIpO1xuXHRcdGNvbnN0IGggPSBsZXJwKF9oc2xBLmgsIF9oc2xCLmgsIGFscGhhKTtcblx0XHRjb25zdCBzID0gbGVycChfaHNsQS5zLCBfaHNsQi5zLCBhbHBoYSk7XG5cdFx0Y29uc3QgbCA9IGxlcnAoX2hzbEEubCwgX2hzbEIubCwgYWxwaGEpO1xuXHRcdHRoaXMuc2V0SFNMKGgsIHMsIGwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKGMpIHtcblx0XHRyZXR1cm4gYy5yID09PSB0aGlzLnIgJiYgYy5nID09PSB0aGlzLmcgJiYgYy5iID09PSB0aGlzLmI7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHR0aGlzLnIgPSBhcnJheVtvZmZzZXRdO1xuXHRcdHRoaXMuZyA9IGFycmF5W29mZnNldCArIDFdO1xuXHRcdHRoaXMuYiA9IGFycmF5W29mZnNldCArIDJdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRoaXMucjtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRoaXMuZztcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXMuYjtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0gLy8gZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpbmRleCApIHtcblx0Ly8gXHR0aGlzLnIgPSBhdHRyaWJ1dGUuZ2V0WCggaW5kZXggKTtcblx0Ly8gXHR0aGlzLmcgPSBhdHRyaWJ1dGUuZ2V0WSggaW5kZXggKTtcblx0Ly8gXHR0aGlzLmIgPSBhdHRyaWJ1dGUuZ2V0WiggaW5kZXggKTtcblx0Ly8gXHRpZiAoIGF0dHJpYnV0ZS5ub3JtYWxpemVkID09PSB0cnVlICkge1xuXHQvLyBcdFx0Ly8gYXNzdW1pbmcgVWludDhBcnJheVxuXHQvLyBcdFx0dGhpcy5yIC89IDI1NTtcblx0Ly8gXHRcdHRoaXMuZyAvPSAyNTU7XG5cdC8vIFx0XHR0aGlzLmIgLz0gMjU1O1xuXHQvLyBcdH1cblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0dG9KU09OKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEhleCgpO1xuXHR9XG5cblx0KltTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHlpZWxkIHRoaXMucjtcblx0XHR5aWVsZCB0aGlzLmc7XG5cdFx0eWllbGQgdGhpcy5iO1xuXHR9XG5cbn1cblxuQ29sb3IuTkFNRVMgPSBfY29sb3JLZXl3b3JkcztcblxuLyoqXG4gKiBSZWY6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N5bGluZHJpY2FsX2Nvb3JkaW5hdGVfc3lzdGVtXG4gKi9cbmNsYXNzIEN5bGluZHJpY2FsIHtcblx0Y29uc3RydWN0b3IocmFkaXVzID0gMSwgdGhldGEgPSAwLCB5ID0gMCkge1xuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzOyAvLyBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gdG8gYSBwb2ludCBpbiB0aGUgeC16IHBsYW5lXG5cblx0XHR0aGlzLnRoZXRhID0gdGhldGE7IC8vIGNvdW50ZXJjbG9ja3dpc2UgYW5nbGUgaW4gdGhlIHgteiBwbGFuZSBtZWFzdXJlZCBpbiByYWRpYW5zIGZyb20gdGhlIHBvc2l0aXZlIHotYXhpc1xuXG5cdFx0dGhpcy55ID0geTsgLy8gaGVpZ2h0IGFib3ZlIHRoZSB4LXogcGxhbmVcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0KHJhZGl1cywgdGhldGEsIHkpIHtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0XHR0aGlzLnRoZXRhID0gdGhldGE7XG5cdFx0dGhpcy55ID0geTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkob3RoZXIpIHtcblx0XHR0aGlzLnJhZGl1cyA9IG90aGVyLnJhZGl1cztcblx0XHR0aGlzLnRoZXRhID0gb3RoZXIudGhldGE7XG5cdFx0dGhpcy55ID0gb3RoZXIueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21WZWN0b3IzKHYpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tQ2FydGVzaWFuQ29vcmRzKHYueCwgdi55LCB2LnopO1xuXHR9XG5cblx0c2V0RnJvbUNhcnRlc2lhbkNvb3Jkcyh4LCB5LCB6KSB7XG5cdFx0dGhpcy5yYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB6ICogeik7XG5cdFx0dGhpcy50aGV0YSA9IE1hdGguYXRhbjIoeCwgeik7XG5cdFx0dGhpcy55ID0geTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxufVxuXG5jbGFzcyBNYXRyaXg0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0TWF0cml4NC5wcm90b3R5cGUuaXNNYXRyaXg0ID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnRzID0gWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdO1xuXHR9XG5cblx0c2V0KG4xMSwgbjEyLCBuMTMsIG4xNCwgbjIxLCBuMjIsIG4yMywgbjI0LCBuMzEsIG4zMiwgbjMzLCBuMzQsIG40MSwgbjQyLCBuNDMsIG40NCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR0ZVswXSA9IG4xMTtcblx0XHR0ZVs0XSA9IG4xMjtcblx0XHR0ZVs4XSA9IG4xMztcblx0XHR0ZVsxMl0gPSBuMTQ7XG5cdFx0dGVbMV0gPSBuMjE7XG5cdFx0dGVbNV0gPSBuMjI7XG5cdFx0dGVbOV0gPSBuMjM7XG5cdFx0dGVbMTNdID0gbjI0O1xuXHRcdHRlWzJdID0gbjMxO1xuXHRcdHRlWzZdID0gbjMyO1xuXHRcdHRlWzEwXSA9IG4zMztcblx0XHR0ZVsxNF0gPSBuMzQ7XG5cdFx0dGVbM10gPSBuNDE7XG5cdFx0dGVbN10gPSBuNDI7XG5cdFx0dGVbMTFdID0gbjQzO1xuXHRcdHRlWzE1XSA9IG40NDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlkZW50aXR5KCkge1xuXHRcdHRoaXMuc2V0KDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBNYXRyaXg0KCkuZnJvbUFycmF5KHRoaXMuZWxlbWVudHMpO1xuXHR9XG5cblx0Y29weShtKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG1lID0gbS5lbGVtZW50cztcblx0XHR0ZVswXSA9IG1lWzBdO1xuXHRcdHRlWzFdID0gbWVbMV07XG5cdFx0dGVbMl0gPSBtZVsyXTtcblx0XHR0ZVszXSA9IG1lWzNdO1xuXHRcdHRlWzRdID0gbWVbNF07XG5cdFx0dGVbNV0gPSBtZVs1XTtcblx0XHR0ZVs2XSA9IG1lWzZdO1xuXHRcdHRlWzddID0gbWVbN107XG5cdFx0dGVbOF0gPSBtZVs4XTtcblx0XHR0ZVs5XSA9IG1lWzldO1xuXHRcdHRlWzEwXSA9IG1lWzEwXTtcblx0XHR0ZVsxMV0gPSBtZVsxMV07XG5cdFx0dGVbMTJdID0gbWVbMTJdO1xuXHRcdHRlWzEzXSA9IG1lWzEzXTtcblx0XHR0ZVsxNF0gPSBtZVsxNF07XG5cdFx0dGVbMTVdID0gbWVbMTVdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weVBvc2l0aW9uKG0pIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHMsXG5cdFx0XHRcdFx0bWUgPSBtLmVsZW1lbnRzO1xuXHRcdHRlWzEyXSA9IG1lWzEyXTtcblx0XHR0ZVsxM10gPSBtZVsxM107XG5cdFx0dGVbMTRdID0gbWVbMTRdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU1hdHJpeDMobSkge1xuXHRcdGNvbnN0IG1lID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnNldChtZVswXSwgbWVbM10sIG1lWzZdLCAwLCBtZVsxXSwgbWVbNF0sIG1lWzddLCAwLCBtZVsyXSwgbWVbNV0sIG1lWzhdLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4dHJhY3RCYXNpcyh4QXhpcywgeUF4aXMsIHpBeGlzKSB7XG5cdFx0eEF4aXMuc2V0RnJvbU1hdHJpeENvbHVtbih0aGlzLCAwKTtcblx0XHR5QXhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKHRoaXMsIDEpO1xuXHRcdHpBeGlzLnNldEZyb21NYXRyaXhDb2x1bW4odGhpcywgMik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlQmFzaXMoeEF4aXMsIHlBeGlzLCB6QXhpcykge1xuXHRcdHRoaXMuc2V0KHhBeGlzLngsIHlBeGlzLngsIHpBeGlzLngsIDAsIHhBeGlzLnksIHlBeGlzLnksIHpBeGlzLnksIDAsIHhBeGlzLnosIHlBeGlzLnosIHpBeGlzLnosIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXh0cmFjdFJvdGF0aW9uKG0pIHtcblx0XHQvLyB0aGlzIG1ldGhvZCBkb2VzIG5vdCBzdXBwb3J0IHJlZmxlY3Rpb24gbWF0cmljZXNcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgbWUgPSBtLmVsZW1lbnRzO1xuXG5cdFx0Y29uc3Qgc2NhbGVYID0gMSAvIF92MSQyLnNldEZyb21NYXRyaXhDb2x1bW4obSwgMCkubGVuZ3RoKCk7XG5cblx0XHRjb25zdCBzY2FsZVkgPSAxIC8gX3YxJDIuc2V0RnJvbU1hdHJpeENvbHVtbihtLCAxKS5sZW5ndGgoKTtcblxuXHRcdGNvbnN0IHNjYWxlWiA9IDEgLyBfdjEkMi5zZXRGcm9tTWF0cml4Q29sdW1uKG0sIDIpLmxlbmd0aCgpO1xuXG5cdFx0dGVbMF0gPSBtZVswXSAqIHNjYWxlWDtcblx0XHR0ZVsxXSA9IG1lWzFdICogc2NhbGVYO1xuXHRcdHRlWzJdID0gbWVbMl0gKiBzY2FsZVg7XG5cdFx0dGVbM10gPSAwO1xuXHRcdHRlWzRdID0gbWVbNF0gKiBzY2FsZVk7XG5cdFx0dGVbNV0gPSBtZVs1XSAqIHNjYWxlWTtcblx0XHR0ZVs2XSA9IG1lWzZdICogc2NhbGVZO1xuXHRcdHRlWzddID0gMDtcblx0XHR0ZVs4XSA9IG1lWzhdICogc2NhbGVaO1xuXHRcdHRlWzldID0gbWVbOV0gKiBzY2FsZVo7XG5cdFx0dGVbMTBdID0gbWVbMTBdICogc2NhbGVaO1xuXHRcdHRlWzExXSA9IDA7XG5cdFx0dGVbMTJdID0gMDtcblx0XHR0ZVsxM10gPSAwO1xuXHRcdHRlWzE0XSA9IDA7XG5cdFx0dGVbMTVdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvbkZyb21FdWxlcihldWxlcikge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCB4ID0gZXVsZXIueCxcblx0XHRcdFx0XHR5ID0gZXVsZXIueSxcblx0XHRcdFx0XHR6ID0gZXVsZXIuejtcblx0XHRjb25zdCBhID0gTWF0aC5jb3MoeCksXG5cdFx0XHRcdFx0YiA9IE1hdGguc2luKHgpO1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyh5KSxcblx0XHRcdFx0XHRkID0gTWF0aC5zaW4oeSk7XG5cdFx0Y29uc3QgZSA9IE1hdGguY29zKHopLFxuXHRcdFx0XHRcdGYgPSBNYXRoLnNpbih6KTtcblxuXHRcdGlmIChldWxlci5vcmRlciA9PT0gJ1hZWicpIHtcblx0XHRcdGNvbnN0IGFlID0gYSAqIGUsXG5cdFx0XHRcdFx0XHRhZiA9IGEgKiBmLFxuXHRcdFx0XHRcdFx0YmUgPSBiICogZSxcblx0XHRcdFx0XHRcdGJmID0gYiAqIGY7XG5cdFx0XHR0ZVswXSA9IGMgKiBlO1xuXHRcdFx0dGVbNF0gPSAtYyAqIGY7XG5cdFx0XHR0ZVs4XSA9IGQ7XG5cdFx0XHR0ZVsxXSA9IGFmICsgYmUgKiBkO1xuXHRcdFx0dGVbNV0gPSBhZSAtIGJmICogZDtcblx0XHRcdHRlWzldID0gLWIgKiBjO1xuXHRcdFx0dGVbMl0gPSBiZiAtIGFlICogZDtcblx0XHRcdHRlWzZdID0gYmUgKyBhZiAqIGQ7XG5cdFx0XHR0ZVsxMF0gPSBhICogYztcblx0XHR9IGVsc2UgaWYgKGV1bGVyLm9yZGVyID09PSAnWVhaJykge1xuXHRcdFx0Y29uc3QgY2UgPSBjICogZSxcblx0XHRcdFx0XHRcdGNmID0gYyAqIGYsXG5cdFx0XHRcdFx0XHRkZSA9IGQgKiBlLFxuXHRcdFx0XHRcdFx0ZGYgPSBkICogZjtcblx0XHRcdHRlWzBdID0gY2UgKyBkZiAqIGI7XG5cdFx0XHR0ZVs0XSA9IGRlICogYiAtIGNmO1xuXHRcdFx0dGVbOF0gPSBhICogZDtcblx0XHRcdHRlWzFdID0gYSAqIGY7XG5cdFx0XHR0ZVs1XSA9IGEgKiBlO1xuXHRcdFx0dGVbOV0gPSAtYjtcblx0XHRcdHRlWzJdID0gY2YgKiBiIC0gZGU7XG5cdFx0XHR0ZVs2XSA9IGRmICsgY2UgKiBiO1xuXHRcdFx0dGVbMTBdID0gYSAqIGM7XG5cdFx0fSBlbHNlIGlmIChldWxlci5vcmRlciA9PT0gJ1pYWScpIHtcblx0XHRcdGNvbnN0IGNlID0gYyAqIGUsXG5cdFx0XHRcdFx0XHRjZiA9IGMgKiBmLFxuXHRcdFx0XHRcdFx0ZGUgPSBkICogZSxcblx0XHRcdFx0XHRcdGRmID0gZCAqIGY7XG5cdFx0XHR0ZVswXSA9IGNlIC0gZGYgKiBiO1xuXHRcdFx0dGVbNF0gPSAtYSAqIGY7XG5cdFx0XHR0ZVs4XSA9IGRlICsgY2YgKiBiO1xuXHRcdFx0dGVbMV0gPSBjZiArIGRlICogYjtcblx0XHRcdHRlWzVdID0gYSAqIGU7XG5cdFx0XHR0ZVs5XSA9IGRmIC0gY2UgKiBiO1xuXHRcdFx0dGVbMl0gPSAtYSAqIGQ7XG5cdFx0XHR0ZVs2XSA9IGI7XG5cdFx0XHR0ZVsxMF0gPSBhICogYztcblx0XHR9IGVsc2UgaWYgKGV1bGVyLm9yZGVyID09PSAnWllYJykge1xuXHRcdFx0Y29uc3QgYWUgPSBhICogZSxcblx0XHRcdFx0XHRcdGFmID0gYSAqIGYsXG5cdFx0XHRcdFx0XHRiZSA9IGIgKiBlLFxuXHRcdFx0XHRcdFx0YmYgPSBiICogZjtcblx0XHRcdHRlWzBdID0gYyAqIGU7XG5cdFx0XHR0ZVs0XSA9IGJlICogZCAtIGFmO1xuXHRcdFx0dGVbOF0gPSBhZSAqIGQgKyBiZjtcblx0XHRcdHRlWzFdID0gYyAqIGY7XG5cdFx0XHR0ZVs1XSA9IGJmICogZCArIGFlO1xuXHRcdFx0dGVbOV0gPSBhZiAqIGQgLSBiZTtcblx0XHRcdHRlWzJdID0gLWQ7XG5cdFx0XHR0ZVs2XSA9IGIgKiBjO1xuXHRcdFx0dGVbMTBdID0gYSAqIGM7XG5cdFx0fSBlbHNlIGlmIChldWxlci5vcmRlciA9PT0gJ1laWCcpIHtcblx0XHRcdGNvbnN0IGFjID0gYSAqIGMsXG5cdFx0XHRcdFx0XHRhZCA9IGEgKiBkLFxuXHRcdFx0XHRcdFx0YmMgPSBiICogYyxcblx0XHRcdFx0XHRcdGJkID0gYiAqIGQ7XG5cdFx0XHR0ZVswXSA9IGMgKiBlO1xuXHRcdFx0dGVbNF0gPSBiZCAtIGFjICogZjtcblx0XHRcdHRlWzhdID0gYmMgKiBmICsgYWQ7XG5cdFx0XHR0ZVsxXSA9IGY7XG5cdFx0XHR0ZVs1XSA9IGEgKiBlO1xuXHRcdFx0dGVbOV0gPSAtYiAqIGU7XG5cdFx0XHR0ZVsyXSA9IC1kICogZTtcblx0XHRcdHRlWzZdID0gYWQgKiBmICsgYmM7XG5cdFx0XHR0ZVsxMF0gPSBhYyAtIGJkICogZjtcblx0XHR9IGVsc2UgaWYgKGV1bGVyLm9yZGVyID09PSAnWFpZJykge1xuXHRcdFx0Y29uc3QgYWMgPSBhICogYyxcblx0XHRcdFx0XHRcdGFkID0gYSAqIGQsXG5cdFx0XHRcdFx0XHRiYyA9IGIgKiBjLFxuXHRcdFx0XHRcdFx0YmQgPSBiICogZDtcblx0XHRcdHRlWzBdID0gYyAqIGU7XG5cdFx0XHR0ZVs0XSA9IC1mO1xuXHRcdFx0dGVbOF0gPSBkICogZTtcblx0XHRcdHRlWzFdID0gYWMgKiBmICsgYmQ7XG5cdFx0XHR0ZVs1XSA9IGEgKiBlO1xuXHRcdFx0dGVbOV0gPSBhZCAqIGYgLSBiYztcblx0XHRcdHRlWzJdID0gYmMgKiBmIC0gYWQ7XG5cdFx0XHR0ZVs2XSA9IGIgKiBlO1xuXHRcdFx0dGVbMTBdID0gYmQgKiBmICsgYWM7XG5cdFx0fSAvLyBib3R0b20gcm93XG5cblxuXHRcdHRlWzNdID0gMDtcblx0XHR0ZVs3XSA9IDA7XG5cdFx0dGVbMTFdID0gMDsgLy8gbGFzdCBjb2x1bW5cblxuXHRcdHRlWzEyXSA9IDA7XG5cdFx0dGVbMTNdID0gMDtcblx0XHR0ZVsxNF0gPSAwO1xuXHRcdHRlWzE1XSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbihxKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zZShfemVybywgcSwgX29uZSk7XG5cdH1cblxuXHRsb29rQXQoZXllLCB0YXJnZXQsIHVwKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0X3ouc3ViVmVjdG9ycyhleWUsIHRhcmdldCk7XG5cblx0XHRpZiAoX3oubGVuZ3RoU3EoKSA9PT0gMCkge1xuXHRcdFx0Ly8gZXllIGFuZCB0YXJnZXQgYXJlIGluIHRoZSBzYW1lIHBvc2l0aW9uXG5cdFx0XHRfei56ID0gMTtcblx0XHR9XG5cblx0XHRfei5ub3JtYWxpemUoKTtcblxuXHRcdF94LmNyb3NzVmVjdG9ycyh1cCwgX3opO1xuXG5cdFx0aWYgKF94Lmxlbmd0aFNxKCkgPT09IDApIHtcblx0XHRcdC8vIHVwIGFuZCB6IGFyZSBwYXJhbGxlbFxuXHRcdFx0aWYgKE1hdGguYWJzKHVwLnopID09PSAxKSB7XG5cdFx0XHRcdF96LnggKz0gMC4wMDAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3oueiArPSAwLjAwMDE7XG5cdFx0XHR9XG5cblx0XHRcdF96Lm5vcm1hbGl6ZSgpO1xuXG5cdFx0XHRfeC5jcm9zc1ZlY3RvcnModXAsIF96KTtcblx0XHR9XG5cblx0XHRfeC5ub3JtYWxpemUoKTtcblxuXHRcdF95LmNyb3NzVmVjdG9ycyhfeiwgX3gpO1xuXG5cdFx0dGVbMF0gPSBfeC54O1xuXHRcdHRlWzRdID0gX3kueDtcblx0XHR0ZVs4XSA9IF96Lng7XG5cdFx0dGVbMV0gPSBfeC55O1xuXHRcdHRlWzVdID0gX3kueTtcblx0XHR0ZVs5XSA9IF96Lnk7XG5cdFx0dGVbMl0gPSBfeC56O1xuXHRcdHRlWzZdID0gX3kuejtcblx0XHR0ZVsxMF0gPSBfei56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkobSkge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5TWF0cmljZXModGhpcywgbSk7XG5cdH1cblxuXHRwcmVtdWx0aXBseShtKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyhtLCB0aGlzKTtcblx0fVxuXG5cdG11bHRpcGx5TWF0cmljZXMoYSwgYikge1xuXHRcdGNvbnN0IGFlID0gYS5lbGVtZW50cztcblx0XHRjb25zdCBiZSA9IGIuZWxlbWVudHM7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IGExMSA9IGFlWzBdLFxuXHRcdFx0XHRcdGExMiA9IGFlWzRdLFxuXHRcdFx0XHRcdGExMyA9IGFlWzhdLFxuXHRcdFx0XHRcdGExNCA9IGFlWzEyXTtcblx0XHRjb25zdCBhMjEgPSBhZVsxXSxcblx0XHRcdFx0XHRhMjIgPSBhZVs1XSxcblx0XHRcdFx0XHRhMjMgPSBhZVs5XSxcblx0XHRcdFx0XHRhMjQgPSBhZVsxM107XG5cdFx0Y29uc3QgYTMxID0gYWVbMl0sXG5cdFx0XHRcdFx0YTMyID0gYWVbNl0sXG5cdFx0XHRcdFx0YTMzID0gYWVbMTBdLFxuXHRcdFx0XHRcdGEzNCA9IGFlWzE0XTtcblx0XHRjb25zdCBhNDEgPSBhZVszXSxcblx0XHRcdFx0XHRhNDIgPSBhZVs3XSxcblx0XHRcdFx0XHRhNDMgPSBhZVsxMV0sXG5cdFx0XHRcdFx0YTQ0ID0gYWVbMTVdO1xuXHRcdGNvbnN0IGIxMSA9IGJlWzBdLFxuXHRcdFx0XHRcdGIxMiA9IGJlWzRdLFxuXHRcdFx0XHRcdGIxMyA9IGJlWzhdLFxuXHRcdFx0XHRcdGIxNCA9IGJlWzEyXTtcblx0XHRjb25zdCBiMjEgPSBiZVsxXSxcblx0XHRcdFx0XHRiMjIgPSBiZVs1XSxcblx0XHRcdFx0XHRiMjMgPSBiZVs5XSxcblx0XHRcdFx0XHRiMjQgPSBiZVsxM107XG5cdFx0Y29uc3QgYjMxID0gYmVbMl0sXG5cdFx0XHRcdFx0YjMyID0gYmVbNl0sXG5cdFx0XHRcdFx0YjMzID0gYmVbMTBdLFxuXHRcdFx0XHRcdGIzNCA9IGJlWzE0XTtcblx0XHRjb25zdCBiNDEgPSBiZVszXSxcblx0XHRcdFx0XHRiNDIgPSBiZVs3XSxcblx0XHRcdFx0XHRiNDMgPSBiZVsxMV0sXG5cdFx0XHRcdFx0YjQ0ID0gYmVbMTVdO1xuXHRcdHRlWzBdID0gYTExICogYjExICsgYTEyICogYjIxICsgYTEzICogYjMxICsgYTE0ICogYjQxO1xuXHRcdHRlWzRdID0gYTExICogYjEyICsgYTEyICogYjIyICsgYTEzICogYjMyICsgYTE0ICogYjQyO1xuXHRcdHRlWzhdID0gYTExICogYjEzICsgYTEyICogYjIzICsgYTEzICogYjMzICsgYTE0ICogYjQzO1xuXHRcdHRlWzEyXSA9IGExMSAqIGIxNCArIGExMiAqIGIyNCArIGExMyAqIGIzNCArIGExNCAqIGI0NDtcblx0XHR0ZVsxXSA9IGEyMSAqIGIxMSArIGEyMiAqIGIyMSArIGEyMyAqIGIzMSArIGEyNCAqIGI0MTtcblx0XHR0ZVs1XSA9IGEyMSAqIGIxMiArIGEyMiAqIGIyMiArIGEyMyAqIGIzMiArIGEyNCAqIGI0Mjtcblx0XHR0ZVs5XSA9IGEyMSAqIGIxMyArIGEyMiAqIGIyMyArIGEyMyAqIGIzMyArIGEyNCAqIGI0Mztcblx0XHR0ZVsxM10gPSBhMjEgKiBiMTQgKyBhMjIgKiBiMjQgKyBhMjMgKiBiMzQgKyBhMjQgKiBiNDQ7XG5cdFx0dGVbMl0gPSBhMzEgKiBiMTEgKyBhMzIgKiBiMjEgKyBhMzMgKiBiMzEgKyBhMzQgKiBiNDE7XG5cdFx0dGVbNl0gPSBhMzEgKiBiMTIgKyBhMzIgKiBiMjIgKyBhMzMgKiBiMzIgKyBhMzQgKiBiNDI7XG5cdFx0dGVbMTBdID0gYTMxICogYjEzICsgYTMyICogYjIzICsgYTMzICogYjMzICsgYTM0ICogYjQzO1xuXHRcdHRlWzE0XSA9IGEzMSAqIGIxNCArIGEzMiAqIGIyNCArIGEzMyAqIGIzNCArIGEzNCAqIGI0NDtcblx0XHR0ZVszXSA9IGE0MSAqIGIxMSArIGE0MiAqIGIyMSArIGE0MyAqIGIzMSArIGE0NCAqIGI0MTtcblx0XHR0ZVs3XSA9IGE0MSAqIGIxMiArIGE0MiAqIGIyMiArIGE0MyAqIGIzMiArIGE0NCAqIGI0Mjtcblx0XHR0ZVsxMV0gPSBhNDEgKiBiMTMgKyBhNDIgKiBiMjMgKyBhNDMgKiBiMzMgKyBhNDQgKiBiNDM7XG5cdFx0dGVbMTVdID0gYTQxICogYjE0ICsgYTQyICogYjI0ICsgYTQzICogYjM0ICsgYTQ0ICogYjQ0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlTY2FsYXIocykge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR0ZVswXSAqPSBzO1xuXHRcdHRlWzRdICo9IHM7XG5cdFx0dGVbOF0gKj0gcztcblx0XHR0ZVsxMl0gKj0gcztcblx0XHR0ZVsxXSAqPSBzO1xuXHRcdHRlWzVdICo9IHM7XG5cdFx0dGVbOV0gKj0gcztcblx0XHR0ZVsxM10gKj0gcztcblx0XHR0ZVsyXSAqPSBzO1xuXHRcdHRlWzZdICo9IHM7XG5cdFx0dGVbMTBdICo9IHM7XG5cdFx0dGVbMTRdICo9IHM7XG5cdFx0dGVbM10gKj0gcztcblx0XHR0ZVs3XSAqPSBzO1xuXHRcdHRlWzExXSAqPSBzO1xuXHRcdHRlWzE1XSAqPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGV0ZXJtaW5hbnQoKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG4xMSA9IHRlWzBdLFxuXHRcdFx0XHRcdG4xMiA9IHRlWzRdLFxuXHRcdFx0XHRcdG4xMyA9IHRlWzhdLFxuXHRcdFx0XHRcdG4xNCA9IHRlWzEyXTtcblx0XHRjb25zdCBuMjEgPSB0ZVsxXSxcblx0XHRcdFx0XHRuMjIgPSB0ZVs1XSxcblx0XHRcdFx0XHRuMjMgPSB0ZVs5XSxcblx0XHRcdFx0XHRuMjQgPSB0ZVsxM107XG5cdFx0Y29uc3QgbjMxID0gdGVbMl0sXG5cdFx0XHRcdFx0bjMyID0gdGVbNl0sXG5cdFx0XHRcdFx0bjMzID0gdGVbMTBdLFxuXHRcdFx0XHRcdG4zNCA9IHRlWzE0XTtcblx0XHRjb25zdCBuNDEgPSB0ZVszXSxcblx0XHRcdFx0XHRuNDIgPSB0ZVs3XSxcblx0XHRcdFx0XHRuNDMgPSB0ZVsxMV0sXG5cdFx0XHRcdFx0bjQ0ID0gdGVbMTVdOyAvL1RPRE86IG1ha2UgdGhpcyBtb3JlIGVmZmljaWVudFxuXHRcdC8vKCBiYXNlZCBvbiBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL21hdHJpeC9mdW5jdGlvbnMvaW52ZXJzZS9mb3VyRC9pbmRleC5odG0gKVxuXG5cdFx0cmV0dXJuIG40MSAqICgrbjE0ICogbjIzICogbjMyIC0gbjEzICogbjI0ICogbjMyIC0gbjE0ICogbjIyICogbjMzICsgbjEyICogbjI0ICogbjMzICsgbjEzICogbjIyICogbjM0IC0gbjEyICogbjIzICogbjM0KSArIG40MiAqICgrbjExICogbjIzICogbjM0IC0gbjExICogbjI0ICogbjMzICsgbjE0ICogbjIxICogbjMzIC0gbjEzICogbjIxICogbjM0ICsgbjEzICogbjI0ICogbjMxIC0gbjE0ICogbjIzICogbjMxKSArIG40MyAqICgrbjExICogbjI0ICogbjMyIC0gbjExICogbjIyICogbjM0IC0gbjE0ICogbjIxICogbjMyICsgbjEyICogbjIxICogbjM0ICsgbjE0ICogbjIyICogbjMxIC0gbjEyICogbjI0ICogbjMxKSArIG40NCAqICgtbjEzICogbjIyICogbjMxIC0gbjExICogbjIzICogbjMyICsgbjExICogbjIyICogbjMzICsgbjEzICogbjIxICogbjMyIC0gbjEyICogbjIxICogbjMzICsgbjEyICogbjIzICogbjMxKTtcblx0fVxuXG5cdHRyYW5zcG9zZSgpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0bGV0IHRtcDtcblx0XHR0bXAgPSB0ZVsxXTtcblx0XHR0ZVsxXSA9IHRlWzRdO1xuXHRcdHRlWzRdID0gdG1wO1xuXHRcdHRtcCA9IHRlWzJdO1xuXHRcdHRlWzJdID0gdGVbOF07XG5cdFx0dGVbOF0gPSB0bXA7XG5cdFx0dG1wID0gdGVbNl07XG5cdFx0dGVbNl0gPSB0ZVs5XTtcblx0XHR0ZVs5XSA9IHRtcDtcblx0XHR0bXAgPSB0ZVszXTtcblx0XHR0ZVszXSA9IHRlWzEyXTtcblx0XHR0ZVsxMl0gPSB0bXA7XG5cdFx0dG1wID0gdGVbN107XG5cdFx0dGVbN10gPSB0ZVsxM107XG5cdFx0dGVbMTNdID0gdG1wO1xuXHRcdHRtcCA9IHRlWzExXTtcblx0XHR0ZVsxMV0gPSB0ZVsxNF07XG5cdFx0dGVbMTRdID0gdG1wO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0UG9zaXRpb24oeCwgeSwgeikge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblxuXHRcdGlmICh4LmlzVmVjdG9yMykge1xuXHRcdFx0dGVbMTJdID0geC54O1xuXHRcdFx0dGVbMTNdID0geC55O1xuXHRcdFx0dGVbMTRdID0geC56O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZVsxMl0gPSB4O1xuXHRcdFx0dGVbMTNdID0geTtcblx0XHRcdHRlWzE0XSA9IHo7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpbnZlcnQoKSB7XG5cdFx0Ly8gYmFzZWQgb24gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9tYXRyaXgvZnVuY3Rpb25zL2ludmVyc2UvZm91ckQvaW5kZXguaHRtXG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzLFxuXHRcdFx0XHRcdG4xMSA9IHRlWzBdLFxuXHRcdFx0XHRcdG4yMSA9IHRlWzFdLFxuXHRcdFx0XHRcdG4zMSA9IHRlWzJdLFxuXHRcdFx0XHRcdG40MSA9IHRlWzNdLFxuXHRcdFx0XHRcdG4xMiA9IHRlWzRdLFxuXHRcdFx0XHRcdG4yMiA9IHRlWzVdLFxuXHRcdFx0XHRcdG4zMiA9IHRlWzZdLFxuXHRcdFx0XHRcdG40MiA9IHRlWzddLFxuXHRcdFx0XHRcdG4xMyA9IHRlWzhdLFxuXHRcdFx0XHRcdG4yMyA9IHRlWzldLFxuXHRcdFx0XHRcdG4zMyA9IHRlWzEwXSxcblx0XHRcdFx0XHRuNDMgPSB0ZVsxMV0sXG5cdFx0XHRcdFx0bjE0ID0gdGVbMTJdLFxuXHRcdFx0XHRcdG4yNCA9IHRlWzEzXSxcblx0XHRcdFx0XHRuMzQgPSB0ZVsxNF0sXG5cdFx0XHRcdFx0bjQ0ID0gdGVbMTVdLFxuXHRcdFx0XHRcdHQxMSA9IG4yMyAqIG4zNCAqIG40MiAtIG4yNCAqIG4zMyAqIG40MiArIG4yNCAqIG4zMiAqIG40MyAtIG4yMiAqIG4zNCAqIG40MyAtIG4yMyAqIG4zMiAqIG40NCArIG4yMiAqIG4zMyAqIG40NCxcblx0XHRcdFx0XHR0MTIgPSBuMTQgKiBuMzMgKiBuNDIgLSBuMTMgKiBuMzQgKiBuNDIgLSBuMTQgKiBuMzIgKiBuNDMgKyBuMTIgKiBuMzQgKiBuNDMgKyBuMTMgKiBuMzIgKiBuNDQgLSBuMTIgKiBuMzMgKiBuNDQsXG5cdFx0XHRcdFx0dDEzID0gbjEzICogbjI0ICogbjQyIC0gbjE0ICogbjIzICogbjQyICsgbjE0ICogbjIyICogbjQzIC0gbjEyICogbjI0ICogbjQzIC0gbjEzICogbjIyICogbjQ0ICsgbjEyICogbjIzICogbjQ0LFxuXHRcdFx0XHRcdHQxNCA9IG4xNCAqIG4yMyAqIG4zMiAtIG4xMyAqIG4yNCAqIG4zMiAtIG4xNCAqIG4yMiAqIG4zMyArIG4xMiAqIG4yNCAqIG4zMyArIG4xMyAqIG4yMiAqIG4zNCAtIG4xMiAqIG4yMyAqIG4zNDtcblx0XHRjb25zdCBkZXQgPSBuMTEgKiB0MTEgKyBuMjEgKiB0MTIgKyBuMzEgKiB0MTMgKyBuNDEgKiB0MTQ7XG5cdFx0aWYgKGRldCA9PT0gMCkgcmV0dXJuIHRoaXMuc2V0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXHRcdGNvbnN0IGRldEludiA9IDEgLyBkZXQ7XG5cdFx0dGVbMF0gPSB0MTEgKiBkZXRJbnY7XG5cdFx0dGVbMV0gPSAobjI0ICogbjMzICogbjQxIC0gbjIzICogbjM0ICogbjQxIC0gbjI0ICogbjMxICogbjQzICsgbjIxICogbjM0ICogbjQzICsgbjIzICogbjMxICogbjQ0IC0gbjIxICogbjMzICogbjQ0KSAqIGRldEludjtcblx0XHR0ZVsyXSA9IChuMjIgKiBuMzQgKiBuNDEgLSBuMjQgKiBuMzIgKiBuNDEgKyBuMjQgKiBuMzEgKiBuNDIgLSBuMjEgKiBuMzQgKiBuNDIgLSBuMjIgKiBuMzEgKiBuNDQgKyBuMjEgKiBuMzIgKiBuNDQpICogZGV0SW52O1xuXHRcdHRlWzNdID0gKG4yMyAqIG4zMiAqIG40MSAtIG4yMiAqIG4zMyAqIG40MSAtIG4yMyAqIG4zMSAqIG40MiArIG4yMSAqIG4zMyAqIG40MiArIG4yMiAqIG4zMSAqIG40MyAtIG4yMSAqIG4zMiAqIG40MykgKiBkZXRJbnY7XG5cdFx0dGVbNF0gPSB0MTIgKiBkZXRJbnY7XG5cdFx0dGVbNV0gPSAobjEzICogbjM0ICogbjQxIC0gbjE0ICogbjMzICogbjQxICsgbjE0ICogbjMxICogbjQzIC0gbjExICogbjM0ICogbjQzIC0gbjEzICogbjMxICogbjQ0ICsgbjExICogbjMzICogbjQ0KSAqIGRldEludjtcblx0XHR0ZVs2XSA9IChuMTQgKiBuMzIgKiBuNDEgLSBuMTIgKiBuMzQgKiBuNDEgLSBuMTQgKiBuMzEgKiBuNDIgKyBuMTEgKiBuMzQgKiBuNDIgKyBuMTIgKiBuMzEgKiBuNDQgLSBuMTEgKiBuMzIgKiBuNDQpICogZGV0SW52O1xuXHRcdHRlWzddID0gKG4xMiAqIG4zMyAqIG40MSAtIG4xMyAqIG4zMiAqIG40MSArIG4xMyAqIG4zMSAqIG40MiAtIG4xMSAqIG4zMyAqIG40MiAtIG4xMiAqIG4zMSAqIG40MyArIG4xMSAqIG4zMiAqIG40MykgKiBkZXRJbnY7XG5cdFx0dGVbOF0gPSB0MTMgKiBkZXRJbnY7XG5cdFx0dGVbOV0gPSAobjE0ICogbjIzICogbjQxIC0gbjEzICogbjI0ICogbjQxIC0gbjE0ICogbjIxICogbjQzICsgbjExICogbjI0ICogbjQzICsgbjEzICogbjIxICogbjQ0IC0gbjExICogbjIzICogbjQ0KSAqIGRldEludjtcblx0XHR0ZVsxMF0gPSAobjEyICogbjI0ICogbjQxIC0gbjE0ICogbjIyICogbjQxICsgbjE0ICogbjIxICogbjQyIC0gbjExICogbjI0ICogbjQyIC0gbjEyICogbjIxICogbjQ0ICsgbjExICogbjIyICogbjQ0KSAqIGRldEludjtcblx0XHR0ZVsxMV0gPSAobjEzICogbjIyICogbjQxIC0gbjEyICogbjIzICogbjQxIC0gbjEzICogbjIxICogbjQyICsgbjExICogbjIzICogbjQyICsgbjEyICogbjIxICogbjQzIC0gbjExICogbjIyICogbjQzKSAqIGRldEludjtcblx0XHR0ZVsxMl0gPSB0MTQgKiBkZXRJbnY7XG5cdFx0dGVbMTNdID0gKG4xMyAqIG4yNCAqIG4zMSAtIG4xNCAqIG4yMyAqIG4zMSArIG4xNCAqIG4yMSAqIG4zMyAtIG4xMSAqIG4yNCAqIG4zMyAtIG4xMyAqIG4yMSAqIG4zNCArIG4xMSAqIG4yMyAqIG4zNCkgKiBkZXRJbnY7XG5cdFx0dGVbMTRdID0gKG4xNCAqIG4yMiAqIG4zMSAtIG4xMiAqIG4yNCAqIG4zMSAtIG4xNCAqIG4yMSAqIG4zMiArIG4xMSAqIG4yNCAqIG4zMiArIG4xMiAqIG4yMSAqIG4zNCAtIG4xMSAqIG4yMiAqIG4zNCkgKiBkZXRJbnY7XG5cdFx0dGVbMTVdID0gKG4xMiAqIG4yMyAqIG4zMSAtIG4xMyAqIG4yMiAqIG4zMSArIG4xMyAqIG4yMSAqIG4zMiAtIG4xMSAqIG4yMyAqIG4zMiAtIG4xMiAqIG4yMSAqIG4zMyArIG4xMSAqIG4yMiAqIG4zMykgKiBkZXRJbnY7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzY2FsZSh2KSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHggPSB2LngsXG5cdFx0XHRcdFx0eSA9IHYueSxcblx0XHRcdFx0XHR6ID0gdi56O1xuXHRcdHRlWzBdICo9IHg7XG5cdFx0dGVbNF0gKj0geTtcblx0XHR0ZVs4XSAqPSB6O1xuXHRcdHRlWzFdICo9IHg7XG5cdFx0dGVbNV0gKj0geTtcblx0XHR0ZVs5XSAqPSB6O1xuXHRcdHRlWzJdICo9IHg7XG5cdFx0dGVbNl0gKj0geTtcblx0XHR0ZVsxMF0gKj0gejtcblx0XHR0ZVszXSAqPSB4O1xuXHRcdHRlWzddICo9IHk7XG5cdFx0dGVbMTFdICo9IHo7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRNYXhTY2FsZU9uQXhpcygpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3Qgc2NhbGVYU3EgPSB0ZVswXSAqIHRlWzBdICsgdGVbMV0gKiB0ZVsxXSArIHRlWzJdICogdGVbMl07XG5cdFx0Y29uc3Qgc2NhbGVZU3EgPSB0ZVs0XSAqIHRlWzRdICsgdGVbNV0gKiB0ZVs1XSArIHRlWzZdICogdGVbNl07XG5cdFx0Y29uc3Qgc2NhbGVaU3EgPSB0ZVs4XSAqIHRlWzhdICsgdGVbOV0gKiB0ZVs5XSArIHRlWzEwXSAqIHRlWzEwXTtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KE1hdGgubWF4KHNjYWxlWFNxLCBzY2FsZVlTcSwgc2NhbGVaU3EpKTtcblx0fVxuXG5cdG1ha2VUcmFuc2xhdGlvbih4LCB5LCB6KSB7XG5cdFx0dGhpcy5zZXQoMSwgMCwgMCwgeCwgMCwgMSwgMCwgeSwgMCwgMCwgMSwgeiwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb25YKHRoZXRhKSB7XG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKHRoZXRhKSxcblx0XHRcdFx0XHRzID0gTWF0aC5zaW4odGhldGEpO1xuXHRcdHRoaXMuc2V0KDEsIDAsIDAsIDAsIDAsIGMsIC1zLCAwLCAwLCBzLCBjLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvblkodGhldGEpIHtcblx0XHRjb25zdCBjID0gTWF0aC5jb3ModGhldGEpLFxuXHRcdFx0XHRcdHMgPSBNYXRoLnNpbih0aGV0YSk7XG5cdFx0dGhpcy5zZXQoYywgMCwgcywgMCwgMCwgMSwgMCwgMCwgLXMsIDAsIGMsIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uWih0aGV0YSkge1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyh0aGV0YSksXG5cdFx0XHRcdFx0cyA9IE1hdGguc2luKHRoZXRhKTtcblx0XHR0aGlzLnNldChjLCAtcywgMCwgMCwgcywgYywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb25BeGlzKGF4aXMsIGFuZ2xlKSB7XG5cdFx0Ly8gQmFzZWQgb24gaHR0cDovL3d3dy5nYW1lZGV2Lm5ldC9yZWZlcmVuY2UvYXJ0aWNsZXMvYXJ0aWNsZTExOTkuYXNwXG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKTtcblx0XHRjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpO1xuXHRcdGNvbnN0IHQgPSAxIC0gYztcblx0XHRjb25zdCB4ID0gYXhpcy54LFxuXHRcdFx0XHRcdHkgPSBheGlzLnksXG5cdFx0XHRcdFx0eiA9IGF4aXMuejtcblx0XHRjb25zdCB0eCA9IHQgKiB4LFxuXHRcdFx0XHRcdHR5ID0gdCAqIHk7XG5cdFx0dGhpcy5zZXQodHggKiB4ICsgYywgdHggKiB5IC0gcyAqIHosIHR4ICogeiArIHMgKiB5LCAwLCB0eCAqIHkgKyBzICogeiwgdHkgKiB5ICsgYywgdHkgKiB6IC0gcyAqIHgsIDAsIHR4ICogeiAtIHMgKiB5LCB0eSAqIHogKyBzICogeCwgdCAqIHogKiB6ICsgYywgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlU2NhbGUoeCwgeSwgeikge1xuXHRcdHRoaXMuc2V0KHgsIDAsIDAsIDAsIDAsIHksIDAsIDAsIDAsIDAsIHosIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVNoZWFyKHh5LCB4eiwgeXgsIHl6LCB6eCwgenkpIHtcblx0XHR0aGlzLnNldCgxLCB5eCwgengsIDAsIHh5LCAxLCB6eSwgMCwgeHosIHl6LCAxLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvbXBvc2UocG9zaXRpb24sIHF1YXRlcm5pb24sIHNjYWxlKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHggPSBxdWF0ZXJuaW9uLl94LFxuXHRcdFx0XHRcdHkgPSBxdWF0ZXJuaW9uLl95LFxuXHRcdFx0XHRcdHogPSBxdWF0ZXJuaW9uLl96LFxuXHRcdFx0XHRcdHcgPSBxdWF0ZXJuaW9uLl93O1xuXHRcdGNvbnN0IHgyID0geCArIHgsXG5cdFx0XHRcdFx0eTIgPSB5ICsgeSxcblx0XHRcdFx0XHR6MiA9IHogKyB6O1xuXHRcdGNvbnN0IHh4ID0geCAqIHgyLFxuXHRcdFx0XHRcdHh5ID0geCAqIHkyLFxuXHRcdFx0XHRcdHh6ID0geCAqIHoyO1xuXHRcdGNvbnN0IHl5ID0geSAqIHkyLFxuXHRcdFx0XHRcdHl6ID0geSAqIHoyLFxuXHRcdFx0XHRcdHp6ID0geiAqIHoyO1xuXHRcdGNvbnN0IHd4ID0gdyAqIHgyLFxuXHRcdFx0XHRcdHd5ID0gdyAqIHkyLFxuXHRcdFx0XHRcdHd6ID0gdyAqIHoyO1xuXHRcdGNvbnN0IHN4ID0gc2NhbGUueCxcblx0XHRcdFx0XHRzeSA9IHNjYWxlLnksXG5cdFx0XHRcdFx0c3ogPSBzY2FsZS56O1xuXHRcdHRlWzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG5cdFx0dGVbMV0gPSAoeHkgKyB3eikgKiBzeDtcblx0XHR0ZVsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuXHRcdHRlWzNdID0gMDtcblx0XHR0ZVs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuXHRcdHRlWzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG5cdFx0dGVbNl0gPSAoeXogKyB3eCkgKiBzeTtcblx0XHR0ZVs3XSA9IDA7XG5cdFx0dGVbOF0gPSAoeHogKyB3eSkgKiBzejtcblx0XHR0ZVs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuXHRcdHRlWzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuXHRcdHRlWzExXSA9IDA7XG5cdFx0dGVbMTJdID0gcG9zaXRpb24ueDtcblx0XHR0ZVsxM10gPSBwb3NpdGlvbi55O1xuXHRcdHRlWzE0XSA9IHBvc2l0aW9uLno7XG5cdFx0dGVbMTVdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRlY29tcG9zZShwb3NpdGlvbiwgcXVhdGVybmlvbiwgc2NhbGUpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHRsZXQgc3ggPSBfdjEkMi5zZXQodGVbMF0sIHRlWzFdLCB0ZVsyXSkubGVuZ3RoKCk7XG5cblx0XHRjb25zdCBzeSA9IF92MSQyLnNldCh0ZVs0XSwgdGVbNV0sIHRlWzZdKS5sZW5ndGgoKTtcblxuXHRcdGNvbnN0IHN6ID0gX3YxJDIuc2V0KHRlWzhdLCB0ZVs5XSwgdGVbMTBdKS5sZW5ndGgoKTsgLy8gaWYgZGV0ZXJtaW5lIGlzIG5lZ2F0aXZlLCB3ZSBuZWVkIHRvIGludmVydCBvbmUgc2NhbGVcblxuXG5cdFx0Y29uc3QgZGV0ID0gdGhpcy5kZXRlcm1pbmFudCgpO1xuXHRcdGlmIChkZXQgPCAwKSBzeCA9IC1zeDtcblx0XHRwb3NpdGlvbi54ID0gdGVbMTJdO1xuXHRcdHBvc2l0aW9uLnkgPSB0ZVsxM107XG5cdFx0cG9zaXRpb24ueiA9IHRlWzE0XTsgLy8gc2NhbGUgdGhlIHJvdGF0aW9uIHBhcnRcblxuXHRcdF9tMS5jb3B5KHRoaXMpO1xuXG5cdFx0Y29uc3QgaW52U1ggPSAxIC8gc3g7XG5cdFx0Y29uc3QgaW52U1kgPSAxIC8gc3k7XG5cdFx0Y29uc3QgaW52U1ogPSAxIC8gc3o7XG5cdFx0X20xLmVsZW1lbnRzWzBdICo9IGludlNYO1xuXHRcdF9tMS5lbGVtZW50c1sxXSAqPSBpbnZTWDtcblx0XHRfbTEuZWxlbWVudHNbMl0gKj0gaW52U1g7XG5cdFx0X20xLmVsZW1lbnRzWzRdICo9IGludlNZO1xuXHRcdF9tMS5lbGVtZW50c1s1XSAqPSBpbnZTWTtcblx0XHRfbTEuZWxlbWVudHNbNl0gKj0gaW52U1k7XG5cdFx0X20xLmVsZW1lbnRzWzhdICo9IGludlNaO1xuXHRcdF9tMS5lbGVtZW50c1s5XSAqPSBpbnZTWjtcblx0XHRfbTEuZWxlbWVudHNbMTBdICo9IGludlNaO1xuXHRcdHF1YXRlcm5pb24uc2V0RnJvbVJvdGF0aW9uTWF0cml4KF9tMSk7XG5cdFx0c2NhbGUueCA9IHN4O1xuXHRcdHNjYWxlLnkgPSBzeTtcblx0XHRzY2FsZS56ID0gc3o7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUGVyc3BlY3RpdmUobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBuZWFyLCBmYXIpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgeCA9IDIgKiBuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XG5cdFx0Y29uc3QgeSA9IDIgKiBuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XG5cdFx0Y29uc3QgYSA9IChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCk7XG5cdFx0Y29uc3QgYiA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XG5cdFx0Y29uc3QgYyA9IC0oZmFyICsgbmVhcikgLyAoZmFyIC0gbmVhcik7XG5cdFx0Y29uc3QgZCA9IC0yICogZmFyICogbmVhciAvIChmYXIgLSBuZWFyKTtcblx0XHR0ZVswXSA9IHg7XG5cdFx0dGVbNF0gPSAwO1xuXHRcdHRlWzhdID0gYTtcblx0XHR0ZVsxMl0gPSAwO1xuXHRcdHRlWzFdID0gMDtcblx0XHR0ZVs1XSA9IHk7XG5cdFx0dGVbOV0gPSBiO1xuXHRcdHRlWzEzXSA9IDA7XG5cdFx0dGVbMl0gPSAwO1xuXHRcdHRlWzZdID0gMDtcblx0XHR0ZVsxMF0gPSBjO1xuXHRcdHRlWzE0XSA9IGQ7XG5cdFx0dGVbM10gPSAwO1xuXHRcdHRlWzddID0gMDtcblx0XHR0ZVsxMV0gPSAtMTtcblx0XHR0ZVsxNV0gPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZU9ydGhvZ3JhcGhpYyhsZWZ0LCByaWdodCwgdG9wLCBib3R0b20sIG5lYXIsIGZhcikge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCB3ID0gMS4wIC8gKHJpZ2h0IC0gbGVmdCk7XG5cdFx0Y29uc3QgaCA9IDEuMCAvICh0b3AgLSBib3R0b20pO1xuXHRcdGNvbnN0IHAgPSAxLjAgLyAoZmFyIC0gbmVhcik7XG5cdFx0Y29uc3QgeCA9IChyaWdodCArIGxlZnQpICogdztcblx0XHRjb25zdCB5ID0gKHRvcCArIGJvdHRvbSkgKiBoO1xuXHRcdGNvbnN0IHogPSAoZmFyICsgbmVhcikgKiBwO1xuXHRcdHRlWzBdID0gMiAqIHc7XG5cdFx0dGVbNF0gPSAwO1xuXHRcdHRlWzhdID0gMDtcblx0XHR0ZVsxMl0gPSAteDtcblx0XHR0ZVsxXSA9IDA7XG5cdFx0dGVbNV0gPSAyICogaDtcblx0XHR0ZVs5XSA9IDA7XG5cdFx0dGVbMTNdID0gLXk7XG5cdFx0dGVbMl0gPSAwO1xuXHRcdHRlWzZdID0gMDtcblx0XHR0ZVsxMF0gPSAtMiAqIHA7XG5cdFx0dGVbMTRdID0gLXo7XG5cdFx0dGVbM10gPSAwO1xuXHRcdHRlWzddID0gMDtcblx0XHR0ZVsxMV0gPSAwO1xuXHRcdHRlWzE1XSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMobWF0cml4KSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG1lID0gbWF0cml4LmVsZW1lbnRzO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0XHRpZiAodGVbaV0gIT09IG1lW2ldKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBhcnJheVtpICsgb2Zmc2V0XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRhcnJheVtvZmZzZXRdID0gdGVbMF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0ZVsxXTtcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRlWzJdO1xuXHRcdGFycmF5W29mZnNldCArIDNdID0gdGVbM107XG5cdFx0YXJyYXlbb2Zmc2V0ICsgNF0gPSB0ZVs0XTtcblx0XHRhcnJheVtvZmZzZXQgKyA1XSA9IHRlWzVdO1xuXHRcdGFycmF5W29mZnNldCArIDZdID0gdGVbNl07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgN10gPSB0ZVs3XTtcblx0XHRhcnJheVtvZmZzZXQgKyA4XSA9IHRlWzhdO1xuXHRcdGFycmF5W29mZnNldCArIDldID0gdGVbOV07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMTBdID0gdGVbMTBdO1xuXHRcdGFycmF5W29mZnNldCArIDExXSA9IHRlWzExXTtcblx0XHRhcnJheVtvZmZzZXQgKyAxMl0gPSB0ZVsxMl07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMTNdID0gdGVbMTNdO1xuXHRcdGFycmF5W29mZnNldCArIDE0XSA9IHRlWzE0XTtcblx0XHRhcnJheVtvZmZzZXQgKyAxNV0gPSB0ZVsxNV07XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cbn1cblxuY29uc3QgX3YxJDIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX20xID0gLypAX19QVVJFX18qL25ldyBNYXRyaXg0KCk7XG5cbmNvbnN0IF96ZXJvID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKDAsIDAsIDApO1xuXG5jb25zdCBfb25lID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKDEsIDEsIDEpO1xuXG5jb25zdCBfeCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfeSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfeiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfbWF0cml4ID0gLypAX19QVVJFX18qL25ldyBNYXRyaXg0KCk7XG5cbmNvbnN0IF9xdWF0ZXJuaW9uID0gLypAX19QVVJFX18qL25ldyBRdWF0ZXJuaW9uKCk7XG5cbmNsYXNzIEV1bGVyIHtcblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgb3JkZXIgPSBFdWxlci5EZWZhdWx0T3JkZXIpIHtcblx0XHR0aGlzLmlzRXVsZXIgPSB0cnVlO1xuXHRcdHRoaXMuX3ggPSB4O1xuXHRcdHRoaXMuX3kgPSB5O1xuXHRcdHRoaXMuX3ogPSB6O1xuXHRcdHRoaXMuX29yZGVyID0gb3JkZXI7XG5cdH1cblxuXHRnZXQgeCgpIHtcblx0XHRyZXR1cm4gdGhpcy5feDtcblx0fVxuXG5cdHNldCB4KHZhbHVlKSB7XG5cdFx0dGhpcy5feCA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0Z2V0IHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3k7XG5cdH1cblxuXHRzZXQgeSh2YWx1ZSkge1xuXHRcdHRoaXMuX3kgPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdGdldCB6KCkge1xuXHRcdHJldHVybiB0aGlzLl96O1xuXHR9XG5cblx0c2V0IHoodmFsdWUpIHtcblx0XHR0aGlzLl96ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRnZXQgb3JkZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX29yZGVyO1xuXHR9XG5cblx0c2V0IG9yZGVyKHZhbHVlKSB7XG5cdFx0dGhpcy5fb3JkZXIgPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdHNldCh4LCB5LCB6LCBvcmRlciA9IHRoaXMuX29yZGVyKSB7XG5cdFx0dGhpcy5feCA9IHg7XG5cdFx0dGhpcy5feSA9IHk7XG5cdFx0dGhpcy5feiA9IHo7XG5cdFx0dGhpcy5fb3JkZXIgPSBvcmRlcjtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3osIHRoaXMuX29yZGVyKTtcblx0fVxuXG5cdGNvcHkoZXVsZXIpIHtcblx0XHR0aGlzLl94ID0gZXVsZXIuX3g7XG5cdFx0dGhpcy5feSA9IGV1bGVyLl95O1xuXHRcdHRoaXMuX3ogPSBldWxlci5fejtcblx0XHR0aGlzLl9vcmRlciA9IGV1bGVyLl9vcmRlcjtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVJvdGF0aW9uTWF0cml4KG0sIG9yZGVyID0gdGhpcy5fb3JkZXIsIHVwZGF0ZSA9IHRydWUpIHtcblx0XHQvLyBhc3N1bWVzIHRoZSB1cHBlciAzeDMgb2YgbSBpcyBhIHB1cmUgcm90YXRpb24gbWF0cml4IChpLmUsIHVuc2NhbGVkKVxuXHRcdGNvbnN0IHRlID0gbS5lbGVtZW50cztcblx0XHRjb25zdCBtMTEgPSB0ZVswXSxcblx0XHRcdFx0XHRtMTIgPSB0ZVs0XSxcblx0XHRcdFx0XHRtMTMgPSB0ZVs4XTtcblx0XHRjb25zdCBtMjEgPSB0ZVsxXSxcblx0XHRcdFx0XHRtMjIgPSB0ZVs1XSxcblx0XHRcdFx0XHRtMjMgPSB0ZVs5XTtcblx0XHRjb25zdCBtMzEgPSB0ZVsyXSxcblx0XHRcdFx0XHRtMzIgPSB0ZVs2XSxcblx0XHRcdFx0XHRtMzMgPSB0ZVsxMF07XG5cblx0XHRzd2l0Y2ggKG9yZGVyKSB7XG5cdFx0XHRjYXNlICdYWVonOlxuXHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hc2luKGNsYW1wKG0xMywgLTEsIDEpKTtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMobTEzKSA8IDAuOTk5OTk5OSkge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmF0YW4yKC1tMjMsIG0zMyk7XG5cdFx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXRhbjIoLW0xMiwgbTExKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hdGFuMihtMzIsIG0yMik7XG5cdFx0XHRcdFx0dGhpcy5feiA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWVhaJzpcblx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXNpbigtY2xhbXAobTIzLCAtMSwgMSkpO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhtMjMpIDwgMC45OTk5OTk5KSB7XG5cdFx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXRhbjIobTEzLCBtMzMpO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmF0YW4yKG0yMSwgbTIyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hdGFuMigtbTMxLCBtMTEpO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1pYWSc6XG5cdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmFzaW4oY2xhbXAobTMyLCAtMSwgMSkpO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhtMzIpIDwgMC45OTk5OTk5KSB7XG5cdFx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXRhbjIoLW0zMSwgbTMzKTtcblx0XHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hdGFuMigtbTEyLCBtMjIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3kgPSAwO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmF0YW4yKG0yMSwgbTExKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdaWVgnOlxuXHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hc2luKC1jbGFtcChtMzEsIC0xLCAxKSk7XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKG0zMSkgPCAwLjk5OTk5OTkpIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hdGFuMihtMzIsIG0zMyk7XG5cdFx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXRhbjIobTIxLCBtMTEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSAwO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmF0YW4yKC1tMTIsIG0yMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWVpYJzpcblx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXNpbihjbGFtcChtMjEsIC0xLCAxKSk7XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKG0yMSkgPCAwLjk5OTk5OTkpIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hdGFuMigtbTIzLCBtMjIpO1xuXHRcdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmF0YW4yKC1tMzEsIG0xMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IDA7XG5cdFx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXRhbjIobTEzLCBtMzMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1haWSc6XG5cdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmFzaW4oLWNsYW1wKG0xMiwgLTEsIDEpKTtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMobTEyKSA8IDAuOTk5OTk5OSkge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmF0YW4yKG0zMiwgbTIyKTtcblx0XHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hdGFuMihtMTMsIG0xMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXRhbjIoLW0yMywgbTMzKTtcblx0XHRcdFx0XHR0aGlzLl95ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLkV1bGVyOiAuc2V0RnJvbVJvdGF0aW9uTWF0cml4KCkgZW5jb3VudGVyZWQgYW4gdW5rbm93biBvcmRlcjogJyArIG9yZGVyKTtcblx0XHR9XG5cblx0XHR0aGlzLl9vcmRlciA9IG9yZGVyO1xuXHRcdGlmICh1cGRhdGUgPT09IHRydWUpIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21RdWF0ZXJuaW9uKHEsIG9yZGVyLCB1cGRhdGUpIHtcblx0XHRfbWF0cml4Lm1ha2VSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKHEpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbVJvdGF0aW9uTWF0cml4KF9tYXRyaXgsIG9yZGVyLCB1cGRhdGUpO1xuXHR9XG5cblx0c2V0RnJvbVZlY3RvcjModiwgb3JkZXIgPSB0aGlzLl9vcmRlcikge1xuXHRcdHJldHVybiB0aGlzLnNldCh2LngsIHYueSwgdi56LCBvcmRlcik7XG5cdH1cblxuXHRyZW9yZGVyKG5ld09yZGVyKSB7XG5cdFx0Ly8gV0FSTklORzogdGhpcyBkaXNjYXJkcyByZXZvbHV0aW9uIGluZm9ybWF0aW9uIC1iaG91c3RvblxuXHRcdF9xdWF0ZXJuaW9uLnNldEZyb21FdWxlcih0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzLnNldEZyb21RdWF0ZXJuaW9uKF9xdWF0ZXJuaW9uLCBuZXdPcmRlcik7XG5cdH1cblxuXHRlcXVhbHMoZXVsZXIpIHtcblx0XHRyZXR1cm4gZXVsZXIuX3ggPT09IHRoaXMuX3ggJiYgZXVsZXIuX3kgPT09IHRoaXMuX3kgJiYgZXVsZXIuX3ogPT09IHRoaXMuX3ogJiYgZXVsZXIuX29yZGVyID09PSB0aGlzLl9vcmRlcjtcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSkge1xuXHRcdHRoaXMuX3ggPSBhcnJheVswXTtcblx0XHR0aGlzLl95ID0gYXJyYXlbMV07XG5cdFx0dGhpcy5feiA9IGFycmF5WzJdO1xuXHRcdGlmIChhcnJheVszXSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9vcmRlciA9IGFycmF5WzNdO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRhcnJheVtvZmZzZXRdID0gdGhpcy5feDtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRoaXMuX3k7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0aGlzLl96O1xuXHRcdGFycmF5W29mZnNldCArIDNdID0gdGhpcy5fb3JkZXI7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0X29uQ2hhbmdlKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0X29uQ2hhbmdlQ2FsbGJhY2soKSB7fVxuXG5cdCpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHR5aWVsZCB0aGlzLl94O1xuXHRcdHlpZWxkIHRoaXMuX3k7XG5cdFx0eWllbGQgdGhpcy5fejtcblx0XHR5aWVsZCB0aGlzLl9vcmRlcjtcblx0fSAvLyBAZGVwcmVjYXRlZCBzaW5jZSByMTM4LCAwMmNmMGRmMWNiNDU3NWQ1ODQyZmVmOWM4NWJiNWE4OWZlMDIwZDUzXG5cblxuXHR0b1ZlY3RvcjMoKSB7XG5cdFx0Y29uc29sZS5lcnJvcignVEhSRUUuRXVsZXI6IC50b1ZlY3RvcjMoKSBoYXMgYmVlbiByZW1vdmVkLiBVc2UgVmVjdG9yMy5zZXRGcm9tRXVsZXIoKSBpbnN0ZWFkJyk7XG5cdH1cblxufVxuXG5FdWxlci5EZWZhdWx0T3JkZXIgPSAnWFlaJztcbkV1bGVyLlJvdGF0aW9uT3JkZXJzID0gWydYWVonLCAnWVpYJywgJ1pYWScsICdYWlknLCAnWVhaJywgJ1pZWCddO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3Mgb2YgaW50ZXJwb2xhbnRzIG92ZXIgcGFyYW1ldHJpYyBzYW1wbGVzLlxuICpcbiAqIFRoZSBwYXJhbWV0ZXIgZG9tYWluIGlzIG9uZSBkaW1lbnNpb25hbCwgdHlwaWNhbGx5IHRoZSB0aW1lIG9yIGEgcGF0aFxuICogYWxvbmcgYSBjdXJ2ZSBkZWZpbmVkIGJ5IHRoZSBkYXRhLlxuICpcbiAqIFRoZSBzYW1wbGUgdmFsdWVzIGNhbiBoYXZlIGFueSBkaW1lbnNpb25hbGl0eSBhbmQgZGVyaXZlZCBjbGFzc2VzIG1heVxuICogYXBwbHkgc3BlY2lhbCBpbnRlcnByZXRhdGlvbnMgdG8gdGhlIGRhdGEuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgaW50ZXJ2YWwgc2VlayBpbiBhIFRlbXBsYXRlIE1ldGhvZCwgZGVmZXJyaW5nXG4gKiB0aGUgYWN0dWFsIGludGVycG9sYXRpb24gdG8gZGVyaXZlZCBjbGFzc2VzLlxuICpcbiAqIFRpbWUgY29tcGxleGl0eSBpcyBPKDEpIGZvciBsaW5lYXIgYWNjZXNzIGNyb3NzaW5nIGF0IG1vc3QgdHdvIHBvaW50c1xuICogYW5kIE8obG9nIE4pIGZvciByYW5kb20gYWNjZXNzLCB3aGVyZSBOIGlzIHRoZSBudW1iZXIgb2YgcG9zaXRpb25zLlxuICpcbiAqIFJlZmVyZW5jZXM6XG4gKlxuICogXHRcdGh0dHA6Ly93d3cub29kZXNpZ24uY29tL3RlbXBsYXRlLW1ldGhvZC1wYXR0ZXJuLmh0bWxcbiAqXG4gKi9cbmNsYXNzIEludGVycG9sYW50IHtcblx0Y29uc3RydWN0b3IocGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlcikge1xuXHRcdHRoaXMucGFyYW1ldGVyUG9zaXRpb25zID0gcGFyYW1ldGVyUG9zaXRpb25zO1xuXHRcdHRoaXMuX2NhY2hlZEluZGV4ID0gMDtcblx0XHR0aGlzLnJlc3VsdEJ1ZmZlciA9IHJlc3VsdEJ1ZmZlciAhPT0gdW5kZWZpbmVkID8gcmVzdWx0QnVmZmVyIDogbmV3IHNhbXBsZVZhbHVlcy5jb25zdHJ1Y3RvcihzYW1wbGVTaXplKTtcblx0XHR0aGlzLnNhbXBsZVZhbHVlcyA9IHNhbXBsZVZhbHVlcztcblx0XHR0aGlzLnZhbHVlU2l6ZSA9IHNhbXBsZVNpemU7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XG5cdFx0dGhpcy5EZWZhdWx0U2V0dGluZ3NfID0ge307XG5cdH1cblxuXHRldmFsdWF0ZSh0KSB7XG5cdFx0Y29uc3QgcHAgPSB0aGlzLnBhcmFtZXRlclBvc2l0aW9ucztcblx0XHRsZXQgaTEgPSB0aGlzLl9jYWNoZWRJbmRleCxcblx0XHRcdFx0dDEgPSBwcFtpMV0sXG5cdFx0XHRcdHQwID0gcHBbaTEgLSAxXTtcblxuXHRcdHZhbGlkYXRlX2ludGVydmFsOiB7XG5cdFx0XHRzZWVrOiB7XG5cdFx0XHRcdGxldCByaWdodDtcblxuXHRcdFx0XHRsaW5lYXJfc2Nhbjoge1xuXHRcdFx0XHRcdC8vLSBTZWUgaHR0cDovL2pzcGVyZi5jb20vY29tcGFyaXNvbi10by11bmRlZmluZWQvM1xuXHRcdFx0XHRcdC8vLSBzbG93ZXIgY29kZTpcblx0XHRcdFx0XHQvLy1cblx0XHRcdFx0XHQvLy0gXHRcdFx0XHRpZiAoIHQgPj0gdDEgfHwgdDEgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRmb3J3YXJkX3NjYW46IGlmICghKHQgPCB0MSkpIHtcblx0XHRcdFx0XHRcdGZvciAobGV0IGdpdmVVcEF0ID0gaTEgKyAyOzspIHtcblx0XHRcdFx0XHRcdFx0aWYgKHQxID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodCA8IHQwKSBicmVhayBmb3J3YXJkX3NjYW47IC8vIGFmdGVyIGVuZFxuXG5cdFx0XHRcdFx0XHRcdFx0aTEgPSBwcC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fY2FjaGVkSW5kZXggPSBpMTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb3B5U2FtcGxlVmFsdWVfKGkxIC0gMSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoaTEgPT09IGdpdmVVcEF0KSBicmVhazsgLy8gdGhpcyBsb29wXG5cblx0XHRcdFx0XHRcdFx0dDAgPSB0MTtcblx0XHRcdFx0XHRcdFx0dDEgPSBwcFsrK2kxXTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodCA8IHQxKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gd2UgaGF2ZSBhcnJpdmVkIGF0IHRoZSBzb3VnaHQgaW50ZXJ2YWxcblx0XHRcdFx0XHRcdFx0XHRicmVhayBzZWVrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IC8vIHByZXBhcmUgYmluYXJ5IHNlYXJjaCBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgaW5kZXhcblxuXG5cdFx0XHRcdFx0XHRyaWdodCA9IHBwLmxlbmd0aDtcblx0XHRcdFx0XHRcdGJyZWFrIGxpbmVhcl9zY2FuO1xuXHRcdFx0XHRcdH0gLy8tIHNsb3dlciBjb2RlOlxuXHRcdFx0XHRcdC8vLVx0XHRcdFx0XHRpZiAoIHQgPCB0MCB8fCB0MCA9PT0gdW5kZWZpbmVkICkge1xuXG5cblx0XHRcdFx0XHRpZiAoISh0ID49IHQwKSkge1xuXHRcdFx0XHRcdFx0Ly8gbG9vcGluZz9cblx0XHRcdFx0XHRcdGNvbnN0IHQxZ2xvYmFsID0gcHBbMV07XG5cblx0XHRcdFx0XHRcdGlmICh0IDwgdDFnbG9iYWwpIHtcblx0XHRcdFx0XHRcdFx0aTEgPSAyOyAvLyArIDEsIHVzaW5nIHRoZSBzY2FuIGZvciB0aGUgZGV0YWlsc1xuXG5cdFx0XHRcdFx0XHRcdHQwID0gdDFnbG9iYWw7XG5cdFx0XHRcdFx0XHR9IC8vIGxpbmVhciByZXZlcnNlIHNjYW5cblxuXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBnaXZlVXBBdCA9IGkxIC0gMjs7KSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0MCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmVmb3JlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fY2FjaGVkSW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNvcHlTYW1wbGVWYWx1ZV8oMCk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoaTEgPT09IGdpdmVVcEF0KSBicmVhazsgLy8gdGhpcyBsb29wXG5cblx0XHRcdFx0XHRcdFx0dDEgPSB0MDtcblx0XHRcdFx0XHRcdFx0dDAgPSBwcFstLWkxIC0gMV07XG5cblx0XHRcdFx0XHRcdFx0aWYgKHQgPj0gdDApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyB3ZSBoYXZlIGFycml2ZWQgYXQgdGhlIHNvdWdodCBpbnRlcnZhbFxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrIHNlZWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gLy8gcHJlcGFyZSBiaW5hcnkgc2VhcmNoIG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIGluZGV4XG5cblxuXHRcdFx0XHRcdFx0cmlnaHQgPSBpMTtcblx0XHRcdFx0XHRcdGkxID0gMDtcblx0XHRcdFx0XHRcdGJyZWFrIGxpbmVhcl9zY2FuO1xuXHRcdFx0XHRcdH0gLy8gdGhlIGludGVydmFsIGlzIHZhbGlkXG5cblxuXHRcdFx0XHRcdGJyZWFrIHZhbGlkYXRlX2ludGVydmFsO1xuXHRcdFx0XHR9IC8vIGxpbmVhciBzY2FuXG5cdFx0XHRcdC8vIGJpbmFyeSBzZWFyY2hcblxuXG5cdFx0XHRcdHdoaWxlIChpMSA8IHJpZ2h0KSB7XG5cdFx0XHRcdFx0Y29uc3QgbWlkID0gaTEgKyByaWdodCA+Pj4gMTtcblxuXHRcdFx0XHRcdGlmICh0IDwgcHBbbWlkXSkge1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBtaWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGkxID0gbWlkICsgMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0MSA9IHBwW2kxXTtcblx0XHRcdFx0dDAgPSBwcFtpMSAtIDFdOyAvLyBjaGVjayBib3VuZGFyeSBjYXNlcywgYWdhaW5cblxuXHRcdFx0XHRpZiAodDAgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NhY2hlZEluZGV4ID0gMDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb3B5U2FtcGxlVmFsdWVfKDApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHQxID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRpMSA9IHBwLmxlbmd0aDtcblx0XHRcdFx0XHR0aGlzLl9jYWNoZWRJbmRleCA9IGkxO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvcHlTYW1wbGVWYWx1ZV8oaTEgLSAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSAvLyBzZWVrXG5cblxuXHRcdFx0dGhpcy5fY2FjaGVkSW5kZXggPSBpMTtcblx0XHRcdHRoaXMuaW50ZXJ2YWxDaGFuZ2VkXyhpMSwgdDAsIHQxKTtcblx0XHR9IC8vIHZhbGlkYXRlX2ludGVydmFsXG5cblxuXHRcdHJldHVybiB0aGlzLmludGVycG9sYXRlXyhpMSwgdDAsIHQsIHQxKTtcblx0fVxuXG5cdGdldFNldHRpbmdzXygpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXR0aW5ncyB8fCB0aGlzLkRlZmF1bHRTZXR0aW5nc187XG5cdH1cblxuXHRjb3B5U2FtcGxlVmFsdWVfKGluZGV4KSB7XG5cdFx0Ly8gY29waWVzIGEgc2FtcGxlIHZhbHVlIHRvIHRoZSByZXN1bHQgYnVmZmVyXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXIsXG5cdFx0XHRcdFx0dmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXMsXG5cdFx0XHRcdFx0c3RyaWRlID0gdGhpcy52YWx1ZVNpemUsXG5cdFx0XHRcdFx0b2Zmc2V0ID0gaW5kZXggKiBzdHJpZGU7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSAhPT0gc3RyaWRlOyArK2kpIHtcblx0XHRcdHJlc3VsdFtpXSA9IHZhbHVlc1tvZmZzZXQgKyBpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9IC8vIFRlbXBsYXRlIG1ldGhvZHMgZm9yIGRlcml2ZWQgY2xhc3NlczpcblxuXG5cdGludGVycG9sYXRlXygpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NhbGwgdG8gYWJzdHJhY3QgbWV0aG9kJyk7IC8vIGltcGxlbWVudGF0aW9ucyBzaGFsbCByZXR1cm4gdGhpcy5yZXN1bHRCdWZmZXJcblx0fVxuXG5cdGludGVydmFsQ2hhbmdlZF8oKSB7Ly8gZW1wdHlcblx0fVxuXG59XG5cbmNvbnN0IF9zdGFydFAgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3N0YXJ0RW5kID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNsYXNzIExpbmUzIHtcblx0Y29uc3RydWN0b3Ioc3RhcnQgPSBuZXcgVmVjdG9yMygpLCBlbmQgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHR9XG5cblx0c2V0KHN0YXJ0LCBlbmQpIHtcblx0XHR0aGlzLnN0YXJ0LmNvcHkoc3RhcnQpO1xuXHRcdHRoaXMuZW5kLmNvcHkoZW5kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkobGluZSkge1xuXHRcdHRoaXMuc3RhcnQuY29weShsaW5lLnN0YXJ0KTtcblx0XHR0aGlzLmVuZC5jb3B5KGxpbmUuZW5kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldENlbnRlcih0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmFkZFZlY3RvcnModGhpcy5zdGFydCwgdGhpcy5lbmQpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG5cdH1cblxuXHRkZWx0YSh0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LnN1YlZlY3RvcnModGhpcy5lbmQsIHRoaXMuc3RhcnQpO1xuXHR9XG5cblx0ZGlzdGFuY2VTcSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZVRvU3F1YXJlZCh0aGlzLmVuZCk7XG5cdH1cblxuXHRkaXN0YW5jZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZVRvKHRoaXMuZW5kKTtcblx0fVxuXG5cdGF0KHQsIHRhcmdldCkge1xuXHRcdHJldHVybiB0aGlzLmRlbHRhKHRhcmdldCkubXVsdGlwbHlTY2FsYXIodCkuYWRkKHRoaXMuc3RhcnQpO1xuXHR9XG5cblx0Y2xvc2VzdFBvaW50VG9Qb2ludFBhcmFtZXRlcihwb2ludCwgY2xhbXBUb0xpbmUpIHtcblx0XHRfc3RhcnRQLnN1YlZlY3RvcnMocG9pbnQsIHRoaXMuc3RhcnQpO1xuXG5cdFx0X3N0YXJ0RW5kLnN1YlZlY3RvcnModGhpcy5lbmQsIHRoaXMuc3RhcnQpO1xuXG5cdFx0Y29uc3Qgc3RhcnRFbmQyID0gX3N0YXJ0RW5kLmRvdChfc3RhcnRFbmQpO1xuXG5cdFx0Y29uc3Qgc3RhcnRFbmRfc3RhcnRQID0gX3N0YXJ0RW5kLmRvdChfc3RhcnRQKTtcblxuXHRcdGxldCB0ID0gc3RhcnRFbmRfc3RhcnRQIC8gc3RhcnRFbmQyO1xuXG5cdFx0aWYgKGNsYW1wVG9MaW5lKSB7XG5cdFx0XHR0ID0gY2xhbXAodCwgMCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHRjbG9zZXN0UG9pbnRUb1BvaW50KHBvaW50LCBjbGFtcFRvTGluZSwgdGFyZ2V0KSB7XG5cdFx0Y29uc3QgdCA9IHRoaXMuY2xvc2VzdFBvaW50VG9Qb2ludFBhcmFtZXRlcihwb2ludCwgY2xhbXBUb0xpbmUpO1xuXHRcdHJldHVybiB0aGlzLmRlbHRhKHRhcmdldCkubXVsdGlwbHlTY2FsYXIodCkuYWRkKHRoaXMuc3RhcnQpO1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG1hdHJpeCkge1xuXHRcdHRoaXMuc3RhcnQuYXBwbHlNYXRyaXg0KG1hdHJpeCk7XG5cdFx0dGhpcy5lbmQuYXBwbHlNYXRyaXg0KG1hdHJpeCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMobGluZSkge1xuXHRcdHJldHVybiBsaW5lLnN0YXJ0LmVxdWFscyh0aGlzLnN0YXJ0KSAmJiBsaW5lLmVuZC5lcXVhbHModGhpcy5lbmQpO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG59XG5cbmNsYXNzIE1hdHJpeDMge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRNYXRyaXgzLnByb3RvdHlwZS5pc01hdHJpeDMgPSB0cnVlO1xuXHRcdHRoaXMuZWxlbWVudHMgPSBbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV07XG5cdH1cblxuXHRzZXQobjExLCBuMTIsIG4xMywgbjIxLCBuMjIsIG4yMywgbjMxLCBuMzIsIG4zMykge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR0ZVswXSA9IG4xMTtcblx0XHR0ZVsxXSA9IG4yMTtcblx0XHR0ZVsyXSA9IG4zMTtcblx0XHR0ZVszXSA9IG4xMjtcblx0XHR0ZVs0XSA9IG4yMjtcblx0XHR0ZVs1XSA9IG4zMjtcblx0XHR0ZVs2XSA9IG4xMztcblx0XHR0ZVs3XSA9IG4yMztcblx0XHR0ZVs4XSA9IG4zMztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlkZW50aXR5KCkge1xuXHRcdHRoaXMuc2V0KDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShtKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG1lID0gbS5lbGVtZW50cztcblx0XHR0ZVswXSA9IG1lWzBdO1xuXHRcdHRlWzFdID0gbWVbMV07XG5cdFx0dGVbMl0gPSBtZVsyXTtcblx0XHR0ZVszXSA9IG1lWzNdO1xuXHRcdHRlWzRdID0gbWVbNF07XG5cdFx0dGVbNV0gPSBtZVs1XTtcblx0XHR0ZVs2XSA9IG1lWzZdO1xuXHRcdHRlWzddID0gbWVbN107XG5cdFx0dGVbOF0gPSBtZVs4XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4dHJhY3RCYXNpcyh4QXhpcywgeUF4aXMsIHpBeGlzKSB7XG5cdFx0eEF4aXMuc2V0RnJvbU1hdHJpeDNDb2x1bW4odGhpcywgMCk7XG5cdFx0eUF4aXMuc2V0RnJvbU1hdHJpeDNDb2x1bW4odGhpcywgMSk7XG5cdFx0ekF4aXMuc2V0RnJvbU1hdHJpeDNDb2x1bW4odGhpcywgMik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tTWF0cml4NChtKSB7XG5cdFx0Y29uc3QgbWUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMuc2V0KG1lWzBdLCBtZVs0XSwgbWVbOF0sIG1lWzFdLCBtZVs1XSwgbWVbOV0sIG1lWzJdLCBtZVs2XSwgbWVbMTBdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KG0pIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseU1hdHJpY2VzKHRoaXMsIG0pO1xuXHR9XG5cblx0cHJlbXVsdGlwbHkobSkge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5TWF0cmljZXMobSwgdGhpcyk7XG5cdH1cblxuXHRtdWx0aXBseU1hdHJpY2VzKGEsIGIpIHtcblx0XHRjb25zdCBhZSA9IGEuZWxlbWVudHM7XG5cdFx0Y29uc3QgYmUgPSBiLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBhMTEgPSBhZVswXSxcblx0XHRcdFx0XHRhMTIgPSBhZVszXSxcblx0XHRcdFx0XHRhMTMgPSBhZVs2XTtcblx0XHRjb25zdCBhMjEgPSBhZVsxXSxcblx0XHRcdFx0XHRhMjIgPSBhZVs0XSxcblx0XHRcdFx0XHRhMjMgPSBhZVs3XTtcblx0XHRjb25zdCBhMzEgPSBhZVsyXSxcblx0XHRcdFx0XHRhMzIgPSBhZVs1XSxcblx0XHRcdFx0XHRhMzMgPSBhZVs4XTtcblx0XHRjb25zdCBiMTEgPSBiZVswXSxcblx0XHRcdFx0XHRiMTIgPSBiZVszXSxcblx0XHRcdFx0XHRiMTMgPSBiZVs2XTtcblx0XHRjb25zdCBiMjEgPSBiZVsxXSxcblx0XHRcdFx0XHRiMjIgPSBiZVs0XSxcblx0XHRcdFx0XHRiMjMgPSBiZVs3XTtcblx0XHRjb25zdCBiMzEgPSBiZVsyXSxcblx0XHRcdFx0XHRiMzIgPSBiZVs1XSxcblx0XHRcdFx0XHRiMzMgPSBiZVs4XTtcblx0XHR0ZVswXSA9IGExMSAqIGIxMSArIGExMiAqIGIyMSArIGExMyAqIGIzMTtcblx0XHR0ZVszXSA9IGExMSAqIGIxMiArIGExMiAqIGIyMiArIGExMyAqIGIzMjtcblx0XHR0ZVs2XSA9IGExMSAqIGIxMyArIGExMiAqIGIyMyArIGExMyAqIGIzMztcblx0XHR0ZVsxXSA9IGEyMSAqIGIxMSArIGEyMiAqIGIyMSArIGEyMyAqIGIzMTtcblx0XHR0ZVs0XSA9IGEyMSAqIGIxMiArIGEyMiAqIGIyMiArIGEyMyAqIGIzMjtcblx0XHR0ZVs3XSA9IGEyMSAqIGIxMyArIGEyMiAqIGIyMyArIGEyMyAqIGIzMztcblx0XHR0ZVsyXSA9IGEzMSAqIGIxMSArIGEzMiAqIGIyMSArIGEzMyAqIGIzMTtcblx0XHR0ZVs1XSA9IGEzMSAqIGIxMiArIGEzMiAqIGIyMiArIGEzMyAqIGIzMjtcblx0XHR0ZVs4XSA9IGEzMSAqIGIxMyArIGEzMiAqIGIyMyArIGEzMyAqIGIzMztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5U2NhbGFyKHMpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dGVbMF0gKj0gcztcblx0XHR0ZVszXSAqPSBzO1xuXHRcdHRlWzZdICo9IHM7XG5cdFx0dGVbMV0gKj0gcztcblx0XHR0ZVs0XSAqPSBzO1xuXHRcdHRlWzddICo9IHM7XG5cdFx0dGVbMl0gKj0gcztcblx0XHR0ZVs1XSAqPSBzO1xuXHRcdHRlWzhdICo9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkZXRlcm1pbmFudCgpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgYSA9IHRlWzBdLFxuXHRcdFx0XHRcdGIgPSB0ZVsxXSxcblx0XHRcdFx0XHRjID0gdGVbMl0sXG5cdFx0XHRcdFx0ZCA9IHRlWzNdLFxuXHRcdFx0XHRcdGUgPSB0ZVs0XSxcblx0XHRcdFx0XHRmID0gdGVbNV0sXG5cdFx0XHRcdFx0ZyA9IHRlWzZdLFxuXHRcdFx0XHRcdGggPSB0ZVs3XSxcblx0XHRcdFx0XHRpID0gdGVbOF07XG5cdFx0cmV0dXJuIGEgKiBlICogaSAtIGEgKiBmICogaCAtIGIgKiBkICogaSArIGIgKiBmICogZyArIGMgKiBkICogaCAtIGMgKiBlICogZztcblx0fVxuXG5cdGludmVydCgpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHMsXG5cdFx0XHRcdFx0bjExID0gdGVbMF0sXG5cdFx0XHRcdFx0bjIxID0gdGVbMV0sXG5cdFx0XHRcdFx0bjMxID0gdGVbMl0sXG5cdFx0XHRcdFx0bjEyID0gdGVbM10sXG5cdFx0XHRcdFx0bjIyID0gdGVbNF0sXG5cdFx0XHRcdFx0bjMyID0gdGVbNV0sXG5cdFx0XHRcdFx0bjEzID0gdGVbNl0sXG5cdFx0XHRcdFx0bjIzID0gdGVbN10sXG5cdFx0XHRcdFx0bjMzID0gdGVbOF0sXG5cdFx0XHRcdFx0dDExID0gbjMzICogbjIyIC0gbjMyICogbjIzLFxuXHRcdFx0XHRcdHQxMiA9IG4zMiAqIG4xMyAtIG4zMyAqIG4xMixcblx0XHRcdFx0XHR0MTMgPSBuMjMgKiBuMTIgLSBuMjIgKiBuMTMsXG5cdFx0XHRcdFx0ZGV0ID0gbjExICogdDExICsgbjIxICogdDEyICsgbjMxICogdDEzO1xuXHRcdGlmIChkZXQgPT09IDApIHJldHVybiB0aGlzLnNldCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcblx0XHRjb25zdCBkZXRJbnYgPSAxIC8gZGV0O1xuXHRcdHRlWzBdID0gdDExICogZGV0SW52O1xuXHRcdHRlWzFdID0gKG4zMSAqIG4yMyAtIG4zMyAqIG4yMSkgKiBkZXRJbnY7XG5cdFx0dGVbMl0gPSAobjMyICogbjIxIC0gbjMxICogbjIyKSAqIGRldEludjtcblx0XHR0ZVszXSA9IHQxMiAqIGRldEludjtcblx0XHR0ZVs0XSA9IChuMzMgKiBuMTEgLSBuMzEgKiBuMTMpICogZGV0SW52O1xuXHRcdHRlWzVdID0gKG4zMSAqIG4xMiAtIG4zMiAqIG4xMSkgKiBkZXRJbnY7XG5cdFx0dGVbNl0gPSB0MTMgKiBkZXRJbnY7XG5cdFx0dGVbN10gPSAobjIxICogbjEzIC0gbjIzICogbjExKSAqIGRldEludjtcblx0XHR0ZVs4XSA9IChuMjIgKiBuMTEgLSBuMjEgKiBuMTIpICogZGV0SW52O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dHJhbnNwb3NlKCkge1xuXHRcdGxldCB0bXA7XG5cdFx0Y29uc3QgbSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dG1wID0gbVsxXTtcblx0XHRtWzFdID0gbVszXTtcblx0XHRtWzNdID0gdG1wO1xuXHRcdHRtcCA9IG1bMl07XG5cdFx0bVsyXSA9IG1bNl07XG5cdFx0bVs2XSA9IHRtcDtcblx0XHR0bXAgPSBtWzVdO1xuXHRcdG1bNV0gPSBtWzddO1xuXHRcdG1bN10gPSB0bXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXROb3JtYWxNYXRyaXgobWF0cml4NCkge1xuXHRcdHJldHVybiB0aGlzLnNldEZyb21NYXRyaXg0KG1hdHJpeDQpLmludmVydCgpLnRyYW5zcG9zZSgpO1xuXHR9XG5cblx0dHJhbnNwb3NlSW50b0FycmF5KHIpIHtcblx0XHRjb25zdCBtID0gdGhpcy5lbGVtZW50cztcblx0XHRyWzBdID0gbVswXTtcblx0XHRyWzFdID0gbVszXTtcblx0XHRyWzJdID0gbVs2XTtcblx0XHRyWzNdID0gbVsxXTtcblx0XHRyWzRdID0gbVs0XTtcblx0XHRyWzVdID0gbVs3XTtcblx0XHRyWzZdID0gbVsyXTtcblx0XHRyWzddID0gbVs1XTtcblx0XHRyWzhdID0gbVs4XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFV2VHJhbnNmb3JtKHR4LCB0eSwgc3gsIHN5LCByb3RhdGlvbiwgY3gsIGN5KSB7XG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKHJvdGF0aW9uKTtcblx0XHRjb25zdCBzID0gTWF0aC5zaW4ocm90YXRpb24pO1xuXHRcdHRoaXMuc2V0KHN4ICogYywgc3ggKiBzLCAtc3ggKiAoYyAqIGN4ICsgcyAqIGN5KSArIGN4ICsgdHgsIC1zeSAqIHMsIHN5ICogYywgLXN5ICogKC1zICogY3ggKyBjICogY3kpICsgY3kgKyB0eSwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy9cblxuXG5cdHNjYWxlKHN4LCBzeSkge1xuXHRcdHRoaXMucHJlbXVsdGlwbHkoX20zLm1ha2VTY2FsZShzeCwgc3kpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdGF0ZSh0aGV0YSkge1xuXHRcdHRoaXMucHJlbXVsdGlwbHkoX20zLm1ha2VSb3RhdGlvbigtdGhldGEpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyYW5zbGF0ZSh0eCwgdHkpIHtcblx0XHR0aGlzLnByZW11bHRpcGx5KF9tMy5tYWtlVHJhbnNsYXRpb24odHgsIHR5KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy8gZm9yIDJEIFRyYW5zZm9ybXNcblxuXG5cdG1ha2VUcmFuc2xhdGlvbih4LCB5KSB7XG5cdFx0dGhpcy5zZXQoMSwgMCwgeCwgMCwgMSwgeSwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb24odGhldGEpIHtcblx0XHQvLyBjb3VudGVyY2xvY2t3aXNlXG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKHRoZXRhKTtcblx0XHRjb25zdCBzID0gTWF0aC5zaW4odGhldGEpO1xuXHRcdHRoaXMuc2V0KGMsIC1zLCAwLCBzLCBjLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VTY2FsZSh4LCB5KSB7XG5cdFx0dGhpcy5zZXQoeCwgMCwgMCwgMCwgeSwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy9cblxuXG5cdGVxdWFscyhtYXRyaXgpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgbWUgPSBtYXRyaXguZWxlbWVudHM7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuXHRcdFx0aWYgKHRlW2ldICE9PSBtZVtpXSkgcmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcblx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBhcnJheVtpICsgb2Zmc2V0XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRhcnJheVtvZmZzZXRdID0gdGVbMF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0ZVsxXTtcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRlWzJdO1xuXHRcdGFycmF5W29mZnNldCArIDNdID0gdGVbM107XG5cdFx0YXJyYXlbb2Zmc2V0ICsgNF0gPSB0ZVs0XTtcblx0XHRhcnJheVtvZmZzZXQgKyA1XSA9IHRlWzVdO1xuXHRcdGFycmF5W29mZnNldCArIDZdID0gdGVbNl07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgN10gPSB0ZVs3XTtcblx0XHRhcnJheVtvZmZzZXQgKyA4XSA9IHRlWzhdO1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmZyb21BcnJheSh0aGlzLmVsZW1lbnRzKTtcblx0fVxuXG59XG5cbmNvbnN0IF9tMyA9IC8qQF9fUFVSRV9fKi9uZXcgTWF0cml4MygpO1xuXG5jb25zdCBfdmVjdG9yMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmVjdG9yMiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfbm9ybWFsTWF0cml4ID0gLypAX19QVVJFX18qL25ldyBNYXRyaXgzKCk7XG5cbmNsYXNzIFBsYW5lIHtcblx0Y29uc3RydWN0b3Iobm9ybWFsID0gbmV3IFZlY3RvcjMoMSwgMCwgMCksIGNvbnN0YW50ID0gMCkge1xuXHRcdHRoaXMuaXNQbGFuZSA9IHRydWU7IC8vIG5vcm1hbCBpcyBhc3N1bWVkIHRvIGJlIG5vcm1hbGl6ZWRcblxuXHRcdHRoaXMubm9ybWFsID0gbm9ybWFsO1xuXHRcdHRoaXMuY29uc3RhbnQgPSBjb25zdGFudDtcblx0fVxuXG5cdHNldChub3JtYWwsIGNvbnN0YW50KSB7XG5cdFx0dGhpcy5ub3JtYWwuY29weShub3JtYWwpO1xuXHRcdHRoaXMuY29uc3RhbnQgPSBjb25zdGFudDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldENvbXBvbmVudHMoeCwgeSwgeiwgdykge1xuXHRcdHRoaXMubm9ybWFsLnNldCh4LCB5LCB6KTtcblx0XHR0aGlzLmNvbnN0YW50ID0gdztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Ob3JtYWxBbmRDb3BsYW5hclBvaW50KG5vcm1hbCwgcG9pbnQpIHtcblx0XHR0aGlzLm5vcm1hbC5jb3B5KG5vcm1hbCk7XG5cdFx0dGhpcy5jb25zdGFudCA9IC1wb2ludC5kb3QodGhpcy5ub3JtYWwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUNvcGxhbmFyUG9pbnRzKGEsIGIsIGMpIHtcblx0XHRjb25zdCBub3JtYWwgPSBfdmVjdG9yMS5zdWJWZWN0b3JzKGMsIGIpLmNyb3NzKF92ZWN0b3IyLnN1YlZlY3RvcnMoYSwgYikpLm5vcm1hbGl6ZSgpOyAvLyBROiBzaG91bGQgYW4gZXJyb3IgYmUgdGhyb3duIGlmIG5vcm1hbCBpcyB6ZXJvIChlLmcuIGRlZ2VuZXJhdGUgcGxhbmUpP1xuXG5cblx0XHR0aGlzLnNldEZyb21Ob3JtYWxBbmRDb3BsYW5hclBvaW50KG5vcm1hbCwgYSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KHBsYW5lKSB7XG5cdFx0dGhpcy5ub3JtYWwuY29weShwbGFuZS5ub3JtYWwpO1xuXHRcdHRoaXMuY29uc3RhbnQgPSBwbGFuZS5jb25zdGFudDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5vcm1hbGl6ZSgpIHtcblx0XHQvLyBOb3RlOiB3aWxsIGxlYWQgdG8gYSBkaXZpZGUgYnkgemVybyBpZiB0aGUgcGxhbmUgaXMgaW52YWxpZC5cblx0XHRjb25zdCBpbnZlcnNlTm9ybWFsTGVuZ3RoID0gMS4wIC8gdGhpcy5ub3JtYWwubGVuZ3RoKCk7XG5cdFx0dGhpcy5ub3JtYWwubXVsdGlwbHlTY2FsYXIoaW52ZXJzZU5vcm1hbExlbmd0aCk7XG5cdFx0dGhpcy5jb25zdGFudCAqPSBpbnZlcnNlTm9ybWFsTGVuZ3RoO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmVnYXRlKCkge1xuXHRcdHRoaXMuY29uc3RhbnQgKj0gLTE7XG5cdFx0dGhpcy5ub3JtYWwubmVnYXRlKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXN0YW5jZVRvUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWwuZG90KHBvaW50KSArIHRoaXMuY29uc3RhbnQ7XG5cdH1cblxuXHRkaXN0YW5jZVRvU3BoZXJlKHNwaGVyZSkge1xuXHRcdHJldHVybiB0aGlzLmRpc3RhbmNlVG9Qb2ludChzcGhlcmUuY2VudGVyKSAtIHNwaGVyZS5yYWRpdXM7XG5cdH1cblxuXHRwcm9qZWN0UG9pbnQocG9pbnQsIHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuY29weSh0aGlzLm5vcm1hbCkubXVsdGlwbHlTY2FsYXIoLXRoaXMuZGlzdGFuY2VUb1BvaW50KHBvaW50KSkuYWRkKHBvaW50KTtcblx0fVxuXG5cdGludGVyc2VjdExpbmUobGluZSwgdGFyZ2V0KSB7XG5cdFx0Y29uc3QgZGlyZWN0aW9uID0gbGluZS5kZWx0YShfdmVjdG9yMSk7XG5cdFx0Y29uc3QgZGVub21pbmF0b3IgPSB0aGlzLm5vcm1hbC5kb3QoZGlyZWN0aW9uKTtcblxuXHRcdGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuXHRcdFx0Ly8gbGluZSBpcyBjb3BsYW5hciwgcmV0dXJuIG9yaWdpblxuXHRcdFx0aWYgKHRoaXMuZGlzdGFuY2VUb1BvaW50KGxpbmUuc3RhcnQpID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQuY29weShsaW5lLnN0YXJ0KTtcblx0XHRcdH0gLy8gVW5zdXJlIGlmIHRoaXMgaXMgdGhlIGNvcnJlY3QgbWV0aG9kIHRvIGhhbmRsZSB0aGlzIGNhc2UuXG5cblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdCA9IC0obGluZS5zdGFydC5kb3QodGhpcy5ub3JtYWwpICsgdGhpcy5jb25zdGFudCkgLyBkZW5vbWluYXRvcjtcblxuXHRcdGlmICh0IDwgMCB8fCB0ID4gMSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KGRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIodCkuYWRkKGxpbmUuc3RhcnQpO1xuXHR9XG5cblx0aW50ZXJzZWN0c0xpbmUobGluZSkge1xuXHRcdC8vIE5vdGU6IHRoaXMgdGVzdHMgaWYgYSBsaW5lIGludGVyc2VjdHMgdGhlIHBsYW5lLCBub3Qgd2hldGhlciBpdCAob3IgaXRzIGVuZC1wb2ludHMpIGFyZSBjb3BsYW5hciB3aXRoIGl0LlxuXHRcdGNvbnN0IHN0YXJ0U2lnbiA9IHRoaXMuZGlzdGFuY2VUb1BvaW50KGxpbmUuc3RhcnQpO1xuXHRcdGNvbnN0IGVuZFNpZ24gPSB0aGlzLmRpc3RhbmNlVG9Qb2ludChsaW5lLmVuZCk7XG5cdFx0cmV0dXJuIHN0YXJ0U2lnbiA8IDAgJiYgZW5kU2lnbiA+IDAgfHwgZW5kU2lnbiA8IDAgJiYgc3RhcnRTaWduID4gMDtcblx0fVxuXG5cdGludGVyc2VjdHNCb3goYm94KSB7XG5cdFx0cmV0dXJuIGJveC5pbnRlcnNlY3RzUGxhbmUodGhpcyk7XG5cdH1cblxuXHRpbnRlcnNlY3RzU3BoZXJlKHNwaGVyZSkge1xuXHRcdHJldHVybiBzcGhlcmUuaW50ZXJzZWN0c1BsYW5lKHRoaXMpO1xuXHR9XG5cblx0Y29wbGFuYXJQb2ludCh0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5ub3JtYWwpLm11bHRpcGx5U2NhbGFyKC10aGlzLmNvbnN0YW50KTtcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtYXRyaXgsIG9wdGlvbmFsTm9ybWFsTWF0cml4KSB7XG5cdFx0Y29uc3Qgbm9ybWFsTWF0cml4ID0gb3B0aW9uYWxOb3JtYWxNYXRyaXggfHwgX25vcm1hbE1hdHJpeC5nZXROb3JtYWxNYXRyaXgobWF0cml4KTtcblxuXHRcdGNvbnN0IHJlZmVyZW5jZVBvaW50ID0gdGhpcy5jb3BsYW5hclBvaW50KF92ZWN0b3IxKS5hcHBseU1hdHJpeDQobWF0cml4KTtcblx0XHRjb25zdCBub3JtYWwgPSB0aGlzLm5vcm1hbC5hcHBseU1hdHJpeDMobm9ybWFsTWF0cml4KS5ub3JtYWxpemUoKTtcblx0XHR0aGlzLmNvbnN0YW50ID0gLXJlZmVyZW5jZVBvaW50LmRvdChub3JtYWwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dHJhbnNsYXRlKG9mZnNldCkge1xuXHRcdHRoaXMuY29uc3RhbnQgLT0gb2Zmc2V0LmRvdCh0aGlzLm5vcm1hbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMocGxhbmUpIHtcblx0XHRyZXR1cm4gcGxhbmUubm9ybWFsLmVxdWFscyh0aGlzLm5vcm1hbCkgJiYgcGxhbmUuY29uc3RhbnQgPT09IHRoaXMuY29uc3RhbnQ7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cbn1cblxuY29uc3QgX3ZlY3RvciA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfc2VnQ2VudGVyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9zZWdEaXIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2RpZmYgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2VkZ2UxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9lZGdlMiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfbm9ybWFsID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNsYXNzIFJheSB7XG5cdGNvbnN0cnVjdG9yKG9yaWdpbiA9IG5ldyBWZWN0b3IzKCksIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDAsIC0xKSkge1xuXHRcdHRoaXMub3JpZ2luID0gb3JpZ2luO1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0c2V0KG9yaWdpbiwgZGlyZWN0aW9uKSB7XG5cdFx0dGhpcy5vcmlnaW4uY29weShvcmlnaW4pO1xuXHRcdHRoaXMuZGlyZWN0aW9uLmNvcHkoZGlyZWN0aW9uKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkocmF5KSB7XG5cdFx0dGhpcy5vcmlnaW4uY29weShyYXkub3JpZ2luKTtcblx0XHR0aGlzLmRpcmVjdGlvbi5jb3B5KHJheS5kaXJlY3Rpb24pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXQodCwgdGFyZ2V0ID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdHJldHVybiB0YXJnZXQuY29weSh0aGlzLmRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIodCkuYWRkKHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdGxvb2tBdCh2KSB7XG5cdFx0dGhpcy5kaXJlY3Rpb24uY29weSh2KS5zdWIodGhpcy5vcmlnaW4pLm5vcm1hbGl6ZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmVjYXN0KHQpIHtcblx0XHR0aGlzLm9yaWdpbi5jb3B5KHRoaXMuYXQodCwgX3ZlY3RvcikpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvc2VzdFBvaW50VG9Qb2ludChwb2ludCwgdGFyZ2V0ID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdHRhcmdldC5zdWJWZWN0b3JzKHBvaW50LCB0aGlzLm9yaWdpbik7XG5cdFx0Y29uc3QgZGlyZWN0aW9uRGlzdGFuY2UgPSB0YXJnZXQuZG90KHRoaXMuZGlyZWN0aW9uKTtcblxuXHRcdGlmIChkaXJlY3Rpb25EaXN0YW5jZSA8IDApIHtcblx0XHRcdHJldHVybiB0YXJnZXQuY29weSh0aGlzLm9yaWdpbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KHRoaXMuZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcihkaXJlY3Rpb25EaXN0YW5jZSkuYWRkKHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdGRpc3RhbmNlVG9Qb2ludChwb2ludCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxVG9Qb2ludChwb2ludCkpO1xuXHR9XG5cblx0ZGlzdGFuY2VTcVRvUG9pbnQocG9pbnQpIHtcblx0XHRjb25zdCBkaXJlY3Rpb25EaXN0YW5jZSA9IF92ZWN0b3Iuc3ViVmVjdG9ycyhwb2ludCwgdGhpcy5vcmlnaW4pLmRvdCh0aGlzLmRpcmVjdGlvbik7IC8vIHBvaW50IGJlaGluZCB0aGUgcmF5XG5cblxuXHRcdGlmIChkaXJlY3Rpb25EaXN0YW5jZSA8IDApIHtcblx0XHRcdHJldHVybiB0aGlzLm9yaWdpbi5kaXN0YW5jZVRvU3F1YXJlZChwb2ludCk7XG5cdFx0fVxuXG5cdFx0X3ZlY3Rvci5jb3B5KHRoaXMuZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcihkaXJlY3Rpb25EaXN0YW5jZSkuYWRkKHRoaXMub3JpZ2luKTtcblxuXHRcdHJldHVybiBfdmVjdG9yLmRpc3RhbmNlVG9TcXVhcmVkKHBvaW50KTtcblx0fVxuXG5cdGRpc3RhbmNlU3FUb1NlZ21lbnQodjAsIHYxLCBvcHRpb25hbFBvaW50T25SYXksIG9wdGlvbmFsUG9pbnRPblNlZ21lbnQpIHtcblx0XHQvLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9wbWpvbmlhay9HZW9tZXRyaWNUb29scy9ibG9iL21hc3Rlci9HVEVuZ2luZS9JbmNsdWRlL01hdGhlbWF0aWNzL0d0ZURpc3RSYXlTZWdtZW50Lmhcblx0XHQvLyBJdCByZXR1cm5zIHRoZSBtaW4gZGlzdGFuY2UgYmV0d2VlbiB0aGUgcmF5IGFuZCB0aGUgc2VnbWVudFxuXHRcdC8vIGRlZmluZWQgYnkgdjAgYW5kIHYxXG5cdFx0Ly8gSXQgY2FuIGFsc28gc2V0IHR3byBvcHRpb25hbCB0YXJnZXRzIDpcblx0XHQvLyAtIFRoZSBjbG9zZXN0IHBvaW50IG9uIHRoZSByYXlcblx0XHQvLyAtIFRoZSBjbG9zZXN0IHBvaW50IG9uIHRoZSBzZWdtZW50XG5cdFx0X3NlZ0NlbnRlci5jb3B5KHYwKS5hZGQodjEpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG5cblx0XHRfc2VnRGlyLmNvcHkodjEpLnN1Yih2MCkubm9ybWFsaXplKCk7XG5cblx0XHRfZGlmZi5jb3B5KHRoaXMub3JpZ2luKS5zdWIoX3NlZ0NlbnRlcik7XG5cblx0XHRjb25zdCBzZWdFeHRlbnQgPSB2MC5kaXN0YW5jZVRvKHYxKSAqIDAuNTtcblx0XHRjb25zdCBhMDEgPSAtdGhpcy5kaXJlY3Rpb24uZG90KF9zZWdEaXIpO1xuXG5cdFx0Y29uc3QgYjAgPSBfZGlmZi5kb3QodGhpcy5kaXJlY3Rpb24pO1xuXG5cdFx0Y29uc3QgYjEgPSAtX2RpZmYuZG90KF9zZWdEaXIpO1xuXG5cdFx0Y29uc3QgYyA9IF9kaWZmLmxlbmd0aFNxKCk7XG5cblx0XHRjb25zdCBkZXQgPSBNYXRoLmFicygxIC0gYTAxICogYTAxKTtcblx0XHRsZXQgczAsIHMxLCBzcXJEaXN0LCBleHREZXQ7XG5cblx0XHRpZiAoZGV0ID4gMCkge1xuXHRcdFx0Ly8gVGhlIHJheSBhbmQgc2VnbWVudCBhcmUgbm90IHBhcmFsbGVsLlxuXHRcdFx0czAgPSBhMDEgKiBiMSAtIGIwO1xuXHRcdFx0czEgPSBhMDEgKiBiMCAtIGIxO1xuXHRcdFx0ZXh0RGV0ID0gc2VnRXh0ZW50ICogZGV0O1xuXG5cdFx0XHRpZiAoczAgPj0gMCkge1xuXHRcdFx0XHRpZiAoczEgPj0gLWV4dERldCkge1xuXHRcdFx0XHRcdGlmIChzMSA8PSBleHREZXQpIHtcblx0XHRcdFx0XHRcdC8vIHJlZ2lvbiAwXG5cdFx0XHRcdFx0XHQvLyBNaW5pbXVtIGF0IGludGVyaW9yIHBvaW50cyBvZiByYXkgYW5kIHNlZ21lbnQuXG5cdFx0XHRcdFx0XHRjb25zdCBpbnZEZXQgPSAxIC8gZGV0O1xuXHRcdFx0XHRcdFx0czAgKj0gaW52RGV0O1xuXHRcdFx0XHRcdFx0czEgKj0gaW52RGV0O1xuXHRcdFx0XHRcdFx0c3FyRGlzdCA9IHMwICogKHMwICsgYTAxICogczEgKyAyICogYjApICsgczEgKiAoYTAxICogczAgKyBzMSArIDIgKiBiMSkgKyBjO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyByZWdpb24gMVxuXHRcdFx0XHRcdFx0czEgPSBzZWdFeHRlbnQ7XG5cdFx0XHRcdFx0XHRzMCA9IE1hdGgubWF4KDAsIC0oYTAxICogczEgKyBiMCkpO1xuXHRcdFx0XHRcdFx0c3FyRGlzdCA9IC1zMCAqIHMwICsgczEgKiAoczEgKyAyICogYjEpICsgYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVnaW9uIDVcblx0XHRcdFx0XHRzMSA9IC1zZWdFeHRlbnQ7XG5cdFx0XHRcdFx0czAgPSBNYXRoLm1heCgwLCAtKGEwMSAqIHMxICsgYjApKTtcblx0XHRcdFx0XHRzcXJEaXN0ID0gLXMwICogczAgKyBzMSAqIChzMSArIDIgKiBiMSkgKyBjO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoczEgPD0gLWV4dERldCkge1xuXHRcdFx0XHRcdC8vIHJlZ2lvbiA0XG5cdFx0XHRcdFx0czAgPSBNYXRoLm1heCgwLCAtKC1hMDEgKiBzZWdFeHRlbnQgKyBiMCkpO1xuXHRcdFx0XHRcdHMxID0gczAgPiAwID8gLXNlZ0V4dGVudCA6IE1hdGgubWluKE1hdGgubWF4KC1zZWdFeHRlbnQsIC1iMSksIHNlZ0V4dGVudCk7XG5cdFx0XHRcdFx0c3FyRGlzdCA9IC1zMCAqIHMwICsgczEgKiAoczEgKyAyICogYjEpICsgYztcblx0XHRcdFx0fSBlbHNlIGlmIChzMSA8PSBleHREZXQpIHtcblx0XHRcdFx0XHQvLyByZWdpb24gM1xuXHRcdFx0XHRcdHMwID0gMDtcblx0XHRcdFx0XHRzMSA9IE1hdGgubWluKE1hdGgubWF4KC1zZWdFeHRlbnQsIC1iMSksIHNlZ0V4dGVudCk7XG5cdFx0XHRcdFx0c3FyRGlzdCA9IHMxICogKHMxICsgMiAqIGIxKSArIGM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVnaW9uIDJcblx0XHRcdFx0XHRzMCA9IE1hdGgubWF4KDAsIC0oYTAxICogc2VnRXh0ZW50ICsgYjApKTtcblx0XHRcdFx0XHRzMSA9IHMwID4gMCA/IHNlZ0V4dGVudCA6IE1hdGgubWluKE1hdGgubWF4KC1zZWdFeHRlbnQsIC1iMSksIHNlZ0V4dGVudCk7XG5cdFx0XHRcdFx0c3FyRGlzdCA9IC1zMCAqIHMwICsgczEgKiAoczEgKyAyICogYjEpICsgYztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBSYXkgYW5kIHNlZ21lbnQgYXJlIHBhcmFsbGVsLlxuXHRcdFx0czEgPSBhMDEgPiAwID8gLXNlZ0V4dGVudCA6IHNlZ0V4dGVudDtcblx0XHRcdHMwID0gTWF0aC5tYXgoMCwgLShhMDEgKiBzMSArIGIwKSk7XG5cdFx0XHRzcXJEaXN0ID0gLXMwICogczAgKyBzMSAqIChzMSArIDIgKiBiMSkgKyBjO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25hbFBvaW50T25SYXkpIHtcblx0XHRcdG9wdGlvbmFsUG9pbnRPblJheS5jb3B5KHRoaXMuZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcihzMCkuYWRkKHRoaXMub3JpZ2luKTtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9uYWxQb2ludE9uU2VnbWVudCkge1xuXHRcdFx0b3B0aW9uYWxQb2ludE9uU2VnbWVudC5jb3B5KF9zZWdEaXIpLm11bHRpcGx5U2NhbGFyKHMxKS5hZGQoX3NlZ0NlbnRlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNxckRpc3Q7XG5cdH1cblxuXHRpbnRlcnNlY3RTcGhlcmUoc3BoZXJlLCB0YXJnZXQgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0X3ZlY3Rvci5zdWJWZWN0b3JzKHNwaGVyZS5jZW50ZXIsIHRoaXMub3JpZ2luKTtcblxuXHRcdGNvbnN0IHRjYSA9IF92ZWN0b3IuZG90KHRoaXMuZGlyZWN0aW9uKTtcblxuXHRcdGNvbnN0IGQyID0gX3ZlY3Rvci5kb3QoX3ZlY3RvcikgLSB0Y2EgKiB0Y2E7XG5cdFx0Y29uc3QgcmFkaXVzMiA9IHNwaGVyZS5yYWRpdXMgKiBzcGhlcmUucmFkaXVzO1xuXHRcdGlmIChkMiA+IHJhZGl1czIpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHRoYyA9IE1hdGguc3FydChyYWRpdXMyIC0gZDIpOyAvLyB0MCA9IGZpcnN0IGludGVyc2VjdCBwb2ludCAtIGVudHJhbmNlIG9uIGZyb250IG9mIHNwaGVyZVxuXG5cdFx0Y29uc3QgdDAgPSB0Y2EgLSB0aGM7IC8vIHQxID0gc2Vjb25kIGludGVyc2VjdCBwb2ludCAtIGV4aXQgcG9pbnQgb24gYmFjayBvZiBzcGhlcmVcblxuXHRcdGNvbnN0IHQxID0gdGNhICsgdGhjOyAvLyB0ZXN0IHRvIHNlZSBpZiBib3RoIHQwIGFuZCB0MSBhcmUgYmVoaW5kIHRoZSByYXkgLSBpZiBzbywgcmV0dXJuIG51bGxcblxuXHRcdGlmICh0MCA8IDAgJiYgdDEgPCAwKSByZXR1cm4gbnVsbDsgLy8gdGVzdCB0byBzZWUgaWYgdDAgaXMgYmVoaW5kIHRoZSByYXk6XG5cdFx0Ly8gaWYgaXQgaXMsIHRoZSByYXkgaXMgaW5zaWRlIHRoZSBzcGhlcmUsIHNvIHJldHVybiB0aGUgc2Vjb25kIGV4aXQgcG9pbnQgc2NhbGVkIGJ5IHQxLFxuXHRcdC8vIGluIG9yZGVyIHRvIGFsd2F5cyByZXR1cm4gYW4gaW50ZXJzZWN0IHBvaW50IHRoYXQgaXMgaW4gZnJvbnQgb2YgdGhlIHJheS5cblxuXHRcdGlmICh0MCA8IDApIHJldHVybiB0aGlzLmF0KHQxLCB0YXJnZXQpOyAvLyBlbHNlIHQwIGlzIGluIGZyb250IG9mIHRoZSByYXksIHNvIHJldHVybiB0aGUgZmlyc3QgY29sbGlzaW9uIHBvaW50IHNjYWxlZCBieSB0MFxuXG5cdFx0cmV0dXJuIHRoaXMuYXQodDAsIHRhcmdldCk7XG5cdH1cblxuXHRpbnRlcnNlY3RzU3BoZXJlKHNwaGVyZSkge1xuXHRcdHJldHVybiB0aGlzLmRpc3RhbmNlU3FUb1BvaW50KHNwaGVyZS5jZW50ZXIpIDw9IHNwaGVyZS5yYWRpdXMgKiBzcGhlcmUucmFkaXVzO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1BsYW5lKHBsYW5lKSB7XG5cdFx0Y29uc3QgZGVub21pbmF0b3IgPSBwbGFuZS5ub3JtYWwuZG90KHRoaXMuZGlyZWN0aW9uKTtcblxuXHRcdGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuXHRcdFx0Ly8gbGluZSBpcyBjb3BsYW5hciwgcmV0dXJuIG9yaWdpblxuXHRcdFx0aWYgKHBsYW5lLmRpc3RhbmNlVG9Qb2ludCh0aGlzLm9yaWdpbikgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9IC8vIE51bGwgaXMgcHJlZmVyYWJsZSB0byB1bmRlZmluZWQgc2luY2UgdW5kZWZpbmVkIG1lYW5zLi4uLiBpdCBpcyB1bmRlZmluZWRcblxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCB0ID0gLSh0aGlzLm9yaWdpbi5kb3QocGxhbmUubm9ybWFsKSArIHBsYW5lLmNvbnN0YW50KSAvIGRlbm9taW5hdG9yOyAvLyBSZXR1cm4gaWYgdGhlIHJheSBuZXZlciBpbnRlcnNlY3RzIHRoZSBwbGFuZVxuXG5cdFx0cmV0dXJuIHQgPj0gMCA/IHQgOiBudWxsO1xuXHR9XG5cblx0aW50ZXJzZWN0UGxhbmUocGxhbmUsIHRhcmdldCkge1xuXHRcdGNvbnN0IHQgPSB0aGlzLmRpc3RhbmNlVG9QbGFuZShwbGFuZSk7XG5cblx0XHRpZiAodCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuYXQodCwgdGFyZ2V0KTtcblx0fVxuXG5cdGludGVyc2VjdHNQbGFuZShwbGFuZSkge1xuXHRcdC8vIGNoZWNrIGlmIHRoZSByYXkgbGllcyBvbiB0aGUgcGxhbmUgZmlyc3Rcblx0XHRjb25zdCBkaXN0VG9Qb2ludCA9IHBsYW5lLmRpc3RhbmNlVG9Qb2ludCh0aGlzLm9yaWdpbik7XG5cblx0XHRpZiAoZGlzdFRvUG9pbnQgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlbm9taW5hdG9yID0gcGxhbmUubm9ybWFsLmRvdCh0aGlzLmRpcmVjdGlvbik7XG5cblx0XHRpZiAoZGVub21pbmF0b3IgKiBkaXN0VG9Qb2ludCA8IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gLy8gcmF5IG9yaWdpbiBpcyBiZWhpbmQgdGhlIHBsYW5lIChhbmQgaXMgcG9pbnRpbmcgYmVoaW5kIGl0KVxuXG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpbnRlcnNlY3RCb3goYm94LCB0YXJnZXQpIHtcblx0XHRsZXQgdG1pbiwgdG1heCwgdHltaW4sIHR5bWF4LCB0em1pbiwgdHptYXg7XG5cdFx0Y29uc3QgaW52ZGlyeCA9IDEgLyB0aGlzLmRpcmVjdGlvbi54LFxuXHRcdFx0XHRcdGludmRpcnkgPSAxIC8gdGhpcy5kaXJlY3Rpb24ueSxcblx0XHRcdFx0XHRpbnZkaXJ6ID0gMSAvIHRoaXMuZGlyZWN0aW9uLno7XG5cdFx0Y29uc3Qgb3JpZ2luID0gdGhpcy5vcmlnaW47XG5cblx0XHRpZiAoaW52ZGlyeCA+PSAwKSB7XG5cdFx0XHR0bWluID0gKGJveC5taW4ueCAtIG9yaWdpbi54KSAqIGludmRpcng7XG5cdFx0XHR0bWF4ID0gKGJveC5tYXgueCAtIG9yaWdpbi54KSAqIGludmRpcng7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRtaW4gPSAoYm94Lm1heC54IC0gb3JpZ2luLngpICogaW52ZGlyeDtcblx0XHRcdHRtYXggPSAoYm94Lm1pbi54IC0gb3JpZ2luLngpICogaW52ZGlyeDtcblx0XHR9XG5cblx0XHRpZiAoaW52ZGlyeSA+PSAwKSB7XG5cdFx0XHR0eW1pbiA9IChib3gubWluLnkgLSBvcmlnaW4ueSkgKiBpbnZkaXJ5O1xuXHRcdFx0dHltYXggPSAoYm94Lm1heC55IC0gb3JpZ2luLnkpICogaW52ZGlyeTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHltaW4gPSAoYm94Lm1heC55IC0gb3JpZ2luLnkpICogaW52ZGlyeTtcblx0XHRcdHR5bWF4ID0gKGJveC5taW4ueSAtIG9yaWdpbi55KSAqIGludmRpcnk7XG5cdFx0fVxuXG5cdFx0aWYgKHRtaW4gPiB0eW1heCB8fCB0eW1pbiA+IHRtYXgpIHJldHVybiBudWxsOyAvLyBUaGVzZSBsaW5lcyBhbHNvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0bWluIG9yIHRtYXggaXMgTmFOXG5cdFx0Ly8gKHJlc3VsdCBvZiAwICogSW5maW5pdHkpLiB4ICE9PSB4IHJldHVybnMgdHJ1ZSBpZiB4IGlzIE5hTlxuXG5cdFx0aWYgKHR5bWluID4gdG1pbiB8fCB0bWluICE9PSB0bWluKSB0bWluID0gdHltaW47XG5cdFx0aWYgKHR5bWF4IDwgdG1heCB8fCB0bWF4ICE9PSB0bWF4KSB0bWF4ID0gdHltYXg7XG5cblx0XHRpZiAoaW52ZGlyeiA+PSAwKSB7XG5cdFx0XHR0em1pbiA9IChib3gubWluLnogLSBvcmlnaW4ueikgKiBpbnZkaXJ6O1xuXHRcdFx0dHptYXggPSAoYm94Lm1heC56IC0gb3JpZ2luLnopICogaW52ZGlyejtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHptaW4gPSAoYm94Lm1heC56IC0gb3JpZ2luLnopICogaW52ZGlyejtcblx0XHRcdHR6bWF4ID0gKGJveC5taW4ueiAtIG9yaWdpbi56KSAqIGludmRpcno7XG5cdFx0fVxuXG5cdFx0aWYgKHRtaW4gPiB0em1heCB8fCB0em1pbiA+IHRtYXgpIHJldHVybiBudWxsO1xuXHRcdGlmICh0em1pbiA+IHRtaW4gfHwgdG1pbiAhPT0gdG1pbikgdG1pbiA9IHR6bWluO1xuXHRcdGlmICh0em1heCA8IHRtYXggfHwgdG1heCAhPT0gdG1heCkgdG1heCA9IHR6bWF4OyAvL3JldHVybiBwb2ludCBjbG9zZXN0IHRvIHRoZSByYXkgKHBvc2l0aXZlIHNpZGUpXG5cblx0XHRpZiAodG1heCA8IDApIHJldHVybiBudWxsO1xuXHRcdHJldHVybiB0aGlzLmF0KHRtaW4gPj0gMCA/IHRtaW4gOiB0bWF4LCB0YXJnZXQpO1xuXHR9XG5cblx0aW50ZXJzZWN0c0JveChib3gpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcnNlY3RCb3goYm94LCBfdmVjdG9yKSAhPT0gbnVsbDtcblx0fVxuXG5cdGludGVyc2VjdFRyaWFuZ2xlKGEsIGIsIGMsIGJhY2tmYWNlQ3VsbGluZywgdGFyZ2V0KSB7XG5cdFx0Ly8gQ29tcHV0ZSB0aGUgb2Zmc2V0IG9yaWdpbiwgZWRnZXMsIGFuZCBub3JtYWwuXG5cdFx0Ly8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcG1qb25pYWsvR2VvbWV0cmljVG9vbHMvYmxvYi9tYXN0ZXIvR1RFbmdpbmUvSW5jbHVkZS9NYXRoZW1hdGljcy9HdGVJbnRyUmF5M1RyaWFuZ2xlMy5oXG5cdFx0X2VkZ2UxLnN1YlZlY3RvcnMoYiwgYSk7XG5cblx0XHRfZWRnZTIuc3ViVmVjdG9ycyhjLCBhKTtcblxuXHRcdF9ub3JtYWwuY3Jvc3NWZWN0b3JzKF9lZGdlMSwgX2VkZ2UyKTsgLy8gU29sdmUgUSArIHQqRCA9IGIxKkUxICsgYjIqRTIgKFEgPSBrRGlmZiwgRCA9IHJheSBkaXJlY3Rpb24sXG5cdFx0Ly8gRTEgPSBrRWRnZTEsIEUyID0ga0VkZ2UyLCBOID0gQ3Jvc3MoRTEsRTIpKSBieVxuXHRcdC8vXHQgfERvdChELE4pfCpiMSA9IHNpZ24oRG90KEQsTikpKkRvdChELENyb3NzKFEsRTIpKVxuXHRcdC8vXHQgfERvdChELE4pfCpiMiA9IHNpZ24oRG90KEQsTikpKkRvdChELENyb3NzKEUxLFEpKVxuXHRcdC8vXHQgfERvdChELE4pfCp0ID0gLXNpZ24oRG90KEQsTikpKkRvdChRLE4pXG5cblxuXHRcdGxldCBEZE4gPSB0aGlzLmRpcmVjdGlvbi5kb3QoX25vcm1hbCk7XG5cdFx0bGV0IHNpZ247XG5cblx0XHRpZiAoRGROID4gMCkge1xuXHRcdFx0aWYgKGJhY2tmYWNlQ3VsbGluZykgcmV0dXJuIG51bGw7XG5cdFx0XHRzaWduID0gMTtcblx0XHR9IGVsc2UgaWYgKERkTiA8IDApIHtcblx0XHRcdHNpZ24gPSAtMTtcblx0XHRcdERkTiA9IC1EZE47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdF9kaWZmLnN1YlZlY3RvcnModGhpcy5vcmlnaW4sIGEpO1xuXG5cdFx0Y29uc3QgRGRReEUyID0gc2lnbiAqIHRoaXMuZGlyZWN0aW9uLmRvdChfZWRnZTIuY3Jvc3NWZWN0b3JzKF9kaWZmLCBfZWRnZTIpKTsgLy8gYjEgPCAwLCBubyBpbnRlcnNlY3Rpb25cblxuXHRcdGlmIChEZFF4RTIgPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBEZEUxeFEgPSBzaWduICogdGhpcy5kaXJlY3Rpb24uZG90KF9lZGdlMS5jcm9zcyhfZGlmZikpOyAvLyBiMiA8IDAsIG5vIGludGVyc2VjdGlvblxuXG5cdFx0aWYgKERkRTF4USA8IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gLy8gYjErYjIgPiAxLCBubyBpbnRlcnNlY3Rpb25cblxuXG5cdFx0aWYgKERkUXhFMiArIERkRTF4USA+IERkTikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSAvLyBMaW5lIGludGVyc2VjdHMgdHJpYW5nbGUsIGNoZWNrIGlmIHJheSBkb2VzLlxuXG5cblx0XHRjb25zdCBRZE4gPSAtc2lnbiAqIF9kaWZmLmRvdChfbm9ybWFsKTsgLy8gdCA8IDAsIG5vIGludGVyc2VjdGlvblxuXG5cblx0XHRpZiAoUWROIDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSAvLyBSYXkgaW50ZXJzZWN0cyB0cmlhbmdsZS5cblxuXG5cdFx0cmV0dXJuIHRoaXMuYXQoUWROIC8gRGROLCB0YXJnZXQpO1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG1hdHJpeDQpIHtcblx0XHR0aGlzLm9yaWdpbi5hcHBseU1hdHJpeDQobWF0cml4NCk7XG5cdFx0dGhpcy5kaXJlY3Rpb24udHJhbnNmb3JtRGlyZWN0aW9uKG1hdHJpeDQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHJheSkge1xuXHRcdHJldHVybiByYXkub3JpZ2luLmVxdWFscyh0aGlzLm9yaWdpbikgJiYgcmF5LmRpcmVjdGlvbi5lcXVhbHModGhpcy5kaXJlY3Rpb24pO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG59XG5cbmNvbnN0IF9ib3ggPSAvKkBfX1BVUkVfXyovbmV3IEJveDMoKTtcblxuY29uc3QgX3YxJDEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3RvRmFydGhlc3RQb2ludCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdG9Qb2ludCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jbGFzcyBTcGhlcmUge1xuXHRjb25zdHJ1Y3RvcihjZW50ZXIgPSBuZXcgVmVjdG9yMygpLCByYWRpdXMgPSAtMSkge1xuXHRcdHRoaXMuY2VudGVyID0gY2VudGVyO1xuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHR9XG5cblx0c2V0KGNlbnRlciwgcmFkaXVzKSB7XG5cdFx0dGhpcy5jZW50ZXIuY29weShjZW50ZXIpO1xuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVBvaW50cyhwb2ludHMsIG9wdGlvbmFsQ2VudGVyKSB7XG5cdFx0Y29uc3QgY2VudGVyID0gdGhpcy5jZW50ZXI7XG5cblx0XHRpZiAob3B0aW9uYWxDZW50ZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2VudGVyLmNvcHkob3B0aW9uYWxDZW50ZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYm94LnNldEZyb21Qb2ludHMocG9pbnRzKS5nZXRDZW50ZXIoY2VudGVyKTtcblx0XHR9XG5cblx0XHRsZXQgbWF4UmFkaXVzU3EgPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGlsID0gcG9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHRcdG1heFJhZGl1c1NxID0gTWF0aC5tYXgobWF4UmFkaXVzU3EsIGNlbnRlci5kaXN0YW5jZVRvU3F1YXJlZChwb2ludHNbaV0pKTtcblx0XHR9XG5cblx0XHR0aGlzLnJhZGl1cyA9IE1hdGguc3FydChtYXhSYWRpdXNTcSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KHNwaGVyZSkge1xuXHRcdHRoaXMuY2VudGVyLmNvcHkoc3BoZXJlLmNlbnRlcik7XG5cdFx0dGhpcy5yYWRpdXMgPSBzcGhlcmUucmFkaXVzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aXNFbXB0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5yYWRpdXMgPCAwO1xuXHR9XG5cblx0bWFrZUVtcHR5KCkge1xuXHRcdHRoaXMuY2VudGVyLnNldCgwLCAwLCAwKTtcblx0XHR0aGlzLnJhZGl1cyA9IC0xO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29udGFpbnNQb2ludChwb2ludCkge1xuXHRcdHJldHVybiBwb2ludC5kaXN0YW5jZVRvU3F1YXJlZCh0aGlzLmNlbnRlcikgPD0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcblx0fVxuXG5cdGRpc3RhbmNlVG9Qb2ludChwb2ludCkge1xuXHRcdHJldHVybiBwb2ludC5kaXN0YW5jZVRvKHRoaXMuY2VudGVyKSAtIHRoaXMucmFkaXVzO1xuXHR9XG5cblx0aW50ZXJzZWN0c1NwaGVyZShzcGhlcmUpIHtcblx0XHRjb25zdCByYWRpdXNTdW0gPSB0aGlzLnJhZGl1cyArIHNwaGVyZS5yYWRpdXM7XG5cdFx0cmV0dXJuIHNwaGVyZS5jZW50ZXIuZGlzdGFuY2VUb1NxdWFyZWQodGhpcy5jZW50ZXIpIDw9IHJhZGl1c1N1bSAqIHJhZGl1c1N1bTtcblx0fVxuXG5cdGludGVyc2VjdHNCb3goYm94KSB7XG5cdFx0cmV0dXJuIGJveC5pbnRlcnNlY3RzU3BoZXJlKHRoaXMpO1xuXHR9XG5cblx0aW50ZXJzZWN0c1BsYW5lKHBsYW5lKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHBsYW5lLmRpc3RhbmNlVG9Qb2ludCh0aGlzLmNlbnRlcikpIDw9IHRoaXMucmFkaXVzO1xuXHR9XG5cblx0Y2xhbXBQb2ludChwb2ludCwgdGFyZ2V0KSB7XG5cdFx0Y29uc3QgZGVsdGFMZW5ndGhTcSA9IHRoaXMuY2VudGVyLmRpc3RhbmNlVG9TcXVhcmVkKHBvaW50KTtcblx0XHR0YXJnZXQuY29weShwb2ludCk7XG5cblx0XHRpZiAoZGVsdGFMZW5ndGhTcSA+IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpIHtcblx0XHRcdHRhcmdldC5zdWIodGhpcy5jZW50ZXIpLm5vcm1hbGl6ZSgpO1xuXHRcdFx0dGFyZ2V0Lm11bHRpcGx5U2NhbGFyKHRoaXMucmFkaXVzKS5hZGQodGhpcy5jZW50ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRnZXRCb3VuZGluZ0JveCh0YXJnZXQpIHtcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdC8vIEVtcHR5IHNwaGVyZSBwcm9kdWNlcyBlbXB0eSBib3VuZGluZyBib3hcblx0XHRcdHRhcmdldC5tYWtlRW1wdHkoKTtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LnNldCh0aGlzLmNlbnRlciwgdGhpcy5jZW50ZXIpO1xuXHRcdHRhcmdldC5leHBhbmRCeVNjYWxhcih0aGlzLnJhZGl1cyk7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtYXRyaXgpIHtcblx0XHR0aGlzLmNlbnRlci5hcHBseU1hdHJpeDQobWF0cml4KTtcblx0XHR0aGlzLnJhZGl1cyA9IHRoaXMucmFkaXVzICogbWF0cml4LmdldE1heFNjYWxlT25BeGlzKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmFuc2xhdGUob2Zmc2V0KSB7XG5cdFx0dGhpcy5jZW50ZXIuYWRkKG9mZnNldCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHBhbmRCeVBvaW50KHBvaW50KSB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aGlzLmNlbnRlci5jb3B5KHBvaW50KTtcblx0XHRcdHRoaXMucmFkaXVzID0gMDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vanVqL01hdGhHZW9MaWIvYmxvYi8yOTQwYjk5Yjk5Y2ZlNTc1ZGQ0NTEwM2VmMjBmNDAxOWRlZTE1YjU0L3NyYy9HZW9tZXRyeS9TcGhlcmUuY3BwI0w2NDktTDY3MVxuXG5cblx0XHRfdG9Qb2ludC5zdWJWZWN0b3JzKHBvaW50LCB0aGlzLmNlbnRlcik7XG5cblx0XHRjb25zdCBsZW5ndGhTcSA9IF90b1BvaW50Lmxlbmd0aFNxKCk7XG5cblx0XHRpZiAobGVuZ3RoU3EgPiB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQobGVuZ3RoU3EpO1xuXHRcdFx0Y29uc3QgbWlzc2luZ1JhZGl1c0hhbGYgPSAobGVuZ3RoIC0gdGhpcy5yYWRpdXMpICogMC41OyAvLyBOdWRnZSB0aGlzIHNwaGVyZSB0b3dhcmRzIHRoZSB0YXJnZXQgcG9pbnQuIEFkZCBoYWxmIHRoZSBtaXNzaW5nIGRpc3RhbmNlIHRvIHJhZGl1cyxcblx0XHRcdC8vIGFuZCB0aGUgb3RoZXIgaGFsZiB0byBwb3NpdGlvbi4gVGhpcyBnaXZlcyBhIHRpZ2h0ZXIgZW5jbG9zdXJlLCBpbnN0ZWFkIG9mIGlmXG5cdFx0XHQvLyB0aGUgd2hvbGUgbWlzc2luZyBkaXN0YW5jZSB3ZXJlIGp1c3QgYWRkZWQgdG8gcmFkaXVzLlxuXG5cdFx0XHR0aGlzLmNlbnRlci5hZGQoX3RvUG9pbnQubXVsdGlwbHlTY2FsYXIobWlzc2luZ1JhZGl1c0hhbGYgLyBsZW5ndGgpKTtcblx0XHRcdHRoaXMucmFkaXVzICs9IG1pc3NpbmdSYWRpdXNIYWxmO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dW5pb24oc3BoZXJlKSB7XG5cdFx0Ly8gaGFuZGxlIGVtcHR5IHNwaGVyZSBjYXNlc1xuXHRcdGlmIChzcGhlcmUuaXNFbXB0eSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0dGhpcy5jb3B5KHNwaGVyZSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IC8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2p1ai9NYXRoR2VvTGliL2Jsb2IvMjk0MGI5OWI5OWNmZTU3NWRkNDUxMDNlZjIwZjQwMTlkZWUxNWI1NC9zcmMvR2VvbWV0cnkvU3BoZXJlLmNwcCNMNzU5LUw3Njlcblx0XHQvLyBUbyBlbmNsb3NlIGFub3RoZXIgc3BoZXJlIGludG8gdGhpcyBzcGhlcmUsIHdlIG9ubHkgbmVlZCB0byBlbmNsb3NlIHR3byBwb2ludHM6XG5cdFx0Ly8gMSkgRW5jbG9zZSB0aGUgZmFydGhlc3QgcG9pbnQgb24gdGhlIG90aGVyIHNwaGVyZSBpbnRvIHRoaXMgc3BoZXJlLlxuXHRcdC8vIDIpIEVuY2xvc2UgdGhlIG9wcG9zaXRlIHBvaW50IG9mIHRoZSBmYXJ0aGVzdCBwb2ludCBpbnRvIHRoaXMgc3BoZXJlLlxuXG5cblx0XHRpZiAodGhpcy5jZW50ZXIuZXF1YWxzKHNwaGVyZS5jZW50ZXIpID09PSB0cnVlKSB7XG5cdFx0XHRfdG9GYXJ0aGVzdFBvaW50LnNldCgwLCAwLCAxKS5tdWx0aXBseVNjYWxhcihzcGhlcmUucmFkaXVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RvRmFydGhlc3RQb2ludC5zdWJWZWN0b3JzKHNwaGVyZS5jZW50ZXIsIHRoaXMuY2VudGVyKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihzcGhlcmUucmFkaXVzKTtcblx0XHR9XG5cblx0XHR0aGlzLmV4cGFuZEJ5UG9pbnQoX3YxJDEuY29weShzcGhlcmUuY2VudGVyKS5hZGQoX3RvRmFydGhlc3RQb2ludCkpO1xuXHRcdHRoaXMuZXhwYW5kQnlQb2ludChfdjEkMS5jb3B5KHNwaGVyZS5jZW50ZXIpLnN1YihfdG9GYXJ0aGVzdFBvaW50KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMoc3BoZXJlKSB7XG5cdFx0cmV0dXJuIHNwaGVyZS5jZW50ZXIuZXF1YWxzKHRoaXMuY2VudGVyKSAmJiBzcGhlcmUucmFkaXVzID09PSB0aGlzLnJhZGl1cztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxufVxuXG4vKipcbiAqIFJlZjogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BoZXJpY2FsX2Nvb3JkaW5hdGVfc3lzdGVtXG4gKlxuICogVGhlIHBvbGFyIGFuZ2xlIChwaGkpIGlzIG1lYXN1cmVkIGZyb20gdGhlIHBvc2l0aXZlIHktYXhpcy4gVGhlIHBvc2l0aXZlIHktYXhpcyBpcyB1cC5cbiAqIFRoZSBhemltdXRoYWwgYW5nbGUgKHRoZXRhKSBpcyBtZWFzdXJlZCBmcm9tIHRoZSBwb3NpdGl2ZSB6LWF4aXMuXG4gKi9cblxuY2xhc3MgU3BoZXJpY2FsIHtcblx0Y29uc3RydWN0b3IocmFkaXVzID0gMSwgcGhpID0gMCwgdGhldGEgPSAwKSB7XG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cdFx0dGhpcy5waGkgPSBwaGk7IC8vIHBvbGFyIGFuZ2xlXG5cblx0XHR0aGlzLnRoZXRhID0gdGhldGE7IC8vIGF6aW11dGhhbCBhbmdsZVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXQocmFkaXVzLCBwaGksIHRoZXRhKSB7XG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cdFx0dGhpcy5waGkgPSBwaGk7XG5cdFx0dGhpcy50aGV0YSA9IHRoZXRhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShvdGhlcikge1xuXHRcdHRoaXMucmFkaXVzID0gb3RoZXIucmFkaXVzO1xuXHRcdHRoaXMucGhpID0gb3RoZXIucGhpO1xuXHRcdHRoaXMudGhldGEgPSBvdGhlci50aGV0YTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBFUFMgYW5kIFBJLUVQU1xuXG5cblx0bWFrZVNhZmUoKSB7XG5cdFx0Y29uc3QgRVBTID0gMC4wMDAwMDE7XG5cdFx0dGhpcy5waGkgPSBNYXRoLm1heChFUFMsIE1hdGgubWluKE1hdGguUEkgLSBFUFMsIHRoaXMucGhpKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tVmVjdG9yMyh2KSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbUNhcnRlc2lhbkNvb3Jkcyh2LngsIHYueSwgdi56KTtcblx0fVxuXG5cdHNldEZyb21DYXJ0ZXNpYW5Db29yZHMoeCwgeSwgeikge1xuXHRcdHRoaXMucmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cblx0XHRpZiAodGhpcy5yYWRpdXMgPT09IDApIHtcblx0XHRcdHRoaXMudGhldGEgPSAwO1xuXHRcdFx0dGhpcy5waGkgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRoZXRhID0gTWF0aC5hdGFuMih4LCB6KTtcblx0XHRcdHRoaXMucGhpID0gTWF0aC5hY29zKGNsYW1wKHkgLyB0aGlzLnJhZGl1cywgLTEsIDEpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxufVxuXG5jb25zdCBfdjAgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3YxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92MiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdjMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZhYiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmFjID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92YmMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZhcCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmJwID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92Y3AgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY2xhc3MgVHJpYW5nbGUge1xuXHRjb25zdHJ1Y3RvcihhID0gbmV3IFZlY3RvcjMoKSwgYiA9IG5ldyBWZWN0b3IzKCksIGMgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0dGhpcy5hID0gYTtcblx0XHR0aGlzLmIgPSBiO1xuXHRcdHRoaXMuYyA9IGM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Tm9ybWFsKGEsIGIsIGMsIHRhcmdldCkge1xuXHRcdHRhcmdldC5zdWJWZWN0b3JzKGMsIGIpO1xuXG5cdFx0X3YwLnN1YlZlY3RvcnMoYSwgYik7XG5cblx0XHR0YXJnZXQuY3Jvc3MoX3YwKTtcblx0XHRjb25zdCB0YXJnZXRMZW5ndGhTcSA9IHRhcmdldC5sZW5ndGhTcSgpO1xuXG5cdFx0aWYgKHRhcmdldExlbmd0aFNxID4gMCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5tdWx0aXBseVNjYWxhcigxIC8gTWF0aC5zcXJ0KHRhcmdldExlbmd0aFNxKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhcmdldC5zZXQoMCwgMCwgMCk7XG5cdH0gLy8gc3RhdGljL2luc3RhbmNlIG1ldGhvZCB0byBjYWxjdWxhdGUgYmFyeWNlbnRyaWMgY29vcmRpbmF0ZXNcblx0Ly8gYmFzZWQgb246IGh0dHA6Ly93d3cuYmxhY2twYXduLmNvbS90ZXh0cy9wb2ludGlucG9seS9kZWZhdWx0Lmh0bWxcblxuXG5cdHN0YXRpYyBnZXRCYXJ5Y29vcmQocG9pbnQsIGEsIGIsIGMsIHRhcmdldCkge1xuXHRcdF92MC5zdWJWZWN0b3JzKGMsIGEpO1xuXG5cdFx0X3YxLnN1YlZlY3RvcnMoYiwgYSk7XG5cblx0XHRfdjIuc3ViVmVjdG9ycyhwb2ludCwgYSk7XG5cblx0XHRjb25zdCBkb3QwMCA9IF92MC5kb3QoX3YwKTtcblxuXHRcdGNvbnN0IGRvdDAxID0gX3YwLmRvdChfdjEpO1xuXG5cdFx0Y29uc3QgZG90MDIgPSBfdjAuZG90KF92Mik7XG5cblx0XHRjb25zdCBkb3QxMSA9IF92MS5kb3QoX3YxKTtcblxuXHRcdGNvbnN0IGRvdDEyID0gX3YxLmRvdChfdjIpO1xuXG5cdFx0Y29uc3QgZGVub20gPSBkb3QwMCAqIGRvdDExIC0gZG90MDEgKiBkb3QwMTsgLy8gY29sbGluZWFyIG9yIHNpbmd1bGFyIHRyaWFuZ2xlXG5cblx0XHRpZiAoZGVub20gPT09IDApIHtcblx0XHRcdC8vIGFyYml0cmFyeSBsb2NhdGlvbiBvdXRzaWRlIG9mIHRyaWFuZ2xlP1xuXHRcdFx0Ly8gbm90IHN1cmUgaWYgdGhpcyBpcyB0aGUgYmVzdCBpZGVhLCBtYXliZSBzaG91bGQgYmUgcmV0dXJuaW5nIHVuZGVmaW5lZFxuXHRcdFx0cmV0dXJuIHRhcmdldC5zZXQoLTIsIC0xLCAtMSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52RGVub20gPSAxIC8gZGVub207XG5cdFx0Y29uc3QgdSA9IChkb3QxMSAqIGRvdDAyIC0gZG90MDEgKiBkb3QxMikgKiBpbnZEZW5vbTtcblx0XHRjb25zdCB2ID0gKGRvdDAwICogZG90MTIgLSBkb3QwMSAqIGRvdDAyKSAqIGludkRlbm9tOyAvLyBiYXJ5Y2VudHJpYyBjb29yZGluYXRlcyBtdXN0IGFsd2F5cyBzdW0gdG8gMVxuXG5cdFx0cmV0dXJuIHRhcmdldC5zZXQoMSAtIHUgLSB2LCB2LCB1KTtcblx0fVxuXG5cdHN0YXRpYyBjb250YWluc1BvaW50KHBvaW50LCBhLCBiLCBjKSB7XG5cdFx0dGhpcy5nZXRCYXJ5Y29vcmQocG9pbnQsIGEsIGIsIGMsIF92Myk7XG5cdFx0cmV0dXJuIF92My54ID49IDAgJiYgX3YzLnkgPj0gMCAmJiBfdjMueCArIF92My55IDw9IDE7XG5cdH1cblxuXHRzdGF0aWMgZ2V0VVYocG9pbnQsIHAxLCBwMiwgcDMsIHV2MSwgdXYyLCB1djMsIHRhcmdldCkge1xuXHRcdHRoaXMuZ2V0QmFyeWNvb3JkKHBvaW50LCBwMSwgcDIsIHAzLCBfdjMpO1xuXHRcdHRhcmdldC5zZXQoMCwgMCk7XG5cdFx0dGFyZ2V0LmFkZFNjYWxlZFZlY3Rvcih1djEsIF92My54KTtcblx0XHR0YXJnZXQuYWRkU2NhbGVkVmVjdG9yKHV2MiwgX3YzLnkpO1xuXHRcdHRhcmdldC5hZGRTY2FsZWRWZWN0b3IodXYzLCBfdjMueik7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdHN0YXRpYyBpc0Zyb250RmFjaW5nKGEsIGIsIGMsIGRpcmVjdGlvbikge1xuXHRcdF92MC5zdWJWZWN0b3JzKGMsIGIpO1xuXG5cdFx0X3YxLnN1YlZlY3RvcnMoYSwgYik7IC8vIHN0cmljdGx5IGZyb250IGZhY2luZ1xuXG5cblx0XHRyZXR1cm4gX3YwLmNyb3NzKF92MSkuZG90KGRpcmVjdGlvbikgPCAwID8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0c2V0KGEsIGIsIGMpIHtcblx0XHR0aGlzLmEuY29weShhKTtcblx0XHR0aGlzLmIuY29weShiKTtcblx0XHR0aGlzLmMuY29weShjKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Qb2ludHNBbmRJbmRpY2VzKHBvaW50cywgaTAsIGkxLCBpMikge1xuXHRcdHRoaXMuYS5jb3B5KHBvaW50c1tpMF0pO1xuXHRcdHRoaXMuYi5jb3B5KHBvaW50c1tpMV0pO1xuXHRcdHRoaXMuYy5jb3B5KHBvaW50c1tpMl0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vIHNldEZyb21BdHRyaWJ1dGVBbmRJbmRpY2VzKCBhdHRyaWJ1dGUsIGkwLCBpMSwgaTIgKSB7XG5cdC8vIFx0dGhpcy5hLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaTAgKTtcblx0Ly8gXHR0aGlzLmIuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpMSApO1xuXHQvLyBcdHRoaXMuYy5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGkyICk7XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxuXHRjb3B5KHRyaWFuZ2xlKSB7XG5cdFx0dGhpcy5hLmNvcHkodHJpYW5nbGUuYSk7XG5cdFx0dGhpcy5iLmNvcHkodHJpYW5nbGUuYik7XG5cdFx0dGhpcy5jLmNvcHkodHJpYW5nbGUuYyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRBcmVhKCkge1xuXHRcdF92MC5zdWJWZWN0b3JzKHRoaXMuYywgdGhpcy5iKTtcblxuXHRcdF92MS5zdWJWZWN0b3JzKHRoaXMuYSwgdGhpcy5iKTtcblxuXHRcdHJldHVybiBfdjAuY3Jvc3MoX3YxKS5sZW5ndGgoKSAqIDAuNTtcblx0fVxuXG5cdGdldE1pZHBvaW50KHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuYWRkVmVjdG9ycyh0aGlzLmEsIHRoaXMuYikuYWRkKHRoaXMuYykubXVsdGlwbHlTY2FsYXIoMSAvIDMpO1xuXHR9XG5cblx0Z2V0Tm9ybWFsKHRhcmdldCkge1xuXHRcdHJldHVybiBUcmlhbmdsZS5nZXROb3JtYWwodGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGFyZ2V0KTtcblx0fVxuXG5cdGdldFBsYW5lKHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuc2V0RnJvbUNvcGxhbmFyUG9pbnRzKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMpO1xuXHR9XG5cblx0Z2V0QmFyeWNvb3JkKHBvaW50LCB0YXJnZXQpIHtcblx0XHRyZXR1cm4gVHJpYW5nbGUuZ2V0QmFyeWNvb3JkKHBvaW50LCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0YXJnZXQpO1xuXHR9XG5cblx0Z2V0VVYocG9pbnQsIHV2MSwgdXYyLCB1djMsIHRhcmdldCkge1xuXHRcdHJldHVybiBUcmlhbmdsZS5nZXRVVihwb2ludCwgdGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdXYxLCB1djIsIHV2MywgdGFyZ2V0KTtcblx0fVxuXG5cdGNvbnRhaW5zUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gVHJpYW5nbGUuY29udGFpbnNQb2ludChwb2ludCwgdGhpcy5hLCB0aGlzLmIsIHRoaXMuYyk7XG5cdH1cblxuXHRpc0Zyb250RmFjaW5nKGRpcmVjdGlvbikge1xuXHRcdHJldHVybiBUcmlhbmdsZS5pc0Zyb250RmFjaW5nKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIGRpcmVjdGlvbik7XG5cdH1cblxuXHRpbnRlcnNlY3RzQm94KGJveCkge1xuXHRcdHJldHVybiBib3guaW50ZXJzZWN0c1RyaWFuZ2xlKHRoaXMpO1xuXHR9XG5cblx0Y2xvc2VzdFBvaW50VG9Qb2ludChwLCB0YXJnZXQpIHtcblx0XHRjb25zdCBhID0gdGhpcy5hLFxuXHRcdFx0XHRcdGIgPSB0aGlzLmIsXG5cdFx0XHRcdFx0YyA9IHRoaXMuYztcblx0XHRsZXQgdiwgdzsgLy8gYWxnb3JpdGhtIHRoYW5rcyB0byBSZWFsLVRpbWUgQ29sbGlzaW9uIERldGVjdGlvbiBieSBDaHJpc3RlciBFcmljc29uLFxuXHRcdC8vIHB1Ymxpc2hlZCBieSBNb3JnYW4gS2F1Zm1hbm4gUHVibGlzaGVycywgKGMpIDIwMDUgRWxzZXZpZXIgSW5jLixcblx0XHQvLyB1bmRlciB0aGUgYWNjb21wYW55aW5nIGxpY2Vuc2U7IHNlZSBjaGFwdGVyIDUuMS41IGZvciBkZXRhaWxlZCBleHBsYW5hdGlvbi5cblx0XHQvLyBiYXNpY2FsbHksIHdlJ3JlIGRpc3Rpbmd1aXNoaW5nIHdoaWNoIG9mIHRoZSB2b3Jvbm9pIHJlZ2lvbnMgb2YgdGhlIHRyaWFuZ2xlXG5cdFx0Ly8gdGhlIHBvaW50IGxpZXMgaW4gd2l0aCB0aGUgbWluaW11bSBhbW91bnQgb2YgcmVkdW5kYW50IGNvbXB1dGF0aW9uLlxuXG5cdFx0X3ZhYi5zdWJWZWN0b3JzKGIsIGEpO1xuXG5cdFx0X3ZhYy5zdWJWZWN0b3JzKGMsIGEpO1xuXG5cdFx0X3ZhcC5zdWJWZWN0b3JzKHAsIGEpO1xuXG5cdFx0Y29uc3QgZDEgPSBfdmFiLmRvdChfdmFwKTtcblxuXHRcdGNvbnN0IGQyID0gX3ZhYy5kb3QoX3ZhcCk7XG5cblx0XHRpZiAoZDEgPD0gMCAmJiBkMiA8PSAwKSB7XG5cdFx0XHQvLyB2ZXJ0ZXggcmVnaW9uIG9mIEE7IGJhcnljZW50cmljIGNvb3JkcyAoMSwgMCwgMClcblx0XHRcdHJldHVybiB0YXJnZXQuY29weShhKTtcblx0XHR9XG5cblx0XHRfdmJwLnN1YlZlY3RvcnMocCwgYik7XG5cblx0XHRjb25zdCBkMyA9IF92YWIuZG90KF92YnApO1xuXG5cdFx0Y29uc3QgZDQgPSBfdmFjLmRvdChfdmJwKTtcblxuXHRcdGlmIChkMyA+PSAwICYmIGQ0IDw9IGQzKSB7XG5cdFx0XHQvLyB2ZXJ0ZXggcmVnaW9uIG9mIEI7IGJhcnljZW50cmljIGNvb3JkcyAoMCwgMSwgMClcblx0XHRcdHJldHVybiB0YXJnZXQuY29weShiKTtcblx0XHR9XG5cblx0XHRjb25zdCB2YyA9IGQxICogZDQgLSBkMyAqIGQyO1xuXG5cdFx0aWYgKHZjIDw9IDAgJiYgZDEgPj0gMCAmJiBkMyA8PSAwKSB7XG5cdFx0XHR2ID0gZDEgLyAoZDEgLSBkMyk7IC8vIGVkZ2UgcmVnaW9uIG9mIEFCOyBiYXJ5Y2VudHJpYyBjb29yZHMgKDEtdiwgdiwgMClcblxuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGEpLmFkZFNjYWxlZFZlY3RvcihfdmFiLCB2KTtcblx0XHR9XG5cblx0XHRfdmNwLnN1YlZlY3RvcnMocCwgYyk7XG5cblx0XHRjb25zdCBkNSA9IF92YWIuZG90KF92Y3ApO1xuXG5cdFx0Y29uc3QgZDYgPSBfdmFjLmRvdChfdmNwKTtcblxuXHRcdGlmIChkNiA+PSAwICYmIGQ1IDw9IGQ2KSB7XG5cdFx0XHQvLyB2ZXJ0ZXggcmVnaW9uIG9mIEM7IGJhcnljZW50cmljIGNvb3JkcyAoMCwgMCwgMSlcblx0XHRcdHJldHVybiB0YXJnZXQuY29weShjKTtcblx0XHR9XG5cblx0XHRjb25zdCB2YiA9IGQ1ICogZDIgLSBkMSAqIGQ2O1xuXG5cdFx0aWYgKHZiIDw9IDAgJiYgZDIgPj0gMCAmJiBkNiA8PSAwKSB7XG5cdFx0XHR3ID0gZDIgLyAoZDIgLSBkNik7IC8vIGVkZ2UgcmVnaW9uIG9mIEFDOyBiYXJ5Y2VudHJpYyBjb29yZHMgKDEtdywgMCwgdylcblxuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGEpLmFkZFNjYWxlZFZlY3RvcihfdmFjLCB3KTtcblx0XHR9XG5cblx0XHRjb25zdCB2YSA9IGQzICogZDYgLSBkNSAqIGQ0O1xuXG5cdFx0aWYgKHZhIDw9IDAgJiYgZDQgLSBkMyA+PSAwICYmIGQ1IC0gZDYgPj0gMCkge1xuXHRcdFx0X3ZiYy5zdWJWZWN0b3JzKGMsIGIpO1xuXG5cdFx0XHR3ID0gKGQ0IC0gZDMpIC8gKGQ0IC0gZDMgKyAoZDUgLSBkNikpOyAvLyBlZGdlIHJlZ2lvbiBvZiBCQzsgYmFyeWNlbnRyaWMgY29vcmRzICgwLCAxLXcsIHcpXG5cblx0XHRcdHJldHVybiB0YXJnZXQuY29weShiKS5hZGRTY2FsZWRWZWN0b3IoX3ZiYywgdyk7IC8vIGVkZ2UgcmVnaW9uIG9mIEJDXG5cdFx0fSAvLyBmYWNlIHJlZ2lvblxuXG5cblx0XHRjb25zdCBkZW5vbSA9IDEgLyAodmEgKyB2YiArIHZjKTsgLy8gdSA9IHZhICogZGVub21cblxuXHRcdHYgPSB2YiAqIGRlbm9tO1xuXHRcdHcgPSB2YyAqIGRlbm9tO1xuXHRcdHJldHVybiB0YXJnZXQuY29weShhKS5hZGRTY2FsZWRWZWN0b3IoX3ZhYiwgdikuYWRkU2NhbGVkVmVjdG9yKF92YWMsIHcpO1xuXHR9XG5cblx0ZXF1YWxzKHRyaWFuZ2xlKSB7XG5cdFx0cmV0dXJuIHRyaWFuZ2xlLmEuZXF1YWxzKHRoaXMuYSkgJiYgdHJpYW5nbGUuYi5lcXVhbHModGhpcy5iKSAmJiB0cmlhbmdsZS5jLmVxdWFscyh0aGlzLmMpO1xuXHR9XG5cbn1cblxuY2xhc3MgVmVjdG9yNCB7XG5cdGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAxKSB7XG5cdFx0VmVjdG9yNC5wcm90b3R5cGUuaXNWZWN0b3I0ID0gdHJ1ZTtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy56ID0gejtcblx0XHR0aGlzLncgPSB3O1xuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLno7XG5cdH1cblxuXHRzZXQgd2lkdGgodmFsdWUpIHtcblx0XHR0aGlzLnogPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudztcblx0fVxuXG5cdHNldCBoZWlnaHQodmFsdWUpIHtcblx0XHR0aGlzLncgPSB2YWx1ZTtcblx0fVxuXG5cdHNldCh4LCB5LCB6LCB3KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMueiA9IHo7XG5cdFx0dGhpcy53ID0gdztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnggPSBzY2FsYXI7XG5cdFx0dGhpcy55ID0gc2NhbGFyO1xuXHRcdHRoaXMueiA9IHNjYWxhcjtcblx0XHR0aGlzLncgPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRYKHgpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0WSh5KSB7XG5cdFx0dGhpcy55ID0geTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFooeikge1xuXHRcdHRoaXMueiA9IHo7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRXKHcpIHtcblx0XHR0aGlzLncgPSB3O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0dGhpcy54ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMueSA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLnogPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy53ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldENvbXBvbmVudChpbmRleCkge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmV0dXJuIHRoaXMueDtcblxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy55O1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHJldHVybiB0aGlzLno7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMudyk7XG5cdH1cblxuXHRjb3B5KHYpIHtcblx0XHR0aGlzLnggPSB2Lng7XG5cdFx0dGhpcy55ID0gdi55O1xuXHRcdHRoaXMueiA9IHYuejtcblx0XHR0aGlzLncgPSB2LncgIT09IHVuZGVmaW5lZCA/IHYudyA6IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGQodikge1xuXHRcdHRoaXMueCArPSB2Lng7XG5cdFx0dGhpcy55ICs9IHYueTtcblx0XHR0aGlzLnogKz0gdi56O1xuXHRcdHRoaXMudyArPSB2Lnc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsYXIocykge1xuXHRcdHRoaXMueCArPSBzO1xuXHRcdHRoaXMueSArPSBzO1xuXHRcdHRoaXMueiArPSBzO1xuXHRcdHRoaXMudyArPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkVmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54ICsgYi54O1xuXHRcdHRoaXMueSA9IGEueSArIGIueTtcblx0XHR0aGlzLnogPSBhLnogKyBiLno7XG5cdFx0dGhpcy53ID0gYS53ICsgYi53O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGVkVmVjdG9yKHYsIHMpIHtcblx0XHR0aGlzLnggKz0gdi54ICogcztcblx0XHR0aGlzLnkgKz0gdi55ICogcztcblx0XHR0aGlzLnogKz0gdi56ICogcztcblx0XHR0aGlzLncgKz0gdi53ICogcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1Yih2KSB7XG5cdFx0dGhpcy54IC09IHYueDtcblx0XHR0aGlzLnkgLT0gdi55O1xuXHRcdHRoaXMueiAtPSB2Lno7XG5cdFx0dGhpcy53IC09IHYudztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1YlNjYWxhcihzKSB7XG5cdFx0dGhpcy54IC09IHM7XG5cdFx0dGhpcy55IC09IHM7XG5cdFx0dGhpcy56IC09IHM7XG5cdFx0dGhpcy53IC09IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWJWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggLSBiLng7XG5cdFx0dGhpcy55ID0gYS55IC0gYi55O1xuXHRcdHRoaXMueiA9IGEueiAtIGIuejtcblx0XHR0aGlzLncgPSBhLncgLSBiLnc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseSh2KSB7XG5cdFx0dGhpcy54ICo9IHYueDtcblx0XHR0aGlzLnkgKj0gdi55O1xuXHRcdHRoaXMueiAqPSB2Lno7XG5cdFx0dGhpcy53ICo9IHYudztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMueCAqPSBzY2FsYXI7XG5cdFx0dGhpcy55ICo9IHNjYWxhcjtcblx0XHR0aGlzLnogKj0gc2NhbGFyO1xuXHRcdHRoaXMudyAqPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobSkge1xuXHRcdGNvbnN0IHggPSB0aGlzLngsXG5cdFx0XHRcdFx0eSA9IHRoaXMueSxcblx0XHRcdFx0XHR6ID0gdGhpcy56LFxuXHRcdFx0XHRcdHcgPSB0aGlzLnc7XG5cdFx0Y29uc3QgZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy54ID0gZVswXSAqIHggKyBlWzRdICogeSArIGVbOF0gKiB6ICsgZVsxMl0gKiB3O1xuXHRcdHRoaXMueSA9IGVbMV0gKiB4ICsgZVs1XSAqIHkgKyBlWzldICogeiArIGVbMTNdICogdztcblx0XHR0aGlzLnogPSBlWzJdICogeCArIGVbNl0gKiB5ICsgZVsxMF0gKiB6ICsgZVsxNF0gKiB3O1xuXHRcdHRoaXMudyA9IGVbM10gKiB4ICsgZVs3XSAqIHkgKyBlWzExXSAqIHogKyBlWzE1XSAqIHc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXZpZGVTY2FsYXIoc2NhbGFyKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlTY2FsYXIoMSAvIHNjYWxhcik7XG5cdH1cblxuXHRzZXRBeGlzQW5nbGVGcm9tUXVhdGVybmlvbihxKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL3F1YXRlcm5pb25Ub0FuZ2xlL2luZGV4Lmh0bVxuXHRcdC8vIHEgaXMgYXNzdW1lZCB0byBiZSBub3JtYWxpemVkXG5cdFx0dGhpcy53ID0gMiAqIE1hdGguYWNvcyhxLncpO1xuXHRcdGNvbnN0IHMgPSBNYXRoLnNxcnQoMSAtIHEudyAqIHEudyk7XG5cblx0XHRpZiAocyA8IDAuMDAwMSkge1xuXHRcdFx0dGhpcy54ID0gMTtcblx0XHRcdHRoaXMueSA9IDA7XG5cdFx0XHR0aGlzLnogPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnggPSBxLnggLyBzO1xuXHRcdFx0dGhpcy55ID0gcS55IC8gcztcblx0XHRcdHRoaXMueiA9IHEueiAvIHM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRBeGlzQW5nbGVGcm9tUm90YXRpb25NYXRyaXgobSkge1xuXHRcdC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9tYXRyaXhUb0FuZ2xlL2luZGV4Lmh0bVxuXHRcdC8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG5cdFx0bGV0IGFuZ2xlLCB4LCB5LCB6OyAvLyB2YXJpYWJsZXMgZm9yIHJlc3VsdFxuXG5cdFx0Y29uc3QgZXBzaWxvbiA9IDAuMDEsXG5cdFx0XHRcdFx0Ly8gbWFyZ2luIHRvIGFsbG93IGZvciByb3VuZGluZyBlcnJvcnNcblx0XHRlcHNpbG9uMiA9IDAuMSxcblx0XHRcdFx0XHQvLyBtYXJnaW4gdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiAwIGFuZCAxODAgZGVncmVlc1xuXHRcdHRlID0gbS5lbGVtZW50cyxcblx0XHRcdFx0XHRtMTEgPSB0ZVswXSxcblx0XHRcdFx0XHRtMTIgPSB0ZVs0XSxcblx0XHRcdFx0XHRtMTMgPSB0ZVs4XSxcblx0XHRcdFx0XHRtMjEgPSB0ZVsxXSxcblx0XHRcdFx0XHRtMjIgPSB0ZVs1XSxcblx0XHRcdFx0XHRtMjMgPSB0ZVs5XSxcblx0XHRcdFx0XHRtMzEgPSB0ZVsyXSxcblx0XHRcdFx0XHRtMzIgPSB0ZVs2XSxcblx0XHRcdFx0XHRtMzMgPSB0ZVsxMF07XG5cblx0XHRpZiAoTWF0aC5hYnMobTEyIC0gbTIxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobTEzIC0gbTMxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobTIzIC0gbTMyKSA8IGVwc2lsb24pIHtcblx0XHRcdC8vIHNpbmd1bGFyaXR5IGZvdW5kXG5cdFx0XHQvLyBmaXJzdCBjaGVjayBmb3IgaWRlbnRpdHkgbWF0cml4IHdoaWNoIG11c3QgaGF2ZSArMSBmb3IgYWxsIHRlcm1zXG5cdFx0XHQvLyBpbiBsZWFkaW5nIGRpYWdvbmFsIGFuZCB6ZXJvIGluIG90aGVyIHRlcm1zXG5cdFx0XHRpZiAoTWF0aC5hYnMobTEyICsgbTIxKSA8IGVwc2lsb24yICYmIE1hdGguYWJzKG0xMyArIG0zMSkgPCBlcHNpbG9uMiAmJiBNYXRoLmFicyhtMjMgKyBtMzIpIDwgZXBzaWxvbjIgJiYgTWF0aC5hYnMobTExICsgbTIyICsgbTMzIC0gMykgPCBlcHNpbG9uMikge1xuXHRcdFx0XHQvLyB0aGlzIHNpbmd1bGFyaXR5IGlzIGlkZW50aXR5IG1hdHJpeCBzbyBhbmdsZSA9IDBcblx0XHRcdFx0dGhpcy5zZXQoMSwgMCwgMCwgMCk7XG5cdFx0XHRcdHJldHVybiB0aGlzOyAvLyB6ZXJvIGFuZ2xlLCBhcmJpdHJhcnkgYXhpc1xuXHRcdFx0fSAvLyBvdGhlcndpc2UgdGhpcyBzaW5ndWxhcml0eSBpcyBhbmdsZSA9IDE4MFxuXG5cblx0XHRcdGFuZ2xlID0gTWF0aC5QSTtcblx0XHRcdGNvbnN0IHh4ID0gKG0xMSArIDEpIC8gMjtcblx0XHRcdGNvbnN0IHl5ID0gKG0yMiArIDEpIC8gMjtcblx0XHRcdGNvbnN0IHp6ID0gKG0zMyArIDEpIC8gMjtcblx0XHRcdGNvbnN0IHh5ID0gKG0xMiArIG0yMSkgLyA0O1xuXHRcdFx0Y29uc3QgeHogPSAobTEzICsgbTMxKSAvIDQ7XG5cdFx0XHRjb25zdCB5eiA9IChtMjMgKyBtMzIpIC8gNDtcblxuXHRcdFx0aWYgKHh4ID4geXkgJiYgeHggPiB6eikge1xuXHRcdFx0XHQvLyBtMTEgaXMgdGhlIGxhcmdlc3QgZGlhZ29uYWwgdGVybVxuXHRcdFx0XHRpZiAoeHggPCBlcHNpbG9uKSB7XG5cdFx0XHRcdFx0eCA9IDA7XG5cdFx0XHRcdFx0eSA9IDAuNzA3MTA2NzgxO1xuXHRcdFx0XHRcdHogPSAwLjcwNzEwNjc4MTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR4ID0gTWF0aC5zcXJ0KHh4KTtcblx0XHRcdFx0XHR5ID0geHkgLyB4O1xuXHRcdFx0XHRcdHogPSB4eiAvIHg7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoeXkgPiB6eikge1xuXHRcdFx0XHQvLyBtMjIgaXMgdGhlIGxhcmdlc3QgZGlhZ29uYWwgdGVybVxuXHRcdFx0XHRpZiAoeXkgPCBlcHNpbG9uKSB7XG5cdFx0XHRcdFx0eCA9IDAuNzA3MTA2NzgxO1xuXHRcdFx0XHRcdHkgPSAwO1xuXHRcdFx0XHRcdHogPSAwLjcwNzEwNjc4MTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR5ID0gTWF0aC5zcXJ0KHl5KTtcblx0XHRcdFx0XHR4ID0geHkgLyB5O1xuXHRcdFx0XHRcdHogPSB5eiAvIHk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG0zMyBpcyB0aGUgbGFyZ2VzdCBkaWFnb25hbCB0ZXJtIHNvIGJhc2UgcmVzdWx0IG9uIHRoaXNcblx0XHRcdFx0aWYgKHp6IDwgZXBzaWxvbikge1xuXHRcdFx0XHRcdHggPSAwLjcwNzEwNjc4MTtcblx0XHRcdFx0XHR5ID0gMC43MDcxMDY3ODE7XG5cdFx0XHRcdFx0eiA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eiA9IE1hdGguc3FydCh6eik7XG5cdFx0XHRcdFx0eCA9IHh6IC8gejtcblx0XHRcdFx0XHR5ID0geXogLyB6O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0KHgsIHksIHosIGFuZ2xlKTtcblx0XHRcdHJldHVybiB0aGlzOyAvLyByZXR1cm4gMTgwIGRlZyByb3RhdGlvblxuXHRcdH0gLy8gYXMgd2UgaGF2ZSByZWFjaGVkIGhlcmUgdGhlcmUgYXJlIG5vIHNpbmd1bGFyaXRpZXMgc28gd2UgY2FuIGhhbmRsZSBub3JtYWxseVxuXG5cblx0XHRsZXQgcyA9IE1hdGguc3FydCgobTMyIC0gbTIzKSAqIChtMzIgLSBtMjMpICsgKG0xMyAtIG0zMSkgKiAobTEzIC0gbTMxKSArIChtMjEgLSBtMTIpICogKG0yMSAtIG0xMikpOyAvLyB1c2VkIHRvIG5vcm1hbGl6ZVxuXG5cdFx0aWYgKE1hdGguYWJzKHMpIDwgMC4wMDEpIHMgPSAxOyAvLyBwcmV2ZW50IGRpdmlkZSBieSB6ZXJvLCBzaG91bGQgbm90IGhhcHBlbiBpZiBtYXRyaXggaXMgb3J0aG9nb25hbCBhbmQgc2hvdWxkIGJlXG5cdFx0Ly8gY2F1Z2h0IGJ5IHNpbmd1bGFyaXR5IHRlc3QgYWJvdmUsIGJ1dCBJJ3ZlIGxlZnQgaXQgaW4ganVzdCBpbiBjYXNlXG5cblx0XHR0aGlzLnggPSAobTMyIC0gbTIzKSAvIHM7XG5cdFx0dGhpcy55ID0gKG0xMyAtIG0zMSkgLyBzO1xuXHRcdHRoaXMueiA9IChtMjEgLSBtMTIpIC8gcztcblx0XHR0aGlzLncgPSBNYXRoLmFjb3MoKG0xMSArIG0yMiArIG0zMyAtIDEpIC8gMik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtaW4odikge1xuXHRcdHRoaXMueCA9IE1hdGgubWluKHRoaXMueCwgdi54KTtcblx0XHR0aGlzLnkgPSBNYXRoLm1pbih0aGlzLnksIHYueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5taW4odGhpcy56LCB2LnopO1xuXHRcdHRoaXMudyA9IE1hdGgubWluKHRoaXMudywgdi53KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1heCh2KSB7XG5cdFx0dGhpcy54ID0gTWF0aC5tYXgodGhpcy54LCB2LngpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KHRoaXMueSwgdi55KTtcblx0XHR0aGlzLnogPSBNYXRoLm1heCh0aGlzLnosIHYueik7XG5cdFx0dGhpcy53ID0gTWF0aC5tYXgodGhpcy53LCB2LncpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXAobWluLCBtYXgpIHtcblx0XHQvLyBhc3N1bWVzIG1pbiA8IG1heCwgY29tcG9uZW50d2lzZVxuXHRcdHRoaXMueCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdGhpcy54KSk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB0aGlzLnkpKTtcblx0XHR0aGlzLnogPSBNYXRoLm1heChtaW4ueiwgTWF0aC5taW4obWF4LnosIHRoaXMueikpO1xuXHRcdHRoaXMudyA9IE1hdGgubWF4KG1pbi53LCBNYXRoLm1pbihtYXgudywgdGhpcy53KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcFNjYWxhcihtaW5WYWwsIG1heFZhbCkge1xuXHRcdHRoaXMueCA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLngpKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy55KSk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueikpO1xuXHRcdHRoaXMudyA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLncpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wTGVuZ3RoKG1pbiwgbWF4KSB7XG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIobGVuZ3RoIHx8IDEpLm11bHRpcGx5U2NhbGFyKE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBsZW5ndGgpKSk7XG5cdH1cblxuXHRmbG9vcigpIHtcblx0XHR0aGlzLnggPSBNYXRoLmZsb29yKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5mbG9vcih0aGlzLnkpO1xuXHRcdHRoaXMueiA9IE1hdGguZmxvb3IodGhpcy56KTtcblx0XHR0aGlzLncgPSBNYXRoLmZsb29yKHRoaXMudyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjZWlsKCkge1xuXHRcdHRoaXMueCA9IE1hdGguY2VpbCh0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGguY2VpbCh0aGlzLnkpO1xuXHRcdHRoaXMueiA9IE1hdGguY2VpbCh0aGlzLnopO1xuXHRcdHRoaXMudyA9IE1hdGguY2VpbCh0aGlzLncpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm91bmQoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcblx0XHR0aGlzLnogPSBNYXRoLnJvdW5kKHRoaXMueik7XG5cdFx0dGhpcy53ID0gTWF0aC5yb3VuZCh0aGlzLncpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm91bmRUb1plcm8oKSB7XG5cdFx0dGhpcy54ID0gdGhpcy54IDwgMCA/IE1hdGguY2VpbCh0aGlzLngpIDogTWF0aC5mbG9vcih0aGlzLngpO1xuXHRcdHRoaXMueSA9IHRoaXMueSA8IDAgPyBNYXRoLmNlaWwodGhpcy55KSA6IE1hdGguZmxvb3IodGhpcy55KTtcblx0XHR0aGlzLnogPSB0aGlzLnogPCAwID8gTWF0aC5jZWlsKHRoaXMueikgOiBNYXRoLmZsb29yKHRoaXMueik7XG5cdFx0dGhpcy53ID0gdGhpcy53IDwgMCA/IE1hdGguY2VpbCh0aGlzLncpIDogTWF0aC5mbG9vcih0aGlzLncpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmVnYXRlKCkge1xuXHRcdHRoaXMueCA9IC10aGlzLng7XG5cdFx0dGhpcy55ID0gLXRoaXMueTtcblx0XHR0aGlzLnogPSAtdGhpcy56O1xuXHRcdHRoaXMudyA9IC10aGlzLnc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkb3Qodikge1xuXHRcdHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2LnogKyB0aGlzLncgKiB2Lnc7XG5cdH1cblxuXHRsZW5ndGhTcSgpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53O1xuXHR9XG5cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53KTtcblx0fVxuXG5cdG1hbmhhdHRhbkxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModGhpcy54KSArIE1hdGguYWJzKHRoaXMueSkgKyBNYXRoLmFicyh0aGlzLnopICsgTWF0aC5hYnModGhpcy53KTtcblx0fVxuXG5cdG5vcm1hbGl6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSB8fCAxKTtcblx0fVxuXG5cdHNldExlbmd0aChsZW5ndGgpIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihsZW5ndGgpO1xuXHR9XG5cblx0bGVycCh2LCBhbHBoYSkge1xuXHRcdHRoaXMueCArPSAodi54IC0gdGhpcy54KSAqIGFscGhhO1xuXHRcdHRoaXMueSArPSAodi55IC0gdGhpcy55KSAqIGFscGhhO1xuXHRcdHRoaXMueiArPSAodi56IC0gdGhpcy56KSAqIGFscGhhO1xuXHRcdHRoaXMudyArPSAodi53IC0gdGhpcy53KSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGVycFZlY3RvcnModjEsIHYyLCBhbHBoYSkge1xuXHRcdHRoaXMueCA9IHYxLnggKyAodjIueCAtIHYxLngpICogYWxwaGE7XG5cdFx0dGhpcy55ID0gdjEueSArICh2Mi55IC0gdjEueSkgKiBhbHBoYTtcblx0XHR0aGlzLnogPSB2MS56ICsgKHYyLnogLSB2MS56KSAqIGFscGhhO1xuXHRcdHRoaXMudyA9IHYxLncgKyAodjIudyAtIHYxLncpICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHModikge1xuXHRcdHJldHVybiB2LnggPT09IHRoaXMueCAmJiB2LnkgPT09IHRoaXMueSAmJiB2LnogPT09IHRoaXMueiAmJiB2LncgPT09IHRoaXMudztcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdHRoaXMueCA9IGFycmF5W29mZnNldF07XG5cdFx0dGhpcy55ID0gYXJyYXlbb2Zmc2V0ICsgMV07XG5cdFx0dGhpcy56ID0gYXJyYXlbb2Zmc2V0ICsgMl07XG5cdFx0dGhpcy53ID0gYXJyYXlbb2Zmc2V0ICsgM107XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRhcnJheVtvZmZzZXRdID0gdGhpcy54O1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGhpcy55O1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGhpcy56O1xuXHRcdGFycmF5W29mZnNldCArIDNdID0gdGhpcy53O1xuXHRcdHJldHVybiBhcnJheTtcblx0fSAvLyBmcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGluZGV4ICkge1xuXHQvLyBcdHRoaXMueCA9IGF0dHJpYnV0ZS5nZXRYKCBpbmRleCApO1xuXHQvLyBcdHRoaXMueSA9IGF0dHJpYnV0ZS5nZXRZKCBpbmRleCApO1xuXHQvLyBcdHRoaXMueiA9IGF0dHJpYnV0ZS5nZXRaKCBpbmRleCApO1xuXHQvLyBcdHRoaXMudyA9IGF0dHJpYnV0ZS5nZXRXKCBpbmRleCApO1xuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRyYW5kb20oKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5yYW5kb20oKTtcblx0XHR0aGlzLnkgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHRoaXMueiA9IE1hdGgucmFuZG9tKCk7XG5cdFx0dGhpcy53ID0gTWF0aC5yYW5kb20oKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdCpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHR5aWVsZCB0aGlzLng7XG5cdFx0eWllbGQgdGhpcy55O1xuXHRcdHlpZWxkIHRoaXMuejtcblx0XHR5aWVsZCB0aGlzLnc7XG5cdH1cblxufVxuXG5leHBvcnRzLkFDRVNGaWxtaWNUb25lTWFwcGluZyA9IEFDRVNGaWxtaWNUb25lTWFwcGluZztcbmV4cG9ydHMuQWRkRXF1YXRpb24gPSBBZGRFcXVhdGlvbjtcbmV4cG9ydHMuQWRkT3BlcmF0aW9uID0gQWRkT3BlcmF0aW9uO1xuZXhwb3J0cy5BZGRpdGl2ZUFuaW1hdGlvbkJsZW5kTW9kZSA9IEFkZGl0aXZlQW5pbWF0aW9uQmxlbmRNb2RlO1xuZXhwb3J0cy5BZGRpdGl2ZUJsZW5kaW5nID0gQWRkaXRpdmVCbGVuZGluZztcbmV4cG9ydHMuQWxwaGFGb3JtYXQgPSBBbHBoYUZvcm1hdDtcbmV4cG9ydHMuQWx3YXlzRGVwdGggPSBBbHdheXNEZXB0aDtcbmV4cG9ydHMuQWx3YXlzU3RlbmNpbEZ1bmMgPSBBbHdheXNTdGVuY2lsRnVuYztcbmV4cG9ydHMuQmFja1NpZGUgPSBCYWNrU2lkZTtcbmV4cG9ydHMuQmFzaWNEZXB0aFBhY2tpbmcgPSBCYXNpY0RlcHRoUGFja2luZztcbmV4cG9ydHMuQmFzaWNTaGFkb3dNYXAgPSBCYXNpY1NoYWRvd01hcDtcbmV4cG9ydHMuQm94MiA9IEJveDI7XG5leHBvcnRzLkJveDMgPSBCb3gzO1xuZXhwb3J0cy5CeXRlVHlwZSA9IEJ5dGVUeXBlO1xuZXhwb3J0cy5DaW5lb25Ub25lTWFwcGluZyA9IENpbmVvblRvbmVNYXBwaW5nO1xuZXhwb3J0cy5DbGFtcFRvRWRnZVdyYXBwaW5nID0gQ2xhbXBUb0VkZ2VXcmFwcGluZztcbmV4cG9ydHMuQ29sb3IgPSBDb2xvcjtcbmV4cG9ydHMuQ29sb3JNYW5hZ2VtZW50ID0gQ29sb3JNYW5hZ2VtZW50O1xuZXhwb3J0cy5DdWJlUmVmbGVjdGlvbk1hcHBpbmcgPSBDdWJlUmVmbGVjdGlvbk1hcHBpbmc7XG5leHBvcnRzLkN1YmVSZWZyYWN0aW9uTWFwcGluZyA9IEN1YmVSZWZyYWN0aW9uTWFwcGluZztcbmV4cG9ydHMuQ3ViZVVWUmVmbGVjdGlvbk1hcHBpbmcgPSBDdWJlVVZSZWZsZWN0aW9uTWFwcGluZztcbmV4cG9ydHMuQ3VsbEZhY2VCYWNrID0gQ3VsbEZhY2VCYWNrO1xuZXhwb3J0cy5DdWxsRmFjZUZyb250ID0gQ3VsbEZhY2VGcm9udDtcbmV4cG9ydHMuQ3VsbEZhY2VGcm9udEJhY2sgPSBDdWxsRmFjZUZyb250QmFjaztcbmV4cG9ydHMuQ3VsbEZhY2VOb25lID0gQ3VsbEZhY2VOb25lO1xuZXhwb3J0cy5DdXN0b21CbGVuZGluZyA9IEN1c3RvbUJsZW5kaW5nO1xuZXhwb3J0cy5DdXN0b21Ub25lTWFwcGluZyA9IEN1c3RvbVRvbmVNYXBwaW5nO1xuZXhwb3J0cy5DeWxpbmRyaWNhbCA9IEN5bGluZHJpY2FsO1xuZXhwb3J0cy5EZWNyZW1lbnRTdGVuY2lsT3AgPSBEZWNyZW1lbnRTdGVuY2lsT3A7XG5leHBvcnRzLkRlY3JlbWVudFdyYXBTdGVuY2lsT3AgPSBEZWNyZW1lbnRXcmFwU3RlbmNpbE9wO1xuZXhwb3J0cy5EZXB0aEZvcm1hdCA9IERlcHRoRm9ybWF0O1xuZXhwb3J0cy5EZXB0aFN0ZW5jaWxGb3JtYXQgPSBEZXB0aFN0ZW5jaWxGb3JtYXQ7XG5leHBvcnRzLkRvdWJsZVNpZGUgPSBEb3VibGVTaWRlO1xuZXhwb3J0cy5Ec3RBbHBoYUZhY3RvciA9IERzdEFscGhhRmFjdG9yO1xuZXhwb3J0cy5Ec3RDb2xvckZhY3RvciA9IERzdENvbG9yRmFjdG9yO1xuZXhwb3J0cy5EeW5hbWljQ29weVVzYWdlID0gRHluYW1pY0NvcHlVc2FnZTtcbmV4cG9ydHMuRHluYW1pY0RyYXdVc2FnZSA9IER5bmFtaWNEcmF3VXNhZ2U7XG5leHBvcnRzLkR5bmFtaWNSZWFkVXNhZ2UgPSBEeW5hbWljUmVhZFVzYWdlO1xuZXhwb3J0cy5FcXVhbERlcHRoID0gRXF1YWxEZXB0aDtcbmV4cG9ydHMuRXF1YWxTdGVuY2lsRnVuYyA9IEVxdWFsU3RlbmNpbEZ1bmM7XG5leHBvcnRzLkVxdWlyZWN0YW5ndWxhclJlZmxlY3Rpb25NYXBwaW5nID0gRXF1aXJlY3Rhbmd1bGFyUmVmbGVjdGlvbk1hcHBpbmc7XG5leHBvcnRzLkVxdWlyZWN0YW5ndWxhclJlZnJhY3Rpb25NYXBwaW5nID0gRXF1aXJlY3Rhbmd1bGFyUmVmcmFjdGlvbk1hcHBpbmc7XG5leHBvcnRzLkV1bGVyID0gRXVsZXI7XG5leHBvcnRzLkZsb2F0VHlwZSA9IEZsb2F0VHlwZTtcbmV4cG9ydHMuRnJvbnRTaWRlID0gRnJvbnRTaWRlO1xuZXhwb3J0cy5HTFNMMSA9IEdMU0wxO1xuZXhwb3J0cy5HTFNMMyA9IEdMU0wzO1xuZXhwb3J0cy5HcmVhdGVyRGVwdGggPSBHcmVhdGVyRGVwdGg7XG5leHBvcnRzLkdyZWF0ZXJFcXVhbERlcHRoID0gR3JlYXRlckVxdWFsRGVwdGg7XG5leHBvcnRzLkdyZWF0ZXJFcXVhbFN0ZW5jaWxGdW5jID0gR3JlYXRlckVxdWFsU3RlbmNpbEZ1bmM7XG5leHBvcnRzLkdyZWF0ZXJTdGVuY2lsRnVuYyA9IEdyZWF0ZXJTdGVuY2lsRnVuYztcbmV4cG9ydHMuSGFsZkZsb2F0VHlwZSA9IEhhbGZGbG9hdFR5cGU7XG5leHBvcnRzLkluY3JlbWVudFN0ZW5jaWxPcCA9IEluY3JlbWVudFN0ZW5jaWxPcDtcbmV4cG9ydHMuSW5jcmVtZW50V3JhcFN0ZW5jaWxPcCA9IEluY3JlbWVudFdyYXBTdGVuY2lsT3A7XG5leHBvcnRzLkludFR5cGUgPSBJbnRUeXBlO1xuZXhwb3J0cy5JbnRlcnBvbGFudCA9IEludGVycG9sYW50O1xuZXhwb3J0cy5JbnRlcnBvbGF0ZURpc2NyZXRlID0gSW50ZXJwb2xhdGVEaXNjcmV0ZTtcbmV4cG9ydHMuSW50ZXJwb2xhdGVMaW5lYXIgPSBJbnRlcnBvbGF0ZUxpbmVhcjtcbmV4cG9ydHMuSW50ZXJwb2xhdGVTbW9vdGggPSBJbnRlcnBvbGF0ZVNtb290aDtcbmV4cG9ydHMuSW52ZXJ0U3RlbmNpbE9wID0gSW52ZXJ0U3RlbmNpbE9wO1xuZXhwb3J0cy5LZWVwU3RlbmNpbE9wID0gS2VlcFN0ZW5jaWxPcDtcbmV4cG9ydHMuTGVzc0RlcHRoID0gTGVzc0RlcHRoO1xuZXhwb3J0cy5MZXNzRXF1YWxEZXB0aCA9IExlc3NFcXVhbERlcHRoO1xuZXhwb3J0cy5MZXNzRXF1YWxTdGVuY2lsRnVuYyA9IExlc3NFcXVhbFN0ZW5jaWxGdW5jO1xuZXhwb3J0cy5MZXNzU3RlbmNpbEZ1bmMgPSBMZXNzU3RlbmNpbEZ1bmM7XG5leHBvcnRzLkxpbmUzID0gTGluZTM7XG5leHBvcnRzLkxpbmVhckVuY29kaW5nID0gTGluZWFyRW5jb2Rpbmc7XG5leHBvcnRzLkxpbmVhckZpbHRlciA9IExpbmVhckZpbHRlcjtcbmV4cG9ydHMuTGluZWFyTWlwTWFwTGluZWFyRmlsdGVyID0gTGluZWFyTWlwTWFwTGluZWFyRmlsdGVyO1xuZXhwb3J0cy5MaW5lYXJNaXBNYXBOZWFyZXN0RmlsdGVyID0gTGluZWFyTWlwTWFwTmVhcmVzdEZpbHRlcjtcbmV4cG9ydHMuTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyID0gTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyO1xuZXhwb3J0cy5MaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyID0gTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcjtcbmV4cG9ydHMuTGluZWFyU1JHQkNvbG9yU3BhY2UgPSBMaW5lYXJTUkdCQ29sb3JTcGFjZTtcbmV4cG9ydHMuTGluZWFyVG9TUkdCID0gTGluZWFyVG9TUkdCO1xuZXhwb3J0cy5MaW5lYXJUb25lTWFwcGluZyA9IExpbmVhclRvbmVNYXBwaW5nO1xuZXhwb3J0cy5Mb29wT25jZSA9IExvb3BPbmNlO1xuZXhwb3J0cy5Mb29wUGluZ1BvbmcgPSBMb29wUGluZ1Bvbmc7XG5leHBvcnRzLkxvb3BSZXBlYXQgPSBMb29wUmVwZWF0O1xuZXhwb3J0cy5MdW1pbmFuY2VBbHBoYUZvcm1hdCA9IEx1bWluYW5jZUFscGhhRm9ybWF0O1xuZXhwb3J0cy5MdW1pbmFuY2VGb3JtYXQgPSBMdW1pbmFuY2VGb3JtYXQ7XG5leHBvcnRzLk1PVVNFID0gTU9VU0U7XG5leHBvcnRzLk1hdGhVdGlscyA9IE1hdGhVdGlscztcbmV4cG9ydHMuTWF0cml4MyA9IE1hdHJpeDM7XG5leHBvcnRzLk1hdHJpeDQgPSBNYXRyaXg0O1xuZXhwb3J0cy5NYXhFcXVhdGlvbiA9IE1heEVxdWF0aW9uO1xuZXhwb3J0cy5NaW5FcXVhdGlvbiA9IE1pbkVxdWF0aW9uO1xuZXhwb3J0cy5NaXJyb3JlZFJlcGVhdFdyYXBwaW5nID0gTWlycm9yZWRSZXBlYXRXcmFwcGluZztcbmV4cG9ydHMuTWl4T3BlcmF0aW9uID0gTWl4T3BlcmF0aW9uO1xuZXhwb3J0cy5NdWx0aXBseUJsZW5kaW5nID0gTXVsdGlwbHlCbGVuZGluZztcbmV4cG9ydHMuTXVsdGlwbHlPcGVyYXRpb24gPSBNdWx0aXBseU9wZXJhdGlvbjtcbmV4cG9ydHMuTmVhcmVzdEZpbHRlciA9IE5lYXJlc3RGaWx0ZXI7XG5leHBvcnRzLk5lYXJlc3RNaXBNYXBMaW5lYXJGaWx0ZXIgPSBOZWFyZXN0TWlwTWFwTGluZWFyRmlsdGVyO1xuZXhwb3J0cy5OZWFyZXN0TWlwTWFwTmVhcmVzdEZpbHRlciA9IE5lYXJlc3RNaXBNYXBOZWFyZXN0RmlsdGVyO1xuZXhwb3J0cy5OZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyID0gTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlcjtcbmV4cG9ydHMuTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIgPSBOZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcjtcbmV4cG9ydHMuTmV2ZXJEZXB0aCA9IE5ldmVyRGVwdGg7XG5leHBvcnRzLk5ldmVyU3RlbmNpbEZ1bmMgPSBOZXZlclN0ZW5jaWxGdW5jO1xuZXhwb3J0cy5Ob0JsZW5kaW5nID0gTm9CbGVuZGluZztcbmV4cG9ydHMuTm9Db2xvclNwYWNlID0gTm9Db2xvclNwYWNlO1xuZXhwb3J0cy5Ob1RvbmVNYXBwaW5nID0gTm9Ub25lTWFwcGluZztcbmV4cG9ydHMuTm9ybWFsQW5pbWF0aW9uQmxlbmRNb2RlID0gTm9ybWFsQW5pbWF0aW9uQmxlbmRNb2RlO1xuZXhwb3J0cy5Ob3JtYWxCbGVuZGluZyA9IE5vcm1hbEJsZW5kaW5nO1xuZXhwb3J0cy5Ob3RFcXVhbERlcHRoID0gTm90RXF1YWxEZXB0aDtcbmV4cG9ydHMuTm90RXF1YWxTdGVuY2lsRnVuYyA9IE5vdEVxdWFsU3RlbmNpbEZ1bmM7XG5leHBvcnRzLk9iamVjdFNwYWNlTm9ybWFsTWFwID0gT2JqZWN0U3BhY2VOb3JtYWxNYXA7XG5leHBvcnRzLk9uZUZhY3RvciA9IE9uZUZhY3RvcjtcbmV4cG9ydHMuT25lTWludXNEc3RBbHBoYUZhY3RvciA9IE9uZU1pbnVzRHN0QWxwaGFGYWN0b3I7XG5leHBvcnRzLk9uZU1pbnVzRHN0Q29sb3JGYWN0b3IgPSBPbmVNaW51c0RzdENvbG9yRmFjdG9yO1xuZXhwb3J0cy5PbmVNaW51c1NyY0FscGhhRmFjdG9yID0gT25lTWludXNTcmNBbHBoYUZhY3RvcjtcbmV4cG9ydHMuT25lTWludXNTcmNDb2xvckZhY3RvciA9IE9uZU1pbnVzU3JjQ29sb3JGYWN0b3I7XG5leHBvcnRzLlBDRlNoYWRvd01hcCA9IFBDRlNoYWRvd01hcDtcbmV4cG9ydHMuUENGU29mdFNoYWRvd01hcCA9IFBDRlNvZnRTaGFkb3dNYXA7XG5leHBvcnRzLlBsYW5lID0gUGxhbmU7XG5leHBvcnRzLlF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uO1xuZXhwb3J0cy5SRVZJU0lPTiA9IFJFVklTSU9OO1xuZXhwb3J0cy5SR0JBRGVwdGhQYWNraW5nID0gUkdCQURlcHRoUGFja2luZztcbmV4cG9ydHMuUkdCQUZvcm1hdCA9IFJHQkFGb3JtYXQ7XG5leHBvcnRzLlJHQkFJbnRlZ2VyRm9ybWF0ID0gUkdCQUludGVnZXJGb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ18xMHgxMF9Gb3JtYXQgPSBSR0JBX0FTVENfMTB4MTBfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfMTB4NV9Gb3JtYXQgPSBSR0JBX0FTVENfMTB4NV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ18xMHg2X0Zvcm1hdCA9IFJHQkFfQVNUQ18xMHg2X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzEweDhfRm9ybWF0ID0gUkdCQV9BU1RDXzEweDhfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfMTJ4MTBfRm9ybWF0ID0gUkdCQV9BU1RDXzEyeDEwX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzEyeDEyX0Zvcm1hdCA9IFJHQkFfQVNUQ18xMngxMl9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ180eDRfRm9ybWF0ID0gUkdCQV9BU1RDXzR4NF9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ181eDRfRm9ybWF0ID0gUkdCQV9BU1RDXzV4NF9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ181eDVfRm9ybWF0ID0gUkdCQV9BU1RDXzV4NV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ182eDVfRm9ybWF0ID0gUkdCQV9BU1RDXzZ4NV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ182eDZfRm9ybWF0ID0gUkdCQV9BU1RDXzZ4Nl9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ184eDVfRm9ybWF0ID0gUkdCQV9BU1RDXzh4NV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ184eDZfRm9ybWF0ID0gUkdCQV9BU1RDXzh4Nl9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ184eDhfRm9ybWF0ID0gUkdCQV9BU1RDXzh4OF9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQlBUQ19Gb3JtYXQgPSBSR0JBX0JQVENfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0VUQzJfRUFDX0Zvcm1hdCA9IFJHQkFfRVRDMl9FQUNfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX1BWUlRDXzJCUFBWMV9Gb3JtYXQgPSBSR0JBX1BWUlRDXzJCUFBWMV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfUFZSVENfNEJQUFYxX0Zvcm1hdCA9IFJHQkFfUFZSVENfNEJQUFYxX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9TM1RDX0RYVDFfRm9ybWF0ID0gUkdCQV9TM1RDX0RYVDFfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX1MzVENfRFhUM19Gb3JtYXQgPSBSR0JBX1MzVENfRFhUM19Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfUzNUQ19EWFQ1X0Zvcm1hdCA9IFJHQkFfUzNUQ19EWFQ1X0Zvcm1hdDtcbmV4cG9ydHMuUkdCRm9ybWF0ID0gUkdCRm9ybWF0O1xuZXhwb3J0cy5SR0JfRVRDMV9Gb3JtYXQgPSBSR0JfRVRDMV9Gb3JtYXQ7XG5leHBvcnRzLlJHQl9FVEMyX0Zvcm1hdCA9IFJHQl9FVEMyX0Zvcm1hdDtcbmV4cG9ydHMuUkdCX1BWUlRDXzJCUFBWMV9Gb3JtYXQgPSBSR0JfUFZSVENfMkJQUFYxX0Zvcm1hdDtcbmV4cG9ydHMuUkdCX1BWUlRDXzRCUFBWMV9Gb3JtYXQgPSBSR0JfUFZSVENfNEJQUFYxX0Zvcm1hdDtcbmV4cG9ydHMuUkdCX1MzVENfRFhUMV9Gb3JtYXQgPSBSR0JfUzNUQ19EWFQxX0Zvcm1hdDtcbmV4cG9ydHMuUkdGb3JtYXQgPSBSR0Zvcm1hdDtcbmV4cG9ydHMuUkdJbnRlZ2VyRm9ybWF0ID0gUkdJbnRlZ2VyRm9ybWF0O1xuZXhwb3J0cy5SYXkgPSBSYXk7XG5leHBvcnRzLlJlZEZvcm1hdCA9IFJlZEZvcm1hdDtcbmV4cG9ydHMuUmVkSW50ZWdlckZvcm1hdCA9IFJlZEludGVnZXJGb3JtYXQ7XG5leHBvcnRzLlJlaW5oYXJkVG9uZU1hcHBpbmcgPSBSZWluaGFyZFRvbmVNYXBwaW5nO1xuZXhwb3J0cy5SZXBlYXRXcmFwcGluZyA9IFJlcGVhdFdyYXBwaW5nO1xuZXhwb3J0cy5SZXBsYWNlU3RlbmNpbE9wID0gUmVwbGFjZVN0ZW5jaWxPcDtcbmV4cG9ydHMuUmV2ZXJzZVN1YnRyYWN0RXF1YXRpb24gPSBSZXZlcnNlU3VidHJhY3RFcXVhdGlvbjtcbmV4cG9ydHMuU1JHQkNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZTtcbmV4cG9ydHMuU1JHQlRvTGluZWFyID0gU1JHQlRvTGluZWFyO1xuZXhwb3J0cy5TaG9ydFR5cGUgPSBTaG9ydFR5cGU7XG5leHBvcnRzLlNwaGVyZSA9IFNwaGVyZTtcbmV4cG9ydHMuU3BoZXJpY2FsID0gU3BoZXJpY2FsO1xuZXhwb3J0cy5TcmNBbHBoYUZhY3RvciA9IFNyY0FscGhhRmFjdG9yO1xuZXhwb3J0cy5TcmNBbHBoYVNhdHVyYXRlRmFjdG9yID0gU3JjQWxwaGFTYXR1cmF0ZUZhY3RvcjtcbmV4cG9ydHMuU3JjQ29sb3JGYWN0b3IgPSBTcmNDb2xvckZhY3RvcjtcbmV4cG9ydHMuU3RhdGljQ29weVVzYWdlID0gU3RhdGljQ29weVVzYWdlO1xuZXhwb3J0cy5TdGF0aWNEcmF3VXNhZ2UgPSBTdGF0aWNEcmF3VXNhZ2U7XG5leHBvcnRzLlN0YXRpY1JlYWRVc2FnZSA9IFN0YXRpY1JlYWRVc2FnZTtcbmV4cG9ydHMuU3RyZWFtQ29weVVzYWdlID0gU3RyZWFtQ29weVVzYWdlO1xuZXhwb3J0cy5TdHJlYW1EcmF3VXNhZ2UgPSBTdHJlYW1EcmF3VXNhZ2U7XG5leHBvcnRzLlN0cmVhbVJlYWRVc2FnZSA9IFN0cmVhbVJlYWRVc2FnZTtcbmV4cG9ydHMuU3VidHJhY3RFcXVhdGlvbiA9IFN1YnRyYWN0RXF1YXRpb247XG5leHBvcnRzLlN1YnRyYWN0aXZlQmxlbmRpbmcgPSBTdWJ0cmFjdGl2ZUJsZW5kaW5nO1xuZXhwb3J0cy5UT1VDSCA9IFRPVUNIO1xuZXhwb3J0cy5UYW5nZW50U3BhY2VOb3JtYWxNYXAgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XG5leHBvcnRzLlRyaWFuZ2xlID0gVHJpYW5nbGU7XG5leHBvcnRzLlRyaWFuZ2xlRmFuRHJhd01vZGUgPSBUcmlhbmdsZUZhbkRyYXdNb2RlO1xuZXhwb3J0cy5UcmlhbmdsZVN0cmlwRHJhd01vZGUgPSBUcmlhbmdsZVN0cmlwRHJhd01vZGU7XG5leHBvcnRzLlRyaWFuZ2xlc0RyYXdNb2RlID0gVHJpYW5nbGVzRHJhd01vZGU7XG5leHBvcnRzLlVWTWFwcGluZyA9IFVWTWFwcGluZztcbmV4cG9ydHMuVW5zaWduZWRCeXRlVHlwZSA9IFVuc2lnbmVkQnl0ZVR5cGU7XG5leHBvcnRzLlVuc2lnbmVkSW50MjQ4VHlwZSA9IFVuc2lnbmVkSW50MjQ4VHlwZTtcbmV4cG9ydHMuVW5zaWduZWRJbnRUeXBlID0gVW5zaWduZWRJbnRUeXBlO1xuZXhwb3J0cy5VbnNpZ25lZFNob3J0NDQ0NFR5cGUgPSBVbnNpZ25lZFNob3J0NDQ0NFR5cGU7XG5leHBvcnRzLlVuc2lnbmVkU2hvcnQ1NTUxVHlwZSA9IFVuc2lnbmVkU2hvcnQ1NTUxVHlwZTtcbmV4cG9ydHMuVW5zaWduZWRTaG9ydFR5cGUgPSBVbnNpZ25lZFNob3J0VHlwZTtcbmV4cG9ydHMuVlNNU2hhZG93TWFwID0gVlNNU2hhZG93TWFwO1xuZXhwb3J0cy5WZWN0b3IyID0gVmVjdG9yMjtcbmV4cG9ydHMuVmVjdG9yMyA9IFZlY3RvcjM7XG5leHBvcnRzLlZlY3RvcjQgPSBWZWN0b3I0O1xuZXhwb3J0cy5XcmFwQXJvdW5kRW5kaW5nID0gV3JhcEFyb3VuZEVuZGluZztcbmV4cG9ydHMuWmVyb0N1cnZhdHVyZUVuZGluZyA9IFplcm9DdXJ2YXR1cmVFbmRpbmc7XG5leHBvcnRzLlplcm9GYWN0b3IgPSBaZXJvRmFjdG9yO1xuZXhwb3J0cy5aZXJvU2xvcGVFbmRpbmcgPSBaZXJvU2xvcGVFbmRpbmc7XG5leHBvcnRzLlplcm9TdGVuY2lsT3AgPSBaZXJvU3RlbmNpbE9wO1xuZXhwb3J0cy5fU1JHQkFGb3JtYXQgPSBfU1JHQkFGb3JtYXQ7XG5leHBvcnRzLnNSR0JFbmNvZGluZyA9IHNSR0JFbmNvZGluZztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGltYWdlUGFwZXIgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvcGFwZXIucG5nXCI7XG5pbXBvcnQgaW1hZ2VSb2NrIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3JvY2sucG5nXCI7XG5pbXBvcnQgaW1hZ2VTY2lzc29ycyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9zY2lzc29ycy5wbmdcIjtcbmltcG9ydCBpbWFnZVNtYWxsUGFwZXIgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvc21hbGxwYXBlci5wbmdcIjtcbmltcG9ydCBpbWFnZVNtYWxsUm9jayBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9zbWFsbHJvY2sucG5nXCI7XG5pbXBvcnQgaW1hZ2VTbWFsbFNjaXNzb3JzIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3NtYWxsc2Npc3NvcnMucG5nXCI7XG5pbXBvcnQgXCIuL3N0eWxlL3N0eWxlLmNzc1wiXG5jb25zdCBtb2R1bGVzID0gcmVxdWlyZShcIi4vY2xhc3Nlc1wiKTtcblxuLy9HTE9CQUwgVkFSSUFCTEVTXG5sZXQgbW91c2VDb29yZHMgPSB7fTtcbm1vdXNlQ29vcmRzLnBvcyA9IG5ldyBtb2R1bGVzLnRocmVlSnNNb2QuVmVjdG9yMigwLCAwKTtcbi8vL0NBTlZBUyBWQVJJQUJMRVNcbmxldCBjYW52YXM7XG5sZXQgY29udGV4dDtcbi8vL0NBTlZBUyBWQVJJQUJMRVNcblxuLy8vR0FNRSBMT09QIFZBUklBTEVTXG5sZXQgaXNydW5uaW5nID0gZmFsc2U7XG5sZXQgc2Vjb25kc1Bhc3NlZDtcbmxldCBvbGRUaW1lU3RhbXAgPSAwLjA7XG5sZXQgZnBzO1xuLy8vR0FNRSBMT09QIFZBUklBQkxFU1xuXG4vLy9HQU1FT0JKRUNUIFJFRkVSRU5DRSBWQVJJQUJMRVNcbi8vL0VOVElUWSBIT0xERVIvLy9cbmxldCBFbnRpdHlIb2xkZXIgPSBbXTtcbmxldCBVSUhvbGRlciA9IFtdO1xuLy9HTE9CQUwgVkFSSUFCTEVTXG5cbmNvbnN0IFNjZW5lMCA9IHtcbiAgICBDcmVhdGVTY2VuZSgpIHtcblxuXG4gICAgICAgIGxldCByb2NrT2JqID0gbmV3IG1vZHVsZXMuZ2FtZU9iamVjdCgwLCBuZXcgSW1hZ2UoNzAwLCA3MDApKTtcbiAgICAgICAgbGV0IHNjaXNzb3JPYmogPSBuZXcgbW9kdWxlcy5nYW1lT2JqZWN0KDEsIG5ldyBJbWFnZSg3MDAsIDcwMCkpO1xuICAgICAgICBsZXQgcGFwZXJPYmogPSBuZXcgbW9kdWxlcy5nYW1lT2JqZWN0KDIsIG5ldyBJbWFnZSg3MDAsIDcwMCkpO1xuXG5cbiAgICAgICAgcm9ja09iai5JbWFnZS5zcmMgPSBpbWFnZVJvY2s7XG4gICAgICAgIHNjaXNzb3JPYmouSW1hZ2Uuc3JjID0gaW1hZ2VTY2lzc29ycztcbiAgICAgICAgcGFwZXJPYmouSW1hZ2Uuc3JjID0gaW1hZ2VQYXBlcjtcblxuXG4gICAgICAgIC8vb25seSBnb2luZyB0byBwdXNoIGluIHR3byBvYmplY3RzIFxuICAgICAgICBFbnRpdHlIb2xkZXIucHVzaChyb2NrT2JqKTtcbiAgICAgICAgRW50aXR5SG9sZGVyLnB1c2goc2Npc3Nvck9iaik7XG4gICAgICAgIC8vICAgIEVudGl0eUhvbGRlci5wdXNoKHBhcGVyT2JqKTtcblxuICAgICAgICBSZXNldE9yaWdpbigpO1xuXG4gICAgICAgIHJvY2tPYmoudHJhbnNmb3JtLnRyYW5zbGF0ZSgzNTAsIDM1MCk7XG4gICAgICAgIHNjaXNzb3JPYmoudHJhbnNmb3JtLnRyYW5zbGF0ZSg2NTAsIDM1MCk7XG5cbiAgICAgICAgdGhpcy5DcmVhdGVVSSgpO1xuICAgIH0sXG4gICAgQ3JlYXRlVUkoKSB7XG5cbiAgICAgICAgbGV0IFVJX1MgPSBuZXcgbW9kdWxlcy5VSV9TcXVhcmUoMjQwLCA1MDAsIDE1MCwgMTUwLCAyNSwgMjApO1xuICAgICAgICBsZXQgVUlfUzEgPSBuZXcgbW9kdWxlcy5VSV9TcXVhcmUoNDQwLCA1MDAsIDE1MCwgMTUwLCAzNSwgMzUpO1xuICAgICAgICBsZXQgVUlfUzIgPSBuZXcgbW9kdWxlcy5VSV9TcXVhcmUoNjQwLCA1MDAsIDE1MCwgMTUwLCAzNSwgMTApO1xuXG4gICAgICAgIC8vQ3JlYXRpbmcgVUkgb2JqZWN0cyB0aGF0IHVzZSwgdGhlIHJvY2ssIHBhcGVyLCBzY2lzc29ycyBhc3NldHMgXG4gICAgICAgIC8vVGhleSBtYXkgYXBwZWFyIHRvIGJlIHRoZSBzYW1lIGxpa2UgbXkgZ2FtZU9iamVjdCBvYmplY3RzLCBidXQgXG4gICAgICAgIC8vdGhleSdyZSBub3QsIHRoZXkgcGVmb3JtIGFuZCBzZXJ2ZSBkaWZmZXJlbnQgZnVuY3Rpb25zLlxuICAgICAgICBsZXQgc21hbGxwYXBlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzbWFsbHBhcGVyLnNyYyA9IGltYWdlU21hbGxQYXBlcjtcbiAgICAgICAgbGV0IHNtYWxscm9jayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzbWFsbHJvY2suc3JjID0gaW1hZ2VTbWFsbFJvY2s7XG4gICAgICAgIGxldCBzbWFsbHNjaXNzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc21hbGxzY2lzc29yLnNyYyA9IGltYWdlU21hbGxTY2lzc29ycztcblxuXG4gICAgICAgIFVJX1MuaW1hZ2UgPSBzbWFsbHBhcGVyO1xuICAgICAgICBVSV9TMS5pbWFnZSA9IHNtYWxscm9jaztcbiAgICAgICAgVUlfUzIuaW1hZ2UgPSBzbWFsbHNjaXNzb3I7XG5cblxuICAgICAgICBVSUhvbGRlci5wdXNoKFVJX1MpO1xuICAgICAgICBVSUhvbGRlci5wdXNoKFVJX1MxKTtcbiAgICAgICAgVUlIb2xkZXIucHVzaChVSV9TMik7XG5cbiAgICB9LFxuICAgIFJlbmRlcigpIHtcbiAgICAgICAgLy9SZW5kZXIgR2FtZU9iamVjdHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFbnRpdHlIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgXG4gICAgICAgICAgICBEcmF3U3ByaXRlKEVudGl0eUhvbGRlcltpXS5JbWFnZSwgRW50aXR5SG9sZGVyW2ldLngsIEVudGl0eUhvbGRlcltpXS55KTtcbiAgICAgICAgfVxuICAgICAgICAvL1JlbmRlciBVSSBPYmplY3RzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVUlIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIERyYXdVSVNxdWFyZShVSUhvbGRlcltpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVXBkYXRlKCkge1xuICAgICAgICAvL3NjZW5lIGxvZ2ljIGZvciBnYW1lIG9iamVjdHMgZ29lcyBoZXJlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRW50aXR5SG9sZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL05ldyB3YXkgb2YgYWNjZXNzaW5nIGFsbCBlbGVtZW50cyBvZiBlbnRpdHkgaG9sZGVyIHdpdGhvdXQgXG4gICAgICAgICAgICAvL2NvbnN0YW50bHkgaGF2aW5nIHRvIHdyaXRlIGNvZGUgdG8gYWNjZXNzIEVudGl0eUhvbGRlclxuICAgICAgICAgICAgbGV0IHRlbXBFbnRpdHkgPSBFbnRpdHlIb2xkZXJbaV07XG5cblxuICAgICAgICAgICAgdGVtcEVudGl0eS54ID0gdGVtcEVudGl0eS50cmFuc2Zvcm0uZWxlbWVudHNbNl07XG4gICAgICAgICAgICB0ZW1wRW50aXR5LnkgPSB0ZW1wRW50aXR5LnRyYW5zZm9ybS5lbGVtZW50c1s3XTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgfSxcbiAgICBFdmVudHMoKXtcbiAgICAgICAgICAvL3NjZW5lIGxvZ2ljIGZvciBVSSBvYmplY3RzIGdvZXMgaGVyZSBcbiAgICAgICAgICBmb3IgKGxldCBpID0wOyBpPCBVSUhvbGRlci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBVSUhvbGRlcltpXS5jb2xsaXNpb25EZXRlY3Rpb24obW91c2VDb29yZHMucG9zLngsbW91c2VDb29yZHMucG9zLnkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBVSSBib3ggbnVtYmVyOiBcIitpKTtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuICAgIENsZWFyU2NlbmUoKSB7XG4gICAgICAgIC8vIHdyaXRlIGNvZGUgaGVyZSB0byBjbGVhciBzY2VuZVxuICAgICAgICAvL0hhcmRjb2RlZCBzY3JlZW4gd2lkdGggYW5kIHNjcmVlbiBoZWlnaHQgdmFsdWVcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwwLDEwMjQsNzY4KTtcbiAgICB9LFxufTtcblxuXG5cblxuLy9TY2VuZSBEcmF3ZXIgaGVscGVyIGZ1bmN0aW9uXG5mdW5jdGlvbiBSZXNldE9yaWdpbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVudGl0eUhvbGRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVzZXRPcmlnaW4gPSBuZXcgbW9kdWxlcy50aHJlZUpzTW9kLlZlY3RvcjIoMCwgMCk7XG5cbiAgICAgICAgbGV0IHRlbXBFbnRpdHkgPSBFbnRpdHlIb2xkZXJbaV07XG5cbiAgICAgICAgcmVzZXRPcmlnaW4ueCA9IHRlbXBFbnRpdHkuSW1hZ2Uud2lkdGg7XG4gICAgICAgIHJlc2V0T3JpZ2luLnkgPSB0ZW1wRW50aXR5LkltYWdlLmhlaWdodDtcblxuICAgICAgICByZXNldE9yaWdpbi54ID0gcmVzZXRPcmlnaW4ueCAvIDI7XG4gICAgICAgIHJlc2V0T3JpZ2luLnkgPSByZXNldE9yaWdpbi55IC8gMjtcblxuICAgICAgICB0ZW1wRW50aXR5LnggKz0gcmVzZXRPcmlnaW4ueCAqIC0xO1xuICAgICAgICB0ZW1wRW50aXR5LnkgKz0gcmVzZXRPcmlnaW4ueSAqIC0xO1xuXG4gICAgICAgIHRlbXBFbnRpdHkudHJhbnNmb3JtLmVsZW1lbnRzWzZdPXRlbXBFbnRpdHkueDtcbiAgICAgICAgdGVtcEVudGl0eS50cmFuc2Zvcm0uZWxlbWVudHNbN109dGVtcEVudGl0eS55O1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBEcmF3U3ByaXRlKENhbnZhc0ltYWdlU291cmNlXywgeF9zb3VyY2UsIHlfc291cmNlKSB7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoQ2FudmFzSW1hZ2VTb3VyY2VfLCB4X3NvdXJjZSwgeV9zb3VyY2UsIENhbnZhc0ltYWdlU291cmNlXy53aWR0aCwgQ2FudmFzSW1hZ2VTb3VyY2VfLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIERyYXdVSVNxdWFyZShVSV9zcXVhcmUpIHtcbiAgICAvL0NyZWF0ZSBCb3hcbiAgICBjb250ZXh0LmZpbGxSZWN0KFVJX3NxdWFyZS54LCBVSV9zcXVhcmUueSwgVUlfc3F1YXJlLndpZHRoLCBVSV9zcXVhcmUuaGVpZ2h0KTtcbiAgICAvL0hhcmRjb2RlZCBvZmZzZXQgbGVhdmluZyBVSV9zcXVhcmUgd2l0aCBvZmZzZXQgdmFyaWFibGUganVzdCBpbiBjYXNlIEkgd2FudCB0byBkbyBjb29sIHN0dWZmIHdpdGggaXQuXG4gICAgLy9jbGVhciBVSSBib3hcbiAgICBjb250ZXh0LmNsZWFyUmVjdChVSV9zcXVhcmUueCArIDUsIFVJX3NxdWFyZS55ICsgNSwgVUlfc3F1YXJlLndpZHRoIC0gMTAsIFVJX3NxdWFyZS5oZWlnaHQgLSAxMCk7XG4gICAgLy9EcmF3IGltYWdlIGluc2lkZSBib3hcbiAgICBjb250ZXh0LmRyYXdJbWFnZShVSV9zcXVhcmUuaW1hZ2UsIFVJX3NxdWFyZS54ICsgVUlfc3F1YXJlLm9mZlNldFgsIFVJX3NxdWFyZS55ICsgVUlfc3F1YXJlLm9mZlNldFksIFVJX3NxdWFyZS5pbWFnZS53aWR0aCwgVUlfc3F1YXJlLmltYWdlLmhlaWdodCk7XG5cbn1cblxuZnVuY3Rpb24gSW50aWFsaXphdGlvbigpIHtcblxuICAgIC8vIHJlZmFjdG9yQ1NTKCk7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpZXdwb3J0XCIpWzBdO1xuXG4gICAgY29uc29sZS5sb2coY2FudmFzKTtcblxuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbiAgICBpc3J1bm5pbmcgPSB0cnVlO1xuICAgIFNjZW5lMC5DcmVhdGVTY2VuZSgpO1xuXG4gICAgaWYgKGlzcnVubmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAvL2luIG9yZGVyIHRvIHVzZSB0aGlzIHByb3Blcmx5IEkgbmVlZCB0byBjYWxjdWxhdGUgdGhlIHNwZWVkIGF0IHdoaWNoIHRoZSBjYW52YXMgaXMgcnVubmluZywgY29udmVydCBpdCB0byBtaWxpc2Vjb25kcyB0aGVuIGRpdmlkZSBpdCBieSBteSBkZXNpcmUgZnJhbWUgcmF0ZVxuICAgICAgICAvLyB0aGUgdW5pdHMgb2YgdGltZSBoZXJlIGFyZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgLy9DcmVhdGluZyBhIDE2IG1zIGRlbGF5IG9uIHB1cnBvc2VcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKGdhbWVsb29wLCAxMDAwIC8gNjApO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGVHYW1lTG9vcCh0aW1lU3RhbXApIHtcbiAgICAvL0kgdGhpbmsgdGhhdCB3aGVuIHRoZSBmaXJzdCB0aW1lIHRoaXMgZ2V0cyBleGN1dGVkIHRpbWVzdGFtcCBlcXVhbHMgb3JpZ2luYWxseSB6ZXJvXG4gICAgLy9JbiBvcmRlciBsb2NrIHRoZSBmcmFtZSByYXRlLCB3aGF0IHlvdSBuZWVkIGlzIHRvIG1ha2UgaXQgc28gdGhhdCB0aGUgZnJhbWUgcmF0ZSBlcXVhbHMgdGhlIHNhbWUgYW1vdW50IG9mIGV4ZWN1dGlvbnMgaW4gYSBzZWNvbmRcbiAgICBzZWNvbmRzUGFzc2VkID0gKHRpbWVTdGFtcCAtIG9sZFRpbWVTdGFtcCkgLyAxMDAwO1xuICAgIG9sZFRpbWVTdGFtcCA9IHRpbWVTdGFtcDtcblxuICAgIC8vY2FsY3VsYXRlIGZwcyBcbiAgICBmcHMgPSBNYXRoLnJvdW5kKDEgLyBzZWNvbmRzUGFzc2VkKTtcblxuICAgIC8vRHJhdyBudW1iZXIgdG8gdGhlIHNjcmVlbiBcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5maWxsUmVjdCg5MzAsIDAsIDIwMCwgMTAwKTtcbiAgICBjb250ZXh0LmZvbnQgPSAnMjVweCBBcmlhbCc7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGNvbnRleHQuZmlsbFRleHQoXCJGUFM6IFwiICsgZnBzLCA5MzAsIDMwKTtcbn1cblxuXG5mdW5jdGlvbiBnYW1lbG9vcCh0aW1lU3RhbXApIHtcbiAgICBTY2VuZTAuQ2xlYXJTY2VuZSgpO1xuICAgIFNjZW5lMC5VcGRhdGUoKTtcbiAgICBTY2VuZTAuUmVuZGVyKCk7XG4gICAgaWYgKGlzcnVubmluZyA9PSB0cnVlKSB7XG4gICAgICAgIC8vICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVsb29wKTtcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKGdhbWVsb29wLCAxMDAwIC8gNjApO1xuICAgIH1cbiAgICAvKnJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIHdpbGwgYWN0dWFsbHkgc2V0IHRoZSBmcmFtZSByYXRlIG9mIG15IGNhbnZhcyBcbiAgICB0aGVyZSBpcyBubyBuZWVkIHRvIGFjdHVhbGx5IGdldCB0aGUgc3RlcHMgb2YgbXkgd2ViIGJyb3dzZXIgYW5kIHRoZW4gdXNlIHRob3NlIFxuICAgIHN0ZXBzIHRvIHNpbXVsYXRlIG15IGdhbWUgbG9naWMuXG4gICAgICovXG5cbn1cblxuZnVuY3Rpb24gcmVmYWN0b3JDU1MoKSB7XG4gICAgbGV0IHN0eWxlX3RleHQgPSBcIlxcblwiO1xuXG4gICAgbGV0IHN0eWxlX2VsZW1lbnRzID1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTVFlMRVwiKTtcblxuICAgIGlmIChzdHlsZV9lbGVtZW50cy5sZW5ndGggPT0gMClcbiAgICAgICAgYWxlcnQoXCJObyBTdHlsZSBUYWchXCIpO1xuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlX2VsZW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgc3R5bGVfdGV4dCArPSBzdHlsZV9lbGVtZW50c1tpXS5vdXRlckhUTUw7XG5cbiAgICAgICAgc3R5bGVfdGV4dCA9IHN0eWxlX3RleHQudG9TdHJpbmcoKS5cbiAgICAgICAgICAgIHJlcGxhY2UoL1xcdC9nLCAnJykuc3BsaXQoJ1xcclxcbicpO1xuXG4gICAgICAgIGFsZXJ0KHN0eWxlX3RleHQpO1xuICAgICAgICBpbmplY3RDU1NJbnRvSFRNTChzdHlsZV90ZXh0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluamVjdENTU0ludG9IVE1MKHN0cmluZ18pIHtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBzdHJpbmdfKTtcbn1cblxuSW50aWFsaXphdGlvbigpO1xuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbW91c2VDb29yZHMucG9zLnggPSBlLmNsaWVudFg7XG4gICAgbW91c2VDb29yZHMucG9zLnkgPSBlLmNsaWVudFk7XG4gICAgY29uc29sZS5sb2coXCJYIGFuZCBZIHBvc2l0aW9uIG9mIE1vdXNlIGNsaWNrOlwiICsgbW91c2VDb29yZHMucG9zLnggKyBcIixcIiArIG1vdXNlQ29vcmRzLnBvcy55KTtcblxuICAgIFNjZW5lMC5FdmVudHMoKVxufSk7XG5cbi8qIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gYWRkIHRoaXMqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS5rZXkgKyBcIjpidXR0b24gd2FzIHByZXNzZWRcIik7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=