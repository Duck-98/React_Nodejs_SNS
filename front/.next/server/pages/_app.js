"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({\n        }, pageProps)));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7QUFDWkEsOENBQTZDLENBQUM7SUFDMUNHLEtBQUssRUFBRSxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILG1EQUFrRCxDQUFDO0lBQy9DSSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ2IsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGVBQWU7SUFDakMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGUCx1REFBc0QsQ0FBQztJQUNuREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUNiLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxtQkFBbUI7SUFDckMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGTixrQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQ1EsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUI7U0FDakNDLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN4RSxHQUFHLENBQUMsQ0FBQztRQUNELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHUCxHQUFHLENBQUNLLEdBQUcsRUFBRUMsR0FBRztRQUN2QixHQUFHLENBQUNqQixLQUFLLEdBQUdrQixJQUFJLENBQUNsQixLQUFLO0lBQzFCLENBQUMsQ0FBQyxLQUFLLEVBQUVtQixLQUFLLEVBQUUsQ0FBQztRQUNiTixNQUFNLENBQUNNLEtBQUs7UUFDWixNQUFNO0lBQ1YsQ0FBQztJQUNELEVBQUUsRUFBRUQsSUFBSSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNaUixPQUFPLENBQUNaLEtBQUs7SUFDakIsQ0FBQyxNQUFNLENBQUM7UUFDSnFCLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDWixLQUFLLEVBQUVzQixJQUFJLENBQUNSLEtBQUssRUFBRUMsTUFBTTtJQUM3QyxDQUFDO0FBQ0wsQ0FBQztTQUNRUSxpQkFBaUIsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2YsR0FBRyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxFQUFFQyxJQUFJLEdBQUdDLFNBQVM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBQ1QsT0FBTyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxHQUFHLENBQUNGLEdBQUcsR0FBR2EsRUFBRSxDQUFDSSxLQUFLLENBQUNILElBQUksRUFBRUMsSUFBSTtxQkFDcEJaLEtBQUssQ0FBQ2QsS0FBSyxFQUFFLENBQUM7Z0JBQ25CVSxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBTSxPQUFFZixLQUFLO1lBQ3pFLENBQUM7cUJBQ1FlLE1BQU0sQ0FBQ2MsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCbkIsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQU8sUUFBRWMsR0FBRztZQUN4RSxDQUFDO1lBQ0RmLEtBQUssQ0FBQ2dCLFNBQVM7UUFDbkIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO1NBQ1F0QixzQkFBc0IsQ0FBQ3VCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHLENBQUM7UUFDbEN6QixPQUFPLEVBQUV5QixHQUFHO0lBQ2hCLENBQUM7QUFDTCxDQUFDO1NBQ1FFLG1CQUFtQixHQUFHLENBQUM7SUFDNUJBLG1CQUFtQixHQUFHLEVBR3ZCOzs7Q0FBQSxHQUFDVixpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDVyxTQUFTLEdBQUdDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUNDLFNBQVMsVUFBVSxDQUFDLEVBQUVqQyxNQUFNLEVBQUVrQyxtQkFBbUIsQ0FBQ0gsU0FBUyxFQUFFQyxHQUFHO1FBQ3RFLE1BQU0sQ0FBQyxDQUFDO1lBQ0pDLFNBQVM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQ0gsbUJBQW1CLENBQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUVELFNBQVM7QUFDcEQsQ0FBQztTQUNRVyxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDTixtQkFBbUIsQ0FBQ0wsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUztBQUNwRCxDQUFDO01BQ0thLEdBQUcsU0FBU2pDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDNEIsU0FBUztJQUN0Q08sTUFBTSxHQUFHLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxDQUFDUCxTQUFTLEdBQUdFLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLO1FBQzdDLE1BQU0sQ0FBQyxFQUFhLFlBQUNuQyxNQUFNLENBQUNELE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQ1QsU0FBUyxFQUFFckMsTUFBTSxDQUFDK0MsTUFBTSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxFQUFFUixTQUFTO0lBQ2hCLENBQUM7O0FBRUxJLEdBQUcsQ0FBQ0ssbUJBQW1CLEdBQUdQLGtCQUFrQjtBQUM1Q0UsR0FBRyxDQUFDTSxlQUFlLEdBQUdSLGtCQUFrQjtBQUN4Q3ZDLGtCQUFlLEdBQUd5QyxHQUFHLENBRXJCLENBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/OTYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFwcEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkFwcEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRXZWJWaXRhbHNNZXRyaWNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHBhZ2VQcm9wcykpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl8iLCJBcHAiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhc3NpZ24iLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();