//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import mongoose from 'mongoose';

// Schema
const gameSchema = new mongoose.Schema ({
  title:    { type:String, required:true },
  platform: { type:String, required:true },
  year:     { type:Number, required:true },
});

// Create/Export Model
export default mongoose.model('Game', gameSchema);