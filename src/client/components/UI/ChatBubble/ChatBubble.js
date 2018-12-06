import React, {
    Component
} from "react";
import {
    StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import { View, Text } from 'react-native';
import colors from '../../../lib/colors';

class ChatBubble extends Component {
  static propTypes = {
    isSelf: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string,
  }

  render = () => {
    const {
      isSelf,
      user,
      content,
    } = this.props;

    const styles = StyleSheet.create({
      user: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        color: colors.darkGray,
      },
      bubble: {
        backgroundColor: isSelf ? colors.primaryBlue : colors.lightGray,
        color: isSelf ? colors.primaryBlue : colors.white,
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
        color: isSelf ? colors.white : colors.black,
        textAlign: isSelf ? 'right' : 'left',
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.userSide}>
          <Text style={styles.user}>{user}</Text>
        </View>
        <View style={styles.bubble}>
          <Text style={styles.chatText}>{content}</Text>
        </View>
      </View>
    );
  }
}

export default ChatBubble;
