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
let UIHolder = [];
//GLOBAL VARIABLES

const Scene0 = {
    CreateScene() {


        let rockObj = new modules.gameObject(0, new Image(600, 600));
        let scissorObj = new modules.gameObject(1, new Image(600, 600));
        let paperObj = new modules.gameObject(2, new Image(600, 600));


        rockObj.Image.src = _public_images_rock_png__WEBPACK_IMPORTED_MODULE_1__;
        scissorObj.Image.src = _public_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__;
        paperObj.Image.src = _public_images_paper_png__WEBPACK_IMPORTED_MODULE_0__;


        //only going to push in two objects 
        EntityHolder.push(rockObj);
        EntityHolder.push(scissorObj);
        //    EntityHolder.push(paperObj);

        ResetOrigin();

        rockObj.transform.translate(500, 200);
        scissorObj.transform.translate(500, 0);

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
        //scene logic goes here
        for (let i = 0; i < EntityHolder.length; i++) {
            //New way of accessing all elements of entity holder without 
            //constantly having to write code to access EntityHolder
            let tempEntity = EntityHolder[i];


            tempEntity.x = tempEntity.transform.elements[6];
            tempEntity.y = tempEntity.transform.elements[7];
        }
    },
    ClearScene() {
        // write code here to clear scene
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
    Scene0.Update();
    Scene0.Render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxzQ0FBc0MsNEJBQTRCLHFCQUFxQixrQkFBa0Isb0JBQW9CLG9CQUFvQixHQUFHLEtBQUsseUJBQXlCLEdBQUcsbUJBQW1CO0FBQ25YO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REw7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVaQUF1Wjs7QUFFdlo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQSwwQ0FBMEM7OztBQUcxQzs7QUFFQTs7QUFFQSx5Q0FBeUM7OztBQUd6Qzs7QUFFQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkMsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0UsMkVBQTJFOzs7QUFHM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF3Qzs7O0FBR3hDOztBQUVBOztBQUVBLDBDQUEwQzs7O0FBRzFDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUMsZ0NBQWdDOzs7QUFHaEMsdUhBQXVIOztBQUV2SDtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU87QUFDNUQ7O0FBRUEsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLGlCQUFpQjtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QixzQkFBc0I7O0FBRXRCLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVEQUF1RDs7O0FBR3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUEscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7OztBQUd6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0ZBQXdGOzs7QUFHeEY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2Qyx3QkFBd0I7O0FBRXhCLHdCQUF3Qjs7QUFFeEIscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUEsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQSw2RUFBNkU7O0FBRTdFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBLGdGQUFnRjs7QUFFaEY7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSiwwQ0FBMEM7OztBQUcxQztBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCOzs7QUFHeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxzQkFBc0I7O0FBRWhFLG1EQUFtRDtBQUNuRCxJQUFJOzs7QUFHSixvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLElBQUk7OztBQUdKLHdHQUF3Rzs7QUFFeEcsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsa0NBQWtDO0FBQ2xDLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osWUFBWTtBQUNaLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsV0FBVztBQUNYLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7Ozs7OztVQ24vTHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNGO0FBQ1E7QUFDSTtBQUNGO0FBQ1E7QUFDMUM7QUFDMUIsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsNEJBQTRCLG9EQUFTO0FBQ3JDLCtCQUErQix3REFBYTtBQUM1Qyw2QkFBNkIscURBQVU7OztBQUd2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwREFBZTtBQUN4QztBQUNBLHdCQUF3Qix5REFBYztBQUN0QztBQUNBLDJCQUEyQiw2REFBa0I7OztBQUc3QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7O0FBS0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3IvLi9ub2RlX21vZHVsZXMvdGhyZWVqcy1tYXRoL2J1aWxkL3RocmVlanMtbWF0aC5janMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvY2stcGFwZXItc2Npc3Nvci8uL3NyYy9tYWluLXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnZpZXdwb3J0XG57XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIHdpZHRoOiAxMDI0cHg7XG4gICAgaGVpZ2h0OiA3NjhweDtcbn1cbmgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUkscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudmlld3BvcnRcXG57XFxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICB3aWR0aDogMTAyNHB4O1xcbiAgICBoZWlnaHQ6IDc2OHB4O1xcbn1cXG5oMXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRocmVlSnNNb2Q9IHJlcXVpcmUoXCJ0aHJlZWpzLW1hdGhcIik7XG5jbGFzcyBnYW1lT2JqZWN0e1xuICAgIGNvbnN0cnVjdG9yKGlkXyxJbWFnZV8pe1xuICAgICAgICB0aGlzLmlkPSBpZF87XG4gICAgICAgIHRoaXMuSW1hZ2U9IEltYWdlXztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm09IG5ldyB0aHJlZUpzTW9kLk1hdHJpeDMoKTtcbiAgICAgICAgdGhpcy54PTA7XG4gICAgICAgIHRoaXMueT0wO1xuICAgIH1cblxufVxuY2xhc3MgVUlfU3F1YXJle1xuICAgIGNvbnN0cnVjdG9yKHhfLHlfLHdpZHRoXyxoZWlnaHRfLG9mZlNldFhfLG9mZlNldFlfKVxuICAgIHtcbiAgICAgICAgdGhpcy54PXhfO1xuICAgICAgICB0aGlzLnk9eV87XG4gICAgICAgIHRoaXMud2lkdGg9d2lkdGhfO1xuICAgICAgICB0aGlzLmhlaWdodD1oZWlnaHRfO1xuICAgICAgICB0aGlzLm9mZlNldFg9b2ZmU2V0WF87XG4gICAgICAgIHRoaXMub2ZmU2V0WT1vZmZTZXRZXztcbiAgICAgICAgdGhpcy5pbWFnZT0gbmV3IEltYWdlKCk7XG4gICAgfVxuICAgIFxuXG4gICAgY29sbGlzaW9uRGVjdGVjdGlvbigpXG4gICAge1xuICAgICAgICAgLy8vR2V0IHBvaW50IHR1cm4gaXQgaW50byBhIHZlYzIgXG4gICAgbGV0IHBWZWMyPVtwb2ludC54LHBvaW50LnldO1xuICAgIC8vIEdldCBib3VuZGluZyBib3ggcG9zaXRpb24sIHR1cm4gaXQgaW50byBhIHZlYzJcbiAgICBsZXQgYlZlYzI9W2FsaWduX2JvdW5kaW5nX2JveC5taW5YLGFsaWduX2JvdW5kaW5nX2JveC5taW5ZLGFsaWduX2JvdW5kaW5nX2JveC5tYXhYLGFsaWduX2JvdW5kaW5nX2JveC5tYXhZXTtcblxuXG4gICAgbGV0IHFWZWMyPVswLDBdO1xuICAgIC8vR2V0IGNsYW1wZWQgUSBvbiBCIHRvIFBcbiAgICBmb3IoaSA9IDA7IGk8IDI7IGkrKylcbiAgICB7XG4gICAgICAgIGxldCB2ID0gcFZlYzJbaV07XG4gICAgICAgIGlmKHYgPCBiVmVjMi5taW5YKXtcbiAgICAgICAgICAgIHYgPSBiVmVjMi5taW5YXG4gICAgICAgIH1lbHNlIGlmICh2IDxiVmVjMi5taW5ZKXtcbiAgICAgICAgICAgIHY9IGJWZWMyLm1pblk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2ID4gYlZlYzIubWF4WCl7XG4gICAgICAgICAgICB2ID0gYlZlYzIubWF4WFxuICAgICAgICB9ZWxzZSBpZih2ICA+IGJWZWMyLm1heFkpe1xuICAgICAgICAgICAgdiA9IGJWZWMyLm1heFk7XG4gICAgICAgIH1cbiAgICAgICAgcVZlYzJbaV09djtcbiAgICB9XG59XG5cbiAgICBSZXR1cm5Cb3VuZGluZ0JveCgpXG4gICAge1xuICAgICAgICBcbiAgICB9XG59XG5cblxuZXhwb3J0cy5nYW1lT2JqZWN0PSBnYW1lT2JqZWN0O1xuZXhwb3J0cy5VSV9TcXVhcmU9VUlfU3F1YXJlO1xuZXhwb3J0cy50aHJlZUpzTW9kPXRocmVlSnNNb2Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IFJFVklTSU9OID0gJzE0NGRldic7XG5jb25zdCBNT1VTRSA9IHtcblx0TEVGVDogMCxcblx0TUlERExFOiAxLFxuXHRSSUdIVDogMixcblx0Uk9UQVRFOiAwLFxuXHRET0xMWTogMSxcblx0UEFOOiAyXG59O1xuY29uc3QgVE9VQ0ggPSB7XG5cdFJPVEFURTogMCxcblx0UEFOOiAxLFxuXHRET0xMWV9QQU46IDIsXG5cdERPTExZX1JPVEFURTogM1xufTtcbmNvbnN0IEN1bGxGYWNlTm9uZSA9IDA7XG5jb25zdCBDdWxsRmFjZUJhY2sgPSAxO1xuY29uc3QgQ3VsbEZhY2VGcm9udCA9IDI7XG5jb25zdCBDdWxsRmFjZUZyb250QmFjayA9IDM7XG5jb25zdCBCYXNpY1NoYWRvd01hcCA9IDA7XG5jb25zdCBQQ0ZTaGFkb3dNYXAgPSAxO1xuY29uc3QgUENGU29mdFNoYWRvd01hcCA9IDI7XG5jb25zdCBWU01TaGFkb3dNYXAgPSAzO1xuY29uc3QgRnJvbnRTaWRlID0gMDtcbmNvbnN0IEJhY2tTaWRlID0gMTtcbmNvbnN0IERvdWJsZVNpZGUgPSAyO1xuY29uc3QgTm9CbGVuZGluZyA9IDA7XG5jb25zdCBOb3JtYWxCbGVuZGluZyA9IDE7XG5jb25zdCBBZGRpdGl2ZUJsZW5kaW5nID0gMjtcbmNvbnN0IFN1YnRyYWN0aXZlQmxlbmRpbmcgPSAzO1xuY29uc3QgTXVsdGlwbHlCbGVuZGluZyA9IDQ7XG5jb25zdCBDdXN0b21CbGVuZGluZyA9IDU7XG5jb25zdCBBZGRFcXVhdGlvbiA9IDEwMDtcbmNvbnN0IFN1YnRyYWN0RXF1YXRpb24gPSAxMDE7XG5jb25zdCBSZXZlcnNlU3VidHJhY3RFcXVhdGlvbiA9IDEwMjtcbmNvbnN0IE1pbkVxdWF0aW9uID0gMTAzO1xuY29uc3QgTWF4RXF1YXRpb24gPSAxMDQ7XG5jb25zdCBaZXJvRmFjdG9yID0gMjAwO1xuY29uc3QgT25lRmFjdG9yID0gMjAxO1xuY29uc3QgU3JjQ29sb3JGYWN0b3IgPSAyMDI7XG5jb25zdCBPbmVNaW51c1NyY0NvbG9yRmFjdG9yID0gMjAzO1xuY29uc3QgU3JjQWxwaGFGYWN0b3IgPSAyMDQ7XG5jb25zdCBPbmVNaW51c1NyY0FscGhhRmFjdG9yID0gMjA1O1xuY29uc3QgRHN0QWxwaGFGYWN0b3IgPSAyMDY7XG5jb25zdCBPbmVNaW51c0RzdEFscGhhRmFjdG9yID0gMjA3O1xuY29uc3QgRHN0Q29sb3JGYWN0b3IgPSAyMDg7XG5jb25zdCBPbmVNaW51c0RzdENvbG9yRmFjdG9yID0gMjA5O1xuY29uc3QgU3JjQWxwaGFTYXR1cmF0ZUZhY3RvciA9IDIxMDtcbmNvbnN0IE5ldmVyRGVwdGggPSAwO1xuY29uc3QgQWx3YXlzRGVwdGggPSAxO1xuY29uc3QgTGVzc0RlcHRoID0gMjtcbmNvbnN0IExlc3NFcXVhbERlcHRoID0gMztcbmNvbnN0IEVxdWFsRGVwdGggPSA0O1xuY29uc3QgR3JlYXRlckVxdWFsRGVwdGggPSA1O1xuY29uc3QgR3JlYXRlckRlcHRoID0gNjtcbmNvbnN0IE5vdEVxdWFsRGVwdGggPSA3O1xuY29uc3QgTXVsdGlwbHlPcGVyYXRpb24gPSAwO1xuY29uc3QgTWl4T3BlcmF0aW9uID0gMTtcbmNvbnN0IEFkZE9wZXJhdGlvbiA9IDI7XG5jb25zdCBOb1RvbmVNYXBwaW5nID0gMDtcbmNvbnN0IExpbmVhclRvbmVNYXBwaW5nID0gMTtcbmNvbnN0IFJlaW5oYXJkVG9uZU1hcHBpbmcgPSAyO1xuY29uc3QgQ2luZW9uVG9uZU1hcHBpbmcgPSAzO1xuY29uc3QgQUNFU0ZpbG1pY1RvbmVNYXBwaW5nID0gNDtcbmNvbnN0IEN1c3RvbVRvbmVNYXBwaW5nID0gNTtcbmNvbnN0IFVWTWFwcGluZyA9IDMwMDtcbmNvbnN0IEN1YmVSZWZsZWN0aW9uTWFwcGluZyA9IDMwMTtcbmNvbnN0IEN1YmVSZWZyYWN0aW9uTWFwcGluZyA9IDMwMjtcbmNvbnN0IEVxdWlyZWN0YW5ndWxhclJlZmxlY3Rpb25NYXBwaW5nID0gMzAzO1xuY29uc3QgRXF1aXJlY3Rhbmd1bGFyUmVmcmFjdGlvbk1hcHBpbmcgPSAzMDQ7XG5jb25zdCBDdWJlVVZSZWZsZWN0aW9uTWFwcGluZyA9IDMwNjtcbmNvbnN0IFJlcGVhdFdyYXBwaW5nID0gMTAwMDtcbmNvbnN0IENsYW1wVG9FZGdlV3JhcHBpbmcgPSAxMDAxO1xuY29uc3QgTWlycm9yZWRSZXBlYXRXcmFwcGluZyA9IDEwMDI7XG5jb25zdCBOZWFyZXN0RmlsdGVyID0gMTAwMztcbmNvbnN0IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyID0gMTAwNDtcbmNvbnN0IE5lYXJlc3RNaXBNYXBOZWFyZXN0RmlsdGVyID0gMTAwNDtcbmNvbnN0IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIgPSAxMDA1O1xuY29uc3QgTmVhcmVzdE1pcE1hcExpbmVhckZpbHRlciA9IDEwMDU7XG5jb25zdCBMaW5lYXJGaWx0ZXIgPSAxMDA2O1xuY29uc3QgTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlciA9IDEwMDc7XG5jb25zdCBMaW5lYXJNaXBNYXBOZWFyZXN0RmlsdGVyID0gMTAwNztcbmNvbnN0IExpbmVhck1pcG1hcExpbmVhckZpbHRlciA9IDEwMDg7XG5jb25zdCBMaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXIgPSAxMDA4O1xuY29uc3QgVW5zaWduZWRCeXRlVHlwZSA9IDEwMDk7XG5jb25zdCBCeXRlVHlwZSA9IDEwMTA7XG5jb25zdCBTaG9ydFR5cGUgPSAxMDExO1xuY29uc3QgVW5zaWduZWRTaG9ydFR5cGUgPSAxMDEyO1xuY29uc3QgSW50VHlwZSA9IDEwMTM7XG5jb25zdCBVbnNpZ25lZEludFR5cGUgPSAxMDE0O1xuY29uc3QgRmxvYXRUeXBlID0gMTAxNTtcbmNvbnN0IEhhbGZGbG9hdFR5cGUgPSAxMDE2O1xuY29uc3QgVW5zaWduZWRTaG9ydDQ0NDRUeXBlID0gMTAxNztcbmNvbnN0IFVuc2lnbmVkU2hvcnQ1NTUxVHlwZSA9IDEwMTg7XG5jb25zdCBVbnNpZ25lZEludDI0OFR5cGUgPSAxMDIwO1xuY29uc3QgQWxwaGFGb3JtYXQgPSAxMDIxO1xuY29uc3QgUkdCRm9ybWF0ID0gMTAyMjsgLy8gQGRlcHJlY2F0ZWQgc2luY2UgcjEzN1xuXG5jb25zdCBSR0JBRm9ybWF0ID0gMTAyMztcbmNvbnN0IEx1bWluYW5jZUZvcm1hdCA9IDEwMjQ7XG5jb25zdCBMdW1pbmFuY2VBbHBoYUZvcm1hdCA9IDEwMjU7XG5jb25zdCBEZXB0aEZvcm1hdCA9IDEwMjY7XG5jb25zdCBEZXB0aFN0ZW5jaWxGb3JtYXQgPSAxMDI3O1xuY29uc3QgUmVkRm9ybWF0ID0gMTAyODtcbmNvbnN0IFJlZEludGVnZXJGb3JtYXQgPSAxMDI5O1xuY29uc3QgUkdGb3JtYXQgPSAxMDMwO1xuY29uc3QgUkdJbnRlZ2VyRm9ybWF0ID0gMTAzMTtcbmNvbnN0IFJHQkFJbnRlZ2VyRm9ybWF0ID0gMTAzMztcbmNvbnN0IFJHQl9TM1RDX0RYVDFfRm9ybWF0ID0gMzM3NzY7XG5jb25zdCBSR0JBX1MzVENfRFhUMV9Gb3JtYXQgPSAzMzc3NztcbmNvbnN0IFJHQkFfUzNUQ19EWFQzX0Zvcm1hdCA9IDMzNzc4O1xuY29uc3QgUkdCQV9TM1RDX0RYVDVfRm9ybWF0ID0gMzM3Nzk7XG5jb25zdCBSR0JfUFZSVENfNEJQUFYxX0Zvcm1hdCA9IDM1ODQwO1xuY29uc3QgUkdCX1BWUlRDXzJCUFBWMV9Gb3JtYXQgPSAzNTg0MTtcbmNvbnN0IFJHQkFfUFZSVENfNEJQUFYxX0Zvcm1hdCA9IDM1ODQyO1xuY29uc3QgUkdCQV9QVlJUQ18yQlBQVjFfRm9ybWF0ID0gMzU4NDM7XG5jb25zdCBSR0JfRVRDMV9Gb3JtYXQgPSAzNjE5NjtcbmNvbnN0IFJHQl9FVEMyX0Zvcm1hdCA9IDM3NDkyO1xuY29uc3QgUkdCQV9FVEMyX0VBQ19Gb3JtYXQgPSAzNzQ5NjtcbmNvbnN0IFJHQkFfQVNUQ180eDRfRm9ybWF0ID0gMzc4MDg7XG5jb25zdCBSR0JBX0FTVENfNXg0X0Zvcm1hdCA9IDM3ODA5O1xuY29uc3QgUkdCQV9BU1RDXzV4NV9Gb3JtYXQgPSAzNzgxMDtcbmNvbnN0IFJHQkFfQVNUQ182eDVfRm9ybWF0ID0gMzc4MTE7XG5jb25zdCBSR0JBX0FTVENfNng2X0Zvcm1hdCA9IDM3ODEyO1xuY29uc3QgUkdCQV9BU1RDXzh4NV9Gb3JtYXQgPSAzNzgxMztcbmNvbnN0IFJHQkFfQVNUQ184eDZfRm9ybWF0ID0gMzc4MTQ7XG5jb25zdCBSR0JBX0FTVENfOHg4X0Zvcm1hdCA9IDM3ODE1O1xuY29uc3QgUkdCQV9BU1RDXzEweDVfRm9ybWF0ID0gMzc4MTY7XG5jb25zdCBSR0JBX0FTVENfMTB4Nl9Gb3JtYXQgPSAzNzgxNztcbmNvbnN0IFJHQkFfQVNUQ18xMHg4X0Zvcm1hdCA9IDM3ODE4O1xuY29uc3QgUkdCQV9BU1RDXzEweDEwX0Zvcm1hdCA9IDM3ODE5O1xuY29uc3QgUkdCQV9BU1RDXzEyeDEwX0Zvcm1hdCA9IDM3ODIwO1xuY29uc3QgUkdCQV9BU1RDXzEyeDEyX0Zvcm1hdCA9IDM3ODIxO1xuY29uc3QgUkdCQV9CUFRDX0Zvcm1hdCA9IDM2NDkyO1xuY29uc3QgTG9vcE9uY2UgPSAyMjAwO1xuY29uc3QgTG9vcFJlcGVhdCA9IDIyMDE7XG5jb25zdCBMb29wUGluZ1BvbmcgPSAyMjAyO1xuY29uc3QgSW50ZXJwb2xhdGVEaXNjcmV0ZSA9IDIzMDA7XG5jb25zdCBJbnRlcnBvbGF0ZUxpbmVhciA9IDIzMDE7XG5jb25zdCBJbnRlcnBvbGF0ZVNtb290aCA9IDIzMDI7XG5jb25zdCBaZXJvQ3VydmF0dXJlRW5kaW5nID0gMjQwMDtcbmNvbnN0IFplcm9TbG9wZUVuZGluZyA9IDI0MDE7XG5jb25zdCBXcmFwQXJvdW5kRW5kaW5nID0gMjQwMjtcbmNvbnN0IE5vcm1hbEFuaW1hdGlvbkJsZW5kTW9kZSA9IDI1MDA7XG5jb25zdCBBZGRpdGl2ZUFuaW1hdGlvbkJsZW5kTW9kZSA9IDI1MDE7XG5jb25zdCBUcmlhbmdsZXNEcmF3TW9kZSA9IDA7XG5jb25zdCBUcmlhbmdsZVN0cmlwRHJhd01vZGUgPSAxO1xuY29uc3QgVHJpYW5nbGVGYW5EcmF3TW9kZSA9IDI7XG5jb25zdCBMaW5lYXJFbmNvZGluZyA9IDMwMDA7XG5jb25zdCBzUkdCRW5jb2RpbmcgPSAzMDAxO1xuY29uc3QgQmFzaWNEZXB0aFBhY2tpbmcgPSAzMjAwO1xuY29uc3QgUkdCQURlcHRoUGFja2luZyA9IDMyMDE7XG5jb25zdCBUYW5nZW50U3BhY2VOb3JtYWxNYXAgPSAwO1xuY29uc3QgT2JqZWN0U3BhY2VOb3JtYWxNYXAgPSAxOyAvLyBDb2xvciBzcGFjZSBzdHJpbmcgaWRlbnRpZmllcnMsIG1hdGNoaW5nIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgNCBhbmQgV2ViR1BVIG5hbWVzIHdoZXJlIGF2YWlsYWJsZS5cblxuY29uc3QgTm9Db2xvclNwYWNlID0gJyc7XG5jb25zdCBTUkdCQ29sb3JTcGFjZSA9ICdzcmdiJztcbmNvbnN0IExpbmVhclNSR0JDb2xvclNwYWNlID0gJ3NyZ2ItbGluZWFyJztcbmNvbnN0IFplcm9TdGVuY2lsT3AgPSAwO1xuY29uc3QgS2VlcFN0ZW5jaWxPcCA9IDc2ODA7XG5jb25zdCBSZXBsYWNlU3RlbmNpbE9wID0gNzY4MTtcbmNvbnN0IEluY3JlbWVudFN0ZW5jaWxPcCA9IDc2ODI7XG5jb25zdCBEZWNyZW1lbnRTdGVuY2lsT3AgPSA3NjgzO1xuY29uc3QgSW5jcmVtZW50V3JhcFN0ZW5jaWxPcCA9IDM0MDU1O1xuY29uc3QgRGVjcmVtZW50V3JhcFN0ZW5jaWxPcCA9IDM0MDU2O1xuY29uc3QgSW52ZXJ0U3RlbmNpbE9wID0gNTM4NjtcbmNvbnN0IE5ldmVyU3RlbmNpbEZ1bmMgPSA1MTI7XG5jb25zdCBMZXNzU3RlbmNpbEZ1bmMgPSA1MTM7XG5jb25zdCBFcXVhbFN0ZW5jaWxGdW5jID0gNTE0O1xuY29uc3QgTGVzc0VxdWFsU3RlbmNpbEZ1bmMgPSA1MTU7XG5jb25zdCBHcmVhdGVyU3RlbmNpbEZ1bmMgPSA1MTY7XG5jb25zdCBOb3RFcXVhbFN0ZW5jaWxGdW5jID0gNTE3O1xuY29uc3QgR3JlYXRlckVxdWFsU3RlbmNpbEZ1bmMgPSA1MTg7XG5jb25zdCBBbHdheXNTdGVuY2lsRnVuYyA9IDUxOTtcbmNvbnN0IFN0YXRpY0RyYXdVc2FnZSA9IDM1MDQ0O1xuY29uc3QgRHluYW1pY0RyYXdVc2FnZSA9IDM1MDQ4O1xuY29uc3QgU3RyZWFtRHJhd1VzYWdlID0gMzUwNDA7XG5jb25zdCBTdGF0aWNSZWFkVXNhZ2UgPSAzNTA0NTtcbmNvbnN0IER5bmFtaWNSZWFkVXNhZ2UgPSAzNTA0OTtcbmNvbnN0IFN0cmVhbVJlYWRVc2FnZSA9IDM1MDQxO1xuY29uc3QgU3RhdGljQ29weVVzYWdlID0gMzUwNDY7XG5jb25zdCBEeW5hbWljQ29weVVzYWdlID0gMzUwNTA7XG5jb25zdCBTdHJlYW1Db3B5VXNhZ2UgPSAzNTA0MjtcbmNvbnN0IEdMU0wxID0gJzEwMCc7XG5jb25zdCBHTFNMMyA9ICczMDAgZXMnO1xuY29uc3QgX1NSR0JBRm9ybWF0ID0gMTAzNTsgLy8gZmFsbGJhY2sgZm9yIFdlYkdMIDFcblxuY2xhc3MgVmVjdG9yMiB7XG5cdGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuXHRcdFZlY3RvcjIucHJvdG90eXBlLmlzVmVjdG9yMiA9IHRydWU7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLng7XG5cdH1cblxuXHRzZXQgd2lkdGgodmFsdWUpIHtcblx0XHR0aGlzLnggPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMueTtcblx0fVxuXG5cdHNldCBoZWlnaHQodmFsdWUpIHtcblx0XHR0aGlzLnkgPSB2YWx1ZTtcblx0fVxuXG5cdHNldCh4LCB5KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMueCA9IHNjYWxhcjtcblx0XHR0aGlzLnkgPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRYKHgpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0WSh5KSB7XG5cdFx0dGhpcy55ID0geTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHRoaXMueCA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLnkgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KGluZGV4KSB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy54O1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiB0aGlzLnk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLngsIHRoaXMueSk7XG5cdH1cblxuXHRjb3B5KHYpIHtcblx0XHR0aGlzLnggPSB2Lng7XG5cdFx0dGhpcy55ID0gdi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkKHYpIHtcblx0XHR0aGlzLnggKz0gdi54O1xuXHRcdHRoaXMueSArPSB2Lnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGRTY2FsYXIocykge1xuXHRcdHRoaXMueCArPSBzO1xuXHRcdHRoaXMueSArPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkVmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54ICsgYi54O1xuXHRcdHRoaXMueSA9IGEueSArIGIueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxlZFZlY3Rvcih2LCBzKSB7XG5cdFx0dGhpcy54ICs9IHYueCAqIHM7XG5cdFx0dGhpcy55ICs9IHYueSAqIHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWIodikge1xuXHRcdHRoaXMueCAtPSB2Lng7XG5cdFx0dGhpcy55IC09IHYueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1YlNjYWxhcihzKSB7XG5cdFx0dGhpcy54IC09IHM7XG5cdFx0dGhpcy55IC09IHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWJWZWN0b3JzKGEsIGIpIHtcblx0XHR0aGlzLnggPSBhLnggLSBiLng7XG5cdFx0dGhpcy55ID0gYS55IC0gYi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkodikge1xuXHRcdHRoaXMueCAqPSB2Lng7XG5cdFx0dGhpcy55ICo9IHYueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMueCAqPSBzY2FsYXI7XG5cdFx0dGhpcy55ICo9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpdmlkZSh2KSB7XG5cdFx0dGhpcy54IC89IHYueDtcblx0XHR0aGlzLnkgLz0gdi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGl2aWRlU2NhbGFyKHNjYWxhcikge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKDEgLyBzY2FsYXIpO1xuXHR9XG5cblx0YXBwbHlNYXRyaXgzKG0pIHtcblx0XHRjb25zdCB4ID0gdGhpcy54LFxuXHRcdFx0XHRcdHkgPSB0aGlzLnk7XG5cdFx0Y29uc3QgZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy54ID0gZVswXSAqIHggKyBlWzNdICogeSArIGVbNl07XG5cdFx0dGhpcy55ID0gZVsxXSAqIHggKyBlWzRdICogeSArIGVbN107XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtaW4odikge1xuXHRcdHRoaXMueCA9IE1hdGgubWluKHRoaXMueCwgdi54KTtcblx0XHR0aGlzLnkgPSBNYXRoLm1pbih0aGlzLnksIHYueSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYXgodikge1xuXHRcdHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgdi54KTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIHYueSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcChtaW4sIG1heCkge1xuXHRcdC8vIGFzc3VtZXMgbWluIDwgbWF4LCBjb21wb25lbnR3aXNlXG5cdFx0dGhpcy54ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB0aGlzLngpKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHRoaXMueSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXBTY2FsYXIobWluVmFsLCBtYXhWYWwpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy54KSk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXBMZW5ndGgobWluLCBtYXgpIHtcblx0XHRjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcihsZW5ndGggfHwgMSkubXVsdGlwbHlTY2FsYXIoTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIGxlbmd0aCkpKTtcblx0fVxuXG5cdGZsb29yKCkge1xuXHRcdHRoaXMueCA9IE1hdGguZmxvb3IodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLmZsb29yKHRoaXMueSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjZWlsKCkge1xuXHRcdHRoaXMueCA9IE1hdGguY2VpbCh0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGguY2VpbCh0aGlzLnkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm91bmQoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdW5kVG9aZXJvKCkge1xuXHRcdHRoaXMueCA9IHRoaXMueCA8IDAgPyBNYXRoLmNlaWwodGhpcy54KSA6IE1hdGguZmxvb3IodGhpcy54KTtcblx0XHR0aGlzLnkgPSB0aGlzLnkgPCAwID8gTWF0aC5jZWlsKHRoaXMueSkgOiBNYXRoLmZsb29yKHRoaXMueSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWdhdGUoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZG90KHYpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xuXHR9XG5cblx0Y3Jvc3Modikge1xuXHRcdHJldHVybiB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2Lng7XG5cdH1cblxuXHRsZW5ndGhTcSgpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuXHR9XG5cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcblx0fVxuXG5cdG1hbmhhdHRhbkxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModGhpcy54KSArIE1hdGguYWJzKHRoaXMueSk7XG5cdH1cblxuXHRub3JtYWxpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkgfHwgMSk7XG5cdH1cblxuXHRhbmdsZSgpIHtcblx0XHQvLyBjb21wdXRlcyB0aGUgYW5nbGUgaW4gcmFkaWFucyB3aXRoIHJlc3BlY3QgdG8gdGhlIHBvc2l0aXZlIHgtYXhpc1xuXHRcdGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMigtdGhpcy55LCAtdGhpcy54KSArIE1hdGguUEk7XG5cdFx0cmV0dXJuIGFuZ2xlO1xuXHR9XG5cblx0ZGlzdGFuY2VUbyh2KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcblx0fVxuXG5cdGRpc3RhbmNlVG9TcXVhcmVkKHYpIHtcblx0XHRjb25zdCBkeCA9IHRoaXMueCAtIHYueCxcblx0XHRcdFx0XHRkeSA9IHRoaXMueSAtIHYueTtcblx0XHRyZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG5cdH1cblxuXHRtYW5oYXR0YW5EaXN0YW5jZVRvKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdi54KSArIE1hdGguYWJzKHRoaXMueSAtIHYueSk7XG5cdH1cblxuXHRzZXRMZW5ndGgobGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIobGVuZ3RoKTtcblx0fVxuXG5cdGxlcnAodiwgYWxwaGEpIHtcblx0XHR0aGlzLnggKz0gKHYueCAtIHRoaXMueCkgKiBhbHBoYTtcblx0XHR0aGlzLnkgKz0gKHYueSAtIHRoaXMueSkgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxlcnBWZWN0b3JzKHYxLCB2MiwgYWxwaGEpIHtcblx0XHR0aGlzLnggPSB2MS54ICsgKHYyLnggLSB2MS54KSAqIGFscGhhO1xuXHRcdHRoaXMueSA9IHYxLnkgKyAodjIueSAtIHYxLnkpICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHModikge1xuXHRcdHJldHVybiB2LnggPT09IHRoaXMueCAmJiB2LnkgPT09IHRoaXMueTtcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdHRoaXMueCA9IGFycmF5W29mZnNldF07XG5cdFx0dGhpcy55ID0gYXJyYXlbb2Zmc2V0ICsgMV07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRhcnJheVtvZmZzZXRdID0gdGhpcy54O1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGhpcy55O1xuXHRcdHJldHVybiBhcnJheTtcblx0fSAvLyBmcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGluZGV4ICkge1xuXHQvLyBcdHRoaXMueCA9IGF0dHJpYnV0ZS5nZXRYKCBpbmRleCApO1xuXHQvLyBcdHRoaXMueSA9IGF0dHJpYnV0ZS5nZXRZKCBpbmRleCApO1xuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRyb3RhdGVBcm91bmQoY2VudGVyLCBhbmdsZSkge1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSksXG5cdFx0XHRcdFx0cyA9IE1hdGguc2luKGFuZ2xlKTtcblx0XHRjb25zdCB4ID0gdGhpcy54IC0gY2VudGVyLng7XG5cdFx0Y29uc3QgeSA9IHRoaXMueSAtIGNlbnRlci55O1xuXHRcdHRoaXMueCA9IHggKiBjIC0geSAqIHMgKyBjZW50ZXIueDtcblx0XHR0aGlzLnkgPSB4ICogcyArIHkgKiBjICsgY2VudGVyLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyYW5kb20oKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5yYW5kb20oKTtcblx0XHR0aGlzLnkgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0KltTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHlpZWxkIHRoaXMueDtcblx0XHR5aWVsZCB0aGlzLnk7XG5cdH1cblxufVxuXG5jb25zdCBfbHV0ID0gWycwMCcsICcwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcwYScsICcwYicsICcwYycsICcwZCcsICcwZScsICcwZicsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcxYScsICcxYicsICcxYycsICcxZCcsICcxZScsICcxZicsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICcyYScsICcyYicsICcyYycsICcyZCcsICcyZScsICcyZicsICczMCcsICczMScsICczMicsICczMycsICczNCcsICczNScsICczNicsICczNycsICczOCcsICczOScsICczYScsICczYicsICczYycsICczZCcsICczZScsICczZicsICc0MCcsICc0MScsICc0MicsICc0MycsICc0NCcsICc0NScsICc0NicsICc0NycsICc0OCcsICc0OScsICc0YScsICc0YicsICc0YycsICc0ZCcsICc0ZScsICc0ZicsICc1MCcsICc1MScsICc1MicsICc1MycsICc1NCcsICc1NScsICc1NicsICc1NycsICc1OCcsICc1OScsICc1YScsICc1YicsICc1YycsICc1ZCcsICc1ZScsICc1ZicsICc2MCcsICc2MScsICc2MicsICc2MycsICc2NCcsICc2NScsICc2NicsICc2NycsICc2OCcsICc2OScsICc2YScsICc2YicsICc2YycsICc2ZCcsICc2ZScsICc2ZicsICc3MCcsICc3MScsICc3MicsICc3MycsICc3NCcsICc3NScsICc3NicsICc3NycsICc3OCcsICc3OScsICc3YScsICc3YicsICc3YycsICc3ZCcsICc3ZScsICc3ZicsICc4MCcsICc4MScsICc4MicsICc4MycsICc4NCcsICc4NScsICc4NicsICc4NycsICc4OCcsICc4OScsICc4YScsICc4YicsICc4YycsICc4ZCcsICc4ZScsICc4ZicsICc5MCcsICc5MScsICc5MicsICc5MycsICc5NCcsICc5NScsICc5NicsICc5NycsICc5OCcsICc5OScsICc5YScsICc5YicsICc5YycsICc5ZCcsICc5ZScsICc5ZicsICdhMCcsICdhMScsICdhMicsICdhMycsICdhNCcsICdhNScsICdhNicsICdhNycsICdhOCcsICdhOScsICdhYScsICdhYicsICdhYycsICdhZCcsICdhZScsICdhZicsICdiMCcsICdiMScsICdiMicsICdiMycsICdiNCcsICdiNScsICdiNicsICdiNycsICdiOCcsICdiOScsICdiYScsICdiYicsICdiYycsICdiZCcsICdiZScsICdiZicsICdjMCcsICdjMScsICdjMicsICdjMycsICdjNCcsICdjNScsICdjNicsICdjNycsICdjOCcsICdjOScsICdjYScsICdjYicsICdjYycsICdjZCcsICdjZScsICdjZicsICdkMCcsICdkMScsICdkMicsICdkMycsICdkNCcsICdkNScsICdkNicsICdkNycsICdkOCcsICdkOScsICdkYScsICdkYicsICdkYycsICdkZCcsICdkZScsICdkZicsICdlMCcsICdlMScsICdlMicsICdlMycsICdlNCcsICdlNScsICdlNicsICdlNycsICdlOCcsICdlOScsICdlYScsICdlYicsICdlYycsICdlZCcsICdlZScsICdlZicsICdmMCcsICdmMScsICdmMicsICdmMycsICdmNCcsICdmNScsICdmNicsICdmNycsICdmOCcsICdmOScsICdmYScsICdmYicsICdmYycsICdmZCcsICdmZScsICdmZiddO1xubGV0IF9zZWVkID0gMTIzNDU2NztcbmNvbnN0IERFRzJSQUQgPSBNYXRoLlBJIC8gMTgwO1xuY29uc3QgUkFEMkRFRyA9IDE4MCAvIE1hdGguUEk7IC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdC8yMTk2MzEzNiMyMTk2MzEzNlxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVVSUQoKSB7XG5cdGNvbnN0IGQwID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRjb25zdCBkMSA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0Y29uc3QgZDIgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdGNvbnN0IGQzID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRjb25zdCB1dWlkID0gX2x1dFtkMCAmIDB4ZmZdICsgX2x1dFtkMCA+PiA4ICYgMHhmZl0gKyBfbHV0W2QwID4+IDE2ICYgMHhmZl0gKyBfbHV0W2QwID4+IDI0ICYgMHhmZl0gKyAnLScgKyBfbHV0W2QxICYgMHhmZl0gKyBfbHV0W2QxID4+IDggJiAweGZmXSArICctJyArIF9sdXRbZDEgPj4gMTYgJiAweDBmIHwgMHg0MF0gKyBfbHV0W2QxID4+IDI0ICYgMHhmZl0gKyAnLScgKyBfbHV0W2QyICYgMHgzZiB8IDB4ODBdICsgX2x1dFtkMiA+PiA4ICYgMHhmZl0gKyAnLScgKyBfbHV0W2QyID4+IDE2ICYgMHhmZl0gKyBfbHV0W2QyID4+IDI0ICYgMHhmZl0gKyBfbHV0W2QzICYgMHhmZl0gKyBfbHV0W2QzID4+IDggJiAweGZmXSArIF9sdXRbZDMgPj4gMTYgJiAweGZmXSArIF9sdXRbZDMgPj4gMjQgJiAweGZmXTsgLy8gLnRvTG93ZXJDYXNlKCkgaGVyZSBmbGF0dGVucyBjb25jYXRlbmF0ZWQgc3RyaW5ncyB0byBzYXZlIGhlYXAgbWVtb3J5IHNwYWNlLlxuXG5cdHJldHVybiB1dWlkLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG59IC8vIGNvbXB1dGUgZXVjbGlkZWFuIG1vZHVsbyBvZiBtICUgblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxvX29wZXJhdGlvblxuXG5cbmZ1bmN0aW9uIGV1Y2xpZGVhbk1vZHVsbyhuLCBtKSB7XG5cdHJldHVybiAobiAlIG0gKyBtKSAlIG07XG59IC8vIExpbmVhciBtYXBwaW5nIGZyb20gcmFuZ2UgPGExLCBhMj4gdG8gcmFuZ2UgPGIxLCBiMj5cblxuXG5mdW5jdGlvbiBtYXBMaW5lYXIoeCwgYTEsIGEyLCBiMSwgYjIpIHtcblx0cmV0dXJuIGIxICsgKHggLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG59IC8vIGh0dHBzOi8vd3d3LmdhbWVkZXYubmV0L3R1dG9yaWFscy9wcm9ncmFtbWluZy9nZW5lcmFsLWFuZC1nYW1lcGxheS1wcm9ncmFtbWluZy9pbnZlcnNlLWxlcnAtYS1zdXBlci11c2VmdWwteWV0LW9mdGVuLW92ZXJsb29rZWQtZnVuY3Rpb24tcjUyMzAvXG5cblxuZnVuY3Rpb24gaW52ZXJzZUxlcnAoeCwgeSwgdmFsdWUpIHtcblx0aWYgKHggIT09IHkpIHtcblx0XHRyZXR1cm4gKHZhbHVlIC0geCkgLyAoeSAtIHgpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAwO1xuXHR9XG59IC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpbmVhcl9pbnRlcnBvbGF0aW9uXG5cblxuZnVuY3Rpb24gbGVycCh4LCB5LCB0KSB7XG5cdHJldHVybiAoMSAtIHQpICogeCArIHQgKiB5O1xufSAvLyBodHRwOi8vd3d3LnJvcnlkcmlzY29sbC5jb20vMjAxNi8wMy8wNy9mcmFtZS1yYXRlLWluZGVwZW5kZW50LWRhbXBpbmctdXNpbmctbGVycC9cblxuXG5mdW5jdGlvbiBkYW1wKHgsIHksIGxhbWJkYSwgZHQpIHtcblx0cmV0dXJuIGxlcnAoeCwgeSwgMSAtIE1hdGguZXhwKC1sYW1iZGEgKiBkdCkpO1xufSAvLyBodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvdmNzam55ejd4NFxuXG5cbmZ1bmN0aW9uIHBpbmdwb25nKHgsIGxlbmd0aCA9IDEpIHtcblx0cmV0dXJuIGxlbmd0aCAtIE1hdGguYWJzKGV1Y2xpZGVhbk1vZHVsbyh4LCBsZW5ndGggKiAyKSAtIGxlbmd0aCk7XG59IC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU21vb3Roc3RlcFxuXG5cbmZ1bmN0aW9uIHNtb290aHN0ZXAoeCwgbWluLCBtYXgpIHtcblx0aWYgKHggPD0gbWluKSByZXR1cm4gMDtcblx0aWYgKHggPj0gbWF4KSByZXR1cm4gMTtcblx0eCA9ICh4IC0gbWluKSAvIChtYXggLSBtaW4pO1xuXHRyZXR1cm4geCAqIHggKiAoMyAtIDIgKiB4KTtcbn1cblxuZnVuY3Rpb24gc21vb3RoZXJzdGVwKHgsIG1pbiwgbWF4KSB7XG5cdGlmICh4IDw9IG1pbikgcmV0dXJuIDA7XG5cdGlmICh4ID49IG1heCkgcmV0dXJuIDE7XG5cdHggPSAoeCAtIG1pbikgLyAobWF4IC0gbWluKTtcblx0cmV0dXJuIHggKiB4ICogeCAqICh4ICogKHggKiA2IC0gMTUpICsgMTApO1xufSAvLyBSYW5kb20gaW50ZWdlciBmcm9tIDxsb3csIGhpZ2g+IGludGVydmFsXG5cblxuZnVuY3Rpb24gcmFuZEludChsb3csIGhpZ2gpIHtcblx0cmV0dXJuIGxvdyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93ICsgMSkpO1xufSAvLyBSYW5kb20gZmxvYXQgZnJvbSA8bG93LCBoaWdoPiBpbnRlcnZhbFxuXG5cbmZ1bmN0aW9uIHJhbmRGbG9hdChsb3csIGhpZ2gpIHtcblx0cmV0dXJuIGxvdyArIE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdyk7XG59IC8vIFJhbmRvbSBmbG9hdCBmcm9tIDwtcmFuZ2UvMiwgcmFuZ2UvMj4gaW50ZXJ2YWxcblxuXG5mdW5jdGlvbiByYW5kRmxvYXRTcHJlYWQocmFuZ2UpIHtcblx0cmV0dXJuIHJhbmdlICogKDAuNSAtIE1hdGgucmFuZG9tKCkpO1xufSAvLyBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFsgMCwgMSBdXG5cblxuZnVuY3Rpb24gc2VlZGVkUmFuZG9tKHMpIHtcblx0aWYgKHMgIT09IHVuZGVmaW5lZCkgX3NlZWQgPSBzOyAvLyBNdWxiZXJyeTMyIGdlbmVyYXRvclxuXG5cdGxldCB0ID0gX3NlZWQgKz0gMHg2RDJCNzlGNTtcblx0dCA9IE1hdGguaW11bCh0IF4gdCA+Pj4gMTUsIHQgfCAxKTtcblx0dCBePSB0ICsgTWF0aC5pbXVsKHQgXiB0ID4+PiA3LCB0IHwgNjEpO1xuXHRyZXR1cm4gKCh0IF4gdCA+Pj4gMTQpID4+PiAwKSAvIDQyOTQ5NjcyOTY7XG59XG5cbmZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcblx0cmV0dXJuIGRlZ3JlZXMgKiBERUcyUkFEO1xufVxuXG5mdW5jdGlvbiByYWRUb0RlZyhyYWRpYW5zKSB7XG5cdHJldHVybiByYWRpYW5zICogUkFEMkRFRztcbn1cblxuZnVuY3Rpb24gaXNQb3dlck9mVHdvKHZhbHVlKSB7XG5cdHJldHVybiAodmFsdWUgJiB2YWx1ZSAtIDEpID09PSAwICYmIHZhbHVlICE9PSAwO1xufVxuXG5mdW5jdGlvbiBjZWlsUG93ZXJPZlR3byh2YWx1ZSkge1xuXHRyZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKSk7XG59XG5cbmZ1bmN0aW9uIGZsb29yUG93ZXJPZlR3byh2YWx1ZSkge1xuXHRyZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMikpO1xufVxuXG5mdW5jdGlvbiBzZXRRdWF0ZXJuaW9uRnJvbVByb3BlckV1bGVyKHEsIGEsIGIsIGMsIG9yZGVyKSB7XG5cdC8vIEludHJpbnNpYyBQcm9wZXIgRXVsZXIgQW5nbGVzIC0gc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0V1bGVyX2FuZ2xlc1xuXHQvLyByb3RhdGlvbnMgYXJlIGFwcGxpZWQgdG8gdGhlIGF4ZXMgaW4gdGhlIG9yZGVyIHNwZWNpZmllZCBieSAnb3JkZXInXG5cdC8vIHJvdGF0aW9uIGJ5IGFuZ2xlICdhJyBpcyBhcHBsaWVkIGZpcnN0LCB0aGVuIGJ5IGFuZ2xlICdiJywgdGhlbiBieSBhbmdsZSAnYydcblx0Ly8gYW5nbGVzIGFyZSBpbiByYWRpYW5zXG5cdGNvbnN0IGNvcyA9IE1hdGguY29zO1xuXHRjb25zdCBzaW4gPSBNYXRoLnNpbjtcblx0Y29uc3QgYzIgPSBjb3MoYiAvIDIpO1xuXHRjb25zdCBzMiA9IHNpbihiIC8gMik7XG5cdGNvbnN0IGMxMyA9IGNvcygoYSArIGMpIC8gMik7XG5cdGNvbnN0IHMxMyA9IHNpbigoYSArIGMpIC8gMik7XG5cdGNvbnN0IGMxXzMgPSBjb3MoKGEgLSBjKSAvIDIpO1xuXHRjb25zdCBzMV8zID0gc2luKChhIC0gYykgLyAyKTtcblx0Y29uc3QgYzNfMSA9IGNvcygoYyAtIGEpIC8gMik7XG5cdGNvbnN0IHMzXzEgPSBzaW4oKGMgLSBhKSAvIDIpO1xuXG5cdHN3aXRjaCAob3JkZXIpIHtcblx0XHRjYXNlICdYWVgnOlxuXHRcdFx0cS5zZXQoYzIgKiBzMTMsIHMyICogYzFfMywgczIgKiBzMV8zLCBjMiAqIGMxMyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgJ1laWSc6XG5cdFx0XHRxLnNldChzMiAqIHMxXzMsIGMyICogczEzLCBzMiAqIGMxXzMsIGMyICogYzEzKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnWlhaJzpcblx0XHRcdHEuc2V0KHMyICogYzFfMywgczIgKiBzMV8zLCBjMiAqIHMxMywgYzIgKiBjMTMpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlICdYWlgnOlxuXHRcdFx0cS5zZXQoYzIgKiBzMTMsIHMyICogczNfMSwgczIgKiBjM18xLCBjMiAqIGMxMyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgJ1lYWSc6XG5cdFx0XHRxLnNldChzMiAqIGMzXzEsIGMyICogczEzLCBzMiAqIHMzXzEsIGMyICogYzEzKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnWllaJzpcblx0XHRcdHEuc2V0KHMyICogczNfMSwgczIgKiBjM18xLCBjMiAqIHMxMywgYzIgKiBjMTMpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5NYXRoVXRpbHM6IC5zZXRRdWF0ZXJuaW9uRnJvbVByb3BlckV1bGVyKCkgZW5jb3VudGVyZWQgYW4gdW5rbm93biBvcmRlcjogJyArIG9yZGVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZW5vcm1hbGl6ZSh2YWx1ZSwgYXJyYXkpIHtcblx0c3dpdGNoIChhcnJheS5jb25zdHJ1Y3Rvcikge1xuXHRcdGNhc2UgRmxvYXQzMkFycmF5OlxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0Y2FzZSBVaW50MTZBcnJheTpcblx0XHRcdHJldHVybiB2YWx1ZSAvIDY1NTM1LjA7XG5cblx0XHRjYXNlIFVpbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gdmFsdWUgLyAyNTUuMDtcblxuXHRcdGNhc2UgSW50MTZBcnJheTpcblx0XHRcdHJldHVybiBNYXRoLm1heCh2YWx1ZSAvIDMyNzY3LjAsIC0xLjApO1xuXG5cdFx0Y2FzZSBJbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgodmFsdWUgLyAxMjcuMCwgLTEuMCk7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbXBvbmVudCB0eXBlLicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgYXJyYXkpIHtcblx0c3dpdGNoIChhcnJheS5jb25zdHJ1Y3Rvcikge1xuXHRcdGNhc2UgRmxvYXQzMkFycmF5OlxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0Y2FzZSBVaW50MTZBcnJheTpcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogNjU1MzUuMCk7XG5cblx0XHRjYXNlIFVpbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDI1NS4wKTtcblxuXHRcdGNhc2UgSW50MTZBcnJheTpcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMzI3NjcuMCk7XG5cblx0XHRjYXNlIEludDhBcnJheTpcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTI3LjApO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb21wb25lbnQgdHlwZS4nKTtcblx0fVxufVxuXG52YXIgTWF0aFV0aWxzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuXHRfX3Byb3RvX186IG51bGwsXG5cdERFRzJSQUQ6IERFRzJSQUQsXG5cdFJBRDJERUc6IFJBRDJERUcsXG5cdGdlbmVyYXRlVVVJRDogZ2VuZXJhdGVVVUlELFxuXHRjbGFtcDogY2xhbXAsXG5cdGV1Y2xpZGVhbk1vZHVsbzogZXVjbGlkZWFuTW9kdWxvLFxuXHRtYXBMaW5lYXI6IG1hcExpbmVhcixcblx0aW52ZXJzZUxlcnA6IGludmVyc2VMZXJwLFxuXHRsZXJwOiBsZXJwLFxuXHRkYW1wOiBkYW1wLFxuXHRwaW5ncG9uZzogcGluZ3BvbmcsXG5cdHNtb290aHN0ZXA6IHNtb290aHN0ZXAsXG5cdHNtb290aGVyc3RlcDogc21vb3RoZXJzdGVwLFxuXHRyYW5kSW50OiByYW5kSW50LFxuXHRyYW5kRmxvYXQ6IHJhbmRGbG9hdCxcblx0cmFuZEZsb2F0U3ByZWFkOiByYW5kRmxvYXRTcHJlYWQsXG5cdHNlZWRlZFJhbmRvbTogc2VlZGVkUmFuZG9tLFxuXHRkZWdUb1JhZDogZGVnVG9SYWQsXG5cdHJhZFRvRGVnOiByYWRUb0RlZyxcblx0aXNQb3dlck9mVHdvOiBpc1Bvd2VyT2ZUd28sXG5cdGNlaWxQb3dlck9mVHdvOiBjZWlsUG93ZXJPZlR3byxcblx0Zmxvb3JQb3dlck9mVHdvOiBmbG9vclBvd2VyT2ZUd28sXG5cdHNldFF1YXRlcm5pb25Gcm9tUHJvcGVyRXVsZXI6IHNldFF1YXRlcm5pb25Gcm9tUHJvcGVyRXVsZXIsXG5cdG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuXHRkZW5vcm1hbGl6ZTogZGVub3JtYWxpemVcbn0pO1xuXG5jbGFzcyBRdWF0ZXJuaW9uIHtcblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdyA9IDEpIHtcblx0XHR0aGlzLmlzUXVhdGVybmlvbiA9IHRydWU7XG5cdFx0dGhpcy5feCA9IHg7XG5cdFx0dGhpcy5feSA9IHk7XG5cdFx0dGhpcy5feiA9IHo7XG5cdFx0dGhpcy5fdyA9IHc7XG5cdH1cblxuXHRzdGF0aWMgc2xlcnBGbGF0KGRzdCwgZHN0T2Zmc2V0LCBzcmMwLCBzcmNPZmZzZXQwLCBzcmMxLCBzcmNPZmZzZXQxLCB0KSB7XG5cdFx0Ly8gZnV6ei1mcmVlLCBhcnJheS1iYXNlZCBRdWF0ZXJuaW9uIFNMRVJQIG9wZXJhdGlvblxuXHRcdGxldCB4MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDBdLFxuXHRcdFx0XHR5MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDFdLFxuXHRcdFx0XHR6MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDJdLFxuXHRcdFx0XHR3MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDNdO1xuXHRcdGNvbnN0IHgxID0gc3JjMVtzcmNPZmZzZXQxICsgMF0sXG5cdFx0XHRcdFx0eTEgPSBzcmMxW3NyY09mZnNldDEgKyAxXSxcblx0XHRcdFx0XHR6MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDJdLFxuXHRcdFx0XHRcdHcxID0gc3JjMVtzcmNPZmZzZXQxICsgM107XG5cblx0XHRpZiAodCA9PT0gMCkge1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDBdID0geDA7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgMV0gPSB5MDtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAyXSA9IHowO1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDNdID0gdzA7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHQgPT09IDEpIHtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAwXSA9IHgxO1xuXHRcdFx0ZHN0W2RzdE9mZnNldCArIDFdID0geTE7XG5cdFx0XHRkc3RbZHN0T2Zmc2V0ICsgMl0gPSB6MTtcblx0XHRcdGRzdFtkc3RPZmZzZXQgKyAzXSA9IHcxO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh3MCAhPT0gdzEgfHwgeDAgIT09IHgxIHx8IHkwICE9PSB5MSB8fCB6MCAhPT0gejEpIHtcblx0XHRcdGxldCBzID0gMSAtIHQ7XG5cdFx0XHRjb25zdCBjb3MgPSB4MCAqIHgxICsgeTAgKiB5MSArIHowICogejEgKyB3MCAqIHcxLFxuXHRcdFx0XHRcdFx0ZGlyID0gY29zID49IDAgPyAxIDogLTEsXG5cdFx0XHRcdFx0XHRzcXJTaW4gPSAxIC0gY29zICogY29zOyAvLyBTa2lwIHRoZSBTbGVycCBmb3IgdGlueSBzdGVwcyB0byBhdm9pZCBudW1lcmljIHByb2JsZW1zOlxuXG5cdFx0XHRpZiAoc3FyU2luID4gTnVtYmVyLkVQU0lMT04pIHtcblx0XHRcdFx0Y29uc3Qgc2luID0gTWF0aC5zcXJ0KHNxclNpbiksXG5cdFx0XHRcdFx0XHRcdGxlbiA9IE1hdGguYXRhbjIoc2luLCBjb3MgKiBkaXIpO1xuXHRcdFx0XHRzID0gTWF0aC5zaW4ocyAqIGxlbikgLyBzaW47XG5cdFx0XHRcdHQgPSBNYXRoLnNpbih0ICogbGVuKSAvIHNpbjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdERpciA9IHQgKiBkaXI7XG5cdFx0XHR4MCA9IHgwICogcyArIHgxICogdERpcjtcblx0XHRcdHkwID0geTAgKiBzICsgeTEgKiB0RGlyO1xuXHRcdFx0ejAgPSB6MCAqIHMgKyB6MSAqIHREaXI7XG5cdFx0XHR3MCA9IHcwICogcyArIHcxICogdERpcjsgLy8gTm9ybWFsaXplIGluIGNhc2Ugd2UganVzdCBkaWQgYSBsZXJwOlxuXG5cdFx0XHRpZiAocyA9PT0gMSAtIHQpIHtcblx0XHRcdFx0Y29uc3QgZiA9IDEgLyBNYXRoLnNxcnQoeDAgKiB4MCArIHkwICogeTAgKyB6MCAqIHowICsgdzAgKiB3MCk7XG5cdFx0XHRcdHgwICo9IGY7XG5cdFx0XHRcdHkwICo9IGY7XG5cdFx0XHRcdHowICo9IGY7XG5cdFx0XHRcdHcwICo9IGY7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZHN0W2RzdE9mZnNldF0gPSB4MDtcblx0XHRkc3RbZHN0T2Zmc2V0ICsgMV0gPSB5MDtcblx0XHRkc3RbZHN0T2Zmc2V0ICsgMl0gPSB6MDtcblx0XHRkc3RbZHN0T2Zmc2V0ICsgM10gPSB3MDtcblx0fVxuXG5cdHN0YXRpYyBtdWx0aXBseVF1YXRlcm5pb25zRmxhdChkc3QsIGRzdE9mZnNldCwgc3JjMCwgc3JjT2Zmc2V0MCwgc3JjMSwgc3JjT2Zmc2V0MSkge1xuXHRcdGNvbnN0IHgwID0gc3JjMFtzcmNPZmZzZXQwXTtcblx0XHRjb25zdCB5MCA9IHNyYzBbc3JjT2Zmc2V0MCArIDFdO1xuXHRcdGNvbnN0IHowID0gc3JjMFtzcmNPZmZzZXQwICsgMl07XG5cdFx0Y29uc3QgdzAgPSBzcmMwW3NyY09mZnNldDAgKyAzXTtcblx0XHRjb25zdCB4MSA9IHNyYzFbc3JjT2Zmc2V0MV07XG5cdFx0Y29uc3QgeTEgPSBzcmMxW3NyY09mZnNldDEgKyAxXTtcblx0XHRjb25zdCB6MSA9IHNyYzFbc3JjT2Zmc2V0MSArIDJdO1xuXHRcdGNvbnN0IHcxID0gc3JjMVtzcmNPZmZzZXQxICsgM107XG5cdFx0ZHN0W2RzdE9mZnNldF0gPSB4MCAqIHcxICsgdzAgKiB4MSArIHkwICogejEgLSB6MCAqIHkxO1xuXHRcdGRzdFtkc3RPZmZzZXQgKyAxXSA9IHkwICogdzEgKyB3MCAqIHkxICsgejAgKiB4MSAtIHgwICogejE7XG5cdFx0ZHN0W2RzdE9mZnNldCArIDJdID0gejAgKiB3MSArIHcwICogejEgKyB4MCAqIHkxIC0geTAgKiB4MTtcblx0XHRkc3RbZHN0T2Zmc2V0ICsgM10gPSB3MCAqIHcxIC0geDAgKiB4MSAtIHkwICogeTEgLSB6MCAqIHoxO1xuXHRcdHJldHVybiBkc3Q7XG5cdH1cblxuXHRnZXQgeCgpIHtcblx0XHRyZXR1cm4gdGhpcy5feDtcblx0fVxuXG5cdHNldCB4KHZhbHVlKSB7XG5cdFx0dGhpcy5feCA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0Z2V0IHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3k7XG5cdH1cblxuXHRzZXQgeSh2YWx1ZSkge1xuXHRcdHRoaXMuX3kgPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdGdldCB6KCkge1xuXHRcdHJldHVybiB0aGlzLl96O1xuXHR9XG5cblx0c2V0IHoodmFsdWUpIHtcblx0XHR0aGlzLl96ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRnZXQgdygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdztcblx0fVxuXG5cdHNldCB3KHZhbHVlKSB7XG5cdFx0dGhpcy5fdyA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0c2V0KHgsIHksIHosIHcpIHtcblx0XHR0aGlzLl94ID0geDtcblx0XHR0aGlzLl95ID0geTtcblx0XHR0aGlzLl96ID0gejtcblx0XHR0aGlzLl93ID0gdztcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3osIHRoaXMuX3cpO1xuXHR9XG5cblx0Y29weShxdWF0ZXJuaW9uKSB7XG5cdFx0dGhpcy5feCA9IHF1YXRlcm5pb24ueDtcblx0XHR0aGlzLl95ID0gcXVhdGVybmlvbi55O1xuXHRcdHRoaXMuX3ogPSBxdWF0ZXJuaW9uLno7XG5cdFx0dGhpcy5fdyA9IHF1YXRlcm5pb24udztcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbUV1bGVyKGV1bGVyLCB1cGRhdGUpIHtcblx0XHRjb25zdCB4ID0gZXVsZXIuX3gsXG5cdFx0XHRcdFx0eSA9IGV1bGVyLl95LFxuXHRcdFx0XHRcdHogPSBldWxlci5feixcblx0XHRcdFx0XHRvcmRlciA9IGV1bGVyLl9vcmRlcjsgLy8gaHR0cDovL3d3dy5tYXRod29ya3MuY29tL21hdGxhYmNlbnRyYWwvZmlsZWV4Y2hhbmdlL1xuXHRcdC8vIFx0MjA2OTYtZnVuY3Rpb24tdG8tY29udmVydC1iZXR3ZWVuLWRjbS1ldWxlci1hbmdsZXMtcXVhdGVybmlvbnMtYW5kLWV1bGVyLXZlY3RvcnMvXG5cdFx0Ly9cdGNvbnRlbnQvU3BpbkNhbGMubVxuXG5cdFx0Y29uc3QgY29zID0gTWF0aC5jb3M7XG5cdFx0Y29uc3Qgc2luID0gTWF0aC5zaW47XG5cdFx0Y29uc3QgYzEgPSBjb3MoeCAvIDIpO1xuXHRcdGNvbnN0IGMyID0gY29zKHkgLyAyKTtcblx0XHRjb25zdCBjMyA9IGNvcyh6IC8gMik7XG5cdFx0Y29uc3QgczEgPSBzaW4oeCAvIDIpO1xuXHRcdGNvbnN0IHMyID0gc2luKHkgLyAyKTtcblx0XHRjb25zdCBzMyA9IHNpbih6IC8gMik7XG5cblx0XHRzd2l0Y2ggKG9yZGVyKSB7XG5cdFx0XHRjYXNlICdYWVonOlxuXHRcdFx0XHR0aGlzLl94ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl96ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzO1xuXHRcdFx0XHR0aGlzLl93ID0gYzEgKiBjMiAqIGMzIC0gczEgKiBzMiAqIHMzO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWVhaJzpcblx0XHRcdFx0dGhpcy5feCA9IHMxICogYzIgKiBjMyArIGMxICogczIgKiBzMztcblx0XHRcdFx0dGhpcy5feSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcblx0XHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMztcblx0XHRcdFx0dGhpcy5fdyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1pYWSc6XG5cdFx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7XG5cdFx0XHRcdHRoaXMuX3kgPSBjMSAqIHMyICogYzMgKyBzMSAqIGMyICogczM7XG5cdFx0XHRcdHRoaXMuX3ogPSBjMSAqIGMyICogczMgKyBzMSAqIHMyICogYzM7XG5cdFx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdaWVgnOlxuXHRcdFx0XHR0aGlzLl94ID0gczEgKiBjMiAqIGMzIC0gYzEgKiBzMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzO1xuXHRcdFx0XHR0aGlzLl96ID0gYzEgKiBjMiAqIHMzIC0gczEgKiBzMiAqIGMzO1xuXHRcdFx0XHR0aGlzLl93ID0gYzEgKiBjMiAqIGMzICsgczEgKiBzMiAqIHMzO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWVpYJzpcblx0XHRcdFx0dGhpcy5feCA9IHMxICogYzIgKiBjMyArIGMxICogczIgKiBzMztcblx0XHRcdFx0dGhpcy5feSA9IGMxICogczIgKiBjMyArIHMxICogYzIgKiBzMztcblx0XHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMztcblx0XHRcdFx0dGhpcy5fdyA9IGMxICogYzIgKiBjMyAtIHMxICogczIgKiBzMztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1haWSc6XG5cdFx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7XG5cdFx0XHRcdHRoaXMuX3kgPSBjMSAqIHMyICogYzMgLSBzMSAqIGMyICogczM7XG5cdFx0XHRcdHRoaXMuX3ogPSBjMSAqIGMyICogczMgKyBzMSAqIHMyICogYzM7XG5cdFx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLlF1YXRlcm5pb246IC5zZXRGcm9tRXVsZXIoKSBlbmNvdW50ZXJlZCBhbiB1bmtub3duIG9yZGVyOiAnICsgb3JkZXIpO1xuXHRcdH1cblxuXHRcdGlmICh1cGRhdGUgIT09IGZhbHNlKSB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tQXhpc0FuZ2xlKGF4aXMsIGFuZ2xlKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL2FuZ2xlVG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxuXHRcdC8vIGFzc3VtZXMgYXhpcyBpcyBub3JtYWxpemVkXG5cdFx0Y29uc3QgaGFsZkFuZ2xlID0gYW5nbGUgLyAyLFxuXHRcdFx0XHRcdHMgPSBNYXRoLnNpbihoYWxmQW5nbGUpO1xuXHRcdHRoaXMuX3ggPSBheGlzLnggKiBzO1xuXHRcdHRoaXMuX3kgPSBheGlzLnkgKiBzO1xuXHRcdHRoaXMuX3ogPSBheGlzLnogKiBzO1xuXHRcdHRoaXMuX3cgPSBNYXRoLmNvcyhoYWxmQW5nbGUpO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tUm90YXRpb25NYXRyaXgobSkge1xuXHRcdC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9tYXRyaXhUb1F1YXRlcm5pb24vaW5kZXguaHRtXG5cdFx0Ly8gYXNzdW1lcyB0aGUgdXBwZXIgM3gzIG9mIG0gaXMgYSBwdXJlIHJvdGF0aW9uIG1hdHJpeCAoaS5lLCB1bnNjYWxlZClcblx0XHRjb25zdCB0ZSA9IG0uZWxlbWVudHMsXG5cdFx0XHRcdFx0bTExID0gdGVbMF0sXG5cdFx0XHRcdFx0bTEyID0gdGVbNF0sXG5cdFx0XHRcdFx0bTEzID0gdGVbOF0sXG5cdFx0XHRcdFx0bTIxID0gdGVbMV0sXG5cdFx0XHRcdFx0bTIyID0gdGVbNV0sXG5cdFx0XHRcdFx0bTIzID0gdGVbOV0sXG5cdFx0XHRcdFx0bTMxID0gdGVbMl0sXG5cdFx0XHRcdFx0bTMyID0gdGVbNl0sXG5cdFx0XHRcdFx0bTMzID0gdGVbMTBdLFxuXHRcdFx0XHRcdHRyYWNlID0gbTExICsgbTIyICsgbTMzO1xuXG5cdFx0aWYgKHRyYWNlID4gMCkge1xuXHRcdFx0Y29uc3QgcyA9IDAuNSAvIE1hdGguc3FydCh0cmFjZSArIDEuMCk7XG5cdFx0XHR0aGlzLl93ID0gMC4yNSAvIHM7XG5cdFx0XHR0aGlzLl94ID0gKG0zMiAtIG0yMykgKiBzO1xuXHRcdFx0dGhpcy5feSA9IChtMTMgLSBtMzEpICogcztcblx0XHRcdHRoaXMuX3ogPSAobTIxIC0gbTEyKSAqIHM7XG5cdFx0fSBlbHNlIGlmIChtMTEgPiBtMjIgJiYgbTExID4gbTMzKSB7XG5cdFx0XHRjb25zdCBzID0gMi4wICogTWF0aC5zcXJ0KDEuMCArIG0xMSAtIG0yMiAtIG0zMyk7XG5cdFx0XHR0aGlzLl93ID0gKG0zMiAtIG0yMykgLyBzO1xuXHRcdFx0dGhpcy5feCA9IDAuMjUgKiBzO1xuXHRcdFx0dGhpcy5feSA9IChtMTIgKyBtMjEpIC8gcztcblx0XHRcdHRoaXMuX3ogPSAobTEzICsgbTMxKSAvIHM7XG5cdFx0fSBlbHNlIGlmIChtMjIgPiBtMzMpIHtcblx0XHRcdGNvbnN0IHMgPSAyLjAgKiBNYXRoLnNxcnQoMS4wICsgbTIyIC0gbTExIC0gbTMzKTtcblx0XHRcdHRoaXMuX3cgPSAobTEzIC0gbTMxKSAvIHM7XG5cdFx0XHR0aGlzLl94ID0gKG0xMiArIG0yMSkgLyBzO1xuXHRcdFx0dGhpcy5feSA9IDAuMjUgKiBzO1xuXHRcdFx0dGhpcy5feiA9IChtMjMgKyBtMzIpIC8gcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcyA9IDIuMCAqIE1hdGguc3FydCgxLjAgKyBtMzMgLSBtMTEgLSBtMjIpO1xuXHRcdFx0dGhpcy5fdyA9IChtMjEgLSBtMTIpIC8gcztcblx0XHRcdHRoaXMuX3ggPSAobTEzICsgbTMxKSAvIHM7XG5cdFx0XHR0aGlzLl95ID0gKG0yMyArIG0zMikgLyBzO1xuXHRcdFx0dGhpcy5feiA9IDAuMjUgKiBzO1xuXHRcdH1cblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVVuaXRWZWN0b3JzKHZGcm9tLCB2VG8pIHtcblx0XHQvLyBhc3N1bWVzIGRpcmVjdGlvbiB2ZWN0b3JzIHZGcm9tIGFuZCB2VG8gYXJlIG5vcm1hbGl6ZWRcblx0XHRsZXQgciA9IHZGcm9tLmRvdCh2VG8pICsgMTtcblxuXHRcdGlmIChyIDwgTnVtYmVyLkVQU0lMT04pIHtcblx0XHRcdC8vIHZGcm9tIGFuZCB2VG8gcG9pbnQgaW4gb3Bwb3NpdGUgZGlyZWN0aW9uc1xuXHRcdFx0ciA9IDA7XG5cblx0XHRcdGlmIChNYXRoLmFicyh2RnJvbS54KSA+IE1hdGguYWJzKHZGcm9tLnopKSB7XG5cdFx0XHRcdHRoaXMuX3ggPSAtdkZyb20ueTtcblx0XHRcdFx0dGhpcy5feSA9IHZGcm9tLng7XG5cdFx0XHRcdHRoaXMuX3ogPSAwO1xuXHRcdFx0XHR0aGlzLl93ID0gcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3ggPSAwO1xuXHRcdFx0XHR0aGlzLl95ID0gLXZGcm9tLno7XG5cdFx0XHRcdHRoaXMuX3ogPSB2RnJvbS55O1xuXHRcdFx0XHR0aGlzLl93ID0gcjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY3Jvc3NWZWN0b3JzKCB2RnJvbSwgdlRvICk7IC8vIGlubGluZWQgdG8gYXZvaWQgY3ljbGljIGRlcGVuZGVuY3kgb24gVmVjdG9yM1xuXHRcdFx0dGhpcy5feCA9IHZGcm9tLnkgKiB2VG8ueiAtIHZGcm9tLnogKiB2VG8ueTtcblx0XHRcdHRoaXMuX3kgPSB2RnJvbS56ICogdlRvLnggLSB2RnJvbS54ICogdlRvLno7XG5cdFx0XHR0aGlzLl96ID0gdkZyb20ueCAqIHZUby55IC0gdkZyb20ueSAqIHZUby54O1xuXHRcdFx0dGhpcy5fdyA9IHI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG5cdH1cblxuXHRhbmdsZVRvKHEpIHtcblx0XHRyZXR1cm4gMiAqIE1hdGguYWNvcyhNYXRoLmFicyhjbGFtcCh0aGlzLmRvdChxKSwgLTEsIDEpKSk7XG5cdH1cblxuXHRyb3RhdGVUb3dhcmRzKHEsIHN0ZXApIHtcblx0XHRjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVUbyhxKTtcblx0XHRpZiAoYW5nbGUgPT09IDApIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IHQgPSBNYXRoLm1pbigxLCBzdGVwIC8gYW5nbGUpO1xuXHRcdHRoaXMuc2xlcnAocSwgdCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZGVudGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXQoMCwgMCwgMCwgMSk7XG5cdH1cblxuXHRpbnZlcnQoKSB7XG5cdFx0Ly8gcXVhdGVybmlvbiBpcyBhc3N1bWVkIHRvIGhhdmUgdW5pdCBsZW5ndGhcblx0XHRyZXR1cm4gdGhpcy5jb25qdWdhdGUoKTtcblx0fVxuXG5cdGNvbmp1Z2F0ZSgpIHtcblx0XHR0aGlzLl94ICo9IC0xO1xuXHRcdHRoaXMuX3kgKj0gLTE7XG5cdFx0dGhpcy5feiAqPSAtMTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZG90KHYpIHtcblx0XHRyZXR1cm4gdGhpcy5feCAqIHYuX3ggKyB0aGlzLl95ICogdi5feSArIHRoaXMuX3ogKiB2Ll96ICsgdGhpcy5fdyAqIHYuX3c7XG5cdH1cblxuXHRsZW5ndGhTcSgpIHtcblx0XHRyZXR1cm4gdGhpcy5feCAqIHRoaXMuX3ggKyB0aGlzLl95ICogdGhpcy5feSArIHRoaXMuX3ogKiB0aGlzLl96ICsgdGhpcy5fdyAqIHRoaXMuX3c7XG5cdH1cblxuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLl94ICogdGhpcy5feCArIHRoaXMuX3kgKiB0aGlzLl95ICsgdGhpcy5feiAqIHRoaXMuX3ogKyB0aGlzLl93ICogdGhpcy5fdyk7XG5cdH1cblxuXHRub3JtYWxpemUoKSB7XG5cdFx0bGV0IGwgPSB0aGlzLmxlbmd0aCgpO1xuXG5cdFx0aWYgKGwgPT09IDApIHtcblx0XHRcdHRoaXMuX3ggPSAwO1xuXHRcdFx0dGhpcy5feSA9IDA7XG5cdFx0XHR0aGlzLl96ID0gMDtcblx0XHRcdHRoaXMuX3cgPSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsID0gMSAvIGw7XG5cdFx0XHR0aGlzLl94ID0gdGhpcy5feCAqIGw7XG5cdFx0XHR0aGlzLl95ID0gdGhpcy5feSAqIGw7XG5cdFx0XHR0aGlzLl96ID0gdGhpcy5feiAqIGw7XG5cdFx0XHR0aGlzLl93ID0gdGhpcy5fdyAqIGw7XG5cdFx0fVxuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseShxKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlRdWF0ZXJuaW9ucyh0aGlzLCBxKTtcblx0fVxuXG5cdHByZW11bHRpcGx5KHEpIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKHEsIHRoaXMpO1xuXHR9XG5cblx0bXVsdGlwbHlRdWF0ZXJuaW9ucyhhLCBiKSB7XG5cdFx0Ly8gZnJvbSBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL2NvZGUvaW5kZXguaHRtXG5cdFx0Y29uc3QgcWF4ID0gYS5feCxcblx0XHRcdFx0XHRxYXkgPSBhLl95LFxuXHRcdFx0XHRcdHFheiA9IGEuX3osXG5cdFx0XHRcdFx0cWF3ID0gYS5fdztcblx0XHRjb25zdCBxYnggPSBiLl94LFxuXHRcdFx0XHRcdHFieSA9IGIuX3ksXG5cdFx0XHRcdFx0cWJ6ID0gYi5feixcblx0XHRcdFx0XHRxYncgPSBiLl93O1xuXHRcdHRoaXMuX3ggPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XG5cdFx0dGhpcy5feSA9IHFheSAqIHFidyArIHFhdyAqIHFieSArIHFheiAqIHFieCAtIHFheCAqIHFiejtcblx0XHR0aGlzLl96ID0gcWF6ICogcWJ3ICsgcWF3ICogcWJ6ICsgcWF4ICogcWJ5IC0gcWF5ICogcWJ4O1xuXHRcdHRoaXMuX3cgPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNsZXJwKHFiLCB0KSB7XG5cdFx0aWYgKHQgPT09IDApIHJldHVybiB0aGlzO1xuXHRcdGlmICh0ID09PSAxKSByZXR1cm4gdGhpcy5jb3B5KHFiKTtcblx0XHRjb25zdCB4ID0gdGhpcy5feCxcblx0XHRcdFx0XHR5ID0gdGhpcy5feSxcblx0XHRcdFx0XHR6ID0gdGhpcy5feixcblx0XHRcdFx0XHR3ID0gdGhpcy5fdzsgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9yZWFsTm9ybWVkQWxnZWJyYS9xdWF0ZXJuaW9ucy9zbGVycC9cblxuXHRcdGxldCBjb3NIYWxmVGhldGEgPSB3ICogcWIuX3cgKyB4ICogcWIuX3ggKyB5ICogcWIuX3kgKyB6ICogcWIuX3o7XG5cblx0XHRpZiAoY29zSGFsZlRoZXRhIDwgMCkge1xuXHRcdFx0dGhpcy5fdyA9IC1xYi5fdztcblx0XHRcdHRoaXMuX3ggPSAtcWIuX3g7XG5cdFx0XHR0aGlzLl95ID0gLXFiLl95O1xuXHRcdFx0dGhpcy5feiA9IC1xYi5fejtcblx0XHRcdGNvc0hhbGZUaGV0YSA9IC1jb3NIYWxmVGhldGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29weShxYik7XG5cdFx0fVxuXG5cdFx0aWYgKGNvc0hhbGZUaGV0YSA+PSAxLjApIHtcblx0XHRcdHRoaXMuX3cgPSB3O1xuXHRcdFx0dGhpcy5feCA9IHg7XG5cdFx0XHR0aGlzLl95ID0geTtcblx0XHRcdHRoaXMuX3ogPSB6O1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3FyU2luSGFsZlRoZXRhID0gMS4wIC0gY29zSGFsZlRoZXRhICogY29zSGFsZlRoZXRhO1xuXG5cdFx0aWYgKHNxclNpbkhhbGZUaGV0YSA8PSBOdW1iZXIuRVBTSUxPTikge1xuXHRcdFx0Y29uc3QgcyA9IDEgLSB0O1xuXHRcdFx0dGhpcy5fdyA9IHMgKiB3ICsgdCAqIHRoaXMuX3c7XG5cdFx0XHR0aGlzLl94ID0gcyAqIHggKyB0ICogdGhpcy5feDtcblx0XHRcdHRoaXMuX3kgPSBzICogeSArIHQgKiB0aGlzLl95O1xuXHRcdFx0dGhpcy5feiA9IHMgKiB6ICsgdCAqIHRoaXMuX3o7XG5cdFx0XHR0aGlzLm5vcm1hbGl6ZSgpO1xuXG5cdFx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNpbkhhbGZUaGV0YSA9IE1hdGguc3FydChzcXJTaW5IYWxmVGhldGEpO1xuXHRcdGNvbnN0IGhhbGZUaGV0YSA9IE1hdGguYXRhbjIoc2luSGFsZlRoZXRhLCBjb3NIYWxmVGhldGEpO1xuXHRcdGNvbnN0IHJhdGlvQSA9IE1hdGguc2luKCgxIC0gdCkgKiBoYWxmVGhldGEpIC8gc2luSGFsZlRoZXRhLFxuXHRcdFx0XHRcdHJhdGlvQiA9IE1hdGguc2luKHQgKiBoYWxmVGhldGEpIC8gc2luSGFsZlRoZXRhO1xuXHRcdHRoaXMuX3cgPSB3ICogcmF0aW9BICsgdGhpcy5fdyAqIHJhdGlvQjtcblx0XHR0aGlzLl94ID0geCAqIHJhdGlvQSArIHRoaXMuX3ggKiByYXRpb0I7XG5cdFx0dGhpcy5feSA9IHkgKiByYXRpb0EgKyB0aGlzLl95ICogcmF0aW9CO1xuXHRcdHRoaXMuX3ogPSB6ICogcmF0aW9BICsgdGhpcy5feiAqIHJhdGlvQjtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2xlcnBRdWF0ZXJuaW9ucyhxYSwgcWIsIHQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb3B5KHFhKS5zbGVycChxYiwgdCk7XG5cdH1cblxuXHRyYW5kb20oKSB7XG5cdFx0Ly8gRGVyaXZlZCBmcm9tIGh0dHA6Ly9wbGFubmluZy5jcy51aXVjLmVkdS9ub2RlMTk4Lmh0bWxcblx0XHQvLyBOb3RlLCB0aGlzIHNvdXJjZSB1c2VzIHcsIHgsIHksIHogb3JkZXJpbmcsXG5cdFx0Ly8gc28gd2Ugc3dhcCB0aGUgb3JkZXIgYmVsb3cuXG5cdFx0Y29uc3QgdTEgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnN0IHNxcnQxdTEgPSBNYXRoLnNxcnQoMSAtIHUxKTtcblx0XHRjb25zdCBzcXJ0dTEgPSBNYXRoLnNxcnQodTEpO1xuXHRcdGNvbnN0IHUyID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnN0IHUzID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuXHRcdHJldHVybiB0aGlzLnNldChzcXJ0MXUxICogTWF0aC5jb3ModTIpLCBzcXJ0dTEgKiBNYXRoLnNpbih1MyksIHNxcnR1MSAqIE1hdGguY29zKHUzKSwgc3FydDF1MSAqIE1hdGguc2luKHUyKSk7XG5cdH1cblxuXHRlcXVhbHMocXVhdGVybmlvbikge1xuXHRcdHJldHVybiBxdWF0ZXJuaW9uLl94ID09PSB0aGlzLl94ICYmIHF1YXRlcm5pb24uX3kgPT09IHRoaXMuX3kgJiYgcXVhdGVybmlvbi5feiA9PT0gdGhpcy5feiAmJiBxdWF0ZXJuaW9uLl93ID09PSB0aGlzLl93O1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0dGhpcy5feCA9IGFycmF5W29mZnNldF07XG5cdFx0dGhpcy5feSA9IGFycmF5W29mZnNldCArIDFdO1xuXHRcdHRoaXMuX3ogPSBhcnJheVtvZmZzZXQgKyAyXTtcblx0XHR0aGlzLl93ID0gYXJyYXlbb2Zmc2V0ICsgM107XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGFycmF5W29mZnNldF0gPSB0aGlzLl94O1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGhpcy5feTtcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXMuX3o7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgM10gPSB0aGlzLl93O1xuXHRcdHJldHVybiBhcnJheTtcblx0fSAvLyBmcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGluZGV4ICkge1xuXHQvLyBcdHRoaXMuX3ggPSBhdHRyaWJ1dGUuZ2V0WCggaW5kZXggKTtcblx0Ly8gXHR0aGlzLl95ID0gYXR0cmlidXRlLmdldFkoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy5feiA9IGF0dHJpYnV0ZS5nZXRaKCBpbmRleCApO1xuXHQvLyBcdHRoaXMuX3cgPSBhdHRyaWJ1dGUuZ2V0VyggaW5kZXggKTtcblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0X29uQ2hhbmdlKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0X29uQ2hhbmdlQ2FsbGJhY2soKSB7fVxuXG5cdCpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHR5aWVsZCB0aGlzLl94O1xuXHRcdHlpZWxkIHRoaXMuX3k7XG5cdFx0eWllbGQgdGhpcy5fejtcblx0XHR5aWVsZCB0aGlzLl93O1xuXHR9XG5cbn1cblxuY2xhc3MgVmVjdG9yMyB7XG5cdGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDApIHtcblx0XHRWZWN0b3IzLnByb3RvdHlwZS5pc1ZlY3RvcjMgPSB0cnVlO1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnogPSB6O1xuXHR9XG5cblx0c2V0KHgsIHksIHopIHtcblx0XHRpZiAoeiA9PT0gdW5kZWZpbmVkKSB6ID0gdGhpcy56OyAvLyBzcHJpdGUuc2NhbGUuc2V0KHgseSlcblxuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnogPSB6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMueCA9IHNjYWxhcjtcblx0XHR0aGlzLnkgPSBzY2FsYXI7XG5cdFx0dGhpcy56ID0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0WCh4KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFkoeSkge1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRaKHopIHtcblx0XHR0aGlzLnogPSB6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0dGhpcy54ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMueSA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLnogPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KGluZGV4KSB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy54O1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiB0aGlzLnk7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuejtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xuXHR9XG5cblx0Y29weSh2KSB7XG5cdFx0dGhpcy54ID0gdi54O1xuXHRcdHRoaXMueSA9IHYueTtcblx0XHR0aGlzLnogPSB2Lno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGQodikge1xuXHRcdHRoaXMueCArPSB2Lng7XG5cdFx0dGhpcy55ICs9IHYueTtcblx0XHR0aGlzLnogKz0gdi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGFyKHMpIHtcblx0XHR0aGlzLnggKz0gcztcblx0XHR0aGlzLnkgKz0gcztcblx0XHR0aGlzLnogKz0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCArIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgKyBiLnk7XG5cdFx0dGhpcy56ID0gYS56ICsgYi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGVkVmVjdG9yKHYsIHMpIHtcblx0XHR0aGlzLnggKz0gdi54ICogcztcblx0XHR0aGlzLnkgKz0gdi55ICogcztcblx0XHR0aGlzLnogKz0gdi56ICogcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1Yih2KSB7XG5cdFx0dGhpcy54IC09IHYueDtcblx0XHR0aGlzLnkgLT0gdi55O1xuXHRcdHRoaXMueiAtPSB2Lno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWJTY2FsYXIocykge1xuXHRcdHRoaXMueCAtPSBzO1xuXHRcdHRoaXMueSAtPSBzO1xuXHRcdHRoaXMueiAtPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViVmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54IC0gYi54O1xuXHRcdHRoaXMueSA9IGEueSAtIGIueTtcblx0XHR0aGlzLnogPSBhLnogLSBiLno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseSh2KSB7XG5cdFx0dGhpcy54ICo9IHYueDtcblx0XHR0aGlzLnkgKj0gdi55O1xuXHRcdHRoaXMueiAqPSB2Lno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnggKj0gc2NhbGFyO1xuXHRcdHRoaXMueSAqPSBzY2FsYXI7XG5cdFx0dGhpcy56ICo9IHNjYWxhcjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5VmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54ICogYi54O1xuXHRcdHRoaXMueSA9IGEueSAqIGIueTtcblx0XHR0aGlzLnogPSBhLnogKiBiLno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhcHBseUV1bGVyKGV1bGVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlRdWF0ZXJuaW9uKF9xdWF0ZXJuaW9uJDEuc2V0RnJvbUV1bGVyKGV1bGVyKSk7XG5cdH1cblxuXHRhcHBseUF4aXNBbmdsZShheGlzLCBhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmFwcGx5UXVhdGVybmlvbihfcXVhdGVybmlvbiQxLnNldEZyb21BeGlzQW5nbGUoYXhpcywgYW5nbGUpKTtcblx0fVxuXG5cdGFwcGx5TWF0cml4MyhtKSB7XG5cdFx0Y29uc3QgeCA9IHRoaXMueCxcblx0XHRcdFx0XHR5ID0gdGhpcy55LFxuXHRcdFx0XHRcdHogPSB0aGlzLno7XG5cdFx0Y29uc3QgZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy54ID0gZVswXSAqIHggKyBlWzNdICogeSArIGVbNl0gKiB6O1xuXHRcdHRoaXMueSA9IGVbMV0gKiB4ICsgZVs0XSAqIHkgKyBlWzddICogejtcblx0XHR0aGlzLnogPSBlWzJdICogeCArIGVbNV0gKiB5ICsgZVs4XSAqIHo7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhcHBseU5vcm1hbE1hdHJpeChtKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXgzKG0pLm5vcm1hbGl6ZSgpO1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG0pIHtcblx0XHRjb25zdCB4ID0gdGhpcy54LFxuXHRcdFx0XHRcdHkgPSB0aGlzLnksXG5cdFx0XHRcdFx0eiA9IHRoaXMuejtcblx0XHRjb25zdCBlID0gbS5lbGVtZW50cztcblx0XHRjb25zdCB3ID0gMSAvIChlWzNdICogeCArIGVbN10gKiB5ICsgZVsxMV0gKiB6ICsgZVsxNV0pO1xuXHRcdHRoaXMueCA9IChlWzBdICogeCArIGVbNF0gKiB5ICsgZVs4XSAqIHogKyBlWzEyXSkgKiB3O1xuXHRcdHRoaXMueSA9IChlWzFdICogeCArIGVbNV0gKiB5ICsgZVs5XSAqIHogKyBlWzEzXSkgKiB3O1xuXHRcdHRoaXMueiA9IChlWzJdICogeCArIGVbNl0gKiB5ICsgZVsxMF0gKiB6ICsgZVsxNF0pICogdztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFwcGx5UXVhdGVybmlvbihxKSB7XG5cdFx0Y29uc3QgeCA9IHRoaXMueCxcblx0XHRcdFx0XHR5ID0gdGhpcy55LFxuXHRcdFx0XHRcdHogPSB0aGlzLno7XG5cdFx0Y29uc3QgcXggPSBxLngsXG5cdFx0XHRcdFx0cXkgPSBxLnksXG5cdFx0XHRcdFx0cXogPSBxLnosXG5cdFx0XHRcdFx0cXcgPSBxLnc7IC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjdG9yXG5cblx0XHRjb25zdCBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeTtcblx0XHRjb25zdCBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcblx0XHRjb25zdCBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcblx0XHRjb25zdCBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7IC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcblxuXHRcdHRoaXMueCA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG5cdFx0dGhpcy55ID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcblx0XHR0aGlzLnogPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vIHByb2plY3QoIGNhbWVyYSApIHtcblx0Ly8gXHRyZXR1cm4gdGhpcy5hcHBseU1hdHJpeDQoIGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKS5hcHBseU1hdHJpeDQoIGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4ICk7XG5cdC8vIH1cblx0Ly8gdW5wcm9qZWN0KCBjYW1lcmEgKSB7XG5cdC8vIFx0cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXg0KCBjYW1lcmEucHJvamVjdGlvbk1hdHJpeEludmVyc2UgKS5hcHBseU1hdHJpeDQoIGNhbWVyYS5tYXRyaXhXb3JsZCApO1xuXHQvLyB9XG5cblxuXHR0cmFuc2Zvcm1EaXJlY3Rpb24obSkge1xuXHRcdC8vIGlucHV0OiBUSFJFRS5NYXRyaXg0IGFmZmluZSBtYXRyaXhcblx0XHQvLyB2ZWN0b3IgaW50ZXJwcmV0ZWQgYXMgYSBkaXJlY3Rpb25cblx0XHRjb25zdCB4ID0gdGhpcy54LFxuXHRcdFx0XHRcdHkgPSB0aGlzLnksXG5cdFx0XHRcdFx0eiA9IHRoaXMuejtcblx0XHRjb25zdCBlID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnggPSBlWzBdICogeCArIGVbNF0gKiB5ICsgZVs4XSAqIHo7XG5cdFx0dGhpcy55ID0gZVsxXSAqIHggKyBlWzVdICogeSArIGVbOV0gKiB6O1xuXHRcdHRoaXMueiA9IGVbMl0gKiB4ICsgZVs2XSAqIHkgKyBlWzEwXSAqIHo7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG5cdH1cblxuXHRkaXZpZGUodikge1xuXHRcdHRoaXMueCAvPSB2Lng7XG5cdFx0dGhpcy55IC89IHYueTtcblx0XHR0aGlzLnogLz0gdi56O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGl2aWRlU2NhbGFyKHNjYWxhcikge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKDEgLyBzY2FsYXIpO1xuXHR9XG5cblx0bWluKHYpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIHYueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5taW4odGhpcy55LCB2LnkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWluKHRoaXMueiwgdi56KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1heCh2KSB7XG5cdFx0dGhpcy54ID0gTWF0aC5tYXgodGhpcy54LCB2LngpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KHRoaXMueSwgdi55KTtcblx0XHR0aGlzLnogPSBNYXRoLm1heCh0aGlzLnosIHYueik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcChtaW4sIG1heCkge1xuXHRcdC8vIGFzc3VtZXMgbWluIDwgbWF4LCBjb21wb25lbnR3aXNlXG5cdFx0dGhpcy54ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB0aGlzLngpKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHRoaXMueSkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KG1pbi56LCBNYXRoLm1pbihtYXgueiwgdGhpcy56KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcFNjYWxhcihtaW5WYWwsIG1heFZhbCkge1xuXHRcdHRoaXMueCA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLngpKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy55KSk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueikpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXBMZW5ndGgobWluLCBtYXgpIHtcblx0XHRjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcihsZW5ndGggfHwgMSkubXVsdGlwbHlTY2FsYXIoTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIGxlbmd0aCkpKTtcblx0fVxuXG5cdGZsb29yKCkge1xuXHRcdHRoaXMueCA9IE1hdGguZmxvb3IodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLmZsb29yKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5mbG9vcih0aGlzLnopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2VpbCgpIHtcblx0XHR0aGlzLnggPSBNYXRoLmNlaWwodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLmNlaWwodGhpcy55KTtcblx0XHR0aGlzLnogPSBNYXRoLmNlaWwodGhpcy56KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdW5kKCkge1xuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5yb3VuZCh0aGlzLnopO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cm91bmRUb1plcm8oKSB7XG5cdFx0dGhpcy54ID0gdGhpcy54IDwgMCA/IE1hdGguY2VpbCh0aGlzLngpIDogTWF0aC5mbG9vcih0aGlzLngpO1xuXHRcdHRoaXMueSA9IHRoaXMueSA8IDAgPyBNYXRoLmNlaWwodGhpcy55KSA6IE1hdGguZmxvb3IodGhpcy55KTtcblx0XHR0aGlzLnogPSB0aGlzLnogPCAwID8gTWF0aC5jZWlsKHRoaXMueikgOiBNYXRoLmZsb29yKHRoaXMueik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZWdhdGUoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHRoaXMueiA9IC10aGlzLno7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkb3Qodikge1xuXHRcdHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XG5cdH0gLy8gVE9ETyBsZW5ndGhTcXVhcmVkP1xuXG5cblx0bGVuZ3RoU3EoKSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMuejtcblx0fVxuXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XG5cdH1cblxuXHRtYW5oYXR0YW5MZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMueCkgKyBNYXRoLmFicyh0aGlzLnkpICsgTWF0aC5hYnModGhpcy56KTtcblx0fVxuXG5cdG5vcm1hbGl6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSB8fCAxKTtcblx0fVxuXG5cdHNldExlbmd0aChsZW5ndGgpIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihsZW5ndGgpO1xuXHR9XG5cblx0bGVycCh2LCBhbHBoYSkge1xuXHRcdHRoaXMueCArPSAodi54IC0gdGhpcy54KSAqIGFscGhhO1xuXHRcdHRoaXMueSArPSAodi55IC0gdGhpcy55KSAqIGFscGhhO1xuXHRcdHRoaXMueiArPSAodi56IC0gdGhpcy56KSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGVycFZlY3RvcnModjEsIHYyLCBhbHBoYSkge1xuXHRcdHRoaXMueCA9IHYxLnggKyAodjIueCAtIHYxLngpICogYWxwaGE7XG5cdFx0dGhpcy55ID0gdjEueSArICh2Mi55IC0gdjEueSkgKiBhbHBoYTtcblx0XHR0aGlzLnogPSB2MS56ICsgKHYyLnogLSB2MS56KSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y3Jvc3Modikge1xuXHRcdHJldHVybiB0aGlzLmNyb3NzVmVjdG9ycyh0aGlzLCB2KTtcblx0fVxuXG5cdGNyb3NzVmVjdG9ycyhhLCBiKSB7XG5cdFx0Y29uc3QgYXggPSBhLngsXG5cdFx0XHRcdFx0YXkgPSBhLnksXG5cdFx0XHRcdFx0YXogPSBhLno7XG5cdFx0Y29uc3QgYnggPSBiLngsXG5cdFx0XHRcdFx0YnkgPSBiLnksXG5cdFx0XHRcdFx0YnogPSBiLno7XG5cdFx0dGhpcy54ID0gYXkgKiBieiAtIGF6ICogYnk7XG5cdFx0dGhpcy55ID0gYXogKiBieCAtIGF4ICogYno7XG5cdFx0dGhpcy56ID0gYXggKiBieSAtIGF5ICogYng7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcm9qZWN0T25WZWN0b3Iodikge1xuXHRcdGNvbnN0IGRlbm9taW5hdG9yID0gdi5sZW5ndGhTcSgpO1xuXHRcdGlmIChkZW5vbWluYXRvciA9PT0gMCkgcmV0dXJuIHRoaXMuc2V0KDAsIDAsIDApO1xuXHRcdGNvbnN0IHNjYWxhciA9IHYuZG90KHRoaXMpIC8gZGVub21pbmF0b3I7XG5cdFx0cmV0dXJuIHRoaXMuY29weSh2KS5tdWx0aXBseVNjYWxhcihzY2FsYXIpO1xuXHR9XG5cblx0cHJvamVjdE9uUGxhbmUocGxhbmVOb3JtYWwpIHtcblx0XHRfdmVjdG9yJDMuY29weSh0aGlzKS5wcm9qZWN0T25WZWN0b3IocGxhbmVOb3JtYWwpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc3ViKF92ZWN0b3IkMyk7XG5cdH1cblxuXHRyZWZsZWN0KG5vcm1hbCkge1xuXHRcdC8vIHJlZmxlY3QgaW5jaWRlbnQgdmVjdG9yIG9mZiBwbGFuZSBvcnRob2dvbmFsIHRvIG5vcm1hbFxuXHRcdC8vIG5vcm1hbCBpcyBhc3N1bWVkIHRvIGhhdmUgdW5pdCBsZW5ndGhcblx0XHRyZXR1cm4gdGhpcy5zdWIoX3ZlY3RvciQzLmNvcHkobm9ybWFsKS5tdWx0aXBseVNjYWxhcigyICogdGhpcy5kb3Qobm9ybWFsKSkpO1xuXHR9XG5cblx0YW5nbGVUbyh2KSB7XG5cdFx0Y29uc3QgZGVub21pbmF0b3IgPSBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpICogdi5sZW5ndGhTcSgpKTtcblx0XHRpZiAoZGVub21pbmF0b3IgPT09IDApIHJldHVybiBNYXRoLlBJIC8gMjtcblx0XHRjb25zdCB0aGV0YSA9IHRoaXMuZG90KHYpIC8gZGVub21pbmF0b3I7IC8vIGNsYW1wLCB0byBoYW5kbGUgbnVtZXJpY2FsIHByb2JsZW1zXG5cblx0XHRyZXR1cm4gTWF0aC5hY29zKGNsYW1wKHRoZXRhLCAtMSwgMSkpO1xuXHR9XG5cblx0ZGlzdGFuY2VUbyh2KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcblx0fVxuXG5cdGRpc3RhbmNlVG9TcXVhcmVkKHYpIHtcblx0XHRjb25zdCBkeCA9IHRoaXMueCAtIHYueCxcblx0XHRcdFx0XHRkeSA9IHRoaXMueSAtIHYueSxcblx0XHRcdFx0XHRkeiA9IHRoaXMueiAtIHYuejtcblx0XHRyZXR1cm4gZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6O1xuXHR9XG5cblx0bWFuaGF0dGFuRGlzdGFuY2VUbyh2KSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHYueCkgKyBNYXRoLmFicyh0aGlzLnkgLSB2LnkpICsgTWF0aC5hYnModGhpcy56IC0gdi56KTtcblx0fVxuXG5cdHNldEZyb21TcGhlcmljYWwocykge1xuXHRcdHJldHVybiB0aGlzLnNldEZyb21TcGhlcmljYWxDb29yZHMocy5yYWRpdXMsIHMucGhpLCBzLnRoZXRhKTtcblx0fVxuXG5cdHNldEZyb21TcGhlcmljYWxDb29yZHMocmFkaXVzLCBwaGksIHRoZXRhKSB7XG5cdFx0Y29uc3Qgc2luUGhpUmFkaXVzID0gTWF0aC5zaW4ocGhpKSAqIHJhZGl1cztcblx0XHR0aGlzLnggPSBzaW5QaGlSYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XG5cdFx0dGhpcy55ID0gTWF0aC5jb3MocGhpKSAqIHJhZGl1cztcblx0XHR0aGlzLnogPSBzaW5QaGlSYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tQ3lsaW5kcmljYWwoYykge1xuXHRcdHJldHVybiB0aGlzLnNldEZyb21DeWxpbmRyaWNhbENvb3JkcyhjLnJhZGl1cywgYy50aGV0YSwgYy55KTtcblx0fVxuXG5cdHNldEZyb21DeWxpbmRyaWNhbENvb3JkcyhyYWRpdXMsIHRoZXRhLCB5KSB7XG5cdFx0dGhpcy54ID0gcmFkaXVzICogTWF0aC5zaW4odGhldGEpO1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy56ID0gcmFkaXVzICogTWF0aC5jb3ModGhldGEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU1hdHJpeFBvc2l0aW9uKG0pIHtcblx0XHRjb25zdCBlID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnggPSBlWzEyXTtcblx0XHR0aGlzLnkgPSBlWzEzXTtcblx0XHR0aGlzLnogPSBlWzE0XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21NYXRyaXhTY2FsZShtKSB7XG5cdFx0Y29uc3Qgc3ggPSB0aGlzLnNldEZyb21NYXRyaXhDb2x1bW4obSwgMCkubGVuZ3RoKCk7XG5cdFx0Y29uc3Qgc3kgPSB0aGlzLnNldEZyb21NYXRyaXhDb2x1bW4obSwgMSkubGVuZ3RoKCk7XG5cdFx0Y29uc3Qgc3ogPSB0aGlzLnNldEZyb21NYXRyaXhDb2x1bW4obSwgMikubGVuZ3RoKCk7XG5cdFx0dGhpcy54ID0gc3g7XG5cdFx0dGhpcy55ID0gc3k7XG5cdFx0dGhpcy56ID0gc3o7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tTWF0cml4Q29sdW1uKG0sIGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZnJvbUFycmF5KG0uZWxlbWVudHMsIGluZGV4ICogNCk7XG5cdH1cblxuXHRzZXRGcm9tTWF0cml4M0NvbHVtbihtLCBpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmZyb21BcnJheShtLmVsZW1lbnRzLCBpbmRleCAqIDMpO1xuXHR9XG5cblx0c2V0RnJvbUV1bGVyKGUpIHtcblx0XHR0aGlzLnggPSBlLl94O1xuXHRcdHRoaXMueSA9IGUuX3k7XG5cdFx0dGhpcy56ID0gZS5fejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyh2KSB7XG5cdFx0cmV0dXJuIHYueCA9PT0gdGhpcy54ICYmIHYueSA9PT0gdGhpcy55ICYmIHYueiA9PT0gdGhpcy56O1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0dGhpcy54ID0gYXJyYXlbb2Zmc2V0XTtcblx0XHR0aGlzLnkgPSBhcnJheVtvZmZzZXQgKyAxXTtcblx0XHR0aGlzLnogPSBhcnJheVtvZmZzZXQgKyAyXTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGFycmF5W29mZnNldF0gPSB0aGlzLng7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLnk7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0aGlzLno7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9IC8vIGZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaW5kZXggKSB7XG5cdC8vIFx0dGhpcy54ID0gYXR0cmlidXRlLmdldFgoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy55ID0gYXR0cmlidXRlLmdldFkoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy56ID0gYXR0cmlidXRlLmdldFooIGluZGV4ICk7XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdHJhbmRvbSgpIHtcblx0XHR0aGlzLnggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHRoaXMueSA9IE1hdGgucmFuZG9tKCk7XG5cdFx0dGhpcy56ID0gTWF0aC5yYW5kb20oKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJhbmRvbURpcmVjdGlvbigpIHtcblx0XHQvLyBEZXJpdmVkIGZyb20gaHR0cHM6Ly9tYXRod29ybGQud29sZnJhbS5jb20vU3BoZXJlUG9pbnRQaWNraW5nLmh0bWxcblx0XHRjb25zdCB1ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcblx0XHRjb25zdCB0ID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuXHRcdGNvbnN0IGYgPSBNYXRoLnNxcnQoMSAtIHUgKiogMik7XG5cdFx0dGhpcy54ID0gZiAqIE1hdGguY29zKHQpO1xuXHRcdHRoaXMueSA9IGYgKiBNYXRoLnNpbih0KTtcblx0XHR0aGlzLnogPSB1O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0KltTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHlpZWxkIHRoaXMueDtcblx0XHR5aWVsZCB0aGlzLnk7XG5cdFx0eWllbGQgdGhpcy56O1xuXHR9XG5cbn1cblxuY29uc3QgX3ZlY3RvciQzID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9xdWF0ZXJuaW9uJDEgPSAvKkBfX1BVUkVfXyovbmV3IFF1YXRlcm5pb24oKTtcblxuY29uc3QgX3ZlY3RvciQyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IyKCk7XG5cbmNsYXNzIEJveDIge1xuXHRjb25zdHJ1Y3RvcihtaW4gPSBuZXcgVmVjdG9yMigrSW5maW5pdHksICtJbmZpbml0eSksIG1heCA9IG5ldyBWZWN0b3IyKC1JbmZpbml0eSwgLUluZmluaXR5KSkge1xuXHRcdHRoaXMuaXNCb3gyID0gdHJ1ZTtcblx0XHR0aGlzLm1pbiA9IG1pbjtcblx0XHR0aGlzLm1heCA9IG1heDtcblx0fVxuXG5cdHNldChtaW4sIG1heCkge1xuXHRcdHRoaXMubWluLmNvcHkobWluKTtcblx0XHR0aGlzLm1heC5jb3B5KG1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tUG9pbnRzKHBvaW50cykge1xuXHRcdHRoaXMubWFrZUVtcHR5KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMCwgaWwgPSBwb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0dGhpcy5leHBhbmRCeVBvaW50KHBvaW50c1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tQ2VudGVyQW5kU2l6ZShjZW50ZXIsIHNpemUpIHtcblx0XHRjb25zdCBoYWxmU2l6ZSA9IF92ZWN0b3IkMi5jb3B5KHNpemUpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG5cblx0XHR0aGlzLm1pbi5jb3B5KGNlbnRlcikuc3ViKGhhbGZTaXplKTtcblx0XHR0aGlzLm1heC5jb3B5KGNlbnRlcikuYWRkKGhhbGZTaXplKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxuXHRjb3B5KGJveCkge1xuXHRcdHRoaXMubWluLmNvcHkoYm94Lm1pbik7XG5cdFx0dGhpcy5tYXguY29weShib3gubWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VFbXB0eSgpIHtcblx0XHR0aGlzLm1pbi54ID0gdGhpcy5taW4ueSA9ICtJbmZpbml0eTtcblx0XHR0aGlzLm1heC54ID0gdGhpcy5tYXgueSA9IC1JbmZpbml0eTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlzRW1wdHkoKSB7XG5cdFx0Ly8gdGhpcyBpcyBhIG1vcmUgcm9idXN0IGNoZWNrIGZvciBlbXB0eSB0aGFuICggdm9sdW1lIDw9IDAgKSBiZWNhdXNlIHZvbHVtZSBjYW4gZ2V0IHBvc2l0aXZlIHdpdGggdHdvIG5lZ2F0aXZlIGF4ZXNcblx0XHRyZXR1cm4gdGhpcy5tYXgueCA8IHRoaXMubWluLnggfHwgdGhpcy5tYXgueSA8IHRoaXMubWluLnk7XG5cdH1cblxuXHRnZXRDZW50ZXIodGFyZ2V0ID0gbmV3IFZlY3RvcjIoKSkge1xuXHRcdHJldHVybiB0aGlzLmlzRW1wdHkoKSA/IHRhcmdldC5zZXQoMCwgMCkgOiB0YXJnZXQuYWRkVmVjdG9ycyh0aGlzLm1pbiwgdGhpcy5tYXgpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG5cdH1cblxuXHRnZXRTaXplKHRhcmdldCA9IG5ldyBWZWN0b3IyKCkpIHtcblx0XHRyZXR1cm4gdGhpcy5pc0VtcHR5KCkgPyB0YXJnZXQuc2V0KDAsIDApIDogdGFyZ2V0LnN1YlZlY3RvcnModGhpcy5tYXgsIHRoaXMubWluKTtcblx0fVxuXG5cdGV4cGFuZEJ5UG9pbnQocG9pbnQpIHtcblx0XHR0aGlzLm1pbi5taW4ocG9pbnQpO1xuXHRcdHRoaXMubWF4Lm1heChwb2ludCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHBhbmRCeVZlY3Rvcih2ZWN0b3IpIHtcblx0XHR0aGlzLm1pbi5zdWIodmVjdG9yKTtcblx0XHR0aGlzLm1heC5hZGQodmVjdG9yKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4cGFuZEJ5U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMubWluLmFkZFNjYWxhcigtc2NhbGFyKTtcblx0XHR0aGlzLm1heC5hZGRTY2FsYXIoc2NhbGFyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvbnRhaW5zUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gcG9pbnQueCA8IHRoaXMubWluLnggfHwgcG9pbnQueCA+IHRoaXMubWF4LnggfHwgcG9pbnQueSA8IHRoaXMubWluLnkgfHwgcG9pbnQueSA+IHRoaXMubWF4LnkgPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHRjb250YWluc0JveChib3gpIHtcblx0XHRyZXR1cm4gdGhpcy5taW4ueCA8PSBib3gubWluLnggJiYgYm94Lm1heC54IDw9IHRoaXMubWF4LnggJiYgdGhpcy5taW4ueSA8PSBib3gubWluLnkgJiYgYm94Lm1heC55IDw9IHRoaXMubWF4Lnk7XG5cdH1cblxuXHRnZXRQYXJhbWV0ZXIocG9pbnQsIHRhcmdldCkge1xuXHRcdC8vIFRoaXMgY2FuIHBvdGVudGlhbGx5IGhhdmUgYSBkaXZpZGUgYnkgemVybyBpZiB0aGUgYm94XG5cdFx0Ly8gaGFzIGEgc2l6ZSBkaW1lbnNpb24gb2YgMC5cblx0XHRyZXR1cm4gdGFyZ2V0LnNldCgocG9pbnQueCAtIHRoaXMubWluLngpIC8gKHRoaXMubWF4LnggLSB0aGlzLm1pbi54KSwgKHBvaW50LnkgLSB0aGlzLm1pbi55KSAvICh0aGlzLm1heC55IC0gdGhpcy5taW4ueSkpO1xuXHR9XG5cblx0aW50ZXJzZWN0c0JveChib3gpIHtcblx0XHQvLyB1c2luZyA0IHNwbGl0dGluZyBwbGFuZXMgdG8gcnVsZSBvdXQgaW50ZXJzZWN0aW9uc1xuXHRcdHJldHVybiBib3gubWF4LnggPCB0aGlzLm1pbi54IHx8IGJveC5taW4ueCA+IHRoaXMubWF4LnggfHwgYm94Lm1heC55IDwgdGhpcy5taW4ueSB8fCBib3gubWluLnkgPiB0aGlzLm1heC55ID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0Y2xhbXBQb2ludChwb2ludCwgdGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KHBvaW50KS5jbGFtcCh0aGlzLm1pbiwgdGhpcy5tYXgpO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1BvaW50KHBvaW50KSB7XG5cdFx0Y29uc3QgY2xhbXBlZFBvaW50ID0gX3ZlY3RvciQyLmNvcHkocG9pbnQpLmNsYW1wKHRoaXMubWluLCB0aGlzLm1heCk7XG5cblx0XHRyZXR1cm4gY2xhbXBlZFBvaW50LnN1Yihwb2ludCkubGVuZ3RoKCk7XG5cdH1cblxuXHRpbnRlcnNlY3QoYm94KSB7XG5cdFx0dGhpcy5taW4ubWF4KGJveC5taW4pO1xuXHRcdHRoaXMubWF4Lm1pbihib3gubWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHVuaW9uKGJveCkge1xuXHRcdHRoaXMubWluLm1pbihib3gubWluKTtcblx0XHR0aGlzLm1heC5tYXgoYm94Lm1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmFuc2xhdGUob2Zmc2V0KSB7XG5cdFx0dGhpcy5taW4uYWRkKG9mZnNldCk7XG5cdFx0dGhpcy5tYXguYWRkKG9mZnNldCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMoYm94KSB7XG5cdFx0cmV0dXJuIGJveC5taW4uZXF1YWxzKHRoaXMubWluKSAmJiBib3gubWF4LmVxdWFscyh0aGlzLm1heCk7XG5cdH1cblxufVxuXG5jbGFzcyBCb3gzIHtcblx0Y29uc3RydWN0b3IobWluID0gbmV3IFZlY3RvcjMoK0luZmluaXR5LCArSW5maW5pdHksICtJbmZpbml0eSksIG1heCA9IG5ldyBWZWN0b3IzKC1JbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHkpKSB7XG5cdFx0dGhpcy5pc0JveDMgPSB0cnVlO1xuXHRcdHRoaXMubWluID0gbWluO1xuXHRcdHRoaXMubWF4ID0gbWF4O1xuXHR9XG5cblx0c2V0KG1pbiwgbWF4KSB7XG5cdFx0dGhpcy5taW4uY29weShtaW4pO1xuXHRcdHRoaXMubWF4LmNvcHkobWF4KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21BcnJheShhcnJheSkge1xuXHRcdGxldCBtaW5YID0gK0luZmluaXR5O1xuXHRcdGxldCBtaW5ZID0gK0luZmluaXR5O1xuXHRcdGxldCBtaW5aID0gK0luZmluaXR5O1xuXHRcdGxldCBtYXhYID0gLUluZmluaXR5O1xuXHRcdGxldCBtYXhZID0gLUluZmluaXR5O1xuXHRcdGxldCBtYXhaID0gLUluZmluaXR5O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpICs9IDMpIHtcblx0XHRcdGNvbnN0IHggPSBhcnJheVtpXTtcblx0XHRcdGNvbnN0IHkgPSBhcnJheVtpICsgMV07XG5cdFx0XHRjb25zdCB6ID0gYXJyYXlbaSArIDJdO1xuXHRcdFx0aWYgKHggPCBtaW5YKSBtaW5YID0geDtcblx0XHRcdGlmICh5IDwgbWluWSkgbWluWSA9IHk7XG5cdFx0XHRpZiAoeiA8IG1pblopIG1pblogPSB6O1xuXHRcdFx0aWYgKHggPiBtYXhYKSBtYXhYID0geDtcblx0XHRcdGlmICh5ID4gbWF4WSkgbWF4WSA9IHk7XG5cdFx0XHRpZiAoeiA+IG1heFopIG1heFogPSB6O1xuXHRcdH1cblxuXHRcdHRoaXMubWluLnNldChtaW5YLCBtaW5ZLCBtaW5aKTtcblx0XHR0aGlzLm1heC5zZXQobWF4WCwgbWF4WSwgbWF4Wik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy8gc2V0RnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlICkge1xuXHQvLyBcdGxldCBtaW5YID0gKyBJbmZpbml0eTtcblx0Ly8gXHRsZXQgbWluWSA9ICsgSW5maW5pdHk7XG5cdC8vIFx0bGV0IG1pblogPSArIEluZmluaXR5O1xuXHQvLyBcdGxldCBtYXhYID0gLSBJbmZpbml0eTtcblx0Ly8gXHRsZXQgbWF4WSA9IC0gSW5maW5pdHk7XG5cdC8vIFx0bGV0IG1heFogPSAtIEluZmluaXR5O1xuXHQvLyBcdGZvciAoIGxldCBpID0gMCwgbCA9IGF0dHJpYnV0ZS5jb3VudDsgaSA8IGw7IGkgKysgKSB7XG5cdC8vIFx0XHRjb25zdCB4ID0gYXR0cmlidXRlLmdldFgoIGkgKTtcblx0Ly8gXHRcdGNvbnN0IHkgPSBhdHRyaWJ1dGUuZ2V0WSggaSApO1xuXHQvLyBcdFx0Y29uc3QgeiA9IGF0dHJpYnV0ZS5nZXRaKCBpICk7XG5cdC8vIFx0XHRpZiAoIHggPCBtaW5YICkgbWluWCA9IHg7XG5cdC8vIFx0XHRpZiAoIHkgPCBtaW5ZICkgbWluWSA9IHk7XG5cdC8vIFx0XHRpZiAoIHogPCBtaW5aICkgbWluWiA9IHo7XG5cdC8vIFx0XHRpZiAoIHggPiBtYXhYICkgbWF4WCA9IHg7XG5cdC8vIFx0XHRpZiAoIHkgPiBtYXhZICkgbWF4WSA9IHk7XG5cdC8vIFx0XHRpZiAoIHogPiBtYXhaICkgbWF4WiA9IHo7XG5cdC8vIFx0fVxuXHQvLyBcdHRoaXMubWluLnNldCggbWluWCwgbWluWSwgbWluWiApO1xuXHQvLyBcdHRoaXMubWF4LnNldCggbWF4WCwgbWF4WSwgbWF4WiApO1xuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRzZXRGcm9tUG9pbnRzKHBvaW50cykge1xuXHRcdHRoaXMubWFrZUVtcHR5KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMCwgaWwgPSBwb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0dGhpcy5leHBhbmRCeVBvaW50KHBvaW50c1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tQ2VudGVyQW5kU2l6ZShjZW50ZXIsIHNpemUpIHtcblx0XHRjb25zdCBoYWxmU2l6ZSA9IF92ZWN0b3IkMS5jb3B5KHNpemUpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG5cblx0XHR0aGlzLm1pbi5jb3B5KGNlbnRlcikuc3ViKGhhbGZTaXplKTtcblx0XHR0aGlzLm1heC5jb3B5KGNlbnRlcikuYWRkKGhhbGZTaXplKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21PYmplY3Qob2JqZWN0LCBwcmVjaXNlID0gZmFsc2UpIHtcblx0XHR0aGlzLm1ha2VFbXB0eSgpO1xuXHRcdHJldHVybiB0aGlzLmV4cGFuZEJ5T2JqZWN0KG9iamVjdCwgcHJlY2lzZSk7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cblx0Y29weShib3gpIHtcblx0XHR0aGlzLm1pbi5jb3B5KGJveC5taW4pO1xuXHRcdHRoaXMubWF4LmNvcHkoYm94Lm1heCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlRW1wdHkoKSB7XG5cdFx0dGhpcy5taW4ueCA9IHRoaXMubWluLnkgPSB0aGlzLm1pbi56ID0gK0luZmluaXR5O1xuXHRcdHRoaXMubWF4LnggPSB0aGlzLm1heC55ID0gdGhpcy5tYXgueiA9IC1JbmZpbml0eTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlzRW1wdHkoKSB7XG5cdFx0Ly8gdGhpcyBpcyBhIG1vcmUgcm9idXN0IGNoZWNrIGZvciBlbXB0eSB0aGFuICggdm9sdW1lIDw9IDAgKSBiZWNhdXNlIHZvbHVtZSBjYW4gZ2V0IHBvc2l0aXZlIHdpdGggdHdvIG5lZ2F0aXZlIGF4ZXNcblx0XHRyZXR1cm4gdGhpcy5tYXgueCA8IHRoaXMubWluLnggfHwgdGhpcy5tYXgueSA8IHRoaXMubWluLnkgfHwgdGhpcy5tYXgueiA8IHRoaXMubWluLno7XG5cdH1cblxuXHRnZXRDZW50ZXIodGFyZ2V0ID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdHJldHVybiB0aGlzLmlzRW1wdHkoKSA/IHRhcmdldC5zZXQoMCwgMCwgMCkgOiB0YXJnZXQuYWRkVmVjdG9ycyh0aGlzLm1pbiwgdGhpcy5tYXgpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG5cdH1cblxuXHRnZXRTaXplKHRhcmdldCA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHRyZXR1cm4gdGhpcy5pc0VtcHR5KCkgPyB0YXJnZXQuc2V0KDAsIDAsIDApIDogdGFyZ2V0LnN1YlZlY3RvcnModGhpcy5tYXgsIHRoaXMubWluKTtcblx0fVxuXG5cdGV4cGFuZEJ5UG9pbnQocG9pbnQpIHtcblx0XHR0aGlzLm1pbi5taW4ocG9pbnQpO1xuXHRcdHRoaXMubWF4Lm1heChwb2ludCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHBhbmRCeVZlY3Rvcih2ZWN0b3IpIHtcblx0XHR0aGlzLm1pbi5zdWIodmVjdG9yKTtcblx0XHR0aGlzLm1heC5hZGQodmVjdG9yKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4cGFuZEJ5U2NhbGFyKHNjYWxhcikge1xuXHRcdHRoaXMubWluLmFkZFNjYWxhcigtc2NhbGFyKTtcblx0XHR0aGlzLm1heC5hZGRTY2FsYXIoc2NhbGFyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvLyBleHBhbmRCeU9iamVjdCggb2JqZWN0LCBwcmVjaXNlID0gZmFsc2UgKSB7XG5cdC8vIFx0Ly8gQ29tcHV0ZXMgdGhlIHdvcmxkLWF4aXMtYWxpZ25lZCBib3VuZGluZyBib3ggb2YgYW4gb2JqZWN0IChpbmNsdWRpbmcgaXRzIGNoaWxkcmVuKSxcblx0Ly8gXHQvLyBhY2NvdW50aW5nIGZvciBib3RoIHRoZSBvYmplY3QncywgYW5kIGNoaWxkcmVuJ3MsIHdvcmxkIHRyYW5zZm9ybXNcblx0Ly8gXHRvYmplY3QudXBkYXRlV29ybGRNYXRyaXgoIGZhbHNlLCBmYWxzZSApO1xuXHQvLyBcdGNvbnN0IGdlb21ldHJ5ID0gb2JqZWN0Lmdlb21ldHJ5O1xuXHQvLyBcdGlmICggZ2VvbWV0cnkgIT09IHVuZGVmaW5lZCApIHtcblx0Ly8gXHRcdGlmICggcHJlY2lzZSAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzICE9IHVuZGVmaW5lZCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cdC8vIFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcblx0Ly8gXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBsID0gcG9zaXRpb24uY291bnQ7IGkgPCBsOyBpICsrICkge1xuXHQvLyBcdFx0XHRcdF92ZWN0b3IuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggcG9zaXRpb24sIGkgKS5hcHBseU1hdHJpeDQoIG9iamVjdC5tYXRyaXhXb3JsZCApO1xuXHQvLyBcdFx0XHRcdHRoaXMuZXhwYW5kQnlQb2ludCggX3ZlY3RvciApO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRpZiAoIGdlb21ldHJ5LmJvdW5kaW5nQm94ID09PSBudWxsICkge1xuXHQvLyBcdFx0XHRcdGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHRcdF9ib3guY29weSggZ2VvbWV0cnkuYm91bmRpbmdCb3ggKTtcblx0Ly8gXHRcdFx0X2JveC5hcHBseU1hdHJpeDQoIG9iamVjdC5tYXRyaXhXb3JsZCApO1xuXHQvLyBcdFx0XHR0aGlzLnVuaW9uKCBfYm94ICk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyBcdGNvbnN0IGNoaWxkcmVuID0gb2JqZWN0LmNoaWxkcmVuO1xuXHQvLyBcdGZvciAoIGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XG5cdC8vIFx0XHR0aGlzLmV4cGFuZEJ5T2JqZWN0KCBjaGlsZHJlblsgaSBdLCBwcmVjaXNlICk7XG5cdC8vIFx0fVxuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRjb250YWluc1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIHBvaW50LnggPCB0aGlzLm1pbi54IHx8IHBvaW50LnggPiB0aGlzLm1heC54IHx8IHBvaW50LnkgPCB0aGlzLm1pbi55IHx8IHBvaW50LnkgPiB0aGlzLm1heC55IHx8IHBvaW50LnogPCB0aGlzLm1pbi56IHx8IHBvaW50LnogPiB0aGlzLm1heC56ID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0Y29udGFpbnNCb3goYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMubWluLnggPD0gYm94Lm1pbi54ICYmIGJveC5tYXgueCA8PSB0aGlzLm1heC54ICYmIHRoaXMubWluLnkgPD0gYm94Lm1pbi55ICYmIGJveC5tYXgueSA8PSB0aGlzLm1heC55ICYmIHRoaXMubWluLnogPD0gYm94Lm1pbi56ICYmIGJveC5tYXgueiA8PSB0aGlzLm1heC56O1xuXHR9XG5cblx0Z2V0UGFyYW1ldGVyKHBvaW50LCB0YXJnZXQpIHtcblx0XHQvLyBUaGlzIGNhbiBwb3RlbnRpYWxseSBoYXZlIGEgZGl2aWRlIGJ5IHplcm8gaWYgdGhlIGJveFxuXHRcdC8vIGhhcyBhIHNpemUgZGltZW5zaW9uIG9mIDAuXG5cdFx0cmV0dXJuIHRhcmdldC5zZXQoKHBvaW50LnggLSB0aGlzLm1pbi54KSAvICh0aGlzLm1heC54IC0gdGhpcy5taW4ueCksIChwb2ludC55IC0gdGhpcy5taW4ueSkgLyAodGhpcy5tYXgueSAtIHRoaXMubWluLnkpLCAocG9pbnQueiAtIHRoaXMubWluLnopIC8gKHRoaXMubWF4LnogLSB0aGlzLm1pbi56KSk7XG5cdH1cblxuXHRpbnRlcnNlY3RzQm94KGJveCkge1xuXHRcdC8vIHVzaW5nIDYgc3BsaXR0aW5nIHBsYW5lcyB0byBydWxlIG91dCBpbnRlcnNlY3Rpb25zLlxuXHRcdHJldHVybiBib3gubWF4LnggPCB0aGlzLm1pbi54IHx8IGJveC5taW4ueCA+IHRoaXMubWF4LnggfHwgYm94Lm1heC55IDwgdGhpcy5taW4ueSB8fCBib3gubWluLnkgPiB0aGlzLm1heC55IHx8IGJveC5tYXgueiA8IHRoaXMubWluLnogfHwgYm94Lm1pbi56ID4gdGhpcy5tYXgueiA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXG5cdGludGVyc2VjdHNTcGhlcmUoc3BoZXJlKSB7XG5cdFx0Ly8gRmluZCB0aGUgcG9pbnQgb24gdGhlIEFBQkIgY2xvc2VzdCB0byB0aGUgc3BoZXJlIGNlbnRlci5cblx0XHR0aGlzLmNsYW1wUG9pbnQoc3BoZXJlLmNlbnRlciwgX3ZlY3RvciQxKTsgLy8gSWYgdGhhdCBwb2ludCBpcyBpbnNpZGUgdGhlIHNwaGVyZSwgdGhlIEFBQkIgYW5kIHNwaGVyZSBpbnRlcnNlY3QuXG5cblx0XHRyZXR1cm4gX3ZlY3RvciQxLmRpc3RhbmNlVG9TcXVhcmVkKHNwaGVyZS5jZW50ZXIpIDw9IHNwaGVyZS5yYWRpdXMgKiBzcGhlcmUucmFkaXVzO1xuXHR9XG5cblx0aW50ZXJzZWN0c1BsYW5lKHBsYW5lKSB7XG5cdFx0Ly8gV2UgY29tcHV0ZSB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBkb3QgcHJvZHVjdCB2YWx1ZXMuIElmIHRob3NlIHZhbHVlc1xuXHRcdC8vIGFyZSBvbiB0aGUgc2FtZSBzaWRlIChiYWNrIG9yIGZyb250KSBvZiB0aGUgcGxhbmUsIHRoZW4gdGhlcmUgaXMgbm8gaW50ZXJzZWN0aW9uLlxuXHRcdGxldCBtaW4sIG1heDtcblxuXHRcdGlmIChwbGFuZS5ub3JtYWwueCA+IDApIHtcblx0XHRcdG1pbiA9IHBsYW5lLm5vcm1hbC54ICogdGhpcy5taW4ueDtcblx0XHRcdG1heCA9IHBsYW5lLm5vcm1hbC54ICogdGhpcy5tYXgueDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWluID0gcGxhbmUubm9ybWFsLnggKiB0aGlzLm1heC54O1xuXHRcdFx0bWF4ID0gcGxhbmUubm9ybWFsLnggKiB0aGlzLm1pbi54O1xuXHRcdH1cblxuXHRcdGlmIChwbGFuZS5ub3JtYWwueSA+IDApIHtcblx0XHRcdG1pbiArPSBwbGFuZS5ub3JtYWwueSAqIHRoaXMubWluLnk7XG5cdFx0XHRtYXggKz0gcGxhbmUubm9ybWFsLnkgKiB0aGlzLm1heC55O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtaW4gKz0gcGxhbmUubm9ybWFsLnkgKiB0aGlzLm1heC55O1xuXHRcdFx0bWF4ICs9IHBsYW5lLm5vcm1hbC55ICogdGhpcy5taW4ueTtcblx0XHR9XG5cblx0XHRpZiAocGxhbmUubm9ybWFsLnogPiAwKSB7XG5cdFx0XHRtaW4gKz0gcGxhbmUubm9ybWFsLnogKiB0aGlzLm1pbi56O1xuXHRcdFx0bWF4ICs9IHBsYW5lLm5vcm1hbC56ICogdGhpcy5tYXguejtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWluICs9IHBsYW5lLm5vcm1hbC56ICogdGhpcy5tYXguejtcblx0XHRcdG1heCArPSBwbGFuZS5ub3JtYWwueiAqIHRoaXMubWluLno7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbiA8PSAtcGxhbmUuY29uc3RhbnQgJiYgbWF4ID49IC1wbGFuZS5jb25zdGFudDtcblx0fVxuXG5cdGludGVyc2VjdHNUcmlhbmdsZSh0cmlhbmdsZSkge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gLy8gY29tcHV0ZSBib3ggY2VudGVyIGFuZCBleHRlbnRzXG5cblxuXHRcdHRoaXMuZ2V0Q2VudGVyKF9jZW50ZXIpO1xuXG5cdFx0X2V4dGVudHMuc3ViVmVjdG9ycyh0aGlzLm1heCwgX2NlbnRlcik7IC8vIHRyYW5zbGF0ZSB0cmlhbmdsZSB0byBhYWJiIG9yaWdpblxuXG5cblx0XHRfdjAkMS5zdWJWZWN0b3JzKHRyaWFuZ2xlLmEsIF9jZW50ZXIpO1xuXG5cdFx0X3YxJDMuc3ViVmVjdG9ycyh0cmlhbmdsZS5iLCBfY2VudGVyKTtcblxuXHRcdF92MiQxLnN1YlZlY3RvcnModHJpYW5nbGUuYywgX2NlbnRlcik7IC8vIGNvbXB1dGUgZWRnZSB2ZWN0b3JzIGZvciB0cmlhbmdsZVxuXG5cblx0XHRfZjAuc3ViVmVjdG9ycyhfdjEkMywgX3YwJDEpO1xuXG5cdFx0X2YxLnN1YlZlY3RvcnMoX3YyJDEsIF92MSQzKTtcblxuXHRcdF9mMi5zdWJWZWN0b3JzKF92MCQxLCBfdjIkMSk7IC8vIHRlc3QgYWdhaW5zdCBheGVzIHRoYXQgYXJlIGdpdmVuIGJ5IGNyb3NzIHByb2R1Y3QgY29tYmluYXRpb25zIG9mIHRoZSBlZGdlcyBvZiB0aGUgdHJpYW5nbGUgYW5kIHRoZSBlZGdlcyBvZiB0aGUgYWFiYlxuXHRcdC8vIG1ha2UgYW4gYXhpcyB0ZXN0aW5nIG9mIGVhY2ggb2YgdGhlIDMgc2lkZXMgb2YgdGhlIGFhYmIgYWdhaW5zdCBlYWNoIG9mIHRoZSAzIHNpZGVzIG9mIHRoZSB0cmlhbmdsZSA9IDkgYXhpcyBvZiBzZXBhcmF0aW9uXG5cdFx0Ly8gYXhpc19paiA9IHVfaSB4IGZfaiAodTAsIHUxLCB1MiA9IGZhY2Ugbm9ybWFscyBvZiBhYWJiID0geCx5LHogYXhlcyB2ZWN0b3JzIHNpbmNlIGFhYmIgaXMgYXhpcyBhbGlnbmVkKVxuXG5cblx0XHRsZXQgYXhlcyA9IFswLCAtX2YwLnosIF9mMC55LCAwLCAtX2YxLnosIF9mMS55LCAwLCAtX2YyLnosIF9mMi55LCBfZjAueiwgMCwgLV9mMC54LCBfZjEueiwgMCwgLV9mMS54LCBfZjIueiwgMCwgLV9mMi54LCAtX2YwLnksIF9mMC54LCAwLCAtX2YxLnksIF9mMS54LCAwLCAtX2YyLnksIF9mMi54LCAwXTtcblxuXHRcdGlmICghc2F0Rm9yQXhlcyhheGVzLCBfdjAkMSwgX3YxJDMsIF92MiQxLCBfZXh0ZW50cykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IC8vIHRlc3QgMyBmYWNlIG5vcm1hbHMgZnJvbSB0aGUgYWFiYlxuXG5cblx0XHRheGVzID0gWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdO1xuXG5cdFx0aWYgKCFzYXRGb3JBeGVzKGF4ZXMsIF92MCQxLCBfdjEkMywgX3YyJDEsIF9leHRlbnRzKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gLy8gZmluYWxseSB0ZXN0aW5nIHRoZSBmYWNlIG5vcm1hbCBvZiB0aGUgdHJpYW5nbGVcblx0XHQvLyB1c2UgYWxyZWFkeSBleGlzdGluZyB0cmlhbmdsZSBlZGdlIHZlY3RvcnMgaGVyZVxuXG5cblx0XHRfdHJpYW5nbGVOb3JtYWwuY3Jvc3NWZWN0b3JzKF9mMCwgX2YxKTtcblxuXHRcdGF4ZXMgPSBbX3RyaWFuZ2xlTm9ybWFsLngsIF90cmlhbmdsZU5vcm1hbC55LCBfdHJpYW5nbGVOb3JtYWwuel07XG5cdFx0cmV0dXJuIHNhdEZvckF4ZXMoYXhlcywgX3YwJDEsIF92MSQzLCBfdjIkMSwgX2V4dGVudHMpO1xuXHR9XG5cblx0Y2xhbXBQb2ludChwb2ludCwgdGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KHBvaW50KS5jbGFtcCh0aGlzLm1pbiwgdGhpcy5tYXgpO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1BvaW50KHBvaW50KSB7XG5cdFx0Y29uc3QgY2xhbXBlZFBvaW50ID0gX3ZlY3RvciQxLmNvcHkocG9pbnQpLmNsYW1wKHRoaXMubWluLCB0aGlzLm1heCk7XG5cblx0XHRyZXR1cm4gY2xhbXBlZFBvaW50LnN1Yihwb2ludCkubGVuZ3RoKCk7XG5cdH1cblxuXHRnZXRCb3VuZGluZ1NwaGVyZSh0YXJnZXQpIHtcblx0XHR0aGlzLmdldENlbnRlcih0YXJnZXQuY2VudGVyKTtcblx0XHR0YXJnZXQucmFkaXVzID0gdGhpcy5nZXRTaXplKF92ZWN0b3IkMSkubGVuZ3RoKCkgKiAwLjU7XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGludGVyc2VjdChib3gpIHtcblx0XHR0aGlzLm1pbi5tYXgoYm94Lm1pbik7XG5cdFx0dGhpcy5tYXgubWluKGJveC5tYXgpOyAvLyBlbnN1cmUgdGhhdCBpZiB0aGVyZSBpcyBubyBvdmVybGFwLCB0aGUgcmVzdWx0IGlzIGZ1bGx5IGVtcHR5LCBub3Qgc2xpZ2h0bHkgZW1wdHkgd2l0aCBub24taW5mLytpbmYgdmFsdWVzIHRoYXQgd2lsbCBjYXVzZSBzdWJzZXF1ZW5jZSBpbnRlcnNlY3RzIHRvIGVycm9uZW91c2x5IHJldHVybiB2YWxpZCB2YWx1ZXMuXG5cblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHRoaXMubWFrZUVtcHR5KCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR1bmlvbihib3gpIHtcblx0XHR0aGlzLm1pbi5taW4oYm94Lm1pbik7XG5cdFx0dGhpcy5tYXgubWF4KGJveC5tYXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG1hdHJpeCkge1xuXHRcdC8vIHRyYW5zZm9ybSBvZiBlbXB0eSBib3ggaXMgYW4gZW1wdHkgYm94LlxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIHRoaXM7IC8vIE5PVEU6IEkgYW0gdXNpbmcgYSBiaW5hcnkgcGF0dGVybiB0byBzcGVjaWZ5IGFsbCAyXjMgY29tYmluYXRpb25zIGJlbG93XG5cblx0XHRfcG9pbnRzWzBdLnNldCh0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMDAwXG5cblxuXHRcdF9wb2ludHNbMV0uc2V0KHRoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWF4LnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAwMDFcblxuXG5cdFx0X3BvaW50c1syXS5zZXQodGhpcy5taW4ueCwgdGhpcy5tYXgueSwgdGhpcy5taW4ueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDAxMFxuXG5cblx0XHRfcG9pbnRzWzNdLnNldCh0aGlzLm1pbi54LCB0aGlzLm1heC55LCB0aGlzLm1heC56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMDExXG5cblxuXHRcdF9wb2ludHNbNF0uc2V0KHRoaXMubWF4LngsIHRoaXMubWluLnksIHRoaXMubWluLnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAxMDBcblxuXG5cdFx0X3BvaW50c1s1XS5zZXQodGhpcy5tYXgueCwgdGhpcy5taW4ueSwgdGhpcy5tYXgueikuYXBwbHlNYXRyaXg0KG1hdHJpeCk7IC8vIDEwMVxuXG5cblx0XHRfcG9pbnRzWzZdLnNldCh0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1pbi56KS5hcHBseU1hdHJpeDQobWF0cml4KTsgLy8gMTEwXG5cblxuXHRcdF9wb2ludHNbN10uc2V0KHRoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnopLmFwcGx5TWF0cml4NChtYXRyaXgpOyAvLyAxMTFcblxuXG5cdFx0dGhpcy5zZXRGcm9tUG9pbnRzKF9wb2ludHMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dHJhbnNsYXRlKG9mZnNldCkge1xuXHRcdHRoaXMubWluLmFkZChvZmZzZXQpO1xuXHRcdHRoaXMubWF4LmFkZChvZmZzZXQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKGJveCkge1xuXHRcdHJldHVybiBib3gubWluLmVxdWFscyh0aGlzLm1pbikgJiYgYm94Lm1heC5lcXVhbHModGhpcy5tYXgpO1xuXHR9XG5cbn1cblxuY29uc3QgX3BvaW50cyA9IFsvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCksIC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpLCAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKSwgLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCldO1xuXG5jb25zdCBfdmVjdG9yJDEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2JveCQxID0gLypAX19QVVJFX18qL25ldyBCb3gzKCk7IC8vIHRyaWFuZ2xlIGNlbnRlcmVkIHZlcnRpY2VzXG5cblxuY29uc3QgX3YwJDEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3YxJDMgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3YyJDEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTsgLy8gdHJpYW5nbGUgZWRnZSB2ZWN0b3JzXG5cblxuY29uc3QgX2YwID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9mMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZjIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NlbnRlciA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZXh0ZW50cyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdHJpYW5nbGVOb3JtYWwgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3Rlc3RBeGlzID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmZ1bmN0aW9uIHNhdEZvckF4ZXMoYXhlcywgdjAsIHYxLCB2MiwgZXh0ZW50cykge1xuXHRmb3IgKGxldCBpID0gMCwgaiA9IGF4ZXMubGVuZ3RoIC0gMzsgaSA8PSBqOyBpICs9IDMpIHtcblx0XHRfdGVzdEF4aXMuZnJvbUFycmF5KGF4ZXMsIGkpOyAvLyBwcm9qZWN0IHRoZSBhYWJiIG9udG8gdGhlIHNlcGFyYXRpbmcgYXhpc1xuXG5cblx0XHRjb25zdCByID0gZXh0ZW50cy54ICogTWF0aC5hYnMoX3Rlc3RBeGlzLngpICsgZXh0ZW50cy55ICogTWF0aC5hYnMoX3Rlc3RBeGlzLnkpICsgZXh0ZW50cy56ICogTWF0aC5hYnMoX3Rlc3RBeGlzLnopOyAvLyBwcm9qZWN0IGFsbCAzIHZlcnRpY2VzIG9mIHRoZSB0cmlhbmdsZSBvbnRvIHRoZSBzZXBhcmF0aW5nIGF4aXNcblxuXHRcdGNvbnN0IHAwID0gdjAuZG90KF90ZXN0QXhpcyk7XG5cdFx0Y29uc3QgcDEgPSB2MS5kb3QoX3Rlc3RBeGlzKTtcblx0XHRjb25zdCBwMiA9IHYyLmRvdChfdGVzdEF4aXMpOyAvLyBhY3R1YWwgdGVzdCwgYmFzaWNhbGx5IHNlZSBpZiBlaXRoZXIgb2YgdGhlIG1vc3QgZXh0cmVtZSBvZiB0aGUgdHJpYW5nbGUgcG9pbnRzIGludGVyc2VjdHMgclxuXG5cdFx0aWYgKE1hdGgubWF4KC1NYXRoLm1heChwMCwgcDEsIHAyKSwgTWF0aC5taW4ocDAsIHAxLCBwMikpID4gcikge1xuXHRcdFx0Ly8gcG9pbnRzIG9mIHRoZSBwcm9qZWN0ZWQgdHJpYW5nbGUgYXJlIG91dHNpZGUgdGhlIHByb2plY3RlZCBoYWxmLWxlbmd0aCBvZiB0aGUgYWFiYlxuXHRcdFx0Ly8gdGhlIGF4aXMgaXMgc2VwYXJhdGluZyBhbmQgd2UgY2FuIGV4aXRcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gU1JHQlRvTGluZWFyKGMpIHtcblx0cmV0dXJuIGMgPCAwLjA0MDQ1ID8gYyAqIDAuMDc3Mzk5MzgwOCA6IE1hdGgucG93KGMgKiAwLjk0Nzg2NzI5ODYgKyAwLjA1MjEzMjcwMTQsIDIuNCk7XG59XG5mdW5jdGlvbiBMaW5lYXJUb1NSR0IoYykge1xuXHRyZXR1cm4gYyA8IDAuMDAzMTMwOCA/IGMgKiAxMi45MiA6IDEuMDU1ICogTWF0aC5wb3coYywgMC40MTY2NikgLSAwLjA1NTtcbn0gLy8gSmF2YVNjcmlwdCBSR0ItdG8tUkdCIHRyYW5zZm9ybXMsIGRlZmluZWQgYXNcbi8vIEZOW0lucHV0Q29sb3JTcGFjZV1bT3V0cHV0Q29sb3JTcGFjZV0gY2FsbGJhY2sgZnVuY3Rpb25zLlxuXG5jb25zdCBGTiA9IHtcblx0W1NSR0JDb2xvclNwYWNlXToge1xuXHRcdFtMaW5lYXJTUkdCQ29sb3JTcGFjZV06IFNSR0JUb0xpbmVhclxuXHR9LFxuXHRbTGluZWFyU1JHQkNvbG9yU3BhY2VdOiB7XG5cdFx0W1NSR0JDb2xvclNwYWNlXTogTGluZWFyVG9TUkdCXG5cdH1cbn07XG5jb25zdCBDb2xvck1hbmFnZW1lbnQgPSB7XG5cdGxlZ2FjeU1vZGU6IHRydWUsXG5cblx0Z2V0IHdvcmtpbmdDb2xvclNwYWNlKCkge1xuXHRcdHJldHVybiBMaW5lYXJTUkdCQ29sb3JTcGFjZTtcblx0fSxcblxuXHRzZXQgd29ya2luZ0NvbG9yU3BhY2UoY29sb3JTcGFjZSkge1xuXHRcdGNvbnNvbGUud2FybignVEhSRUUuQ29sb3JNYW5hZ2VtZW50OiAud29ya2luZ0NvbG9yU3BhY2UgaXMgcmVhZG9ubHkuJyk7XG5cdH0sXG5cblx0Y29udmVydDogZnVuY3Rpb24gKGNvbG9yLCBzb3VyY2VDb2xvclNwYWNlLCB0YXJnZXRDb2xvclNwYWNlKSB7XG5cdFx0aWYgKHRoaXMubGVnYWN5TW9kZSB8fCBzb3VyY2VDb2xvclNwYWNlID09PSB0YXJnZXRDb2xvclNwYWNlIHx8ICFzb3VyY2VDb2xvclNwYWNlIHx8ICF0YXJnZXRDb2xvclNwYWNlKSB7XG5cdFx0XHRyZXR1cm4gY29sb3I7XG5cdFx0fVxuXG5cdFx0aWYgKEZOW3NvdXJjZUNvbG9yU3BhY2VdICYmIEZOW3NvdXJjZUNvbG9yU3BhY2VdW3RhcmdldENvbG9yU3BhY2VdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IGZuID0gRk5bc291cmNlQ29sb3JTcGFjZV1bdGFyZ2V0Q29sb3JTcGFjZV07XG5cdFx0XHRjb2xvci5yID0gZm4oY29sb3Iucik7XG5cdFx0XHRjb2xvci5nID0gZm4oY29sb3IuZyk7XG5cdFx0XHRjb2xvci5iID0gZm4oY29sb3IuYik7XG5cdFx0XHRyZXR1cm4gY29sb3I7XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBjb2xvciBzcGFjZSBjb252ZXJzaW9uLicpO1xuXHR9LFxuXHRmcm9tV29ya2luZ0NvbG9yU3BhY2U6IGZ1bmN0aW9uIChjb2xvciwgdGFyZ2V0Q29sb3JTcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnZlcnQoY29sb3IsIHRoaXMud29ya2luZ0NvbG9yU3BhY2UsIHRhcmdldENvbG9yU3BhY2UpO1xuXHR9LFxuXHR0b1dvcmtpbmdDb2xvclNwYWNlOiBmdW5jdGlvbiAoY29sb3IsIHNvdXJjZUNvbG9yU3BhY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0KGNvbG9yLCBzb3VyY2VDb2xvclNwYWNlLCB0aGlzLndvcmtpbmdDb2xvclNwYWNlKTtcblx0fVxufTtcblxuY29uc3QgX2NvbG9yS2V5d29yZHMgPSB7XG5cdCdhbGljZWJsdWUnOiAweEYwRjhGRixcblx0J2FudGlxdWV3aGl0ZSc6IDB4RkFFQkQ3LFxuXHQnYXF1YSc6IDB4MDBGRkZGLFxuXHQnYXF1YW1hcmluZSc6IDB4N0ZGRkQ0LFxuXHQnYXp1cmUnOiAweEYwRkZGRixcblx0J2JlaWdlJzogMHhGNUY1REMsXG5cdCdiaXNxdWUnOiAweEZGRTRDNCxcblx0J2JsYWNrJzogMHgwMDAwMDAsXG5cdCdibGFuY2hlZGFsbW9uZCc6IDB4RkZFQkNELFxuXHQnYmx1ZSc6IDB4MDAwMEZGLFxuXHQnYmx1ZXZpb2xldCc6IDB4OEEyQkUyLFxuXHQnYnJvd24nOiAweEE1MkEyQSxcblx0J2J1cmx5d29vZCc6IDB4REVCODg3LFxuXHQnY2FkZXRibHVlJzogMHg1RjlFQTAsXG5cdCdjaGFydHJldXNlJzogMHg3RkZGMDAsXG5cdCdjaG9jb2xhdGUnOiAweEQyNjkxRSxcblx0J2NvcmFsJzogMHhGRjdGNTAsXG5cdCdjb3JuZmxvd2VyYmx1ZSc6IDB4NjQ5NUVELFxuXHQnY29ybnNpbGsnOiAweEZGRjhEQyxcblx0J2NyaW1zb24nOiAweERDMTQzQyxcblx0J2N5YW4nOiAweDAwRkZGRixcblx0J2RhcmtibHVlJzogMHgwMDAwOEIsXG5cdCdkYXJrY3lhbic6IDB4MDA4QjhCLFxuXHQnZGFya2dvbGRlbnJvZCc6IDB4Qjg4NjBCLFxuXHQnZGFya2dyYXknOiAweEE5QTlBOSxcblx0J2RhcmtncmVlbic6IDB4MDA2NDAwLFxuXHQnZGFya2dyZXknOiAweEE5QTlBOSxcblx0J2RhcmtraGFraSc6IDB4QkRCNzZCLFxuXHQnZGFya21hZ2VudGEnOiAweDhCMDA4Qixcblx0J2RhcmtvbGl2ZWdyZWVuJzogMHg1NTZCMkYsXG5cdCdkYXJrb3JhbmdlJzogMHhGRjhDMDAsXG5cdCdkYXJrb3JjaGlkJzogMHg5OTMyQ0MsXG5cdCdkYXJrcmVkJzogMHg4QjAwMDAsXG5cdCdkYXJrc2FsbW9uJzogMHhFOTk2N0EsXG5cdCdkYXJrc2VhZ3JlZW4nOiAweDhGQkM4Rixcblx0J2RhcmtzbGF0ZWJsdWUnOiAweDQ4M0Q4Qixcblx0J2RhcmtzbGF0ZWdyYXknOiAweDJGNEY0Rixcblx0J2RhcmtzbGF0ZWdyZXknOiAweDJGNEY0Rixcblx0J2Rhcmt0dXJxdW9pc2UnOiAweDAwQ0VEMSxcblx0J2Rhcmt2aW9sZXQnOiAweDk0MDBEMyxcblx0J2RlZXBwaW5rJzogMHhGRjE0OTMsXG5cdCdkZWVwc2t5Ymx1ZSc6IDB4MDBCRkZGLFxuXHQnZGltZ3JheSc6IDB4Njk2OTY5LFxuXHQnZGltZ3JleSc6IDB4Njk2OTY5LFxuXHQnZG9kZ2VyYmx1ZSc6IDB4MUU5MEZGLFxuXHQnZmlyZWJyaWNrJzogMHhCMjIyMjIsXG5cdCdmbG9yYWx3aGl0ZSc6IDB4RkZGQUYwLFxuXHQnZm9yZXN0Z3JlZW4nOiAweDIyOEIyMixcblx0J2Z1Y2hzaWEnOiAweEZGMDBGRixcblx0J2dhaW5zYm9ybyc6IDB4RENEQ0RDLFxuXHQnZ2hvc3R3aGl0ZSc6IDB4RjhGOEZGLFxuXHQnZ29sZCc6IDB4RkZENzAwLFxuXHQnZ29sZGVucm9kJzogMHhEQUE1MjAsXG5cdCdncmF5JzogMHg4MDgwODAsXG5cdCdncmVlbic6IDB4MDA4MDAwLFxuXHQnZ3JlZW55ZWxsb3cnOiAweEFERkYyRixcblx0J2dyZXknOiAweDgwODA4MCxcblx0J2hvbmV5ZGV3JzogMHhGMEZGRjAsXG5cdCdob3RwaW5rJzogMHhGRjY5QjQsXG5cdCdpbmRpYW5yZWQnOiAweENENUM1Qyxcblx0J2luZGlnbyc6IDB4NEIwMDgyLFxuXHQnaXZvcnknOiAweEZGRkZGMCxcblx0J2toYWtpJzogMHhGMEU2OEMsXG5cdCdsYXZlbmRlcic6IDB4RTZFNkZBLFxuXHQnbGF2ZW5kZXJibHVzaCc6IDB4RkZGMEY1LFxuXHQnbGF3bmdyZWVuJzogMHg3Q0ZDMDAsXG5cdCdsZW1vbmNoaWZmb24nOiAweEZGRkFDRCxcblx0J2xpZ2h0Ymx1ZSc6IDB4QUREOEU2LFxuXHQnbGlnaHRjb3JhbCc6IDB4RjA4MDgwLFxuXHQnbGlnaHRjeWFuJzogMHhFMEZGRkYsXG5cdCdsaWdodGdvbGRlbnJvZHllbGxvdyc6IDB4RkFGQUQyLFxuXHQnbGlnaHRncmF5JzogMHhEM0QzRDMsXG5cdCdsaWdodGdyZWVuJzogMHg5MEVFOTAsXG5cdCdsaWdodGdyZXknOiAweEQzRDNEMyxcblx0J2xpZ2h0cGluayc6IDB4RkZCNkMxLFxuXHQnbGlnaHRzYWxtb24nOiAweEZGQTA3QSxcblx0J2xpZ2h0c2VhZ3JlZW4nOiAweDIwQjJBQSxcblx0J2xpZ2h0c2t5Ymx1ZSc6IDB4ODdDRUZBLFxuXHQnbGlnaHRzbGF0ZWdyYXknOiAweDc3ODg5OSxcblx0J2xpZ2h0c2xhdGVncmV5JzogMHg3Nzg4OTksXG5cdCdsaWdodHN0ZWVsYmx1ZSc6IDB4QjBDNERFLFxuXHQnbGlnaHR5ZWxsb3cnOiAweEZGRkZFMCxcblx0J2xpbWUnOiAweDAwRkYwMCxcblx0J2xpbWVncmVlbic6IDB4MzJDRDMyLFxuXHQnbGluZW4nOiAweEZBRjBFNixcblx0J21hZ2VudGEnOiAweEZGMDBGRixcblx0J21hcm9vbic6IDB4ODAwMDAwLFxuXHQnbWVkaXVtYXF1YW1hcmluZSc6IDB4NjZDREFBLFxuXHQnbWVkaXVtYmx1ZSc6IDB4MDAwMENELFxuXHQnbWVkaXVtb3JjaGlkJzogMHhCQTU1RDMsXG5cdCdtZWRpdW1wdXJwbGUnOiAweDkzNzBEQixcblx0J21lZGl1bXNlYWdyZWVuJzogMHgzQ0IzNzEsXG5cdCdtZWRpdW1zbGF0ZWJsdWUnOiAweDdCNjhFRSxcblx0J21lZGl1bXNwcmluZ2dyZWVuJzogMHgwMEZBOUEsXG5cdCdtZWRpdW10dXJxdW9pc2UnOiAweDQ4RDFDQyxcblx0J21lZGl1bXZpb2xldHJlZCc6IDB4QzcxNTg1LFxuXHQnbWlkbmlnaHRibHVlJzogMHgxOTE5NzAsXG5cdCdtaW50Y3JlYW0nOiAweEY1RkZGQSxcblx0J21pc3R5cm9zZSc6IDB4RkZFNEUxLFxuXHQnbW9jY2FzaW4nOiAweEZGRTRCNSxcblx0J25hdmFqb3doaXRlJzogMHhGRkRFQUQsXG5cdCduYXZ5JzogMHgwMDAwODAsXG5cdCdvbGRsYWNlJzogMHhGREY1RTYsXG5cdCdvbGl2ZSc6IDB4ODA4MDAwLFxuXHQnb2xpdmVkcmFiJzogMHg2QjhFMjMsXG5cdCdvcmFuZ2UnOiAweEZGQTUwMCxcblx0J29yYW5nZXJlZCc6IDB4RkY0NTAwLFxuXHQnb3JjaGlkJzogMHhEQTcwRDYsXG5cdCdwYWxlZ29sZGVucm9kJzogMHhFRUU4QUEsXG5cdCdwYWxlZ3JlZW4nOiAweDk4RkI5OCxcblx0J3BhbGV0dXJxdW9pc2UnOiAweEFGRUVFRSxcblx0J3BhbGV2aW9sZXRyZWQnOiAweERCNzA5Myxcblx0J3BhcGF5YXdoaXAnOiAweEZGRUZENSxcblx0J3BlYWNocHVmZic6IDB4RkZEQUI5LFxuXHQncGVydSc6IDB4Q0Q4NTNGLFxuXHQncGluayc6IDB4RkZDMENCLFxuXHQncGx1bSc6IDB4RERBMERELFxuXHQncG93ZGVyYmx1ZSc6IDB4QjBFMEU2LFxuXHQncHVycGxlJzogMHg4MDAwODAsXG5cdCdyZWJlY2NhcHVycGxlJzogMHg2NjMzOTksXG5cdCdyZWQnOiAweEZGMDAwMCxcblx0J3Jvc3licm93bic6IDB4QkM4RjhGLFxuXHQncm95YWxibHVlJzogMHg0MTY5RTEsXG5cdCdzYWRkbGVicm93bic6IDB4OEI0NTEzLFxuXHQnc2FsbW9uJzogMHhGQTgwNzIsXG5cdCdzYW5keWJyb3duJzogMHhGNEE0NjAsXG5cdCdzZWFncmVlbic6IDB4MkU4QjU3LFxuXHQnc2Vhc2hlbGwnOiAweEZGRjVFRSxcblx0J3NpZW5uYSc6IDB4QTA1MjJELFxuXHQnc2lsdmVyJzogMHhDMEMwQzAsXG5cdCdza3libHVlJzogMHg4N0NFRUIsXG5cdCdzbGF0ZWJsdWUnOiAweDZBNUFDRCxcblx0J3NsYXRlZ3JheSc6IDB4NzA4MDkwLFxuXHQnc2xhdGVncmV5JzogMHg3MDgwOTAsXG5cdCdzbm93JzogMHhGRkZBRkEsXG5cdCdzcHJpbmdncmVlbic6IDB4MDBGRjdGLFxuXHQnc3RlZWxibHVlJzogMHg0NjgyQjQsXG5cdCd0YW4nOiAweEQyQjQ4Qyxcblx0J3RlYWwnOiAweDAwODA4MCxcblx0J3RoaXN0bGUnOiAweEQ4QkZEOCxcblx0J3RvbWF0byc6IDB4RkY2MzQ3LFxuXHQndHVycXVvaXNlJzogMHg0MEUwRDAsXG5cdCd2aW9sZXQnOiAweEVFODJFRSxcblx0J3doZWF0JzogMHhGNURFQjMsXG5cdCd3aGl0ZSc6IDB4RkZGRkZGLFxuXHQnd2hpdGVzbW9rZSc6IDB4RjVGNUY1LFxuXHQneWVsbG93JzogMHhGRkZGMDAsXG5cdCd5ZWxsb3dncmVlbic6IDB4OUFDRDMyXG59O1xuY29uc3QgX3JnYiA9IHtcblx0cjogMCxcblx0ZzogMCxcblx0YjogMFxufTtcbmNvbnN0IF9oc2xBID0ge1xuXHRoOiAwLFxuXHRzOiAwLFxuXHRsOiAwXG59O1xuY29uc3QgX2hzbEIgPSB7XG5cdGg6IDAsXG5cdHM6IDAsXG5cdGw6IDBcbn07XG5cbmZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuXHRpZiAodCA8IDApIHQgKz0gMTtcblx0aWYgKHQgPiAxKSB0IC09IDE7XG5cdGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuXHRpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcblx0aWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogNiAqICgyIC8gMyAtIHQpO1xuXHRyZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gdG9Db21wb25lbnRzKHNvdXJjZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5yID0gc291cmNlLnI7XG5cdHRhcmdldC5nID0gc291cmNlLmc7XG5cdHRhcmdldC5iID0gc291cmNlLmI7XG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmNsYXNzIENvbG9yIHtcblx0Y29uc3RydWN0b3IociwgZywgYikge1xuXHRcdHRoaXMuaXNDb2xvciA9IHRydWU7XG5cdFx0dGhpcy5yID0gMTtcblx0XHR0aGlzLmcgPSAxO1xuXHRcdHRoaXMuYiA9IDE7XG5cblx0XHRpZiAoZyA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gciBpcyBUSFJFRS5Db2xvciwgaGV4IG9yIHN0cmluZ1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0KHIpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnNldFJHQihyLCBnLCBiKTtcblx0fVxuXG5cdHNldCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS5pc0NvbG9yKSB7XG5cdFx0XHR0aGlzLmNvcHkodmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0dGhpcy5zZXRIZXgodmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5zZXRTdHlsZSh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy5yID0gc2NhbGFyO1xuXHRcdHRoaXMuZyA9IHNjYWxhcjtcblx0XHR0aGlzLmIgPSBzY2FsYXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRIZXgoaGV4LCBjb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHRoZXggPSBNYXRoLmZsb29yKGhleCk7XG5cdFx0dGhpcy5yID0gKGhleCA+PiAxNiAmIDI1NSkgLyAyNTU7XG5cdFx0dGhpcy5nID0gKGhleCA+PiA4ICYgMjU1KSAvIDI1NTtcblx0XHR0aGlzLmIgPSAoaGV4ICYgMjU1KSAvIDI1NTtcblx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFJHQihyLCBnLCBiLCBjb2xvclNwYWNlID0gQ29sb3JNYW5hZ2VtZW50LndvcmtpbmdDb2xvclNwYWNlKSB7XG5cdFx0dGhpcy5yID0gcjtcblx0XHR0aGlzLmcgPSBnO1xuXHRcdHRoaXMuYiA9IGI7XG5cdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRIU0woaCwgcywgbCwgY29sb3JTcGFjZSA9IENvbG9yTWFuYWdlbWVudC53b3JraW5nQ29sb3JTcGFjZSkge1xuXHRcdC8vIGgscyxsIHJhbmdlcyBhcmUgaW4gMC4wIC0gMS4wXG5cdFx0aCA9IGV1Y2xpZGVhbk1vZHVsbyhoLCAxKTtcblx0XHRzID0gY2xhbXAocywgMCwgMSk7XG5cdFx0bCA9IGNsYW1wKGwsIDAsIDEpO1xuXG5cdFx0aWYgKHMgPT09IDApIHtcblx0XHRcdHRoaXMuciA9IHRoaXMuZyA9IHRoaXMuYiA9IGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHAgPSBsIDw9IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcblx0XHRcdGNvbnN0IHEgPSAyICogbCAtIHA7XG5cdFx0XHR0aGlzLnIgPSBodWUycmdiKHEsIHAsIGggKyAxIC8gMyk7XG5cdFx0XHR0aGlzLmcgPSBodWUycmdiKHEsIHAsIGgpO1xuXHRcdFx0dGhpcy5iID0gaHVlMnJnYihxLCBwLCBoIC0gMSAvIDMpO1xuXHRcdH1cblxuXHRcdENvbG9yTWFuYWdlbWVudC50b1dvcmtpbmdDb2xvclNwYWNlKHRoaXMsIGNvbG9yU3BhY2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0U3R5bGUoc3R5bGUsIGNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdGZ1bmN0aW9uIGhhbmRsZUFscGhhKHN0cmluZykge1xuXHRcdFx0aWYgKHN0cmluZyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cblx0XHRcdGlmIChwYXJzZUZsb2F0KHN0cmluZykgPCAxKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuQ29sb3I6IEFscGhhIGNvbXBvbmVudCBvZiAnICsgc3R5bGUgKyAnIHdpbGwgYmUgaWdub3JlZC4nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgbTtcblxuXHRcdGlmIChtID0gL14oKD86cmdifGhzbClhPylcXCgoW15cXCldKilcXCkvLmV4ZWMoc3R5bGUpKSB7XG5cdFx0XHQvLyByZ2IgLyBoc2xcblx0XHRcdGxldCBjb2xvcjtcblx0XHRcdGNvbnN0IG5hbWUgPSBtWzFdO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50cyA9IG1bMl07XG5cblx0XHRcdHN3aXRjaCAobmFtZSkge1xuXHRcdFx0XHRjYXNlICdyZ2InOlxuXHRcdFx0XHRjYXNlICdyZ2JhJzpcblx0XHRcdFx0XHRpZiAoY29sb3IgPSAvXlxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqKD86LFxccyooXFxkKlxcLj9cXGQrKVxccyopPyQvLmV4ZWMoY29tcG9uZW50cykpIHtcblx0XHRcdFx0XHRcdC8vIHJnYigyNTUsMCwwKSByZ2JhKDI1NSwwLDAsMC41KVxuXHRcdFx0XHRcdFx0dGhpcy5yID0gTWF0aC5taW4oMjU1LCBwYXJzZUludChjb2xvclsxXSwgMTApKSAvIDI1NTtcblx0XHRcdFx0XHRcdHRoaXMuZyA9IE1hdGgubWluKDI1NSwgcGFyc2VJbnQoY29sb3JbMl0sIDEwKSkgLyAyNTU7XG5cdFx0XHRcdFx0XHR0aGlzLmIgPSBNYXRoLm1pbigyNTUsIHBhcnNlSW50KGNvbG9yWzNdLCAxMCkpIC8gMjU1O1xuXHRcdFx0XHRcdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0XHRcdFx0XHRoYW5kbGVBbHBoYShjb2xvcls0XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoY29sb3IgPSAvXlxccyooXFxkKylcXCVcXHMqLFxccyooXFxkKylcXCVcXHMqLFxccyooXFxkKylcXCVcXHMqKD86LFxccyooXFxkKlxcLj9cXGQrKVxccyopPyQvLmV4ZWMoY29tcG9uZW50cykpIHtcblx0XHRcdFx0XHRcdC8vIHJnYigxMDAlLDAlLDAlKSByZ2JhKDEwMCUsMCUsMCUsMC41KVxuXHRcdFx0XHRcdFx0dGhpcy5yID0gTWF0aC5taW4oMTAwLCBwYXJzZUludChjb2xvclsxXSwgMTApKSAvIDEwMDtcblx0XHRcdFx0XHRcdHRoaXMuZyA9IE1hdGgubWluKDEwMCwgcGFyc2VJbnQoY29sb3JbMl0sIDEwKSkgLyAxMDA7XG5cdFx0XHRcdFx0XHR0aGlzLmIgPSBNYXRoLm1pbigxMDAsIHBhcnNlSW50KGNvbG9yWzNdLCAxMCkpIC8gMTAwO1xuXHRcdFx0XHRcdFx0Q29sb3JNYW5hZ2VtZW50LnRvV29ya2luZ0NvbG9yU3BhY2UodGhpcywgY29sb3JTcGFjZSk7XG5cdFx0XHRcdFx0XHRoYW5kbGVBbHBoYShjb2xvcls0XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdoc2wnOlxuXHRcdFx0XHRjYXNlICdoc2xhJzpcblx0XHRcdFx0XHRpZiAoY29sb3IgPSAvXlxccyooXFxkKlxcLj9cXGQrKVxccyosXFxzKihcXGQqXFwuP1xcZCspXFwlXFxzKixcXHMqKFxcZCpcXC4/XFxkKylcXCVcXHMqKD86LFxccyooXFxkKlxcLj9cXGQrKVxccyopPyQvLmV4ZWMoY29tcG9uZW50cykpIHtcblx0XHRcdFx0XHRcdC8vIGhzbCgxMjAsNTAlLDUwJSkgaHNsYSgxMjAsNTAlLDUwJSwwLjUpXG5cdFx0XHRcdFx0XHRjb25zdCBoID0gcGFyc2VGbG9hdChjb2xvclsxXSkgLyAzNjA7XG5cdFx0XHRcdFx0XHRjb25zdCBzID0gcGFyc2VGbG9hdChjb2xvclsyXSkgLyAxMDA7XG5cdFx0XHRcdFx0XHRjb25zdCBsID0gcGFyc2VGbG9hdChjb2xvclszXSkgLyAxMDA7XG5cdFx0XHRcdFx0XHRoYW5kbGVBbHBoYShjb2xvcls0XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zZXRIU0woaCwgcywgbCwgY29sb3JTcGFjZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChtID0gL15cXCMoW0EtRmEtZlxcZF0rKSQvLmV4ZWMoc3R5bGUpKSB7XG5cdFx0XHQvLyBoZXggY29sb3Jcblx0XHRcdGNvbnN0IGhleCA9IG1bMV07XG5cdFx0XHRjb25zdCBzaXplID0gaGV4Lmxlbmd0aDtcblxuXHRcdFx0aWYgKHNpemUgPT09IDMpIHtcblx0XHRcdFx0Ly8gI2ZmMFxuXHRcdFx0XHR0aGlzLnIgPSBwYXJzZUludChoZXguY2hhckF0KDApICsgaGV4LmNoYXJBdCgwKSwgMTYpIC8gMjU1O1xuXHRcdFx0XHR0aGlzLmcgPSBwYXJzZUludChoZXguY2hhckF0KDEpICsgaGV4LmNoYXJBdCgxKSwgMTYpIC8gMjU1O1xuXHRcdFx0XHR0aGlzLmIgPSBwYXJzZUludChoZXguY2hhckF0KDIpICsgaGV4LmNoYXJBdCgyKSwgMTYpIC8gMjU1O1xuXHRcdFx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9IGVsc2UgaWYgKHNpemUgPT09IDYpIHtcblx0XHRcdFx0Ly8gI2ZmMDAwMFxuXHRcdFx0XHR0aGlzLnIgPSBwYXJzZUludChoZXguY2hhckF0KDApICsgaGV4LmNoYXJBdCgxKSwgMTYpIC8gMjU1O1xuXHRcdFx0XHR0aGlzLmcgPSBwYXJzZUludChoZXguY2hhckF0KDIpICsgaGV4LmNoYXJBdCgzKSwgMTYpIC8gMjU1O1xuXHRcdFx0XHR0aGlzLmIgPSBwYXJzZUludChoZXguY2hhckF0KDQpICsgaGV4LmNoYXJBdCg1KSwgMTYpIC8gMjU1O1xuXHRcdFx0XHRDb2xvck1hbmFnZW1lbnQudG9Xb3JraW5nQ29sb3JTcGFjZSh0aGlzLCBjb2xvclNwYWNlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHN0eWxlICYmIHN0eWxlLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiB0aGlzLnNldENvbG9yTmFtZShzdHlsZSwgY29sb3JTcGFjZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRDb2xvck5hbWUoc3R5bGUsIGNvbG9yU3BhY2UgPSBTUkdCQ29sb3JTcGFjZSkge1xuXHRcdC8vIGNvbG9yIGtleXdvcmRzXG5cdFx0Y29uc3QgaGV4ID0gX2NvbG9yS2V5d29yZHNbc3R5bGUudG9Mb3dlckNhc2UoKV07XG5cblx0XHRpZiAoaGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIHJlZFxuXHRcdFx0dGhpcy5zZXRIZXgoaGV4LCBjb2xvclNwYWNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdW5rbm93biBjb2xvclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5Db2xvcjogVW5rbm93biBjb2xvciAnICsgc3R5bGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuXHR9XG5cblx0Y29weShjb2xvcikge1xuXHRcdHRoaXMuciA9IGNvbG9yLnI7XG5cdFx0dGhpcy5nID0gY29sb3IuZztcblx0XHR0aGlzLmIgPSBjb2xvci5iO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weVNSR0JUb0xpbmVhcihjb2xvcikge1xuXHRcdHRoaXMuciA9IFNSR0JUb0xpbmVhcihjb2xvci5yKTtcblx0XHR0aGlzLmcgPSBTUkdCVG9MaW5lYXIoY29sb3IuZyk7XG5cdFx0dGhpcy5iID0gU1JHQlRvTGluZWFyKGNvbG9yLmIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weUxpbmVhclRvU1JHQihjb2xvcikge1xuXHRcdHRoaXMuciA9IExpbmVhclRvU1JHQihjb2xvci5yKTtcblx0XHR0aGlzLmcgPSBMaW5lYXJUb1NSR0IoY29sb3IuZyk7XG5cdFx0dGhpcy5iID0gTGluZWFyVG9TUkdCKGNvbG9yLmIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29udmVydFNSR0JUb0xpbmVhcigpIHtcblx0XHR0aGlzLmNvcHlTUkdCVG9MaW5lYXIodGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb252ZXJ0TGluZWFyVG9TUkdCKCkge1xuXHRcdHRoaXMuY29weUxpbmVhclRvU1JHQih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEhleChjb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHRDb2xvck1hbmFnZW1lbnQuZnJvbVdvcmtpbmdDb2xvclNwYWNlKHRvQ29tcG9uZW50cyh0aGlzLCBfcmdiKSwgY29sb3JTcGFjZSk7XG5cdFx0cmV0dXJuIGNsYW1wKF9yZ2IuciAqIDI1NSwgMCwgMjU1KSA8PCAxNiBeIGNsYW1wKF9yZ2IuZyAqIDI1NSwgMCwgMjU1KSA8PCA4IF4gY2xhbXAoX3JnYi5iICogMjU1LCAwLCAyNTUpIDw8IDA7XG5cdH1cblxuXHRnZXRIZXhTdHJpbmcoY29sb3JTcGFjZSA9IFNSR0JDb2xvclNwYWNlKSB7XG5cdFx0cmV0dXJuICgnMDAwMDAwJyArIHRoaXMuZ2V0SGV4KGNvbG9yU3BhY2UpLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTYpO1xuXHR9XG5cblx0Z2V0SFNMKHRhcmdldCwgY29sb3JTcGFjZSA9IENvbG9yTWFuYWdlbWVudC53b3JraW5nQ29sb3JTcGFjZSkge1xuXHRcdC8vIGgscyxsIHJhbmdlcyBhcmUgaW4gMC4wIC0gMS4wXG5cdFx0Q29sb3JNYW5hZ2VtZW50LmZyb21Xb3JraW5nQ29sb3JTcGFjZSh0b0NvbXBvbmVudHModGhpcywgX3JnYiksIGNvbG9yU3BhY2UpO1xuXHRcdGNvbnN0IHIgPSBfcmdiLnIsXG5cdFx0XHRcdFx0ZyA9IF9yZ2IuZyxcblx0XHRcdFx0XHRiID0gX3JnYi5iO1xuXHRcdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHRcdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRcdGxldCBodWUsIHNhdHVyYXRpb247XG5cdFx0Y29uc3QgbGlnaHRuZXNzID0gKG1pbiArIG1heCkgLyAyLjA7XG5cblx0XHRpZiAobWluID09PSBtYXgpIHtcblx0XHRcdGh1ZSA9IDA7XG5cdFx0XHRzYXR1cmF0aW9uID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cdFx0XHRzYXR1cmF0aW9uID0gbGlnaHRuZXNzIDw9IDAuNSA/IGRlbHRhIC8gKG1heCArIG1pbikgOiBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblxuXHRcdFx0c3dpdGNoIChtYXgpIHtcblx0XHRcdFx0Y2FzZSByOlxuXHRcdFx0XHRcdGh1ZSA9IChnIC0gYikgLyBkZWx0YSArIChnIDwgYiA/IDYgOiAwKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIGc6XG5cdFx0XHRcdFx0aHVlID0gKGIgLSByKSAvIGRlbHRhICsgMjtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIGI6XG5cdFx0XHRcdFx0aHVlID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aHVlIC89IDY7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LmggPSBodWU7XG5cdFx0dGFyZ2V0LnMgPSBzYXR1cmF0aW9uO1xuXHRcdHRhcmdldC5sID0gbGlnaHRuZXNzO1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRnZXRSR0IodGFyZ2V0LCBjb2xvclNwYWNlID0gQ29sb3JNYW5hZ2VtZW50LndvcmtpbmdDb2xvclNwYWNlKSB7XG5cdFx0Q29sb3JNYW5hZ2VtZW50LmZyb21Xb3JraW5nQ29sb3JTcGFjZSh0b0NvbXBvbmVudHModGhpcywgX3JnYiksIGNvbG9yU3BhY2UpO1xuXHRcdHRhcmdldC5yID0gX3JnYi5yO1xuXHRcdHRhcmdldC5nID0gX3JnYi5nO1xuXHRcdHRhcmdldC5iID0gX3JnYi5iO1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRnZXRTdHlsZShjb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHRDb2xvck1hbmFnZW1lbnQuZnJvbVdvcmtpbmdDb2xvclNwYWNlKHRvQ29tcG9uZW50cyh0aGlzLCBfcmdiKSwgY29sb3JTcGFjZSk7XG5cblx0XHRpZiAoY29sb3JTcGFjZSAhPT0gU1JHQkNvbG9yU3BhY2UpIHtcblx0XHRcdC8vIFJlcXVpcmVzIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgNCAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1jb2xvci00LykuXG5cdFx0XHRyZXR1cm4gYGNvbG9yKCR7Y29sb3JTcGFjZX0gJHtfcmdiLnJ9ICR7X3JnYi5nfSAke19yZ2IuYn0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYHJnYigke19yZ2IuciAqIDI1NSB8IDB9LCR7X3JnYi5nICogMjU1IHwgMH0sJHtfcmdiLmIgKiAyNTUgfCAwfSlgO1xuXHR9XG5cblx0b2Zmc2V0SFNMKGgsIHMsIGwpIHtcblx0XHR0aGlzLmdldEhTTChfaHNsQSk7XG5cdFx0X2hzbEEuaCArPSBoO1xuXHRcdF9oc2xBLnMgKz0gcztcblx0XHRfaHNsQS5sICs9IGw7XG5cdFx0dGhpcy5zZXRIU0woX2hzbEEuaCwgX2hzbEEucywgX2hzbEEubCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhZGQoY29sb3IpIHtcblx0XHR0aGlzLnIgKz0gY29sb3Iucjtcblx0XHR0aGlzLmcgKz0gY29sb3IuZztcblx0XHR0aGlzLmIgKz0gY29sb3IuYjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZENvbG9ycyhjb2xvcjEsIGNvbG9yMikge1xuXHRcdHRoaXMuciA9IGNvbG9yMS5yICsgY29sb3IyLnI7XG5cdFx0dGhpcy5nID0gY29sb3IxLmcgKyBjb2xvcjIuZztcblx0XHR0aGlzLmIgPSBjb2xvcjEuYiArIGNvbG9yMi5iO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGFyKHMpIHtcblx0XHR0aGlzLnIgKz0gcztcblx0XHR0aGlzLmcgKz0gcztcblx0XHR0aGlzLmIgKz0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN1Yihjb2xvcikge1xuXHRcdHRoaXMuciA9IE1hdGgubWF4KDAsIHRoaXMuciAtIGNvbG9yLnIpO1xuXHRcdHRoaXMuZyA9IE1hdGgubWF4KDAsIHRoaXMuZyAtIGNvbG9yLmcpO1xuXHRcdHRoaXMuYiA9IE1hdGgubWF4KDAsIHRoaXMuYiAtIGNvbG9yLmIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkoY29sb3IpIHtcblx0XHR0aGlzLnIgKj0gY29sb3Iucjtcblx0XHR0aGlzLmcgKj0gY29sb3IuZztcblx0XHR0aGlzLmIgKj0gY29sb3IuYjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5U2NhbGFyKHMpIHtcblx0XHR0aGlzLnIgKj0gcztcblx0XHR0aGlzLmcgKj0gcztcblx0XHR0aGlzLmIgKj0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxlcnAoY29sb3IsIGFscGhhKSB7XG5cdFx0dGhpcy5yICs9IChjb2xvci5yIC0gdGhpcy5yKSAqIGFscGhhO1xuXHRcdHRoaXMuZyArPSAoY29sb3IuZyAtIHRoaXMuZykgKiBhbHBoYTtcblx0XHR0aGlzLmIgKz0gKGNvbG9yLmIgLSB0aGlzLmIpICogYWxwaGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXJwQ29sb3JzKGNvbG9yMSwgY29sb3IyLCBhbHBoYSkge1xuXHRcdHRoaXMuciA9IGNvbG9yMS5yICsgKGNvbG9yMi5yIC0gY29sb3IxLnIpICogYWxwaGE7XG5cdFx0dGhpcy5nID0gY29sb3IxLmcgKyAoY29sb3IyLmcgLSBjb2xvcjEuZykgKiBhbHBoYTtcblx0XHR0aGlzLmIgPSBjb2xvcjEuYiArIChjb2xvcjIuYiAtIGNvbG9yMS5iKSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGVycEhTTChjb2xvciwgYWxwaGEpIHtcblx0XHR0aGlzLmdldEhTTChfaHNsQSk7XG5cdFx0Y29sb3IuZ2V0SFNMKF9oc2xCKTtcblx0XHRjb25zdCBoID0gbGVycChfaHNsQS5oLCBfaHNsQi5oLCBhbHBoYSk7XG5cdFx0Y29uc3QgcyA9IGxlcnAoX2hzbEEucywgX2hzbEIucywgYWxwaGEpO1xuXHRcdGNvbnN0IGwgPSBsZXJwKF9oc2xBLmwsIF9oc2xCLmwsIGFscGhhKTtcblx0XHR0aGlzLnNldEhTTChoLCBzLCBsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhjKSB7XG5cdFx0cmV0dXJuIGMuciA9PT0gdGhpcy5yICYmIGMuZyA9PT0gdGhpcy5nICYmIGMuYiA9PT0gdGhpcy5iO1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0dGhpcy5yID0gYXJyYXlbb2Zmc2V0XTtcblx0XHR0aGlzLmcgPSBhcnJheVtvZmZzZXQgKyAxXTtcblx0XHR0aGlzLmIgPSBhcnJheVtvZmZzZXQgKyAyXTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoYXJyYXkgPSBbXSwgb2Zmc2V0ID0gMCkge1xuXHRcdGFycmF5W29mZnNldF0gPSB0aGlzLnI7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLmc7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0aGlzLmI7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9IC8vIGZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaW5kZXggKSB7XG5cdC8vIFx0dGhpcy5yID0gYXR0cmlidXRlLmdldFgoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy5nID0gYXR0cmlidXRlLmdldFkoIGluZGV4ICk7XG5cdC8vIFx0dGhpcy5iID0gYXR0cmlidXRlLmdldFooIGluZGV4ICk7XG5cdC8vIFx0aWYgKCBhdHRyaWJ1dGUubm9ybWFsaXplZCA9PT0gdHJ1ZSApIHtcblx0Ly8gXHRcdC8vIGFzc3VtaW5nIFVpbnQ4QXJyYXlcblx0Ly8gXHRcdHRoaXMuciAvPSAyNTU7XG5cdC8vIFx0XHR0aGlzLmcgLz0gMjU1O1xuXHQvLyBcdFx0dGhpcy5iIC89IDI1NTtcblx0Ly8gXHR9XG5cdC8vIFx0cmV0dXJuIHRoaXM7XG5cdC8vIH1cblxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRIZXgoKTtcblx0fVxuXG5cdCpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHR5aWVsZCB0aGlzLnI7XG5cdFx0eWllbGQgdGhpcy5nO1xuXHRcdHlpZWxkIHRoaXMuYjtcblx0fVxuXG59XG5cbkNvbG9yLk5BTUVTID0gX2NvbG9yS2V5d29yZHM7XG5cbi8qKlxuICogUmVmOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DeWxpbmRyaWNhbF9jb29yZGluYXRlX3N5c3RlbVxuICovXG5jbGFzcyBDeWxpbmRyaWNhbCB7XG5cdGNvbnN0cnVjdG9yKHJhZGl1cyA9IDEsIHRoZXRhID0gMCwgeSA9IDApIHtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1czsgLy8gZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIGEgcG9pbnQgaW4gdGhlIHgteiBwbGFuZVxuXG5cdFx0dGhpcy50aGV0YSA9IHRoZXRhOyAvLyBjb3VudGVyY2xvY2t3aXNlIGFuZ2xlIGluIHRoZSB4LXogcGxhbmUgbWVhc3VyZWQgaW4gcmFkaWFucyBmcm9tIHRoZSBwb3NpdGl2ZSB6LWF4aXNcblxuXHRcdHRoaXMueSA9IHk7IC8vIGhlaWdodCBhYm92ZSB0aGUgeC16IHBsYW5lXG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldChyYWRpdXMsIHRoZXRhLCB5KSB7XG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cdFx0dGhpcy50aGV0YSA9IHRoZXRhO1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KG90aGVyKSB7XG5cdFx0dGhpcy5yYWRpdXMgPSBvdGhlci5yYWRpdXM7XG5cdFx0dGhpcy50aGV0YSA9IG90aGVyLnRoZXRhO1xuXHRcdHRoaXMueSA9IG90aGVyLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tVmVjdG9yMyh2KSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbUNhcnRlc2lhbkNvb3Jkcyh2LngsIHYueSwgdi56KTtcblx0fVxuXG5cdHNldEZyb21DYXJ0ZXNpYW5Db29yZHMoeCwgeSwgeikge1xuXHRcdHRoaXMucmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeiAqIHopO1xuXHRcdHRoaXMudGhldGEgPSBNYXRoLmF0YW4yKHgsIHopO1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cbn1cblxuY2xhc3MgTWF0cml4NCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdE1hdHJpeDQucHJvdG90eXBlLmlzTWF0cml4NCA9IHRydWU7XG5cdFx0dGhpcy5lbGVtZW50cyA9IFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxXTtcblx0fVxuXG5cdHNldChuMTEsIG4xMiwgbjEzLCBuMTQsIG4yMSwgbjIyLCBuMjMsIG4yNCwgbjMxLCBuMzIsIG4zMywgbjM0LCBuNDEsIG40MiwgbjQzLCBuNDQpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dGVbMF0gPSBuMTE7XG5cdFx0dGVbNF0gPSBuMTI7XG5cdFx0dGVbOF0gPSBuMTM7XG5cdFx0dGVbMTJdID0gbjE0O1xuXHRcdHRlWzFdID0gbjIxO1xuXHRcdHRlWzVdID0gbjIyO1xuXHRcdHRlWzldID0gbjIzO1xuXHRcdHRlWzEzXSA9IG4yNDtcblx0XHR0ZVsyXSA9IG4zMTtcblx0XHR0ZVs2XSA9IG4zMjtcblx0XHR0ZVsxMF0gPSBuMzM7XG5cdFx0dGVbMTRdID0gbjM0O1xuXHRcdHRlWzNdID0gbjQxO1xuXHRcdHRlWzddID0gbjQyO1xuXHRcdHRlWzExXSA9IG40Mztcblx0XHR0ZVsxNV0gPSBuNDQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZGVudGl0eSgpIHtcblx0XHR0aGlzLnNldCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgTWF0cml4NCgpLmZyb21BcnJheSh0aGlzLmVsZW1lbnRzKTtcblx0fVxuXG5cdGNvcHkobSkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBtZSA9IG0uZWxlbWVudHM7XG5cdFx0dGVbMF0gPSBtZVswXTtcblx0XHR0ZVsxXSA9IG1lWzFdO1xuXHRcdHRlWzJdID0gbWVbMl07XG5cdFx0dGVbM10gPSBtZVszXTtcblx0XHR0ZVs0XSA9IG1lWzRdO1xuXHRcdHRlWzVdID0gbWVbNV07XG5cdFx0dGVbNl0gPSBtZVs2XTtcblx0XHR0ZVs3XSA9IG1lWzddO1xuXHRcdHRlWzhdID0gbWVbOF07XG5cdFx0dGVbOV0gPSBtZVs5XTtcblx0XHR0ZVsxMF0gPSBtZVsxMF07XG5cdFx0dGVbMTFdID0gbWVbMTFdO1xuXHRcdHRlWzEyXSA9IG1lWzEyXTtcblx0XHR0ZVsxM10gPSBtZVsxM107XG5cdFx0dGVbMTRdID0gbWVbMTRdO1xuXHRcdHRlWzE1XSA9IG1lWzE1XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHlQb3NpdGlvbihtKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzLFxuXHRcdFx0XHRcdG1lID0gbS5lbGVtZW50cztcblx0XHR0ZVsxMl0gPSBtZVsxMl07XG5cdFx0dGVbMTNdID0gbWVbMTNdO1xuXHRcdHRlWzE0XSA9IG1lWzE0XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21NYXRyaXgzKG0pIHtcblx0XHRjb25zdCBtZSA9IG0uZWxlbWVudHM7XG5cdFx0dGhpcy5zZXQobWVbMF0sIG1lWzNdLCBtZVs2XSwgMCwgbWVbMV0sIG1lWzRdLCBtZVs3XSwgMCwgbWVbMl0sIG1lWzVdLCBtZVs4XSwgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHRyYWN0QmFzaXMoeEF4aXMsIHlBeGlzLCB6QXhpcykge1xuXHRcdHhBeGlzLnNldEZyb21NYXRyaXhDb2x1bW4odGhpcywgMCk7XG5cdFx0eUF4aXMuc2V0RnJvbU1hdHJpeENvbHVtbih0aGlzLCAxKTtcblx0XHR6QXhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKHRoaXMsIDIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZUJhc2lzKHhBeGlzLCB5QXhpcywgekF4aXMpIHtcblx0XHR0aGlzLnNldCh4QXhpcy54LCB5QXhpcy54LCB6QXhpcy54LCAwLCB4QXhpcy55LCB5QXhpcy55LCB6QXhpcy55LCAwLCB4QXhpcy56LCB5QXhpcy56LCB6QXhpcy56LCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGV4dHJhY3RSb3RhdGlvbihtKSB7XG5cdFx0Ly8gdGhpcyBtZXRob2QgZG9lcyBub3Qgc3VwcG9ydCByZWZsZWN0aW9uIG1hdHJpY2VzXG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG1lID0gbS5lbGVtZW50cztcblxuXHRcdGNvbnN0IHNjYWxlWCA9IDEgLyBfdjEkMi5zZXRGcm9tTWF0cml4Q29sdW1uKG0sIDApLmxlbmd0aCgpO1xuXG5cdFx0Y29uc3Qgc2NhbGVZID0gMSAvIF92MSQyLnNldEZyb21NYXRyaXhDb2x1bW4obSwgMSkubGVuZ3RoKCk7XG5cblx0XHRjb25zdCBzY2FsZVogPSAxIC8gX3YxJDIuc2V0RnJvbU1hdHJpeENvbHVtbihtLCAyKS5sZW5ndGgoKTtcblxuXHRcdHRlWzBdID0gbWVbMF0gKiBzY2FsZVg7XG5cdFx0dGVbMV0gPSBtZVsxXSAqIHNjYWxlWDtcblx0XHR0ZVsyXSA9IG1lWzJdICogc2NhbGVYO1xuXHRcdHRlWzNdID0gMDtcblx0XHR0ZVs0XSA9IG1lWzRdICogc2NhbGVZO1xuXHRcdHRlWzVdID0gbWVbNV0gKiBzY2FsZVk7XG5cdFx0dGVbNl0gPSBtZVs2XSAqIHNjYWxlWTtcblx0XHR0ZVs3XSA9IDA7XG5cdFx0dGVbOF0gPSBtZVs4XSAqIHNjYWxlWjtcblx0XHR0ZVs5XSA9IG1lWzldICogc2NhbGVaO1xuXHRcdHRlWzEwXSA9IG1lWzEwXSAqIHNjYWxlWjtcblx0XHR0ZVsxMV0gPSAwO1xuXHRcdHRlWzEyXSA9IDA7XG5cdFx0dGVbMTNdID0gMDtcblx0XHR0ZVsxNF0gPSAwO1xuXHRcdHRlWzE1XSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb25Gcm9tRXVsZXIoZXVsZXIpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgeCA9IGV1bGVyLngsXG5cdFx0XHRcdFx0eSA9IGV1bGVyLnksXG5cdFx0XHRcdFx0eiA9IGV1bGVyLno7XG5cdFx0Y29uc3QgYSA9IE1hdGguY29zKHgpLFxuXHRcdFx0XHRcdGIgPSBNYXRoLnNpbih4KTtcblx0XHRjb25zdCBjID0gTWF0aC5jb3MoeSksXG5cdFx0XHRcdFx0ZCA9IE1hdGguc2luKHkpO1xuXHRcdGNvbnN0IGUgPSBNYXRoLmNvcyh6KSxcblx0XHRcdFx0XHRmID0gTWF0aC5zaW4oeik7XG5cblx0XHRpZiAoZXVsZXIub3JkZXIgPT09ICdYWVonKSB7XG5cdFx0XHRjb25zdCBhZSA9IGEgKiBlLFxuXHRcdFx0XHRcdFx0YWYgPSBhICogZixcblx0XHRcdFx0XHRcdGJlID0gYiAqIGUsXG5cdFx0XHRcdFx0XHRiZiA9IGIgKiBmO1xuXHRcdFx0dGVbMF0gPSBjICogZTtcblx0XHRcdHRlWzRdID0gLWMgKiBmO1xuXHRcdFx0dGVbOF0gPSBkO1xuXHRcdFx0dGVbMV0gPSBhZiArIGJlICogZDtcblx0XHRcdHRlWzVdID0gYWUgLSBiZiAqIGQ7XG5cdFx0XHR0ZVs5XSA9IC1iICogYztcblx0XHRcdHRlWzJdID0gYmYgLSBhZSAqIGQ7XG5cdFx0XHR0ZVs2XSA9IGJlICsgYWYgKiBkO1xuXHRcdFx0dGVbMTBdID0gYSAqIGM7XG5cdFx0fSBlbHNlIGlmIChldWxlci5vcmRlciA9PT0gJ1lYWicpIHtcblx0XHRcdGNvbnN0IGNlID0gYyAqIGUsXG5cdFx0XHRcdFx0XHRjZiA9IGMgKiBmLFxuXHRcdFx0XHRcdFx0ZGUgPSBkICogZSxcblx0XHRcdFx0XHRcdGRmID0gZCAqIGY7XG5cdFx0XHR0ZVswXSA9IGNlICsgZGYgKiBiO1xuXHRcdFx0dGVbNF0gPSBkZSAqIGIgLSBjZjtcblx0XHRcdHRlWzhdID0gYSAqIGQ7XG5cdFx0XHR0ZVsxXSA9IGEgKiBmO1xuXHRcdFx0dGVbNV0gPSBhICogZTtcblx0XHRcdHRlWzldID0gLWI7XG5cdFx0XHR0ZVsyXSA9IGNmICogYiAtIGRlO1xuXHRcdFx0dGVbNl0gPSBkZiArIGNlICogYjtcblx0XHRcdHRlWzEwXSA9IGEgKiBjO1xuXHRcdH0gZWxzZSBpZiAoZXVsZXIub3JkZXIgPT09ICdaWFknKSB7XG5cdFx0XHRjb25zdCBjZSA9IGMgKiBlLFxuXHRcdFx0XHRcdFx0Y2YgPSBjICogZixcblx0XHRcdFx0XHRcdGRlID0gZCAqIGUsXG5cdFx0XHRcdFx0XHRkZiA9IGQgKiBmO1xuXHRcdFx0dGVbMF0gPSBjZSAtIGRmICogYjtcblx0XHRcdHRlWzRdID0gLWEgKiBmO1xuXHRcdFx0dGVbOF0gPSBkZSArIGNmICogYjtcblx0XHRcdHRlWzFdID0gY2YgKyBkZSAqIGI7XG5cdFx0XHR0ZVs1XSA9IGEgKiBlO1xuXHRcdFx0dGVbOV0gPSBkZiAtIGNlICogYjtcblx0XHRcdHRlWzJdID0gLWEgKiBkO1xuXHRcdFx0dGVbNl0gPSBiO1xuXHRcdFx0dGVbMTBdID0gYSAqIGM7XG5cdFx0fSBlbHNlIGlmIChldWxlci5vcmRlciA9PT0gJ1pZWCcpIHtcblx0XHRcdGNvbnN0IGFlID0gYSAqIGUsXG5cdFx0XHRcdFx0XHRhZiA9IGEgKiBmLFxuXHRcdFx0XHRcdFx0YmUgPSBiICogZSxcblx0XHRcdFx0XHRcdGJmID0gYiAqIGY7XG5cdFx0XHR0ZVswXSA9IGMgKiBlO1xuXHRcdFx0dGVbNF0gPSBiZSAqIGQgLSBhZjtcblx0XHRcdHRlWzhdID0gYWUgKiBkICsgYmY7XG5cdFx0XHR0ZVsxXSA9IGMgKiBmO1xuXHRcdFx0dGVbNV0gPSBiZiAqIGQgKyBhZTtcblx0XHRcdHRlWzldID0gYWYgKiBkIC0gYmU7XG5cdFx0XHR0ZVsyXSA9IC1kO1xuXHRcdFx0dGVbNl0gPSBiICogYztcblx0XHRcdHRlWzEwXSA9IGEgKiBjO1xuXHRcdH0gZWxzZSBpZiAoZXVsZXIub3JkZXIgPT09ICdZWlgnKSB7XG5cdFx0XHRjb25zdCBhYyA9IGEgKiBjLFxuXHRcdFx0XHRcdFx0YWQgPSBhICogZCxcblx0XHRcdFx0XHRcdGJjID0gYiAqIGMsXG5cdFx0XHRcdFx0XHRiZCA9IGIgKiBkO1xuXHRcdFx0dGVbMF0gPSBjICogZTtcblx0XHRcdHRlWzRdID0gYmQgLSBhYyAqIGY7XG5cdFx0XHR0ZVs4XSA9IGJjICogZiArIGFkO1xuXHRcdFx0dGVbMV0gPSBmO1xuXHRcdFx0dGVbNV0gPSBhICogZTtcblx0XHRcdHRlWzldID0gLWIgKiBlO1xuXHRcdFx0dGVbMl0gPSAtZCAqIGU7XG5cdFx0XHR0ZVs2XSA9IGFkICogZiArIGJjO1xuXHRcdFx0dGVbMTBdID0gYWMgLSBiZCAqIGY7XG5cdFx0fSBlbHNlIGlmIChldWxlci5vcmRlciA9PT0gJ1haWScpIHtcblx0XHRcdGNvbnN0IGFjID0gYSAqIGMsXG5cdFx0XHRcdFx0XHRhZCA9IGEgKiBkLFxuXHRcdFx0XHRcdFx0YmMgPSBiICogYyxcblx0XHRcdFx0XHRcdGJkID0gYiAqIGQ7XG5cdFx0XHR0ZVswXSA9IGMgKiBlO1xuXHRcdFx0dGVbNF0gPSAtZjtcblx0XHRcdHRlWzhdID0gZCAqIGU7XG5cdFx0XHR0ZVsxXSA9IGFjICogZiArIGJkO1xuXHRcdFx0dGVbNV0gPSBhICogZTtcblx0XHRcdHRlWzldID0gYWQgKiBmIC0gYmM7XG5cdFx0XHR0ZVsyXSA9IGJjICogZiAtIGFkO1xuXHRcdFx0dGVbNl0gPSBiICogZTtcblx0XHRcdHRlWzEwXSA9IGJkICogZiArIGFjO1xuXHRcdH0gLy8gYm90dG9tIHJvd1xuXG5cblx0XHR0ZVszXSA9IDA7XG5cdFx0dGVbN10gPSAwO1xuXHRcdHRlWzExXSA9IDA7IC8vIGxhc3QgY29sdW1uXG5cblx0XHR0ZVsxMl0gPSAwO1xuXHRcdHRlWzEzXSA9IDA7XG5cdFx0dGVbMTRdID0gMDtcblx0XHR0ZVsxNV0gPSAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uRnJvbVF1YXRlcm5pb24ocSkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2UoX3plcm8sIHEsIF9vbmUpO1xuXHR9XG5cblx0bG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblxuXHRcdF96LnN1YlZlY3RvcnMoZXllLCB0YXJnZXQpO1xuXG5cdFx0aWYgKF96Lmxlbmd0aFNxKCkgPT09IDApIHtcblx0XHRcdC8vIGV5ZSBhbmQgdGFyZ2V0IGFyZSBpbiB0aGUgc2FtZSBwb3NpdGlvblxuXHRcdFx0X3oueiA9IDE7XG5cdFx0fVxuXG5cdFx0X3oubm9ybWFsaXplKCk7XG5cblx0XHRfeC5jcm9zc1ZlY3RvcnModXAsIF96KTtcblxuXHRcdGlmIChfeC5sZW5ndGhTcSgpID09PSAwKSB7XG5cdFx0XHQvLyB1cCBhbmQgeiBhcmUgcGFyYWxsZWxcblx0XHRcdGlmIChNYXRoLmFicyh1cC56KSA9PT0gMSkge1xuXHRcdFx0XHRfei54ICs9IDAuMDAwMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF96LnogKz0gMC4wMDAxO1xuXHRcdFx0fVxuXG5cdFx0XHRfei5ub3JtYWxpemUoKTtcblxuXHRcdFx0X3guY3Jvc3NWZWN0b3JzKHVwLCBfeik7XG5cdFx0fVxuXG5cdFx0X3gubm9ybWFsaXplKCk7XG5cblx0XHRfeS5jcm9zc1ZlY3RvcnMoX3osIF94KTtcblxuXHRcdHRlWzBdID0gX3gueDtcblx0XHR0ZVs0XSA9IF95Lng7XG5cdFx0dGVbOF0gPSBfei54O1xuXHRcdHRlWzFdID0gX3gueTtcblx0XHR0ZVs1XSA9IF95Lnk7XG5cdFx0dGVbOV0gPSBfei55O1xuXHRcdHRlWzJdID0gX3guejtcblx0XHR0ZVs2XSA9IF95Lno7XG5cdFx0dGVbMTBdID0gX3ouejtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5KG0pIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseU1hdHJpY2VzKHRoaXMsIG0pO1xuXHR9XG5cblx0cHJlbXVsdGlwbHkobSkge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5TWF0cmljZXMobSwgdGhpcyk7XG5cdH1cblxuXHRtdWx0aXBseU1hdHJpY2VzKGEsIGIpIHtcblx0XHRjb25zdCBhZSA9IGEuZWxlbWVudHM7XG5cdFx0Y29uc3QgYmUgPSBiLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBhMTEgPSBhZVswXSxcblx0XHRcdFx0XHRhMTIgPSBhZVs0XSxcblx0XHRcdFx0XHRhMTMgPSBhZVs4XSxcblx0XHRcdFx0XHRhMTQgPSBhZVsxMl07XG5cdFx0Y29uc3QgYTIxID0gYWVbMV0sXG5cdFx0XHRcdFx0YTIyID0gYWVbNV0sXG5cdFx0XHRcdFx0YTIzID0gYWVbOV0sXG5cdFx0XHRcdFx0YTI0ID0gYWVbMTNdO1xuXHRcdGNvbnN0IGEzMSA9IGFlWzJdLFxuXHRcdFx0XHRcdGEzMiA9IGFlWzZdLFxuXHRcdFx0XHRcdGEzMyA9IGFlWzEwXSxcblx0XHRcdFx0XHRhMzQgPSBhZVsxNF07XG5cdFx0Y29uc3QgYTQxID0gYWVbM10sXG5cdFx0XHRcdFx0YTQyID0gYWVbN10sXG5cdFx0XHRcdFx0YTQzID0gYWVbMTFdLFxuXHRcdFx0XHRcdGE0NCA9IGFlWzE1XTtcblx0XHRjb25zdCBiMTEgPSBiZVswXSxcblx0XHRcdFx0XHRiMTIgPSBiZVs0XSxcblx0XHRcdFx0XHRiMTMgPSBiZVs4XSxcblx0XHRcdFx0XHRiMTQgPSBiZVsxMl07XG5cdFx0Y29uc3QgYjIxID0gYmVbMV0sXG5cdFx0XHRcdFx0YjIyID0gYmVbNV0sXG5cdFx0XHRcdFx0YjIzID0gYmVbOV0sXG5cdFx0XHRcdFx0YjI0ID0gYmVbMTNdO1xuXHRcdGNvbnN0IGIzMSA9IGJlWzJdLFxuXHRcdFx0XHRcdGIzMiA9IGJlWzZdLFxuXHRcdFx0XHRcdGIzMyA9IGJlWzEwXSxcblx0XHRcdFx0XHRiMzQgPSBiZVsxNF07XG5cdFx0Y29uc3QgYjQxID0gYmVbM10sXG5cdFx0XHRcdFx0YjQyID0gYmVbN10sXG5cdFx0XHRcdFx0YjQzID0gYmVbMTFdLFxuXHRcdFx0XHRcdGI0NCA9IGJlWzE1XTtcblx0XHR0ZVswXSA9IGExMSAqIGIxMSArIGExMiAqIGIyMSArIGExMyAqIGIzMSArIGExNCAqIGI0MTtcblx0XHR0ZVs0XSA9IGExMSAqIGIxMiArIGExMiAqIGIyMiArIGExMyAqIGIzMiArIGExNCAqIGI0Mjtcblx0XHR0ZVs4XSA9IGExMSAqIGIxMyArIGExMiAqIGIyMyArIGExMyAqIGIzMyArIGExNCAqIGI0Mztcblx0XHR0ZVsxMl0gPSBhMTEgKiBiMTQgKyBhMTIgKiBiMjQgKyBhMTMgKiBiMzQgKyBhMTQgKiBiNDQ7XG5cdFx0dGVbMV0gPSBhMjEgKiBiMTEgKyBhMjIgKiBiMjEgKyBhMjMgKiBiMzEgKyBhMjQgKiBiNDE7XG5cdFx0dGVbNV0gPSBhMjEgKiBiMTIgKyBhMjIgKiBiMjIgKyBhMjMgKiBiMzIgKyBhMjQgKiBiNDI7XG5cdFx0dGVbOV0gPSBhMjEgKiBiMTMgKyBhMjIgKiBiMjMgKyBhMjMgKiBiMzMgKyBhMjQgKiBiNDM7XG5cdFx0dGVbMTNdID0gYTIxICogYjE0ICsgYTIyICogYjI0ICsgYTIzICogYjM0ICsgYTI0ICogYjQ0O1xuXHRcdHRlWzJdID0gYTMxICogYjExICsgYTMyICogYjIxICsgYTMzICogYjMxICsgYTM0ICogYjQxO1xuXHRcdHRlWzZdID0gYTMxICogYjEyICsgYTMyICogYjIyICsgYTMzICogYjMyICsgYTM0ICogYjQyO1xuXHRcdHRlWzEwXSA9IGEzMSAqIGIxMyArIGEzMiAqIGIyMyArIGEzMyAqIGIzMyArIGEzNCAqIGI0Mztcblx0XHR0ZVsxNF0gPSBhMzEgKiBiMTQgKyBhMzIgKiBiMjQgKyBhMzMgKiBiMzQgKyBhMzQgKiBiNDQ7XG5cdFx0dGVbM10gPSBhNDEgKiBiMTEgKyBhNDIgKiBiMjEgKyBhNDMgKiBiMzEgKyBhNDQgKiBiNDE7XG5cdFx0dGVbN10gPSBhNDEgKiBiMTIgKyBhNDIgKiBiMjIgKyBhNDMgKiBiMzIgKyBhNDQgKiBiNDI7XG5cdFx0dGVbMTFdID0gYTQxICogYjEzICsgYTQyICogYjIzICsgYTQzICogYjMzICsgYTQ0ICogYjQzO1xuXHRcdHRlWzE1XSA9IGE0MSAqIGIxNCArIGE0MiAqIGIyNCArIGE0MyAqIGIzNCArIGE0NCAqIGI0NDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHRpcGx5U2NhbGFyKHMpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dGVbMF0gKj0gcztcblx0XHR0ZVs0XSAqPSBzO1xuXHRcdHRlWzhdICo9IHM7XG5cdFx0dGVbMTJdICo9IHM7XG5cdFx0dGVbMV0gKj0gcztcblx0XHR0ZVs1XSAqPSBzO1xuXHRcdHRlWzldICo9IHM7XG5cdFx0dGVbMTNdICo9IHM7XG5cdFx0dGVbMl0gKj0gcztcblx0XHR0ZVs2XSAqPSBzO1xuXHRcdHRlWzEwXSAqPSBzO1xuXHRcdHRlWzE0XSAqPSBzO1xuXHRcdHRlWzNdICo9IHM7XG5cdFx0dGVbN10gKj0gcztcblx0XHR0ZVsxMV0gKj0gcztcblx0XHR0ZVsxNV0gKj0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRldGVybWluYW50KCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBuMTEgPSB0ZVswXSxcblx0XHRcdFx0XHRuMTIgPSB0ZVs0XSxcblx0XHRcdFx0XHRuMTMgPSB0ZVs4XSxcblx0XHRcdFx0XHRuMTQgPSB0ZVsxMl07XG5cdFx0Y29uc3QgbjIxID0gdGVbMV0sXG5cdFx0XHRcdFx0bjIyID0gdGVbNV0sXG5cdFx0XHRcdFx0bjIzID0gdGVbOV0sXG5cdFx0XHRcdFx0bjI0ID0gdGVbMTNdO1xuXHRcdGNvbnN0IG4zMSA9IHRlWzJdLFxuXHRcdFx0XHRcdG4zMiA9IHRlWzZdLFxuXHRcdFx0XHRcdG4zMyA9IHRlWzEwXSxcblx0XHRcdFx0XHRuMzQgPSB0ZVsxNF07XG5cdFx0Y29uc3QgbjQxID0gdGVbM10sXG5cdFx0XHRcdFx0bjQyID0gdGVbN10sXG5cdFx0XHRcdFx0bjQzID0gdGVbMTFdLFxuXHRcdFx0XHRcdG40NCA9IHRlWzE1XTsgLy9UT0RPOiBtYWtlIHRoaXMgbW9yZSBlZmZpY2llbnRcblx0XHQvLyggYmFzZWQgb24gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9tYXRyaXgvZnVuY3Rpb25zL2ludmVyc2UvZm91ckQvaW5kZXguaHRtIClcblxuXHRcdHJldHVybiBuNDEgKiAoK24xNCAqIG4yMyAqIG4zMiAtIG4xMyAqIG4yNCAqIG4zMiAtIG4xNCAqIG4yMiAqIG4zMyArIG4xMiAqIG4yNCAqIG4zMyArIG4xMyAqIG4yMiAqIG4zNCAtIG4xMiAqIG4yMyAqIG4zNCkgKyBuNDIgKiAoK24xMSAqIG4yMyAqIG4zNCAtIG4xMSAqIG4yNCAqIG4zMyArIG4xNCAqIG4yMSAqIG4zMyAtIG4xMyAqIG4yMSAqIG4zNCArIG4xMyAqIG4yNCAqIG4zMSAtIG4xNCAqIG4yMyAqIG4zMSkgKyBuNDMgKiAoK24xMSAqIG4yNCAqIG4zMiAtIG4xMSAqIG4yMiAqIG4zNCAtIG4xNCAqIG4yMSAqIG4zMiArIG4xMiAqIG4yMSAqIG4zNCArIG4xNCAqIG4yMiAqIG4zMSAtIG4xMiAqIG4yNCAqIG4zMSkgKyBuNDQgKiAoLW4xMyAqIG4yMiAqIG4zMSAtIG4xMSAqIG4yMyAqIG4zMiArIG4xMSAqIG4yMiAqIG4zMyArIG4xMyAqIG4yMSAqIG4zMiAtIG4xMiAqIG4yMSAqIG4zMyArIG4xMiAqIG4yMyAqIG4zMSk7XG5cdH1cblxuXHR0cmFuc3Bvc2UoKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGxldCB0bXA7XG5cdFx0dG1wID0gdGVbMV07XG5cdFx0dGVbMV0gPSB0ZVs0XTtcblx0XHR0ZVs0XSA9IHRtcDtcblx0XHR0bXAgPSB0ZVsyXTtcblx0XHR0ZVsyXSA9IHRlWzhdO1xuXHRcdHRlWzhdID0gdG1wO1xuXHRcdHRtcCA9IHRlWzZdO1xuXHRcdHRlWzZdID0gdGVbOV07XG5cdFx0dGVbOV0gPSB0bXA7XG5cdFx0dG1wID0gdGVbM107XG5cdFx0dGVbM10gPSB0ZVsxMl07XG5cdFx0dGVbMTJdID0gdG1wO1xuXHRcdHRtcCA9IHRlWzddO1xuXHRcdHRlWzddID0gdGVbMTNdO1xuXHRcdHRlWzEzXSA9IHRtcDtcblx0XHR0bXAgPSB0ZVsxMV07XG5cdFx0dGVbMTFdID0gdGVbMTRdO1xuXHRcdHRlWzE0XSA9IHRtcDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFBvc2l0aW9uKHgsIHksIHopIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHRpZiAoeC5pc1ZlY3RvcjMpIHtcblx0XHRcdHRlWzEyXSA9IHgueDtcblx0XHRcdHRlWzEzXSA9IHgueTtcblx0XHRcdHRlWzE0XSA9IHguejtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGVbMTJdID0geDtcblx0XHRcdHRlWzEzXSA9IHk7XG5cdFx0XHR0ZVsxNF0gPSB6O1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aW52ZXJ0KCkge1xuXHRcdC8vIGJhc2VkIG9uIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvbWF0cml4L2Z1bmN0aW9ucy9pbnZlcnNlL2ZvdXJEL2luZGV4Lmh0bVxuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cyxcblx0XHRcdFx0XHRuMTEgPSB0ZVswXSxcblx0XHRcdFx0XHRuMjEgPSB0ZVsxXSxcblx0XHRcdFx0XHRuMzEgPSB0ZVsyXSxcblx0XHRcdFx0XHRuNDEgPSB0ZVszXSxcblx0XHRcdFx0XHRuMTIgPSB0ZVs0XSxcblx0XHRcdFx0XHRuMjIgPSB0ZVs1XSxcblx0XHRcdFx0XHRuMzIgPSB0ZVs2XSxcblx0XHRcdFx0XHRuNDIgPSB0ZVs3XSxcblx0XHRcdFx0XHRuMTMgPSB0ZVs4XSxcblx0XHRcdFx0XHRuMjMgPSB0ZVs5XSxcblx0XHRcdFx0XHRuMzMgPSB0ZVsxMF0sXG5cdFx0XHRcdFx0bjQzID0gdGVbMTFdLFxuXHRcdFx0XHRcdG4xNCA9IHRlWzEyXSxcblx0XHRcdFx0XHRuMjQgPSB0ZVsxM10sXG5cdFx0XHRcdFx0bjM0ID0gdGVbMTRdLFxuXHRcdFx0XHRcdG40NCA9IHRlWzE1XSxcblx0XHRcdFx0XHR0MTEgPSBuMjMgKiBuMzQgKiBuNDIgLSBuMjQgKiBuMzMgKiBuNDIgKyBuMjQgKiBuMzIgKiBuNDMgLSBuMjIgKiBuMzQgKiBuNDMgLSBuMjMgKiBuMzIgKiBuNDQgKyBuMjIgKiBuMzMgKiBuNDQsXG5cdFx0XHRcdFx0dDEyID0gbjE0ICogbjMzICogbjQyIC0gbjEzICogbjM0ICogbjQyIC0gbjE0ICogbjMyICogbjQzICsgbjEyICogbjM0ICogbjQzICsgbjEzICogbjMyICogbjQ0IC0gbjEyICogbjMzICogbjQ0LFxuXHRcdFx0XHRcdHQxMyA9IG4xMyAqIG4yNCAqIG40MiAtIG4xNCAqIG4yMyAqIG40MiArIG4xNCAqIG4yMiAqIG40MyAtIG4xMiAqIG4yNCAqIG40MyAtIG4xMyAqIG4yMiAqIG40NCArIG4xMiAqIG4yMyAqIG40NCxcblx0XHRcdFx0XHR0MTQgPSBuMTQgKiBuMjMgKiBuMzIgLSBuMTMgKiBuMjQgKiBuMzIgLSBuMTQgKiBuMjIgKiBuMzMgKyBuMTIgKiBuMjQgKiBuMzMgKyBuMTMgKiBuMjIgKiBuMzQgLSBuMTIgKiBuMjMgKiBuMzQ7XG5cdFx0Y29uc3QgZGV0ID0gbjExICogdDExICsgbjIxICogdDEyICsgbjMxICogdDEzICsgbjQxICogdDE0O1xuXHRcdGlmIChkZXQgPT09IDApIHJldHVybiB0aGlzLnNldCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcblx0XHRjb25zdCBkZXRJbnYgPSAxIC8gZGV0O1xuXHRcdHRlWzBdID0gdDExICogZGV0SW52O1xuXHRcdHRlWzFdID0gKG4yNCAqIG4zMyAqIG40MSAtIG4yMyAqIG4zNCAqIG40MSAtIG4yNCAqIG4zMSAqIG40MyArIG4yMSAqIG4zNCAqIG40MyArIG4yMyAqIG4zMSAqIG40NCAtIG4yMSAqIG4zMyAqIG40NCkgKiBkZXRJbnY7XG5cdFx0dGVbMl0gPSAobjIyICogbjM0ICogbjQxIC0gbjI0ICogbjMyICogbjQxICsgbjI0ICogbjMxICogbjQyIC0gbjIxICogbjM0ICogbjQyIC0gbjIyICogbjMxICogbjQ0ICsgbjIxICogbjMyICogbjQ0KSAqIGRldEludjtcblx0XHR0ZVszXSA9IChuMjMgKiBuMzIgKiBuNDEgLSBuMjIgKiBuMzMgKiBuNDEgLSBuMjMgKiBuMzEgKiBuNDIgKyBuMjEgKiBuMzMgKiBuNDIgKyBuMjIgKiBuMzEgKiBuNDMgLSBuMjEgKiBuMzIgKiBuNDMpICogZGV0SW52O1xuXHRcdHRlWzRdID0gdDEyICogZGV0SW52O1xuXHRcdHRlWzVdID0gKG4xMyAqIG4zNCAqIG40MSAtIG4xNCAqIG4zMyAqIG40MSArIG4xNCAqIG4zMSAqIG40MyAtIG4xMSAqIG4zNCAqIG40MyAtIG4xMyAqIG4zMSAqIG40NCArIG4xMSAqIG4zMyAqIG40NCkgKiBkZXRJbnY7XG5cdFx0dGVbNl0gPSAobjE0ICogbjMyICogbjQxIC0gbjEyICogbjM0ICogbjQxIC0gbjE0ICogbjMxICogbjQyICsgbjExICogbjM0ICogbjQyICsgbjEyICogbjMxICogbjQ0IC0gbjExICogbjMyICogbjQ0KSAqIGRldEludjtcblx0XHR0ZVs3XSA9IChuMTIgKiBuMzMgKiBuNDEgLSBuMTMgKiBuMzIgKiBuNDEgKyBuMTMgKiBuMzEgKiBuNDIgLSBuMTEgKiBuMzMgKiBuNDIgLSBuMTIgKiBuMzEgKiBuNDMgKyBuMTEgKiBuMzIgKiBuNDMpICogZGV0SW52O1xuXHRcdHRlWzhdID0gdDEzICogZGV0SW52O1xuXHRcdHRlWzldID0gKG4xNCAqIG4yMyAqIG40MSAtIG4xMyAqIG4yNCAqIG40MSAtIG4xNCAqIG4yMSAqIG40MyArIG4xMSAqIG4yNCAqIG40MyArIG4xMyAqIG4yMSAqIG40NCAtIG4xMSAqIG4yMyAqIG40NCkgKiBkZXRJbnY7XG5cdFx0dGVbMTBdID0gKG4xMiAqIG4yNCAqIG40MSAtIG4xNCAqIG4yMiAqIG40MSArIG4xNCAqIG4yMSAqIG40MiAtIG4xMSAqIG4yNCAqIG40MiAtIG4xMiAqIG4yMSAqIG40NCArIG4xMSAqIG4yMiAqIG40NCkgKiBkZXRJbnY7XG5cdFx0dGVbMTFdID0gKG4xMyAqIG4yMiAqIG40MSAtIG4xMiAqIG4yMyAqIG40MSAtIG4xMyAqIG4yMSAqIG40MiArIG4xMSAqIG4yMyAqIG40MiArIG4xMiAqIG4yMSAqIG40MyAtIG4xMSAqIG4yMiAqIG40MykgKiBkZXRJbnY7XG5cdFx0dGVbMTJdID0gdDE0ICogZGV0SW52O1xuXHRcdHRlWzEzXSA9IChuMTMgKiBuMjQgKiBuMzEgLSBuMTQgKiBuMjMgKiBuMzEgKyBuMTQgKiBuMjEgKiBuMzMgLSBuMTEgKiBuMjQgKiBuMzMgLSBuMTMgKiBuMjEgKiBuMzQgKyBuMTEgKiBuMjMgKiBuMzQpICogZGV0SW52O1xuXHRcdHRlWzE0XSA9IChuMTQgKiBuMjIgKiBuMzEgLSBuMTIgKiBuMjQgKiBuMzEgLSBuMTQgKiBuMjEgKiBuMzIgKyBuMTEgKiBuMjQgKiBuMzIgKyBuMTIgKiBuMjEgKiBuMzQgLSBuMTEgKiBuMjIgKiBuMzQpICogZGV0SW52O1xuXHRcdHRlWzE1XSA9IChuMTIgKiBuMjMgKiBuMzEgLSBuMTMgKiBuMjIgKiBuMzEgKyBuMTMgKiBuMjEgKiBuMzIgLSBuMTEgKiBuMjMgKiBuMzIgLSBuMTIgKiBuMjEgKiBuMzMgKyBuMTEgKiBuMjIgKiBuMzMpICogZGV0SW52O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2NhbGUodikge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCB4ID0gdi54LFxuXHRcdFx0XHRcdHkgPSB2LnksXG5cdFx0XHRcdFx0eiA9IHYuejtcblx0XHR0ZVswXSAqPSB4O1xuXHRcdHRlWzRdICo9IHk7XG5cdFx0dGVbOF0gKj0gejtcblx0XHR0ZVsxXSAqPSB4O1xuXHRcdHRlWzVdICo9IHk7XG5cdFx0dGVbOV0gKj0gejtcblx0XHR0ZVsyXSAqPSB4O1xuXHRcdHRlWzZdICo9IHk7XG5cdFx0dGVbMTBdICo9IHo7XG5cdFx0dGVbM10gKj0geDtcblx0XHR0ZVs3XSAqPSB5O1xuXHRcdHRlWzExXSAqPSB6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0TWF4U2NhbGVPbkF4aXMoKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHNjYWxlWFNxID0gdGVbMF0gKiB0ZVswXSArIHRlWzFdICogdGVbMV0gKyB0ZVsyXSAqIHRlWzJdO1xuXHRcdGNvbnN0IHNjYWxlWVNxID0gdGVbNF0gKiB0ZVs0XSArIHRlWzVdICogdGVbNV0gKyB0ZVs2XSAqIHRlWzZdO1xuXHRcdGNvbnN0IHNjYWxlWlNxID0gdGVbOF0gKiB0ZVs4XSArIHRlWzldICogdGVbOV0gKyB0ZVsxMF0gKiB0ZVsxMF07XG5cdFx0cmV0dXJuIE1hdGguc3FydChNYXRoLm1heChzY2FsZVhTcSwgc2NhbGVZU3EsIHNjYWxlWlNxKSk7XG5cdH1cblxuXHRtYWtlVHJhbnNsYXRpb24oeCwgeSwgeikge1xuXHRcdHRoaXMuc2V0KDEsIDAsIDAsIHgsIDAsIDEsIDAsIHksIDAsIDAsIDEsIHosIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uWCh0aGV0YSkge1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyh0aGV0YSksXG5cdFx0XHRcdFx0cyA9IE1hdGguc2luKHRoZXRhKTtcblx0XHR0aGlzLnNldCgxLCAwLCAwLCAwLCAwLCBjLCAtcywgMCwgMCwgcywgYywgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlUm90YXRpb25ZKHRoZXRhKSB7XG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKHRoZXRhKSxcblx0XHRcdFx0XHRzID0gTWF0aC5zaW4odGhldGEpO1xuXHRcdHRoaXMuc2V0KGMsIDAsIHMsIDAsIDAsIDEsIDAsIDAsIC1zLCAwLCBjLCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VSb3RhdGlvbloodGhldGEpIHtcblx0XHRjb25zdCBjID0gTWF0aC5jb3ModGhldGEpLFxuXHRcdFx0XHRcdHMgPSBNYXRoLnNpbih0aGV0YSk7XG5cdFx0dGhpcy5zZXQoYywgLXMsIDAsIDAsIHMsIGMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uQXhpcyhheGlzLCBhbmdsZSkge1xuXHRcdC8vIEJhc2VkIG9uIGh0dHA6Ly93d3cuZ2FtZWRldi5uZXQvcmVmZXJlbmNlL2FydGljbGVzL2FydGljbGUxMTk5LmFzcFxuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XG5cdFx0Y29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKTtcblx0XHRjb25zdCB0ID0gMSAtIGM7XG5cdFx0Y29uc3QgeCA9IGF4aXMueCxcblx0XHRcdFx0XHR5ID0gYXhpcy55LFxuXHRcdFx0XHRcdHogPSBheGlzLno7XG5cdFx0Y29uc3QgdHggPSB0ICogeCxcblx0XHRcdFx0XHR0eSA9IHQgKiB5O1xuXHRcdHRoaXMuc2V0KHR4ICogeCArIGMsIHR4ICogeSAtIHMgKiB6LCB0eCAqIHogKyBzICogeSwgMCwgdHggKiB5ICsgcyAqIHosIHR5ICogeSArIGMsIHR5ICogeiAtIHMgKiB4LCAwLCB0eCAqIHogLSBzICogeSwgdHkgKiB6ICsgcyAqIHgsIHQgKiB6ICogeiArIGMsIDAsIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVNjYWxlKHgsIHksIHopIHtcblx0XHR0aGlzLnNldCh4LCAwLCAwLCAwLCAwLCB5LCAwLCAwLCAwLCAwLCB6LCAwLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VTaGVhcih4eSwgeHosIHl4LCB5eiwgengsIHp5KSB7XG5cdFx0dGhpcy5zZXQoMSwgeXgsIHp4LCAwLCB4eSwgMSwgenksIDAsIHh6LCB5eiwgMSwgMCwgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb21wb3NlKHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCB4ID0gcXVhdGVybmlvbi5feCxcblx0XHRcdFx0XHR5ID0gcXVhdGVybmlvbi5feSxcblx0XHRcdFx0XHR6ID0gcXVhdGVybmlvbi5feixcblx0XHRcdFx0XHR3ID0gcXVhdGVybmlvbi5fdztcblx0XHRjb25zdCB4MiA9IHggKyB4LFxuXHRcdFx0XHRcdHkyID0geSArIHksXG5cdFx0XHRcdFx0ejIgPSB6ICsgejtcblx0XHRjb25zdCB4eCA9IHggKiB4Mixcblx0XHRcdFx0XHR4eSA9IHggKiB5Mixcblx0XHRcdFx0XHR4eiA9IHggKiB6Mjtcblx0XHRjb25zdCB5eSA9IHkgKiB5Mixcblx0XHRcdFx0XHR5eiA9IHkgKiB6Mixcblx0XHRcdFx0XHR6eiA9IHogKiB6Mjtcblx0XHRjb25zdCB3eCA9IHcgKiB4Mixcblx0XHRcdFx0XHR3eSA9IHcgKiB5Mixcblx0XHRcdFx0XHR3eiA9IHcgKiB6Mjtcblx0XHRjb25zdCBzeCA9IHNjYWxlLngsXG5cdFx0XHRcdFx0c3kgPSBzY2FsZS55LFxuXHRcdFx0XHRcdHN6ID0gc2NhbGUuejtcblx0XHR0ZVswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuXHRcdHRlWzFdID0gKHh5ICsgd3opICogc3g7XG5cdFx0dGVbMl0gPSAoeHogLSB3eSkgKiBzeDtcblx0XHR0ZVszXSA9IDA7XG5cdFx0dGVbNF0gPSAoeHkgLSB3eikgKiBzeTtcblx0XHR0ZVs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuXHRcdHRlWzZdID0gKHl6ICsgd3gpICogc3k7XG5cdFx0dGVbN10gPSAwO1xuXHRcdHRlWzhdID0gKHh6ICsgd3kpICogc3o7XG5cdFx0dGVbOV0gPSAoeXogLSB3eCkgKiBzejtcblx0XHR0ZVsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcblx0XHR0ZVsxMV0gPSAwO1xuXHRcdHRlWzEyXSA9IHBvc2l0aW9uLng7XG5cdFx0dGVbMTNdID0gcG9zaXRpb24ueTtcblx0XHR0ZVsxNF0gPSBwb3NpdGlvbi56O1xuXHRcdHRlWzE1XSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkZWNvbXBvc2UocG9zaXRpb24sIHF1YXRlcm5pb24sIHNjYWxlKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0bGV0IHN4ID0gX3YxJDIuc2V0KHRlWzBdLCB0ZVsxXSwgdGVbMl0pLmxlbmd0aCgpO1xuXG5cdFx0Y29uc3Qgc3kgPSBfdjEkMi5zZXQodGVbNF0sIHRlWzVdLCB0ZVs2XSkubGVuZ3RoKCk7XG5cblx0XHRjb25zdCBzeiA9IF92MSQyLnNldCh0ZVs4XSwgdGVbOV0sIHRlWzEwXSkubGVuZ3RoKCk7IC8vIGlmIGRldGVybWluZSBpcyBuZWdhdGl2ZSwgd2UgbmVlZCB0byBpbnZlcnQgb25lIHNjYWxlXG5cblxuXHRcdGNvbnN0IGRldCA9IHRoaXMuZGV0ZXJtaW5hbnQoKTtcblx0XHRpZiAoZGV0IDwgMCkgc3ggPSAtc3g7XG5cdFx0cG9zaXRpb24ueCA9IHRlWzEyXTtcblx0XHRwb3NpdGlvbi55ID0gdGVbMTNdO1xuXHRcdHBvc2l0aW9uLnogPSB0ZVsxNF07IC8vIHNjYWxlIHRoZSByb3RhdGlvbiBwYXJ0XG5cblx0XHRfbTEuY29weSh0aGlzKTtcblxuXHRcdGNvbnN0IGludlNYID0gMSAvIHN4O1xuXHRcdGNvbnN0IGludlNZID0gMSAvIHN5O1xuXHRcdGNvbnN0IGludlNaID0gMSAvIHN6O1xuXHRcdF9tMS5lbGVtZW50c1swXSAqPSBpbnZTWDtcblx0XHRfbTEuZWxlbWVudHNbMV0gKj0gaW52U1g7XG5cdFx0X20xLmVsZW1lbnRzWzJdICo9IGludlNYO1xuXHRcdF9tMS5lbGVtZW50c1s0XSAqPSBpbnZTWTtcblx0XHRfbTEuZWxlbWVudHNbNV0gKj0gaW52U1k7XG5cdFx0X20xLmVsZW1lbnRzWzZdICo9IGludlNZO1xuXHRcdF9tMS5lbGVtZW50c1s4XSAqPSBpbnZTWjtcblx0XHRfbTEuZWxlbWVudHNbOV0gKj0gaW52U1o7XG5cdFx0X20xLmVsZW1lbnRzWzEwXSAqPSBpbnZTWjtcblx0XHRxdWF0ZXJuaW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeChfbTEpO1xuXHRcdHNjYWxlLnggPSBzeDtcblx0XHRzY2FsZS55ID0gc3k7XG5cdFx0c2NhbGUueiA9IHN6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVBlcnNwZWN0aXZlKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgbmVhciwgZmFyKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IHggPSAyICogbmVhciAvIChyaWdodCAtIGxlZnQpO1xuXHRcdGNvbnN0IHkgPSAyICogbmVhciAvICh0b3AgLSBib3R0b20pO1xuXHRcdGNvbnN0IGEgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xuXHRcdGNvbnN0IGIgPSAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pO1xuXHRcdGNvbnN0IGMgPSAtKGZhciArIG5lYXIpIC8gKGZhciAtIG5lYXIpO1xuXHRcdGNvbnN0IGQgPSAtMiAqIGZhciAqIG5lYXIgLyAoZmFyIC0gbmVhcik7XG5cdFx0dGVbMF0gPSB4O1xuXHRcdHRlWzRdID0gMDtcblx0XHR0ZVs4XSA9IGE7XG5cdFx0dGVbMTJdID0gMDtcblx0XHR0ZVsxXSA9IDA7XG5cdFx0dGVbNV0gPSB5O1xuXHRcdHRlWzldID0gYjtcblx0XHR0ZVsxM10gPSAwO1xuXHRcdHRlWzJdID0gMDtcblx0XHR0ZVs2XSA9IDA7XG5cdFx0dGVbMTBdID0gYztcblx0XHR0ZVsxNF0gPSBkO1xuXHRcdHRlWzNdID0gMDtcblx0XHR0ZVs3XSA9IDA7XG5cdFx0dGVbMTFdID0gLTE7XG5cdFx0dGVbMTVdID0gMDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG1ha2VPcnRob2dyYXBoaWMobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBuZWFyLCBmYXIpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgdyA9IDEuMCAvIChyaWdodCAtIGxlZnQpO1xuXHRcdGNvbnN0IGggPSAxLjAgLyAodG9wIC0gYm90dG9tKTtcblx0XHRjb25zdCBwID0gMS4wIC8gKGZhciAtIG5lYXIpO1xuXHRcdGNvbnN0IHggPSAocmlnaHQgKyBsZWZ0KSAqIHc7XG5cdFx0Y29uc3QgeSA9ICh0b3AgKyBib3R0b20pICogaDtcblx0XHRjb25zdCB6ID0gKGZhciArIG5lYXIpICogcDtcblx0XHR0ZVswXSA9IDIgKiB3O1xuXHRcdHRlWzRdID0gMDtcblx0XHR0ZVs4XSA9IDA7XG5cdFx0dGVbMTJdID0gLXg7XG5cdFx0dGVbMV0gPSAwO1xuXHRcdHRlWzVdID0gMiAqIGg7XG5cdFx0dGVbOV0gPSAwO1xuXHRcdHRlWzEzXSA9IC15O1xuXHRcdHRlWzJdID0gMDtcblx0XHR0ZVs2XSA9IDA7XG5cdFx0dGVbMTBdID0gLTIgKiBwO1xuXHRcdHRlWzE0XSA9IC16O1xuXHRcdHRlWzNdID0gMDtcblx0XHR0ZVs3XSA9IDA7XG5cdFx0dGVbMTFdID0gMDtcblx0XHR0ZVsxNV0gPSAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKG1hdHJpeCkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBtZSA9IG1hdHJpeC5lbGVtZW50cztcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHRcdFx0aWYgKHRlW2ldICE9PSBtZVtpXSkgcmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0ZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gYXJyYXlbaSArIG9mZnNldF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRlWzBdO1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGVbMV07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0ZVsyXTtcblx0XHRhcnJheVtvZmZzZXQgKyAzXSA9IHRlWzNdO1xuXHRcdGFycmF5W29mZnNldCArIDRdID0gdGVbNF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgNV0gPSB0ZVs1XTtcblx0XHRhcnJheVtvZmZzZXQgKyA2XSA9IHRlWzZdO1xuXHRcdGFycmF5W29mZnNldCArIDddID0gdGVbN107XG5cdFx0YXJyYXlbb2Zmc2V0ICsgOF0gPSB0ZVs4XTtcblx0XHRhcnJheVtvZmZzZXQgKyA5XSA9IHRlWzldO1xuXHRcdGFycmF5W29mZnNldCArIDEwXSA9IHRlWzEwXTtcblx0XHRhcnJheVtvZmZzZXQgKyAxMV0gPSB0ZVsxMV07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMTJdID0gdGVbMTJdO1xuXHRcdGFycmF5W29mZnNldCArIDEzXSA9IHRlWzEzXTtcblx0XHRhcnJheVtvZmZzZXQgKyAxNF0gPSB0ZVsxNF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMTVdID0gdGVbMTVdO1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG59XG5cbmNvbnN0IF92MSQyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9tMSA9IC8qQF9fUFVSRV9fKi9uZXcgTWF0cml4NCgpO1xuXG5jb25zdCBfemVybyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygwLCAwLCAwKTtcblxuY29uc3QgX29uZSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygxLCAxLCAxKTtcblxuY29uc3QgX3ggPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3kgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ogPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX21hdHJpeCA9IC8qQF9fUFVSRV9fKi9uZXcgTWF0cml4NCgpO1xuXG5jb25zdCBfcXVhdGVybmlvbiA9IC8qQF9fUFVSRV9fKi9uZXcgUXVhdGVybmlvbigpO1xuXG5jbGFzcyBFdWxlciB7XG5cdGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIG9yZGVyID0gRXVsZXIuRGVmYXVsdE9yZGVyKSB7XG5cdFx0dGhpcy5pc0V1bGVyID0gdHJ1ZTtcblx0XHR0aGlzLl94ID0geDtcblx0XHR0aGlzLl95ID0geTtcblx0XHR0aGlzLl96ID0gejtcblx0XHR0aGlzLl9vcmRlciA9IG9yZGVyO1xuXHR9XG5cblx0Z2V0IHgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3g7XG5cdH1cblxuXHRzZXQgeCh2YWx1ZSkge1xuXHRcdHRoaXMuX3ggPSB2YWx1ZTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblx0fVxuXG5cdGdldCB5KCkge1xuXHRcdHJldHVybiB0aGlzLl95O1xuXHR9XG5cblx0c2V0IHkodmFsdWUpIHtcblx0XHR0aGlzLl95ID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRnZXQgeigpIHtcblx0XHRyZXR1cm4gdGhpcy5fejtcblx0fVxuXG5cdHNldCB6KHZhbHVlKSB7XG5cdFx0dGhpcy5feiA9IHZhbHVlO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXHR9XG5cblx0Z2V0IG9yZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9vcmRlcjtcblx0fVxuXG5cdHNldCBvcmRlcih2YWx1ZSkge1xuXHRcdHRoaXMuX29yZGVyID0gdmFsdWU7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdH1cblxuXHRzZXQoeCwgeSwgeiwgb3JkZXIgPSB0aGlzLl9vcmRlcikge1xuXHRcdHRoaXMuX3ggPSB4O1xuXHRcdHRoaXMuX3kgPSB5O1xuXHRcdHRoaXMuX3ogPSB6O1xuXHRcdHRoaXMuX29yZGVyID0gb3JkZXI7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96LCB0aGlzLl9vcmRlcik7XG5cdH1cblxuXHRjb3B5KGV1bGVyKSB7XG5cdFx0dGhpcy5feCA9IGV1bGVyLl94O1xuXHRcdHRoaXMuX3kgPSBldWxlci5feTtcblx0XHR0aGlzLl96ID0gZXVsZXIuX3o7XG5cdFx0dGhpcy5fb3JkZXIgPSBldWxlci5fb3JkZXI7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Sb3RhdGlvbk1hdHJpeChtLCBvcmRlciA9IHRoaXMuX29yZGVyLCB1cGRhdGUgPSB0cnVlKSB7XG5cdFx0Ly8gYXNzdW1lcyB0aGUgdXBwZXIgM3gzIG9mIG0gaXMgYSBwdXJlIHJvdGF0aW9uIG1hdHJpeCAoaS5lLCB1bnNjYWxlZClcblx0XHRjb25zdCB0ZSA9IG0uZWxlbWVudHM7XG5cdFx0Y29uc3QgbTExID0gdGVbMF0sXG5cdFx0XHRcdFx0bTEyID0gdGVbNF0sXG5cdFx0XHRcdFx0bTEzID0gdGVbOF07XG5cdFx0Y29uc3QgbTIxID0gdGVbMV0sXG5cdFx0XHRcdFx0bTIyID0gdGVbNV0sXG5cdFx0XHRcdFx0bTIzID0gdGVbOV07XG5cdFx0Y29uc3QgbTMxID0gdGVbMl0sXG5cdFx0XHRcdFx0bTMyID0gdGVbNl0sXG5cdFx0XHRcdFx0bTMzID0gdGVbMTBdO1xuXG5cdFx0c3dpdGNoIChvcmRlcikge1xuXHRcdFx0Y2FzZSAnWFlaJzpcblx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXNpbihjbGFtcChtMTMsIC0xLCAxKSk7XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKG0xMykgPCAwLjk5OTk5OTkpIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hdGFuMigtbTIzLCBtMzMpO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmF0YW4yKC1tMTIsIG0xMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXRhbjIobTMyLCBtMjIpO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1lYWic6XG5cdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmFzaW4oLWNsYW1wKG0yMywgLTEsIDEpKTtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMobTIzKSA8IDAuOTk5OTk5OSkge1xuXHRcdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmF0YW4yKG0xMywgbTMzKTtcblx0XHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hdGFuMihtMjEsIG0yMik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXRhbjIoLW0zMSwgbTExKTtcblx0XHRcdFx0XHR0aGlzLl96ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdaWFknOlxuXHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hc2luKGNsYW1wKG0zMiwgLTEsIDEpKTtcblxuXHRcdFx0XHRpZiAoTWF0aC5hYnMobTMyKSA8IDAuOTk5OTk5OSkge1xuXHRcdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmF0YW4yKC1tMzEsIG0zMyk7XG5cdFx0XHRcdFx0dGhpcy5feiA9IE1hdGguYXRhbjIoLW0xMiwgbTIyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl95ID0gMDtcblx0XHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hdGFuMihtMjEsIG0xMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWllYJzpcblx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXNpbigtY2xhbXAobTMxLCAtMSwgMSkpO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhtMzEpIDwgMC45OTk5OTk5KSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXRhbjIobTMyLCBtMzMpO1xuXHRcdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmF0YW4yKG0yMSwgbTExKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gMDtcblx0XHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hdGFuMigtbTEyLCBtMjIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1laWCc6XG5cdFx0XHRcdHRoaXMuX3ogPSBNYXRoLmFzaW4oY2xhbXAobTIxLCAtMSwgMSkpO1xuXG5cdFx0XHRcdGlmIChNYXRoLmFicyhtMjEpIDwgMC45OTk5OTk5KSB7XG5cdFx0XHRcdFx0dGhpcy5feCA9IE1hdGguYXRhbjIoLW0yMywgbTIyKTtcblx0XHRcdFx0XHR0aGlzLl95ID0gTWF0aC5hdGFuMigtbTMxLCBtMTEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSAwO1xuXHRcdFx0XHRcdHRoaXMuX3kgPSBNYXRoLmF0YW4yKG0xMywgbTMzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdYWlknOlxuXHRcdFx0XHR0aGlzLl96ID0gTWF0aC5hc2luKC1jbGFtcChtMTIsIC0xLCAxKSk7XG5cblx0XHRcdFx0aWYgKE1hdGguYWJzKG0xMikgPCAwLjk5OTk5OTkpIHtcblx0XHRcdFx0XHR0aGlzLl94ID0gTWF0aC5hdGFuMihtMzIsIG0yMik7XG5cdFx0XHRcdFx0dGhpcy5feSA9IE1hdGguYXRhbjIobTEzLCBtMTEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ggPSBNYXRoLmF0YW4yKC1tMjMsIG0zMyk7XG5cdFx0XHRcdFx0dGhpcy5feSA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5FdWxlcjogLnNldEZyb21Sb3RhdGlvbk1hdHJpeCgpIGVuY291bnRlcmVkIGFuIHVua25vd24gb3JkZXI6ICcgKyBvcmRlcik7XG5cdFx0fVxuXG5cdFx0dGhpcy5fb3JkZXIgPSBvcmRlcjtcblx0XHRpZiAodXBkYXRlID09PSB0cnVlKSB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tUXVhdGVybmlvbihxLCBvcmRlciwgdXBkYXRlKSB7XG5cdFx0X21hdHJpeC5tYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbihxKTtcblxuXHRcdHJldHVybiB0aGlzLnNldEZyb21Sb3RhdGlvbk1hdHJpeChfbWF0cml4LCBvcmRlciwgdXBkYXRlKTtcblx0fVxuXG5cdHNldEZyb21WZWN0b3IzKHYsIG9yZGVyID0gdGhpcy5fb3JkZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXQodi54LCB2LnksIHYueiwgb3JkZXIpO1xuXHR9XG5cblx0cmVvcmRlcihuZXdPcmRlcikge1xuXHRcdC8vIFdBUk5JTkc6IHRoaXMgZGlzY2FyZHMgcmV2b2x1dGlvbiBpbmZvcm1hdGlvbiAtYmhvdXN0b25cblx0XHRfcXVhdGVybmlvbi5zZXRGcm9tRXVsZXIodGhpcyk7XG5cblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tUXVhdGVybmlvbihfcXVhdGVybmlvbiwgbmV3T3JkZXIpO1xuXHR9XG5cblx0ZXF1YWxzKGV1bGVyKSB7XG5cdFx0cmV0dXJuIGV1bGVyLl94ID09PSB0aGlzLl94ICYmIGV1bGVyLl95ID09PSB0aGlzLl95ICYmIGV1bGVyLl96ID09PSB0aGlzLl96ICYmIGV1bGVyLl9vcmRlciA9PT0gdGhpcy5fb3JkZXI7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXkpIHtcblx0XHR0aGlzLl94ID0gYXJyYXlbMF07XG5cdFx0dGhpcy5feSA9IGFycmF5WzFdO1xuXHRcdHRoaXMuX3ogPSBhcnJheVsyXTtcblx0XHRpZiAoYXJyYXlbM10gIT09IHVuZGVmaW5lZCkgdGhpcy5fb3JkZXIgPSBhcnJheVszXTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRoaXMuX3g7XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLl95O1xuXHRcdGFycmF5W29mZnNldCArIDJdID0gdGhpcy5fejtcblx0XHRhcnJheVtvZmZzZXQgKyAzXSA9IHRoaXMuX29yZGVyO1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdF9vbkNoYW5nZShjYWxsYmFjaykge1xuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdF9vbkNoYW5nZUNhbGxiYWNrKCkge31cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0eWllbGQgdGhpcy5feDtcblx0XHR5aWVsZCB0aGlzLl95O1xuXHRcdHlpZWxkIHRoaXMuX3o7XG5cdFx0eWllbGQgdGhpcy5fb3JkZXI7XG5cdH0gLy8gQGRlcHJlY2F0ZWQgc2luY2UgcjEzOCwgMDJjZjBkZjFjYjQ1NzVkNTg0MmZlZjljODViYjVhODlmZTAyMGQ1M1xuXG5cblx0dG9WZWN0b3IzKCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1RIUkVFLkV1bGVyOiAudG9WZWN0b3IzKCkgaGFzIGJlZW4gcmVtb3ZlZC4gVXNlIFZlY3RvcjMuc2V0RnJvbUV1bGVyKCkgaW5zdGVhZCcpO1xuXHR9XG5cbn1cblxuRXVsZXIuRGVmYXVsdE9yZGVyID0gJ1hZWic7XG5FdWxlci5Sb3RhdGlvbk9yZGVycyA9IFsnWFlaJywgJ1laWCcsICdaWFknLCAnWFpZJywgJ1lYWicsICdaWVgnXTtcblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIG9mIGludGVycG9sYW50cyBvdmVyIHBhcmFtZXRyaWMgc2FtcGxlcy5cbiAqXG4gKiBUaGUgcGFyYW1ldGVyIGRvbWFpbiBpcyBvbmUgZGltZW5zaW9uYWwsIHR5cGljYWxseSB0aGUgdGltZSBvciBhIHBhdGhcbiAqIGFsb25nIGEgY3VydmUgZGVmaW5lZCBieSB0aGUgZGF0YS5cbiAqXG4gKiBUaGUgc2FtcGxlIHZhbHVlcyBjYW4gaGF2ZSBhbnkgZGltZW5zaW9uYWxpdHkgYW5kIGRlcml2ZWQgY2xhc3NlcyBtYXlcbiAqIGFwcGx5IHNwZWNpYWwgaW50ZXJwcmV0YXRpb25zIHRvIHRoZSBkYXRhLlxuICpcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIGludGVydmFsIHNlZWsgaW4gYSBUZW1wbGF0ZSBNZXRob2QsIGRlZmVycmluZ1xuICogdGhlIGFjdHVhbCBpbnRlcnBvbGF0aW9uIHRvIGRlcml2ZWQgY2xhc3Nlcy5cbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHkgaXMgTygxKSBmb3IgbGluZWFyIGFjY2VzcyBjcm9zc2luZyBhdCBtb3N0IHR3byBwb2ludHNcbiAqIGFuZCBPKGxvZyBOKSBmb3IgcmFuZG9tIGFjY2Vzcywgd2hlcmUgTiBpcyB0aGUgbnVtYmVyIG9mIHBvc2l0aW9ucy5cbiAqXG4gKiBSZWZlcmVuY2VzOlxuICpcbiAqIFx0XHRodHRwOi8vd3d3Lm9vZGVzaWduLmNvbS90ZW1wbGF0ZS1tZXRob2QtcGF0dGVybi5odG1sXG4gKlxuICovXG5jbGFzcyBJbnRlcnBvbGFudCB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIpIHtcblx0XHR0aGlzLnBhcmFtZXRlclBvc2l0aW9ucyA9IHBhcmFtZXRlclBvc2l0aW9ucztcblx0XHR0aGlzLl9jYWNoZWRJbmRleCA9IDA7XG5cdFx0dGhpcy5yZXN1bHRCdWZmZXIgPSByZXN1bHRCdWZmZXIgIT09IHVuZGVmaW5lZCA/IHJlc3VsdEJ1ZmZlciA6IG5ldyBzYW1wbGVWYWx1ZXMuY29uc3RydWN0b3Ioc2FtcGxlU2l6ZSk7XG5cdFx0dGhpcy5zYW1wbGVWYWx1ZXMgPSBzYW1wbGVWYWx1ZXM7XG5cdFx0dGhpcy52YWx1ZVNpemUgPSBzYW1wbGVTaXplO1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuXHRcdHRoaXMuRGVmYXVsdFNldHRpbmdzXyA9IHt9O1xuXHR9XG5cblx0ZXZhbHVhdGUodCkge1xuXHRcdGNvbnN0IHBwID0gdGhpcy5wYXJhbWV0ZXJQb3NpdGlvbnM7XG5cdFx0bGV0IGkxID0gdGhpcy5fY2FjaGVkSW5kZXgsXG5cdFx0XHRcdHQxID0gcHBbaTFdLFxuXHRcdFx0XHR0MCA9IHBwW2kxIC0gMV07XG5cblx0XHR2YWxpZGF0ZV9pbnRlcnZhbDoge1xuXHRcdFx0c2Vlazoge1xuXHRcdFx0XHRsZXQgcmlnaHQ7XG5cblx0XHRcdFx0bGluZWFyX3NjYW46IHtcblx0XHRcdFx0XHQvLy0gU2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NvbXBhcmlzb24tdG8tdW5kZWZpbmVkLzNcblx0XHRcdFx0XHQvLy0gc2xvd2VyIGNvZGU6XG5cdFx0XHRcdFx0Ly8tXG5cdFx0XHRcdFx0Ly8tIFx0XHRcdFx0aWYgKCB0ID49IHQxIHx8IHQxID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0Zm9yd2FyZF9zY2FuOiBpZiAoISh0IDwgdDEpKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBnaXZlVXBBdCA9IGkxICsgMjs7KSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0MSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHQgPCB0MCkgYnJlYWsgZm9yd2FyZF9zY2FuOyAvLyBhZnRlciBlbmRcblxuXHRcdFx0XHRcdFx0XHRcdGkxID0gcHAubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2NhY2hlZEluZGV4ID0gaTE7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29weVNhbXBsZVZhbHVlXyhpMSAtIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKGkxID09PSBnaXZlVXBBdCkgYnJlYWs7IC8vIHRoaXMgbG9vcFxuXG5cdFx0XHRcdFx0XHRcdHQwID0gdDE7XG5cdFx0XHRcdFx0XHRcdHQxID0gcHBbKytpMV07XG5cblx0XHRcdFx0XHRcdFx0aWYgKHQgPCB0MSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHdlIGhhdmUgYXJyaXZlZCBhdCB0aGUgc291Z2h0IGludGVydmFsXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWsgc2Vlaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSAvLyBwcmVwYXJlIGJpbmFyeSBzZWFyY2ggb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGluZGV4XG5cblxuXHRcdFx0XHRcdFx0cmlnaHQgPSBwcC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRicmVhayBsaW5lYXJfc2Nhbjtcblx0XHRcdFx0XHR9IC8vLSBzbG93ZXIgY29kZTpcblx0XHRcdFx0XHQvLy1cdFx0XHRcdFx0aWYgKCB0IDwgdDAgfHwgdDAgPT09IHVuZGVmaW5lZCApIHtcblxuXG5cdFx0XHRcdFx0aWYgKCEodCA+PSB0MCkpIHtcblx0XHRcdFx0XHRcdC8vIGxvb3Bpbmc/XG5cdFx0XHRcdFx0XHRjb25zdCB0MWdsb2JhbCA9IHBwWzFdO1xuXG5cdFx0XHRcdFx0XHRpZiAodCA8IHQxZ2xvYmFsKSB7XG5cdFx0XHRcdFx0XHRcdGkxID0gMjsgLy8gKyAxLCB1c2luZyB0aGUgc2NhbiBmb3IgdGhlIGRldGFpbHNcblxuXHRcdFx0XHRcdFx0XHR0MCA9IHQxZ2xvYmFsO1xuXHRcdFx0XHRcdFx0fSAvLyBsaW5lYXIgcmV2ZXJzZSBzY2FuXG5cblxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgZ2l2ZVVwQXQgPSBpMSAtIDI7Oykge1xuXHRcdFx0XHRcdFx0XHRpZiAodDAgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGJlZm9yZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2NhY2hlZEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb3B5U2FtcGxlVmFsdWVfKDApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKGkxID09PSBnaXZlVXBBdCkgYnJlYWs7IC8vIHRoaXMgbG9vcFxuXG5cdFx0XHRcdFx0XHRcdHQxID0gdDA7XG5cdFx0XHRcdFx0XHRcdHQwID0gcHBbLS1pMSAtIDFdO1xuXG5cdFx0XHRcdFx0XHRcdGlmICh0ID49IHQwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gd2UgaGF2ZSBhcnJpdmVkIGF0IHRoZSBzb3VnaHQgaW50ZXJ2YWxcblx0XHRcdFx0XHRcdFx0XHRicmVhayBzZWVrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IC8vIHByZXBhcmUgYmluYXJ5IHNlYXJjaCBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBpbmRleFxuXG5cblx0XHRcdFx0XHRcdHJpZ2h0ID0gaTE7XG5cdFx0XHRcdFx0XHRpMSA9IDA7XG5cdFx0XHRcdFx0XHRicmVhayBsaW5lYXJfc2Nhbjtcblx0XHRcdFx0XHR9IC8vIHRoZSBpbnRlcnZhbCBpcyB2YWxpZFxuXG5cblx0XHRcdFx0XHRicmVhayB2YWxpZGF0ZV9pbnRlcnZhbDtcblx0XHRcdFx0fSAvLyBsaW5lYXIgc2NhblxuXHRcdFx0XHQvLyBiaW5hcnkgc2VhcmNoXG5cblxuXHRcdFx0XHR3aGlsZSAoaTEgPCByaWdodCkge1xuXHRcdFx0XHRcdGNvbnN0IG1pZCA9IGkxICsgcmlnaHQgPj4+IDE7XG5cblx0XHRcdFx0XHRpZiAodCA8IHBwW21pZF0pIHtcblx0XHRcdFx0XHRcdHJpZ2h0ID0gbWlkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpMSA9IG1pZCArIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dDEgPSBwcFtpMV07XG5cdFx0XHRcdHQwID0gcHBbaTEgLSAxXTsgLy8gY2hlY2sgYm91bmRhcnkgY2FzZXMsIGFnYWluXG5cblx0XHRcdFx0aWYgKHQwID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9jYWNoZWRJbmRleCA9IDA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29weVNhbXBsZVZhbHVlXygwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0MSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0aTEgPSBwcC5sZW5ndGg7XG5cdFx0XHRcdFx0dGhpcy5fY2FjaGVkSW5kZXggPSBpMTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb3B5U2FtcGxlVmFsdWVfKGkxIC0gMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gLy8gc2Vla1xuXG5cblx0XHRcdHRoaXMuX2NhY2hlZEluZGV4ID0gaTE7XG5cdFx0XHR0aGlzLmludGVydmFsQ2hhbmdlZF8oaTEsIHQwLCB0MSk7XG5cdFx0fSAvLyB2YWxpZGF0ZV9pbnRlcnZhbFxuXG5cblx0XHRyZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZV8oaTEsIHQwLCB0LCB0MSk7XG5cdH1cblxuXHRnZXRTZXR0aW5nc18oKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0dGluZ3MgfHwgdGhpcy5EZWZhdWx0U2V0dGluZ3NfO1xuXHR9XG5cblx0Y29weVNhbXBsZVZhbHVlXyhpbmRleCkge1xuXHRcdC8vIGNvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlclxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyLFxuXHRcdFx0XHRcdHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzLFxuXHRcdFx0XHRcdHN0cmlkZSA9IHRoaXMudmFsdWVTaXplLFxuXHRcdFx0XHRcdG9mZnNldCA9IGluZGV4ICogc3RyaWRlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgIT09IHN0cmlkZTsgKytpKSB7XG5cdFx0XHRyZXN1bHRbaV0gPSB2YWx1ZXNbb2Zmc2V0ICsgaV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSAvLyBUZW1wbGF0ZSBtZXRob2RzIGZvciBkZXJpdmVkIGNsYXNzZXM6XG5cblxuXHRpbnRlcnBvbGF0ZV8oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjYWxsIHRvIGFic3RyYWN0IG1ldGhvZCcpOyAvLyBpbXBsZW1lbnRhdGlvbnMgc2hhbGwgcmV0dXJuIHRoaXMucmVzdWx0QnVmZmVyXG5cdH1cblxuXHRpbnRlcnZhbENoYW5nZWRfKCkgey8vIGVtcHR5XG5cdH1cblxufVxuXG5jb25zdCBfc3RhcnRQID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9zdGFydEVuZCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jbGFzcyBMaW5lMyB7XG5cdGNvbnN0cnVjdG9yKHN0YXJ0ID0gbmV3IFZlY3RvcjMoKSwgZW5kID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0fVxuXG5cdHNldChzdGFydCwgZW5kKSB7XG5cdFx0dGhpcy5zdGFydC5jb3B5KHN0YXJ0KTtcblx0XHR0aGlzLmVuZC5jb3B5KGVuZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KGxpbmUpIHtcblx0XHR0aGlzLnN0YXJ0LmNvcHkobGluZS5zdGFydCk7XG5cdFx0dGhpcy5lbmQuY29weShsaW5lLmVuZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDZW50ZXIodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5hZGRWZWN0b3JzKHRoaXMuc3RhcnQsIHRoaXMuZW5kKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuXHR9XG5cblx0ZGVsdGEodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5zdWJWZWN0b3JzKHRoaXMuZW5kLCB0aGlzLnN0YXJ0KTtcblx0fVxuXG5cdGRpc3RhbmNlU3EoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2VUb1NxdWFyZWQodGhpcy5lbmQpO1xuXHR9XG5cblx0ZGlzdGFuY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2VUbyh0aGlzLmVuZCk7XG5cdH1cblxuXHRhdCh0LCB0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5kZWx0YSh0YXJnZXQpLm11bHRpcGx5U2NhbGFyKHQpLmFkZCh0aGlzLnN0YXJ0KTtcblx0fVxuXG5cdGNsb3Nlc3RQb2ludFRvUG9pbnRQYXJhbWV0ZXIocG9pbnQsIGNsYW1wVG9MaW5lKSB7XG5cdFx0X3N0YXJ0UC5zdWJWZWN0b3JzKHBvaW50LCB0aGlzLnN0YXJ0KTtcblxuXHRcdF9zdGFydEVuZC5zdWJWZWN0b3JzKHRoaXMuZW5kLCB0aGlzLnN0YXJ0KTtcblxuXHRcdGNvbnN0IHN0YXJ0RW5kMiA9IF9zdGFydEVuZC5kb3QoX3N0YXJ0RW5kKTtcblxuXHRcdGNvbnN0IHN0YXJ0RW5kX3N0YXJ0UCA9IF9zdGFydEVuZC5kb3QoX3N0YXJ0UCk7XG5cblx0XHRsZXQgdCA9IHN0YXJ0RW5kX3N0YXJ0UCAvIHN0YXJ0RW5kMjtcblxuXHRcdGlmIChjbGFtcFRvTGluZSkge1xuXHRcdFx0dCA9IGNsYW1wKHQsIDAsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0Y2xvc2VzdFBvaW50VG9Qb2ludChwb2ludCwgY2xhbXBUb0xpbmUsIHRhcmdldCkge1xuXHRcdGNvbnN0IHQgPSB0aGlzLmNsb3Nlc3RQb2ludFRvUG9pbnRQYXJhbWV0ZXIocG9pbnQsIGNsYW1wVG9MaW5lKTtcblx0XHRyZXR1cm4gdGhpcy5kZWx0YSh0YXJnZXQpLm11bHRpcGx5U2NhbGFyKHQpLmFkZCh0aGlzLnN0YXJ0KTtcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtYXRyaXgpIHtcblx0XHR0aGlzLnN0YXJ0LmFwcGx5TWF0cml4NChtYXRyaXgpO1xuXHRcdHRoaXMuZW5kLmFwcGx5TWF0cml4NChtYXRyaXgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKGxpbmUpIHtcblx0XHRyZXR1cm4gbGluZS5zdGFydC5lcXVhbHModGhpcy5zdGFydCkgJiYgbGluZS5lbmQuZXF1YWxzKHRoaXMuZW5kKTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxufVxuXG5jbGFzcyBNYXRyaXgzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0TWF0cml4My5wcm90b3R5cGUuaXNNYXRyaXgzID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnRzID0gWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdO1xuXHR9XG5cblx0c2V0KG4xMSwgbjEyLCBuMTMsIG4yMSwgbjIyLCBuMjMsIG4zMSwgbjMyLCBuMzMpIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dGVbMF0gPSBuMTE7XG5cdFx0dGVbMV0gPSBuMjE7XG5cdFx0dGVbMl0gPSBuMzE7XG5cdFx0dGVbM10gPSBuMTI7XG5cdFx0dGVbNF0gPSBuMjI7XG5cdFx0dGVbNV0gPSBuMzI7XG5cdFx0dGVbNl0gPSBuMTM7XG5cdFx0dGVbN10gPSBuMjM7XG5cdFx0dGVbOF0gPSBuMzM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZGVudGl0eSgpIHtcblx0XHR0aGlzLnNldCgxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkobSkge1xuXHRcdGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcblx0XHRjb25zdCBtZSA9IG0uZWxlbWVudHM7XG5cdFx0dGVbMF0gPSBtZVswXTtcblx0XHR0ZVsxXSA9IG1lWzFdO1xuXHRcdHRlWzJdID0gbWVbMl07XG5cdFx0dGVbM10gPSBtZVszXTtcblx0XHR0ZVs0XSA9IG1lWzRdO1xuXHRcdHRlWzVdID0gbWVbNV07XG5cdFx0dGVbNl0gPSBtZVs2XTtcblx0XHR0ZVs3XSA9IG1lWzddO1xuXHRcdHRlWzhdID0gbWVbOF07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRleHRyYWN0QmFzaXMoeEF4aXMsIHlBeGlzLCB6QXhpcykge1xuXHRcdHhBeGlzLnNldEZyb21NYXRyaXgzQ29sdW1uKHRoaXMsIDApO1xuXHRcdHlBeGlzLnNldEZyb21NYXRyaXgzQ29sdW1uKHRoaXMsIDEpO1xuXHRcdHpBeGlzLnNldEZyb21NYXRyaXgzQ29sdW1uKHRoaXMsIDIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbU1hdHJpeDQobSkge1xuXHRcdGNvbnN0IG1lID0gbS5lbGVtZW50cztcblx0XHR0aGlzLnNldChtZVswXSwgbWVbNF0sIG1lWzhdLCBtZVsxXSwgbWVbNV0sIG1lWzldLCBtZVsyXSwgbWVbNl0sIG1lWzEwXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseShtKSB7XG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyh0aGlzLCBtKTtcblx0fVxuXG5cdHByZW11bHRpcGx5KG0pIHtcblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseU1hdHJpY2VzKG0sIHRoaXMpO1xuXHR9XG5cblx0bXVsdGlwbHlNYXRyaWNlcyhhLCBiKSB7XG5cdFx0Y29uc3QgYWUgPSBhLmVsZW1lbnRzO1xuXHRcdGNvbnN0IGJlID0gYi5lbGVtZW50cztcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0Y29uc3QgYTExID0gYWVbMF0sXG5cdFx0XHRcdFx0YTEyID0gYWVbM10sXG5cdFx0XHRcdFx0YTEzID0gYWVbNl07XG5cdFx0Y29uc3QgYTIxID0gYWVbMV0sXG5cdFx0XHRcdFx0YTIyID0gYWVbNF0sXG5cdFx0XHRcdFx0YTIzID0gYWVbN107XG5cdFx0Y29uc3QgYTMxID0gYWVbMl0sXG5cdFx0XHRcdFx0YTMyID0gYWVbNV0sXG5cdFx0XHRcdFx0YTMzID0gYWVbOF07XG5cdFx0Y29uc3QgYjExID0gYmVbMF0sXG5cdFx0XHRcdFx0YjEyID0gYmVbM10sXG5cdFx0XHRcdFx0YjEzID0gYmVbNl07XG5cdFx0Y29uc3QgYjIxID0gYmVbMV0sXG5cdFx0XHRcdFx0YjIyID0gYmVbNF0sXG5cdFx0XHRcdFx0YjIzID0gYmVbN107XG5cdFx0Y29uc3QgYjMxID0gYmVbMl0sXG5cdFx0XHRcdFx0YjMyID0gYmVbNV0sXG5cdFx0XHRcdFx0YjMzID0gYmVbOF07XG5cdFx0dGVbMF0gPSBhMTEgKiBiMTEgKyBhMTIgKiBiMjEgKyBhMTMgKiBiMzE7XG5cdFx0dGVbM10gPSBhMTEgKiBiMTIgKyBhMTIgKiBiMjIgKyBhMTMgKiBiMzI7XG5cdFx0dGVbNl0gPSBhMTEgKiBiMTMgKyBhMTIgKiBiMjMgKyBhMTMgKiBiMzM7XG5cdFx0dGVbMV0gPSBhMjEgKiBiMTEgKyBhMjIgKiBiMjEgKyBhMjMgKiBiMzE7XG5cdFx0dGVbNF0gPSBhMjEgKiBiMTIgKyBhMjIgKiBiMjIgKyBhMjMgKiBiMzI7XG5cdFx0dGVbN10gPSBhMjEgKiBiMTMgKyBhMjIgKiBiMjMgKyBhMjMgKiBiMzM7XG5cdFx0dGVbMl0gPSBhMzEgKiBiMTEgKyBhMzIgKiBiMjEgKyBhMzMgKiBiMzE7XG5cdFx0dGVbNV0gPSBhMzEgKiBiMTIgKyBhMzIgKiBiMjIgKyBhMzMgKiBiMzI7XG5cdFx0dGVbOF0gPSBhMzEgKiBiMTMgKyBhMzIgKiBiMjMgKyBhMzMgKiBiMzM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVNjYWxhcihzKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHRlWzBdICo9IHM7XG5cdFx0dGVbM10gKj0gcztcblx0XHR0ZVs2XSAqPSBzO1xuXHRcdHRlWzFdICo9IHM7XG5cdFx0dGVbNF0gKj0gcztcblx0XHR0ZVs3XSAqPSBzO1xuXHRcdHRlWzJdICo9IHM7XG5cdFx0dGVbNV0gKj0gcztcblx0XHR0ZVs4XSAqPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGV0ZXJtaW5hbnQoKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IGEgPSB0ZVswXSxcblx0XHRcdFx0XHRiID0gdGVbMV0sXG5cdFx0XHRcdFx0YyA9IHRlWzJdLFxuXHRcdFx0XHRcdGQgPSB0ZVszXSxcblx0XHRcdFx0XHRlID0gdGVbNF0sXG5cdFx0XHRcdFx0ZiA9IHRlWzVdLFxuXHRcdFx0XHRcdGcgPSB0ZVs2XSxcblx0XHRcdFx0XHRoID0gdGVbN10sXG5cdFx0XHRcdFx0aSA9IHRlWzhdO1xuXHRcdHJldHVybiBhICogZSAqIGkgLSBhICogZiAqIGggLSBiICogZCAqIGkgKyBiICogZiAqIGcgKyBjICogZCAqIGggLSBjICogZSAqIGc7XG5cdH1cblxuXHRpbnZlcnQoKSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzLFxuXHRcdFx0XHRcdG4xMSA9IHRlWzBdLFxuXHRcdFx0XHRcdG4yMSA9IHRlWzFdLFxuXHRcdFx0XHRcdG4zMSA9IHRlWzJdLFxuXHRcdFx0XHRcdG4xMiA9IHRlWzNdLFxuXHRcdFx0XHRcdG4yMiA9IHRlWzRdLFxuXHRcdFx0XHRcdG4zMiA9IHRlWzVdLFxuXHRcdFx0XHRcdG4xMyA9IHRlWzZdLFxuXHRcdFx0XHRcdG4yMyA9IHRlWzddLFxuXHRcdFx0XHRcdG4zMyA9IHRlWzhdLFxuXHRcdFx0XHRcdHQxMSA9IG4zMyAqIG4yMiAtIG4zMiAqIG4yMyxcblx0XHRcdFx0XHR0MTIgPSBuMzIgKiBuMTMgLSBuMzMgKiBuMTIsXG5cdFx0XHRcdFx0dDEzID0gbjIzICogbjEyIC0gbjIyICogbjEzLFxuXHRcdFx0XHRcdGRldCA9IG4xMSAqIHQxMSArIG4yMSAqIHQxMiArIG4zMSAqIHQxMztcblx0XHRpZiAoZGV0ID09PSAwKSByZXR1cm4gdGhpcy5zZXQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG5cdFx0Y29uc3QgZGV0SW52ID0gMSAvIGRldDtcblx0XHR0ZVswXSA9IHQxMSAqIGRldEludjtcblx0XHR0ZVsxXSA9IChuMzEgKiBuMjMgLSBuMzMgKiBuMjEpICogZGV0SW52O1xuXHRcdHRlWzJdID0gKG4zMiAqIG4yMSAtIG4zMSAqIG4yMikgKiBkZXRJbnY7XG5cdFx0dGVbM10gPSB0MTIgKiBkZXRJbnY7XG5cdFx0dGVbNF0gPSAobjMzICogbjExIC0gbjMxICogbjEzKSAqIGRldEludjtcblx0XHR0ZVs1XSA9IChuMzEgKiBuMTIgLSBuMzIgKiBuMTEpICogZGV0SW52O1xuXHRcdHRlWzZdID0gdDEzICogZGV0SW52O1xuXHRcdHRlWzddID0gKG4yMSAqIG4xMyAtIG4yMyAqIG4xMSkgKiBkZXRJbnY7XG5cdFx0dGVbOF0gPSAobjIyICogbjExIC0gbjIxICogbjEyKSAqIGRldEludjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyYW5zcG9zZSgpIHtcblx0XHRsZXQgdG1wO1xuXHRcdGNvbnN0IG0gPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHRtcCA9IG1bMV07XG5cdFx0bVsxXSA9IG1bM107XG5cdFx0bVszXSA9IHRtcDtcblx0XHR0bXAgPSBtWzJdO1xuXHRcdG1bMl0gPSBtWzZdO1xuXHRcdG1bNl0gPSB0bXA7XG5cdFx0dG1wID0gbVs1XTtcblx0XHRtWzVdID0gbVs3XTtcblx0XHRtWzddID0gdG1wO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Tm9ybWFsTWF0cml4KG1hdHJpeDQpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRGcm9tTWF0cml4NChtYXRyaXg0KS5pbnZlcnQoKS50cmFuc3Bvc2UoKTtcblx0fVxuXG5cdHRyYW5zcG9zZUludG9BcnJheShyKSB7XG5cdFx0Y29uc3QgbSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0clswXSA9IG1bMF07XG5cdFx0clsxXSA9IG1bM107XG5cdFx0clsyXSA9IG1bNl07XG5cdFx0clszXSA9IG1bMV07XG5cdFx0cls0XSA9IG1bNF07XG5cdFx0cls1XSA9IG1bN107XG5cdFx0cls2XSA9IG1bMl07XG5cdFx0cls3XSA9IG1bNV07XG5cdFx0cls4XSA9IG1bOF07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRVdlRyYW5zZm9ybSh0eCwgdHksIHN4LCBzeSwgcm90YXRpb24sIGN4LCBjeSkge1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG5cdFx0Y29uc3QgcyA9IE1hdGguc2luKHJvdGF0aW9uKTtcblx0XHR0aGlzLnNldChzeCAqIGMsIHN4ICogcywgLXN4ICogKGMgKiBjeCArIHMgKiBjeSkgKyBjeCArIHR4LCAtc3kgKiBzLCBzeSAqIGMsIC1zeSAqICgtcyAqIGN4ICsgYyAqIGN5KSArIGN5ICsgdHksIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vXG5cblxuXHRzY2FsZShzeCwgc3kpIHtcblx0XHR0aGlzLnByZW11bHRpcGx5KF9tMy5tYWtlU2NhbGUoc3gsIHN5KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyb3RhdGUodGhldGEpIHtcblx0XHR0aGlzLnByZW11bHRpcGx5KF9tMy5tYWtlUm90YXRpb24oLXRoZXRhKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmFuc2xhdGUodHgsIHR5KSB7XG5cdFx0dGhpcy5wcmVtdWx0aXBseShfbTMubWFrZVRyYW5zbGF0aW9uKHR4LCB0eSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vIGZvciAyRCBUcmFuc2Zvcm1zXG5cblxuXHRtYWtlVHJhbnNsYXRpb24oeCwgeSkge1xuXHRcdHRoaXMuc2V0KDEsIDAsIHgsIDAsIDEsIHksIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWFrZVJvdGF0aW9uKHRoZXRhKSB7XG5cdFx0Ly8gY291bnRlcmNsb2Nrd2lzZVxuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyh0aGV0YSk7XG5cdFx0Y29uc3QgcyA9IE1hdGguc2luKHRoZXRhKTtcblx0XHR0aGlzLnNldChjLCAtcywgMCwgcywgYywgMCwgMCwgMCwgMSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYWtlU2NhbGUoeCwgeSkge1xuXHRcdHRoaXMuc2V0KHgsIDAsIDAsIDAsIHksIDAsIDAsIDAsIDEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9IC8vXG5cblxuXHRlcXVhbHMobWF0cml4KSB7XG5cdFx0Y29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdGNvbnN0IG1lID0gbWF0cml4LmVsZW1lbnRzO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcblx0XHRcdGlmICh0ZVtpXSAhPT0gbWVbaV0pIHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGZyb21BcnJheShhcnJheSwgb2Zmc2V0ID0gMCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gYXJyYXlbaSArIG9mZnNldF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KGFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcblx0XHRjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRlWzBdO1xuXHRcdGFycmF5W29mZnNldCArIDFdID0gdGVbMV07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgMl0gPSB0ZVsyXTtcblx0XHRhcnJheVtvZmZzZXQgKyAzXSA9IHRlWzNdO1xuXHRcdGFycmF5W29mZnNldCArIDRdID0gdGVbNF07XG5cdFx0YXJyYXlbb2Zmc2V0ICsgNV0gPSB0ZVs1XTtcblx0XHRhcnJheVtvZmZzZXQgKyA2XSA9IHRlWzZdO1xuXHRcdGFycmF5W29mZnNldCArIDddID0gdGVbN107XG5cdFx0YXJyYXlbb2Zmc2V0ICsgOF0gPSB0ZVs4XTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5mcm9tQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cdH1cblxufVxuXG5jb25zdCBfbTMgPSAvKkBfX1BVUkVfXyovbmV3IE1hdHJpeDMoKTtcblxuY29uc3QgX3ZlY3RvcjEgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZlY3RvcjIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX25vcm1hbE1hdHJpeCA9IC8qQF9fUFVSRV9fKi9uZXcgTWF0cml4MygpO1xuXG5jbGFzcyBQbGFuZSB7XG5cdGNvbnN0cnVjdG9yKG5vcm1hbCA9IG5ldyBWZWN0b3IzKDEsIDAsIDApLCBjb25zdGFudCA9IDApIHtcblx0XHR0aGlzLmlzUGxhbmUgPSB0cnVlOyAvLyBub3JtYWwgaXMgYXNzdW1lZCB0byBiZSBub3JtYWxpemVkXG5cblx0XHR0aGlzLm5vcm1hbCA9IG5vcm1hbDtcblx0XHR0aGlzLmNvbnN0YW50ID0gY29uc3RhbnQ7XG5cdH1cblxuXHRzZXQobm9ybWFsLCBjb25zdGFudCkge1xuXHRcdHRoaXMubm9ybWFsLmNvcHkobm9ybWFsKTtcblx0XHR0aGlzLmNvbnN0YW50ID0gY29uc3RhbnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRDb21wb25lbnRzKHgsIHksIHosIHcpIHtcblx0XHR0aGlzLm5vcm1hbC5zZXQoeCwgeSwgeik7XG5cdFx0dGhpcy5jb25zdGFudCA9IHc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludChub3JtYWwsIHBvaW50KSB7XG5cdFx0dGhpcy5ub3JtYWwuY29weShub3JtYWwpO1xuXHRcdHRoaXMuY29uc3RhbnQgPSAtcG9pbnQuZG90KHRoaXMubm9ybWFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Db3BsYW5hclBvaW50cyhhLCBiLCBjKSB7XG5cdFx0Y29uc3Qgbm9ybWFsID0gX3ZlY3RvcjEuc3ViVmVjdG9ycyhjLCBiKS5jcm9zcyhfdmVjdG9yMi5zdWJWZWN0b3JzKGEsIGIpKS5ub3JtYWxpemUoKTsgLy8gUTogc2hvdWxkIGFuIGVycm9yIGJlIHRocm93biBpZiBub3JtYWwgaXMgemVybyAoZS5nLiBkZWdlbmVyYXRlIHBsYW5lKT9cblxuXG5cdFx0dGhpcy5zZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludChub3JtYWwsIGEpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShwbGFuZSkge1xuXHRcdHRoaXMubm9ybWFsLmNvcHkocGxhbmUubm9ybWFsKTtcblx0XHR0aGlzLmNvbnN0YW50ID0gcGxhbmUuY29uc3RhbnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRub3JtYWxpemUoKSB7XG5cdFx0Ly8gTm90ZTogd2lsbCBsZWFkIHRvIGEgZGl2aWRlIGJ5IHplcm8gaWYgdGhlIHBsYW5lIGlzIGludmFsaWQuXG5cdFx0Y29uc3QgaW52ZXJzZU5vcm1hbExlbmd0aCA9IDEuMCAvIHRoaXMubm9ybWFsLmxlbmd0aCgpO1xuXHRcdHRoaXMubm9ybWFsLm11bHRpcGx5U2NhbGFyKGludmVyc2VOb3JtYWxMZW5ndGgpO1xuXHRcdHRoaXMuY29uc3RhbnQgKj0gaW52ZXJzZU5vcm1hbExlbmd0aDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5lZ2F0ZSgpIHtcblx0XHR0aGlzLmNvbnN0YW50ICo9IC0xO1xuXHRcdHRoaXMubm9ybWFsLm5lZ2F0ZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGlzdGFuY2VUb1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsLmRvdChwb2ludCkgKyB0aGlzLmNvbnN0YW50O1xuXHR9XG5cblx0ZGlzdGFuY2VUb1NwaGVyZShzcGhlcmUpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXN0YW5jZVRvUG9pbnQoc3BoZXJlLmNlbnRlcikgLSBzcGhlcmUucmFkaXVzO1xuXHR9XG5cblx0cHJvamVjdFBvaW50KHBvaW50LCB0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5ub3JtYWwpLm11bHRpcGx5U2NhbGFyKC10aGlzLmRpc3RhbmNlVG9Qb2ludChwb2ludCkpLmFkZChwb2ludCk7XG5cdH1cblxuXHRpbnRlcnNlY3RMaW5lKGxpbmUsIHRhcmdldCkge1xuXHRcdGNvbnN0IGRpcmVjdGlvbiA9IGxpbmUuZGVsdGEoX3ZlY3RvcjEpO1xuXHRcdGNvbnN0IGRlbm9taW5hdG9yID0gdGhpcy5ub3JtYWwuZG90KGRpcmVjdGlvbik7XG5cblx0XHRpZiAoZGVub21pbmF0b3IgPT09IDApIHtcblx0XHRcdC8vIGxpbmUgaXMgY29wbGFuYXIsIHJldHVybiBvcmlnaW5cblx0XHRcdGlmICh0aGlzLmRpc3RhbmNlVG9Qb2ludChsaW5lLnN0YXJ0KSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkobGluZS5zdGFydCk7XG5cdFx0XHR9IC8vIFVuc3VyZSBpZiB0aGlzIGlzIHRoZSBjb3JyZWN0IG1ldGhvZCB0byBoYW5kbGUgdGhpcyBjYXNlLlxuXG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IHQgPSAtKGxpbmUuc3RhcnQuZG90KHRoaXMubm9ybWFsKSArIHRoaXMuY29uc3RhbnQpIC8gZGVub21pbmF0b3I7XG5cblx0XHRpZiAodCA8IDAgfHwgdCA+IDEpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0YXJnZXQuY29weShkaXJlY3Rpb24pLm11bHRpcGx5U2NhbGFyKHQpLmFkZChsaW5lLnN0YXJ0KTtcblx0fVxuXG5cdGludGVyc2VjdHNMaW5lKGxpbmUpIHtcblx0XHQvLyBOb3RlOiB0aGlzIHRlc3RzIGlmIGEgbGluZSBpbnRlcnNlY3RzIHRoZSBwbGFuZSwgbm90IHdoZXRoZXIgaXQgKG9yIGl0cyBlbmQtcG9pbnRzKSBhcmUgY29wbGFuYXIgd2l0aCBpdC5cblx0XHRjb25zdCBzdGFydFNpZ24gPSB0aGlzLmRpc3RhbmNlVG9Qb2ludChsaW5lLnN0YXJ0KTtcblx0XHRjb25zdCBlbmRTaWduID0gdGhpcy5kaXN0YW5jZVRvUG9pbnQobGluZS5lbmQpO1xuXHRcdHJldHVybiBzdGFydFNpZ24gPCAwICYmIGVuZFNpZ24gPiAwIHx8IGVuZFNpZ24gPCAwICYmIHN0YXJ0U2lnbiA+IDA7XG5cdH1cblxuXHRpbnRlcnNlY3RzQm94KGJveCkge1xuXHRcdHJldHVybiBib3guaW50ZXJzZWN0c1BsYW5lKHRoaXMpO1xuXHR9XG5cblx0aW50ZXJzZWN0c1NwaGVyZShzcGhlcmUpIHtcblx0XHRyZXR1cm4gc3BoZXJlLmludGVyc2VjdHNQbGFuZSh0aGlzKTtcblx0fVxuXG5cdGNvcGxhbmFyUG9pbnQodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldC5jb3B5KHRoaXMubm9ybWFsKS5tdWx0aXBseVNjYWxhcigtdGhpcy5jb25zdGFudCk7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobWF0cml4LCBvcHRpb25hbE5vcm1hbE1hdHJpeCkge1xuXHRcdGNvbnN0IG5vcm1hbE1hdHJpeCA9IG9wdGlvbmFsTm9ybWFsTWF0cml4IHx8IF9ub3JtYWxNYXRyaXguZ2V0Tm9ybWFsTWF0cml4KG1hdHJpeCk7XG5cblx0XHRjb25zdCByZWZlcmVuY2VQb2ludCA9IHRoaXMuY29wbGFuYXJQb2ludChfdmVjdG9yMSkuYXBwbHlNYXRyaXg0KG1hdHJpeCk7XG5cdFx0Y29uc3Qgbm9ybWFsID0gdGhpcy5ub3JtYWwuYXBwbHlNYXRyaXgzKG5vcm1hbE1hdHJpeCkubm9ybWFsaXplKCk7XG5cdFx0dGhpcy5jb25zdGFudCA9IC1yZWZlcmVuY2VQb2ludC5kb3Qobm9ybWFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyYW5zbGF0ZShvZmZzZXQpIHtcblx0XHR0aGlzLmNvbnN0YW50IC09IG9mZnNldC5kb3QodGhpcy5ub3JtYWwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHBsYW5lKSB7XG5cdFx0cmV0dXJuIHBsYW5lLm5vcm1hbC5lcXVhbHModGhpcy5ub3JtYWwpICYmIHBsYW5lLmNvbnN0YW50ID09PSB0aGlzLmNvbnN0YW50O1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSh0aGlzKTtcblx0fVxuXG59XG5cbmNvbnN0IF92ZWN0b3IgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3NlZ0NlbnRlciA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfc2VnRGlyID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9kaWZmID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9lZGdlMSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfZWRnZTIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX25vcm1hbCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jbGFzcyBSYXkge1xuXHRjb25zdHJ1Y3RvcihvcmlnaW4gPSBuZXcgVmVjdG9yMygpLCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAwLCAtMSkpIHtcblx0XHR0aGlzLm9yaWdpbiA9IG9yaWdpbjtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0fVxuXG5cdHNldChvcmlnaW4sIGRpcmVjdGlvbikge1xuXHRcdHRoaXMub3JpZ2luLmNvcHkob3JpZ2luKTtcblx0XHR0aGlzLmRpcmVjdGlvbi5jb3B5KGRpcmVjdGlvbik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjb3B5KHJheSkge1xuXHRcdHRoaXMub3JpZ2luLmNvcHkocmF5Lm9yaWdpbik7XG5cdFx0dGhpcy5kaXJlY3Rpb24uY29weShyYXkuZGlyZWN0aW9uKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGF0KHQsIHRhcmdldCA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5kaXJlY3Rpb24pLm11bHRpcGx5U2NhbGFyKHQpLmFkZCh0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRsb29rQXQodikge1xuXHRcdHRoaXMuZGlyZWN0aW9uLmNvcHkodikuc3ViKHRoaXMub3JpZ2luKS5ub3JtYWxpemUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJlY2FzdCh0KSB7XG5cdFx0dGhpcy5vcmlnaW4uY29weSh0aGlzLmF0KHQsIF92ZWN0b3IpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsb3Nlc3RQb2ludFRvUG9pbnQocG9pbnQsIHRhcmdldCA9IG5ldyBWZWN0b3IzKCkpIHtcblx0XHR0YXJnZXQuc3ViVmVjdG9ycyhwb2ludCwgdGhpcy5vcmlnaW4pO1xuXHRcdGNvbnN0IGRpcmVjdGlvbkRpc3RhbmNlID0gdGFyZ2V0LmRvdCh0aGlzLmRpcmVjdGlvbik7XG5cblx0XHRpZiAoZGlyZWN0aW9uRGlzdGFuY2UgPCAwKSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkodGhpcy5vcmlnaW4pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0YXJnZXQuY29weSh0aGlzLmRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIoZGlyZWN0aW9uRGlzdGFuY2UpLmFkZCh0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRkaXN0YW5jZVRvUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcVRvUG9pbnQocG9pbnQpKTtcblx0fVxuXG5cdGRpc3RhbmNlU3FUb1BvaW50KHBvaW50KSB7XG5cdFx0Y29uc3QgZGlyZWN0aW9uRGlzdGFuY2UgPSBfdmVjdG9yLnN1YlZlY3RvcnMocG9pbnQsIHRoaXMub3JpZ2luKS5kb3QodGhpcy5kaXJlY3Rpb24pOyAvLyBwb2ludCBiZWhpbmQgdGhlIHJheVxuXG5cblx0XHRpZiAoZGlyZWN0aW9uRGlzdGFuY2UgPCAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZGlzdGFuY2VUb1NxdWFyZWQocG9pbnQpO1xuXHRcdH1cblxuXHRcdF92ZWN0b3IuY29weSh0aGlzLmRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIoZGlyZWN0aW9uRGlzdGFuY2UpLmFkZCh0aGlzLm9yaWdpbik7XG5cblx0XHRyZXR1cm4gX3ZlY3Rvci5kaXN0YW5jZVRvU3F1YXJlZChwb2ludCk7XG5cdH1cblxuXHRkaXN0YW5jZVNxVG9TZWdtZW50KHYwLCB2MSwgb3B0aW9uYWxQb2ludE9uUmF5LCBvcHRpb25hbFBvaW50T25TZWdtZW50KSB7XG5cdFx0Ly8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcG1qb25pYWsvR2VvbWV0cmljVG9vbHMvYmxvYi9tYXN0ZXIvR1RFbmdpbmUvSW5jbHVkZS9NYXRoZW1hdGljcy9HdGVEaXN0UmF5U2VnbWVudC5oXG5cdFx0Ly8gSXQgcmV0dXJucyB0aGUgbWluIGRpc3RhbmNlIGJldHdlZW4gdGhlIHJheSBhbmQgdGhlIHNlZ21lbnRcblx0XHQvLyBkZWZpbmVkIGJ5IHYwIGFuZCB2MVxuXHRcdC8vIEl0IGNhbiBhbHNvIHNldCB0d28gb3B0aW9uYWwgdGFyZ2V0cyA6XG5cdFx0Ly8gLSBUaGUgY2xvc2VzdCBwb2ludCBvbiB0aGUgcmF5XG5cdFx0Ly8gLSBUaGUgY2xvc2VzdCBwb2ludCBvbiB0aGUgc2VnbWVudFxuXHRcdF9zZWdDZW50ZXIuY29weSh2MCkuYWRkKHYxKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuXG5cdFx0X3NlZ0Rpci5jb3B5KHYxKS5zdWIodjApLm5vcm1hbGl6ZSgpO1xuXG5cdFx0X2RpZmYuY29weSh0aGlzLm9yaWdpbikuc3ViKF9zZWdDZW50ZXIpO1xuXG5cdFx0Y29uc3Qgc2VnRXh0ZW50ID0gdjAuZGlzdGFuY2VUbyh2MSkgKiAwLjU7XG5cdFx0Y29uc3QgYTAxID0gLXRoaXMuZGlyZWN0aW9uLmRvdChfc2VnRGlyKTtcblxuXHRcdGNvbnN0IGIwID0gX2RpZmYuZG90KHRoaXMuZGlyZWN0aW9uKTtcblxuXHRcdGNvbnN0IGIxID0gLV9kaWZmLmRvdChfc2VnRGlyKTtcblxuXHRcdGNvbnN0IGMgPSBfZGlmZi5sZW5ndGhTcSgpO1xuXG5cdFx0Y29uc3QgZGV0ID0gTWF0aC5hYnMoMSAtIGEwMSAqIGEwMSk7XG5cdFx0bGV0IHMwLCBzMSwgc3FyRGlzdCwgZXh0RGV0O1xuXG5cdFx0aWYgKGRldCA+IDApIHtcblx0XHRcdC8vIFRoZSByYXkgYW5kIHNlZ21lbnQgYXJlIG5vdCBwYXJhbGxlbC5cblx0XHRcdHMwID0gYTAxICogYjEgLSBiMDtcblx0XHRcdHMxID0gYTAxICogYjAgLSBiMTtcblx0XHRcdGV4dERldCA9IHNlZ0V4dGVudCAqIGRldDtcblxuXHRcdFx0aWYgKHMwID49IDApIHtcblx0XHRcdFx0aWYgKHMxID49IC1leHREZXQpIHtcblx0XHRcdFx0XHRpZiAoczEgPD0gZXh0RGV0KSB7XG5cdFx0XHRcdFx0XHQvLyByZWdpb24gMFxuXHRcdFx0XHRcdFx0Ly8gTWluaW11bSBhdCBpbnRlcmlvciBwb2ludHMgb2YgcmF5IGFuZCBzZWdtZW50LlxuXHRcdFx0XHRcdFx0Y29uc3QgaW52RGV0ID0gMSAvIGRldDtcblx0XHRcdFx0XHRcdHMwICo9IGludkRldDtcblx0XHRcdFx0XHRcdHMxICo9IGludkRldDtcblx0XHRcdFx0XHRcdHNxckRpc3QgPSBzMCAqIChzMCArIGEwMSAqIHMxICsgMiAqIGIwKSArIHMxICogKGEwMSAqIHMwICsgczEgKyAyICogYjEpICsgYztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gcmVnaW9uIDFcblx0XHRcdFx0XHRcdHMxID0gc2VnRXh0ZW50O1xuXHRcdFx0XHRcdFx0czAgPSBNYXRoLm1heCgwLCAtKGEwMSAqIHMxICsgYjApKTtcblx0XHRcdFx0XHRcdHNxckRpc3QgPSAtczAgKiBzMCArIHMxICogKHMxICsgMiAqIGIxKSArIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHJlZ2lvbiA1XG5cdFx0XHRcdFx0czEgPSAtc2VnRXh0ZW50O1xuXHRcdFx0XHRcdHMwID0gTWF0aC5tYXgoMCwgLShhMDEgKiBzMSArIGIwKSk7XG5cdFx0XHRcdFx0c3FyRGlzdCA9IC1zMCAqIHMwICsgczEgKiAoczEgKyAyICogYjEpICsgYztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHMxIDw9IC1leHREZXQpIHtcblx0XHRcdFx0XHQvLyByZWdpb24gNFxuXHRcdFx0XHRcdHMwID0gTWF0aC5tYXgoMCwgLSgtYTAxICogc2VnRXh0ZW50ICsgYjApKTtcblx0XHRcdFx0XHRzMSA9IHMwID4gMCA/IC1zZWdFeHRlbnQgOiBNYXRoLm1pbihNYXRoLm1heCgtc2VnRXh0ZW50LCAtYjEpLCBzZWdFeHRlbnQpO1xuXHRcdFx0XHRcdHNxckRpc3QgPSAtczAgKiBzMCArIHMxICogKHMxICsgMiAqIGIxKSArIGM7XG5cdFx0XHRcdH0gZWxzZSBpZiAoczEgPD0gZXh0RGV0KSB7XG5cdFx0XHRcdFx0Ly8gcmVnaW9uIDNcblx0XHRcdFx0XHRzMCA9IDA7XG5cdFx0XHRcdFx0czEgPSBNYXRoLm1pbihNYXRoLm1heCgtc2VnRXh0ZW50LCAtYjEpLCBzZWdFeHRlbnQpO1xuXHRcdFx0XHRcdHNxckRpc3QgPSBzMSAqIChzMSArIDIgKiBiMSkgKyBjO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHJlZ2lvbiAyXG5cdFx0XHRcdFx0czAgPSBNYXRoLm1heCgwLCAtKGEwMSAqIHNlZ0V4dGVudCArIGIwKSk7XG5cdFx0XHRcdFx0czEgPSBzMCA+IDAgPyBzZWdFeHRlbnQgOiBNYXRoLm1pbihNYXRoLm1heCgtc2VnRXh0ZW50LCAtYjEpLCBzZWdFeHRlbnQpO1xuXHRcdFx0XHRcdHNxckRpc3QgPSAtczAgKiBzMCArIHMxICogKHMxICsgMiAqIGIxKSArIGM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUmF5IGFuZCBzZWdtZW50IGFyZSBwYXJhbGxlbC5cblx0XHRcdHMxID0gYTAxID4gMCA/IC1zZWdFeHRlbnQgOiBzZWdFeHRlbnQ7XG5cdFx0XHRzMCA9IE1hdGgubWF4KDAsIC0oYTAxICogczEgKyBiMCkpO1xuXHRcdFx0c3FyRGlzdCA9IC1zMCAqIHMwICsgczEgKiAoczEgKyAyICogYjEpICsgYztcblx0XHR9XG5cblx0XHRpZiAob3B0aW9uYWxQb2ludE9uUmF5KSB7XG5cdFx0XHRvcHRpb25hbFBvaW50T25SYXkuY29weSh0aGlzLmRpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIoczApLmFkZCh0aGlzLm9yaWdpbik7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbmFsUG9pbnRPblNlZ21lbnQpIHtcblx0XHRcdG9wdGlvbmFsUG9pbnRPblNlZ21lbnQuY29weShfc2VnRGlyKS5tdWx0aXBseVNjYWxhcihzMSkuYWRkKF9zZWdDZW50ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzcXJEaXN0O1xuXHR9XG5cblx0aW50ZXJzZWN0U3BoZXJlKHNwaGVyZSwgdGFyZ2V0ID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdF92ZWN0b3Iuc3ViVmVjdG9ycyhzcGhlcmUuY2VudGVyLCB0aGlzLm9yaWdpbik7XG5cblx0XHRjb25zdCB0Y2EgPSBfdmVjdG9yLmRvdCh0aGlzLmRpcmVjdGlvbik7XG5cblx0XHRjb25zdCBkMiA9IF92ZWN0b3IuZG90KF92ZWN0b3IpIC0gdGNhICogdGNhO1xuXHRcdGNvbnN0IHJhZGl1czIgPSBzcGhlcmUucmFkaXVzICogc3BoZXJlLnJhZGl1cztcblx0XHRpZiAoZDIgPiByYWRpdXMyKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCB0aGMgPSBNYXRoLnNxcnQocmFkaXVzMiAtIGQyKTsgLy8gdDAgPSBmaXJzdCBpbnRlcnNlY3QgcG9pbnQgLSBlbnRyYW5jZSBvbiBmcm9udCBvZiBzcGhlcmVcblxuXHRcdGNvbnN0IHQwID0gdGNhIC0gdGhjOyAvLyB0MSA9IHNlY29uZCBpbnRlcnNlY3QgcG9pbnQgLSBleGl0IHBvaW50IG9uIGJhY2sgb2Ygc3BoZXJlXG5cblx0XHRjb25zdCB0MSA9IHRjYSArIHRoYzsgLy8gdGVzdCB0byBzZWUgaWYgYm90aCB0MCBhbmQgdDEgYXJlIGJlaGluZCB0aGUgcmF5IC0gaWYgc28sIHJldHVybiBudWxsXG5cblx0XHRpZiAodDAgPCAwICYmIHQxIDwgMCkgcmV0dXJuIG51bGw7IC8vIHRlc3QgdG8gc2VlIGlmIHQwIGlzIGJlaGluZCB0aGUgcmF5OlxuXHRcdC8vIGlmIGl0IGlzLCB0aGUgcmF5IGlzIGluc2lkZSB0aGUgc3BoZXJlLCBzbyByZXR1cm4gdGhlIHNlY29uZCBleGl0IHBvaW50IHNjYWxlZCBieSB0MSxcblx0XHQvLyBpbiBvcmRlciB0byBhbHdheXMgcmV0dXJuIGFuIGludGVyc2VjdCBwb2ludCB0aGF0IGlzIGluIGZyb250IG9mIHRoZSByYXkuXG5cblx0XHRpZiAodDAgPCAwKSByZXR1cm4gdGhpcy5hdCh0MSwgdGFyZ2V0KTsgLy8gZWxzZSB0MCBpcyBpbiBmcm9udCBvZiB0aGUgcmF5LCBzbyByZXR1cm4gdGhlIGZpcnN0IGNvbGxpc2lvbiBwb2ludCBzY2FsZWQgYnkgdDBcblxuXHRcdHJldHVybiB0aGlzLmF0KHQwLCB0YXJnZXQpO1xuXHR9XG5cblx0aW50ZXJzZWN0c1NwaGVyZShzcGhlcmUpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXN0YW5jZVNxVG9Qb2ludChzcGhlcmUuY2VudGVyKSA8PSBzcGhlcmUucmFkaXVzICogc3BoZXJlLnJhZGl1cztcblx0fVxuXG5cdGRpc3RhbmNlVG9QbGFuZShwbGFuZSkge1xuXHRcdGNvbnN0IGRlbm9taW5hdG9yID0gcGxhbmUubm9ybWFsLmRvdCh0aGlzLmRpcmVjdGlvbik7XG5cblx0XHRpZiAoZGVub21pbmF0b3IgPT09IDApIHtcblx0XHRcdC8vIGxpbmUgaXMgY29wbGFuYXIsIHJldHVybiBvcmlnaW5cblx0XHRcdGlmIChwbGFuZS5kaXN0YW5jZVRvUG9pbnQodGhpcy5vcmlnaW4pID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fSAvLyBOdWxsIGlzIHByZWZlcmFibGUgdG8gdW5kZWZpbmVkIHNpbmNlIHVuZGVmaW5lZCBtZWFucy4uLi4gaXQgaXMgdW5kZWZpbmVkXG5cblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdCA9IC0odGhpcy5vcmlnaW4uZG90KHBsYW5lLm5vcm1hbCkgKyBwbGFuZS5jb25zdGFudCkgLyBkZW5vbWluYXRvcjsgLy8gUmV0dXJuIGlmIHRoZSByYXkgbmV2ZXIgaW50ZXJzZWN0cyB0aGUgcGxhbmVcblxuXHRcdHJldHVybiB0ID49IDAgPyB0IDogbnVsbDtcblx0fVxuXG5cdGludGVyc2VjdFBsYW5lKHBsYW5lLCB0YXJnZXQpIHtcblx0XHRjb25zdCB0ID0gdGhpcy5kaXN0YW5jZVRvUGxhbmUocGxhbmUpO1xuXG5cdFx0aWYgKHQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmF0KHQsIHRhcmdldCk7XG5cdH1cblxuXHRpbnRlcnNlY3RzUGxhbmUocGxhbmUpIHtcblx0XHQvLyBjaGVjayBpZiB0aGUgcmF5IGxpZXMgb24gdGhlIHBsYW5lIGZpcnN0XG5cdFx0Y29uc3QgZGlzdFRvUG9pbnQgPSBwbGFuZS5kaXN0YW5jZVRvUG9pbnQodGhpcy5vcmlnaW4pO1xuXG5cdFx0aWYgKGRpc3RUb1BvaW50ID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZW5vbWluYXRvciA9IHBsYW5lLm5vcm1hbC5kb3QodGhpcy5kaXJlY3Rpb24pO1xuXG5cdFx0aWYgKGRlbm9taW5hdG9yICogZGlzdFRvUG9pbnQgPCAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IC8vIHJheSBvcmlnaW4gaXMgYmVoaW5kIHRoZSBwbGFuZSAoYW5kIGlzIHBvaW50aW5nIGJlaGluZCBpdClcblxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aW50ZXJzZWN0Qm94KGJveCwgdGFyZ2V0KSB7XG5cdFx0bGV0IHRtaW4sIHRtYXgsIHR5bWluLCB0eW1heCwgdHptaW4sIHR6bWF4O1xuXHRcdGNvbnN0IGludmRpcnggPSAxIC8gdGhpcy5kaXJlY3Rpb24ueCxcblx0XHRcdFx0XHRpbnZkaXJ5ID0gMSAvIHRoaXMuZGlyZWN0aW9uLnksXG5cdFx0XHRcdFx0aW52ZGlyeiA9IDEgLyB0aGlzLmRpcmVjdGlvbi56O1xuXHRcdGNvbnN0IG9yaWdpbiA9IHRoaXMub3JpZ2luO1xuXG5cdFx0aWYgKGludmRpcnggPj0gMCkge1xuXHRcdFx0dG1pbiA9IChib3gubWluLnggLSBvcmlnaW4ueCkgKiBpbnZkaXJ4O1xuXHRcdFx0dG1heCA9IChib3gubWF4LnggLSBvcmlnaW4ueCkgKiBpbnZkaXJ4O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0bWluID0gKGJveC5tYXgueCAtIG9yaWdpbi54KSAqIGludmRpcng7XG5cdFx0XHR0bWF4ID0gKGJveC5taW4ueCAtIG9yaWdpbi54KSAqIGludmRpcng7XG5cdFx0fVxuXG5cdFx0aWYgKGludmRpcnkgPj0gMCkge1xuXHRcdFx0dHltaW4gPSAoYm94Lm1pbi55IC0gb3JpZ2luLnkpICogaW52ZGlyeTtcblx0XHRcdHR5bWF4ID0gKGJveC5tYXgueSAtIG9yaWdpbi55KSAqIGludmRpcnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHR5bWluID0gKGJveC5tYXgueSAtIG9yaWdpbi55KSAqIGludmRpcnk7XG5cdFx0XHR0eW1heCA9IChib3gubWluLnkgLSBvcmlnaW4ueSkgKiBpbnZkaXJ5O1xuXHRcdH1cblxuXHRcdGlmICh0bWluID4gdHltYXggfHwgdHltaW4gPiB0bWF4KSByZXR1cm4gbnVsbDsgLy8gVGhlc2UgbGluZXMgYWxzbyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdG1pbiBvciB0bWF4IGlzIE5hTlxuXHRcdC8vIChyZXN1bHQgb2YgMCAqIEluZmluaXR5KS4geCAhPT0geCByZXR1cm5zIHRydWUgaWYgeCBpcyBOYU5cblxuXHRcdGlmICh0eW1pbiA+IHRtaW4gfHwgdG1pbiAhPT0gdG1pbikgdG1pbiA9IHR5bWluO1xuXHRcdGlmICh0eW1heCA8IHRtYXggfHwgdG1heCAhPT0gdG1heCkgdG1heCA9IHR5bWF4O1xuXG5cdFx0aWYgKGludmRpcnogPj0gMCkge1xuXHRcdFx0dHptaW4gPSAoYm94Lm1pbi56IC0gb3JpZ2luLnopICogaW52ZGlyejtcblx0XHRcdHR6bWF4ID0gKGJveC5tYXgueiAtIG9yaWdpbi56KSAqIGludmRpcno7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHR6bWluID0gKGJveC5tYXgueiAtIG9yaWdpbi56KSAqIGludmRpcno7XG5cdFx0XHR0em1heCA9IChib3gubWluLnogLSBvcmlnaW4ueikgKiBpbnZkaXJ6O1xuXHRcdH1cblxuXHRcdGlmICh0bWluID4gdHptYXggfHwgdHptaW4gPiB0bWF4KSByZXR1cm4gbnVsbDtcblx0XHRpZiAodHptaW4gPiB0bWluIHx8IHRtaW4gIT09IHRtaW4pIHRtaW4gPSB0em1pbjtcblx0XHRpZiAodHptYXggPCB0bWF4IHx8IHRtYXggIT09IHRtYXgpIHRtYXggPSB0em1heDsgLy9yZXR1cm4gcG9pbnQgY2xvc2VzdCB0byB0aGUgcmF5IChwb3NpdGl2ZSBzaWRlKVxuXG5cdFx0aWYgKHRtYXggPCAwKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gdGhpcy5hdCh0bWluID49IDAgPyB0bWluIDogdG1heCwgdGFyZ2V0KTtcblx0fVxuXG5cdGludGVyc2VjdHNCb3goYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJzZWN0Qm94KGJveCwgX3ZlY3RvcikgIT09IG51bGw7XG5cdH1cblxuXHRpbnRlcnNlY3RUcmlhbmdsZShhLCBiLCBjLCBiYWNrZmFjZUN1bGxpbmcsIHRhcmdldCkge1xuXHRcdC8vIENvbXB1dGUgdGhlIG9mZnNldCBvcmlnaW4sIGVkZ2VzLCBhbmQgbm9ybWFsLlxuXHRcdC8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Btam9uaWFrL0dlb21ldHJpY1Rvb2xzL2Jsb2IvbWFzdGVyL0dURW5naW5lL0luY2x1ZGUvTWF0aGVtYXRpY3MvR3RlSW50clJheTNUcmlhbmdsZTMuaFxuXHRcdF9lZGdlMS5zdWJWZWN0b3JzKGIsIGEpO1xuXG5cdFx0X2VkZ2UyLnN1YlZlY3RvcnMoYywgYSk7XG5cblx0XHRfbm9ybWFsLmNyb3NzVmVjdG9ycyhfZWRnZTEsIF9lZGdlMik7IC8vIFNvbHZlIFEgKyB0KkQgPSBiMSpFMSArIGIyKkUyIChRID0ga0RpZmYsIEQgPSByYXkgZGlyZWN0aW9uLFxuXHRcdC8vIEUxID0ga0VkZ2UxLCBFMiA9IGtFZGdlMiwgTiA9IENyb3NzKEUxLEUyKSkgYnlcblx0XHQvL1x0IHxEb3QoRCxOKXwqYjEgPSBzaWduKERvdChELE4pKSpEb3QoRCxDcm9zcyhRLEUyKSlcblx0XHQvL1x0IHxEb3QoRCxOKXwqYjIgPSBzaWduKERvdChELE4pKSpEb3QoRCxDcm9zcyhFMSxRKSlcblx0XHQvL1x0IHxEb3QoRCxOKXwqdCA9IC1zaWduKERvdChELE4pKSpEb3QoUSxOKVxuXG5cblx0XHRsZXQgRGROID0gdGhpcy5kaXJlY3Rpb24uZG90KF9ub3JtYWwpO1xuXHRcdGxldCBzaWduO1xuXG5cdFx0aWYgKERkTiA+IDApIHtcblx0XHRcdGlmIChiYWNrZmFjZUN1bGxpbmcpIHJldHVybiBudWxsO1xuXHRcdFx0c2lnbiA9IDE7XG5cdFx0fSBlbHNlIGlmIChEZE4gPCAwKSB7XG5cdFx0XHRzaWduID0gLTE7XG5cdFx0XHREZE4gPSAtRGROO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRfZGlmZi5zdWJWZWN0b3JzKHRoaXMub3JpZ2luLCBhKTtcblxuXHRcdGNvbnN0IERkUXhFMiA9IHNpZ24gKiB0aGlzLmRpcmVjdGlvbi5kb3QoX2VkZ2UyLmNyb3NzVmVjdG9ycyhfZGlmZiwgX2VkZ2UyKSk7IC8vIGIxIDwgMCwgbm8gaW50ZXJzZWN0aW9uXG5cblx0XHRpZiAoRGRReEUyIDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgRGRFMXhRID0gc2lnbiAqIHRoaXMuZGlyZWN0aW9uLmRvdChfZWRnZTEuY3Jvc3MoX2RpZmYpKTsgLy8gYjIgPCAwLCBubyBpbnRlcnNlY3Rpb25cblxuXHRcdGlmIChEZEUxeFEgPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9IC8vIGIxK2IyID4gMSwgbm8gaW50ZXJzZWN0aW9uXG5cblxuXHRcdGlmIChEZFF4RTIgKyBEZEUxeFEgPiBEZE4pIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gLy8gTGluZSBpbnRlcnNlY3RzIHRyaWFuZ2xlLCBjaGVjayBpZiByYXkgZG9lcy5cblxuXG5cdFx0Y29uc3QgUWROID0gLXNpZ24gKiBfZGlmZi5kb3QoX25vcm1hbCk7IC8vIHQgPCAwLCBubyBpbnRlcnNlY3Rpb25cblxuXG5cdFx0aWYgKFFkTiA8IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gLy8gUmF5IGludGVyc2VjdHMgdHJpYW5nbGUuXG5cblxuXHRcdHJldHVybiB0aGlzLmF0KFFkTiAvIERkTiwgdGFyZ2V0KTtcblx0fVxuXG5cdGFwcGx5TWF0cml4NChtYXRyaXg0KSB7XG5cdFx0dGhpcy5vcmlnaW4uYXBwbHlNYXRyaXg0KG1hdHJpeDQpO1xuXHRcdHRoaXMuZGlyZWN0aW9uLnRyYW5zZm9ybURpcmVjdGlvbihtYXRyaXg0KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhyYXkpIHtcblx0XHRyZXR1cm4gcmF5Lm9yaWdpbi5lcXVhbHModGhpcy5vcmlnaW4pICYmIHJheS5kaXJlY3Rpb24uZXF1YWxzKHRoaXMuZGlyZWN0aW9uKTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG5cdH1cblxufVxuXG5jb25zdCBfYm94ID0gLypAX19QVVJFX18qL25ldyBCb3gzKCk7XG5cbmNvbnN0IF92MSQxID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF90b0ZhcnRoZXN0UG9pbnQgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3RvUG9pbnQgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY2xhc3MgU3BoZXJlIHtcblx0Y29uc3RydWN0b3IoY2VudGVyID0gbmV3IFZlY3RvcjMoKSwgcmFkaXVzID0gLTEpIHtcblx0XHR0aGlzLmNlbnRlciA9IGNlbnRlcjtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0fVxuXG5cdHNldChjZW50ZXIsIHJhZGl1cykge1xuXHRcdHRoaXMuY2VudGVyLmNvcHkoY2VudGVyKTtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEZyb21Qb2ludHMocG9pbnRzLCBvcHRpb25hbENlbnRlcikge1xuXHRcdGNvbnN0IGNlbnRlciA9IHRoaXMuY2VudGVyO1xuXG5cdFx0aWYgKG9wdGlvbmFsQ2VudGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNlbnRlci5jb3B5KG9wdGlvbmFsQ2VudGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2JveC5zZXRGcm9tUG9pbnRzKHBvaW50cykuZ2V0Q2VudGVyKGNlbnRlcik7XG5cdFx0fVxuXG5cdFx0bGV0IG1heFJhZGl1c1NxID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwLCBpbCA9IHBvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHRtYXhSYWRpdXNTcSA9IE1hdGgubWF4KG1heFJhZGl1c1NxLCBjZW50ZXIuZGlzdGFuY2VUb1NxdWFyZWQocG9pbnRzW2ldKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yYWRpdXMgPSBNYXRoLnNxcnQobWF4UmFkaXVzU3EpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y29weShzcGhlcmUpIHtcblx0XHR0aGlzLmNlbnRlci5jb3B5KHNwaGVyZS5jZW50ZXIpO1xuXHRcdHRoaXMucmFkaXVzID0gc3BoZXJlLnJhZGl1cztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlzRW1wdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmFkaXVzIDwgMDtcblx0fVxuXG5cdG1ha2VFbXB0eSgpIHtcblx0XHR0aGlzLmNlbnRlci5zZXQoMCwgMCwgMCk7XG5cdFx0dGhpcy5yYWRpdXMgPSAtMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvbnRhaW5zUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gcG9pbnQuZGlzdGFuY2VUb1NxdWFyZWQodGhpcy5jZW50ZXIpIDw9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXM7XG5cdH1cblxuXHRkaXN0YW5jZVRvUG9pbnQocG9pbnQpIHtcblx0XHRyZXR1cm4gcG9pbnQuZGlzdGFuY2VUbyh0aGlzLmNlbnRlcikgLSB0aGlzLnJhZGl1cztcblx0fVxuXG5cdGludGVyc2VjdHNTcGhlcmUoc3BoZXJlKSB7XG5cdFx0Y29uc3QgcmFkaXVzU3VtID0gdGhpcy5yYWRpdXMgKyBzcGhlcmUucmFkaXVzO1xuXHRcdHJldHVybiBzcGhlcmUuY2VudGVyLmRpc3RhbmNlVG9TcXVhcmVkKHRoaXMuY2VudGVyKSA8PSByYWRpdXNTdW0gKiByYWRpdXNTdW07XG5cdH1cblxuXHRpbnRlcnNlY3RzQm94KGJveCkge1xuXHRcdHJldHVybiBib3guaW50ZXJzZWN0c1NwaGVyZSh0aGlzKTtcblx0fVxuXG5cdGludGVyc2VjdHNQbGFuZShwbGFuZSkge1xuXHRcdHJldHVybiBNYXRoLmFicyhwbGFuZS5kaXN0YW5jZVRvUG9pbnQodGhpcy5jZW50ZXIpKSA8PSB0aGlzLnJhZGl1cztcblx0fVxuXG5cdGNsYW1wUG9pbnQocG9pbnQsIHRhcmdldCkge1xuXHRcdGNvbnN0IGRlbHRhTGVuZ3RoU3EgPSB0aGlzLmNlbnRlci5kaXN0YW5jZVRvU3F1YXJlZChwb2ludCk7XG5cdFx0dGFyZ2V0LmNvcHkocG9pbnQpO1xuXG5cdFx0aWYgKGRlbHRhTGVuZ3RoU3EgPiB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSB7XG5cdFx0XHR0YXJnZXQuc3ViKHRoaXMuY2VudGVyKS5ub3JtYWxpemUoKTtcblx0XHRcdHRhcmdldC5tdWx0aXBseVNjYWxhcih0aGlzLnJhZGl1cykuYWRkKHRoaXMuY2VudGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0Z2V0Qm91bmRpbmdCb3godGFyZ2V0KSB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHQvLyBFbXB0eSBzcGhlcmUgcHJvZHVjZXMgZW1wdHkgYm91bmRpbmcgYm94XG5cdFx0XHR0YXJnZXQubWFrZUVtcHR5KCk7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH1cblxuXHRcdHRhcmdldC5zZXQodGhpcy5jZW50ZXIsIHRoaXMuY2VudGVyKTtcblx0XHR0YXJnZXQuZXhwYW5kQnlTY2FsYXIodGhpcy5yYWRpdXMpO1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRhcHBseU1hdHJpeDQobWF0cml4KSB7XG5cdFx0dGhpcy5jZW50ZXIuYXBwbHlNYXRyaXg0KG1hdHJpeCk7XG5cdFx0dGhpcy5yYWRpdXMgPSB0aGlzLnJhZGl1cyAqIG1hdHJpeC5nZXRNYXhTY2FsZU9uQXhpcygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dHJhbnNsYXRlKG9mZnNldCkge1xuXHRcdHRoaXMuY2VudGVyLmFkZChvZmZzZXQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXhwYW5kQnlQb2ludChwb2ludCkge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0dGhpcy5jZW50ZXIuY29weShwb2ludCk7XG5cdFx0XHR0aGlzLnJhZGl1cyA9IDA7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IC8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2p1ai9NYXRoR2VvTGliL2Jsb2IvMjk0MGI5OWI5OWNmZTU3NWRkNDUxMDNlZjIwZjQwMTlkZWUxNWI1NC9zcmMvR2VvbWV0cnkvU3BoZXJlLmNwcCNMNjQ5LUw2NzFcblxuXG5cdFx0X3RvUG9pbnQuc3ViVmVjdG9ycyhwb2ludCwgdGhpcy5jZW50ZXIpO1xuXG5cdFx0Y29uc3QgbGVuZ3RoU3EgPSBfdG9Qb2ludC5sZW5ndGhTcSgpO1xuXG5cdFx0aWYgKGxlbmd0aFNxID4gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KGxlbmd0aFNxKTtcblx0XHRcdGNvbnN0IG1pc3NpbmdSYWRpdXNIYWxmID0gKGxlbmd0aCAtIHRoaXMucmFkaXVzKSAqIDAuNTsgLy8gTnVkZ2UgdGhpcyBzcGhlcmUgdG93YXJkcyB0aGUgdGFyZ2V0IHBvaW50LiBBZGQgaGFsZiB0aGUgbWlzc2luZyBkaXN0YW5jZSB0byByYWRpdXMsXG5cdFx0XHQvLyBhbmQgdGhlIG90aGVyIGhhbGYgdG8gcG9zaXRpb24uIFRoaXMgZ2l2ZXMgYSB0aWdodGVyIGVuY2xvc3VyZSwgaW5zdGVhZCBvZiBpZlxuXHRcdFx0Ly8gdGhlIHdob2xlIG1pc3NpbmcgZGlzdGFuY2Ugd2VyZSBqdXN0IGFkZGVkIHRvIHJhZGl1cy5cblxuXHRcdFx0dGhpcy5jZW50ZXIuYWRkKF90b1BvaW50Lm11bHRpcGx5U2NhbGFyKG1pc3NpbmdSYWRpdXNIYWxmIC8gbGVuZ3RoKSk7XG5cdFx0XHR0aGlzLnJhZGl1cyArPSBtaXNzaW5nUmFkaXVzSGFsZjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHVuaW9uKHNwaGVyZSkge1xuXHRcdC8vIGhhbmRsZSBlbXB0eSBzcGhlcmUgY2FzZXNcblx0XHRpZiAoc3BoZXJlLmlzRW1wdHkoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdHRoaXMuY29weShzcGhlcmUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSAvLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWovTWF0aEdlb0xpYi9ibG9iLzI5NDBiOTliOTljZmU1NzVkZDQ1MTAzZWYyMGY0MDE5ZGVlMTViNTQvc3JjL0dlb21ldHJ5L1NwaGVyZS5jcHAjTDc1OS1MNzY5XG5cdFx0Ly8gVG8gZW5jbG9zZSBhbm90aGVyIHNwaGVyZSBpbnRvIHRoaXMgc3BoZXJlLCB3ZSBvbmx5IG5lZWQgdG8gZW5jbG9zZSB0d28gcG9pbnRzOlxuXHRcdC8vIDEpIEVuY2xvc2UgdGhlIGZhcnRoZXN0IHBvaW50IG9uIHRoZSBvdGhlciBzcGhlcmUgaW50byB0aGlzIHNwaGVyZS5cblx0XHQvLyAyKSBFbmNsb3NlIHRoZSBvcHBvc2l0ZSBwb2ludCBvZiB0aGUgZmFydGhlc3QgcG9pbnQgaW50byB0aGlzIHNwaGVyZS5cblxuXG5cdFx0aWYgKHRoaXMuY2VudGVyLmVxdWFscyhzcGhlcmUuY2VudGVyKSA9PT0gdHJ1ZSkge1xuXHRcdFx0X3RvRmFydGhlc3RQb2ludC5zZXQoMCwgMCwgMSkubXVsdGlwbHlTY2FsYXIoc3BoZXJlLnJhZGl1cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90b0ZhcnRoZXN0UG9pbnQuc3ViVmVjdG9ycyhzcGhlcmUuY2VudGVyLCB0aGlzLmNlbnRlcikubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoc3BoZXJlLnJhZGl1cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5leHBhbmRCeVBvaW50KF92MSQxLmNvcHkoc3BoZXJlLmNlbnRlcikuYWRkKF90b0ZhcnRoZXN0UG9pbnQpKTtcblx0XHR0aGlzLmV4cGFuZEJ5UG9pbnQoX3YxJDEuY29weShzcGhlcmUuY2VudGVyKS5zdWIoX3RvRmFydGhlc3RQb2ludCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHNwaGVyZSkge1xuXHRcdHJldHVybiBzcGhlcmUuY2VudGVyLmVxdWFscyh0aGlzLmNlbnRlcikgJiYgc3BoZXJlLnJhZGl1cyA9PT0gdGhpcy5yYWRpdXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBSZWY6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NwaGVyaWNhbF9jb29yZGluYXRlX3N5c3RlbVxuICpcbiAqIFRoZSBwb2xhciBhbmdsZSAocGhpKSBpcyBtZWFzdXJlZCBmcm9tIHRoZSBwb3NpdGl2ZSB5LWF4aXMuIFRoZSBwb3NpdGl2ZSB5LWF4aXMgaXMgdXAuXG4gKiBUaGUgYXppbXV0aGFsIGFuZ2xlICh0aGV0YSkgaXMgbWVhc3VyZWQgZnJvbSB0aGUgcG9zaXRpdmUgei1heGlzLlxuICovXG5cbmNsYXNzIFNwaGVyaWNhbCB7XG5cdGNvbnN0cnVjdG9yKHJhZGl1cyA9IDEsIHBoaSA9IDAsIHRoZXRhID0gMCkge1xuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdHRoaXMucGhpID0gcGhpOyAvLyBwb2xhciBhbmdsZVxuXG5cdFx0dGhpcy50aGV0YSA9IHRoZXRhOyAvLyBhemltdXRoYWwgYW5nbGVcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0KHJhZGl1cywgcGhpLCB0aGV0YSkge1xuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdHRoaXMucGhpID0gcGhpO1xuXHRcdHRoaXMudGhldGEgPSB0aGV0YTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNvcHkob3RoZXIpIHtcblx0XHR0aGlzLnJhZGl1cyA9IG90aGVyLnJhZGl1cztcblx0XHR0aGlzLnBoaSA9IG90aGVyLnBoaTtcblx0XHR0aGlzLnRoZXRhID0gb3RoZXIudGhldGE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gRVBTIGFuZCBQSS1FUFNcblxuXG5cdG1ha2VTYWZlKCkge1xuXHRcdGNvbnN0IEVQUyA9IDAuMDAwMDAxO1xuXHRcdHRoaXMucGhpID0gTWF0aC5tYXgoRVBTLCBNYXRoLm1pbihNYXRoLlBJIC0gRVBTLCB0aGlzLnBoaSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RnJvbVZlY3RvcjModikge1xuXHRcdHJldHVybiB0aGlzLnNldEZyb21DYXJ0ZXNpYW5Db29yZHModi54LCB2LnksIHYueik7XG5cdH1cblxuXHRzZXRGcm9tQ2FydGVzaWFuQ29vcmRzKHgsIHksIHopIHtcblx0XHR0aGlzLnJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuXG5cdFx0aWYgKHRoaXMucmFkaXVzID09PSAwKSB7XG5cdFx0XHR0aGlzLnRoZXRhID0gMDtcblx0XHRcdHRoaXMucGhpID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50aGV0YSA9IE1hdGguYXRhbjIoeCwgeik7XG5cdFx0XHR0aGlzLnBoaSA9IE1hdGguYWNvcyhjbGFtcCh5IC8gdGhpcy5yYWRpdXMsIC0xLCAxKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cbn1cblxuY29uc3QgX3YwID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92MSA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdjIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3YzID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92YWIgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZhYyA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmJjID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF92YXAgPSAvKkBfX1BVUkVfXyovbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX3ZicCA9IC8qQF9fUFVSRV9fKi9uZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfdmNwID0gLypAX19QVVJFX18qL25ldyBWZWN0b3IzKCk7XG5cbmNsYXNzIFRyaWFuZ2xlIHtcblx0Y29uc3RydWN0b3IoYSA9IG5ldyBWZWN0b3IzKCksIGIgPSBuZXcgVmVjdG9yMygpLCBjID0gbmV3IFZlY3RvcjMoKSkge1xuXHRcdHRoaXMuYSA9IGE7XG5cdFx0dGhpcy5iID0gYjtcblx0XHR0aGlzLmMgPSBjO1xuXHR9XG5cblx0c3RhdGljIGdldE5vcm1hbChhLCBiLCBjLCB0YXJnZXQpIHtcblx0XHR0YXJnZXQuc3ViVmVjdG9ycyhjLCBiKTtcblxuXHRcdF92MC5zdWJWZWN0b3JzKGEsIGIpO1xuXG5cdFx0dGFyZ2V0LmNyb3NzKF92MCk7XG5cdFx0Y29uc3QgdGFyZ2V0TGVuZ3RoU3EgPSB0YXJnZXQubGVuZ3RoU3EoKTtcblxuXHRcdGlmICh0YXJnZXRMZW5ndGhTcSA+IDApIHtcblx0XHRcdHJldHVybiB0YXJnZXQubXVsdGlwbHlTY2FsYXIoMSAvIE1hdGguc3FydCh0YXJnZXRMZW5ndGhTcSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0YXJnZXQuc2V0KDAsIDAsIDApO1xuXHR9IC8vIHN0YXRpYy9pbnN0YW5jZSBtZXRob2QgdG8gY2FsY3VsYXRlIGJhcnljZW50cmljIGNvb3JkaW5hdGVzXG5cdC8vIGJhc2VkIG9uOiBodHRwOi8vd3d3LmJsYWNrcGF3bi5jb20vdGV4dHMvcG9pbnRpbnBvbHkvZGVmYXVsdC5odG1sXG5cblxuXHRzdGF0aWMgZ2V0QmFyeWNvb3JkKHBvaW50LCBhLCBiLCBjLCB0YXJnZXQpIHtcblx0XHRfdjAuc3ViVmVjdG9ycyhjLCBhKTtcblxuXHRcdF92MS5zdWJWZWN0b3JzKGIsIGEpO1xuXG5cdFx0X3YyLnN1YlZlY3RvcnMocG9pbnQsIGEpO1xuXG5cdFx0Y29uc3QgZG90MDAgPSBfdjAuZG90KF92MCk7XG5cblx0XHRjb25zdCBkb3QwMSA9IF92MC5kb3QoX3YxKTtcblxuXHRcdGNvbnN0IGRvdDAyID0gX3YwLmRvdChfdjIpO1xuXG5cdFx0Y29uc3QgZG90MTEgPSBfdjEuZG90KF92MSk7XG5cblx0XHRjb25zdCBkb3QxMiA9IF92MS5kb3QoX3YyKTtcblxuXHRcdGNvbnN0IGRlbm9tID0gZG90MDAgKiBkb3QxMSAtIGRvdDAxICogZG90MDE7IC8vIGNvbGxpbmVhciBvciBzaW5ndWxhciB0cmlhbmdsZVxuXG5cdFx0aWYgKGRlbm9tID09PSAwKSB7XG5cdFx0XHQvLyBhcmJpdHJhcnkgbG9jYXRpb24gb3V0c2lkZSBvZiB0cmlhbmdsZT9cblx0XHRcdC8vIG5vdCBzdXJlIGlmIHRoaXMgaXMgdGhlIGJlc3QgaWRlYSwgbWF5YmUgc2hvdWxkIGJlIHJldHVybmluZyB1bmRlZmluZWRcblx0XHRcdHJldHVybiB0YXJnZXQuc2V0KC0yLCAtMSwgLTEpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludkRlbm9tID0gMSAvIGRlbm9tO1xuXHRcdGNvbnN0IHUgPSAoZG90MTEgKiBkb3QwMiAtIGRvdDAxICogZG90MTIpICogaW52RGVub207XG5cdFx0Y29uc3QgdiA9IChkb3QwMCAqIGRvdDEyIC0gZG90MDEgKiBkb3QwMikgKiBpbnZEZW5vbTsgLy8gYmFyeWNlbnRyaWMgY29vcmRpbmF0ZXMgbXVzdCBhbHdheXMgc3VtIHRvIDFcblxuXHRcdHJldHVybiB0YXJnZXQuc2V0KDEgLSB1IC0gdiwgdiwgdSk7XG5cdH1cblxuXHRzdGF0aWMgY29udGFpbnNQb2ludChwb2ludCwgYSwgYiwgYykge1xuXHRcdHRoaXMuZ2V0QmFyeWNvb3JkKHBvaW50LCBhLCBiLCBjLCBfdjMpO1xuXHRcdHJldHVybiBfdjMueCA+PSAwICYmIF92My55ID49IDAgJiYgX3YzLnggKyBfdjMueSA8PSAxO1xuXHR9XG5cblx0c3RhdGljIGdldFVWKHBvaW50LCBwMSwgcDIsIHAzLCB1djEsIHV2MiwgdXYzLCB0YXJnZXQpIHtcblx0XHR0aGlzLmdldEJhcnljb29yZChwb2ludCwgcDEsIHAyLCBwMywgX3YzKTtcblx0XHR0YXJnZXQuc2V0KDAsIDApO1xuXHRcdHRhcmdldC5hZGRTY2FsZWRWZWN0b3IodXYxLCBfdjMueCk7XG5cdFx0dGFyZ2V0LmFkZFNjYWxlZFZlY3Rvcih1djIsIF92My55KTtcblx0XHR0YXJnZXQuYWRkU2NhbGVkVmVjdG9yKHV2MywgX3YzLnopO1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRzdGF0aWMgaXNGcm9udEZhY2luZyhhLCBiLCBjLCBkaXJlY3Rpb24pIHtcblx0XHRfdjAuc3ViVmVjdG9ycyhjLCBiKTtcblxuXHRcdF92MS5zdWJWZWN0b3JzKGEsIGIpOyAvLyBzdHJpY3RseSBmcm9udCBmYWNpbmdcblxuXG5cdFx0cmV0dXJuIF92MC5jcm9zcyhfdjEpLmRvdChkaXJlY3Rpb24pIDwgMCA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdHNldChhLCBiLCBjKSB7XG5cdFx0dGhpcy5hLmNvcHkoYSk7XG5cdFx0dGhpcy5iLmNvcHkoYik7XG5cdFx0dGhpcy5jLmNvcHkoYyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRGcm9tUG9pbnRzQW5kSW5kaWNlcyhwb2ludHMsIGkwLCBpMSwgaTIpIHtcblx0XHR0aGlzLmEuY29weShwb2ludHNbaTBdKTtcblx0XHR0aGlzLmIuY29weShwb2ludHNbaTFdKTtcblx0XHR0aGlzLmMuY29weShwb2ludHNbaTJdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSAvLyBzZXRGcm9tQXR0cmlidXRlQW5kSW5kaWNlcyggYXR0cmlidXRlLCBpMCwgaTEsIGkyICkge1xuXHQvLyBcdHRoaXMuYS5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGkwICk7XG5cdC8vIFx0dGhpcy5iLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgaTEgKTtcblx0Ly8gXHR0aGlzLmMuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpMiApO1xuXHQvLyBcdHJldHVybiB0aGlzO1xuXHQvLyB9XG5cblxuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoKS5jb3B5KHRoaXMpO1xuXHR9XG5cblx0Y29weSh0cmlhbmdsZSkge1xuXHRcdHRoaXMuYS5jb3B5KHRyaWFuZ2xlLmEpO1xuXHRcdHRoaXMuYi5jb3B5KHRyaWFuZ2xlLmIpO1xuXHRcdHRoaXMuYy5jb3B5KHRyaWFuZ2xlLmMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0QXJlYSgpIHtcblx0XHRfdjAuc3ViVmVjdG9ycyh0aGlzLmMsIHRoaXMuYik7XG5cblx0XHRfdjEuc3ViVmVjdG9ycyh0aGlzLmEsIHRoaXMuYik7XG5cblx0XHRyZXR1cm4gX3YwLmNyb3NzKF92MSkubGVuZ3RoKCkgKiAwLjU7XG5cdH1cblxuXHRnZXRNaWRwb2ludCh0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmFkZFZlY3RvcnModGhpcy5hLCB0aGlzLmIpLmFkZCh0aGlzLmMpLm11bHRpcGx5U2NhbGFyKDEgLyAzKTtcblx0fVxuXG5cdGdldE5vcm1hbCh0YXJnZXQpIHtcblx0XHRyZXR1cm4gVHJpYW5nbGUuZ2V0Tm9ybWFsKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRhcmdldCk7XG5cdH1cblxuXHRnZXRQbGFuZSh0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LnNldEZyb21Db3BsYW5hclBvaW50cyh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jKTtcblx0fVxuXG5cdGdldEJhcnljb29yZChwb2ludCwgdGFyZ2V0KSB7XG5cdFx0cmV0dXJuIFRyaWFuZ2xlLmdldEJhcnljb29yZChwb2ludCwgdGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGFyZ2V0KTtcblx0fVxuXG5cdGdldFVWKHBvaW50LCB1djEsIHV2MiwgdXYzLCB0YXJnZXQpIHtcblx0XHRyZXR1cm4gVHJpYW5nbGUuZ2V0VVYocG9pbnQsIHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHV2MSwgdXYyLCB1djMsIHRhcmdldCk7XG5cdH1cblxuXHRjb250YWluc1BvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIFRyaWFuZ2xlLmNvbnRhaW5zUG9pbnQocG9pbnQsIHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMpO1xuXHR9XG5cblx0aXNGcm9udEZhY2luZyhkaXJlY3Rpb24pIHtcblx0XHRyZXR1cm4gVHJpYW5nbGUuaXNGcm9udEZhY2luZyh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCBkaXJlY3Rpb24pO1xuXHR9XG5cblx0aW50ZXJzZWN0c0JveChib3gpIHtcblx0XHRyZXR1cm4gYm94LmludGVyc2VjdHNUcmlhbmdsZSh0aGlzKTtcblx0fVxuXG5cdGNsb3Nlc3RQb2ludFRvUG9pbnQocCwgdGFyZ2V0KSB7XG5cdFx0Y29uc3QgYSA9IHRoaXMuYSxcblx0XHRcdFx0XHRiID0gdGhpcy5iLFxuXHRcdFx0XHRcdGMgPSB0aGlzLmM7XG5cdFx0bGV0IHYsIHc7IC8vIGFsZ29yaXRobSB0aGFua3MgdG8gUmVhbC1UaW1lIENvbGxpc2lvbiBEZXRlY3Rpb24gYnkgQ2hyaXN0ZXIgRXJpY3Nvbixcblx0XHQvLyBwdWJsaXNoZWQgYnkgTW9yZ2FuIEthdWZtYW5uIFB1Ymxpc2hlcnMsIChjKSAyMDA1IEVsc2V2aWVyIEluYy4sXG5cdFx0Ly8gdW5kZXIgdGhlIGFjY29tcGFueWluZyBsaWNlbnNlOyBzZWUgY2hhcHRlciA1LjEuNSBmb3IgZGV0YWlsZWQgZXhwbGFuYXRpb24uXG5cdFx0Ly8gYmFzaWNhbGx5LCB3ZSdyZSBkaXN0aW5ndWlzaGluZyB3aGljaCBvZiB0aGUgdm9yb25vaSByZWdpb25zIG9mIHRoZSB0cmlhbmdsZVxuXHRcdC8vIHRoZSBwb2ludCBsaWVzIGluIHdpdGggdGhlIG1pbmltdW0gYW1vdW50IG9mIHJlZHVuZGFudCBjb21wdXRhdGlvbi5cblxuXHRcdF92YWIuc3ViVmVjdG9ycyhiLCBhKTtcblxuXHRcdF92YWMuc3ViVmVjdG9ycyhjLCBhKTtcblxuXHRcdF92YXAuc3ViVmVjdG9ycyhwLCBhKTtcblxuXHRcdGNvbnN0IGQxID0gX3ZhYi5kb3QoX3ZhcCk7XG5cblx0XHRjb25zdCBkMiA9IF92YWMuZG90KF92YXApO1xuXG5cdFx0aWYgKGQxIDw9IDAgJiYgZDIgPD0gMCkge1xuXHRcdFx0Ly8gdmVydGV4IHJlZ2lvbiBvZiBBOyBiYXJ5Y2VudHJpYyBjb29yZHMgKDEsIDAsIDApXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYSk7XG5cdFx0fVxuXG5cdFx0X3ZicC5zdWJWZWN0b3JzKHAsIGIpO1xuXG5cdFx0Y29uc3QgZDMgPSBfdmFiLmRvdChfdmJwKTtcblxuXHRcdGNvbnN0IGQ0ID0gX3ZhYy5kb3QoX3ZicCk7XG5cblx0XHRpZiAoZDMgPj0gMCAmJiBkNCA8PSBkMykge1xuXHRcdFx0Ly8gdmVydGV4IHJlZ2lvbiBvZiBCOyBiYXJ5Y2VudHJpYyBjb29yZHMgKDAsIDEsIDApXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmMgPSBkMSAqIGQ0IC0gZDMgKiBkMjtcblxuXHRcdGlmICh2YyA8PSAwICYmIGQxID49IDAgJiYgZDMgPD0gMCkge1xuXHRcdFx0diA9IGQxIC8gKGQxIC0gZDMpOyAvLyBlZGdlIHJlZ2lvbiBvZiBBQjsgYmFyeWNlbnRyaWMgY29vcmRzICgxLXYsIHYsIDApXG5cblx0XHRcdHJldHVybiB0YXJnZXQuY29weShhKS5hZGRTY2FsZWRWZWN0b3IoX3ZhYiwgdik7XG5cdFx0fVxuXG5cdFx0X3ZjcC5zdWJWZWN0b3JzKHAsIGMpO1xuXG5cdFx0Y29uc3QgZDUgPSBfdmFiLmRvdChfdmNwKTtcblxuXHRcdGNvbnN0IGQ2ID0gX3ZhYy5kb3QoX3ZjcCk7XG5cblx0XHRpZiAoZDYgPj0gMCAmJiBkNSA8PSBkNikge1xuXHRcdFx0Ly8gdmVydGV4IHJlZ2lvbiBvZiBDOyBiYXJ5Y2VudHJpYyBjb29yZHMgKDAsIDAsIDEpXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmIgPSBkNSAqIGQyIC0gZDEgKiBkNjtcblxuXHRcdGlmICh2YiA8PSAwICYmIGQyID49IDAgJiYgZDYgPD0gMCkge1xuXHRcdFx0dyA9IGQyIC8gKGQyIC0gZDYpOyAvLyBlZGdlIHJlZ2lvbiBvZiBBQzsgYmFyeWNlbnRyaWMgY29vcmRzICgxLXcsIDAsIHcpXG5cblx0XHRcdHJldHVybiB0YXJnZXQuY29weShhKS5hZGRTY2FsZWRWZWN0b3IoX3ZhYywgdyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmEgPSBkMyAqIGQ2IC0gZDUgKiBkNDtcblxuXHRcdGlmICh2YSA8PSAwICYmIGQ0IC0gZDMgPj0gMCAmJiBkNSAtIGQ2ID49IDApIHtcblx0XHRcdF92YmMuc3ViVmVjdG9ycyhjLCBiKTtcblxuXHRcdFx0dyA9IChkNCAtIGQzKSAvIChkNCAtIGQzICsgKGQ1IC0gZDYpKTsgLy8gZWRnZSByZWdpb24gb2YgQkM7IGJhcnljZW50cmljIGNvb3JkcyAoMCwgMS13LCB3KVxuXG5cdFx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYikuYWRkU2NhbGVkVmVjdG9yKF92YmMsIHcpOyAvLyBlZGdlIHJlZ2lvbiBvZiBCQ1xuXHRcdH0gLy8gZmFjZSByZWdpb25cblxuXG5cdFx0Y29uc3QgZGVub20gPSAxIC8gKHZhICsgdmIgKyB2Yyk7IC8vIHUgPSB2YSAqIGRlbm9tXG5cblx0XHR2ID0gdmIgKiBkZW5vbTtcblx0XHR3ID0gdmMgKiBkZW5vbTtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvcHkoYSkuYWRkU2NhbGVkVmVjdG9yKF92YWIsIHYpLmFkZFNjYWxlZFZlY3RvcihfdmFjLCB3KTtcblx0fVxuXG5cdGVxdWFscyh0cmlhbmdsZSkge1xuXHRcdHJldHVybiB0cmlhbmdsZS5hLmVxdWFscyh0aGlzLmEpICYmIHRyaWFuZ2xlLmIuZXF1YWxzKHRoaXMuYikgJiYgdHJpYW5nbGUuYy5lcXVhbHModGhpcy5jKTtcblx0fVxuXG59XG5cbmNsYXNzIFZlY3RvcjQge1xuXHRjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCB3ID0gMSkge1xuXHRcdFZlY3RvcjQucHJvdG90eXBlLmlzVmVjdG9yNCA9IHRydWU7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMueiA9IHo7XG5cdFx0dGhpcy53ID0gdztcblx0fVxuXG5cdGdldCB3aWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy56O1xuXHR9XG5cblx0c2V0IHdpZHRoKHZhbHVlKSB7XG5cdFx0dGhpcy56ID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnc7XG5cdH1cblxuXHRzZXQgaGVpZ2h0KHZhbHVlKSB7XG5cdFx0dGhpcy53ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQoeCwgeSwgeiwgdykge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnogPSB6O1xuXHRcdHRoaXMudyA9IHc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRTY2FsYXIoc2NhbGFyKSB7XG5cdFx0dGhpcy54ID0gc2NhbGFyO1xuXHRcdHRoaXMueSA9IHNjYWxhcjtcblx0XHR0aGlzLnogPSBzY2FsYXI7XG5cdFx0dGhpcy53ID0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0WCh4KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFkoeSkge1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRaKHopIHtcblx0XHR0aGlzLnogPSB6O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0Vyh3KSB7XG5cdFx0dGhpcy53ID0gdztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHRoaXMueCA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLnkgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy56ID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMudyA9IHZhbHVlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDb21wb25lbnQoaW5kZXgpIHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJldHVybiB0aGlzLng7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuIHRoaXMueTtcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy56O1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHJldHVybiB0aGlzLnc7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLncpO1xuXHR9XG5cblx0Y29weSh2KSB7XG5cdFx0dGhpcy54ID0gdi54O1xuXHRcdHRoaXMueSA9IHYueTtcblx0XHR0aGlzLnogPSB2Lno7XG5cdFx0dGhpcy53ID0gdi53ICE9PSB1bmRlZmluZWQgPyB2LncgOiAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkKHYpIHtcblx0XHR0aGlzLnggKz0gdi54O1xuXHRcdHRoaXMueSArPSB2Lnk7XG5cdFx0dGhpcy56ICs9IHYuejtcblx0XHR0aGlzLncgKz0gdi53O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWRkU2NhbGFyKHMpIHtcblx0XHR0aGlzLnggKz0gcztcblx0XHR0aGlzLnkgKz0gcztcblx0XHR0aGlzLnogKz0gcztcblx0XHR0aGlzLncgKz0gcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFZlY3RvcnMoYSwgYikge1xuXHRcdHRoaXMueCA9IGEueCArIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgKyBiLnk7XG5cdFx0dGhpcy56ID0gYS56ICsgYi56O1xuXHRcdHRoaXMudyA9IGEudyArIGIudztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZFNjYWxlZFZlY3Rvcih2LCBzKSB7XG5cdFx0dGhpcy54ICs9IHYueCAqIHM7XG5cdFx0dGhpcy55ICs9IHYueSAqIHM7XG5cdFx0dGhpcy56ICs9IHYueiAqIHM7XG5cdFx0dGhpcy53ICs9IHYudyAqIHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWIodikge1xuXHRcdHRoaXMueCAtPSB2Lng7XG5cdFx0dGhpcy55IC09IHYueTtcblx0XHR0aGlzLnogLT0gdi56O1xuXHRcdHRoaXMudyAtPSB2Lnc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdWJTY2FsYXIocykge1xuXHRcdHRoaXMueCAtPSBzO1xuXHRcdHRoaXMueSAtPSBzO1xuXHRcdHRoaXMueiAtPSBzO1xuXHRcdHRoaXMudyAtPSBzO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3ViVmVjdG9ycyhhLCBiKSB7XG5cdFx0dGhpcy54ID0gYS54IC0gYi54O1xuXHRcdHRoaXMueSA9IGEueSAtIGIueTtcblx0XHR0aGlzLnogPSBhLnogLSBiLno7XG5cdFx0dGhpcy53ID0gYS53IC0gYi53O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bXVsdGlwbHkodikge1xuXHRcdHRoaXMueCAqPSB2Lng7XG5cdFx0dGhpcy55ICo9IHYueTtcblx0XHR0aGlzLnogKj0gdi56O1xuXHRcdHRoaXMudyAqPSB2Lnc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtdWx0aXBseVNjYWxhcihzY2FsYXIpIHtcblx0XHR0aGlzLnggKj0gc2NhbGFyO1xuXHRcdHRoaXMueSAqPSBzY2FsYXI7XG5cdFx0dGhpcy56ICo9IHNjYWxhcjtcblx0XHR0aGlzLncgKj0gc2NhbGFyO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXBwbHlNYXRyaXg0KG0pIHtcblx0XHRjb25zdCB4ID0gdGhpcy54LFxuXHRcdFx0XHRcdHkgPSB0aGlzLnksXG5cdFx0XHRcdFx0eiA9IHRoaXMueixcblx0XHRcdFx0XHR3ID0gdGhpcy53O1xuXHRcdGNvbnN0IGUgPSBtLmVsZW1lbnRzO1xuXHRcdHRoaXMueCA9IGVbMF0gKiB4ICsgZVs0XSAqIHkgKyBlWzhdICogeiArIGVbMTJdICogdztcblx0XHR0aGlzLnkgPSBlWzFdICogeCArIGVbNV0gKiB5ICsgZVs5XSAqIHogKyBlWzEzXSAqIHc7XG5cdFx0dGhpcy56ID0gZVsyXSAqIHggKyBlWzZdICogeSArIGVbMTBdICogeiArIGVbMTRdICogdztcblx0XHR0aGlzLncgPSBlWzNdICogeCArIGVbN10gKiB5ICsgZVsxMV0gKiB6ICsgZVsxNV0gKiB3O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGl2aWRlU2NhbGFyKHNjYWxhcikge1xuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKDEgLyBzY2FsYXIpO1xuXHR9XG5cblx0c2V0QXhpc0FuZ2xlRnJvbVF1YXRlcm5pb24ocSkge1xuXHRcdC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9xdWF0ZXJuaW9uVG9BbmdsZS9pbmRleC5odG1cblx0XHQvLyBxIGlzIGFzc3VtZWQgdG8gYmUgbm9ybWFsaXplZFxuXHRcdHRoaXMudyA9IDIgKiBNYXRoLmFjb3MocS53KTtcblx0XHRjb25zdCBzID0gTWF0aC5zcXJ0KDEgLSBxLncgKiBxLncpO1xuXG5cdFx0aWYgKHMgPCAwLjAwMDEpIHtcblx0XHRcdHRoaXMueCA9IDE7XG5cdFx0XHR0aGlzLnkgPSAwO1xuXHRcdFx0dGhpcy56ID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy54ID0gcS54IC8gcztcblx0XHRcdHRoaXMueSA9IHEueSAvIHM7XG5cdFx0XHR0aGlzLnogPSBxLnogLyBzO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0QXhpc0FuZ2xlRnJvbVJvdGF0aW9uTWF0cml4KG0pIHtcblx0XHQvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvbWF0cml4VG9BbmdsZS9pbmRleC5odG1cblx0XHQvLyBhc3N1bWVzIHRoZSB1cHBlciAzeDMgb2YgbSBpcyBhIHB1cmUgcm90YXRpb24gbWF0cml4IChpLmUsIHVuc2NhbGVkKVxuXHRcdGxldCBhbmdsZSwgeCwgeSwgejsgLy8gdmFyaWFibGVzIGZvciByZXN1bHRcblxuXHRcdGNvbnN0IGVwc2lsb24gPSAwLjAxLFxuXHRcdFx0XHRcdC8vIG1hcmdpbiB0byBhbGxvdyBmb3Igcm91bmRpbmcgZXJyb3JzXG5cdFx0ZXBzaWxvbjIgPSAwLjEsXG5cdFx0XHRcdFx0Ly8gbWFyZ2luIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gMCBhbmQgMTgwIGRlZ3JlZXNcblx0XHR0ZSA9IG0uZWxlbWVudHMsXG5cdFx0XHRcdFx0bTExID0gdGVbMF0sXG5cdFx0XHRcdFx0bTEyID0gdGVbNF0sXG5cdFx0XHRcdFx0bTEzID0gdGVbOF0sXG5cdFx0XHRcdFx0bTIxID0gdGVbMV0sXG5cdFx0XHRcdFx0bTIyID0gdGVbNV0sXG5cdFx0XHRcdFx0bTIzID0gdGVbOV0sXG5cdFx0XHRcdFx0bTMxID0gdGVbMl0sXG5cdFx0XHRcdFx0bTMyID0gdGVbNl0sXG5cdFx0XHRcdFx0bTMzID0gdGVbMTBdO1xuXG5cdFx0aWYgKE1hdGguYWJzKG0xMiAtIG0yMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG0xMyAtIG0zMSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG0yMyAtIG0zMikgPCBlcHNpbG9uKSB7XG5cdFx0XHQvLyBzaW5ndWxhcml0eSBmb3VuZFxuXHRcdFx0Ly8gZmlyc3QgY2hlY2sgZm9yIGlkZW50aXR5IG1hdHJpeCB3aGljaCBtdXN0IGhhdmUgKzEgZm9yIGFsbCB0ZXJtc1xuXHRcdFx0Ly8gaW4gbGVhZGluZyBkaWFnb25hbCBhbmQgemVybyBpbiBvdGhlciB0ZXJtc1xuXHRcdFx0aWYgKE1hdGguYWJzKG0xMiArIG0yMSkgPCBlcHNpbG9uMiAmJiBNYXRoLmFicyhtMTMgKyBtMzEpIDwgZXBzaWxvbjIgJiYgTWF0aC5hYnMobTIzICsgbTMyKSA8IGVwc2lsb24yICYmIE1hdGguYWJzKG0xMSArIG0yMiArIG0zMyAtIDMpIDwgZXBzaWxvbjIpIHtcblx0XHRcdFx0Ly8gdGhpcyBzaW5ndWxhcml0eSBpcyBpZGVudGl0eSBtYXRyaXggc28gYW5nbGUgPSAwXG5cdFx0XHRcdHRoaXMuc2V0KDEsIDAsIDAsIDApO1xuXHRcdFx0XHRyZXR1cm4gdGhpczsgLy8gemVybyBhbmdsZSwgYXJiaXRyYXJ5IGF4aXNcblx0XHRcdH0gLy8gb3RoZXJ3aXNlIHRoaXMgc2luZ3VsYXJpdHkgaXMgYW5nbGUgPSAxODBcblxuXG5cdFx0XHRhbmdsZSA9IE1hdGguUEk7XG5cdFx0XHRjb25zdCB4eCA9IChtMTEgKyAxKSAvIDI7XG5cdFx0XHRjb25zdCB5eSA9IChtMjIgKyAxKSAvIDI7XG5cdFx0XHRjb25zdCB6eiA9IChtMzMgKyAxKSAvIDI7XG5cdFx0XHRjb25zdCB4eSA9IChtMTIgKyBtMjEpIC8gNDtcblx0XHRcdGNvbnN0IHh6ID0gKG0xMyArIG0zMSkgLyA0O1xuXHRcdFx0Y29uc3QgeXogPSAobTIzICsgbTMyKSAvIDQ7XG5cblx0XHRcdGlmICh4eCA+IHl5ICYmIHh4ID4genopIHtcblx0XHRcdFx0Ly8gbTExIGlzIHRoZSBsYXJnZXN0IGRpYWdvbmFsIHRlcm1cblx0XHRcdFx0aWYgKHh4IDwgZXBzaWxvbikge1xuXHRcdFx0XHRcdHggPSAwO1xuXHRcdFx0XHRcdHkgPSAwLjcwNzEwNjc4MTtcblx0XHRcdFx0XHR6ID0gMC43MDcxMDY3ODE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eCA9IE1hdGguc3FydCh4eCk7XG5cdFx0XHRcdFx0eSA9IHh5IC8geDtcblx0XHRcdFx0XHR6ID0geHogLyB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHl5ID4genopIHtcblx0XHRcdFx0Ly8gbTIyIGlzIHRoZSBsYXJnZXN0IGRpYWdvbmFsIHRlcm1cblx0XHRcdFx0aWYgKHl5IDwgZXBzaWxvbikge1xuXHRcdFx0XHRcdHggPSAwLjcwNzEwNjc4MTtcblx0XHRcdFx0XHR5ID0gMDtcblx0XHRcdFx0XHR6ID0gMC43MDcxMDY3ODE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IE1hdGguc3FydCh5eSk7XG5cdFx0XHRcdFx0eCA9IHh5IC8geTtcblx0XHRcdFx0XHR6ID0geXogLyB5O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBtMzMgaXMgdGhlIGxhcmdlc3QgZGlhZ29uYWwgdGVybSBzbyBiYXNlIHJlc3VsdCBvbiB0aGlzXG5cdFx0XHRcdGlmICh6eiA8IGVwc2lsb24pIHtcblx0XHRcdFx0XHR4ID0gMC43MDcxMDY3ODE7XG5cdFx0XHRcdFx0eSA9IDAuNzA3MTA2NzgxO1xuXHRcdFx0XHRcdHogPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHogPSBNYXRoLnNxcnQoenopO1xuXHRcdFx0XHRcdHggPSB4eiAvIHo7XG5cdFx0XHRcdFx0eSA9IHl6IC8gejtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldCh4LCB5LCB6LCBhbmdsZSk7XG5cdFx0XHRyZXR1cm4gdGhpczsgLy8gcmV0dXJuIDE4MCBkZWcgcm90YXRpb25cblx0XHR9IC8vIGFzIHdlIGhhdmUgcmVhY2hlZCBoZXJlIHRoZXJlIGFyZSBubyBzaW5ndWxhcml0aWVzIHNvIHdlIGNhbiBoYW5kbGUgbm9ybWFsbHlcblxuXG5cdFx0bGV0IHMgPSBNYXRoLnNxcnQoKG0zMiAtIG0yMykgKiAobTMyIC0gbTIzKSArIChtMTMgLSBtMzEpICogKG0xMyAtIG0zMSkgKyAobTIxIC0gbTEyKSAqIChtMjEgLSBtMTIpKTsgLy8gdXNlZCB0byBub3JtYWxpemVcblxuXHRcdGlmIChNYXRoLmFicyhzKSA8IDAuMDAxKSBzID0gMTsgLy8gcHJldmVudCBkaXZpZGUgYnkgemVybywgc2hvdWxkIG5vdCBoYXBwZW4gaWYgbWF0cml4IGlzIG9ydGhvZ29uYWwgYW5kIHNob3VsZCBiZVxuXHRcdC8vIGNhdWdodCBieSBzaW5ndWxhcml0eSB0ZXN0IGFib3ZlLCBidXQgSSd2ZSBsZWZ0IGl0IGluIGp1c3QgaW4gY2FzZVxuXG5cdFx0dGhpcy54ID0gKG0zMiAtIG0yMykgLyBzO1xuXHRcdHRoaXMueSA9IChtMTMgLSBtMzEpIC8gcztcblx0XHR0aGlzLnogPSAobTIxIC0gbTEyKSAvIHM7XG5cdFx0dGhpcy53ID0gTWF0aC5hY29zKChtMTEgKyBtMjIgKyBtMzMgLSAxKSAvIDIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bWluKHYpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIHYueCk7XG5cdFx0dGhpcy55ID0gTWF0aC5taW4odGhpcy55LCB2LnkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWluKHRoaXMueiwgdi56KTtcblx0XHR0aGlzLncgPSBNYXRoLm1pbih0aGlzLncsIHYudyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtYXgodikge1xuXHRcdHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgdi54KTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIHYueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgodGhpcy56LCB2LnopO1xuXHRcdHRoaXMudyA9IE1hdGgubWF4KHRoaXMudywgdi53KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsYW1wKG1pbiwgbWF4KSB7XG5cdFx0Ly8gYXNzdW1lcyBtaW4gPCBtYXgsIGNvbXBvbmVudHdpc2Vcblx0XHR0aGlzLnggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHRoaXMueCkpO1xuXHRcdHRoaXMueSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdGhpcy55KSk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgobWluLnosIE1hdGgubWluKG1heC56LCB0aGlzLnopKTtcblx0XHR0aGlzLncgPSBNYXRoLm1heChtaW4udywgTWF0aC5taW4obWF4LncsIHRoaXMudykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xhbXBTY2FsYXIobWluVmFsLCBtYXhWYWwpIHtcblx0XHR0aGlzLnggPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy54KSk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgobWluVmFsLCBNYXRoLm1pbihtYXhWYWwsIHRoaXMueSkpO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KG1pblZhbCwgTWF0aC5taW4obWF4VmFsLCB0aGlzLnopKTtcblx0XHR0aGlzLncgPSBNYXRoLm1heChtaW5WYWwsIE1hdGgubWluKG1heFZhbCwgdGhpcy53KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGFtcExlbmd0aChtaW4sIG1heCkge1xuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cdFx0cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKGxlbmd0aCB8fCAxKS5tdWx0aXBseVNjYWxhcihNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbGVuZ3RoKSkpO1xuXHR9XG5cblx0Zmxvb3IoKSB7XG5cdFx0dGhpcy54ID0gTWF0aC5mbG9vcih0aGlzLngpO1xuXHRcdHRoaXMueSA9IE1hdGguZmxvb3IodGhpcy55KTtcblx0XHR0aGlzLnogPSBNYXRoLmZsb29yKHRoaXMueik7XG5cdFx0dGhpcy53ID0gTWF0aC5mbG9vcih0aGlzLncpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2VpbCgpIHtcblx0XHR0aGlzLnggPSBNYXRoLmNlaWwodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLmNlaWwodGhpcy55KTtcblx0XHR0aGlzLnogPSBNYXRoLmNlaWwodGhpcy56KTtcblx0XHR0aGlzLncgPSBNYXRoLmNlaWwodGhpcy53KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdW5kKCkge1xuXHRcdHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gTWF0aC5yb3VuZCh0aGlzLnopO1xuXHRcdHRoaXMudyA9IE1hdGgucm91bmQodGhpcy53KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJvdW5kVG9aZXJvKCkge1xuXHRcdHRoaXMueCA9IHRoaXMueCA8IDAgPyBNYXRoLmNlaWwodGhpcy54KSA6IE1hdGguZmxvb3IodGhpcy54KTtcblx0XHR0aGlzLnkgPSB0aGlzLnkgPCAwID8gTWF0aC5jZWlsKHRoaXMueSkgOiBNYXRoLmZsb29yKHRoaXMueSk7XG5cdFx0dGhpcy56ID0gdGhpcy56IDwgMCA/IE1hdGguY2VpbCh0aGlzLnopIDogTWF0aC5mbG9vcih0aGlzLnopO1xuXHRcdHRoaXMudyA9IHRoaXMudyA8IDAgPyBNYXRoLmNlaWwodGhpcy53KSA6IE1hdGguZmxvb3IodGhpcy53KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5lZ2F0ZSgpIHtcblx0XHR0aGlzLnggPSAtdGhpcy54O1xuXHRcdHRoaXMueSA9IC10aGlzLnk7XG5cdFx0dGhpcy56ID0gLXRoaXMuejtcblx0XHR0aGlzLncgPSAtdGhpcy53O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZG90KHYpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56ICsgdGhpcy53ICogdi53O1xuXHR9XG5cblx0bGVuZ3RoU3EoKSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudztcblx0fVxuXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudyk7XG5cdH1cblxuXHRtYW5oYXR0YW5MZW5ndGgoKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMueCkgKyBNYXRoLmFicyh0aGlzLnkpICsgTWF0aC5hYnModGhpcy56KSArIE1hdGguYWJzKHRoaXMudyk7XG5cdH1cblxuXHRub3JtYWxpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkgfHwgMSk7XG5cdH1cblxuXHRzZXRMZW5ndGgobGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIobGVuZ3RoKTtcblx0fVxuXG5cdGxlcnAodiwgYWxwaGEpIHtcblx0XHR0aGlzLnggKz0gKHYueCAtIHRoaXMueCkgKiBhbHBoYTtcblx0XHR0aGlzLnkgKz0gKHYueSAtIHRoaXMueSkgKiBhbHBoYTtcblx0XHR0aGlzLnogKz0gKHYueiAtIHRoaXMueikgKiBhbHBoYTtcblx0XHR0aGlzLncgKz0gKHYudyAtIHRoaXMudykgKiBhbHBoYTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxlcnBWZWN0b3JzKHYxLCB2MiwgYWxwaGEpIHtcblx0XHR0aGlzLnggPSB2MS54ICsgKHYyLnggLSB2MS54KSAqIGFscGhhO1xuXHRcdHRoaXMueSA9IHYxLnkgKyAodjIueSAtIHYxLnkpICogYWxwaGE7XG5cdFx0dGhpcy56ID0gdjEueiArICh2Mi56IC0gdjEueikgKiBhbHBoYTtcblx0XHR0aGlzLncgPSB2MS53ICsgKHYyLncgLSB2MS53KSAqIGFscGhhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHYpIHtcblx0XHRyZXR1cm4gdi54ID09PSB0aGlzLnggJiYgdi55ID09PSB0aGlzLnkgJiYgdi56ID09PSB0aGlzLnogJiYgdi53ID09PSB0aGlzLnc7XG5cdH1cblxuXHRmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcblx0XHR0aGlzLnggPSBhcnJheVtvZmZzZXRdO1xuXHRcdHRoaXMueSA9IGFycmF5W29mZnNldCArIDFdO1xuXHRcdHRoaXMueiA9IGFycmF5W29mZnNldCArIDJdO1xuXHRcdHRoaXMudyA9IGFycmF5W29mZnNldCArIDNdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG5cdFx0YXJyYXlbb2Zmc2V0XSA9IHRoaXMueDtcblx0XHRhcnJheVtvZmZzZXQgKyAxXSA9IHRoaXMueTtcblx0XHRhcnJheVtvZmZzZXQgKyAyXSA9IHRoaXMuejtcblx0XHRhcnJheVtvZmZzZXQgKyAzXSA9IHRoaXMudztcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0gLy8gZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBpbmRleCApIHtcblx0Ly8gXHR0aGlzLnggPSBhdHRyaWJ1dGUuZ2V0WCggaW5kZXggKTtcblx0Ly8gXHR0aGlzLnkgPSBhdHRyaWJ1dGUuZ2V0WSggaW5kZXggKTtcblx0Ly8gXHR0aGlzLnogPSBhdHRyaWJ1dGUuZ2V0WiggaW5kZXggKTtcblx0Ly8gXHR0aGlzLncgPSBhdHRyaWJ1dGUuZ2V0VyggaW5kZXggKTtcblx0Ly8gXHRyZXR1cm4gdGhpcztcblx0Ly8gfVxuXG5cblx0cmFuZG9tKCkge1xuXHRcdHRoaXMueCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0dGhpcy55ID0gTWF0aC5yYW5kb20oKTtcblx0XHR0aGlzLnogPSBNYXRoLnJhbmRvbSgpO1xuXHRcdHRoaXMudyA9IE1hdGgucmFuZG9tKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0eWllbGQgdGhpcy54O1xuXHRcdHlpZWxkIHRoaXMueTtcblx0XHR5aWVsZCB0aGlzLno7XG5cdFx0eWllbGQgdGhpcy53O1xuXHR9XG5cbn1cblxuZXhwb3J0cy5BQ0VTRmlsbWljVG9uZU1hcHBpbmcgPSBBQ0VTRmlsbWljVG9uZU1hcHBpbmc7XG5leHBvcnRzLkFkZEVxdWF0aW9uID0gQWRkRXF1YXRpb247XG5leHBvcnRzLkFkZE9wZXJhdGlvbiA9IEFkZE9wZXJhdGlvbjtcbmV4cG9ydHMuQWRkaXRpdmVBbmltYXRpb25CbGVuZE1vZGUgPSBBZGRpdGl2ZUFuaW1hdGlvbkJsZW5kTW9kZTtcbmV4cG9ydHMuQWRkaXRpdmVCbGVuZGluZyA9IEFkZGl0aXZlQmxlbmRpbmc7XG5leHBvcnRzLkFscGhhRm9ybWF0ID0gQWxwaGFGb3JtYXQ7XG5leHBvcnRzLkFsd2F5c0RlcHRoID0gQWx3YXlzRGVwdGg7XG5leHBvcnRzLkFsd2F5c1N0ZW5jaWxGdW5jID0gQWx3YXlzU3RlbmNpbEZ1bmM7XG5leHBvcnRzLkJhY2tTaWRlID0gQmFja1NpZGU7XG5leHBvcnRzLkJhc2ljRGVwdGhQYWNraW5nID0gQmFzaWNEZXB0aFBhY2tpbmc7XG5leHBvcnRzLkJhc2ljU2hhZG93TWFwID0gQmFzaWNTaGFkb3dNYXA7XG5leHBvcnRzLkJveDIgPSBCb3gyO1xuZXhwb3J0cy5Cb3gzID0gQm94MztcbmV4cG9ydHMuQnl0ZVR5cGUgPSBCeXRlVHlwZTtcbmV4cG9ydHMuQ2luZW9uVG9uZU1hcHBpbmcgPSBDaW5lb25Ub25lTWFwcGluZztcbmV4cG9ydHMuQ2xhbXBUb0VkZ2VXcmFwcGluZyA9IENsYW1wVG9FZGdlV3JhcHBpbmc7XG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XG5leHBvcnRzLkNvbG9yTWFuYWdlbWVudCA9IENvbG9yTWFuYWdlbWVudDtcbmV4cG9ydHMuQ3ViZVJlZmxlY3Rpb25NYXBwaW5nID0gQ3ViZVJlZmxlY3Rpb25NYXBwaW5nO1xuZXhwb3J0cy5DdWJlUmVmcmFjdGlvbk1hcHBpbmcgPSBDdWJlUmVmcmFjdGlvbk1hcHBpbmc7XG5leHBvcnRzLkN1YmVVVlJlZmxlY3Rpb25NYXBwaW5nID0gQ3ViZVVWUmVmbGVjdGlvbk1hcHBpbmc7XG5leHBvcnRzLkN1bGxGYWNlQmFjayA9IEN1bGxGYWNlQmFjaztcbmV4cG9ydHMuQ3VsbEZhY2VGcm9udCA9IEN1bGxGYWNlRnJvbnQ7XG5leHBvcnRzLkN1bGxGYWNlRnJvbnRCYWNrID0gQ3VsbEZhY2VGcm9udEJhY2s7XG5leHBvcnRzLkN1bGxGYWNlTm9uZSA9IEN1bGxGYWNlTm9uZTtcbmV4cG9ydHMuQ3VzdG9tQmxlbmRpbmcgPSBDdXN0b21CbGVuZGluZztcbmV4cG9ydHMuQ3VzdG9tVG9uZU1hcHBpbmcgPSBDdXN0b21Ub25lTWFwcGluZztcbmV4cG9ydHMuQ3lsaW5kcmljYWwgPSBDeWxpbmRyaWNhbDtcbmV4cG9ydHMuRGVjcmVtZW50U3RlbmNpbE9wID0gRGVjcmVtZW50U3RlbmNpbE9wO1xuZXhwb3J0cy5EZWNyZW1lbnRXcmFwU3RlbmNpbE9wID0gRGVjcmVtZW50V3JhcFN0ZW5jaWxPcDtcbmV4cG9ydHMuRGVwdGhGb3JtYXQgPSBEZXB0aEZvcm1hdDtcbmV4cG9ydHMuRGVwdGhTdGVuY2lsRm9ybWF0ID0gRGVwdGhTdGVuY2lsRm9ybWF0O1xuZXhwb3J0cy5Eb3VibGVTaWRlID0gRG91YmxlU2lkZTtcbmV4cG9ydHMuRHN0QWxwaGFGYWN0b3IgPSBEc3RBbHBoYUZhY3RvcjtcbmV4cG9ydHMuRHN0Q29sb3JGYWN0b3IgPSBEc3RDb2xvckZhY3RvcjtcbmV4cG9ydHMuRHluYW1pY0NvcHlVc2FnZSA9IER5bmFtaWNDb3B5VXNhZ2U7XG5leHBvcnRzLkR5bmFtaWNEcmF3VXNhZ2UgPSBEeW5hbWljRHJhd1VzYWdlO1xuZXhwb3J0cy5EeW5hbWljUmVhZFVzYWdlID0gRHluYW1pY1JlYWRVc2FnZTtcbmV4cG9ydHMuRXF1YWxEZXB0aCA9IEVxdWFsRGVwdGg7XG5leHBvcnRzLkVxdWFsU3RlbmNpbEZ1bmMgPSBFcXVhbFN0ZW5jaWxGdW5jO1xuZXhwb3J0cy5FcXVpcmVjdGFuZ3VsYXJSZWZsZWN0aW9uTWFwcGluZyA9IEVxdWlyZWN0YW5ndWxhclJlZmxlY3Rpb25NYXBwaW5nO1xuZXhwb3J0cy5FcXVpcmVjdGFuZ3VsYXJSZWZyYWN0aW9uTWFwcGluZyA9IEVxdWlyZWN0YW5ndWxhclJlZnJhY3Rpb25NYXBwaW5nO1xuZXhwb3J0cy5FdWxlciA9IEV1bGVyO1xuZXhwb3J0cy5GbG9hdFR5cGUgPSBGbG9hdFR5cGU7XG5leHBvcnRzLkZyb250U2lkZSA9IEZyb250U2lkZTtcbmV4cG9ydHMuR0xTTDEgPSBHTFNMMTtcbmV4cG9ydHMuR0xTTDMgPSBHTFNMMztcbmV4cG9ydHMuR3JlYXRlckRlcHRoID0gR3JlYXRlckRlcHRoO1xuZXhwb3J0cy5HcmVhdGVyRXF1YWxEZXB0aCA9IEdyZWF0ZXJFcXVhbERlcHRoO1xuZXhwb3J0cy5HcmVhdGVyRXF1YWxTdGVuY2lsRnVuYyA9IEdyZWF0ZXJFcXVhbFN0ZW5jaWxGdW5jO1xuZXhwb3J0cy5HcmVhdGVyU3RlbmNpbEZ1bmMgPSBHcmVhdGVyU3RlbmNpbEZ1bmM7XG5leHBvcnRzLkhhbGZGbG9hdFR5cGUgPSBIYWxmRmxvYXRUeXBlO1xuZXhwb3J0cy5JbmNyZW1lbnRTdGVuY2lsT3AgPSBJbmNyZW1lbnRTdGVuY2lsT3A7XG5leHBvcnRzLkluY3JlbWVudFdyYXBTdGVuY2lsT3AgPSBJbmNyZW1lbnRXcmFwU3RlbmNpbE9wO1xuZXhwb3J0cy5JbnRUeXBlID0gSW50VHlwZTtcbmV4cG9ydHMuSW50ZXJwb2xhbnQgPSBJbnRlcnBvbGFudDtcbmV4cG9ydHMuSW50ZXJwb2xhdGVEaXNjcmV0ZSA9IEludGVycG9sYXRlRGlzY3JldGU7XG5leHBvcnRzLkludGVycG9sYXRlTGluZWFyID0gSW50ZXJwb2xhdGVMaW5lYXI7XG5leHBvcnRzLkludGVycG9sYXRlU21vb3RoID0gSW50ZXJwb2xhdGVTbW9vdGg7XG5leHBvcnRzLkludmVydFN0ZW5jaWxPcCA9IEludmVydFN0ZW5jaWxPcDtcbmV4cG9ydHMuS2VlcFN0ZW5jaWxPcCA9IEtlZXBTdGVuY2lsT3A7XG5leHBvcnRzLkxlc3NEZXB0aCA9IExlc3NEZXB0aDtcbmV4cG9ydHMuTGVzc0VxdWFsRGVwdGggPSBMZXNzRXF1YWxEZXB0aDtcbmV4cG9ydHMuTGVzc0VxdWFsU3RlbmNpbEZ1bmMgPSBMZXNzRXF1YWxTdGVuY2lsRnVuYztcbmV4cG9ydHMuTGVzc1N0ZW5jaWxGdW5jID0gTGVzc1N0ZW5jaWxGdW5jO1xuZXhwb3J0cy5MaW5lMyA9IExpbmUzO1xuZXhwb3J0cy5MaW5lYXJFbmNvZGluZyA9IExpbmVhckVuY29kaW5nO1xuZXhwb3J0cy5MaW5lYXJGaWx0ZXIgPSBMaW5lYXJGaWx0ZXI7XG5leHBvcnRzLkxpbmVhck1pcE1hcExpbmVhckZpbHRlciA9IExpbmVhck1pcE1hcExpbmVhckZpbHRlcjtcbmV4cG9ydHMuTGluZWFyTWlwTWFwTmVhcmVzdEZpbHRlciA9IExpbmVhck1pcE1hcE5lYXJlc3RGaWx0ZXI7XG5leHBvcnRzLkxpbmVhck1pcG1hcExpbmVhckZpbHRlciA9IExpbmVhck1pcG1hcExpbmVhckZpbHRlcjtcbmV4cG9ydHMuTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlciA9IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXI7XG5leHBvcnRzLkxpbmVhclNSR0JDb2xvclNwYWNlID0gTGluZWFyU1JHQkNvbG9yU3BhY2U7XG5leHBvcnRzLkxpbmVhclRvU1JHQiA9IExpbmVhclRvU1JHQjtcbmV4cG9ydHMuTGluZWFyVG9uZU1hcHBpbmcgPSBMaW5lYXJUb25lTWFwcGluZztcbmV4cG9ydHMuTG9vcE9uY2UgPSBMb29wT25jZTtcbmV4cG9ydHMuTG9vcFBpbmdQb25nID0gTG9vcFBpbmdQb25nO1xuZXhwb3J0cy5Mb29wUmVwZWF0ID0gTG9vcFJlcGVhdDtcbmV4cG9ydHMuTHVtaW5hbmNlQWxwaGFGb3JtYXQgPSBMdW1pbmFuY2VBbHBoYUZvcm1hdDtcbmV4cG9ydHMuTHVtaW5hbmNlRm9ybWF0ID0gTHVtaW5hbmNlRm9ybWF0O1xuZXhwb3J0cy5NT1VTRSA9IE1PVVNFO1xuZXhwb3J0cy5NYXRoVXRpbHMgPSBNYXRoVXRpbHM7XG5leHBvcnRzLk1hdHJpeDMgPSBNYXRyaXgzO1xuZXhwb3J0cy5NYXRyaXg0ID0gTWF0cml4NDtcbmV4cG9ydHMuTWF4RXF1YXRpb24gPSBNYXhFcXVhdGlvbjtcbmV4cG9ydHMuTWluRXF1YXRpb24gPSBNaW5FcXVhdGlvbjtcbmV4cG9ydHMuTWlycm9yZWRSZXBlYXRXcmFwcGluZyA9IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmc7XG5leHBvcnRzLk1peE9wZXJhdGlvbiA9IE1peE9wZXJhdGlvbjtcbmV4cG9ydHMuTXVsdGlwbHlCbGVuZGluZyA9IE11bHRpcGx5QmxlbmRpbmc7XG5leHBvcnRzLk11bHRpcGx5T3BlcmF0aW9uID0gTXVsdGlwbHlPcGVyYXRpb247XG5leHBvcnRzLk5lYXJlc3RGaWx0ZXIgPSBOZWFyZXN0RmlsdGVyO1xuZXhwb3J0cy5OZWFyZXN0TWlwTWFwTGluZWFyRmlsdGVyID0gTmVhcmVzdE1pcE1hcExpbmVhckZpbHRlcjtcbmV4cG9ydHMuTmVhcmVzdE1pcE1hcE5lYXJlc3RGaWx0ZXIgPSBOZWFyZXN0TWlwTWFwTmVhcmVzdEZpbHRlcjtcbmV4cG9ydHMuTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlciA9IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXI7XG5leHBvcnRzLk5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyID0gTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXI7XG5leHBvcnRzLk5ldmVyRGVwdGggPSBOZXZlckRlcHRoO1xuZXhwb3J0cy5OZXZlclN0ZW5jaWxGdW5jID0gTmV2ZXJTdGVuY2lsRnVuYztcbmV4cG9ydHMuTm9CbGVuZGluZyA9IE5vQmxlbmRpbmc7XG5leHBvcnRzLk5vQ29sb3JTcGFjZSA9IE5vQ29sb3JTcGFjZTtcbmV4cG9ydHMuTm9Ub25lTWFwcGluZyA9IE5vVG9uZU1hcHBpbmc7XG5leHBvcnRzLk5vcm1hbEFuaW1hdGlvbkJsZW5kTW9kZSA9IE5vcm1hbEFuaW1hdGlvbkJsZW5kTW9kZTtcbmV4cG9ydHMuTm9ybWFsQmxlbmRpbmcgPSBOb3JtYWxCbGVuZGluZztcbmV4cG9ydHMuTm90RXF1YWxEZXB0aCA9IE5vdEVxdWFsRGVwdGg7XG5leHBvcnRzLk5vdEVxdWFsU3RlbmNpbEZ1bmMgPSBOb3RFcXVhbFN0ZW5jaWxGdW5jO1xuZXhwb3J0cy5PYmplY3RTcGFjZU5vcm1hbE1hcCA9IE9iamVjdFNwYWNlTm9ybWFsTWFwO1xuZXhwb3J0cy5PbmVGYWN0b3IgPSBPbmVGYWN0b3I7XG5leHBvcnRzLk9uZU1pbnVzRHN0QWxwaGFGYWN0b3IgPSBPbmVNaW51c0RzdEFscGhhRmFjdG9yO1xuZXhwb3J0cy5PbmVNaW51c0RzdENvbG9yRmFjdG9yID0gT25lTWludXNEc3RDb2xvckZhY3RvcjtcbmV4cG9ydHMuT25lTWludXNTcmNBbHBoYUZhY3RvciA9IE9uZU1pbnVzU3JjQWxwaGFGYWN0b3I7XG5leHBvcnRzLk9uZU1pbnVzU3JjQ29sb3JGYWN0b3IgPSBPbmVNaW51c1NyY0NvbG9yRmFjdG9yO1xuZXhwb3J0cy5QQ0ZTaGFkb3dNYXAgPSBQQ0ZTaGFkb3dNYXA7XG5leHBvcnRzLlBDRlNvZnRTaGFkb3dNYXAgPSBQQ0ZTb2Z0U2hhZG93TWFwO1xuZXhwb3J0cy5QbGFuZSA9IFBsYW5lO1xuZXhwb3J0cy5RdWF0ZXJuaW9uID0gUXVhdGVybmlvbjtcbmV4cG9ydHMuUkVWSVNJT04gPSBSRVZJU0lPTjtcbmV4cG9ydHMuUkdCQURlcHRoUGFja2luZyA9IFJHQkFEZXB0aFBhY2tpbmc7XG5leHBvcnRzLlJHQkFGb3JtYXQgPSBSR0JBRm9ybWF0O1xuZXhwb3J0cy5SR0JBSW50ZWdlckZvcm1hdCA9IFJHQkFJbnRlZ2VyRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfMTB4MTBfRm9ybWF0ID0gUkdCQV9BU1RDXzEweDEwX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzEweDVfRm9ybWF0ID0gUkdCQV9BU1RDXzEweDVfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfMTB4Nl9Gb3JtYXQgPSBSR0JBX0FTVENfMTB4Nl9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ18xMHg4X0Zvcm1hdCA9IFJHQkFfQVNUQ18xMHg4X0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9BU1RDXzEyeDEwX0Zvcm1hdCA9IFJHQkFfQVNUQ18xMngxMF9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfQVNUQ18xMngxMl9Gb3JtYXQgPSBSR0JBX0FTVENfMTJ4MTJfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfNHg0X0Zvcm1hdCA9IFJHQkFfQVNUQ180eDRfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfNXg0X0Zvcm1hdCA9IFJHQkFfQVNUQ181eDRfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfNXg1X0Zvcm1hdCA9IFJHQkFfQVNUQ181eDVfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfNng1X0Zvcm1hdCA9IFJHQkFfQVNUQ182eDVfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfNng2X0Zvcm1hdCA9IFJHQkFfQVNUQ182eDZfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfOHg1X0Zvcm1hdCA9IFJHQkFfQVNUQ184eDVfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfOHg2X0Zvcm1hdCA9IFJHQkFfQVNUQ184eDZfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0FTVENfOHg4X0Zvcm1hdCA9IFJHQkFfQVNUQ184eDhfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX0JQVENfRm9ybWF0ID0gUkdCQV9CUFRDX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9FVEMyX0VBQ19Gb3JtYXQgPSBSR0JBX0VUQzJfRUFDX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9QVlJUQ18yQlBQVjFfRm9ybWF0ID0gUkdCQV9QVlJUQ18yQlBQVjFfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX1BWUlRDXzRCUFBWMV9Gb3JtYXQgPSBSR0JBX1BWUlRDXzRCUFBWMV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkFfUzNUQ19EWFQxX0Zvcm1hdCA9IFJHQkFfUzNUQ19EWFQxX0Zvcm1hdDtcbmV4cG9ydHMuUkdCQV9TM1RDX0RYVDNfRm9ybWF0ID0gUkdCQV9TM1RDX0RYVDNfRm9ybWF0O1xuZXhwb3J0cy5SR0JBX1MzVENfRFhUNV9Gb3JtYXQgPSBSR0JBX1MzVENfRFhUNV9Gb3JtYXQ7XG5leHBvcnRzLlJHQkZvcm1hdCA9IFJHQkZvcm1hdDtcbmV4cG9ydHMuUkdCX0VUQzFfRm9ybWF0ID0gUkdCX0VUQzFfRm9ybWF0O1xuZXhwb3J0cy5SR0JfRVRDMl9Gb3JtYXQgPSBSR0JfRVRDMl9Gb3JtYXQ7XG5leHBvcnRzLlJHQl9QVlJUQ18yQlBQVjFfRm9ybWF0ID0gUkdCX1BWUlRDXzJCUFBWMV9Gb3JtYXQ7XG5leHBvcnRzLlJHQl9QVlJUQ180QlBQVjFfRm9ybWF0ID0gUkdCX1BWUlRDXzRCUFBWMV9Gb3JtYXQ7XG5leHBvcnRzLlJHQl9TM1RDX0RYVDFfRm9ybWF0ID0gUkdCX1MzVENfRFhUMV9Gb3JtYXQ7XG5leHBvcnRzLlJHRm9ybWF0ID0gUkdGb3JtYXQ7XG5leHBvcnRzLlJHSW50ZWdlckZvcm1hdCA9IFJHSW50ZWdlckZvcm1hdDtcbmV4cG9ydHMuUmF5ID0gUmF5O1xuZXhwb3J0cy5SZWRGb3JtYXQgPSBSZWRGb3JtYXQ7XG5leHBvcnRzLlJlZEludGVnZXJGb3JtYXQgPSBSZWRJbnRlZ2VyRm9ybWF0O1xuZXhwb3J0cy5SZWluaGFyZFRvbmVNYXBwaW5nID0gUmVpbmhhcmRUb25lTWFwcGluZztcbmV4cG9ydHMuUmVwZWF0V3JhcHBpbmcgPSBSZXBlYXRXcmFwcGluZztcbmV4cG9ydHMuUmVwbGFjZVN0ZW5jaWxPcCA9IFJlcGxhY2VTdGVuY2lsT3A7XG5leHBvcnRzLlJldmVyc2VTdWJ0cmFjdEVxdWF0aW9uID0gUmV2ZXJzZVN1YnRyYWN0RXF1YXRpb247XG5leHBvcnRzLlNSR0JDb2xvclNwYWNlID0gU1JHQkNvbG9yU3BhY2U7XG5leHBvcnRzLlNSR0JUb0xpbmVhciA9IFNSR0JUb0xpbmVhcjtcbmV4cG9ydHMuU2hvcnRUeXBlID0gU2hvcnRUeXBlO1xuZXhwb3J0cy5TcGhlcmUgPSBTcGhlcmU7XG5leHBvcnRzLlNwaGVyaWNhbCA9IFNwaGVyaWNhbDtcbmV4cG9ydHMuU3JjQWxwaGFGYWN0b3IgPSBTcmNBbHBoYUZhY3RvcjtcbmV4cG9ydHMuU3JjQWxwaGFTYXR1cmF0ZUZhY3RvciA9IFNyY0FscGhhU2F0dXJhdGVGYWN0b3I7XG5leHBvcnRzLlNyY0NvbG9yRmFjdG9yID0gU3JjQ29sb3JGYWN0b3I7XG5leHBvcnRzLlN0YXRpY0NvcHlVc2FnZSA9IFN0YXRpY0NvcHlVc2FnZTtcbmV4cG9ydHMuU3RhdGljRHJhd1VzYWdlID0gU3RhdGljRHJhd1VzYWdlO1xuZXhwb3J0cy5TdGF0aWNSZWFkVXNhZ2UgPSBTdGF0aWNSZWFkVXNhZ2U7XG5leHBvcnRzLlN0cmVhbUNvcHlVc2FnZSA9IFN0cmVhbUNvcHlVc2FnZTtcbmV4cG9ydHMuU3RyZWFtRHJhd1VzYWdlID0gU3RyZWFtRHJhd1VzYWdlO1xuZXhwb3J0cy5TdHJlYW1SZWFkVXNhZ2UgPSBTdHJlYW1SZWFkVXNhZ2U7XG5leHBvcnRzLlN1YnRyYWN0RXF1YXRpb24gPSBTdWJ0cmFjdEVxdWF0aW9uO1xuZXhwb3J0cy5TdWJ0cmFjdGl2ZUJsZW5kaW5nID0gU3VidHJhY3RpdmVCbGVuZGluZztcbmV4cG9ydHMuVE9VQ0ggPSBUT1VDSDtcbmV4cG9ydHMuVGFuZ2VudFNwYWNlTm9ybWFsTWFwID0gVGFuZ2VudFNwYWNlTm9ybWFsTWFwO1xuZXhwb3J0cy5UcmlhbmdsZSA9IFRyaWFuZ2xlO1xuZXhwb3J0cy5UcmlhbmdsZUZhbkRyYXdNb2RlID0gVHJpYW5nbGVGYW5EcmF3TW9kZTtcbmV4cG9ydHMuVHJpYW5nbGVTdHJpcERyYXdNb2RlID0gVHJpYW5nbGVTdHJpcERyYXdNb2RlO1xuZXhwb3J0cy5UcmlhbmdsZXNEcmF3TW9kZSA9IFRyaWFuZ2xlc0RyYXdNb2RlO1xuZXhwb3J0cy5VVk1hcHBpbmcgPSBVVk1hcHBpbmc7XG5leHBvcnRzLlVuc2lnbmVkQnl0ZVR5cGUgPSBVbnNpZ25lZEJ5dGVUeXBlO1xuZXhwb3J0cy5VbnNpZ25lZEludDI0OFR5cGUgPSBVbnNpZ25lZEludDI0OFR5cGU7XG5leHBvcnRzLlVuc2lnbmVkSW50VHlwZSA9IFVuc2lnbmVkSW50VHlwZTtcbmV4cG9ydHMuVW5zaWduZWRTaG9ydDQ0NDRUeXBlID0gVW5zaWduZWRTaG9ydDQ0NDRUeXBlO1xuZXhwb3J0cy5VbnNpZ25lZFNob3J0NTU1MVR5cGUgPSBVbnNpZ25lZFNob3J0NTU1MVR5cGU7XG5leHBvcnRzLlVuc2lnbmVkU2hvcnRUeXBlID0gVW5zaWduZWRTaG9ydFR5cGU7XG5leHBvcnRzLlZTTVNoYWRvd01hcCA9IFZTTVNoYWRvd01hcDtcbmV4cG9ydHMuVmVjdG9yMiA9IFZlY3RvcjI7XG5leHBvcnRzLlZlY3RvcjMgPSBWZWN0b3IzO1xuZXhwb3J0cy5WZWN0b3I0ID0gVmVjdG9yNDtcbmV4cG9ydHMuV3JhcEFyb3VuZEVuZGluZyA9IFdyYXBBcm91bmRFbmRpbmc7XG5leHBvcnRzLlplcm9DdXJ2YXR1cmVFbmRpbmcgPSBaZXJvQ3VydmF0dXJlRW5kaW5nO1xuZXhwb3J0cy5aZXJvRmFjdG9yID0gWmVyb0ZhY3RvcjtcbmV4cG9ydHMuWmVyb1Nsb3BlRW5kaW5nID0gWmVyb1Nsb3BlRW5kaW5nO1xuZXhwb3J0cy5aZXJvU3RlbmNpbE9wID0gWmVyb1N0ZW5jaWxPcDtcbmV4cG9ydHMuX1NSR0JBRm9ybWF0ID0gX1NSR0JBRm9ybWF0O1xuZXhwb3J0cy5zUkdCRW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbWFnZVBhcGVyIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3BhcGVyLnBuZ1wiO1xuaW1wb3J0IGltYWdlUm9jayBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9yb2NrLnBuZ1wiO1xuaW1wb3J0IGltYWdlU2Npc3NvcnMgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvc2Npc3NvcnMucG5nXCI7XG5pbXBvcnQgaW1hZ2VTbWFsbFBhcGVyIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL3NtYWxscGFwZXIucG5nXCI7XG5pbXBvcnQgaW1hZ2VTbWFsbFJvY2sgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvc21hbGxyb2NrLnBuZ1wiO1xuaW1wb3J0IGltYWdlU21hbGxTY2lzc29ycyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9zbWFsbHNjaXNzb3JzLnBuZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5jc3NcIlxuY29uc3QgbW9kdWxlcyA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG5cbi8vR0xPQkFMIFZBUklBQkxFU1xubGV0IG1vdXNlQ29vcmRzID0ge307XG5tb3VzZUNvb3Jkcy5wb3MgPSBuZXcgbW9kdWxlcy50aHJlZUpzTW9kLlZlY3RvcjIoMCwgMCk7XG4vLy9DQU5WQVMgVkFSSUFCTEVTXG5sZXQgY2FudmFzO1xubGV0IGNvbnRleHQ7XG4vLy9DQU5WQVMgVkFSSUFCTEVTXG5cbi8vL0dBTUUgTE9PUCBWQVJJQUxFU1xubGV0IGlzcnVubmluZyA9IGZhbHNlO1xubGV0IHNlY29uZHNQYXNzZWQ7XG5sZXQgb2xkVGltZVN0YW1wID0gMC4wO1xubGV0IGZwcztcbi8vL0dBTUUgTE9PUCBWQVJJQUJMRVNcblxuLy8vR0FNRU9CSkVDVCBSRUZFUkVOQ0UgVkFSSUFCTEVTXG4vLy9FTlRJVFkgSE9MREVSLy8vXG5sZXQgRW50aXR5SG9sZGVyID0gW107XG5sZXQgVUlIb2xkZXIgPSBbXTtcbi8vR0xPQkFMIFZBUklBQkxFU1xuXG5jb25zdCBTY2VuZTAgPSB7XG4gICAgQ3JlYXRlU2NlbmUoKSB7XG5cblxuICAgICAgICBsZXQgcm9ja09iaiA9IG5ldyBtb2R1bGVzLmdhbWVPYmplY3QoMCwgbmV3IEltYWdlKDYwMCwgNjAwKSk7XG4gICAgICAgIGxldCBzY2lzc29yT2JqID0gbmV3IG1vZHVsZXMuZ2FtZU9iamVjdCgxLCBuZXcgSW1hZ2UoNjAwLCA2MDApKTtcbiAgICAgICAgbGV0IHBhcGVyT2JqID0gbmV3IG1vZHVsZXMuZ2FtZU9iamVjdCgyLCBuZXcgSW1hZ2UoNjAwLCA2MDApKTtcblxuXG4gICAgICAgIHJvY2tPYmouSW1hZ2Uuc3JjID0gaW1hZ2VSb2NrO1xuICAgICAgICBzY2lzc29yT2JqLkltYWdlLnNyYyA9IGltYWdlU2Npc3NvcnM7XG4gICAgICAgIHBhcGVyT2JqLkltYWdlLnNyYyA9IGltYWdlUGFwZXI7XG5cblxuICAgICAgICAvL29ubHkgZ29pbmcgdG8gcHVzaCBpbiB0d28gb2JqZWN0cyBcbiAgICAgICAgRW50aXR5SG9sZGVyLnB1c2gocm9ja09iaik7XG4gICAgICAgIEVudGl0eUhvbGRlci5wdXNoKHNjaXNzb3JPYmopO1xuICAgICAgICAvLyAgICBFbnRpdHlIb2xkZXIucHVzaChwYXBlck9iaik7XG5cbiAgICAgICAgUmVzZXRPcmlnaW4oKTtcblxuICAgICAgICByb2NrT2JqLnRyYW5zZm9ybS50cmFuc2xhdGUoNTAwLCAyMDApO1xuICAgICAgICBzY2lzc29yT2JqLnRyYW5zZm9ybS50cmFuc2xhdGUoNTAwLCAwKTtcblxuICAgICAgICB0aGlzLkNyZWF0ZVVJKCk7XG4gICAgfSxcbiAgICBDcmVhdGVVSSgpIHtcblxuICAgICAgICBsZXQgVUlfUyA9IG5ldyBtb2R1bGVzLlVJX1NxdWFyZSgyNDAsIDUwMCwgMTUwLCAxNTAsIDI1LCAyMCk7XG4gICAgICAgIGxldCBVSV9TMSA9IG5ldyBtb2R1bGVzLlVJX1NxdWFyZSg0NDAsIDUwMCwgMTUwLCAxNTAsIDM1LCAzNSk7XG4gICAgICAgIGxldCBVSV9TMiA9IG5ldyBtb2R1bGVzLlVJX1NxdWFyZSg2NDAsIDUwMCwgMTUwLCAxNTAsIDM1LCAxMCk7XG5cbiAgICAgICAgLy9DcmVhdGluZyBVSSBvYmplY3RzIHRoYXQgdXNlLCB0aGUgcm9jaywgcGFwZXIsIHNjaXNzb3JzIGFzc2V0cyBcbiAgICAgICAgLy9UaGV5IG1heSBhcHBlYXIgdG8gYmUgdGhlIHNhbWUgbGlrZSBteSBnYW1lT2JqZWN0IG9iamVjdHMsIGJ1dCBcbiAgICAgICAgLy90aGV5J3JlIG5vdCwgdGhleSBwZWZvcm0gYW5kIHNlcnZlIGRpZmZlcmVudCBmdW5jdGlvbnMuXG4gICAgICAgIGxldCBzbWFsbHBhcGVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNtYWxscGFwZXIuc3JjID0gaW1hZ2VTbWFsbFBhcGVyO1xuICAgICAgICBsZXQgc21hbGxyb2NrID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNtYWxscm9jay5zcmMgPSBpbWFnZVNtYWxsUm9jaztcbiAgICAgICAgbGV0IHNtYWxsc2Npc3NvciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzbWFsbHNjaXNzb3Iuc3JjID0gaW1hZ2VTbWFsbFNjaXNzb3JzO1xuXG5cbiAgICAgICAgVUlfUy5pbWFnZSA9IHNtYWxscGFwZXI7XG4gICAgICAgIFVJX1MxLmltYWdlID0gc21hbGxyb2NrO1xuICAgICAgICBVSV9TMi5pbWFnZSA9IHNtYWxsc2Npc3NvcjtcblxuXG4gICAgICAgIFVJSG9sZGVyLnB1c2goVUlfUyk7XG4gICAgICAgIFVJSG9sZGVyLnB1c2goVUlfUzEpO1xuICAgICAgICBVSUhvbGRlci5wdXNoKFVJX1MyKTtcblxuICAgIH0sXG4gICAgUmVuZGVyKCkge1xuICAgICAgICAvL1JlbmRlciBHYW1lT2JqZWN0c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVudGl0eUhvbGRlci5sZW5ndGg7IGkrKykge1xuICBcbiAgICAgICAgICAgIERyYXdTcHJpdGUoRW50aXR5SG9sZGVyW2ldLkltYWdlLCBFbnRpdHlIb2xkZXJbaV0ueCwgRW50aXR5SG9sZGVyW2ldLnkpO1xuICAgICAgICB9XG4gICAgICAgIC8vUmVuZGVyIFVJIE9iamVjdHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBVSUhvbGRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgRHJhd1VJU3F1YXJlKFVJSG9sZGVyW2ldKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBVcGRhdGUoKSB7XG4gICAgICAgIC8vc2NlbmUgbG9naWMgZ29lcyBoZXJlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRW50aXR5SG9sZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL05ldyB3YXkgb2YgYWNjZXNzaW5nIGFsbCBlbGVtZW50cyBvZiBlbnRpdHkgaG9sZGVyIHdpdGhvdXQgXG4gICAgICAgICAgICAvL2NvbnN0YW50bHkgaGF2aW5nIHRvIHdyaXRlIGNvZGUgdG8gYWNjZXNzIEVudGl0eUhvbGRlclxuICAgICAgICAgICAgbGV0IHRlbXBFbnRpdHkgPSBFbnRpdHlIb2xkZXJbaV07XG5cblxuICAgICAgICAgICAgdGVtcEVudGl0eS54ID0gdGVtcEVudGl0eS50cmFuc2Zvcm0uZWxlbWVudHNbNl07XG4gICAgICAgICAgICB0ZW1wRW50aXR5LnkgPSB0ZW1wRW50aXR5LnRyYW5zZm9ybS5lbGVtZW50c1s3XTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgQ2xlYXJTY2VuZSgpIHtcbiAgICAgICAgLy8gd3JpdGUgY29kZSBoZXJlIHRvIGNsZWFyIHNjZW5lXG4gICAgfSxcbn07XG5cblxuXG5cbi8vU2NlbmUgRHJhd2VyIGhlbHBlciBmdW5jdGlvblxuZnVuY3Rpb24gUmVzZXRPcmlnaW4oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFbnRpdHlIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlc2V0T3JpZ2luID0gbmV3IG1vZHVsZXMudGhyZWVKc01vZC5WZWN0b3IyKDAsIDApO1xuXG4gICAgICAgIGxldCB0ZW1wRW50aXR5ID0gRW50aXR5SG9sZGVyW2ldO1xuXG4gICAgICAgIHJlc2V0T3JpZ2luLnggPSB0ZW1wRW50aXR5LkltYWdlLndpZHRoO1xuICAgICAgICByZXNldE9yaWdpbi55ID0gdGVtcEVudGl0eS5JbWFnZS5oZWlnaHQ7XG5cbiAgICAgICAgcmVzZXRPcmlnaW4ueCA9IHJlc2V0T3JpZ2luLnggLyAyO1xuICAgICAgICByZXNldE9yaWdpbi55ID0gcmVzZXRPcmlnaW4ueSAvIDI7XG5cbiAgICAgICAgdGVtcEVudGl0eS54ICs9IHJlc2V0T3JpZ2luLnggKiAtMTtcbiAgICAgICAgdGVtcEVudGl0eS55ICs9IHJlc2V0T3JpZ2luLnkgKiAtMTtcblxuICAgICAgICB0ZW1wRW50aXR5LnRyYW5zZm9ybS5lbGVtZW50c1s2XT10ZW1wRW50aXR5Lng7XG4gICAgICAgIHRlbXBFbnRpdHkudHJhbnNmb3JtLmVsZW1lbnRzWzddPXRlbXBFbnRpdHkueTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gRHJhd1Nwcml0ZShDYW52YXNJbWFnZVNvdXJjZV8sIHhfc291cmNlLCB5X3NvdXJjZSkge1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKENhbnZhc0ltYWdlU291cmNlXywgeF9zb3VyY2UsIHlfc291cmNlLCBDYW52YXNJbWFnZVNvdXJjZV8ud2lkdGgsIENhbnZhc0ltYWdlU291cmNlXy5oZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBEcmF3VUlTcXVhcmUoVUlfc3F1YXJlKSB7XG4gICAgLy9DcmVhdGUgQm94XG4gICAgY29udGV4dC5maWxsUmVjdChVSV9zcXVhcmUueCwgVUlfc3F1YXJlLnksIFVJX3NxdWFyZS53aWR0aCwgVUlfc3F1YXJlLmhlaWdodCk7XG4gICAgLy9IYXJkY29kZWQgb2Zmc2V0IGxlYXZpbmcgVUlfc3F1YXJlIHdpdGggb2Zmc2V0IHZhcmlhYmxlIGp1c3QgaW4gY2FzZSBJIHdhbnQgdG8gZG8gY29vbCBzdHVmZiB3aXRoIGl0LlxuICAgIC8vY2xlYXIgVUkgYm94XG4gICAgY29udGV4dC5jbGVhclJlY3QoVUlfc3F1YXJlLnggKyA1LCBVSV9zcXVhcmUueSArIDUsIFVJX3NxdWFyZS53aWR0aCAtIDEwLCBVSV9zcXVhcmUuaGVpZ2h0IC0gMTApO1xuICAgIC8vRHJhdyBpbWFnZSBpbnNpZGUgYm94XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoVUlfc3F1YXJlLmltYWdlLCBVSV9zcXVhcmUueCArIFVJX3NxdWFyZS5vZmZTZXRYLCBVSV9zcXVhcmUueSArIFVJX3NxdWFyZS5vZmZTZXRZLCBVSV9zcXVhcmUuaW1hZ2Uud2lkdGgsIFVJX3NxdWFyZS5pbWFnZS5oZWlnaHQpO1xuXG59XG5cbmZ1bmN0aW9uIGludGlhbGl6YXRpb24oKSB7XG5cbiAgICAvLyByZWZhY3RvckNTUygpO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aWV3cG9ydFwiKVswXTtcblxuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG5cbiAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgaXNydW5uaW5nID0gdHJ1ZTtcbiAgICBTY2VuZTAuQ3JlYXRlU2NlbmUoKTtcblxuICAgIGlmIChpc3J1bm5pbmcgPT09IHRydWUpIHtcbiAgICAgICAgLy9pbiBvcmRlciB0byB1c2UgdGhpcyBwcm9wZXJseSBJIG5lZWQgdG8gY2FsY3VsYXRlIHRoZSBzcGVlZCBhdCB3aGljaCB0aGUgY2FudmFzIGlzIHJ1bm5pbmcsIGNvbnZlcnQgaXQgdG8gbWlsaXNlY29uZHMgdGhlbiBkaXZpZGUgaXQgYnkgbXkgZGVzaXJlIGZyYW1lIHJhdGVcbiAgICAgICAgLy8gdGhlIHVuaXRzIG9mIHRpbWUgaGVyZSBhcmUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIC8vQ3JlYXRpbmcgYSAxNiBtcyBkZWxheSBvbiBwdXJwb3NlXG4gICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbChnYW1lbG9vcCwgMTAwMCAvIDYwKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlR2FtZUxvb3AodGltZVN0YW1wKSB7XG4gICAgLy9JIHRoaW5rIHRoYXQgd2hlbiB0aGUgZmlyc3QgdGltZSB0aGlzIGdldHMgZXhjdXRlZCB0aW1lc3RhbXAgZXF1YWxzIG9yaWdpbmFsbHkgemVyb1xuICAgIC8vSW4gb3JkZXIgbG9jayB0aGUgZnJhbWUgcmF0ZSwgd2hhdCB5b3UgbmVlZCBpcyB0byBtYWtlIGl0IHNvIHRoYXQgdGhlIGZyYW1lIHJhdGUgZXF1YWxzIHRoZSBzYW1lIGFtb3VudCBvZiBleGVjdXRpb25zIGluIGEgc2Vjb25kXG4gICAgc2Vjb25kc1Bhc3NlZCA9ICh0aW1lU3RhbXAgLSBvbGRUaW1lU3RhbXApIC8gMTAwMDtcbiAgICBvbGRUaW1lU3RhbXAgPSB0aW1lU3RhbXA7XG5cbiAgICAvL2NhbGN1bGF0ZSBmcHMgXG4gICAgZnBzID0gTWF0aC5yb3VuZCgxIC8gc2Vjb25kc1Bhc3NlZCk7XG5cbiAgICAvL0RyYXcgbnVtYmVyIHRvIHRoZSBzY3JlZW4gXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoOTMwLCAwLCAyMDAsIDEwMCk7XG4gICAgY29udGV4dC5mb250ID0gJzI1cHggQXJpYWwnO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KFwiRlBTOiBcIiArIGZwcywgOTMwLCAzMCk7XG59XG5cblxuZnVuY3Rpb24gZ2FtZWxvb3AodGltZVN0YW1wKSB7XG4gICAgLy9jYWxjdWxhdGVHYW1lTG9vcChwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgU2NlbmUwLlVwZGF0ZSgpO1xuICAgIFNjZW5lMC5SZW5kZXIoKTtcbiAgICBTY2VuZTAuQ2xlYXJTY2VuZSgpO1xuICAgIGlmIChpc3J1bm5pbmcgPT0gdHJ1ZSkge1xuICAgICAgICAvLyAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lbG9vcCk7XG4gICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbChnYW1lbG9vcCwgMTAwMCAvIDYwKTtcbiAgICB9XG4gICAgLypyZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSB3aWxsIGFjdHVhbGx5IHNldCB0aGUgZnJhbWUgcmF0ZSBvZiBteSBjYW52YXMgXG4gICAgdGhlcmUgaXMgbm8gbmVlZCB0byBhY3R1YWxseSBnZXQgdGhlIHN0ZXBzIG9mIG15IHdlYiBicm93c2VyIGFuZCB0aGVuIHVzZSB0aG9zZSBcbiAgICBzdGVwcyB0byBzaW11bGF0ZSBteSBnYW1lIGxvZ2ljLlxuICAgICAqL1xuXG59XG5cbmZ1bmN0aW9uIHJlZmFjdG9yQ1NTKCkge1xuICAgIGxldCBzdHlsZV90ZXh0ID0gXCJcXG5cIjtcblxuICAgIGxldCBzdHlsZV9lbGVtZW50cyA9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiU1RZTEVcIik7XG5cbiAgICBpZiAoc3R5bGVfZWxlbWVudHMubGVuZ3RoID09IDApXG4gICAgICAgIGFsZXJ0KFwiTm8gU3R5bGUgVGFnIVwiKTtcbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZV9lbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHN0eWxlX3RleHQgKz0gc3R5bGVfZWxlbWVudHNbaV0ub3V0ZXJIVE1MO1xuXG4gICAgICAgIHN0eWxlX3RleHQgPSBzdHlsZV90ZXh0LnRvU3RyaW5nKCkuXG4gICAgICAgICAgICByZXBsYWNlKC9cXHQvZywgJycpLnNwbGl0KCdcXHJcXG4nKTtcblxuICAgICAgICBhbGVydChzdHlsZV90ZXh0KTtcbiAgICAgICAgaW5qZWN0Q1NTSW50b0hUTUwoc3R5bGVfdGV4dCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmplY3RDU1NJbnRvSFRNTChzdHJpbmdfKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgc3RyaW5nXyk7XG59XG5cbmludGlhbGl6YXRpb24oKTtcblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1vdXNlQ29vcmRzLnBvcy54ID0gZS5jbGllbnRYO1xuICAgIG1vdXNlQ29vcmRzLnBvcy55ID0gZS5jbGllbnRZO1xuICAgIGNvbnNvbGUubG9nKFwiWCBhbmQgWSBwb3NpdGlvbiBvZiBNb3VzZSBjbGljazpcIiArIG1vdXNlQ29vcmRzLnBvcy54ICsgXCIsXCIgKyBtb3VzZUNvb3Jkcy5wb3MueSk7XG59KTtcblxuLyogeW91IGRvbid0IGV2ZW4gbmVlZCB0byBhZGQgdGhpcyovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLmtleSArIFwiOmJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==