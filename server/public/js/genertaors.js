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

	module.exports = __webpack_require__(19);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	'use strict';

	{
	    // Genertaor基本定义
	    var helloWorldGenerator = /*#__PURE__*/regeneratorRuntime.mark(function helloWorldGenerator() {
	        return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return 'hello';

	                    case 2:
	                        _context.next = 4;
	                        return 'world';

	                    case 4:
	                        return _context.abrupt('return', 'ending');

	                    case 5:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, helloWorldGenerator, this);
	    });

	    var hw = helloWorldGenerator();

	    hw.next();
	}

/***/ })

/******/ });