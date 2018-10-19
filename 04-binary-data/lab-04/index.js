//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Modules
const fs = require('fs');

// CLI ARGV
const [file, operation] = process.argv.slice(2);


//-------------------------------------
//* Bitmap Object
//-------------------------------------
// Constructor
function Bitmap(filePath) {
  this.file = filePath;
}

// Prototype Method • Parser
Bitmap.prototype.parse = function(buffer) {
  this.type = buffer.toString('utf-8', 0, 2);
};

// Prototype Method • Transform Bitmap
Bitmap.prototype.transform = function(operation) {
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

// New Object • Bitmap File
let bitmap = new Bitmap(file);


//-------------------------------------
//* Image Transformations Module
//-------------------------------------
// Object • Transformation Dictionary -- each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
const transforms = {
  greyscale: transformGreyscale
};

// Function • Transform Greyscale -- called by Bitmap.transform('greyscale')
const transformGreyscale = (bmp) => {
  console.log('Transforming bitmap into greyscale', bmp);
};

// Function • Transform With Callbacks
function transformWithCallbacks() {
  fs.readFile(file, (err, buffer) => {
    if (err) {
      throw err;
    }

    // Retrive buffer
    bitmap.parse(buffer);
    bitmap.transform(operation);
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}


//-------------------------------------
//* Execution
//-------------------------------------
transformWithCallbacks();

