import React from 'react'
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import BookInfoScreen from './BookInfoScreen';
import BookList from './BookList';

const Stack = createStackNavigator();

const MyBooksTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyBooks" component={BookList} initialParams={{ where: 'my' }} options={{ headerShown: false }}/>
      <Stack.Screen name="Book" component={BookInfoScreen}/>
    </Stack.Navigator>
  )
};

export default MyBooksTab;