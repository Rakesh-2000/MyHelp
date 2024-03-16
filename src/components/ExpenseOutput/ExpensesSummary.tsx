import {View, Text} from 'react-native';
import React from 'react';
import { Styles } from './Style';

const ExpensesSummary = ({expense, periodName}) => {
  const expenseSum = expense.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{periodName}</Text>
      <Text style={Styles.amount}>{expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
