import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

// NOT WORKING
export default function getGroupInfo(groupData) {
  const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (groupData.roomID !== 0) {
    socket.emit('getGroupInfo', groupData);
    socket.on('getGroupInfoResponse', (groupInfoResponse) => {
      console.log('group info has returned from the server');
      return groupInfoResponse;
    })
  } else {
    return null; // (or return an error code)
  }
}
