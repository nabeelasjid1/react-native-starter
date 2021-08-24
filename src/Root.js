import React from "react";
import { View } from "react-native";
import AppNavigation from "./Navigation/AppNavigation";
console.disableYellowBox = true;
import * as PushNotification from "./Services/PushNotificationService";
import * as NavigationServices from "./Services/NavigationServices";
import { store } from "./store";
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

// const mapStateToProps = ({ global }) => {
//   return {
//     global: global,
//   };
// };

// export default connect(mapStateToProps, null)(Root);
export default connect(mapStateToProps, null)(Root);
