(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-pubsub-store"] = factory(require("react"));
	else
		root["react-pubsub-store"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wdWJzdWItc3RvcmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanM/M2M5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXB1YnN1Yi1zdG9yZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzk3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXB1YnN1Yi1zdG9yZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzViYzMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/createClass.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXB1YnN1Yi1zdG9yZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzPzM2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXB1YnN1Yi1zdG9yZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzP2VkNmQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/inherits.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcHVic3ViLXN0b3JlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcz82YjU4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXB1YnN1Yi1zdG9yZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzPzRhNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wdWJzdWItc3RvcmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanM/NzAzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/typeof.js\n");

/***/ }),

/***/ "./src/RPSComponent.js":
/*!*****************************!*\
  !*** ./src/RPSComponent.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _RPSStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RPSStore */ \"./src/RPSStore.js\");\n\n\n\n\n\n\n\n\nvar RPSComponent =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RPSComponent, _React$Component);\n\n  function RPSComponent(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RPSComponent);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RPSComponent).call(this, props));\n    _this._stores = [];\n    _this._instanciatedStores = [];\n    _this.storeCount = 0;\n    _this.storeInitializedCount = 0;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RPSComponent, [{\n    key: \"setStores\",\n    value: function setStores(stores) {\n      this._stores = stores;\n    }\n  }, {\n    key: \"setInitialLoadingContent\",\n    value: function setInitialLoadingContent(content) {\n      this._initialLoadingContent = content;\n      this._showInitialLoadingContent = true;\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      this.storeCount = this._stores.length;\n      this.storeInitializedCount = 0;\n\n      for (var i in this._stores) {\n        var storeInstance = void 0;\n\n        if (Array.isArray(this._stores[i])) {\n          // parameter of path\n          storeInstance = new this._stores[i][0](this._stores[i][1]);\n        } else {\n          storeInstance = new this._stores[i]();\n        }\n\n        if (storeInstance instanceof _RPSStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"]) {\n          storeInstance.setClientListener(function (stateKey, data) {\n            var state = {};\n            state[stateKey] = data;\n            _this2.storeInitializedCount++;\n\n            _this2.setState(state);\n          });\n\n          this._instanciatedStores.push(storeInstance);\n        }\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      for (var storeInstance in this._instanciatedStores) {\n        this._instanciatedStores[storeInstance].remove();\n      }\n    }\n  }]);\n\n  return RPSComponent;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RPSComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUlBTQ29tcG9uZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcHVic3ViLXN0b3JlLy4vc3JjL1JQU0NvbXBvbmVudC5qcz9mODNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUlBTU3RvcmUgZnJvbSAnLi9SUFNTdG9yZSc7XG5cbmNsYXNzIFJQU0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuX3N0b3JlcyA9IFtdO1xuICAgICAgICB0aGlzLl9pbnN0YW5jaWF0ZWRTdG9yZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdG9yZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zdG9yZUluaXRpYWxpemVkQ291bnQgPSAwO1xuICAgIH1cblxuICAgIHNldFN0b3JlcyhzdG9yZXMpIHtcbiAgICAgICAgdGhpcy5fc3RvcmVzID0gc3RvcmVzO1xuICAgIH1cbiAgICBcbiAgICBzZXRJbml0aWFsTG9hZGluZ0NvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLl9pbml0aWFsTG9hZGluZ0NvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLl9zaG93SW5pdGlhbExvYWRpbmdDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVDb3VudCA9IHRoaXMuX3N0b3Jlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc3RvcmVJbml0aWFsaXplZENvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLl9zdG9yZXMpIHtcbiAgICAgICAgICAgIGxldCBzdG9yZUluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fc3RvcmVzW2ldKSkgeyAvLyBwYXJhbWV0ZXIgb2YgcGF0aFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdGFuY2UgPSBuZXcgdGhpcy5fc3RvcmVzW2ldWzBdKHRoaXMuX3N0b3Jlc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlSW5zdGFuY2UgPSBuZXcgdGhpcy5fc3RvcmVzW2ldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RvcmVJbnN0YW5jZSBpbnN0YW5jZW9mIFJQU1N0b3JlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0YW5jZS5zZXRDbGllbnRMaXN0ZW5lcigoc3RhdGVLZXksIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXRlID0ge307XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW3N0YXRlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVJbml0aWFsaXplZENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNpYXRlZFN0b3Jlcy5wdXNoKHN0b3JlSW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGZvciAobGV0IHN0b3JlSW5zdGFuY2UgaW4gdGhpcy5faW5zdGFuY2lhdGVkU3RvcmVzKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jaWF0ZWRTdG9yZXNbc3RvcmVJbnN0YW5jZV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJQU0NvbXBvbmVudDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTdDQTtBQUNBO0FBK0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/RPSComponent.js\n");

/***/ }),

/***/ "./src/RPSStore.js":
/*!*************************!*\
  !*** ./src/RPSStore.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReactPubSubStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReactPubSubStore */ \"./src/ReactPubSubStore.js\");\n\n\n\n\nvar RPSStore =\n/*#__PURE__*/\nfunction () {\n  function RPSStore(path, stateKey) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RPSStore);\n\n    this.data = null;\n    this.path = path;\n    this.doUpdate = false;\n    this.stateKey = stateKey;\n\n    this.clientListener = function () {};\n\n    this.subscription = null;\n\n    this._subscribe();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RPSStore, [{\n    key: \"setClientListener\",\n    value: function setClientListener(listener) {\n      this.clientListener = listener;\n      if (this.data !== null) listener(this.stateKey, this.data);\n    }\n  }, {\n    key: \"_subscribe\",\n    value: function _subscribe() {\n      var _this = this;\n\n      this.subscription = _ReactPubSubStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe(this.path, function (response) {\n        _this.data = response;\n\n        _this._updateClients();\n      }, this.doUpdate);\n    }\n  }, {\n    key: \"_updateClients\",\n    value: function _updateClients() {\n      this.clientListener(this.stateKey, this.data);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      if (this.subscription !== null) {\n        this.subscription.remove();\n      }\n    }\n  }]);\n\n  return RPSStore;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RPSStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUlBTU3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wdWJzdWItc3RvcmUvLi9zcmMvUlBTU3RvcmUuanM/NmZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RQdWJTdWJTdG9yZSBmcm9tICcuL1JlYWN0UHViU3ViU3RvcmUnO1xuXG5jbGFzcyBSUFNTdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBzdGF0ZUtleSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGVLZXkgPSBzdGF0ZUtleTtcbiAgICAgICAgdGhpcy5jbGllbnRMaXN0ZW5lciA9ICgpID0+IHt9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNldENsaWVudExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuY2xpZW50TGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPT0gbnVsbClcbiAgICAgICAgICAgIGxpc3RlbmVyKHRoaXMuc3RhdGVLZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgX3N1YnNjcmliZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBSZWFjdFB1YlN1YlN0b3JlLnN1YnNjcmliZSh0aGlzLnBhdGgsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDbGllbnRzKCk7XG4gICAgICAgIH0sIHRoaXMuZG9VcGRhdGUpO1xuICAgIH1cblxuICAgIF91cGRhdGVDbGllbnRzKCkge1xuICAgICAgICB0aGlzLmNsaWVudExpc3RlbmVyKHRoaXMuc3RhdGVLZXksIHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJQU1N0b3JlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/RPSStore.js\n");

/***/ }),

/***/ "./src/ReactPubSubStore.js":
/*!*********************************!*\
  !*** ./src/ReactPubSubStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ReactPubSubStore = {};\nReactPubSubStore._dao = null;\nReactPubSubStore._topics = {};\nReactPubSubStore._topicsOptions = {};\nReactPubSubStore._topicsData = {};\nReactPubSubStore._hOP = ReactPubSubStore._topics.hasOwnProperty;\n\nReactPubSubStore._updateTopicData = function (topic, append) {\n  var url = topic;\n\n  if (ReactPubSubStore._topicsOptions[topic] !== undefined && ReactPubSubStore._topicsOptions[topic].urlBuilder !== undefined && typeof ReactPubSubStore._topicsOptions[topic].urlBuilder === \"function\") {\n    url = ReactPubSubStore._topicsOptions[topic].urlBuilder(topic, ReactPubSubStore._topicsOptions[topic]);\n  }\n\n  ReactPubSubStore._dao.fetchResource(url, function (response) {\n    if (append) {\n      if (response !== undefined && response.constructor === Array) ReactPubSubStore._topicsData[topic] = ReactPubSubStore._topicsData[topic].concat(response);\n    } else {\n      ReactPubSubStore._topicsData[topic] = response;\n    }\n\n    ReactPubSubStore._topics[topic].forEach(function (item) {\n      item(ReactPubSubStore._topicsData[topic] !== undefined ? ReactPubSubStore._topicsData[topic] : {});\n    });\n  });\n};\n\nReactPubSubStore.setDAO = function (dao) {\n  ReactPubSubStore._dao = dao;\n};\n\nReactPubSubStore.createStore = function (topic, urlBuilder) {\n  ReactPubSubStore._topicsOptions[topic] = {};\n\n  if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {\n    if (urlBuilder !== undefined) ReactPubSubStore._topicsOptions[topic].urlBuilder = urlBuilder;\n    ReactPubSubStore._topics[topic] = [];\n\n    ReactPubSubStore._updateTopicData(topic);\n  }\n};\n\nReactPubSubStore.deleteStore = function (topic) {\n  if (ReactPubSubStore._topics[topic] !== undefined) {\n    delete ReactPubSubStore._topics[topic];\n  }\n};\n\nReactPubSubStore.subscribe = function (topic, listener, update) {\n  var justCreated = false;\n\n  if (update === undefined) {\n    update = false;\n  } // Create the topic's object if not yet created\n\n\n  if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {\n    ReactPubSubStore._topics[topic] = [];\n    justCreated = true;\n  } // Add the listener to queue\n\n\n  var index = ReactPubSubStore._topics[topic].push(listener) - 1;\n\n  if (justCreated || update) {\n    ReactPubSubStore._updateTopicData(topic);\n  } else {\n    listener(ReactPubSubStore._topicsData[topic]);\n  } // Provide handle back for removal of topic\n\n\n  return {\n    remove: function remove() {\n      if (ReactPubSubStore._topics[topic] !== undefined) delete ReactPubSubStore._topics[topic][index];\n    }\n  };\n};\n\nReactPubSubStore.update = function (topic, append, cb) {\n  if (append === undefined) {\n    append = false;\n  }\n\n  if (!ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {\n    if (cb !== undefined) cb(false);\n    return;\n  }\n\n  ReactPubSubStore._updateTopicData(topic, append);\n\n  if (cb !== undefined) cb(true);\n};\n\nReactPubSubStore.publish = function (topic, data, method, cb) {\n  if (method === undefined) {\n    method = \"POST\";\n  }\n\n  if (ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic) || cb !== undefined) {\n    ReactPubSubStore._dao.setResource(topic, data, function (response) {\n      if (ReactPubSubStore._hOP.call(ReactPubSubStore._topics, topic)) {\n        ReactPubSubStore._topicsData[topic] = response;\n\n        ReactPubSubStore._topics[topic].forEach(function (item) {\n          item(response !== undefined ? response : {});\n        });\n      }\n\n      if (cb !== undefined) {\n        cb(response !== undefined ? response : {});\n      }\n    }, method);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactPubSubStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUmVhY3RQdWJTdWJTdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXB1YnN1Yi1zdG9yZS8uL3NyYy9SZWFjdFB1YlN1YlN0b3JlLmpzP2ZjZTMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IFJlYWN0UHViU3ViU3RvcmUgPSB7fTtcblJlYWN0UHViU3ViU3RvcmUuX2RhbyA9IG51bGw7XG5SZWFjdFB1YlN1YlN0b3JlLl90b3BpY3MgPSB7fTtcblJlYWN0UHViU3ViU3RvcmUuX3RvcGljc09wdGlvbnMgPSB7fTtcblJlYWN0UHViU3ViU3RvcmUuX3RvcGljc0RhdGEgPSB7fTtcblJlYWN0UHViU3ViU3RvcmUuX2hPUCA9IFJlYWN0UHViU3ViU3RvcmUuX3RvcGljcy5oYXNPd25Qcm9wZXJ0eTtcblxuXG5SZWFjdFB1YlN1YlN0b3JlLl91cGRhdGVUb3BpY0RhdGEgPSBmdW5jdGlvbiAodG9waWMsIGFwcGVuZCkge1xuICAgIGxldCB1cmwgPSB0b3BpYztcbiAgICBpZiAoUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzT3B0aW9uc1t0b3BpY10gIT09IHVuZGVmaW5lZCAmJiBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NPcHRpb25zW3RvcGljXS51cmxCdWlsZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc09wdGlvbnNbdG9waWNdLnVybEJ1aWxkZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB1cmwgPSBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NPcHRpb25zW3RvcGljXS51cmxCdWlsZGVyKHRvcGljLCBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NPcHRpb25zW3RvcGljXSk7XG4gICAgfVxuICAgIFJlYWN0UHViU3ViU3RvcmUuX2Rhby5mZXRjaFJlc291cmNlKHVybCwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLmNvbnN0cnVjdG9yID09PSBBcnJheSlcbiAgICAgICAgICAgICAgICBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NEYXRhW3RvcGljXSA9IFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc0RhdGFbdG9waWNdLmNvbmNhdChyZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NEYXRhW3RvcGljXSA9IHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbShSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NEYXRhW3RvcGljXSAhPT0gdW5kZWZpbmVkID8gUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzRGF0YVt0b3BpY10gOiB7fSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuUmVhY3RQdWJTdWJTdG9yZS5zZXREQU8gPSBmdW5jdGlvbiAoZGFvKSB7XG4gICAgUmVhY3RQdWJTdWJTdG9yZS5fZGFvID0gZGFvO1xufTtcblxuUmVhY3RQdWJTdWJTdG9yZS5jcmVhdGVTdG9yZSA9IGZ1bmN0aW9uICh0b3BpYywgdXJsQnVpbGRlcikge1xuICAgIFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc09wdGlvbnNbdG9waWNdID0ge307XG4gICAgaWYgKCFSZWFjdFB1YlN1YlN0b3JlLl9oT1AuY2FsbChSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3MsIHRvcGljKSkge1xuICAgICAgICBpZiAodXJsQnVpbGRlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzT3B0aW9uc1t0b3BpY10udXJsQnVpbGRlciA9IHVybEJ1aWxkZXI7XG4gICAgICAgIFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc1t0b3BpY10gPSBbXTtcbiAgICAgICAgUmVhY3RQdWJTdWJTdG9yZS5fdXBkYXRlVG9waWNEYXRhKHRvcGljKTtcbiAgICB9XG59O1xuXG5SZWFjdFB1YlN1YlN0b3JlLmRlbGV0ZVN0b3JlID0gZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgaWYgKFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc1t0b3BpY10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzW3RvcGljXTtcbiAgICB9XG59O1xuXG5SZWFjdFB1YlN1YlN0b3JlLnN1YnNjcmliZSA9IGZ1bmN0aW9uICh0b3BpYywgbGlzdGVuZXIsIHVwZGF0ZSkge1xuICAgIGxldCBqdXN0Q3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHVwZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgdG9waWMncyBvYmplY3QgaWYgbm90IHlldCBjcmVhdGVkXG4gICAgaWYgKCFSZWFjdFB1YlN1YlN0b3JlLl9oT1AuY2FsbChSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3MsIHRvcGljKSkge1xuICAgICAgICBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NbdG9waWNdID0gW107XG4gICAgICAgIGp1c3RDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHF1ZXVlXG4gICAgbGV0IGluZGV4ID0gUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzW3RvcGljXS5wdXNoKGxpc3RlbmVyKSAtIDE7XG5cbiAgICBpZiAoanVzdENyZWF0ZWQgfHwgdXBkYXRlKSB7XG4gICAgICAgIFJlYWN0UHViU3ViU3RvcmUuX3VwZGF0ZVRvcGljRGF0YSh0b3BpYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXIoUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzRGF0YVt0b3BpY10pO1xuICAgIH1cblxuICAgIC8vIFByb3ZpZGUgaGFuZGxlIGJhY2sgZm9yIHJlbW92YWwgb2YgdG9waWNcbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NbdG9waWNdICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc1t0b3BpY11baW5kZXhdO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cblJlYWN0UHViU3ViU3RvcmUudXBkYXRlID0gZnVuY3Rpb24gKHRvcGljLCBhcHBlbmQsIGNiKSB7XG4gICAgaWYgKGFwcGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFwcGVuZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIVJlYWN0UHViU3ViU3RvcmUuX2hPUC5jYWxsKFJlYWN0UHViU3ViU3RvcmUuX3RvcGljcywgdG9waWMpKSB7XG4gICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgY2IoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFJlYWN0UHViU3ViU3RvcmUuX3VwZGF0ZVRvcGljRGF0YSh0b3BpYywgYXBwZW5kKTtcbiAgICBpZiAoY2IgIT09IHVuZGVmaW5lZClcbiAgICAgICAgY2IodHJ1ZSk7XG59O1xuXG5SZWFjdFB1YlN1YlN0b3JlLnB1Ymxpc2ggPSBmdW5jdGlvbiAodG9waWMsIGRhdGEsIG1ldGhvZCwgY2IpIHtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWV0aG9kID0gXCJQT1NUXCI7XG4gICAgfVxuICAgIGlmIChSZWFjdFB1YlN1YlN0b3JlLl9oT1AuY2FsbChSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3MsIHRvcGljKSB8fCBjYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFJlYWN0UHViU3ViU3RvcmUuX2Rhby5zZXRSZXNvdXJjZSh0b3BpYywgZGF0YSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoUmVhY3RQdWJTdWJTdG9yZS5faE9QLmNhbGwoUmVhY3RQdWJTdWJTdG9yZS5fdG9waWNzLCB0b3BpYykpIHtcbiAgICAgICAgICAgICAgICBSZWFjdFB1YlN1YlN0b3JlLl90b3BpY3NEYXRhW3RvcGljXSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIFJlYWN0UHViU3ViU3RvcmUuX3RvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtKHJlc3BvbnNlICE9PSB1bmRlZmluZWQgPyByZXNwb25zZSA6IHt9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2IocmVzcG9uc2UgIT09IHVuZGVmaW5lZCA/IHJlc3BvbnNlIDoge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBtZXRob2QpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UHViU3ViU3RvcmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ReactPubSubStore.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: RPSStore, RPSComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReactPubSubStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactPubSubStore */ \"./src/ReactPubSubStore.js\");\n/* harmony import */ var _RPSStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RPSStore */ \"./src/RPSStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RPSStore\", function() { return _RPSStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _RPSComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RPSComponent */ \"./src/RPSComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RPSComponent\", function() { return _RPSComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ReactPubSubStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wdWJzdWItc3RvcmUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RQdWJTdWJTdG9yZSBmcm9tICcuL1JlYWN0UHViU3ViU3RvcmUnO1xuaW1wb3J0IFJQU1N0b3JlIGZyb20gJy4vUlBTU3RvcmUnO1xuaW1wb3J0IFJQU0NvbXBvbmVudCBmcm9tICcuL1JQU0NvbXBvbmVudCc7XG5cbmV4cG9ydCB7UlBTU3RvcmUsIFJQU0NvbXBvbmVudH07XG5leHBvcnQgZGVmYXVsdCBSZWFjdFB1YlN1YlN0b3JlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wdWJzdWItc3RvcmUvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifT8yNDZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});