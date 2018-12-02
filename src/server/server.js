const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
// const db = require('../db/models/index.js');
// import models from './models';
const db = require('./models/index');

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

let checkLoginInfo = function(data) {
  // return User_Profile.query("select exists(select 1 from user_profiles where user_email= %s )", data).spread((results, metadata) => {
  //   console.log(results);
  // })
};

// This is what the socket.io syntax is like, we will work this later
io.on('connection', function(socket) {
  console.log('User connected')

  socket.on('loginInfo', (data) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('LoginInfoRecieved: ', data);
    // console.log(checkLoginInfo(data.email))
    io.sockets.emit('loginInfo', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
});

db.sequelize.sync().then(() => {
  server.listen(port, () => console.log(`Listening on port ${port}`));
});
