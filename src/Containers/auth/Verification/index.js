import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import styles from "./Styles";
import Styles from "../../../Styles/Styles";
import Button from "../../../Components/Button";
import * as Constants from "../../../Constants";
import Toast from "react-native-simple-toast";
import Loading from "../../../Components/Loader";
import images from "../../../Styles/Images";
import { ScrollView } from "react-native-gesture-handler";
const Verification = (props) => {
  const state = {
    code: "",
    loading: false,
  };
  const verifyHandler = () => {
    // if (state.code.length === 6) {
    //   props.verifyEmail(state.code);
    // } else {
    //   Toast.show("Enter 6 Digit Code", Toast.LONG);
    // }
  };
  return (
    <>
      <SafeAreaView style={Styles.headerStyle} />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 30 : 30}
      >
        <ScrollView style={Styles.headerStyle}>
          <View style={styles.container}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ position: "relative", top: 70, left: -20 }}
              onPress={() => props.navigation.navigate("login")}
            >
              <FontAwesome name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Image
              source={images.verification}
              resizeMode="contain"
              style={styles.verificationImage}
            />
            <View style={styles.maincontainer}>
              <Text style={styles.headerText}>Verification</Text>
              <Text style={styles.verificationText}>
                Enter the 6 digit code that
              </Text>
              <Text style={styles.verificationText}>
                was sent to your email
              </Text>
            </View>
            <View style={styles.otpCard}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: "100%", alignItems: "flex-end" }}
                onPress={() => {
                  setState({ code: "" });
                }}
              >
                <Entypo name="circle-with-cross" size={24} color="#636363" />
              </TouchableOpacity>
              <OTPInputView
                style={styles.OTPInputView}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeChanged={(code) => {
                  setState({ code });
                }}
                code={state.code}
              />
              <View style={styles.buttonWrapper}>
                {state.loading ? (
                  <Loading />
                ) : (
                  <Button
                    full
                    style={styles.buttonSignIn}
                    onPress={verifyHandler}
                  >
                    {Constants.VERIFY}
                  </Button>
                )}
              </View>
            </View>
            <View style={styles.resendView}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Verification;
