import React from "react";
import { Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, TouchableOpacity } from "react-native";
import { StyleSheet, Dimensions } from "react-native";

import database from '@react-native-firebase/database'

import { useSelector } from "react-redux";
import Buton from "../../Components/Button";
import AuthName from '@react-native-firebase/auth'
import { useState } from "react";

import ImagePicker from "react-native-image-crop-picker";



const Profile = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [width, setWidth] = useState(5);
    const [height, setHeight] = useState(5);

    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width,
            height,
            cropping: true,
        })
            .then((image) => {
                setSelectedImage(image.path);  //kirpma ekranin kirpilmis resmin yolunu yani pathini selectedImage de yakalabiliyroz
                setHeight(height);
                setWidth(width);

                console.log(image);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCameraPicker = () => {
        ImagePicker.openCamera({
            width,
            height,
            cropping: true,
        })
            .then((image) => {
                setSelectedImage(image.path);
                setHeight(height);
                setWidth(width);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const _openalert = () => {
        Alert.alert('Picker', 'Choose one',

            [{
                text: 'Galeriyi ac',
                onPress: handleImagePicker
            },

            {
                text: 'Kamerayi ac',
                onPress: () => { handleCameraPicker }
            },

            ]
        )
    }



    const ImgComp = () => {
        if (selectedImage)
            return <Image source={{ uri: selectedImage }} style={styles.Image} />

        else
            return <Image style={styles.Image} source={require('../../Assets/cr2.png')} />

    }


    const auth = AuthName()

    const currentUserName = AuthName().currentUser.email

    const contentObject = {
        username: currentUserName.split('@')[0]
    }

    function goster() {

        console.log(contentObject.username)
    }


    return (
        <ImageBackground source={require('../../Assets/cr2.png')} style={styles.backgroundImage}>

            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={_openalert}>
                            <ImgComp />
                            {/* <Image source={require('../../Assets/cr2.png')} style={styles.Image} />  */}
                        </TouchableOpacity>

                        <View style={styles.userContainer}>
                            <Text style={styles.username}>{contentObject.username}</Text>
                        </View>

                    </View>

                    <View style={styles.icContainer}>

                        <View style={styles.postContainer}>
                            <Text style={styles.darlama}>Dert sayisi</Text>
                            <Text style={styles.darlamaSayisi}>12</Text>
                            <Buton style={styles.butn} text={"     Profili Duzenle     "} theme="primary" onPress={goster} />
                            {/* <Button title="tikla" onPress={goster}/>  */}
                        </View>

                        <View>
                        </View>


                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>

    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        borderColor: 'darkblue',
        borderRadius: 28,
        margin: 5,
        borderWidth: 1,
        backgroundColor: "white",

    },

    darlama: {
        fontSize: 20,
        //margin : 4
    },

    darlamaSayisi: {
        fontSize: 25,
        fontWeight: '600'
    },

    butn: {


    },
    username: {
        fontSize: 18,
        marginTop: 9,
        fontWeight: '500',
        paddingLeft: '7',
        //backgroundColor: 'blue',
        //justifyContent : 'center',
        //alignItems : 'center',
        //alignContent : 'center',

    },

    userContainer: {
        //justifyContent : 'center',
        alignItems: 'center'
    },
    icContainer: {
        flex: 1,
        padding: 10,
        //justifyContent : 'space-evenly'
        //alignItems : ''
    },

    imageContainer: {
        margin: 10,
        // width : 4,
        // height : 5

    },


    postContainer: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Image: {
        width: 90,
        height: 90,
        borderRadius: 40
    },

    backgroundImage: {
        flex: 1,
    },

    logo: {
        //height: Dimensions.get('window').height / 1,
        //width: Dimensions.get('window').width / 1,
        resizeMode: 'contain',
        //margin : 4,
        //marginBottom : 1,
        // backgroundColor : 'blue',
        width: 80,
        height: 90
    },
})


// userContainer: {
//     margin: 10
// },
