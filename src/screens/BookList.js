import React, { useContext } from 'react'
import { View, FlatList } from 'react-native';

import BookItem from '../components/BookItem';
import BookContext from '../context/BookContext';
import { useRoute } from '@react-navigation/native';

const BookList = () => {
  const { myBooks, books } = useContext(BookContext);

  const { params } = useRoute();

  const isMatch = book => book.read === true
  const readBooks = books.filter(isMatch)
  console.log(params.tab);

  return (
    <>
      <View>
        <FlatList 
          data={params.tab === 'all' ? books: myBooks}
          renderItem={({ item }) => <BookItem title={item.title} />}
          keyExtractor={item => item.title}
        />
      </View>
    </>
  )
};

export default BookList;