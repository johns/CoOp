import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function editTask(taskData) {
  const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (taskData.taskName !== '') {
    socket.emit('editTask', taskData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
