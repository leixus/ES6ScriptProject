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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	// function test() {
	//     for (let i = 0; i < 3; i ++) {
	//         console.log(i);
	//     }
	//     console.log(i);
	// }

	// test()

	// var tmp = 123;

	// if (true) {
	//     tmp = "abc";
	//     let tmp;
	//     console.log(tmp);
	// }

	// function last() {
	//     const Pi = 3.1415926;

	//     const k = {
	//         a: 1
	//     }

	//     k.b = 2;

	//     console.log(Pi, k);
	// }

	// last();

	// {
	//     let a, b, rest;
	//     [a, b] = [1, 2]
	//     console.log(a, b);
	// }

	// {
	//     let [x, y, z] = new Set(['a', 'b', 'c']);
	//     console.log(x);
	//     console.log(y);
	//     console.log(z);
	// }

	// {
	//     function fn() {
	//         return [1, 2];
	//     }

	//     let a, b;
	//     [a, b] = fn();

	//     console.log(a, b);
	// }

	// {
	//     let {
	//         a = 10, b = 5
	//     } = {
	//         a: 3
	//     };

	//     console.log(a, b);
	// }

	// {
	//     function* fibs() {
	//         let a = 0;
	//         let b = 1;
	//         while(true) {
	//             yield a;
	//             [a, b] = [b, a + b]
	//         }
	//     }

	//     let [first, second, third, fourth, fifth, sixth] = fibs();

	//     console.log(sixth);

	// }

	// {
	//     function f() {
	//         console.log('aaa');
	//     }

	//     let [x = f()] = [1]

	//     let x;
	//     if ([1][0] === undefined) {
	//         x = f();
	//     }
	// }

	// {
	//     let [foo = true] = [];

	//     console.log(foo);

	//     // let [x, y = 'b'] = ['a'];

	//     // console.log(x, y);

	//     let [x, y = '11'] = ['a', undefined];

	//     console.log(x, y);
	// }

	// {
	//     // 默认值
	//     function f() {
	//         console.log('aaa');
	//     }

	//     f();

	//     let [x = f()] = [1];

	//     console.log(x);

	//     console.log([1][0] === undefined);
	// }

	// 对象的结构复制

	// {
	//     let {foo, bar} = {foo: "aaa", bar: "bbb"}

	//     let { baz } = { foo: "aaa", bar: "bbb" };

	//     console.log(foo, bar);

	//     console.log(baz);
	// }

	// {
	//     let { foo: baz } = { foo: "aaa", bar: "bbb" };

	//     console.log(baz);

	//     console.log(foo);
	// }

	// {
	// let obj = {
	//     p: [
	//         'hello',
	//         {y: "world"}
	//     ]
	// }
	// let {p: [x, {y}]} = obj;

	// console.log(x, y);

	//     const node = {
	//         loc: {
	//             start: {
	//                 line: 1,
	//                 column: 5
	//             }
	//         }
	//     }

	//     let { loc, loc: { start }, loc: { start: { line }} } = node;

	//     console.log(start);
	//     console.log(line);
	//     console.log(loc);

	// }

	// {
	//     let obj = {};
	//     let arr = [];

	//     ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});

	//     console.log(obj);

	//     console.log(arr);
	// }

	// 指定默认值

	// {
	// var {x: y = 3} = {};

	// var {x: y = 3} = {x: 5};

	// var { message: msg = 'Something went wrong' } = {};

	// var {x = 6} = {x: undefined};

	// var {x = 3} = {x: null}

	// let {foo} = {bar: 'baz'};

	// let bar

	// ({foo: {bar}} = {foo: {bar: 'lk'}})

	// console.log(bar);

	// let x;

	// ({x} = {x: 1})

	// ({} = [true, false]);

	// ({} = 'abc');

	// ({} = []);

	// let { log, sin, cos } = Math;

	// console.log(log);

	// console.log(sin);

	// console.log(cos);

	// let arr = [10, 20, 30];

	// let {0: first, [arr.length -1]: last} = arr;

	// console.log(first);

	// const [a, b, c, d, e] = 'hello';

	// let {length : len} = 'hello';

	// let {toString: s} = 123;

	// let {toString: s} = true;

	// s === Number.prototype.toString

	// console.log(s === Number.prototype.toString);

	// }

	// 函数参数的解构赋值

	// {
	// function add([x, y]) {
	//     console.log(x + y);
	//     return x + y;
	// }

	// add([1, 4]);

	// [[1, 2], [4, 6]].map(([a, b]) => {
	// a + b
	// console.log(a + b);
	// });
	// }

	{}

/***/ })
/******/ ]);