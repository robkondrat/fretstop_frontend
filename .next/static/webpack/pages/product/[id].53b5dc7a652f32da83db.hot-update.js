webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/SingleGuitar.js":
/*!************************************!*\
  !*** ./components/SingleGuitar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingleGuitar; });\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/components/SingleGuitar.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query {\\n    Guitar(where: { id: \\\"605bc9f0fb84278ed730b5aa\\\" }) {\\n      name\\n      price\\n      description\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar SINGLE_GUITAR_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nfunction SingleGuitar(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(SINGLE_GUITAR_QUERY),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Single Guitar\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SingleGuitar, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = SingleGuitar;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleGuitar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVHdWl0YXIuanM/MzAyZiJdLCJuYW1lcyI6WyJTSU5HTEVfR1VJVEFSX1FVRVJZIiwiZ3FsIiwiU2luZ2xlR3VpdGFyIiwiaWQiLCJ1c2VRdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0Msa0RBQUgsbUJBQXpCO0FBVWUsU0FBU0MsWUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxrQkFDVkMsK0RBQVEsQ0FBQ0osbUJBQUQsQ0FERTtBQUFBLE1BQ25DSyxJQURtQyxhQUNuQ0EsSUFEbUM7QUFBQSxNQUM3QkMsT0FENkIsYUFDN0JBLE9BRDZCO0FBQUEsTUFDcEJDLEtBRG9CLGFBQ3BCQSxLQURvQjs7QUFFM0MsTUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQ0Esb0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUdEOztHQVB1QkwsWTtVQUNXRSx1RDs7O0tBRFhGLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUd1aXRhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuXG5jb25zdCBTSU5HTEVfR1VJVEFSX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgR3VpdGFyKHdoZXJlOiB7IGlkOiBcIjYwNWJjOWYwZmI4NDI3OGVkNzMwYjVhYVwiIH0pIHtcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlR3VpdGFyKHsgaWQgfSkge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShTSU5HTEVfR1VJVEFSX1FVRVJZKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICBpZiAoZXJyb3IpXG4gIHJldHVybiAoXG4gICAgPHA+U2luZ2xlIEd1aXRhcjwvcD5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleGuitar.js\n");

/***/ })

})