//----------------------------------
//* Setup
//----------------------------------
// Dependencies
const router = require('../lib/router.js');
const Game = require('../models/games.js');

//----------------------------------
//* API Handler
//----------------------------------
let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

let serverError = (res,err) => {
  let error = { error:err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};

//----------------------------------
//* Router
//----------------------------------
router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'Hello world!';
  res.setHeader('Content-Type', 'application/text');
  res.write('Yello!');
  res.end();
});

router.get('/api/v1/game', (req,res) => {
  if ( req.query.id ) {
    Game.findOne(req.query.id)
      .then( data => sendJSON(res,data) )
      .catch( err => serverError(res,err) );
  }
  else {
    Game.fetchAll()
      .then( data => sendJSON(res,data) )
      .catch( err => serverError(res,err) );
  }
});

router.delete('/api/v1/game', (req,res) => {
  if ( req.query.id ) {
    Game.deleteOne(req.query.id)
      .then( success => {
        let data = {id:req.query.id,deleted:success};
        sendJSON(res,data);
      });
  }
});

router.post('/api/v1/game', (req,res) => {

  let record = new Game(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(console.error);

});

module.exports = {};
