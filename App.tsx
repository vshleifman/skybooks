import 'react-native-gesture-handler';
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import store from './store';

import EntryScreen from './src/screens/EntryScreen';
import MainFlow from './src/screens/MainFlow';
import Spinner from './src/components/Spinner';
import { tokenSelector, userSelector } from './src/selectors/selectors';

const App = () => {
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);

  if (token === undefined || (token && !user)) {
    return <Spinner />;
  }

  if (token === null) {
    return <EntryScreen />;
  }

  return <MainFlow />;
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
