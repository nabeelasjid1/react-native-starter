import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../Styles/Colors";
import { BlueColor } from "../../../config";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.appHeaderColor,
  },
  resturantsContainer: {
    marginTop : 40 ,
    backgroundColor: "white",
    flex : 1,
    alignItems : 'center'
  },
  mainText: {
    marginLeft: 20,
    color: "#4E4E4E",
    fontSize: 17,
    marginBottom: 20,
    fontWeight: "600",
  },
  mainSearchWrapper: {
    // backgroundColor: Colors.appHeaderColor,
    
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent: 'center',
    
    marginTop: "10%",
    
    // height: 150,

    paddingLeft: 5,
    paddingRight: 5,
    // backgroundColor: "#fff",
    // // flexDirection: 'row',
    // shadowColor: "#aaa",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2,
    // elevation: 4,
  },
  searchContainer: {
    width: "60%",
  },
  SectionStyle: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 10 ,
    backgroundColor: "white",
    borderWidth: 1,
    // borderColor: "#cacaca",
    borderColor: "grey",
   
    borderRadius: 8,
    width: "95%",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  SectionStyleLess: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 10 ,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cacaca",
   
    borderRadius: 8,
    width: "95%",
    opacity : 0.4
  },
  SectionStyleMarker: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical : 10 ,
    marginBottom : 15 ,
    backgroundColor: "white",
    borderWidth: 1,
    // borderColor: "#cacaca",
    borderColor: "grey",


    borderRadius: 8,
    width: "95%",
  },
  borderSeperator: {
    // margin: 5,
    borderRightWidth: 0.7,
    borderRightColor: Colors.cancel,
    borderBottomRightRadius: 1,
    height: "100%",
  },
  textInputWrapper: {
    flex: 1,
    color: '#5d5d5d',
    // color: 'black',
    // width: "0%",
    fontSize : 16 ,
    padding : 9,
  },
  textInputWrapperCity: {
    flex: 0.5,
    // width: "40%",
    borderLeftWidth: 1,
    borderLeftColor: '#aaa',
    paddingHorizontal: 5
  },
  textInputWrapper1: {
    width: 70,
    marginLeft: 15,
  },
  searchIconWrapper: {
    justifyContent : 'center' , 
    alignItems : 'center',
    height: 40,
    width: 50,
    backgroundColor: "#1fa7bf",
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: -5,
  },
  inputIcon: {
  
    height: 20,
    width: 20,
    resizeMode: "stretch",
    alignItems: "center",
    tintColor: "white",
    backgroundColor: "#1fa7bf",
  },
  searchIcon: {
    marginLeft : 10 ,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    tintColor: BlueColor.primaryColor,
  },
  markerIcon: {
    marginLeft : 10 ,
    marginTop : 10,
    height: 30,
    width: 30,
    resizeMode : 'contain',
    tintColor: "grey",
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  cityContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },

  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#707070",
    textAlign: "left",
    width: "99%",
    padding: 6,
    flexDirection: "row",
    fontSize: 13
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 6,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    // elevation:3,
    paddingRight: 25,
    height:32,
    marginRight: 10,
    marginBottom: 2,
    // shadowOpacity: 1.0,
    // shadowOffset: {
    //   width: 1,
    //   height: 1
    // },
    borderLeftWidth:0.5,
    borderLeftColor:'#bbb',
    // shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    // shadowColor: "#d3d3d3",
    // borderRadius: 5,
    flexDirection: "row"
  },
  appPoints : {
    overflow : 'hidden',
    width : '90%',
    flexDirection : 'row', 
    alignItems : 'center' , 
    paddingLeft:  20,
    paddingRight:  20,
    paddingTop:  15,
    paddingBottom:  15,
    backgroundColor: "#fff",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    borderRadius : 20 ,
    // borderBottomWidth : 1 , 
    // borderBottomColor : '#a3a3a3'
    // elevation: 5,
    // marginVertical : 10 
  },
  appPointLeft : {
    height : 50 , 
    width : 50 , 
    borderRadius : 25 , 
    borderWidth : 3 , 
   
    alignItems : 'center' , 
    justifyContent : 'center'
  },
  appPointText : {
    fontSize : 20 , 
    color : '#666666',

    fontWeight : 'bold'
  },
  appPointTextTitle : {
    fontSize : 20 , 
    color : '#666666',
    fontWeight : '400'
  },
  appPointRight : {
    paddingLeft : 25
  },
});
export default styles;
