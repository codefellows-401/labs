//* SAFETY GOGGLES ON
'use strict';

//* MODULES
const fs = require('fs');

//* TEST VARIABLES
const file1 = ('../data/eenie.txt');
const file2 = ('../data/meenie.txt');
const file3 = ('../data/moe.txt');
const outFile =  ('../data/output.txt');
const files = [file1, file2, file3];

// TODO: Write Lab COde
module.exports = function reader(files) {
  // REFERENCE: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
  fs.readFile(files, (err, buffer) => {
    if(err) throw err;
    fs.writeFile(outFile, buffer, (err) => {
      if(err) throw err;
      console.log('done');
    });
  });
};