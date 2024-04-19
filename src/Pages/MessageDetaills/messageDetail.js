// import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from "react-native";

import database from '@react-native-firebase/database'

import parseContentData from "../../utils/parseContentData";
import { firebase } from "@react-native-firebase";

import AuthName from "@react-native-firebase/auth"


const MessageDetail = ({route}) => {



const data = route.params;

const auth = AuthName()

const currentUserName = AuthName().currentUser.email

const contentObject = {
    username: currentUserName.split('@')[0]
}

    return(
        <ImageBackground source={require('../../Assets/cr2.png')} style={style.backgroundImage}>
        <SafeAreaView style={style.container}>
            <View style={style.inContainer}>
              <Text style={style.text}>{data.text}</Text>
            <View style={style.userContainer}>
            <Text style={style.username}>{contentObject.username}</Text>
            </View>  
             </View>

        
        </SafeAreaView>
        </ImageBackground>
        
        
    )
}


export default MessageDetail;

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        //justifyContent : "center"
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
      },

     text: {
        color : "white",
        fontWeight: 'bold',
        fontSize: 23,
     } ,

     inContainer : {
        //sayfanin uzunlugunu boyutlarini mesajin uzunluguna gore uzatsin
        width : 300,
        height : 400,
        //backgroundColor : 'rgba(0, 0, 255, 0.5)',mavi seffaf
        backgroundColor : 'rgba(128, 128, 128, 0.8)', //gri seffaf
        //backgroundColor: 'rgba(255, 119, 0, 0.7)',
       // alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
        padding : 10,
        marginVertical : 60,
        borderWidth : 1,
        borderColor : 'white',
        borderRadius  : 8,


     },

     username: {
        fontSize: 18,
        marginTop: 9,
        fontWeight: '500',
        paddingLeft: '7',
        color : 'orange',
        fontWeight : '600'
        //backgroundColor: 'blue',
        //justifyContent : 'center',
        //alignItems : 'center',
        //alignContent : 'center',

    },


    userContainer:{
        flexDirection:'row',
        //backgroundColor:"white",
        padding:5,
        borderRadius:25,
        justifyContent:"flex-end",
        alignItems:"center",
      
      },

    
})



    
    //const {item} = route.params;
    //console.log("data", data)
    
     //const [cekilenData, updateData] = useState()
    //const [detailData, setDetailData] = useState(null);

    //  useEffect(() => {
    //      database()
    //      .ref(`messages/${item}/`)
    //      .once('value', snapshot=> {
    //          const contentData = snapshot.val();
    //          const parsedData = parseContentData(contentData || {})
    //          updateData(parsedData)
    //          updateData(contentData)
    //          console.log(cekilenData.text)
    //      })
        
    //  }, [])


//   useEffect(() => {
//     // Firebase'den detayları çek
//     const fetchData = async () => {
//       try {
//         const response = await firebase.firestore().collection('yourCollection').doc(item.id).get();
//         setDetailData(response.data());
//       } catch (error) {
//         console.error('Error fetching detail data:', error);
//       }
//     };

//     fetchData();

//     // Cleanup function
//     return () => {
//       // İsteği iptal etme veya gereksiz kaynakları temizleme
//     };
//   }, []);