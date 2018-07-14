webpackHotUpdate(7,{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy44OGNiMjQ3MmYwMzNmYmViNzllMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC91bmlxLmpzP2NjMDg4NjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2V2ZW50U3RhY2svRXZlbnRUYXJnZXQuanM/NTI2NDczYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvZmFjdG9yaWVzLmpzPzUyNjQ3M2MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiBhbiBhcnJheSwgdXNpbmdcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGluIHdoaWNoIG9ubHkgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgZWFjaCBlbGVtZW50XG4gKiBpcyBrZXB0LiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyXG4gKiBpbiB0aGUgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXEoWzIsIDEsIDJdKTtcbiAqIC8vID0+IFsyLCAxXVxuICovXG5mdW5jdGlvbiB1bmlxKGFycmF5KSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5KSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcS5qc1xuLy8gbW9kdWxlIGlkID0gNTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA3IDgiLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3dpdGhvdXQgZnJvbSAnbG9kYXNoL3dpdGhvdXQnO1xuaW1wb3J0IF9zZXQgZnJvbSAnbG9kYXNoL3NldCc7XG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBfdW5pcSBmcm9tICdsb2Rhc2gvdW5pcSc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IF9zb21lIGZyb20gJ2xvZGFzaC9zb21lJztcbmltcG9ydCBfaGFzIGZyb20gJ2xvZGFzaC9oYXMnO1xuaW1wb3J0IF9pc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBfbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCc7XG5pbXBvcnQgX2ZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnO1xuXG52YXIgRXZlbnRUYXJnZXQgPSBmdW5jdGlvbiBFdmVudFRhcmdldCh0YXJnZXQpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRUYXJnZXQpO1xuXG4gIHRoaXMuX2hhbmRsZXJzID0ge307XG4gIHRoaXMuX3Bvb2xzID0ge307XG5cbiAgdGhpcy5fZW1pdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX2ZvckVhY2goX3RoaXMuX3Bvb2xzLCBmdW5jdGlvbiAocG9vbCwgcG9vbE5hbWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gcG9vbFtuYW1lXTtcblxuXG4gICAgICAgIGlmICghaGFuZGxlcnMpIHJldHVybjtcbiAgICAgICAgaWYgKHBvb2xOYW1lID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICBfZm9yRWFjaChoYW5kbGVycywgZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX2xhc3QoaGFuZGxlcnMpKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdGhpcy5fbm9ybWFsaXplID0gZnVuY3Rpb24gKGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIF9pc0FycmF5KGhhbmRsZXJzKSA/IGhhbmRsZXJzIDogW2hhbmRsZXJzXTtcbiAgfTtcblxuICB0aGlzLl9saXN0ZW4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChfaGFzKF90aGlzLl9oYW5kbGVycywgbmFtZSkpIHJldHVybjtcbiAgICB2YXIgaGFuZGxlciA9IF90aGlzLl9lbWl0KG5hbWUpO1xuXG4gICAgX3RoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcik7XG4gICAgX3RoaXMuX2hhbmRsZXJzW25hbWVdID0gaGFuZGxlcjtcbiAgfTtcblxuICB0aGlzLl91bmxpc3RlbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKF9zb21lKF90aGlzLl9wb29scywgbmFtZSkpIHJldHVybjtcbiAgICB2YXIgaGFuZGxlciA9IF90aGlzLl9oYW5kbGVyc1tuYW1lXTtcblxuXG4gICAgX3RoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcik7XG4gICAgZGVsZXRlIF90aGlzLl9oYW5kbGVyc1tuYW1lXTtcbiAgfTtcblxuICB0aGlzLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNFbXB0eShfdGhpcy5faGFuZGxlcnMpO1xuICB9O1xuXG4gIHRoaXMuc3ViID0gZnVuY3Rpb24gKG5hbWUsIGhhbmRsZXJzKSB7XG4gICAgdmFyIHBvb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdkZWZhdWx0JztcblxuICAgIHZhciBldmVudHMgPSBfdW5pcShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF9nZXQoX3RoaXMuX3Bvb2xzLCBwb29sICsgJy4nICsgbmFtZSwgW10pKSwgX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLl9ub3JtYWxpemUoaGFuZGxlcnMpKSkpO1xuXG4gICAgX3RoaXMuX2xpc3RlbihuYW1lKTtcbiAgICBfc2V0KF90aGlzLl9wb29scywgcG9vbCArICcuJyArIG5hbWUsIGV2ZW50cyk7XG4gIH07XG5cbiAgdGhpcy51bnN1YiA9IGZ1bmN0aW9uIChuYW1lLCBoYW5kbGVycykge1xuICAgIHZhciBwb29sID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnZGVmYXVsdCc7XG5cbiAgICB2YXIgZXZlbnRzID0gX3dpdGhvdXQuYXBwbHkodW5kZWZpbmVkLCBbX2dldChfdGhpcy5fcG9vbHMsIHBvb2wgKyAnLicgKyBuYW1lLCBbXSldLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuX25vcm1hbGl6ZShoYW5kbGVycykpKSk7XG5cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIF9zZXQoX3RoaXMuX3Bvb2xzLCBwb29sICsgJy4nICsgbmFtZSwgZXZlbnRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfc2V0KF90aGlzLl9wb29scywgcG9vbCArICcuJyArIG5hbWUsIHVuZGVmaW5lZCk7XG4gICAgX3RoaXMuX3VubGlzdGVuKG5hbWUpO1xuICB9O1xuXG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMaXN0ZW5lcnMgaGFuZGxpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1Yi9zdWJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50VGFyZ2V0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2V2ZW50U3RhY2svRXZlbnRUYXJnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNyA4IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF91bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcbmltcG9ydCBfaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5pbXBvcnQgX2lzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IF9pc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBfaXNOdW1iZXIgZnJvbSAnbG9kYXNoL2lzTnVtYmVyJztcbmltcG9ydCBfaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcbmltcG9ydCBfaXNCb29sZWFuIGZyb20gJ2xvZGFzaC9pc0Jvb2xlYW4nO1xuaW1wb3J0IF9pc05pbCBmcm9tICdsb2Rhc2gvaXNOaWwnO1xuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGYWN0b3JpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEEgbW9yZSByb2J1c3QgUmVhY3QuY3JlYXRlRWxlbWVudC4gSXQgY2FuIGNyZWF0ZSBlbGVtZW50cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IENvbXBvbmVudCBBIFJlYWN0Q2xhc3Mgb3Igc3RyaW5nXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBWYWx1ZVRvUHJvcHMgQSBmdW5jdGlvbiB0aGF0IG1hcHMgYSBwcmltaXRpdmUgdmFsdWUgdG8gdGhlIENvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fGZ1bmN0aW9ufSB2YWwgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhIFJlYWN0RWxlbWVudCBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuZGVmYXVsdFByb3BzPXt9XSBEZWZhdWx0IHByb3BzIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IFtvcHRpb25zLm92ZXJyaWRlUHJvcHM9e31dIE92ZXJyaWRlIHByb3BzIG9iamVjdCBvciBmdW5jdGlvbiAoY2FsbGVkIHdpdGggcmVndWxhciBwcm9wcylcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNob3J0aGFuZChDb21wb25lbnQsIG1hcFZhbHVlVG9Qcm9wcywgdmFsKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICBpZiAodHlwZW9mIENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgpIENvbXBvbmVudCBtdXN0IGJlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLicpO1xuICB9XG4gIC8vIHNob3J0IGNpcmN1aXQgbm9vcCB2YWx1ZXNcbiAgaWYgKF9pc05pbCh2YWwpIHx8IF9pc0Jvb2xlYW4odmFsKSkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHZhbElzU3RyaW5nID0gX2lzU3RyaW5nKHZhbCk7XG4gIHZhciB2YWxJc051bWJlciA9IF9pc051bWJlcih2YWwpO1xuXG4gIHZhciBpc1JlYWN0RWxlbWVudCA9IGlzVmFsaWRFbGVtZW50KHZhbCk7XG4gIHZhciBpc1Byb3BzT2JqZWN0ID0gX2lzUGxhaW5PYmplY3QodmFsKTtcbiAgdmFyIGlzUHJpbWl0aXZlVmFsdWUgPSB2YWxJc1N0cmluZyB8fCB2YWxJc051bWJlciB8fCBfaXNBcnJheSh2YWwpO1xuXG4gIC8vIHVuaGFuZGxlZCB0eXBlIHJldHVybiBudWxsXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKCFpc1JlYWN0RWxlbWVudCAmJiAhaXNQcm9wc09iamVjdCAmJiAhaXNQcmltaXRpdmVWYWx1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnU2hvcnRoYW5kIHZhbHVlIG11c3QgYmUgYSBzdHJpbmd8bnVtYmVyfGFycmF5fG9iamVjdHxSZWFjdEVsZW1lbnQuJywgJyBVc2UgbnVsbHx1bmRlZmluZWR8Ym9vbGVhbiBmb3Igbm9uZScsICcgUmVjZWl2ZWQgJyArICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSArICcuJ10uam9pbignJykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEJ1aWxkIHVwIHByb3BzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIF9vcHRpb25zJGRlZmF1bHRQcm9wcyA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLFxuICAgICAgZGVmYXVsdFByb3BzID0gX29wdGlvbnMkZGVmYXVsdFByb3BzID09PSB1bmRlZmluZWQgPyB7fSA6IF9vcHRpb25zJGRlZmF1bHRQcm9wcztcblxuICAvLyBVc2VyJ3MgcHJvcHNcblxuICB2YXIgdXNlcnNQcm9wcyA9IGlzUmVhY3RFbGVtZW50ICYmIHZhbC5wcm9wcyB8fCBpc1Byb3BzT2JqZWN0ICYmIHZhbCB8fCBpc1ByaW1pdGl2ZVZhbHVlICYmIG1hcFZhbHVlVG9Qcm9wcyh2YWwpO1xuXG4gIC8vIE92ZXJyaWRlIHByb3BzXG4gIHZhciBfb3B0aW9ucyRvdmVycmlkZVByb3AgPSBvcHRpb25zLm92ZXJyaWRlUHJvcHMsXG4gICAgICBvdmVycmlkZVByb3BzID0gX29wdGlvbnMkb3ZlcnJpZGVQcm9wID09PSB1bmRlZmluZWQgPyB7fSA6IF9vcHRpb25zJG92ZXJyaWRlUHJvcDtcblxuICBvdmVycmlkZVByb3BzID0gX2lzRnVuY3Rpb24ob3ZlcnJpZGVQcm9wcykgPyBvdmVycmlkZVByb3BzKF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHVzZXJzUHJvcHMpKSA6IG92ZXJyaWRlUHJvcHM7XG5cbiAgLy8gTWVyZ2UgcHJvcHNcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFByb3BzLCB1c2Vyc1Byb3BzLCBvdmVycmlkZVByb3BzKTtcblxuICAvLyBNZXJnZSBjbGFzc05hbWVcbiAgaWYgKGRlZmF1bHRQcm9wcy5jbGFzc05hbWUgfHwgb3ZlcnJpZGVQcm9wcy5jbGFzc05hbWUgfHwgdXNlcnNQcm9wcy5jbGFzc05hbWUpIHtcbiAgICB2YXIgbWVyZ2VkQ2xhc3Nlc05hbWVzID0gY3goZGVmYXVsdFByb3BzLmNsYXNzTmFtZSwgb3ZlcnJpZGVQcm9wcy5jbGFzc05hbWUsIHVzZXJzUHJvcHMuY2xhc3NOYW1lKTtcbiAgICBwcm9wcy5jbGFzc05hbWUgPSBfdW5pcShtZXJnZWRDbGFzc2VzTmFtZXMuc3BsaXQoJyAnKSkuam9pbignICcpO1xuICB9XG5cbiAgLy8gTWVyZ2Ugc3R5bGVcbiAgaWYgKGRlZmF1bHRQcm9wcy5zdHlsZSB8fCBvdmVycmlkZVByb3BzLnN0eWxlIHx8IHVzZXJzUHJvcHMuc3R5bGUpIHtcbiAgICBwcm9wcy5zdHlsZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMuc3R5bGUsIHVzZXJzUHJvcHMuc3R5bGUsIG92ZXJyaWRlUHJvcHMuc3R5bGUpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHZXQga2V5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBVc2Uga2V5LCBjaGlsZEtleSwgb3IgZ2VuZXJhdGUga2V5XG4gIGlmIChfaXNOaWwocHJvcHMua2V5KSkge1xuICAgIHZhciBjaGlsZEtleSA9IHByb3BzLmNoaWxkS2V5O1xuXG5cbiAgICBpZiAoIV9pc05pbChjaGlsZEtleSkpIHtcbiAgICAgIC8vIGFwcGx5IGFuZCBjb25zdW1lIHRoZSBjaGlsZEtleVxuICAgICAgcHJvcHMua2V5ID0gdHlwZW9mIGNoaWxkS2V5ID09PSAnZnVuY3Rpb24nID8gY2hpbGRLZXkocHJvcHMpIDogY2hpbGRLZXk7XG4gICAgICBkZWxldGUgcHJvcHMuY2hpbGRLZXk7XG4gICAgfSBlbHNlIGlmICh2YWxJc1N0cmluZyB8fCB2YWxJc051bWJlcikge1xuICAgICAgLy8gdXNlIHN0cmluZy9udW1iZXIgc2hvcnRoYW5kIHZhbHVlcyBhcyB0aGUga2V5XG4gICAgICBwcm9wcy5rZXkgPSB2YWw7XG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ3JlYXRlIEVsZW1lbnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIENsb25lIFJlYWN0RWxlbWVudHNcbiAgaWYgKGlzUmVhY3RFbGVtZW50KSByZXR1cm4gY2xvbmVFbGVtZW50KHZhbCwgcHJvcHMpO1xuXG4gIC8vIENyZWF0ZSBSZWFjdEVsZW1lbnRzIGZyb20gYnVpbHQgdXAgcHJvcHNcbiAgaWYgKGlzUHJpbWl0aXZlVmFsdWUgfHwgaXNQcm9wc09iamVjdCkgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcyk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRmFjdG9yeSBDcmVhdG9yc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBjcmVhdGVTaG9ydGhhbmRgIGZ1bmN0aW9uIHRoYXQgaXMgd2FpdGluZyBmb3IgYSB2YWx1ZSBhbmQgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufHN0cmluZ30gQ29tcG9uZW50IEEgUmVhY3RDbGFzcyBvciBzdHJpbmdcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcFZhbHVlVG9Qcm9wcyBBIGZ1bmN0aW9uIHRoYXQgbWFwcyBhIHByaW1pdGl2ZSB2YWx1ZSB0byB0aGUgQ29tcG9uZW50IHByb3BzXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IEEgc2hvcnRoYW5kIGZhY3RvcnkgZnVuY3Rpb24gd2FpdGluZyBmb3IgYHZhbGAgYW5kIGBkZWZhdWx0UHJvcHNgLlxuICovXG5jcmVhdGVTaG9ydGhhbmQuaGFuZGxlZFByb3BzID0gW107XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeShDb21wb25lbnQsIG1hcFZhbHVlVG9Qcm9wcykge1xuICBpZiAodHlwZW9mIENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgpIENvbXBvbmVudCBtdXN0IGJlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY3JlYXRlU2hvcnRoYW5kKENvbXBvbmVudCwgbWFwVmFsdWVUb1Byb3BzLCB2YWwsIG9wdGlvbnMpO1xuICB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhUTUwgRmFjdG9yaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCB2YXIgY3JlYXRlSFRNTERpdmlzaW9uID0gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgnZGl2JywgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4geyBjaGlsZHJlbjogdmFsIH07XG59KTtcbmV4cG9ydCB2YXIgY3JlYXRlSFRNTElmcmFtZSA9IGNyZWF0ZVNob3J0aGFuZEZhY3RvcnkoJ2lmcmFtZScsIGZ1bmN0aW9uIChzcmMpIHtcbiAgcmV0dXJuIHsgc3JjOiBzcmMgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MSW1hZ2UgPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdpbWcnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7IHNyYzogdmFsIH07XG59KTtcbmV4cG9ydCB2YXIgY3JlYXRlSFRNTElucHV0ID0gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgnaW5wdXQnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7IHR5cGU6IHZhbCB9O1xufSk7XG5leHBvcnQgdmFyIGNyZWF0ZUhUTUxMYWJlbCA9IGNyZWF0ZVNob3J0aGFuZEZhY3RvcnkoJ2xhYmVsJywgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4geyBjaGlsZHJlbjogdmFsIH07XG59KTtcbmV4cG9ydCB2YXIgY3JlYXRlSFRNTFBhcmFncmFwaCA9IGNyZWF0ZVNob3J0aGFuZEZhY3RvcnkoJ3AnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7IGNoaWxkcmVuOiB2YWwgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2ZhY3Rvcmllcy5qc1xuLy8gbW9kdWxlIGlkID0gODEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA3IDgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9