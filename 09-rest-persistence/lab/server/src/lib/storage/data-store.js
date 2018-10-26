//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const memoryStorage = require('./memory.js');
const fileStorage = require('./filesystem.js');

//-------------------------------------
//* Data Storage Setup
//-------------------------------------
let dataStorageModule = {};

switch( process.env.STORAGE ) {
case 'filesystem':
  dataStorageModule = fileStorage;
  break;
default:
  dataStorageModule = memoryStorage;
  break;
}

//-------------------------------------
//* Module Export
//-------------------------------------
module.exports = dataStorageModule;