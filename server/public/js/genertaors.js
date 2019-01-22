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

	module.exports = __webpack_require__(22);


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	{
	    // Genertaor基本定义

	    var helloWorldGenerator = /*#__PURE__*/regeneratorRuntime.mark(function helloWorldGenerator() {
	        return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return 'hello';

	                    case 2:
	                        _context.next = 4;
	                        return 'world';

	                    case 4:
	                        return _context.abrupt('return', 'ending');

	                    case 5:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, helloWorldGenerator, this);
	    });


	    var hw = helloWorldGenerator();

	    console.log(hw.next());
	    console.log(hw.next());
	    console.log(hw.next());
	    console.log(hw.next());
	}

	{
	    var obj = {};

	    obj[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        _context2.next = 2;
	                        return 1;

	                    case 2:
	                        _context2.next = 4;
	                        return 2;

	                    case 4:
	                        _context2.next = 6;
	                        return 3;

	                    case 6:
	                    case 'end':
	                        return _context2.stop();
	                }
	            }
	        }, _callee, this);
	    });

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var value = _step.value;

	            console.log('value', value);
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
	    var state = /*#__PURE__*/regeneratorRuntime.mark(function state() {
	        return regeneratorRuntime.wrap(function state$(_context3) {
	            while (1) {
	                switch (_context3.prev = _context3.next) {
	                    case 0:
	                        if (false) {
	                            _context3.next = 9;
	                            break;
	                        }

	                        _context3.next = 3;
	                        return 'A';

	                    case 3:
	                        _context3.next = 5;
	                        return 'B';

	                    case 5:
	                        _context3.next = 7;
	                        return 'C';

	                    case 7:
	                        _context3.next = 0;
	                        break;

	                    case 9:
	                    case 'end':
	                        return _context3.stop();
	                }
	            }
	        }, state, this);
	    });
	    var status = state();
	    console.log(status.next());
	    console.log(status.next());
	    console.log(status.next());
	    console.log(status.next());
	    console.log(status.next());
	}

	// {
	//     let state= async function (){
	//         while(1){
	//             await 'A';
	//             await 'B';
	//             await 'C';
	//         }
	//     }
	//     let status=state();
	//     console.log(status.next());
	//     console.log(status.next());
	//     console.log(status.next());
	//     console.log(status.next());
	//     console.log(status.next());
	// }

	{
	    var draw = function draw(count) {
	        // 具体的抽奖逻辑
	        console.log('\u5269\u4F59' + count);
	    };

	    var residue = /*#__PURE__*/regeneratorRuntime.mark(function residue(count) {
	        return regeneratorRuntime.wrap(function residue$(_context4) {
	            while (1) {
	                switch (_context4.prev = _context4.next) {
	                    case 0:
	                        if (!(count > 0)) {
	                            _context4.next = 6;
	                            break;
	                        }

	                        count--;
	                        _context4.next = 4;
	                        return draw(count);

	                    case 4:
	                        _context4.next = 0;
	                        break;

	                    case 6:
	                    case 'end':
	                        return _context4.stop();
	                }
	            }
	        }, residue, this);
	    });

	    var start = residue(5);
	    var btn = document.createElement('button');
	    btn.id = 'start';
	    btn.textContent = '抽奖';
	    document.body.appendChild(btn);
	    document.getElementById('start').addEventListener('click', function () {
	        start.next();
	    }, false);
	}

	{
	    // 长轮询
	    var ajax = /*#__PURE__*/regeneratorRuntime.mark(function ajax() {
	        return regeneratorRuntime.wrap(function ajax$(_context5) {
	            while (1) {
	                switch (_context5.prev = _context5.next) {
	                    case 0:
	                        _context5.next = 2;
	                        return new Promise(function (resolve, reject) {
	                            setTimeout(function () {
	                                resolve({ code: 0 });
	                            }, 200);
	                        });

	                    case 2:
	                    case 'end':
	                        return _context5.stop();
	                }
	            }
	        }, ajax, this);
	    });

	    var pull = function pull() {
	        var genertaor = ajax();
	        var step = genertaor.next();
	        step.value.then(function (d) {
	            if (d.code != 0) {
	                setTimeout(function () {
	                    console.info('wait');
	                    pull();
	                }, 1000);
	            } else {
	                console.log(d);
	            }
	        });
	    };

	    pull();
	}

/***/ })

/******/ });