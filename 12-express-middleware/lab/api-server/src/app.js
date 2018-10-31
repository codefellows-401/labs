//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
const debug = require('debug')('app'); // must be imported the old way
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Modules
import router from './api/api.js';
import errorHandler from './middleware/error.js';

//-------------------------------------
//* Setup Server
//-------------------------------------
// Express
let app = express();

// CORS
let corsOptions = { origin: 'https://www.gamacy.com' };
app.use(cors(corsOptions));

// Morgan Middleware
app.use(morgan('dev'));

// Built-in Express Body Parser for raw JSON and FORM posts
app.use(express.json());
app.use(express.urlencoded( {extended:true} ));

// API
app.use(router);

// Error Handling Middleware
app.use(errorHandler);

// Listening Flag
let isRunning = false;

//-------------------------------------
//* Deploy Server
//-------------------------------------
module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        debug('Server is up on port:', port);
      });
    }
    else {
      debug('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};