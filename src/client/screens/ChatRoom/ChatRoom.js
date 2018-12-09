import React, { Component } from "react";
import {
    View,
    ScrollView,
    TextInput,
    AsyncStorage,
} from 'react-native';
import styles from './ChatRoom.style.js';
import colors from '../../lib/colors';
import ChatBubble from '../../components/UI/ChatBubble/ChatBubble';
import NotificationBubble from '../../components/UI/NotificationBubble/NotificationBubble';
import Icon from 'react-native-vector-icons/Feather/';
import sendGroupMessage from '../../../store/SendGroupMessage';
import socketIOClient from 'socket.io-client';
import { NavigationEvents } from 'react-navigation';
const config = require('../../../server/config/config.json')

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: '[FILLER CHATNAME]',
      message: '',
      messages: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      chatRoom: {
        title: this.props.navigation.getParam('groupName', ''),
        roomID: this.props.navigation.getParam('roomID', ''),
      }
    });
    this.getEmail();
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
     if (sendGroupMessage(data)) {
       this.setState({message:''});
     }
   }

   handleChange() {
     const messageData = {roomID: this.props.navigation.getParam('roomID', '')}
     const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
     let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
     if (messageData.roomID !== '') {
       socket.emit('getGroupMessages', messageData);
       socket.on('getGroupMessagesResponse', (data) => {
         this.setState({messages: data})
       });
     }
   }

  render() {
    let messages = undefined;
    if (this.state.messages.constructor === Array) {
      messages = this.state.messages.map((obj, i) => <ChatBubble key={i} user={obj.user_email} content={obj.message_content} isSelf={obj.user_email === this.state.email} time="date_sent" />)
    }
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.chatArea}>
          <NavigationEvents
            onDidFocus={this.handleChange.bind(this)}
          />
          {messages}
        </ScrollView>
        <View style={styles.chatBar}>
          <View style={styles.goalsIcon}>
            <Icon
              name="check-square"
              size={25}
              color={colors.primaryBlue}
              style={styles.icons}
              onPress={navigate.bind(this, 'TaskManager', {id: this.props.navigation.getParam('roomID', '')})}
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
              onPress={this.sendMessageButtonPress}
            />
          </View>

        </View>
      </View>
    );
  }
}
