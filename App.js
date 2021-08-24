import React from "react";
import Root from "./src/Root";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
navigator.geolocation = require("@react-native-community/geolocation");
let persistor = persistStore(Store);
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
