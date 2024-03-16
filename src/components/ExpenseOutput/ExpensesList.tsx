import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Styles} from './Style';
import ExpenseItem from './ExpenseItem';

const expenseItem = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({expense}) => {
  return (
    <View style={Styles.ExpContainer}>
      <FlatList
        data={expense}
        renderItem={expenseItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ExpensesList;
