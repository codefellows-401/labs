
# 06: TCP Server
## Overview
The following app is a TCP chatroom. Clients are able to connect to the chatroom through the use of telnet, and are able to run special commands to exit the chatroom, list all users, reset their nickname, and send direct messages. This app does not utilize any third party libraries, and was purely built using vanilla Node and JavaScript.

## Getting Started
- **Telnet:** Install Telnet, or your network connection device of choice
- **Run Server:** Type 'npm start' in your system's terminal window to launch the server
- **Connect to Server:** Locate your current IP address (e.g. get-ip), and while on the same network subnet join the server by opening the Telnet app and typing 'telnet \<IP> \<PORT>' where \<IP> is your IP address and \<PORT> is 3000.

## Basic Commands
  - @quit to disconnect
  - @list to list all connected users
  - @nickname \<new-name> to change their nickname
  - @dm \<to-username> \<message> to send a private message directly to another user by their nickname

## Dependencies
**Software**
- Telnet
- iTerm2 (optional)

**Packages**
- get-ip
- jest
- uuid

**Node Modules**
- Event Emitter
- Net

## Checklist
- **[x] Scaffold project**
- **[ ] Create TCP Server**
- **[ ] Testing**
- **[ ] Stretch Goals**

## Developers
- Ben Harris
