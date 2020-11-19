import React, { useState } from 'react';
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { signinThunk, signupThunk } from '../reducers/authSlice';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';

interface Props {
  style: StyleProp<ViewStyle>;
  signin: boolean;
}

const AuthInput = ({ style, signin }: Props) => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={style}>
      <View style={styles.form}>
        {store.auth.errorMessage ? (
          <Text style={styles.error}>{store.auth.errorMessage}</Text>
        ) : null}
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
            signin
              ? dispatch(signinThunk(email, password))
              : dispatch(signupThunk(email, password));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  form: {
    flex: 10,
    justifyContent: 'center',
    padding: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
  error: {
    color: 'red',
    alignItems: 'center',
    margin: 5,
  },
});

export default AuthInput;
