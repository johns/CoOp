import socketIOClient from 'socket.io-client';

export default function getAllGroups(groupListData) {
  const endpoint= "http://192.168.0.3:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupListData.email !== '') {
    socket.emit('getAllGroups', groupListData);
    socket.on('allGroupsResponse', (data) => {
      return data;
    });
  }
  return false;
}
