import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageDetail = ({route}) => {

    const data = route.params;
    console.log("data", data)

    return(
        <SafeAreaView style={style.container}>

            <Text>{data}</Text>
            {/* <Text>asdfasdfasfd</Text> */}
        </SafeAreaView>
        
        
    )
}


export default MessageDetail;

const style = StyleSheet.create({
    container : {
        flex : 1
    }
})