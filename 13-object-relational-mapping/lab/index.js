//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';
console.clear();

// Dependencies
require('dotenv').config();
require('babel-register');
const mongoose = require('mongoose');

// Mongooose Options
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
};

//-------------------------------------
//* Initiate Servers
//-------------------------------------
// Open Connection to Database Server
try {
  mongoose.connect(process.env.MONGODB_URI, options);
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log(`Connected to server on ${process.env.MONGODB_URI}`);
  });  
} catch (e) {
  console.error(e);
}

// Open Connection to Web Server
try {
  require('./src/app.js').start(process.env.PORT);
} catch (e) {
  console.error(e);
}