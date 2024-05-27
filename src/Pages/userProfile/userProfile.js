import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Buton from "../../Components/Button";
import firestore from '@react-native-firebase/database'

const UserProfile = ({ route, navigation }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUserData = async (username) => {
        try {
            const userCollection = await firestore()
                .collection('messages')
                .where('username', '==', username)
                .get();

            const userData = userCollection.docs.map(doc => doc.data());
            setData(userData);
            setLoading(false);
            
        } catch (error) {
            console.error("Error fetching user data: ", error);
            setLoading(false);
        }
    };

    const gelendata = route.params;

    useEffect(() => {
        // Örnek kullanıcı adı
        const username = gelendata.username;
        fetchUserData(username);
    }, [])

    return (
        <ImageBackground source={require('../../Assets/cr2.png')} style={styles.backgroundImage}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {/* <TouchableOpacity onPress={_openalert}> */}
                        <TouchableOpacity>
                            <Image source={require('../../Assets/cr2.png')} style={styles.Image} />
                        </TouchableOpacity>

                        <View style={styles.userContainer}>
                            {/* <Text style={styles.username}>{contentObject.username}</Text> */}
                            {/* <Text style={styles.username}>userName</Text> */}
                            <Text style={styles.username}>{gelendata.username}</Text>
                        </View>

                    </View>

                    <View style={styles.icContainer}>

                        <View style={styles.postContainer}>
                            <Text style={styles.darlama}>Dert sayisi</Text>
                            <Text style={styles.darlamaSayisi}>12</Text>
                            <Buton style={styles.butn} text={"     Darla     "} theme="primary" />
                            {/* <Buton style={styles.butn} text={"     Darla     "} theme="primary" onPress={goster} /> */}
                            {/* <Button title="tikla" onPress={goster}/>  */}
                        </View>

                      


                    </View>
                </View>

                <View style={styles.container}>
                    <Text>asdfasdf</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <Text>Username: {item.text}</Text>
                                <Text>Other Data: {item.text}</Text>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>

    )
}

export default UserProfile;

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