import React from "react";
import { AppRegistry } from "react-native";
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign/';
import Home from "./src/client/screens/Home/Home";
import Login from "./src/client/screens/Login/Login";
import CreateAccount from "./src/client/screens/CreateAccount/CreateAccount";
import AccountSettings from "./src/client/screens/AccountSettings/AccountSettings";
import CreateChat from "./src/client/screens/CreateChat/CreateChat";
import ChatDetails from "./src/client/screens/ChatDetails/ChatDetails";
import MemberList from "./src/client/screens/MemberList/MemberList";
import ChatRoom from "./src/client/screens/ChatRoom/ChatRoom";
import CreateTask from "./src/client/screens/CreateTask/CreateTask"
import InviteUsers from "./src/client/screens/InviteUsers/InviteUsers"
import TaskManager from "./src/client/screens/TaskManager/TaskManager"
import TaskEditor from "./src/client/screens/TaskEditor/TaskEditor"
import colors from './src/client/lib/colors/';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'co-op',
        headerTitle: (
            <Image
              style={{width: 60, height: 30}}
              source={require('./src/client/assets/logoSm.png')}
            />
        ),
        headerVisible: true,
        headerRight: (
          <Icon
            name="plus"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('CreateChat')}
          /> ),
          headerLeft: (
            <Icon
              name="user"
              size={30}
              color={colors.primaryBlue}
              style={{marginLeft: 10, marginRight: 10}}
              onPress={() => navigation.navigate('AccountSettings')}
            /> )
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
    CreateAccount: {
      screen: CreateAccount,
      navigationOptions: ({navigation}) => ({
        title: 'Create An Account',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
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
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('Home')}
          /> )
      }),
    },
    CreateTask: {
      screen: CreateTask,
      navigationOptions: ({navigation}) => ({
        title: 'Create New Task',
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.goBack()}
          />  )
      })
    },
    ChatRoom: {
      screen: ChatRoom,
      navigationOptions: ({navigation}) => ({
        title:navigation.getParam('chatRoom', {title: 'New Room'}).title,
        headerVisible: true,
        headerLeft: (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('Home')}
          /> ),
        headerRight: (
          <Icon
            name="infocirlceo"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.navigate('ChatDetails', {room: navigation.getParam('chatRoom', {roomID:'0'})})}
          /> )
      }),
    },
    MemberList: {
      screen: MemberList,
      navigationOptions: ({navigation}) => ({
        title: 'Members',
        headerVisible: true,
      }),
    },
    AccountSettings: {
      screen: AccountSettings,
      navigationOptions: ({navigation}) => ({
        title: 'Account Settings',
        headerVisible: true,
        headerLeft: null,
        headerRight: (
          <Icon
            name="arrowright"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.goBack()}
          /> )
      }),
    },
    ChatDetails: {
      screen: ChatDetails,
      navigationOptions: ({navigation}) => ({
        title: 'Details',
        headerVisible: true,
        headerLeft:  (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={() => navigation.goBack()}
          /> )
      }),
    },
    TaskManager: {
      screen: TaskManager,
      navigationOptions: () => ({
        title: 'Tasks',
      }),
    },
    TaskEditor: {
      screen: TaskEditor,
      navigationOptions: ({navigation}) => ({
        title: 'Tasks',
        headerVisible: true,
        headerLeft:  (
          <Icon
            name="arrowleft"
            size={30}
            color={colors.primaryBlue}
            style={{marginLeft: 10, marginRight: 10}}
            onPress={(n) => navigation.goBack()}
          /> )
      }),
    },
    InviteUsers: {
      screen: InviteUsers,
      navigationOptions: () => ({
        title: 'Invite',
      }),
    },
  },
  {
    initialRouteName: "Login", /////////////change that back
  }
)



const AppContainer = createAppContainer(RootStack);

export default AppContainer;


AppRegistry.registerComponent("BetterWe", () => App);
