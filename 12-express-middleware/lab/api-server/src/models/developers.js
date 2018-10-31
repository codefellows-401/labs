//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

//-------------------------------------
//* Class Developer
//-------------------------------------
class Developer {
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.name = config && config.title || '';
    this.address = config && config.address || '';
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

export default People;
