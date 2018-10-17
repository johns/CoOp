import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import HeadingCentral from '../../containers/Header/Header';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create ({
   headingCentral: {
      marginTop: 60,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 32
   },
   userInput: {
     marginTop: 20,
     marginBottom: 20,
     marginLeft: 40,
     height: 40,
     borderColor: 'gray',
     borderWidth: 1,
     marginRight: 40,
   },
   goButton: {
     alignItems: 'center',
     marginTop: 10,
   },

});


export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      };
  }

  render() {
    return (
      <View>
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
        <View style={styles.goButton}>
          <Button
            title="CREATE"
            color="#70e74e"
            accessibilityLabel="Create Account"
          />

        </View>
      </View>
    );
  }
}
