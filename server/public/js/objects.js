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

	module.exports = __webpack_require__(356);


/***/ }),

/***/ 356:
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	{
	    // 对象扩展
	    var o = 1;
	    var l = 2;

	    var es5 = {
	        o: o,
	        l: l
	    };

	    var es6 = {
	        o: o,
	        l: l
	    };

	    console.log(es5);
	    console.log(es6);
	}

	{
	    var es5fn = {
	        hello: function hello() {
	            console.log('Hello');
	        }
	    };

	    var es6fn = {
	        hello: function hello() {
	            console.log('World');
	        }
	    };

	    es5fn.hello();
	    es6fn.hello();
	}

	{
	    var a = 'b';
	    var es5_obj = {
	        a: 'c',
	        b: 'c'
	    };

	    var es6_obj = _defineProperty({}, a, 'c');

	    console.log(es5_obj, es6_obj);
	}

	{
	    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
	    console.log('数组', Object.is([], []), [] === []);
	}

	{
	    console.log(Object.assign({ a: 'a' }, { b: 'b' }));

	    console.log(Object.assign({}, 'a'));
	}

	{
	    var test1 = { k: 123, o: 456 };

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = Object.entries(test1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2),
	                key = _step$value[0],
	                value = _step$value[1];

	            console.log([key, value]);
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

	{
	    // let {a,b,..c}
	}

/***/ })

/******/ });