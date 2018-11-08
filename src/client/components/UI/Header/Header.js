import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './Header.style.js';

export default class CustomHeader extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'keyboard-arrow-left', color: '#000000' }}
          centerComponent={{ text: 'Create Chat', style: { color: '#000000' } }}
          rightComponent={{ icon: 'home', color: '#000000' }}
          backgroundColor = '#70e74e'
        />
      </View>
    );
  }
}
