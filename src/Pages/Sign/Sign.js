import React from "react";
import { Text, View, SafeAreaView, ImageBackground, Alert } from "react-native";
import { Formik } from "formik";
import autherrorMessage from '../../utils/errorMessages'
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

    //1
     const [email, setEmail] = useState('');
     const [password, setPassord] = useState('');

    //2
    const validateEmail = (email) => { //mail formatinin kontrol etmek icin
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };


    function handleLogin() {
        navigation.goBack();
    }

    async function handleFormSubmit(formvalues) { 




        if (formvalues.password != formvalues.repassword) {
            showMessage({
                message: "Sifreler uyusmuyor",
                type: 'danger'
            })
        }

        try {
            if (validateEmail(formvalues.usermail)) {
                await auth().createUserWithEmailAndPassword(
                    formvalues.usermail,
                    formvalues.password
                );

                showMessage({
                    message: "Kullanici Olusturuldu",
                    type: 'success',
                });

            }
            else {
                Alert.alert('regex kontrol')
            }


        } catch (error) {
            showMessage({
                message: autherrorMessage(error.code), 
                type: 'danger',
            });

            setLoading(false)
        }

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