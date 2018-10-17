import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import HeadingCentral from '../../containers/Header/Header';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create ({
  userInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 40,
   },

  buttonBox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     flex: 1,
   },

});


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
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <HeadingCentral color="#70e74e"> Create an Account </HeadingCentral>
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
          <View style={styles.goButton}>
            <Button
              title="BACK TO LOGIN"
              color="#94ad9a"
              accessibilityLabel="Back to Login"
            />
          </View>
          <View style={styles.goButton}>
            <Button
              title="CREATE"
              color="#70e74e"
              accessibilityLabel="Create Account"
            />
          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}
