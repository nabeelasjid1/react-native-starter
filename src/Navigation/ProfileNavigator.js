import { createStackNavigator } from "react-navigation-stack";
import ProfileScreen from "../Containers/Profile";

export const ProfileNavigator = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //add your customizations here
    },
    headerMode: "none",
  }
);
