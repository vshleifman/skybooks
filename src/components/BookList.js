import React, { useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native';

import BookItem from './BookItem';
import { Context as BookContext } from '../context/BookContext';
import { Context as AuthContext } from '../context/AuthContext';
import { useRoute, useNavigation } from '@react-navigation/native';


const BookList = () => {
  const { state: bookState, getBooks } = useContext(BookContext);
  const { state: authState, getUser} = useContext(AuthContext)

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUser();
      getBooks();
    });
    return unsubscribe;    
  }, [navigation])
  
  const { params } = useRoute();

  const myBooks = authState.user?.books?.map(id => 
    bookState.books.find(myBook => myBook._id === id))

  return (
    <>
      <View>
        <FlatList 
          data={params.tab === 'all' ? bookState.books: myBooks}
          renderItem={({ item }) => <BookItem book={item} />}
          keyExtractor={item => item?._id}
        />
      </View>
    </>
  )
};

export default BookList;