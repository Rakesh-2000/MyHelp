import {StyleSheet} from 'react-native';
import { Colors } from '../../utils/Colors';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius:30,
  },
  text:{
    fontSize:18,
    color:Colors.Primary,
    fontWeight:'600'
  },
  amount:{
    fontSize:18,
    color:Colors.Primary,
    fontWeight:"bold",
    backgroundColor:"#fff",
    elevation:3,
    borderRadius:30,
    paddingHorizontal:10,
    width:"auto"
  },
  ExpContainer: {
    // backgroundColor: '#fff',
    // // margin: 20,
    // // flex:1,
    // // flexDirection: 'row',
    // // justifyContent: 'space-between',
    // padding: 10,
    // borderRadius:30,
  },
});
