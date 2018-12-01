import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create ({
  buttonBox: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     flex: 1,
   },

   memberButton: {
     paddingLeft: 20,
     paddingRight: 20,
     paddingTop: 100,
   },

});
