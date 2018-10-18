'use strict';

module.exports = (name) => {
  if(typeof name === 'string') {
    return `Hello ${name}`;
  } else {
    return null;
  }
};