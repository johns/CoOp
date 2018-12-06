import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function changeDisplayName(memberData) {
  const endpoint= config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  socket.emit('changeDisplayName', memberData);
  return true;
}
