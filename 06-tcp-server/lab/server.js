//-------------------------------------
//* Server Setup
//-------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies 
const net = require('net');
const EE = require('events');

// Client Files
const Client = require('./model/client.js');

// Environment Variables
require('dotenv').config(); // <-- npm package for managing environment variables
const PORT = process.env.PORT || 3000; // <-- listen on 3000

// Server Dependencies
const ee = new EE();
const userPool = [];

// Create Server
const server = net.createServer();
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

//-------------------------------------
//* Server Operations
//-------------------------------------
// Connection Handler
server.on('connection', (socket) => {
  const client = new Client(socket);
  userPool.push(client);
  client.socket.write('Welcome to our chat room! Stay awhile and listen.\n');

  // Message Handler
  socket.on('data', (data) => { 
    // @all <message>
    const command = data.toString().split(' ').shift().trim();
    
    // @dm <username> <message>
    //! REWRITE
    let target = userPool.findIndex(user => {
      return user.nickname === message.split(' ').shift().trim();
    });
    console.log(target);
    userPool.forEach(user => {
      user.socket.write(`${client.nickname} says: ${message.toString().split(' ').splice(1).join(' ')}`);
    });

    // @quit
    //! REWRITE
    console.log(client.nickname);
    let index = userPool.findIndex(user => {
      return user.nickname === client.nickname;
    });
    userPool.splice(index, 1);

    userPool = userPool.filter((user) => user.nickname !== client.nickname);
    client.socket.end();

    // @ handler
    if(command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
      return;
    }

    // Default
    ee.emit('default', client);
  });

});

//-------------------------------------
//* Event Listeners
//-------------------------------------
ee.on('@all', (client, message) => {
  userPool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

ee.on('@nickname', (client, string) => {
  client.nickanme = string;
  client.socket.write(`Your nickname has been changed to ${string}`);
});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with @\n');
});