import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import AuthInput from '../components/AuthInput';

const SignupScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Sign up</Text>
      <AuthInput style={styles.form} value="up"/>
    </View>
  )
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
    flex: 1
  }
});

export default SignupScreen;