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

   goButton: {
     marginTop: 250,
     marginBottom: 20,
     height: 40,
     marginLeft: 22,
     marginRight: 22,
     backgroundColor: colors.taskOrange,
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
