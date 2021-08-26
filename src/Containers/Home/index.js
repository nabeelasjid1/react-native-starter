import React from "react";
import _ from "lodash";
import Toast from "react-native-simple-toast";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { View, Text, SafeAreaView, Image } from "react-native";
import { ActivityIndicator, Provider } from "react-native-paper";
import styles from "./Styles";
import Images from "../../Styles/Images";
import Styles from "../../Styles/Styles";
import { ScrollView } from "react-native-gesture-handler";
import { Keys } from "../../lib/keys";
import { BlueColor } from "../../../config";

const Home = (props) => {
  return props.global?.loading ? (
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
        <Provider>
          <ScrollView>
            {/* these lines are just for references */}
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Home with scroll view</Text>
            </View>
          </ScrollView>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default Home;
