import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')


export default function checkLogin(loginData) {
  const endpoint= config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (loginData.email !== '' && loginData.password !== '') {
    socket.emit('loginInfo', loginData);
    socket.on('loginInfoResponse', (data) => {
      // return data[0].exist;
      console.log(data);
      return data[0].exists;
    });
    return false;
  }
}
