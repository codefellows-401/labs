'use strict';

let arithmetic = {
  add: (num1, num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
      return console.log(num1 + num2);
    } else {
      return console.log(null);
    }
  },
  sub: (num1, num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
      return console.log(num1 - num2);
    } else {
      return console.log(null);
    }
  },
  multi: (num1, num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
      return console.log(num1 * num2);
    } else {
      return console.log(null);
    }
  },
  div: (num1, num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number' && num2 !== 0) {
      return console.log(num1 / num2);
    } else {
      return console.log(num1 / num2);
    }
  },
};

module.exports = arithmetic;