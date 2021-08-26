import React from "react";
import { View } from "react-native";
import AppNavigation from "./Navigation/AppNavigation";
console.disableYellowBox = true;
import * as PushNotification from "./Services/PushNotificationService";
import * as NavigationServices from "./Services/NavigationServices";
const Root = (props) => {
  const componentDidMount = () => {
    // PushNotification.init()
    // NavigationServices.setNavigator(navigator)
    // const data = store.getState().auth;
    // //console.log("root",data )
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <AppNavigation
          ref={(nav) => {
            navigator = nav;
          }}
        />
      </View>
    </>
  );
};

export default Root;
