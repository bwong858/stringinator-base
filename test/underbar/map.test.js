const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const numArr = [1, 2, 3];
    expect(_.map(numArr, (el) => el * el)).toEqual([1, 4, 9]);
  });
});
