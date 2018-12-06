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
import socketIOClient from 'socket.io-client';
import {NavigationEvents} from 'react-navigation';

export default class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 'no tasks yet'
    };
  }

  componentDidMount() {
    const taskListData = {roomID: 1}
    const endpoint= "http://10.27.230.45:3000"; // this is where we are connecting to with sockets
    let socket = new socketIOClient.connect(endpoint,{'forceNew':true});
    if (taskListData.roomID !== '') {
      socket.emit('getAllGroupTasks', taskListData);
      socket.on('getAllGroupTasksResponse', (data) => {
        this.setState({tasks: data})
      });
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    let tasks = undefined
    if (this.state.tasks.constructor === Array) {
      tasks = this.state.tasks.map((task, i) => {
        return (
          <TaskBox key={i} name={task.task_name} user={task.user_email} start={task.start_point} current={task.progress} end={task.end_point} tracking={true} />
        )}
      )
    }


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
            {tasks}
          </ScrollView>
      </View>

    );
  }
}
