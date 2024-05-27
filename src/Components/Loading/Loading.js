import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function Loading() {
    
    return (

    <View>
        <LottieView 
        style = {{
            width : 400,
            height : 800,
          
        }}
        source={require('../../Asstes/loading.json')} autoPlay 
        />
        {/* autoplay bu comp render edildigi anda calistirmak icin*/}
    </View>
    )
}


export default Loading;

