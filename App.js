import React, {Component} from "react";
import { AppRegistry } from "react-native";
import Setup from "./src/client/config/setup";
import {
    Text, Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';
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
          <Icon
            name="add"
            size={30}
            color="#70e74e"
            onPress={() => navigation.navigate('CreateChat')}
          /> ),
          headerLeft: (
            <Icon
              name="settings"
              size={30}
              color="#70e74e"
              onPress={() => navigation.navigate('Login')}
            /> )
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
      navigationOptions: ({navigation}) => ({
        title: 'Create An Account',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrow-back"
            size={30}
            color="#70e74e"
            onPress={() => navigation.navigate('Login')}
          /> )
      }),
    },
    CreateChat: {
      screen: CreateChat,
      navigationOptions: ({navigation}) => ({
        title: 'Create New Chat',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrow-back"
            size={30}
            color="#70e74e"
            onPress={() => navigation.navigate('Home')}
          /> )
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
    initialRouteName: "Login",
  }
)



const AppContainer = createAppContainer(RootStack);

export default AppContainer;


AppRegistry.registerComponent("BetterWe", () => App);
