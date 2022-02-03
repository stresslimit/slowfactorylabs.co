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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_js/index.js":
/*!**********************!*\
  !*** ./_js/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typewriter = __webpack_require__(/*! ./typewriter */ \"./_js/typewriter.js\");\n\nvar _typewriter2 = _interopRequireDefault(_typewriter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar words = ['Science & Design', 'Regenerative Aesthetics', 'Bio-Design', 'Waste-led Design', 'Regenerative Systems', 'Waste to Resource']; // import initFastclick from './fastclick.min'\n// import { init as mobile_menu, close_mobile_menu } from './mobile-menu'\n\n\nwindow.addEventListener('load', function (e) {\n\n  externalLinks();\n  // initFastclick()\n  // mobile_menu()\n  var f = document.getElementById('js-typewriter');\n  if (f) (0, _typewriter2.default)(shuffle(words), f);\n\n  function shuffle(array) {\n    return array.sort(function () {\n      return Math.random() - 0.5;\n    });\n  }\n});\n\nfunction externalLinks() {\n  var a = document.querySelectorAll('a');\n  a.forEach(function (el) {\n    if (el.host != window.location.host) el.target = \"_blank\";\n  });\n}\n\n//# sourceURL=webpack:///./_js/index.js?");

/***/ }),

/***/ "./_js/typewriter.js":
/*!***************************!*\
  !*** ./_js/typewriter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = function (sayings, element) {\n\n  init(element);\n\n  function init(j) {\n    if ((typeof j === 'undefined' ? 'undefined' : _typeof(j)) === 'object') j = 0; // first time only\n    var word_counter = j < sayings.length ? j : 0;\n    var text = sayings[word_counter];\n    var letter_counter = 0;\n    type(text, letter_counter, word_counter);\n  }\n\n  function type(text, letter_counter, word_counter) {\n    var new_text = text.substr(0, letter_counter);\n    var last_counter = text.length > letter_counter;\n    // attention global\n    element.innerHTML = '' + new_text + (last_counter ? '|' : '');\n    if (last_counter) setTimeout(type, 40, text, letter_counter + 1, word_counter);else setTimeout(init, 1200, word_counter + 1);\n  }\n};\n\n//# sourceURL=webpack:///./_js/typewriter.js?");

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** multi ./_js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/colin/Sites/slowfactorylabs.co/_js/index.js */\"./_js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./_js/index.js?");

/***/ })

/******/ });