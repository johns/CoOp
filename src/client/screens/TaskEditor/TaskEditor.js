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
    Slider,
} from 'react-native';
import { Header, Button, CheckBox } from 'react-native-elements'
import CustomHeader from '../../components/UI/Header/Header';
import { getNavigationBase } from "../../config/routes";
import styles from './TaskEditor.style.js';
import colors from '../../lib/colors';
import taskEditor from '../../../store/TaskEditor';

export default class TaskEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: this.props.navigation.getParam('taskName', ''),
      startingPoint: this.props.navigation.getParam('startingPoint', 0),
      currentPoint: this.props.navigation.getParam('currentPoint', 0),
      endingPoint: this.props.navigation.getParam('endingPoint', 1),
      };
  }

  taskEditorButtonPress = () => {
    const data = {
      email: 'FILLER EMAIL',
      roomID: 1,
      taskName: this.state.taskName,
      startingPoint: this.state.startingPoint,
      endingPoint: this.state.endingPoint
    };
    if (taskEditor(data)) {
      this.props.navigation.goBack();
    } else {
      alert ('can\'t have any empty fields');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>

      <View style={styles.mainView}>
        <Text style={styles.askText}>{this.state.taskName}</Text>
        <View style={styles.trackRow}>
          <Text style={styles.askText}>Made Progress?</Text>
        </View>
        <View style={styles.sliderBox}>
          <Slider
              style={styles.slider}
              minimumValue={this.state.startingPoint}
              minimumTrackTintColor={colors.taskOrange}
              maximumValue={this.state.endingPoint}
              onValueChange={(value) => this.setState({ currentPoint: value })}
              step={1}
              value={this.state.currentPoint}
            />
          <Text style={styles.askText}>
            Current Progress: {this.state.currentPoint}
          </Text>
        </View>
        <Button
          buttonStyle={styles.goButton}
          color='white'
          onPress={this.taskEditorButtonPress}
          title="Update Task"
        />
      </View>
      </KeyboardAvoidingView>
    );
  }
}
