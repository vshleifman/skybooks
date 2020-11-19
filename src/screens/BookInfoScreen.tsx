import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Book } from '../types';
import { BookScreenRouteProp, BookScreenNavigationProp } from './AllBooksTab';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../selectors/selectors';
import { deleteBookThunk, addBookThunk } from '../reducers/authSlice';

const BookInfoScreen = () => {
  const route = useRoute<BookScreenRouteProp>();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const book: Book = route.params.book;

  const navigation = useNavigation<BookScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({ title: book.title });
  }, []);

  const Add = () => {
    console.log(book._id);

    const bookStatus = user!.books.includes(book._id);
    return (
      <Button
        title={bookStatus ? 'Delete Book' : 'Add Book'}
        onPress={() => {
          bookStatus === true
            ? dispatch(deleteBookThunk(book._id))
            : dispatch(addBookThunk(book._id));
        }}
      />
    );
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
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
});

export default BookInfoScreen;
