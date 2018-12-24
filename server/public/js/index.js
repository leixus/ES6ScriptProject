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

	module.exports = __webpack_require__(16);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	{
	    var arr = Array.of(3, 4, 7, 9, 11);
	    console.log('arr', arr);
	}

	{
	    var arrayLike = {
	        '0': 'a',
	        '1': 'b',
	        '2': 'c',
	        length: 3
	    };

	    var arr1 = [].slice.call(arrayLike);
	    console.log(arr1);
	    var arr2 = Array.from(arrayLike);
	    console.log(arr2);
	}

	{
	    var ps = document.querySelectorAll('p');
	    console.log(ps);
	    // Array.from(ps).filter(p => {
	    //     return p.textContent.length < 100;
	    // });
	    // console.log(bb);
	    Array.from(ps).forEach(function (item) {
	        console.log(item.textContent);
	    });
	}

	{
	    console.log([1, 2, undefined].fill(7));

	    console.log([1, 2, 3, 4, 5, 6, 7].fill(9, 1, 3));
	}

	{
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {

	        for (var _iterator = [12, 45, 78, 89].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var index = _step.value;

	            console.log('index', index);
	        }

	        // for (let value of [12,'lk',78,89].values()) {
	        //     console.log('value', value);
	        // }
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

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = [12, 45, 78, 89].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var _step2$value = _slicedToArray(_step2.value, 2),
	                _index = _step2$value[0],
	                value = _step2$value[1];

	            console.log('value', _index, value);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}

	{
	    console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(0, 3, 6));
	    console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
	}

	{
	    var f = function f(v) {
	        return v > this.age;
	    };

	    console.log([1, 4, -5, 10].find(function (n) {
	        return n < 0;
	    }));
	    console.log([1, 5, 10, 15].find(function (value, index, arr) {
	        return value > 9;
	    }));

	    console.log([1, 5, 10, 15].findIndex(function (value, index, arr) {
	        return value > 9;
	    }));

	    var person = { name: 'John', age: 20 };
	    [10, 12, 26, 15].find(f, person); // 26

	    console.log([NaN].findIndex(function (y) {
	        return Object.is(NaN, y);
	    }));
	}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);

/***/ })

/******/ });