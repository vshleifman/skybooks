import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';

const BookItem = ({ book }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('Book', {book}) }
      >
        <Text style={styles.text}>{book?.title}</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    height: 60,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  text: {
    fontSize: 25,
  }
});

export default BookItem;