import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function getAllGroupTasks(groupListData) {
  const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupListData.email !== '') {
    socket.emit('getAllGroupTasks', groupListData);
    socket.on('allGroupTasksResponse', (data) => {
      return data;
    });
  }
  return false;
}
