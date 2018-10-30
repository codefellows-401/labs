//----------------------------------
//* Setup
//----------------------------------
// Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import gameRouter from './models/games.js';

// Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(gameRouter);
app.use(bodyParser);

//----------------------------------
//* Deploy Router
//----------------------------------
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Running on', port));
  },
};