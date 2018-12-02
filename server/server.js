// let express = require('express');
// let app = express();
// let server = require('http').createServer(app);
// let socketio = require('socket.io').listen(server);
//
// connections = [];
//
// // var websocket = socketio(server);
// server.listen(3000, () => console.log('listening on *:3000'));
//
// // The event will be called when a client is connected.
// socketio.on('connection', (socket) => {
//   console.log('A client just joined on', socket.id);
//   socket.on('loginInfo', (loginInfo) => onMessageReceived(loginInfo, socket));
// });

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

// socketio.sockets.on('connection', function(socket){
//   connections.push(socket);
//   console.log('Connected: % sockets connected', connections.length);
//
//   // Disconnect
//   socket.on('disconnect', function(data) {
//     connections.splice(connections.indexOf(socket), 1);
//     console.log('Disconnected: % sockets connected', connections.length);
//   });
// });

// socketio.on('username', data => {
//   console.log('Incoming login info:',data)
// });



// // Import express
// const express = require('express');
// var http = require('http')
// var socketio = require('socket.io');
// // Import the database
// // const db = require('../db/app.js'); // Not pointing to correct place!
// // Define the port number where the server listens
// const port = 3000;
// //Create app level object of Express JS
// const app = express();
//
// // // Make methods that can interact with the database
// // app.get('/api/contacts', (req, res) => {
// //   // TODO: retreive contacts and send to requester
// // });
// //
// // app.post('/api/contacts', (req, res) => {
// //   const { firstName, lastName, phone } = req.body
// //   // TODO: create contact
// // });
// //
// // app.delete('/api/contacts/:id', (req, res) => {
// //   const id = parseInt(req.params.id)
// //   // TODO: find and delete contact by id
// // });
// //
// // app.put('/api/contacts/:id', (req, res) => {
// // });
//
// // listening to the server on 3000 port
// app.listen(port, function () {
//   console.log("Server is running on "+ port +" port");
// });


const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
// const db = require('../db/models/index.js');
// import models from '../../db/models';
// const models = require('../db/models/index.js');

// our localhost port
const port = 3000

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// models.sequelize.sync().then(() => {
//   console.log(`Database & tables created!`)
// });

// This is what the socket.io syntax is like, we will work this later
io.on('connection', function(socket) {
  console.log('User connected')

  socket.on('loginInfo', (data) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('LoginInfoRecieved: ', data)
    // io.sockets.emit('loginInfo', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
});

server.listen(port, () => console.log(`Listening on port ${port}`))
