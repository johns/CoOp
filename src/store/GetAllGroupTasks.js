import socketIOClient from 'socket.io-client';

export default function getAllGroupTasks(groupListData) {
  const endpoint= "http://10.27.230.45:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupListData.email !== '') {
    socket.emit('getAllGroupTasks', groupListData);
    socket.on('allGroupTasksResponse', (data) => {
      return data;
    });
  }
  return false;
}
