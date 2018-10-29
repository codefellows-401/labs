//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const fs = require('fs');

//-------------------------------------
//* Filesystem Function
//-------------------------------------
function reader(files) {
  // Validate input
  if(files.isArray) throw 'ERROR: Function argument must be an array.\n';
  if(files.length > 3 || files.length < 3) throw 'ERROR: Function requires an array of three values.\n';
  console.log('Processing files...');

  // Read input
  fs.readFile(files, (err, buffer) => {
    if(err) throw err;

    // Process each file
    for(let myFile = 0; myFile < files.length; myFile++) {
      fs.writeFile(myFile, buffer, (err) => {
        if(err) throw err;
        console.log('done');
      });
    }
  });
}


//-------------------------------------
//* Module Exports
//-------------------------------------
module.exports = reader();