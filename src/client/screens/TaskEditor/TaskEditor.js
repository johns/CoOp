import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Slider,
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './TaskEditor.style.js';
import colors from '../../lib/colors';
import editTask from '../../../store/EditTask';

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
      taskID: this.props.navigation.getParam('taskID', ''),
      taskName: this.state.taskName,
      startingPoint: this.state.startingPoint,
      currentPoint: this.state.currentPoint,
      endingPoint: this.state.endingPoint
    };
    if (editTask(data)) {
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
