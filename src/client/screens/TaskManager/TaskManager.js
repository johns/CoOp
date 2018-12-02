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


export default class TaskManager extends Component {
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
          <TaskBox name="Tracking Complete" user="Sam" start={1} end={4} current={4} tracking={true} />
          <TaskBox name="Tracking Incomplete" user="Jimmy" start={1} end={4} current={1} tracking={true} />
          <TaskBox name="No Tracking Complete" user="Sam" start={0} end={1} current={1} tracking={false} />
          <TaskBox name="No Tracking Incomplete" user="John" start={0} end={7} current={1} tracking={false} />
        </ScrollView>
      </View>

    );
  }
}
