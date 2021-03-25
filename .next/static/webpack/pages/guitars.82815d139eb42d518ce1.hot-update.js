webpackHotUpdate_N_E("pages/guitars",{

/***/ "./components/DeleteGuitar.js":
/*!************************************!*\
  !*** ./components/DeleteGuitar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeleteGuitar; });\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/components/DeleteGuitar.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  mutation DELETE_GUITAR_MUTATION($id: ID!) {\\n    deleteGuitar(id: $id) {\\n      id\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar DELETE_GUITAR_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\n\nfunction update(cache, payload) {\n  cache.evict(cache.identify(payload));\n}\n\nfunction DeleteGuitar(_ref) {\n  _s();\n\n  var id = _ref.id,\n      children = _ref.children;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(DELETE_GUITAR_MUTATION, {\n    variables: {\n      id: id\n    },\n    update: update\n  }),\n      _useMutation2 = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      deleteGuitar = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n    type: \"button\",\n    disabled: loading,\n    onClick: function onClick() {\n      if (confirm(\"Are you sure you want to delete this guitar?\")) {\n        console.log(\"DELETE\");\n        deleteGuitar()[\"catch\"](function (err) {\n          return alert(err.message);\n        });\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DeleteGuitar, \"t1s3p77sTpkgOtvNmsvDLG3FrYQ=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c = DeleteGuitar;\n\nvar _c;\n\n$RefreshReg$(_c, \"DeleteGuitar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVHdWl0YXIuanM/ZjUyYyJdLCJuYW1lcyI6WyJERUxFVEVfR1VJVEFSX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiZXZpY3QiLCJpZGVudGlmeSIsIkRlbGV0ZUd1aXRhciIsImlkIiwiY2hpbGRyZW4iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImRlbGV0ZUd1aXRhciIsImxvYWRpbmciLCJlcnJvciIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0Msa0RBQUgsbUJBQTVCOztBQVNBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QkQsT0FBSyxDQUFDRSxLQUFOLENBQVlGLEtBQUssQ0FBQ0csUUFBTixDQUFlRixPQUFmLENBQVo7QUFDRDs7QUFFYyxTQUFTRyxZQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLEVBQWdCLFFBQWhCQSxFQUFnQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxxQkFDVkMsa0VBQVcsQ0FBQ1Ysc0JBQUQsRUFBeUI7QUFDN0VXLGFBQVMsRUFBRTtBQUNUSCxRQUFFLEVBQUZBO0FBRFMsS0FEa0U7QUFJN0VOLFVBQU0sRUFBTkE7QUFKNkUsR0FBekIsQ0FERDtBQUFBO0FBQUEsTUFDOUNVLFlBRDhDO0FBQUE7QUFBQSxNQUM5QkMsT0FEOEIsa0JBQzlCQSxPQUQ4QjtBQUFBLE1BQ3JCQyxLQURxQixrQkFDckJBLEtBRHFCOztBQVFyRCxzQkFDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsWUFBUSxFQUFFRCxPQUZaO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSUUsT0FBTyxDQUFDLDhDQUFELENBQVgsRUFBNkQ7QUFDM0RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUwsb0JBQVksV0FBWixDQUFxQixVQUFBTSxHQUFHO0FBQUEsaUJBQUlDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQVQ7QUFBQSxTQUF4QjtBQUNEO0FBQ0YsS0FSSDtBQUFBLGNBVUdYO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBdEJ1QkYsWTtVQUNxQkcsMEQ7OztLQURyQkgsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVsZXRlR3VpdGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmNvbnN0IERFTEVURV9HVUlUQVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIERFTEVURV9HVUlUQVJfTVVUQVRJT04oJGlkOiBJRCEpIHtcbiAgICBkZWxldGVHdWl0YXIoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xuICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlR3VpdGFyKHsgaWQsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2RlbGV0ZUd1aXRhciwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKERFTEVURV9HVUlUQVJfTVVUQVRJT04sIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gICAgdXBkYXRlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGd1aXRhcj9cIikpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRFTEVURVwiKTtcbiAgICAgICAgICBkZWxldGVHdWl0YXIoKS5jYXRjaChlcnIgPT4gYWxlcnQoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DeleteGuitar.js\n");

/***/ })

})