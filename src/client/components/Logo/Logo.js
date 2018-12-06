import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Logo.style.js';

export default class Logo extends Component {
  static propTypes = {
    primary: PropTypes.bool,
  }
  render() {
    const {
      primary,
    } = this.props;

    return (
      <View style={{flex: 1, alignItems:'center', flexDirection:'column', paddingBottom: 275}}>
        <Image
          source={require(`../../assets/logo.png`)}
          style={styles.image}
        />
      </View>
    );
  }
}
