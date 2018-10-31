//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
const debug = require('debug')('api');

// Express Routter
import express from 'express';
const router = express.Router();

// modelFinder
import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

//-------------------------------------
//* Router
//-------------------------------------
// Get All Records
router.get('/api/v1/:model', (req,res,next) => {
  debug('get all');
  req.model.fetchAll()
    .then(data => sendJSON(res,data))
    .catch(next);
});

// Get One Record
router.get('/api/v1/:model/:id', (req,res,next) => {
  req.model.findOne(req.params.id)
    .then(data => sendJSON(res,data))
    .catch(next);
});

// Add Record -- data sent with POST
router.post('/api/v1/:model', (req,res,next) => {
  let record = new req.model(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(next);
});

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

// Update Record -- data sent with PUT
router.put('/api/v1/:model/:id', (req,res,next) => {
  req.model.updateOne(req.params.id, req.body)
    .then(data => { sendJSON(res,data); })
    .catch(err => { next(); });
});

//-------------------------------------
//* Export Router
//-------------------------------------
export default router;