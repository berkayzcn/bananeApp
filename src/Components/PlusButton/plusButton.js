import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './plusbuttonStyle'

const PlusButton = ({onPress, icon}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
    
            <Icon name={icon} color="white" size={45}/>
        </TouchableOpacity>
    )
}

export default PlusButton ;