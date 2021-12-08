import React from 'react'
import { View, Text,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../Screens/SplashScreen'
import Dashboard from '../Screens/Dashboard'
import { Chats } from '../Screens/Chats'
import LoginScreen from '../Screens/LoginScreen'
import Profile from '../Screens/Profile'
import AllPatients from '../Screens/ChatsUser'
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
   return(
    <Tab.Navigator screenOptions={{headerShown:false, tabBarLabelStyle:{fontSize:12, fontWeight:'bold'}}}>
    <Tab.Screen name="Dashboard" component={Dashboard} options={{tabBarIcon:()=>(
        <Image
        source={require("../assets/images/DashboardIcon.png")}
        resizeMode="contain"
        style={{ height: 25, width:25 }}
      />
    )}}/>
    <Tab.Screen name="Notifications" component={Dashboard} options={{tabBarIcon:()=>(
        <Image
        source={require("../assets/images/notificationIcon.png")}
        resizeMode="contain"
        style={{ height: 25, width:25 }}
      />
    )}} />
    <Tab.Screen name="chats" component={AllPatients} options={{tabBarIcon:()=>(
        <Image
        source={require("../assets/images/messagesIcon.png")}
        resizeMode="contain"
        style={{ height: 25, width:25 }}
      />
    )}}/>
    <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=>(
        <Image
        source={require("../assets/images/ProfileIcon.png")}
        resizeMode="contain"
        style={{ height: 25, width:25 }}
      />
    )}}/>
  </Tab.Navigator>
   )
}

export default TabNavigator
