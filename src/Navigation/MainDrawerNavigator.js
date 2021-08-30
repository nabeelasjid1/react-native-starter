import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Text, View, Image, SafeAreaView, Dimensions } from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import images from "../Styles/Images";
import { BlueColor } from "../../config";
import { logout } from "../redux/reducers/auth";

//Import Navigations
import { BottomNavigator } from "./BottomNavigator";

import { ContactNavigator } from "./ContactNavigator";

const customeDrawerComponent = (props) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ marginTop: "15%", marginLeft: "5%" }}
        onPress={() => props.navigation.toggleDrawer()}
      >
        <Image source={images.close} style={{ width: 22, height: 22 }} />
      </TouchableOpacity>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        {token ? (
          <View
            style={{
              width: "100%",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Image style={{ height: 100, width: 100 }} source={images.avatar} />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
                {user?.name}
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate("Profile")}
              >
                <Text style={{ color: BlueColor.primaryColor }}>
                  View Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      <ScrollView>
        <DrawerItems {...props} />
        {/* backgroundColor : '#f4f4f4' */}
        {token ? (
          <TouchableOpacity
            style={{ padding: 15, flexDirection: "row" }}
            onPress={() => {
              dispatch(logout());
            }}
          >
            <Image source={images.logout} style={{ width: 20, height: 20 }} />
            <Text
              style={{ color: "grey", fontWeight: "bold", paddingLeft: 35 }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ padding: 15, flexDirection: "row" }}
            onPress={() => props.navigation.navigate("login")}
          >
            <FontAwesome name="sign-in" size={24} color="grey" />
            <Text
              style={{ color: "grey", fontWeight: "bold", paddingLeft: 35 }}
            >
              Login
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export const MainDrawerNavigator = createDrawerNavigator(
  {
    HomeDrawer: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={24} color={tintColor} />
        ),
      },
    },
    ContactUs: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="at" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: customeDrawerComponent,
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#b9dee5",
      inactiveTintColor: "grey",
      inactiveBackgroundColor: "transparent",
    },
  }
);
