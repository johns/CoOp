import React, { Component } from "react";
import {
    ScrollView,
} from 'react-native';
import styles from './MemberList.style.js';
import socketIOClient from 'socket.io-client';
import MemberBox from '../../components/UI/MemberBox/MemberBox';
import { NavigationEvents } from 'react-navigation';
const config = require('../../../server/config/config.json')


export default class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupMembers: 'no group members yet',
    };
  }

  handleChange() {
    const memberListData = {roomID: this.props.navigation.getParam('room', '')}
    const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
    let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
    if (memberListData.roomID !== '') {
      socket.emit('getAllGroupMembers', memberListData);
      socket.on('getAllGroupMembersResponse', (data) => {
        this.setState({groupMembers: data})
      });
    }
  }

  render() {
    let groupMembers = undefined;
    if (this.state.groupMembers.constructor === Array) {
      groupMembers = this.state.groupMembers.map((obj, i) => <MemberBox memberName={obj.display_name} memberPhoto={obj.profile_picture} />)
    }
    return (
      <ScrollView>
        <NavigationEvents
          onDidFocus={this.handleChange.bind(this)}
        />
        {groupMembers}
      </ScrollView>
    );
  }
}
