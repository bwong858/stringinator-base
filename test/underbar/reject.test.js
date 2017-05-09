const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1, 2, 3, 4];
    expect(_.reject(nums, val => val % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      a: null,
      b: 'foo',
      c: true,
      d: null
    };
    expect(_.reject(obj, val => val === null)).toEqual(['foo', true]);
  });

  it('rejects all defined values from an array if not given a callback', () => {
    const nums = [1, null, 3, 'bar', undefined, ''];
    expect(_.reject(nums)).toEqual([null, undefined, '']);
  });

  it('rejects all defined values from an object if not given a callback', () => {
    const obj = {
      a: null,
      b: 'foo',
      c: true,
      d: undefined,
      e: ''
    };
    expect(_.reject(obj)).toEqual([null, undefined, '']);
  });
});
