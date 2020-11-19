import React, { useEffect } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { BookScreenRouteProp } from '../screens/AllBooksTab';
import BookItem from './BookItem';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { booksSelector, userSelector } from '../selectors/selectors';
import { setBooksThunk } from '../reducers/bookSlice';
import { Book } from '../types';

const BookList = () => {
  useEffect(() => {
    dispatch(setBooksThunk());
  }, [])

  const dispatch = useDispatch();
  const { name } = useRoute<BookScreenRouteProp>();

  const { books } = useSelector(booksSelector);
  const user = useSelector(userSelector)!;
  
  const allBooksArr = Object.values(books);

  const myBooksArr = user.books.map((id: string) =>
    allBooksArr.find((myBook: Book) => myBook._id === id),
  );
  

  return (
    <View style={styles.main}>
      <View style={styles.list}>
        <FlatList
          data={name === 'AllBooks' ? allBooksArr : myBooksArr}
          renderItem={({ item }) => <BookItem book={item} />}
          keyExtractor={item => item?._id}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bar: {
    borderColor: '#000',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row'
  },
  list: {
    flex: 9
  },
});

export default BookList;
