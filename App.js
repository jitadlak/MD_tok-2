import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from './Screens/SplashScreen'
import Dashboard from './Screens/Dashboard'
import { Chats } from './Screens/Chats'
import LoginScreen from './Screens/LoginScreen'
import Profile from './Screens/Profile'
import AllPatients from './Screens/ChatsUser'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigations/TabNavigator'
import OtpLogin from './Screens/OtpLogin';
import OtpInputScreen from './Screens/OtpInputScreen'
import SignUpScreen from './Screens/SignUpScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
 <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpLogin" component={OtpLogin} />
        <Stack.Screen name="TabNavigatorS" component={TabNavigator} />
        <Stack.Screen name="OtpInputScreen" component={OtpInputScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
 </NavigationContainer>

  
  )
}

export default App

const styles = StyleSheet.create({})
