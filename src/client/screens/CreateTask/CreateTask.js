import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    AppRegistry,
} from 'react-native';
import { Button } from 'react-native-elements'
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
      sliderValue: 0.2,
      };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput
          placeholder='Task'
          style={styles.userInput}
          onChangeText={(task) => this.setState({task})}
          value={this.state.task}
        />
        <View style={styles.container}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
              {this.state.minimumDateText}{'\n'}{'\n'}
            </Text>
            <Slider
              style={styles.slider}
              value={this.state.sliderValue}
              onValueChange={value => this.setState({ value })}
                    />
            <Text numberOfLines={5}>
              {this.state.maximumDateText}{'\n'}{'\n'}
            </Text>
            <Slider
              style={styles.slider}
              value={this.state.sliderValue}
              onValueChange={value => this.setState({ value })}
                    />
          </View>
          <Text style={styles.confirmButton} onPress={navigate.bind(this, 'Home')}>
            Create Task
          </Text>
      </KeyboardAvoidingView>
    );
  }
}
