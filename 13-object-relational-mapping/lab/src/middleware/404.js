//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
// n/a

//-------------------------------------
//* 404 Handler
//-------------------------------------
export default (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};