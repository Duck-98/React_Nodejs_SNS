"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_UserProfile__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ \"./components/LoginForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n // next 자체 라우터\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AppLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLogggedin = ref[0], setIsLogggedin = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n                mode: \"horizontal\",\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 15,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 36\n                                },\n                                __self: _this,\n                                children: \"노드버드\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/profile\",\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 43\n                                },\n                                __self: _this,\n                                children: \"프로필\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Input.Search, {\n                            enterButton: true,\n                            style: {\n                                verticalAlign: 'middle'\n                            },\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 21,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 42\n                                },\n                                __self: _this,\n                                children: \"회원가입\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                gutter: 8,\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        xs: 24,\n                        md: 6,\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: isLogggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_UserProfile__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 29,\n                                columnNumber: 36\n                            },\n                            __self: _this\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 29,\n                                columnNumber: 54\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        xs: 24,\n                        md: 12,\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: children\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        xs: 24,\n                        md: 6,\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: \"https://github.com/Duck-98\",\n                            target: \"_blank\",\n                            rel: \"_noreferrer noopener\",\n                            __source: {\n                                fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/AppLayout.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Made by Duck\"\n                        })\n                    }),\n                    \"    \"\n                ]\n            })\n        ]\n    }));\n};\n_s(AppLayout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AppLayout;\nAppLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRjtBQUNKLENBQWMsRUFBVTtBQUNiO0FBQ1U7QUFDSjs7O0FBRy9DLEdBQUssQ0FBQ1UsU0FBUyxHQUFHLFFBQVEsUUFBTSxDQUFDO1FBQWJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDeEIsR0FBSyxDQUFpQ1YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBN0NXLFdBQVcsR0FBb0JYLEdBQWUsS0FBakNZLGNBQWMsR0FBSVosR0FBZTtJQUNyRCxNQUFNLHVFQUNEYSxDQUFHOzs7Ozs7OztrRkFDQ1Ysc0NBQUk7Z0JBQUNXLElBQUksRUFBQyxDQUFZOzs7Ozs7Ozt5RkFDbEJYLDJDQUFTOzs7Ozs7O3VHQUNMRCxrREFBSTs0QkFBQ2MsSUFBSSxFQUFDLENBQUc7Ozs7Ozs7MkdBQUVDLENBQUM7Ozs7Ozs7MENBQUMsQ0FBSTs7Ozt5RkFFakJkLDJDQUFDOzs7Ozs7O3VHQUNMRCxrREFBSTs0QkFBQ2MsSUFBSSxFQUFDLENBQVU7Ozs7Ozs7MkdBQUVDLENBQUM7Ozs7Ozs7MENBQUMsQ0FBRzs7Ozt5RkFFekJkLDJDQUFHOzs7Ozs7O3VHQUNMQyw4Q0FBWTs0QkFBQ2UsV0FBVzs0QkFBQ0MsS0FBSyxFQUFFLENBQUNDO2dDQUFBQSxhQUFhLEVBQUMsQ0FBUTs0QkFBQSxDQUFDOzs7Ozs7Ozs7eUZBRTVEbEIsMkNBQVM7Ozs7Ozs7dUdBQ0xELGtEQUFJOzRCQUFDYyxJQUFJLEVBQUMsQ0FBUzs7Ozs7OzsyR0FBRUMsQ0FBQzs7Ozs7OzswQ0FBQyxDQUFJOzs7Ozs7a0ZBRzNCWixxQ0FBTDtnQkFBQ2lCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDVGhCLHFDQUFHO3dCQUFDaUIsRUFBRSxFQUFFLEVBQUU7d0JBQUVDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7O2tDQUNiYixXQUFXLHdFQUFJSixnRUFBVzs7Ozs7OztrR0FBT0MsNkRBQVM7Ozs7Ozs7Ozt5RkFFOUNGLHFDQUFHO3dCQUFDaUIsRUFBRSxFQUFFLEVBQUU7d0JBQUVDLEVBQUUsRUFBRSxFQUFFOzs7Ozs7O2tDQUNkZCxRQUFROzt5RkFFWkoscUNBQUc7d0JBQUNpQixFQUFFLEVBQUUsRUFBRTt3QkFBRUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7dUdBQ2JQLENBQUM7NEJBQUNELElBQUksRUFBQyxDQUE0Qjs0QkFBQ1MsTUFBTSxFQUFDLENBQVE7NEJBQUNDLEdBQUcsRUFBQyxDQUFzQjs7Ozs7OztzQ0FBQyxDQUFZOzs7b0JBQzFGLENBQUk7Ozs7O0FBSTFCLENBQUM7R0EvQktqQixTQUFTO0tBQVRBLFNBQVM7QUFpQ2ZBLFNBQVMsQ0FBQ2tCLFNBQVMsR0FBQyxDQUFDO0lBQ2pCakIsUUFBUSxFQUFHVCxtRUFBeUI7QUFFeEMsQ0FBQztBQUVELCtEQUFlUSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanM/Y2Q2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzsgLy8gbmV4dCDsnpDssrQg65287Jqw7YSwXG5pbXBvcnQge01lbnUsIElucHV0LCBSb3csIENvbH0gZnJvbSdhbnRkJztcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJQcm9maWxlJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcblxuXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSk9PntcbiAgICBjb25zdCBbaXNMb2dnZ2VkaW4sIHNldElzTG9nZ2dlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+64W465Oc67KE65OcPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT7tlITroZztlYQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggZW50ZXJCdXR0b24gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOidtaWRkbGUnfX0vPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiAgICBcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+IFxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+IFxuICAgICAgICAgICAgICAgICAgICB7aXNMb2dnZ2VkaW4gPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtLz59XG4gICAgICAgICAgICAgICAgPC9Db2w+ICAgICAgICBcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRHVjay05OFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIl9ub3JlZmVycmVyIG5vb3BlbmVyXCI+TWFkZSBieSBEdWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvQ29sPiAgICB7Lyog67O07JWI7ISxIOusuOygnOuhnCDtg4Dqsp8gX2JsYW5r66W8IOyCrOyaqe2WiOydhCDrlYwgIHJlbD1cIl9ub3JlZmVycmVyIG5vb3BlbmVyXCLrj4Qg7IKs7Jqp65CY7Ja07JW8IO2VnOuLpC4gKi99XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuQXBwTGF5b3V0LnByb3BUeXBlcz17XG4gICAgY2hpbGRyZW4gOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG59O1xuIFxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiTGluayIsIk1lbnUiLCJJbnB1dCIsIlJvdyIsIkNvbCIsIlVzZXJQcm9maWxlIiwiTG9naW5Gb3JtIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJpc0xvZ2dnZWRpbiIsInNldElzTG9nZ2dlZGluIiwiZGl2IiwibW9kZSIsIkl0ZW0iLCJocmVmIiwiYSIsIlNlYXJjaCIsImVudGVyQnV0dG9uIiwic3R5bGUiLCJ2ZXJ0aWNhbEFsaWduIiwiZ3V0dGVyIiwieHMiLCJtZCIsInRhcmdldCIsInJlbCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LoginForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), id = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), password = ref1[0], setPassword = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        __source: {\n            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"user-id\",\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"아이디\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Input, {\n                        name: \"user-id\",\n                        value: id,\n                        onChange: onChangeId,\n                        required: true,\n                        __source: {\n                            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/LoginForm.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(LoginForm, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNYOzs7QUFFekIsR0FBSyxDQUFDRyxTQUFTLEdBQUcsUUFDakIsR0FEc0IsQ0FBQzs7SUFDcEIsR0FBSyxDQUFlRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF4QkcsRUFBRSxHQUFXSCxHQUFZLEtBQXJCSSxLQUFLLEdBQUlKLEdBQVk7SUFDaEMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENLLFFBQVEsR0FBaUJMLElBQVksS0FBM0JNLFdBQVcsR0FBSU4sSUFBWTtJQUM1QyxNQUFNLHVFQUNEQyxzQ0FBSTs7Ozs7Ozs7a0ZBQ0FNLENBQUc7Ozs7Ozs7O3lGQUNDQyxDQUFLO3dCQUFDQyxPQUFPLEVBQUUsQ0FBUzs7Ozs7OztrQ0FBQyxDQUFHOzt5RkFDNUJDLENBQUU7Ozs7Ozs7O3lGQUNGQyxLQUFLO3dCQUFDQyxJQUFJLEVBQUUsQ0FBUzt3QkFBQ0MsS0FBSyxFQUFFVixFQUFFO3dCQUFFVyxRQUFRLEVBQUlDLFVBQVU7d0JBQUVDLFFBQVE7Ozs7Ozs7Ozs7aUZBRXJFVCxDQUFHOzs7Ozs7OztpRkFHSEEsQ0FBRzs7Ozs7Ozs7OztBQUtoQixDQUFDO0dBbEJLTCxTQUFTO0tBQVRBLFNBQVM7QUFvQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz9lY2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtfSBmcm9tICdhbnRkJztcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT57XG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWUgPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2UgPSB7b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkxvZ2luRm9ybSIsImlkIiwic2V0SWQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJJbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25DaGFuZ2VJZCIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

});