import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create ({
   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     flex: 1,
   },
   newTaskButton: {
     fontSize: 20,
     textAlign: 'center',
     paddingTop: 10,
     paddingBottom: 10,
     height: 50,
     width: 150,
   },
   addTask: {
     color: colors.white,
     backgroundColor: colors.taskOrange,
   },
   manageTask: {
     color: colors.taskOrange,
     borderColor: colors.taskOrange,
     borderWidth: 1,
   },
   buttonHolder : {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 20,
     marginLeft: 20,
     marginRight: 20,
     marginBottom: 20,
   },
   separator: {
     borderBottomWidth: 1,
     borderBottomColor: colors.lightGray,
     marginTop: 50,
   },
});
