//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const parser = require('./parser.js');
const router = module.exports = {};

//-------------------------------------
//* Router
//-------------------------------------
router.routes = {};
const methods = ['GET','PUT','PATCH','POST','DELETE'];

methods.forEach( (method) => { 
  router.routes[method] = {};
  router[method.toLowerCase()] = (path, callback) => {
    router.routes[method][path] = callback;
  };
});

router.process = (req,res) => {
  console.log(`${req.method} ${req.url}`);
  return parser(req)
    .then(req => {
      let handler = router.routes[req.method][req.parsed.pathname];
      if(handler) { return handler(req,res); }
    })
    .catch(err => {
      console.error('NOT_FOUND', req.parsed.pathname);
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource not found: ${req.parsed.pathname}`);
      res.end();
    });
};