//-------------------------------------
//* Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
import Game from '../models/games.js';

//-------------------------------------
//* Game Data
//-------------------------------------
let game01 = new Game({ name: 'Mass Effect',           platform: 'Microsoft Xbox 360', year: 2008 });
let game02 = new Game({ name: 'Mass Effect 2',         platform: 'Microsoft Xbox 360', year: 2010 });
let game03 = new Game({ name: 'Mass Effect 3',         platform: 'Microsoft Xbox 360', year: 2012 });
let game04 = new Game({ name: 'Mass Effect Andromeda', platform: 'Microsoft Xbox One', year: 2017 });

game01.save((err) => {
  if(err) return handleError(err);
  // else saved!
});

game02.save((err) => {
  if(err) return handleError(err);
  // else saved!
});

game03.save((err) => {
  if(err) return handleError(err);
  // else saved!
});

game04.save((err) => {
  if(err) return handleError(err);
  // else saved!
});