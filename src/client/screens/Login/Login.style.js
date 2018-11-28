import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  containter: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  usernameInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    margin: 30
  },
  passwordInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    margin: 30
  },
  loginButton: {
    fontSize: 20,
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
  loginLink: {
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
  },
  headingCentral: {
      marginTop: 60,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 32
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
     flex: 1,
   },
});
