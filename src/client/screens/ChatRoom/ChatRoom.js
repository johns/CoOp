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
  container: {
    backgroundColor: '#94ad9a',
    flex: 1,

  },
  userInput: {

    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
   },
   chatBar: {
     flexDirection: 'row',
     borderColor: 'green',
     borderWidth: 1,
     flex: 1,
     position: 'absolute',
     bottom: 0,
     backgroundColor: 'gray',
   },
});

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatBar}>
          <Text>Goals</Text>
          <TextInput
            placeholder='Message'
            style={styles.userInput}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message}
          />
          <Text>Send</Text>

        </View>
      </View>
    );
  }
}
