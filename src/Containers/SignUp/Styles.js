import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../Styles/Colors";
const styles = StyleSheet.create({
  headerImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
    width: "100%",
    marginTop: hp("15%"),
  },
  headerImage: {
    width: "100%",
    height: 140,
  },
  textInput: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textInputWrapper: {
    paddingHorizontal: "8%",
    marginTop: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  SectionStyleEdit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.cancel,
    height: 45,
    borderRadius: 8,
    width: "48%",
    borderColor: "#44a9c1",
    marginBottom: "1.5%",
  },
  errorMessageStyle: {
    color: "red",
    paddingLeft: 35,
    paddingRight: 10,

  },
  bottomContainer: {
    marginTop: 10,
    // marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpAccoutText: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 5,
    color: "#aeb6b8",
  },
  signUpAccount: {
    fontSize: 14,
    textAlign: "center",
    color: "#7aabfe",
    paddingHorizontal: 5,
  },
  checkBoxContainer: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
    alignItems: "center",
    marginTop: hp("4%"),
  },
  checkBoxWrapper: {
    width: "88%",
    flexDirection: "row",
    margin: 18,
    marginLeft: -10,
    justifyContent: "space-between",
  },
  forgotPassword: {
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
  },
  buttonSignIn: {
    marginTop: 4,
    borderRadius: 50,
    backgroundColor: "#44a9c1",
  },
  buttonWrapper: {
    width: "86%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  termCondition: {
    color: Colors.grey,
  },
  termConditionUnderline: {
    color: Colors.grey,
  },
  radioTextStyling: {
    color: "#aeb6b8",
    fontSize: 12,
    marginLeft: 10,
  },
  checkGenderContainer: {
    marginBottom: hp("2%"),
    marginTop: hp("0.5%"),
    flexDirection: "row",
    alignItems:'center',
    paddingLeft: 5,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  headerText: { fontSize: 30, marginBottom: "0.5%" },
  subText: { fontSize: 14, color: "#aeb6b8", marginBottom: "3%" },
  inputStyle: { flex: 1, marginLeft: 15 },
  checkBoxStyle: {
    width: 20,
    height: 20
  }
});
export default styles;
