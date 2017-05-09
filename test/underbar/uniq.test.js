const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 2, 1, 1, 3, 4, 3, 5];
    expect(_.uniq(nums)).toEqual([1, 2, 3, 4, 5]);
  });

  it('de-dups an object\'s values', () => {
    const nums = {
      a: 1,
      b: 2,
      c: 1,
      d: 2,
      e: 3,
      f: 'cat',
      g: 'cat'
    };
    expect(_.uniq(nums)).toEqual([1, 2, 3, 'cat']);
  });
});
