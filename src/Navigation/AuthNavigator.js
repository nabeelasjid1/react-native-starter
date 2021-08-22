import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Containers/auth/SignIn";
import SignUp from "../Containers/auth/SignUp";
import Verification from "../Containers/auth/Verification";
import ForgotPassword from "../Containers/auth/ForgotPassword";
import ForgotVerification from '../Containers/auth/ForgotVerification'
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
  