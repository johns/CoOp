import React, { Component } from "react";
import { Text, TextInput, View, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './CreateChat.style.js';
import createGroup from '../../../store/CreateGroup';

export default class CreateChat extends Component {

  constructor(props) {
    super(props);
    this.state = { groupNameText: '', activityTypeText: '', email: '' };
  }

  async getEmail() {
    try {
      const value = await AsyncStorage.getItem('user_email');
      this.setState({email: value});
      // alert(this.state.emai);
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  createGroupButtonPress = () => {
    const data = {groupName: this.state.groupNameText, activityType: this.state.activityTypeText, email: this.state.email};
    if (createGroup(data)) {
        this.props.navigation.navigate('ChatRoom', {groupName: this.state.groupNameText});
    } else {
      alert('cant have empty fields');
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Text style = {styles.inputTitle}> Group Name </Text>

          <TextInput
            style={styles.userInput}
            onFocus={this.getEmail.bind(this)}
            onChangeText={(groupNameText) => this.setState({groupNameText})}
            value= {this.state.groupNameText}
          />
        </View>

        <View>
          <Text style = {styles.inputTitle}> Activity Type </Text>

          <TextInput
            style={styles.userInput}
            onChangeText={(activityTypeText) => this.setState({activityTypeText})}
            value= {this.state.activityTypeText}
          />
        </View>

        <Button
          buttonStyle={styles.createButton}
          onPress={this.createGroupButtonPress}
          title="Create Group"
          accessibilityLabel="This is an upload image button"
        />

      </View>
    );
  }
}
