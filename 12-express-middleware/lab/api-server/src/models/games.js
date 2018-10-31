//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

//-------------------------------------
//* Class Game
//-------------------------------------
class Game {
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.title = config && config.title || '';
    this.content = config && config.content || '';
  }

  // Methods
  save() {
    return storage.save(this);
  }

  // Static Functions
  static fetchAll() {
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

export default Game;
