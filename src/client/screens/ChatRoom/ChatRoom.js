import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    Button,
    TextInput,
    Image,
    AsyncStorage,
} from 'react-native';
import CustomHeader from '../../components/UI/Header/Header';
import styles from './ChatRoom.style.js';
import colors from '../../lib/colors';

import ChatBubble from '../../components/UI/ChatBubble/ChatBubble';
import NotificationBubble from '../../components/UI/NotificationBubble/NotificationBubble';
import Icon from 'react-native-vector-icons/Feather/';
import sendGroupMessage from '../../../store/SendGroupMessage';


export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: '[FILLER CHATNAME]',
      message: '',
    };
  }

  componentDidMount() {
     this.props.navigation.setParams({
         chatRoom: {
             title: this.props.navigation.getParam('groupName', ''),
             roomID: this.props.navigation.getParam('roomID', ''),
         }
     });
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

   sendMessageButtonPress = () => {
     let data = {email: this.state.email, roomID: this.props.navigation.getParam('roomID', ''), message: this.state.message};
     sendGroupMessage(data);
   }

  render() {
    const {navigate} = this.props.navigation;
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
              onPress={navigate.bind(this, 'TaskManager')}
            />
          </View>
          <TextInput
            placeholder='Message'
            style={styles.userInput}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message}
            onFocus={this.getEmail.bind(this)}
          />
          <View style={styles.sendIcon}>
            <Icon
              name="send"
              size={25}
              color={colors.primaryBlue}
              style={styles.icons}
              onPress={this.sendMessageButtonPress}
            />
          </View>

        </View>
      </View>
    );
  }
}
