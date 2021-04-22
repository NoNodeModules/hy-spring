/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .ball1 {\\n|     width: 50px;\\n|     height: 50px;\");\n\n//# sourceURL=webpack://webpack-demo/./src/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst ball1 = document.querySelector('.ball1')\r\nconst ball2 = document.querySelector('.ball2')\r\nconst ball3 = document.querySelector('.ball3')\r\n// callback 用法的 demo\r\n      // function move(ball, target, cb) {\r\n        // TODO\r\n      \r\n      //   setTimeout(function(){\r\n      //     var  marginLeft=parseInt(ball.style.marginLeft,10);\r\n      //     if(marginLeft ===target){\r\n      //       cb && cb()\r\n      //     }else{\r\n      //       if(marginLeft<target){\r\n      //         marginLeft ++;\r\n      //       }else{\r\n      //         marginLeft --;\r\n      //       }\r\n      //       ball.style.marginLeft=marginLeft+'px';\r\n      //       move(ball, target, cb)\r\n      //     }\r\n      //   },10)\r\n      // }\r\n      // move(ball1,150,function(){\r\n      //   move(ball2,150,function(){\r\n      //     move(ball3,150,function(){\r\n            \r\n      //     })\r\n      //   })\r\n      // })\r\n\r\n      // Promise 用法的 demo\r\n      var Promise=window.Promise;\r\n      function move(ball, target) {\r\n         // TODO\r\n        return new Promise(function(resolve,reject){\r\n          function _animate() {\r\n            setTimeout(function () {\r\n                    var marginLeft = parseInt(ball.style.marginLeft, 10)\r\n                    if (marginLeft === target) {\r\n                        resolve(ball, target)\r\n                    } else {\r\n                        if (marginLeft < target) {\r\n                            marginLeft++;\r\n                        } else {\r\n                            marginLeft--;\r\n                        }\r\n                        ball.style.marginLeft = marginLeft+'px'\r\n                        _animate();\r\n                    }\r\n                 }, 10)\r\n              }\r\n              _animate();\r\n        });\r\n    }\r\n  move(ball1,150)\r\n        .then(function () {\r\n            return move(ball2,150)\r\n        })\r\n        .then(function () {\r\n            return move(ball3,150)\r\n        })\r\n\r\n      \r\n\r\n      // async/await 用法的 demo\r\n    //   async function go(ball,target) {\r\n    //     // TODO\r\n    //     return new Promise(function(resolve,reject){\r\n    //       function _animate() {\r\n    //         setTimeout(function () {\r\n    //                 var marginLeft = parseInt(ball.style.marginLeft, 10)\r\n    //                 if (marginLeft === target) {\r\n    //                     resolve(ball, target)\r\n    //                 } else {\r\n    //                     if (marginLeft < target) {\r\n    //                         marginLeft++;\r\n    //                     } else {\r\n    //                         marginLeft--;\r\n    //                     }\r\n    //                     ball.style.marginLeft = marginLeft+'px'\r\n    //                     _animate();\r\n    //                 }\r\n    //              }, 10)\r\n    //           }\r\n    //           _animate();\r\n    //     });\r\n    // }\r\n    // async function m(){\r\n    //     await  go(ball1, 150);\r\n    //     await  go(ball2, 150);\r\n    //     await  go(ball3, 150);\r\n    // }\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;