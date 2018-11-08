import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection:'row',
    display: 'flex',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#70e74e',
  },
  button: {
    justifyContent: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  // btn-right: {
  //
  // },
  // btn-left: {
  // },
  // btn-center: {
  //
  // },

  icon: {

  },
  logo: {
    justifyContent: 'center'
  }
});
