import { StyleSheet } from 'react-native';
import colors from '../../../lib/colors';

export default StyleSheet.create({
  taskOutside: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  taskName: {
    width: 270,
    height: 30,
    fontWeight: 'bold',
    fontSize: 20,
  },
  user: {
    width: 100,
    marginLeft: 20,
    color: colors.darkGray,
    paddingBottom: 20,
  },
  taskProgress: {
    height: 30,
    width: 84,
    textAlign: 'right',
    paddingRight: 20,
  },
  taskCol: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    height: 100,
  },
  taskMiddle: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 50,
  },
});
