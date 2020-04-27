import React, { useState, useContext } from 'react'
import { TextInput, Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import AuthContext from '../context/AuthContext';

const AuthInput = ({ navigation, route, value}) => {
  const { switchSign } = useContext(AuthContext);
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={styles.main}>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        />
        <TextInput 
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
        />
        <Button 
          title="Enter" 
          onPress={() => {
              if (password === route.params.password) {
                switchSign(true)
              } else {
                navigation.navigate('Entry', {value: 'Wrong'})
              }
            }
          }
        />
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => {
          value === 'up' ? navigation.navigate('Signin') : navigation.navigate('Signup')
        }}>
          {
            value === 'in' 
            ? <Text style={styles.link}>Don't have an account? Sign up!</Text> 
            : <Text style={styles.link}>Already have an account? Sign in!</Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
    form: {
    flex: 10,
    justifyContent: 'center',
    padding: 40
  },
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    margin: 5 
  },
  linkContainer: {
    flex: 2,
    padding: 15
  },
  link: {
    fontSize: 15,
    color: 'blue'
  }
})

export default AuthInput;