webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ \"./components/Page.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/nprogress.css */ \"./components/styles/nprogress.css\");\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/withData */ \"./lib/withData.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n // TODO: swap with your own\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on(\"routeChangeStart\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on(\"routeChangeComplete\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on(\"routeChangeError\", function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      apollo = _ref.apollo;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_9__[\"ApolloProvider\"], {\n    client: apollo,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_lib_cartState__WEBPACK_IMPORTED_MODULE_11__[\"CartStateProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_Page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var Component, ctx, pageProps;\n    return _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Component = _ref2.Component, ctx = _ref2.ctx;\n            pageProps = {};\n\n            if (!Component.getInitialProps) {\n              _context.next = 6;\n              break;\n            }\n\n            _context.next = 5;\n            return Component.getInitialProps(ctx);\n\n          case 5:\n            pageProps = _context.sent;\n\n          case 6:\n            pageProps.query = ctx.query;\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_lib_withData__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(MyApp));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUM7QUFBQSxTQUFNQyxnREFBUyxDQUFDQyxLQUFWLEVBQU47QUFBQSxDQUFyQztBQUNBSixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFDQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDOztBQUVBLFNBQVNDLEtBQVQsT0FBaUQ7QUFBQSxNQUFoQ0MsU0FBZ0MsUUFBaENBLFNBQWdDO0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQyxzQkFDRSxxRUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVBLE1BQXhCO0FBQUEsMkJBQ0UscUVBQUMsaUVBQUQ7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFBLCtCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0tBVlFGLEs7O0FBWVRBLEtBQUssQ0FBQ0ksZUFBTjtBQUFBLGlYQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0JILHFCQUFsQixTQUFrQkEsU0FBbEIsRUFBNkJJLEdBQTdCLFNBQTZCQSxHQUE3QjtBQUNsQkgscUJBRGtCLEdBQ04sRUFETTs7QUFBQSxpQkFFbEJELFNBQVMsQ0FBQ0csZUFGUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdGSCxTQUFTLENBQUNHLGVBQVYsQ0FBMEJDLEdBQTFCLENBSEU7O0FBQUE7QUFHcEJILHFCQUhvQjs7QUFBQTtBQUt0QkEscUJBQVMsQ0FBQ0ksS0FBVixHQUFrQkQsR0FBRyxDQUFDQyxLQUF0QjtBQUxzQiw2Q0FNZjtBQUFFSix1QkFBUyxFQUFUQTtBQUFGLGFBTmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2UscUVBQUFLLDhEQUFRLENBQUNQLEtBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBUT0RPOiBzd2FwIHdpdGggeW91ciBvd25cbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gXCIuLi9saWIvd2l0aERhdGFcIjtcbmltcG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2xpYi9jYXJ0U3RhdGVcIjtcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgPENhcnRTdGF0ZVByb3ZpZGVyPlxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUGFnZT5cbiAgICAgIDwvQ2FydFN0YXRlUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICBsZXQgcGFnZVByb3BzID0ge307XG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICB9XG4gIHBhZ2VQcm9wcy5xdWVyeSA9IGN0eC5xdWVyeTtcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShNeUFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})