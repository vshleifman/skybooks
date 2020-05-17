import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { state, signout, getUser } = useContext(AuthContext)

  useEffect(() => {
    getUser();
  }, [])

  return (
    <View style={styles.main}>
      <View style={styles.button} >
      <Text>{JSON.stringify(state.user, null, 2)}</Text>
      <Text>You've read {state.user.books.length} books out of 820</Text>
        <Button title="Log out" onPress={() => signout()} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightblue'    
  },
  button: {
    justifyContent: 'center',
    margin: 15,
    paddingTop: 20,
  }
});

export default AccountScreen;