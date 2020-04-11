/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reactBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactBoard.js */ \"./src/reactBoard.js\");\n // import Views from './views.js'\n\nvar reactBoard = new _reactBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nreactBoard.addSubmitForm();\nreactBoard.addReportButton();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reactBoard.js":
/*!***************************!*\
  !*** ./src/reactBoard.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReactBoard; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ReactBoard = function ReactBoard() {\n  _classCallCheck(this, ReactBoard);\n\n  _defineProperty(this, \"addSubmitForm\", function () {\n    var node = document.createElement('div');\n\n    var submitFormView = __webpack_require__(/*! ./views/submitForm.html */ \"./src/views/submitForm.html\");\n\n    node.setAttribute('class', 'ibgsdk-element instabug-window instabug-form');\n    node.setAttribute('id', 'instabugFormContainer');\n    node.setAttribute('style', 'display:none;');\n    node.innerHTML = submitFormView;\n    document.body.appendChild(node);\n  });\n\n  _defineProperty(this, \"addReportButton\", function () {\n    var node = document.createElement('div');\n    node.setAttribute('id', 'instabugSDK');\n    node.innerHTML = '<a id=\"initInstaBugLink\" onclick=\"ibgSdk.invoke()\"></a>';\n    document.body.appendChild(node);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/reactBoard.js?");

/***/ }),

/***/ "./src/views/submitForm.html":
/*!***********************************!*\
  !*** ./src/views/submitForm.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<form id=\\\"instabugForm\\\">\\n  <input\\n    id=\\\"email\\\"\\n    class=\\\"instabug-input\\\"\\n    type=\\\"text\\\"\\n    name=\\\"email\\\"\\n    placeholder=\\\"Email\\\"\\n    value=\\\"\\\" />\\n  <textarea\\n  id=\\\"comment\\\"\\n  class=\\\"instabug-input\\\"\\n  name=\\\"comment\\\"\\n  placeholder=\\\"What went wrong?\\\"\\n  rows=\\\"4\\\"\\n  cols=\\\"50\\\"></textarea>\\n\\n  <button\\n    type=\\\"button\\\"\\n    onclick=\\\"ibgSdk.submitReport()\\\">\\n    Submit Bug\\n  </button>\\n\\n  <button\\n    type=\\\"button\\\"\\n    onclick=\\\"ibgSdk.resetAndClose()\\\">\\n    Cancel\\n  </button>\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/views/submitForm.html?");

/***/ })

/******/ });