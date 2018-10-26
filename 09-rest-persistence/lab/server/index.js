//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
require('dotenv').config();

//-------------------------------------
//* Launch Server
//-------------------------------------
require('./src/app.js').start(process.env.PORT);