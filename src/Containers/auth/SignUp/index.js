import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from "@react-native-community/checkbox";
import styles from "./Styles";
import Images from "../../../Styles/Images";
import Styles from "../../../Styles/Styles";
import Button from "../../../Components/Button";
import TextInputComponent from "../../../Components/TextInput";
import { ActivityIndicator } from "react-native-paper";
import * as Constants from "../../../Constants";
import { FontAwesome } from "@expo/vector-icons";
import { BlueColor } from "../../../../config";
import { SignUp } from "../../../redux/reducers/auth";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Signup = (props) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state=> state.auth);
  const [signUpObject, setSignUpObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    privacyCheck: false
  });
  const [signUpErrors, setSignUpErrors] = useState({});
  const handleInputChange = ({name, value}) => {
    setSignUpObject({
      ...signUpObject,
      [name]: value
    });
  };
  const setInputError = ({name, value}) => {
    setSignUpErrors({
      [name]: value
    });
    return;
  };
  const onSubmit = () => {
    if (signUpObject.firstName.trim() === "") {
      setInputError({name: "firstNameError", value:true});
    } else if (signUpObject.lastName.trim() === "") {
      setInputError({name: "lastNameError", value:true});
    } else if (signUpObject.email.trim() === "" || !reg.test(signUpObject.email)) {
      setInputError({name: "emailError", value:true});
    } else if (signUpObject.phone.trim() === "") {
      setInputError({name: "phoneError", value:true});
    } else if (signUpObject.password.trim() === "") {
      setInputError({name: "passwordError", value:true});
    } else if (signUpObject.confirmPassword.trim() === "") {
      setInputError({name: "confirmPasswordError", value:true});
    } else if (signUpObject.password.trim() !== signUpObject.confirmPassword.trim()) {
      setInputError({name: "passMatchError", value:true});
    } else if (signUpObject.privacyCheck === false ) {
      setInputError({name: "checkedError", value:true});
    } else {
      dispatch(SignUp(signUpObject));
    }
  };
  useEffect(() => {
    if (token) {
      props.navigation.navigate("Home");
    }
  },[token])
  return props.global?.loading ? (
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
          contentContainerStyle={styles.keyBoardViewStyle}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? 30 : 30}
        >
          <ScrollView>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ position: "relative", top: 70, left: 20 }}
              onPress={() => props.navigation.navigate("login")}
            >
              <FontAwesome name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headerImageContainer}>
              <Text style={styles.headerText}>Sign Up</Text>
              <Text style={styles.subText}>
                Please sign up to enter in a app.
              </Text>
              <Image
                resizeMode="contain"
                source={Images.signUp}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.textInputWrapper}>
              <View
                style={[
                  styles.SectionStyleEdit,
                  { borderBottomLeftRadius: 50, borderTopLeftRadius: 50 },
                ]}
              >
                <TextInput
                  style={styles.inputStyle}
                  placeholder="First Name"
                  placeholderTextColor="#707070"
                  onChangeText={(text) => handleInputChange({name: "firstName", value: text })}
                  name="firstName"
                  value={signUpObject.firstName}
                />
              </View>

              <View
                style={[
                  styles.SectionStyleEdit,
                  { borderBottomRightRadius: 50, borderTopRightRadius: 50 },
                ]}
              >
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Last Name"
                  placeholderTextColor="#707070"
                  onChangeText={(text) => handleInputChange({name: "lastName", value: text })}
                  name="lastName"
                  value={signUpObject.lastName}
                />
              </View>
            </View>
            {signUpErrors.firstNameError && (
              <Text style={styles.errorMessageStyle}>
                First Name is required
              </Text>
            )}
            {signUpErrors.lastNameError && (
              <Text style={styles.errorMessageStyle}>
                Last Name is required
              </Text>
            )}
            <View style={styles.textInput}>
              <TextInputComponent
                type=""
                placeholder="(541) 754-3010"
                secureTextEntry={false}
                changeText={(text) => handleInputChange({name: "phone", value: text })}
                name="phone"
                value={signUpObject.phone}
              />
              {signUpErrors.phoneError && (
                <Text style={styles.errorMessageStyle}>
                  Phone Number is required
                </Text>
              )}
              <TextInputComponent
                type=""
                placeholder="Email"
                secureTextEntry={false}
                changeText={(text) => handleInputChange({name: "email", value: text })}
                name="email"
                value={signUpObject.email}
              />
              {signUpErrors.emailError && (
                <Text style={styles.errorMessageStyle}>Invalid Email</Text>
              )}
              <TextInputComponent
                type=""
                placeholder="Password"
                secureTextEntry={true}
                changeText={(text) => handleInputChange({name: "password", value: text })}
                name="password"
                value={signUpObject.password}
              />
              {signUpErrors.passwordError && (
                <Text style={styles.errorMessageStyle}>
                  Password is required
                </Text>
              )}
              <TextInputComponent
                type=""
                placeholder="Confirm Password"
                secureTextEntry={true}
                changeText={(text) => handleInputChange({name: "confirmPassword", value: text })}
                name="confirmPassword"
                value={signUpObject.confirmPassword}
              />
              {signUpErrors.confirmPasswordError && (
                <Text style={styles.errorMessageStyle}>
                  Confirm Password is required
                </Text>
              )}
              {signUpErrors.passMatchError && (
                <Text style={styles.errorMessageStyle}>
                  Confirm Password must be matched with Password
                </Text>
              )}
            </View>
            <View style={styles.checkGenderContainer}>
              <CheckBox
                style={styles.checkBoxStyle}
                boxType={"circle"}
                value={signUpObject.privacyCheck}
                lineWidth={1.5}
                onCheckColor={"#44a9c1"}
                onTintColor={"#44a9c1"}
                name="privacyCheck"
                onValueChange={(value) => handleInputChange({name: "privacyCheck", value })}
              />
              <Text style={styles.radioTextStyling}>
                I agree with{" "}
                <Text
                  onPress={() =>
                    Linking.openURL("")
                  }
                  style={{ color: BlueColor.primaryColor }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </View>
            {signUpErrors.checkedError && (
              <Text style={styles.errorMessageStyle}>
                Must Agree with the policy.
              </Text>
            )}
            <View style={styles.buttonWrapper}>
              <Button full style={styles.buttonSignIn} onPress={onSubmit}>
                {Constants.SIGN_UP}
              </Button>
            </View>

            <View style={styles.bottomContainer}>
              <Text style={styles.signUpAccoutText}>
                {Constants.SIGN_UP_PAGE_ACCOUNT_INFO}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("login")}
              >
                <Text style={[styles.signUpAccount]}>{Constants.LOGIN}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Signup;
