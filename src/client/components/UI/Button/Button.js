import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.style.js';

export default class CustomButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
