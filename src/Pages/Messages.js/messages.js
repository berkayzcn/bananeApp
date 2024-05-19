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
import { set } from "date-fns/fp/set";

const Messages = () => {
    const [ModalVisible, setModalVisible] = useState(false)

    const [contentList, setContentList] = useState([])

    const [liked, setLiked] = useState(false);
    const currentUser = auth().currentUser;


    function toggleModal() {
        setModalVisible(!ModalVisible)
    }

    useEffect(() => { //veri cekme
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = parseContentData(contentData || {})
                setContentList(parsedData)
            })
    }, [])

    function handleSendContent(content) { //icerik gondermek istedigimiz zaman
        toggleModal();
        sendContent(content)
    }

    function sendContent(content) { //veri yukleme
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
            dislike: 0,
        };
        database().ref('messages/').push(contentObject);
    }



    const checkLikeStatus = () => {

        database()
            .ref('likes/' + currentUser.uid)
            .once('value')
            .then(snapshot => {
                if (snapshot.exists()) {
                    setLiked(true);
                }
            })
            .catch(error => {
                console.error('Error getting like status:', error);
            });
    };

    const handleLike = () => {
        if (currentUser) {

            database()
                .ref('likes/' + currentUser.uid)
                .set(true)
                .then(() => {
                    setLiked(true);
                })
                .catch(error => {
                    console.error('Error setting like status:', error);
                });
        }
    };

    function handleBanane(item) {
        useEffect(() => {
            if (currentUser) {
                checkLikeStatus();
            }
        }, [currentUser])


        database()
            .ref(`messages/${item.id}/`)

            .update({ dislike: item.dislike + 1 })
            .then(() => {

                setLiked(true)

            })
    }

    // function handleBanane(item) {

    //     database()
    //         .ref(`messages/${item.id}/`)
    //         .update({ dislike: item.dislike + 1 })
    // }



    const renderContent = ({ item }) => (
        <MessageCard message={item} onBanane={() => handleBanane(item)} />
    );



    return (
        <ImageBackground source={require('../../Assets/cr2.png')} style={styless.backgroundImage}>
            <SafeAreaView style={styless.container}>
                {
                    contentList.length ?
                        <FlatList
                            data={contentList}

                            renderItem={renderContent}
                        />
                        : null
                }

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