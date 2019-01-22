/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(366);


/***/ }),

/***/ 366:
/***/ (function(module, exports) {

	"use strict";

	var _templateObject = _taggedTemplateLiteral(["i am ", ", ", ""], ["i am ", ", ", ""]);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	// {
	//     let str = "\u0061";
	//     let str2 = "\uD842\uDFB7";

	//     let str3 = "hell\u{6F}"
	//     console.log(str3);
	// }

	// codePointAt()
	// {
	//     var s = "𠮷";
	//     console.log(s.length);
	//     console.log(s.charAt(0));
	//     console.log(s.charAt(1));
	//     console.log(s.charCodeAt(0));
	//     console.log(s.charCodeAt(1));
	// }

	// {
	//     console.log("a", "\u0061");

	//     console.log("s", "\u{20BB7}");

	//     console.log("1".padStart("2", 0));

	//     console.log("3".padEnd("2", 0));
	// }

	{

	    // console.log(abc`i am ${user.name}, ${user.work}`);

	    var abc = function abc(s, v1, v2) {
	        console.log(s, v1, v2);
	    };

	    var user = {
	        name: "leixu",
	        "work": "webSoft"
	    };

	    abc(_templateObject, user.name, user.work);
	}

/***/ })

/******/ });