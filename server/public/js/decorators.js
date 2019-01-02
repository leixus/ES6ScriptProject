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

	module.exports = __webpack_require__(20);


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;

	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }

	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);

	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }

	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }

	    return desc;
	}

	{
	    var _desc, _value, _class;

	    // 修饰方法
	    var readonly = function readonly(target, name, descriptor) {
	        descriptor.writable = false;
	        return descriptor;
	    };

	    var Test = (_class = function () {
	        function Test() {
	            _classCallCheck(this, Test);
	        }

	        _createClass(Test, [{
	            key: 'time',
	            value: function time() {
	                return '2019-01-02';
	            }
	        }]);

	        return Test;
	    }(), (_applyDecoratedDescriptor(_class.prototype, 'time', [readonly], Object.getOwnPropertyDescriptor(_class.prototype, 'time'), _class.prototype)), _class);


	    var test = new Test();

	    // test.time = function () {
	    //     console.log('reset time');
	    //     return 'reset 2019-01-02'
	    // }

	    console.log(test.time());
	}

	{
	    var _class2;

	    var typename = function typename(target, name, descriptor) {
	        target.myname = 'hello';
	    };

	    var _Test = typename(_class2 = function _Test() {
	        _classCallCheck(this, _Test);
	    }) || _class2;

	    console.log('类修饰符', _Test.myname);
	}

	{
	    var _dec, _dec2, _desc2, _value2, _class3;

	    var log = function log(type) {
	        return function (target, name, descriptor) {
	            // descriptor.value就是show方法
	            var src_method = descriptor.value;
	            descriptor.value = function () {
	                for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	                    arg[_key] = arguments[_key];
	                }

	                // 先执行show方法
	                src_method.apply(target, arg);
	                console.log('log ' + type);
	            };
	            // console.log(`log ${type}`);
	        };
	    };

	    var Ad = (_dec = log('show'), _dec2 = log('clcik'), (_class3 = function () {
	        function Ad() {
	            _classCallCheck(this, Ad);
	        }

	        _createClass(Ad, [{
	            key: 'show',
	            value: function show() {
	                console.log('AD is show');
	            }
	        }, {
	            key: 'click',
	            value: function click() {
	                console.log('AD is click');
	            }
	        }]);

	        return Ad;
	    }(), (_applyDecoratedDescriptor(_class3.prototype, 'show', [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, 'show'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'click', [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, 'click'), _class3.prototype)), _class3));


	    var ad = new Ad();
	    ad.show();
	    ad.click();
	}

/***/ })

/******/ });