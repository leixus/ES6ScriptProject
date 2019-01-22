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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// {
	//     let test1 = {k: 123, o: 456};
	//
	//     let test2 = [1,2,3,4,5,6,7];
	//
	//     console.log(Object.entries(test2));
	//
	//     for (let [key, value] of Object.entries(test1)) {
	//         console.log([key, value]);
	//     }
	// }
	//
	// {
	//     const fruits = ['apple','coconut','mango','durian'];
	//     //ES6中的for...of循环，遍历属性值
	//     for(let fruit of fruits){
	//         console.log(fruit);
	//     }
	// }

	{
	    var arr = ['Hello', 'World'];

	    var map = arr[Symbol.iterator]();

	    console.log(map.next());
	    console.log(map.next());
	    console.log(map.next());
	}

	{
	    var obj = _defineProperty({
	        start: [1, 3, 2],
	        end: [9, 8, 6]
	    }, Symbol.iterator, function () {
	        var self = this;
	        var index = 0;
	        var arr = self.start.concat(self.end);
	        var len = arr.length;
	        return {
	            next: function next() {
	                if (index < len) {
	                    return {
	                        value: arr[index],
	                        done: false
	                    };
	                } else {
	                    return {
	                        value: arr[index++],
	                        done: true
	                    };
	                }
	            }
	        };
	    });

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            console.log(key);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}

/***/ })
/******/ ]);