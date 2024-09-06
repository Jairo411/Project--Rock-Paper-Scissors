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
        this.transform.set(0,0,this.x,0,0,this.y,0,0,0);
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
    }
    

    collisionDectection()
    {
         ///Get point turn it into a vec2 
    let pVec2=[point.x,point.y];
    // Get bounding box position, turn it into a vec2
    let bVec2=[align_bounding_box.minX,align_bounding_box.minY,align_bounding_box.maxX,align_bounding_box.maxY];


    let qVec2=[0,0];
    //Get clamped Q on B to P
    for(i = 0; i< 2; i++)
    {
        let v = pVec2[i];
        if(v < bVec2.minX){
            v = bVec2.minX
        }else if (v <bVec2.minY){
            v= bVec2.minY;
        }

        if(v > bVec2.maxX){
            v = bVec2.maxX
        }else if(v  > bVec2.maxY){
            v = bVec2.maxY;
        }
        qVec2[i]=v;
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
//GLOBAL VARIABLES

const Scene0 = {
    CreateScene() {


        let rockObj = new modules.gameObject(0, new Image(600, 600));
        let scissorObj = new modules.gameObject(1, new Image(600, 600));
        let paperObj = new modules.gameObject(2, new Image(200, 200));


        rockObj.Image.src = _public_images_rock_png__WEBPACK_IMPORTED_MODULE_1__;
        scissorObj.Image.src = _public_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__;
        paperObj.Image.src = _public_images_paper_png__WEBPACK_IMPORTED_MODULE_0__;


        //     rockObj.transform.translate(-600, 200);
        //     scissorObj.transform.translate(0, -200);


        //only going to push in two objects 
        EntityHolder.push(rockObj);
        EntityHolder.push(scissorObj);
        //    EntityHolder.push(paperObj);


    },
    DrawScene() {
        for (let i = 0; i < EntityHolder.length; i++) {
            DrawSprite(EntityHolder[i].Image, EntityHolder[i].x, EntityHolder[i].y);
        }
    },
    UI() {

        let UI_S = new modules.UI_Square(240, 500, 150, 150);
        let UI_S1 = new modules.UI_Square(440, 500, 150, 150);
        let UI_S2 = new modules.UI_Square(640, 500, 150, 150);


        //Creating UI objects that use, the rock, paper, scissors assets 
        //They may appear to be the same like my gameObject objects, but 
        //they're not, they peform and serve different functions.
        let UI_Manager = [UI_S, UI_S1, UI_S2];
        let smallpaper = new Image();
        smallpaper.src = _public_images_smallpaper_png__WEBPACK_IMPORTED_MODULE_3__;
        let smallrock = new Image();
        smallrock.src = _public_images_smallrock_png__WEBPACK_IMPORTED_MODULE_4__;
        let smallscissor = new Image();
        smallscissor.src = _public_images_smallscissors_png__WEBPACK_IMPORTED_MODULE_5__;

        DrawUISquare(UI_S);


        context.drawImage(smallpaper, 276, 530);

        DrawUISquare(UI_S1);

        context.drawImage(smallrock, 476, 530);


        DrawUISquare(UI_S2);
        context.drawImage(smallscissor, 674, 530);

    },
    Render() {


    },
    Update() {
        for (let i = 0; i < EntityHolder[i].length; i++) {

        }
    },
    ClearScene() {

    },
};




//Scene Drawer helper function
function ResetOrigin() {
    for (let i = 0; i < EntityHolder.length; i++) {
        let resetOrigin = new modules.threeJsMod.Vector2(0, 0);

        resetOrigin.x = EntityHolder[i].Image.width;
        resetOrigin.y = EntityHolder[i].Image.height;

        EntityHolder[i].x = resetOrigin.x * -1;
        EntityHolder[i].y = resetOrigin.y * -1;

        console.log(EntityHolder[i].x+ " " + EntityHolder[i].y);
    }
}

function DrawSprite(CanvasImageSource_, x_source, y_source) {
    ResetOrigin();
    context.drawImage(CanvasImageSource_, x_source, y_source, CanvasImageSource_.width, CanvasImageSource_.height);
}

function DrawUISquare(UI_square) {
    context.fillRect(UI_square.x, UI_square.y, UI_square.width, UI_square.height);
    //Hardcoded offset leaving UI_square with offset variable just in case I want to do cool stuff with it.
    context.clearRect(UI_square.x + 5, UI_square.y + 5, UI_square.width - 10, UI_square.height - 10);
}

function intialization() {

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
    //calculateGameLoop(performance.now());
    Scene0.Render()
    Scene0.Update();
    Scene0.DrawScene();
    Scene0.UI();
    Scene0.ClearScene();
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

intialization();

canvas.addEventListener("click", (e) => {
    mouseCoords.pos.x = e.clientX;
    mouseCoords.pos.y = e.clientY;
    console.log("X and Y position of Mouse click:" + mouseCoords.pos.x + "," + mouseCoords.pos.y);
});

/* you don't even need to add this*/
document.addEventListener("keyup", (e) => {
    console.log(e.key + ":button was pressed");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxzQ0FBc0MsNEJBQTRCLHFCQUFxQixrQkFBa0Isb0JBQW9CLG9CQUFvQixHQUFHLEtBQUsseUJBQXlCLEdBQUcsbUJBQW1CO0FBQ25YO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REw7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVaQUF1Wjs7QUFFdlo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQSwwQ0FBMEM7OztBQUcxQzs7QUFFQTs7QUFFQSx5Q0FBeUM7OztBQUd6Qzs7QUFFQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkMsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF3Qzs7O0FBR3hDOztBQUVBOztBQUVBLDBDQUEwQzs7O0FBRzFDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUMsZ0NBQWdDOzs7QUFHaEMsdUhBQXVIOztBQUV2SDtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU87QUFDNUQ7O0FBRUEsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLGlCQUFpQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QixzQkFBc0I7O0FBRXRCLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVEQUF1RDs7O0FBR3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUEscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7OztBQUd6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0ZBQXdGOzs7QUFHeEY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2Qyx3QkFBd0I7O0FBRXhCLHdCQUF3Qjs7QUFFeEIscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUEsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQSw2RUFBNkU7O0FBRTdFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBLGdGQUFnRjs7QUFFaEY7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSiwwQ0FBMEM7OztBQUcxQztBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCOzs7QUFHeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxzQkFBc0I7O0FBRWhFLG1EQUFtRDtBQUNuRCxJQUFJOzs7QUFHSixvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLElBQUk7OztBQUdKLHdHQUF3Rzs7QUFFeEcsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsa0NBQWtDO0FBQ2xDLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osWUFBWTtBQUNaLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsV0FBVztBQUNYLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7Ozs7OztVQ24vTHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNGO0FBQ1E7QUFDSTtBQUNGO0FBQ1E7QUFDMUM7QUFDMUIsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBLDRCQUE0QixvREFBUztBQUNyQywrQkFBK0Isd0RBQWE7QUFDNUMsNkJBQTZCLHFEQUFVOzs7QUFHdkM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7QUFDTDtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQWU7QUFDeEM7QUFDQSx3QkFBd0IseURBQWM7QUFDdEM7QUFDQSwyQkFBMkIsNkRBQWtCOztBQUU3Qzs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOzs7QUFHQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsNEJBQTRCOztBQUVwRDtBQUNBLEtBQUs7QUFDTDs7QUFFQSxLQUFLO0FBQ0w7Ozs7O0FBS0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vbm9kZV9tb2R1bGVzL3RocmVlanMtbWF0aC9idWlsZC90aHJlZWpzLW1hdGguY2pzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9zcmMvbWFpbi1zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC52aWV3cG9ydFxue1xuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogMTAyNHB4O1xuICAgIGhlaWdodDogNzY4cHg7XG59XG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZpZXdwb3J0XFxue1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwMDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6IDEwMjRweDtcXG4gICAgaGVpZ2h0OiA3NjhweDtcXG59XFxuaDF7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0aHJlZUpzTW9kPSByZXF1aXJlKFwidGhyZWVqcy1tYXRoXCIpO1xuY2xhc3MgZ2FtZU9iamVjdHtcbiAgICBjb25zdHJ1Y3RvcihpZF8sSW1hZ2VfKXtcbiAgICAgICAgdGhpcy5pZD0gaWRfO1xuICAgICAgICB0aGlzLkltYWdlPSBJbWFnZV87XG4gICAgICAgIHRoaXMudHJhbnNmb3JtPSBuZXcgdGhyZWVKc01vZC5NYXRyaXgzKCk7XG4gICAgICAgIHRoaXMueD0wO1xuICAgICAgICB0aGlzLnk9MDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2V0KDAsMCx0aGlzLngsMCwwLHRoaXMueSwwLDAsMCk7XG4gICAgfVxuXG59XG5jbGFzcyBVSV9TcXVhcmV7XG4gICAgY29uc3RydWN0b3IoeF8seV8sd2lkdGhfLGhlaWdodF8sb2ZmU2V0WF8sb2ZmU2V0WV8pXG4gICAge1xuICAgICAgICB0aGlzLng9eF87XG4gICAgICAgIHRoaXMueT15XztcbiAgICAgICAgdGhpcy53aWR0aD13aWR0aF87XG4gICAgICAgIHRoaXMuaGVpZ2h0PWhlaWdodF87XG4gICAgICAgIHRoaXMub2ZmU2V0WD1vZmZTZXRYXztcbiAgICAgICAgdGhpcy5vZmZTZXRZPW9mZlNldFlfO1xuICAgIH1cbiAgICBcblxuICAgIGNvbGxpc2lvbkRlY3RlY3Rpb24oKVxuICAgIHtcbiAgICAgICAgIC8vL0dldCBwb2ludCB0dXJuIGl0IGludG8gYSB2ZWMyIFxuICAgIGxldCBwVmVjMj1bcG9pbnQueCxwb2ludC55XTtcbiAgICAvLyBHZXQgYm91bmRpbmcgYm94IHBvc2l0aW9uLCB0dXJuIGl0IGludG8gYSB2ZWMyXG4gICAgbGV0IGJWZWMyPVthbGlnbl9ib3VuZGluZ19ib3gubWluWCxhbGlnbl9ib3VuZGluZ19ib3gubWluWSxhbGlnbl9ib3VuZGluZ19ib3gubWF4WCxhbGlnbl9ib3VuZGluZ19ib3gubWF4WV07XG5cblxuICAgIGxldCBxVmVjMj1bMCwwXTtcbiAgICAvL0dldCBjbGFtcGVkIFEgb24gQiB0byBQXG4gICAgZm9yKGkgPSAwOyBpPCAyOyBpKyspXG4gICAge1xuICAgICAgICBsZXQgdiA9IHBWZWMyW2ldO1xuICAgICAgICBpZih2IDwgYlZlYzIubWluWCl7XG4gICAgICAgICAgICB2ID0gYlZlYzIubWluWFxuICAgICAgICB9ZWxzZSBpZiAodiA8YlZlYzIubWluWSl7XG4gICAgICAgICAgICB2PSBiVmVjMi5taW5ZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodiA+IGJWZWMyLm1heFgpe1xuICAgICAgICAgICAgdiA9IGJWZWMyLm1heFhcbiAgICAgICAgfWVsc2UgaWYodiAgPiBiVmVjMi5tYXhZKXtcbiAgICAgICAgICAgIHYgPSBiVmVjMi5tYXhZO1xuICAgICAgICB9XG4gICAgICAgIHFWZWMyW2ldPXY7XG4gICAgfVxufVxuXG4gICAgUmV0dXJuQm91bmRpbmdCb3goKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbmV4cG9ydHMuZ2FtZU9iamVjdD0gZ2FtZU9iamVjdDtcbmV4cG9ydHMuVUlfU3F1YXJlPVVJX1NxdWFyZTtcbmV4cG9ydHMudGhyZWVKc01vZD10aHJlZUpzTW9kO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCBSRVZJU0lPTiA9ICcxNDRkZXYnO1xuY29uc3QgTU9VU0UgPSB7XG5cdExFRlQ6IDAsXG5cdE1JRERMRTogMSxcblx0UklHSFQ6IDIsXG5cdFJPVEFURTogMCxcblx0RE9MTFk6IDEsXG5cdFBBTjogMlxufTtcbmNvbnN0IFRPVUNIID0ge1xuXHRST1RBVEU6IDAsXG5cdFBBTjogMSxcblx0RE9MTFlfUEFOOiAyLFxuXHRET0xMWV9ST1RBVEU6IDNcbn07XG5jb25zdCBDdWxsRmFjZU5vbmUgPSAwO1xuY29uc3QgQ3VsbEZhY2VCYWNrID0gMTtcbmNvbnN0IEN1bGxGYWNlRnJvbnQgPSAyO1xuY29uc3QgQ3VsbEZhY2VGcm9udEJhY2sgPSAzO1xuY29uc3QgQmFzaWNTaGFkb3dNYXAgPSAwO1xuY29uc3QgUENGU2hhZG93TWFwID0gMTtcbmNvbnN0IFBDRlNvZnRTaGFkb3dNYXAgPSAyO1xuY29uc3QgVlNNU2hhZG93TWFwID0gMztcbmNvbnN0IEZyb250U2lkZSA9IDA7XG5jb25zdCBCYWNrU2lkZSA9IDE7XG5jb25zdCBEb3VibGVTaWRlID0gMjtcbmNvbnN0IE5vQmxlbmRpbmcgPSAwO1xuY29uc3QgTm9ybWFsQmxlbmRpbmcgPSAxO1xuY29uc3QgQWRkaXRpdmVCbGVuZGluZyA9IDI7XG5jb25zdCBTdWJ0cmFjdGl2ZUJsZW5kaW5nID0gMztcbmNvbnN0IE11bHRpcGx5QmxlbmRpbmcgPSA0O1xuY29uc3QgQ3VzdG9tQmxlbmRpbmcgPSA1O1xuY29uc3QgQWRkRXF1YXRpb24gPSAxMDA7XG5jb25zdCBTdWJ0cmFjdEVxdWF0aW9uID0gMTAxO1xuY29uc3QgUmV2ZXJzZVN1YnRyYWN0RXF1YXRpb24gPSAxMDI7XG5jb25zdCBNaW5FcXVhdGlvbiA9IDEwMztcbmNvbnN0IE1heEVxdWF0aW9uID0gMTA0O1xuY29uc3QgWmVyb0ZhY3RvciA9IDIwMDtcbmNvbnN0IE9uZUZhY3RvciA9IDIwMTtcbmNvbnN0IFNyY0NvbG9yRmFjdG9yID0gMjAyO1xuY29uc3QgT25lTWludXNTcmNDb2xvckZhY3RvciA9IDIwMztcbmNvbnN0IFNyY0FscGhhRmFjdG9yID0gMjA0O1xuY29uc3QgT25lTWludXNTcmNBbHBoYUZhY3RvciA9IDIwNTtcbmNvbnN0IERzdEFscGhhRmFjdG9yID0gMjA2O1xuY29uc3QgT25lTWludXNEc3RBbHBoYUZhY3RvciA9IDIwNztcbmNvbnN0IERzdENvbG9yRmFjdG9yID0gMjA4O1xuY29uc3QgT25lTWludXNEc3RDb2xvckZhY3RvciA9IDIwOTtcbmNvbnN0IFNyY0FscGhhU2F0dXJhdGVGYWN0b3IgPSAyMTA7XG5jb25zdCBOZXZlckRlcHRoID0gMDtcbmNvbnN0IEFsd2F5c0RlcHRoID0gMTtcbmNvbnN0IExlc3NEZXB0aCA9IDI7XG5jb25zdCBMZXNzRXF1YWxEZXB0aCA9IDM7XG5jb25zdCBFcXVhbERlcHRoID0gNDtcbmNvbnN0IEdyZWF0ZXJFcXVhbERlcHRoID0gNTtcbmNvbnN0IEdyZWF0ZXJEZXB0aCA9IDY7XG5jb25zdCBOb3RFcXVhbERlcHRoID0gNztcbmNvbnN0IE11bHRpcGx5T3BlcmF0aW9uID0gMDtcbmNvbnN0IE1peE9wZXJhdGlvbiA9IDE7XG5jb25zdCBBZGRPcGVyYXRpb24gPSAyO1xuY29uc3QgTm9Ub25lTWFwcGluZyA9IDA7XG5jb25zdCBMaW5lYXJUb25lTWFwcGluZyA9IDE7XG5jb25zdCBSZWluaGFyZFRvbmVNYXBwaW5nID0gMjtcbmNvbnN0IENpbmVvblRvbmVNYXBwaW5nID0gMztcbmNvbnN0IEFDRVNGaWxtaWNUb25lTWFwcGluZyA9IDQ7XG5jb25zdCBDdXN0b21Ub25lTWFwcGluZyA9IDU7XG5jb25zdCBVVk1hcHBpbmcgPSAzMDA7XG5jb25zdCBDdWJlUmVmbGVjdGlvbk1hcHBpbmcgPSAzMDE7XG5jb25zdCBDdWJlUmVmcmFjdGlvbk1hcHBpbmcgPSAzMDI7XG5jb25zdCBFcXVpcmVjdGFuZ3VsYXJSZWZsZWN0aW9uTWFwcGluZyA9IDMwMztcbmNvbnN0IEVxdWlyZWN0YW5ndWxhclJlZnJhY3Rpb25NYXBwaW5nID0gMzA0O1xuY29uc3QgQ3ViZVVWUmVmbGVjdGlvbk1hcHBpbmcgPSAzMDY7XG5jb25zdCBSZXBlYXRXcmFwcGluZyA9IDEwMDA7XG5jb25zdCBDbGFtcFRvRWRnZVdyYXBwaW5nID0gMTAwMTtcbmNvbnN0IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcgPSAxMDAyO1xuY29uc3QgTmVhcmVzdEZpbHRlciA9IDEwMDM7XG5jb25zdCBOZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlciA9IDEwMDQ7XG5jb25zdCBOZWFyZXN0TWlwTWFwTmVhcmVzdEZpbHRlciA9IDEwMDQ7XG5jb25zdCBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyID0gMTAwNTtcbmNvbnN0IE5lYXJlc3RNaXBNYXBMaW5lYXJGaWx0ZXIgPSAxMDA1O1xuY29uc3QgTGluZWFyRmlsdGVyID0gMTAwNjtcbmNvbnN0IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIgPSAxMDA3O1xuY29uc3QgTGluZWFyTWlwTWFwTmVhcmVzdEZpbHRlciA9IDEwMDc7XG5jb25zdCBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIgPSAxMDA4O1xuY29uc3QgTGluZWFyTWlwTWFwTGluZWFyRmlsdGVyID0gMTAwODtcbmNvbnN0IFVuc2lnbmVkQnl0ZVR5cGUgPSAxMDA5O1xuY29uc3QgQnl0ZVR5cGUgPSAxMDEwO1xuY29uc3QgU2hvcnRUeXBlID0gMTAxMTtcbmNvbnN0IFVuc2lnbmVkU2hvcnRUeXBlID0gMTAxMjtcbmNvbnN0IEludFR5cGUgPSAxMDEzO1xuY29uc3QgVW5zaWduZWRJbnRUeXBlID0gMTAxNDtcbmNvbnN0IEZsb2F0VHlwZSA9IDEwMTU7XG5jb25zdCBIYWxmRmxvYXRUeXBlID0gMTAxNjtcbmNvbnN0IFVuc2lnbmVkU2hvcnQ0NDQ0VHlwZSA9IDEwMTc7XG5jb25zdCBVbnNpZ25lZFNob3J0NTU1MVR5cGUgPSAxMDE4O1xuY29uc3QgVW5zaWduZWRJbnQyNDhUeXBlID0gMTAyMDtcbmNvbnN0IEFscGhhRm9ybWF0ID0gMTAyMTtcbmNvbnN0IFJHQkZvcm1hdCA9IDEwMjI7IC8vIEBkZXByZWNhdGVkIHNpbmNlIHIxMzdcblxuY29uc3QgUkdCQUZvcm1hdCA9IDEwMjM7XG5jb25zdCBMdW1pbmFuY2VGb3JtYXQgPSAxMDI0O1xuY29uc3QgTHVtaW5hbmNlQWxwaGFGb3JtYXQgPSAxMDI1O1xuY29uc3QgRGVwdGhGb3JtYXQgPSAxMDI2O1xuY29uc3QgRGVwdGhTdGVuY2lsRm9ybWF0ID0gMTAyNztcbmNvbnN0IFJlZEZvcm1hdCA9IDEwMjg7XG5jb25zdCBSZWRJbnRlZ2VyRm9ybWF0ID0gMTAyOTtcbmNvbnN0IFJHRm9ybWF0ID0gMTAzMDtcbmNvbnN0IFJHSW50ZWdlckZvcm1hdCA9IDEwMzE7XG5jb25zdCBSR0JBSW50ZWdlckZvcm1hdCA9IDEwMzM7XG5jb25zdCBSR0JfUzNUQ19EWFQxX0Zvcm1hdCA9IDMzNzc2O1xuY29uc3QgUkdCQV9TM1RDX0RYVDFfRm9ybWF0ID0gMzM3Nzc7XG5jb25zdCBSR0JBX1MzVENfRFhUM19Gb3JtYXQgPSAzMzc3ODtcbmNvbnN0IFJHQkFfUzNUQ19EWFQ1X0Zvcm1hdCA9IDMzNzc5O1xuY29uc3QgUkdCX1BWUlRDXzRCUFBWMV9Gb3JtYXQgPSAzNTg0MDtcbmNvbnN0IFJHQl9QVlJUQ18yQlBQVjFfRm9ybWF0ID0gMzU4NDE7XG5jb25zdCBSR0JBX1BWUlRDXzRCUFBWMV9Gb3JtYXQgPSAzNTg0MjtcbmNvbnN0IFJHQkFfUFZSVENfMkJQUFYxX0Zvcm1hdCA9IDM1ODQzO1xuY29uc3QgUkdCX0VUQzFfRm9ybWF0ID0gMzYxOTY7XG5jb25zdCBSR0JfRVRDMl9Gb3JtYXQgPSAzNzQ5MjtcbmNvbnN0IFJHQkFfRVRDMl9FQUNfRm9ybWF0ID0gMzc0OTY7XG5jb25zdCBSR0JBX0FTVENfNHg0X0Zvcm1hdCA9IDM3ODA4O1xuY29uc3QgUkdCQV9BU1RDXzV4NF9Gb3JtYXQgPSAzNzgwOTtcbmNvbnN0IFJHQkFfQVNUQ181eDVfRm9ybWF0ID0gMzc4MTA7XG5jb25zdCBSR0JBX0FTVENfNng1X0Zvcm1hdCA9IDM3ODExO1xuY29uc3QgUkdCQV9BU1RDXzZ4Nl9Gb3JtYXQgPSAzNzgxMjtcbmNvbnN0IFJHQkFfQVNUQ184eDVfRm9ybWF0ID0gMzc4MTM7XG5jb25zdCBSR0JBX0FTVENfOHg2X0Zvcm1hdCA9IDM3ODE0O1xuY29uc3QgUkdCQV9BU1RDXzh4OF9Gb3JtYXQgPSAzNzgxNTtcbmNvbnN0IFJHQkFfQVNUQ18xMHg1X0Zvcm1hdCA9IDM3ODE2O1xuY29uc3QgUkdCQV9BU1RDXzEweDZfRm9ybWF0ID0gMzc4MTc7XG5jb25zdCBSR0JBX0FTVENfMTB4OF9Gb3JtYXQgPSAzNzgxODtcbmNvbnN0IFJHQkFfQVNUQ18xMHgxMF9Gb3JtYXQgPSAzNzgxOTtcbmNvbnN0IFJHQkFfQVNUQ18xMngxMF9Gb3JtYXQgPSAzNzgyMDtcbmNvbnN0IFJHQkFfQVNUQ18xMngxMl9Gb3JtYXQgPSAzNzgyMTtcbmNvbnN0IFJHQkFfQlBUQ19Gb3JtYXQgPSAzNjQ5MjtcbmNvbnN0IExvb3BPbmNlID0gMjIwMDtcbmNvbnN0IExvb3BSZXBlYXQgPSAyMjAxO1xuY29uc3QgTG9vcFBpbmdQb25nID0gMjIwMjtcbmNvbnN0IEludGVycG9sYXRlRGlzY3JldGUgPSAyMzAwO1xuY29uc3QgSW50ZXJwb2xhdGVMaW5lYXIgPSAyMzAxO1xuY29uc3QgSW50ZXJwb2xhdGVTbW9vdGggPSAyMzAyO1xuY29uc3QgWmVyb0N1cnZhdHVyZUVuZGluZyA9IDI0MDA7XG5jb25zdCBaZXJvU2xvcGVFbmRpbmcgPSAyNDAxO1xuY29uc3QgV3JhcEFyb3VuZEVuZGluZyA9IDI0MDI7XG5jb25zdCBOb3JtYWxBbmltYXRpb25CbGVuZE1vZGUgPSAyNTAwO1xuY29uc3QgQWRkaXRpdmVBbmltYXRpb25CbGVuZE1vZGUgPSAyNTAxO1xuY29uc3QgVHJpYW5nbGVzRHJhd01vZGUgPSAwO1xuY29uc3QgVHJpYW5nbGVTdHJpcERyYXdNb2RlID0gMTtcbmNvbnN0IFRyaWFuZ2xlRmFuRHJhd01vZGUgPSAyO1xuY29uc3QgTGluZWFyRW5jb2RpbmcgPSAzMDAwO1xuY29uc3Qgc1JHQkVuY29kaW5nID0gMzAwMTtcbmNvbnN0IEJhc2ljRGVwdGhQYWNraW5nID0gMzIwMDtcbmNvbnN0IFJHQkFEZXB0aFBhY2tpbmcgPSAzMjAxO1xuY29uc3QgVGFuZ2VudFNwYWNlTm9ybWFsTWFwID0gMDtcbmNvbnN0IE9iamVjdFNwYWNlTm9ybWFsTWFwID0gMTsgLy8gQ29sb3Igc3BhY2Ugc3RyaW5nIGlkZW50aWZpZXJzLCBtYXRjaGluZyBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDQgYW5kIFdlYkdQVSBuYW1lcyB3aGVyZSBhdmFpbGFibGUuXG5cbmNvbnN0IE5vQ29sb3JTcGFjZSA9ICcnO1xuY29uc3QgU1JHQkNvbG9yU3BhY2UgPSAnc3JnYic7XG5jb25zdCBMaW5lYXJTUkdCQ29sb3JTcGFjZSA9ICdzcmdiLWxpbmVhcic7XG5jb25zdCBaZXJvU3RlbmNpbE9wID0gMDtcbmNvbnN0IEtlZXBTdGVuY2lsT3AgPSA3NjgwO1xuY29uc3QgUmVwbGFjZVN0ZW5jaWxPcCA9IDc2ODE7XG5jb25zdCBJbmNyZW1lbnRTdGVuY2lsT3AgPSA3NjgyO1xuY29uc3QgRGVjcmVtZW50U3RlbmNpbE9wID0gNzY4MztcbmNvbnN0IEluY3JlbWVudFdyYXBTdGVuY2lsT3AgPSAzNDA1NTtcbmNvbnN0IERlY3JlbWVudFdyYXBTdGVuY2lsT3AgPSAzNDA1NjtcbmNvbnN0IEludmVydFN0ZW5jaWxPcCA9IDUzODY7XG5jb25zdCBOZXZlclN0ZW5jaWxGdW5jID0gNTEyO1xuY29uc3QgTGVzc1N0ZW5jaWxGdW5jID0gNTEzO1xuY29uc3QgRXF1YWxTdGVuY2lsRnVuYyA9IDUxNDtcbmNvbnN0IExlc3NFcXVhbFN0ZW5jaWxGdW5jID0gNTE1O1xuY29uc3QgR3JlYXRlclN0ZW5jaWxGdW5jID0gNTE2O1xuY29uc3QgTm90RXF1YWxTdGVuY2lsRnVuYyA9IDUxNztcbmNvbnN0IEdyZWF0ZXJFcXVhbFN0ZW5jaWxGdW5jID0gNTE4O1xuY29uc3QgQWx3YXlzU3RlbmNpbEZ1bmMgPSA1MTk7XG5jb25zdCBTdGF0aWNEcmF3VXNhZ2UgPSAzNTA0NDtcbmNvbnN0IER5bmFtaWNEcmF3VXNhZ2UgPSAzNTA0ODtcbmNvbnN0IFN0cmVhbURyYXdVc2FnZSA9IDM1MDQwO1xuY29uc3QgU3RhdGljUmVhZFVzYWdlID0gMzUwNDU7XG5jb25zdCBEeW5hbWljUmVhZFVzYWdlID0gMzUwNDk7XG5jb25zdCBTdHJlYW1SZWFkVXNhZ2UgPSAzNTA0MTtcbmNvbnN0IFN0YXRpY0NvcHlVc2FnZSA9IDM1MDQ2O1xuY29uc3QgRHluYW1pY0NvcHlVc2FnZSA9IDM1MDUwO1xuY29uc3QgU3RyZWFtQ29weVVzYWdlID0gMzUwNDI7XG5jb25zdCBHTFNMMSA9ICcxMDAnO1xuY29uc3QgR0xTTDMgPSAnMzAwIGVzJztcbmNvbnN0IF9TUkdCQUZvcm1hdCA9IDEwMzU7IC8vIGZhbGxiYWNrIGZvciBXZWJHTCAxXG5cbmNsYXNzIFZlY3RvcjIge1xuXHRjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcblx0XHRWZWN0b3IyLnByb3RvdHlwZS5pc1ZlY3RvcjIgPSB0cnVlO1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXG5cdGdldCB3aWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy54O1xuXHR9XG5cblx0c2V0IHdpZHRoKHZhbHVlKSB7XG5cdFx0dGhpcy54ID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnk7XG5cdH1cblxuXHRzZXQgaGVpZ2h0KHZhbHVlKSB7XG5cdFx0dGhpcy55ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQoeCwgeSkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnggPSBzY2FsYXI7XG5cdFx0dGhpcy55ID0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0WCh4KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFkoeSkge1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRDb21wb25lbnQoaW5kZXgsIHZhbHVlKSB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnggPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy55ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldENvbXBvbmVudChpbmRleCkge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmV0dXJuIHRoaXMueDtcblxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy55O1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0Y29weSh2KSB7XG5cdFx0dGhpcy54ID0gdi54O1xuXHRcdHRoaXMueSA9IHYueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZCh2KSB7XG5cdFx0dGhpcy54ICs9IHYueDtcblx0XHR0aGlzLnkgKz0gdi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGFyKHMpIHtcblx0XHR0aGlzLnggKz0gcztcblx0XHR0aGlzLnkgKz0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCArIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgKyBiLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsZWRWZWN0b3Iodiwgcykge1xuXHRcdHRoaXMueCArPSB2LnggKiBzO1xuXHRcdHRoaXMueSArPSB2LnkgKiBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViKHYpIHtcblx0XHR0aGlzLnggLT0gdi54O1xuXHRcdHRoaXMueSAtPSB2Lnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWJTY2FsYXIocykge1xuXHRcdHRoaXMueCAtPSBzO1xuXHRcdHRoaXMueSAtPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViVmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54IC0gYi54O1xuXHRcdHRoaXMueSA9IGEueSAtIGIueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KHYpIHtcblx0XHR0aGlzLnggKj0gdi54O1xuXHRcdHRoaXMueSAqPSB2Lnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnggKj0gc2NhbGFyO1xuXHRcdHRoaXMueSAqPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXZpZGUodikge1xuXHRcdHRoaXMueCAvPSB2Lng7XG5cdFx0dGhpcy55IC89IHYueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpdmlkZVNjYWxhcihzY2FsYXIpIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigxIC8gc2NhbGFyKTtcblx0fVxuXG5cdGFwcGx5TWF0cml4MyhtKSB7XG5cdFx0Y29uc3QgeCA9IHRoaXMueCxcblx0XHRcdFx0XHR5ID0gdGhpcy55O1xuXHRcdGNvbnN0IGUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMueCA9IGVbMF0gKiB4ICsgZVszXSAqIHkgKyBlWzZdO1xuXHRcdHRoaXMueSA9IGVbMV0gKiB4ICsgZVs0XSAqIHkgKyBlWzddO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWluKHYpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIHYueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5taW4odGhpcy55LCB2LnkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWF4KHYpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1heCh0aGlzLngsIHYueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgodGhpcy55LCB2LnkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXAobWluLCBtYXgpIHtcblx0XHQvLyBhc3N1bWVzIG1pbiA8IG1heCwgY29tcG9uZW50d2lzZVxuXHRcdHRoaXMueCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdGhpcy54KSk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB0aGlzLnkpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wU2NhbGFyKG1pblZhbCwgbWF4VmFsKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueCkpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLnkpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wTGVuZ3RoKG1pbiwgbWF4KSB7XG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIobGVuZ3RoIHx8IDEpLm11bHRpcGx5U2NhbGFyKE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBsZW5ndGgpKSk7XG5cdH1cblxuXHRmbG9vcigpIHtcblx0XHR0aGlzLnggPSBNYXRoLmZsb29yKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5mbG9vcih0aGlzLnkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2VpbCgpIHtcblx0XHR0aGlzLnggPSBNYXRoLmNlaWwodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLmNlaWwodGhpcy55KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdW5kKCkge1xuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3VuZFRvWmVybygpIHtcblx0XHR0aGlzLnggPSB0aGlzLnggPCAwID8gTWF0aC5jZWlsKHRoaXMueCkgOiBNYXRoLmZsb29yKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gdGhpcy55IDwgMCA/IE1hdGguY2VpbCh0aGlzLnkpIDogTWF0aC5mbG9vcih0aGlzLnkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmVnYXRlKCkge1xuXHRcdHRoaXMueCA9IC10aGlzLng7XG5cdFx0dGhpcy55ID0gLXRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRvdCh2KSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcblx0fVxuXG5cdGNyb3NzKHYpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdi55IC0gdGhpcy55ICogdi54O1xuXHR9XG5cblx0bGVuZ3RoU3EoKSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcblx0fVxuXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG5cdH1cblxuXHRtYW5oYXR0YW5MZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMueCkgKyBNYXRoLmFicyh0aGlzLnkpO1xuXHR9XG5cblx0bm9ybWFsaXplKCkge1xuXHRcdHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpIHx8IDEpO1xuXHR9XG5cblx0YW5nbGUoKSB7XG5cdFx0Ly8gY29tcHV0ZXMgdGhlIGFuZ2xlIGluIHJhZGlhbnMgd2l0aCByZXNwZWN0IHRvIHRoZSBwb3NpdGl2ZSB4LWF4aXNcblx0XHRjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoLXRoaXMueSwgLXRoaXMueCkgKyBNYXRoLlBJO1xuXHRcdHJldHVybiBhbmdsZTtcblx0fVxuXG5cdGRpc3RhbmNlVG8odikge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XG5cdH1cblxuXHRkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XG5cdFx0Y29uc3QgZHggPSB0aGlzLnggLSB2LngsXG5cdFx0XHRcdFx0ZHkgPSB0aGlzLnkgLSB2Lnk7XG5cdFx0cmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuXHR9XG5cblx0bWFuaGF0dGFuRGlzdGFuY2VUbyh2KSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHYueCkgKyBNYXRoLmFicyh0aGlzLnkgLSB2LnkpO1xuXHR9XG5cblx0c2V0TGVuZ3RoKGxlbmd0aCkge1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGxlbmd0aCk7XG5cdH1cblxuXHRsZXJwKHYsIGFscGhhKSB7XG5cdFx0dGhpcy54ICs9ICh2LnggLSB0aGlzLngpICogYWxwaGE7XG5cdFx0dGhpcy55ICs9ICh2LnkgLSB0aGlzLnkpICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXJwVmVjdG9ycyh2MSwgdjIsIGFscGhhKSB7XG5cdFx0dGhpcy54ID0gdjEueCArICh2Mi54IC0gdjEueCkgKiBhbHBoYTtcblx0XHR0aGlzLnkgPSB2MS55ICsgKHYyLnkgLSB2MS55KSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHYpIHtcblx0XHRyZXR1cm4gdi54ID09PSB0aGlzLnggJiYgdi55ID09PSB0aGlzLnk7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHR0aGlzLnggPSBhcnJheVtvZmZzZXRdO1xuXHRcdHRoaXMueSA9IGFycmF5W29mZnNldCArIDFdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRoaXMueDtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRoaXMueTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0gLy8gZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpbmRleCApIHtcblx0Ly8gXHR0aGlzLnggPSBhdHRyaWJ1dGUuZ2V0WCggaW5kZXggKTtcblx0Ly8gXHR0aGlzLnkgPSBhdHRyaWJ1dGUuZ2V0WSggaW5kZXggKTtcblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0cm90YXRlQXJvdW5kKGNlbnRlciwgYW5nbGUpIHtcblx0XHRjb25zdCBjID0gTWF0aC5jb3MoYW5nbGUpLFxuXHRcdFx0XHRcdHMgPSBNYXRoLnNpbihhbmdsZSk7XG5cdFx0Y29uc3QgeCA9IHRoaXMueCAtIGNlbnRlci54O1xuXHRcdGNvbnN0IHkgPSB0aGlzLnkgLSBjZW50ZXIueTtcblx0XHR0aGlzLnggPSB4ICogYyAtIHkgKiBzICsgY2VudGVyLng7XG5cdFx0dGhpcy55ID0geCAqIHMgKyB5ICogYyArIGNlbnRlci55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmFuZG9tKCkge1xuXHRcdHRoaXMueCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0dGhpcy55ID0gTWF0aC5yYW5kb20oKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdCpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHR5aWVsZCB0aGlzLng7XG5cdFx0eWllbGQgdGhpcy55O1xuXHR9XG5cbn1cblxuY29uc3QgX2x1dCA9IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMGEnLCAnMGInLCAnMGMnLCAnMGQnLCAnMGUnLCAnMGYnLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMWEnLCAnMWInLCAnMWMnLCAnMWQnLCAnMWUnLCAnMWYnLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjQnLCAnMjUnLCAnMjYnLCAnMjcnLCAnMjgnLCAnMjknLCAnMmEnLCAnMmInLCAnMmMnLCAnMmQnLCAnMmUnLCAnMmYnLCAnMzAnLCAnMzEnLCAnMzInLCAnMzMnLCAnMzQnLCAnMzUnLCAnMzYnLCAnMzcnLCAnMzgnLCAnMzknLCAnM2EnLCAnM2InLCAnM2MnLCAnM2QnLCAnM2UnLCAnM2YnLCAnNDAnLCAnNDEnLCAnNDInLCAnNDMnLCAnNDQnLCAnNDUnLCAnNDYnLCAnNDcnLCAnNDgnLCAnNDknLCAnNGEnLCAnNGInLCAnNGMnLCAnNGQnLCAnNGUnLCAnNGYnLCAnNTAnLCAnNTEnLCAnNTInLCAnNTMnLCAnNTQnLCAnNTUnLCAnNTYnLCAnNTcnLCAnNTgnLCAnNTknLCAnNWEnLCAnNWInLCAnNWMnLCAnNWQnLCAnNWUnLCAnNWYnLCAnNjAnLCAnNjEnLCAnNjInLCAnNjMnLCAnNjQnLCAnNjUnLCAnNjYnLCAnNjcnLCAnNjgnLCAnNjknLCAnNmEnLCAnNmInLCAnNmMnLCAnNmQnLCAnNmUnLCAnNmYnLCAnNzAnLCAnNzEnLCAnNzInLCAnNzMnLCAnNzQnLCAnNzUnLCAnNzYnLCAnNzcnLCAnNzgnLCAnNzknLCAnN2EnLCAnN2InLCAnN2MnLCAnN2QnLCAnN2UnLCAnN2YnLCAnODAnLCAnODEnLCAnODInLCAnODMnLCAnODQnLCAnODUnLCAnODYnLCAnODcnLCAnODgnLCAnODknLCAnOGEnLCAnOGInLCAnOGMnLCAnOGQnLCAnOGUnLCAnOGYnLCAnOTAnLCAnOTEnLCAnOTInLCAnOTMnLCAnOTQnLCAnOTUnLCAnOTYnLCAnOTcnLCAnOTgnLCAnOTknLCAnOWEnLCAnOWInLCAnOWMnLCAnOWQnLCAnOWUnLCAnOWYnLCAnYTAnLCAnYTEnLCAnYTInLCAnYTMnLCAnYTQnLCAnYTUnLCAnYTYnLCAnYTcnLCAnYTgnLCAnYTknLCAnYWEnLCAnYWInLCAnYWMnLCAnYWQnLCAnYWUnLCAnYWYnLCAnYjAnLCAnYjEnLCAnYjInLCAnYjMnLCAnYjQnLCAnYjUnLCAnYjYnLCAnYjcnLCAnYjgnLCAnYjknLCAnYmEnLCAnYmInLCAnYmMnLCAnYmQnLCAnYmUnLCAnYmYnLCAnYzAnLCAnYzEnLCAnYzInLCAnYzMnLCAnYzQnLCAnYzUnLCAnYzYnLCAnYzcnLCAnYzgnLCAnYzknLCAnY2EnLCAnY2InLCAnY2MnLCAnY2QnLCAnY2UnLCAnY2YnLCAnZDAnLCAnZDEnLCAnZDInLCAnZDMnLCAnZDQnLCAnZDUnLCAnZDYnLCAnZDcnLCAnZDgnLCAnZDknLCAnZGEnLCAnZGInLCAnZGMnLCAnZGQnLCAnZGUnLCAnZGYnLCAnZTAnLCAnZTEnLCAnZTInLCAnZTMnLCAnZTQnLCAnZTUnLCAnZTYnLCAnZTcnLCAnZTgnLCAnZTknLCAnZWEnLCAnZWInLCAnZWMnLCAnZWQnLCAnZWUnLCAnZWYnLCAnZjAnLCAnZjEnLCAnZjInLCAnZjMnLCAnZjQnLCAnZjUnLCAnZjYnLCAnZjcnLCAnZjgnLCAnZjknLCAnZmEnLCAnZmInLCAnZmMnLCAnZmQnLCAnZmUnLCAnZmYnXTtcbmxldCBfc2VlZCA9IDEyMzQ1Njc7XG5jb25zdCBERUcyUkFEID0gTWF0aC5QSSAvIDE4MDtcbmNvbnN0IFJBRDJERUcgPSAxODAgLyBNYXRoLlBJOyAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9ob3ctdG8tY3JlYXRlLWEtZ3VpZC11dWlkLWluLWphdmFzY3JpcHQvMjE5NjMxMzYjMjE5NjMxMzZcblxuZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKCkge1xuXHRjb25zdCBkMCA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0Y29uc3QgZDEgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdGNvbnN0IGQyID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRjb25zdCBkMyA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0Y29uc3QgdXVpZCA9IF9sdXRbZDAgJiAweGZmXSArIF9sdXRbZDAgPj4gOCAmIDB4ZmZdICsgX2x1dFtkMCA+PiAxNiAmIDB4ZmZdICsgX2x1dFtkMCA+PiAyNCAmIDB4ZmZdICsgJy0nICsgX2x1dFtkMSAmIDB4ZmZdICsgX2x1dFtkMSA+PiA4ICYgMHhmZl0gKyAnLScgKyBfbHV0W2QxID4+IDE2ICYgMHgwZiB8IDB4NDBdICsgX2x1dFtkMSA+PiAyNCAmIDB4ZmZdICsgJy0nICsgX2x1dFtkMiAmIDB4M2YgfCAweDgwXSArIF9sdXRbZDIgPj4gOCAmIDB4ZmZdICsgJy0nICsgX2x1dFtkMiA+PiAxNiAmIDB4ZmZdICsgX2x1dFtkMiA+PiAyNCAmIDB4ZmZdICsgX2x1dFtkMyAmIDB4ZmZdICsgX2x1dFtkMyA+PiA4ICYgMHhmZl0gKyBfbHV0W2QzID4+IDE2ICYgMHhmZl0gKyBfbHV0W2QzID4+IDI0ICYgMHhmZl07IC8vIC50b0xvd2VyQ2FzZSgpIGhlcmUgZmxhdHRlbnMgY29uY2F0ZW5hdGVkIHN0cmluZ3MgdG8gc2F2ZSBoZWFwIG1lbW9yeSBzcGFjZS5cblxuXHRyZXR1cm4gdXVpZC50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xufSAvLyBjb21wdXRlIGV1Y2xpZGVhbiBtb2R1bG8gb2YgbSAlIG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01vZHVsb19vcGVyYXRpb25cblxuXG5mdW5jdGlvbiBldWNsaWRlYW5Nb2R1bG8obiwgbSkge1xuXHRyZXR1cm4gKG4gJSBtICsgbSkgJSBtO1xufSAvLyBMaW5lYXIgbWFwcGluZyBmcm9tIHJhbmdlIDxhMSwgYTI+IHRvIHJhbmdlIDxiMSwgYjI+XG5cblxuZnVuY3Rpb24gbWFwTGluZWFyKHgsIGExLCBhMiwgYjEsIGIyKSB7XG5cdHJldHVybiBiMSArICh4IC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xufSAvLyBodHRwczovL3d3dy5nYW1lZGV2Lm5ldC90dXRvcmlhbHMvcHJvZ3JhbW1pbmcvZ2VuZXJhbC1hbmQtZ2FtZXBsYXktcHJvZ3JhbW1pbmcvaW52ZXJzZS1sZXJwLWEtc3VwZXItdXNlZnVsLXlldC1vZnRlbi1vdmVybG9va2VkLWZ1bmN0aW9uLXI1MjMwL1xuXG5cbmZ1bmN0aW9uIGludmVyc2VMZXJwKHgsIHksIHZhbHVlKSB7XG5cdGlmICh4ICE9PSB5KSB7XG5cdFx0cmV0dXJuICh2YWx1ZSAtIHgpIC8gKHkgLSB4KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gMDtcblx0fVxufSAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfaW50ZXJwb2xhdGlvblxuXG5cbmZ1bmN0aW9uIGxlcnAoeCwgeSwgdCkge1xuXHRyZXR1cm4gKDEgLSB0KSAqIHggKyB0ICogeTtcbn0gLy8gaHR0cDovL3d3dy5yb3J5ZHJpc2NvbGwuY29tLzIwMTYvMDMvMDcvZnJhbWUtcmF0ZS1pbmRlcGVuZGVudC1kYW1waW5nLXVzaW5nLWxlcnAvXG5cblxuZnVuY3Rpb24gZGFtcCh4LCB5LCBsYW1iZGEsIGR0KSB7XG5cdHJldHVybiBsZXJwKHgsIHksIDEgLSBNYXRoLmV4cCgtbGFtYmRhICogZHQpKTtcbn0gLy8gaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yL3Zjc2pueXo3eDRcblxuXG5mdW5jdGlvbiBwaW5ncG9uZyh4LCBsZW5ndGggPSAxKSB7XG5cdHJldHVybiBsZW5ndGggLSBNYXRoLmFicyhldWNsaWRlYW5Nb2R1bG8oeCwgbGVuZ3RoICogMikgLSBsZW5ndGgpO1xufSAvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Ntb290aHN0ZXBcblxuXG5mdW5jdGlvbiBzbW9vdGhzdGVwKHgsIG1pbiwgbWF4KSB7XG5cdGlmICh4IDw9IG1pbikgcmV0dXJuIDA7XG5cdGlmICh4ID49IG1heCkgcmV0dXJuIDE7XG5cdHggPSAoeCAtIG1pbikgLyAobWF4IC0gbWluKTtcblx0cmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmZ1bmN0aW9uIHNtb290aGVyc3RlcCh4LCBtaW4sIG1heCkge1xuXHRpZiAoeCA8PSBtaW4pIHJldHVybiAwO1xuXHRpZiAoeCA+PSBtYXgpIHJldHVybiAxO1xuXHR4ID0gKHggLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cdHJldHVybiB4ICogeCAqIHggKiAoeCAqICh4ICogNiAtIDE1KSArIDEwKTtcbn0gLy8gUmFuZG9tIGludGVnZXIgZnJvbSA8bG93LCBoaWdoPiBpbnRlcnZhbFxuXG5cbmZ1bmN0aW9uIHJhbmRJbnQobG93LCBoaWdoKSB7XG5cdHJldHVybiBsb3cgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdyArIDEpKTtcbn0gLy8gUmFuZG9tIGZsb2F0IGZyb20gPGxvdywgaGlnaD4gaW50ZXJ2YWxcblxuXG5mdW5jdGlvbiByYW5kRmxvYXQobG93LCBoaWdoKSB7XG5cdHJldHVybiBsb3cgKyBNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpO1xufSAvLyBSYW5kb20gZmxvYXQgZnJvbSA8LXJhbmdlLzIsIHJhbmdlLzI+IGludGVydmFsXG5cblxuZnVuY3Rpb24gcmFuZEZsb2F0U3ByZWFkKHJhbmdlKSB7XG5cdHJldHVybiByYW5nZSAqICgwLjUgLSBNYXRoLnJhbmRvbSgpKTtcbn0gLy8gRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbIDAsIDEgXVxuXG5cbmZ1bmN0aW9uIHNlZWRlZFJhbmRvbShzKSB7XG5cdGlmIChzICE9PSB1bmRlZmluZWQpIF9zZWVkID0gczsgLy8gTXVsYmVycnkzMiBnZW5lcmF0b3JcblxuXHRsZXQgdCA9IF9zZWVkICs9IDB4NkQyQjc5RjU7XG5cdHQgPSBNYXRoLmltdWwodCBeIHQgPj4+IDE1LCB0IHwgMSk7XG5cdHQgXj0gdCArIE1hdGguaW11bCh0IF4gdCA+Pj4gNywgdCB8IDYxKTtcblx0cmV0dXJuICgodCBeIHQgPj4+IDE0KSA+Pj4gMCkgLyA0Mjk0OTY3Mjk2O1xufVxuXG5mdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKSB7XG5cdHJldHVybiBkZWdyZWVzICogREVHMlJBRDtcbn1cblxuZnVuY3Rpb24gcmFkVG9EZWcocmFkaWFucykge1xuXHRyZXR1cm4gcmFkaWFucyAqIFJBRDJERUc7XG59XG5cbmZ1bmN0aW9uIGlzUG93ZXJPZlR3byh2YWx1ZSkge1xuXHRyZXR1cm4gKHZhbHVlICYgdmFsdWUgLSAxKSA9PT0gMCAmJiB2YWx1ZSAhPT0gMDtcbn1cblxuZnVuY3Rpb24gY2VpbFBvd2VyT2ZUd28odmFsdWUpIHtcblx0cmV0dXJuIE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMikpO1xufVxuXG5mdW5jdGlvbiBmbG9vclBvd2VyT2ZUd28odmFsdWUpIHtcblx0cmV0dXJuIE1hdGgucG93KDIsIE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpKTtcbn1cblxuZnVuY3Rpb24gc2V0UXVhdGVybmlvbkZyb21Qcm9wZXJFdWxlcihxLCBhLCBiLCBjLCBvcmRlcikge1xuXHQvLyBJbnRyaW5zaWMgUHJvcGVyIEV1bGVyIEFuZ2xlcyAtIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FdWxlcl9hbmdsZXNcblx0Ly8gcm90YXRpb25zIGFyZSBhcHBsaWVkIHRvIHRoZSBheGVzIGluIHRoZSBvcmRlciBzcGVjaWZpZWQgYnkgJ29yZGVyJ1xuXHQvLyByb3RhdGlvbiBieSBhbmdsZSAnYScgaXMgYXBwbGllZCBmaXJzdCwgdGhlbiBieSBhbmdsZSAnYicsIHRoZW4gYnkgYW5nbGUgJ2MnXG5cdC8vIGFuZ2xlcyBhcmUgaW4gcmFkaWFuc1xuXHRjb25zdCBjb3MgPSBNYXRoLmNvcztcblx0Y29uc3Qgc2luID0gTWF0aC5zaW47XG5cdGNvbnN0IGMyID0gY29zKGIgLyAyKTtcblx0Y29uc3QgczIgPSBzaW4oYiAvIDIpO1xuXHRjb25zdCBjMTMgPSBjb3MoKGEgKyBjKSAvIDIpO1xuXHRjb25zdCBzMTMgPSBzaW4oKGEgKyBjKSAvIDIpO1xuXHRjb25zdCBjMV8zID0gY29zKChhIC0gYykgLyAyKTtcblx0Y29uc3QgczFfMyA9IHNpbigoYSAtIGMpIC8gMik7XG5cdGNvbnN0IGMzXzEgPSBjb3MoKGMgLSBhKSAvIDIpO1xuXHRjb25zdCBzM18xID0gc2luKChjIC0gYSkgLyAyKTtcblxuXHRzd2l0Y2ggKG9yZGVyKSB7XG5cdFx0Y2FzZSAnWFlYJzpcblx0XHRcdHEuc2V0KGMyICogczEzLCBzMiAqIGMxXzMsIHMyICogczFfMywgYzIgKiBjMTMpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICdZWlknOlxuXHRcdFx0cS5zZXQoczIgKiBzMV8zLCBjMiAqIHMxMywgczIgKiBjMV8zLCBjMiAqIGMxMyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgJ1pYWic6XG5cdFx0XHRxLnNldChzMiAqIGMxXzMsIHMyICogczFfMywgYzIgKiBzMTMsIGMyICogYzEzKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnWFpYJzpcblx0XHRcdHEuc2V0KGMyICogczEzLCBzMiAqIHMzXzEsIHMyICogYzNfMSwgYzIgKiBjMTMpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICdZWFknOlxuXHRcdFx0cS5zZXQoczIgKiBjM18xLCBjMiAqIHMxMywgczIgKiBzM18xLCBjMiAqIGMxMyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgJ1pZWic6XG5cdFx0XHRxLnNldChzMiAqIHMzXzEsIHMyICogYzNfMSwgYzIgKiBzMTMsIGMyICogYzEzKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuTWF0aFV0aWxzOiAuc2V0UXVhdGVybmlvbkZyb21Qcm9wZXJFdWxlcigpIGVuY291bnRlcmVkIGFuIHVua25vd24gb3JkZXI6ICcgKyBvcmRlcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVub3JtYWxpemUodmFsdWUsIGFycmF5KSB7XG5cdHN3aXRjaCAoYXJyYXkuY29uc3RydWN0b3IpIHtcblx0XHRjYXNlIEZsb2F0MzJBcnJheTpcblx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdGNhc2UgVWludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gdmFsdWUgLyA2NTUzNS4wO1xuXG5cdFx0Y2FzZSBVaW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIHZhbHVlIC8gMjU1LjA7XG5cblx0XHRjYXNlIEludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgodmFsdWUgLyAzMjc2Ny4wLCAtMS4wKTtcblxuXHRcdGNhc2UgSW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIE1hdGgubWF4KHZhbHVlIC8gMTI3LjAsIC0xLjApO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb21wb25lbnQgdHlwZS4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIGFycmF5KSB7XG5cdHN3aXRjaCAoYXJyYXkuY29uc3RydWN0b3IpIHtcblx0XHRjYXNlIEZsb2F0MzJBcnJheTpcblx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdGNhc2UgVWludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDY1NTM1LjApO1xuXG5cdFx0Y2FzZSBVaW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAyNTUuMCk7XG5cblx0XHRjYXNlIEludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDMyNzY3LjApO1xuXG5cdFx0Y2FzZSBJbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEyNy4wKTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29tcG9uZW50IHR5cGUuJyk7XG5cdH1cbn1cblxudmFyIE1hdGhVdGlscyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcblx0X19wcm90b19fOiBudWxsLFxuXHRERUcyUkFEOiBERUcyUkFELFxuXHRSQUQyREVHOiBSQUQyREVHLFxuXHRnZW5lcmF0ZVVVSUQ6IGdlbmVyYXRlVVVJRCxcblx0Y2xhbXA6IGNsYW1wLFxuXHRldWNsaWRlYW5Nb2R1bG86IGV1Y2xpZGVhbk1vZHVsbyxcblx0bWFwTGluZWFyOiBtYXBMaW5lYXIsXG5cdGludmVyc2VMZXJwOiBpbnZlcnNlTGVycCxcblx0bGVycDogbGVycCxcblx0ZGFtcDogZGFtcCxcblx0cGluZ3Bvbmc6IHBpbmdwb25nLFxuXHRzbW9vdGhzdGVwOiBzbW9vdGhzdGVwLFxuXHRzbW9vdGhlcnN0ZXA6IHNtb290aGVyc3RlcCxcblx0cmFuZEludDogcmFuZEludCxcblx0cmFuZEZsb2F0OiByYW5kRmxvYXQsXG5cdHJhbmRGbG9hdFNwcmVhZDogcmFuZEZsb2F0U3ByZWFkLFxuXHRzZWVkZWRSYW5kb206IHNlZWRlZFJhbmRvbSxcblx0ZGVnVG9SYWQ6IGRlZ1RvUmFkLFxuXHRyYWRUb0RlZzogcmFkVG9EZWcsXG5cdGlzUG93ZXJPZlR3bzogaXNQb3dlck9mVHdvLFxuXHRjZWlsUG93ZXJPZlR3bzogY2VpbFBvd2VyT2ZUd28sXG5cdGZsb29yUG93ZXJPZlR3bzogZmxvb3JQb3dlck9mVHdvLFxuXHRzZXRRdWF0ZXJuaW9uRnJvbVByb3BlckV1bGVyOiBzZXRRdWF0ZXJuaW9uRnJvbVByb3BlckV1bGVyLFxuXHRub3JtYWxpemU6IG5vcm1hbGl6ZSxcblx0ZGVub3JtYWxpemU6IGRlbm9ybWFsaXplXG59KTtcblxuY2xhc3MgUXVhdGVybmlvbiB7XG5cdGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAxKSB7XG5cdFx0dGhpcy5pc1F1YXRlcm5pb24gPSB0cnVlO1xuXHRcdHRoaXMuX3ggPSB4O1xuXHRcdHRoaXMuX3kgPSB5O1xuXHRcdHRoaXMuX3ogPSB6O1xuXHRcdHRoaXMuX3cgPSB3O1xuXHR9XG5cblx0c3RhdGljIHNsZXJwRmxhdChkc3QsIGRzdE9mZnNldCwgc3JjMCwgc3JjT2Zmc2V0MCwgc3JjMSwgc3JjT2Zmc2V0MSwgdCkge1xuXHRcdC8vIGZ1enotZnJlZSwgYXJyYXktYmFzZWQgUXVhdGVybmlvbiBTTEVSUCBvcGVyYXRpb25cblx0XHRsZXQgeDAgPSBzcmMwW3NyY09mZnNldDAgKyAwXSxcblx0XHRcdFx0eTAgPSBzcmMwW3NyY09mZnNldDAgKyAxXSxcblx0XHRcdFx0ejAgPSBzcmMwW3NyY09mZnNldDAgKyAyXSxcblx0XHRcdFx0dzAgPSBzcmMwW3NyY09mZnNldDAgKyAzXTtcblx0XHRjb25zdCB4MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDBdLFxuXHRcdFx0XHRcdHkxID0gc3JjMVtzcmNPZmZzZXQxICsgMV0sXG5cdFx0XHRcdFx0ejEgPSBzcmMxW3NyY09mZnNldDEgKyAyXSxcblx0XHRcdFx0XHR3MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDNdO1xuXG5cdFx0aWYgKHQgPT09IDApIHtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAwXSA9IHgwO1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDFdID0geTA7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgMl0gPSB6MDtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAzXSA9IHcwO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0ID09PSAxKSB7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgMF0gPSB4MTtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAxXSA9IHkxO1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDJdID0gejE7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgM10gPSB3MTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodzAgIT09IHcxIHx8IHgwICE9PSB4MSB8fCB5MCAhPT0geTEgfHwgejAgIT09IHoxKSB7XG5cdFx0XHRsZXQgcyA9IDEgLSB0O1xuXHRcdFx0Y29uc3QgY29zID0geDAgKiB4MSArIHkwICogeTEgKyB6MCAqIHoxICsgdzAgKiB3MSxcblx0XHRcdFx0XHRcdGRpciA9IGNvcyA+PSAwID8gMSA6IC0xLFxuXHRcdFx0XHRcdFx0c3FyU2luID0gMSAtIGNvcyAqIGNvczsgLy8gU2tpcCB0aGUgU2xlcnAgZm9yIHRpbnkgc3RlcHMgdG8gYXZvaWQgbnVtZXJpYyBwcm9ibGVtczpcblxuXHRcdFx0aWYgKHNxclNpbiA+IE51bWJlci5FUFNJTE9OKSB7XG5cdFx0XHRcdGNvbnN0IHNpbiA9IE1hdGguc3FydChzcXJTaW4pLFxuXHRcdFx0XHRcdFx0XHRsZW4gPSBNYXRoLmF0YW4yKHNpbiwgY29zICogZGlyKTtcblx0XHRcdFx0cyA9IE1hdGguc2luKHMgKiBsZW4pIC8gc2luO1xuXHRcdFx0XHR0ID0gTWF0aC5zaW4odCAqIGxlbikgLyBzaW47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHREaXIgPSB0ICogZGlyO1xuXHRcdFx0eDAgPSB4MCAqIHMgKyB4MSAqIHREaXI7XG5cdFx0XHR5MCA9IHkwICogcyArIHkxICogdERpcjtcblx0XHRcdHowID0gejAgKiBzICsgejEgKiB0RGlyO1xuXHRcdFx0dzAgPSB3MCAqIHMgKyB3MSAqIHREaXI7IC8vIE5vcm1hbGl6ZSBpbiBjYXNlIHdlIGp1c3QgZGlkIGEgbGVycDpcblxuXHRcdFx0aWYgKHMgPT09IDEgLSB0KSB7XG5cdFx0XHRcdGNvbnN0IGYgPSAxIC8gTWF0aC5zcXJ0KHgwICogeDAgKyB5MCAqIHkwICsgejAgKiB6MCArIHcwICogdzApO1xuXHRcdFx0XHR4MCAqPSBmO1xuXHRcdFx0XHR5MCAqPSBmO1xuXHRcdFx0XHR6MCAqPSBmO1xuXHRcdFx0XHR3MCAqPSBmO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRzdFtkc3RPZmZzZXRdID0geDA7XG5cdFx0ZHN0W2RzdE9mZnNldCArIDFdID0geTA7XG5cdFx0ZHN0W2RzdE9mZnNldCArIDJdID0gejA7XG5cdFx0ZHN0W2RzdE9mZnNldCArIDNdID0gdzA7XG5cdH1cblxuXHRzdGF0aWMgbXVsdGlwbHlRdWF0ZXJuaW9uc0ZsYXQoZHN0LCBkc3RPZmZzZXQsIHNyYzAsIHNyY09mZnNldDAsIHNyYzEsIHNyY09mZnNldDEpIHtcblx0XHRjb25zdCB4MCA9IHNyYzBbc3JjT2Zmc2V0MF07XG5cdFx0Y29uc3QgeTAgPSBzcmMwW3NyY09mZnNldDAgKyAxXTtcblx0XHRjb25zdCB6MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDJdO1xuXHRcdGNvbnN0IHcwID0gc3JjMFtzcmNPZmZzZXQwICsgM107XG5cdFx0Y29uc3QgeDEgPSBzcmMxW3NyY09mZnNldDFdO1xuXHRcdGNvbnN0IHkxID0gc3JjMVtzcmNPZmZzZXQxICsgMV07XG5cdFx0Y29uc3QgejEgPSBzcmMxW3NyY09mZnNldDEgKyAyXTtcblx0XHRjb25zdCB3MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDNdO1xuXHRcdGRzdFtkc3RPZmZzZXRdID0geDAgKiB3MSArIHcwICogeDEgKyB5MCAqIHoxIC0gejAgKiB5MTtcblx0XHRkc3RbZHN0T2Zmc2V0ICsgMV0gPSB5MCAqIHcxICsgdzAgKiB5MSArIHowICogeDEgLSB4MCAqIHoxO1xuXHRcdGRzdFtkc3RPZmZzZXQgKyAyXSA9IHowICogdzEgKyB3MCAqIHoxICsgeDAgKiB5MSAtIHkwICogeDE7XG5cdFx0ZHN0W2RzdE9mZnNldCArIDNdID0gdzAgKiB3MSAtIHgwICogeDEgLSB5MCAqIHkxIC0gejAgKiB6MTtcblx0XHRyZXR1cm4gZHN0O1xuXHR9XG5cblx0Z2V0IHgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3g7XG5cdH1cblxuXHRzZXQgeCh2YWx1ZSkge1xuXHRcdHRoaXMuX3ggPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdGdldCB5KCkge1xuXHRcdHJldHVybiB0aGlzLl95O1xuXHR9XG5cblx0c2V0IHkodmFsdWUpIHtcblx0XHR0aGlzLl95ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRnZXQgeigpIHtcblx0XHRyZXR1cm4gdGhpcy5fejtcblx0fVxuXG5cdHNldCB6KHZhbHVlKSB7XG5cdFx0dGhpcy5feiA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0Z2V0IHcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3c7XG5cdH1cblxuXHRzZXQgdyh2YWx1ZSkge1xuXHRcdHRoaXMuX3cgPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdHNldCh4LCB5LCB6LCB3KSB7XG5cdFx0dGhpcy5feCA9IHg7XG5cdFx0dGhpcy5feSA9IHk7XG5cdFx0dGhpcy5feiA9IHo7XG5cdFx0dGhpcy5fdyA9IHc7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96LCB0aGlzLl93KTtcblx0fVxuXG5cdGNvcHkocXVhdGVybmlvbikge1xuXHRcdHRoaXMuX3ggPSBxdWF0ZXJuaW9uLng7XG5cdFx0dGhpcy5feSA9IHF1YXRlcm5pb24ueTtcblx0XHR0aGlzLl96ID0gcXVhdGVybmlvbi56O1xuXHRcdHRoaXMuX3cgPSBxdWF0ZXJuaW9uLnc7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21FdWxlcihldWxlciwgdXBkYXRlKSB7XG5cdFx0Y29uc3QgeCA9IGV1bGVyLl94LFxuXHRcdFx0XHRcdHkgPSBldWxlci5feSxcblx0XHRcdFx0XHR6ID0gZXVsZXIuX3osXG5cdFx0XHRcdFx0b3JkZXIgPSBldWxlci5fb3JkZXI7IC8vIGh0dHA6Ly93d3cubWF0aHdvcmtzLmNvbS9tYXRsYWJjZW50cmFsL2ZpbGVleGNoYW5nZS9cblx0XHQvLyBcdDIwNjk2LWZ1bmN0aW9uLXRvLWNvbnZlcnQtYmV0d2Vlbi1kY20tZXVsZXItYW5nbGVzLXF1YXRlcm5pb25zLWFuZC1ldWxlci12ZWN0b3JzL1xuXHRcdC8vXHRjb250ZW50L1NwaW5DYWxjLm1cblxuXHRcdGNvbnN0IGNvcyA9IE1hdGguY29zO1xuXHRcdGNvbnN0IHNpbiA9IE1hdGguc2luO1xuXHRcdGNvbnN0IGMxID0gY29zKHggLyAyKTtcblx0XHRjb25zdCBjMiA9IGNvcyh5IC8gMik7XG5cdFx0Y29uc3QgYzMgPSBjb3MoeiAvIDIpO1xuXHRcdGNvbnN0IHMxID0gc2luKHggLyAyKTtcblx0XHRjb25zdCBzMiA9IHNpbih5IC8gMik7XG5cdFx0Y29uc3QgczMgPSBzaW4oeiAvIDIpO1xuXG5cdFx0c3dpdGNoIChvcmRlcikge1xuXHRcdFx0Y2FzZSAnWFlaJzpcblx0XHRcdFx0dGhpcy5feCA9IHMxICogYzIgKiBjMyArIGMxICogczIgKiBzMztcblx0XHRcdFx0dGhpcy5feSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcblx0XHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcblx0XHRcdFx0dGhpcy5fdyA9IGMxICogYzIgKiBjMyAtIHMxICogczIgKiBzMztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1lYWic6XG5cdFx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG5cdFx0XHRcdHRoaXMuX3kgPSBjMSAqIHMyICogYzMgLSBzMSAqIGMyICogczM7XG5cdFx0XHRcdHRoaXMuX3ogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7XG5cdFx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdaWFknOlxuXHRcdFx0XHR0aGlzLl94ID0gczEgKiBjMiAqIGMzIC0gYzEgKiBzMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl96ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzO1xuXHRcdFx0XHR0aGlzLl93ID0gYzEgKiBjMiAqIGMzIC0gczEgKiBzMiAqIHMzO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWllYJzpcblx0XHRcdFx0dGhpcy5feCA9IHMxICogYzIgKiBjMyAtIGMxICogczIgKiBzMztcblx0XHRcdFx0dGhpcy5feSA9IGMxICogczIgKiBjMyArIHMxICogYzIgKiBzMztcblx0XHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMztcblx0XHRcdFx0dGhpcy5fdyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1laWCc6XG5cdFx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG5cdFx0XHRcdHRoaXMuX3kgPSBjMSAqIHMyICogYzMgKyBzMSAqIGMyICogczM7XG5cdFx0XHRcdHRoaXMuX3ogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7XG5cdFx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdYWlknOlxuXHRcdFx0XHR0aGlzLl94ID0gczEgKiBjMiAqIGMzIC0gYzEgKiBzMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl96ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzO1xuXHRcdFx0XHR0aGlzLl93ID0gYzEgKiBjMiAqIGMzICsgczEgKiBzMiAqIHMzO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5RdWF0ZXJuaW9uOiAuc2V0RnJvbUV1bGVyKCkgZW5jb3VudGVyZWQgYW4gdW5rbm93biBvcmRlcjogJyArIG9yZGVyKTtcblx0XHR9XG5cblx0XHRpZiAodXBkYXRlICE9PSBmYWxzZSkgdGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUF4aXNBbmdsZShheGlzLCBhbmdsZSkge1xuXHRcdC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9hbmdsZVRvUXVhdGVybmlvbi9pbmRleC5odG1cblx0XHQvLyBhc3N1bWVzIGF4aXMgaXMgbm9ybWFsaXplZFxuXHRcdGNvbnN0IGhhbGZBbmdsZSA9IGFuZ2xlIC8gMixcblx0XHRcdFx0XHRzID0gTWF0aC5zaW4oaGFsZkFuZ2xlKTtcblx0XHR0aGlzLl94ID0gYXhpcy54ICogcztcblx0XHR0aGlzLl95ID0gYXhpcy55ICogcztcblx0XHR0aGlzLl96ID0gYXhpcy56ICogcztcblx0XHR0aGlzLl93ID0gTWF0aC5jb3MoaGFsZkFuZ2xlKTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVJvdGF0aW9uTWF0cml4KG0pIHtcblx0XHQvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvbWF0cml4VG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxuXHRcdC8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG5cdFx0Y29uc3QgdGUgPSBtLmVsZW1lbnRzLFxuXHRcdFx0XHRcdG0xMSA9IHRlWzBdLFxuXHRcdFx0XHRcdG0xMiA9IHRlWzRdLFxuXHRcdFx0XHRcdG0xMyA9IHRlWzhdLFxuXHRcdFx0XHRcdG0yMSA9IHRlWzFdLFxuXHRcdFx0XHRcdG0yMiA9IHRlWzVdLFxuXHRcdFx0XHRcdG0yMyA9IHRlWzldLFxuXHRcdFx0XHRcdG0zMSA9IHRlWzJdLFxuXHRcdFx0XHRcdG0zMiA9IHRlWzZdLFxuXHRcdFx0XHRcdG0zMyA9IHRlWzEwXSxcblx0XHRcdFx0XHR0cmFjZSA9IG0xMSArIG0yMiArIG0zMztcblxuXHRcdGlmICh0cmFjZSA+IDApIHtcblx0XHRcdGNvbnN0IHMgPSAwLjUgLyBNYXRoLnNxcnQodHJhY2UgKyAxLjApO1xuXHRcdFx0dGhpcy5fdyA9IDAuMjUgLyBzO1xuXHRcdFx0dGhpcy5feCA9IChtMzIgLSBtMjMpICogcztcblx0XHRcdHRoaXMuX3kgPSAobTEzIC0gbTMxKSAqIHM7XG5cdFx0XHR0aGlzLl96ID0gKG0yMSAtIG0xMikgKiBzO1xuXHRcdH0gZWxzZSBpZiAobTExID4gbTIyICYmIG0xMSA+IG0zMykge1xuXHRcdFx0Y29uc3QgcyA9IDIuMCAqIE1hdGguc3FydCgxLjAgKyBtMTEgLSBtMjIgLSBtMzMpO1xuXHRcdFx0dGhpcy5fdyA9IChtMzIgLSBtMjMpIC8gcztcblx0XHRcdHRoaXMuX3ggPSAwLjI1ICogcztcblx0XHRcdHRoaXMuX3kgPSAobTEyICsgbTIxKSAvIHM7XG5cdFx0XHR0aGlzLl96ID0gKG0xMyArIG0zMSkgLyBzO1xuXHRcdH0gZWxzZSBpZiAobTIyID4gbTMzKSB7XG5cdFx0XHRjb25zdCBzID0gMi4wICogTWF0aC5zcXJ0KDEuMCArIG0yMiAtIG0xMSAtIG0zMyk7XG5cdFx0XHR0aGlzLl93ID0gKG0xMyAtIG0zMSkgLyBzO1xuXHRcdFx0dGhpcy5feCA9IChtMTIgKyBtMjEpIC8gcztcblx0XHRcdHRoaXMuX3kgPSAwLjI1ICogcztcblx0XHRcdHRoaXMuX3ogPSAobTIzICsgbTMyKSAvIHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHMgPSAyLjAgKiBNYXRoLnNxcnQoMS4wICsgbTMzIC0gbTExIC0gbTIyKTtcblx0XHRcdHRoaXMuX3cgPSAobTIxIC0gbTEyKSAvIHM7XG5cdFx0XHR0aGlzLl94ID0gKG0xMyArIG0zMSkgLyBzO1xuXHRcdFx0dGhpcy5feSA9IChtMjMgKyBtMzIpIC8gcztcblx0XHRcdHRoaXMuX3ogPSAwLjI1ICogcztcblx0XHR9XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Vbml0VmVjdG9ycyh2RnJvbSwgdlRvKSB7XG5cdFx0Ly8gYXNzdW1lcyBkaXJlY3Rpb24gdmVjdG9ycyB2RnJvbSBhbmQgdlRvIGFyZSBub3JtYWxpemVkXG5cdFx0bGV0IHIgPSB2RnJvbS5kb3QodlRvKSArIDE7XG5cblx0XHRpZiAociA8IE51bWJlci5FUFNJTE9OKSB7XG5cdFx0XHQvLyB2RnJvbSBhbmQgdlRvIHBvaW50IGluIG9wcG9zaXRlIGRpcmVjdGlvbnNcblx0XHRcdHIgPSAwO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnModkZyb20ueCkgPiBNYXRoLmFicyh2RnJvbS56KSkge1xuXHRcdFx0XHR0aGlzLl94ID0gLXZGcm9tLnk7XG5cdFx0XHRcdHRoaXMuX3kgPSB2RnJvbS54O1xuXHRcdFx0XHR0aGlzLl96ID0gMDtcblx0XHRcdFx0dGhpcy5fdyA9IHI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl94ID0gMDtcblx0XHRcdFx0dGhpcy5feSA9IC12RnJvbS56O1xuXHRcdFx0XHR0aGlzLl96ID0gdkZyb20ueTtcblx0XHRcdFx0dGhpcy5fdyA9IHI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNyb3NzVmVjdG9ycyggdkZyb20sIHZUbyApOyAvLyBpbmxpbmVkIHRvIGF2b2lkIGN5Y2xpYyBkZXBlbmRlbmN5IG9uIFZlY3RvcjNcblx0XHRcdHRoaXMuX3ggPSB2RnJvbS55ICogdlRvLnogLSB2RnJvbS56ICogdlRvLnk7XG5cdFx0XHR0aGlzLl95ID0gdkZyb20ueiAqIHZUby54IC0gdkZyb20ueCAqIHZUby56O1xuXHRcdFx0dGhpcy5feiA9IHZGcm9tLnggKiB2VG8ueSAtIHZGcm9tLnkgKiB2VG8ueDtcblx0XHRcdHRoaXMuX3cgPSByO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuXHR9XG5cblx0YW5nbGVUbyhxKSB7XG5cdFx0cmV0dXJuIDIgKiBNYXRoLmFjb3MoTWF0aC5hYnMoY2xhbXAodGhpcy5kb3QocSksIC0xLCAxKSkpO1xuXHR9XG5cblx0cm90YXRlVG93YXJkcyhxLCBzdGVwKSB7XG5cdFx0Y29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlVG8ocSk7XG5cdFx0aWYgKGFuZ2xlID09PSAwKSByZXR1cm4gdGhpcztcblx0XHRjb25zdCB0ID0gTWF0aC5taW4oMSwgc3RlcCAvIGFuZ2xlKTtcblx0XHR0aGlzLnNsZXJwKHEsIHQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWRlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0KDAsIDAsIDAsIDEpO1xuXHR9XG5cblx0aW52ZXJ0KCkge1xuXHRcdC8vIHF1YXRlcm5pb24gaXMgYXNzdW1lZCB0byBoYXZlIHVuaXQgbGVuZ3RoXG5cdFx0cmV0dXJuIHRoaXMuY29uanVnYXRlKCk7XG5cdH1cblxuXHRjb25qdWdhdGUoKSB7XG5cdFx0dGhpcy5feCAqPSAtMTtcblx0XHR0aGlzLl95ICo9IC0xO1xuXHRcdHRoaXMuX3ogKj0gLTE7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRvdCh2KSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ggKiB2Ll94ICsgdGhpcy5feSAqIHYuX3kgKyB0aGlzLl96ICogdi5feiArIHRoaXMuX3cgKiB2Ll93O1xuXHR9XG5cblx0bGVuZ3RoU3EoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ggKiB0aGlzLl94ICsgdGhpcy5feSAqIHRoaXMuX3kgKyB0aGlzLl96ICogdGhpcy5feiArIHRoaXMuX3cgKiB0aGlzLl93O1xuXHR9XG5cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5feCAqIHRoaXMuX3ggKyB0aGlzLl95ICogdGhpcy5feSArIHRoaXMuX3ogKiB0aGlzLl96ICsgdGhpcy5fdyAqIHRoaXMuX3cpO1xuXHR9XG5cblx0bm9ybWFsaXplKCkge1xuXHRcdGxldCBsID0gdGhpcy5sZW5ndGgoKTtcblxuXHRcdGlmIChsID09PSAwKSB7XG5cdFx0XHR0aGlzLl94ID0gMDtcblx0XHRcdHRoaXMuX3kgPSAwO1xuXHRcdFx0dGhpcy5feiA9IDA7XG5cdFx0XHR0aGlzLl93ID0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bCA9IDEgLyBsO1xuXHRcdFx0dGhpcy5feCA9IHRoaXMuX3ggKiBsO1xuXHRcdFx0dGhpcy5feSA9IHRoaXMuX3kgKiBsO1xuXHRcdFx0dGhpcy5feiA9IHRoaXMuX3ogKiBsO1xuXHRcdFx0dGhpcy5fdyA9IHRoaXMuX3cgKiBsO1xuXHRcdH1cblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkocSkge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5UXVhdGVybmlvbnModGhpcywgcSk7XG5cdH1cblxuXHRwcmVtdWx0aXBseShxKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlRdWF0ZXJuaW9ucyhxLCB0aGlzKTtcblx0fVxuXG5cdG11bHRpcGx5UXVhdGVybmlvbnMoYSwgYikge1xuXHRcdC8vIGZyb20gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9yZWFsTm9ybWVkQWxnZWJyYS9xdWF0ZXJuaW9ucy9jb2RlL2luZGV4Lmh0bVxuXHRcdGNvbnN0IHFheCA9IGEuX3gsXG5cdFx0XHRcdFx0cWF5ID0gYS5feSxcblx0XHRcdFx0XHRxYXogPSBhLl96LFxuXHRcdFx0XHRcdHFhdyA9IGEuX3c7XG5cdFx0Y29uc3QgcWJ4ID0gYi5feCxcblx0XHRcdFx0XHRxYnkgPSBiLl95LFxuXHRcdFx0XHRcdHFieiA9IGIuX3osXG5cdFx0XHRcdFx0cWJ3ID0gYi5fdztcblx0XHR0aGlzLl94ID0gcWF4ICogcWJ3ICsgcWF3ICogcWJ4ICsgcWF5ICogcWJ6IC0gcWF6ICogcWJ5O1xuXHRcdHRoaXMuX3kgPSBxYXkgKiBxYncgKyBxYXcgKiBxYnkgKyBxYXogKiBxYnggLSBxYXggKiBxYno7XG5cdFx0dGhpcy5feiA9IHFheiAqIHFidyArIHFhdyAqIHFieiArIHFheCAqIHFieSAtIHFheSAqIHFieDtcblx0XHR0aGlzLl93ID0gcWF3ICogcWJ3IC0gcWF4ICogcWJ4IC0gcWF5ICogcWJ5IC0gcWF6ICogcWJ6O1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzbGVycChxYiwgdCkge1xuXHRcdGlmICh0ID09PSAwKSByZXR1cm4gdGhpcztcblx0XHRpZiAodCA9PT0gMSkgcmV0dXJuIHRoaXMuY29weShxYik7XG5cdFx0Y29uc3QgeCA9IHRoaXMuX3gsXG5cdFx0XHRcdFx0eSA9IHRoaXMuX3ksXG5cdFx0XHRcdFx0eiA9IHRoaXMuX3osXG5cdFx0XHRcdFx0dyA9IHRoaXMuX3c7IC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvcmVhbE5vcm1lZEFsZ2VicmEvcXVhdGVybmlvbnMvc2xlcnAvXG5cblx0XHRsZXQgY29zSGFsZlRoZXRhID0gdyAqIHFiLl93ICsgeCAqIHFiLl94ICsgeSAqIHFiLl95ICsgeiAqIHFiLl96O1xuXG5cdFx0aWYgKGNvc0hhbGZUaGV0YSA8IDApIHtcblx0XHRcdHRoaXMuX3cgPSAtcWIuX3c7XG5cdFx0XHR0aGlzLl94ID0gLXFiLl94O1xuXHRcdFx0dGhpcy5feSA9IC1xYi5feTtcblx0XHRcdHRoaXMuX3ogPSAtcWIuX3o7XG5cdFx0XHRjb3NIYWxmVGhldGEgPSAtY29zSGFsZlRoZXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvcHkocWIpO1xuXHRcdH1cblxuXHRcdGlmIChjb3NIYWxmVGhldGEgPj0gMS4wKSB7XG5cdFx0XHR0aGlzLl93ID0gdztcblx0XHRcdHRoaXMuX3ggPSB4O1xuXHRcdFx0dGhpcy5feSA9IHk7XG5cdFx0XHR0aGlzLl96ID0gejtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNxclNpbkhhbGZUaGV0YSA9IDEuMCAtIGNvc0hhbGZUaGV0YSAqIGNvc0hhbGZUaGV0YTtcblxuXHRcdGlmIChzcXJTaW5IYWxmVGhldGEgPD0gTnVtYmVyLkVQU0lMT04pIHtcblx0XHRcdGNvbnN0IHMgPSAxIC0gdDtcblx0XHRcdHRoaXMuX3cgPSBzICogdyArIHQgKiB0aGlzLl93O1xuXHRcdFx0dGhpcy5feCA9IHMgKiB4ICsgdCAqIHRoaXMuX3g7XG5cdFx0XHR0aGlzLl95ID0gcyAqIHkgKyB0ICogdGhpcy5feTtcblx0XHRcdHRoaXMuX3ogPSBzICogeiArIHQgKiB0aGlzLl96O1xuXHRcdFx0dGhpcy5ub3JtYWxpemUoKTtcblxuXHRcdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRjb25zdCBzaW5IYWxmVGhldGEgPSBNYXRoLnNxcnQoc3FyU2luSGFsZlRoZXRhKTtcblx0XHRjb25zdCBoYWxmVGhldGEgPSBNYXRoLmF0YW4yKHNpbkhhbGZUaGV0YSwgY29zSGFsZlRoZXRhKTtcblx0XHRjb25zdCByYXRpb0EgPSBNYXRoLnNpbigoMSAtIHQpICogaGFsZlRoZXRhKSAvIHNpbkhhbGZUaGV0YSxcblx0XHRcdFx0XHRyYXRpb0IgPSBNYXRoLnNpbih0ICogaGFsZlRoZXRhKSAvIHNpbkhhbGZUaGV0YTtcblx0XHR0aGlzLl93ID0gdyAqIHJhdGlvQSArIHRoaXMuX3cgKiByYXRpb0I7XG5cdFx0dGhpcy5feCA9IHggKiByYXRpb0EgKyB0aGlzLl94ICogcmF0aW9CO1xuXHRcdHRoaXMuX3kgPSB5ICogcmF0aW9BICsgdGhpcy5feSAqIHJhdGlvQjtcblx0XHR0aGlzLl96ID0geiAqIHJhdGlvQSArIHRoaXMuX3ogKiByYXRpb0I7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNsZXJwUXVhdGVybmlvbnMocWEsIHFiLCB0KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29weShxYSkuc2xlcnAocWIsIHQpO1xuXHR9XG5cblx0cmFuZG9tKCkge1xuXHRcdC8vIERlcml2ZWQgZnJvbSBodHRwOi8vcGxhbm5pbmcuY3MudWl1Yy5lZHUvbm9kZTE5OC5odG1sXG5cdFx0Ly8gTm90ZSwgdGhpcyBzb3VyY2UgdXNlcyB3LCB4LCB5LCB6IG9yZGVyaW5nLFxuXHRcdC8vIHNvIHdlIHN3YXAgdGhlIG9yZGVyIGJlbG93LlxuXHRcdGNvbnN0IHUxID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zdCBzcXJ0MXUxID0gTWF0aC5zcXJ0KDEgLSB1MSk7XG5cdFx0Y29uc3Qgc3FydHUxID0gTWF0aC5zcXJ0KHUxKTtcblx0XHRjb25zdCB1MiA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcblx0XHRjb25zdCB1MyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcblx0XHRyZXR1cm4gdGhpcy5zZXQoc3FydDF1MSAqIE1hdGguY29zKHUyKSwgc3FydHUxICogTWF0aC5zaW4odTMpLCBzcXJ0dTEgKiBNYXRoLmNvcyh1MyksIHNxcnQxdTEgKiBNYXRoLnNpbih1MikpO1xuXHR9XG5cblx0ZXF1YWxzKHF1YXRlcm5pb24pIHtcblx0XHRyZXR1cm4gcXVhdGVybmlvbi5feCA9PT0gdGhpcy5feCAmJiBxdWF0ZXJuaW9uLl95ID09PSB0aGlzLl95ICYmIHF1YXRlcm5pb24uX3ogPT09IHRoaXMuX3ogJiYgcXVhdGVybmlvbi5fdyA9PT0gdGhpcy5fdztcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdHRoaXMuX3ggPSBhcnJheVtvZmZzZXRdO1xuXHRcdHRoaXMuX3kgPSBhcnJheVtvZmZzZXQgKyAxXTtcblx0XHR0aGlzLl96ID0gYXJyYXlbb2Zmc2V0ICsgMl07XG5cdFx0dGhpcy5fdyA9IGFycmF5W29mZnNldCArIDNdO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRhcnJheVtvZmZzZXRdID0gdGhpcy5feDtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRoaXMuX3k7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0aGlzLl96O1xuXHRcdGFycmF5W29mZnNldCArIDNdID0gdGhpcy5fdztcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0gLy8gZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpbmRleCApIHtcblx0Ly8gXHR0aGlzLl94ID0gYXR0cmlidXRlLmdldFgoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy5feSA9IGF0dHJpYnV0ZS5nZXRZKCBpbmRleCApO1xuXHQvLyBcdHRoaXMuX3ogPSBhdHRyaWJ1dGUuZ2V0WiggaW5kZXggKTtcblx0Ly8gXHR0aGlzLl93ID0gYXR0cmlidXRlLmdldFcoIGluZGV4ICk7XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdF9vbkNoYW5nZShjYWxsYmFjaykge1xuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdF9vbkNoYW5nZUNhbGxiYWNrKCkge31cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0eWllbGQgdGhpcy5feDtcblx0XHR5aWVsZCB0aGlzLl95O1xuXHRcdHlpZWxkIHRoaXMuX3o7XG5cdFx0eWllbGQgdGhpcy5fdztcblx0fVxuXG59XG5cbmNsYXNzIFZlY3RvcjMge1xuXHRjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwKSB7XG5cdFx0VmVjdG9yMy5wcm90b3R5cGUuaXNWZWN0b3IzID0gdHJ1ZTtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy56ID0gejtcblx0fVxuXG5cdHNldCh4LCB5LCB6KSB7XG5cdFx0aWYgKHogPT09IHVuZGVmaW5lZCkgeiA9IHRoaXMuejsgLy8gc3ByaXRlLnNjYWxlLnNldCh4LHkpXG5cblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy56ID0gejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnggPSBzY2FsYXI7XG5cdFx0dGhpcy55ID0gc2NhbGFyO1xuXHRcdHRoaXMueiA9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFgoeCkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRZKHkpIHtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Wih6KSB7XG5cdFx0dGhpcy56ID0gejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHRoaXMueCA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLnkgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy56ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldENvbXBvbmVudChpbmRleCkge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmV0dXJuIHRoaXMueDtcblxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy55O1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHJldHVybiB0aGlzLno7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcblx0fVxuXG5cdGNvcHkodikge1xuXHRcdHRoaXMueCA9IHYueDtcblx0XHR0aGlzLnkgPSB2Lnk7XG5cdFx0dGhpcy56ID0gdi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkKHYpIHtcblx0XHR0aGlzLnggKz0gdi54O1xuXHRcdHRoaXMueSArPSB2Lnk7XG5cdFx0dGhpcy56ICs9IHYuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxhcihzKSB7XG5cdFx0dGhpcy54ICs9IHM7XG5cdFx0dGhpcy55ICs9IHM7XG5cdFx0dGhpcy56ICs9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggKyBiLng7XG5cdFx0dGhpcy55ID0gYS55ICsgYi55O1xuXHRcdHRoaXMueiA9IGEueiArIGIuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxlZFZlY3Rvcih2LCBzKSB7XG5cdFx0dGhpcy54ICs9IHYueCAqIHM7XG5cdFx0dGhpcy55ICs9IHYueSAqIHM7XG5cdFx0dGhpcy56ICs9IHYueiAqIHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWIodikge1xuXHRcdHRoaXMueCAtPSB2Lng7XG5cdFx0dGhpcy55IC09IHYueTtcblx0XHR0aGlzLnogLT0gdi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViU2NhbGFyKHMpIHtcblx0XHR0aGlzLnggLT0gcztcblx0XHR0aGlzLnkgLT0gcztcblx0XHR0aGlzLnogLT0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1YlZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCAtIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgLSBiLnk7XG5cdFx0dGhpcy56ID0gYS56IC0gYi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkodikge1xuXHRcdHRoaXMueCAqPSB2Lng7XG5cdFx0dGhpcy55ICo9IHYueTtcblx0XHR0aGlzLnogKj0gdi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy54ICo9IHNjYWxhcjtcblx0XHR0aGlzLnkgKj0gc2NhbGFyO1xuXHRcdHRoaXMueiAqPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCAqIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgKiBiLnk7XG5cdFx0dGhpcy56ID0gYS56ICogYi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXBwbHlFdWxlcihldWxlcikge1xuXHRcdHJldHVybiB0aGlzLmFwcGx5UXVhdGVybmlvbihfcXVhdGVybmlvbiQxLnNldEZyb21FdWxlcihldWxlcikpO1xuXHR9XG5cblx0YXBwbHlBeGlzQW5nbGUoYXhpcywgYW5nbGUpIHtcblx0XHRyZXR1cm4gdGhpcy5hcHBseVF1YXRlcm5pb24oX3F1YXRlcm5pb24kMS5zZXRGcm9tQXhpc0FuZ2xlKGF4aXMsIGFuZ2xlKSk7XG5cdH1cblxuXHRhcHBseU1hdHJpeDMobSkge1xuXHRcdGNvbnN0IHggPSB0aGlzLngsXG5cdFx0XHRcdFx0eSA9IHRoaXMueSxcblx0XHRcdFx0XHR6ID0gdGhpcy56O1xuXHRcdGNvbnN0IGUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMueCA9IGVbMF0gKiB4ICsgZVszXSAqIHkgKyBlWzZdICogejtcblx0XHR0aGlzLnkgPSBlWzFdICogeCArIGVbNF0gKiB5ICsgZVs3XSAqIHo7XG5cdFx0dGhpcy56ID0gZVsyXSAqIHggKyBlWzVdICogeSArIGVbOF0gKiB6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXBwbHlOb3JtYWxNYXRyaXgobSkge1xuXHRcdHJldHVybiB0aGlzLmFwcGx5TWF0cml4MyhtKS5ub3JtYWxpemUoKTtcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtKSB7XG5cdFx0Y29uc3QgeCA9IHRoaXMueCxcblx0XHRcdFx0XHR5ID0gdGhpcy55LFxuXHRcdFx0XHRcdHogPSB0aGlzLno7XG5cdFx0Y29uc3QgZSA9IG0uZWxlbWVudHM7XG5cdFx0Y29uc3QgdyA9IDEgLyAoZVszXSAqIHggKyBlWzddICogeSArIGVbMTFdICogeiArIGVbMTVdKTtcblx0XHR0aGlzLnggPSAoZVswXSAqIHggKyBlWzRdICogeSArIGVbOF0gKiB6ICsgZVsxMl0pICogdztcblx0XHR0aGlzLnkgPSAoZVsxXSAqIHggKyBlWzVdICogeSArIGVbOV0gKiB6ICsgZVsxM10pICogdztcblx0XHR0aGlzLnogPSAoZVsyXSAqIHggKyBlWzZdICogeSArIGVbMTBdICogeiArIGVbMTRdKSAqIHc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhcHBseVF1YXRlcm5pb24ocSkge1xuXHRcdGNvbnN0IHggPSB0aGlzLngsXG5cdFx0XHRcdFx0eSA9IHRoaXMueSxcblx0XHRcdFx0XHR6ID0gdGhpcy56O1xuXHRcdGNvbnN0IHF4ID0gcS54LFxuXHRcdFx0XHRcdHF5ID0gcS55LFxuXHRcdFx0XHRcdHF6ID0gcS56LFxuXHRcdFx0XHRcdHF3ID0gcS53OyAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY3RvclxuXG5cdFx0Y29uc3QgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XG5cdFx0Y29uc3QgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7XG5cdFx0Y29uc3QgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHg7XG5cdFx0Y29uc3QgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6OyAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG5cblx0XHR0aGlzLnggPSBpeCAqIHF3ICsgaXcgKiAtcXggKyBpeSAqIC1xeiAtIGl6ICogLXF5O1xuXHRcdHRoaXMueSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXo7XG5cdFx0dGhpcy56ID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvLyBwcm9qZWN0KCBjYW1lcmEgKSB7XG5cdC8vIFx0cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXg0KCBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICkuYXBwbHlNYXRyaXg0KCBjYW1lcmEucHJvamVjdGlvbk1hdHJpeCApO1xuXHQvLyB9XG5cdC8vIHVucHJvamVjdCggY2FtZXJhICkge1xuXHQvLyBcdHJldHVybiB0aGlzLmFwcGx5TWF0cml4NCggY2FtZXJhLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlICkuYXBwbHlNYXRyaXg0KCBjYW1lcmEubWF0cml4V29ybGQgKTtcblx0Ly8gfVxuXG5cblx0dHJhbnNmb3JtRGlyZWN0aW9uKG0pIHtcblx0XHQvLyBpbnB1dDogVEhSRUUuTWF0cml4NCBhZmZpbmUgbWF0cml4XG5cdFx0Ly8gdmVjdG9yIGludGVycHJldGVkIGFzIGEgZGlyZWN0aW9uXG5cdFx0Y29uc3QgeCA9IHRoaXMueCxcblx0XHRcdFx0XHR5ID0gdGhpcy55LFxuXHRcdFx0XHRcdHogPSB0aGlzLno7XG5cdFx0Y29uc3QgZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy54ID0gZVswXSAqIHggKyBlWzRdICogeSArIGVbOF0gKiB6O1xuXHRcdHRoaXMueSA9IGVbMV0gKiB4ICsgZVs1XSAqIHkgKyBlWzldICogejtcblx0XHR0aGlzLnogPSBlWzJdICogeCArIGVbNl0gKiB5ICsgZVsxMF0gKiB6O1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuXHR9XG5cblx0ZGl2aWRlKHYpIHtcblx0XHR0aGlzLnggLz0gdi54O1xuXHRcdHRoaXMueSAvPSB2Lnk7XG5cdFx0dGhpcy56IC89IHYuejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpdmlkZVNjYWxhcihzY2FsYXIpIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigxIC8gc2NhbGFyKTtcblx0fVxuXG5cdG1pbih2KSB7XG5cdFx0dGhpcy54ID0gTWF0aC5taW4odGhpcy54LCB2LngpO1xuXHRcdHRoaXMueSA9IE1hdGgubWluKHRoaXMueSwgdi55KTtcblx0XHR0aGlzLnogPSBNYXRoLm1pbih0aGlzLnosIHYueik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYXgodikge1xuXHRcdHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgdi54KTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIHYueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgodGhpcy56LCB2LnopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXAobWluLCBtYXgpIHtcblx0XHQvLyBhc3N1bWVzIG1pbiA8IG1heCwgY29tcG9uZW50d2lzZVxuXHRcdHRoaXMueCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdGhpcy54KSk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB0aGlzLnkpKTtcblx0XHR0aGlzLnogPSBNYXRoLm1heChtaW4ueiwgTWF0aC5taW4obWF4LnosIHRoaXMueikpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXBTY2FsYXIobWluVmFsLCBtYXhWYWwpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy54KSk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueSkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLnopKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wTGVuZ3RoKG1pbiwgbWF4KSB7XG5cdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIobGVuZ3RoIHx8IDEpLm11bHRpcGx5U2NhbGFyKE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBsZW5ndGgpKSk7XG5cdH1cblxuXHRmbG9vcigpIHtcblx0XHR0aGlzLnggPSBNYXRoLmZsb29yKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5mbG9vcih0aGlzLnkpO1xuXHRcdHRoaXMueiA9IE1hdGguZmxvb3IodGhpcy56KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNlaWwoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5jZWlsKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5jZWlsKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5jZWlsKHRoaXMueik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3VuZCgpIHtcblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuXHRcdHRoaXMueiA9IE1hdGgucm91bmQodGhpcy56KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdW5kVG9aZXJvKCkge1xuXHRcdHRoaXMueCA9IHRoaXMueCA8IDAgPyBNYXRoLmNlaWwodGhpcy54KSA6IE1hdGguZmxvb3IodGhpcy54KTtcblx0XHR0aGlzLnkgPSB0aGlzLnkgPCAwID8gTWF0aC5jZWlsKHRoaXMueSkgOiBNYXRoLmZsb29yKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gdGhpcy56IDwgMCA/IE1hdGguY2VpbCh0aGlzLnopIDogTWF0aC5mbG9vcih0aGlzLnopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmVnYXRlKCkge1xuXHRcdHRoaXMueCA9IC10aGlzLng7XG5cdFx0dGhpcy55ID0gLXRoaXMueTtcblx0XHR0aGlzLnogPSAtdGhpcy56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZG90KHYpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56O1xuXHR9IC8vIFRPRE8gbGVuZ3RoU3F1YXJlZD9cblxuXG5cdGxlbmd0aFNxKCkge1xuXHRcdHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLno7XG5cdH1cblxuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xuXHR9XG5cblx0bWFuaGF0dGFuTGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLngpICsgTWF0aC5hYnModGhpcy55KSArIE1hdGguYWJzKHRoaXMueik7XG5cdH1cblxuXHRub3JtYWxpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkgfHwgMSk7XG5cdH1cblxuXHRzZXRMZW5ndGgobGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIobGVuZ3RoKTtcblx0fVxuXG5cdGxlcnAodiwgYWxwaGEpIHtcblx0XHR0aGlzLnggKz0gKHYueCAtIHRoaXMueCkgKiBhbHBoYTtcblx0XHR0aGlzLnkgKz0gKHYueSAtIHRoaXMueSkgKiBhbHBoYTtcblx0XHR0aGlzLnogKz0gKHYueiAtIHRoaXMueikgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxlcnBWZWN0b3JzKHYxLCB2MiwgYWxwaGEpIHtcblx0XHR0aGlzLnggPSB2MS54ICsgKHYyLnggLSB2MS54KSAqIGFscGhhO1xuXHRcdHRoaXMueSA9IHYxLnkgKyAodjIueSAtIHYxLnkpICogYWxwaGE7XG5cdFx0dGhpcy56ID0gdjEueiArICh2Mi56IC0gdjEueikgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNyb3NzKHYpIHtcblx0XHRyZXR1cm4gdGhpcy5jcm9zc1ZlY3RvcnModGhpcywgdik7XG5cdH1cblxuXHRjcm9zc1ZlY3RvcnMoYSwgYikge1xuXHRcdGNvbnN0IGF4ID0gYS54LFxuXHRcdFx0XHRcdGF5ID0gYS55LFxuXHRcdFx0XHRcdGF6ID0gYS56O1xuXHRcdGNvbnN0IGJ4ID0gYi54LFxuXHRcdFx0XHRcdGJ5ID0gYi55LFxuXHRcdFx0XHRcdGJ6ID0gYi56O1xuXHRcdHRoaXMueCA9IGF5ICogYnogLSBheiAqIGJ5O1xuXHRcdHRoaXMueSA9IGF6ICogYnggLSBheCAqIGJ6O1xuXHRcdHRoaXMueiA9IGF4ICogYnkgLSBheSAqIGJ4O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJvamVjdE9uVmVjdG9yKHYpIHtcblx0XHRjb25zdCBkZW5vbWluYXRvciA9IHYubGVuZ3RoU3EoKTtcblx0XHRpZiAoZGVub21pbmF0b3IgPT09IDApIHJldHVybiB0aGlzLnNldCgwLCAwLCAwKTtcblx0XHRjb25zdCBzY2FsYXIgPSB2LmRvdCh0aGlzKSAvIGRlbm9taW5hdG9yO1xuXHRcdHJldHVybiB0aGlzLmNvcHkodikubXVsdGlwbHlTY2FsYXIoc2NhbGFyKTtcblx0fVxuXG5cdHByb2plY3RPblBsYW5lKHBsYW5lTm9ybWFsKSB7XG5cdFx0X3ZlY3RvciQzLmNvcHkodGhpcykucHJvamVjdE9uVmVjdG9yKHBsYW5lTm9ybWFsKTtcblxuXHRcdHJldHVybiB0aGlzLnN1YihfdmVjdG9yJDMpO1xuXHR9XG5cblx0cmVmbGVjdChub3JtYWwpIHtcblx0XHQvLyByZWZsZWN0IGluY2lkZW50IHZlY3RvciBvZmYgcGxhbmUgb3J0aG9nb25hbCB0byBub3JtYWxcblx0XHQvLyBub3JtYWwgaXMgYXNzdW1lZCB0byBoYXZlIHVuaXQgbGVuZ3RoXG5cdFx0cmV0dXJuIHRoaXMuc3ViKF92ZWN0b3IkMy5jb3B5KG5vcm1hbCkubXVsdGlwbHlTY2FsYXIoMiAqIHRoaXMuZG90KG5vcm1hbCkpKTtcblx0fVxuXG5cdGFuZ2xlVG8odikge1xuXHRcdGNvbnN0IGRlbm9taW5hdG9yID0gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSAqIHYubGVuZ3RoU3EoKSk7XG5cdFx0aWYgKGRlbm9taW5hdG9yID09PSAwKSByZXR1cm4gTWF0aC5QSSAvIDI7XG5cdFx0Y29uc3QgdGhldGEgPSB0aGlzLmRvdCh2KSAvIGRlbm9taW5hdG9yOyAvLyBjbGFtcCwgdG8gaGFuZGxlIG51bWVyaWNhbCBwcm9ibGVtc1xuXG5cdFx0cmV0dXJuIE1hdGguYWNvcyhjbGFtcCh0aGV0YSwgLTEsIDEpKTtcblx0fVxuXG5cdGRpc3RhbmNlVG8odikge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XG5cdH1cblxuXHRkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XG5cdFx0Y29uc3QgZHggPSB0aGlzLnggLSB2LngsXG5cdFx0XHRcdFx0ZHkgPSB0aGlzLnkgLSB2LnksXG5cdFx0XHRcdFx0ZHogPSB0aGlzLnogLSB2Lno7XG5cdFx0cmV0dXJuIGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkejtcblx0fVxuXG5cdG1hbmhhdHRhbkRpc3RhbmNlVG8odikge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLnggLSB2LngpICsgTWF0aC5hYnModGhpcy55IC0gdi55KSArIE1hdGguYWJzKHRoaXMueiAtIHYueik7XG5cdH1cblxuXHRzZXRGcm9tU3BoZXJpY2FsKHMpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tU3BoZXJpY2FsQ29vcmRzKHMucmFkaXVzLCBzLnBoaSwgcy50aGV0YSk7XG5cdH1cblxuXHRzZXRGcm9tU3BoZXJpY2FsQ29vcmRzKHJhZGl1cywgcGhpLCB0aGV0YSkge1xuXHRcdGNvbnN0IHNpblBoaVJhZGl1cyA9IE1hdGguc2luKHBoaSkgKiByYWRpdXM7XG5cdFx0dGhpcy54ID0gc2luUGhpUmFkaXVzICogTWF0aC5zaW4odGhldGEpO1xuXHRcdHRoaXMueSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XG5cdFx0dGhpcy56ID0gc2luUGhpUmFkaXVzICogTWF0aC5jb3ModGhldGEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUN5bGluZHJpY2FsKGMpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tQ3lsaW5kcmljYWxDb29yZHMoYy5yYWRpdXMsIGMudGhldGEsIGMueSk7XG5cdH1cblxuXHRzZXRGcm9tQ3lsaW5kcmljYWxDb29yZHMocmFkaXVzLCB0aGV0YSwgeSkge1xuXHRcdHRoaXMueCA9IHJhZGl1cyAqIE1hdGguc2luKHRoZXRhKTtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMueiA9IHJhZGl1cyAqIE1hdGguY29zKHRoZXRhKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21NYXRyaXhQb3NpdGlvbihtKSB7XG5cdFx0Y29uc3QgZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy54ID0gZVsxMl07XG5cdFx0dGhpcy55ID0gZVsxM107XG5cdFx0dGhpcy56ID0gZVsxNF07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tTWF0cml4U2NhbGUobSkge1xuXHRcdGNvbnN0IHN4ID0gdGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKG0sIDApLmxlbmd0aCgpO1xuXHRcdGNvbnN0IHN5ID0gdGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKG0sIDEpLmxlbmd0aCgpO1xuXHRcdGNvbnN0IHN6ID0gdGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKG0sIDIpLmxlbmd0aCgpO1xuXHRcdHRoaXMueCA9IHN4O1xuXHRcdHRoaXMueSA9IHN5O1xuXHRcdHRoaXMueiA9IHN6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU1hdHJpeENvbHVtbihtLCBpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmZyb21BcnJheShtLmVsZW1lbnRzLCBpbmRleCAqIDQpO1xuXHR9XG5cblx0c2V0RnJvbU1hdHJpeDNDb2x1bW4obSwgaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5mcm9tQXJyYXkobS5lbGVtZW50cywgaW5kZXggKiAzKTtcblx0fVxuXG5cdHNldEZyb21FdWxlcihlKSB7XG5cdFx0dGhpcy54ID0gZS5feDtcblx0XHR0aGlzLnkgPSBlLl95O1xuXHRcdHRoaXMueiA9IGUuX3o7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHModikge1xuXHRcdHJldHVybiB2LnggPT09IHRoaXMueCAmJiB2LnkgPT09IHRoaXMueSAmJiB2LnogPT09IHRoaXMuejtcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdHRoaXMueCA9IGFycmF5W29mZnNldF07XG5cdFx0dGhpcy55ID0gYXJyYXlbb2Zmc2V0ICsgMV07XG5cdFx0dGhpcy56ID0gYXJyYXlbb2Zmc2V0ICsgMl07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRhcnJheVtvZmZzZXRdID0gdGhpcy54O1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGhpcy55O1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGhpcy56O1xuXHRcdHJldHVybiBhcnJheTtcblx0fSAvLyBmcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGluZGV4ICkge1xuXHQvLyBcdHRoaXMueCA9IGF0dHJpYnV0ZS5nZXRYKCBpbmRleCApO1xuXHQvLyBcdHRoaXMueSA9IGF0dHJpYnV0ZS5nZXRZKCBpbmRleCApO1xuXHQvLyBcdHRoaXMueiA9IGF0dHJpYnV0ZS5nZXRaKCBpbmRleCApO1xuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRyYW5kb20oKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5yYW5kb20oKTtcblx0XHR0aGlzLnkgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHRoaXMueiA9IE1hdGgucmFuZG9tKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyYW5kb21EaXJlY3Rpb24oKSB7XG5cdFx0Ly8gRGVyaXZlZCBmcm9tIGh0dHBzOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL1NwaGVyZVBvaW50UGlja2luZy5odG1sXG5cdFx0Y29uc3QgdSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDI7XG5cdFx0Y29uc3QgdCA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcblx0XHRjb25zdCBmID0gTWF0aC5zcXJ0KDEgLSB1ICoqIDIpO1xuXHRcdHRoaXMueCA9IGYgKiBNYXRoLmNvcyh0KTtcblx0XHR0aGlzLnkgPSBmICogTWF0aC5zaW4odCk7XG5cdFx0dGhpcy56ID0gdTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdCpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHR5aWVsZCB0aGlzLng7XG5cdFx0eWllbGQgdGhpcy55O1xuXHRcdHlpZWxkIHRoaXMuejtcblx0fVxuXG59XG5cbmNvbnN0IF92ZWN0b3IkMyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfcXVhdGVybmlvbiQxID0gLypAX19QVVJFX18qL25ldyBRdWF0ZXJuaW9uKCk7XG5cbmNvbnN0IF92ZWN0b3IkMiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMigpO1xuXG5jbGFzcyBCb3gyIHtcblx0Y29uc3RydWN0b3IobWluID0gbmV3IFZlY3RvcjIoK0luZmluaXR5LCArSW5maW5pdHkpLCBtYXggPSBuZXcgVmVjdG9yMigtSW5maW5pdHksIC1JbmZpbml0eSkpIHtcblx0XHR0aGlzLmlzQm94MiA9IHRydWU7XG5cdFx0dGhpcy5taW4gPSBtaW47XG5cdFx0dGhpcy5tYXggPSBtYXg7XG5cdH1cblxuXHRzZXQobWluLCBtYXgpIHtcblx0XHR0aGlzLm1pbi5jb3B5KG1pbik7XG5cdFx0dGhpcy5tYXguY29weShtYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVBvaW50cyhwb2ludHMpIHtcblx0XHR0aGlzLm1ha2VFbXB0eSgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGlsID0gcG9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHRcdHRoaXMuZXhwYW5kQnlQb2ludChwb2ludHNbaV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUNlbnRlckFuZFNpemUoY2VudGVyLCBzaXplKSB7XG5cdFx0Y29uc3QgaGFsZlNpemUgPSBfdmVjdG9yJDIuY29weShzaXplKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuXG5cdFx0dGhpcy5taW4uY29weShjZW50ZXIpLnN1YihoYWxmU2l6ZSk7XG5cdFx0dGhpcy5tYXguY29weShjZW50ZXIpLmFkZChoYWxmU2l6ZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cblx0Y29weShib3gpIHtcblx0XHR0aGlzLm1pbi5jb3B5KGJveC5taW4pO1xuXHRcdHRoaXMubWF4LmNvcHkoYm94Lm1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlRW1wdHkoKSB7XG5cdFx0dGhpcy5taW4ueCA9IHRoaXMubWluLnkgPSArSW5maW5pdHk7XG5cdFx0dGhpcy5tYXgueCA9IHRoaXMubWF4LnkgPSAtSW5maW5pdHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0VtcHR5KCkge1xuXHRcdC8vIHRoaXMgaXMgYSBtb3JlIHJvYnVzdCBjaGVjayBmb3IgZW1wdHkgdGhhbiAoIHZvbHVtZSA8PSAwICkgYmVjYXVzZSB2b2x1bWUgY2FuIGdldCBwb3NpdGl2ZSB3aXRoIHR3byBuZWdhdGl2ZSBheGVzXG5cdFx0cmV0dXJuIHRoaXMubWF4LnggPCB0aGlzLm1pbi54IHx8IHRoaXMubWF4LnkgPCB0aGlzLm1pbi55O1xuXHR9XG5cblx0Z2V0Q2VudGVyKHRhcmdldCA9IG5ldyBWZWN0b3IyKCkpIHtcblx0XHRyZXR1cm4gdGhpcy5pc0VtcHR5KCkgPyB0YXJnZXQuc2V0KDAsIDApIDogdGFyZ2V0LmFkZFZlY3RvcnModGhpcy5taW4sIHRoaXMubWF4KS5tdWx0aXBseVNjYWxhcigwLjUpO1xuXHR9XG5cblx0Z2V0U2l6ZSh0YXJnZXQgPSBuZXcgVmVjdG9yMigpKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNFbXB0eSgpID8gdGFyZ2V0LnNldCgwLCAwKSA6IHRhcmdldC5zdWJWZWN0b3JzKHRoaXMubWF4LCB0aGlzLm1pbik7XG5cdH1cblxuXHRleHBhbmRCeVBvaW50KHBvaW50KSB7XG5cdFx0dGhpcy5taW4ubWluKHBvaW50KTtcblx0XHR0aGlzLm1heC5tYXgocG9pbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXhwYW5kQnlWZWN0b3IodmVjdG9yKSB7XG5cdFx0dGhpcy5taW4uc3ViKHZlY3Rvcik7XG5cdFx0dGhpcy5tYXguYWRkKHZlY3Rvcik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHBhbmRCeVNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLm1pbi5hZGRTY2FsYXIoLXNjYWxhcik7XG5cdFx0dGhpcy5tYXguYWRkU2NhbGFyKHNjYWxhcik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb250YWluc1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIHBvaW50LnggPCB0aGlzLm1pbi54IHx8IHBvaW50LnggPiB0aGlzLm1heC54IHx8IHBvaW50LnkgPCB0aGlzLm1pbi55IHx8IHBvaW50LnkgPiB0aGlzLm1heC55ID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0Y29udGFpbnNCb3goYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMubWluLnggPD0gYm94Lm1pbi54ICYmIGJveC5tYXgueCA8PSB0aGlzLm1heC54ICYmIHRoaXMubWluLnkgPD0gYm94Lm1pbi55ICYmIGJveC5tYXgueSA8PSB0aGlzLm1heC55O1xuXHR9XG5cblx0Z2V0UGFyYW1ldGVyKHBvaW50LCB0YXJnZXQpIHtcblx0XHQvLyBUaGlzIGNhbiBwb3RlbnRpYWxseSBoYXZlIGEgZGl2aWRlIGJ5IHplcm8gaWYgdGhlIGJveFxuXHRcdC8vIGhhcyBhIHNpemUgZGltZW5zaW9uIG9mIDAuXG5cdFx0cmV0dXJuIHRhcmdldC5zZXQoKHBvaW50LnggLSB0aGlzLm1pbi54KSAvICh0aGlzLm1heC54IC0gdGhpcy5taW4ueCksIChwb2ludC55IC0gdGhpcy5taW4ueSkgLyAodGhpcy5tYXgueSAtIHRoaXMubWluLnkpKTtcblx0fVxuXG5cdGludGVyc2VjdHNCb3goYm94KSB7XG5cdFx0Ly8gdXNpbmcgNCBzcGxpdHRpbmcgcGxhbmVzIHRvIHJ1bGUgb3V0IGludGVyc2VjdGlvbnNcblx0XHRyZXR1cm4gYm94Lm1heC54IDwgdGhpcy5taW4ueCB8fCBib3gubWluLnggPiB0aGlzLm1heC54IHx8IGJveC5tYXgueSA8IHRoaXMubWluLnkgfHwgYm94Lm1pbi55ID4gdGhpcy5tYXgueSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXG5cdGNsYW1wUG9pbnQocG9pbnQsIHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuY29weShwb2ludCkuY2xhbXAodGhpcy5taW4sIHRoaXMubWF4KTtcblx0fVxuXG5cdGRpc3RhbmNlVG9Qb2ludChwb2ludCkge1xuXHRcdGNvbnN0IGNsYW1wZWRQb2ludCA9IF92ZWN0b3IkMi5jb3B5KHBvaW50KS5jbGFtcCh0aGlzLm1pbiwgdGhpcy5tYXgpO1xuXG5cdFx0cmV0dXJuIGNsYW1wZWRQb2ludC5zdWIocG9pbnQpLmxlbmd0aCgpO1xuXHR9XG5cblx0aW50ZXJzZWN0KGJveCkge1xuXHRcdHRoaXMubWluLm1heChib3gubWluKTtcblx0XHR0aGlzLm1heC5taW4oYm94Lm1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR1bmlvbihib3gpIHtcblx0XHR0aGlzLm1pbi5taW4oYm94Lm1pbik7XG5cdFx0dGhpcy5tYXgubWF4KGJveC5tYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dHJhbnNsYXRlKG9mZnNldCkge1xuXHRcdHRoaXMubWluLmFkZChvZmZzZXQpO1xuXHRcdHRoaXMubWF4LmFkZChvZmZzZXQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKGJveCkge1xuXHRcdHJldHVybiBib3gubWluLmVxdWFscyh0aGlzLm1pbikgJiYgYm94Lm1heC5lcXVhbHModGhpcy5tYXgpO1xuXHR9XG5cbn1cblxuY2xhc3MgQm94MyB7XG5cdGNvbnN0cnVjdG9yKG1pbiA9IG5ldyBWZWN0b3IzKCtJbmZpbml0eSwgK0luZmluaXR5LCArSW5maW5pdHkpLCBtYXggPSBuZXcgVmVjdG9yMygtSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5KSkge1xuXHRcdHRoaXMuaXNCb3gzID0gdHJ1ZTtcblx0XHR0aGlzLm1pbiA9IG1pbjtcblx0XHR0aGlzLm1heCA9IG1heDtcblx0fVxuXG5cdHNldChtaW4sIG1heCkge1xuXHRcdHRoaXMubWluLmNvcHkobWluKTtcblx0XHR0aGlzLm1heC5jb3B5KG1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tQXJyYXkoYXJyYXkpIHtcblx0XHRsZXQgbWluWCA9ICtJbmZpbml0eTtcblx0XHRsZXQgbWluWSA9ICtJbmZpbml0eTtcblx0XHRsZXQgbWluWiA9ICtJbmZpbml0eTtcblx0XHRsZXQgbWF4WCA9IC1JbmZpbml0eTtcblx0XHRsZXQgbWF4WSA9IC1JbmZpbml0eTtcblx0XHRsZXQgbWF4WiA9IC1JbmZpbml0eTtcblxuXHRcdGZvciAobGV0IGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSArPSAzKSB7XG5cdFx0XHRjb25zdCB4ID0gYXJyYXlbaV07XG5cdFx0XHRjb25zdCB5ID0gYXJyYXlbaSArIDFdO1xuXHRcdFx0Y29uc3QgeiA9IGFycmF5W2kgKyAyXTtcblx0XHRcdGlmICh4IDwgbWluWCkgbWluWCA9IHg7XG5cdFx0XHRpZiAoeSA8IG1pblkpIG1pblkgPSB5O1xuXHRcdFx0aWYgKHogPCBtaW5aKSBtaW5aID0gejtcblx0XHRcdGlmICh4ID4gbWF4WCkgbWF4WCA9IHg7XG5cdFx0XHRpZiAoeSA+IG1heFkpIG1heFkgPSB5O1xuXHRcdFx0aWYgKHogPiBtYXhaKSBtYXhaID0gejtcblx0XHR9XG5cblx0XHR0aGlzLm1pbi5zZXQobWluWCwgbWluWSwgbWluWik7XG5cdFx0dGhpcy5tYXguc2V0KG1heFgsIG1heFksIG1heFopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vIHNldEZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApIHtcblx0Ly8gXHRsZXQgbWluWCA9ICsgSW5maW5pdHk7XG5cdC8vIFx0bGV0IG1pblkgPSArIEluZmluaXR5O1xuXHQvLyBcdGxldCBtaW5aID0gKyBJbmZpbml0eTtcblx0Ly8gXHRsZXQgbWF4WCA9IC0gSW5maW5pdHk7XG5cdC8vIFx0bGV0IG1heFkgPSAtIEluZmluaXR5O1xuXHQvLyBcdGxldCBtYXhaID0gLSBJbmZpbml0eTtcblx0Ly8gXHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBhdHRyaWJ1dGUuY291bnQ7IGkgPCBsOyBpICsrICkge1xuXHQvLyBcdFx0Y29uc3QgeCA9IGF0dHJpYnV0ZS5nZXRYKCBpICk7XG5cdC8vIFx0XHRjb25zdCB5ID0gYXR0cmlidXRlLmdldFkoIGkgKTtcblx0Ly8gXHRcdGNvbnN0IHogPSBhdHRyaWJ1dGUuZ2V0WiggaSApO1xuXHQvLyBcdFx0aWYgKCB4IDwgbWluWCApIG1pblggPSB4O1xuXHQvLyBcdFx0aWYgKCB5IDwgbWluWSApIG1pblkgPSB5O1xuXHQvLyBcdFx0aWYgKCB6IDwgbWluWiApIG1pblogPSB6O1xuXHQvLyBcdFx0aWYgKCB4ID4gbWF4WCApIG1heFggPSB4O1xuXHQvLyBcdFx0aWYgKCB5ID4gbWF4WSApIG1heFkgPSB5O1xuXHQvLyBcdFx0aWYgKCB6ID4gbWF4WiApIG1heFogPSB6O1xuXHQvLyBcdH1cblx0Ly8gXHR0aGlzLm1pbi5zZXQoIG1pblgsIG1pblksIG1pblogKTtcblx0Ly8gXHR0aGlzLm1heC5zZXQoIG1heFgsIG1heFksIG1heFogKTtcblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0c2V0RnJvbVBvaW50cyhwb2ludHMpIHtcblx0XHR0aGlzLm1ha2VFbXB0eSgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGlsID0gcG9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHRcdHRoaXMuZXhwYW5kQnlQb2ludChwb2ludHNbaV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUNlbnRlckFuZFNpemUoY2VudGVyLCBzaXplKSB7XG5cdFx0Y29uc3QgaGFsZlNpemUgPSBfdmVjdG9yJDEuY29weShzaXplKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuXG5cdFx0dGhpcy5taW4uY29weShjZW50ZXIpLnN1YihoYWxmU2l6ZSk7XG5cdFx0dGhpcy5tYXguY29weShjZW50ZXIpLmFkZChoYWxmU2l6ZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tT2JqZWN0KG9iamVjdCwgcHJlY2lzZSA9IGZhbHNlKSB7XG5cdFx0dGhpcy5tYWtlRW1wdHkoKTtcblx0XHRyZXR1cm4gdGhpcy5leHBhbmRCeU9iamVjdChvYmplY3QsIHByZWNpc2UpO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG5cdGNvcHkoYm94KSB7XG5cdFx0dGhpcy5taW4uY29weShib3gubWluKTtcblx0XHR0aGlzLm1heC5jb3B5KGJveC5tYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZUVtcHR5KCkge1xuXHRcdHRoaXMubWluLnggPSB0aGlzLm1pbi55ID0gdGhpcy5taW4ueiA9ICtJbmZpbml0eTtcblx0XHR0aGlzLm1heC54ID0gdGhpcy5tYXgueSA9IHRoaXMubWF4LnogPSAtSW5maW5pdHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0VtcHR5KCkge1xuXHRcdC8vIHRoaXMgaXMgYSBtb3JlIHJvYnVzdCBjaGVjayBmb3IgZW1wdHkgdGhhbiAoIHZvbHVtZSA8PSAwICkgYmVjYXVzZSB2b2x1bWUgY2FuIGdldCBwb3NpdGl2ZSB3aXRoIHR3byBuZWdhdGl2ZSBheGVzXG5cdFx0cmV0dXJuIHRoaXMubWF4LnggPCB0aGlzLm1pbi54IHx8IHRoaXMubWF4LnkgPCB0aGlzLm1pbi55IHx8IHRoaXMubWF4LnogPCB0aGlzLm1pbi56O1xuXHR9XG5cblx0Z2V0Q2VudGVyKHRhcmdldCA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHRyZXR1cm4gdGhpcy5pc0VtcHR5KCkgPyB0YXJnZXQuc2V0KDAsIDAsIDApIDogdGFyZ2V0LmFkZFZlY3RvcnModGhpcy5taW4sIHRoaXMubWF4KS5tdWx0aXBseVNjYWxhcigwLjUpO1xuXHR9XG5cblx0Z2V0U2l6ZSh0YXJnZXQgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNFbXB0eSgpID8gdGFyZ2V0LnNldCgwLCAwLCAwKSA6IHRhcmdldC5zdWJWZWN0b3JzKHRoaXMubWF4LCB0aGlzLm1pbik7XG5cdH1cblxuXHRleHBhbmRCeVBvaW50KHBvaW50KSB7XG5cdFx0dGhpcy5taW4ubWluKHBvaW50KTtcblx0XHR0aGlzLm1heC5tYXgocG9pbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXhwYW5kQnlWZWN0b3IodmVjdG9yKSB7XG5cdFx0dGhpcy5taW4uc3ViKHZlY3Rvcik7XG5cdFx0dGhpcy5tYXguYWRkKHZlY3Rvcik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHBhbmRCeVNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLm1pbi5hZGRTY2FsYXIoLXNjYWxhcik7XG5cdFx0dGhpcy5tYXguYWRkU2NhbGFyKHNjYWxhcik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy8gZXhwYW5kQnlPYmplY3QoIG9iamVjdCwgcHJlY2lzZSA9IGZhbHNlICkge1xuXHQvLyBcdC8vIENvbXB1dGVzIHRoZSB3b3JsZC1heGlzLWFsaWduZWQgYm91bmRpbmcgYm94IG9mIGFuIG9iamVjdCAoaW5jbHVkaW5nIGl0cyBjaGlsZHJlbiksXG5cdC8vIFx0Ly8gYWNjb3VudGluZyBmb3IgYm90aCB0aGUgb2JqZWN0J3MsIGFuZCBjaGlsZHJlbidzLCB3b3JsZCB0cmFuc2Zvcm1zXG5cdC8vIFx0b2JqZWN0LnVwZGF0ZVdvcmxkTWF0cml4KCBmYWxzZSwgZmFsc2UgKTtcblx0Ly8gXHRjb25zdCBnZW9tZXRyeSA9IG9iamVjdC5nZW9tZXRyeTtcblx0Ly8gXHRpZiAoIGdlb21ldHJ5ICE9PSB1bmRlZmluZWQgKSB7XG5cdC8vIFx0XHRpZiAoIHByZWNpc2UgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcyAhPSB1bmRlZmluZWQgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXHQvLyBcdFx0XHRjb25zdCBwb3NpdGlvbiA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG5cdC8vIFx0XHRcdGZvciAoIGxldCBpID0gMCwgbCA9IHBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSArKyApIHtcblx0Ly8gXHRcdFx0XHRfdmVjdG9yLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc2l0aW9uLCBpICkuYXBwbHlNYXRyaXg0KCBvYmplY3QubWF0cml4V29ybGQgKTtcblx0Ly8gXHRcdFx0XHR0aGlzLmV4cGFuZEJ5UG9pbnQoIF92ZWN0b3IgKTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0aWYgKCBnZW9tZXRyeS5ib3VuZGluZ0JveCA9PT0gbnVsbCApIHtcblx0Ly8gXHRcdFx0XHRnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0XHRfYm94LmNvcHkoIGdlb21ldHJ5LmJvdW5kaW5nQm94ICk7XG5cdC8vIFx0XHRcdF9ib3guYXBwbHlNYXRyaXg0KCBvYmplY3QubWF0cml4V29ybGQgKTtcblx0Ly8gXHRcdFx0dGhpcy51bmlvbiggX2JveCApO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gXHRjb25zdCBjaGlsZHJlbiA9IG9iamVjdC5jaGlsZHJlbjtcblx0Ly8gXHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xuXHQvLyBcdFx0dGhpcy5leHBhbmRCeU9iamVjdCggY2hpbGRyZW5bIGkgXSwgcHJlY2lzZSApO1xuXHQvLyBcdH1cblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0Y29udGFpbnNQb2ludChwb2ludCkge1xuXHRcdHJldHVybiBwb2ludC54IDwgdGhpcy5taW4ueCB8fCBwb2ludC54ID4gdGhpcy5tYXgueCB8fCBwb2ludC55IDwgdGhpcy5taW4ueSB8fCBwb2ludC55ID4gdGhpcy5tYXgueSB8fCBwb2ludC56IDwgdGhpcy5taW4ueiB8fCBwb2ludC56ID4gdGhpcy5tYXgueiA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXG5cdGNvbnRhaW5zQm94KGJveCkge1xuXHRcdHJldHVybiB0aGlzLm1pbi54IDw9IGJveC5taW4ueCAmJiBib3gubWF4LnggPD0gdGhpcy5tYXgueCAmJiB0aGlzLm1pbi55IDw9IGJveC5taW4ueSAmJiBib3gubWF4LnkgPD0gdGhpcy5tYXgueSAmJiB0aGlzLm1pbi56IDw9IGJveC5taW4ueiAmJiBib3gubWF4LnogPD0gdGhpcy5tYXguejtcblx0fVxuXG5cdGdldFBhcmFtZXRlcihwb2ludCwgdGFyZ2V0KSB7XG5cdFx0Ly8gVGhpcyBjYW4gcG90ZW50aWFsbHkgaGF2ZSBhIGRpdmlkZSBieSB6ZXJvIGlmIHRoZSBib3hcblx0XHQvLyBoYXMgYSBzaXplIGRpbWVuc2lvbiBvZiAwLlxuXHRcdHJldHVybiB0YXJnZXQuc2V0KChwb2ludC54IC0gdGhpcy5taW4ueCkgLyAodGhpcy5tYXgueCAtIHRoaXMubWluLngpLCAocG9pbnQueSAtIHRoaXMubWluLnkpIC8gKHRoaXMubWF4LnkgLSB0aGlzLm1pbi55KSwgKHBvaW50LnogLSB0aGlzLm1pbi56KSAvICh0aGlzLm1heC56IC0gdGhpcy5taW4ueikpO1xuXHR9XG5cblx0aW50ZXJzZWN0c0JveChib3gpIHtcblx0XHQvLyB1c2luZyA2IHNwbGl0dGluZyBwbGFuZXMgdG8gcnVsZSBvdXQgaW50ZXJzZWN0aW9ucy5cblx0XHRyZXR1cm4gYm94Lm1heC54IDwgdGhpcy5taW4ueCB8fCBib3gubWluLnggPiB0aGlzLm1heC54IHx8IGJveC5tYXgueSA8IHRoaXMubWluLnkgfHwgYm94Lm1pbi55ID4gdGhpcy5tYXgueSB8fCBib3gubWF4LnogPCB0aGlzLm1pbi56IHx8IGJveC5taW4ueiA+IHRoaXMubWF4LnogPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHRpbnRlcnNlY3RzU3BoZXJlKHNwaGVyZSkge1xuXHRcdC8vIEZpbmQgdGhlIHBvaW50IG9uIHRoZSBBQUJCIGNsb3Nlc3QgdG8gdGhlIHNwaGVyZSBjZW50ZXIuXG5cdFx0dGhpcy5jbGFtcFBvaW50KHNwaGVyZS5jZW50ZXIsIF92ZWN0b3IkMSk7IC8vIElmIHRoYXQgcG9pbnQgaXMgaW5zaWRlIHRoZSBzcGhlcmUsIHRoZSBBQUJCIGFuZCBzcGhlcmUgaW50ZXJzZWN0LlxuXG5cdFx0cmV0dXJuIF92ZWN0b3IkMS5kaXN0YW5jZVRvU3F1YXJlZChzcGhlcmUuY2VudGVyKSA8PSBzcGhlcmUucmFkaXVzICogc3BoZXJlLnJhZGl1cztcblx0fVxuXG5cdGludGVyc2VjdHNQbGFuZShwbGFuZSkge1xuXHRcdC8vIFdlIGNvbXB1dGUgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gZG90IHByb2R1Y3QgdmFsdWVzLiBJZiB0aG9zZSB2YWx1ZXNcblx0XHQvLyBhcmUgb24gdGhlIHNhbWUgc2lkZSAoYmFjayBvciBmcm9udCkgb2YgdGhlIHBsYW5lLCB0aGVuIHRoZXJlIGlzIG5vIGludGVyc2VjdGlvbi5cblx0XHRsZXQgbWluLCBtYXg7XG5cblx0XHRpZiAocGxhbmUubm9ybWFsLnggPiAwKSB7XG5cdFx0XHRtaW4gPSBwbGFuZS5ub3JtYWwueCAqIHRoaXMubWluLng7XG5cdFx0XHRtYXggPSBwbGFuZS5ub3JtYWwueCAqIHRoaXMubWF4Lng7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbiA9IHBsYW5lLm5vcm1hbC54ICogdGhpcy5tYXgueDtcblx0XHRcdG1heCA9IHBsYW5lLm5vcm1hbC54ICogdGhpcy5taW4ueDtcblx0XHR9XG5cblx0XHRpZiAocGxhbmUubm9ybWFsLnkgPiAwKSB7XG5cdFx0XHRtaW4gKz0gcGxhbmUubm9ybWFsLnkgKiB0aGlzLm1pbi55O1xuXHRcdFx0bWF4ICs9IHBsYW5lLm5vcm1hbC55ICogdGhpcy5tYXgueTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWluICs9IHBsYW5lLm5vcm1hbC55ICogdGhpcy5tYXgueTtcblx0XHRcdG1heCArPSBwbGFuZS5ub3JtYWwueSAqIHRoaXMubWluLnk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYW5lLm5vcm1hbC56ID4gMCkge1xuXHRcdFx0bWluICs9IHBsYW5lLm5vcm1hbC56ICogdGhpcy5taW4uejtcblx0XHRcdG1heCArPSBwbGFuZS5ub3JtYWwueiAqIHRoaXMubWF4Lno7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbiArPSBwbGFuZS5ub3JtYWwueiAqIHRoaXMubWF4Lno7XG5cdFx0XHRtYXggKz0gcGxhbmUubm9ybWFsLnogKiB0aGlzLm1pbi56O1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW4gPD0gLXBsYW5lLmNvbnN0YW50ICYmIG1heCA+PSAtcGxhbmUuY29uc3RhbnQ7XG5cdH1cblxuXHRpbnRlcnNlY3RzVHJpYW5nbGUodHJpYW5nbGUpIHtcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IC8vIGNvbXB1dGUgYm94IGNlbnRlciBhbmQgZXh0ZW50c1xuXG5cblx0XHR0aGlzLmdldENlbnRlcihfY2VudGVyKTtcblxuXHRcdF9leHRlbnRzLnN1YlZlY3RvcnModGhpcy5tYXgsIF9jZW50ZXIpOyAvLyB0cmFuc2xhdGUgdHJpYW5nbGUgdG8gYWFiYiBvcmlnaW5cblxuXG5cdFx0X3YwJDEuc3ViVmVjdG9ycyh0cmlhbmdsZS5hLCBfY2VudGVyKTtcblxuXHRcdF92MSQzLnN1YlZlY3RvcnModHJpYW5nbGUuYiwgX2NlbnRlcik7XG5cblx0XHRfdjIkMS5zdWJWZWN0b3JzKHRyaWFuZ2xlLmMsIF9jZW50ZXIpOyAvLyBjb21wdXRlIGVkZ2UgdmVjdG9ycyBmb3IgdHJpYW5nbGVcblxuXG5cdFx0X2YwLnN1YlZlY3RvcnMoX3YxJDMsIF92MCQxKTtcblxuXHRcdF9mMS5zdWJWZWN0b3JzKF92MiQxLCBfdjEkMyk7XG5cblx0XHRfZjIuc3ViVmVjdG9ycyhfdjAkMSwgX3YyJDEpOyAvLyB0ZXN0IGFnYWluc3QgYXhlcyB0aGF0IGFyZSBnaXZlbiBieSBjcm9zcyBwcm9kdWN0IGNvbWJpbmF0aW9ucyBvZiB0aGUgZWRnZXMgb2YgdGhlIHRyaWFuZ2xlIGFuZCB0aGUgZWRnZXMgb2YgdGhlIGFhYmJcblx0XHQvLyBtYWtlIGFuIGF4aXMgdGVzdGluZyBvZiBlYWNoIG9mIHRoZSAzIHNpZGVzIG9mIHRoZSBhYWJiIGFnYWluc3QgZWFjaCBvZiB0aGUgMyBzaWRlcyBvZiB0aGUgdHJpYW5nbGUgPSA5IGF4aXMgb2Ygc2VwYXJhdGlvblxuXHRcdC8vIGF4aXNfaWogPSB1X2kgeCBmX2ogKHUwLCB1MSwgdTIgPSBmYWNlIG5vcm1hbHMgb2YgYWFiYiA9IHgseSx6IGF4ZXMgdmVjdG9ycyBzaW5jZSBhYWJiIGlzIGF4aXMgYWxpZ25lZClcblxuXG5cdFx0bGV0IGF4ZXMgPSBbMCwgLV9mMC56LCBfZjAueSwgMCwgLV9mMS56LCBfZjEueSwgMCwgLV9mMi56LCBfZjIueSwgX2YwLnosIDAsIC1fZjAueCwgX2YxLnosIDAsIC1fZjEueCwgX2YyLnosIDAsIC1fZjIueCwgLV9mMC55LCBfZjAueCwgMCwgLV9mMS55LCBfZjEueCwgMCwgLV9mMi55LCBfZjIueCwgMF07XG5cblx0XHRpZiAoIXNhdEZvckF4ZXMoYXhlcywgX3YwJDEsIF92MSQzLCBfdjIkMSwgX2V4dGVudHMpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSAvLyB0ZXN0IDMgZmFjZSBub3JtYWxzIGZyb20gdGhlIGFhYmJcblxuXG5cdFx0YXhlcyA9IFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXTtcblxuXHRcdGlmICghc2F0Rm9yQXhlcyhheGVzLCBfdjAkMSwgX3YxJDMsIF92MiQxLCBfZXh0ZW50cykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IC8vIGZpbmFsbHkgdGVzdGluZyB0aGUgZmFjZSBub3JtYWwgb2YgdGhlIHRyaWFuZ2xlXG5cdFx0Ly8gdXNlIGFscmVhZHkgZXhpc3RpbmcgdHJpYW5nbGUgZWRnZSB2ZWN0b3JzIGhlcmVcblxuXG5cdFx0X3RyaWFuZ2xlTm9ybWFsLmNyb3NzVmVjdG9ycyhfZjAsIF9mMSk7XG5cblx0XHRheGVzID0gW190cmlhbmdsZU5vcm1hbC54LCBfdHJpYW5nbGVOb3JtYWwueSwgX3RyaWFuZ2xlTm9ybWFsLnpdO1xuXHRcdHJldHVybiBzYXRGb3JBeGVzKGF4ZXMsIF92MCQxLCBfdjEkMywgX3YyJDEsIF9leHRlbnRzKTtcblx0fVxuXG5cdGNsYW1wUG9pbnQocG9pbnQsIHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuY29weShwb2ludCkuY2xhbXAodGhpcy5taW4sIHRoaXMubWF4KTtcblx0fVxuXG5cdGRpc3RhbmNlVG9Qb2ludChwb2ludCkge1xuXHRcdGNvbnN0IGNsYW1wZWRQb2ludCA9IF92ZWN0b3IkMS5jb3B5KHBvaW50KS5jbGFtcCh0aGlzLm1pbiwgdGhpcy5tYXgpO1xuXG5cdFx0cmV0dXJuIGNsYW1wZWRQb2ludC5zdWIocG9pbnQpLmxlbmd0aCgpO1xuXHR9XG5cblx0Z2V0Qm91bmRpbmdTcGhlcmUodGFyZ2V0KSB7XG5cdFx0dGhpcy5nZXRDZW50ZXIodGFyZ2V0LmNlbnRlcik7XG5cdFx0dGFyZ2V0LnJhZGl1cyA9IHRoaXMuZ2V0U2l6ZShfdmVjdG9yJDEpLmxlbmd0aCgpICogMC41O1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRpbnRlcnNlY3QoYm94KSB7XG5cdFx0dGhpcy5taW4ubWF4KGJveC5taW4pO1xuXHRcdHRoaXMubWF4Lm1pbihib3gubWF4KTsgLy8gZW5zdXJlIHRoYXQgaWYgdGhlcmUgaXMgbm8gb3ZlcmxhcCwgdGhlIHJlc3VsdCBpcyBmdWxseSBlbXB0eSwgbm90IHNsaWdodGx5IGVtcHR5IHdpdGggbm9uLWluZi8raW5mIHZhbHVlcyB0aGF0IHdpbGwgY2F1c2Ugc3Vic2VxdWVuY2UgaW50ZXJzZWN0cyB0byBlcnJvbmVvdXNseSByZXR1cm4gdmFsaWQgdmFsdWVzLlxuXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLm1ha2VFbXB0eSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dW5pb24oYm94KSB7XG5cdFx0dGhpcy5taW4ubWluKGJveC5taW4pO1xuXHRcdHRoaXMubWF4Lm1heChib3gubWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtYXRyaXgpIHtcblx0XHQvLyB0cmFuc2Zvcm0gb2YgZW1wdHkgYm94IGlzIGFuIGVtcHR5IGJveC5cblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybiB0aGlzOyAvLyBOT1RFOiBJIGFtIHVzaW5nIGEgYmluYXJ5IHBhdHRlcm4gdG8gc3BlY2lmeSBhbGwgMl4zIGNvbWJpbmF0aW9ucyBiZWxvd1xuXG5cdFx0X3BvaW50c1swXS5zZXQodGhpcy5taW4ueCwgdGhpcy5taW4ueSwgdGhpcy5taW4ueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDAwMFxuXG5cblx0XHRfcG9pbnRzWzFdLnNldCh0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1heC56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMDAxXG5cblxuXHRcdF9wb2ludHNbMl0uc2V0KHRoaXMubWluLngsIHRoaXMubWF4LnksIHRoaXMubWluLnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAwMTBcblxuXG5cdFx0X3BvaW50c1szXS5zZXQodGhpcy5taW4ueCwgdGhpcy5tYXgueSwgdGhpcy5tYXgueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDAxMVxuXG5cblx0XHRfcG9pbnRzWzRdLnNldCh0aGlzLm1heC54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMTAwXG5cblxuXHRcdF9wb2ludHNbNV0uc2V0KHRoaXMubWF4LngsIHRoaXMubWluLnksIHRoaXMubWF4LnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAxMDFcblxuXG5cdFx0X3BvaW50c1s2XS5zZXQodGhpcy5tYXgueCwgdGhpcy5tYXgueSwgdGhpcy5taW4ueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDExMFxuXG5cblx0XHRfcG9pbnRzWzddLnNldCh0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1heC56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMTExXG5cblxuXHRcdHRoaXMuc2V0RnJvbVBvaW50cyhfcG9pbnRzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyYW5zbGF0ZShvZmZzZXQpIHtcblx0XHR0aGlzLm1pbi5hZGQob2Zmc2V0KTtcblx0XHR0aGlzLm1heC5hZGQob2Zmc2V0KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhib3gpIHtcblx0XHRyZXR1cm4gYm94Lm1pbi5lcXVhbHModGhpcy5taW4pICYmIGJveC5tYXguZXF1YWxzKHRoaXMubWF4KTtcblx0fVxuXG59XG5cbmNvbnN0IF9wb2ludHMgPSBbLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpXTtcblxuY29uc3QgX3ZlY3RvciQxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9ib3gkMSA9IC8qQF9fUFVSRV9fKi9uZXcgQm94MygpOyAvLyB0cmlhbmdsZSBjZW50ZXJlZCB2ZXJ0aWNlc1xuXG5cbmNvbnN0IF92MCQxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92MSQzID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92MiQxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7IC8vIHRyaWFuZ2xlIGVkZ2UgdmVjdG9yc1xuXG5cbmNvbnN0IF9mMCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZjEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2YyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9jZW50ZXIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2V4dGVudHMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3RyaWFuZ2xlTm9ybWFsID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF90ZXN0QXhpcyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5mdW5jdGlvbiBzYXRGb3JBeGVzKGF4ZXMsIHYwLCB2MSwgdjIsIGV4dGVudHMpIHtcblx0Zm9yIChsZXQgaSA9IDAsIGogPSBheGVzLmxlbmd0aCAtIDM7IGkgPD0gajsgaSArPSAzKSB7XG5cdFx0X3Rlc3RBeGlzLmZyb21BcnJheShheGVzLCBpKTsgLy8gcHJvamVjdCB0aGUgYWFiYiBvbnRvIHRoZSBzZXBhcmF0aW5nIGF4aXNcblxuXG5cdFx0Y29uc3QgciA9IGV4dGVudHMueCAqIE1hdGguYWJzKF90ZXN0QXhpcy54KSArIGV4dGVudHMueSAqIE1hdGguYWJzKF90ZXN0QXhpcy55KSArIGV4dGVudHMueiAqIE1hdGguYWJzKF90ZXN0QXhpcy56KTsgLy8gcHJvamVjdCBhbGwgMyB2ZXJ0aWNlcyBvZiB0aGUgdHJpYW5nbGUgb250byB0aGUgc2VwYXJhdGluZyBheGlzXG5cblx0XHRjb25zdCBwMCA9IHYwLmRvdChfdGVzdEF4aXMpO1xuXHRcdGNvbnN0IHAxID0gdjEuZG90KF90ZXN0QXhpcyk7XG5cdFx0Y29uc3QgcDIgPSB2Mi5kb3QoX3Rlc3RBeGlzKTsgLy8gYWN0dWFsIHRlc3QsIGJhc2ljYWxseSBzZWUgaWYgZWl0aGVyIG9mIHRoZSBtb3N0IGV4dHJlbWUgb2YgdGhlIHRyaWFuZ2xlIHBvaW50cyBpbnRlcnNlY3RzIHJcblxuXHRcdGlmIChNYXRoLm1heCgtTWF0aC5tYXgocDAsIHAxLCBwMiksIE1hdGgubWluKHAwLCBwMSwgcDIpKSA+IHIpIHtcblx0XHRcdC8vIHBvaW50cyBvZiB0aGUgcHJvamVjdGVkIHRyaWFuZ2xlIGFyZSBvdXRzaWRlIHRoZSBwcm9qZWN0ZWQgaGFsZi1sZW5ndGggb2YgdGhlIGFhYmJcblx0XHRcdC8vIHRoZSBheGlzIGlzIHNlcGFyYXRpbmcgYW5kIHdlIGNhbiBleGl0XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIFNSR0JUb0xpbmVhcihjKSB7XG5cdHJldHVybiBjIDwgMC4wNDA0NSA/IGMgKiAwLjA3NzM5OTM4MDggOiBNYXRoLnBvdyhjICogMC45NDc4NjcyOTg2ICsgMC4wNTIxMzI3MDE0LCAyLjQpO1xufVxuZnVuY3Rpb24gTGluZWFyVG9TUkdCKGMpIHtcblx0cmV0dXJuIGMgPCAwLjAwMzEzMDggPyBjICogMTIuOTIgOiAxLjA1NSAqIE1hdGgucG93KGMsIDAuNDE2NjYpIC0gMC4wNTU7XG59IC8vIEphdmFTY3JpcHQgUkdCLXRvLVJHQiB0cmFuc2Zvcm1zLCBkZWZpbmVkIGFzXG4vLyBGTltJbnB1dENvbG9yU3BhY2VdW091dHB1dENvbG9yU3BhY2VdIGNhbGxiYWNrIGZ1bmN0aW9ucy5cblxuY29uc3QgRk4gPSB7XG5cdFtTUkdCQ29sb3JTcGFjZV06IHtcblx0XHRbTGluZWFyU1JHQkNvbG9yU3BhY2VdOiBTUkdCVG9MaW5lYXJcblx0fSxcblx0W0xpbmVhclNSR0JDb2xvclNwYWNlXToge1xuXHRcdFtTUkdCQ29sb3JTcGFjZV06IExpbmVhclRvU1JHQlxuXHR9XG59O1xuY29uc3QgQ29sb3JNYW5hZ2VtZW50ID0ge1xuXHRsZWdhY3lNb2RlOiB0cnVlLFxuXG5cdGdldCB3b3JraW5nQ29sb3JTcGFjZSgpIHtcblx0XHRyZXR1cm4gTGluZWFyU1JHQkNvbG9yU3BhY2U7XG5cdH0sXG5cblx0c2V0IHdvcmtpbmdDb2xvclNwYWNlKGNvbG9yU3BhY2UpIHtcblx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLkNvbG9yTWFuYWdlbWVudDogLndvcmtpbmdDb2xvclNwYWNlIGlzIHJlYWRvbmx5LicpO1xuXHR9LFxuXG5cdGNvbnZlcnQ6IGZ1bmN0aW9uIChjb2xvciwgc291cmNlQ29sb3JTcGFjZSwgdGFyZ2V0Q29sb3JTcGFjZSkge1xuXHRcdGlmICh0aGlzLmxlZ2FjeU1vZGUgfHwgc291cmNlQ29sb3JTcGFjZSA9PT0gdGFyZ2V0Q29sb3JTcGFjZSB8fCAhc291cmNlQ29sb3JTcGFjZSB8fCAhdGFyZ2V0Q29sb3JTcGFjZSkge1xuXHRcdFx0cmV0dXJuIGNvbG9yO1xuXHRcdH1cblxuXHRcdGlmIChGTltzb3VyY2VDb2xvclNwYWNlXSAmJiBGTltzb3VyY2VDb2xvclNwYWNlXVt0YXJnZXRDb2xvclNwYWNlXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCBmbiA9IEZOW3NvdXJjZUNvbG9yU3BhY2VdW3RhcmdldENvbG9yU3BhY2VdO1xuXHRcdFx0Y29sb3IuciA9IGZuKGNvbG9yLnIpO1xuXHRcdFx0Y29sb3IuZyA9IGZuKGNvbG9yLmcpO1xuXHRcdFx0Y29sb3IuYiA9IGZuKGNvbG9yLmIpO1xuXHRcdFx0cmV0dXJuIGNvbG9yO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgY29sb3Igc3BhY2UgY29udmVyc2lvbi4nKTtcblx0fSxcblx0ZnJvbVdvcmtpbmdDb2xvclNwYWNlOiBmdW5jdGlvbiAoY29sb3IsIHRhcmdldENvbG9yU3BhY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0KGNvbG9yLCB0aGlzLndvcmtpbmdDb2xvclNwYWNlLCB0YXJnZXRDb2xvclNwYWNlKTtcblx0fSxcblx0dG9Xb3JraW5nQ29sb3JTcGFjZTogZnVuY3Rpb24gKGNvbG9yLCBzb3VyY2VDb2xvclNwYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udmVydChjb2xvciwgc291cmNlQ29sb3JTcGFjZSwgdGhpcy53b3JraW5nQ29sb3JTcGFjZSk7XG5cdH1cbn07XG5cbmNvbnN0IF9jb2xvcktleXdvcmRzID0ge1xuXHQnYWxpY2VibHVlJzogMHhGMEY4RkYsXG5cdCdhbnRpcXVld2hpdGUnOiAweEZBRUJENyxcblx0J2FxdWEnOiAweDAwRkZGRixcblx0J2FxdWFtYXJpbmUnOiAweDdGRkZENCxcblx0J2F6dXJlJzogMHhGMEZGRkYsXG5cdCdiZWlnZSc6IDB4RjVGNURDLFxuXHQnYmlzcXVlJzogMHhGRkU0QzQsXG5cdCdibGFjayc6IDB4MDAwMDAwLFxuXHQnYmxhbmNoZWRhbG1vbmQnOiAweEZGRUJDRCxcblx0J2JsdWUnOiAweDAwMDBGRixcblx0J2JsdWV2aW9sZXQnOiAweDhBMkJFMixcblx0J2Jyb3duJzogMHhBNTJBMkEsXG5cdCdidXJseXdvb2QnOiAweERFQjg4Nyxcblx0J2NhZGV0Ymx1ZSc6IDB4NUY5RUEwLFxuXHQnY2hhcnRyZXVzZSc6IDB4N0ZGRjAwLFxuXHQnY2hvY29sYXRlJzogMHhEMjY5MUUsXG5cdCdjb3JhbCc6IDB4RkY3RjUwLFxuXHQnY29ybmZsb3dlcmJsdWUnOiAweDY0OTVFRCxcblx0J2Nvcm5zaWxrJzogMHhGRkY4REMsXG5cdCdjcmltc29uJzogMHhEQzE0M0MsXG5cdCdjeWFuJzogMHgwMEZGRkYsXG5cdCdkYXJrYmx1ZSc6IDB4MDAwMDhCLFxuXHQnZGFya2N5YW4nOiAweDAwOEI4Qixcblx0J2Rhcmtnb2xkZW5yb2QnOiAweEI4ODYwQixcblx0J2RhcmtncmF5JzogMHhBOUE5QTksXG5cdCdkYXJrZ3JlZW4nOiAweDAwNjQwMCxcblx0J2RhcmtncmV5JzogMHhBOUE5QTksXG5cdCdkYXJra2hha2knOiAweEJEQjc2Qixcblx0J2RhcmttYWdlbnRhJzogMHg4QjAwOEIsXG5cdCdkYXJrb2xpdmVncmVlbic6IDB4NTU2QjJGLFxuXHQnZGFya29yYW5nZSc6IDB4RkY4QzAwLFxuXHQnZGFya29yY2hpZCc6IDB4OTkzMkNDLFxuXHQnZGFya3JlZCc6IDB4OEIwMDAwLFxuXHQnZGFya3NhbG1vbic6IDB4RTk5NjdBLFxuXHQnZGFya3NlYWdyZWVuJzogMHg4RkJDOEYsXG5cdCdkYXJrc2xhdGVibHVlJzogMHg0ODNEOEIsXG5cdCdkYXJrc2xhdGVncmF5JzogMHgyRjRGNEYsXG5cdCdkYXJrc2xhdGVncmV5JzogMHgyRjRGNEYsXG5cdCdkYXJrdHVycXVvaXNlJzogMHgwMENFRDEsXG5cdCdkYXJrdmlvbGV0JzogMHg5NDAwRDMsXG5cdCdkZWVwcGluayc6IDB4RkYxNDkzLFxuXHQnZGVlcHNreWJsdWUnOiAweDAwQkZGRixcblx0J2RpbWdyYXknOiAweDY5Njk2OSxcblx0J2RpbWdyZXknOiAweDY5Njk2OSxcblx0J2RvZGdlcmJsdWUnOiAweDFFOTBGRixcblx0J2ZpcmVicmljayc6IDB4QjIyMjIyLFxuXHQnZmxvcmFsd2hpdGUnOiAweEZGRkFGMCxcblx0J2ZvcmVzdGdyZWVuJzogMHgyMjhCMjIsXG5cdCdmdWNoc2lhJzogMHhGRjAwRkYsXG5cdCdnYWluc2Jvcm8nOiAweERDRENEQyxcblx0J2dob3N0d2hpdGUnOiAweEY4RjhGRixcblx0J2dvbGQnOiAweEZGRDcwMCxcblx0J2dvbGRlbnJvZCc6IDB4REFBNTIwLFxuXHQnZ3JheSc6IDB4ODA4MDgwLFxuXHQnZ3JlZW4nOiAweDAwODAwMCxcblx0J2dyZWVueWVsbG93JzogMHhBREZGMkYsXG5cdCdncmV5JzogMHg4MDgwODAsXG5cdCdob25leWRldyc6IDB4RjBGRkYwLFxuXHQnaG90cGluayc6IDB4RkY2OUI0LFxuXHQnaW5kaWFucmVkJzogMHhDRDVDNUMsXG5cdCdpbmRpZ28nOiAweDRCMDA4Mixcblx0J2l2b3J5JzogMHhGRkZGRjAsXG5cdCdraGFraSc6IDB4RjBFNjhDLFxuXHQnbGF2ZW5kZXInOiAweEU2RTZGQSxcblx0J2xhdmVuZGVyYmx1c2gnOiAweEZGRjBGNSxcblx0J2xhd25ncmVlbic6IDB4N0NGQzAwLFxuXHQnbGVtb25jaGlmZm9uJzogMHhGRkZBQ0QsXG5cdCdsaWdodGJsdWUnOiAweEFERDhFNixcblx0J2xpZ2h0Y29yYWwnOiAweEYwODA4MCxcblx0J2xpZ2h0Y3lhbic6IDB4RTBGRkZGLFxuXHQnbGlnaHRnb2xkZW5yb2R5ZWxsb3cnOiAweEZBRkFEMixcblx0J2xpZ2h0Z3JheSc6IDB4RDNEM0QzLFxuXHQnbGlnaHRncmVlbic6IDB4OTBFRTkwLFxuXHQnbGlnaHRncmV5JzogMHhEM0QzRDMsXG5cdCdsaWdodHBpbmsnOiAweEZGQjZDMSxcblx0J2xpZ2h0c2FsbW9uJzogMHhGRkEwN0EsXG5cdCdsaWdodHNlYWdyZWVuJzogMHgyMEIyQUEsXG5cdCdsaWdodHNreWJsdWUnOiAweDg3Q0VGQSxcblx0J2xpZ2h0c2xhdGVncmF5JzogMHg3Nzg4OTksXG5cdCdsaWdodHNsYXRlZ3JleSc6IDB4Nzc4ODk5LFxuXHQnbGlnaHRzdGVlbGJsdWUnOiAweEIwQzRERSxcblx0J2xpZ2h0eWVsbG93JzogMHhGRkZGRTAsXG5cdCdsaW1lJzogMHgwMEZGMDAsXG5cdCdsaW1lZ3JlZW4nOiAweDMyQ0QzMixcblx0J2xpbmVuJzogMHhGQUYwRTYsXG5cdCdtYWdlbnRhJzogMHhGRjAwRkYsXG5cdCdtYXJvb24nOiAweDgwMDAwMCxcblx0J21lZGl1bWFxdWFtYXJpbmUnOiAweDY2Q0RBQSxcblx0J21lZGl1bWJsdWUnOiAweDAwMDBDRCxcblx0J21lZGl1bW9yY2hpZCc6IDB4QkE1NUQzLFxuXHQnbWVkaXVtcHVycGxlJzogMHg5MzcwREIsXG5cdCdtZWRpdW1zZWFncmVlbic6IDB4M0NCMzcxLFxuXHQnbWVkaXVtc2xhdGVibHVlJzogMHg3QjY4RUUsXG5cdCdtZWRpdW1zcHJpbmdncmVlbic6IDB4MDBGQTlBLFxuXHQnbWVkaXVtdHVycXVvaXNlJzogMHg0OEQxQ0MsXG5cdCdtZWRpdW12aW9sZXRyZWQnOiAweEM3MTU4NSxcblx0J21pZG5pZ2h0Ymx1ZSc6IDB4MTkxOTcwLFxuXHQnbWludGNyZWFtJzogMHhGNUZGRkEsXG5cdCdtaXN0eXJvc2UnOiAweEZGRTRFMSxcblx0J21vY2Nhc2luJzogMHhGRkU0QjUsXG5cdCduYXZham93aGl0ZSc6IDB4RkZERUFELFxuXHQnbmF2eSc6IDB4MDAwMDgwLFxuXHQnb2xkbGFjZSc6IDB4RkRGNUU2LFxuXHQnb2xpdmUnOiAweDgwODAwMCxcblx0J29saXZlZHJhYic6IDB4NkI4RTIzLFxuXHQnb3JhbmdlJzogMHhGRkE1MDAsXG5cdCdvcmFuZ2VyZWQnOiAweEZGNDUwMCxcblx0J29yY2hpZCc6IDB4REE3MEQ2LFxuXHQncGFsZWdvbGRlbnJvZCc6IDB4RUVFOEFBLFxuXHQncGFsZWdyZWVuJzogMHg5OEZCOTgsXG5cdCdwYWxldHVycXVvaXNlJzogMHhBRkVFRUUsXG5cdCdwYWxldmlvbGV0cmVkJzogMHhEQjcwOTMsXG5cdCdwYXBheWF3aGlwJzogMHhGRkVGRDUsXG5cdCdwZWFjaHB1ZmYnOiAweEZGREFCOSxcblx0J3BlcnUnOiAweENEODUzRixcblx0J3BpbmsnOiAweEZGQzBDQixcblx0J3BsdW0nOiAweEREQTBERCxcblx0J3Bvd2RlcmJsdWUnOiAweEIwRTBFNixcblx0J3B1cnBsZSc6IDB4ODAwMDgwLFxuXHQncmViZWNjYXB1cnBsZSc6IDB4NjYzMzk5LFxuXHQncmVkJzogMHhGRjAwMDAsXG5cdCdyb3N5YnJvd24nOiAweEJDOEY4Rixcblx0J3JveWFsYmx1ZSc6IDB4NDE2OUUxLFxuXHQnc2FkZGxlYnJvd24nOiAweDhCNDUxMyxcblx0J3NhbG1vbic6IDB4RkE4MDcyLFxuXHQnc2FuZHlicm93bic6IDB4RjRBNDYwLFxuXHQnc2VhZ3JlZW4nOiAweDJFOEI1Nyxcblx0J3NlYXNoZWxsJzogMHhGRkY1RUUsXG5cdCdzaWVubmEnOiAweEEwNTIyRCxcblx0J3NpbHZlcic6IDB4QzBDMEMwLFxuXHQnc2t5Ymx1ZSc6IDB4ODdDRUVCLFxuXHQnc2xhdGVibHVlJzogMHg2QTVBQ0QsXG5cdCdzbGF0ZWdyYXknOiAweDcwODA5MCxcblx0J3NsYXRlZ3JleSc6IDB4NzA4MDkwLFxuXHQnc25vdyc6IDB4RkZGQUZBLFxuXHQnc3ByaW5nZ3JlZW4nOiAweDAwRkY3Rixcblx0J3N0ZWVsYmx1ZSc6IDB4NDY4MkI0LFxuXHQndGFuJzogMHhEMkI0OEMsXG5cdCd0ZWFsJzogMHgwMDgwODAsXG5cdCd0aGlzdGxlJzogMHhEOEJGRDgsXG5cdCd0b21hdG8nOiAweEZGNjM0Nyxcblx0J3R1cnF1b2lzZSc6IDB4NDBFMEQwLFxuXHQndmlvbGV0JzogMHhFRTgyRUUsXG5cdCd3aGVhdCc6IDB4RjVERUIzLFxuXHQnd2hpdGUnOiAweEZGRkZGRixcblx0J3doaXRlc21va2UnOiAweEY1RjVGNSxcblx0J3llbGxvdyc6IDB4RkZGRjAwLFxuXHQneWVsbG93Z3JlZW4nOiAweDlBQ0QzMlxufTtcbmNvbnN0IF9yZ2IgPSB7XG5cdHI6IDAsXG5cdGc6IDAsXG5cdGI6IDBcbn07XG5jb25zdCBfaHNsQSA9IHtcblx0aDogMCxcblx0czogMCxcblx0bDogMFxufTtcbmNvbnN0IF9oc2xCID0ge1xuXHRoOiAwLFxuXHRzOiAwLFxuXHRsOiAwXG59O1xuXG5mdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcblx0aWYgKHQgPCAwKSB0ICs9IDE7XG5cdGlmICh0ID4gMSkgdCAtPSAxO1xuXHRpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcblx0aWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG5cdGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiAoMiAvIDMgLSB0KTtcblx0cmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIHRvQ29tcG9uZW50cyhzb3VyY2UsIHRhcmdldCkge1xuXHR0YXJnZXQuciA9IHNvdXJjZS5yO1xuXHR0YXJnZXQuZyA9IHNvdXJjZS5nO1xuXHR0YXJnZXQuYiA9IHNvdXJjZS5iO1xuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5jbGFzcyBDb2xvciB7XG5cdGNvbnN0cnVjdG9yKHIsIGcsIGIpIHtcblx0XHR0aGlzLmlzQ29sb3IgPSB0cnVlO1xuXHRcdHRoaXMuciA9IDE7XG5cdFx0dGhpcy5nID0gMTtcblx0XHR0aGlzLmIgPSAxO1xuXG5cdFx0aWYgKGcgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIHIgaXMgVEhSRUUuQ29sb3IsIGhleCBvciBzdHJpbmdcblx0XHRcdHJldHVybiB0aGlzLnNldChyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5zZXRSR0IociwgZywgYik7XG5cdH1cblxuXHRzZXQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUuaXNDb2xvcikge1xuXHRcdFx0dGhpcy5jb3B5KHZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuc2V0SGV4KHZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuc2V0U3R5bGUodmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMuciA9IHNjYWxhcjtcblx0XHR0aGlzLmcgPSBzY2FsYXI7XG5cdFx0dGhpcy5iID0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0SGV4KGhleCwgY29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0aGV4ID0gTWF0aC5mbG9vcihoZXgpO1xuXHRcdHRoaXMuciA9IChoZXggPj4gMTYgJiAyNTUpIC8gMjU1O1xuXHRcdHRoaXMuZyA9IChoZXggPj4gOCAmIDI1NSkgLyAyNTU7XG5cdFx0dGhpcy5iID0gKGhleCAmIDI1NSkgLyAyNTU7XG5cdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRSR0IociwgZywgYiwgY29sb3JTcGFjZSA9IENvbG9yTWFuYWdlbWVudC53b3JraW5nQ29sb3JTcGFjZSkge1xuXHRcdHRoaXMuciA9IHI7XG5cdFx0dGhpcy5nID0gZztcblx0XHR0aGlzLmIgPSBiO1xuXHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0SFNMKGgsIHMsIGwsIGNvbG9yU3BhY2UgPSBDb2xvck1hbmFnZW1lbnQud29ya2luZ0NvbG9yU3BhY2UpIHtcblx0XHQvLyBoLHMsbCByYW5nZXMgYXJlIGluIDAuMCAtIDEuMFxuXHRcdGggPSBldWNsaWRlYW5Nb2R1bG8oaCwgMSk7XG5cdFx0cyA9IGNsYW1wKHMsIDAsIDEpO1xuXHRcdGwgPSBjbGFtcChsLCAwLCAxKTtcblxuXHRcdGlmIChzID09PSAwKSB7XG5cdFx0XHR0aGlzLnIgPSB0aGlzLmcgPSB0aGlzLmIgPSBsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwID0gbCA8PSAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG5cdFx0XHRjb25zdCBxID0gMiAqIGwgLSBwO1xuXHRcdFx0dGhpcy5yID0gaHVlMnJnYihxLCBwLCBoICsgMSAvIDMpO1xuXHRcdFx0dGhpcy5nID0gaHVlMnJnYihxLCBwLCBoKTtcblx0XHRcdHRoaXMuYiA9IGh1ZTJyZ2IocSwgcCwgaCAtIDEgLyAzKTtcblx0XHR9XG5cblx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFN0eWxlKHN0eWxlLCBjb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHRmdW5jdGlvbiBoYW5kbGVBbHBoYShzdHJpbmcpIHtcblx0XHRcdGlmIChzdHJpbmcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG5cdFx0XHRpZiAocGFyc2VGbG9hdChzdHJpbmcpIDwgMSkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLkNvbG9yOiBBbHBoYSBjb21wb25lbnQgb2YgJyArIHN0eWxlICsgJyB3aWxsIGJlIGlnbm9yZWQuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IG07XG5cblx0XHRpZiAobSA9IC9eKCg/OnJnYnxoc2wpYT8pXFwoKFteXFwpXSopXFwpLy5leGVjKHN0eWxlKSkge1xuXHRcdFx0Ly8gcmdiIC8gaHNsXG5cdFx0XHRsZXQgY29sb3I7XG5cdFx0XHRjb25zdCBuYW1lID0gbVsxXTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudHMgPSBtWzJdO1xuXG5cdFx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdFx0Y2FzZSAncmdiJzpcblx0XHRcdFx0Y2FzZSAncmdiYSc6XG5cdFx0XHRcdFx0aWYgKGNvbG9yID0gL15cXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKig/OixcXHMqKFxcZCpcXC4/XFxkKylcXHMqKT8kLy5leGVjKGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0XHQvLyByZ2IoMjU1LDAsMCkgcmdiYSgyNTUsMCwwLDAuNSlcblx0XHRcdFx0XHRcdHRoaXMuciA9IE1hdGgubWluKDI1NSwgcGFyc2VJbnQoY29sb3JbMV0sIDEwKSkgLyAyNTU7XG5cdFx0XHRcdFx0XHR0aGlzLmcgPSBNYXRoLm1pbigyNTUsIHBhcnNlSW50KGNvbG9yWzJdLCAxMCkpIC8gMjU1O1xuXHRcdFx0XHRcdFx0dGhpcy5iID0gTWF0aC5taW4oMjU1LCBwYXJzZUludChjb2xvclszXSwgMTApKSAvIDI1NTtcblx0XHRcdFx0XHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdFx0XHRcdFx0aGFuZGxlQWxwaGEoY29sb3JbNF0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGNvbG9yID0gL15cXHMqKFxcZCspXFwlXFxzKixcXHMqKFxcZCspXFwlXFxzKixcXHMqKFxcZCspXFwlXFxzKig/OixcXHMqKFxcZCpcXC4/XFxkKylcXHMqKT8kLy5leGVjKGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0XHQvLyByZ2IoMTAwJSwwJSwwJSkgcmdiYSgxMDAlLDAlLDAlLDAuNSlcblx0XHRcdFx0XHRcdHRoaXMuciA9IE1hdGgubWluKDEwMCwgcGFyc2VJbnQoY29sb3JbMV0sIDEwKSkgLyAxMDA7XG5cdFx0XHRcdFx0XHR0aGlzLmcgPSBNYXRoLm1pbigxMDAsIHBhcnNlSW50KGNvbG9yWzJdLCAxMCkpIC8gMTAwO1xuXHRcdFx0XHRcdFx0dGhpcy5iID0gTWF0aC5taW4oMTAwLCBwYXJzZUludChjb2xvclszXSwgMTApKSAvIDEwMDtcblx0XHRcdFx0XHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdFx0XHRcdFx0aGFuZGxlQWxwaGEoY29sb3JbNF0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnaHNsJzpcblx0XHRcdFx0Y2FzZSAnaHNsYSc6XG5cdFx0XHRcdFx0aWYgKGNvbG9yID0gL15cXHMqKFxcZCpcXC4/XFxkKylcXHMqLFxccyooXFxkKlxcLj9cXGQrKVxcJVxccyosXFxzKihcXGQqXFwuP1xcZCspXFwlXFxzKig/OixcXHMqKFxcZCpcXC4/XFxkKylcXHMqKT8kLy5leGVjKGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0XHQvLyBoc2woMTIwLDUwJSw1MCUpIGhzbGEoMTIwLDUwJSw1MCUsMC41KVxuXHRcdFx0XHRcdFx0Y29uc3QgaCA9IHBhcnNlRmxvYXQoY29sb3JbMV0pIC8gMzYwO1xuXHRcdFx0XHRcdFx0Y29uc3QgcyA9IHBhcnNlRmxvYXQoY29sb3JbMl0pIC8gMTAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgbCA9IHBhcnNlRmxvYXQoY29sb3JbM10pIC8gMTAwO1xuXHRcdFx0XHRcdFx0aGFuZGxlQWxwaGEoY29sb3JbNF0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0SFNMKGgsIHMsIGwsIGNvbG9yU3BhY2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobSA9IC9eXFwjKFtBLUZhLWZcXGRdKykkLy5leGVjKHN0eWxlKSkge1xuXHRcdFx0Ly8gaGV4IGNvbG9yXG5cdFx0XHRjb25zdCBoZXggPSBtWzFdO1xuXHRcdFx0Y29uc3Qgc2l6ZSA9IGhleC5sZW5ndGg7XG5cblx0XHRcdGlmIChzaXplID09PSAzKSB7XG5cdFx0XHRcdC8vICNmZjBcblx0XHRcdFx0dGhpcy5yID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgwKSArIGhleC5jaGFyQXQoMCksIDE2KSAvIDI1NTtcblx0XHRcdFx0dGhpcy5nID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgxKSArIGhleC5jaGFyQXQoMSksIDE2KSAvIDI1NTtcblx0XHRcdFx0dGhpcy5iID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgyKSArIGhleC5jaGFyQXQoMiksIDE2KSAvIDI1NTtcblx0XHRcdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSBlbHNlIGlmIChzaXplID09PSA2KSB7XG5cdFx0XHRcdC8vICNmZjAwMDBcblx0XHRcdFx0dGhpcy5yID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgwKSArIGhleC5jaGFyQXQoMSksIDE2KSAvIDI1NTtcblx0XHRcdFx0dGhpcy5nID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgyKSArIGhleC5jaGFyQXQoMyksIDE2KSAvIDI1NTtcblx0XHRcdFx0dGhpcy5iID0gcGFyc2VJbnQoaGV4LmNoYXJBdCg0KSArIGhleC5jaGFyQXQoNSksIDE2KSAvIDI1NTtcblx0XHRcdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzdHlsZSAmJiBzdHlsZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXRDb2xvck5hbWUoc3R5bGUsIGNvbG9yU3BhY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Q29sb3JOYW1lKHN0eWxlLCBjb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHQvLyBjb2xvciBrZXl3b3Jkc1xuXHRcdGNvbnN0IGhleCA9IF9jb2xvcktleXdvcmRzW3N0eWxlLnRvTG93ZXJDYXNlKCldO1xuXG5cdFx0aWYgKGhleCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyByZWRcblx0XHRcdHRoaXMuc2V0SGV4KGhleCwgY29sb3JTcGFjZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHVua25vd24gY29sb3Jcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuQ29sb3I6IFVua25vd24gY29sb3IgJyArIHN0eWxlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcblx0fVxuXG5cdGNvcHkoY29sb3IpIHtcblx0XHR0aGlzLnIgPSBjb2xvci5yO1xuXHRcdHRoaXMuZyA9IGNvbG9yLmc7XG5cdFx0dGhpcy5iID0gY29sb3IuYjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHlTUkdCVG9MaW5lYXIoY29sb3IpIHtcblx0XHR0aGlzLnIgPSBTUkdCVG9MaW5lYXIoY29sb3Iucik7XG5cdFx0dGhpcy5nID0gU1JHQlRvTGluZWFyKGNvbG9yLmcpO1xuXHRcdHRoaXMuYiA9IFNSR0JUb0xpbmVhcihjb2xvci5iKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHlMaW5lYXJUb1NSR0IoY29sb3IpIHtcblx0XHR0aGlzLnIgPSBMaW5lYXJUb1NSR0IoY29sb3Iucik7XG5cdFx0dGhpcy5nID0gTGluZWFyVG9TUkdCKGNvbG9yLmcpO1xuXHRcdHRoaXMuYiA9IExpbmVhclRvU1JHQihjb2xvci5iKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvbnZlcnRTUkdCVG9MaW5lYXIoKSB7XG5cdFx0dGhpcy5jb3B5U1JHQlRvTGluZWFyKHRoaXMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29udmVydExpbmVhclRvU1JHQigpIHtcblx0XHR0aGlzLmNvcHlMaW5lYXJUb1NSR0IodGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRIZXgoY29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0Q29sb3JNYW5hZ2VtZW50LmZyb21Xb3JraW5nQ29sb3JTcGFjZSh0b0NvbXBvbmVudHModGhpcywgX3JnYiksIGNvbG9yU3BhY2UpO1xuXHRcdHJldHVybiBjbGFtcChfcmdiLnIgKiAyNTUsIDAsIDI1NSkgPDwgMTYgXiBjbGFtcChfcmdiLmcgKiAyNTUsIDAsIDI1NSkgPDwgOCBeIGNsYW1wKF9yZ2IuYiAqIDI1NSwgMCwgMjU1KSA8PCAwO1xuXHR9XG5cblx0Z2V0SGV4U3RyaW5nKGNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdHJldHVybiAoJzAwMDAwMCcgKyB0aGlzLmdldEhleChjb2xvclNwYWNlKS50b1N0cmluZygxNikpLnNsaWNlKC02KTtcblx0fVxuXG5cdGdldEhTTCh0YXJnZXQsIGNvbG9yU3BhY2UgPSBDb2xvck1hbmFnZW1lbnQud29ya2luZ0NvbG9yU3BhY2UpIHtcblx0XHQvLyBoLHMsbCByYW5nZXMgYXJlIGluIDAuMCAtIDEuMFxuXHRcdENvbG9yTWFuYWdlbWVudC5mcm9tV29ya2luZ0NvbG9yU3BhY2UodG9Db21wb25lbnRzKHRoaXMsIF9yZ2IpLCBjb2xvclNwYWNlKTtcblx0XHRjb25zdCByID0gX3JnYi5yLFxuXHRcdFx0XHRcdGcgPSBfcmdiLmcsXG5cdFx0XHRcdFx0YiA9IF9yZ2IuYjtcblx0XHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0XHRjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0XHRsZXQgaHVlLCBzYXR1cmF0aW9uO1xuXHRcdGNvbnN0IGxpZ2h0bmVzcyA9IChtaW4gKyBtYXgpIC8gMi4wO1xuXG5cdFx0aWYgKG1pbiA9PT0gbWF4KSB7XG5cdFx0XHRodWUgPSAwO1xuXHRcdFx0c2F0dXJhdGlvbiA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuXHRcdFx0c2F0dXJhdGlvbiA9IGxpZ2h0bmVzcyA8PSAwLjUgPyBkZWx0YSAvIChtYXggKyBtaW4pIDogZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cblx0XHRcdHN3aXRjaCAobWF4KSB7XG5cdFx0XHRcdGNhc2Ugcjpcblx0XHRcdFx0XHRodWUgPSAoZyAtIGIpIC8gZGVsdGEgKyAoZyA8IGIgPyA2IDogMCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBnOlxuXHRcdFx0XHRcdGh1ZSA9IChiIC0gcikgLyBkZWx0YSArIDI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBiOlxuXHRcdFx0XHRcdGh1ZSA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGh1ZSAvPSA2O1xuXHRcdH1cblxuXHRcdHRhcmdldC5oID0gaHVlO1xuXHRcdHRhcmdldC5zID0gc2F0dXJhdGlvbjtcblx0XHR0YXJnZXQubCA9IGxpZ2h0bmVzcztcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0Z2V0UkdCKHRhcmdldCwgY29sb3JTcGFjZSA9IENvbG9yTWFuYWdlbWVudC53b3JraW5nQ29sb3JTcGFjZSkge1xuXHRcdENvbG9yTWFuYWdlbWVudC5mcm9tV29ya2luZ0NvbG9yU3BhY2UodG9Db21wb25lbnRzKHRoaXMsIF9yZ2IpLCBjb2xvclNwYWNlKTtcblx0XHR0YXJnZXQuciA9IF9yZ2Iucjtcblx0XHR0YXJnZXQuZyA9IF9yZ2IuZztcblx0XHR0YXJnZXQuYiA9IF9yZ2IuYjtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0Z2V0U3R5bGUoY29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0Q29sb3JNYW5hZ2VtZW50LmZyb21Xb3JraW5nQ29sb3JTcGFjZSh0b0NvbXBvbmVudHModGhpcywgX3JnYiksIGNvbG9yU3BhY2UpO1xuXG5cdFx0aWYgKGNvbG9yU3BhY2UgIT09IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0XHQvLyBSZXF1aXJlcyBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDQgKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtY29sb3ItNC8pLlxuXHRcdFx0cmV0dXJuIGBjb2xvcigke2NvbG9yU3BhY2V9ICR7X3JnYi5yfSAke19yZ2IuZ30gJHtfcmdiLmJ9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGByZ2IoJHtfcmdiLnIgKiAyNTUgfCAwfSwke19yZ2IuZyAqIDI1NSB8IDB9LCR7X3JnYi5iICogMjU1IHwgMH0pYDtcblx0fVxuXG5cdG9mZnNldEhTTChoLCBzLCBsKSB7XG5cdFx0dGhpcy5nZXRIU0woX2hzbEEpO1xuXHRcdF9oc2xBLmggKz0gaDtcblx0XHRfaHNsQS5zICs9IHM7XG5cdFx0X2hzbEEubCArPSBsO1xuXHRcdHRoaXMuc2V0SFNMKF9oc2xBLmgsIF9oc2xBLnMsIF9oc2xBLmwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkKGNvbG9yKSB7XG5cdFx0dGhpcy5yICs9IGNvbG9yLnI7XG5cdFx0dGhpcy5nICs9IGNvbG9yLmc7XG5cdFx0dGhpcy5iICs9IGNvbG9yLmI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRDb2xvcnMoY29sb3IxLCBjb2xvcjIpIHtcblx0XHR0aGlzLnIgPSBjb2xvcjEuciArIGNvbG9yMi5yO1xuXHRcdHRoaXMuZyA9IGNvbG9yMS5nICsgY29sb3IyLmc7XG5cdFx0dGhpcy5iID0gY29sb3IxLmIgKyBjb2xvcjIuYjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxhcihzKSB7XG5cdFx0dGhpcy5yICs9IHM7XG5cdFx0dGhpcy5nICs9IHM7XG5cdFx0dGhpcy5iICs9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWIoY29sb3IpIHtcblx0XHR0aGlzLnIgPSBNYXRoLm1heCgwLCB0aGlzLnIgLSBjb2xvci5yKTtcblx0XHR0aGlzLmcgPSBNYXRoLm1heCgwLCB0aGlzLmcgLSBjb2xvci5nKTtcblx0XHR0aGlzLmIgPSBNYXRoLm1heCgwLCB0aGlzLmIgLSBjb2xvci5iKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KGNvbG9yKSB7XG5cdFx0dGhpcy5yICo9IGNvbG9yLnI7XG5cdFx0dGhpcy5nICo9IGNvbG9yLmc7XG5cdFx0dGhpcy5iICo9IGNvbG9yLmI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVNjYWxhcihzKSB7XG5cdFx0dGhpcy5yICo9IHM7XG5cdFx0dGhpcy5nICo9IHM7XG5cdFx0dGhpcy5iICo9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXJwKGNvbG9yLCBhbHBoYSkge1xuXHRcdHRoaXMuciArPSAoY29sb3IuciAtIHRoaXMucikgKiBhbHBoYTtcblx0XHR0aGlzLmcgKz0gKGNvbG9yLmcgLSB0aGlzLmcpICogYWxwaGE7XG5cdFx0dGhpcy5iICs9IChjb2xvci5iIC0gdGhpcy5iKSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGVycENvbG9ycyhjb2xvcjEsIGNvbG9yMiwgYWxwaGEpIHtcblx0XHR0aGlzLnIgPSBjb2xvcjEuciArIChjb2xvcjIuciAtIGNvbG9yMS5yKSAqIGFscGhhO1xuXHRcdHRoaXMuZyA9IGNvbG9yMS5nICsgKGNvbG9yMi5nIC0gY29sb3IxLmcpICogYWxwaGE7XG5cdFx0dGhpcy5iID0gY29sb3IxLmIgKyAoY29sb3IyLmIgLSBjb2xvcjEuYikgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxlcnBIU0woY29sb3IsIGFscGhhKSB7XG5cdFx0dGhpcy5nZXRIU0woX2hzbEEpO1xuXHRcdGNvbG9yLmdldEhTTChfaHNsQik7XG5cdFx0Y29uc3QgaCA9IGxlcnAoX2hzbEEuaCwgX2hzbEIuaCwgYWxwaGEpO1xuXHRcdGNvbnN0IHMgPSBsZXJwKF9oc2xBLnMsIF9oc2xCLnMsIGFscGhhKTtcblx0XHRjb25zdCBsID0gbGVycChfaHNsQS5sLCBfaHNsQi5sLCBhbHBoYSk7XG5cdFx0dGhpcy5zZXRIU0woaCwgcywgbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMoYykge1xuXHRcdHJldHVybiBjLnIgPT09IHRoaXMuciAmJiBjLmcgPT09IHRoaXMuZyAmJiBjLmIgPT09IHRoaXMuYjtcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdHRoaXMuciA9IGFycmF5W29mZnNldF07XG5cdFx0dGhpcy5nID0gYXJyYXlbb2Zmc2V0ICsgMV07XG5cdFx0dGhpcy5iID0gYXJyYXlbb2Zmc2V0ICsgMl07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRhcnJheVtvZmZzZXRdID0gdGhpcy5yO1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGhpcy5nO1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGhpcy5iO1xuXHRcdHJldHVybiBhcnJheTtcblx0fSAvLyBmcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGluZGV4ICkge1xuXHQvLyBcdHRoaXMuciA9IGF0dHJpYnV0ZS5nZXRYKCBpbmRleCApO1xuXHQvLyBcdHRoaXMuZyA9IGF0dHJpYnV0ZS5nZXRZKCBpbmRleCApO1xuXHQvLyBcdHRoaXMuYiA9IGF0dHJpYnV0ZS5nZXRaKCBpbmRleCApO1xuXHQvLyBcdGlmICggYXR0cmlidXRlLm5vcm1hbGl6ZWQgPT09IHRydWUgKSB7XG5cdC8vIFx0XHQvLyBhc3N1bWluZyBVaW50OEFycmF5XG5cdC8vIFx0XHR0aGlzLnIgLz0gMjU1O1xuXHQvLyBcdFx0dGhpcy5nIC89IDI1NTtcblx0Ly8gXHRcdHRoaXMuYiAvPSAyNTU7XG5cdC8vIFx0fVxuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHR0b0pTT04oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SGV4KCk7XG5cdH1cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0eWllbGQgdGhpcy5yO1xuXHRcdHlpZWxkIHRoaXMuZztcblx0XHR5aWVsZCB0aGlzLmI7XG5cdH1cblxufVxuXG5Db2xvci5OQU1FUyA9IF9jb2xvcktleXdvcmRzO1xuXG4vKipcbiAqIFJlZjogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ3lsaW5kcmljYWxfY29vcmRpbmF0ZV9zeXN0ZW1cbiAqL1xuY2xhc3MgQ3lsaW5kcmljYWwge1xuXHRjb25zdHJ1Y3RvcihyYWRpdXMgPSAxLCB0aGV0YSA9IDAsIHkgPSAwKSB7XG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7IC8vIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byBhIHBvaW50IGluIHRoZSB4LXogcGxhbmVcblxuXHRcdHRoaXMudGhldGEgPSB0aGV0YTsgLy8gY291bnRlcmNsb2Nrd2lzZSBhbmdsZSBpbiB0aGUgeC16IHBsYW5lIG1lYXN1cmVkIGluIHJhZGlhbnMgZnJvbSB0aGUgcG9zaXRpdmUgei1heGlzXG5cblx0XHR0aGlzLnkgPSB5OyAvLyBoZWlnaHQgYWJvdmUgdGhlIHgteiBwbGFuZVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXQocmFkaXVzLCB0aGV0YSwgeSkge1xuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdHRoaXMudGhldGEgPSB0aGV0YTtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShvdGhlcikge1xuXHRcdHRoaXMucmFkaXVzID0gb3RoZXIucmFkaXVzO1xuXHRcdHRoaXMudGhldGEgPSBvdGhlci50aGV0YTtcblx0XHR0aGlzLnkgPSBvdGhlci55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVZlY3RvcjModikge1xuXHRcdHJldHVybiB0aGlzLnNldEZyb21DYXJ0ZXNpYW5Db29yZHModi54LCB2LnksIHYueik7XG5cdH1cblxuXHRzZXRGcm9tQ2FydGVzaWFuQ29vcmRzKHgsIHksIHopIHtcblx0XHR0aGlzLnJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHogKiB6KTtcblx0XHR0aGlzLnRoZXRhID0gTWF0aC5hdGFuMih4LCB6KTtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG59XG5cbmNsYXNzIE1hdHJpeDQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRNYXRyaXg0LnByb3RvdHlwZS5pc01hdHJpeDQgPSB0cnVlO1xuXHRcdHRoaXMuZWxlbWVudHMgPSBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV07XG5cdH1cblxuXHRzZXQobjExLCBuMTIsIG4xMywgbjE0LCBuMjEsIG4yMiwgbjIzLCBuMjQsIG4zMSwgbjMyLCBuMzMsIG4zNCwgbjQxLCBuNDIsIG40MywgbjQ0KSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHRlWzBdID0gbjExO1xuXHRcdHRlWzRdID0gbjEyO1xuXHRcdHRlWzhdID0gbjEzO1xuXHRcdHRlWzEyXSA9IG4xNDtcblx0XHR0ZVsxXSA9IG4yMTtcblx0XHR0ZVs1XSA9IG4yMjtcblx0XHR0ZVs5XSA9IG4yMztcblx0XHR0ZVsxM10gPSBuMjQ7XG5cdFx0dGVbMl0gPSBuMzE7XG5cdFx0dGVbNl0gPSBuMzI7XG5cdFx0dGVbMTBdID0gbjMzO1xuXHRcdHRlWzE0XSA9IG4zNDtcblx0XHR0ZVszXSA9IG40MTtcblx0XHR0ZVs3XSA9IG40Mjtcblx0XHR0ZVsxMV0gPSBuNDM7XG5cdFx0dGVbMTVdID0gbjQ0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWRlbnRpdHkoKSB7XG5cdFx0dGhpcy5zZXQoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IE1hdHJpeDQoKS5mcm9tQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cdH1cblxuXHRjb3B5KG0pIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgbWUgPSBtLmVsZW1lbnRzO1xuXHRcdHRlWzBdID0gbWVbMF07XG5cdFx0dGVbMV0gPSBtZVsxXTtcblx0XHR0ZVsyXSA9IG1lWzJdO1xuXHRcdHRlWzNdID0gbWVbM107XG5cdFx0dGVbNF0gPSBtZVs0XTtcblx0XHR0ZVs1XSA9IG1lWzVdO1xuXHRcdHRlWzZdID0gbWVbNl07XG5cdFx0dGVbN10gPSBtZVs3XTtcblx0XHR0ZVs4XSA9IG1lWzhdO1xuXHRcdHRlWzldID0gbWVbOV07XG5cdFx0dGVbMTBdID0gbWVbMTBdO1xuXHRcdHRlWzExXSA9IG1lWzExXTtcblx0XHR0ZVsxMl0gPSBtZVsxMl07XG5cdFx0dGVbMTNdID0gbWVbMTNdO1xuXHRcdHRlWzE0XSA9IG1lWzE0XTtcblx0XHR0ZVsxNV0gPSBtZVsxNV07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5UG9zaXRpb24obSkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cyxcblx0XHRcdFx0XHRtZSA9IG0uZWxlbWVudHM7XG5cdFx0dGVbMTJdID0gbWVbMTJdO1xuXHRcdHRlWzEzXSA9IG1lWzEzXTtcblx0XHR0ZVsxNF0gPSBtZVsxNF07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tTWF0cml4MyhtKSB7XG5cdFx0Y29uc3QgbWUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMuc2V0KG1lWzBdLCBtZVszXSwgbWVbNl0sIDAsIG1lWzFdLCBtZVs0XSwgbWVbN10sIDAsIG1lWzJdLCBtZVs1XSwgbWVbOF0sIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXh0cmFjdEJhc2lzKHhBeGlzLCB5QXhpcywgekF4aXMpIHtcblx0XHR4QXhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKHRoaXMsIDApO1xuXHRcdHlBeGlzLnNldEZyb21NYXRyaXhDb2x1bW4odGhpcywgMSk7XG5cdFx0ekF4aXMuc2V0RnJvbU1hdHJpeENvbHVtbih0aGlzLCAyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VCYXNpcyh4QXhpcywgeUF4aXMsIHpBeGlzKSB7XG5cdFx0dGhpcy5zZXQoeEF4aXMueCwgeUF4aXMueCwgekF4aXMueCwgMCwgeEF4aXMueSwgeUF4aXMueSwgekF4aXMueSwgMCwgeEF4aXMueiwgeUF4aXMueiwgekF4aXMueiwgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHRyYWN0Um90YXRpb24obSkge1xuXHRcdC8vIHRoaXMgbWV0aG9kIGRvZXMgbm90IHN1cHBvcnQgcmVmbGVjdGlvbiBtYXRyaWNlc1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBtZSA9IG0uZWxlbWVudHM7XG5cblx0XHRjb25zdCBzY2FsZVggPSAxIC8gX3YxJDIuc2V0RnJvbU1hdHJpeENvbHVtbihtLCAwKS5sZW5ndGgoKTtcblxuXHRcdGNvbnN0IHNjYWxlWSA9IDEgLyBfdjEkMi5zZXRGcm9tTWF0cml4Q29sdW1uKG0sIDEpLmxlbmd0aCgpO1xuXG5cdFx0Y29uc3Qgc2NhbGVaID0gMSAvIF92MSQyLnNldEZyb21NYXRyaXhDb2x1bW4obSwgMikubGVuZ3RoKCk7XG5cblx0XHR0ZVswXSA9IG1lWzBdICogc2NhbGVYO1xuXHRcdHRlWzFdID0gbWVbMV0gKiBzY2FsZVg7XG5cdFx0dGVbMl0gPSBtZVsyXSAqIHNjYWxlWDtcblx0XHR0ZVszXSA9IDA7XG5cdFx0dGVbNF0gPSBtZVs0XSAqIHNjYWxlWTtcblx0XHR0ZVs1XSA9IG1lWzVdICogc2NhbGVZO1xuXHRcdHRlWzZdID0gbWVbNl0gKiBzY2FsZVk7XG5cdFx0dGVbN10gPSAwO1xuXHRcdHRlWzhdID0gbWVbOF0gKiBzY2FsZVo7XG5cdFx0dGVbOV0gPSBtZVs5XSAqIHNjYWxlWjtcblx0XHR0ZVsxMF0gPSBtZVsxMF0gKiBzY2FsZVo7XG5cdFx0dGVbMTFdID0gMDtcblx0XHR0ZVsxMl0gPSAwO1xuXHRcdHRlWzEzXSA9IDA7XG5cdFx0dGVbMTRdID0gMDtcblx0XHR0ZVsxNV0gPSAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uRnJvbUV1bGVyKGV1bGVyKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHggPSBldWxlci54LFxuXHRcdFx0XHRcdHkgPSBldWxlci55LFxuXHRcdFx0XHRcdHogPSBldWxlci56O1xuXHRcdGNvbnN0IGEgPSBNYXRoLmNvcyh4KSxcblx0XHRcdFx0XHRiID0gTWF0aC5zaW4oeCk7XG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKHkpLFxuXHRcdFx0XHRcdGQgPSBNYXRoLnNpbih5KTtcblx0XHRjb25zdCBlID0gTWF0aC5jb3MoeiksXG5cdFx0XHRcdFx0ZiA9IE1hdGguc2luKHopO1xuXG5cdFx0aWYgKGV1bGVyLm9yZGVyID09PSAnWFlaJykge1xuXHRcdFx0Y29uc3QgYWUgPSBhICogZSxcblx0XHRcdFx0XHRcdGFmID0gYSAqIGYsXG5cdFx0XHRcdFx0XHRiZSA9IGIgKiBlLFxuXHRcdFx0XHRcdFx0YmYgPSBiICogZjtcblx0XHRcdHRlWzBdID0gYyAqIGU7XG5cdFx0XHR0ZVs0XSA9IC1jICogZjtcblx0XHRcdHRlWzhdID0gZDtcblx0XHRcdHRlWzFdID0gYWYgKyBiZSAqIGQ7XG5cdFx0XHR0ZVs1XSA9IGFlIC0gYmYgKiBkO1xuXHRcdFx0dGVbOV0gPSAtYiAqIGM7XG5cdFx0XHR0ZVsyXSA9IGJmIC0gYWUgKiBkO1xuXHRcdFx0dGVbNl0gPSBiZSArIGFmICogZDtcblx0XHRcdHRlWzEwXSA9IGEgKiBjO1xuXHRcdH0gZWxzZSBpZiAoZXVsZXIub3JkZXIgPT09ICdZWFonKSB7XG5cdFx0XHRjb25zdCBjZSA9IGMgKiBlLFxuXHRcdFx0XHRcdFx0Y2YgPSBjICogZixcblx0XHRcdFx0XHRcdGRlID0gZCAqIGUsXG5cdFx0XHRcdFx0XHRkZiA9IGQgKiBmO1xuXHRcdFx0dGVbMF0gPSBjZSArIGRmICogYjtcblx0XHRcdHRlWzRdID0gZGUgKiBiIC0gY2Y7XG5cdFx0XHR0ZVs4XSA9IGEgKiBkO1xuXHRcdFx0dGVbMV0gPSBhICogZjtcblx0XHRcdHRlWzVdID0gYSAqIGU7XG5cdFx0XHR0ZVs5XSA9IC1iO1xuXHRcdFx0dGVbMl0gPSBjZiAqIGIgLSBkZTtcblx0XHRcdHRlWzZdID0gZGYgKyBjZSAqIGI7XG5cdFx0XHR0ZVsxMF0gPSBhICogYztcblx0XHR9IGVsc2UgaWYgKGV1bGVyLm9yZGVyID09PSAnWlhZJykge1xuXHRcdFx0Y29uc3QgY2UgPSBjICogZSxcblx0XHRcdFx0XHRcdGNmID0gYyAqIGYsXG5cdFx0XHRcdFx0XHRkZSA9IGQgKiBlLFxuXHRcdFx0XHRcdFx0ZGYgPSBkICogZjtcblx0XHRcdHRlWzBdID0gY2UgLSBkZiAqIGI7XG5cdFx0XHR0ZVs0XSA9IC1hICogZjtcblx0XHRcdHRlWzhdID0gZGUgKyBjZiAqIGI7XG5cdFx0XHR0ZVsxXSA9IGNmICsgZGUgKiBiO1xuXHRcdFx0dGVbNV0gPSBhICogZTtcblx0XHRcdHRlWzldID0gZGYgLSBjZSAqIGI7XG5cdFx0XHR0ZVsyXSA9IC1hICogZDtcblx0XHRcdHRlWzZdID0gYjtcblx0XHRcdHRlWzEwXSA9IGEgKiBjO1xuXHRcdH0gZWxzZSBpZiAoZXVsZXIub3JkZXIgPT09ICdaWVgnKSB7XG5cdFx0XHRjb25zdCBhZSA9IGEgKiBlLFxuXHRcdFx0XHRcdFx0YWYgPSBhICogZixcblx0XHRcdFx0XHRcdGJlID0gYiAqIGUsXG5cdFx0XHRcdFx0XHRiZiA9IGIgKiBmO1xuXHRcdFx0dGVbMF0gPSBjICogZTtcblx0XHRcdHRlWzRdID0gYmUgKiBkIC0gYWY7XG5cdFx0XHR0ZVs4XSA9IGFlICogZCArIGJmO1xuXHRcdFx0dGVbMV0gPSBjICogZjtcblx0XHRcdHRlWzVdID0gYmYgKiBkICsgYWU7XG5cdFx0XHR0ZVs5XSA9IGFmICogZCAtIGJlO1xuXHRcdFx0dGVbMl0gPSAtZDtcblx0XHRcdHRlWzZdID0gYiAqIGM7XG5cdFx0XHR0ZVsxMF0gPSBhICogYztcblx0XHR9IGVsc2UgaWYgKGV1bGVyLm9yZGVyID09PSAnWVpYJykge1xuXHRcdFx0Y29uc3QgYWMgPSBhICogYyxcblx0XHRcdFx0XHRcdGFkID0gYSAqIGQsXG5cdFx0XHRcdFx0XHRiYyA9IGIgKiBjLFxuXHRcdFx0XHRcdFx0YmQgPSBiICogZDtcblx0XHRcdHRlWzBdID0gYyAqIGU7XG5cdFx0XHR0ZVs0XSA9IGJkIC0gYWMgKiBmO1xuXHRcdFx0dGVbOF0gPSBiYyAqIGYgKyBhZDtcblx0XHRcdHRlWzFdID0gZjtcblx0XHRcdHRlWzVdID0gYSAqIGU7XG5cdFx0XHR0ZVs5XSA9IC1iICogZTtcblx0XHRcdHRlWzJdID0gLWQgKiBlO1xuXHRcdFx0dGVbNl0gPSBhZCAqIGYgKyBiYztcblx0XHRcdHRlWzEwXSA9IGFjIC0gYmQgKiBmO1xuXHRcdH0gZWxzZSBpZiAoZXVsZXIub3JkZXIgPT09ICdYWlknKSB7XG5cdFx0XHRjb25zdCBhYyA9IGEgKiBjLFxuXHRcdFx0XHRcdFx0YWQgPSBhICogZCxcblx0XHRcdFx0XHRcdGJjID0gYiAqIGMsXG5cdFx0XHRcdFx0XHRiZCA9IGIgKiBkO1xuXHRcdFx0dGVbMF0gPSBjICogZTtcblx0XHRcdHRlWzRdID0gLWY7XG5cdFx0XHR0ZVs4XSA9IGQgKiBlO1xuXHRcdFx0dGVbMV0gPSBhYyAqIGYgKyBiZDtcblx0XHRcdHRlWzVdID0gYSAqIGU7XG5cdFx0XHR0ZVs5XSA9IGFkICogZiAtIGJjO1xuXHRcdFx0dGVbMl0gPSBiYyAqIGYgLSBhZDtcblx0XHRcdHRlWzZdID0gYiAqIGU7XG5cdFx0XHR0ZVsxMF0gPSBiZCAqIGYgKyBhYztcblx0XHR9IC8vIGJvdHRvbSByb3dcblxuXG5cdFx0dGVbM10gPSAwO1xuXHRcdHRlWzddID0gMDtcblx0XHR0ZVsxMV0gPSAwOyAvLyBsYXN0IGNvbHVtblxuXG5cdFx0dGVbMTJdID0gMDtcblx0XHR0ZVsxM10gPSAwO1xuXHRcdHRlWzE0XSA9IDA7XG5cdFx0dGVbMTVdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKHEpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NlKF96ZXJvLCBxLCBfb25lKTtcblx0fVxuXG5cdGxvb2tBdChleWUsIHRhcmdldCwgdXApIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHRfei5zdWJWZWN0b3JzKGV5ZSwgdGFyZ2V0KTtcblxuXHRcdGlmIChfei5sZW5ndGhTcSgpID09PSAwKSB7XG5cdFx0XHQvLyBleWUgYW5kIHRhcmdldCBhcmUgaW4gdGhlIHNhbWUgcG9zaXRpb25cblx0XHRcdF96LnogPSAxO1xuXHRcdH1cblxuXHRcdF96Lm5vcm1hbGl6ZSgpO1xuXG5cdFx0X3guY3Jvc3NWZWN0b3JzKHVwLCBfeik7XG5cblx0XHRpZiAoX3gubGVuZ3RoU3EoKSA9PT0gMCkge1xuXHRcdFx0Ly8gdXAgYW5kIHogYXJlIHBhcmFsbGVsXG5cdFx0XHRpZiAoTWF0aC5hYnModXAueikgPT09IDEpIHtcblx0XHRcdFx0X3oueCArPSAwLjAwMDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfei56ICs9IDAuMDAwMTtcblx0XHRcdH1cblxuXHRcdFx0X3oubm9ybWFsaXplKCk7XG5cblx0XHRcdF94LmNyb3NzVmVjdG9ycyh1cCwgX3opO1xuXHRcdH1cblxuXHRcdF94Lm5vcm1hbGl6ZSgpO1xuXG5cdFx0X3kuY3Jvc3NWZWN0b3JzKF96LCBfeCk7XG5cblx0XHR0ZVswXSA9IF94Lng7XG5cdFx0dGVbNF0gPSBfeS54O1xuXHRcdHRlWzhdID0gX3oueDtcblx0XHR0ZVsxXSA9IF94Lnk7XG5cdFx0dGVbNV0gPSBfeS55O1xuXHRcdHRlWzldID0gX3oueTtcblx0XHR0ZVsyXSA9IF94Lno7XG5cdFx0dGVbNl0gPSBfeS56O1xuXHRcdHRlWzEwXSA9IF96Lno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseShtKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyh0aGlzLCBtKTtcblx0fVxuXG5cdHByZW11bHRpcGx5KG0pIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseU1hdHJpY2VzKG0sIHRoaXMpO1xuXHR9XG5cblx0bXVsdGlwbHlNYXRyaWNlcyhhLCBiKSB7XG5cdFx0Y29uc3QgYWUgPSBhLmVsZW1lbnRzO1xuXHRcdGNvbnN0IGJlID0gYi5lbGVtZW50cztcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgYTExID0gYWVbMF0sXG5cdFx0XHRcdFx0YTEyID0gYWVbNF0sXG5cdFx0XHRcdFx0YTEzID0gYWVbOF0sXG5cdFx0XHRcdFx0YTE0ID0gYWVbMTJdO1xuXHRcdGNvbnN0IGEyMSA9IGFlWzFdLFxuXHRcdFx0XHRcdGEyMiA9IGFlWzVdLFxuXHRcdFx0XHRcdGEyMyA9IGFlWzldLFxuXHRcdFx0XHRcdGEyNCA9IGFlWzEzXTtcblx0XHRjb25zdCBhMzEgPSBhZVsyXSxcblx0XHRcdFx0XHRhMzIgPSBhZVs2XSxcblx0XHRcdFx0XHRhMzMgPSBhZVsxMF0sXG5cdFx0XHRcdFx0YTM0ID0gYWVbMTRdO1xuXHRcdGNvbnN0IGE0MSA9IGFlWzNdLFxuXHRcdFx0XHRcdGE0MiA9IGFlWzddLFxuXHRcdFx0XHRcdGE0MyA9IGFlWzExXSxcblx0XHRcdFx0XHRhNDQgPSBhZVsxNV07XG5cdFx0Y29uc3QgYjExID0gYmVbMF0sXG5cdFx0XHRcdFx0YjEyID0gYmVbNF0sXG5cdFx0XHRcdFx0YjEzID0gYmVbOF0sXG5cdFx0XHRcdFx0YjE0ID0gYmVbMTJdO1xuXHRcdGNvbnN0IGIyMSA9IGJlWzFdLFxuXHRcdFx0XHRcdGIyMiA9IGJlWzVdLFxuXHRcdFx0XHRcdGIyMyA9IGJlWzldLFxuXHRcdFx0XHRcdGIyNCA9IGJlWzEzXTtcblx0XHRjb25zdCBiMzEgPSBiZVsyXSxcblx0XHRcdFx0XHRiMzIgPSBiZVs2XSxcblx0XHRcdFx0XHRiMzMgPSBiZVsxMF0sXG5cdFx0XHRcdFx0YjM0ID0gYmVbMTRdO1xuXHRcdGNvbnN0IGI0MSA9IGJlWzNdLFxuXHRcdFx0XHRcdGI0MiA9IGJlWzddLFxuXHRcdFx0XHRcdGI0MyA9IGJlWzExXSxcblx0XHRcdFx0XHRiNDQgPSBiZVsxNV07XG5cdFx0dGVbMF0gPSBhMTEgKiBiMTEgKyBhMTIgKiBiMjEgKyBhMTMgKiBiMzEgKyBhMTQgKiBiNDE7XG5cdFx0dGVbNF0gPSBhMTEgKiBiMTIgKyBhMTIgKiBiMjIgKyBhMTMgKiBiMzIgKyBhMTQgKiBiNDI7XG5cdFx0dGVbOF0gPSBhMTEgKiBiMTMgKyBhMTIgKiBiMjMgKyBhMTMgKiBiMzMgKyBhMTQgKiBiNDM7XG5cdFx0dGVbMTJdID0gYTExICogYjE0ICsgYTEyICogYjI0ICsgYTEzICogYjM0ICsgYTE0ICogYjQ0O1xuXHRcdHRlWzFdID0gYTIxICogYjExICsgYTIyICogYjIxICsgYTIzICogYjMxICsgYTI0ICogYjQxO1xuXHRcdHRlWzVdID0gYTIxICogYjEyICsgYTIyICogYjIyICsgYTIzICogYjMyICsgYTI0ICogYjQyO1xuXHRcdHRlWzldID0gYTIxICogYjEzICsgYTIyICogYjIzICsgYTIzICogYjMzICsgYTI0ICogYjQzO1xuXHRcdHRlWzEzXSA9IGEyMSAqIGIxNCArIGEyMiAqIGIyNCArIGEyMyAqIGIzNCArIGEyNCAqIGI0NDtcblx0XHR0ZVsyXSA9IGEzMSAqIGIxMSArIGEzMiAqIGIyMSArIGEzMyAqIGIzMSArIGEzNCAqIGI0MTtcblx0XHR0ZVs2XSA9IGEzMSAqIGIxMiArIGEzMiAqIGIyMiArIGEzMyAqIGIzMiArIGEzNCAqIGI0Mjtcblx0XHR0ZVsxMF0gPSBhMzEgKiBiMTMgKyBhMzIgKiBiMjMgKyBhMzMgKiBiMzMgKyBhMzQgKiBiNDM7XG5cdFx0dGVbMTRdID0gYTMxICogYjE0ICsgYTMyICogYjI0ICsgYTMzICogYjM0ICsgYTM0ICogYjQ0O1xuXHRcdHRlWzNdID0gYTQxICogYjExICsgYTQyICogYjIxICsgYTQzICogYjMxICsgYTQ0ICogYjQxO1xuXHRcdHRlWzddID0gYTQxICogYjEyICsgYTQyICogYjIyICsgYTQzICogYjMyICsgYTQ0ICogYjQyO1xuXHRcdHRlWzExXSA9IGE0MSAqIGIxMyArIGE0MiAqIGIyMyArIGE0MyAqIGIzMyArIGE0NCAqIGI0Mztcblx0XHR0ZVsxNV0gPSBhNDEgKiBiMTQgKyBhNDIgKiBiMjQgKyBhNDMgKiBiMzQgKyBhNDQgKiBiNDQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVNjYWxhcihzKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHRlWzBdICo9IHM7XG5cdFx0dGVbNF0gKj0gcztcblx0XHR0ZVs4XSAqPSBzO1xuXHRcdHRlWzEyXSAqPSBzO1xuXHRcdHRlWzFdICo9IHM7XG5cdFx0dGVbNV0gKj0gcztcblx0XHR0ZVs5XSAqPSBzO1xuXHRcdHRlWzEzXSAqPSBzO1xuXHRcdHRlWzJdICo9IHM7XG5cdFx0dGVbNl0gKj0gcztcblx0XHR0ZVsxMF0gKj0gcztcblx0XHR0ZVsxNF0gKj0gcztcblx0XHR0ZVszXSAqPSBzO1xuXHRcdHRlWzddICo9IHM7XG5cdFx0dGVbMTFdICo9IHM7XG5cdFx0dGVbMTVdICo9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkZXRlcm1pbmFudCgpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgbjExID0gdGVbMF0sXG5cdFx0XHRcdFx0bjEyID0gdGVbNF0sXG5cdFx0XHRcdFx0bjEzID0gdGVbOF0sXG5cdFx0XHRcdFx0bjE0ID0gdGVbMTJdO1xuXHRcdGNvbnN0IG4yMSA9IHRlWzFdLFxuXHRcdFx0XHRcdG4yMiA9IHRlWzVdLFxuXHRcdFx0XHRcdG4yMyA9IHRlWzldLFxuXHRcdFx0XHRcdG4yNCA9IHRlWzEzXTtcblx0XHRjb25zdCBuMzEgPSB0ZVsyXSxcblx0XHRcdFx0XHRuMzIgPSB0ZVs2XSxcblx0XHRcdFx0XHRuMzMgPSB0ZVsxMF0sXG5cdFx0XHRcdFx0bjM0ID0gdGVbMTRdO1xuXHRcdGNvbnN0IG40MSA9IHRlWzNdLFxuXHRcdFx0XHRcdG40MiA9IHRlWzddLFxuXHRcdFx0XHRcdG40MyA9IHRlWzExXSxcblx0XHRcdFx0XHRuNDQgPSB0ZVsxNV07IC8vVE9ETzogbWFrZSB0aGlzIG1vcmUgZWZmaWNpZW50XG5cdFx0Ly8oIGJhc2VkIG9uIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvbWF0cml4L2Z1bmN0aW9ucy9pbnZlcnNlL2ZvdXJEL2luZGV4Lmh0bSApXG5cblx0XHRyZXR1cm4gbjQxICogKCtuMTQgKiBuMjMgKiBuMzIgLSBuMTMgKiBuMjQgKiBuMzIgLSBuMTQgKiBuMjIgKiBuMzMgKyBuMTIgKiBuMjQgKiBuMzMgKyBuMTMgKiBuMjIgKiBuMzQgLSBuMTIgKiBuMjMgKiBuMzQpICsgbjQyICogKCtuMTEgKiBuMjMgKiBuMzQgLSBuMTEgKiBuMjQgKiBuMzMgKyBuMTQgKiBuMjEgKiBuMzMgLSBuMTMgKiBuMjEgKiBuMzQgKyBuMTMgKiBuMjQgKiBuMzEgLSBuMTQgKiBuMjMgKiBuMzEpICsgbjQzICogKCtuMTEgKiBuMjQgKiBuMzIgLSBuMTEgKiBuMjIgKiBuMzQgLSBuMTQgKiBuMjEgKiBuMzIgKyBuMTIgKiBuMjEgKiBuMzQgKyBuMTQgKiBuMjIgKiBuMzEgLSBuMTIgKiBuMjQgKiBuMzEpICsgbjQ0ICogKC1uMTMgKiBuMjIgKiBuMzEgLSBuMTEgKiBuMjMgKiBuMzIgKyBuMTEgKiBuMjIgKiBuMzMgKyBuMTMgKiBuMjEgKiBuMzIgLSBuMTIgKiBuMjEgKiBuMzMgKyBuMTIgKiBuMjMgKiBuMzEpO1xuXHR9XG5cblx0dHJhbnNwb3NlKCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRsZXQgdG1wO1xuXHRcdHRtcCA9IHRlWzFdO1xuXHRcdHRlWzFdID0gdGVbNF07XG5cdFx0dGVbNF0gPSB0bXA7XG5cdFx0dG1wID0gdGVbMl07XG5cdFx0dGVbMl0gPSB0ZVs4XTtcblx0XHR0ZVs4XSA9IHRtcDtcblx0XHR0bXAgPSB0ZVs2XTtcblx0XHR0ZVs2XSA9IHRlWzldO1xuXHRcdHRlWzldID0gdG1wO1xuXHRcdHRtcCA9IHRlWzNdO1xuXHRcdHRlWzNdID0gdGVbMTJdO1xuXHRcdHRlWzEyXSA9IHRtcDtcblx0XHR0bXAgPSB0ZVs3XTtcblx0XHR0ZVs3XSA9IHRlWzEzXTtcblx0XHR0ZVsxM10gPSB0bXA7XG5cdFx0dG1wID0gdGVbMTFdO1xuXHRcdHRlWzExXSA9IHRlWzE0XTtcblx0XHR0ZVsxNF0gPSB0bXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRQb3NpdGlvbih4LCB5LCB6KSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0aWYgKHguaXNWZWN0b3IzKSB7XG5cdFx0XHR0ZVsxMl0gPSB4Lng7XG5cdFx0XHR0ZVsxM10gPSB4Lnk7XG5cdFx0XHR0ZVsxNF0gPSB4Lno7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRlWzEyXSA9IHg7XG5cdFx0XHR0ZVsxM10gPSB5O1xuXHRcdFx0dGVbMTRdID0gejtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGludmVydCgpIHtcblx0XHQvLyBiYXNlZCBvbiBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL21hdHJpeC9mdW5jdGlvbnMvaW52ZXJzZS9mb3VyRC9pbmRleC5odG1cblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHMsXG5cdFx0XHRcdFx0bjExID0gdGVbMF0sXG5cdFx0XHRcdFx0bjIxID0gdGVbMV0sXG5cdFx0XHRcdFx0bjMxID0gdGVbMl0sXG5cdFx0XHRcdFx0bjQxID0gdGVbM10sXG5cdFx0XHRcdFx0bjEyID0gdGVbNF0sXG5cdFx0XHRcdFx0bjIyID0gdGVbNV0sXG5cdFx0XHRcdFx0bjMyID0gdGVbNl0sXG5cdFx0XHRcdFx0bjQyID0gdGVbN10sXG5cdFx0XHRcdFx0bjEzID0gdGVbOF0sXG5cdFx0XHRcdFx0bjIzID0gdGVbOV0sXG5cdFx0XHRcdFx0bjMzID0gdGVbMTBdLFxuXHRcdFx0XHRcdG40MyA9IHRlWzExXSxcblx0XHRcdFx0XHRuMTQgPSB0ZVsxMl0sXG5cdFx0XHRcdFx0bjI0ID0gdGVbMTNdLFxuXHRcdFx0XHRcdG4zNCA9IHRlWzE0XSxcblx0XHRcdFx0XHRuNDQgPSB0ZVsxNV0sXG5cdFx0XHRcdFx0dDExID0gbjIzICogbjM0ICogbjQyIC0gbjI0ICogbjMzICogbjQyICsgbjI0ICogbjMyICogbjQzIC0gbjIyICogbjM0ICogbjQzIC0gbjIzICogbjMyICogbjQ0ICsgbjIyICogbjMzICogbjQ0LFxuXHRcdFx0XHRcdHQxMiA9IG4xNCAqIG4zMyAqIG40MiAtIG4xMyAqIG4zNCAqIG40MiAtIG4xNCAqIG4zMiAqIG40MyArIG4xMiAqIG4zNCAqIG40MyArIG4xMyAqIG4zMiAqIG40NCAtIG4xMiAqIG4zMyAqIG40NCxcblx0XHRcdFx0XHR0MTMgPSBuMTMgKiBuMjQgKiBuNDIgLSBuMTQgKiBuMjMgKiBuNDIgKyBuMTQgKiBuMjIgKiBuNDMgLSBuMTIgKiBuMjQgKiBuNDMgLSBuMTMgKiBuMjIgKiBuNDQgKyBuMTIgKiBuMjMgKiBuNDQsXG5cdFx0XHRcdFx0dDE0ID0gbjE0ICogbjIzICogbjMyIC0gbjEzICogbjI0ICogbjMyIC0gbjE0ICogbjIyICogbjMzICsgbjEyICogbjI0ICogbjMzICsgbjEzICogbjIyICogbjM0IC0gbjEyICogbjIzICogbjM0O1xuXHRcdGNvbnN0IGRldCA9IG4xMSAqIHQxMSArIG4yMSAqIHQxMiArIG4zMSAqIHQxMyArIG40MSAqIHQxNDtcblx0XHRpZiAoZGV0ID09PSAwKSByZXR1cm4gdGhpcy5zZXQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG5cdFx0Y29uc3QgZGV0SW52ID0gMSAvIGRldDtcblx0XHR0ZVswXSA9IHQxMSAqIGRldEludjtcblx0XHR0ZVsxXSA9IChuMjQgKiBuMzMgKiBuNDEgLSBuMjMgKiBuMzQgKiBuNDEgLSBuMjQgKiBuMzEgKiBuNDMgKyBuMjEgKiBuMzQgKiBuNDMgKyBuMjMgKiBuMzEgKiBuNDQgLSBuMjEgKiBuMzMgKiBuNDQpICogZGV0SW52O1xuXHRcdHRlWzJdID0gKG4yMiAqIG4zNCAqIG40MSAtIG4yNCAqIG4zMiAqIG40MSArIG4yNCAqIG4zMSAqIG40MiAtIG4yMSAqIG4zNCAqIG40MiAtIG4yMiAqIG4zMSAqIG40NCArIG4yMSAqIG4zMiAqIG40NCkgKiBkZXRJbnY7XG5cdFx0dGVbM10gPSAobjIzICogbjMyICogbjQxIC0gbjIyICogbjMzICogbjQxIC0gbjIzICogbjMxICogbjQyICsgbjIxICogbjMzICogbjQyICsgbjIyICogbjMxICogbjQzIC0gbjIxICogbjMyICogbjQzKSAqIGRldEludjtcblx0XHR0ZVs0XSA9IHQxMiAqIGRldEludjtcblx0XHR0ZVs1XSA9IChuMTMgKiBuMzQgKiBuNDEgLSBuMTQgKiBuMzMgKiBuNDEgKyBuMTQgKiBuMzEgKiBuNDMgLSBuMTEgKiBuMzQgKiBuNDMgLSBuMTMgKiBuMzEgKiBuNDQgKyBuMTEgKiBuMzMgKiBuNDQpICogZGV0SW52O1xuXHRcdHRlWzZdID0gKG4xNCAqIG4zMiAqIG40MSAtIG4xMiAqIG4zNCAqIG40MSAtIG4xNCAqIG4zMSAqIG40MiArIG4xMSAqIG4zNCAqIG40MiArIG4xMiAqIG4zMSAqIG40NCAtIG4xMSAqIG4zMiAqIG40NCkgKiBkZXRJbnY7XG5cdFx0dGVbN10gPSAobjEyICogbjMzICogbjQxIC0gbjEzICogbjMyICogbjQxICsgbjEzICogbjMxICogbjQyIC0gbjExICogbjMzICogbjQyIC0gbjEyICogbjMxICogbjQzICsgbjExICogbjMyICogbjQzKSAqIGRldEludjtcblx0XHR0ZVs4XSA9IHQxMyAqIGRldEludjtcblx0XHR0ZVs5XSA9IChuMTQgKiBuMjMgKiBuNDEgLSBuMTMgKiBuMjQgKiBuNDEgLSBuMTQgKiBuMjEgKiBuNDMgKyBuMTEgKiBuMjQgKiBuNDMgKyBuMTMgKiBuMjEgKiBuNDQgLSBuMTEgKiBuMjMgKiBuNDQpICogZGV0SW52O1xuXHRcdHRlWzEwXSA9IChuMTIgKiBuMjQgKiBuNDEgLSBuMTQgKiBuMjIgKiBuNDEgKyBuMTQgKiBuMjEgKiBuNDIgLSBuMTEgKiBuMjQgKiBuNDIgLSBuMTIgKiBuMjEgKiBuNDQgKyBuMTEgKiBuMjIgKiBuNDQpICogZGV0SW52O1xuXHRcdHRlWzExXSA9IChuMTMgKiBuMjIgKiBuNDEgLSBuMTIgKiBuMjMgKiBuNDEgLSBuMTMgKiBuMjEgKiBuNDIgKyBuMTEgKiBuMjMgKiBuNDIgKyBuMTIgKiBuMjEgKiBuNDMgLSBuMTEgKiBuMjIgKiBuNDMpICogZGV0SW52O1xuXHRcdHRlWzEyXSA9IHQxNCAqIGRldEludjtcblx0XHR0ZVsxM10gPSAobjEzICogbjI0ICogbjMxIC0gbjE0ICogbjIzICogbjMxICsgbjE0ICogbjIxICogbjMzIC0gbjExICogbjI0ICogbjMzIC0gbjEzICogbjIxICogbjM0ICsgbjExICogbjIzICogbjM0KSAqIGRldEludjtcblx0XHR0ZVsxNF0gPSAobjE0ICogbjIyICogbjMxIC0gbjEyICogbjI0ICogbjMxIC0gbjE0ICogbjIxICogbjMyICsgbjExICogbjI0ICogbjMyICsgbjEyICogbjIxICogbjM0IC0gbjExICogbjIyICogbjM0KSAqIGRldEludjtcblx0XHR0ZVsxNV0gPSAobjEyICogbjIzICogbjMxIC0gbjEzICogbjIyICogbjMxICsgbjEzICogbjIxICogbjMyIC0gbjExICogbjIzICogbjMyIC0gbjEyICogbjIxICogbjMzICsgbjExICogbjIyICogbjMzKSAqIGRldEludjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNjYWxlKHYpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgeCA9IHYueCxcblx0XHRcdFx0XHR5ID0gdi55LFxuXHRcdFx0XHRcdHogPSB2Lno7XG5cdFx0dGVbMF0gKj0geDtcblx0XHR0ZVs0XSAqPSB5O1xuXHRcdHRlWzhdICo9IHo7XG5cdFx0dGVbMV0gKj0geDtcblx0XHR0ZVs1XSAqPSB5O1xuXHRcdHRlWzldICo9IHo7XG5cdFx0dGVbMl0gKj0geDtcblx0XHR0ZVs2XSAqPSB5O1xuXHRcdHRlWzEwXSAqPSB6O1xuXHRcdHRlWzNdICo9IHg7XG5cdFx0dGVbN10gKj0geTtcblx0XHR0ZVsxMV0gKj0gejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldE1heFNjYWxlT25BeGlzKCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBzY2FsZVhTcSA9IHRlWzBdICogdGVbMF0gKyB0ZVsxXSAqIHRlWzFdICsgdGVbMl0gKiB0ZVsyXTtcblx0XHRjb25zdCBzY2FsZVlTcSA9IHRlWzRdICogdGVbNF0gKyB0ZVs1XSAqIHRlWzVdICsgdGVbNl0gKiB0ZVs2XTtcblx0XHRjb25zdCBzY2FsZVpTcSA9IHRlWzhdICogdGVbOF0gKyB0ZVs5XSAqIHRlWzldICsgdGVbMTBdICogdGVbMTBdO1xuXHRcdHJldHVybiBNYXRoLnNxcnQoTWF0aC5tYXgoc2NhbGVYU3EsIHNjYWxlWVNxLCBzY2FsZVpTcSkpO1xuXHR9XG5cblx0bWFrZVRyYW5zbGF0aW9uKHgsIHksIHopIHtcblx0XHR0aGlzLnNldCgxLCAwLCAwLCB4LCAwLCAxLCAwLCB5LCAwLCAwLCAxLCB6LCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvblgodGhldGEpIHtcblx0XHRjb25zdCBjID0gTWF0aC5jb3ModGhldGEpLFxuXHRcdFx0XHRcdHMgPSBNYXRoLnNpbih0aGV0YSk7XG5cdFx0dGhpcy5zZXQoMSwgMCwgMCwgMCwgMCwgYywgLXMsIDAsIDAsIHMsIGMsIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uWSh0aGV0YSkge1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyh0aGV0YSksXG5cdFx0XHRcdFx0cyA9IE1hdGguc2luKHRoZXRhKTtcblx0XHR0aGlzLnNldChjLCAwLCBzLCAwLCAwLCAxLCAwLCAwLCAtcywgMCwgYywgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb25aKHRoZXRhKSB7XG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKHRoZXRhKSxcblx0XHRcdFx0XHRzID0gTWF0aC5zaW4odGhldGEpO1xuXHRcdHRoaXMuc2V0KGMsIC1zLCAwLCAwLCBzLCBjLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvbkF4aXMoYXhpcywgYW5nbGUpIHtcblx0XHQvLyBCYXNlZCBvbiBodHRwOi8vd3d3LmdhbWVkZXYubmV0L3JlZmVyZW5jZS9hcnRpY2xlcy9hcnRpY2xlMTE5OS5hc3Bcblx0XHRjb25zdCBjID0gTWF0aC5jb3MoYW5nbGUpO1xuXHRcdGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSk7XG5cdFx0Y29uc3QgdCA9IDEgLSBjO1xuXHRcdGNvbnN0IHggPSBheGlzLngsXG5cdFx0XHRcdFx0eSA9IGF4aXMueSxcblx0XHRcdFx0XHR6ID0gYXhpcy56O1xuXHRcdGNvbnN0IHR4ID0gdCAqIHgsXG5cdFx0XHRcdFx0dHkgPSB0ICogeTtcblx0XHR0aGlzLnNldCh0eCAqIHggKyBjLCB0eCAqIHkgLSBzICogeiwgdHggKiB6ICsgcyAqIHksIDAsIHR4ICogeSArIHMgKiB6LCB0eSAqIHkgKyBjLCB0eSAqIHogLSBzICogeCwgMCwgdHggKiB6IC0gcyAqIHksIHR5ICogeiArIHMgKiB4LCB0ICogeiAqIHogKyBjLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VTY2FsZSh4LCB5LCB6KSB7XG5cdFx0dGhpcy5zZXQoeCwgMCwgMCwgMCwgMCwgeSwgMCwgMCwgMCwgMCwgeiwgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlU2hlYXIoeHksIHh6LCB5eCwgeXosIHp4LCB6eSkge1xuXHRcdHRoaXMuc2V0KDEsIHl4LCB6eCwgMCwgeHksIDEsIHp5LCAwLCB4eiwgeXosIDEsIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29tcG9zZShwb3NpdGlvbiwgcXVhdGVybmlvbiwgc2NhbGUpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgeCA9IHF1YXRlcm5pb24uX3gsXG5cdFx0XHRcdFx0eSA9IHF1YXRlcm5pb24uX3ksXG5cdFx0XHRcdFx0eiA9IHF1YXRlcm5pb24uX3osXG5cdFx0XHRcdFx0dyA9IHF1YXRlcm5pb24uX3c7XG5cdFx0Y29uc3QgeDIgPSB4ICsgeCxcblx0XHRcdFx0XHR5MiA9IHkgKyB5LFxuXHRcdFx0XHRcdHoyID0geiArIHo7XG5cdFx0Y29uc3QgeHggPSB4ICogeDIsXG5cdFx0XHRcdFx0eHkgPSB4ICogeTIsXG5cdFx0XHRcdFx0eHogPSB4ICogejI7XG5cdFx0Y29uc3QgeXkgPSB5ICogeTIsXG5cdFx0XHRcdFx0eXogPSB5ICogejIsXG5cdFx0XHRcdFx0enogPSB6ICogejI7XG5cdFx0Y29uc3Qgd3ggPSB3ICogeDIsXG5cdFx0XHRcdFx0d3kgPSB3ICogeTIsXG5cdFx0XHRcdFx0d3ogPSB3ICogejI7XG5cdFx0Y29uc3Qgc3ggPSBzY2FsZS54LFxuXHRcdFx0XHRcdHN5ID0gc2NhbGUueSxcblx0XHRcdFx0XHRzeiA9IHNjYWxlLno7XG5cdFx0dGVbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcblx0XHR0ZVsxXSA9ICh4eSArIHd6KSAqIHN4O1xuXHRcdHRlWzJdID0gKHh6IC0gd3kpICogc3g7XG5cdFx0dGVbM10gPSAwO1xuXHRcdHRlWzRdID0gKHh5IC0gd3opICogc3k7XG5cdFx0dGVbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcblx0XHR0ZVs2XSA9ICh5eiArIHd4KSAqIHN5O1xuXHRcdHRlWzddID0gMDtcblx0XHR0ZVs4XSA9ICh4eiArIHd5KSAqIHN6O1xuXHRcdHRlWzldID0gKHl6IC0gd3gpICogc3o7XG5cdFx0dGVbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG5cdFx0dGVbMTFdID0gMDtcblx0XHR0ZVsxMl0gPSBwb3NpdGlvbi54O1xuXHRcdHRlWzEzXSA9IHBvc2l0aW9uLnk7XG5cdFx0dGVbMTRdID0gcG9zaXRpb24uejtcblx0XHR0ZVsxNV0gPSAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGVjb21wb3NlKHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblxuXHRcdGxldCBzeCA9IF92MSQyLnNldCh0ZVswXSwgdGVbMV0sIHRlWzJdKS5sZW5ndGgoKTtcblxuXHRcdGNvbnN0IHN5ID0gX3YxJDIuc2V0KHRlWzRdLCB0ZVs1XSwgdGVbNl0pLmxlbmd0aCgpO1xuXG5cdFx0Y29uc3Qgc3ogPSBfdjEkMi5zZXQodGVbOF0sIHRlWzldLCB0ZVsxMF0pLmxlbmd0aCgpOyAvLyBpZiBkZXRlcm1pbmUgaXMgbmVnYXRpdmUsIHdlIG5lZWQgdG8gaW52ZXJ0IG9uZSBzY2FsZVxuXG5cblx0XHRjb25zdCBkZXQgPSB0aGlzLmRldGVybWluYW50KCk7XG5cdFx0aWYgKGRldCA8IDApIHN4ID0gLXN4O1xuXHRcdHBvc2l0aW9uLnggPSB0ZVsxMl07XG5cdFx0cG9zaXRpb24ueSA9IHRlWzEzXTtcblx0XHRwb3NpdGlvbi56ID0gdGVbMTRdOyAvLyBzY2FsZSB0aGUgcm90YXRpb24gcGFydFxuXG5cdFx0X20xLmNvcHkodGhpcyk7XG5cblx0XHRjb25zdCBpbnZTWCA9IDEgLyBzeDtcblx0XHRjb25zdCBpbnZTWSA9IDEgLyBzeTtcblx0XHRjb25zdCBpbnZTWiA9IDEgLyBzejtcblx0XHRfbTEuZWxlbWVudHNbMF0gKj0gaW52U1g7XG5cdFx0X20xLmVsZW1lbnRzWzFdICo9IGludlNYO1xuXHRcdF9tMS5lbGVtZW50c1syXSAqPSBpbnZTWDtcblx0XHRfbTEuZWxlbWVudHNbNF0gKj0gaW52U1k7XG5cdFx0X20xLmVsZW1lbnRzWzVdICo9IGludlNZO1xuXHRcdF9tMS5lbGVtZW50c1s2XSAqPSBpbnZTWTtcblx0XHRfbTEuZWxlbWVudHNbOF0gKj0gaW52U1o7XG5cdFx0X20xLmVsZW1lbnRzWzldICo9IGludlNaO1xuXHRcdF9tMS5lbGVtZW50c1sxMF0gKj0gaW52U1o7XG5cdFx0cXVhdGVybmlvbi5zZXRGcm9tUm90YXRpb25NYXRyaXgoX20xKTtcblx0XHRzY2FsZS54ID0gc3g7XG5cdFx0c2NhbGUueSA9IHN5O1xuXHRcdHNjYWxlLnogPSBzejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VQZXJzcGVjdGl2ZShsZWZ0LCByaWdodCwgdG9wLCBib3R0b20sIG5lYXIsIGZhcikge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCB4ID0gMiAqIG5lYXIgLyAocmlnaHQgLSBsZWZ0KTtcblx0XHRjb25zdCB5ID0gMiAqIG5lYXIgLyAodG9wIC0gYm90dG9tKTtcblx0XHRjb25zdCBhID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcblx0XHRjb25zdCBiID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcblx0XHRjb25zdCBjID0gLShmYXIgKyBuZWFyKSAvIChmYXIgLSBuZWFyKTtcblx0XHRjb25zdCBkID0gLTIgKiBmYXIgKiBuZWFyIC8gKGZhciAtIG5lYXIpO1xuXHRcdHRlWzBdID0geDtcblx0XHR0ZVs0XSA9IDA7XG5cdFx0dGVbOF0gPSBhO1xuXHRcdHRlWzEyXSA9IDA7XG5cdFx0dGVbMV0gPSAwO1xuXHRcdHRlWzVdID0geTtcblx0XHR0ZVs5XSA9IGI7XG5cdFx0dGVbMTNdID0gMDtcblx0XHR0ZVsyXSA9IDA7XG5cdFx0dGVbNl0gPSAwO1xuXHRcdHRlWzEwXSA9IGM7XG5cdFx0dGVbMTRdID0gZDtcblx0XHR0ZVszXSA9IDA7XG5cdFx0dGVbN10gPSAwO1xuXHRcdHRlWzExXSA9IC0xO1xuXHRcdHRlWzE1XSA9IDA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlT3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgbmVhciwgZmFyKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHcgPSAxLjAgLyAocmlnaHQgLSBsZWZ0KTtcblx0XHRjb25zdCBoID0gMS4wIC8gKHRvcCAtIGJvdHRvbSk7XG5cdFx0Y29uc3QgcCA9IDEuMCAvIChmYXIgLSBuZWFyKTtcblx0XHRjb25zdCB4ID0gKHJpZ2h0ICsgbGVmdCkgKiB3O1xuXHRcdGNvbnN0IHkgPSAodG9wICsgYm90dG9tKSAqIGg7XG5cdFx0Y29uc3QgeiA9IChmYXIgKyBuZWFyKSAqIHA7XG5cdFx0dGVbMF0gPSAyICogdztcblx0XHR0ZVs0XSA9IDA7XG5cdFx0dGVbOF0gPSAwO1xuXHRcdHRlWzEyXSA9IC14O1xuXHRcdHRlWzFdID0gMDtcblx0XHR0ZVs1XSA9IDIgKiBoO1xuXHRcdHRlWzldID0gMDtcblx0XHR0ZVsxM10gPSAteTtcblx0XHR0ZVsyXSA9IDA7XG5cdFx0dGVbNl0gPSAwO1xuXHRcdHRlWzEwXSA9IC0yICogcDtcblx0XHR0ZVsxNF0gPSAtejtcblx0XHR0ZVszXSA9IDA7XG5cdFx0dGVbN10gPSAwO1xuXHRcdHRlWzExXSA9IDA7XG5cdFx0dGVbMTVdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhtYXRyaXgpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgbWUgPSBtYXRyaXguZWxlbWVudHM7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0XHRcdGlmICh0ZVtpXSAhPT0gbWVbaV0pIHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IGFycmF5W2kgKyBvZmZzZXRdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGFycmF5W29mZnNldF0gPSB0ZVswXTtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRlWzFdO1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGVbMl07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgM10gPSB0ZVszXTtcblx0XHRhcnJheVtvZmZzZXQgKyA0XSA9IHRlWzRdO1xuXHRcdGFycmF5W29mZnNldCArIDVdID0gdGVbNV07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgNl0gPSB0ZVs2XTtcblx0XHRhcnJheVtvZmZzZXQgKyA3XSA9IHRlWzddO1xuXHRcdGFycmF5W29mZnNldCArIDhdID0gdGVbOF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgOV0gPSB0ZVs5XTtcblx0XHRhcnJheVtvZmZzZXQgKyAxMF0gPSB0ZVsxMF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMTFdID0gdGVbMTFdO1xuXHRcdGFycmF5W29mZnNldCArIDEyXSA9IHRlWzEyXTtcblx0XHRhcnJheVtvZmZzZXQgKyAxM10gPSB0ZVsxM107XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMTRdID0gdGVbMTRdO1xuXHRcdGFycmF5W29mZnNldCArIDE1XSA9IHRlWzE1XTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxufVxuXG5jb25zdCBfdjEkMiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfbTEgPSAvKkBfX1BVUkVfXyovbmV3IE1hdHJpeDQoKTtcblxuY29uc3QgX3plcm8gPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG5cbmNvbnN0IF9vbmUgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoMSwgMSwgMSk7XG5cbmNvbnN0IF94ID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF95ID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF96ID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9tYXRyaXggPSAvKkBfX1BVUkVfXyovbmV3IE1hdHJpeDQoKTtcblxuY29uc3QgX3F1YXRlcm5pb24gPSAvKkBfX1BVUkVfXyovbmV3IFF1YXRlcm5pb24oKTtcblxuY2xhc3MgRXVsZXIge1xuXHRjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCBvcmRlciA9IEV1bGVyLkRlZmF1bHRPcmRlcikge1xuXHRcdHRoaXMuaXNFdWxlciA9IHRydWU7XG5cdFx0dGhpcy5feCA9IHg7XG5cdFx0dGhpcy5feSA9IHk7XG5cdFx0dGhpcy5feiA9IHo7XG5cdFx0dGhpcy5fb3JkZXIgPSBvcmRlcjtcblx0fVxuXG5cdGdldCB4KCkge1xuXHRcdHJldHVybiB0aGlzLl94O1xuXHR9XG5cblx0c2V0IHgodmFsdWUpIHtcblx0XHR0aGlzLl94ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRnZXQgeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5feTtcblx0fVxuXG5cdHNldCB5KHZhbHVlKSB7XG5cdFx0dGhpcy5feSA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0Z2V0IHooKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3o7XG5cdH1cblxuXHRzZXQgeih2YWx1ZSkge1xuXHRcdHRoaXMuX3ogPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdGdldCBvcmRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fb3JkZXI7XG5cdH1cblxuXHRzZXQgb3JkZXIodmFsdWUpIHtcblx0XHR0aGlzLl9vcmRlciA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0c2V0KHgsIHksIHosIG9yZGVyID0gdGhpcy5fb3JkZXIpIHtcblx0XHR0aGlzLl94ID0geDtcblx0XHR0aGlzLl95ID0geTtcblx0XHR0aGlzLl96ID0gejtcblx0XHR0aGlzLl9vcmRlciA9IG9yZGVyO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5feCwgdGhpcy5feSwgdGhpcy5feiwgdGhpcy5fb3JkZXIpO1xuXHR9XG5cblx0Y29weShldWxlcikge1xuXHRcdHRoaXMuX3ggPSBldWxlci5feDtcblx0XHR0aGlzLl95ID0gZXVsZXIuX3k7XG5cdFx0dGhpcy5feiA9IGV1bGVyLl96O1xuXHRcdHRoaXMuX29yZGVyID0gZXVsZXIuX29yZGVyO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tUm90YXRpb25NYXRyaXgobSwgb3JkZXIgPSB0aGlzLl9vcmRlciwgdXBkYXRlID0gdHJ1ZSkge1xuXHRcdC8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG5cdFx0Y29uc3QgdGUgPSBtLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG0xMSA9IHRlWzBdLFxuXHRcdFx0XHRcdG0xMiA9IHRlWzRdLFxuXHRcdFx0XHRcdG0xMyA9IHRlWzhdO1xuXHRcdGNvbnN0IG0yMSA9IHRlWzFdLFxuXHRcdFx0XHRcdG0yMiA9IHRlWzVdLFxuXHRcdFx0XHRcdG0yMyA9IHRlWzldO1xuXHRcdGNvbnN0IG0zMSA9IHRlWzJdLFxuXHRcdFx0XHRcdG0zMiA9IHRlWzZdLFxuXHRcdFx0XHRcdG0zMyA9IHRlWzEwXTtcblxuXHRcdHN3aXRjaCAob3JkZXIpIHtcblx0XHRcdGNhc2UgJ1hZWic6XG5cdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmFzaW4oY2xhbXAobTEzLCAtMSwgMSkpO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhtMTMpIDwgMC45OTk5OTk5KSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXRhbjIoLW0yMywgbTMzKTtcblx0XHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hdGFuMigtbTEyLCBtMTEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmF0YW4yKG0zMiwgbTIyKTtcblx0XHRcdFx0XHR0aGlzLl96ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdZWFonOlxuXHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hc2luKC1jbGFtcChtMjMsIC0xLCAxKSk7XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKG0yMykgPCAwLjk5OTk5OTkpIHtcblx0XHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hdGFuMihtMTMsIG0zMyk7XG5cdFx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXRhbjIobTIxLCBtMjIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmF0YW4yKC1tMzEsIG0xMSk7XG5cdFx0XHRcdFx0dGhpcy5feiA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWlhZJzpcblx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXNpbihjbGFtcChtMzIsIC0xLCAxKSk7XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKG0zMikgPCAwLjk5OTk5OTkpIHtcblx0XHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hdGFuMigtbTMxLCBtMzMpO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmF0YW4yKC1tMTIsIG0yMik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5feSA9IDA7XG5cdFx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXRhbjIobTIxLCBtMTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1pZWCc6XG5cdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmFzaW4oLWNsYW1wKG0zMSwgLTEsIDEpKTtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMobTMxKSA8IDAuOTk5OTk5OSkge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmF0YW4yKG0zMiwgbTMzKTtcblx0XHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hdGFuMihtMjEsIG0xMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IDA7XG5cdFx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXRhbjIoLW0xMiwgbTIyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdZWlgnOlxuXHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hc2luKGNsYW1wKG0yMSwgLTEsIDEpKTtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMobTIxKSA8IDAuOTk5OTk5OSkge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmF0YW4yKC1tMjMsIG0yMik7XG5cdFx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXRhbjIoLW0zMSwgbTExKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gMDtcblx0XHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hdGFuMihtMTMsIG0zMyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWFpZJzpcblx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXNpbigtY2xhbXAobTEyLCAtMSwgMSkpO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhtMTIpIDwgMC45OTk5OTk5KSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXRhbjIobTMyLCBtMjIpO1xuXHRcdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmF0YW4yKG0xMywgbTExKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hdGFuMigtbTIzLCBtMzMpO1xuXHRcdFx0XHRcdHRoaXMuX3kgPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuRXVsZXI6IC5zZXRGcm9tUm90YXRpb25NYXRyaXgoKSBlbmNvdW50ZXJlZCBhbiB1bmtub3duIG9yZGVyOiAnICsgb3JkZXIpO1xuXHRcdH1cblxuXHRcdHRoaXMuX29yZGVyID0gb3JkZXI7XG5cdFx0aWYgKHVwZGF0ZSA9PT0gdHJ1ZSkgdGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVF1YXRlcm5pb24ocSwgb3JkZXIsIHVwZGF0ZSkge1xuXHRcdF9tYXRyaXgubWFrZVJvdGF0aW9uRnJvbVF1YXRlcm5pb24ocSk7XG5cblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tUm90YXRpb25NYXRyaXgoX21hdHJpeCwgb3JkZXIsIHVwZGF0ZSk7XG5cdH1cblxuXHRzZXRGcm9tVmVjdG9yMyh2LCBvcmRlciA9IHRoaXMuX29yZGVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0KHYueCwgdi55LCB2LnosIG9yZGVyKTtcblx0fVxuXG5cdHJlb3JkZXIobmV3T3JkZXIpIHtcblx0XHQvLyBXQVJOSU5HOiB0aGlzIGRpc2NhcmRzIHJldm9sdXRpb24gaW5mb3JtYXRpb24gLWJob3VzdG9uXG5cdFx0X3F1YXRlcm5pb24uc2V0RnJvbUV1bGVyKHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbVF1YXRlcm5pb24oX3F1YXRlcm5pb24sIG5ld09yZGVyKTtcblx0fVxuXG5cdGVxdWFscyhldWxlcikge1xuXHRcdHJldHVybiBldWxlci5feCA9PT0gdGhpcy5feCAmJiBldWxlci5feSA9PT0gdGhpcy5feSAmJiBldWxlci5feiA9PT0gdGhpcy5feiAmJiBldWxlci5fb3JkZXIgPT09IHRoaXMuX29yZGVyO1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5KSB7XG5cdFx0dGhpcy5feCA9IGFycmF5WzBdO1xuXHRcdHRoaXMuX3kgPSBhcnJheVsxXTtcblx0XHR0aGlzLl96ID0gYXJyYXlbMl07XG5cdFx0aWYgKGFycmF5WzNdICE9PSB1bmRlZmluZWQpIHRoaXMuX29yZGVyID0gYXJyYXlbM107XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGFycmF5W29mZnNldF0gPSB0aGlzLl94O1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGhpcy5feTtcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXMuX3o7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgM10gPSB0aGlzLl9vcmRlcjtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXHRfb25DaGFuZ2UoY2FsbGJhY2spIHtcblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRfb25DaGFuZ2VDYWxsYmFjaygpIHt9XG5cblx0KltTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHlpZWxkIHRoaXMuX3g7XG5cdFx0eWllbGQgdGhpcy5feTtcblx0XHR5aWVsZCB0aGlzLl96O1xuXHRcdHlpZWxkIHRoaXMuX29yZGVyO1xuXHR9IC8vIEBkZXByZWNhdGVkIHNpbmNlIHIxMzgsIDAyY2YwZGYxY2I0NTc1ZDU4NDJmZWY5Yzg1YmI1YTg5ZmUwMjBkNTNcblxuXG5cdHRvVmVjdG9yMygpIHtcblx0XHRjb25zb2xlLmVycm9yKCdUSFJFRS5FdWxlcjogLnRvVmVjdG9yMygpIGhhcyBiZWVuIHJlbW92ZWQuIFVzZSBWZWN0b3IzLnNldEZyb21FdWxlcigpIGluc3RlYWQnKTtcblx0fVxuXG59XG5cbkV1bGVyLkRlZmF1bHRPcmRlciA9ICdYWVonO1xuRXVsZXIuUm90YXRpb25PcmRlcnMgPSBbJ1hZWicsICdZWlgnLCAnWlhZJywgJ1haWScsICdZWFonLCAnWllYJ107XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBvZiBpbnRlcnBvbGFudHMgb3ZlciBwYXJhbWV0cmljIHNhbXBsZXMuXG4gKlxuICogVGhlIHBhcmFtZXRlciBkb21haW4gaXMgb25lIGRpbWVuc2lvbmFsLCB0eXBpY2FsbHkgdGhlIHRpbWUgb3IgYSBwYXRoXG4gKiBhbG9uZyBhIGN1cnZlIGRlZmluZWQgYnkgdGhlIGRhdGEuXG4gKlxuICogVGhlIHNhbXBsZSB2YWx1ZXMgY2FuIGhhdmUgYW55IGRpbWVuc2lvbmFsaXR5IGFuZCBkZXJpdmVkIGNsYXNzZXMgbWF5XG4gKiBhcHBseSBzcGVjaWFsIGludGVycHJldGF0aW9ucyB0byB0aGUgZGF0YS5cbiAqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBpbnRlcnZhbCBzZWVrIGluIGEgVGVtcGxhdGUgTWV0aG9kLCBkZWZlcnJpbmdcbiAqIHRoZSBhY3R1YWwgaW50ZXJwb2xhdGlvbiB0byBkZXJpdmVkIGNsYXNzZXMuXG4gKlxuICogVGltZSBjb21wbGV4aXR5IGlzIE8oMSkgZm9yIGxpbmVhciBhY2Nlc3MgY3Jvc3NpbmcgYXQgbW9zdCB0d28gcG9pbnRzXG4gKiBhbmQgTyhsb2cgTikgZm9yIHJhbmRvbSBhY2Nlc3MsIHdoZXJlIE4gaXMgdGhlIG51bWJlciBvZiBwb3NpdGlvbnMuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqXG4gKiBcdFx0aHR0cDovL3d3dy5vb2Rlc2lnbi5jb20vdGVtcGxhdGUtbWV0aG9kLXBhdHRlcm4uaHRtbFxuICpcbiAqL1xuY2xhc3MgSW50ZXJwb2xhbnQge1xuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyKSB7XG5cdFx0dGhpcy5wYXJhbWV0ZXJQb3NpdGlvbnMgPSBwYXJhbWV0ZXJQb3NpdGlvbnM7XG5cdFx0dGhpcy5fY2FjaGVkSW5kZXggPSAwO1xuXHRcdHRoaXMucmVzdWx0QnVmZmVyID0gcmVzdWx0QnVmZmVyICE9PSB1bmRlZmluZWQgPyByZXN1bHRCdWZmZXIgOiBuZXcgc2FtcGxlVmFsdWVzLmNvbnN0cnVjdG9yKHNhbXBsZVNpemUpO1xuXHRcdHRoaXMuc2FtcGxlVmFsdWVzID0gc2FtcGxlVmFsdWVzO1xuXHRcdHRoaXMudmFsdWVTaXplID0gc2FtcGxlU2l6ZTtcblx0XHR0aGlzLnNldHRpbmdzID0gbnVsbDtcblx0XHR0aGlzLkRlZmF1bHRTZXR0aW5nc18gPSB7fTtcblx0fVxuXG5cdGV2YWx1YXRlKHQpIHtcblx0XHRjb25zdCBwcCA9IHRoaXMucGFyYW1ldGVyUG9zaXRpb25zO1xuXHRcdGxldCBpMSA9IHRoaXMuX2NhY2hlZEluZGV4LFxuXHRcdFx0XHR0MSA9IHBwW2kxXSxcblx0XHRcdFx0dDAgPSBwcFtpMSAtIDFdO1xuXG5cdFx0dmFsaWRhdGVfaW50ZXJ2YWw6IHtcblx0XHRcdHNlZWs6IHtcblx0XHRcdFx0bGV0IHJpZ2h0O1xuXG5cdFx0XHRcdGxpbmVhcl9zY2FuOiB7XG5cdFx0XHRcdFx0Ly8tIFNlZSBodHRwOi8vanNwZXJmLmNvbS9jb21wYXJpc29uLXRvLXVuZGVmaW5lZC8zXG5cdFx0XHRcdFx0Ly8tIHNsb3dlciBjb2RlOlxuXHRcdFx0XHRcdC8vLVxuXHRcdFx0XHRcdC8vLSBcdFx0XHRcdGlmICggdCA+PSB0MSB8fCB0MSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdGZvcndhcmRfc2NhbjogaWYgKCEodCA8IHQxKSkge1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgZ2l2ZVVwQXQgPSBpMSArIDI7Oykge1xuXHRcdFx0XHRcdFx0XHRpZiAodDEgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0IDwgdDApIGJyZWFrIGZvcndhcmRfc2NhbjsgLy8gYWZ0ZXIgZW5kXG5cblx0XHRcdFx0XHRcdFx0XHRpMSA9IHBwLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jYWNoZWRJbmRleCA9IGkxO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNvcHlTYW1wbGVWYWx1ZV8oaTEgLSAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChpMSA9PT0gZ2l2ZVVwQXQpIGJyZWFrOyAvLyB0aGlzIGxvb3BcblxuXHRcdFx0XHRcdFx0XHR0MCA9IHQxO1xuXHRcdFx0XHRcdFx0XHR0MSA9IHBwWysraTFdO1xuXG5cdFx0XHRcdFx0XHRcdGlmICh0IDwgdDEpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyB3ZSBoYXZlIGFycml2ZWQgYXQgdGhlIHNvdWdodCBpbnRlcnZhbFxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrIHNlZWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gLy8gcHJlcGFyZSBiaW5hcnkgc2VhcmNoIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBpbmRleFxuXG5cblx0XHRcdFx0XHRcdHJpZ2h0ID0gcHAubGVuZ3RoO1xuXHRcdFx0XHRcdFx0YnJlYWsgbGluZWFyX3NjYW47XG5cdFx0XHRcdFx0fSAvLy0gc2xvd2VyIGNvZGU6XG5cdFx0XHRcdFx0Ly8tXHRcdFx0XHRcdGlmICggdCA8IHQwIHx8IHQwID09PSB1bmRlZmluZWQgKSB7XG5cblxuXHRcdFx0XHRcdGlmICghKHQgPj0gdDApKSB7XG5cdFx0XHRcdFx0XHQvLyBsb29waW5nP1xuXHRcdFx0XHRcdFx0Y29uc3QgdDFnbG9iYWwgPSBwcFsxXTtcblxuXHRcdFx0XHRcdFx0aWYgKHQgPCB0MWdsb2JhbCkge1xuXHRcdFx0XHRcdFx0XHRpMSA9IDI7IC8vICsgMSwgdXNpbmcgdGhlIHNjYW4gZm9yIHRoZSBkZXRhaWxzXG5cblx0XHRcdFx0XHRcdFx0dDAgPSB0MWdsb2JhbDtcblx0XHRcdFx0XHRcdH0gLy8gbGluZWFyIHJldmVyc2Ugc2NhblxuXG5cblx0XHRcdFx0XHRcdGZvciAobGV0IGdpdmVVcEF0ID0gaTEgLSAyOzspIHtcblx0XHRcdFx0XHRcdFx0aWYgKHQwID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBiZWZvcmUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jYWNoZWRJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29weVNhbXBsZVZhbHVlXygwKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChpMSA9PT0gZ2l2ZVVwQXQpIGJyZWFrOyAvLyB0aGlzIGxvb3BcblxuXHRcdFx0XHRcdFx0XHR0MSA9IHQwO1xuXHRcdFx0XHRcdFx0XHR0MCA9IHBwWy0taTEgLSAxXTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodCA+PSB0MCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHdlIGhhdmUgYXJyaXZlZCBhdCB0aGUgc291Z2h0IGludGVydmFsXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWsgc2Vlaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSAvLyBwcmVwYXJlIGJpbmFyeSBzZWFyY2ggb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgaW5kZXhcblxuXG5cdFx0XHRcdFx0XHRyaWdodCA9IGkxO1xuXHRcdFx0XHRcdFx0aTEgPSAwO1xuXHRcdFx0XHRcdFx0YnJlYWsgbGluZWFyX3NjYW47XG5cdFx0XHRcdFx0fSAvLyB0aGUgaW50ZXJ2YWwgaXMgdmFsaWRcblxuXG5cdFx0XHRcdFx0YnJlYWsgdmFsaWRhdGVfaW50ZXJ2YWw7XG5cdFx0XHRcdH0gLy8gbGluZWFyIHNjYW5cblx0XHRcdFx0Ly8gYmluYXJ5IHNlYXJjaFxuXG5cblx0XHRcdFx0d2hpbGUgKGkxIDwgcmlnaHQpIHtcblx0XHRcdFx0XHRjb25zdCBtaWQgPSBpMSArIHJpZ2h0ID4+PiAxO1xuXG5cdFx0XHRcdFx0aWYgKHQgPCBwcFttaWRdKSB7XG5cdFx0XHRcdFx0XHRyaWdodCA9IG1pZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aTEgPSBtaWQgKyAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHQxID0gcHBbaTFdO1xuXHRcdFx0XHR0MCA9IHBwW2kxIC0gMV07IC8vIGNoZWNrIGJvdW5kYXJ5IGNhc2VzLCBhZ2FpblxuXG5cdFx0XHRcdGlmICh0MCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FjaGVkSW5kZXggPSAwO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvcHlTYW1wbGVWYWx1ZV8oMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodDEgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGkxID0gcHAubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuX2NhY2hlZEluZGV4ID0gaTE7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29weVNhbXBsZVZhbHVlXyhpMSAtIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IC8vIHNlZWtcblxuXG5cdFx0XHR0aGlzLl9jYWNoZWRJbmRleCA9IGkxO1xuXHRcdFx0dGhpcy5pbnRlcnZhbENoYW5nZWRfKGkxLCB0MCwgdDEpO1xuXHRcdH0gLy8gdmFsaWRhdGVfaW50ZXJ2YWxcblxuXG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVfKGkxLCB0MCwgdCwgdDEpO1xuXHR9XG5cblx0Z2V0U2V0dGluZ3NfKCkge1xuXHRcdHJldHVybiB0aGlzLnNldHRpbmdzIHx8IHRoaXMuRGVmYXVsdFNldHRpbmdzXztcblx0fVxuXG5cdGNvcHlTYW1wbGVWYWx1ZV8oaW5kZXgpIHtcblx0XHQvLyBjb3BpZXMgYSBzYW1wbGUgdmFsdWUgdG8gdGhlIHJlc3VsdCBidWZmZXJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcixcblx0XHRcdFx0XHR2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcyxcblx0XHRcdFx0XHRzdHJpZGUgPSB0aGlzLnZhbHVlU2l6ZSxcblx0XHRcdFx0XHRvZmZzZXQgPSBpbmRleCAqIHN0cmlkZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpICE9PSBzdHJpZGU7ICsraSkge1xuXHRcdFx0cmVzdWx0W2ldID0gdmFsdWVzW29mZnNldCArIGldO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0gLy8gVGVtcGxhdGUgbWV0aG9kcyBmb3IgZGVyaXZlZCBjbGFzc2VzOlxuXG5cblx0aW50ZXJwb2xhdGVfKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2FsbCB0byBhYnN0cmFjdCBtZXRob2QnKTsgLy8gaW1wbGVtZW50YXRpb25zIHNoYWxsIHJldHVybiB0aGlzLnJlc3VsdEJ1ZmZlclxuXHR9XG5cblx0aW50ZXJ2YWxDaGFuZ2VkXygpIHsvLyBlbXB0eVxuXHR9XG5cbn1cblxuY29uc3QgX3N0YXJ0UCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfc3RhcnRFbmQgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY2xhc3MgTGluZTMge1xuXHRjb25zdHJ1Y3RvcihzdGFydCA9IG5ldyBWZWN0b3IzKCksIGVuZCA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdH1cblxuXHRzZXQoc3RhcnQsIGVuZCkge1xuXHRcdHRoaXMuc3RhcnQuY29weShzdGFydCk7XG5cdFx0dGhpcy5lbmQuY29weShlbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShsaW5lKSB7XG5cdFx0dGhpcy5zdGFydC5jb3B5KGxpbmUuc3RhcnQpO1xuXHRcdHRoaXMuZW5kLmNvcHkobGluZS5lbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Q2VudGVyKHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuYWRkVmVjdG9ycyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCkubXVsdGlwbHlTY2FsYXIoMC41KTtcblx0fVxuXG5cdGRlbHRhKHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuc3ViVmVjdG9ycyh0aGlzLmVuZCwgdGhpcy5zdGFydCk7XG5cdH1cblxuXHRkaXN0YW5jZVNxKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0LmRpc3RhbmNlVG9TcXVhcmVkKHRoaXMuZW5kKTtcblx0fVxuXG5cdGRpc3RhbmNlKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0LmRpc3RhbmNlVG8odGhpcy5lbmQpO1xuXHR9XG5cblx0YXQodCwgdGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMuZGVsdGEodGFyZ2V0KS5tdWx0aXBseVNjYWxhcih0KS5hZGQodGhpcy5zdGFydCk7XG5cdH1cblxuXHRjbG9zZXN0UG9pbnRUb1BvaW50UGFyYW1ldGVyKHBvaW50LCBjbGFtcFRvTGluZSkge1xuXHRcdF9zdGFydFAuc3ViVmVjdG9ycyhwb2ludCwgdGhpcy5zdGFydCk7XG5cblx0XHRfc3RhcnRFbmQuc3ViVmVjdG9ycyh0aGlzLmVuZCwgdGhpcy5zdGFydCk7XG5cblx0XHRjb25zdCBzdGFydEVuZDIgPSBfc3RhcnRFbmQuZG90KF9zdGFydEVuZCk7XG5cblx0XHRjb25zdCBzdGFydEVuZF9zdGFydFAgPSBfc3RhcnRFbmQuZG90KF9zdGFydFApO1xuXG5cdFx0bGV0IHQgPSBzdGFydEVuZF9zdGFydFAgLyBzdGFydEVuZDI7XG5cblx0XHRpZiAoY2xhbXBUb0xpbmUpIHtcblx0XHRcdHQgPSBjbGFtcCh0LCAwLCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdGNsb3Nlc3RQb2ludFRvUG9pbnQocG9pbnQsIGNsYW1wVG9MaW5lLCB0YXJnZXQpIHtcblx0XHRjb25zdCB0ID0gdGhpcy5jbG9zZXN0UG9pbnRUb1BvaW50UGFyYW1ldGVyKHBvaW50LCBjbGFtcFRvTGluZSk7XG5cdFx0cmV0dXJuIHRoaXMuZGVsdGEodGFyZ2V0KS5tdWx0aXBseVNjYWxhcih0KS5hZGQodGhpcy5zdGFydCk7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobWF0cml4KSB7XG5cdFx0dGhpcy5zdGFydC5hcHBseU1hdHJpeDQobWF0cml4KTtcblx0XHR0aGlzLmVuZC5hcHBseU1hdHJpeDQobWF0cml4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhsaW5lKSB7XG5cdFx0cmV0dXJuIGxpbmUuc3RhcnQuZXF1YWxzKHRoaXMuc3RhcnQpICYmIGxpbmUuZW5kLmVxdWFscyh0aGlzLmVuZCk7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cbn1cblxuY2xhc3MgTWF0cml4MyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdE1hdHJpeDMucHJvdG90eXBlLmlzTWF0cml4MyA9IHRydWU7XG5cdFx0dGhpcy5lbGVtZW50cyA9IFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXTtcblx0fVxuXG5cdHNldChuMTEsIG4xMiwgbjEzLCBuMjEsIG4yMiwgbjIzLCBuMzEsIG4zMiwgbjMzKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHRlWzBdID0gbjExO1xuXHRcdHRlWzFdID0gbjIxO1xuXHRcdHRlWzJdID0gbjMxO1xuXHRcdHRlWzNdID0gbjEyO1xuXHRcdHRlWzRdID0gbjIyO1xuXHRcdHRlWzVdID0gbjMyO1xuXHRcdHRlWzZdID0gbjEzO1xuXHRcdHRlWzddID0gbjIzO1xuXHRcdHRlWzhdID0gbjMzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWRlbnRpdHkoKSB7XG5cdFx0dGhpcy5zZXQoMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KG0pIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgbWUgPSBtLmVsZW1lbnRzO1xuXHRcdHRlWzBdID0gbWVbMF07XG5cdFx0dGVbMV0gPSBtZVsxXTtcblx0XHR0ZVsyXSA9IG1lWzJdO1xuXHRcdHRlWzNdID0gbWVbM107XG5cdFx0dGVbNF0gPSBtZVs0XTtcblx0XHR0ZVs1XSA9IG1lWzVdO1xuXHRcdHRlWzZdID0gbWVbNl07XG5cdFx0dGVbN10gPSBtZVs3XTtcblx0XHR0ZVs4XSA9IG1lWzhdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXh0cmFjdEJhc2lzKHhBeGlzLCB5QXhpcywgekF4aXMpIHtcblx0XHR4QXhpcy5zZXRGcm9tTWF0cml4M0NvbHVtbih0aGlzLCAwKTtcblx0XHR5QXhpcy5zZXRGcm9tTWF0cml4M0NvbHVtbih0aGlzLCAxKTtcblx0XHR6QXhpcy5zZXRGcm9tTWF0cml4M0NvbHVtbih0aGlzLCAyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21NYXRyaXg0KG0pIHtcblx0XHRjb25zdCBtZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy5zZXQobWVbMF0sIG1lWzRdLCBtZVs4XSwgbWVbMV0sIG1lWzVdLCBtZVs5XSwgbWVbMl0sIG1lWzZdLCBtZVsxMF0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkobSkge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5TWF0cmljZXModGhpcywgbSk7XG5cdH1cblxuXHRwcmVtdWx0aXBseShtKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyhtLCB0aGlzKTtcblx0fVxuXG5cdG11bHRpcGx5TWF0cmljZXMoYSwgYikge1xuXHRcdGNvbnN0IGFlID0gYS5lbGVtZW50cztcblx0XHRjb25zdCBiZSA9IGIuZWxlbWVudHM7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IGExMSA9IGFlWzBdLFxuXHRcdFx0XHRcdGExMiA9IGFlWzNdLFxuXHRcdFx0XHRcdGExMyA9IGFlWzZdO1xuXHRcdGNvbnN0IGEyMSA9IGFlWzFdLFxuXHRcdFx0XHRcdGEyMiA9IGFlWzRdLFxuXHRcdFx0XHRcdGEyMyA9IGFlWzddO1xuXHRcdGNvbnN0IGEzMSA9IGFlWzJdLFxuXHRcdFx0XHRcdGEzMiA9IGFlWzVdLFxuXHRcdFx0XHRcdGEzMyA9IGFlWzhdO1xuXHRcdGNvbnN0IGIxMSA9IGJlWzBdLFxuXHRcdFx0XHRcdGIxMiA9IGJlWzNdLFxuXHRcdFx0XHRcdGIxMyA9IGJlWzZdO1xuXHRcdGNvbnN0IGIyMSA9IGJlWzFdLFxuXHRcdFx0XHRcdGIyMiA9IGJlWzRdLFxuXHRcdFx0XHRcdGIyMyA9IGJlWzddO1xuXHRcdGNvbnN0IGIzMSA9IGJlWzJdLFxuXHRcdFx0XHRcdGIzMiA9IGJlWzVdLFxuXHRcdFx0XHRcdGIzMyA9IGJlWzhdO1xuXHRcdHRlWzBdID0gYTExICogYjExICsgYTEyICogYjIxICsgYTEzICogYjMxO1xuXHRcdHRlWzNdID0gYTExICogYjEyICsgYTEyICogYjIyICsgYTEzICogYjMyO1xuXHRcdHRlWzZdID0gYTExICogYjEzICsgYTEyICogYjIzICsgYTEzICogYjMzO1xuXHRcdHRlWzFdID0gYTIxICogYjExICsgYTIyICogYjIxICsgYTIzICogYjMxO1xuXHRcdHRlWzRdID0gYTIxICogYjEyICsgYTIyICogYjIyICsgYTIzICogYjMyO1xuXHRcdHRlWzddID0gYTIxICogYjEzICsgYTIyICogYjIzICsgYTIzICogYjMzO1xuXHRcdHRlWzJdID0gYTMxICogYjExICsgYTMyICogYjIxICsgYTMzICogYjMxO1xuXHRcdHRlWzVdID0gYTMxICogYjEyICsgYTMyICogYjIyICsgYTMzICogYjMyO1xuXHRcdHRlWzhdID0gYTMxICogYjEzICsgYTMyICogYjIzICsgYTMzICogYjMzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlTY2FsYXIocykge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR0ZVswXSAqPSBzO1xuXHRcdHRlWzNdICo9IHM7XG5cdFx0dGVbNl0gKj0gcztcblx0XHR0ZVsxXSAqPSBzO1xuXHRcdHRlWzRdICo9IHM7XG5cdFx0dGVbN10gKj0gcztcblx0XHR0ZVsyXSAqPSBzO1xuXHRcdHRlWzVdICo9IHM7XG5cdFx0dGVbOF0gKj0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRldGVybWluYW50KCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBhID0gdGVbMF0sXG5cdFx0XHRcdFx0YiA9IHRlWzFdLFxuXHRcdFx0XHRcdGMgPSB0ZVsyXSxcblx0XHRcdFx0XHRkID0gdGVbM10sXG5cdFx0XHRcdFx0ZSA9IHRlWzRdLFxuXHRcdFx0XHRcdGYgPSB0ZVs1XSxcblx0XHRcdFx0XHRnID0gdGVbNl0sXG5cdFx0XHRcdFx0aCA9IHRlWzddLFxuXHRcdFx0XHRcdGkgPSB0ZVs4XTtcblx0XHRyZXR1cm4gYSAqIGUgKiBpIC0gYSAqIGYgKiBoIC0gYiAqIGQgKiBpICsgYiAqIGYgKiBnICsgYyAqIGQgKiBoIC0gYyAqIGUgKiBnO1xuXHR9XG5cblx0aW52ZXJ0KCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cyxcblx0XHRcdFx0XHRuMTEgPSB0ZVswXSxcblx0XHRcdFx0XHRuMjEgPSB0ZVsxXSxcblx0XHRcdFx0XHRuMzEgPSB0ZVsyXSxcblx0XHRcdFx0XHRuMTIgPSB0ZVszXSxcblx0XHRcdFx0XHRuMjIgPSB0ZVs0XSxcblx0XHRcdFx0XHRuMzIgPSB0ZVs1XSxcblx0XHRcdFx0XHRuMTMgPSB0ZVs2XSxcblx0XHRcdFx0XHRuMjMgPSB0ZVs3XSxcblx0XHRcdFx0XHRuMzMgPSB0ZVs4XSxcblx0XHRcdFx0XHR0MTEgPSBuMzMgKiBuMjIgLSBuMzIgKiBuMjMsXG5cdFx0XHRcdFx0dDEyID0gbjMyICogbjEzIC0gbjMzICogbjEyLFxuXHRcdFx0XHRcdHQxMyA9IG4yMyAqIG4xMiAtIG4yMiAqIG4xMyxcblx0XHRcdFx0XHRkZXQgPSBuMTEgKiB0MTEgKyBuMjEgKiB0MTIgKyBuMzEgKiB0MTM7XG5cdFx0aWYgKGRldCA9PT0gMCkgcmV0dXJuIHRoaXMuc2V0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXHRcdGNvbnN0IGRldEludiA9IDEgLyBkZXQ7XG5cdFx0dGVbMF0gPSB0MTEgKiBkZXRJbnY7XG5cdFx0dGVbMV0gPSAobjMxICogbjIzIC0gbjMzICogbjIxKSAqIGRldEludjtcblx0XHR0ZVsyXSA9IChuMzIgKiBuMjEgLSBuMzEgKiBuMjIpICogZGV0SW52O1xuXHRcdHRlWzNdID0gdDEyICogZGV0SW52O1xuXHRcdHRlWzRdID0gKG4zMyAqIG4xMSAtIG4zMSAqIG4xMykgKiBkZXRJbnY7XG5cdFx0dGVbNV0gPSAobjMxICogbjEyIC0gbjMyICogbjExKSAqIGRldEludjtcblx0XHR0ZVs2XSA9IHQxMyAqIGRldEludjtcblx0XHR0ZVs3XSA9IChuMjEgKiBuMTMgLSBuMjMgKiBuMTEpICogZGV0SW52O1xuXHRcdHRlWzhdID0gKG4yMiAqIG4xMSAtIG4yMSAqIG4xMikgKiBkZXRJbnY7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmFuc3Bvc2UoKSB7XG5cdFx0bGV0IHRtcDtcblx0XHRjb25zdCBtID0gdGhpcy5lbGVtZW50cztcblx0XHR0bXAgPSBtWzFdO1xuXHRcdG1bMV0gPSBtWzNdO1xuXHRcdG1bM10gPSB0bXA7XG5cdFx0dG1wID0gbVsyXTtcblx0XHRtWzJdID0gbVs2XTtcblx0XHRtWzZdID0gdG1wO1xuXHRcdHRtcCA9IG1bNV07XG5cdFx0bVs1XSA9IG1bN107XG5cdFx0bVs3XSA9IHRtcDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldE5vcm1hbE1hdHJpeChtYXRyaXg0KSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbU1hdHJpeDQobWF0cml4NCkuaW52ZXJ0KCkudHJhbnNwb3NlKCk7XG5cdH1cblxuXHR0cmFuc3Bvc2VJbnRvQXJyYXkocikge1xuXHRcdGNvbnN0IG0gPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHJbMF0gPSBtWzBdO1xuXHRcdHJbMV0gPSBtWzNdO1xuXHRcdHJbMl0gPSBtWzZdO1xuXHRcdHJbM10gPSBtWzFdO1xuXHRcdHJbNF0gPSBtWzRdO1xuXHRcdHJbNV0gPSBtWzddO1xuXHRcdHJbNl0gPSBtWzJdO1xuXHRcdHJbN10gPSBtWzVdO1xuXHRcdHJbOF0gPSBtWzhdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0VXZUcmFuc2Zvcm0odHgsIHR5LCBzeCwgc3ksIHJvdGF0aW9uLCBjeCwgY3kpIHtcblx0XHRjb25zdCBjID0gTWF0aC5jb3Mocm90YXRpb24pO1xuXHRcdGNvbnN0IHMgPSBNYXRoLnNpbihyb3RhdGlvbik7XG5cdFx0dGhpcy5zZXQoc3ggKiBjLCBzeCAqIHMsIC1zeCAqIChjICogY3ggKyBzICogY3kpICsgY3ggKyB0eCwgLXN5ICogcywgc3kgKiBjLCAtc3kgKiAoLXMgKiBjeCArIGMgKiBjeSkgKyBjeSArIHR5LCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvL1xuXG5cblx0c2NhbGUoc3gsIHN5KSB7XG5cdFx0dGhpcy5wcmVtdWx0aXBseShfbTMubWFrZVNjYWxlKHN4LCBzeSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm90YXRlKHRoZXRhKSB7XG5cdFx0dGhpcy5wcmVtdWx0aXBseShfbTMubWFrZVJvdGF0aW9uKC10aGV0YSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dHJhbnNsYXRlKHR4LCB0eSkge1xuXHRcdHRoaXMucHJlbXVsdGlwbHkoX20zLm1ha2VUcmFuc2xhdGlvbih0eCwgdHkpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvLyBmb3IgMkQgVHJhbnNmb3Jtc1xuXG5cblx0bWFrZVRyYW5zbGF0aW9uKHgsIHkpIHtcblx0XHR0aGlzLnNldCgxLCAwLCB4LCAwLCAxLCB5LCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvbih0aGV0YSkge1xuXHRcdC8vIGNvdW50ZXJjbG9ja3dpc2Vcblx0XHRjb25zdCBjID0gTWF0aC5jb3ModGhldGEpO1xuXHRcdGNvbnN0IHMgPSBNYXRoLnNpbih0aGV0YSk7XG5cdFx0dGhpcy5zZXQoYywgLXMsIDAsIHMsIGMsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVNjYWxlKHgsIHkpIHtcblx0XHR0aGlzLnNldCh4LCAwLCAwLCAwLCB5LCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvL1xuXG5cblx0ZXF1YWxzKG1hdHJpeCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBtZSA9IG1hdHJpeC5lbGVtZW50cztcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG5cdFx0XHRpZiAodGVbaV0gIT09IG1lW2ldKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IGFycmF5W2kgKyBvZmZzZXRdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGFycmF5W29mZnNldF0gPSB0ZVswXTtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRlWzFdO1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGVbMl07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgM10gPSB0ZVszXTtcblx0XHRhcnJheVtvZmZzZXQgKyA0XSA9IHRlWzRdO1xuXHRcdGFycmF5W29mZnNldCArIDVdID0gdGVbNV07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgNl0gPSB0ZVs2XTtcblx0XHRhcnJheVtvZmZzZXQgKyA3XSA9IHRlWzddO1xuXHRcdGFycmF5W29mZnNldCArIDhdID0gdGVbOF07XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuZnJvbUFycmF5KHRoaXMuZWxlbWVudHMpO1xuXHR9XG5cbn1cblxuY29uc3QgX20zID0gLypAX19QVVJFX18qL25ldyBNYXRyaXgzKCk7XG5cbmNvbnN0IF92ZWN0b3IxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92ZWN0b3IyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9ub3JtYWxNYXRyaXggPSAvKkBfX1BVUkVfXyovbmV3IE1hdHJpeDMoKTtcblxuY2xhc3MgUGxhbmUge1xuXHRjb25zdHJ1Y3Rvcihub3JtYWwgPSBuZXcgVmVjdG9yMygxLCAwLCAwKSwgY29uc3RhbnQgPSAwKSB7XG5cdFx0dGhpcy5pc1BsYW5lID0gdHJ1ZTsgLy8gbm9ybWFsIGlzIGFzc3VtZWQgdG8gYmUgbm9ybWFsaXplZFxuXG5cdFx0dGhpcy5ub3JtYWwgPSBub3JtYWw7XG5cdFx0dGhpcy5jb25zdGFudCA9IGNvbnN0YW50O1xuXHR9XG5cblx0c2V0KG5vcm1hbCwgY29uc3RhbnQpIHtcblx0XHR0aGlzLm5vcm1hbC5jb3B5KG5vcm1hbCk7XG5cdFx0dGhpcy5jb25zdGFudCA9IGNvbnN0YW50O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Q29tcG9uZW50cyh4LCB5LCB6LCB3KSB7XG5cdFx0dGhpcy5ub3JtYWwuc2V0KHgsIHksIHopO1xuXHRcdHRoaXMuY29uc3RhbnQgPSB3O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQobm9ybWFsLCBwb2ludCkge1xuXHRcdHRoaXMubm9ybWFsLmNvcHkobm9ybWFsKTtcblx0XHR0aGlzLmNvbnN0YW50ID0gLXBvaW50LmRvdCh0aGlzLm5vcm1hbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tQ29wbGFuYXJQb2ludHMoYSwgYiwgYykge1xuXHRcdGNvbnN0IG5vcm1hbCA9IF92ZWN0b3IxLnN1YlZlY3RvcnMoYywgYikuY3Jvc3MoX3ZlY3RvcjIuc3ViVmVjdG9ycyhhLCBiKSkubm9ybWFsaXplKCk7IC8vIFE6IHNob3VsZCBhbiBlcnJvciBiZSB0aHJvd24gaWYgbm9ybWFsIGlzIHplcm8gKGUuZy4gZGVnZW5lcmF0ZSBwbGFuZSk/XG5cblxuXHRcdHRoaXMuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQobm9ybWFsLCBhKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkocGxhbmUpIHtcblx0XHR0aGlzLm5vcm1hbC5jb3B5KHBsYW5lLm5vcm1hbCk7XG5cdFx0dGhpcy5jb25zdGFudCA9IHBsYW5lLmNvbnN0YW50O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bm9ybWFsaXplKCkge1xuXHRcdC8vIE5vdGU6IHdpbGwgbGVhZCB0byBhIGRpdmlkZSBieSB6ZXJvIGlmIHRoZSBwbGFuZSBpcyBpbnZhbGlkLlxuXHRcdGNvbnN0IGludmVyc2VOb3JtYWxMZW5ndGggPSAxLjAgLyB0aGlzLm5vcm1hbC5sZW5ndGgoKTtcblx0XHR0aGlzLm5vcm1hbC5tdWx0aXBseVNjYWxhcihpbnZlcnNlTm9ybWFsTGVuZ3RoKTtcblx0XHR0aGlzLmNvbnN0YW50ICo9IGludmVyc2VOb3JtYWxMZW5ndGg7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWdhdGUoKSB7XG5cdFx0dGhpcy5jb25zdGFudCAqPSAtMTtcblx0XHR0aGlzLm5vcm1hbC5uZWdhdGUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc3RhbmNlVG9Qb2ludChwb2ludCkge1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbC5kb3QocG9pbnQpICsgdGhpcy5jb25zdGFudDtcblx0fVxuXG5cdGRpc3RhbmNlVG9TcGhlcmUoc3BoZXJlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlzdGFuY2VUb1BvaW50KHNwaGVyZS5jZW50ZXIpIC0gc3BoZXJlLnJhZGl1cztcblx0fVxuXG5cdHByb2plY3RQb2ludChwb2ludCwgdGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KHRoaXMubm9ybWFsKS5tdWx0aXBseVNjYWxhcigtdGhpcy5kaXN0YW5jZVRvUG9pbnQocG9pbnQpKS5hZGQocG9pbnQpO1xuXHR9XG5cblx0aW50ZXJzZWN0TGluZShsaW5lLCB0YXJnZXQpIHtcblx0XHRjb25zdCBkaXJlY3Rpb24gPSBsaW5lLmRlbHRhKF92ZWN0b3IxKTtcblx0XHRjb25zdCBkZW5vbWluYXRvciA9IHRoaXMubm9ybWFsLmRvdChkaXJlY3Rpb24pO1xuXG5cdFx0aWYgKGRlbm9taW5hdG9yID09PSAwKSB7XG5cdFx0XHQvLyBsaW5lIGlzIGNvcGxhbmFyLCByZXR1cm4gb3JpZ2luXG5cdFx0XHRpZiAodGhpcy5kaXN0YW5jZVRvUG9pbnQobGluZS5zdGFydCkgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGxpbmUuc3RhcnQpO1xuXHRcdFx0fSAvLyBVbnN1cmUgaWYgdGhpcyBpcyB0aGUgY29ycmVjdCBtZXRob2QgdG8gaGFuZGxlIHRoaXMgY2FzZS5cblxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCB0ID0gLShsaW5lLnN0YXJ0LmRvdCh0aGlzLm5vcm1hbCkgKyB0aGlzLmNvbnN0YW50KSAvIGRlbm9taW5hdG9yO1xuXG5cdFx0aWYgKHQgPCAwIHx8IHQgPiAxKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcih0KS5hZGQobGluZS5zdGFydCk7XG5cdH1cblxuXHRpbnRlcnNlY3RzTGluZShsaW5lKSB7XG5cdFx0Ly8gTm90ZTogdGhpcyB0ZXN0cyBpZiBhIGxpbmUgaW50ZXJzZWN0cyB0aGUgcGxhbmUsIG5vdCB3aGV0aGVyIGl0IChvciBpdHMgZW5kLXBvaW50cykgYXJlIGNvcGxhbmFyIHdpdGggaXQuXG5cdFx0Y29uc3Qgc3RhcnRTaWduID0gdGhpcy5kaXN0YW5jZVRvUG9pbnQobGluZS5zdGFydCk7XG5cdFx0Y29uc3QgZW5kU2lnbiA9IHRoaXMuZGlzdGFuY2VUb1BvaW50KGxpbmUuZW5kKTtcblx0XHRyZXR1cm4gc3RhcnRTaWduIDwgMCAmJiBlbmRTaWduID4gMCB8fCBlbmRTaWduIDwgMCAmJiBzdGFydFNpZ24gPiAwO1xuXHR9XG5cblx0aW50ZXJzZWN0c0JveChib3gpIHtcblx0XHRyZXR1cm4gYm94LmludGVyc2VjdHNQbGFuZSh0aGlzKTtcblx0fVxuXG5cdGludGVyc2VjdHNTcGhlcmUoc3BoZXJlKSB7XG5cdFx0cmV0dXJuIHNwaGVyZS5pbnRlcnNlY3RzUGxhbmUodGhpcyk7XG5cdH1cblxuXHRjb3BsYW5hclBvaW50KHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQuY29weSh0aGlzLm5vcm1hbCkubXVsdGlwbHlTY2FsYXIoLXRoaXMuY29uc3RhbnQpO1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG1hdHJpeCwgb3B0aW9uYWxOb3JtYWxNYXRyaXgpIHtcblx0XHRjb25zdCBub3JtYWxNYXRyaXggPSBvcHRpb25hbE5vcm1hbE1hdHJpeCB8fCBfbm9ybWFsTWF0cml4LmdldE5vcm1hbE1hdHJpeChtYXRyaXgpO1xuXG5cdFx0Y29uc3QgcmVmZXJlbmNlUG9pbnQgPSB0aGlzLmNvcGxhbmFyUG9pbnQoX3ZlY3RvcjEpLmFwcGx5TWF0cml4NChtYXRyaXgpO1xuXHRcdGNvbnN0IG5vcm1hbCA9IHRoaXMubm9ybWFsLmFwcGx5TWF0cml4Myhub3JtYWxNYXRyaXgpLm5vcm1hbGl6ZSgpO1xuXHRcdHRoaXMuY29uc3RhbnQgPSAtcmVmZXJlbmNlUG9pbnQuZG90KG5vcm1hbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmFuc2xhdGUob2Zmc2V0KSB7XG5cdFx0dGhpcy5jb25zdGFudCAtPSBvZmZzZXQuZG90KHRoaXMubm9ybWFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhwbGFuZSkge1xuXHRcdHJldHVybiBwbGFuZS5ub3JtYWwuZXF1YWxzKHRoaXMubm9ybWFsKSAmJiBwbGFuZS5jb25zdGFudCA9PT0gdGhpcy5jb25zdGFudDtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxufVxuXG5jb25zdCBfdmVjdG9yID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9zZWdDZW50ZXIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3NlZ0RpciA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZGlmZiA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZWRnZTEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2VkZ2UyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9ub3JtYWwgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY2xhc3MgUmF5IHtcblx0Y29uc3RydWN0b3Iob3JpZ2luID0gbmV3IFZlY3RvcjMoKSwgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMCwgLTEpKSB7XG5cdFx0dGhpcy5vcmlnaW4gPSBvcmlnaW47XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdH1cblxuXHRzZXQob3JpZ2luLCBkaXJlY3Rpb24pIHtcblx0XHR0aGlzLm9yaWdpbi5jb3B5KG9yaWdpbik7XG5cdFx0dGhpcy5kaXJlY3Rpb24uY29weShkaXJlY3Rpb24pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShyYXkpIHtcblx0XHR0aGlzLm9yaWdpbi5jb3B5KHJheS5vcmlnaW4pO1xuXHRcdHRoaXMuZGlyZWN0aW9uLmNvcHkocmF5LmRpcmVjdGlvbik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhdCh0LCB0YXJnZXQgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KHRoaXMuZGlyZWN0aW9uKS5tdWx0aXBseVNjYWxhcih0KS5hZGQodGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0bG9va0F0KHYpIHtcblx0XHR0aGlzLmRpcmVjdGlvbi5jb3B5KHYpLnN1Yih0aGlzLm9yaWdpbikubm9ybWFsaXplKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyZWNhc3QodCkge1xuXHRcdHRoaXMub3JpZ2luLmNvcHkodGhpcy5hdCh0LCBfdmVjdG9yKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9zZXN0UG9pbnRUb1BvaW50KHBvaW50LCB0YXJnZXQgPSBuZXcgVmVjdG9yMygpKSB7XG5cdFx0dGFyZ2V0LnN1YlZlY3RvcnMocG9pbnQsIHRoaXMub3JpZ2luKTtcblx0XHRjb25zdCBkaXJlY3Rpb25EaXN0YW5jZSA9IHRhcmdldC5kb3QodGhpcy5kaXJlY3Rpb24pO1xuXG5cdFx0aWYgKGRpcmVjdGlvbkRpc3RhbmNlIDwgMCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KHRoaXMub3JpZ2luKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5kaXJlY3Rpb24pLm11bHRpcGx5U2NhbGFyKGRpcmVjdGlvbkRpc3RhbmNlKS5hZGQodGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3FUb1BvaW50KHBvaW50KSk7XG5cdH1cblxuXHRkaXN0YW5jZVNxVG9Qb2ludChwb2ludCkge1xuXHRcdGNvbnN0IGRpcmVjdGlvbkRpc3RhbmNlID0gX3ZlY3Rvci5zdWJWZWN0b3JzKHBvaW50LCB0aGlzLm9yaWdpbikuZG90KHRoaXMuZGlyZWN0aW9uKTsgLy8gcG9pbnQgYmVoaW5kIHRoZSByYXlcblxuXG5cdFx0aWYgKGRpcmVjdGlvbkRpc3RhbmNlIDwgMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luLmRpc3RhbmNlVG9TcXVhcmVkKHBvaW50KTtcblx0XHR9XG5cblx0XHRfdmVjdG9yLmNvcHkodGhpcy5kaXJlY3Rpb24pLm11bHRpcGx5U2NhbGFyKGRpcmVjdGlvbkRpc3RhbmNlKS5hZGQodGhpcy5vcmlnaW4pO1xuXG5cdFx0cmV0dXJuIF92ZWN0b3IuZGlzdGFuY2VUb1NxdWFyZWQocG9pbnQpO1xuXHR9XG5cblx0ZGlzdGFuY2VTcVRvU2VnbWVudCh2MCwgdjEsIG9wdGlvbmFsUG9pbnRPblJheSwgb3B0aW9uYWxQb2ludE9uU2VnbWVudCkge1xuXHRcdC8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Btam9uaWFrL0dlb21ldHJpY1Rvb2xzL2Jsb2IvbWFzdGVyL0dURW5naW5lL0luY2x1ZGUvTWF0aGVtYXRpY3MvR3RlRGlzdFJheVNlZ21lbnQuaFxuXHRcdC8vIEl0IHJldHVybnMgdGhlIG1pbiBkaXN0YW5jZSBiZXR3ZWVuIHRoZSByYXkgYW5kIHRoZSBzZWdtZW50XG5cdFx0Ly8gZGVmaW5lZCBieSB2MCBhbmQgdjFcblx0XHQvLyBJdCBjYW4gYWxzbyBzZXQgdHdvIG9wdGlvbmFsIHRhcmdldHMgOlxuXHRcdC8vIC0gVGhlIGNsb3Nlc3QgcG9pbnQgb24gdGhlIHJheVxuXHRcdC8vIC0gVGhlIGNsb3Nlc3QgcG9pbnQgb24gdGhlIHNlZ21lbnRcblx0XHRfc2VnQ2VudGVyLmNvcHkodjApLmFkZCh2MSkubXVsdGlwbHlTY2FsYXIoMC41KTtcblxuXHRcdF9zZWdEaXIuY29weSh2MSkuc3ViKHYwKS5ub3JtYWxpemUoKTtcblxuXHRcdF9kaWZmLmNvcHkodGhpcy5vcmlnaW4pLnN1Yihfc2VnQ2VudGVyKTtcblxuXHRcdGNvbnN0IHNlZ0V4dGVudCA9IHYwLmRpc3RhbmNlVG8odjEpICogMC41O1xuXHRcdGNvbnN0IGEwMSA9IC10aGlzLmRpcmVjdGlvbi5kb3QoX3NlZ0Rpcik7XG5cblx0XHRjb25zdCBiMCA9IF9kaWZmLmRvdCh0aGlzLmRpcmVjdGlvbik7XG5cblx0XHRjb25zdCBiMSA9IC1fZGlmZi5kb3QoX3NlZ0Rpcik7XG5cblx0XHRjb25zdCBjID0gX2RpZmYubGVuZ3RoU3EoKTtcblxuXHRcdGNvbnN0IGRldCA9IE1hdGguYWJzKDEgLSBhMDEgKiBhMDEpO1xuXHRcdGxldCBzMCwgczEsIHNxckRpc3QsIGV4dERldDtcblxuXHRcdGlmIChkZXQgPiAwKSB7XG5cdFx0XHQvLyBUaGUgcmF5IGFuZCBzZWdtZW50IGFyZSBub3QgcGFyYWxsZWwuXG5cdFx0XHRzMCA9IGEwMSAqIGIxIC0gYjA7XG5cdFx0XHRzMSA9IGEwMSAqIGIwIC0gYjE7XG5cdFx0XHRleHREZXQgPSBzZWdFeHRlbnQgKiBkZXQ7XG5cblx0XHRcdGlmIChzMCA+PSAwKSB7XG5cdFx0XHRcdGlmIChzMSA+PSAtZXh0RGV0KSB7XG5cdFx0XHRcdFx0aWYgKHMxIDw9IGV4dERldCkge1xuXHRcdFx0XHRcdFx0Ly8gcmVnaW9uIDBcblx0XHRcdFx0XHRcdC8vIE1pbmltdW0gYXQgaW50ZXJpb3IgcG9pbnRzIG9mIHJheSBhbmQgc2VnbWVudC5cblx0XHRcdFx0XHRcdGNvbnN0IGludkRldCA9IDEgLyBkZXQ7XG5cdFx0XHRcdFx0XHRzMCAqPSBpbnZEZXQ7XG5cdFx0XHRcdFx0XHRzMSAqPSBpbnZEZXQ7XG5cdFx0XHRcdFx0XHRzcXJEaXN0ID0gczAgKiAoczAgKyBhMDEgKiBzMSArIDIgKiBiMCkgKyBzMSAqIChhMDEgKiBzMCArIHMxICsgMiAqIGIxKSArIGM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHJlZ2lvbiAxXG5cdFx0XHRcdFx0XHRzMSA9IHNlZ0V4dGVudDtcblx0XHRcdFx0XHRcdHMwID0gTWF0aC5tYXgoMCwgLShhMDEgKiBzMSArIGIwKSk7XG5cdFx0XHRcdFx0XHRzcXJEaXN0ID0gLXMwICogczAgKyBzMSAqIChzMSArIDIgKiBiMSkgKyBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZWdpb24gNVxuXHRcdFx0XHRcdHMxID0gLXNlZ0V4dGVudDtcblx0XHRcdFx0XHRzMCA9IE1hdGgubWF4KDAsIC0oYTAxICogczEgKyBiMCkpO1xuXHRcdFx0XHRcdHNxckRpc3QgPSAtczAgKiBzMCArIHMxICogKHMxICsgMiAqIGIxKSArIGM7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChzMSA8PSAtZXh0RGV0KSB7XG5cdFx0XHRcdFx0Ly8gcmVnaW9uIDRcblx0XHRcdFx0XHRzMCA9IE1hdGgubWF4KDAsIC0oLWEwMSAqIHNlZ0V4dGVudCArIGIwKSk7XG5cdFx0XHRcdFx0czEgPSBzMCA+IDAgPyAtc2VnRXh0ZW50IDogTWF0aC5taW4oTWF0aC5tYXgoLXNlZ0V4dGVudCwgLWIxKSwgc2VnRXh0ZW50KTtcblx0XHRcdFx0XHRzcXJEaXN0ID0gLXMwICogczAgKyBzMSAqIChzMSArIDIgKiBiMSkgKyBjO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHMxIDw9IGV4dERldCkge1xuXHRcdFx0XHRcdC8vIHJlZ2lvbiAzXG5cdFx0XHRcdFx0czAgPSAwO1xuXHRcdFx0XHRcdHMxID0gTWF0aC5taW4oTWF0aC5tYXgoLXNlZ0V4dGVudCwgLWIxKSwgc2VnRXh0ZW50KTtcblx0XHRcdFx0XHRzcXJEaXN0ID0gczEgKiAoczEgKyAyICogYjEpICsgYztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZWdpb24gMlxuXHRcdFx0XHRcdHMwID0gTWF0aC5tYXgoMCwgLShhMDEgKiBzZWdFeHRlbnQgKyBiMCkpO1xuXHRcdFx0XHRcdHMxID0gczAgPiAwID8gc2VnRXh0ZW50IDogTWF0aC5taW4oTWF0aC5tYXgoLXNlZ0V4dGVudCwgLWIxKSwgc2VnRXh0ZW50KTtcblx0XHRcdFx0XHRzcXJEaXN0ID0gLXMwICogczAgKyBzMSAqIChzMSArIDIgKiBiMSkgKyBjO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFJheSBhbmQgc2VnbWVudCBhcmUgcGFyYWxsZWwuXG5cdFx0XHRzMSA9IGEwMSA+IDAgPyAtc2VnRXh0ZW50IDogc2VnRXh0ZW50O1xuXHRcdFx0czAgPSBNYXRoLm1heCgwLCAtKGEwMSAqIHMxICsgYjApKTtcblx0XHRcdHNxckRpc3QgPSAtczAgKiBzMCArIHMxICogKHMxICsgMiAqIGIxKSArIGM7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbmFsUG9pbnRPblJheSkge1xuXHRcdFx0b3B0aW9uYWxQb2ludE9uUmF5LmNvcHkodGhpcy5kaXJlY3Rpb24pLm11bHRpcGx5U2NhbGFyKHMwKS5hZGQodGhpcy5vcmlnaW4pO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25hbFBvaW50T25TZWdtZW50KSB7XG5cdFx0XHRvcHRpb25hbFBvaW50T25TZWdtZW50LmNvcHkoX3NlZ0RpcikubXVsdGlwbHlTY2FsYXIoczEpLmFkZChfc2VnQ2VudGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3FyRGlzdDtcblx0fVxuXG5cdGludGVyc2VjdFNwaGVyZShzcGhlcmUsIHRhcmdldCA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHRfdmVjdG9yLnN1YlZlY3RvcnMoc3BoZXJlLmNlbnRlciwgdGhpcy5vcmlnaW4pO1xuXG5cdFx0Y29uc3QgdGNhID0gX3ZlY3Rvci5kb3QodGhpcy5kaXJlY3Rpb24pO1xuXG5cdFx0Y29uc3QgZDIgPSBfdmVjdG9yLmRvdChfdmVjdG9yKSAtIHRjYSAqIHRjYTtcblx0XHRjb25zdCByYWRpdXMyID0gc3BoZXJlLnJhZGl1cyAqIHNwaGVyZS5yYWRpdXM7XG5cdFx0aWYgKGQyID4gcmFkaXVzMikgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgdGhjID0gTWF0aC5zcXJ0KHJhZGl1czIgLSBkMik7IC8vIHQwID0gZmlyc3QgaW50ZXJzZWN0IHBvaW50IC0gZW50cmFuY2Ugb24gZnJvbnQgb2Ygc3BoZXJlXG5cblx0XHRjb25zdCB0MCA9IHRjYSAtIHRoYzsgLy8gdDEgPSBzZWNvbmQgaW50ZXJzZWN0IHBvaW50IC0gZXhpdCBwb2ludCBvbiBiYWNrIG9mIHNwaGVyZVxuXG5cdFx0Y29uc3QgdDEgPSB0Y2EgKyB0aGM7IC8vIHRlc3QgdG8gc2VlIGlmIGJvdGggdDAgYW5kIHQxIGFyZSBiZWhpbmQgdGhlIHJheSAtIGlmIHNvLCByZXR1cm4gbnVsbFxuXG5cdFx0aWYgKHQwIDwgMCAmJiB0MSA8IDApIHJldHVybiBudWxsOyAvLyB0ZXN0IHRvIHNlZSBpZiB0MCBpcyBiZWhpbmQgdGhlIHJheTpcblx0XHQvLyBpZiBpdCBpcywgdGhlIHJheSBpcyBpbnNpZGUgdGhlIHNwaGVyZSwgc28gcmV0dXJuIHRoZSBzZWNvbmQgZXhpdCBwb2ludCBzY2FsZWQgYnkgdDEsXG5cdFx0Ly8gaW4gb3JkZXIgdG8gYWx3YXlzIHJldHVybiBhbiBpbnRlcnNlY3QgcG9pbnQgdGhhdCBpcyBpbiBmcm9udCBvZiB0aGUgcmF5LlxuXG5cdFx0aWYgKHQwIDwgMCkgcmV0dXJuIHRoaXMuYXQodDEsIHRhcmdldCk7IC8vIGVsc2UgdDAgaXMgaW4gZnJvbnQgb2YgdGhlIHJheSwgc28gcmV0dXJuIHRoZSBmaXJzdCBjb2xsaXNpb24gcG9pbnQgc2NhbGVkIGJ5IHQwXG5cblx0XHRyZXR1cm4gdGhpcy5hdCh0MCwgdGFyZ2V0KTtcblx0fVxuXG5cdGludGVyc2VjdHNTcGhlcmUoc3BoZXJlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlzdGFuY2VTcVRvUG9pbnQoc3BoZXJlLmNlbnRlcikgPD0gc3BoZXJlLnJhZGl1cyAqIHNwaGVyZS5yYWRpdXM7XG5cdH1cblxuXHRkaXN0YW5jZVRvUGxhbmUocGxhbmUpIHtcblx0XHRjb25zdCBkZW5vbWluYXRvciA9IHBsYW5lLm5vcm1hbC5kb3QodGhpcy5kaXJlY3Rpb24pO1xuXG5cdFx0aWYgKGRlbm9taW5hdG9yID09PSAwKSB7XG5cdFx0XHQvLyBsaW5lIGlzIGNvcGxhbmFyLCByZXR1cm4gb3JpZ2luXG5cdFx0XHRpZiAocGxhbmUuZGlzdGFuY2VUb1BvaW50KHRoaXMub3JpZ2luKSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH0gLy8gTnVsbCBpcyBwcmVmZXJhYmxlIHRvIHVuZGVmaW5lZCBzaW5jZSB1bmRlZmluZWQgbWVhbnMuLi4uIGl0IGlzIHVuZGVmaW5lZFxuXG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IHQgPSAtKHRoaXMub3JpZ2luLmRvdChwbGFuZS5ub3JtYWwpICsgcGxhbmUuY29uc3RhbnQpIC8gZGVub21pbmF0b3I7IC8vIFJldHVybiBpZiB0aGUgcmF5IG5ldmVyIGludGVyc2VjdHMgdGhlIHBsYW5lXG5cblx0XHRyZXR1cm4gdCA+PSAwID8gdCA6IG51bGw7XG5cdH1cblxuXHRpbnRlcnNlY3RQbGFuZShwbGFuZSwgdGFyZ2V0KSB7XG5cdFx0Y29uc3QgdCA9IHRoaXMuZGlzdGFuY2VUb1BsYW5lKHBsYW5lKTtcblxuXHRcdGlmICh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5hdCh0LCB0YXJnZXQpO1xuXHR9XG5cblx0aW50ZXJzZWN0c1BsYW5lKHBsYW5lKSB7XG5cdFx0Ly8gY2hlY2sgaWYgdGhlIHJheSBsaWVzIG9uIHRoZSBwbGFuZSBmaXJzdFxuXHRcdGNvbnN0IGRpc3RUb1BvaW50ID0gcGxhbmUuZGlzdGFuY2VUb1BvaW50KHRoaXMub3JpZ2luKTtcblxuXHRcdGlmIChkaXN0VG9Qb2ludCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVub21pbmF0b3IgPSBwbGFuZS5ub3JtYWwuZG90KHRoaXMuZGlyZWN0aW9uKTtcblxuXHRcdGlmIChkZW5vbWluYXRvciAqIGRpc3RUb1BvaW50IDwgMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSAvLyByYXkgb3JpZ2luIGlzIGJlaGluZCB0aGUgcGxhbmUgKGFuZCBpcyBwb2ludGluZyBiZWhpbmQgaXQpXG5cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGludGVyc2VjdEJveChib3gsIHRhcmdldCkge1xuXHRcdGxldCB0bWluLCB0bWF4LCB0eW1pbiwgdHltYXgsIHR6bWluLCB0em1heDtcblx0XHRjb25zdCBpbnZkaXJ4ID0gMSAvIHRoaXMuZGlyZWN0aW9uLngsXG5cdFx0XHRcdFx0aW52ZGlyeSA9IDEgLyB0aGlzLmRpcmVjdGlvbi55LFxuXHRcdFx0XHRcdGludmRpcnogPSAxIC8gdGhpcy5kaXJlY3Rpb24uejtcblx0XHRjb25zdCBvcmlnaW4gPSB0aGlzLm9yaWdpbjtcblxuXHRcdGlmIChpbnZkaXJ4ID49IDApIHtcblx0XHRcdHRtaW4gPSAoYm94Lm1pbi54IC0gb3JpZ2luLngpICogaW52ZGlyeDtcblx0XHRcdHRtYXggPSAoYm94Lm1heC54IC0gb3JpZ2luLngpICogaW52ZGlyeDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG1pbiA9IChib3gubWF4LnggLSBvcmlnaW4ueCkgKiBpbnZkaXJ4O1xuXHRcdFx0dG1heCA9IChib3gubWluLnggLSBvcmlnaW4ueCkgKiBpbnZkaXJ4O1xuXHRcdH1cblxuXHRcdGlmIChpbnZkaXJ5ID49IDApIHtcblx0XHRcdHR5bWluID0gKGJveC5taW4ueSAtIG9yaWdpbi55KSAqIGludmRpcnk7XG5cdFx0XHR0eW1heCA9IChib3gubWF4LnkgLSBvcmlnaW4ueSkgKiBpbnZkaXJ5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0eW1pbiA9IChib3gubWF4LnkgLSBvcmlnaW4ueSkgKiBpbnZkaXJ5O1xuXHRcdFx0dHltYXggPSAoYm94Lm1pbi55IC0gb3JpZ2luLnkpICogaW52ZGlyeTtcblx0XHR9XG5cblx0XHRpZiAodG1pbiA+IHR5bWF4IHx8IHR5bWluID4gdG1heCkgcmV0dXJuIG51bGw7IC8vIFRoZXNlIGxpbmVzIGFsc28gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRtaW4gb3IgdG1heCBpcyBOYU5cblx0XHQvLyAocmVzdWx0IG9mIDAgKiBJbmZpbml0eSkuIHggIT09IHggcmV0dXJucyB0cnVlIGlmIHggaXMgTmFOXG5cblx0XHRpZiAodHltaW4gPiB0bWluIHx8IHRtaW4gIT09IHRtaW4pIHRtaW4gPSB0eW1pbjtcblx0XHRpZiAodHltYXggPCB0bWF4IHx8IHRtYXggIT09IHRtYXgpIHRtYXggPSB0eW1heDtcblxuXHRcdGlmIChpbnZkaXJ6ID49IDApIHtcblx0XHRcdHR6bWluID0gKGJveC5taW4ueiAtIG9yaWdpbi56KSAqIGludmRpcno7XG5cdFx0XHR0em1heCA9IChib3gubWF4LnogLSBvcmlnaW4ueikgKiBpbnZkaXJ6O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0em1pbiA9IChib3gubWF4LnogLSBvcmlnaW4ueikgKiBpbnZkaXJ6O1xuXHRcdFx0dHptYXggPSAoYm94Lm1pbi56IC0gb3JpZ2luLnopICogaW52ZGlyejtcblx0XHR9XG5cblx0XHRpZiAodG1pbiA+IHR6bWF4IHx8IHR6bWluID4gdG1heCkgcmV0dXJuIG51bGw7XG5cdFx0aWYgKHR6bWluID4gdG1pbiB8fCB0bWluICE9PSB0bWluKSB0bWluID0gdHptaW47XG5cdFx0aWYgKHR6bWF4IDwgdG1heCB8fCB0bWF4ICE9PSB0bWF4KSB0bWF4ID0gdHptYXg7IC8vcmV0dXJuIHBvaW50IGNsb3Nlc3QgdG8gdGhlIHJheSAocG9zaXRpdmUgc2lkZSlcblxuXHRcdGlmICh0bWF4IDwgMCkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHRoaXMuYXQodG1pbiA+PSAwID8gdG1pbiA6IHRtYXgsIHRhcmdldCk7XG5cdH1cblxuXHRpbnRlcnNlY3RzQm94KGJveCkge1xuXHRcdHJldHVybiB0aGlzLmludGVyc2VjdEJveChib3gsIF92ZWN0b3IpICE9PSBudWxsO1xuXHR9XG5cblx0aW50ZXJzZWN0VHJpYW5nbGUoYSwgYiwgYywgYmFja2ZhY2VDdWxsaW5nLCB0YXJnZXQpIHtcblx0XHQvLyBDb21wdXRlIHRoZSBvZmZzZXQgb3JpZ2luLCBlZGdlcywgYW5kIG5vcm1hbC5cblx0XHQvLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9wbWpvbmlhay9HZW9tZXRyaWNUb29scy9ibG9iL21hc3Rlci9HVEVuZ2luZS9JbmNsdWRlL01hdGhlbWF0aWNzL0d0ZUludHJSYXkzVHJpYW5nbGUzLmhcblx0XHRfZWRnZTEuc3ViVmVjdG9ycyhiLCBhKTtcblxuXHRcdF9lZGdlMi5zdWJWZWN0b3JzKGMsIGEpO1xuXG5cdFx0X25vcm1hbC5jcm9zc1ZlY3RvcnMoX2VkZ2UxLCBfZWRnZTIpOyAvLyBTb2x2ZSBRICsgdCpEID0gYjEqRTEgKyBiMipFMiAoUSA9IGtEaWZmLCBEID0gcmF5IGRpcmVjdGlvbixcblx0XHQvLyBFMSA9IGtFZGdlMSwgRTIgPSBrRWRnZTIsIE4gPSBDcm9zcyhFMSxFMikpIGJ5XG5cdFx0Ly9cdCB8RG90KEQsTil8KmIxID0gc2lnbihEb3QoRCxOKSkqRG90KEQsQ3Jvc3MoUSxFMikpXG5cdFx0Ly9cdCB8RG90KEQsTil8KmIyID0gc2lnbihEb3QoRCxOKSkqRG90KEQsQ3Jvc3MoRTEsUSkpXG5cdFx0Ly9cdCB8RG90KEQsTil8KnQgPSAtc2lnbihEb3QoRCxOKSkqRG90KFEsTilcblxuXG5cdFx0bGV0IERkTiA9IHRoaXMuZGlyZWN0aW9uLmRvdChfbm9ybWFsKTtcblx0XHRsZXQgc2lnbjtcblxuXHRcdGlmIChEZE4gPiAwKSB7XG5cdFx0XHRpZiAoYmFja2ZhY2VDdWxsaW5nKSByZXR1cm4gbnVsbDtcblx0XHRcdHNpZ24gPSAxO1xuXHRcdH0gZWxzZSBpZiAoRGROIDwgMCkge1xuXHRcdFx0c2lnbiA9IC0xO1xuXHRcdFx0RGROID0gLURkTjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0X2RpZmYuc3ViVmVjdG9ycyh0aGlzLm9yaWdpbiwgYSk7XG5cblx0XHRjb25zdCBEZFF4RTIgPSBzaWduICogdGhpcy5kaXJlY3Rpb24uZG90KF9lZGdlMi5jcm9zc1ZlY3RvcnMoX2RpZmYsIF9lZGdlMikpOyAvLyBiMSA8IDAsIG5vIGludGVyc2VjdGlvblxuXG5cdFx0aWYgKERkUXhFMiA8IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IERkRTF4USA9IHNpZ24gKiB0aGlzLmRpcmVjdGlvbi5kb3QoX2VkZ2UxLmNyb3NzKF9kaWZmKSk7IC8vIGIyIDwgMCwgbm8gaW50ZXJzZWN0aW9uXG5cblx0XHRpZiAoRGRFMXhRIDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSAvLyBiMStiMiA+IDEsIG5vIGludGVyc2VjdGlvblxuXG5cblx0XHRpZiAoRGRReEUyICsgRGRFMXhRID4gRGROKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9IC8vIExpbmUgaW50ZXJzZWN0cyB0cmlhbmdsZSwgY2hlY2sgaWYgcmF5IGRvZXMuXG5cblxuXHRcdGNvbnN0IFFkTiA9IC1zaWduICogX2RpZmYuZG90KF9ub3JtYWwpOyAvLyB0IDwgMCwgbm8gaW50ZXJzZWN0aW9uXG5cblxuXHRcdGlmIChRZE4gPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9IC8vIFJheSBpbnRlcnNlY3RzIHRyaWFuZ2xlLlxuXG5cblx0XHRyZXR1cm4gdGhpcy5hdChRZE4gLyBEZE4sIHRhcmdldCk7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobWF0cml4NCkge1xuXHRcdHRoaXMub3JpZ2luLmFwcGx5TWF0cml4NChtYXRyaXg0KTtcblx0XHR0aGlzLmRpcmVjdGlvbi50cmFuc2Zvcm1EaXJlY3Rpb24obWF0cml4NCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMocmF5KSB7XG5cdFx0cmV0dXJuIHJheS5vcmlnaW4uZXF1YWxzKHRoaXMub3JpZ2luKSAmJiByYXkuZGlyZWN0aW9uLmVxdWFscyh0aGlzLmRpcmVjdGlvbik7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cbn1cblxuY29uc3QgX2JveCA9IC8qQF9fUFVSRV9fKi9uZXcgQm94MygpO1xuXG5jb25zdCBfdjEkMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdG9GYXJ0aGVzdFBvaW50ID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF90b1BvaW50ID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNsYXNzIFNwaGVyZSB7XG5cdGNvbnN0cnVjdG9yKGNlbnRlciA9IG5ldyBWZWN0b3IzKCksIHJhZGl1cyA9IC0xKSB7XG5cdFx0dGhpcy5jZW50ZXIgPSBjZW50ZXI7XG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cdH1cblxuXHRzZXQoY2VudGVyLCByYWRpdXMpIHtcblx0XHR0aGlzLmNlbnRlci5jb3B5KGNlbnRlcik7XG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tUG9pbnRzKHBvaW50cywgb3B0aW9uYWxDZW50ZXIpIHtcblx0XHRjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcblxuXHRcdGlmIChvcHRpb25hbENlbnRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjZW50ZXIuY29weShvcHRpb25hbENlbnRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9ib3guc2V0RnJvbVBvaW50cyhwb2ludHMpLmdldENlbnRlcihjZW50ZXIpO1xuXHRcdH1cblxuXHRcdGxldCBtYXhSYWRpdXNTcSA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMCwgaWwgPSBwb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0bWF4UmFkaXVzU3EgPSBNYXRoLm1heChtYXhSYWRpdXNTcSwgY2VudGVyLmRpc3RhbmNlVG9TcXVhcmVkKHBvaW50c1tpXSkpO1xuXHRcdH1cblxuXHRcdHRoaXMucmFkaXVzID0gTWF0aC5zcXJ0KG1heFJhZGl1c1NxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkoc3BoZXJlKSB7XG5cdFx0dGhpcy5jZW50ZXIuY29weShzcGhlcmUuY2VudGVyKTtcblx0XHR0aGlzLnJhZGl1cyA9IHNwaGVyZS5yYWRpdXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0VtcHR5KCkge1xuXHRcdHJldHVybiB0aGlzLnJhZGl1cyA8IDA7XG5cdH1cblxuXHRtYWtlRW1wdHkoKSB7XG5cdFx0dGhpcy5jZW50ZXIuc2V0KDAsIDAsIDApO1xuXHRcdHRoaXMucmFkaXVzID0gLTE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb250YWluc1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIHBvaW50LmRpc3RhbmNlVG9TcXVhcmVkKHRoaXMuY2VudGVyKSA8PSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIHBvaW50LmRpc3RhbmNlVG8odGhpcy5jZW50ZXIpIC0gdGhpcy5yYWRpdXM7XG5cdH1cblxuXHRpbnRlcnNlY3RzU3BoZXJlKHNwaGVyZSkge1xuXHRcdGNvbnN0IHJhZGl1c1N1bSA9IHRoaXMucmFkaXVzICsgc3BoZXJlLnJhZGl1cztcblx0XHRyZXR1cm4gc3BoZXJlLmNlbnRlci5kaXN0YW5jZVRvU3F1YXJlZCh0aGlzLmNlbnRlcikgPD0gcmFkaXVzU3VtICogcmFkaXVzU3VtO1xuXHR9XG5cblx0aW50ZXJzZWN0c0JveChib3gpIHtcblx0XHRyZXR1cm4gYm94LmludGVyc2VjdHNTcGhlcmUodGhpcyk7XG5cdH1cblxuXHRpbnRlcnNlY3RzUGxhbmUocGxhbmUpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnMocGxhbmUuZGlzdGFuY2VUb1BvaW50KHRoaXMuY2VudGVyKSkgPD0gdGhpcy5yYWRpdXM7XG5cdH1cblxuXHRjbGFtcFBvaW50KHBvaW50LCB0YXJnZXQpIHtcblx0XHRjb25zdCBkZWx0YUxlbmd0aFNxID0gdGhpcy5jZW50ZXIuZGlzdGFuY2VUb1NxdWFyZWQocG9pbnQpO1xuXHRcdHRhcmdldC5jb3B5KHBvaW50KTtcblxuXHRcdGlmIChkZWx0YUxlbmd0aFNxID4gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykge1xuXHRcdFx0dGFyZ2V0LnN1Yih0aGlzLmNlbnRlcikubm9ybWFsaXplKCk7XG5cdFx0XHR0YXJnZXQubXVsdGlwbHlTY2FsYXIodGhpcy5yYWRpdXMpLmFkZCh0aGlzLmNlbnRlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGdldEJvdW5kaW5nQm94KHRhcmdldCkge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0Ly8gRW1wdHkgc3BoZXJlIHByb2R1Y2VzIGVtcHR5IGJvdW5kaW5nIGJveFxuXHRcdFx0dGFyZ2V0Lm1ha2VFbXB0eSgpO1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cblx0XHR0YXJnZXQuc2V0KHRoaXMuY2VudGVyLCB0aGlzLmNlbnRlcik7XG5cdFx0dGFyZ2V0LmV4cGFuZEJ5U2NhbGFyKHRoaXMucmFkaXVzKTtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG1hdHJpeCkge1xuXHRcdHRoaXMuY2VudGVyLmFwcGx5TWF0cml4NChtYXRyaXgpO1xuXHRcdHRoaXMucmFkaXVzID0gdGhpcy5yYWRpdXMgKiBtYXRyaXguZ2V0TWF4U2NhbGVPbkF4aXMoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyYW5zbGF0ZShvZmZzZXQpIHtcblx0XHR0aGlzLmNlbnRlci5hZGQob2Zmc2V0KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4cGFuZEJ5UG9pbnQocG9pbnQpIHtcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdHRoaXMuY2VudGVyLmNvcHkocG9pbnQpO1xuXHRcdFx0dGhpcy5yYWRpdXMgPSAwO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSAvLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWovTWF0aEdlb0xpYi9ibG9iLzI5NDBiOTliOTljZmU1NzVkZDQ1MTAzZWYyMGY0MDE5ZGVlMTViNTQvc3JjL0dlb21ldHJ5L1NwaGVyZS5jcHAjTDY0OS1MNjcxXG5cblxuXHRcdF90b1BvaW50LnN1YlZlY3RvcnMocG9pbnQsIHRoaXMuY2VudGVyKTtcblxuXHRcdGNvbnN0IGxlbmd0aFNxID0gX3RvUG9pbnQubGVuZ3RoU3EoKTtcblxuXHRcdGlmIChsZW5ndGhTcSA+IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpIHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydChsZW5ndGhTcSk7XG5cdFx0XHRjb25zdCBtaXNzaW5nUmFkaXVzSGFsZiA9IChsZW5ndGggLSB0aGlzLnJhZGl1cykgKiAwLjU7IC8vIE51ZGdlIHRoaXMgc3BoZXJlIHRvd2FyZHMgdGhlIHRhcmdldCBwb2ludC4gQWRkIGhhbGYgdGhlIG1pc3NpbmcgZGlzdGFuY2UgdG8gcmFkaXVzLFxuXHRcdFx0Ly8gYW5kIHRoZSBvdGhlciBoYWxmIHRvIHBvc2l0aW9uLiBUaGlzIGdpdmVzIGEgdGlnaHRlciBlbmNsb3N1cmUsIGluc3RlYWQgb2YgaWZcblx0XHRcdC8vIHRoZSB3aG9sZSBtaXNzaW5nIGRpc3RhbmNlIHdlcmUganVzdCBhZGRlZCB0byByYWRpdXMuXG5cblx0XHRcdHRoaXMuY2VudGVyLmFkZChfdG9Qb2ludC5tdWx0aXBseVNjYWxhcihtaXNzaW5nUmFkaXVzSGFsZiAvIGxlbmd0aCkpO1xuXHRcdFx0dGhpcy5yYWRpdXMgKz0gbWlzc2luZ1JhZGl1c0hhbGY7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR1bmlvbihzcGhlcmUpIHtcblx0XHQvLyBoYW5kbGUgZW1wdHkgc3BoZXJlIGNhc2VzXG5cdFx0aWYgKHNwaGVyZS5pc0VtcHR5KCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aGlzLmNvcHkoc3BoZXJlKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vanVqL01hdGhHZW9MaWIvYmxvYi8yOTQwYjk5Yjk5Y2ZlNTc1ZGQ0NTEwM2VmMjBmNDAxOWRlZTE1YjU0L3NyYy9HZW9tZXRyeS9TcGhlcmUuY3BwI0w3NTktTDc2OVxuXHRcdC8vIFRvIGVuY2xvc2UgYW5vdGhlciBzcGhlcmUgaW50byB0aGlzIHNwaGVyZSwgd2Ugb25seSBuZWVkIHRvIGVuY2xvc2UgdHdvIHBvaW50czpcblx0XHQvLyAxKSBFbmNsb3NlIHRoZSBmYXJ0aGVzdCBwb2ludCBvbiB0aGUgb3RoZXIgc3BoZXJlIGludG8gdGhpcyBzcGhlcmUuXG5cdFx0Ly8gMikgRW5jbG9zZSB0aGUgb3Bwb3NpdGUgcG9pbnQgb2YgdGhlIGZhcnRoZXN0IHBvaW50IGludG8gdGhpcyBzcGhlcmUuXG5cblxuXHRcdGlmICh0aGlzLmNlbnRlci5lcXVhbHMoc3BoZXJlLmNlbnRlcikgPT09IHRydWUpIHtcblx0XHRcdF90b0ZhcnRoZXN0UG9pbnQuc2V0KDAsIDAsIDEpLm11bHRpcGx5U2NhbGFyKHNwaGVyZS5yYWRpdXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdG9GYXJ0aGVzdFBvaW50LnN1YlZlY3RvcnMoc3BoZXJlLmNlbnRlciwgdGhpcy5jZW50ZXIpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKHNwaGVyZS5yYWRpdXMpO1xuXHRcdH1cblxuXHRcdHRoaXMuZXhwYW5kQnlQb2ludChfdjEkMS5jb3B5KHNwaGVyZS5jZW50ZXIpLmFkZChfdG9GYXJ0aGVzdFBvaW50KSk7XG5cdFx0dGhpcy5leHBhbmRCeVBvaW50KF92MSQxLmNvcHkoc3BoZXJlLmNlbnRlcikuc3ViKF90b0ZhcnRoZXN0UG9pbnQpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhzcGhlcmUpIHtcblx0XHRyZXR1cm4gc3BoZXJlLmNlbnRlci5lcXVhbHModGhpcy5jZW50ZXIpICYmIHNwaGVyZS5yYWRpdXMgPT09IHRoaXMucmFkaXVzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG59XG5cbi8qKlxuICogUmVmOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcGhlcmljYWxfY29vcmRpbmF0ZV9zeXN0ZW1cbiAqXG4gKiBUaGUgcG9sYXIgYW5nbGUgKHBoaSkgaXMgbWVhc3VyZWQgZnJvbSB0aGUgcG9zaXRpdmUgeS1heGlzLiBUaGUgcG9zaXRpdmUgeS1heGlzIGlzIHVwLlxuICogVGhlIGF6aW11dGhhbCBhbmdsZSAodGhldGEpIGlzIG1lYXN1cmVkIGZyb20gdGhlIHBvc2l0aXZlIHotYXhpcy5cbiAqL1xuXG5jbGFzcyBTcGhlcmljYWwge1xuXHRjb25zdHJ1Y3RvcihyYWRpdXMgPSAxLCBwaGkgPSAwLCB0aGV0YSA9IDApIHtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0XHR0aGlzLnBoaSA9IHBoaTsgLy8gcG9sYXIgYW5nbGVcblxuXHRcdHRoaXMudGhldGEgPSB0aGV0YTsgLy8gYXppbXV0aGFsIGFuZ2xlXG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldChyYWRpdXMsIHBoaSwgdGhldGEpIHtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0XHR0aGlzLnBoaSA9IHBoaTtcblx0XHR0aGlzLnRoZXRhID0gdGhldGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KG90aGVyKSB7XG5cdFx0dGhpcy5yYWRpdXMgPSBvdGhlci5yYWRpdXM7XG5cdFx0dGhpcy5waGkgPSBvdGhlci5waGk7XG5cdFx0dGhpcy50aGV0YSA9IG90aGVyLnRoZXRhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIEVQUyBhbmQgUEktRVBTXG5cblxuXHRtYWtlU2FmZSgpIHtcblx0XHRjb25zdCBFUFMgPSAwLjAwMDAwMTtcblx0XHR0aGlzLnBoaSA9IE1hdGgubWF4KEVQUywgTWF0aC5taW4oTWF0aC5QSSAtIEVQUywgdGhpcy5waGkpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21WZWN0b3IzKHYpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tQ2FydGVzaWFuQ29vcmRzKHYueCwgdi55LCB2LnopO1xuXHR9XG5cblx0c2V0RnJvbUNhcnRlc2lhbkNvb3Jkcyh4LCB5LCB6KSB7XG5cdFx0dGhpcy5yYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuXHRcdGlmICh0aGlzLnJhZGl1cyA9PT0gMCkge1xuXHRcdFx0dGhpcy50aGV0YSA9IDA7XG5cdFx0XHR0aGlzLnBoaSA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudGhldGEgPSBNYXRoLmF0YW4yKHgsIHopO1xuXHRcdFx0dGhpcy5waGkgPSBNYXRoLmFjb3MoY2xhbXAoeSAvIHRoaXMucmFkaXVzLCAtMSwgMSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG59XG5cbmNvbnN0IF92MCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdjEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3YyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92MyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmFiID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92YWMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZiYyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmFwID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92YnAgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZjcCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jbGFzcyBUcmlhbmdsZSB7XG5cdGNvbnN0cnVjdG9yKGEgPSBuZXcgVmVjdG9yMygpLCBiID0gbmV3IFZlY3RvcjMoKSwgYyA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHR0aGlzLmEgPSBhO1xuXHRcdHRoaXMuYiA9IGI7XG5cdFx0dGhpcy5jID0gYztcblx0fVxuXG5cdHN0YXRpYyBnZXROb3JtYWwoYSwgYiwgYywgdGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN1YlZlY3RvcnMoYywgYik7XG5cblx0XHRfdjAuc3ViVmVjdG9ycyhhLCBiKTtcblxuXHRcdHRhcmdldC5jcm9zcyhfdjApO1xuXHRcdGNvbnN0IHRhcmdldExlbmd0aFNxID0gdGFyZ2V0Lmxlbmd0aFNxKCk7XG5cblx0XHRpZiAodGFyZ2V0TGVuZ3RoU3EgPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0Lm11bHRpcGx5U2NhbGFyKDEgLyBNYXRoLnNxcnQodGFyZ2V0TGVuZ3RoU3EpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFyZ2V0LnNldCgwLCAwLCAwKTtcblx0fSAvLyBzdGF0aWMvaW5zdGFuY2UgbWV0aG9kIHRvIGNhbGN1bGF0ZSBiYXJ5Y2VudHJpYyBjb29yZGluYXRlc1xuXHQvLyBiYXNlZCBvbjogaHR0cDovL3d3dy5ibGFja3Bhd24uY29tL3RleHRzL3BvaW50aW5wb2x5L2RlZmF1bHQuaHRtbFxuXG5cblx0c3RhdGljIGdldEJhcnljb29yZChwb2ludCwgYSwgYiwgYywgdGFyZ2V0KSB7XG5cdFx0X3YwLnN1YlZlY3RvcnMoYywgYSk7XG5cblx0XHRfdjEuc3ViVmVjdG9ycyhiLCBhKTtcblxuXHRcdF92Mi5zdWJWZWN0b3JzKHBvaW50LCBhKTtcblxuXHRcdGNvbnN0IGRvdDAwID0gX3YwLmRvdChfdjApO1xuXG5cdFx0Y29uc3QgZG90MDEgPSBfdjAuZG90KF92MSk7XG5cblx0XHRjb25zdCBkb3QwMiA9IF92MC5kb3QoX3YyKTtcblxuXHRcdGNvbnN0IGRvdDExID0gX3YxLmRvdChfdjEpO1xuXG5cdFx0Y29uc3QgZG90MTIgPSBfdjEuZG90KF92Mik7XG5cblx0XHRjb25zdCBkZW5vbSA9IGRvdDAwICogZG90MTEgLSBkb3QwMSAqIGRvdDAxOyAvLyBjb2xsaW5lYXIgb3Igc2luZ3VsYXIgdHJpYW5nbGVcblxuXHRcdGlmIChkZW5vbSA9PT0gMCkge1xuXHRcdFx0Ly8gYXJiaXRyYXJ5IGxvY2F0aW9uIG91dHNpZGUgb2YgdHJpYW5nbGU/XG5cdFx0XHQvLyBub3Qgc3VyZSBpZiB0aGlzIGlzIHRoZSBiZXN0IGlkZWEsIG1heWJlIHNob3VsZCBiZSByZXR1cm5pbmcgdW5kZWZpbmVkXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LnNldCgtMiwgLTEsIC0xKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnZEZW5vbSA9IDEgLyBkZW5vbTtcblx0XHRjb25zdCB1ID0gKGRvdDExICogZG90MDIgLSBkb3QwMSAqIGRvdDEyKSAqIGludkRlbm9tO1xuXHRcdGNvbnN0IHYgPSAoZG90MDAgKiBkb3QxMiAtIGRvdDAxICogZG90MDIpICogaW52RGVub207IC8vIGJhcnljZW50cmljIGNvb3JkaW5hdGVzIG11c3QgYWx3YXlzIHN1bSB0byAxXG5cblx0XHRyZXR1cm4gdGFyZ2V0LnNldCgxIC0gdSAtIHYsIHYsIHUpO1xuXHR9XG5cblx0c3RhdGljIGNvbnRhaW5zUG9pbnQocG9pbnQsIGEsIGIsIGMpIHtcblx0XHR0aGlzLmdldEJhcnljb29yZChwb2ludCwgYSwgYiwgYywgX3YzKTtcblx0XHRyZXR1cm4gX3YzLnggPj0gMCAmJiBfdjMueSA+PSAwICYmIF92My54ICsgX3YzLnkgPD0gMTtcblx0fVxuXG5cdHN0YXRpYyBnZXRVVihwb2ludCwgcDEsIHAyLCBwMywgdXYxLCB1djIsIHV2MywgdGFyZ2V0KSB7XG5cdFx0dGhpcy5nZXRCYXJ5Y29vcmQocG9pbnQsIHAxLCBwMiwgcDMsIF92Myk7XG5cdFx0dGFyZ2V0LnNldCgwLCAwKTtcblx0XHR0YXJnZXQuYWRkU2NhbGVkVmVjdG9yKHV2MSwgX3YzLngpO1xuXHRcdHRhcmdldC5hZGRTY2FsZWRWZWN0b3IodXYyLCBfdjMueSk7XG5cdFx0dGFyZ2V0LmFkZFNjYWxlZFZlY3Rvcih1djMsIF92My56KTtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0c3RhdGljIGlzRnJvbnRGYWNpbmcoYSwgYiwgYywgZGlyZWN0aW9uKSB7XG5cdFx0X3YwLnN1YlZlY3RvcnMoYywgYik7XG5cblx0XHRfdjEuc3ViVmVjdG9ycyhhLCBiKTsgLy8gc3RyaWN0bHkgZnJvbnQgZmFjaW5nXG5cblxuXHRcdHJldHVybiBfdjAuY3Jvc3MoX3YxKS5kb3QoZGlyZWN0aW9uKSA8IDAgPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHRzZXQoYSwgYiwgYykge1xuXHRcdHRoaXMuYS5jb3B5KGEpO1xuXHRcdHRoaXMuYi5jb3B5KGIpO1xuXHRcdHRoaXMuYy5jb3B5KGMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVBvaW50c0FuZEluZGljZXMocG9pbnRzLCBpMCwgaTEsIGkyKSB7XG5cdFx0dGhpcy5hLmNvcHkocG9pbnRzW2kwXSk7XG5cdFx0dGhpcy5iLmNvcHkocG9pbnRzW2kxXSk7XG5cdFx0dGhpcy5jLmNvcHkocG9pbnRzW2kyXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy8gc2V0RnJvbUF0dHJpYnV0ZUFuZEluZGljZXMoIGF0dHJpYnV0ZSwgaTAsIGkxLCBpMiApIHtcblx0Ly8gXHR0aGlzLmEuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpMCApO1xuXHQvLyBcdHRoaXMuYi5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGkxICk7XG5cdC8vIFx0dGhpcy5jLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaTIgKTtcblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG5cdGNvcHkodHJpYW5nbGUpIHtcblx0XHR0aGlzLmEuY29weSh0cmlhbmdsZS5hKTtcblx0XHR0aGlzLmIuY29weSh0cmlhbmdsZS5iKTtcblx0XHR0aGlzLmMuY29weSh0cmlhbmdsZS5jKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEFyZWEoKSB7XG5cdFx0X3YwLnN1YlZlY3RvcnModGhpcy5jLCB0aGlzLmIpO1xuXG5cdFx0X3YxLnN1YlZlY3RvcnModGhpcy5hLCB0aGlzLmIpO1xuXG5cdFx0cmV0dXJuIF92MC5jcm9zcyhfdjEpLmxlbmd0aCgpICogMC41O1xuXHR9XG5cblx0Z2V0TWlkcG9pbnQodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5hZGRWZWN0b3JzKHRoaXMuYSwgdGhpcy5iKS5hZGQodGhpcy5jKS5tdWx0aXBseVNjYWxhcigxIC8gMyk7XG5cdH1cblxuXHRnZXROb3JtYWwodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIFRyaWFuZ2xlLmdldE5vcm1hbCh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0YXJnZXQpO1xuXHR9XG5cblx0Z2V0UGxhbmUodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5zZXRGcm9tQ29wbGFuYXJQb2ludHModGhpcy5hLCB0aGlzLmIsIHRoaXMuYyk7XG5cdH1cblxuXHRnZXRCYXJ5Y29vcmQocG9pbnQsIHRhcmdldCkge1xuXHRcdHJldHVybiBUcmlhbmdsZS5nZXRCYXJ5Y29vcmQocG9pbnQsIHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRhcmdldCk7XG5cdH1cblxuXHRnZXRVVihwb2ludCwgdXYxLCB1djIsIHV2MywgdGFyZ2V0KSB7XG5cdFx0cmV0dXJuIFRyaWFuZ2xlLmdldFVWKHBvaW50LCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB1djEsIHV2MiwgdXYzLCB0YXJnZXQpO1xuXHR9XG5cblx0Y29udGFpbnNQb2ludChwb2ludCkge1xuXHRcdHJldHVybiBUcmlhbmdsZS5jb250YWluc1BvaW50KHBvaW50LCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5jKTtcblx0fVxuXG5cdGlzRnJvbnRGYWNpbmcoZGlyZWN0aW9uKSB7XG5cdFx0cmV0dXJuIFRyaWFuZ2xlLmlzRnJvbnRGYWNpbmcodGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgZGlyZWN0aW9uKTtcblx0fVxuXG5cdGludGVyc2VjdHNCb3goYm94KSB7XG5cdFx0cmV0dXJuIGJveC5pbnRlcnNlY3RzVHJpYW5nbGUodGhpcyk7XG5cdH1cblxuXHRjbG9zZXN0UG9pbnRUb1BvaW50KHAsIHRhcmdldCkge1xuXHRcdGNvbnN0IGEgPSB0aGlzLmEsXG5cdFx0XHRcdFx0YiA9IHRoaXMuYixcblx0XHRcdFx0XHRjID0gdGhpcy5jO1xuXHRcdGxldCB2LCB3OyAvLyBhbGdvcml0aG0gdGhhbmtzIHRvIFJlYWwtVGltZSBDb2xsaXNpb24gRGV0ZWN0aW9uIGJ5IENocmlzdGVyIEVyaWNzb24sXG5cdFx0Ly8gcHVibGlzaGVkIGJ5IE1vcmdhbiBLYXVmbWFubiBQdWJsaXNoZXJzLCAoYykgMjAwNSBFbHNldmllciBJbmMuLFxuXHRcdC8vIHVuZGVyIHRoZSBhY2NvbXBhbnlpbmcgbGljZW5zZTsgc2VlIGNoYXB0ZXIgNS4xLjUgZm9yIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxuXHRcdC8vIGJhc2ljYWxseSwgd2UncmUgZGlzdGluZ3Vpc2hpbmcgd2hpY2ggb2YgdGhlIHZvcm9ub2kgcmVnaW9ucyBvZiB0aGUgdHJpYW5nbGVcblx0XHQvLyB0aGUgcG9pbnQgbGllcyBpbiB3aXRoIHRoZSBtaW5pbXVtIGFtb3VudCBvZiByZWR1bmRhbnQgY29tcHV0YXRpb24uXG5cblx0XHRfdmFiLnN1YlZlY3RvcnMoYiwgYSk7XG5cblx0XHRfdmFjLnN1YlZlY3RvcnMoYywgYSk7XG5cblx0XHRfdmFwLnN1YlZlY3RvcnMocCwgYSk7XG5cblx0XHRjb25zdCBkMSA9IF92YWIuZG90KF92YXApO1xuXG5cdFx0Y29uc3QgZDIgPSBfdmFjLmRvdChfdmFwKTtcblxuXHRcdGlmIChkMSA8PSAwICYmIGQyIDw9IDApIHtcblx0XHRcdC8vIHZlcnRleCByZWdpb24gb2YgQTsgYmFyeWNlbnRyaWMgY29vcmRzICgxLCAwLCAwKVxuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGEpO1xuXHRcdH1cblxuXHRcdF92YnAuc3ViVmVjdG9ycyhwLCBiKTtcblxuXHRcdGNvbnN0IGQzID0gX3ZhYi5kb3QoX3ZicCk7XG5cblx0XHRjb25zdCBkNCA9IF92YWMuZG90KF92YnApO1xuXG5cdFx0aWYgKGQzID49IDAgJiYgZDQgPD0gZDMpIHtcblx0XHRcdC8vIHZlcnRleCByZWdpb24gb2YgQjsgYmFyeWNlbnRyaWMgY29vcmRzICgwLCAxLCAwKVxuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZjID0gZDEgKiBkNCAtIGQzICogZDI7XG5cblx0XHRpZiAodmMgPD0gMCAmJiBkMSA+PSAwICYmIGQzIDw9IDApIHtcblx0XHRcdHYgPSBkMSAvIChkMSAtIGQzKTsgLy8gZWRnZSByZWdpb24gb2YgQUI7IGJhcnljZW50cmljIGNvb3JkcyAoMS12LCB2LCAwKVxuXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYSkuYWRkU2NhbGVkVmVjdG9yKF92YWIsIHYpO1xuXHRcdH1cblxuXHRcdF92Y3Auc3ViVmVjdG9ycyhwLCBjKTtcblxuXHRcdGNvbnN0IGQ1ID0gX3ZhYi5kb3QoX3ZjcCk7XG5cblx0XHRjb25zdCBkNiA9IF92YWMuZG90KF92Y3ApO1xuXG5cdFx0aWYgKGQ2ID49IDAgJiYgZDUgPD0gZDYpIHtcblx0XHRcdC8vIHZlcnRleCByZWdpb24gb2YgQzsgYmFyeWNlbnRyaWMgY29vcmRzICgwLCAwLCAxKVxuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGMpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZiID0gZDUgKiBkMiAtIGQxICogZDY7XG5cblx0XHRpZiAodmIgPD0gMCAmJiBkMiA+PSAwICYmIGQ2IDw9IDApIHtcblx0XHRcdHcgPSBkMiAvIChkMiAtIGQ2KTsgLy8gZWRnZSByZWdpb24gb2YgQUM7IGJhcnljZW50cmljIGNvb3JkcyAoMS13LCAwLCB3KVxuXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYSkuYWRkU2NhbGVkVmVjdG9yKF92YWMsIHcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhID0gZDMgKiBkNiAtIGQ1ICogZDQ7XG5cblx0XHRpZiAodmEgPD0gMCAmJiBkNCAtIGQzID49IDAgJiYgZDUgLSBkNiA+PSAwKSB7XG5cdFx0XHRfdmJjLnN1YlZlY3RvcnMoYywgYik7XG5cblx0XHRcdHcgPSAoZDQgLSBkMykgLyAoZDQgLSBkMyArIChkNSAtIGQ2KSk7IC8vIGVkZ2UgcmVnaW9uIG9mIEJDOyBiYXJ5Y2VudHJpYyBjb29yZHMgKDAsIDEtdywgdylcblxuXHRcdFx0cmV0dXJuIHRhcmdldC5jb3B5KGIpLmFkZFNjYWxlZFZlY3RvcihfdmJjLCB3KTsgLy8gZWRnZSByZWdpb24gb2YgQkNcblx0XHR9IC8vIGZhY2UgcmVnaW9uXG5cblxuXHRcdGNvbnN0IGRlbm9tID0gMSAvICh2YSArIHZiICsgdmMpOyAvLyB1ID0gdmEgKiBkZW5vbVxuXG5cdFx0diA9IHZiICogZGVub207XG5cdFx0dyA9IHZjICogZGVub207XG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KGEpLmFkZFNjYWxlZFZlY3RvcihfdmFiLCB2KS5hZGRTY2FsZWRWZWN0b3IoX3ZhYywgdyk7XG5cdH1cblxuXHRlcXVhbHModHJpYW5nbGUpIHtcblx0XHRyZXR1cm4gdHJpYW5nbGUuYS5lcXVhbHModGhpcy5hKSAmJiB0cmlhbmdsZS5iLmVxdWFscyh0aGlzLmIpICYmIHRyaWFuZ2xlLmMuZXF1YWxzKHRoaXMuYyk7XG5cdH1cblxufVxuXG5jbGFzcyBWZWN0b3I0IHtcblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdyA9IDEpIHtcblx0XHRWZWN0b3I0LnByb3RvdHlwZS5pc1ZlY3RvcjQgPSB0cnVlO1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnogPSB6O1xuXHRcdHRoaXMudyA9IHc7XG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuejtcblx0fVxuXG5cdHNldCB3aWR0aCh2YWx1ZSkge1xuXHRcdHRoaXMueiA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy53O1xuXHR9XG5cblx0c2V0IGhlaWdodCh2YWx1ZSkge1xuXHRcdHRoaXMudyA9IHZhbHVlO1xuXHR9XG5cblx0c2V0KHgsIHksIHosIHcpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy56ID0gejtcblx0XHR0aGlzLncgPSB3O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMueCA9IHNjYWxhcjtcblx0XHR0aGlzLnkgPSBzY2FsYXI7XG5cdFx0dGhpcy56ID0gc2NhbGFyO1xuXHRcdHRoaXMudyA9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFgoeCkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRZKHkpIHtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Wih6KSB7XG5cdFx0dGhpcy56ID0gejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFcodykge1xuXHRcdHRoaXMudyA9IHc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRDb21wb25lbnQoaW5kZXgsIHZhbHVlKSB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnggPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy55ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMueiA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLncgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KGluZGV4KSB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy54O1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiB0aGlzLnk7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuejtcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy53O1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53KTtcblx0fVxuXG5cdGNvcHkodikge1xuXHRcdHRoaXMueCA9IHYueDtcblx0XHR0aGlzLnkgPSB2Lnk7XG5cdFx0dGhpcy56ID0gdi56O1xuXHRcdHRoaXMudyA9IHYudyAhPT0gdW5kZWZpbmVkID8gdi53IDogMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZCh2KSB7XG5cdFx0dGhpcy54ICs9IHYueDtcblx0XHR0aGlzLnkgKz0gdi55O1xuXHRcdHRoaXMueiArPSB2Lno7XG5cdFx0dGhpcy53ICs9IHYudztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxhcihzKSB7XG5cdFx0dGhpcy54ICs9IHM7XG5cdFx0dGhpcy55ICs9IHM7XG5cdFx0dGhpcy56ICs9IHM7XG5cdFx0dGhpcy53ICs9IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggKyBiLng7XG5cdFx0dGhpcy55ID0gYS55ICsgYi55O1xuXHRcdHRoaXMueiA9IGEueiArIGIuejtcblx0XHR0aGlzLncgPSBhLncgKyBiLnc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsZWRWZWN0b3Iodiwgcykge1xuXHRcdHRoaXMueCArPSB2LnggKiBzO1xuXHRcdHRoaXMueSArPSB2LnkgKiBzO1xuXHRcdHRoaXMueiArPSB2LnogKiBzO1xuXHRcdHRoaXMudyArPSB2LncgKiBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViKHYpIHtcblx0XHR0aGlzLnggLT0gdi54O1xuXHRcdHRoaXMueSAtPSB2Lnk7XG5cdFx0dGhpcy56IC09IHYuejtcblx0XHR0aGlzLncgLT0gdi53O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViU2NhbGFyKHMpIHtcblx0XHR0aGlzLnggLT0gcztcblx0XHR0aGlzLnkgLT0gcztcblx0XHR0aGlzLnogLT0gcztcblx0XHR0aGlzLncgLT0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1YlZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCAtIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgLSBiLnk7XG5cdFx0dGhpcy56ID0gYS56IC0gYi56O1xuXHRcdHRoaXMudyA9IGEudyAtIGIudztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KHYpIHtcblx0XHR0aGlzLnggKj0gdi54O1xuXHRcdHRoaXMueSAqPSB2Lnk7XG5cdFx0dGhpcy56ICo9IHYuejtcblx0XHR0aGlzLncgKj0gdi53O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHlTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy54ICo9IHNjYWxhcjtcblx0XHR0aGlzLnkgKj0gc2NhbGFyO1xuXHRcdHRoaXMueiAqPSBzY2FsYXI7XG5cdFx0dGhpcy53ICo9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtKSB7XG5cdFx0Y29uc3QgeCA9IHRoaXMueCxcblx0XHRcdFx0XHR5ID0gdGhpcy55LFxuXHRcdFx0XHRcdHogPSB0aGlzLnosXG5cdFx0XHRcdFx0dyA9IHRoaXMudztcblx0XHRjb25zdCBlID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnggPSBlWzBdICogeCArIGVbNF0gKiB5ICsgZVs4XSAqIHogKyBlWzEyXSAqIHc7XG5cdFx0dGhpcy55ID0gZVsxXSAqIHggKyBlWzVdICogeSArIGVbOV0gKiB6ICsgZVsxM10gKiB3O1xuXHRcdHRoaXMueiA9IGVbMl0gKiB4ICsgZVs2XSAqIHkgKyBlWzEwXSAqIHogKyBlWzE0XSAqIHc7XG5cdFx0dGhpcy53ID0gZVszXSAqIHggKyBlWzddICogeSArIGVbMTFdICogeiArIGVbMTVdICogdztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpdmlkZVNjYWxhcihzY2FsYXIpIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigxIC8gc2NhbGFyKTtcblx0fVxuXG5cdHNldEF4aXNBbmdsZUZyb21RdWF0ZXJuaW9uKHEpIHtcblx0XHQvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvcXVhdGVybmlvblRvQW5nbGUvaW5kZXguaHRtXG5cdFx0Ly8gcSBpcyBhc3N1bWVkIHRvIGJlIG5vcm1hbGl6ZWRcblx0XHR0aGlzLncgPSAyICogTWF0aC5hY29zKHEudyk7XG5cdFx0Y29uc3QgcyA9IE1hdGguc3FydCgxIC0gcS53ICogcS53KTtcblxuXHRcdGlmIChzIDwgMC4wMDAxKSB7XG5cdFx0XHR0aGlzLnggPSAxO1xuXHRcdFx0dGhpcy55ID0gMDtcblx0XHRcdHRoaXMueiA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueCA9IHEueCAvIHM7XG5cdFx0XHR0aGlzLnkgPSBxLnkgLyBzO1xuXHRcdFx0dGhpcy56ID0gcS56IC8gcztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEF4aXNBbmdsZUZyb21Sb3RhdGlvbk1hdHJpeChtKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvQW5nbGUvaW5kZXguaHRtXG5cdFx0Ly8gYXNzdW1lcyB0aGUgdXBwZXIgM3gzIG9mIG0gaXMgYSBwdXJlIHJvdGF0aW9uIG1hdHJpeCAoaS5lLCB1bnNjYWxlZClcblx0XHRsZXQgYW5nbGUsIHgsIHksIHo7IC8vIHZhcmlhYmxlcyBmb3IgcmVzdWx0XG5cblx0XHRjb25zdCBlcHNpbG9uID0gMC4wMSxcblx0XHRcdFx0XHQvLyBtYXJnaW4gdG8gYWxsb3cgZm9yIHJvdW5kaW5nIGVycm9yc1xuXHRcdGVwc2lsb24yID0gMC4xLFxuXHRcdFx0XHRcdC8vIG1hcmdpbiB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIDAgYW5kIDE4MCBkZWdyZWVzXG5cdFx0dGUgPSBtLmVsZW1lbnRzLFxuXHRcdFx0XHRcdG0xMSA9IHRlWzBdLFxuXHRcdFx0XHRcdG0xMiA9IHRlWzRdLFxuXHRcdFx0XHRcdG0xMyA9IHRlWzhdLFxuXHRcdFx0XHRcdG0yMSA9IHRlWzFdLFxuXHRcdFx0XHRcdG0yMiA9IHRlWzVdLFxuXHRcdFx0XHRcdG0yMyA9IHRlWzldLFxuXHRcdFx0XHRcdG0zMSA9IHRlWzJdLFxuXHRcdFx0XHRcdG0zMiA9IHRlWzZdLFxuXHRcdFx0XHRcdG0zMyA9IHRlWzEwXTtcblxuXHRcdGlmIChNYXRoLmFicyhtMTIgLSBtMjEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtMTMgLSBtMzEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtMjMgLSBtMzIpIDwgZXBzaWxvbikge1xuXHRcdFx0Ly8gc2luZ3VsYXJpdHkgZm91bmRcblx0XHRcdC8vIGZpcnN0IGNoZWNrIGZvciBpZGVudGl0eSBtYXRyaXggd2hpY2ggbXVzdCBoYXZlICsxIGZvciBhbGwgdGVybXNcblx0XHRcdC8vIGluIGxlYWRpbmcgZGlhZ29uYWwgYW5kIHplcm8gaW4gb3RoZXIgdGVybXNcblx0XHRcdGlmIChNYXRoLmFicyhtMTIgKyBtMjEpIDwgZXBzaWxvbjIgJiYgTWF0aC5hYnMobTEzICsgbTMxKSA8IGVwc2lsb24yICYmIE1hdGguYWJzKG0yMyArIG0zMikgPCBlcHNpbG9uMiAmJiBNYXRoLmFicyhtMTEgKyBtMjIgKyBtMzMgLSAzKSA8IGVwc2lsb24yKSB7XG5cdFx0XHRcdC8vIHRoaXMgc2luZ3VsYXJpdHkgaXMgaWRlbnRpdHkgbWF0cml4IHNvIGFuZ2xlID0gMFxuXHRcdFx0XHR0aGlzLnNldCgxLCAwLCAwLCAwKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7IC8vIHplcm8gYW5nbGUsIGFyYml0cmFyeSBheGlzXG5cdFx0XHR9IC8vIG90aGVyd2lzZSB0aGlzIHNpbmd1bGFyaXR5IGlzIGFuZ2xlID0gMTgwXG5cblxuXHRcdFx0YW5nbGUgPSBNYXRoLlBJO1xuXHRcdFx0Y29uc3QgeHggPSAobTExICsgMSkgLyAyO1xuXHRcdFx0Y29uc3QgeXkgPSAobTIyICsgMSkgLyAyO1xuXHRcdFx0Y29uc3QgenogPSAobTMzICsgMSkgLyAyO1xuXHRcdFx0Y29uc3QgeHkgPSAobTEyICsgbTIxKSAvIDQ7XG5cdFx0XHRjb25zdCB4eiA9IChtMTMgKyBtMzEpIC8gNDtcblx0XHRcdGNvbnN0IHl6ID0gKG0yMyArIG0zMikgLyA0O1xuXG5cdFx0XHRpZiAoeHggPiB5eSAmJiB4eCA+IHp6KSB7XG5cdFx0XHRcdC8vIG0xMSBpcyB0aGUgbGFyZ2VzdCBkaWFnb25hbCB0ZXJtXG5cdFx0XHRcdGlmICh4eCA8IGVwc2lsb24pIHtcblx0XHRcdFx0XHR4ID0gMDtcblx0XHRcdFx0XHR5ID0gMC43MDcxMDY3ODE7XG5cdFx0XHRcdFx0eiA9IDAuNzA3MTA2NzgxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHggPSBNYXRoLnNxcnQoeHgpO1xuXHRcdFx0XHRcdHkgPSB4eSAvIHg7XG5cdFx0XHRcdFx0eiA9IHh6IC8geDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh5eSA+IHp6KSB7XG5cdFx0XHRcdC8vIG0yMiBpcyB0aGUgbGFyZ2VzdCBkaWFnb25hbCB0ZXJtXG5cdFx0XHRcdGlmICh5eSA8IGVwc2lsb24pIHtcblx0XHRcdFx0XHR4ID0gMC43MDcxMDY3ODE7XG5cdFx0XHRcdFx0eSA9IDA7XG5cdFx0XHRcdFx0eiA9IDAuNzA3MTA2NzgxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHkgPSBNYXRoLnNxcnQoeXkpO1xuXHRcdFx0XHRcdHggPSB4eSAvIHk7XG5cdFx0XHRcdFx0eiA9IHl6IC8geTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gbTMzIGlzIHRoZSBsYXJnZXN0IGRpYWdvbmFsIHRlcm0gc28gYmFzZSByZXN1bHQgb24gdGhpc1xuXHRcdFx0XHRpZiAoenogPCBlcHNpbG9uKSB7XG5cdFx0XHRcdFx0eCA9IDAuNzA3MTA2NzgxO1xuXHRcdFx0XHRcdHkgPSAwLjcwNzEwNjc4MTtcblx0XHRcdFx0XHR6ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR6ID0gTWF0aC5zcXJ0KHp6KTtcblx0XHRcdFx0XHR4ID0geHogLyB6O1xuXHRcdFx0XHRcdHkgPSB5eiAvIHo7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXQoeCwgeSwgeiwgYW5nbGUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7IC8vIHJldHVybiAxODAgZGVnIHJvdGF0aW9uXG5cdFx0fSAvLyBhcyB3ZSBoYXZlIHJlYWNoZWQgaGVyZSB0aGVyZSBhcmUgbm8gc2luZ3VsYXJpdGllcyBzbyB3ZSBjYW4gaGFuZGxlIG5vcm1hbGx5XG5cblxuXHRcdGxldCBzID0gTWF0aC5zcXJ0KChtMzIgLSBtMjMpICogKG0zMiAtIG0yMykgKyAobTEzIC0gbTMxKSAqIChtMTMgLSBtMzEpICsgKG0yMSAtIG0xMikgKiAobTIxIC0gbTEyKSk7IC8vIHVzZWQgdG8gbm9ybWFsaXplXG5cblx0XHRpZiAoTWF0aC5hYnMocykgPCAwLjAwMSkgcyA9IDE7IC8vIHByZXZlbnQgZGl2aWRlIGJ5IHplcm8sIHNob3VsZCBub3QgaGFwcGVuIGlmIG1hdHJpeCBpcyBvcnRob2dvbmFsIGFuZCBzaG91bGQgYmVcblx0XHQvLyBjYXVnaHQgYnkgc2luZ3VsYXJpdHkgdGVzdCBhYm92ZSwgYnV0IEkndmUgbGVmdCBpdCBpbiBqdXN0IGluIGNhc2VcblxuXHRcdHRoaXMueCA9IChtMzIgLSBtMjMpIC8gcztcblx0XHR0aGlzLnkgPSAobTEzIC0gbTMxKSAvIHM7XG5cdFx0dGhpcy56ID0gKG0yMSAtIG0xMikgLyBzO1xuXHRcdHRoaXMudyA9IE1hdGguYWNvcygobTExICsgbTIyICsgbTMzIC0gMSkgLyAyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1pbih2KSB7XG5cdFx0dGhpcy54ID0gTWF0aC5taW4odGhpcy54LCB2LngpO1xuXHRcdHRoaXMueSA9IE1hdGgubWluKHRoaXMueSwgdi55KTtcblx0XHR0aGlzLnogPSBNYXRoLm1pbih0aGlzLnosIHYueik7XG5cdFx0dGhpcy53ID0gTWF0aC5taW4odGhpcy53LCB2LncpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWF4KHYpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1heCh0aGlzLngsIHYueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgodGhpcy55LCB2LnkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KHRoaXMueiwgdi56KTtcblx0XHR0aGlzLncgPSBNYXRoLm1heCh0aGlzLncsIHYudyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcChtaW4sIG1heCkge1xuXHRcdC8vIGFzc3VtZXMgbWluIDwgbWF4LCBjb21wb25lbnR3aXNlXG5cdFx0dGhpcy54ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB0aGlzLngpKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHRoaXMueSkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KG1pbi56LCBNYXRoLm1pbihtYXgueiwgdGhpcy56KSk7XG5cdFx0dGhpcy53ID0gTWF0aC5tYXgobWluLncsIE1hdGgubWluKG1heC53LCB0aGlzLncpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wU2NhbGFyKG1pblZhbCwgbWF4VmFsKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueCkpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLnkpKTtcblx0XHR0aGlzLnogPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy56KSk7XG5cdFx0dGhpcy53ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMudykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXBMZW5ndGgobWluLCBtYXgpIHtcblx0XHRjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcihsZW5ndGggfHwgMSkubXVsdGlwbHlTY2FsYXIoTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIGxlbmd0aCkpKTtcblx0fVxuXG5cdGZsb29yKCkge1xuXHRcdHRoaXMueCA9IE1hdGguZmxvb3IodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLmZsb29yKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5mbG9vcih0aGlzLnopO1xuXHRcdHRoaXMudyA9IE1hdGguZmxvb3IodGhpcy53KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNlaWwoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5jZWlsKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5jZWlsKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5jZWlsKHRoaXMueik7XG5cdFx0dGhpcy53ID0gTWF0aC5jZWlsKHRoaXMudyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3VuZCgpIHtcblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuXHRcdHRoaXMueiA9IE1hdGgucm91bmQodGhpcy56KTtcblx0XHR0aGlzLncgPSBNYXRoLnJvdW5kKHRoaXMudyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3VuZFRvWmVybygpIHtcblx0XHR0aGlzLnggPSB0aGlzLnggPCAwID8gTWF0aC5jZWlsKHRoaXMueCkgOiBNYXRoLmZsb29yKHRoaXMueCk7XG5cdFx0dGhpcy55ID0gdGhpcy55IDwgMCA/IE1hdGguY2VpbCh0aGlzLnkpIDogTWF0aC5mbG9vcih0aGlzLnkpO1xuXHRcdHRoaXMueiA9IHRoaXMueiA8IDAgPyBNYXRoLmNlaWwodGhpcy56KSA6IE1hdGguZmxvb3IodGhpcy56KTtcblx0XHR0aGlzLncgPSB0aGlzLncgPCAwID8gTWF0aC5jZWlsKHRoaXMudykgOiBNYXRoLmZsb29yKHRoaXMudyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWdhdGUoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHRoaXMueiA9IC10aGlzLno7XG5cdFx0dGhpcy53ID0gLXRoaXMudztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRvdCh2KSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueSArIHRoaXMueiAqIHYueiArIHRoaXMudyAqIHYudztcblx0fVxuXG5cdGxlbmd0aFNxKCkge1xuXHRcdHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKyB0aGlzLncgKiB0aGlzLnc7XG5cdH1cblxuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKyB0aGlzLncgKiB0aGlzLncpO1xuXHR9XG5cblx0bWFuaGF0dGFuTGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLngpICsgTWF0aC5hYnModGhpcy55KSArIE1hdGguYWJzKHRoaXMueikgKyBNYXRoLmFicyh0aGlzLncpO1xuXHR9XG5cblx0bm9ybWFsaXplKCkge1xuXHRcdHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpIHx8IDEpO1xuXHR9XG5cblx0c2V0TGVuZ3RoKGxlbmd0aCkge1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGxlbmd0aCk7XG5cdH1cblxuXHRsZXJwKHYsIGFscGhhKSB7XG5cdFx0dGhpcy54ICs9ICh2LnggLSB0aGlzLngpICogYWxwaGE7XG5cdFx0dGhpcy55ICs9ICh2LnkgLSB0aGlzLnkpICogYWxwaGE7XG5cdFx0dGhpcy56ICs9ICh2LnogLSB0aGlzLnopICogYWxwaGE7XG5cdFx0dGhpcy53ICs9ICh2LncgLSB0aGlzLncpICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXJwVmVjdG9ycyh2MSwgdjIsIGFscGhhKSB7XG5cdFx0dGhpcy54ID0gdjEueCArICh2Mi54IC0gdjEueCkgKiBhbHBoYTtcblx0XHR0aGlzLnkgPSB2MS55ICsgKHYyLnkgLSB2MS55KSAqIGFscGhhO1xuXHRcdHRoaXMueiA9IHYxLnogKyAodjIueiAtIHYxLnopICogYWxwaGE7XG5cdFx0dGhpcy53ID0gdjEudyArICh2Mi53IC0gdjEudykgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyh2KSB7XG5cdFx0cmV0dXJuIHYueCA9PT0gdGhpcy54ICYmIHYueSA9PT0gdGhpcy55ICYmIHYueiA9PT0gdGhpcy56ICYmIHYudyA9PT0gdGhpcy53O1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0dGhpcy54ID0gYXJyYXlbb2Zmc2V0XTtcblx0XHR0aGlzLnkgPSBhcnJheVtvZmZzZXQgKyAxXTtcblx0XHR0aGlzLnogPSBhcnJheVtvZmZzZXQgKyAyXTtcblx0XHR0aGlzLncgPSBhcnJheVtvZmZzZXQgKyAzXTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGFycmF5W29mZnNldF0gPSB0aGlzLng7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLnk7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0aGlzLno7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgM10gPSB0aGlzLnc7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9IC8vIGZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaW5kZXggKSB7XG5cdC8vIFx0dGhpcy54ID0gYXR0cmlidXRlLmdldFgoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy55ID0gYXR0cmlidXRlLmdldFkoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy56ID0gYXR0cmlidXRlLmdldFooIGluZGV4ICk7XG5cdC8vIFx0dGhpcy53ID0gYXR0cmlidXRlLmdldFcoIGluZGV4ICk7XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdHJhbmRvbSgpIHtcblx0XHR0aGlzLnggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHRoaXMueSA9IE1hdGgucmFuZG9tKCk7XG5cdFx0dGhpcy56ID0gTWF0aC5yYW5kb20oKTtcblx0XHR0aGlzLncgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0KltTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHlpZWxkIHRoaXMueDtcblx0XHR5aWVsZCB0aGlzLnk7XG5cdFx0eWllbGQgdGhpcy56O1xuXHRcdHlpZWxkIHRoaXMudztcblx0fVxuXG59XG5cbmV4cG9ydHMuQUNFU0ZpbG1pY1RvbmVNYXBwaW5nID0gQUNFU0ZpbG1pY1RvbmVNYXBwaW5nO1xuZXhwb3J0cy5BZGRFcXVhdGlvbiA9IEFkZEVxdWF0aW9uO1xuZXhwb3J0cy5BZGRPcGVyYXRpb24gPSBBZGRPcGVyYXRpb247XG5leHBvcnRzLkFkZGl0aXZlQW5pbWF0aW9uQmxlbmRNb2RlID0gQWRkaXRpdmVBbmltYXRpb25CbGVuZE1vZGU7XG5leHBvcnRzLkFkZGl0aXZlQmxlbmRpbmcgPSBBZGRpdGl2ZUJsZW5kaW5nO1xuZXhwb3J0cy5BbHBoYUZvcm1hdCA9IEFscGhhRm9ybWF0O1xuZXhwb3J0cy5BbHdheXNEZXB0aCA9IEFsd2F5c0RlcHRoO1xuZXhwb3J0cy5BbHdheXNTdGVuY2lsRnVuYyA9IEFsd2F5c1N0ZW5jaWxGdW5jO1xuZXhwb3J0cy5CYWNrU2lkZSA9IEJhY2tTaWRlO1xuZXhwb3J0cy5CYXNpY0RlcHRoUGFja2luZyA9IEJhc2ljRGVwdGhQYWNraW5nO1xuZXhwb3J0cy5CYXNpY1NoYWRvd01hcCA9IEJhc2ljU2hhZG93TWFwO1xuZXhwb3J0cy5Cb3gyID0gQm94MjtcbmV4cG9ydHMuQm94MyA9IEJveDM7XG5leHBvcnRzLkJ5dGVUeXBlID0gQnl0ZVR5cGU7XG5leHBvcnRzLkNpbmVvblRvbmVNYXBwaW5nID0gQ2luZW9uVG9uZU1hcHBpbmc7XG5leHBvcnRzLkNsYW1wVG9FZGdlV3JhcHBpbmcgPSBDbGFtcFRvRWRnZVdyYXBwaW5nO1xuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xuZXhwb3J0cy5Db2xvck1hbmFnZW1lbnQgPSBDb2xvck1hbmFnZW1lbnQ7XG5leHBvcnRzLkN1YmVSZWZsZWN0aW9uTWFwcGluZyA9IEN1YmVSZWZsZWN0aW9uTWFwcGluZztcbmV4cG9ydHMuQ3ViZVJlZnJhY3Rpb25NYXBwaW5nID0gQ3ViZVJlZnJhY3Rpb25NYXBwaW5nO1xuZXhwb3J0cy5DdWJlVVZSZWZsZWN0aW9uTWFwcGluZyA9IEN1YmVVVlJlZmxlY3Rpb25NYXBwaW5nO1xuZXhwb3J0cy5DdWxsRmFjZUJhY2sgPSBDdWxsRmFjZUJhY2s7XG5leHBvcnRzLkN1bGxGYWNlRnJvbnQgPSBDdWxsRmFjZUZyb250O1xuZXhwb3J0cy5DdWxsRmFjZUZyb250QmFjayA9IEN1bGxGYWNlRnJvbnRCYWNrO1xuZXhwb3J0cy5DdWxsRmFjZU5vbmUgPSBDdWxsRmFjZU5vbmU7XG5leHBvcnRzLkN1c3RvbUJsZW5kaW5nID0gQ3VzdG9tQmxlbmRpbmc7XG5leHBvcnRzLkN1c3RvbVRvbmVNYXBwaW5nID0gQ3VzdG9tVG9uZU1hcHBpbmc7XG5leHBvcnRzLkN5bGluZHJpY2FsID0gQ3lsaW5kcmljYWw7XG5leHBvcnRzLkRlY3JlbWVudFN0ZW5jaWxPcCA9IERlY3JlbWVudFN0ZW5jaWxPcDtcbmV4cG9ydHMuRGVjcmVtZW50V3JhcFN0ZW5jaWxPcCA9IERlY3JlbWVudFdyYXBTdGVuY2lsT3A7XG5leHBvcnRzLkRlcHRoRm9ybWF0ID0gRGVwdGhGb3JtYXQ7XG5leHBvcnRzLkRlcHRoU3RlbmNpbEZvcm1hdCA9IERlcHRoU3RlbmNpbEZvcm1hdDtcbmV4cG9ydHMuRG91YmxlU2lkZSA9IERvdWJsZVNpZGU7XG5leHBvcnRzLkRzdEFscGhhRmFjdG9yID0gRHN0QWxwaGFGYWN0b3I7XG5leHBvcnRzLkRzdENvbG9yRmFjdG9yID0gRHN0Q29sb3JGYWN0b3I7XG5leHBvcnRzLkR5bmFtaWNDb3B5VXNhZ2UgPSBEeW5hbWljQ29weVVzYWdlO1xuZXhwb3J0cy5EeW5hbWljRHJhd1VzYWdlID0gRHluYW1pY0RyYXdVc2FnZTtcbmV4cG9ydHMuRHluYW1pY1JlYWRVc2FnZSA9IER5bmFtaWNSZWFkVXNhZ2U7XG5leHBvcnRzLkVxdWFsRGVwdGggPSBFcXVhbERlcHRoO1xuZXhwb3J0cy5FcXVhbFN0ZW5jaWxGdW5jID0gRXF1YWxTdGVuY2lsRnVuYztcbmV4cG9ydHMuRXF1aXJlY3Rhbmd1bGFyUmVmbGVjdGlvbk1hcHBpbmcgPSBFcXVpcmVjdGFuZ3VsYXJSZWZsZWN0aW9uTWFwcGluZztcbmV4cG9ydHMuRXF1aXJlY3Rhbmd1bGFyUmVmcmFjdGlvbk1hcHBpbmcgPSBFcXVpcmVjdGFuZ3VsYXJSZWZyYWN0aW9uTWFwcGluZztcbmV4cG9ydHMuRXVsZXIgPSBFdWxlcjtcbmV4cG9ydHMuRmxvYXRUeXBlID0gRmxvYXRUeXBlO1xuZXhwb3J0cy5Gcm9udFNpZGUgPSBGcm9udFNpZGU7XG5leHBvcnRzLkdMU0wxID0gR0xTTDE7XG5leHBvcnRzLkdMU0wzID0gR0xTTDM7XG5leHBvcnRzLkdyZWF0ZXJEZXB0aCA9IEdyZWF0ZXJEZXB0aDtcbmV4cG9ydHMuR3JlYXRlckVxdWFsRGVwdGggPSBHcmVhdGVyRXF1YWxEZXB0aDtcbmV4cG9ydHMuR3JlYXRlckVxdWFsU3RlbmNpbEZ1bmMgPSBHcmVhdGVyRXF1YWxTdGVuY2lsRnVuYztcbmV4cG9ydHMuR3JlYXRlclN0ZW5jaWxGdW5jID0gR3JlYXRlclN0ZW5jaWxGdW5jO1xuZXhwb3J0cy5IYWxmRmxvYXRUeXBlID0gSGFsZkZsb2F0VHlwZTtcbmV4cG9ydHMuSW5jcmVtZW50U3RlbmNpbE9wID0gSW5jcmVtZW50U3RlbmNpbE9wO1xuZXhwb3J0cy5JbmNyZW1lbnRXcmFwU3RlbmNpbE9wID0gSW5jcmVtZW50V3JhcFN0ZW5jaWxPcDtcbmV4cG9ydHMuSW50VHlwZSA9IEludFR5cGU7XG5leHBvcnRzLkludGVycG9sYW50ID0gSW50ZXJwb2xhbnQ7XG5leHBvcnRzLkludGVycG9sYXRlRGlzY3JldGUgPSBJbnRlcnBvbGF0ZURpc2NyZXRlO1xuZXhwb3J0cy5JbnRlcnBvbGF0ZUxpbmVhciA9IEludGVycG9sYXRlTGluZWFyO1xuZXhwb3J0cy5JbnRlcnBvbGF0ZVNtb290aCA9IEludGVycG9sYXRlU21vb3RoO1xuZXhwb3J0cy5JbnZlcnRTdGVuY2lsT3AgPSBJbnZlcnRTdGVuY2lsT3A7XG5leHBvcnRzLktlZXBTdGVuY2lsT3AgPSBLZWVwU3RlbmNpbE9wO1xuZXhwb3J0cy5MZXNzRGVwdGggPSBMZXNzRGVwdGg7XG5leHBvcnRzLkxlc3NFcXVhbERlcHRoID0gTGVzc0VxdWFsRGVwdGg7XG5leHBvcnRzLkxlc3NFcXVhbFN0ZW5jaWxGdW5jID0gTGVzc0VxdWFsU3RlbmNpbEZ1bmM7XG5leHBvcnRzLkxlc3NTdGVuY2lsRnVuYyA9IExlc3NTdGVuY2lsRnVuYztcbmV4cG9ydHMuTGluZTMgPSBMaW5lMztcbmV4cG9ydHMuTGluZWFyRW5jb2RpbmcgPSBMaW5lYXJFbmNvZGluZztcbmV4cG9ydHMuTGluZWFyRmlsdGVyID0gTGluZWFyRmlsdGVyO1xuZXhwb3J0cy5MaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXIgPSBMaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXI7XG5leHBvcnRzLkxpbmVhck1pcE1hcE5lYXJlc3RGaWx0ZXIgPSBMaW5lYXJNaXBNYXBOZWFyZXN0RmlsdGVyO1xuZXhwb3J0cy5MaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIgPSBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXI7XG5leHBvcnRzLkxpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIgPSBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyO1xuZXhwb3J0cy5MaW5lYXJTUkdCQ29sb3JTcGFjZSA9IExpbmVhclNSR0JDb2xvclNwYWNlO1xuZXhwb3J0cy5MaW5lYXJUb1NSR0IgPSBMaW5lYXJUb1NSR0I7XG5leHBvcnRzLkxpbmVhclRvbmVNYXBwaW5nID0gTGluZWFyVG9uZU1hcHBpbmc7XG5leHBvcnRzLkxvb3BPbmNlID0gTG9vcE9uY2U7XG5leHBvcnRzLkxvb3BQaW5nUG9uZyA9IExvb3BQaW5nUG9uZztcbmV4cG9ydHMuTG9vcFJlcGVhdCA9IExvb3BSZXBlYXQ7XG5leHBvcnRzLkx1bWluYW5jZUFscGhhRm9ybWF0ID0gTHVtaW5hbmNlQWxwaGFGb3JtYXQ7XG5leHBvcnRzLkx1bWluYW5jZUZvcm1hdCA9IEx1bWluYW5jZUZvcm1hdDtcbmV4cG9ydHMuTU9VU0UgPSBNT1VTRTtcbmV4cG9ydHMuTWF0aFV0aWxzID0gTWF0aFV0aWxzO1xuZXhwb3J0cy5NYXRyaXgzID0gTWF0cml4MztcbmV4cG9ydHMuTWF0cml4NCA9IE1hdHJpeDQ7XG5leHBvcnRzLk1heEVxdWF0aW9uID0gTWF4RXF1YXRpb247XG5leHBvcnRzLk1pbkVxdWF0aW9uID0gTWluRXF1YXRpb247XG5leHBvcnRzLk1pcnJvcmVkUmVwZWF0V3JhcHBpbmcgPSBNaXJyb3JlZFJlcGVhdFdyYXBwaW5nO1xuZXhwb3J0cy5NaXhPcGVyYXRpb24gPSBNaXhPcGVyYXRpb247XG5leHBvcnRzLk11bHRpcGx5QmxlbmRpbmcgPSBNdWx0aXBseUJsZW5kaW5nO1xuZXhwb3J0cy5NdWx0aXBseU9wZXJhdGlvbiA9IE11bHRpcGx5T3BlcmF0aW9uO1xuZXhwb3J0cy5OZWFyZXN0RmlsdGVyID0gTmVhcmVzdEZpbHRlcjtcbmV4cG9ydHMuTmVhcmVzdE1pcE1hcExpbmVhckZpbHRlciA9IE5lYXJlc3RNaXBNYXBMaW5lYXJGaWx0ZXI7XG5leHBvcnRzLk5lYXJlc3RNaXBNYXBOZWFyZXN0RmlsdGVyID0gTmVhcmVzdE1pcE1hcE5lYXJlc3RGaWx0ZXI7XG5leHBvcnRzLk5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIgPSBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyO1xuZXhwb3J0cy5OZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlciA9IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyO1xuZXhwb3J0cy5OZXZlckRlcHRoID0gTmV2ZXJEZXB0aDtcbmV4cG9ydHMuTmV2ZXJTdGVuY2lsRnVuYyA9IE5ldmVyU3RlbmNpbEZ1bmM7XG5leHBvcnRzLk5vQmxlbmRpbmcgPSBOb0JsZW5kaW5nO1xuZXhwb3J0cy5Ob0NvbG9yU3BhY2UgPSBOb0NvbG9yU3BhY2U7XG5leHBvcnRzLk5vVG9uZU1hcHBpbmcgPSBOb1RvbmVNYXBwaW5nO1xuZXhwb3J0cy5Ob3JtYWxBbmltYXRpb25CbGVuZE1vZGUgPSBOb3JtYWxBbmltYXRpb25CbGVuZE1vZGU7XG5leHBvcnRzLk5vcm1hbEJsZW5kaW5nID0gTm9ybWFsQmxlbmRpbmc7XG5leHBvcnRzLk5vdEVxdWFsRGVwdGggPSBOb3RFcXVhbERlcHRoO1xuZXhwb3J0cy5Ob3RFcXVhbFN0ZW5jaWxGdW5jID0gTm90RXF1YWxTdGVuY2lsRnVuYztcbmV4cG9ydHMuT2JqZWN0U3BhY2VOb3JtYWxNYXAgPSBPYmplY3RTcGFjZU5vcm1hbE1hcDtcbmV4cG9ydHMuT25lRmFjdG9yID0gT25lRmFjdG9yO1xuZXhwb3J0cy5PbmVNaW51c0RzdEFscGhhRmFjdG9yID0gT25lTWludXNEc3RBbHBoYUZhY3RvcjtcbmV4cG9ydHMuT25lTWludXNEc3RDb2xvckZhY3RvciA9IE9uZU1pbnVzRHN0Q29sb3JGYWN0b3I7XG5leHBvcnRzLk9uZU1pbnVzU3JjQWxwaGFGYWN0b3IgPSBPbmVNaW51c1NyY0FscGhhRmFjdG9yO1xuZXhwb3J0cy5PbmVNaW51c1NyY0NvbG9yRmFjdG9yID0gT25lTWludXNTcmNDb2xvckZhY3RvcjtcbmV4cG9ydHMuUENGU2hhZG93TWFwID0gUENGU2hhZG93TWFwO1xuZXhwb3J0cy5QQ0ZTb2Z0U2hhZG93TWFwID0gUENGU29mdFNoYWRvd01hcDtcbmV4cG9ydHMuUGxhbmUgPSBQbGFuZTtcbmV4cG9ydHMuUXVhdGVybmlvbiA9IFF1YXRlcm5pb247XG5leHBvcnRzLlJFVklTSU9OID0gUkVWSVNJT047XG5leHBvcnRzLlJHQkFEZXB0aFBhY2tpbmcgPSBSR0JBRGVwdGhQYWNraW5nO1xuZXhwb3J0cy5SR0JBRm9ybWF0ID0gUkdCQUZvcm1hdDtcbmV4cG9ydHMuUkdCQUludGVnZXJGb3JtYXQgPSBSR0JBSW50ZWdlckZvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzEweDEwX0Zvcm1hdCA9IFJHQkFfQVNUQ18xMHgxMF9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ18xMHg1X0Zvcm1hdCA9IFJHQkFfQVNUQ18xMHg1X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzEweDZfRm9ybWF0ID0gUkdCQV9BU1RDXzEweDZfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfMTB4OF9Gb3JtYXQgPSBSR0JBX0FTVENfMTB4OF9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ18xMngxMF9Gb3JtYXQgPSBSR0JBX0FTVENfMTJ4MTBfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfMTJ4MTJfRm9ybWF0ID0gUkdCQV9BU1RDXzEyeDEyX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzR4NF9Gb3JtYXQgPSBSR0JBX0FTVENfNHg0X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzV4NF9Gb3JtYXQgPSBSR0JBX0FTVENfNXg0X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzV4NV9Gb3JtYXQgPSBSR0JBX0FTVENfNXg1X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzZ4NV9Gb3JtYXQgPSBSR0JBX0FTVENfNng1X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzZ4Nl9Gb3JtYXQgPSBSR0JBX0FTVENfNng2X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzh4NV9Gb3JtYXQgPSBSR0JBX0FTVENfOHg1X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzh4Nl9Gb3JtYXQgPSBSR0JBX0FTVENfOHg2X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzh4OF9Gb3JtYXQgPSBSR0JBX0FTVENfOHg4X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9CUFRDX0Zvcm1hdCA9IFJHQkFfQlBUQ19Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfRVRDMl9FQUNfRm9ybWF0ID0gUkdCQV9FVEMyX0VBQ19Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfUFZSVENfMkJQUFYxX0Zvcm1hdCA9IFJHQkFfUFZSVENfMkJQUFYxX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9QVlJUQ180QlBQVjFfRm9ybWF0ID0gUkdCQV9QVlJUQ180QlBQVjFfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX1MzVENfRFhUMV9Gb3JtYXQgPSBSR0JBX1MzVENfRFhUMV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfUzNUQ19EWFQzX0Zvcm1hdCA9IFJHQkFfUzNUQ19EWFQzX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9TM1RDX0RYVDVfRm9ybWF0ID0gUkdCQV9TM1RDX0RYVDVfRm9ybWF0O1xuZXhwb3J0cy5SR0JGb3JtYXQgPSBSR0JGb3JtYXQ7XG5leHBvcnRzLlJHQl9FVEMxX0Zvcm1hdCA9IFJHQl9FVEMxX0Zvcm1hdDtcbmV4cG9ydHMuUkdCX0VUQzJfRm9ybWF0ID0gUkdCX0VUQzJfRm9ybWF0O1xuZXhwb3J0cy5SR0JfUFZSVENfMkJQUFYxX0Zvcm1hdCA9IFJHQl9QVlJUQ18yQlBQVjFfRm9ybWF0O1xuZXhwb3J0cy5SR0JfUFZSVENfNEJQUFYxX0Zvcm1hdCA9IFJHQl9QVlJUQ180QlBQVjFfRm9ybWF0O1xuZXhwb3J0cy5SR0JfUzNUQ19EWFQxX0Zvcm1hdCA9IFJHQl9TM1RDX0RYVDFfRm9ybWF0O1xuZXhwb3J0cy5SR0Zvcm1hdCA9IFJHRm9ybWF0O1xuZXhwb3J0cy5SR0ludGVnZXJGb3JtYXQgPSBSR0ludGVnZXJGb3JtYXQ7XG5leHBvcnRzLlJheSA9IFJheTtcbmV4cG9ydHMuUmVkRm9ybWF0ID0gUmVkRm9ybWF0O1xuZXhwb3J0cy5SZWRJbnRlZ2VyRm9ybWF0ID0gUmVkSW50ZWdlckZvcm1hdDtcbmV4cG9ydHMuUmVpbmhhcmRUb25lTWFwcGluZyA9IFJlaW5oYXJkVG9uZU1hcHBpbmc7XG5leHBvcnRzLlJlcGVhdFdyYXBwaW5nID0gUmVwZWF0V3JhcHBpbmc7XG5leHBvcnRzLlJlcGxhY2VTdGVuY2lsT3AgPSBSZXBsYWNlU3RlbmNpbE9wO1xuZXhwb3J0cy5SZXZlcnNlU3VidHJhY3RFcXVhdGlvbiA9IFJldmVyc2VTdWJ0cmFjdEVxdWF0aW9uO1xuZXhwb3J0cy5TUkdCQ29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlO1xuZXhwb3J0cy5TUkdCVG9MaW5lYXIgPSBTUkdCVG9MaW5lYXI7XG5leHBvcnRzLlNob3J0VHlwZSA9IFNob3J0VHlwZTtcbmV4cG9ydHMuU3BoZXJlID0gU3BoZXJlO1xuZXhwb3J0cy5TcGhlcmljYWwgPSBTcGhlcmljYWw7XG5leHBvcnRzLlNyY0FscGhhRmFjdG9yID0gU3JjQWxwaGFGYWN0b3I7XG5leHBvcnRzLlNyY0FscGhhU2F0dXJhdGVGYWN0b3IgPSBTcmNBbHBoYVNhdHVyYXRlRmFjdG9yO1xuZXhwb3J0cy5TcmNDb2xvckZhY3RvciA9IFNyY0NvbG9yRmFjdG9yO1xuZXhwb3J0cy5TdGF0aWNDb3B5VXNhZ2UgPSBTdGF0aWNDb3B5VXNhZ2U7XG5leHBvcnRzLlN0YXRpY0RyYXdVc2FnZSA9IFN0YXRpY0RyYXdVc2FnZTtcbmV4cG9ydHMuU3RhdGljUmVhZFVzYWdlID0gU3RhdGljUmVhZFVzYWdlO1xuZXhwb3J0cy5TdHJlYW1Db3B5VXNhZ2UgPSBTdHJlYW1Db3B5VXNhZ2U7XG5leHBvcnRzLlN0cmVhbURyYXdVc2FnZSA9IFN0cmVhbURyYXdVc2FnZTtcbmV4cG9ydHMuU3RyZWFtUmVhZFVzYWdlID0gU3RyZWFtUmVhZFVzYWdlO1xuZXhwb3J0cy5TdWJ0cmFjdEVxdWF0aW9uID0gU3VidHJhY3RFcXVhdGlvbjtcbmV4cG9ydHMuU3VidHJhY3RpdmVCbGVuZGluZyA9IFN1YnRyYWN0aXZlQmxlbmRpbmc7XG5leHBvcnRzLlRPVUNIID0gVE9VQ0g7XG5leHBvcnRzLlRhbmdlbnRTcGFjZU5vcm1hbE1hcCA9IFRhbmdlbnRTcGFjZU5vcm1hbE1hcDtcbmV4cG9ydHMuVHJpYW5nbGUgPSBUcmlhbmdsZTtcbmV4cG9ydHMuVHJpYW5nbGVGYW5EcmF3TW9kZSA9IFRyaWFuZ2xlRmFuRHJhd01vZGU7XG5leHBvcnRzLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZSA9IFRyaWFuZ2xlU3RyaXBEcmF3TW9kZTtcbmV4cG9ydHMuVHJpYW5nbGVzRHJhd01vZGUgPSBUcmlhbmdsZXNEcmF3TW9kZTtcbmV4cG9ydHMuVVZNYXBwaW5nID0gVVZNYXBwaW5nO1xuZXhwb3J0cy5VbnNpZ25lZEJ5dGVUeXBlID0gVW5zaWduZWRCeXRlVHlwZTtcbmV4cG9ydHMuVW5zaWduZWRJbnQyNDhUeXBlID0gVW5zaWduZWRJbnQyNDhUeXBlO1xuZXhwb3J0cy5VbnNpZ25lZEludFR5cGUgPSBVbnNpZ25lZEludFR5cGU7XG5leHBvcnRzLlVuc2lnbmVkU2hvcnQ0NDQ0VHlwZSA9IFVuc2lnbmVkU2hvcnQ0NDQ0VHlwZTtcbmV4cG9ydHMuVW5zaWduZWRTaG9ydDU1NTFUeXBlID0gVW5zaWduZWRTaG9ydDU1NTFUeXBlO1xuZXhwb3J0cy5VbnNpZ25lZFNob3J0VHlwZSA9IFVuc2lnbmVkU2hvcnRUeXBlO1xuZXhwb3J0cy5WU01TaGFkb3dNYXAgPSBWU01TaGFkb3dNYXA7XG5leHBvcnRzLlZlY3RvcjIgPSBWZWN0b3IyO1xuZXhwb3J0cy5WZWN0b3IzID0gVmVjdG9yMztcbmV4cG9ydHMuVmVjdG9yNCA9IFZlY3RvcjQ7XG5leHBvcnRzLldyYXBBcm91bmRFbmRpbmcgPSBXcmFwQXJvdW5kRW5kaW5nO1xuZXhwb3J0cy5aZXJvQ3VydmF0dXJlRW5kaW5nID0gWmVyb0N1cnZhdHVyZUVuZGluZztcbmV4cG9ydHMuWmVyb0ZhY3RvciA9IFplcm9GYWN0b3I7XG5leHBvcnRzLlplcm9TbG9wZUVuZGluZyA9IFplcm9TbG9wZUVuZGluZztcbmV4cG9ydHMuWmVyb1N0ZW5jaWxPcCA9IFplcm9TdGVuY2lsT3A7XG5leHBvcnRzLl9TUkdCQUZvcm1hdCA9IF9TUkdCQUZvcm1hdDtcbmV4cG9ydHMuc1JHQkVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW1hZ2VQYXBlciBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9wYXBlci5wbmdcIjtcbmltcG9ydCBpbWFnZVJvY2sgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvcm9jay5wbmdcIjtcbmltcG9ydCBpbWFnZVNjaXNzb3JzIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3NjaXNzb3JzLnBuZ1wiO1xuaW1wb3J0IGltYWdlU21hbGxQYXBlciBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9zbWFsbHBhcGVyLnBuZ1wiO1xuaW1wb3J0IGltYWdlU21hbGxSb2NrIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3NtYWxscm9jay5wbmdcIjtcbmltcG9ydCBpbWFnZVNtYWxsU2Npc3NvcnMgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvc21hbGxzY2lzc29ycy5wbmdcIjtcbmltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCJcbmNvbnN0IG1vZHVsZXMgPSByZXF1aXJlKFwiLi9jbGFzc2VzXCIpO1xuXG4vL0dMT0JBTCBWQVJJQUJMRVNcbmxldCBtb3VzZUNvb3JkcyA9IHt9O1xubW91c2VDb29yZHMucG9zID0gbmV3IG1vZHVsZXMudGhyZWVKc01vZC5WZWN0b3IyKDAsIDApO1xuLy8vQ0FOVkFTIFZBUklBQkxFU1xubGV0IGNhbnZhcztcbmxldCBjb250ZXh0O1xuLy8vQ0FOVkFTIFZBUklBQkxFU1xuXG4vLy9HQU1FIExPT1AgVkFSSUFMRVNcbmxldCBpc3J1bm5pbmcgPSBmYWxzZTtcbmxldCBzZWNvbmRzUGFzc2VkO1xubGV0IG9sZFRpbWVTdGFtcCA9IDAuMDtcbmxldCBmcHM7XG4vLy9HQU1FIExPT1AgVkFSSUFCTEVTXG5cbi8vL0dBTUVPQkpFQ1QgUkVGRVJFTkNFIFZBUklBQkxFU1xuLy8vRU5USVRZIEhPTERFUi8vL1xubGV0IEVudGl0eUhvbGRlciA9IFtdO1xuLy9HTE9CQUwgVkFSSUFCTEVTXG5cbmNvbnN0IFNjZW5lMCA9IHtcbiAgICBDcmVhdGVTY2VuZSgpIHtcblxuXG4gICAgICAgIGxldCByb2NrT2JqID0gbmV3IG1vZHVsZXMuZ2FtZU9iamVjdCgwLCBuZXcgSW1hZ2UoNjAwLCA2MDApKTtcbiAgICAgICAgbGV0IHNjaXNzb3JPYmogPSBuZXcgbW9kdWxlcy5nYW1lT2JqZWN0KDEsIG5ldyBJbWFnZSg2MDAsIDYwMCkpO1xuICAgICAgICBsZXQgcGFwZXJPYmogPSBuZXcgbW9kdWxlcy5nYW1lT2JqZWN0KDIsIG5ldyBJbWFnZSgyMDAsIDIwMCkpO1xuXG5cbiAgICAgICAgcm9ja09iai5JbWFnZS5zcmMgPSBpbWFnZVJvY2s7XG4gICAgICAgIHNjaXNzb3JPYmouSW1hZ2Uuc3JjID0gaW1hZ2VTY2lzc29ycztcbiAgICAgICAgcGFwZXJPYmouSW1hZ2Uuc3JjID0gaW1hZ2VQYXBlcjtcblxuXG4gICAgICAgIC8vICAgICByb2NrT2JqLnRyYW5zZm9ybS50cmFuc2xhdGUoLTYwMCwgMjAwKTtcbiAgICAgICAgLy8gICAgIHNjaXNzb3JPYmoudHJhbnNmb3JtLnRyYW5zbGF0ZSgwLCAtMjAwKTtcblxuXG4gICAgICAgIC8vb25seSBnb2luZyB0byBwdXNoIGluIHR3byBvYmplY3RzIFxuICAgICAgICBFbnRpdHlIb2xkZXIucHVzaChyb2NrT2JqKTtcbiAgICAgICAgRW50aXR5SG9sZGVyLnB1c2goc2Npc3Nvck9iaik7XG4gICAgICAgIC8vICAgIEVudGl0eUhvbGRlci5wdXNoKHBhcGVyT2JqKTtcblxuXG4gICAgfSxcbiAgICBEcmF3U2NlbmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRW50aXR5SG9sZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBEcmF3U3ByaXRlKEVudGl0eUhvbGRlcltpXS5JbWFnZSwgRW50aXR5SG9sZGVyW2ldLngsIEVudGl0eUhvbGRlcltpXS55KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgVUkoKSB7XG5cbiAgICAgICAgbGV0IFVJX1MgPSBuZXcgbW9kdWxlcy5VSV9TcXVhcmUoMjQwLCA1MDAsIDE1MCwgMTUwKTtcbiAgICAgICAgbGV0IFVJX1MxID0gbmV3IG1vZHVsZXMuVUlfU3F1YXJlKDQ0MCwgNTAwLCAxNTAsIDE1MCk7XG4gICAgICAgIGxldCBVSV9TMiA9IG5ldyBtb2R1bGVzLlVJX1NxdWFyZSg2NDAsIDUwMCwgMTUwLCAxNTApO1xuXG5cbiAgICAgICAgLy9DcmVhdGluZyBVSSBvYmplY3RzIHRoYXQgdXNlLCB0aGUgcm9jaywgcGFwZXIsIHNjaXNzb3JzIGFzc2V0cyBcbiAgICAgICAgLy9UaGV5IG1heSBhcHBlYXIgdG8gYmUgdGhlIHNhbWUgbGlrZSBteSBnYW1lT2JqZWN0IG9iamVjdHMsIGJ1dCBcbiAgICAgICAgLy90aGV5J3JlIG5vdCwgdGhleSBwZWZvcm0gYW5kIHNlcnZlIGRpZmZlcmVudCBmdW5jdGlvbnMuXG4gICAgICAgIGxldCBVSV9NYW5hZ2VyID0gW1VJX1MsIFVJX1MxLCBVSV9TMl07XG4gICAgICAgIGxldCBzbWFsbHBhcGVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNtYWxscGFwZXIuc3JjID0gaW1hZ2VTbWFsbFBhcGVyO1xuICAgICAgICBsZXQgc21hbGxyb2NrID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNtYWxscm9jay5zcmMgPSBpbWFnZVNtYWxsUm9jaztcbiAgICAgICAgbGV0IHNtYWxsc2Npc3NvciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzbWFsbHNjaXNzb3Iuc3JjID0gaW1hZ2VTbWFsbFNjaXNzb3JzO1xuXG4gICAgICAgIERyYXdVSVNxdWFyZShVSV9TKTtcblxuXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNtYWxscGFwZXIsIDI3NiwgNTMwKTtcblxuICAgICAgICBEcmF3VUlTcXVhcmUoVUlfUzEpO1xuXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNtYWxscm9jaywgNDc2LCA1MzApO1xuXG5cbiAgICAgICAgRHJhd1VJU3F1YXJlKFVJX1MyKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc21hbGxzY2lzc29yLCA2NzQsIDUzMCk7XG5cbiAgICB9LFxuICAgIFJlbmRlcigpIHtcblxuXG4gICAgfSxcbiAgICBVcGRhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRW50aXR5SG9sZGVyW2ldLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgQ2xlYXJTY2VuZSgpIHtcblxuICAgIH0sXG59O1xuXG5cblxuXG4vL1NjZW5lIERyYXdlciBoZWxwZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIFJlc2V0T3JpZ2luKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRW50aXR5SG9sZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZXNldE9yaWdpbiA9IG5ldyBtb2R1bGVzLnRocmVlSnNNb2QuVmVjdG9yMigwLCAwKTtcblxuICAgICAgICByZXNldE9yaWdpbi54ID0gRW50aXR5SG9sZGVyW2ldLkltYWdlLndpZHRoO1xuICAgICAgICByZXNldE9yaWdpbi55ID0gRW50aXR5SG9sZGVyW2ldLkltYWdlLmhlaWdodDtcblxuICAgICAgICBFbnRpdHlIb2xkZXJbaV0ueCA9IHJlc2V0T3JpZ2luLnggKiAtMTtcbiAgICAgICAgRW50aXR5SG9sZGVyW2ldLnkgPSByZXNldE9yaWdpbi55ICogLTE7XG5cbiAgICAgICAgY29uc29sZS5sb2coRW50aXR5SG9sZGVyW2ldLngrIFwiIFwiICsgRW50aXR5SG9sZGVyW2ldLnkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gRHJhd1Nwcml0ZShDYW52YXNJbWFnZVNvdXJjZV8sIHhfc291cmNlLCB5X3NvdXJjZSkge1xuICAgIFJlc2V0T3JpZ2luKCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoQ2FudmFzSW1hZ2VTb3VyY2VfLCB4X3NvdXJjZSwgeV9zb3VyY2UsIENhbnZhc0ltYWdlU291cmNlXy53aWR0aCwgQ2FudmFzSW1hZ2VTb3VyY2VfLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIERyYXdVSVNxdWFyZShVSV9zcXVhcmUpIHtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFVJX3NxdWFyZS54LCBVSV9zcXVhcmUueSwgVUlfc3F1YXJlLndpZHRoLCBVSV9zcXVhcmUuaGVpZ2h0KTtcbiAgICAvL0hhcmRjb2RlZCBvZmZzZXQgbGVhdmluZyBVSV9zcXVhcmUgd2l0aCBvZmZzZXQgdmFyaWFibGUganVzdCBpbiBjYXNlIEkgd2FudCB0byBkbyBjb29sIHN0dWZmIHdpdGggaXQuXG4gICAgY29udGV4dC5jbGVhclJlY3QoVUlfc3F1YXJlLnggKyA1LCBVSV9zcXVhcmUueSArIDUsIFVJX3NxdWFyZS53aWR0aCAtIDEwLCBVSV9zcXVhcmUuaGVpZ2h0IC0gMTApO1xufVxuXG5mdW5jdGlvbiBpbnRpYWxpemF0aW9uKCkge1xuXG4gICAgLy8gcmVmYWN0b3JDU1MoKTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidmlld3BvcnRcIilbMF07XG5cbiAgICBjb25zb2xlLmxvZyhjYW52YXMpO1xuXG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGlzcnVubmluZyA9IHRydWU7XG4gICAgU2NlbmUwLkNyZWF0ZVNjZW5lKCk7XG5cbiAgICBpZiAoaXNydW5uaW5nID09PSB0cnVlKSB7XG4gICAgICAgIC8vaW4gb3JkZXIgdG8gdXNlIHRoaXMgcHJvcGVybHkgSSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgc3BlZWQgYXQgd2hpY2ggdGhlIGNhbnZhcyBpcyBydW5uaW5nLCBjb252ZXJ0IGl0IHRvIG1pbGlzZWNvbmRzIHRoZW4gZGl2aWRlIGl0IGJ5IG15IGRlc2lyZSBmcmFtZSByYXRlXG4gICAgICAgIC8vIHRoZSB1bml0cyBvZiB0aW1lIGhlcmUgYXJlIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAvL0NyZWF0aW5nIGEgMTYgbXMgZGVsYXkgb24gcHVycG9zZVxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoZ2FtZWxvb3AsIDEwMDAgLyA2MCk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUdhbWVMb29wKHRpbWVTdGFtcCkge1xuICAgIC8vSSB0aGluayB0aGF0IHdoZW4gdGhlIGZpcnN0IHRpbWUgdGhpcyBnZXRzIGV4Y3V0ZWQgdGltZXN0YW1wIGVxdWFscyBvcmlnaW5hbGx5IHplcm9cbiAgICAvL0luIG9yZGVyIGxvY2sgdGhlIGZyYW1lIHJhdGUsIHdoYXQgeW91IG5lZWQgaXMgdG8gbWFrZSBpdCBzbyB0aGF0IHRoZSBmcmFtZSByYXRlIGVxdWFscyB0aGUgc2FtZSBhbW91bnQgb2YgZXhlY3V0aW9ucyBpbiBhIHNlY29uZFxuICAgIHNlY29uZHNQYXNzZWQgPSAodGltZVN0YW1wIC0gb2xkVGltZVN0YW1wKSAvIDEwMDA7XG4gICAgb2xkVGltZVN0YW1wID0gdGltZVN0YW1wO1xuXG4gICAgLy9jYWxjdWxhdGUgZnBzIFxuICAgIGZwcyA9IE1hdGgucm91bmQoMSAvIHNlY29uZHNQYXNzZWQpO1xuXG4gICAgLy9EcmF3IG51bWJlciB0byB0aGUgc2NyZWVuIFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDkzMCwgMCwgMjAwLCAxMDApO1xuICAgIGNvbnRleHQuZm9udCA9ICcyNXB4IEFyaWFsJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY29udGV4dC5maWxsVGV4dChcIkZQUzogXCIgKyBmcHMsIDkzMCwgMzApO1xufVxuXG5cbmZ1bmN0aW9uIGdhbWVsb29wKHRpbWVTdGFtcCkge1xuICAgIC8vY2FsY3VsYXRlR2FtZUxvb3AocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIFNjZW5lMC5SZW5kZXIoKVxuICAgIFNjZW5lMC5VcGRhdGUoKTtcbiAgICBTY2VuZTAuRHJhd1NjZW5lKCk7XG4gICAgU2NlbmUwLlVJKCk7XG4gICAgU2NlbmUwLkNsZWFyU2NlbmUoKTtcbiAgICBpZiAoaXNydW5uaW5nID09IHRydWUpIHtcbiAgICAgICAgLy8gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZWxvb3ApO1xuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoZ2FtZWxvb3AsIDEwMDAgLyA2MCk7XG4gICAgfVxuICAgIC8qcmVxdWVzdCBhbmltYXRpb24gZnJhbWUgd2lsbCBhY3R1YWxseSBzZXQgdGhlIGZyYW1lIHJhdGUgb2YgbXkgY2FudmFzIFxuICAgIHRoZXJlIGlzIG5vIG5lZWQgdG8gYWN0dWFsbHkgZ2V0IHRoZSBzdGVwcyBvZiBteSB3ZWIgYnJvd3NlciBhbmQgdGhlbiB1c2UgdGhvc2UgXG4gICAgc3RlcHMgdG8gc2ltdWxhdGUgbXkgZ2FtZSBsb2dpYy5cbiAgICAgKi9cblxufVxuXG5mdW5jdGlvbiByZWZhY3RvckNTUygpIHtcbiAgICBsZXQgc3R5bGVfdGV4dCA9IFwiXFxuXCI7XG5cbiAgICBsZXQgc3R5bGVfZWxlbWVudHMgPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNUWUxFXCIpO1xuXG4gICAgaWYgKHN0eWxlX2VsZW1lbnRzLmxlbmd0aCA9PSAwKVxuICAgICAgICBhbGVydChcIk5vIFN0eWxlIFRhZyFcIik7XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVfZWxlbWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBzdHlsZV90ZXh0ICs9IHN0eWxlX2VsZW1lbnRzW2ldLm91dGVySFRNTDtcblxuICAgICAgICBzdHlsZV90ZXh0ID0gc3R5bGVfdGV4dC50b1N0cmluZygpLlxuICAgICAgICAgICAgcmVwbGFjZSgvXFx0L2csICcnKS5zcGxpdCgnXFxyXFxuJyk7XG5cbiAgICAgICAgYWxlcnQoc3R5bGVfdGV4dCk7XG4gICAgICAgIGluamVjdENTU0ludG9IVE1MKHN0eWxlX3RleHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5qZWN0Q1NTSW50b0hUTUwoc3RyaW5nXykge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHN0cmluZ18pO1xufVxuXG5pbnRpYWxpemF0aW9uKCk7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBtb3VzZUNvb3Jkcy5wb3MueCA9IGUuY2xpZW50WDtcbiAgICBtb3VzZUNvb3Jkcy5wb3MueSA9IGUuY2xpZW50WTtcbiAgICBjb25zb2xlLmxvZyhcIlggYW5kIFkgcG9zaXRpb24gb2YgTW91c2UgY2xpY2s6XCIgKyBtb3VzZUNvb3Jkcy5wb3MueCArIFwiLFwiICsgbW91c2VDb29yZHMucG9zLnkpO1xufSk7XG5cbi8qIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gYWRkIHRoaXMqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS5rZXkgKyBcIjpidXR0b24gd2FzIHByZXNzZWRcIik7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=