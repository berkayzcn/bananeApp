import React from "react";
import { useState } from "react";
import { ImageBackground, SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/MaterialIcons'
import autherrorMessage from '../../utils/errorMessages'

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import styles from './LoginStyle'
import Loading from "../../Components/Loading";

const initialFormValues = {
    usermail: '',
    password: '',
}


const LogIn = ({ navigation }) => {
    const [looading, setLoading] = useState(false)

    function goSignUp() {
        navigation.navigate('Sign')
    }

    async function handleFormSubmit(formvalues) { //buraya gelen formvalues initialformvalues degerlerinin doldurulmus hali olarak geliyor
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(
                formvalues.usermail,
                formvalues.password)
            console.log(formvalues)
        } catch (error) {
            console.log(error)
            showMessage({
                message: autherrorMessage(error.code), //error kodunu parameter olarak aldik
                type: 'info',
                //type : 'danger', gosterme tipini belirleyebiliyoruz
            });
            setLoading(false)
        }
    }

    if(looading){
            return <View style={styless.lottieContainer}>
                <Loading />
            </View>
    }

    return (
        <ImageBackground source={require('../../Assets/cr2.png')} style={styles.backgroundImage}>

            <SafeAreaView style={styles.body_container}>
                <Text style={styles.header}>bana ne!</Text>

                <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input
                                value={values.usermail}
                                girilenDeger={handleChange('usermail')}
                                placeHolder="Kullanici Adi Giriniz"
                            />

                            <Input
                                value={values.password}
                                girilenDeger={handleChange('password')}
                                placeHolder="Parola Giriniz"
                                isSecure={true}
                            />
                            <Button text='Giris Yap' theme="primary" onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
                <Button text='Kayit Ol' theme="secondary" onPress={goSignUp} />
            </SafeAreaView>
        </ImageBackground>
    )




}

export default LogIn;

const styless = StyleSheet.create({
    lottieContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1,


        // top: '50%',
        // left: '50%',
        //transform: [{ translateX: -50 }, { translateY: -50 }],
    },
})