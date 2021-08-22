import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Containers/Home";
import { ProfileNavigator } from "./ProfileNavigator";
import { ContactNavigator } from "./ContactNavigator";

export const MainHomeNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ContactUs: { screen: ContactNavigator },
    Profile: { screen: ProfileNavigator },
  },
  {
    defaultNavigationOptions: {
      //add your customizations here
    },
    headerMode: "none",
  }
);
