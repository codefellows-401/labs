//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
// 3rd Party Resources
import express from 'express';
import cors from 'cors';

// Esoteric Resources
import notFound from './middleware/404.js';
import errorHandler from './middleware/error.js';
import apiRouter from './api/v1.js';

// Express Setup
const app = express();

// App Level Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(apiRouter);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Server Listener Flag
let isRunning = false;

//-------------------------------------
//* Deploy Server
//-------------------------------------
module.exports = {
  server: app,
  start: (port) => {
    if(!isRunning) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Connected to server on http://localhost:${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
