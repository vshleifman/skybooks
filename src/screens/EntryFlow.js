import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupScreen from './SignupScreen';
import SigninScreen from './SigninScreen';

const Tab = createBottomTabNavigator();

const EntryFlow = () => {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen 
          name="Signin" 
          component={SigninScreen} 
          options={{ 
            title: "Sign in", 
            tabBarVisible: false 
          }} 
        />
        <Tab.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ 
            title: "Sign up", 
            tabBarVisible: false 
          }} 
        />
      </Tab.Navigator>
    </>
  )
};

export default EntryFlow;