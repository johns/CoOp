import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    Button,
    TextInput,
    Image,
} from 'react-native';
import CustomHeader from '../../components/UI/Header/Header';
import styles from './ChatRoom.style.js';
import colors from '../../lib/colors';

import ChatBubble from '../../components/UI/ChatBubble/ChatBubble';
import NotificationBubble from '../../components/UI/NotificationBubble/NotificationBubble';
import Icon from 'react-native-vector-icons/Feather/';


export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: '[FILLER CHATNAME]',
      message: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.chatArea}>
          <ChatBubble content="AIIGHT" user={"YEP"} isSelf={false}></ChatBubble>
          <ChatBubble content="HELP" user={"SAM"} isSelf={true}></ChatBubble>
          <NotificationBubble content="has completed the task." user={"Sham"}></NotificationBubble>
          <NotificationBubble content="has left the group." user={"Sham"}></NotificationBubble>

        </ScrollView>
        <View style={styles.chatBar}>
          <View style={styles.goalsIcon}>
            <Icon
              name="check-square"
              size={25}
              color={colors.primaryBlue}
              style={styles.icons}
            />
          </View>
          <TextInput
            placeholder='Message'
            style={styles.userInput}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message}
          />
          <View style={styles.sendIcon}>
            <Icon
              name="send"
              size={25}
              color={colors.primaryBlue}
              style={styles.icons}
            />
          </View>

        </View>
      </View>
    );
  }
}
