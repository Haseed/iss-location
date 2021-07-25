import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Meteor from './screens/meteor';
import IssLocation from './screens/issLocation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" 
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IssLocation" component={IssLocation} />
      <Stack.Screen name="Meteor" component={Meteor} />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}

