import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';



import BookInfoScreen from './BookInfoScreen';
import BookList from '../components/BookList';
import { Book } from '../types';
import { RouteProp } from '@react-navigation/native';


type AllBooksTabNavParams = {
  AllBooks: { tab: 'all' | 'my' };
  Book: { book: Book } 
};

export type BookScreenRouteProp = RouteProp<AllBooksTabNavParams, 'Book'>

export type BookScreenNavigationProp = StackNavigationProp<AllBooksTabNavParams, 'Book'>

const Stack = createStackNavigator<AllBooksTabNavParams>();

const AllBooksTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllBooks" component={BookList} initialParams={{ tab: 'all' }} options={{ headerShown: false }}/>
      <Stack.Screen name="Book" component={BookInfoScreen}/>
    </Stack.Navigator>
  )
};

export default AllBooksTab;