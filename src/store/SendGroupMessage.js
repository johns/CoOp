import socketIOClient from 'socket.io-client';

export default function sendGroupMessage(roomData) {
  const endpoint= "http://192.168.0.3:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  socket.emit('sendGroupMessage', roomData);
  return true;
}
