import React, { Component } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './Header.style.js';

export default class CustomHeader extends Component {
  static propTypes = {
      leftIcon: PropTypes.string,
      text: PropTypes.string,
      logo: PropTypes.bool,
      rightIcon: PropTypes.string,
  }
  render() {
    const {
        leftIcon,
        text,
        logo,
        rightIcon,
    } = this.props;

    let middleText = { text: text, style: { color: '#ffffff', fontSize: 18, fontWeight: 'bold'} }

    if (logo) {
      middleText = (
        <Image
          source={require('../../../assets/logoGreen.png')}
          tintColor='#ffffff'
          style={{    flex: 1,
            width: 100,
            height: 100,
            resizeMode: 'contain'}}
        />
      )
    }


    return (
      <View>
        <Header
          leftComponent={{ icon: leftIcon, color: '#ffffff' }}
          centerComponent={middleText}
          rightComponent={{ icon: rightIcon, color: '#ffffff' }}
          backgroundColor = '#70e74e'
        />
      </View>
    );
  }
}
