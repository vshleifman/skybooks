import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookItem = ({ title }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.main}>
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('Book', {title}) }
      >
        <Text style={styles.text}>{title}</Text>
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