import React, { useState, useContext } from 'react'
import { TextInput, Button, View, StyleSheet, TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';

// import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

interface Props {
  style: StyleProp<ViewStyle>,
  value: 'up' | 'in',
}

const AuthInput: React.FC<Props> = ({ style, value }) => {
  const navigation = useNavigation();
  // const { state, signup, signin, clearErr } = useContext(AuthContext);
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={style}>
      <View style={styles.form}>
      {/* {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : null} */}
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
              // value === 'up' 
              // ? signup({ email, password }) 
              // : signin({ email, password })
            }
          }
        />
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => {
          if (value === 'up') {
            navigation.navigate('Signin')
            // clearErr()
          } else {
            navigation.navigate('Signup')
            // clearErr()
          }
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
  },
  error: {
    color: 'red',
    alignItems: 'center',
    margin: 5
  }
})

export default AuthInput;