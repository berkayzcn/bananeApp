import React from "react";
import { useState } from "react";
import { ImageBackground, SafeAreaView, View, Text } from "react-native";
import { Formik } from "formik";
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/MaterialIcons'
import autherrorMessage from '../../utils/errorMessages'

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import styles from './LoginStyle'

const initialFormValues = {
    usermail: '',
    password: '',
}


const LogIn = ({navigation}) => {
    const [looading, setLoading] = useState(false)

    function goSignUp () {
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


    return (
        <ImageBackground source={require('../../Assets/cr2.png')} style = {styles.backgroundImage}>

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