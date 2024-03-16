import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationService} from '../utils';
import AllExpenses from '../Screens/AllExpenses';
import RecentExpenses from '../Screens/RecentExpenses';
import {Colors} from '../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ManageExpenses from '../Screens/ManageExpenses';
import AddIcon from '../utils/AddIcon';

const bottomStack = createBottomTabNavigator();

export const BottomNaviation = () => {
  return (
    <bottomStack.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={{
        headerStyle: {backgroundColor: Colors.Primary},
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: Colors.Primary,
        //   marginHorizontal: 10,
        //   marginVertical: 10,
        //   borderRadius: 50,
          paddingVertical: 10,
        paddingBottom:10,
        height:65
        },
        tabBarActiveTintColor: '#fff',
        headerRight: ({tintColor}) => {
          return (
            <AddIcon
              name="pluscircleo"
              size={25}
              color={tintColor}
              onPress={()=>{NavigationService.navigate(NavigationService.ScreenNames.ManageExpenses)}}
            />
          );
        },
      }}>
      <bottomStack.Screen
        name={NavigationService.ScreenNames.RecentExpenses}
        component={RecentExpenses}
        options={{
            // tabBarStyle: {  },
          title: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Entypo name="back-in-time" size={25} color={'#fff'} />
          ),
        }}
      />
      <bottomStack.Screen
        name={NavigationService.ScreenNames.AllExpenses}
        component={AllExpenses}
        options={{
          title: 'All Expense',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="retweet" size={25} color={'#fff'} />
          ),
        }}
      />
    </bottomStack.Navigator>
  );
};
