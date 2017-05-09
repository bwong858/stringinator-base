const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.first(arr)).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.first(arr, 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.first(arr, 10)).toEqual(arr);
  });
});
