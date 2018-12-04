all react components call function w/ endpoints


(in a different file)
  export const createAccount = accountData => {
    let socket= new socketIOClient.connect(this.state.endpoint,{'forceNew':true});
    if (accountData.email !== '' && accountData.username !== '' && accountData.password !== '') {
      socket.emit('createAccountInfo', data);
      return true;
    } else {
      return false; // (or return an error code)
    }
  }

  import createAccount from 'db';

  createAccountButtonPress = () => {
    const data = {email: this.state.email, username: this.state.username, password: this.state.password};
    if (createAccount(data)) {
      this.props.navigation.navigate('Home');
    } else {
      alert ('can\'t have any empty fields');
    }
  }
