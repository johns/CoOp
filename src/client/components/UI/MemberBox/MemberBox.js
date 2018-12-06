import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign/';
import colors from '../../../lib/colors';
import styles from './MemberBox.style.js';
import { withNavigation } from 'react-navigation';

class MemberBox extends Component {
  static propTypes = {
      memberName: PropTypes.string.isRequired,
      memberPhoto: PropTypes.string,
  }
  render () {
    const {
      memberName,
      memberPhoto,
    } = this.props;

    return (
      <View style={styles.memberOutside}>
       {memberPhoto ? (
          <Image
            source={{uri: 'https://i.imgur.com/VhqvEBn.jpg'}}
            style={styles.profilePic}
          />
        ) : (
          <Icon
            name="user"
            size={95}
            color={colors.primaryBlue}
            style={styles.profilePic}
          />
        )}
        <Text style={styles.memberName}>
          {memberName}
        </Text>
      </View>
    );
  }
}

export default withNavigation(MemberBox);
