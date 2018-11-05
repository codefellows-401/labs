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
  let error = { error: `Page not found. If you've come for the fork you'll be sorely dissapointed.` };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};