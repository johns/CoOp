import { StyleSheet } from 'react-native';
import colors from '../../../lib/colors';

export default StyleSheet.create({
  buttonBox: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  groupButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100,
  },
  groupHeader: {
    paddingTop: 20,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  groupName: {
    width: 250,
    height: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  groupMessageTime: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex:1,
    height: 20,
    color: colors.lightGray,
    textAlign: 'right',
  },
  groupMiddle: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  notification: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
});
