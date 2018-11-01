import React, { Component } from "react";
import { Text, AppRegistry, TextInput, View, Button } from 'react-native'
import { Header } from 'react-native-elements'
import styles from './CreateChat.style.js';

export default class CreateChat extends Component {

  constructor(props) {
    super(props);
    this.state = { groupNameText: '', activityTypeText: '' };
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

        <Text style = {styles.inputTitle}> Group Name </Text>

        <TextInput
          style={styles.userInput}
          onChangeText={(groupNameText) => this.setState({groupNameText})}
          value= {this.state.groupNameText}
        />

        <Text style = {styles.inputTitle}> Activity Type </Text>

        <TextInput
          style={styles.userInput}
          onChangeText={(activityTypeText) => this.setState({activityTypeText})}
          value= {this.state.activityTypeText}
        />

        <Button
          style={styles.uploadImageButton}
          containerViewStyle={{width: '50%', marginLeft: 0}}
          onPress={() => alert('Select an image form storage.')}
          title="uploadImage"
          accessibilityLabel="This is an upoad image button"
        />

      </View>
    );
  }
}
