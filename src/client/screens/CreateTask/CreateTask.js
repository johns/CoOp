import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    AppRegistry,
    Image,
    Picker,
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
      taskName: '',
      startingPoint: 0,
      endingPoint: 1,
      trackProgress: false,
      };
  }

  render() {
    const {navigate, goBack} = this.props.navigation;
    let progress;

    if(this.state.trackProgress) {
      progress =( <View>
        <TextInput
          placeholder='Starting Point'
          keyboardType = 'numeric'
          style={styles.userInput}
          onChangeText={(amount) => this.setState({startingPoint: amount})}
          value={this.state.startingPoint}
          maxLength={3}
        />
        <TextInput
          placeholder='Ending Point'
          keyboardType = 'numeric'
          style={styles.userInput}
          onChangeText={(amount) => this.setState({endingPoint: amount})}
          value={this.state.endingPoint}
          maxLength={3}
        />
        </View>
      )
    }

    return (
      <KeyboardAvoidingView behavior="padding" enabled>

      <View style={styles.mainView}>
        <TextInput
          placeholder='Task Name'
          style={styles.userInput}
          onChangeText={(task) => this.setState({taskName: task})}
          value={this.state.task}
        />
        <View style={styles.trackRow}>
          <Text style={styles.askText}>Track Progress?</Text>
          <Switch
            style={styles.switch}
            onValueChange={ (value) => this.setState({ trackProgress: value })}
            value={ this.state.trackProgress}
            onTintColor={colors.taskOrange}
          />
        </View>
        {progress}
        <Button
          buttonStyle={styles.goButton}
          color='white'
          onPress={() => goBack()}
          title="Create Task"
        />
      </View>
      </KeyboardAvoidingView>
    );
  }
}