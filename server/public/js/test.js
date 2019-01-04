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

	module.exports = __webpack_require__(363);


/***/ }),

/***/ 363:
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	{
	    var objEntries = /*#__PURE__*/regeneratorRuntime.mark(function objEntries(obj) {
	        var proKeys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, proKey;

	        return regeneratorRuntime.wrap(function objEntries$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        proKeys = Reflect.ownKeys(obj);
	                        // console.log(proKeys);

	                        _iteratorNormalCompletion = true;
	                        _didIteratorError = false;
	                        _iteratorError = undefined;
	                        _context.prev = 4;
	                        _iterator = proKeys[Symbol.iterator]();

	                    case 6:
	                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                            _context.next = 13;
	                            break;
	                        }

	                        proKey = _step.value;
	                        _context.next = 10;
	                        return [proKey, obj[proKey]];

	                    case 10:
	                        _iteratorNormalCompletion = true;
	                        _context.next = 6;
	                        break;

	                    case 13:
	                        _context.next = 19;
	                        break;

	                    case 15:
	                        _context.prev = 15;
	                        _context.t0 = _context['catch'](4);
	                        _didIteratorError = true;
	                        _iteratorError = _context.t0;

	                    case 19:
	                        _context.prev = 19;
	                        _context.prev = 20;

	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }

	                    case 22:
	                        _context.prev = 22;

	                        if (!_didIteratorError) {
	                            _context.next = 25;
	                            break;
	                        }

	                        throw _iteratorError;

	                    case 25:
	                        return _context.finish(22);

	                    case 26:
	                        return _context.finish(19);

	                    case 27:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, objEntries, this, [[4, 15, 19, 27], [20,, 22, 26]]);
	    });


	    var jane = { one: 'lei', two: 'xu' };

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = objEntries(jane)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            // console.log(`${key}, ${value}`);

	            var _step2$value = _slicedToArray(_step2.value, 2),
	                key = _step2$value[0],
	                value = _step2$value[1];
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
	    // const person = {
	    //     sayName() {
	    //         console.log('hello!');
	    //     },
	    // };
	    //
	    // console.log(person.sayName.name);

	    var obj = {
	        get foo() {},
	        set foo(x) {}
	    };

	    // const desc = Object.getOwnPropertyDescriptor(obj, 'foo');

	    // console.log(desc.get.name);
	    //
	    // console.log(desc.set.name);
	}

	{
	    var target = { a: 1 };

	    var source1 = { b: 2 };
	    var source2 = { c: 3 };

	    Object.assign(target, source1, source2);

	    // console.log(target);

	    var v1 = 'abc';
	    var v2 = true;
	    var v3 = 10;
	    // let obj = Object.assign({}, v1, v2, v3);
	    // console.log(obj);

	    var _obj = { a: 1 };
	    // console.log(Object.assign(obj) === obj);
	}

/***/ })

/******/ });