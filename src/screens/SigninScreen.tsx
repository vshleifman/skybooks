import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import AuthInput from '../components/AuthInput';

const SigninScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Sign in</Text>
      <AuthInput style={styles.form} value='in'/>
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
    flex: 10,
  }
});

export default SigninScreen;