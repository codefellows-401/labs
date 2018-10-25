//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const dotenv = require('dotenv').config();
const server = require('./src/app.js');
const PORT = process.env.PORT || 3000;

//-------------------------------------
//* Launch Server
//-------------------------------------
server.start(PORT, () => console.log(`Listening on ${PORT}`));