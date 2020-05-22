import React, { useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native';

import BookItem from './BookItem';
// import { Context as BookContext } from '../context/BookContext';
// import { Context as AuthContext } from '../context/AuthContext';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Book } from '../types';


const BookList = () => {
  // const { state: bookState, getBooks } = useContext(BookContext);
  // const { state: authState, getUser} = useContext(AuthContext);
  const navigation = useNavigation();
  const { params } = useRoute();
  const book: Book = {
    title: "2920, vol 10 - Frostfall",
    author: "Carlovac Townway",
    type: "Skill Book",
    skill: "Conjuration",
    location: "Sacrificial Altar"
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getUser();
      // getBooks();
    });
    return unsubscribe;    
  }, [navigation])
  

  // const myBooks = authState.user?.books?.map(id => 
    // bookState.books.find(myBook => myBook._id === id))

  return (
    <>
      <View>
        <BookItem book={book}/>
        {/* <FlatList 
          data={params.tab === 'all' ? bookState.books: myBooks}
          renderItem={({ item }) => <BookItem book={item} />}
          keyExtractor={item => item?._id}
        /> */}
      </View>
    </>
  )
};

export default BookList;