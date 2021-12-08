import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';
import auth, { firebase } from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage'


const LoginScreen = ({navigation}) => {
  const [email, setemail]= useState('')
  const [password, setPassword]= useState('')

//asyncStorage data store
const storeData = async (asyncData) => {
  try {
    await AsyncStorage.setItem('user', asyncData)
    console.log('async storage set', asyncData)
  } catch (e) {
    console.log('async storage not set')
  }
}



  const createUser=async()=>{
      try {
        if(!email || !password){
          return Snackbar.show({
            text: 'Please fill all details !!',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
        const result = await firebase.auth().signInWithEmailAndPassword(email, password)
          // await result.user.sendEmailVerification()
          console.log(result.user)
          if(result.user.emailVerified== true){
            let userData= JSON.stringify(result.user)
            storeData(userData)
            navigation.replace("TabNavigatorS")
            return Snackbar.show({
              text: 'Login Successfull !!',
              duration: Snackbar.LENGTH_SHORT,
            });
          }
          else{
            return Snackbar.show({
              text: 'Email is Not Verified please verify !!',
              duration: Snackbar.LENGTH_SHORT,
            });
          }
          console.log(result)
      } catch (error) {
        console.log(error)
        return Snackbar.show({
          text: 'The Credentials is invalid or the user does not have this credentials !!',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View >
        <View style={{ alignItems: "center", marginTop: '50%' }}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 50 }}
          />
        </View>
        <Text style={{alignSelf:'center', margin:10,
        fontSize:20, fontWeight:'bold', color:'black'
      }}>Login Using Email And Password</Text>
        <View style={styles.FieldContainer}>
          <TextInput placeholder="Username" style={styles.inputField} onChangeText={(e)=>setemail(e)} />
          <View>
          <TextInput placeholder="Password"  style={styles.inputField} onChangeText={(e)=>setPassword(e)} />
          {/* <Ionicons name="ios-eye-sharp" size={32} color="#8B8B8B" style={{marginLeft:'75%',height:29,marginTop:-9}} /> */}
          </View>
        </View>
         <View style={{padding:23}}>
        <TouchableOpacity style={styles.button} onPress={()=>createUser()}>
          <Text style={{alignSelf:'center',color:'white', fontSize:20, fontWeight:'bold'}}>Log In</Text>
        </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('OtpLogin')}>
            <Text style={{alignSelf:'center'}}>Login using Phone number</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
            <Text style={{alignSelf:'center'}}>SignUp</Text>
            </TouchableOpacity>
            
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputField: {
    padding: 18,
    borderRadius: 13,
    backgroundColor: "lightgray",
    marginTop:10,
    color:'black',
    fontSize:18
  },
  FieldContainer: {
    padding: 23,
    marginBottom:-28
  },
  button: {
    padding: 17,
    borderRadius: 13,
    backgroundColor: "#32B7BA",
    
  },
});