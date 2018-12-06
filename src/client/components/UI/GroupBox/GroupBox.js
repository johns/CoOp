import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Button } from 'react-native';
import styles from './GroupBox.style.js';
import colors from '../../../lib/colors';
import { withNavigation } from 'react-navigation';

class GroupBox extends Component {
  static propTypes = {
      groupName: PropTypes.string.isRequired,
      messageTime: PropTypes.string,
      description: PropTypes.string,
      notification: PropTypes.string,
  }
  render () {
    const {
      groupName,
      messageTime,
      description,
      notification,
      room,
    } = this.props;

    let notificationColor = 'white';

    if (notification === 'task') {
      notificationColor = colors.taskOrange;
    } else if (notification === 'msg') {
      notificationColor = colors.primaryBlue;
    }

    return (
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => { this.props.navigation.navigate('ChatRoom', {roomID: room, groupName: groupName})}}
      >
        <View style={styles.groupHeader}>
          <Text style={styles.groupName}>
            {groupName}
          </Text>
          <View style={styles.groupMessageTime}>
            <Text>
              {messageTime}
            </Text>
          </View>

        </View>

        <View style={styles.groupMiddle}>
          <Text style={styles.groupDescription}>
            {description}
          </Text>
          <View style={[styles.notification, {backgroundColor: notificationColor}]}>
          </View>
        </View>

      </TouchableOpacity>
    );
  }
}

export default withNavigation(GroupBox);
