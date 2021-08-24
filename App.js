import React from 'react';
import Root from './src/Root';
import { Provider } from "react-redux";
import {store , persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react'
navigator.geolocation = require('@react-native-community/geolocation');
const App = () => {
  return (
    <Provider store={store}>
       <PersistGate  persistor={persistor}>
      <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;