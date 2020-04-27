import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllBooksTab from './AllBooksTab';
import MyBooksTab from './MyBooksTab';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{ 
        labelStyle: { fontSize: 30 } 
      }}>
      <Tab.Screen name="AllBooks" component={AllBooksTab}/>
      <Tab.Screen name="MyBooks" component={MyBooksTab}/>
    </Tab.Navigator>
  )
};

export default HomeScreen;