import React, { Component } from "react";
import { Text, AppRegistry, Button, TextInput, View } from 'react-native'


export function getNavigationBase(center='BetterWe') {

  let navigationObject = {
    title: center,
    headerStyle: { backgroundColor: '#70e74e' },
    headerTitleStyle: { color: 'white' },
    headerBackImage: "../assets/logoWhite.png"
  }
  // if (left) {
  //   navigationObject['headerLeft'] = (
  //     <Button
  //       onPress={navProp.navigate('Login')}
  //       title={left}
  //       color="#fff"
  //    />
  //   )
  // }

  return navigationObject;
}
