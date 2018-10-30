//----------------------------------
//* Setup
//----------------------------------
// Dependencies
const memoryStorage = require('./memory.js');
const fileStorage = require('./filesystem.js');

//----------------------------------
//* Data Storage Module
//----------------------------------
export let dataStorageModule = {};

switch( process.env.STORAGE ) {
case 'filesystem':
  dataStorageModule = fileStorage;
  break;
default:
  dataStorageModule = memoryStorage;
  break;
}

//----------------------------------
//* Legacy Code
//----------------------------------
// module.exports = dataStorageModule;
