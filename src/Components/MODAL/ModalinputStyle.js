import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding : 10,
        //margin : 10,
        marginHorizontal : 10,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        height : deviceSize.height /3,
    },

    modal: {
        justifyContent : 'flex-end',//en asagi dayadik
        margin : 0
    },

    inputContainer : {
        flex : 1, //gonderin asagi itilmesi icin text input flex 1 verdik
    }
})