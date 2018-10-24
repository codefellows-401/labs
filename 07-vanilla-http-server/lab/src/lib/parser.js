//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const url = require('url');
const queryString = require('querystring');

//-------------------------------------
//* Exports
//-------------------------------------
module.exports = (req) => {

  return new Promise( (resolve,reject) => {

    // Check for valid URL
    if(! (req || req.url) ) { 
      PromiseRejectionEvent(`Invalid request object. Cannot parse ${req}.`); 
    }
    
    // req || req.url = http://localhost:3000/api/v1/notes?id=12345

    // Parse the original URL (req) and return as an object
    req.parsed = url.parse(req.url); 
    /*
      {
        pathname: '/api/vi/notes',
        query:    '?id=12345&name=John'
      }
    */
    
    // Parse a querystring into key/value pairs
    req.query  = queryString.parse(req.parsed.query); 
    /*
      {
        id:   12345,
        name: 'John'
      }
    */

    if(! req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }
    
    let text = '';

    req.on('data', (buffer) => {
      text += buffer.toString();
    });

    req.on('end', () => {
      try{
        req.body = JSON.parse(text);
        resolve(req);
      } 
      catch(err) { reject(err); }
    });

    req.on('err', reject);
  });
};