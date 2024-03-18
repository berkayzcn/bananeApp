import React from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";

import inputstyle from "./inputstyle";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({placeHolder, value, girilenDeger, iconName, isSecure}) => {
    return (
     <View style={inputstyle.container}>
        <TextInput 
        autoCapitalize="none" //buyuk harfle baslamayi kapayir
        style={inputstyle.input} 
        placeholder={placeHolder} 
        onChangeText={girilenDeger} 
        value={value}
        secureTextEntry={isSecure}
        />
        <Icon name = {iconName} size={24}/>
     </View>
    )
}

export default Input;