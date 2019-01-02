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

	module.exports = __webpack_require__(4);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	    var Point = function Point(x, y) {
	        this.x = x;
	        this.y = y;
	    };

	    Point.prototype.toString = function () {
	        return '(' + this.x + ',' + this.y + ')';
	    };

	    var p = new Point(1, 2);

	    console.log(p.toString());
	}

	{
	    var Person = function Person() {
	        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'leixu';

	        _classCallCheck(this, Person);

	        this.name = name;
	    };

	    var v_person = new Person('lei');

	    console.log(v_person.name);
	}

	{
	    var _Person = function _Person() {
	        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tiandi';

	        _classCallCheck(this, _Person);

	        this.name = name;
	    };

	    var OnePerson = function (_Person2) {
	        _inherits(OnePerson, _Person2);

	        function OnePerson() {
	            _classCallCheck(this, OnePerson);

	            return _possibleConstructorReturn(this, (OnePerson.__proto__ || Object.getPrototypeOf(OnePerson)).apply(this, arguments));
	        }

	        return OnePerson;
	    }(_Person);

	    console.log('继承', new OnePerson('镰刀'));
	}

	{
	    var _Person3 = function _Person3() {
	        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tiandi';

	        _classCallCheck(this, _Person3);

	        this.name = name;
	    };

	    var _OnePerson = function (_Person4) {
	        _inherits(_OnePerson, _Person4);

	        function _OnePerson() {
	            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';

	            _classCallCheck(this, _OnePerson);

	            var _this2 = _possibleConstructorReturn(this, (_OnePerson.__proto__ || Object.getPrototypeOf(_OnePerson)).call(this, name));

	            _this2.type = 'person';
	            return _this2;
	        }

	        return _OnePerson;
	    }(_Person3);

	    console.log('继承', new _OnePerson('锤子'));
	}

/***/ })
/******/ ]);