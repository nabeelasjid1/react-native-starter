import { createStackNavigator } from "react-navigation-stack";
import ContactUs from "../Containers/ContactUs";

export const ContactNavigator = createStackNavigator(
  {
    ContactUs: { screen: ContactUs },
  },
  {
    defaultNavigationOptions: {
      //add your customizations here
    },
    headerMode: "none",
  }
);
