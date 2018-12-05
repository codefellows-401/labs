//------------------------------
//* Setup
//------------------------------
'use strict';

// Dependencies
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './auth/router.js';
import auth from './auth/middleware.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

//------------------------------
//* Middleware
//------------------------------
// Processing
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // => req.body
app.use(express.urlencoded( { extended: true } )); //req.body => from a form's key/value pairs
app.use(cookieParser());

// Routing
app.use(authRouter);
app.get('/', auth(), (req, res) => {
  res.send('We Are In');
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

//------------------------------
//* Server Operations
//------------------------------
let server = false;

module.exports = {
  start: ( port ) => {
    if(!server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on port', port);
      });
    } else {
      console.log('Server is already running!');
    }
  },

  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};