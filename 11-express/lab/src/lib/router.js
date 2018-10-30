//----------------------------------
//* Setup
//----------------------------------
// Dependencies
const parser = require('./parser.js');

//----------------------------------
//* Router Setup
//----------------------------------
const router  = module.exports = {};
const methods = ['GET','PUT','PATCH','POST','DELETE'];
router.routes = {};

//----------------------------------
//* Router
//----------------------------------
methods.forEach( (method) => {
  // Add to queue
  router.routes[method] = {};
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
});

router.route = (req,res) => {

  return parser(req)
    // If valid request, handle it
    .then(req => {
      let handler = router.routes[req.method][req.parsed.pathname];
      if (handler) {
        return handler(req,res);
      }
    })

    // Otherwise, throw error
    .catch(err => {
      console.error('NOT_FOUND', req.parsed.pathname);
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });

};
