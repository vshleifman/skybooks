import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';

const Drawer = createDrawerNavigator();

const MainFlow = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Account" component={AccountScreen}/>
    </Drawer.Navigator>
  )
};

export default MainFlow;