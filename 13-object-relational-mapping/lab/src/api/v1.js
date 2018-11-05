//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import express from 'express';
import Game from '../models/games.js';

// Router Setup
const router = express.Router();

// sendJSON
let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

//-------------------------------------
//* Router
//-------------------------------------
router.get('/api/v1/game', (request,response,next) => {
  const criteria = {key:'???'}; // TODO
  Game.find(criteria)
    .then( data => {
      const output = {key:'???'}; // TODO
      sendJSON(output, response);
    })
    .catch( next );
});

router.get('/api/v1/game/:id', (request,response,next) => {
  const criteria = {key:'???'}; // TODO
  Game.find(criteria) // req.params.id
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.post('/api/v1/game', (request,response,next) => {
  const body = '???'; // TODO
  Game.create(body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.put('/api/v1/game/:id', (request,response,next) => {
  request.body._id = '???'; // TODO
  Game.findByIdAndUpdate(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.patch('/api/v1/game/:id', (request,response,next) => {
  Game.findByIdAndUpdate('???', '???') // TODO
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.delete('/api/v1/game/:id', (request,response,next) => {
  Game.findByIdAndRemove('???') // TODO
    .then( result => sendJSON(result, response) )
    .catch( next );
});

//-------------------------------------
//* Export Router
//-------------------------------------
export default router;