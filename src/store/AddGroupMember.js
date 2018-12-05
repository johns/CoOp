import socketIOClient from 'socket.io-client';

export default function addGroupMember(memberData) {
  const endpoint= "http://192.168.0.3:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (memberData.memberEmail !== '' && memberData.roomID !== '') {
    socket.emit('addGroupMember', memberData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
