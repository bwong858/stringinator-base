const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 3, 6];
    expect(_.some(nums, val => val % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6];
    expect(_.some(nums, val => val % 2 === 1)).toBe(false);
  });

});
