import React, {
  Component
} from "react";
import {
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Button,
} from 'react-native';
import colors from '../../../lib/colors';
import Dimensions from 'Dimensions';

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


    const styles = StyleSheet.create({
      bubble: {
        backgroundColor: colors.taskOrange,
        alignItems: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
        marginTop: 2,
        marginBottom: 5,
      },
      chatText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      }
    });

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
