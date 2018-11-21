import React, {Component} from "react";
import { AppRegistry } from "react-native";
import Setup from "./src/client/config/setup";
import {
    Text,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/client/screens/Home/Home";
import Login from "./src/client/screens/Login/Login";

// static navigationOptions = {
// headerTitle: <LogoTitle />,
// headerRight: (
//   <Button
//     onPress={() => alert('This is a button!')}
//     title="Info"
//     color="#fff"
//   />
// ),
// };
// ^^ Meant for specific pages / Header

const RootStack = createStackNavigator(
  {
    Home: Home,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;


AppRegistry.registerComponent("BetterWe", () => App);
