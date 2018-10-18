'use strict';

// Modules
const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

// Faker Input
let faker = require('faker');
let randomName = faker.name.findName();
let num1 = faker.random.number();
let num2 = faker.random.number();

// Greet Module
greet(randomName);

// Arithmetic Module
arithmetic.add(num1,num2);
arithmetic.sub(num1,num2);
arithmetic.multi(num1,num2);
arithmetic.div(num1,num2);