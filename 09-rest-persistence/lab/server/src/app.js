//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
let http = require('http');
const router = require('./lib/router.js');
const api = require('./api/api.js');

//-------------------------------------
//* Server Setup
//-------------------------------------
let isRunning = false;
const app = http.createServer(router.route);

//-------------------------------------
//* Server Control
//-------------------------------------
module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        isRunning = true;
        console.log(`Server is listening on port ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped.');
    });
  },
};