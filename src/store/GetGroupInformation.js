import socketIOClient from 'socket.io-client';

// NOT WORKING
export default function getGroupInformation(groupData) {
  const endpoint= "http://192.168.0.3:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupData.groupName !== '' && groupData.activityType && groupData.email !== '') {
    socket.emit('getGroupInfo', groupData);
    socket.on('getGroupInfoResponse', (groupInfoResponse) => {
      console.log('group info has returned from the server');
      return groupInfoResponse[0];
    })
  } else {
    return null; // (or return an error code)
  }
}
