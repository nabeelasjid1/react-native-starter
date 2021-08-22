import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import colors from "../Styles/Colors";
import Images from "../Styles/Images";
import { MainHomeNavigator } from "./MainHomeNavigator";
import { FontAwesome } from "@expo/vector-icons";
const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderBottomWidth: 2,
    // borderBottomColor: colors.White,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
    backgroundColor: "white",
    marginTop: 4,
  },
  tabBarIconFocused: {
    tintColor: colors.appHeaderColor,
  },
  tabBarIconUnFocused: {
    tintColor: "grey",
  },
  headerContainer: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  headerImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
});

export const BottomNavigator = createBottomTabNavigator(
  {
    Home: { screen: MainHomeNavigator },
    MyReviews: {
      screen: MainHomeNavigator,
      defaultNavigationOptions: {
        tabBarLabel: "My Reviews",
      },
    },
    TripInfo: {
      screen: MainHomeNavigator,
      defaultNavigationOptions: {
        tabBarLabel: "My Reviews",
      },
    },
    MyBusiness: {
      screen: MainHomeNavigator,
      defaultNavigationOptions: {
        tabBarLabel: "My Business",
      },
    },

    Drawer: {
      screen: () => null,
      navigationOptions: (props) => ({
        tabBarLabel: " ",
        tabBarIcon: (
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{ marginTop: 15 }}
          >
            {/* <FontAwesome name="bars" size={28} color="grey" /> */}
            <Image
              source={Images.fullDrawerMenu}
              style={{ height: 20, width: 25, tintColor: "grey" }}
            />
          </TouchableOpacity>
        ),
        tabBarOnPress: () => {
          props.navigation.toggleDrawer();
        },
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case "Home":
            iconSource = Images.home;
            break;
          case "MyReviews":
            iconSource = Images.review;
            break;
          case "MyBusiness":
            iconSource = Images.myBusiness;
            break;
          case "Profile":
            iconSource = Images.profile;
            break;
          default:
            iconSource = Images.home;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              // style={[styles.tabBarIcon, focused ? styles.tabBarIconFocused : styles.tabBarIconUnFocused ]}

              style={[
                styles.tabBarIcon,
                iconSource === Images.myBusiness && {
                  width: 25,
                  height: 25,
                  marginTop: 0,
                },
                focused ? styles.tabBarIconFocused : styles.tabBarIconUnFocused,
              ]}
            />
          </View>
        );
      },
    }),
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: colors.White,
        borderTopWidth: 5,
        borderTopColor: "#fff",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
        shadowColor: "gray",
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  }
);
