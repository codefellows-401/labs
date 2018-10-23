//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const client = require('../model/client.js');
const server = require('../server.js');

//-------------------------------------
//* Testing
//-------------------------------------
// Server Testing
describe('Server', () => {
  it('Test Case', () => {
    const input  = 'some code';
    const output = 'some code';
    expect(input).toBe(output);
  });
});

// Client Testing
describe('Client', () => {
  it('Test Case', () => {
    const input  = 'some code';
    const output = 'some code';
    expect(input).toBe(output);
  });
});