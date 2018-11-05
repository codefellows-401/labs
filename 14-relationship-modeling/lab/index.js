//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
require('dotenv').config();
require('babel-register');

//-------------------------------------
//* Start Database Server
//-------------------------------------
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, options); // TODO: Setup games db connection

//-------------------------------------
//* Start Web Server
//-------------------------------------
require('./src/app.js').start(process.env.PORT);
