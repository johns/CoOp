import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  userInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    paddingLeft: 10,
    height: 40,
    borderColor: colors.darkGray,
    borderWidth: 1,
    marginRight: 40,
   },

  buttonBox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     backgroundColor: colors.primaryGreen,
   },
});
