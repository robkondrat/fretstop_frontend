webpackHotUpdate_N_E("pages/guitars",{

/***/ "./components/Guitar.js":
/*!******************************!*\
  !*** ./components/Guitar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Guitar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _DeleteGuitar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteGuitar */ \"./components/DeleteGuitar.js\");\n/* harmony import */ var graphql_validation_rules_ProvidedRequiredArgumentsRule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql/validation/rules/ProvidedRequiredArgumentsRule */ \"./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs\");\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/components/Guitar.js\";\n\n\n\n\n\n\n\nfunction Guitar(_ref) {\n  var _guitar$photo;\n\n  var guitar = _ref.guitar;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: guitar === null || guitar === void 0 ? void 0 : (_guitar$photo = guitar.photo) === null || _guitar$photo === void 0 ? void 0 : _guitar$photo.image.publicUrlTransformed,\n      alt: guitar.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/guitar/\".concat(guitar.id),\n        children: guitar.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(guitar.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: guitar.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"buttonList\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: {\n          pathname: \"update\",\n          query: {\n            id: guitar.id\n          }\n        },\n        children: \"Edit \\u270F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_DeleteGuitar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: graphql_validation_rules_ProvidedRequiredArgumentsRule__WEBPACK_IMPORTED_MODULE_7__[\"ProvidedRequiredArgumentsOnDirectivesRule\"].id,\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n_c = Guitar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Guitar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HdWl0YXIuanM/NmU2NCJdLCJuYW1lcyI6WyJHdWl0YXIiLCJndWl0YXIiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiaWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJwYXRobmFtZSIsInF1ZXJ5IiwiUHJvdmlkZWRSZXF1aXJlZEFyZ3VtZW50c09uRGlyZWN0aXZlc1J1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3pDLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVBLE1BQUYsYUFBRUEsTUFBRix3Q0FBRUEsTUFBTSxDQUFFQyxLQUFWLGtEQUFFLGNBQWVDLEtBQWYsQ0FBcUJDLG9CQUEvQjtBQUFxRCxTQUFHLEVBQUVILE1BQU0sQ0FBQ0k7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMscURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksb0JBQWFKLE1BQU0sQ0FBQ0ssRUFBcEIsQ0FBVjtBQUFBLGtCQUFxQ0wsTUFBTSxDQUFDSTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBS0UscUVBQUMsd0RBQUQ7QUFBQSxnQkFBV0UsZ0VBQVcsQ0FBQ04sTUFBTSxDQUFDTyxLQUFSO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsZ0JBQUlQLE1BQU0sQ0FBQ1E7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFDSkMsa0JBQVEsRUFBRSxRQUROO0FBRUpDLGVBQUssRUFBRTtBQUNMTCxjQUFFLEVBQUVMLE1BQU0sQ0FBQ0s7QUFETjtBQUZILFNBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFLHFFQUFDLHFEQUFEO0FBQWMsVUFBRSxFQUFFTSxnSUFBeUMsQ0FBQ04sRUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDtLQXhCdUJOLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0d1aXRhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJdGVtU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9JdGVtU3R5bGVzXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vc3R5bGVzL1RpdGxlXCI7XG5pbXBvcnQgUHJpY2VUYWcgZnJvbSBcIi4vc3R5bGVzL1ByaWNlVGFnXCI7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xuaW1wb3J0IERlbGV0ZUd1aXRhciBmcm9tIFwiLi9EZWxldGVHdWl0YXJcIjtcbmltcG9ydCB7IFByb3ZpZGVkUmVxdWlyZWRBcmd1bWVudHNPbkRpcmVjdGl2ZXNSdWxlIH0gZnJvbSBcImdyYXBocWwvdmFsaWRhdGlvbi9ydWxlcy9Qcm92aWRlZFJlcXVpcmVkQXJndW1lbnRzUnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHdWl0YXIoeyBndWl0YXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxJdGVtU3R5bGVzPlxuICAgICAgPGltZyBzcmM9e2d1aXRhcj8ucGhvdG8/LmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e2d1aXRhci5uYW1lfSAvPlxuICAgICAgPFRpdGxlPlxuICAgICAgICA8TGluayBocmVmPXtgL2d1aXRhci8ke2d1aXRhci5pZH1gfT57Z3VpdGFyLm5hbWV9PC9MaW5rPlxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxQcmljZVRhZz57Zm9ybWF0TW9uZXkoZ3VpdGFyLnByaWNlKX08L1ByaWNlVGFnPlxuICAgICAgPHA+e2d1aXRhci5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGlkOiBndWl0YXIuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBFZGl0IOKcj1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxEZWxldGVHdWl0YXIgaWQ9e1Byb3ZpZGVkUmVxdWlyZWRBcmd1bWVudHNPbkRpcmVjdGl2ZXNSdWxlLmlkfT5EZWxldGU8L0RlbGV0ZUd1aXRhcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvSXRlbVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Guitar.js\n");

/***/ })

})