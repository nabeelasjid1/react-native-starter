import { createStackNavigator } from "react-navigation-stack";
import ContactUs from "../Containers/CustomerCare/ContactUs";

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
