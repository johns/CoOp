import React, { Component } from "react";
import { Text, AppRegistry, TextInput, View, Button } from 'react-native'
import { Header } from 'react-native-elements'
import styles from './CreateChat.style.js';

export default class CreateChat extends Component {

  constructor(props) {
    super(props);
    this.state = { groupNameText: 'Group Name' };
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'keyboard-arrow-left', color: '#000000' }}
          centerComponent={{ text: 'Create Chat', style: { color: '#000000' } }}
          rightComponent={{ icon: 'home', color: '#000000' }}
          backgroundColor = '#70e74e'
        />

        <TextInput
          style={styles.userInput}
          onChangeText={(groupNameText) => this.setState({groupNameText})}
          value= {this.state.groupNameText}
        />
      </View>
    );
  }
}
