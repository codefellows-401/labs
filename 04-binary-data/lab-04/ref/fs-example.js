//! For General Reference ONLY -- PLEASE DISREGARD
const fs = require('fs');

//* SYNCHRONOUS -- Loads the file synchronously, and all other operations WAIT until this is completed.
const imgSync = fs.readFileSync(__dirname + './assets/baldy.bmp', 'utf8'); 

//* ASYNCHRONOUS -- Loads a file, and only after the file has been loaded into the buffer will it execute the callback function.
const imgAsync = fs.readFile(__dirname + './assets/baldy.bmp', 'utf8', (err,data) => {
  // do asynchronous code here
});