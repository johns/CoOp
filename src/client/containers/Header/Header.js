import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Header.style.js';

export default class Header extends Component {
  settingsPress() {
    alert('Click happened');
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <Image resizeMode="contain" style={styles.logo} source={require('./mudkip.png')} /> */}
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Image resizeMode="contain" style={styles.icon} source={require('./gear.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

Header.propTypes = {
  onPress: PropTypes.func
};
