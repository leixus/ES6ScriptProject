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

	module.exports = __webpack_require__(28);


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	{
	    // let a1 = Symbol();
	    //
	    // let a2 = Symbol();
	    //
	    // console.log(a1 === a2);

	}

	{
	    // let myIterator = {};
	    //
	    // myIterator[Symbol.iterator] = function* () {
	    //
	    // }
	}

	{
	    // class Collection {
	    //     *[Symbol.iterator]() {
	    //         let i = 0;
	    //
	    //         while (this[i] !== undefined) {
	    //             yield this[i];
	    //             ++i;
	    //         }
	    //     }
	    // }
	    //
	    // let mycollection = new Collection();
	    //
	    // mycollection[0] = 1;
	    //
	    // mycollection[1] = 2;
	    //
	    // for (let value of mycollection) {
	    //     console.log(value);
	    // }
	}

	{
	    var s1 = Symbol();

	    var s2 = Symbol();

	    // console.log(s1 === s2);
	}

	{
	    // 生成Symbol之前检查a3这个key是否已经存在
	    // 如果已经存在，则返回key的value
	    // 如果不存在，则生成一个Symbol类型的值
	    var a3 = Symbol.for('a3');

	    var a4 = Symbol.for('a3');

	    // console.log('for', a3 === a4);
	}

	{
	    var _obj;

	    var a5 = Symbol.for('abc');

	    var obj = (_obj = {}, _defineProperty(_obj, a5, '123'), _defineProperty(_obj, 'abc', 345), _defineProperty(_obj, 'c', 789), _obj);

	    // console.log('多个key', obj);
	    //
	    // console.log(Object.entries(obj));

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            // console.log('let of', key, value);

	            var _step$value = _slicedToArray(_step.value, 2),
	                key = _step$value[0],
	                value = _step$value[1];
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

	    Object.getOwnPropertySymbols(obj).forEach(function (item) {
	        // console.log(item);
	        // console.log(obj[item]);
	    });

	    Reflect.ownKeys(obj).forEach(function (item) {
	        console.log(item);
	        console.log(obj[item]);
	    });
	}

/***/ })

/******/ });