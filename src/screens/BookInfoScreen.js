import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import BookContext from '../context/BookContext';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';

const BookInfoScreen = () => {
  const { myBooks, books, addMyBooks } = useContext(BookContext);
  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => navigation.setOptions({ title: book.title }), []);

  const isMatch = book => book.title === params.title;
  const book = books.find(isMatch);
  
  return (
    <View>
      <Text>{JSON.stringify(book, null, 2)}</Text>
      <Button title="add to my books" onPress={() => addMyBooks(book)} />
    </View>
  )
};

export default BookInfoScreen;