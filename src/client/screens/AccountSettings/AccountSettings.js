import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign/';
import CustomHeader from '../../components/UI/Header/Header';
import { getNavigationBase } from "../../config/routes"
import styles from './AccountSettings.style.js';
import colors from '../../lib/colors';

export default class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.profileBox}>
          <Icon
            name="user"
            size={100}
            color={colors.primaryBlue}
            style={styles.profilePic}
          />
        </View>

        <TextInput
          placeholder='CURRENT DISPLAY NAME'
          style={styles.usernameInput}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          placeholder='Previous Password'
          style={styles.passwordInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        <TextInput
          placeholder='New Password'
          style={styles.passwordInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        <TextInput
          placeholder='Confirm New Password'
          style={styles.passwordInput}
          onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
          value={this.state.password}
          secureTextEntry
        />
        <Text style={styles.confirmButton} onPress={navigate.bind(this, 'Home')}>
          Confirm Changes
        </Text>

      </KeyboardAvoidingView>
    );
  }
}
