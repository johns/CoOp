import React, { Component } from "react";
import {
    ScrollView,
} from 'react-native';
import styles from './MemberList.style.js';
import MemberBox from '../../components/UI/MemberBox/MemberBox';


export default class MemberList extends Component {
  render() {
    return (
      <ScrollView>
        <MemberBox memberName="User Without Photo" />
        <MemberBox memberName="User With Photo" memberPhoto="TEST"/>
      </ScrollView>
    );
  }
}
