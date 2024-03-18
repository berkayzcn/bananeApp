import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './customButtonStyle';

const Button = ({ text, onPress, loading, icon, theme = "primary" }) => {
    // !!!!!! BURDA THEM = 'PRIMARY' I DEFAULT OLARAK VERDIK.BUTON U KULLANDIGIMIZ YERDE OLURDA THEME VERMEZSEKTANIMLAMAZSAK YANI, HATA ALMAMAK ICIN DEFAULT DEGER VERMIS OLDUK
    return (
        <TouchableOpacity
            style={styles[theme].container}
            onPress={onPress}
            disabled={loading} 
        >
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <View style={styles[theme].button_container}>
                    <Text style={styles[theme].title}>{text}</Text>
                </View>
            )
            }
        </TouchableOpacity>
    );
};

export default Button;