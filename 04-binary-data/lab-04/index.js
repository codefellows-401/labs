//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Modules
const fs = require('fs');

// File Handling
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
  this.buffer         = buffer;                         // Buffer
  this.type           = buffer.toString('utf-8', 0, 2); // Type
  this.fileSize       = buffer.readInt32LE(2);          // Filesize
  this.bytesPerPixel  = buffer.readInt16LE(28);         // Bytes per pixel
  this.height         = buffer.readInt32LE(22);         // Height
  this.width          = buffer.readInt32LE(18);         // Width
};

// Prototype Method • Transform Bitmap
Bitmap.prototype.transform = function(operation) {
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

// New Object • Bitmap File
let bitmap = new Bitmap(file);


//-------------------------------------
//* Transform Module
//-------------------------------------
// Object • Transform Dictionary 
const transforms = {
  greyscale: transformGreyscale
};

// Function • Transform to Greyscale
const transformGreyscale = (bmp) => {
  console.log('Transforming bitmap into greyscale', bmp);
};

// Function • Transform With Callbacks
function transformWithCallbacks() {     // <-- module.exports goes HERE
  fs.readFile(file, (err, buffer) => {
    // Error handling
    if (err) throw err;

    // Retrive buffer
    bitmap.parse(buffer);
    bitmap.transform(operation); // <-- pass transformation functions HERE

    // Output modified buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) throw err;
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}

//-------------------------------------
//* Execution
//-------------------------------------
transformWithCallbacks();

