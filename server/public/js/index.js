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

	module.exports = __webpack_require__(3);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	// ES6的解构赋值
	// {
	//     function move({x = 0, y = 0} = {}) {
	//         console.log(x, y);
	//         return [x, y];
	//     }

	//     let moveOne = move({x: 3, y: 8});
	//     console.log(moveOne);
	// }

	// {
	//     function move({x, y} = {x: 0, y: 0}) {
	//         console.log(x, y);
	//         return [x, y];
	//     }

	//     let moves = move({x: 10, y: 20});
	//     console.log(moves);
	// }

	// {
	//     [1, undefined, 3].map((x = 'yes') => {
	//         console.log(x);
	//     });
	// }

	// 圆括号的问题 
	// {
	// let [(a)] = [1]; // 错误

	// let {x: (c)} = {} 

	// let ({x: c}) = {};

	// let {(x: c)} = {};
	// }

	// 函数参数
	// {
	// 错误
	// function f([(z)]) {
	//     return z;
	// }

	// [(b)] = [3]; // 页面中报错

	// ({p: (d)} = {}); // 页面中报错

	// [(parseInt.prop)] = [3]; // 正确
	// }

	// 用途
	// {
	//     let x = 1;
	//     let y = 3;

	//     [x, y] = [y, x];

	//     console.log(x, y);
	// }

	{
	    var example = function example() {
	        return [1, 2, 3];
	    };

	    var example2 = function example2() {
	        return {
	            foo: 11,
	            bar: 22
	        };
	    };

	    var _example = example(),
	        _example2 = _slicedToArray(_example, 3),
	        a = _example2[0],
	        b = _example2[1],
	        c = _example2[2];

	    console.log(a, b, c);

	    ;

	    var _example3 = example2(),
	        foo = _example3.foo,
	        bar = _example3.bar;

	    console.log(foo, bar);
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);

/***/ })
/******/ ]);