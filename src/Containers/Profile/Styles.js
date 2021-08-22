import { StyleSheet, Dimensions } from "react-native";
import {BlueColor} from '../../../config/color'

import Colors from "../../Styles/Colors";
import { color } from "react-native-reanimated";


export const styles = StyleSheet.create({

    screen : {
        flex : 1 , 
        paddingTop : 10,
    },
    line : {
        marginTop  : -5 ,
        marginBottom : 10 ,
        width : '100%',
        height : 1 , 
        backgroundColor : 'grey'
    },
    topTitle :{
        flexDirection : 'row' ,
        justifyContent : 'flex-start',
        textAlign : 'center' ,  

        fontSize : 24 , 
        fontWeight : 'bold',
        marginTop : 20,
        marginBottom : 40 ,

    },
    topTitleText :{
        width : '100%',
        textAlign : 'center' ,  
        marginLeft : -35,
        fontSize : 30 , 

        marginTop : 15,
        marginBottom : 40 ,
        zIndex : -10

    },
    view : {
        flexDirection : 'row',
        alignItems : 'center',
        padding: 10, 
        margin : 10 ,
        backgroundColor : '#ededed' , 
        borderRadius : 20 , 
        shadowColor: "#aaa",
        shadowOffset: {
            width: 0,
            height: 1,
            },
        shadowOpacity: 0.22,
        shadowRadius: 2,
        elevation: 4,
    }, 
    mainNameView : {
    
        alignItems : 'center',
        marginBottom : 30
    },
    mainName:{
        fontSize : 28 , 
        fontWeight : 'bold',
        paddingLeft : 20 , 
        paddingRight : 20 , 
        textAlign : 'center'
    },
    imageView : {
        alignItems : 'center',
        marginVertical : 20
    },
    imageAvatar : {
        width : 170,
        height : 170,
        borderRadius :85,
        borderWidth : 3 , 
        borderColor : '#fff',
  
    },
    buttonWrapper: {
        marginVertical: 10,
        
      },
      buttonSignIn: {
        marginTop: 4,
        
        borderRadius: 50,
        backgroundColor: "#44a9c1",
      },
    detailView : {
        width : '100%',
        paddingLeft: 30,
        paddingRight: 30,
        marginVertical : 15 ,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    detailTitle : {
        fontSize : 16,
        color : '#b5b5b5',

    },
    detailData : {
        fontSize : 22 , 
        
    },

    detailInput : {
        
        width : Dimensions.get('window').width /1.5,
        backgroundColor : '#fff',
        height : 40 ,
        padding:  0,
        margin : 0 ,

    },  
    detailEdit : {
        fontWeight : 'bold',
        color : '#169eba'
    },


    image : {
        height : 40,
        width : 40,
        
    },
    data : {
        paddingLeft : 30,
        fontSize : 18,
        fontWeight : 'bold'

    },
    loggedBtnView : {
        flex : 1 , 
        justifyContent: 'center',
       padding : 20
    },
    logBtn : {
        backgroundColor : BlueColor.primaryColor  , 
        padding : 15,
        marginVertical : 10 ,
        borderRadius : 20,
        width : 150

    }
})