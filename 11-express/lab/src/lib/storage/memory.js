//----------------------------------
//* Setup
//----------------------------------
// Dependencies
const storage = module.exports = {};
const database = {};

//----------------------------------
//* Memory Storage
//----------------------------------
storage.getAll = () => {
  return Promise.resolve(database);
};

// To get a single entry, check for it in the database, and resolve with it
storage.get = (id) => {
  return new Promise( (resolve,reject) => {
    if ( database[id] ) { resolve(database[id]); }
    else { reject(`${id} not found`); }
  });
};

// For saving, add the data into the "database", keyed by the entry's id
storage.save = (data) => {
  return new Promise( (resolve,reject) => {
    if ( data.id ) {
      database[data.id] = data;
      resolve(database[data.id]);
    }
    else {
      reject('Invalid Data (No ID)');
    }
  });
};

