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
    
    req.parsed = url.parse(req.url); 
    req.query  = queryString.parse(req.parsed.query); 
    if(! req.method.match(/POST|PUT|PATCH/) ) { resolve(req); }
    
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