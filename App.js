import React, {Component} from "react";
import { AppRegistry } from "react-native";
import Setup from "./src/client/config/setup";
import {
    Text, Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/client/screens/Home/Home";
import Login from "./src/client/screens/Login/Login";
import CreateAccount from "./src/client/screens/CreateAccount/CreateAccount";
import CreateChat from "./src/client/screens/CreateChat/CreateChat";
import ChatRoom from "./src/client/screens/ChatRoom/ChatRoom";

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
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'BetterWe',
        headerVisible: true,
        headerRight: (
          <Button
            onPress={() => navigation.navigate('CreateChat')}
            title="Create Chat"
            color="#000"
          />
        ),
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'BetterWe',
        headerVisible: true,
      }),
    },
    CreateAccount: {
      screen: CreateAccount,
      navigationOptions: () => ({
        title: 'Create An Account',
        headerVisible: true,
      }),
    },
    CreateChat: {
      screen: CreateChat,
      navigationOptions: () => ({
        title: 'Create New Chat',
        headerVisible: true,
      }),
    },
    ChatRoom: {
      screen: ChatRoom,
      navigationOptions: () => ({
        title: '[ROOM NAME]',
        headerVisible: true,
      }),
    },
  },
  {
    initialRouteName: "Home",
  }
)



const AppContainer = createAppContainer(RootStack);

export default AppContainer;


AppRegistry.registerComponent("BetterWe", () => App);
