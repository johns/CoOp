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
  userInput: {
    marginBottom: 30,
    marginLeft: 40,
    paddingLeft: 10,
    height: 40,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginRight: 40,
   },
   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     flex: 1,
   },
   createAccountLink: {
     fontSize: 20,
     borderColor: colors.primaryBlue,
     borderWidth: 1,
     color: colors.primaryBlue,
     backgroundColor: colors.white,
     textAlign: 'center',
     marginBottom: 20,
     marginLeft: 40,
     marginRight: 40,
     paddingTop: 10,
     paddingBottom: 10,
   },

   memberButton: {
     paddingLeft: 20,
     paddingRight: 20,
     paddingTop: 100,
   },

});
