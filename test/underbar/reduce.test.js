const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 3, 7];
    expect(_.reduce(nums, (acc, num) => acc + num, 0)).toBe(11);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 3, 7];
    expect(_.reduce(nums, (acc, num) => acc + num)).toBe(11);
  });

});
