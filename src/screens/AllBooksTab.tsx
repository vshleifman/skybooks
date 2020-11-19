import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import BookInfoScreen from './BookInfoScreen';
import BookList from '../components/BookList';
import { Book } from '../types';
import { RouteProp } from '@react-navigation/native';

export type BooksTabNavParams = {
  AllBooks: { parentTab: 'all' | 'my' };
  MyBooks: { parentTab: 'all' | 'my' };
  Book: { book: Book };
};

export type BookScreenRouteProp = RouteProp<BooksTabNavParams, 'Book'>;

export type BookScreenNavigationProp = StackNavigationProp<
  BooksTabNavParams,
  'Book'
>;

const Stack = createStackNavigator<BooksTabNavParams>();

const AllBooksTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllBooks"
        component={BookList}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Book" component={BookInfoScreen} />
    </Stack.Navigator>
  );
};

export default AllBooksTab;
