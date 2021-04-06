webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Checkout\", function() { return Checkout; });\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql */ \"./node_modules/graphql/index.mjs\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/components/Checkout.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation CREATE_ORDER_MUTATION($token: String!) {\\n    checkout(token: $token) {\\n      id\\n      charge\\n      total\\n      items {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].form.withConfig({\n  displayName: \"Checkout__CheckoutFormStyles\",\n  componentId: \"sc-10mtoy5-0\"\n})([\"box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);background:var(--lightBlue);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;\"]);\n_c = CheckoutFormStyles;\nvar CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());\nvar stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"loadStripe\"])(\"pk_test_51IT87dCrHy1ngX3AuwNzqGUTteU1bZwWxWo5cX43b1yGplgUSVaiEckaGNPPlWsfPFx3ry7zI85cwDvFyWsw3S8h00W7GP4Q4q\");\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useElements\"])();\n\n  var _handleSubmit = /*#__PURE__*/function () {\n    var _handleSubmit3 = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var _yield$stripe$createP, error, paymentMethod;\n\n      return _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // 1. stop form from submitting and turn loader on\n              e.preventDefault();\n              setLoading(true); // 2. start page transition\n\n              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start(); // 3. create payment method via stripe (token comes back here if successful)\n\n              _context.next = 5;\n              return stripe.createPaymentMethod({\n                type: \"card\",\n                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"CardElement\"])\n              });\n\n            case 5:\n              _yield$stripe$createP = _context.sent;\n              error = _yield$stripe$createP.error;\n              paymentMethod = _yield$stripe$createP.paymentMethod;\n              console.log(paymentMethod); // 4. handle any errors from stripe\n\n              if (error) {\n                setError(error);\n              } // 5. send token to keystone server via a custom mutation\n              // 6. change the page to view the order\n              // 7. close the cart\n              // 8. turn the loader off\n\n\n              setLoading(false);\n              nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function handleSubmit(_x) {\n      return _handleSubmit3.apply(this, arguments);\n    }\n\n    return handleSubmit;\n  }(),\n      _handleSubmit2 = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_handleSubmit, 2),\n      checkout = _handleSubmit2[0],\n      GraphQLError = _handleSubmit2[1].error;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CheckoutFormStyles, {\n    onSubmit: handleSubmit,\n    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n      style: ({\n        fontSize: 20\n      }, {\n        color: \"red\"\n      }),\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"CardElement\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      children: \"Check Out Now\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CheckoutForm, \"/GTcQkkNlUgykvoAY6A4l3RHUP4=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useElements\"]];\n});\n\n_c2 = CheckoutForm;\n\nfunction Checkout() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"Elements\"], {\n    stripe: stripeLib,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CheckoutForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Checkout;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n$RefreshReg$(_c3, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsImZvcm0iLCJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5Qcm9ncmVzcyIsInN0YXJ0IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJkb25lIiwiaGFuZGxlU3VibWl0IiwiY2hlY2tvdXQiLCJHcmFwaFFMRXJyb3IiLCJmb250U2l6ZSIsImNvbG9yIiwibWVzc2FnZSIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQywwREFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDBLQUF4QjtLQUFNRixrQjtBQVlOLElBQU1HLHFCQUFxQixHQUFHQyxrREFBSCxtQkFBM0I7QUFjQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLDZHQUFELENBQTVCOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDSUMsdURBQVEsRUFEWjtBQUFBLE1BQ2ZDLEtBRGU7QUFBQSxNQUNSQyxRQURROztBQUFBLG1CQUVRRix1REFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVmRyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFHdEIsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsMkVBQVcsRUFBNUI7O0FBSnNCO0FBQUEsNFhBT3RCLGlCQUE0QkMsQ0FBNUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ0FBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBTix3QkFBVSxDQUFDLElBQUQsQ0FBVixDQUhGLENBSUU7O0FBQ0FPLDhEQUFTLENBQUNDLEtBQVYsR0FMRixDQU1FOztBQU5GO0FBQUEscUJBT3lDUCxNQUFNLENBQUNRLG1CQUFQLENBQTJCO0FBQ2hFQyxvQkFBSSxFQUFFLE1BRDBEO0FBRWhFQyxvQkFBSSxFQUFFUixRQUFRLENBQUNTLFVBQVQsQ0FBb0JDLG1FQUFwQjtBQUYwRCxlQUEzQixDQVB6Qzs7QUFBQTtBQUFBO0FBT1VoQixtQkFQVix5QkFPVUEsS0FQVjtBQU9pQmlCLDJCQVBqQix5QkFPaUJBLGFBUGpCO0FBV0VDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWixFQVhGLENBWUU7O0FBQ0Esa0JBQUlqQixLQUFKLEVBQVc7QUFDVEMsd0JBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0QsZUFmSCxDQWdCRTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FHLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FPLDhEQUFTLENBQUNVLElBQVY7O0FBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUHNCOztBQUFBLGFBT1BDLFlBUE87QUFBQTtBQUFBOztBQUFBLFdBT1BBLFlBUE87QUFBQTtBQUFBO0FBQUEsTUFLZkMsUUFMZTtBQUFBLE1BS0dDLFlBTEgscUJBS0p2QixLQUxJOztBQThCdEIsc0JBQ0UscUVBQUMsa0JBQUQ7QUFBb0IsWUFBUSxFQUFFcUIsWUFBOUI7QUFBQSxlQUNHckIsS0FBSyxpQkFDSjtBQUFHLFdBQUssR0FBRztBQUFFd0IsZ0JBQVEsRUFBRTtBQUFaLFNBQWtCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCLENBQVI7QUFBQSxnQkFBaUR6QixLQUFLLENBQUMwQjtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFJRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBdkNRNUIsWTtVQUdRTyxpRSxFQUNFRSxtRTs7O01BSlZULFk7O0FBeUNULFNBQVM2QixRQUFULEdBQW9CO0FBQ2xCLHNCQUNFLHFFQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFaEMsU0FBbEI7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFOUWdDLFE7QUFRVCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hlY2tvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYXJkRWxlbWVudCxcbiAgRWxlbWVudHMsXG4gIHVzZUVsZW1lbnRzLFxuICB1c2VTdHJpcGUsXG59IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSBcIi4vc3R5bGVzL1NpY2tCdXR0b25cIjtcblxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tb2ZmV2hpdGUpOyAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEJsdWUpO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDFyZW07XG5gO1xuXG5jb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENSRUFURV9PUkRFUl9NVVRBVElPTigkdG9rZW46IFN0cmluZyEpIHtcbiAgICBjaGVja291dCh0b2tlbjogJHRva2VuKSB7XG4gICAgICBpZFxuICAgICAgY2hhcmdlXG4gICAgICB0b3RhbFxuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xuXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuICBjb25zdCBbY2hlY2tvdXQsIHtlcnJvcjogR3JhcGhRTEVycm9yfV0gPSBcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIC8vIDEuIHN0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gbG9hZGVyIG9uXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgLy8gMi4gc3RhcnQgcGFnZSB0cmFuc2l0aW9uXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XG4gICAgLy8gMy4gY3JlYXRlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKHRva2VuIGNvbWVzIGJhY2sgaGVyZSBpZiBzdWNjZXNzZnVsKVxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAgIHR5cGU6IFwiY2FyZFwiLFxuICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocGF5bWVudE1ldGhvZCk7XG4gICAgLy8gNC4gaGFuZGxlIGFueSBlcnJvcnMgZnJvbSBzdHJpcGVcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgLy8gNS4gc2VuZCB0b2tlbiB0byBrZXlzdG9uZSBzZXJ2ZXIgdmlhIGEgY3VzdG9tIG11dGF0aW9uXG4gICAgLy8gNi4gY2hhbmdlIHRoZSBwYWdlIHRvIHZpZXcgdGhlIG9yZGVyXG4gICAgLy8gNy4gY2xvc2UgdGhlIGNhcnRcbiAgICAvLyA4LiB0dXJuIHRoZSBsb2FkZXIgb2ZmXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgblByb2dyZXNzLmRvbmUoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8cCBzdHlsZT17KHsgZm9udFNpemU6IDIwIH0sIHsgY29sb3I6IFwicmVkXCIgfSl9PntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICl9XG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cbiAgICAgIDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XG4gICAgPC9DaGVja291dEZvcm1TdHlsZXM+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XG4gICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgPC9FbGVtZW50cz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQ2hlY2tvdXQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

})