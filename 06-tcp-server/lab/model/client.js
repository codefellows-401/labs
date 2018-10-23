//-------------------------------------
//* Client Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const uuid = require('uuid/v4');

// User Class
class User {
  constructor(socket) {
    let id = uuid();
    this.id = id;
    this.nickname = `user_${id}`;
    this.socket = socket;
  }  
}

// Export User Class
module.exports = User;