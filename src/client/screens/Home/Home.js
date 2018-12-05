import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
} from 'react-native';
import styles from './Home.style.js';
import GroupBox from '../../components/UI/GroupBox/GroupBox';
import getAllGroups from '../../../store/GetAllGroups';
import socketIOClient from 'socket.io-client';


export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        groups: 'no groups yet'
      };

      const groupListData = {email: this.props.navigation.getParam('email', '')}
      const endpoint= "http://10.27.230.45:3000"; // this is where we are connecting to with sockets
      let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
      if (groupListData.email !== '') {
        socket.emit('getAllGroups', groupListData);
        socket.on('allGroupsResponse', (data) => {
          this.setState({groups: data})
        });
      }
    }

  render() {
    let groups = undefined
    if (this.state.groups.constructor === Array) {
      groups = this.state.groups.map((obj) => <GroupBox groupName={obj.name} room={obj.room_id} messageTime="3:40pm" description={obj.description} />)
    }
    return (
      <ScrollView>
      {groups}
      </ScrollView>
    );
  }
}
