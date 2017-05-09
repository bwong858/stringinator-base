const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const vals = ['foo', 0, 'bar', true];
    expect(_.contains(vals, 0)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const vals = ['foo', 0, 'bar', true];
    expect(_.contains(vals, false)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const vals = {
      a: 'foo',
      b: 0,
      c: 'bar',
      d: true
    };
    expect(_.contains(vals, 0)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const vals = {
      a: 'foo',
      b: 0,
      c: 'bar',
      d: true
    };
    expect(_.contains(vals, false)).toBe(false);
  });
});
