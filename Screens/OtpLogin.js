import React,{useState, useEffect} from "react";
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
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

const OtpLogin = ({navigation}) => {
  const [number, setNumber] = useState('');

//signIn firebase
const signin = async () => {
  if (!number) {
    return Snackbar.show({
      text: 'Please Enter Mobile No.',
      duration: Snackbar.LENGTH_SHORT,
    });
  } 

  else {
    console.log('pressed');
    const confirmation = await auth().signInWithPhoneNumber('+91' + number);
    console.log('confirmation', confirmation);
    if (confirmation) {
      setConfirm(confirmation);
      return Snackbar.show({
        text: 'OTP Sent SuccessFully !!',
        duration: Snackbar.LENGTH_SHORT,
      });
      navigation.navigate('OtpInputScreen', confirmation)
    }else{
      return Snackbar.show({
        text: 'Some Error Occurred !!',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }
};



  return (
    <SafeAreaView >
      <View >
        <View style={{ alignItems: "center", justifyContent:'center', marginTop:'50%'}}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 50 }}
          />
        </View>
        <Text style={{alignSelf:'center', margin:20,
        fontSize:20, fontWeight:'bold', color:'black'
      }}>Login Using Mobile No</Text>
        <View style={styles.FieldContainer}>
          <TextInput placeholder="Enter Mobile No." style={styles.inputField} keyboardType="number-pad"
          onChangeText={(e)=> setNumber(e)}
          />
         
          
          {/* <Ionicons name="ios-eye-sharp" size={32} color="#8B8B8B" style={{marginLeft:'75%',height:29,marginTop:-9}} /> */}
         
        </View>
         <View style={{padding:23}}>
        <TouchableOpacity style={styles.button} onPress={()=>signin()}>
          <Text style={{alignSelf:'center',color:'white'}}>Get OTP</Text>
        </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.replace('LoginScreen')}>
            <Text style={{alignSelf:'center'}}>Login using Email and Password</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpLogin;

const styles = StyleSheet.create({
  inputField: {
    padding: 18,
    borderRadius: 13,
    backgroundColor: "lightgray",
   
  },
  FieldContainer: {
    padding: 23,
    marginBottom:-25
  },
  button: {
    padding: 20,
    borderRadius: 13,
    backgroundColor: "#32B7BA",
    
  },
});