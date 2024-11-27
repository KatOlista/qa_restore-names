'use strict';

const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

const expectedResult = [
  {
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: 'Mike',
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should add 'firstName' if it is undefined`, () => {
    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });

  it(`should not add 'firstName' if it is defined`, () => {
    restoreNames(users);

    expect(users).toEqual(expectedResult);
  });
});
