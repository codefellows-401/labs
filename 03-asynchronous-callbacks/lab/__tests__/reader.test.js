//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const reader = require('../lib/reader.js');

// Test Variables
const file1 = ('../data/eenie.txt');
const file2 = ('../data/meenie.txt');
const file3 = ('../data/moe.txt');
const outFile =  ('../data/output.txt');
const files = [file1, file2, file3];

//-------------------------------------
//* Testing
//-------------------------------------
describe('When properly invoked...', () => {

  it('should verify that the argument is an array', () => {
    const input = reader(files);
    const output = 'Processing files...';
    expect(input).toBe(output);
  });

});