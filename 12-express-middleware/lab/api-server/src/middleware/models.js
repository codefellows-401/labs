//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

//-------------------------------------
//* Default Model Controller
//-------------------------------------
import requireAll from 'require-dir';
const models = requireAll(module, '../models.js');

export default (req,res,next) => {
  try {
    let model = req && req.params && req.params.model;
    if ( model && models[model] && models[model].default ) {
      req.model = models[model].default;
      next();
    }
    else { throw 'Model not found'; }
  }
  catch(e) {
    throw e;
  }
};
