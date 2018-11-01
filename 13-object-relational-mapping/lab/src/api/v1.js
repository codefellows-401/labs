//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import express from 'express';
import Games from '../models/Games.js';

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
router.get('/api/v1/Games', (request,response,next) => {
  const criteria = {key:'???'}; // TODO
  Games.find(criterial)
    .then( data => {
      // TODO
      const output = {key:'???'}; 
      sendJSON(output, response);
    })
    .catch( next );
});

router.get('/api/v1/Games/:id', (request,response,next) => {
  const criteria = {key:'???'}; // TODO
  Games.find()
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.post('/api/v1/Games', (request,response,next) => {
  const body = '???';
  Games.create(body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.put('/api/v1/Games/:id', (request,response,next) => {
  request.body._id = '???';
  Games.findByIdAndUpdate(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.patch('/api/v1/Games/:id', (request,response,next) => {
  Games.findByIdAndUpdate('???', '???')
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.delete('/api/v1/Games/:id', (request,response,next) => {
  Games.findByIdAndRemove('???')
    .then( result => sendJSON(result, response) )
    .catch( next );
});

//-------------------------------------
//* Export Router
//-------------------------------------
export default router;