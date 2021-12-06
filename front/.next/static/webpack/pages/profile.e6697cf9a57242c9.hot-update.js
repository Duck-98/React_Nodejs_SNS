/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FollowList */ \"./components/FollowList.js\");\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Profile = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/pages/profile.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/pages/profile.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: \"내 프로필 / NodeBird\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/pages/profile.js\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NicknameEditForm, {\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/pages/profile.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_FollowList__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        header: \"팔로잉 목록\",\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/pages/profile.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_FollowList__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        header: \"팔로워 목록\",\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/pages/profile.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUN1QjtBQUNuQjtBQUNxQjs7QUFDakQsR0FBSyxDQUFDSSxPQUFPLEdBQUcsUUFDZCxHQURrQixDQUFDO0lBQ2pCLE1BQU0sdUVBQUM7O2lGQUVGRixrREFBSTs7Ozs7OzsrRkFDQUcsQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFnQjs7O2tGQUV0QkosNkRBQUM7Ozs7Ozs7O3lGQUNMSyxnQkFBZ0I7Ozs7Ozs7O3lGQUNoQkgsK0RBQVU7d0JBQUNJLE1BQU0sRUFBQyxDQUFROzs7Ozs7Ozt5RkFDaEJKLCtEQUFBO3dCQUFDSSxNQUFNLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7O0FBT25DLENBQUM7S0FoQktILE9BQU87QUFrQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzPzA4ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20ncmVhY3QnO1xuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcbmNvbnN0IFByb2ZpbGUgPSAoKT0+e1xuICAgIHJldHVybihcbiAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIC8gTm9kZUJpcmQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+ICAgIFxuICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtLz5cbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JIOuqqeuhnVwiIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjCDrqqnroZ1cIiAvPlxuXG5cbiAgICAgICAgXG4gICAgPC9BcHBMYXlvdXQ+XG4gICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7ICJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcExheW91dCIsIkhlYWQiLCJGb2xsb3dMaXN0IiwiUHJvZmlsZSIsInRpdGxlIiwiTmlja25hbWVFZGl0Rm9ybSIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

});