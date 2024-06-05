import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator()
//const Drawer = createDrawerNavigator()

import Profile from "./Pages/Profile";
import LogIn from "./Pages/LogIn";
import Sign from "./Pages/Sign";
import Messages from "./Pages/Messages.js/messages";

import MessageDetail from "./Pages/MessageDetaills/messageDetail";
import userProfile from "./Pages/userProfile";

import KullaniciDeneme from "./kullaniciDeneme"

const App = () => {

  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user)
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    )
  }


  const goToProfile = (props) => {
    const {navigation} = props
    return(
        navigation.navigate("Profile")
    )
}


  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         //headerStyle : {backgroundColor : 'black'},
         headerStyle : {backgroundColor : '#242222'},
         headerTitleStyle : {color : 'white', },
         headerTintColor : '#e0752d'
      }}>

       {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />   */}


        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        ) : (

          <Stack.Screen name="Messages" component={Messages}  options={(props)=>({
            title: 'Dertler Derya',
            headerTintColor: 'black',
            headerRight: () => (
              // <Icon name="logout" size={30} color="white" onPress={() => auth().signOut()} />
              <Icon name="logout" size={30} color="#e0752d" onPress={() => auth().signOut()} />
              //<Icon name="logout" size={30} color="#e0752d" onPress={() => navigation.openDrawer} />
            ),
            headerLeft: () => (
                      //<Icon name="account" size={30} color="darkgreen" onPress={() => navigate('Profile')}/>
              
              <Icon name="account" size={30} color="#e0752d" onPress={() => goToProfile(props)} />
              //stack yapisi icinde zaten navigation var

            )
          })} />
        )
        }

      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }}/> 
      <Stack.Screen name="MessageDetail" component={MessageDetail} options={{ headerShown: true }} /> 
       <Stack.Screen name="User" component={userProfile}/> 
       <Stack.Screen name="kullaniciDeneme" component={KullaniciDeneme}/> 


      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>


  )
}

export default App;

const styless = StyleSheet.create({
  tabbackground : {
    backgroundColor: 'rgba(128, 128, 128, 0.8)', //gri seffaf    
  },
})





  // const DrawerStack = () => {
  //   return(
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Profile" component={Profile}/>
  //       <Drawer.Screen name="LogOut" component={Lo}/>

  //     </Drawer.Navigator>
  //   )
  // }

  // const goToProfile = (props) => {
  //   const { navigation } = props
  //   return (
  //     navigation.navigate("Profile")
  //   )
  // }