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
      <View style={{flex: 1, alignItems:'center', flexDirection:'column', paddingBottom: 200}}>
        <Image
          source={require(`../../assets/logoGreen.png`)}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain'}}
        />
      </View>
    );
  }
}
