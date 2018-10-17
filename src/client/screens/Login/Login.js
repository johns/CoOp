import React, { Component } from "react";
import { Text, AppRegistry, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements'
import CustomButton from "../../components/UI/Button/Button";
import styles from './Login.style.js';

export default class Login extends Component {
  settingsPress() {
    alert('The settings button has been pressed');
  }

  constructor(props) {
    super(props);
    this.state = { usernameText: 'Username', passwordText: 'Password' };
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Login Screen', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.container}>
          <TextInput
            style={styles.userInput}
            onChangeText={(usernameText) => this.setState({usernameText})}
            value= {this.state.usernameText}
          />

          <TextInput
            style={styles.userInput}
            onChangeText={(passwordText) => this.setState({passwordText})}
            value= {this.state.passwordText}
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
