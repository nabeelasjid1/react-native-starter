import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/Root';
import { Provider } from "react-redux";
import {store , persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react'
navigator.geolocation = require('@react-native-community/geolocation');
export default function App() {
  return (
    <Provider store={store}>
       <PersistGate  persistor={persistor}>
      <Root />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
