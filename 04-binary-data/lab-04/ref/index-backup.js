//* Safety Goggles ON
'use strict';

//* Import Modules
const fs = require('fs');

/*
  //* Personal Reference
  ? Loads the file synchronously, and all other operations WAIT until this is completed.
  const imgOriginal = fs.readFileSync(__dirname + './assets/baldy.bmp', 'utf8'); 

  ? Loads the file, and only after the file has been loaded into the buffer will it execute the callback function.
  const imgOriginal = fs.readFile(__dirname + './assets/baldy.bmp', 'utf8', (err,data) => {

  });
*/

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor (use a class)
*/

function Bitmap(filePath) {
  this.file = filePath;
}

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

