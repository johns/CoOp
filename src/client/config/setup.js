import React, { Component } from "react";
import {
    Text,
} from 'react-native'
// import Home from "../screens/Home/Home";
// import Login from "../screens/Login/Login";
import CreateChat from "../screens/CreateChat/CreateChat";

export default class Setup extends Component {
  render() {
    return (
      // Import what you're currently working on and change name here.
      // <Home />
      <CreateChat />
    );
  }
}
