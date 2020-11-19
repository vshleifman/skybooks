import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { setToken, setUserThunk } from '../reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../selectors/selectors';
import { User } from '../types';

const AccountScreen = () => {
  const dispatch = useDispatch();
  const user: null | User = useSelector(userSelector);

  useEffect(() => {
    dispatch(setUserThunk());
  }, [dispatch]);

  return (
    <View style={styles.main}>
      <View style={styles.button}>
        <Text>{JSON.stringify(user!, null, 2)}</Text>
        <Text>You've read {user!.books.length} books out of 820</Text>
        <Button title="Log out" onPress={() => dispatch(setToken(null))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  button: {
    justifyContent: 'center',
    margin: 15,
    paddingTop: 20,
  },
});

export default AccountScreen;
