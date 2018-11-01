//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import {startDB, stopDB} from '../../../src/supergoose.js';
import Games from '../../../src/models/Games';

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // clear collection for pristine testing conditions
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