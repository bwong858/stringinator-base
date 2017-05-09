const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const obj = [];
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const obj = { length: 0 };
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = { length: -3000 };
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
