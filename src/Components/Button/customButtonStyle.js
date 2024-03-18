
import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({  
    container: {
        //backgroundColor : '#00897b',  
        padding: 8,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
        
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
})


export default {

    primary: StyleSheet.create({ 
        ...base_style, 
        container: { 
            ...base_style.container,  
            //backgroundColor: '#00897b',
            backgroundColor: '#e0752d',
        },

        title: {
            ...base_style.title,
            color: 'white',
        },
    }),


    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: '#00897b',
            borderColor: '#e0752d',
            borderWidth: 1,
        },


        title: {
            ...base_style.title,
            color: '#e0752d',
            //color: '#00897b',
        
        },
    }),
};

