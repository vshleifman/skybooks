import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryFlow from './src/screens/EntryFlow';
import MainFlow from './src/screens/MainFlow';
import { AuthProvider } from './src/context/AuthContext';
import { BookProvider } from './src/context/BookContext';


const Stack = createStackNavigator();

const App = () => {
  // const { isSign } = useContext(AuthContext);
  const isSign = true //!!!!
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSign === false ? (
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