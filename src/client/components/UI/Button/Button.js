import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.style.js';
// import { Button } from 'react-native-elements';

export default class Button extends Component {
  render() {
    return (
      // <Text>
      // There should be a button here!
      // </Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>"this is the default button text"</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
