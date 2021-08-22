import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: "1.5%",
  },
  textInputWrapper: {
    flex: 1,
    marginLeft: 15,
    color: "#333"
  },
  SectionStyleEdit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: Colors.cancel,
    height: 53,
    borderRadius: 8,
    width: "89%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    height: 45,
    borderRadius: 50,
    width: "95%",

    borderColor: "#44a9c1",
  },
  SectionStyle1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: Colors.cancel,
    height: 40,
    borderRadius: 8,
    width: "95%",
  },
  inputIcon: {
    padding: 10,
    margin: 5,
    marginRight: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  inputSearchIcon: {
    // padding: 10,
    // margin: 5,
    height: 40,
    width: 40,
    resizeMode: "stretch",
    alignItems: "center",
    tintColor: Colors.black,
    backgroundColor: Colors.appHeaderColor,
  },
  inputSearchIcon1: {
    // padding: 10,
    // margin: 5,
    height: 30,
    width: 30,
    resizeMode: "stretch",
    alignItems: "center",
    tintColor: Colors.black,
    backgroundColor: Colors.White,
  },
  borderSeperator: {
    margin: 5,
    borderRightWidth: 0.5,
    borderRightColor: Colors.cancel,
    borderBottomRightRadius: 1,
    height: "100%",
  },
});
export default styles;
