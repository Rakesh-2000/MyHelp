import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {NavigationService} from '../utils';
import AddIcon from '../utils/AddIcon';
import {Colors} from '../utils/Colors';
import { TouchableOpacity } from 'react-native';
import Button from '../utils/Button';

const ManageExpenses = ({route, navigation}) => {
  const EditedExpenseId = route.params?.expenseId;
  const IsEditing = !!EditedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: IsEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, IsEditing]);

  const DeleteHandler = () => { NavigationService.goBack() };
  const EditHandler = () => { NavigationService.goBack() };
  const SaveHandler = () => { NavigationService.goBack() };

  return (
    <View style={{flex: 1, backgroundColor: Colors.Secondary, padding: 10}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Button onPress={SaveHandler}>Save</Button>
            <Button onPress={EditHandler}>{IsEditing ? 'Update' : 'Add'}</Button>
        </View>
        <View style={{height:1, backgroundColor:"#000", marginVertical:10, marginHorizontal:50, borderRadius:100}}></View>
      {IsEditing && (
        <TouchableOpacity style={{alignSelf:"center", backgroundColor:"#fff", paddingHorizontal:20,paddingVertical:10, borderRadius:100, elevation:5,}} onPress={DeleteHandler}>
          <View><Text style={{color:"red", fontWeight:'600', fontSize:18}}>Delete</Text></View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ManageExpenses;
