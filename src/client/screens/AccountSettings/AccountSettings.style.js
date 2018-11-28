import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  profileBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  },
  profilePic: {
    top: 20,
    position: 'absolute',
    width: 100,
    height: 100,
  },
  usernameInput: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 60,
    marginLeft: 40,
    paddingLeft: 10,
    height: 40,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginRight: 40,
   },

  passwordInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    paddingLeft: 10,
    height: 40,
    borderColor: colors.lightGray,
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

   confirmButton: {
     fontSize: 20,
     color: colors.white,
     backgroundColor: colors.primaryBlue,
     textAlign: 'center',
     marginTop: 70,
     marginBottom: 30,
     marginLeft: 40,
     marginRight: 40,
     paddingTop: 10,
     paddingBottom: 10,
   }
});
