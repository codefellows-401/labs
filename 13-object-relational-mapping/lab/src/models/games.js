'use strict';

import mongoose from 'mongoose';

// define your schema
const gameSchema = mongoose.Schema ({
  title: { type:String, required:true },
  publisher: { type:String, required:true},
  year: { type:Date, required:true }, // TODO: Check DATE structure
  players: { type:String, required:false, enum:['1','1-2','2']},
});

export default mongoose.model('games', gameSchema);

// create your model
// TODO

// export your model
// TODO
