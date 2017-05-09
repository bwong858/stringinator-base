const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {
        name: 'Albert',
        age: 20
      },
      {
        name: 'Brian',
        age: 25
      },
      {
        name: 'Chris',
        age: 23
      }
    ];
    expect(_.pluck(people, 'age')).toEqual([20, 25, 23]);
  });
});
