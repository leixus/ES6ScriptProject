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

	module.exports = __webpack_require__(360);


/***/ }),

/***/ 360:
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	// {
	//     let list = new Set();
	//
	//     list.add(5);
	//
	//     list.add(7);
	//
	//     console.log('size', list.size);
	// }
	//
	// {
	//     let s = new Set();
	//
	//     [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
	//
	//     for (let i of s) {
	//         console.log(i);
	//     }
	// }
	//
	// {
	//     let map = new Map();
	//
	//     let arr = ['123', 'Hello World'];
	//
	//     map.set(arr, 456);
	//
	//     console.log(map);
	//     console.log(map.get(arr));
	//     console.log(arr);
	// }

	{
	    var s = new Set();

	    var arr = [2, 3, 45, 6, 78, 9, 5];

	    arr.forEach(function (x) {
	        return s.add(x);
	    });

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var i = _step.value;

	            console.log(i);
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
	    var list = new Set();

	    list.add(2);
	    list.add(3);
	    list.add(4);

	    console.log(list);

	    var _arr = [1, 2, 3, 4, 2, 3];

	    var list2 = new Set(_arr);

	    console.log(list2);

	    console.log(list2.size);
	}

	{
	    var _arr2 = ['leixu', 'lixiaoshuang', 'dmo'];

	    var list3 = new Set(_arr2);

	    console.log(list3.has('leixu'));

	    console.log(list3.delete('leixu'));
	    console.log(list3);

	    list3.clear();
	    console.log(list3);
	}

	{
	    var _arr3 = ['leixu', 'lixiaoshuang', 'dmo'];

	    var _list = new Set(_arr3);

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = _list.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var key = _step2.value;

	            console.log(key);
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

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = _list.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var value = _step3.value;

	            console.log(value);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }

	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	        for (var _iterator4 = _list.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var _step4$value = _slicedToArray(_step4.value, 2),
	                _key = _step4$value[0],
	                _value = _step4$value[1];

	            console.log(_key, _value);
	        }
	    } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	            }
	        } finally {
	            if (_didIteratorError4) {
	                throw _iteratorError4;
	            }
	        }
	    }

	    _list.forEach(function (item, index, list) {
	        console.log(item, index, list);
	    });
	}

	// WeakSet 只能是对象
	{
	    var weakList = new WeakSet();

	    var obj = {};

	    weakList.add(obj);

	    // weakList.add(2);

	    console.log(weakList);
	}

	{
	    var map = new Map();

	    var _arr4 = ['123', 'map'];

	    map.set('myKey', 456);

	    console.log(map, map.get('myKey'));
	}

	{
	    var _map = new Map([['a', 123], ['b', 456]]);

	    console.log(_map);

	    console.log(_map.size);

	    _map.delete('a');

	    console.log(_map);

	    _map.clear();

	    console.log(_map);
	}

	// WeakMap的key只能是对象

	{
	    var weakMap = new WeakMap();

	    var abc = {};

	    weakMap.set(abc, 123);

	    console.log(weakMap.get(abc));

	    var name = { 'name': 'leixu' };

	    weakMap.set(name, 8564521);

	    console.log(weakMap.get(name));
	}

/***/ })

/******/ });