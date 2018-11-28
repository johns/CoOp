import React, { Component } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
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

    // let srcPath = primary ? 'Green' : 'White';

    return (
      <View style={{flex: 1, alignItems:'center', flexDirection:'column', paddingBottom: 275}}>
        <Image
          source={require(`../../assets/logo.png`)}
          style={{
            width: 350,
            height: 350,
            resizeMode: 'contain'}}
        />
      </View>
    );
  }
}
