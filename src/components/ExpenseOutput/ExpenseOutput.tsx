import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'



const ExpenseOutput = ({expense, expensePeriod}) => {
  return (
    <View>
         <ExpensesSummary  expense={expense} periodName={expensePeriod}/>
        <ExpensesList expense={expense} />    
    </View>
  )
}

export default ExpenseOutput