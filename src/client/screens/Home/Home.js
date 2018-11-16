import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    KeyboardAvoidingView,
} from 'react-native';
import { StyleSheet } from "react-native";
import CustomHeader from '../../components/UI/Header/Header';



const styles = StyleSheet.create ({
  buttonBox: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     flex: 1,
   },

   groupButton: {
     paddingLeft: 20,
     paddingRight: 20,
     paddingTop: 100,
   },

});


export default class Home extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <CustomHeader leftIcon="settings" logo={true} rightIcon="add"  />

        <View style={styles.buttonBox}>
          <View style={styles.goButton}>
            <Button
              title="Sign Out"
              color="#3e3f3c"
              accessibilityLabel="Sign Out"
            />
          </View>
          <View style={styles.goButton}>
            <Button
              title="Create Chat"
              color="#70e74e"
              accessibilityLabel="Create Chat"
            />
          </View>
        </View>

        <View style={styles.buttonBox}>
          <View style={styles.groupButton}>
              <Button
                title="Group 1"
                color="#94ad9a"
                accessibilityLabel="Group 1"
              />
          </View>
        </View>

        <View style={styles.buttonBox}>
          <View style={styles.groupButton}>
              <Button
                title="Group 2"
                color="#94ad9a"
                accessibilityLabel="Group 2"
              />
          </View>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
