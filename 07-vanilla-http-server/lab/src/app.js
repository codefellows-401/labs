//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const http = require('http');
const parser = require('./lib/parser.js');

//-------------------------------------
//* HTTP Router
//-------------------------------------
// Request Handler (promise)
const requestHandler = (req,res) => { 
  // console.log(req.headers); // <-- useful info

  // URL Parser
  parser(req)
    // success callback
    .then(req => {
      // GET
      if(req.method === 'GET' && req.parsed.pathname === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'All good!';
      }
      // POST
      else if (req.method === 'POST' && req.parsed.pathname === '/data') {
        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(JSON.stringify(req.body));
        res.end();
        return;
      }
      // 404
      else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Page not found';
        res.write('Resource not found');
        res.end();
      }
    })
    // error callback
    .catch(err => {
      res.writeHead(500);
      res.write(err);
      res.end();
    });
};

//-------------------------------------
//* Deploy Server
//-------------------------------------
// Server Callback
const app = http.createServer(requestHandler);

//-------------------------------------
//* Exports
//-------------------------------------
module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};