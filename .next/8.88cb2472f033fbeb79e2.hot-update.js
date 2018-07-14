webpackHotUpdate(8,{

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(552);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_set__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_get__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_some__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_has__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isArray__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_last__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_forEach__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_forEach__);













var EventTarget = function EventTarget(target) {
  var _this = this;

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, EventTarget);

  this._handlers = {};
  this._pools = {};

  this._emit = function (name) {
    return function (event) {
      __WEBPACK_IMPORTED_MODULE_11_lodash_forEach___default()(_this._pools, function (pool, poolName) {
        var handlers = pool[name];


        if (!handlers) return;
        if (poolName === 'default') {
          __WEBPACK_IMPORTED_MODULE_11_lodash_forEach___default()(handlers, function (handler) {
            return handler(event);
          });
          return;
        }
        __WEBPACK_IMPORTED_MODULE_10_lodash_last___default()(handlers)(event);
      });
    };
  };

  this._normalize = function (handlers) {
    return __WEBPACK_IMPORTED_MODULE_9_lodash_isArray___default()(handlers) ? handlers : [handlers];
  };

  this._listen = function (name) {
    if (__WEBPACK_IMPORTED_MODULE_8_lodash_has___default()(_this._handlers, name)) return;
    var handler = _this._emit(name);

    _this.target.addEventListener(name, handler);
    _this._handlers[name] = handler;
  };

  this._unlisten = function (name) {
    if (__WEBPACK_IMPORTED_MODULE_7_lodash_some___default()(_this._pools, name)) return;
    var handler = _this._handlers[name];


    _this.target.removeEventListener(name, handler);
    delete _this._handlers[name];
  };

  this.empty = function () {
    return __WEBPACK_IMPORTED_MODULE_6_lodash_isEmpty___default()(_this._handlers);
  };

  this.sub = function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()([].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_4_lodash_get___default()(_this._pools, pool + '.' + name, [])), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this._normalize(handlers))));

    _this._listen(name);
    __WEBPACK_IMPORTED_MODULE_3_lodash_set___default()(_this._pools, pool + '.' + name, events);
  };

  this.unsub = function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = __WEBPACK_IMPORTED_MODULE_2_lodash_without___default.a.apply(undefined, [__WEBPACK_IMPORTED_MODULE_4_lodash_get___default()(_this._pools, pool + '.' + name, [])].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this._normalize(handlers))));

    if (events.length > 0) {
      __WEBPACK_IMPORTED_MODULE_3_lodash_set___default()(_this._pools, pool + '.' + name, events);
      return;
    }

    __WEBPACK_IMPORTED_MODULE_3_lodash_set___default()(_this._pools, pool + '.' + name, undefined);
    _this._unlisten(name);
  };

  this.target = target;
}

// ------------------------------------
// Utils
// ------------------------------------

// ------------------------------------
// Listeners handling
// ------------------------------------

// ------------------------------------
// Pub/sub
// ------------------------------------

;

/* harmony default export */ __webpack_exports__["a"] = (EventTarget);

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = createShorthand;
/* harmony export (immutable) */ __webpack_exports__["h"] = createShorthandFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHTMLDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHTMLIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createHTMLImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createHTMLInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createHTMLLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createHTMLParagraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isArray__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isString__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNil__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);














// ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @returns {object|null}
 */
function createShorthand(Component, mapValueToProps, val) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }
  // short circuit noop values
  if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default()(val) || __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean___default()(val)) return null;

  var valIsString = __WEBPACK_IMPORTED_MODULE_7_lodash_isString___default()(val);
  var valIsNumber = __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default()(val);

  var isReactElement = Object(__WEBPACK_IMPORTED_MODULE_11_react__["isValidElement"])(val);
  var isPropsObject = __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default()(val);
  var isPrimitiveValue = valIsString || valIsNumber || __WEBPACK_IMPORTED_MODULE_4_lodash_isArray___default()(val);

  // unhandled type return null
  /* eslint-disable no-console */
  if (!isReactElement && !isPropsObject && !isPrimitiveValue) {
    if (true) {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement.', ' Use null|undefined|boolean for none', ' Received ' + (typeof val === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(val)) + '.'].join(''));
    }
    return null;
  }
  /* eslint-enable no-console */

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === undefined ? {} : _options$defaultProps;

  // User's props

  var usersProps = isReactElement && val.props || isPropsObject && val || isPrimitiveValue && mapValueToProps(val);

  // Override props
  var _options$overrideProp = options.overrideProps,
      overrideProps = _options$overrideProp === undefined ? {} : _options$overrideProp;

  overrideProps = __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(overrideProps) ? overrideProps(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaultProps, usersProps)) : overrideProps;

  // Merge props
  /* eslint-disable react/prop-types */
  var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaultProps, usersProps, overrideProps);

  // Merge className
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default()(mergedClassesNames.split(' ')).join(' ');
  }

  // Merge style
  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaultProps.style, usersProps.style, overrideProps.style);
  }

  // ----------------------------------------
  // Get key
  // ----------------------------------------

  // Use key, childKey, or generate key
  if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default()(props.key)) {
    var childKey = props.childKey;


    if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default()(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (valIsString || valIsNumber) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  }
  /* eslint-enable react/prop-types */

  // ----------------------------------------
  // Create Element
  // ----------------------------------------

  // Clone ReactElements
  if (isReactElement) return Object(__WEBPACK_IMPORTED_MODULE_11_react__["cloneElement"])(val, props);

  // Create ReactElements from built up props
  if (isPrimitiveValue || isPropsObject) return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(Component, props);
}

// ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */
createShorthand.handledProps = [];
function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
}

// ============================================================
// HTML Factories
// ============================================================
var createHTMLDivision = createShorthandFactory('div', function (val) {
  return { children: val };
});
var createHTMLIframe = createShorthandFactory('iframe', function (src) {
  return { src: src };
});
var createHTMLImage = createShorthandFactory('img', function (val) {
  return { src: val };
});
var createHTMLInput = createShorthandFactory('input', function (val) {
  return { type: val };
});
var createHTMLLabel = createShorthandFactory('label', function (val) {
  return { children: val };
});
var createHTMLParagraph = createShorthandFactory('p', function (val) {
  return { children: val };
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC44OGNiMjQ3MmYwMzNmYmViNzllMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC91bmlxLmpzPzZjYzAwM2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2V2ZW50U3RhY2svRXZlbnRUYXJnZXQuanM/NmNjMDAzZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvZmFjdG9yaWVzLmpzPzZjYzAwM2QiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiBhbiBhcnJheSwgdXNpbmdcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGluIHdoaWNoIG9ubHkgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgZWFjaCBlbGVtZW50XG4gKiBpcyBrZXB0LiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyXG4gKiBpbiB0aGUgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXEoWzIsIDEsIDJdKTtcbiAqIC8vID0+IFsyLCAxXVxuICovXG5mdW5jdGlvbiB1bmlxKGFycmF5KSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5KSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcS5qc1xuLy8gbW9kdWxlIGlkID0gNTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA4IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF93aXRob3V0IGZyb20gJ2xvZGFzaC93aXRob3V0JztcbmltcG9ydCBfc2V0IGZyb20gJ2xvZGFzaC9zZXQnO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgX3VuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBfc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5pbXBvcnQgX2hhcyBmcm9tICdsb2Rhc2gvaGFzJztcbmltcG9ydCBfaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgX2xhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IF9mb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JFYWNoJztcblxudmFyIEV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gRXZlbnRUYXJnZXQodGFyZ2V0KSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50VGFyZ2V0KTtcblxuICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICB0aGlzLl9wb29scyA9IHt9O1xuXG4gIHRoaXMuX2VtaXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF9mb3JFYWNoKF90aGlzLl9wb29scywgZnVuY3Rpb24gKHBvb2wsIHBvb2xOYW1lKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHBvb2xbbmFtZV07XG5cblxuICAgICAgICBpZiAoIWhhbmRsZXJzKSByZXR1cm47XG4gICAgICAgIGlmIChwb29sTmFtZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgX2ZvckVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcihldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9sYXN0KGhhbmRsZXJzKShldmVudCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuX25vcm1hbGl6ZSA9IGZ1bmN0aW9uIChoYW5kbGVycykge1xuICAgIHJldHVybiBfaXNBcnJheShoYW5kbGVycykgPyBoYW5kbGVycyA6IFtoYW5kbGVyc107XG4gIH07XG5cbiAgdGhpcy5fbGlzdGVuID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoX2hhcyhfdGhpcy5faGFuZGxlcnMsIG5hbWUpKSByZXR1cm47XG4gICAgdmFyIGhhbmRsZXIgPSBfdGhpcy5fZW1pdChuYW1lKTtcblxuICAgIF90aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpO1xuICAgIF90aGlzLl9oYW5kbGVyc1tuYW1lXSA9IGhhbmRsZXI7XG4gIH07XG5cbiAgdGhpcy5fdW5saXN0ZW4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChfc29tZShfdGhpcy5fcG9vbHMsIG5hbWUpKSByZXR1cm47XG4gICAgdmFyIGhhbmRsZXIgPSBfdGhpcy5faGFuZGxlcnNbbmFtZV07XG5cblxuICAgIF90aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpO1xuICAgIGRlbGV0ZSBfdGhpcy5faGFuZGxlcnNbbmFtZV07XG4gIH07XG5cbiAgdGhpcy5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzRW1wdHkoX3RoaXMuX2hhbmRsZXJzKTtcbiAgfTtcblxuICB0aGlzLnN1YiA9IGZ1bmN0aW9uIChuYW1lLCBoYW5kbGVycykge1xuICAgIHZhciBwb29sID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnZGVmYXVsdCc7XG5cbiAgICB2YXIgZXZlbnRzID0gX3VuaXEoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfZ2V0KF90aGlzLl9wb29scywgcG9vbCArICcuJyArIG5hbWUsIFtdKSksIF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5fbm9ybWFsaXplKGhhbmRsZXJzKSkpKTtcblxuICAgIF90aGlzLl9saXN0ZW4obmFtZSk7XG4gICAgX3NldChfdGhpcy5fcG9vbHMsIHBvb2wgKyAnLicgKyBuYW1lLCBldmVudHMpO1xuICB9O1xuXG4gIHRoaXMudW5zdWIgPSBmdW5jdGlvbiAobmFtZSwgaGFuZGxlcnMpIHtcbiAgICB2YXIgcG9vbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2RlZmF1bHQnO1xuXG4gICAgdmFyIGV2ZW50cyA9IF93aXRob3V0LmFwcGx5KHVuZGVmaW5lZCwgW19nZXQoX3RoaXMuX3Bvb2xzLCBwb29sICsgJy4nICsgbmFtZSwgW10pXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLl9ub3JtYWxpemUoaGFuZGxlcnMpKSkpO1xuXG4gICAgaWYgKGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBfc2V0KF90aGlzLl9wb29scywgcG9vbCArICcuJyArIG5hbWUsIGV2ZW50cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3NldChfdGhpcy5fcG9vbHMsIHBvb2wgKyAnLicgKyBuYW1lLCB1bmRlZmluZWQpO1xuICAgIF90aGlzLl91bmxpc3RlbihuYW1lKTtcbiAgfTtcblxuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVdGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTGlzdGVuZXJzIGhhbmRsaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdWIvc3ViXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudFRhcmdldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2xpYi9ldmVudFN0YWNrL0V2ZW50VGFyZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDgiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgX3VuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuaW1wb3J0IF9pc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBfaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgX2lzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IF9pc051bWJlciBmcm9tICdsb2Rhc2gvaXNOdW1iZXInO1xuaW1wb3J0IF9pc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IF9pc0Jvb2xlYW4gZnJvbSAnbG9kYXNoL2lzQm9vbGVhbic7XG5pbXBvcnQgX2lzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5cbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIGlzVmFsaWRFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZhY3Rvcmllc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQSBtb3JlIHJvYnVzdCBSZWFjdC5jcmVhdGVFbGVtZW50LiBJdCBjYW4gY3JlYXRlIGVsZW1lbnRzIGZyb20gcHJpbWl0aXZlIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufHN0cmluZ30gQ29tcG9uZW50IEEgUmVhY3RDbGFzcyBvciBzdHJpbmdcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcFZhbHVlVG9Qcm9wcyBBIGZ1bmN0aW9uIHRoYXQgbWFwcyBhIHByaW1pdGl2ZSB2YWx1ZSB0byB0aGUgQ29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R8ZnVuY3Rpb259IHZhbCBUaGUgdmFsdWUgdG8gY3JlYXRlIGEgUmVhY3RFbGVtZW50IGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5kZWZhdWx0UHJvcHM9e31dIERlZmF1bHQgcHJvcHMgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gW29wdGlvbnMub3ZlcnJpZGVQcm9wcz17fV0gT3ZlcnJpZGUgcHJvcHMgb2JqZWN0IG9yIGZ1bmN0aW9uIChjYWxsZWQgd2l0aCByZWd1bGFyIHByb3BzKVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hvcnRoYW5kKENvbXBvbmVudCwgbWFwVmFsdWVUb1Byb3BzLCB2YWwpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCkgQ29tcG9uZW50IG11c3QgYmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24uJyk7XG4gIH1cbiAgLy8gc2hvcnQgY2lyY3VpdCBub29wIHZhbHVlc1xuICBpZiAoX2lzTmlsKHZhbCkgfHwgX2lzQm9vbGVhbih2YWwpKSByZXR1cm4gbnVsbDtcblxuICB2YXIgdmFsSXNTdHJpbmcgPSBfaXNTdHJpbmcodmFsKTtcbiAgdmFyIHZhbElzTnVtYmVyID0gX2lzTnVtYmVyKHZhbCk7XG5cbiAgdmFyIGlzUmVhY3RFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQodmFsKTtcbiAgdmFyIGlzUHJvcHNPYmplY3QgPSBfaXNQbGFpbk9iamVjdCh2YWwpO1xuICB2YXIgaXNQcmltaXRpdmVWYWx1ZSA9IHZhbElzU3RyaW5nIHx8IHZhbElzTnVtYmVyIHx8IF9pc0FycmF5KHZhbCk7XG5cbiAgLy8gdW5oYW5kbGVkIHR5cGUgcmV0dXJuIG51bGxcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAoIWlzUmVhY3RFbGVtZW50ICYmICFpc1Byb3BzT2JqZWN0ICYmICFpc1ByaW1pdGl2ZVZhbHVlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydTaG9ydGhhbmQgdmFsdWUgbXVzdCBiZSBhIHN0cmluZ3xudW1iZXJ8YXJyYXl8b2JqZWN0fFJlYWN0RWxlbWVudC4nLCAnIFVzZSBudWxsfHVuZGVmaW5lZHxib29sZWFuIGZvciBub25lJywgJyBSZWNlaXZlZCAnICsgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCkpICsgJy4nXS5qb2luKCcnKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQnVpbGQgdXAgcHJvcHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgX29wdGlvbnMkZGVmYXVsdFByb3BzID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMsXG4gICAgICBkZWZhdWx0UHJvcHMgPSBfb3B0aW9ucyRkZWZhdWx0UHJvcHMgPT09IHVuZGVmaW5lZCA/IHt9IDogX29wdGlvbnMkZGVmYXVsdFByb3BzO1xuXG4gIC8vIFVzZXIncyBwcm9wc1xuXG4gIHZhciB1c2Vyc1Byb3BzID0gaXNSZWFjdEVsZW1lbnQgJiYgdmFsLnByb3BzIHx8IGlzUHJvcHNPYmplY3QgJiYgdmFsIHx8IGlzUHJpbWl0aXZlVmFsdWUgJiYgbWFwVmFsdWVUb1Byb3BzKHZhbCk7XG5cbiAgLy8gT3ZlcnJpZGUgcHJvcHNcbiAgdmFyIF9vcHRpb25zJG92ZXJyaWRlUHJvcCA9IG9wdGlvbnMub3ZlcnJpZGVQcm9wcyxcbiAgICAgIG92ZXJyaWRlUHJvcHMgPSBfb3B0aW9ucyRvdmVycmlkZVByb3AgPT09IHVuZGVmaW5lZCA/IHt9IDogX29wdGlvbnMkb3ZlcnJpZGVQcm9wO1xuXG4gIG92ZXJyaWRlUHJvcHMgPSBfaXNGdW5jdGlvbihvdmVycmlkZVByb3BzKSA/IG92ZXJyaWRlUHJvcHMoX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywgdXNlcnNQcm9wcykpIDogb3ZlcnJpZGVQcm9wcztcblxuICAvLyBNZXJnZSBwcm9wc1xuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHVzZXJzUHJvcHMsIG92ZXJyaWRlUHJvcHMpO1xuXG4gIC8vIE1lcmdlIGNsYXNzTmFtZVxuICBpZiAoZGVmYXVsdFByb3BzLmNsYXNzTmFtZSB8fCBvdmVycmlkZVByb3BzLmNsYXNzTmFtZSB8fCB1c2Vyc1Byb3BzLmNsYXNzTmFtZSkge1xuICAgIHZhciBtZXJnZWRDbGFzc2VzTmFtZXMgPSBjeChkZWZhdWx0UHJvcHMuY2xhc3NOYW1lLCBvdmVycmlkZVByb3BzLmNsYXNzTmFtZSwgdXNlcnNQcm9wcy5jbGFzc05hbWUpO1xuICAgIHByb3BzLmNsYXNzTmFtZSA9IF91bmlxKG1lcmdlZENsYXNzZXNOYW1lcy5zcGxpdCgnICcpKS5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBNZXJnZSBzdHlsZVxuICBpZiAoZGVmYXVsdFByb3BzLnN0eWxlIHx8IG92ZXJyaWRlUHJvcHMuc3R5bGUgfHwgdXNlcnNQcm9wcy5zdHlsZSkge1xuICAgIHByb3BzLnN0eWxlID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcy5zdHlsZSwgdXNlcnNQcm9wcy5zdHlsZSwgb3ZlcnJpZGVQcm9wcy5zdHlsZSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdldCBrZXlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFVzZSBrZXksIGNoaWxkS2V5LCBvciBnZW5lcmF0ZSBrZXlcbiAgaWYgKF9pc05pbChwcm9wcy5rZXkpKSB7XG4gICAgdmFyIGNoaWxkS2V5ID0gcHJvcHMuY2hpbGRLZXk7XG5cblxuICAgIGlmICghX2lzTmlsKGNoaWxkS2V5KSkge1xuICAgICAgLy8gYXBwbHkgYW5kIGNvbnN1bWUgdGhlIGNoaWxkS2V5XG4gICAgICBwcm9wcy5rZXkgPSB0eXBlb2YgY2hpbGRLZXkgPT09ICdmdW5jdGlvbicgPyBjaGlsZEtleShwcm9wcykgOiBjaGlsZEtleTtcbiAgICAgIGRlbGV0ZSBwcm9wcy5jaGlsZEtleTtcbiAgICB9IGVsc2UgaWYgKHZhbElzU3RyaW5nIHx8IHZhbElzTnVtYmVyKSB7XG4gICAgICAvLyB1c2Ugc3RyaW5nL251bWJlciBzaG9ydGhhbmQgdmFsdWVzIGFzIHRoZSBrZXlcbiAgICAgIHByb3BzLmtleSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDcmVhdGUgRWxlbWVudFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQ2xvbmUgUmVhY3RFbGVtZW50c1xuICBpZiAoaXNSZWFjdEVsZW1lbnQpIHJldHVybiBjbG9uZUVsZW1lbnQodmFsLCBwcm9wcyk7XG5cbiAgLy8gQ3JlYXRlIFJlYWN0RWxlbWVudHMgZnJvbSBidWlsdCB1cCBwcm9wc1xuICBpZiAoaXNQcmltaXRpdmVWYWx1ZSB8fCBpc1Byb3BzT2JqZWN0KSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGYWN0b3J5IENyZWF0b3JzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYGNyZWF0ZVNob3J0aGFuZGAgZnVuY3Rpb24gdGhhdCBpcyB3YWl0aW5nIGZvciBhIHZhbHVlIGFuZCBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb258c3RyaW5nfSBDb21wb25lbnQgQSBSZWFjdENsYXNzIG9yIHN0cmluZ1xuICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwVmFsdWVUb1Byb3BzIEEgZnVuY3Rpb24gdGhhdCBtYXBzIGEgcHJpbWl0aXZlIHZhbHVlIHRvIHRoZSBDb21wb25lbnQgcHJvcHNcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gQSBzaG9ydGhhbmQgZmFjdG9yeSBmdW5jdGlvbiB3YWl0aW5nIGZvciBgdmFsYCBhbmQgYGRlZmF1bHRQcm9wc2AuXG4gKi9cbmNyZWF0ZVNob3J0aGFuZC5oYW5kbGVkUHJvcHMgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KENvbXBvbmVudCwgbWFwVmFsdWVUb1Byb3BzKSB7XG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCkgQ29tcG9uZW50IG11c3QgYmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjcmVhdGVTaG9ydGhhbmQoQ29tcG9uZW50LCBtYXBWYWx1ZVRvUHJvcHMsIHZhbCwgb3B0aW9ucyk7XG4gIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSFRNTCBGYWN0b3JpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IHZhciBjcmVhdGVIVE1MRGl2aXNpb24gPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdkaXYnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7IGNoaWxkcmVuOiB2YWwgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MSWZyYW1lID0gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgnaWZyYW1lJywgZnVuY3Rpb24gKHNyYykge1xuICByZXR1cm4geyBzcmM6IHNyYyB9O1xufSk7XG5leHBvcnQgdmFyIGNyZWF0ZUhUTUxJbWFnZSA9IGNyZWF0ZVNob3J0aGFuZEZhY3RvcnkoJ2ltZycsIGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHsgc3JjOiB2YWwgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MSW5wdXQgPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdpbnB1dCcsIGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHsgdHlwZTogdmFsIH07XG59KTtcbmV4cG9ydCB2YXIgY3JlYXRlSFRNTExhYmVsID0gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgnbGFiZWwnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7IGNoaWxkcmVuOiB2YWwgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MUGFyYWdyYXBoID0gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgncCcsIGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHsgY2hpbGRyZW46IHZhbCB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvZmFjdG9yaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9