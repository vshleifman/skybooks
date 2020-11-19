import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const MainFlow = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainFlow;
