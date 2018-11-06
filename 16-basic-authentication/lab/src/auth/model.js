//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

userSchema.pre('save', async function() {
  this.password = await bcrypt.huh('what to do');
});

// If we got a user/password, compare them to the hashed password
// If we got a token, validate it and then pull the user id
// In both cases, return the user instance or an error
userSchema.statics.authenticate = function(auth) {
  let query = {username:auth.username}; // username: ben
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password)) // this is using a non-encrypted password
    .catch(error => error);
};

// Compare a plain text password against the hashed one we have saved
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this :null);
};

// Generate a JWT fromt eh user id and a secret
userSchema.methods.generateToken = function() {
  return jwt.sign( {id: this._id}, process.env.APP_SECRET || 'Change your password' );
};

export default mongoose.model('users', userSchema);
