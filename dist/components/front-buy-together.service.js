import { B as BuyTogetherService } from './index2.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$3 = Array.isArray;

var isArray_1 = isArray$3;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$3 = freeGlobal || freeSelf || Function('return this')();

var _root = root$3;

var root$2 = _root;

/** Built-in value references. */
var Symbol$3 = root$2.Symbol;

var _Symbol = Symbol$3;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$2;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag$1 = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$3(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag$1(value) == symbolTag);
}

var isSymbol_1 = isSymbol$3;

var isArray$2 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

var root$1 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$2(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$2;

var getNative$1 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$1(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var Map$2 = getNative(root, 'Map');

var _Map = Map$2;

var Hash = _Hash,
    ListCache = _ListCache,
    Map$1 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var Symbol = _Symbol,
    arrayMap = _arrayMap,
    isArray$1 = isArray_1,
    isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$1;

var isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey$1;

var castPath = _castPath,
    toKey = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;

var baseGet = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

const checkIsOutReleaseDate = (data) => {
    const { releaseDate: releaseDateObj } = data || {};
    if (!releaseDateObj)
        return true;
    const { now, releaseDate } = releaseDateObj;
    return Number(now) >= Number(releaseDate);
};
const checkHasBalance = (data) => {
    const { balance, isSellOutOfStock } = data || {};
    return (!!balance && balance > 0) || isSellOutOfStock;
};
const checkHasPrice = (data) => {
    const { price } = data || {};
    return price && !!Number(price);
};

class FrontBuyTogetherAdapter {
    static adapterIBuyTogetherToComponentData(buyTogether, isFirstLoad = false) {
        this.isFirstLoad = isFirstLoad;
        const componentData = {
            productMain: this.adapterToProductCard(buyTogether.product),
            products: buyTogether.productsPivot.map(data => this.adapterPivotToProductCard(data)),
            originalData: buyTogether,
        };
        this.isFirstLoad = false;
        return componentData;
    }
    static adapterPivotToProductCard(product) {
        return Object.assign(Object.assign({}, this.adapterToProductCard(product)), { isCheck: true });
    }
    static adapterToProductCard(product) {
        var _a;
        const { price, priceCompare, id } = this.getValuesByVariation(product);
        return {
            price,
            priceBase: priceCompare,
            id,
            productId: product.productId,
            image: ((_a = product.images) === null || _a === void 0 ? void 0 : _a.length) ? product.images[0] : { src: '' },
            name: product.name,
            slug: product.slug,
            selectVariations: this.adapterAttributes(product),
        };
    }
    static getValuesByVariation(product) {
        const { attribute, attributeSecondary, color } = product;
        const filter = {
            'attribute.id': attribute === null || attribute === void 0 ? void 0 : attribute.id,
            'attributeSecondary.id': attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id,
            'color.id': color === null || color === void 0 ? void 0 : color.id,
        };
        const variationsFiltered = this.filterVariations(product.variations, filter);
        return variationsFiltered[0] || product;
    }
    static adapterAttributes(product) {
        const colors = this.generateSelectColors(product);
        const attributes = this.generateSelectAttributes(product);
        const attributesSecondary = this.generateSelectAttributesSecondary(product);
        return [colors, attributes, attributesSecondary].filter(attr => !!attr);
    }
    static generateSelectAttributes(product) {
        var _a, _b;
        const { color, attributeSecondary, isSellOutOfStock } = product;
        const filterToCompare = {
            'color.id': color === null || color === void 0 ? void 0 : color.id,
            'attributeSecondary.id': attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id,
        };
        const attributes = this.filterAttributesByUnique(this.filterVariations(product.variations, filterToCompare, 'attribute'), 'attribute');
        if (!attributes.length)
            return null;
        return {
            placeholder: this.placeholderDisabled,
            label: (_a = product.attribute) === null || _a === void 0 ? void 0 : _a.attributeName,
            options: attributes.map(({ balance, id, name, releaseDate }) => ({
                name,
                value: id,
                disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
            })),
            selectType: 'attributes',
            currentValue: this.isFirstLoad ? undefined : (_b = product.attribute) === null || _b === void 0 ? void 0 : _b.id,
        };
    }
    static generateSelectAttributesSecondary(product) {
        var _a, _b;
        const { color, attribute, isSellOutOfStock } = product;
        const filterToCompare = { 'color.id': color === null || color === void 0 ? void 0 : color.id, 'attribute.id': attribute === null || attribute === void 0 ? void 0 : attribute.id };
        const listAttributesSecondary = this.filterAttributesByUnique(this.filterVariations(product.variations, filterToCompare, 'attributeSecondary'), 'attributeSecondary');
        if (!listAttributesSecondary.length)
            return null;
        return {
            placeholder: this.placeholderDisabled,
            label: (_a = product.attributeSecondary) === null || _a === void 0 ? void 0 : _a.attributeName,
            options: listAttributesSecondary.map(({ name, balance, id, releaseDate }) => ({
                value: id,
                name,
                disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
            })),
            selectType: 'secondaryAttributes',
            currentValue: this.isFirstLoad ? undefined : (_b = product.attributeSecondary) === null || _b === void 0 ? void 0 : _b.id,
        };
    }
    static generateSelectColors(product) {
        var _a;
        const { attribute, attributeSecondary } = product;
        const filterToCompare = {
            'attribute.id': attribute === null || attribute === void 0 ? void 0 : attribute.id,
            'attributeSecondary.id': attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id,
        };
        const listColors = this.filterAttributesByUnique(this.filterVariations(product.variations, filterToCompare, 'color'), 'color');
        if (!(listColors === null || listColors === void 0 ? void 0 : listColors.length))
            return null;
        return {
            label: 'Cor',
            placeholder: this.placeholderDisabled,
            options: listColors === null || listColors === void 0 ? void 0 : listColors.map(({ balance, id, name, releaseDate }) => ({
                name,
                value: id,
                disabled: this.checkAttributeOptionDisabled({ balance, releaseDate }),
            })),
            currentValue: (_a = product.color) === null || _a === void 0 ? void 0 : _a.id,
            selectType: 'color',
        };
    }
    static filterVariations(variations, filter, attributeTarget) {
        const filterKeys = Object.keys(filter);
        return variations.filter(objVariation => {
            const hasAttr = !attributeTarget || !!objVariation[attributeTarget];
            if (!hasAttr)
                return false;
            return filterKeys.reduce((acc, currentKey) => {
                const valueForCompare = filter[currentKey];
                const value = get_1(objVariation, currentKey);
                return acc && value === valueForCompare;
            }, true);
        });
    }
    static filterAttributesByUnique(attributesGeneric, attributeTarget) {
        return attributesGeneric
            .filter(attr => !!attr[attributeTarget])
            .reduce((acc, current) => {
            const objItem = current[attributeTarget];
            const index = acc.findIndex(attrAcc => attrAcc.id === objItem.id);
            if (index === -1)
                return [
                    ...acc,
                    Object.assign(Object.assign({}, objItem), { balance: current.balance, releaseDate: current.releaseDate }),
                ];
            return acc;
        }, []);
    }
    static checkAttributeOptionDisabled(data) {
        const { balance, releaseDate, isSellOutOfStock } = data;
        return (!checkHasBalance({ balance, isSellOutOfStock }) || !checkIsOutReleaseDate({ releaseDate }));
    }
}
FrontBuyTogetherAdapter.isFirstLoad = false;
FrontBuyTogetherAdapter.placeholderDisabled = { name: 'Selecione', disabled: true, value: undefined };

class FrontBuyTogetherResponse {
    constructor(response) {
        this.response = response;
    }
    adapterToComponentData() {
        var _a, _b;
        const canApplyAdapter = this.response && ((_b = (_a = this.response) === null || _a === void 0 ? void 0 : _a.productsPivot) === null || _b === void 0 ? void 0 : _b.length) > 0;
        this.componentData = canApplyAdapter
            ? FrontBuyTogetherAdapter.adapterIBuyTogetherToComponentData(this.response, true)
            : null;
        return this;
    }
    changeByVariationSelected(variationId) {
        var _a, _b;
        if (!variationId)
            return this;
        const variation = (_a = this.response.product.variations) === null || _a === void 0 ? void 0 : _a.find(({ id }) => Number(id) === variationId);
        if (!variation)
            return this;
        if ((variation === null || variation === void 0 ? void 0 : variation.balance) > 0) {
            this.response.product = Object.assign(Object.assign({}, variation), { variations: this.response.product.variations });
        }
        const variationWithBalance = (_b = this.response.product.variations) === null || _b === void 0 ? void 0 : _b.find(({ balance, color, isSellOutOfStock }) => {
            if (variation.color) {
                return variation.color.id === color.id && (balance > 0 || isSellOutOfStock);
            }
            return balance > 0 || isSellOutOfStock;
        });
        this.response.product = Object.assign(Object.assign({}, variationWithBalance), { variations: this.response.product.variations });
        return this;
    }
    get getComponentData() {
        return this.componentData;
    }
    get getResponse() {
        return this.response;
    }
}

class FrontBuyTogetherFilter extends FrontBuyTogetherResponse {
    constructor() {
        super(...arguments);
        this.filterRules = [
            {
                key: 'balance',
                isActive: true,
                applyFn: this.filterByBalance.bind(this),
                checkFn: checkHasBalance,
            },
            {
                key: 'priceless',
                isActive: true,
                applyFn: this.filterByZeroPrice.bind(this),
                checkFn: checkHasPrice,
            },
            {
                key: 'releaseDate',
                isActive: true,
                applyFn: this.filterByReleaseDate.bind(this),
                checkFn: checkIsOutReleaseDate,
            },
        ];
    }
    applyFilters(overrideFilters) {
        if (overrideFilters) {
            this.filterRules = this.filterRules.map(filter => {
                const overrideFilter = overrideFilters.find(({ key }) => key === filter.key);
                if (!overrideFilter)
                    return filter;
                return Object.assign(Object.assign(Object.assign({}, filter), overrideFilter), { applyFn: overrideFilter.applyFn ? overrideFilter.applyFn.bind(this) : filter.applyFn });
            });
        }
        this.filterRules
            .filter(({ isActive }) => isActive)
            .forEach(({ applyFn }) => {
            applyFn();
        });
        this.applyFilterVariations();
        return this;
    }
    filterByZeroPrice() {
        const shouldRemoveBuyTogether = !checkHasPrice(this.response.product);
        if (!this.response || shouldRemoveBuyTogether) {
            this.response = null;
        }
    }
    filterByBalance() {
        var _a, _b;
        const productWithoutBalance = !checkHasBalance((_a = this.response) === null || _a === void 0 ? void 0 : _a.product);
        const noneVariationsHasBalance = !((_b = this.response) === null || _b === void 0 ? void 0 : _b.product.variations.some(checkHasBalance));
        const shouldRemoveBuyTogether = productWithoutBalance || noneVariationsHasBalance;
        if (!this.response || shouldRemoveBuyTogether) {
            this.response = null;
        }
    }
    filterByReleaseDate() {
        var _a;
        const shouldRemoveBuyTogether = !checkIsOutReleaseDate((_a = this.response) === null || _a === void 0 ? void 0 : _a.product);
        if (!this.response || shouldRemoveBuyTogether) {
            this.response = null;
        }
    }
    applyFilterVariations() {
        if (!this.response)
            return;
        const checkFns = this.filterRules
            .filter(({ isActive }) => isActive)
            .map(({ checkFn }) => checkFn);
        this.response.productsPivot = this.response.productsPivot.filter(({ variations }) => this.filterVariations(variations, checkFns));
    }
    filterVariations(variations, checkFns) {
        return (variations.filter(data => {
            const results = checkFns.map(fn => fn(data));
            const shouldAdd = results.reduce((prev, current) => prev && current, true);
            return shouldAdd;
        }).length !== 0);
    }
}

class FrontBuyTogetherService {
    filterOutOriginalProducts(products, productIds) {
        return products.filter(product => !productIds.includes(+product.productId));
    }
    getUniqueProducts(products) {
        const uniqueProductsMap = new Map();
        for (const product of products) {
            if (!uniqueProductsMap.has(product.id)) {
                uniqueProductsMap.set(product.id, product);
            }
        }
        return Array.from(uniqueProductsMap.values());
    }
    async getBuyTogetherByProductId(productId, variationId) {
        const responseData = await BuyTogetherService.getByProductIdWithValidPromotionDate(productId);
        if (!responseData)
            return null;
        const buyTogetherData = new FrontBuyTogetherFilter(responseData);
        return buyTogetherData
            .changeByVariationSelected(variationId)
            .applyFilters()
            .adapterToComponentData().getComponentData;
    }
    async getOnlyPivotProducts(productIds) {
        const responseData = await BuyTogetherService.getByProductIds(productIds);
        const productsPivot = responseData.flatMap(response => {
            const adaptedBuyTogether = new FrontBuyTogetherResponse(response).adapterToComponentData();
            return adaptedBuyTogether.getComponentData.products;
        });
        const filteredProducts = this.filterOutOriginalProducts(productsPivot, productIds);
        const uniqueProducts = this.getUniqueProducts(filteredProducts);
        return uniqueProducts;
    }
    changeProductOptions(data, productTarget) {
        switch (data.eventSelectType) {
            case 'color':
                return this.changeColor(data.value, productTarget);
            case 'attributes':
                return this.changeAttribute(data.value, productTarget);
            case 'secondaryAttributes':
                return this.changeAttributeSecondary(data.value, productTarget);
            default:
                return null;
        }
    }
    changeColor(colorValue, productTarget) {
        const variationByColor = productTarget.variations.find(({ color }) => (color === null || color === void 0 ? void 0 : color.id) === Number(colorValue));
        const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation(Object.assign(Object.assign({}, productTarget), { color: variationByColor.color }));
        const productTargetUpdated = Object.assign(Object.assign({}, currentVariation), { variations: productTarget.variations });
        const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
        return { productTargetUpdated, productCard };
    }
    changeAttribute(attributeValue, productTarget) {
        const variationByAttribute = productTarget.variations.find(({ attribute }) => (attribute === null || attribute === void 0 ? void 0 : attribute.id) === Number(attributeValue));
        const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation(Object.assign(Object.assign({}, productTarget), { attribute: (variationByAttribute === null || variationByAttribute === void 0 ? void 0 : variationByAttribute.attribute) || productTarget.attribute }));
        const productTargetUpdated = Object.assign(Object.assign({}, (currentVariation || productTarget)), { variations: productTarget.variations });
        const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
        return { productTargetUpdated, productCard };
    }
    changeAttributeSecondary(attributeValue, productTarget) {
        const variationByAttributeSecondary = productTarget.variations.find(({ attributeSecondary }) => (attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id) === Number(attributeValue));
        const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation(Object.assign(Object.assign({}, productTarget), { attributeSecondary: variationByAttributeSecondary.attributeSecondary }));
        const productTargetUpdated = Object.assign(Object.assign({}, currentVariation), { variations: productTarget.variations });
        const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
        return { productTargetUpdated, productCard };
    }
    async addToCart(variantIds) {
        return new Promise((resolve, reject) => {
            const urlBase = window.dooca.base_url;
            const route = '/action/cart/add';
            const body = new FormData();
            const items = variantIds.map(variationId => ({
                variation_id: variationId,
                quantity: 1,
            }));
            body.append('items', JSON.stringify(items));
            const request = new XMLHttpRequest();
            request.open('POST', `${urlBase}${route}`, true);
            request.setRequestHeader('X-Ajax', 'true');
            request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.responseText);
                }
                else {
                    reject(request.status);
                }
            };
            request.send(body);
        });
    }
}

export { FrontBuyTogetherService as F };

//# sourceMappingURL=front-buy-together.service.js.map