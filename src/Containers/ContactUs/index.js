import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from "react-native";
import { styles } from "./Styles";
import Button from "../../Components/Button";
import { Provider, TextInput } from "react-native-paper";
import Styles from "../../Styles/Styles";
import { updateProfile } from "../../redux/users/actions";
import images from "../../Styles/Images";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlueColor } from "../../../config/color";

class Profile extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={Styles.headerStyle} />
        <SafeAreaView style={Styles.safeViewStyle}>
          <Provider>
            <ScrollView>
              <View style={styles.screen}>
                <View style={styles.topTitle}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ marginLeft: 20, marginTop: 24, zIndex: 3 }}
                    onPress={() => this.props.navigation.navigate("Home")}
                  >
                    <FontAwesome name="chevron-left" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.topTitleText}>Contact Support</Text>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.contentTitle}>
                    In case your account get stucked:
                  </Text>
                  <Text style={styles.contentSub}>
                    EUShare is a health safety precautions based company that
                    allows you to get information about businesses on the bases
                    of the business takes safety measures regarding health. In
                    case you violate our terms and conditions, your account or
                    business might get banned from login. In such case contact
                    EUShare support service. For more details check EUShare's{" "}
                    <Text
                      onPress={() =>
                        Linking.openURL("https://eushare.app/privacy-policy/")
                      }
                      style={{ color: BlueColor.primaryColor }}
                    >
                      Terms & conditions.
                    </Text>{" "}
                  </Text>

                  <Text style={styles.contentTitle}>Contact Details:</Text>
                  <View style={styles.row}>
                    <Text style={styles.contentSub}>Email:</Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        Linking.openURL("mailto:admin@eushare.app");
                      }}
                    >
                      <Text
                        style={{
                          ...styles.contentSub,
                          color: BlueColor.primaryColor,
                        }}
                      >
                        admin@eushare.app
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.contentSub}>Phone:</Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        Linking.openURL("tel:+01-123-456-78");
                      }}
                    >
                      <Text
                        style={{
                          ...styles.contentSub,
                          color: BlueColor.primaryColor,
                        }}
                      >
                        +01-123-456-78
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Provider>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = ({ auth, global, user }) => {
  return {
    auth: auth,
    global,
    user: user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id, user) => {
      dispatch(updateProfile(id, user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
