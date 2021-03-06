import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign/';
import styles from './AccountSettings.style.js';
import colors from '../../lib/colors';
import createNewPassword from '../../../store/CreateNewPassword';
import changeDisplayName from '../../../store/ChangeDisplayName';


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

  async getEmail() {
    try {
      const value = await AsyncStorage.getItem('user_email');
      this.setState({email: value});
      // alert(this.state.emai);
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async getDisplayName() {
    try {
      const value = await AsyncStorage.getItem('display_name');
      this.setState({username: value});
      // alert(this.state.emai);
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentDidMount() {
    this.getDisplayName();
  }

  handlePress = () => {
    const data = {email: this.state.email, username: this.state.username, password: this.state.password, passwordConfirm: this.state.passwordConfirm};
    if (this.state.password !== '' && this.state.passwordConfirm !== '' && this.state.password == this.state.passwordConfirm) {
      if (this.state.username !== '') {
        changeDisplayName(data);
      }
      if (createNewPassword(data)) {
        this.props.navigation.navigate('Home');
      } else {
        alert('can\'t have any empty fields');
      }
    } else if (this.state.username !== '') {
      changeDisplayName(data);
    } else if (this.state.password !== '' || this.state.passwordConfirm !== '') {
      alert('must fill out both password fields to change password');
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
          placeholder={this.state.username}
          onFocus={this.getEmail.bind(this)}
          style={styles.usernameInput}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          placeholder='New Password'
          onFocus={this.getEmail.bind(this)}
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
