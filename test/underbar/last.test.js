const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.last(arr)).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.last(arr, 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = ['a', 'b', 'c'];
    expect(_.last(arr, 7)).toEqual(arr);
  });
});
