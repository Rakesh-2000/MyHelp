import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationService } from '../utils';
import AllExpenses from '../Screens/AllExpenses';
import RecentExpenses from '../Screens/RecentExpenses';
import ManageExpenses from '../Screens/ManageExpenses';
import { BottomNaviation } from './BottomNavigation';
import { Colors } from '../utils/Colors';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{
    // headerShown : false
    headerStyle:{backgroundColor:Colors.Primary},
    headerTintColor:"#fff"
   }}> 
    <Stack.Screen name={NavigationService.ScreenNames.BottomNaviation}
    component={BottomNaviation} options={{headerShown:false}}/>
    <Stack.Screen name={NavigationService.ScreenNames.ManageExpenses}
    component={ManageExpenses} options={{presentation:"modal"}}/>
   </Stack.Navigator> 
  )
};

     