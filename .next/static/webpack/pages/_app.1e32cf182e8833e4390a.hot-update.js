webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/components/Page.js\";\n\nfunction _templateObject() {\n  var data = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  html {\\n    --pink: #FF3CC7;\\n    --yellow: #F0F600;\\n    --violet: #4C1A57;\\n    --violet: var()\\n    --maxWidth: 1000px;\\n    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject());\nfunction Page(_ref) {\n  var children = _ref.children,\n      cool = _ref.cool;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: \"I am the page component\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n      children: cool\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n_c = Page;\nPage.propTypes = {\n  cool: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzPzE3NWMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJQYWdlIiwiY2hpbGRyZW4iLCJjb29sIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsMkVBQUgsbUJBQWxCO0FBV2UsU0FBU0MsSUFBVCxPQUFrQztBQUFBLE1BQWxCQyxRQUFrQixRQUFsQkEsUUFBa0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDL0Msc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxnQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJR0QsUUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEO0tBVHVCRCxJO0FBV3hCQSxJQUFJLENBQUNHLFNBQUwsR0FBaUI7QUFDZkQsTUFBSSxFQUFFRSxpREFBUyxDQUFDQztBQURELENBQWpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBodG1sIHtcbiAgICAtLXBpbms6ICNGRjNDQzc7XG4gICAgLS15ZWxsb3c6ICNGMEY2MDA7XG4gICAgLS12aW9sZXQ6ICM0QzFBNTc7XG4gICAgLS12aW9sZXQ6IHZhcigpXG4gICAgLS1tYXhXaWR0aDogMTAwMHB4O1xuICAgIC0tYnM6IDAgMTJweCAyNHB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuLCBjb29sIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGgyPkkgYW0gdGhlIHBhZ2UgY29tcG9uZW50PC9oMj5cbiAgICAgIDxoMz57Y29vbH08L2gzPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cblBhZ2UucHJvcFR5cGVzID0ge1xuICBjb29sOiBQcm9wVHlwZXMuc3RyaW5nLFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ })

})