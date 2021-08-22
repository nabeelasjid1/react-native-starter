import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  topHeader :{
    flexDirection : 'row' , 
  },
  headerImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("10%"),
  },
  headerImage: {
    width: "60%",
    height: 90,
  },
  textInput: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: hp("5%"),
  },
  errorMessageStyle: {
    color: "red",
    width: "100%",
    paddingHorizontal: 20,
  },
  bottomContainer: {
    marginTop: 20,
    // marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotRememberContainer: {
    paddingHorizontal: "8%",
    marginTop : '2%',
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioTextStyling: {
    color: "#aeb6b8",
    fontSize: 15,
  },
  signUpAccount: {
    fontSize: 14,
    textAlign: "center",
    color: "#7aabfe",
    paddingHorizontal: 5,
  },
  forgotPasswordBtn: {
    fontSize: 14,
    textAlign: "center",
    color: "#aeb6b8",
    paddingLeft : 5,

  },

  signUpAccoutText: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 5,
    color: "#aeb6b8",
  },
  checkBoxContainer: {
    width: "95%",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
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
  mainWrapper: {
    flexDirection: "column",
    justifyContent: "center",
  
    marginTop: "18%",
  },
  headerText: { fontSize: 30, marginBottom: "2%" , marginTop : -30 , textAlign : 'center' },
  subText: { fontSize: 14, color: "#aeb6b8", marginBottom: "10%"  , textAlign: 'center'},
  socialLinkText: { fontSize: 14, color: "#aeb6b8" , textAlign:'center' },
  socialButtonWrapper: {
    width: "100%",
    paddingHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "10%",
  },
  googleWrapper: {
    backgroundColor: "#e4735b",
    width: "48%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  facebookWrapper: {
    flexDirection : 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#475992",
    
    paddingTop:11,
    paddingBottom : 11,
    width: "60%",
    marginLeft : 'auto',
    marginRight : 'auto',
    borderRadius: 5,
    marginTop : 5,
    marginBottom : 5
  },
  facebookText :{
    color : 'white',
    fontSize : 18, 
    fontWeight : '500',
    marginLeft : 5
  },
  appleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding:10,
    width: "48%",
    marginLeft : 'auto',
    marginRight : 'auto',
    borderRadius: 5,
    marginBottom : 5
  },
  optionText: { fontSize: 14, color: "#aeb6b8", textAlign : 'center' },
  radioButton: { flexDirection: "row", alignItems: "center" },
});
export default styles;
