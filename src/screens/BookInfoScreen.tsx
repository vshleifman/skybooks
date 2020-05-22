import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// import { Context as BookContext } from '../context/BookContext';
// import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Book } from '../types';
import { BookScreenRouteProp, BookScreenNavigationProp } from './AllBooksTab';

const BookInfoScreen = () => {
  // const { state: bookState } = useContext(BookContext);
  // const { state: authState, getUser, addMyBooks, deleteMyBook } = useContext(AuthContext)

  const route = useRoute<BookScreenRouteProp>();

  const book: Book = route.params.book;
  
  const navigation = useNavigation<BookScreenNavigationProp>();
  
  useEffect(() => {
    navigation.setOptions({ title: book.title });
    // getUser();
  }, []);

  const Add = () => {
  console.log(book._id);

    // const bookStatus = authState.user.books?.includes(book._id)
    return (
      <Text>Book Info Screen</Text>
      // <Button title={bookStatus.toString()} onPress={() => {
      //   bookStatus === true
        // ? deleteMyBook(book._id)
        // : addMyBooks(book._id)
      // }} />
    )
  };
  
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Title: {book.title}</Text>
      <Text style={styles.text}>Author: {book.author}</Text>
      <Text style={styles.text}>Type: {book.type}</Text>
      <Text style={styles.text}>Skill: {book.skill}</Text>
      <Text style={styles.text}>Location: {book.location}</Text>
      <Add />
      
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  text: {
    margin: 10,
    fontSize: 20
  }
});

export default BookInfoScreen;