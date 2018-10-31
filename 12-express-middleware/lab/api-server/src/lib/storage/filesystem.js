//-------------------------------------
//* Setup
//-------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import fs from 'fs';
const debug = require('debug')('storage');

//-------------------------------------
//* Storage Setup
//-------------------------------------
const storage = {};

// The location where we will store our individual model data files
const dataDirectory = `${__dirname}/../../../data`;

// Promisify the fs.readFile() method
let readFilePromise = function(filename) {
  debug(`readFilePromise ${filename}`);
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, data){
      if (err)
        reject(err);
      else
        resolve(data);
    });
  });
};

//-------------------------------------
//* Storage Controller
//-------------------------------------
// Read all of the files in a directory and collate them
storage.getAll = () => {
  debug('getting all');
  return new Promise( (resolve,reject) => {
    fs.readdir(dataDirectory, (err,files) => {
      if(err) { reject(err); }
      let promises = [];
      while(files.length) {
        let file = files.shift();
        file = `${dataDirectory}/${file}`;
        if ( file.match(/\.json/) ) { promises.push( readFilePromise(file) ); }
      }
      Promise.all(promises)
        .then(contents => {
          let database = contents.reduce( (db,data) => {
            let obj = JSON.parse(data.toString());
            db[obj.id] = obj;
            return db;
          },{});
          resolve(database);
        })
        .catch(console.log);
    });
  });
};

// Pick one of the files from our data folder, if it's id is valid (file is there)
storage.get = (id) => {
  debug(`getting ${id}`);
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err,data) => {
      if ( data ) {
        let obj = JSON.parse(data.toString());
        resolve(obj);
      }
      else { reject(`${id} not found`); }
    });
  });
};

// Create a new data file with our model object
storage.save = (data) => {
  debug(`saving ${JSON.stringify(data)}`);
  return new Promise( (resolve,reject) => {
    if ( ! data.id ) { reject('No Record ID Specified'); }

    let file = `${dataDirectory}/${data.id}.json`;
    let text = JSON.stringify(data);
    fs.writeFile( file, text, (err) => {
      if(err) { reject(err); }
      resolve(data);
    });
  });
};

// Update Function -- modified from example code by Jen Cardigan
// TODO: Review the information passed back from the 'Criteria' object
storage.update = (id, criteria) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    false.readFile(file, (err, data) => {
      if(data) {
        let obj = JSON.parse(data.toString());
        let overwritten = JSON.stringify(Object.assign({}, obj, criteria));
        fs.writeFile(file,overwritten,(err) => {
          if(err) { reject(err); }
          resolve(`${id} has been changed.`);
        });
      }
      else { reject(`${data} not found!`); }
    });
  });
};


//-------------------------------------
//* Export Stroage
//-------------------------------------
export default storage;