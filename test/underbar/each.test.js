const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = ['a', 'b', 'c'];
    let count = 0;
    _.each(obj, (el, idx, obj) => {
      expect(obj[idx]).toBe(el);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = { uno: 'a', dos: 'b', tres: 'c', length: 3 };
    let count = 0;
    _.each(obj, (el, idx, obj) => {
      expect(obj[idx]).toBe(el);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = { uno: 'a', dos: 'b', tres: 'c' };
    let count = 0;
    _.each(obj, (val, key, obj) => {
      expect(obj[key]).toBe(val);
      count++;
    });
    expect(count).toBe(3);
  });
});
