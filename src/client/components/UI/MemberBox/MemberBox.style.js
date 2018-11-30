import { StyleSheet } from 'react-native';
import colors from '../../../lib/colors';

export default StyleSheet.create({
  memberOutside: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' ,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  memberName: {
    width: 300,
    height: 30,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20

  },
  profilePic: {
    marginRight: 20,
    width: 100,
    height: 100,
  },
  memberMiddle: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 50,
  },
});
