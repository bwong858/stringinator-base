const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return _.reject(str, char => char === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, char => char === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, char => !isNaN(char));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, char => !isNaN(char)).join('').replace(/\s/g, '');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return _.map(obj, val => truncateString(val, maxLength));
};

const countChars = function(str) {
  const counts = {};
  _.each(str, char => {
    counts[char] ? counts[char]++ : counts[char] = 1;
  });
  return counts;
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
