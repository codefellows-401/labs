import express from 'express';
import User from './model.js';
import auth from './middleware.js';

// TODO: YouTube 11/6 at 10:00 a.m.
const authRouter = express.Router();

authRouter.get('/signin', auth, (request, response) => {
  response.send('where can the token be?');
});

authRouter.post('/signup', async (request, response) => {

  try {

    // create the user with posted info

    // make a token unique to the user
    
    // respond with the token

  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;