//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import supergoose, {startDB, stopDB} from '../../src/supergoose.js';
import Notes from '../../src/models/notes';

// Mongoose Config
const {server} = require('../../src/app.js');
const mockRequest = supergoose(server);

const url = '/api/v1/notes';
const newNote = {title:'test',text:'foo'};

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // clear collection
  await Notes.deleteMany({});
});

//-------------------------------------
//* Testing
//-------------------------------------
describe('api server', () => {

  it('should respond with a 500 on an invalid model', async () => {
    const response = 
      await mockRequest.get('/booboo');
    expect(response.status).toBe(404);
  });
  
});