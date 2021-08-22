import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Containers/SignIn";
import SignUp from "../Containers/SignUp";
import Verification from "../Containers/Verification";
import ForgotPassword from "../Containers/ForgotPassword";
import ForgotVerification from '../Containers/ForgotVerification'
export const AuthNavigator = createStackNavigator(
    {
        login: { screen: Login },
        signUp: { screen: SignUp },
        Verification: { screen: Verification },
        ForgotPassword: { screen: ForgotPassword },
        ForgotVerification: { screen: ForgotVerification },

    },
    {
      defaultNavigationOptions: {
          headerShown : false ,
          gestureEnabled: false,
          cardStack: { gesturesEnabled: false },
        },
        headerMode: 'none',
      },
  );
  