import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    Image,
} from 'react-native';
import CustomHeader from '../../components/UI/Header/Header';
import ChatBubble from '../../components/UI/ChatBubble/ChatBubble';

import { StyleSheet } from "react-native";


const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#94ad9a',
    flex: 1,
  },
  chatArea: {
    marginLeft: 7,
    marginRight: 7,
    flex: 1,
    flexDirection: 'column'
  },
  chatBar: {
     justifyContent: 'space-between',
     height: 60,
     flexDirection: 'row',
     borderTopWidth: 1,
     borderTopColor: 'black',
     flex: 1,
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: '#eeeeee',
   },
   goalsIcon: {
     height: 60,
     paddingLeft: 7,

     justifyContent: 'flex-end',
     justifyContent: 'center',
   },
   userInput: {
     justifyContent: 'center',
     borderBottomWidth: 1,
     borderBottomColor: 'black',
     flex: 1,
     marginLeft: 7,
     marginRight: 7,
     marginBottom: 3,
    },
   sendIcon: {
     height: 60,
     paddingRight:7,
     justifyContent: 'flex-end',
     justifyContent: 'center',
   },
   icons: {
     height: 40,
     width: 40,
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
        <CustomHeader text = 'Create Chat' leftIcon = 'keyboard-arrow-left' rightIcon = 'info'/>
        <View style={styles.chatArea}>
          <ChatBubble content="AIIGHT" user={"YEP"} isSelf={false}></ChatBubble>

          <ChatBubble content="HELP" user={"SAM"} isSelf={true}></ChatBubble>
        </View>
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
