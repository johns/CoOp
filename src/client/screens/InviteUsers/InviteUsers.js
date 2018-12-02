import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './InviteUsers.style.js';
import MemberBox from '../../components/UI/MemberBox/MemberBox';
import { SearchBar } from 'react-native-elements';


export default class InviteUsers extends Component {

  render() {
    let someMethod = () => {
      'hi'
    }
    return (
      <View>
      <SearchBar
        round
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={someMethod}
        onClear={someMethod}
        placeholder='Type Here...' />

        <ScrollView>
          <MemberBox memberName="User Without Photo" />
          <MemberBox memberName="User With Photo" memberPhoto="TEST"/>
        </ScrollView>
      </View>
    );
  }
}
