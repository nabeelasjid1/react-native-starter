import React, { Component } from "react";
import { connect } from 'react-redux'
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager
} from 'react-native-fbsdk';
import { loginUser } from '../../../redux/auth/actions'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from "react-native";

import {
  GoogleSignin,
  statusCodes,
} from 'react-native-google-signin';

import { FontAwesome } from '@expo/vector-icons';

import styles from "./Styles";
import {ActivityIndicator } from "react-native-paper";
import Styles from "../../../Styles/Styles";
import Button from "../../../Components/Button";
import TextInputComponent from "../../../Components/TextInput";
import * as Constants from "../../../Constants";
import Icon from "react-native-vector-icons/Entypo";
import appleAuth, {
  AppleAuthError,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
  AppleButton
} from '@invertase/react-native-apple-authentication';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passReg = /^[a-zA-Z0-9*.!@#$%^&+-_=/( /)]{3,30}$/
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: false,
      passwordError: false,
      invalidEmailError: false,
      invalidPassError: false,
      isChecked: false,
      user_name: '',
      token: '',
      profile_pic: '',
      userInfo: null,
      gettingLoginStatus: true,
      loggedIn: false,
      userID: ''
    };
  }

  onChangeTextHandler = (email) => {
    this.setState({ email });
  };
  onChangePasswordHandler = (password) => {
    this.setState({ password });
  };
  onSubmit = () => {
    const { email, password } = this.state;
    this.setState({ emailError: false, invalidEmailError: false, passwordError: false, invalidPassError: false })
    if (email.trim() === "") this.setState({ emailError: true });
    else if (reg.test(email) === false)
      this.setState({ invalidEmailError: true });
    else if (password.trim() === "") this.setState({ passwordError: true });
    else if (passReg.test(password) === false || password.length < 3 || password.length > 30) this.setState({ invalidPassError: true });
    else {
      const user = {
        email,
        password,

      };
      this.props.loginUser(user)
      this.setState({ password: '' })
      // this.props.navigation.navigate("homeNavigation")

    }
  };

  // responseFacebook (response) {
  //   console.log(response);
  //   //anything else you want to do(save to localStorage)...
  // }
  get_Response_Info = (error, result) => {

    if (error) {
      console.log("Error", error)

      //Alert for the Error
      Alert.alert('Error fetching data: ' + error.toString());
    } else {

      const { email, first_name, last_name, id } = result
      // console.log("Email" , email , first_name , last_name , id)
      const userData = {
        email: email,
        password: 'dummy',
        firstName: first_name,
        lastName: last_name,
        id: id,
        isSocial: true
      };
      // console.log("user", userData)

      this.props.loginUser(userData)

      //response alert
      // alert(JSON.stringify(result));
      // this.setState({ user_name: 'Welcome' + ' ' + result.name });
      // this.setState({ token: 'User Token: ' + ' ' + result.id });
      // // this.setState({ profile_pic: result.picture.data.url });
    }
  };

  onLogout = () => {
    //Clear the state after logout
    this.setState({ user_name: null, token: null, profile_pic: null });
  };


  _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      //Get the User details as user is already signed in
      this._getCurrentUserInfo();
    } else {
      //alert("Please Login");
      console.log('Please Login');
    }
    this.setState({ gettingLoginStatus: false });
  };

  _getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };

  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened', error);
      }
    }
  };

  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null }); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  getPublicProfile = async () => {
    const infoRequest = new GraphRequest(
      '/me?fields=id,email,first_name,last_name',
      null,
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          console.log(result);
          // setProfile(result);
          // setProfileImage(result.picture.data.url);
        }
      }
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  handleFBLogin = () => {

    LoginManager.logOut()

    LoginManager.setLoginBehavior('WEB_ONLY');
    LoginManager.logInWithPermissions(['public_profile, email']).then(
      (result, error) => {
        // console.log("Res", result)
        if (error) {

          if (AccessToken.getCurrentAccessToken() !== null) {

            LoginManager.logOut()

          }
        } else if (result.isCancelled) {
          console.log('Login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            // console.log("data", data);
            const processRequest = new GraphRequest(
              '/me?fields=id,email,first_name,last_name',
              null,
              this.get_Response_Info,
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(processRequest).start();
          });
        }
      },
    );
  };

  handleAppleLogin = async () => {
    try {

      // make sign in request and return a response object containing authentication data
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME
        ],
      });

      const { email, fullName: { familyName, givenName }, user, identityToken } = appleAuthRequestResponse
      const userData = {
        email: email,
        password: 'dummy',
        firstName: givenName ? givenName : "Apple",
        lastName: familyName ? familyName : "User",
        userId: user,
        isSocial: true
      };


      if (!email && user) {
        userData.email = `${user}@eushare.com`
      }
      // console.log("user", userData)

      if (identityToken) {
        this.props.loginUser(userData)
      } else {
        // no token, failed sign in
        alert("Login attempt failed. Please try again.")
      }

    } catch (error) {
      console.log("Error", error)
      if (error.code === AppleAuthError.FAILED) {
        alert("Login attempt failed. Please try again.")
      }
      if (error.code === AppleAuthError.UNKNOWN) {
        alert("Login attempt failed. Please try again.")
      }

    }

  }

  render() {
    // const { loading } = this.props.auth;
    const { emailError, passwordError, invalidEmailError, invalidPassError } = this.state;
    return (
      this.props.global?.loading ?
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.4)' }}>
          <ActivityIndicator
            animating={true}
            size={"medium"}
          />
        </View>
        :
        <>
          <SafeAreaView style={Styles.headerStyle} />
          <SafeAreaView style={Styles.safeViewStyle}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 50 : 30}>

              <ScrollView>
                <View style={styles.mainWrapper}>

                  <TouchableOpacity activeOpacity={0.7} style={{ paddingLeft: 20, zIndex: 100 }} onPress={() => this.props.navigation.navigate('Home')} >
                    <FontAwesome name="chevron-left" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.headerText}>Login Now</Text>

                  <Text style={styles.subText}>
                    Please login to continue using our app.
              </Text>



                  {/* <GoogleSigninButton
              style={{ width: 312, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this._signIn}
            />     */}
                  {/* <FacebookLogin 
                       socialId="235243351067892"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/> */}
                  {/* <Text style={styles.socialLinkText}>
                  Enter via social networks
              </Text>
                <View style={styles.socialButtonWrapper}>
                  {/* <View style={styles.googleWrapper}>
                    <Icon name="google-" size={25} color="white" />
                  </View> */}
                  {Platform.OS == 'ios' &&
                    <AppleButton
                      buttonStyle={AppleButton.Style.BLACK}
                      buttonType={AppleButton.Type.SIGN_IN}
                      style={{
                        width: '60%', // You must specify a width
                        height: 45, // You must specify a height
                        alignSelf: 'center'
                      }}
                      onPress={this.handleAppleLogin}
                    />
                    //  <TouchableOpacity style={styles.appleWrapper} activeOpacity={0.3} onPress={this.handleAppleLogin}>
                    //   <FontAwesome name="apple" size={25} color="white" />
                    //   </TouchableOpacity> 

                  }
                  <TouchableOpacity style={styles.facebookWrapper} activeOpacity={0.3} onPress={this.handleFBLogin}>
                    <Icon name="facebook" size={12} color="white" />
                    <Text style={styles.facebookText}>Sign in with Facebook</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.optionText}>or login with email</Text>

                <View style={styles.textInput}>
                  <TextInputComponent
                    type="seperator"
                    placeholder="Email"
                    secureTextEntry={false}
                    changeText={this.onChangeTextHandler}
                    value={this.state.email}
                  />
                  {emailError && (
                    <Text style={styles.errorMessageStyle}>Email is required</Text>
                  )}
                  {invalidEmailError && (
                    <Text style={styles.errorMessageStyle}>Invalid email address. Valid e-mail can contain only letters, numbers, '@' and '.'</Text>
                  )}
                  <TextInputComponent
                    type=""
                    placeholder="Password"
                    secureTextEntry={true}
                    changeText={this.onChangePasswordHandler}
                    value={this.state.password}
                  />
                  {passwordError && (
                    <Text style={styles.errorMessageStyle}>
                      Password is required
                    </Text>
                  )}
                  {invalidPassError && (
                    <Text style={styles.errorMessageStyle}>Password only contains 3-30 length of letters, alphabets or special characters.</Text>
                  )}
                </View>
                <View style={styles.forgotRememberContainer}>



                  {/* <TouchableOpacity style={styles.radioButton}>
                   <CheckBox
                  value={this.state.isChecked}
                   onValueChange={() => this.setState({isChecked : !this.state.isChecked})}
              />
                  <Text style={styles.radioTextStyling}>Remember me</Text>
                </TouchableOpacity> */}

                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ForgotPassword")}
                  >
                    <Text style={[styles.forgotPasswordBtn]}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonWrapper}>
                  <Button
                    full
                    style={styles.buttonSignIn}
                    onPress={() => this.onSubmit()}
                  >
                    Login
                </Button>
                </View>
                <View style={styles.bottomContainer}>
                  <Text style={styles.signUpAccoutText}>
                    {Constants.SIGN_IN_PAGE_ACCOUNT_INFO}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("signUp")}
                  >
                    <Text style={[styles.signUpAccount]}>{Constants.SIGN_UP}</Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={styles.bottomContainer}>
                <Text style={styles.signUpAccoutText}>
                  {Constants.SIGN_UP_PAGE_VERIFY_EMAIL}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Verification")}
                >
                  <Text style={[styles.signUpAccount]}>{Constants.VERIFY}</Text>
                </TouchableOpacity>

              </View> */}
              </ScrollView>
              {/* {loading ? <Loading /> : null} */}
            </KeyboardAvoidingView>
          </SafeAreaView>
        </>
    );
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    loginUser: (user) => { dispatch(loginUser(user)) }
  }
}

const mapStateToProps = ({ auth, global }) => {
  return {
    state: auth,
    global
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
