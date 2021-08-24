import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./Styles";
import Button from "../../../Components/Button";
import { Provider, TextInput } from "react-native-paper";
import Styles from "../../../Styles/Styles";
import { updateProfile, getUser } from "../../../redux/users/actions";
import images from "../../../Styles/Images";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlueColor } from "../../../../config/color";

const Profile = (props) => {
  const state = {
    loggedIn: props?.user?.user,
    fname: props?.user?.user?.firstName,
    lname: props?.user?.user?.lastName,
    phone: props?.user?.user?.phone,
    fnameEdit: false,
    lnameEdit: false,
    phoneEdit: false,
  };

  const componentDidMount = () => {
    // props.getUser(props.user?.user?.id);
  };
  const switchBtnsFirstName = async () => {
    // if (state.fnameEdit) {
    //   try {
    //     const nameReg = /^[a-z ,.'-]+$/i;
    //     if (!state.fname.trim()) {
    //       Toast.show("Please Enter First Name", Toast.LONG);
    //     } else if (!state.fname.match(nameReg)) {
    //       Toast.show("First name must contains alphabets.", Toast.LONG);
    //     } else {
    //       await props.update(props?.user?.user?.id, {
    //         firstName: state.fname,
    //       });
    //       setState({ fnameEdit: false });
    //     }
    //   } catch (err) {
    //     console.log("Error", err);
    //   }
    // } else {
    //   setState({ fnameEdit: true });
    // }
  };

  const switchBtnsLastName = async () => {
    // if (state.lnameEdit) {
    //   try {
    //     const nameReg = /^[a-z ,.'-]+$/i;
    //     if (!state.lname.trim()) {
    //       Toast.show("Please Enter Last Name", Toast.LONG);
    //     } else if (!state.lname.match(nameReg)) {
    //       Toast.show("Last name must contains alphabets.", Toast.LONG);
    //     } else {
    //       await props.update(props?.user?.user?.id, {
    //         lastName: state.lname,
    //       });
    //       setState({ lnameEdit: false });
    //     }
    //   } catch (err) {
    //     console.log("Error", err);
    //   }
    // } else {
    //   setState({ lnameEdit: true });
    // }
  };

  const switchBtnsPhone = async () => {
    // if (state.phoneEdit) {
    //   try {
    //     const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    //     if (!state.phone) {
    //       Toast.show("Please Enter Phone Number", Toast.LONG);
    //     } else if (phoneReg.test(state.phone) === false) {
    //       Toast.show("Phone number must only contain letters.", Toast.LONG);
    //     } else {
    //       await props.update(props?.user?.user?.id, {
    //         phone: state.phone,
    //       });
    //       setState({ phoneEdit: false });
    //     }
    //   } catch (err) {
    //     console.log("Error", err);
    //   }
    // } else {
    //   setState({ phoneEdit: true });
    // }
  };

  return (
    <>
      <SafeAreaView style={Styles.headerStyle} />
      <SafeAreaView style={Styles.safeViewStyle}>
        <Provider>
          {!props?.auth?.isAuthenticated ? (
            <View style={styles.loggedBtnView}>
              <Text style={{ textAlign: "center" }}>You are not Logged in</Text>
              <View style={styles.buttonWrapper}>
                <Button
                  full
                  style={styles.buttonSignIn}
                  onPress={() => props.navigation.navigate("login")}
                >
                  Login
                </Button>
              </View>
            </View>
          ) : (
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" && "position"}
              keyboardVerticalOffset={Platform.OS === "android" ? 0 : 50}
            >
              <ScrollView>
                <View style={styles.screen}>
                  <View style={styles.topTitle}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{ marginLeft: 20, marginTop: 24, zIndex: 3 }}
                      onPress={() => props.navigation.navigate("Home")}
                    >
                      <FontAwesome
                        name="chevron-left"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                    <Text style={styles.topTitleText}>My Account Info</Text>
                  </View>
                  {/* <View style={styles.line}></View> */}
                  <View style={styles.imageView}>
                    <Image source={images.avatar} style={styles.imageAvatar} />
                  </View>
                  <View style={styles.mainNameView}>
                    <Text style={styles.mainName}>
                      {props?.currentUser?.user?.firstName}{" "}
                      {props?.currentUser?.user?.lastName}
                    </Text>
                  </View>

                  <View style={styles.detailView}>
                    <View style={styles.detailLeft}>
                      <Text style={styles.detailTitle}>First Name</Text>
                      {state.fnameEdit ? (
                        <TextInput
                          style={styles.detailInput}
                          onChangeText={(text) => setState({ fname: text })}
                          value={state.fname}
                        />
                      ) : (
                        <Text style={styles.detailData}>
                          {props?.currentUser?.user?.firstName}
                        </Text>
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.detailRight}
                      onPress={switchBtnsFirstName}
                    >
                      <Text style={styles.detailEdit}>
                        {state.fnameEdit ? "Save" : "Edit"}
                      </Text>
                    </TouchableOpacity>
                    {state.fnameEdit && (
                      <TouchableOpacity
                        style={styles.detailRight}
                        onPress={() => {
                          setState({ fnameEdit: false });
                        }}
                      >
                        <FontAwesome
                          name="close"
                          size={24}
                          color={BlueColor.primaryColor}
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={styles.detailView}>
                    <View style={styles.detailLeft}>
                      <Text style={styles.detailTitle}>Last Name</Text>
                      {state.lnameEdit ? (
                        <TextInput
                          style={styles.detailInput}
                          onChangeText={(text) => setState({ lname: text })}
                          value={state.lname}
                        />
                      ) : (
                        <Text style={styles.detailData}>
                          {props?.currentUser?.user?.lastName}
                        </Text>
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.detailRight}
                      onPress={switchBtnsLastName}
                    >
                      <Text style={styles.detailEdit}>
                        {state.lnameEdit ? "Save" : "Edit"}
                      </Text>
                    </TouchableOpacity>
                    {state.lnameEdit && (
                      <TouchableOpacity
                        style={styles.detailRight}
                        onPress={() => {
                          setState({ lnameEdit: false });
                        }}
                      >
                        <FontAwesome
                          name="close"
                          size={24}
                          color={BlueColor.primaryColor}
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={styles.detailView}>
                    <View style={styles.detailLeft}>
                      <Text style={styles.detailTitle}>Email</Text>
                      <Text style={styles.detailData}>
                        {props?.currentUser?.user?.email}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.detailView}>
                    <View style={styles.detailLeft}>
                      <Text style={styles.detailTitle}>Phone</Text>
                      {state.phoneEdit ? (
                        <TextInput
                          style={styles.detailInput}
                          onChangeText={(text) => setState({ phone: text })}
                          value={state.phone}
                        />
                      ) : (
                        <Text style={styles.detailData}>
                          {props?.currentUser?.user?.phone}
                        </Text>
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.detailRight}
                      onPress={switchBtnsPhone}
                    >
                      <Text style={styles.detailEdit}>
                        {state.phoneEdit ? "Save" : "Edit"}
                      </Text>
                    </TouchableOpacity>
                    {state.phoneEdit && (
                      <TouchableOpacity
                        style={styles.detailRight}
                        onPress={() => {
                          setState({ phoneEdit: false });
                        }}
                      >
                        <FontAwesome
                          name="close"
                          size={24}
                          color={BlueColor.primaryColor}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </Provider>
      </SafeAreaView>
    </>
  );
};

// const mapStateToProps = ({ auth, global, user }) => {
//   return {
//     user: auth,
//     global,
//     auth,
//     currentUser: user
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     update: (id, user) => {
//       dispatch(updateProfile(id, user));
//     },
//     getUser: (id) => {
//       dispatch(getUser(id));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profile;
