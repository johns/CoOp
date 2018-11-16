import React, { Component } from "react";
import {
    Text,
} from 'react-native'

import { colors } from "../lib/colors";
import CreateAccount from "../screens/CreateAccount/CreateAccount";

export default class Setup extends Component {
  render() {
    return (

      <CreateAccount />
    );
  }
}
