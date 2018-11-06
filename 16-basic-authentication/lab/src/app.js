//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import express from 'express';
import authRouter from './auth/router.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

// Express
const app = express();

// Middleware
app.use(express.json());
app.use(authRouter);
app.use(notFound);
app.use(errorHandler);

//--------------------------------------
//* Deploy Server
//--------------------------------------
let server;
module.exports =  {
  app,
  start: (port) => {
    server = app.listen(port, () => console.log('Connected to server on http://localhost:' + port));
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};