import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';
import styles from './InviteUsers.style.js';
import MemberBox from '../../components/UI/MemberBox/MemberBox';
import addGroupMember from '../../../store/AddGroupMember';

export default class InviteUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      roomID: 42,
    }
  }

  inviteOnPress = (id) => {
    const data = {memberEmail: this.state.email, roomID: id};
    if (addGroupMember(data)) {
      this.props.navigation.goBack();
    } else {
      alert ('SERVER DOWN');
    }
  }

  render() {
    return (
      <View>
      <TextInput
        style={styles.userInput}
        onChangeText={(email) => this.setState({email})}
        value= {this.state.email}
        placeholder= "Email"
      />
      <Text style={styles.createAccountLink} onPress={this.inviteOnPress.bind(this, this.props.navigation.getParam('id', ''))}>
        Add
      </Text>

        <ScrollView>
          <MemberBox memberName="User Without Photo" />
          <MemberBox memberName="User With Photo" memberPhoto="TEST"/>
        </ScrollView>
      </View>
    );
  }
}
