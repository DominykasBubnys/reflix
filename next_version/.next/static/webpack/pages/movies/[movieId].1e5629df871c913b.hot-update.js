"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[movieId]",{

/***/ "./pages/movies/[movieId].js":
/*!***********************************!*\
  !*** ./pages/movies/[movieId].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_listItemBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/listItemBtn */ \"./components/listItemBtn.js\");\n/* harmony import */ var _styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Details.module.css */ \"./styles/Details.module.css\");\n/* harmony import */ var _styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/context/AuthContext */ \"./components/context/AuthContext.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MovieDetails = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)(), removeFromLibrary = ref.removeFromLibrary, addMovieToLibrary = ref.addMovieToLibrary, doesMovieExistInLibrary = ref.doesMovieExistInLibrary;\n    var Auth = (0,_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    paddingTop: \"13%\",\n                    backgroundColor: \"gray\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        playing: true,\n                        controls: true,\n                        width: \"100%\",\n                        url: data.videoURL\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                        lineNumber: 18,\n                        columnNumber: 18\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, _this),\n            !isLoading && data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: data.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                lineNumber: 22,\n                columnNumber: 29\n            }, _this),\n            !isLoading && data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.coverImgURL\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().about),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                        lineNumber: 28,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                        children: data.storyLine\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                        lineNumber: 29,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                lineNumber: 27,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().genres),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().genres_title),\n                                        children: \"Genres:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                        lineNumber: 35,\n                                        columnNumber: 9\n                                    }, _this),\n                                    data.genres.map(function(genre) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: genre\n                                        }, Math.random(), false, {\n                                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                            lineNumber: 36,\n                                            columnNumber: 35\n                                        }, _this1);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                lineNumber: 34,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Details_module_css__WEBPACK_IMPORTED_MODULE_5___default().controllers),\n                                children: Auth.currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listItemBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"] // currUser\n                                , {\n                                    onClick: doesMovieExistInLibrary(data) ? function() {} : addMovieToLibrary.bind(null, data),\n                                    placeholder: doesMovieExistInLibrary.bind(null, data) ? \"Remove from library\" : \"Add to library\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 30\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                                lineNumber: 39,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n                lineNumber: 23,\n                columnNumber: 29\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Reflix\\\\reflix_nextjs\\\\pages\\\\movies\\\\[movieId].js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, _this));\n};\n_s(MovieDetails, \"BzusPgiyfr4nqCmso/7HIQX7zJM=\", false, function() {\n    return [\n        _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth,\n        _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = MovieDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\nvar _c;\n$RefreshReg$(_c, \"MovieDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW21vdmllSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRWlCO0FBQ0Q7QUFDUztBQUN4Qjs7O0FBRXRDLEdBQUssQ0FBQ00sWUFBWSxHQUFHLFFBQVEsUUFBSSxDQUFDO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7O0lBRXpCLEdBQUssQ0FBbUVILEdBQVMsR0FBVEEsd0VBQU8sSUFBeEVJLGlCQUFpQixHQUFnREosR0FBUyxDQUExRUksaUJBQWlCLEVBQUVDLGlCQUFpQixHQUE2QkwsR0FBUyxDQUF2REssaUJBQWlCLEVBQUVDLHVCQUF1QixHQUFJTixHQUFTLENBQXBDTSx1QkFBdUI7SUFDcEUsR0FBSyxDQUFDQyxJQUFJLEdBQUdQLHdFQUFPO0lBQ3BCLEdBQUssQ0FBNkJILElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXpDVyxTQUFTLEdBQWtCWCxJQUFlLEtBQS9CWSxZQUFZLEdBQUlaLElBQWU7SUFFakQsTUFBTSw2RUFBRUQsdURBQWM7O3dGQUVuQmUsQ0FBRztnQkFBQ0MsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxVQUFVLEVBQUUsQ0FBSztvQkFBRUMsZUFBZSxFQUFFLENBQU07Z0JBQUEsQ0FBQztzR0FDckRILENBQUc7OEJBQ0RSLElBQUksZ0ZBQUtGLG9EQUFXO3dCQUFDYyxPQUFPLEVBQUUsSUFBSTt3QkFBRUMsUUFBUTt3QkFBQ0MsS0FBSyxFQUFDLENBQU07d0JBQUNDLEdBQUcsRUFBRWYsSUFBSSxDQUFDZ0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzthQUk5RVgsU0FBUyxJQUFJTCxJQUFJLGdGQUFLaUIsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFFdEIseUVBQWE7MEJBQUdJLElBQUksQ0FBQ21CLEtBQUs7Ozs7OzthQUM5RGQsU0FBUyxJQUFJTCxJQUFJLGdGQUFLUSxDQUFHO2dCQUFDVSxTQUFTLEVBQUV0Qiw2RUFBaUI7O2dHQUN4RHlCLENBQUc7d0JBQUNDLEdBQUcsRUFBRXRCLElBQUksQ0FBQ3VCLFdBQVc7Ozs7OztnR0FDekJmLENBQUc7d0JBQUNVLFNBQVMsRUFBRXRCLDJFQUFlOzt3R0FFNUJZLENBQUc7Z0NBQUNVLFNBQVMsRUFBRXRCLHlFQUFhOztnSEFDMUI4QixDQUFFO2tEQUFDLENBQVc7Ozs7OztnSEFDZEMsQ0FBQzt3Q0FBQ1QsU0FBUyxFQUFFdEIsK0VBQW1CO2tEQUM5QkksSUFBSSxDQUFDNkIsU0FBUzs7Ozs7Ozs7Ozs7O3dHQUlsQkMsQ0FBRTtnQ0FBQ1osU0FBUyxFQUFFdEIsMEVBQWM7O2dIQUMxQm9DLENBQUU7d0NBQUNkLFNBQVMsRUFBRXRCLGdGQUFvQjtrREFBRSxDQUFPOzs7Ozs7b0NBQzNDSSxJQUFJLENBQUMrQixNQUFNLENBQUNHLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxLQUFLO3NEQUFJLE1BQU0sK0RBQUxDLENBQUU7c0RBQXNCRCxLQUFLOzJDQUFyQkUsSUFBSSxDQUFDQyxNQUFNOzs7Ozs7Ozs7Ozs7d0dBRy9DOUIsQ0FBRztnQ0FBQ1UsU0FBUyxFQUFFdEIsK0VBQW1COzBDQUVoQ1EsSUFBSSxDQUFDb0MsV0FBVyxnRkFBSzdDLCtEQUFXLENBQWE7O29DQUM1QzhDLE9BQU8sRUFBRXRDLHVCQUF1QixDQUFDSCxJQUFJLElBQUksUUFBUSxHQUFKLENBQUMsQ0FBQyxHQUFHRSxpQkFBaUIsQ0FBQ3dDLElBQUksQ0FBQyxJQUFJLEVBQUMxQyxJQUFJO29DQUNsRjJDLFdBQVcsRUFBRXhDLHVCQUF1QixDQUFDdUMsSUFBSSxDQUFDLElBQUksRUFBQzFDLElBQUksSUFBSSxDQUFxQix1QkFBRyxDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXekcsQ0FBQztHQTlDS0QsWUFBWTs7UUFFd0RGLG9FQUFPO1FBQ2xFQSxvRUFBTzs7O0tBSGhCRSxZQUFZOztBQTZHbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzL1ttb3ZpZUlkXS5qcz83YjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYidcclxuaW1wb3J0IExpc3RJdGVtQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdEl0ZW1CdG4nXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi9zdHlsZXMvRGV0YWlscy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dCdcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcidcclxuXHJcbmNvbnN0IE1vdmllRGV0YWlscyA9ICh7ZGF0YX0pID0+IHtcclxuXHJcbiAgY29uc3Qge3JlbW92ZUZyb21MaWJyYXJ5LCBhZGRNb3ZpZVRvTGlicmFyeSwgZG9lc01vdmllRXhpc3RJbkxpYnJhcnl9ID0gdXNlQXV0aCgpXHJcbiAgY29uc3QgQXV0aCA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTMlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCJ9fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSAmJiA8UmVhY3RQbGF5ZXIgcGxheWluZz17dHJ1ZX0gY29udHJvbHMgd2lkdGg9XCIxMDAlXCIgdXJsPXtkYXRhLnZpZGVvVVJMfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICB7ICFpc0xvYWRpbmcgJiYgZGF0YSAmJiA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGF0YS50aXRsZX08L2gxPn1cclxuICAgIHsgIWlzTG9hZGluZyAmJiBkYXRhICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltZ1VSTH0gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWJvdXR9PlxyXG4gICAgICAgIDxoMj5EZXNjcmlwdGlvbjwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIHtkYXRhLnN0b3J5TGluZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5nZW5yZXN9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzZXMuZ2VucmVzX3RpdGxlfT5HZW5yZXM6PC9oMz5cclxuICAgICAgICB7ZGF0YS5nZW5yZXMubWFwKGdlbnJlID0+IDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PntnZW5yZX08L2xpPil9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sbGVyc30+XHJcbiAgICAgICAgXHJcbiAgICAgICAge0F1dGguY3VycmVudFVzZXIgJiYgPExpc3RJdGVtQnRuICAvLyBjdXJyVXNlclxyXG4gICAgICAgICAgb25DbGljaz17ZG9lc01vdmllRXhpc3RJbkxpYnJhcnkoZGF0YSkgPyAoKT0+e30gOiBhZGRNb3ZpZVRvTGlicmFyeS5iaW5kKG51bGwsZGF0YSl9IFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2RvZXNNb3ZpZUV4aXN0SW5MaWJyYXJ5LmJpbmQobnVsbCxkYXRhKSA/IFwiUmVtb3ZlIGZyb20gbGlicmFyeVwiIDogXCJBZGQgdG8gbGlicmFyeVwifSBcclxuICAgICAgICAvPn1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PiAgXHJcblxyXG4gIDwvZGl2Pn1cclxuXHJcblxyXG48L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImdldFN0YXRpY1BhdGhzIGV4ZWN1dGVzIGluIGRldGFpbCBwYWdlXCIpO1xyXG4gIFxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYG1vbmdvZGI6Ly9kb21idWIxOmRvbWJ1YjFAY2x1c3RlcjAtc2hhcmQtMDAtMDAuNGFmaG0ubW9uZ29kYi5uZXQ6MjcwMTcsY2x1c3RlcjAtc2hhcmQtMDAtMDEuNGFmaG0ubW9uZ29kYi5uZXQ6MjcwMTcsY2x1c3RlcjAtc2hhcmQtMDAtMDIuNGFmaG0ubW9uZ29kYi5uZXQ6MjcwMTcvcmVmbGl4P3NzbD10cnVlJnJlcGxpY2FTZXQ9YXRsYXMtMTRsNmlpLXNoYXJkLTAmYXV0aFNvdXJjZT1hZG1pbiZyZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgKVxyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcblxyXG4gIGNvbnN0IHJlZmxpeENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibW92aWVzXCIpO1xyXG5cclxuICBsZXQgYWxsTW92aWVzO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cnkgY2F0Y2ggZXhlY3V0ZXMgXCIpXHJcbiAgICBhbGxNb3ZpZXMgPSBhd2FpdCByZWZsaXhDb2xsZWN0aW9uLmZpbmQoe30sIHtfaWQ6IDF9KS50b0FycmF5KCk7XHJcblxyXG4gICAgaWYoIWFsbE1vdmllcykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGFsbCBtb3ZpZXNcIik7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gaW5kZXguanMgYXBpOiBcIiwgZXJyb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICBwYXRoczogYWxsTW92aWVzLm1hcChtb3ZpZSA9PiAoe3BhcmFtczoge21vdmllSWQ6IG1vdmllLl9pZC50b1N0cmluZygpfX0pKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoY29udGV4dCkgPT4ge1xyXG5cclxuICBjb25zdCBtb3ZpZUlkID0gY29udGV4dC5wYXJhbXMubW92aWVJZDtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChgbW9uZ29kYjovL2RvbWJ1YjE6ZG9tYnViMUBjbHVzdGVyMC1zaGFyZC0wMC0wMC40YWZobS5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMS40YWZobS5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMi40YWZobS5tb25nb2RiLm5ldDoyNzAxNy9yZWZsaXg/c3NsPXRydWUmcmVwbGljYVNldD1hdGxhcy0xNGw2aWktc2hhcmQtMCZhdXRoU291cmNlPWFkbWluJnJldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWApXHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuXHJcbiAgY29uc3QgcmVmbGl4Q29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtb3ZpZXNcIik7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkTW92aWUgPSBhd2FpdCByZWZsaXhDb2xsZWN0aW9uLmZpbmRPbmUoe19pZDogT2JqZWN0SWQobW92aWVJZCl9KVxyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNb3ZpZS5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNb3ZpZS50aXRsZSxcclxuICAgICAgICBnZW5yZXM6IHNlbGVjdGVkTW92aWUuZ2VucmVzLFxyXG4gICAgICAgIHJhdGU6IHNlbGVjdGVkTW92aWUucmF0ZSxcclxuICAgICAgICBzdG9yeUxpbmU6IHNlbGVjdGVkTW92aWUuc3RvcnlMaW5lLFxyXG4gICAgICAgIGNhdGVnb3J5OiBzZWxlY3RlZE1vdmllLmNhdGVnb3J5LFxyXG4gICAgICAgIGNvdmVySW1nVVJMOiBzZWxlY3RlZE1vdmllLmNvdmVySW1nVVJMLFxyXG4gICAgICAgIHZpZGVvVVJMOiBzZWxlY3RlZE1vdmllLnZpZGVvVVJMXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURldGFpbHMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpc3RJdGVtQnRuIiwiY2xhc3NlcyIsInVzZUF1dGgiLCJSZWFjdFBsYXllciIsIk1vdmllRGV0YWlscyIsImRhdGEiLCJyZW1vdmVGcm9tTGlicmFyeSIsImFkZE1vdmllVG9MaWJyYXJ5IiwiZG9lc01vdmllRXhpc3RJbkxpYnJhcnkiLCJBdXRoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiRnJhZ21lbnQiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwbGF5aW5nIiwiY29udHJvbHMiLCJ3aWR0aCIsInVybCIsInZpZGVvVVJMIiwiaDEiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNvbnRhaW5lciIsImltZyIsInNyYyIsImNvdmVySW1nVVJMIiwiY29udGVudCIsImFib3V0IiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJzdG9yeUxpbmUiLCJ1bCIsImdlbnJlcyIsImgzIiwiZ2VucmVzX3RpdGxlIiwibWFwIiwiZ2VucmUiLCJsaSIsIk1hdGgiLCJyYW5kb20iLCJjb250cm9sbGVycyIsImN1cnJlbnRVc2VyIiwib25DbGljayIsImJpbmQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[movieId].js\n");

/***/ })

});