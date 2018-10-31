//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
require('dotenv').config();
require('babel-register');

//-------------------------------------
//* Deploy Server
//-------------------------------------
require('./src/app.js').start(process.env.PORT);