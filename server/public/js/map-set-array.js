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

	module.exports = __webpack_require__(359);


/***/ }),

/***/ 359:
/***/ (function(module, exports) {

	'use strict';

	// {
	//     // 增 删 改 查
	//
	//     let map = new Map();
	//
	//     let array = [];
	//
	//     // 增
	//     map.set('t', 1);
	//
	//     array.push({'t': 1});
	//
	//     // console.log(map.get('t'));
	//     // console.log(array);
	//
	//     console.info('map-array', map, array);
	//
	//     // 查
	//     let map_exist = map.has('t');
	//
	//     let array_exist = array.find(item => item.t);
	//
	//     console.info('map_array', map_exist, array_exist);
	//
	//     // 改
	//     map.set('t', 2);
	//
	//     array.forEach(item => item.t? item.t = 2 : '');
	//
	//     console.log('map-array-two', map, array);
	//
	//     // 删
	//     map.delete('t');
	//
	//     let index = array.findIndex(item => item.t);
	//
	//     array.splice(index, 1);
	//
	//     // console.log(index);
	//
	//     console.info('map-array-del', map, array)
	// }

	{
	    console.log('Set');
	}

	{
	    var set = new Set();

	    var array = [];

	    // 增删改查

	    // 增
	    set.add({ t: 1 });

	    array.push({ t: 1 });

	    console.log(set, array);

	    // 查
	    var set_exist = set.has({ t: 1 });

	    console.log(set_exist);
	}

/***/ })

/******/ });