import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator()

import Profile from "./Pages/Profile";
import LogIn from "./Pages/LogIn";
import Sign from "./Pages/Sign";
import Messages from "./Pages/Messages.js/messages";

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

  // const goToProfile = (props) => {
  //   const { navigation } = props
  //   return (
  //     navigation.navigate("Profile")
  //   )
  // }

  const goToProfile = (props) => {
    const {navigation} = props
    return(
        navigation.navigate("Profile")
    )
}


  return (

    <NavigationContainer>
      <Stack.Navigator>

       {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />   */}


        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        ) : (

          <Stack.Screen name="Messages" component={Messages} options={(props)=>({
            title: 'Dertler Derya',
            headerTintColor: 'black',
            headerRight: () => (
              <Icon name="logout" size={30} color="#e0752d" onPress={() => auth().signOut()} />
            ),
            headerLeft: () => (
                      //<Icon name="account" size={30} color="darkgreen" onPress={() => navigate('Profile')}/>
              
              <Icon name="account" size={30} color="#e0752d" onPress={() => goToProfile(props)} />
              //stack yapisi icinde zaten navigation var

            )
          })} />
        )
        }

      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} /> 



      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>


  )
}

export default App;