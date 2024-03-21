import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, ImageBackground, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

import PlusButton from "../../Components/PlusButton";
import ModelInput from "../../Components/MODAL/Modalinput";
import MessageCard from "../../Components/MessageCard";
import parseContentData from "../../utils/parseContentData";

import styless from './messagesStyle'

const Messages = () => {
    const [ModalVisible, setModalVisible] = useState(false)

    const[contentList, setContentList] = useState([])
    
    function toggleModal() {
        setModalVisible(!ModalVisible) 
    }

    useEffect(()=> { //veri cekme
        database()
        .ref('messages/')
        .on('value', snapshot => {
            const contentData = snapshot.val();
          
            //eger icinde hicbir veri yoksa hata almamk icin
            // if(!contentData){
            //     return
            // }

            const parsedData = parseContentData(contentData || {})
            setContentList(parsedData)
        })
    },[])

    function handleSendContent(content) { //icerik gondermek istedigimiz zaman
        toggleModal();
        sendContent(content)
    }

    function sendContent(content){ //veri yukleme
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
            dislike : 0,
        };
        database().ref('messages/').push(contentObject);
    }

    function handleBanane(item){
        database()
        .ref(`messages/${item.id}/`)
        .update({dislike: item.dislike + 1})
    }

    const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={()=> handleBanane(item)}/>
    );

    return(
        <ImageBackground source={require('../../Assets/cr2.png')} style = {styless.backgroundImage}>
            <SafeAreaView style={styless.container}>
            
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />
            
            <View style={{ flex: 1 }}>
                    <PlusButton icon="plus" onPress={toggleModal} />
                    <ModelInput
                        visible={ModalVisible}
                        onClose={toggleModal}
                        onSend={handleSendContent}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )

}

export default Messages;