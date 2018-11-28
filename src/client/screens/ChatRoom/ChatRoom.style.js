import { StyleSheet } from "react-native";
import colors from '../../lib/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.smokeWhite,
    flex: 1,
  },
  chatArea: {
    marginLeft: 7,
    marginRight: 7,
    flex: 1,
    flexDirection: 'column'
  },
  chatBar: {
     justifyContent: 'space-between',
     height: 60,
     flexDirection: 'row',
     borderTopWidth: 1,
     borderTopColor: colors.darkGray,
     flex: 1,
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: '#eeeeee',
   },
   goalsIcon: {
     height: 60,
     paddingLeft: 7,

     justifyContent: 'flex-end',
     justifyContent: 'center',
   },
   userInput: {
     justifyContent: 'center',
     borderBottomWidth: 1,
     borderBottomColor: colors.black,
     flex: 1,
     marginLeft: 7,
     marginRight: 7,
     marginBottom: 3,
    },
   sendIcon: {
     height: 60,
     paddingRight:7,
     justifyContent: 'flex-end',
     justifyContent: 'center',
   },
   icons: {
     height: 30,
     width: 30,

   },
});
