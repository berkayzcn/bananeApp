import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View, SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator()
//const Stack = createStackNavigator();

import LogIn from "./Pages/LogIn";
import Sign from "./Pages/Sign";

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="Sign" component={Sign}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView>
    //   <Text>
    //     berkay
    //   </Text>
    // </SafeAreaView>
  )
}

export default App;