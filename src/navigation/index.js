/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {BoardingScren, HomeScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const Navigation = () => {
  const config = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="boarding" component={BoardingScren} />
      <Stack.Screen name="tabs" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default Navigation;
