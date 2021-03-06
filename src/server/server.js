const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const config = require('./config/config.json')
const initOptions = {/* options as documented below */};
const pgp = require('pg-promise')(initOptions);
// import models from './models';
// const sdb = require('./models/index');
const cn = {
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.username,
    password: config.password
};

const db = pgp(cn);

db.connect();

// our localhost port
const port = 3000

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

let checkLoginInfo = function(data) {
  db.any('select display_name from user_profiles where user_email=${email} and exists(select 1 from user_profiles where user_email=${email} and password=${password})', data)
  .then(function(db_response) {
    console.log('login verified', db_response);
    io.sockets.emit('loginInfoResponse', db_response);
  })
};

let createAccount = function(data) {
  db.none('insert into user_profiles (user_email, display_name, password) values (${email}, ${username}, ${password})', data)
  .then(function(db_response) {
    console.log('account creation status', db_response);
  })
};

let createGroup = function(data) {
  let email = data.email;
  db.none('insert into rooms (name, description) values (${groupName}, ${activityType})', data)
  .then(function(db_response) {
    db.any('select * from rooms where name = $(groupName) and description = $(activityType)', data)
    .then(function(db_response2) {
      db_response2[0].email = email;
      console.log('group info', db_response2);
      db.none('insert into group_members (user_email, room_id) values (${email}, ${room_id})', db_response2[0])
      .then(function(db_response3) {
        console.log('group member status', db_response3);
      })
    })
    console.log('group creation status', db_response);
  })
};
let createTask = function(data) {
  db.none('INSERT INTO tasks (user_email, room_id, task_name, start_point, progress, end_point) VALUES (${email},${roomID},${taskName},${startingPoint},${startingPoint},${endingPoint})', data)
  .then(function(db_response) {
    console.log('task creation status', db_response);
  })
};

let addGroupMember = function(data) {
  db.none('insert into group_members (user_email, room_id) values (${memberEmail}, ${roomID})', data)
  .then(function(db_response) {
    console.log('group member status', db_response);
  })
};

let createNewPassword = function(data) {
  db.none('UPDATE user_profiles SET password=${password} WHERE user_email=${email}', data)
  .then(function(db_response) {
    console.log('group member status', db_response);
  })
};

let changeDisplayName = function(data) {
  db.none('UPDATE user_profiles SET display_name=${username} WHERE user_email=${email}', data)
  .then(function(db_response) {
    console.log('group member status', db_response);
  })
};

let sendGroupMessage = function(data) {
  db.none('insert into messages (room_id, user_email, message_content, date_sent) values (${roomID}, ${email}, ${message}, now())', data)
  .then(function(db_response) {
    console.log('message sent status', db_response);
  })
};

let editTask = function(data) {
  db.none('UPDATE tasks SET progress=${currentPoint} where task_id=${taskID}', data)
  .then(function(db_response) {
    console.log('group member status', db_response);
  })
};

let getAllGroups = function(data) {
  db.any('select name, description, room_id from rooms where room_id in (select room_id from group_members where user_email = ${email})', data)
  .then(function(db_response) {
    console.log('groups verified', db_response);
    io.sockets.emit('allGroupsResponse', db_response);
  })
};

let getAllGroupTasks = function(data) {
  db.any('SELECT task_id, task_name, user_email, start_point, progress, end_point FROM tasks WHERE room_id = ${roomID}', data)
  .then(function(db_response) {
    console.log('groups verified', db_response);
    io.sockets.emit('getAllGroupTasksResponse', db_response);
  })
};

let getAllGroupMembers = function(data) {
  db.any('SELECT group_members.user_email, user_profiles.display_name, user_profiles.profile_picture FROM group_members INNER JOIN user_profiles ON group_members.user_email = user_profiles.user_email WHERE room_id = ${roomID}', data)
  .then(function(db_response) {
    console.log('groups members verified', db_response);
    io.sockets.emit('getAllGroupMembersResponse', db_response);
  })
};

let getGroupInfo = function(data) {
  db.any('select * from rooms where name = ${room_id}', data)
  .then(function(db_response) {
    console.log('groupInfo', db_response);
    io.sockets.emit('getGroupInfoResponse', db_response);
  })
};

let getGroupMessages = function(data) {
  db.any('select user_email, message_content, date_sent from messages where room_id = ${roomID} order by date_sent desc;', data)
  .then(function(db_response) {
    console.log('group info', db_response);
    io.sockets.emit('getGroupMessagesResponse', db_response);
  })
};


// Loads the necessary data on the page to
// let getDetailedUserInfo(data) = function(data) {
//   db.none('select (user_email, display_name, password, profile_picture) from user_profiles where user_email = ${email}', data)
//   .then(function(db_response) {
//     console.log('detailed user info', db_response);
//     io.sockets.emit('getDetailedUserInfoResponse', db_response);
//   })
// };

io.on('connection', function(socket) {
  console.log('User connected')

  socket.on('loginInfo', (data) => {
    console.log('LoginInfoRecieved: ', data);
    checkLoginInfo(data);
  })

  socket.on('createAccountInfo', (data) => {
    console.log('CreateAccountInfoRecieved: ', data);
    createAccount(data);
  })
  socket.on('createTask', (data) => {
    console.log('CreateTaskInfoReceived: ', data);
    createTask(data);
  })

  socket.on('addGroupMember', (data) => {
    console.log('addGroupMemberReceived: ', data);
    addGroupMember(data);
  })

  socket.on('createNewPassword', (data) => {
    console.log('createNewPasswordReceived: ', data);
    createNewPassword(data);
  })

  socket.on('changeDisplayName', (data) => {
    console.log('changeDisplayNameRecieved: ', data);
    changeDisplayName(data);
  })

  socket.on('editTask', (data) => {
    console.log('editTaskReceived: ', data);
    editTask(data);
  })

  socket.on('sendGroupMessage', (data) => {
    console.log('sendGroupMessageRecieved: ', data);
    sendGroupMessage(data);
  })

  socket.on('createGroupInfo', (data) => {
    console.log('createGroupInfoRecieved: ', data);
    createGroup(data);
  })

  socket.on('getAllGroups', (data) => {
    console.log('getAllGroupsReceived: ', data);
    getAllGroups(data);
  })
  socket.on('getAllGroupTasks', (data) => {
    console.log('getAllGroupTasksReceived: ', data);
    getAllGroupTasks(data);
  })
  socket.on('getGroupInfo', (data) => {
    console.log('getGroupInfoRecieved: ', data);
    getGroupInfo(data);
  })

  socket.on('getAllGroupMembers', (data) => {
    console.log('getGroupInfoRecieved: ', data);
    getAllGroupMembers(data);
  })

  socket.on('getDetailedUserInfo', (data) => {
    console.log('getDetailedUserInfoRecieved: ', data)
    getUserDetailedInfo(data);
  })

  socket.on('getGroupMessages', (data) => {
    console.log('getGroupMessagesReceived: ', data)
    getGroupMessages(data);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
});

  server.listen(port, () => console.log(`Listening on port ${port}`));
