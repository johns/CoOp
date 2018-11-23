import React, { Component } from "react";
import { Text, AppRegistry, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements'
import CustomButton from "../../components/UI/Button/Button";
import CustomHeader from '../../components/UI/Header/Header';

import styles from './Login.style.js';

export default class Login extends Component {
  settingsPress() {
    alert('The settings button has been pressed');
  }

  constructor(props) {
    super(props);
    this.state = { usernameText: '', passwordText: '' };
  }

  render() {
    return (
      <View>
      <CustomHeader logo={true} />

        <View style={styles.container}>
          <TextInput
            style={styles.userInput}
            onChangeText={(usernameText) => this.setState({usernameText})}
            value= {this.state.usernameText}
            placeholder= "Email"
          />

          <TextInput
            style={styles.userInput}
            onChangeText={(passwordText) => this.setState({passwordText})}
            value= {this.state.passwordText}
            secureTextEntry={true}
            placeholder= "Password"

          />
          <CustomButton text = 'Login' />

          <Text style={styles.createAccountLink} onPress={() => alert('Going to account creation screen.')}>
            Create an account
          </Text>
        </View>
      </View>
    );
  }


}
