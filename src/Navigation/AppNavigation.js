import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { MainDrawerNavigator } from "./MainDrawerNavigator";
import { AuthNavigator } from "./AuthNavigator";

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: MainDrawerNavigator,
  },
  {
    initialRouteName: "App",
  }
);

export default createAppContainer(MainNavigator);
