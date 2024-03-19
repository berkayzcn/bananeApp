import React from "react";
import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import { Formik } from "formik";
import autherrorMessage from '../../errorMessages'
import { showMessage } from "react-native-flash-message";
import { useState } from "react";
import auth from '@react-native-firebase/auth'

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import styles from './SignStyle'

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const BanSign = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    
    function handleLogin() {
        navigation.goBack();
    }

    async function handleFormSubmit(formvalues) { //buraya gelen formvalues initialformvalues degerlerinin doldurulmus hali olarak geliyor

        if (formvalues.password != formvalues.repassword) {
            showMessage({
                message: "Sifreler uyusmuyor",
                type: 'danger'
            })
        }

        try {

            await auth().createUserWithEmailAndPassword(
                formvalues.usermail,
                formvalues.password
            );

            showMessage({
                message: "Kullanici Olusturuldu",
                type: 'success',
            });

        } catch (error) {
            showMessage({
                message: autherrorMessage(error.code), //error kodunu parameter olarak aldik
                type: 'danger',
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

                            <Input
                                value={values.repassword}
                                girilenDeger={handleChange('repassword')}
                                placeHolder="Parola Giriniz"
                            />

                            <Button text='Kayit Ol' theme="primary" onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
                <Button text='Geri' theme="primary" onPress={handleLogin} />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default BanSign;