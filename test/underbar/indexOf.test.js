const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['foo', 'bar', 'jar', 'yar'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['foo', 'bar', 'jar', 'yar'];
    expect(_.indexOf(arr, 'yar')).toBe(3);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['foo', 'bar', 'jar', 'yar'];
    expect(_.indexOf(arr, 'gnar')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['foo', 'bar', 'jar', 'yar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['foo', 'bar', 'jar', 'yar', 'bar'];
    expect(_.indexOf(arr, 'bar', 2)).toBe(4);
  });

});
