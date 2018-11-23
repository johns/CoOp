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
import ChatBubble from '../../components/UI/ChatBubble/ChatBubble';

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
        </ScrollView>
        <View style={styles.chatBar}>
          <View style={styles.goalsIcon}>
            <Image
              source={require('../../assets/taskIcon.png')}
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
            <Image
              source={require('../../assets/sendIcon.png')}
              style={styles.icons}
              tintColor={this.state.message === '' ? 'gray' : '#000000'}
            />
          </View>

        </View>
      </View>
    );
  }
}
