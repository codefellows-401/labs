//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import {startDB, stopDB} from '../../../src/supergoose.js'; // <-- necessary to start/stop MongoDB for testing
import Games from '../../../src/models/Games';
import { STATES } from 'mongoose';
import { checkServerIdentity } from 'tls';

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  // clear the collection for pristine testing conditions prior to each test
  await Games.deleteMany({});
});

//-------------------------------------
//* Testing
//-------------------------------------
describe('Games Model', () => {
  it('should create a game', (done) => {
    const gameInfo = {title:'Get Milk'};
    const game = new Games(gameInfo);
    expect(game.title).toBe(gameInfo.title);
    done();
  });

  it('should create and save a game', (done) => {
    const gameInfo = {title:'Get Milk'};
    const game = new Games(gameInfo);
    game.save().then(newgame => {
      expect(newgame.id).toBeDefined();
      done();
    });
  });

  describe('Get All Games', () => {

    it('should get zero Games when collection empty', (done) => {
      Games.find({}).then(Games => {
        expect(Games.length).toBe(0);
        done();
      });
    });

    it('should get 3 Games when collection full', async () => {
      try {
        await Games.create({title:'a'});
        await Games.create({title:'b'});
        await Games.create({title:'c'});
        const Games = await Games.find({});
        expect(Games.length).toBe(3);
      } catch (error) {
        expect(error).toBeFalsy();
      }
    });
  });
});

// Example from class
/*
describe('Games Model', () => {
  it('should get all cities in Washington where cities are populated', async () => {
    const wa = await State.create({ name: 'Washington' });
    await City.create({ name: 'Seattle', state: wa._id });
    await City.create({ name: 'Bothell', state: wa._id });
    const id = wa._id;

    ? now API route simulation begins /state/:id
    const state = await State.findOne({_id : id});
    const citiesInState = await City.find({state : id});
    states.cities = citiesInState;
    expect(state.cities[0].name).toBe('Seattle');
    expect(state.cities[1].name).toBe('Bothell');
  });
});
*/