import socketIOClient  from 'socket.io-client';

export default function createAccount(accountData) {
  const endpoint= "http://10.27.230.45:3000"; // this is where we are connecting to with sockets
  let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
  if (accountData.email !== '' && accountData.username !== '' && accountData.password !== '') {
    socket.emit('createAccountInfo', accountData);
    return true;
  } else {
    return false; // (or return an error code)
  }
}
