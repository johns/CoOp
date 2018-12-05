import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './Home.style.js';
import GroupBox from '../../components/UI/GroupBox/GroupBox';
import getAllGroups from '../../../store/GetAllGroups';

export default class Home extends Component {
  componentDidMount() {
    const groupListData = {email: this.props.navigation.getParam('email', '')}
    // this.setState({groups: getAllGroups(groupListData)})
    // alert(getAllGroups(groupListData))
  }

  render() {
    return (
      <ScrollView>
      {
        // this.state.groups.map((obj) => <GroupBox groupName={obj.name} messageTime="3:40pm" description={'FILLER'} />)
      }
      </ScrollView>
    );
  }
}
