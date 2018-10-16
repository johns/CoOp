import React, { Component } from "react";
import {
    Text,
} from 'react-native'
import Button from "../../components/UI/Button/Button";
import Header from "../../containers/Header/Header";

export default class Login extends Component {
  settingsPress() {
    alert('The settings button has been pressed');
  }

  render() {
    return (
      // <Text>
      // Test Login
      // </Text>
      <Header onPress={this.settingsPress.bind(this)}/>
      // <Button text = "Login" />
    );
  }
}
