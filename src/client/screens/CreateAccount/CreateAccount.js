import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { Button } from 'react-native-elements'
import CustomHeader from '../../components/UI/Header/Header';
import { getNavigationBase } from "../../config/routes"
import styles from './CreateAccount.style.js';
import socketIOClient  from 'socket.io-client';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      endpoint: "http://192.168.0.3:3000" // this is where we are connecting to with sockets
      };
  }

  createAccountButtonPress = () => {
    let socket= new socketIOClient.connect(this.state.endpoint,{'forceNew':true});
    data = {email: this.state.email, username: this.state.username, password: this.state.password};
    if (data.email !== '' && data.username !== '' && data.password !== '') {
      if (data.password == this.state.passwordConfirm) {
        socket.emit('createAccountInfo', data);
        this.props.navigation.navigate('Home', {User: {email: this.state.email}});
      }else {
        alert ('your passwords do not match');
      }
    } else {
      alert ('can\'t have any empty fields');
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput
          placeholder='Email'
          style={styles.userInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder='Display Name'
          style={styles.userInput}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          placeholder='Password'
          style={styles.userInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        <TextInput
          placeholder='Confirm Password'
          style={styles.userInput}
          onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
          value={this.state.passwordConfirm}
          secureTextEntry
        />
        <View style={styles.buttonBox}>
            <Button
              buttonStyle={styles.goButton}
              title="CREATE"
              color="white"
              onPress={this.createAccountButtonPress}
              accessibilityLabel="Create Account"
            />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
