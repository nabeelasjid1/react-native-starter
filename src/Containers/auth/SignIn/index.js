import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";


import { FontAwesome } from "@expo/vector-icons";

import styles from "./Styles";
import { ActivityIndicator } from "react-native-paper";
import Styles from "../../../Styles/Styles";
import Button from "../../../Components/Button";
import TextInputComponent from "../../../Components/TextInput";
import * as Constants from "../../../Constants";
import Icon from "react-native-vector-icons/Entypo";
import { Login } from "../../../redux/reducers/auth";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const SignIn = (props) => {
  const dispatch = useDispatch();
  const { token, loading } = useSelector(state=> state.auth);
  const [signInObject, setSignInObject] = useState({
    email: "",
    password: "",
  });
  const [signInErrors, setSignInErrors] = useState({});
  const handleInputChange = ({name, value}) => {
    setSignInObject({
      ...signInObject,
      [name]: value
    });
  };
  const setInputError = ({name, value}) => {
    setSignInErrors({
      [name]: value
    });
    return;
  };
  const onSubmit = () => {
    if (signInObject.email.trim() === "" || !reg.test(signInObject.email)) {
      setInputError({name: "emailError", value:true});
    } else if (signInObject.password.trim() === "") {
      setInputError({name: "passwordError", value:true});
    } else {
      dispatch(Login(signInObject));
    }
  }
  useEffect(() => {
    if (token) {
      props.navigation.navigate("Home");
    }
  },[token])
  return loading ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.4)",
      }}
    >
      <ActivityIndicator animating={true} size={"medium"} />
    </View>
  ) : (
    <>
      <SafeAreaView style={Styles.headerStyle} />
      <SafeAreaView style={Styles.safeViewStyle}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? 50 : 30}
        >
          <ScrollView>
            <View style={styles.mainWrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ paddingLeft: 20, zIndex: 100 }}
                onPress={() => props.navigation.navigate("Home")}
              >
                <FontAwesome name="chevron-left" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerText}>Login Now</Text>

              <Text style={styles.subText}>
                Please login to continue using our app.
              </Text>
            </View>
            <Text style={styles.optionText}>or login with email</Text>

            <View style={styles.textInput}>
              <TextInputComponent
                type="seperator"
                placeholder="Email"
                secureTextEntry={false}
                changeText={(text) => handleInputChange({name: "email", value: text})}
                value={signInObject.email}
              />
              {signInErrors.emailError && (
                <Text style={styles.errorMessageStyle}>Email is required</Text>
              )}
              <TextInputComponent
                type=""
                placeholder="Password"
                secureTextEntry={true}
                changeText={(text) => handleInputChange({name: "password", value: text})}
                value={signInObject.password}
              />
              {signInErrors.passwordError && (
                <Text style={styles.errorMessageStyle}>
                  Invalid password
                </Text>
              )}
            </View>
            <View style={styles.forgotRememberContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ForgotPassword")}
              >
                <Text style={[styles.forgotPasswordBtn]}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonWrapper}>
              <Button
                full
                style={styles.buttonSignIn}
                onPress={() => onSubmit()}
              >
                Login
              </Button>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.signUpAccoutText}>
                {Constants.SIGN_IN_PAGE_ACCOUNT_INFO}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("signUp")}
              >
                <Text style={[styles.signUpAccount]}>{Constants.SIGN_UP}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* {loading ? <Loading /> : null} */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
