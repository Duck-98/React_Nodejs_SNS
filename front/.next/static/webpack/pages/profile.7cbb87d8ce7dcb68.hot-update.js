"use strict";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar FollowList = function(param) {\n    var header = param.header, data = param.data;\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.List, {\n        style: {\n            marginBottom: '20px'\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"small\",\n        header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            children: header\n        }),\n        loadMore: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            style: {\n                textAlign: 'center',\n                margin: '10px 0'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {\n                children: \"더 보기\"\n            })\n        }),\n        bordered: true,\n        dataSource: data,\n        renderItem: function(item) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n                style: {\n                    marginTop: '20px'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.StopOutlined, {\n                        }, \"stop\")\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {\n                        description: item.nickname\n                    })\n                })\n            });\n        },\n        __source: {\n            fileName: \"/Users/duckuengna/Desktop/Coding/노드&리액트를 이용한 sns 만들기/React_Nodejs_SNS/front/components/FollowList.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this\n    });\n};\n_c = FollowList;\nFollowList.propTypes = {\n    header: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.inRequired),\n    data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNIO0FBQ2U7O0FBQzlDLEdBQUssQ0FBQ0ssVUFBVSxHQUFHLFFBQVE7UUFBTEMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLElBQUksU0FBSkEsSUFBSTtrQkFDOUIsTUFDSixDQUFDLHVEQURJSixzQ0FBSTtRQUNISyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxZQUFZLEVBQUUsQ0FBTTtRQUFDLENBQUM7UUFDL0JDLElBQUksRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFDO1lBQUVDLEVBQUUsRUFBRSxDQUFDO1lBQUVDLEVBQUUsRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUNqQ0MsSUFBSSxFQUFDLENBQU87UUFDWlIsTUFBTSx1RUFBR1MsQ0FBRztzQkFBRVQsTUFBTTs7UUFDcEJVLFFBQVEsdUVBQUdELENBQUc7WUFBQ1AsS0FBSyxFQUFFLENBQUM7Z0JBQUNTLFNBQVMsRUFBRSxDQUFRO2dCQUFFQyxNQUFNLEVBQUUsQ0FBUTtZQUFBLENBQUM7MkZBQUdDLE1BQU07MEJBQUMsQ0FBSTs7O1FBQzVFQyxRQUFRO1FBQ1JDLFVBQVUsRUFBRWQsSUFBSTtRQUNoQmUsVUFBVSxFQUFFLFFBQVEsQ0FBUEMsSUFBSTswQkFDZixNQUFNQyxDQUFBQSxzREFBQUEsQ0FBTHJCLDJDQUFTO2dCQUFDSyxLQUFLLEVBQUUsQ0FBQztvQkFBQ2lCLFNBQVMsRUFBRSxDQUFNO2dCQUFDLENBQUM7K0ZBQ3BDdkIsc0NBQUk7b0JBQUN3QixPQUFPLEVBQUUsQ0FBQzs2RkFBQ3RCLDJEQUFZOzJCQUFLLENBQU07b0JBQUcsQ0FBQzttR0FDekNGLDJDQUFTO3dCQUFDMEIsV0FBVyxFQUFFTCxJQUFJLENBQUNNLFFBQVE7Ozs7Ozs7Ozs7Ozs7S0FaM0N4QixVQUFVO0FBa0JoQkEsVUFBVSxDQUFDeUIsU0FBUyxHQUFHLENBQUM7SUFDcEJ4QixNQUFNLEVBQUdMLHFFQUEyQjtJQUNwQ00sSUFBSSxFQUFHTixvRUFBMEI7QUFDckMsQ0FBQztBQUdELCtEQUFlSSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzPzg0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge0NhcmQsIExpc3R9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtTdG9wT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4gKFxuICAgIDxMaXN0XG4gICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fVxuICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cbiAgICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XG4gICAgICBib3JkZXJlZFxuICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcbiAgICBoZWFkZXIgOiBQcm9wVHlwZXMuc3RyaW5nLmluUmVxdWlyZWQsXG4gICAgZGF0YSA6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQ2FyZCIsIkxpc3QiLCJTdG9wT3V0bGluZWQiLCJGb2xsb3dMaXN0IiwiaGVhZGVyIiwiZGF0YSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiZ3JpZCIsImd1dHRlciIsInhzIiwibWQiLCJzaXplIiwiZGl2IiwibG9hZE1vcmUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJCdXR0b24iLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJhY3Rpb25zIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpblJlcXVpcmVkIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

});