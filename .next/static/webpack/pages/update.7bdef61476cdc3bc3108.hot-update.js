webpackHotUpdate_N_E("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  // create a state object for our inputs\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  useEffect;\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === \"number\") {\n      value = parseInt(value);\n    }\n\n    if (type === \"file\") {\n      var _e$target$files = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  }\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, \"\"];\n    }));\n    setInputs(blankState);\n  } //return the things we want to surface from this custom hook\n\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM1QztBQUQ0QyxrQkFFaEJDLHNEQUFRLENBQUNELE9BQUQsQ0FGUTtBQUFBLE1BRXJDRSxNQUZxQztBQUFBLE1BRTdCQyxTQUY2Qjs7QUFJNUNDLFdBQVM7O0FBRVQsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDS0EsQ0FBQyxDQUFDQyxNQURQO0FBQUEsUUFDakJDLEtBRGlCLGFBQ2pCQSxLQURpQjtBQUFBLFFBQ1ZDLElBRFUsYUFDVkEsSUFEVTtBQUFBLFFBQ0pDLElBREksYUFDSkEsSUFESTs7QUFFdkIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFBQSw4TUFDVEosQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBREE7O0FBQ2xCSixXQURrQjtBQUVwQjs7QUFDREwsYUFBUyxpQ0FFSkQsTUFGSSw4TEFHTk8sSUFITSxFQUdDRCxLQUhELEdBQVQ7QUFLRDs7QUFFRCxXQUFTSyxTQUFULEdBQXFCO0FBQ25CVixhQUFTLENBQUNILE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNjLFNBQVQsR0FBcUI7QUFDbkIsUUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FDakJELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlaEIsTUFBZixFQUF1QmlCLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1osS0FBUDs7QUFBQSxhQUFrQixDQUFDWSxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGlCLENBQW5CO0FBR0FqQixhQUFTLENBQUNZLFVBQUQsQ0FBVDtBQUNELEdBOUIyQyxDQWdDNUM7OztBQUNBLFNBQU87QUFDTGIsVUFBTSxFQUFOQSxNQURLO0FBRUxHLGdCQUFZLEVBQVpBLFlBRks7QUFHTFEsYUFBUyxFQUFUQSxTQUhLO0FBSUxDLGFBQVMsRUFBVEE7QUFKSyxHQUFQO0FBTUQ7O0dBdkN1QmYsTyIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcbiAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRzXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcblxuICB1c2VFZmZlY3RcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcImZpbGVcIikge1xuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLy8gY29weSB0aGUgZXhpc3RpbmcgcGllY2Ugb2Ygc3RhdGVcbiAgICAgIC4uLmlucHV0cyxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBcIlwiXSlcbiAgICApO1xuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgfVxuXG4gIC8vcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCB0byBzdXJmYWNlIGZyb20gdGhpcyBjdXN0b20gaG9va1xuICByZXR1cm4ge1xuICAgIGlucHV0cyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgcmVzZXRGb3JtLFxuICAgIGNsZWFyRm9ybVxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

})