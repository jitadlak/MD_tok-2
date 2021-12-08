import * as React from 'react';
import { View, Text } from 'react-native';
 import SplashScreen from './Screens/SplashScreen'
 import LoginScreen from './Screens/LoginScreen'
import OtpLogin from './Screens/OtpLogin';
import TabNavigator from './navigations/TabNavigator'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
  
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpLogin" component={OtpLogin} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
   
  );
}

export default StackNavigator;