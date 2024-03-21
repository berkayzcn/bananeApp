import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Stack = createNativeStackNavigator()


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
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
    )
}

  return(


    <NavigationContainer>
      <Stack.Navigator>

         {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}}/>
        ) : (
          
          <Stack.Screen name="Messages" component={Messages}  options={{
            title: 'Dertler Derya',
            headerTintColor: 'darkgreen',
            headerRight: () => (
            <Icon name="logout" size={30} color="darkgreen" onPress={() => auth().signOut()}/>
            ),
        }}/>
        )
      } 
    
      </Stack.Navigator>
    </NavigationContainer>


  )
}

export default App;