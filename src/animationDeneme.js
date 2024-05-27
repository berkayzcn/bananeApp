import React from "react";
import Loading from "./Components/Loading";
import { StyleSheet, Text, View } from "react-native";

const Animasyonlar = () => {
    
    return (
        <View style={styless.container}>
            <Loading />
            
        </View>
    )

}

export default Animasyonlar;

const styless = StyleSheet.create({
    container : {
        flex : 1
    },

    
})



