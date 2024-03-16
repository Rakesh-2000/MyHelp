import {View, Text} from 'react-native';
import React from 'react';
import {MainNavigation} from './Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationService} from '../utils';
import {BottomNaviation} from './BottomNavigation';
import ExpenseContextProvider from '../Store/Store';

const Main = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <ExpenseContextProvider>
        <MainNavigation />
      </ExpenseContextProvider>
    </NavigationContainer>
  );
};

export default Main;
