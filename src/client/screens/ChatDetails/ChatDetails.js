import React, { Component } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Image,
} from 'react-native';
import styles from './ChatDetails.style.js';

export default class ChatDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.detailBox}>
          <View>
            <Image
              source={{uri: 'https://i.imgur.com/VhqvEBn.jpg'}}
              style={styles.groupPicture}
            />
          </View>
          <Text style={styles.groupHeader}>
            [GROUP NAME]
          </Text>
        </View>
        <Text style={styles.sidePanel} onPress={navigate.bind(this, 'InviteUsers')}>
          Invite
        </Text>
        <Text style={styles.sidePanel} onPress={navigate.bind(this, 'MemberList')}>
          Members (#)
        </Text>
        <Text style={styles.sidePanel} onPress={navigate.bind(this, 'TaskManager')}>
          Tasks (#)
        </Text>
        <Text style={styles.confirmButton} onPress={navigate.bind(this, 'Home')}>
          Leave Group
        </Text>

      </KeyboardAvoidingView>
    );
  }
}
