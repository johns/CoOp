import socketIOClient from 'socket.io-client';

export default function changeDisplayName(memberData) {
  const endpoint= "http://192.168.0.3:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  socket.emit('changeDisplayName', memberData);
  return true;
}
