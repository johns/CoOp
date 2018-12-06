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
     height: 30,
     borderRadius: 2,
   },

   sliderBox: {
     marginTop: 50,
     marginLeft: 30,
     marginRight: 30,
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
