//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const http = require('http');
const router = require('./lib/router.js');
const api = require('./api/api.js');

// Prepare Server
let isRunning = false;
const app = http.createServer(router.route);

//-------------------------------------
//* Deploy Server
//-------------------------------------
module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        console.log(`Listening on port ${port}`);
      });
    } else {
      console.log(`Server is already running on port ${port}`);
    }
  }, 

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  }
}