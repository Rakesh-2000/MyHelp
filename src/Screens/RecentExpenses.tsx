import {View, Text} from 'react-native';
import React from 'react';
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useContext} from 'react'
import { ExpenseContext } from '../Store/Store';
import { getDatebyDays } from '../utils/Date';

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);

  const recentExpense = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const lastDate = getDatebyDays(today, 30);
  })
  return (
    <>
      <ExpenseOutput expensePeriod="Last 30 days" expense={undefined} /> 
    </>
  );
};

export default RecentExpenses;
