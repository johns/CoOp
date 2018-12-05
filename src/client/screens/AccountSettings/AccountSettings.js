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
import createNewPassword from '../../../store/CreateNewPassword';

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

  handlePress = () => {
    const data = {email: this.state.email, username: this.state.username, password: this.state.password, passwordConfirm: this.state.passwordConfirm};
    if (this.state.password !== '' && this.state.password == this.state.passwordConfirm) {
      if (createNewPassword(data)) {
        this.props.navigation.navigate('Home');
      } else {
        alert ('can\'t have any empty fields');
      }
    }
  }
  // loadAccountSettingsInfo = () => {
  //   let socket= new socketIOClient.connect(this.state.endpoint,{'forceNew':true});
  //   data = {email: this.props.navigation.state.params.User.email};
  //   socket.emit('getDetailedUserInfo', data);
  //   socket.on('getDetailedUserInfoResponse', (data) => {
  //     if (data[0].exists) {
  //       this.props.navigation.navigate('Home', {User: {email: this.state.email}});
  //     } else {
  //       alert('Wrong login information');
  //     }
  //   });
  // }

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
          value={this.state.passwordConfirm}
          secureTextEntry
        />
        <Text style={styles.confirmButton} onPress={this.handlePress}>
          Confirm Changes
        </Text>

      </KeyboardAvoidingView>
    );
  }
}
