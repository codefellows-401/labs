// Safety Goggles ON
'use strict';

// Require modules
const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

// Greet Module Tests
describe('given a nonstring value', () => {
  test('returns as null', () => {
    const actual = greet(123);
    const expected = null;
    expect(actual).toBe(expected);
  });
});

describe('given a specific string value', () => {
  test('returns hello world', () => {
    const actual = greet('world');
    const expected = 'Hello world';
    expect(actual).toBe(expected);
  });
});

// Valid Arithmetic Module Tests
describe('given a valid number of parameters (arity of 2)', () => {
  test('successfully adds', () => {
    const actual = add(1,2);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test('successfully substracts', () => {
    const actual = sub(3,2);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test('successfully multiplies', () => {
    const actual = multi(2,4);
    const expected = 8;
    expect(actual).toBe(expected);
  });

  test('successfully divides', () => {
    const actual = div(4,2);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

// Invalid Arithmetic Module Tests
describe('given an invalid number of parameters', () => {
  test('returns as null', () => {
    const actual = add(1);
    const expected = null;
    expect(actual).toBe(expected);
  });

  test('returns first two parameters only', () => {
    const actual = add(1,2,3);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test('returns as null', () => {
    const actual = sub(1);
    const expected = null;
    expect(actual).toBe(expected);
  });

  test('returns first two parameters only', () => {
    const actual = sub(5,1,3);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  test('returns as null', () => {
    const actual = multi(1);
    const expected = null;
    expect(actual).toBe(expected);
  });

  test('returns first two parameters only', () => {
    const actual = multi(1,2,3);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  test('returns as null', () => {
    const actual = div(6);
    const expected = null;
    expect(actual).toBe(expected);
  });

  test('returns first two parameters only', () => {
    const actual = div(8,2,3);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  test('returns null when dividing by zero', () => {
    const actual = div(3,0);
    const expected = null;
    expect(actual).toBe(expected);
  });
});