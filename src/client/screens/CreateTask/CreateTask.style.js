import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  userInput: {
    marginTop: 40,
    marginLeft: 40,
    paddingLeft: 10,
    height: 40,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginRight: 40,
  },
  trackRow: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    flexDirection: 'row',
  },
  askText: {
    marginLeft: 40,
    color: colors.darkGray,
    fontSize: 22,
    width: 220,
    height: 40,
  },
  switch: {
    width: 50,
    height: 50,
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
     marginTop: 90,
     marginBottom: 20,
     height: 40,
     marginLeft: 22,
     marginRight: 22,
     backgroundColor: colors.taskOrange,
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
     justifyContent: "center",
   },

   inputList: {
     marginTop: 20,
     marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  picker: {
    height: 50,
    width: 100,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 80,
  },

  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  checkBox: {
    flex: 1,
    padding: 10,

  }

});
