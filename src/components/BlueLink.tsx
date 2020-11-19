import React, { Dispatch, SetStateAction } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { changeError } from '../reducers/authSlice';

interface BlueLinkProps {
  style: StyleProp<ViewStyle>;
  entryType: {
    signin: boolean;
    header: string;
  };
  setEntryType: Dispatch<SetStateAction<{ signin: boolean; header: string }>>;
}

const BlueLink = ({ style, entryType, setEntryType }: BlueLinkProps) => {
  const dispatch = useDispatch();

  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => {
          if (entryType.signin) {
            setEntryType({ signin: false, header: 'Sign up' });
            dispatch(changeError(null));
          } else {
            setEntryType({ signin: true, header: 'Sign in' });
            dispatch(changeError(null));
          }
        }}>
        {entryType.signin ? (
          <Text style={styles.link}>Don't have an account? Sign up!</Text>
        ) : (
          <Text style={styles.link}>Already have an account? Sign in!</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 15,
    color: 'blue',
  },
});

export default BlueLink;
