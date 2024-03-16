import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from '../../utils/Colors';
import { FormatDate } from '../../utils/Date';
import { NavigationService } from '../../utils';

const ExpenseItem = ({id,description, date, amount}) => {
   const HandleScreen = () => {
    NavigationService.navigate(NavigationService.ScreenNames.ManageExpenses,{
        expenseId:id
    })
   }

  return (
    <Pressable onPress={HandleScreen}>
      <View style={Styles.container}>
        <View>
          <Text style={Styles.description}>{description}</Text>
          <Text style={Styles.date}>{FormatDate(date)}</Text>
        </View>
        <View style={Styles.amountContainer}>
          <Text style={Styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent:"space-between",
    marginHorizontal:10,
    marginVertical:10,
    padding:10,
    borderRadius:10,
    elevation:3,
  },
  description:{
    fontWeight:"bold",
    color:Colors.Primary,
    fontSize:15
  },
  date:{
    fontSize:13,
    fontWeight:"500"
  },
  amount:{
    fontSize:20,
    fontWeight:'600',
    color:Colors.Primary
  },
  amountContainer:{
    backgroundColor:Colors.Grey,
    elevation:3,
    padding:10,
    borderRadius:10
  }
});
