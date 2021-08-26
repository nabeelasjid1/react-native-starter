import React from "react";
import Root from "./src/Root";
import Store from "./src/redux/store";
import { Provider } from "react-redux";
navigator.geolocation = require("@react-native-community/geolocation");
const App = () => {
  return (
    <Provider store={Store}>
        <Root />
    </Provider>
  );
};

export default App;
