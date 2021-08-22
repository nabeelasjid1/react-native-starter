import { createStackNavigator } from "react-navigation-stack";
import EditProfileScreen from "../Containers/Profile/EditProfile";

export const ProfileNavigator = createStackNavigator(
  {
    Profile: { screen: EditProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //add your customizations here
    },
    headerMode: "none",
  }
);
