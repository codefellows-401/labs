//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const url = require('url');
const queryString = require('querystring');

//-------------------------------------
//* Parser Module
//-------------------------------------
module.exports = (req) => {
  return new Promise( (resolve,reject) => {
    if(!(req||req.url)) { reject('Invalid request object. Cannot parse.'); }

    req.parsed = url.parse(req.url);
    req.query = queryString.parse(req.parsed.query);
    if(! req.method.match(/POST|PUT|PATCH/) ) { resolve(req); }

    let text = '';
    
    // DATA handler
    req.on('data', (buffer) => {
      text += buffer.toString();
    });
    // END handler
    req.on('end', () => {
      try{
        req.body = JSON.parse(text);
        resolve(req);
      }
      catch(err) { reject(err); }
    });
    // ERR handler
    req.on('err', reject);
  });
};