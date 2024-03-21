import React from "react";
import { View, Text } from "react-native";
import styles from './messagecardStyle'
import { TouchableOpacity } from "react-native";
//import styless from './messagecardStyle'

import { formatDistance, parseISO } from "date-fns";
import  {tr} from 'date-fns/locale' //dil ayarlamak 

const MessageCard = ({ message, onBanane }) => {

    const formattedDate = formatDistance(parseISO(message.date), new Date(), { 
        addSuffix: true,
        //locale: tr,
     })
    
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                {/* <Text style={styles.date}>{message.date}</Text> */}
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
                    {!!message.dislike && ( //message.dislike true ise text gorunur
                        <View style={{marginRight : 3}}>
                             <Text style={styles.dislike_count_text}>{ message.dislike}</Text>
                        </View>
                    )}
                        <Text style={styles.dislike_text}>
                            Bana ne?
                        </Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageCard