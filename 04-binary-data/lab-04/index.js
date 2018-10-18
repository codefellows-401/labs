'use strict';

const fs = require('fs');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor (use a class)
*/

class Bitmap () => {
  constructor() {
    this.filePath
  };
};


function Bitmap(filePath) {
  this.file = filePath;
}

// TODO: Demo code that we can use...
const parsedBitmap  = {};
parsedBitmap.type = buffer.toString('utf-8', 0, 2);
parsedBitmap.fileSize = buffer.readInt32LE(2);
parsedBitmap.bytesPerPixel = buffer.readInt16LE(28);
parsedBitmap.height = buffer.readInt32LE(22);
parsedBitmap.width = buffer.readInt32LE(18); 

//* Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
Bitmap.prototype.parse = function(buffer) {
  this.type = buffer.toString('utf-8', 0, 2);

};

//* Transform a bitmap using some set of rules -- The operation points to some function, which will operate on a bitmap instance
Bitmap.prototype.transform = function(operation) {
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

//* Sample Transformer (greyscale) -- called by Bitmap.transform('greyscale')
//  Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
const transformGreyscale = (bmp) => {

  console.log('Transforming bitmap into greyscale', bmp);
  
  // TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it
  
  // TODO: Alter bmp to make the image greyscale ...

};

//* A dictionary of transformations
//  Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
const transforms = {
  greyscale: transformGreyscale
};

// ------------------ GET TO WORK ------------------- //
function transformWithCallbacks() {

  fs.readFile(file, (err, buffer) => {

    if (err) {
      throw err;
    }

    bitmap.parse(buffer);
    bitmap.transform(operation);

    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and thew new buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);
let bitmap = new Bitmap(file);

transformWithCallbacks();

