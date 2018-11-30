import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    AppRegistry,
    Image,
    Picker,
} from 'react-native';
import { Header, Button } from 'react-native-elements'
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
          placeholder='Task Name'
          style={styles.userInput}
          onChangeText={(task) => this.setState({task})}
          value={this.state.task}
        />
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100, marginTop: 20, marginBottom: 20, }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Single" value="single" />
          <Picker.Item label="Ongoing" value="ongoing" />
        </Picker>
        <TextInput
          placeholder='Task Number Range'
          style={styles.userInput}
          onChangeText={(task) => this.setState({task})}
          value={this.state.task}
        />
        <View style={styles.inputList}>
            <Text numberOfLines={5}>
              {this.state.maximumDateText}{'\n'}{'\n'}
            </Text>
            <Slider
              style={styles.slider}
              value={this.state.sliderValue}
              onValueChange={value => this.setState({ value })}
                    />
            <Button
              buttonStyle={styles.createButton}
              onPress={navigate.bind(this, 'ChatRoom')}
              title="Create Task"
            />
          </View>

      </KeyboardAvoidingView>
    );
  }
}
