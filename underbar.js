// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(Math.max(0, array.length - n));
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex = 0) {
  let res = -1;
  each(array, (val, idx) => {
    if (idx >= fromIndex && res === -1 && val === target) {
      res = idx;
    }
  });
  return res;
};
// const indexOf = function(array, target, fromIndex = 0) {
//   for (let i = fromIndex; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

const isArrayLike = function(obj) {
  const len = obj.length;
  return typeof len === 'number' && len >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback = identity) {
  if (isArrayLike(obj)) {
    for (let i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback = identity) {
  const res = [];
  each(obj, (val, idx, newObj) => {
    res.push(callback(val, idx, newObj));
  });
  return res;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  return map(obj, item => item[key]);
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback = identity, initialValue) {
  let accumulator = initialValue;
  let initializing = accumulator === undefined;
  each(obj, (val, idx, newObj) => {
    if (initializing) {
      accumulator = val;
      initializing = false;
    } else {
      accumulator = callback(accumulator, val, idx, newObj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  let found = false;
  each(obj, val => {
    if (val === target) {
      found = true;
    }
  });
  return found;
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback = identity) {
  let allPass = true;
  each(obj, val => {
    if (!callback(val)) {
      allPass = false;
    }
  });
  return allPass;
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback = identity) {
  let anyPass = false;
  each(obj, val => {
    if (callback(val)) {
      anyPass = true;
    }
  });
  return anyPass;
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback = identity) {
  const res = [];
  each(obj, val => {
    if (callback(val)) {
      res.push(val);
    }
  });
  return res;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback = identity) {
  return filter(arr, val => !callback(val));
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  const found = {};
  return filter(obj, val => !found[val] && (found[val] = true));
};

module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
