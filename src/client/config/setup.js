import React, { Component } from "react";
import {
    Text,
} from 'react-native'

import { colors } from "../lib/colors";
import ChatRoom from "../screens/ChatRoom/ChatRoom";
import CreateChat from "../screens/CreateChat/CreateChat";
import CreateAccount from "../screens/CreateAccount/CreateAccount";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";

export default class Setup extends Component {
  render() {
    return (

      <ChatRoom />
    );
  }
}
