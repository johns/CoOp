import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, StyleSheet, View, Button, Image } from 'react-native';
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
        <Image resizeMode="contain" style={styles.logo} source={require('./mudkip.png')} />
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


export default class HeadingCentral extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
        color: PropTypes.string,
    }

    render = () => {
        const {
            children,
            color
        } = this.props;

        const styles = StyleSheet.create({
            headingCentral: {
                marginTop: 20,
                marginBottom: 20,
                textAlign: 'center',
                color: color ? color : 'black',
                fontWeight: 'bold',
                fontSize: 32
            }
        });

        return ( <
            Text style = {
                styles.headingCentral
            } > {
                children
            } <
            /Text>
        );
    }
}
