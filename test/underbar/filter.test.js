const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [1, 2, 3, 4];
    expect(_.filter(nums, val => val % 2 === 1)).toEqual([1, 3]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      a: 2,
      b: 'foo',
      c: true,
      d: 42
    };
    expect(_.filter(obj, val => typeof val === 'number')).toEqual([2, 42]);
  });
});
