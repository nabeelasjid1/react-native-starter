import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyForgotPass, resetPassword } from "../../redux/auth/actions";
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
import { ActivityIndicator } from "react-native-paper";
import TextInputComponent from "../../Components/TextInput";

import styles from "./Styles";
import Styles from "../../Styles/Styles";
import Button from "../../Components/Button";
import Toast from "react-native-simple-toast";
import Loading from "../../Components/Loader";
import images from "../../Styles/Images";
import { ScrollView } from "react-native-gesture-handler";
class ForgotVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      loading: false,
      newPass: false,
      passwordError: false,
      confirmPasswordError: false,
      phoneValidError: false,
      password: "",
      confirmPassword: "",
    };
  }
  verifyResetCode = () => {
    if (this.state.code.length == 6) {
      this.props.verifyForgotPass(this.state.code);
    } else {
      Toast.show("Enter 6 Digit Code", Toast.LONG);
    }
  };

  resetPassword = () => {
    const { password, confirmPassword } = this.state;
    this.setState({
      passMatchError: false,
      passwordError: false,
      confirmPasswordError: false,
    });
    if (password == "") this.setState({ passwordError: true });
    else if (confirmPassword == "")
      this.setState({ confirmPasswordError: true });
    else if (password !== confirmPassword)
      this.setState({ passMatchError: true });
    else if (password == confirmPassword) {
      const user = {
        id: this.props.state.userIDRec,
        password,
      };

      this.props.resetPassword(user);
      this.setState({ code: "" });
    }
  };

  render() {
    const {
      passwordError,
      passMatchError,
      confirmPassword,
      password,
      confirmPasswordError,
    } = this.state;
    return this.props.global?.loading ? (
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
        <KeyboardAvoidingView
          style={Styles.safeViewStyle}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? 30 : 30}
        >
          <ScrollView>
            <View style={styles.container}>
              {/* <LinearGradient
                colors={["#f3f3f8", "transparent"]}
                style={styles.gradientStyling}
              /> */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ position: "relative", top: 70, left: -20 }}
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
              >
                <FontAwesome name="chevron-left" size={24} color="black" />
              </TouchableOpacity>
              <Image
                source={images.verification}
                resizeMode="contain"
                style={styles.verificationImage}
              />
              {!this.props.state.submit ? (
                <>
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
                        this.setState({ code: "" });
                      }}
                    >
                      <Entypo
                        name="circle-with-cross"
                        size={24}
                        color="#636363"
                      />
                    </TouchableOpacity>
                    <OTPInputView
                      style={styles.OTPInputView}
                      pinCount={6}
                      autoFocusOnLoad
                      codeInputFieldStyle={styles.underlineStyleBase}
                      codeInputHighlightStyle={styles.underlineStyleHighLighted}
                      // onCodeFilled={(code) => {this.setState({ code })}}
                      onCodeChanged={(code) => {
                        this.setState({ code });
                      }}
                      code={this.state.code}
                    />

                    {/* <OTPInputView
                 style={styles.OTPInputView}
                 pinCount={6}
                 autoFocusOnLoad
                 codeInputFieldStyle={styles.underlineStyleBase}
                 codeInputHighlightStyle={styles.underlineStyleHighLighted}
                 
                 onCodeFilled={(code) => {this.setState({ code })}}
                /> */}

                    <View style={styles.buttonWrapper}>
                      {this.state.loading ? (
                        <Loading />
                      ) : (
                        <Button
                          full
                          style={styles.buttonSignIn}
                          onPress={this.verifyResetCode}
                          // onPress={() => this.props.navigation.navigate("Home")}
                        >
                          Verify
                        </Button>
                      )}
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.maincontainer}>
                    <Text style={styles.headerText}>Reset your Password</Text>
                    <Text style={styles.verificationText}>
                      Enter new Password for your account.
                    </Text>
                  </View>
                  <View style={styles.textInput}>
                    <TextInputComponent
                      type=""
                      placeholder="New Password"
                      secureTextEntry={true}
                      changeText={(value) => this.setState({ password: value })}
                      value={this.state.password}
                    />
                    {passwordError && (
                      <Text style={styles.errorMessageStyle}>
                        Password is required
                      </Text>
                    )}

                    <TextInputComponent
                      type=""
                      placeholder="Confirm Password"
                      secureTextEntry={true}
                      changeText={(value) =>
                        this.setState({ confirmPassword: value })
                      }
                      value={confirmPassword}
                    />
                    {confirmPasswordError && (
                      <Text style={styles.errorMessageStyle}>
                        Confirm Password is required
                      </Text>
                    )}
                    {passMatchError && (
                      <Text style={styles.errorMessageStyle}>
                        Confirm Password must be matched with Password
                      </Text>
                    )}
                    <View
                      style={{
                        width: "90%",
                        marginVertical: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Button
                        full
                        style={styles.buttonSignIn}
                        onPress={this.resetPassword}
                        // onPress={() => this.props.navigation.navigate("Home")}
                      >
                        Reset Password
                      </Button>
                    </View>
                  </View>
                </>
              )}
              <View style={styles.resendView}>
                {/* <Text
                  style={{ color: "#44a9c1", fontWeight: "600", fontSize: 15 }}
                >
                  Re-Send Code in 0:59
              </Text> */}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    verifyForgotPass: (code) => dispatch(verifyForgotPass(code)),
    resetPassword: (user) => dispatch(resetPassword(user)),
  };
};

const mapStateToProps = ({ auth, global }) => {
  return {
    state: auth,
    global,
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ForgotVerification);
