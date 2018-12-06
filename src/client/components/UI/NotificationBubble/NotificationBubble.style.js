import { StyleSheet } from "react-native";
import colors from '../../../lib/colors';

export default StyleSheet.create({
  bubble: {
    backgroundColor: colors.taskOrange,
    alignItems: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    marginTop: 2,
    marginBottom: 5,
  },
  chatText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  }
});
