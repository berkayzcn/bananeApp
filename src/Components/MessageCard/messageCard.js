import React from "react";
import { View, Text } from "react-native";
import styles from './messagecardStyle'
import { TouchableOpacity } from "react-native";
//import styless from './messagecardStyle'

import { formatDistance, parseISO } from "date-fns";
import { tr } from 'date-fns/locale' //dil ayarlamak 
import { useNavigation } from "@react-navigation/native";

const MessageCard = ({ message, onBanane }) => {
    console.log("message", message)
    const formattedDate = message?.date
        ? formatDistance(parseISO(message?.date), new Date(), {
            addSuffix: true,
            //locale: tr,
        })
        : ""

    const navigation = useNavigation(); //navigation islemini yapabilmek icin

    return (
        <View style={styles.container}>

            <View style={styles.inner_container}>
                <Text style={styles.user}>{message?.username}</Text>
                {/* <Text style={styles.date}>{message.date}</Text> */}
                <Text style={styles.date}>{formattedDate}</Text>
            </View>

            {/* <TouchableOpacity onPress={()=> navigation.navigate("MessageDetail", message.id)}> */}
            {/* <TouchableOpacity onPress={()=> navigation.navigate("MessageDetail", message)}>
                <Text style={styles.title}>{message.text.substring(0, 14) + '...'}</Text>
            </TouchableOpacity> */}
            {/* cekilen verideki mesajin istedighimiz kadar yerini gosterme */}

            <TouchableOpacity onPress={() => navigation.navigate("MessageDetail", message)}>
                
                {/* <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{message?.text}</Text>  */}


                {/* navigation.navigate('HedefEkran', { param1: 'deger1', param2: 'deger2' }) */}
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{message?.text}</Text> 
                {/* <Text style={styles.title}>{message?.text?.substring(0, 14) + '...'}</Text> */}
            </TouchableOpacity>



            <View style={styles.footer}>
                <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
                 
                        <View style={{ marginRight: 3 }}>
                            <Text style={styles.dislike_count_text}>{JSON.parse(message?.dislike)?.length || 0}</Text>
                        </View>
                    
                    <Text style={styles.dislike_text}>
                        Bana ne?
                    </Text>
                    

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageCard