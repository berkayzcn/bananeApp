import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: ""
    },

    logo : {
        height : Dimensions.get('window').height / 3,
        width : Dimensions.get('window').width * 0.9,
        resizeMode : 'contain',
        alignSelf : 'center',
        //margin : 4,
       // marginBottom : 1
    },

    logo_continer : {
        flex:1,
        justifyContent : 'center'
    },
    
    body_container: {
        flex : 1,
    },

    header : {
        //color : "#00897b",
        color : "#e0752d",
        //color : "white",
        margin : 5,
        fontSize : 150,

    },

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
      },



    

})