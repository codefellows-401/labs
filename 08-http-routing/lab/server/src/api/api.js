//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const router = require('../lib/router.js');

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'ALL GOOD';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OH YEAH';
  res.write(JSON.stringify(req.body));
  res.end();
});

//-------------------------------------
//* Export
//-------------------------------------
module.exports = {};