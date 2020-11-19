import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserThunk } from '../reducers/authSlice';
// import { useIsFocused } from '@react-navigation/native';
// import EntryScreen from '../screens/EntryScreen';

const Spinner = () => {
  const dispatch = useDispatch();
  // const isFocused = useIsFocused();
  dispatch(setUserThunk());
  // setTimeout(() => {
  //   if (isFocused) {
  //     return <EntryScreen />;
  //   }
  // }, 10000);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Spinner;
