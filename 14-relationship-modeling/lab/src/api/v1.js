//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies'use strict';
import express from 'express';
const router = express.Router();

import Title from '../models/games.js';
import Platform from '../models/platforms.js';
import sendError from '../middleware/error';

const games = {
  'platform' : Platform,
  'title' : Title,
};

// Each of our REST endpoints simply calls the game's appropriate CRUD Method (only give the students GET and POST for now)
// In all cases, we just catch(next), which feeds any errors we get into the next() as a param
// This fires off the error middleware automatically.  Otherwise, we send out a formatted JSON Response
//-------------------------------------
//* Router
//-------------------------------------
// TODO
router.get('/api/v1/:game', (req,res,next) => {
  const game = games[req.params.game];
  if(!game) {
    sendError('game not found', req, res, next);
    return;
  }
  game.find({})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

// TODO
router.get('/api/v1/:game/:id', (req,res,next) => {
  const game = games[req.params.game];
  game.findOne({_id:req.params.id})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

// TODO
router.post('/api/v1/:game', (req,res,next) => {
  const game = games[req.params.game];
  let record = new Game(req.body);
  record.save()
    .then( data => sendJSON(res,data) )
    .catch( next );
});

// TODO
let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

//-------------------------------------
//* Export Router
//-------------------------------------
export default router;