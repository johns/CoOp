import React, { Component } from "react";
import { Text, AppRegistry, Button, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements'
import CustomButton from "../../components/UI/Button/Button";
import CustomHeader from '../../components/UI/Header/Header';
import Logo from '../../components/Logo/Logo';
import styles from './Login.style.js';
import { StyleSheet } from "react-native";
import { getNavigationBase } from "../../config/routes"


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { usernameText: '', passwordText: '' };
  }


  settingsPress() {
    alert('The settings button has been pressed');
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Logo primary={true} />
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

          <Text style={styles.createAccountLink} onPress={() => navigate('CreateAccount')}>
            Create an account
          </Text>
        </View>
      </View>
    );
  }


}
