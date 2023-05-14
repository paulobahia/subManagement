import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Router } from './src/routes/router';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <StatusBar /> */}
        <Router />
      </NavigationContainer>
    </>
  );
}

