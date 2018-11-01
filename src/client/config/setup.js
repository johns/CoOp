import React, { Component } from "react";
import {
    Text,
} from 'react-native';
import { theme } from "../lib/theme";
import ThemeProvider, { applyTheme } from 'react-native-theme-provider';
import ChatRoom from "../screens/ChatRoom/ChatRoom";

export default class Setup extends Component {
  render() {
    return (
      <ThemeProvider themes={theme}>
      // Import what you're currently working on and change name here.
      <ChatRoom />
      </ThemeProvider>

    );
  }
}
