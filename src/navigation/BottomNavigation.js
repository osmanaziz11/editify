/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EditorScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';
import {Header, Tabs} from '../components';

const Stack = createBottomTabNavigator();

const STACK_CONFIG = {
  headerShown: true,
};

const BottomNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={STACK_CONFIG}
      tabBar={props => <Tabs {...props} />}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Editor"
        component={EditorScreen}
        options={{
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomNavigation;
