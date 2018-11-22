import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Button } from 'react-native';
import styles from './GroupBox.style.js';
import { withNavigation } from 'react-navigation';

class GroupBox extends Component {
  static propTypes = {
      groupName: PropTypes.string.isRequired,
      messageTime: PropTypes.string,
      description: PropTypes.string,
  }
  render () {

    const {
      groupName,
      messageTime,
      description,
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => { this.props.navigation.navigate('ChatRoom')}}
      >
        <View style={styles.groupHeader}>
          <Text style={styles.groupName}>
            {groupName}
          </Text>
          <Text style={styles.groupMessageTime}>
            {messageTime}
          </Text>
        </View>

        <View style={styles.groupMiddle}>
          <Text style={styles.groupDescription}>
            {description}
          </Text>
        </View>

      </TouchableOpacity>
    );
  }
}

export default withNavigation(GroupBox);
