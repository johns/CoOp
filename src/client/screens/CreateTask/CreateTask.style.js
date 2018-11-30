import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  userInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    paddingLeft: 10,
    height: 40,
    borderColor: colors.darkGray,
    borderWidth: 1,
    marginRight: 40,
   },

  buttonBox: {
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

   goButton: {
     marginTop: 20,
     marginBottom: 20,
     height: 40,
     paddingLeft: 20,
     paddingRight: 20,
     backgroundColor: colors.primaryBlue,
     color: colors.white,
   },

   slider: {
     marginTop: 20,
     marginBottom: 20,
     height: 40,
     flex: 1,
     marginLeft: 40,
     marginRight: 40,
     alignItems: "stretch",
     justifyContent: "center"
   },

   inputList: {
     marginTop: 20,
     marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
   }

});
