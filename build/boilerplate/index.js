/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/boilerplate/block.json":
/*!************************************!*\
  !*** ./src/boilerplate/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blocks-course/text-box","version":"0.1.0","title":"Text-Box","category":"text","description":"A box of text.","keywords":["text","text-box","paragraph","content"],"example":{},"supports":{"html":false,"color":{"background":true,"text":true,"gradients":true},"spacing":{"padding":true}},"textdomain":"text-box","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"text":{"type":"string"},"alignment":{"type":"string","default":"left"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"shadow":{"type":"boolean","default":false},"shadowOpacity":{"type":"number","default":30},"style":{"type":"object","default":{"color":{"background":"#6E7787"},"spacing":{"padding":{"top":"50px","right":"50px","bottom":"50px","left":"50px"}}}}}}');

/***/ }),

/***/ "./src/boilerplate/edit.js":
/*!*********************************!*\
  !*** ./src/boilerplate/edit.js ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\src\\boilerplate\\edit.js: Missing semicolon. (36:3)\n\n\u001b[0m \u001b[90m 34 |\u001b[39m \t\t[\u001b[32m`shadow-opacity-${shadowOpacity}`\u001b[39m]\u001b[33m:\u001b[39m shadow \u001b[33m&&\u001b[39m shadowOpacity\u001b[33m,\u001b[39m\n \u001b[90m 35 |\u001b[39m \t})\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 36 |\u001b[39m git branch \u001b[33m-\u001b[39mm old\u001b[33m-\u001b[39mbranch\u001b[33m-\u001b[39mname \u001b[36mnew\u001b[39m\u001b[33m-\u001b[39mbranch\u001b[33m-\u001b[39mname\n \u001b[90m    |\u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 37 |\u001b[39m \t\u001b[36mreturn\u001b[39m (\n \u001b[90m 38 |\u001b[39m \t\t\u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 39 |\u001b[39m \t\t\t{shadow \u001b[33m&&\u001b[39m (\u001b[0m\n    at constructor (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:360:19)\n    at JSXParserMixin.raise (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:3327:19)\n    at JSXParserMixin.semicolon (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:3653:10)\n    at JSXParserMixin.parseExpressionStatement (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12924:10)\n    at JSXParserMixin.parseStatementContent (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12538:19)\n    at JSXParserMixin.parseStatementLike (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12407:17)\n    at JSXParserMixin.parseStatementListItem (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12387:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12955:61)\n    at JSXParserMixin.parseBlockBody (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12948:10)\n    at JSXParserMixin.parseBlock (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12936:10)\n    at JSXParserMixin.parseFunctionBody (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:11784:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:11770:10)\n    at F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:13080:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12078:14)\n    at JSXParserMixin.parseFunction (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:13079:10)\n    at JSXParserMixin.parseExportDefaultExpression (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:13541:19)\n    at JSXParserMixin.parseExport (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:13462:25)\n    at JSXParserMixin.parseStatementContent (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12517:27)\n    at JSXParserMixin.parseStatementLike (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12407:17)\n    at JSXParserMixin.parseModuleItem (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12384:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12955:36)\n    at JSXParserMixin.parseBlockBody (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12948:10)\n    at JSXParserMixin.parseProgram (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12281:10)\n    at JSXParserMixin.parseTopLevel (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:12271:25)\n    at JSXParserMixin.parse (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:14123:10)\n    at parse (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\parser\\lib\\index.js:14157:38)\n    at parser (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\@babel\\core\\lib\\transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\gensync\\index.js:261:32)\n    at F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (F:\\xampp\\htdocs\\nayem-gutenberg\\wp-content\\plugins\\block-boilerplate\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ "./src/boilerplate/index.js":
/*!**********************************!*\
  !*** ./src/boilerplate/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/boilerplate/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/boilerplate/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/boilerplate/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/boilerplate/style.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  // icon: (
  // 	<svg
  // 		version="1.1"
  // 		viewBox="0 0 500 500"
  // 		preserveAspectRatio="xMidYMid meet"
  // 	>
  // 		<circle cx="250" cy="250" r="200" />
  // 	</svg>
  // ),

  icon: {
    src: 'text-page',
    background: '#f03',
    foreground: '#fff'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/boilerplate/save.js":
/*!*********************************!*\
  !*** ./src/boilerplate/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // this is a healper package to add and remove classes

function save({
  attributes
}) {
  const {
    text,
    alignment,
    shadow,
    shadowOpacity
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`text-box-align-${alignment}`, {
    'has-shadow': shadow,
    [`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: classes
    }),
    tagName: "h1",
    value: text
  });
}

/***/ }),

/***/ "./src/boilerplate/style.scss":
/*!************************************!*\
  !*** ./src/boilerplate/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"boilerplate/index": 0,
/******/ 			"boilerplate/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkboilerplate"] = globalThis["webpackChunkboilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["boilerplate/style-index"], () => (__webpack_require__("./src/boilerplate/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map