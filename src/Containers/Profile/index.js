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
import Button from "../../Components/Button";
import { Provider, TextInput } from "react-native-paper";
import Styles from "../../Styles/Styles";
import { updateProfile, getUser } from "../../redux/users/actions";
import images from "../../Styles/Images";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlueColor } from "../../../config/color";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props?.user?.user,
      fname: this.props?.user?.user?.firstName,
      lname: this.props?.user?.user?.lastName,
      phone: this.props?.user?.user?.phone,
      fnameEdit: false,
      lnameEdit: false,
      phoneEdit: false,
    };
  }
  componentDidMount = () => {
    this.props.getUser(this.props.user?.user?.id);
  };
  switchBtnsFirstName = async () => {
    if (this.state.fnameEdit) {
      try {
        const nameReg = /^[a-z ,.'-]+$/i;
        if (!this.state.fname.trim()) {
          Toast.show("Please Enter First Name", Toast.LONG);
        } else if (!this.state.fname.match(nameReg)) {
          Toast.show("First name must contains alphabets.", Toast.LONG);
        } else {
          await this.props.update(this.props?.user?.user?.id, {
            firstName: this.state.fname,
          });
          this.setState({ fnameEdit: false });
        }
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      this.setState({ fnameEdit: true });
    }
  };

  switchBtnsLastName = async () => {
    if (this.state.lnameEdit) {
      try {
        const nameReg = /^[a-z ,.'-]+$/i;
        if (!this.state.lname.trim()) {
          Toast.show("Please Enter Last Name", Toast.LONG);
        } else if (!this.state.lname.match(nameReg)) {
          Toast.show("Last name must contains alphabets.", Toast.LONG);
        } else {
          await this.props.update(this.props?.user?.user?.id, {
            lastName: this.state.lname,
          });
          this.setState({ lnameEdit: false });
        }
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      this.setState({ lnameEdit: true });
    }
  };

  switchBtnsPhone = async () => {
    if (this.state.phoneEdit) {
      try {
        const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        if (!this.state.phone) {
          Toast.show("Please Enter Phone Number", Toast.LONG);
        } else if (phoneReg.test(this.state.phone) === false) {
          Toast.show("Phone number must only contain letters.", Toast.LONG);
        } else {
          await this.props.update(this.props?.user?.user?.id, {
            phone: this.state.phone,
          });
          this.setState({ phoneEdit: false });
        }
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      this.setState({ phoneEdit: true });
    }
  };

  render() {
    return (
      <>
        <SafeAreaView style={Styles.headerStyle} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <Provider>
            {!this.props?.auth?.isAuthenticated ? (
              <View style={styles.loggedBtnView}>
                <Text style={{ textAlign: "center" }}>
                  You are not Logged in
                </Text>
                <View style={styles.buttonWrapper}>
                  <Button
                    full
                    style={styles.buttonSignIn}
                    onPress={() => this.props.navigation.navigate("login")}
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
                        onPress={() => this.props.navigation.navigate("Home")}
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
                      <Image
                        source={images.avatar}
                        style={styles.imageAvatar}
                      />
                    </View>
                    <View style={styles.mainNameView}>
                      <Text style={styles.mainName}>
                        {this.props?.currentUser?.user?.firstName}{" "}
                        {this.props?.currentUser?.user?.lastName}
                      </Text>
                    </View>

                    <View style={styles.detailView}>
                      <View style={styles.detailLeft}>
                        <Text style={styles.detailTitle}>First Name</Text>
                        {this.state.fnameEdit ? (
                          <TextInput
                            style={styles.detailInput}
                            onChangeText={(text) =>
                              this.setState({ fname: text })
                            }
                            value={this.state.fname}
                          />
                        ) : (
                          <Text style={styles.detailData}>
                            {this.props?.currentUser?.user?.firstName}
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        style={styles.detailRight}
                        onPress={this.switchBtnsFirstName}
                      >
                        <Text style={styles.detailEdit}>
                          {this.state.fnameEdit ? "Save" : "Edit"}
                        </Text>
                      </TouchableOpacity>
                      {this.state.fnameEdit && (
                        <TouchableOpacity
                          style={styles.detailRight}
                          onPress={() => {
                            this.setState({ fnameEdit: false });
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
                        {this.state.lnameEdit ? (
                          <TextInput
                            style={styles.detailInput}
                            onChangeText={(text) =>
                              this.setState({ lname: text })
                            }
                            value={this.state.lname}
                          />
                        ) : (
                          <Text style={styles.detailData}>
                            {this.props?.currentUser?.user?.lastName}
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        style={styles.detailRight}
                        onPress={this.switchBtnsLastName}
                      >
                        <Text style={styles.detailEdit}>
                          {this.state.lnameEdit ? "Save" : "Edit"}
                        </Text>
                      </TouchableOpacity>
                      {this.state.lnameEdit && (
                        <TouchableOpacity
                          style={styles.detailRight}
                          onPress={() => {
                            this.setState({ lnameEdit: false });
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
                          {this.props?.currentUser?.user?.email}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.detailView}>
                      <View style={styles.detailLeft}>
                        <Text style={styles.detailTitle}>Phone</Text>
                        {this.state.phoneEdit ? (
                          <TextInput
                            style={styles.detailInput}
                            onChangeText={(text) =>
                              this.setState({ phone: text })
                            }
                            value={this.state.phone}
                          />
                        ) : (
                          <Text style={styles.detailData}>
                            {this.props?.currentUser?.user?.phone}
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        style={styles.detailRight}
                        onPress={this.switchBtnsPhone}
                      >
                        <Text style={styles.detailEdit}>
                          {this.state.phoneEdit ? "Save" : "Edit"}
                        </Text>
                      </TouchableOpacity>
                      {this.state.phoneEdit && (
                        <TouchableOpacity
                          style={styles.detailRight}
                          onPress={() => {
                            this.setState({ phoneEdit: false });
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
  }
}

const mapStateToProps = ({ auth, global, user }) => {
  return {
    user: auth,
    global,
    auth,
    currentUser: user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id, user) => {
      dispatch(updateProfile(id, user));
    },
    getUser: (id) => {
      dispatch(getUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
