import React, { Component } from "react";
import { Text, AppRegistry, Button, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements'
import CustomButton from "../../components/UI/Button/Button";
import CustomHeader from '../../components/UI/Header/Header';
import Logo from '../../components/Logo/Logo';
import styles from './Login.style.js';
import { StyleSheet } from "react-native";
import { getNavigationBase } from "../../config/routes"
import socketIOClient  from 'socket.io-client';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://192.168.0.3:3000" // this is where we are connecting to with sockets
    }
  }

  settingsPress() {
    alert('The settings button has been pressed');
  }

  loginButtonPress = () => {
    let socket= new socketIOClient.connect(this.state.endpoint,{'forceNew':true});
    data = {email: this.state.email, password: this.state.password};
    socket.emit('loginInfo', data);
    socket.on('loginInfoResponse', (data) => {
      if (data[0].exists) {
        this.props.navigation.navigate('Home', {User: {email: this.state.email}});
      } else {
        alert('Wrong login information');
      }
    });
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
