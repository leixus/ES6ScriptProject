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

	module.exports = __webpack_require__(6);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// {
	//     function Point(x, y) {
	//         this.x = x;
	//         this.y = y;
	//     }
	//
	//     Point.prototype.toString = function () {
	//         return '('+ this.x + ',' + this.y + ')';
	//     };
	//
	//     var p = new Point(1, 2);
	//
	//     console.log(p.toString());
	// }

	{
	    var Person = function () {
	        function Person() {
	            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'leixu';

	            _classCallCheck(this, Person);

	            this.name = name;
	        }

	        _createClass(Person, [{
	            key: 'getPersion',
	            value: function getPersion() {
	                this.setPersion(this.name);
	                return this.name;
	            }
	        }, {
	            key: 'setPersion',
	            value: function setPersion(name) {
	                console.log(name);
	            }
	        }]);

	        return Person;
	    }();

	    var v_person = new Person('lei');

	    console.log(v_person.name);

	    v_person.getPersion();
	}

	// {
	//     class Person {
	//         constructor(name = 'tiandi') {
	//             this.name = name;
	//         }
	//     }
	//
	//     class OnePerson extends Person {
	//
	//     }
	//
	//     console.log('继承', new OnePerson('镰刀'));
	// }
	//
	// {
	//     class Person {
	//         constructor(name = 'tiandi') {
	//             this.name = name;
	//         }
	//     }
	//
	//     class OnePerson extends Person {
	//         constructor(name = 'child') {
	//             super(name);
	//             this.type = 'person'
	//         }
	//     }
	//
	//     console.log('继承', new OnePerson('锤子'));
	// }

/***/ })

/******/ });