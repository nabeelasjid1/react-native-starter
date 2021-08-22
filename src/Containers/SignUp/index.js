import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/actions";
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
import CheckBox from "@react-native-community/checkbox";
import styles from "./Styles";
import Images from "../../Styles/Images";
import Styles from "../../Styles/Styles";
import Button from "../../Components/Button";
import TextInputComponent from "../../Components/TextInput";
import { ActivityIndicator } from "react-native-paper";
import * as Constants from "../../Constants";
import { FontAwesome } from "@expo/vector-icons";
import { BlueColor } from "../../../config";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passReg = /^[a-zA-Z0-9*.!@#$%^&+-_=/( /)]{3,30}$/;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",

      email: "",
      password: "",
      confirmPassword: "",
      title: "Customer",
      phone: "",
      firstNameError: false,
      firstNameInvalidError: false,
      lastNameError: false,
      lastNameInvalidError: false,

      emailError: false,
      passwordError: false,
      confirmPasswordError: false,
      invalidPassError: false,

      invalidEmailError: false,
      titleError: false,
      phoneError: false,
      isChecked: false,
      valid: false,
      passMatchError: false,
      phoneValidError: false,
      checkedError: false,
    };
  }
  onChangeTextHandler = (email) => {
    this.setState({ email });
  };
  onChangePasswordHandler = (password) => {
    this.setState({ password });
  };
  onSubmit = async () => {
    this.setState({ valid: false });

    const {
      firstName,
      lastName,
      email,
      password,
      title,
      phone,
      confirmPassword,
      isChecked,
    } = this.state;
    this.setState({
      emailError: false,
      invalidEmailError: false,
      passwordError: false,
      confirmPasswordError: false,
      passMatchError: false,
      firstNameError: false,
      lastNameError: false,
      phoneError: false,
      titleError: false,
      phoneValidError: false,
      checkedError: false,
      invalidPassError: false,
      firstNameInvalidError: false,
      lastNameInvalidError: false,
    });
    const nameReg = /^[a-z ,.'-]+$/i;

    if (firstName.trim() === "") this.setState({ firstNameError: true });
    else if (!firstName.match(nameReg))
      this.setState({ firstNameInvalidError: true });
    else if (lastName.trim() === "") this.setState({ lastNameError: true });
    else if (!lastName.match(nameReg))
      this.setState({ lastNameInvalidError: true });
    else if (phone.trim() === "") this.setState({ phoneError: true });
    else if (email.trim() === "") this.setState({ emailError: true });
    else if (reg.test(email) === false)
      this.setState({ invalidEmailError: true });
    else if (password.trim() === "") this.setState({ passwordError: true });
    else if (
      passReg.test(password) === false ||
      password.length < 3 ||
      password.length > 30
    )
      this.setState({ invalidPassError: true });
    else if (confirmPassword.trim() === "")
      this.setState({ confirmPasswordError: true });
    else if (confirmPassword !== password)
      this.setState({ passMatchError: true });
    else if (title === "") this.setState({ titleError: true });
    else if (!isChecked) this.setState({ checkedError: true });
    else {
      const user = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userRole: title,
      };

      try {
        this.setState({ valid: true });
        await this.props.regUser(user);
      } catch (err) {
        console.log(err);
      }
    }
  };
  render() {
    const {
      emailError,
      passwordError,
      invalidEmailError,
      firstNameError,
      confirmPassword,
      passMatchError,
      confirmPasswordError,
      lastNameError,
      phoneError,
      phoneValidError,
      checkedError,
      invalidPassError,
      firstNameInvalidError,
      lastNameInvalidError,
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
                onPress={() => this.props.navigation.navigate("login")}
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
                    onChangeText={(text) =>
                      this.setState({ firstName: text, firstNameError: false })
                    }
                    value={this.state.firstName}
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
                    onChangeText={(text) =>
                      this.setState({ lastName: text, lastNameError: false })
                    }
                    value={this.state.lastName}
                  />
                </View>
              </View>
              {firstNameError && (
                <Text style={styles.errorMessageStyle}>
                  First Name is required
                </Text>
              )}
              {firstNameInvalidError && (
                <Text style={styles.errorMessageStyle}>
                  First name must contains alphabets.
                </Text>
              )}
              {lastNameError && (
                <Text style={styles.errorMessageStyle}>
                  Last Name is required
                </Text>
              )}
              {lastNameInvalidError && (
                <Text style={styles.errorMessageStyle}>
                  Last name must contains alphabets.
                </Text>
              )}
              <View style={styles.textInput}>
                <TextInputComponent
                  type=""
                  placeholder="(541) 754-3010"
                  secureTextEntry={false}
                  changeText={(value) =>
                    this.setState({
                      phone: value,
                      phoneError: false,
                      phoneValidError: false,
                    })
                  }
                  value={this.state.phone}
                />
                {phoneError && (
                  <Text style={styles.errorMessageStyle}>
                    Phone Number is required
                  </Text>
                )}
                {phoneValidError && (
                  <Text style={styles.errorMessageStyle}>
                    Phone Number must be valid and include country code.
                  </Text>
                )}

                <TextInputComponent
                  type=""
                  placeholder="Email"
                  secureTextEntry={false}
                  changeText={(value) =>
                    this.setState({
                      email: value,
                      emailError: false,
                      invalidEmailError: false,
                    })
                  }
                  value={this.state.email}
                />
                {emailError && (
                  <Text style={styles.errorMessageStyle}>
                    Email is required
                  </Text>
                )}
                {invalidEmailError && (
                  <Text style={styles.errorMessageStyle}>
                    Invalid email address. Valid e-mail can contain only
                    letters, numbers, '@' and '.'
                  </Text>
                )}

                <TextInputComponent
                  type=""
                  placeholder="Password"
                  secureTextEntry={true}
                  changeText={(value) =>
                    this.setState({ password: value, passwordError: false })
                  }
                  value={this.state.password}
                />
                {passwordError && (
                  <Text style={styles.errorMessageStyle}>
                    Password is required
                  </Text>
                )}
                {invalidPassError && (
                  <Text style={styles.errorMessageStyle}>
                    Password only contains 3-30 length of letters, alphabets or
                    special characters.
                  </Text>
                )}

                <TextInputComponent
                  type=""
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  changeText={(value) =>
                    this.setState({
                      confirmPassword: value,
                      confirmPasswordError: false,
                      passMatchError: false,
                    })
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
              </View>
              <View style={styles.checkGenderContainer}>
                <CheckBox
                  style={styles.checkBoxStyle}
                  boxType={"circle"}
                  value={this.state.isChecked}
                  lineWidth={1.5}
                  onCheckColor={"#44a9c1"}
                  onTintColor={"#44a9c1"}
                  onValueChange={() =>
                    this.setState({
                      isChecked: !this.state.isChecked,
                      checkedError: false,
                    })
                  }
                />
                <Text style={styles.radioTextStyling}>
                  I agree with{" "}
                  <Text
                    onPress={() =>
                      Linking.openURL("https://eushare.app/privacy-policy/")
                    }
                    style={{ color: BlueColor.primaryColor }}
                  >
                    Privacy Policy.
                  </Text>
                </Text>
              </View>
              {checkedError && (
                <Text style={styles.errorMessageStyle}>
                  Must Agree with the policy.
                </Text>
              )}
              <View style={styles.buttonWrapper}>
                <Button
                  full
                  style={styles.buttonSignIn}
                  onPress={this.onSubmit}
                >
                  {Constants.SIGN_UP}
                </Button>
              </View>

              <View style={styles.bottomContainer}>
                <Text style={styles.signUpAccoutText}>
                  {Constants.SIGN_UP_PAGE_ACCOUNT_INFO}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("login")}
                >
                  <Text style={[styles.signUpAccount]}>{Constants.LOGIN}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    regUser: (user) => {
      dispatch(registerUser(user));
    },
  };
};

const mapStateToProps = ({ auth, global }) => {
  return {
    state: auth,
    global,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
