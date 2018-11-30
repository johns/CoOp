import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    AppRegistry,
    Image,
    Switch,
} from 'react-native';
import { Header, Button, CheckBox } from 'react-native-elements'
import CustomHeader from '../../components/UI/Header/Header';
import { getNavigationBase } from "../../config/routes";
import Slider from "react-native-slider";
import styles from './CreateTask.style.js';
import colors from '../../lib/colors';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumDateText: "Beginning of task",
      maximumDateText: "Deadline of task",
      ongoingTask: "Ongoing Task?",
      sliderValue: 0.2,
      };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.mainView}>
        <TextInput
          placeholder='Task Name'
          style={styles.userInput}
          onChangeText={(task) => this.setState({task})}
          value={this.state.task}
        />
        <Switch
          style={{marginLeft: 20}}
          onValueChange={ (value) => this.setState({ toggled: value })}
          value={ this.state.toggled }
        />
        <TextInput
          placeholder='Task Number Range'
          editable= 'false'
          keyboardType = 'numeric'
          style={styles.userInput}
          onChangeText={(amount) => this.setState({amount})}
          value={this.state.task}
        />
        <Text numberOfLines={5}>
          {this.state.maximumDateText}{'\n'}{'\n'}
        </Text>
          <Button
            buttonStyle={styles.goButton}
            onPress={navigate.bind(this, 'ChatRoom')}
            title="Create Task"
          />
      </View>
      </KeyboardAvoidingView>
    );
  }
}
