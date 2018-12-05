import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,
} from 'react-native';
import { Button } from 'react-native-elements'
import CustomHeader from '../../components/UI/Header/Header';
import { getNavigationBase } from "../../config/routes"
import styles from './CreateAccount.style.js';
import createAccount from '../../../store/CreateAccount';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      };
  }

  async saveEmail(email) {
    try {
      await AsyncStorage.setItem('user_email', email);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  createAccountButtonPress = () => {
    const data = {email: this.state.email, username: this.state.username, password: this.state.password};
    if (createAccount(data)) {
      if (data.password == this.state.passwordConfirm) {
        this.saveEmail(data.email);
        this.props.navigation.navigate('Home');
      } else {
        alert('passwords do not match');
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
