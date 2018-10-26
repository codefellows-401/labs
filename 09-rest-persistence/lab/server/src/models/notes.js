//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const storage = require('../lib/storage/data-store.js');
const uuid = require('uuid/v1');

//-------------------------------------
//* Data Class
//-------------------------------------
class Note {
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.title = config && config.title || '';
    this.content = config && config.content || '';
  }

  save() {
    return storage.save(this);
  }

  static fectchAll() {
    return storage.getAll();
  }
  
  static findOne(id) {
    return storage.get(id);
  }
  
  static updateOne(criteria) {
    return storage.update(this);
  }
  
  static deleteOne(id) {
    return storage.delete(id);
  }
}

module.exports = Note;