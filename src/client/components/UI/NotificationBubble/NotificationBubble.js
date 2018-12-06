import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './NotificationBubble.style.js';

class NotificationBubble extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }

  render = () => {
    const {
      user,
      content,
    } = this.props;

    return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.chatText}>{`${user} ${content}`}</Text>
      </View>
    </View>
    );
  }
}

export default NotificationBubble;
