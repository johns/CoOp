import React, { Component } from "react";
import { Text, TextInput, View, AsyncStorage } from 'react-native'
import Logo from '../../components/Logo/Logo';
import styles from './Login.style.js';
import checkLogin from '../../../store/CheckLogin';
import socketIOClient from 'socket.io-client';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  async saveEmail(email, name) {
    try {
      await AsyncStorage.setItem('user_email', email);
      await AsyncStorage.setItem('display_name', name);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  loginButtonPress = () => {
    const config = require('../../../server/config/config.json')
    const data = {email: this.state.email, password: this.state.password};
    const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
    let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
    if (data.email !== '' && data.password !== '') {
      socket.emit('loginInfo', data);
      socket.on('loginInfoResponse', (data) => {
        // return data[0].exist;
        if (data[0]) {
          this.saveEmail(this.state.email, data[0].display_name);
          this.props.navigation.navigate('Home', {email: this.state.email});
        } else {
          alert('Wrong login information');
        }
      });
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Logo primary={true} />
        <View style={styles.container}>
          <TextInput
            style={styles.userInput}
            onChangeText={(email) => this.setState({email})}
            value= {this.state.email}
            placeholder= "Email"
          />

          <TextInput
            style={styles.userInput}
            onChangeText={(password) => this.setState({password})}
            value= {this.state.password}
            secureTextEntry={true}
            placeholder= "Password"

          />
          <Text style={styles.loginLink} onPress={this.loginButtonPress}>
            Login
          </Text>
          <Text style={styles.createAccountLink} onPress={navigate.bind(this, 'CreateAccount')}>
            Create an account
          </Text>
        </View>
      </View>
    );
  }
}
