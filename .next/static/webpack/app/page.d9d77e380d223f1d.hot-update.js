"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/card.tsx":
/*!*********************************!*\
  !*** ./src/components/card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n// task 2: create a user card component that takes a user object as props and displays the user's name, age, gender and remarks.\n\n\n\n\nconst Card = (param)=>{\n    let { user, onDelete, onEdit } = param;\n    const handleDelete = async ()=>{\n        try {\n            const response = await fetch(\"https://my-json-server.typicode.com/Kenzo800/interview-test-api/users/\".concat(user.id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete user\");\n            }\n            onDelete(user.id);\n        } catch (error) {\n            console.error(\"Error deleting user:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        style: {\n            padding: \"16px\",\n            margin: \"8px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Age: \",\n                    user.age\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Gender: \",\n                    user.gender\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Remarks: \",\n                    user.remarks\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: handleDelete,\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                color: \"primary\",\n                onClick: ()=>onEdit(user),\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leelo\\\\Vertex\\\\11-12-2024-codetest\\\\src\\\\components\\\\card.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdJQUFnSTs7QUFFdEc7QUFFYztBQUNFO0FBSTFDLE1BQU1HLE9BQTRCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUMzRCxNQUFNQyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0seUVBQWlGLE9BQVJMLEtBQUtNLEVBQUUsR0FBSTtnQkFDL0dDLFFBQVE7WUFDVjtZQUVBLElBQUksQ0FBQ0gsU0FBU0ksRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQVIsU0FBU0QsS0FBS00sRUFBRTtRQUNsQixFQUFFLE9BQU9JLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYiwyREFBS0E7UUFBQ2UsT0FBTztZQUFFQyxTQUFTO1lBQVFDLFFBQVE7UUFBTTs7MEJBQzdDLDhEQUFDQzswQkFBSWYsS0FBS2dCLElBQUk7Ozs7OzswQkFDZCw4REFBQ0M7O29CQUFFO29CQUFNakIsS0FBS2tCLEdBQUc7Ozs7Ozs7MEJBQ2pCLDhEQUFDRDs7b0JBQUU7b0JBQVNqQixLQUFLbUIsTUFBTTs7Ozs7OzswQkFDdkIsOERBQUNGOztvQkFBRTtvQkFBVWpCLEtBQUtvQixPQUFPOzs7Ozs7OzBCQUN6Qiw4REFBQ3RCLDREQUFNQTtnQkFBQ3VCLFNBQVE7Z0JBQVlDLE9BQU07Z0JBQVlDLFNBQVNwQjswQkFBYzs7Ozs7OzBCQUdyRSw4REFBQ0wsNERBQU1BO2dCQUFDdUIsU0FBUTtnQkFBWUMsT0FBTTtnQkFBVUMsU0FBUyxJQUFNckIsT0FBT0Y7MEJBQU87Ozs7Ozs7Ozs7OztBQUsvRTtLQS9CTUQ7QUFpQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZC50c3g/YmRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YXNrIDI6IGNyZWF0ZSBhIHVzZXIgY2FyZCBjb21wb25lbnQgdGhhdCB0YWtlcyBhIHVzZXIgb2JqZWN0IGFzIHByb3BzIGFuZCBkaXNwbGF5cyB0aGUgdXNlcidzIG5hbWUsIGFnZSwgZ2VuZGVyIGFuZCByZW1hcmtzLlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZFByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdXNlclwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5cclxuXHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHsgdXNlciwgb25EZWxldGUsIG9uRWRpdCB9KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vS2Vuem84MDAvaW50ZXJ2aWV3LXRlc3QtYXBpL3VzZXJzLyR7dXNlci5pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHVzZXInKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb25EZWxldGUodXNlci5pZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzE2cHgnLCBtYXJnaW46ICc4cHgnIH19PlxyXG4gICAgICA8aDI+e3VzZXIubmFtZX08L2gyPlxyXG4gICAgICA8cD5BZ2U6IHt1c2VyLmFnZX08L3A+XHJcbiAgICAgIDxwPkdlbmRlcjoge3VzZXIuZ2VuZGVyfTwvcD5cclxuICAgICAgPHA+UmVtYXJrczoge3VzZXIucmVtYXJrc308L3A+XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlRGVsZXRlfT5cclxuICAgICAgICBEZWxldGVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uRWRpdCh1c2VyKX0+XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUGFwZXIiLCJCdXR0b24iLCJDYXJkIiwidXNlciIsIm9uRGVsZXRlIiwib25FZGl0IiwiaGFuZGxlRGVsZXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwib2siLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsInN0eWxlIiwicGFkZGluZyIsIm1hcmdpbiIsImgyIiwibmFtZSIsInAiLCJhZ2UiLCJnZW5kZXIiLCJyZW1hcmtzIiwidmFyaWFudCIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/card.tsx\n"));

/***/ })

});