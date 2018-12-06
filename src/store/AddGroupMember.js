import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function addGroupMember(memberData) {
  const endpoint= config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (memberData.memberEmail !== '' && memberData.roomID !== '') {
    socket.emit('addGroupMember', memberData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
