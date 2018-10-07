import React, {Component} from "react";
import { AppRegistry } from "react-native";
import Setup from "./src/client/config/setup";
import {
    Text,
} from 'react-native';


const TemplateProject = () => {
  return (
    <Setup />
  );
};

export default TemplateProject;

AppRegistry.registerComponent("TemplateProject", () => TemplateProject);
