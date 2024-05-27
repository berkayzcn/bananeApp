
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Buton from "./Components/Button";
import firestore from '@react-native-firebase/database'

const KullaniciDeneme = ({route, navigation}) => {

    const gelenData = route.params;



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
  
    useEffect(() => {
      // Örnek kullanıcı adı
      const username = gelenData.username;
      fetchUserData(username);
    }, []);
  
    if (loading) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.denemeCont}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Username: {item.username}</Text>
              <Text>Other Data: {item.text}</Text>
            </View>
          )}
        />
      </View>
    );
}

export default KullaniciDeneme;

const styles = StyleSheet.create({

    denemeCont : {
        flex : 1
    },

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