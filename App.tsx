import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryFlow from './src/screens/EntryFlow';
import MainFlow from './src/screens/MainFlow';
// import { AuthProvider } from './src/context/AuthContext';
import { Provider as BookProvider } from './src/context/BookContext';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext'
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';


const Stack = createStackNavigator();

const App = () => {
  const { state, autoSignin } = useContext(AuthContext);
  const [isTokenInit, setIsTokenInit] = useState(false);

  useEffect(() => {
    autoSignin().then(() => setIsTokenInit(true));
  }, [])

  if (!isTokenInit) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
            <Stack.Screen name="Entry" component={EntryFlow} options={{ headerShown: false }}/>
        ) : (
            <Stack.Screen name="Main" component={MainFlow} options={{ headerShown: false }}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default () => {
  return (
    <AuthProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </AuthProvider>
  )
};