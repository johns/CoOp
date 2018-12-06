import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function sendGroupMessage(roomData) {
  const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  socket.emit('sendGroupMessage', roomData);
  return true;
}
