import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <Text>
      There should be a button here!
      </Text>
      // <View style = {styles.container}>
      //   <TouchableOpacity>
      //     <Text>"this is the default button text"</Text>
      //   </TouchableOpacity>
      // </View>
    );
  }
}
