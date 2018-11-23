import React, { Component } from "react";
import { Text, AppRegistry, TextInput, View, Button, Image } from 'react-native'
import { Header } from 'react-native-elements'
import styles from './CreateChat.style.js';
import CustomHeader from "../../components/UI/Header/Header";

export default class CreateChat extends Component {

  constructor(props) {
    super(props);
    this.state = { groupNameText: '', activityTypeText: '' };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <CustomHeader text = 'Create Chat' leftIcon = 'keyboard-arrow-left' />

        <View>
          <Text style = {styles.inputTitle}> Group Name </Text>

          <TextInput
            style={styles.userInput}
            onChangeText={(groupNameText) => this.setState({groupNameText})}
            value= {this.state.groupNameText}
          />
        </View>

        <View>
          <Text style = {styles.inputTitle}> Activity Type </Text>

          <TextInput
            style={styles.userInput}
            onChangeText={(activityTypeText) => this.setState({activityTypeText})}
            value= {this.state.activityTypeText}
          />
        </View>

        <View style = {styles.uploadImageContainer}>
          <Button
            color="#3e3f3c"
            style={styles.uploadImageButton}
            onPress={() => alert('Select an image form storage.')}
            title="uploadImage"
            accessibilityLabel="This is an upload image button"
          />

          <Image
            style={styles.uploadedImage}
            source={{uri: 'https://cdn.bulbagarden.net/upload/-6/60/258Mudkip.png'}}
          />
        </View>
      </View>
    );
  }
}
