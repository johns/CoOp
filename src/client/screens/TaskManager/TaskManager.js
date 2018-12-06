import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native';
import styles from './TaskManager.style.js';
import TaskBox from '../../components/UI/TaskBox/TaskBox';
import socketIOClient from 'socket.io-client';
import { NavigationEvents } from 'react-navigation';
const config = require('../../../server/config/config.json')

export default class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 'no tasks yet'
    };
  }

  handleChange() {
    const taskListData = {roomID: 1}
    const endpoint = config.serverEndpoint; // this is where we are connecting to with sockets
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
      tasks = this.state.tasks.reverse().map((task, i) => {
        return (
          <TaskBox key={i} id={task.task_id} name={task.task_name} user={task.user_email} start={task.start_point} current={task.progress} end={task.end_point} tracking={true} />
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
          <View style={{height: Dimensions.get('window').height - 150}}>
            <ScrollView>
              <NavigationEvents
                onDidFocus={this.handleChange.bind(this)}
              />
              {tasks}
            </ScrollView>
          </View>
      </View>

    );
  }
}
