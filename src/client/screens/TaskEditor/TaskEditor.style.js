import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sliderBox: {
    marginLeft: 30,
    marginRight: 30,
  },
  trackRow: {
    marginTop: 40,
    marginBottom: 50,
    flex: 1,
    flexDirection: 'row',
  },
  askText: {
    marginLeft: 20,
    marginRight: 20,
    color: colors.darkGray,
    fontSize: 22,
    width: 300,
    height: 40,
    textAlign: 'center',
  },
  slider: {
    height: 30,
    borderRadius: 2,
  },
   goButton: {
     marginTop: 250,
     marginBottom: 20,
     height: 40,
     marginLeft: 22,
     marginRight: 22,
     backgroundColor: colors.taskOrange,
   },
});
