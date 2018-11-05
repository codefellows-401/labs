//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import mongoose from 'mongoose';

// Schema
const ObjectId = mongoose.Schema.Types.ObjectId;
const gameSchema = new mongoose.Schema ({
  id:       { type:ObjectId, required:true }, // TODO: <-- Primary Key. General idea. Doublecheck syntax.
  platform: { type:ObjectId, required:true }, // TODO: <-- Foreign Key. General idea. Doublecheck syntax.
  title:    { type:String,   required:true },
  year:     { type:Number,   required:true },
});

// Create/Export Model
gameSchema.pre('findOne', function(next) {
  this.populate('platform');
  next();
});

export default mongoose.model('games', gameSchema);