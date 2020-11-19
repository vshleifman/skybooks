import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookInfoScreen from './BookInfoScreen';
import BookList from '../components/BookList';
import { BooksTabNavParams } from './AllBooksTab';

const Stack = createStackNavigator<BooksTabNavParams>();

const MyBooksTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyBooks"
        component={BookList}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Book" component={BookInfoScreen} />
    </Stack.Navigator>
  );
};

export default MyBooksTab;
