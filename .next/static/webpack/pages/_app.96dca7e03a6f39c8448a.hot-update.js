webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Checkout\", function() { return Checkout; });\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql */ \"./node_modules/graphql/index.mjs\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/robkondratowicz/Desktop/Actualize/fretstop_frontend/components/Checkout.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation CREATE_ORDER_MUTATION($token: String!) {\\n    checkout(token: $token) {\\n      id\\n      charge\\n      total\\n      items {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].form.withConfig({\n  displayName: \"Checkout__CheckoutFormStyles\",\n  componentId: \"sc-10mtoy5-0\"\n})([\"box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);background:var(--lightBlue);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;\"]);\n_c = CheckoutFormStyles;\nvar CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nvar stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_7__[\"loadStripe\"])(\"pk_test_51IT87dCrHy1ngX3AuwNzqGUTteU1bZwWxWo5cX43b1yGplgUSVaiEckaGNPPlWsfPFx3ry7zI85cwDvFyWsw3S8h00W7GP4Q4q\");\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useState\"])(),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useElements\"])();\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(),\n      _useMutation2 = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      checkout = _useMutation2[0],\n      GraphQLError = _useMutation2[1].error;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var _yield$stripe$createP, error, paymentMethod;\n\n      return _Users_robkondratowicz_Desktop_Actualize_fretstop_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // 1. stop form from submitting and turn loader on\n              e.preventDefault();\n              setLoading(true); // 2. start page transition\n\n              nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.start(); // 3. create payment method via stripe (token comes back here if successful)\n\n              _context.next = 5;\n              return stripe.createPaymentMethod({\n                type: \"card\",\n                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"CardElement\"])\n              });\n\n            case 5:\n              _yield$stripe$createP = _context.sent;\n              error = _yield$stripe$createP.error;\n              paymentMethod = _yield$stripe$createP.paymentMethod;\n              console.log(paymentMethod); // 4. handle any errors from stripe\n\n              if (error) {\n                setError(error);\n              } // 5. send token to keystone server via a custom mutation\n              // 6. change the page to view the order\n              // 7. close the cart\n              // 8. turn the loader off\n\n\n              setLoading(false);\n              nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CheckoutFormStyles, {\n    onSubmit: handleSubmit,\n    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n      style: ({\n        fontSize: 20\n      }, {\n        color: \"red\"\n      }),\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"CardElement\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      children: \"Check Out Now\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CheckoutForm, \"rLf5mrAvJNkTX+5wWep+fUf1rw8=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"useElements\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c2 = CheckoutForm;\n\nfunction Checkout() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__[\"Elements\"], {\n    stripe: stripeLib,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CheckoutForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Checkout;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n$RefreshReg$(_c3, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsImZvcm0iLCJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsInVzZU11dGF0aW9uIiwiY2hlY2tvdXQiLCJHcmFwaFFMRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuUHJvZ3Jlc3MiLCJzdGFydCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsInBheW1lbnRNZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZG9uZSIsImZvbnRTaXplIiwiY29sb3IiLCJtZXNzYWdlIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLDBEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsMEtBQXhCO0tBQU1GLGtCO0FBWU4sSUFBTUcscUJBQXFCLEdBQUdDLGtEQUFILG1CQUEzQjtBQWNBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MsNkdBQUQsQ0FBNUI7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNJQyx1REFBUSxFQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsbUJBRVFGLHVEQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWZHLE9BRmU7QUFBQSxNQUVOQyxVQUZNOztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywyRUFBVyxFQUE1Qjs7QUFKc0IscUJBS29CQyxrRUFBVyxFQUwvQjtBQUFBO0FBQUEsTUFLZkMsUUFMZTtBQUFBLE1BS0dDLFlBTEgsb0JBS0pWLEtBTEk7O0FBQUEsV0FPUFcsWUFQTztBQUFBO0FBQUE7O0FBQUE7QUFBQSx1WEFPdEIsaUJBQTRCQyxDQUE1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFDQUEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FWLHdCQUFVLENBQUMsSUFBRCxDQUFWLENBSEYsQ0FJRTs7QUFDQVcsK0RBQVMsQ0FBQ0MsS0FBVixHQUxGLENBTUU7O0FBTkY7QUFBQSxxQkFPeUNYLE1BQU0sQ0FBQ1ksbUJBQVAsQ0FBMkI7QUFDaEVDLG9CQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLG9CQUFJLEVBQUVaLFFBQVEsQ0FBQ2EsVUFBVCxDQUFvQkMsbUVBQXBCO0FBRjBELGVBQTNCLENBUHpDOztBQUFBO0FBQUE7QUFPVXBCLG1CQVBWLHlCQU9VQSxLQVBWO0FBT2lCcUIsMkJBUGpCLHlCQU9pQkEsYUFQakI7QUFXRUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaLEVBWEYsQ0FZRTs7QUFDQSxrQkFBSXJCLEtBQUosRUFBVztBQUNUQyx3QkFBUSxDQUFDRCxLQUFELENBQVI7QUFDRCxlQWZILENBZ0JFO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUcsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQVcsK0RBQVMsQ0FBQ1UsSUFBVjs7QUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQc0I7QUFBQTtBQUFBOztBQThCdEIsc0JBQ0UscUVBQUMsa0JBQUQ7QUFBb0IsWUFBUSxFQUFFYixZQUE5QjtBQUFBLGVBQ0dYLEtBQUssaUJBQ0o7QUFBRyxXQUFLLEdBQUc7QUFBRXlCLGdCQUFRLEVBQUU7QUFBWixTQUFrQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQixDQUFSO0FBQUEsZ0JBQWlEMUIsS0FBSyxDQUFDMkI7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBSUUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXZDUTdCLFk7VUFHUU8saUUsRUFDRUUsbUUsRUFDeUJDLDBEOzs7TUFMbkNWLFk7O0FBeUNULFNBQVM4QixRQUFULEdBQW9CO0FBQ2xCLHNCQUNFLHFFQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFakMsU0FBbEI7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFOUWlDLFE7QUFRVCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hlY2tvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgQ2FyZEVsZW1lbnQsXG4gIEVsZW1lbnRzLFxuICB1c2VFbGVtZW50cyxcbiAgdXNlU3RyaXBlLFxufSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9TaWNrQnV0dG9uXCI7XG5cbmNvbnN0IENoZWNrb3V0Rm9ybVN0eWxlcyA9IHN0eWxlZC5mb3JtYFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLW9mZldoaXRlKTsgKi9cbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRCbHVlKTtcblxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuYDtcblxuY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBDUkVBVEVfT1JERVJfTVVUQVRJT04oJHRva2VuOiBTdHJpbmchKSB7XG4gICAgY2hlY2tvdXQodG9rZW46ICR0b2tlbikge1xuICAgICAgaWRcbiAgICAgIGNoYXJnZVxuICAgICAgdG90YWxcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTtcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcbiAgY29uc3QgW2NoZWNrb3V0LCB7ZXJyb3I6IEdyYXBoUUxFcnJvcn1dID0gdXNlTXV0YXRpb24oKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgLy8gMS4gc3RvcCBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgdHVybiBsb2FkZXIgb25cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyAyLiBzdGFydCBwYWdlIHRyYW5zaXRpb25cbiAgICBuUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAvLyAzLiBjcmVhdGUgcGF5bWVudCBtZXRob2QgdmlhIHN0cmlwZSAodG9rZW4gY29tZXMgYmFjayBoZXJlIGlmIHN1Y2Nlc3NmdWwpXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgICAgdHlwZTogXCJjYXJkXCIsXG4gICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwYXltZW50TWV0aG9kKTtcbiAgICAvLyA0LiBoYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxuICAgIGlmIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICAvLyA1LiBzZW5kIHRva2VuIHRvIGtleXN0b25lIHNlcnZlciB2aWEgYSBjdXN0b20gbXV0YXRpb25cbiAgICAvLyA2LiBjaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcbiAgICAvLyA3LiBjbG9zZSB0aGUgY2FydFxuICAgIC8vIDguIHR1cm4gdGhlIGxvYWRlciBvZmZcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxwIHN0eWxlPXsoeyBmb250U2l6ZTogMjAgfSwgeyBjb2xvcjogXCJyZWRcIiB9KX0+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgKX1cbiAgICAgIDxDYXJkRWxlbWVudCAvPlxuICAgICAgPFNpY2tCdXR0b24+Q2hlY2sgT3V0IE5vdzwvU2lja0J1dHRvbj5cbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cbiAgICAgIDxDaGVja291dEZvcm0gLz5cbiAgICA8L0VsZW1lbnRzPlxuICApO1xufVxuXG5leHBvcnQgeyBDaGVja291dCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

})