import React, { Component } from "react";
import { Text, AppRegistry, TextInput, View, Image } from 'react-native'
import { Header, Button } from 'react-native-elements'
import styles from './CreateChat.style.js';
import CustomHeader from "../../components/UI/Header/Header";

export default class CreateChat extends Component {

  constructor(props) {
    super(props);
    this.state = { groupNameText: '', activityTypeText: '' };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainView}>
        <View>
          <Text style = {styles.inputTitle}> Group Name </Text>

          <TextInput
            style={styles.userInput}
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
          onPress={navigate.bind(this, 'ChatRoom')}
          title="Create Group"
          accessibilityLabel="This is an upload image button"
        />

      </View>
    );
  }
}
