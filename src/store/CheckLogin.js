import socketIOClient from 'socket.io-client';


export default function checkLogin(loginData) {
  const endpoint= "http://10.27.230.45:3000"; // this is where we are connecting to with sockets
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
