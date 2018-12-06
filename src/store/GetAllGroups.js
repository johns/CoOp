import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function getAllGroups(groupListData) {
  const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupListData.email !== '') {
    socket.emit('getAllGroups', groupListData);
    socket.on('allGroupsResponse', (data) => {
      return data;
    });
  }
  return false;
}
