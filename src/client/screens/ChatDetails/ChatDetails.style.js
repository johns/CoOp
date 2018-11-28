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
  confirmButton: {
    fontSize: 20,
    color: colors.white,
    backgroundColor: colors.taskOrange,
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 30,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sidePanel: {
    color: colors.darkGray,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: colors.lightGray,
    borderWidth: 1,
  },
  detailBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  },
  groupHeader: {
    fontSize: 20,
    color: colors.darkGray
  },
  groupPicture: {
    width: 150,
    height: 150,
    marginBottom: 10,

  }
});
