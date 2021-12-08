import React,{useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const interval = setInterval(() => {
         navigation.replace("LoginScreen")
        }, 3000);
        return () => clearInterval(interval);
      }, []);
    return (
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
           <Image
        style={styles.logoImg}
       resizeMode="contain"
        source={require('../assets/images/Logo.png')}
      />
    
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    logoImg:{
        height:100,
        width:200
    }
})
