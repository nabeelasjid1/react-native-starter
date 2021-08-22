import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../Styles/Colors";
const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: "10%",
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
  },
  maincontainer: {
    marginTop: "45%",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  SectionStyleEdit: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderColor: Colors.cancel,
    height: 45,
    width: "70%",
    borderColor: "#44a9c1",
    marginBottom: "6%",
  },
  verificationText: {
    color: "#8B8B8B",
    fontSize: 14,
    fontWeight: "500",
    marginTop : 10 
  },
  OTPInputView: {
    height: heightScreen / 8,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  underlineStyleBase: {
    width: widthScreen / 10,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    marginRight: 4,
    color: "#4d4c70",
    backgroundColor: "white",
    fontSize: 24,
  },
  underlineStyleHighLighted: {
    borderColor: "#44a9c1",
    fontSize: 24,
  },
  buttonSignIn: {
    marginTop: 4,
    borderRadius: 50,
    backgroundColor: "#44a9c1",
    height: 45,
  },
  buttonWrapper: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5%",
  },
  gradientStyling: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  headerText: { fontSize: 30, marginBottom: "0.5%" },
  card: {
    backgroundColor: "white",
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
 
 
});
export default styles;
