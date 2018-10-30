//----------------------------------
//* Setup
//----------------------------------
// Dependencies
const storage = require('../lib/storage/data-store.js');
const uuid = require('uuid/v1');

//----------------------------------
//* Game Class
//----------------------------------
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

module.exports = Game;
