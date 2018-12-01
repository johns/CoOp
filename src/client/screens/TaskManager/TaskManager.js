import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './TaskManager.style.js';
import TaskBox from '../../components/UI/TaskBox/TaskBox';


export default class MemberList extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <View style={styles.buttonHolder}>
          <Text style={[styles.newTaskButton, styles.addTask]} onPress={navigate.bind(this, 'CreateTask')}>
            New
          </Text>
          <Text style={[styles.newTaskButton, styles.manageTask]}>
            Manage
          </Text>
        </View>
        <View style={styles.separator} />
        <ScrollView>
</ScrollView>
      </View>

    );
  }
}
