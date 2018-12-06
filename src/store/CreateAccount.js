import socketIOClient from 'socket.io-client';
const config = require('../server/config/config.json')

export default function createAccount(accountData) {
  const endpoint= config.serverEndpoint; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (accountData.email !== '' && accountData.username !== '' && accountData.password !== '') {
    socket.emit('createAccountInfo', accountData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
