import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './Home.style.js';
import CustomHeader from '../../components/UI/Header/Header';
import GroupBox from '../../components/UI/GroupBox/GroupBox';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <GroupBox groupName="Test" messageTime="3:40pm" description="desc" />
      </ScrollView>
    );
  }
}
