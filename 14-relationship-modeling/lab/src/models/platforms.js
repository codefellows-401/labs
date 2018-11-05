//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import mongoose from 'mongoose';

// Schema
const ObjectId = mongoose.Schema.Types.ObjectId;
const platformSchema = new mongoose.Schema ({
  id:       { type:ObjectId, required:true }, // TODO: <-- Primary Key. General idea. Doublecheck syntax.
  platform: { type:String,   required:true },
  creator:  { type:String,   required:true },
});

// Create/Export Model
export default mongoose.model('platforms', platformSchema);