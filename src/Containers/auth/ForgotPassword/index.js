import React, { Component } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import styles from "./Styles";
import Styles from "../../../Styles/Styles";
import Button from "../../../Components/Button";
import { FontAwesome } from '@expo/vector-icons';

import { forgotPassword } from '../../../redux/auth/actions'
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      invalidEmailError: false,
      email: ''
    };
  }
  


  forgotPasswordSend = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.setState({ error: false, invalidEmailError: false })
    if (this.state.email == '') {
      this.setState({ error: true })
    }
    else if (reg.test(this.state.email) === false)
      this.setState({ invalidEmailError: true })
    else {

      this.props.forgotPassword(this.state.email)

    }
  }


  render() {
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
          <KeyboardAvoidingView behavior="height"  keyboardVerticalOffset={Platform.OS == "ios" ? 30 :30}>
           
            <ScrollView >
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} style={{ position: 'relative', top: 70, left: -20 }} onPress={() => this.props.navigation.navigate('login')} >
                  <FontAwesome name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.maincontainer}>

                  <Text style={styles.headerText}>Forgot Password</Text>
                  <Text style={styles.verificationText}>
                    Enter the Email Address Associated with Your
              </Text>
                  <Text style={styles.verificationText}>
                    Account We Will Send You An Email Address
              </Text>
                </View>
                <View style={styles.card}>
                  <View style={styles.SectionStyleEdit}>
                    <TextInput
                      placeholder="youremail@gmail.com"
                      placeholderTextColor="#AEACAC"
                      onChangeText={text => this.setState({ email: text })}
                      value={this.state.email}
                    />
                  </View>
                  {this.state.error && <Text style={{ color: 'red' }}>Enter Email first.</Text>}
                  {this.state.invalidEmailError && <Text style={{ color: 'red' }}>Enter Valid Email.</Text>}
                  <View style={styles.buttonWrapper}>
                    <Button
                      full
                      style={styles.buttonSignIn}
                      onPress={this.forgotPasswordSend}
                    >
                      Reset Password
                </Button>
                  </View>
                </View>
              </View>
          </ScrollView>
            </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    forgotPassword: (email) => dispatch(forgotPassword(email))
  }
}


const mapStateToProps = ({ auth, global }) => {
  return {
    state: auth,
    global
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(ForgotPassword);
