//----------------------------------
//* Setup
//----------------------------------
// Dependencies
require('dotenv').config();
require('babel-register');

//----------------------------------
//* Launch Server
//----------------------------------
require('./src/app.js').start(process.env.PORT);