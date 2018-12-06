import React, { Component } from "react";
import {
    ScrollView,
} from 'react-native';
import GroupBox from '../../components/UI/GroupBox/GroupBox';
import getAllGroups from '../../../store/GetAllGroups';
import socketIOClient from 'socket.io-client';
import {NavigationEvents} from 'react-navigation';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        groups: 'no groups yet'
      };
  }

  handleChange() {
    const groupListData = {email: this.props.navigation.getParam('email', '')}
    const endpoint= "http://10.27.134.192:3000"; // this is where we are connecting to with sockets
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
      groups = this.state.groups.map((obj, i) => <GroupBox key={i} groupName={obj.name} room={obj.room_id} messageTime="3:40pm" description={obj.description} />)
    }
    return (
      <ScrollView>
        <NavigationEvents
          onDidFocus={this.handleChange.bind(this)}
        />
        {groups}
      </ScrollView>
    );
  }
}
