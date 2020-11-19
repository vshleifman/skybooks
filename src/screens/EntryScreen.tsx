import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthInput from '../components/AuthInput';
import BlueLink from '../components/BlueLink';
import { changeError } from '../reducers/authSlice';
import { useDispatch } from 'react-redux';

const EntryScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeError(null));
  }, [dispatch]);

  const [entryType, setEntryType] = useState({
    signin: false,
    header: 'Sign up',
  });

  return (
    <View style={styles.main}>
      <Text style={styles.header}>{entryType.header}</Text>
      <AuthInput style={styles.form} signin={entryType.signin} />
      <BlueLink
        style={styles.linkContainer}
        entryType={entryType}
        setEntryType={setEntryType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    height: 60,
    paddingTop: 5,
    fontSize: 35,
    borderBottomWidth: 2,
  },
  form: {
    flex: 3,
  },
  linkContainer: {
    flex: 1,
    padding: 15,
  },
});

export default EntryScreen;
