import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { Button } from 'react-native-elements'
import CustomHeader from '../../components/UI/Header/Header';
import { StyleSheet } from "react-native";
import { getNavigationBase } from "../../config/routes"
import styles from './CreateAccount.style.js';

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
          value={this.state.password}
          secureTextEntry
        />
        <View style={styles.buttonBox}>
            <Button
              buttonStyle={styles.goButton}
              title="CREATE"
              color="white"
              onPress={navigate.bind(this, 'Home')}
              accessibilityLabel="Create Account"
            />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
