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
import OTPInputView from '@twotalltotems/react-native-otp-input'
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

const OtpInputScreen = ({navigation, route}) => {
    console.log('route data',route.params)
    const [code, setCode] = useState('');
    const [confirm, setConfirm] = useState(route.params);
    


//confirm code code
async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log('valid');
      console.log('code', code)
     
      //   alert('otp verified successfully');
      navigation.replace('TabNavigatorS');
    } catch (error) {
      console.log('Invalid code.');
      return Snackbar.show({
        text: 'Invalid OTP !!',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }



  return (
    <SafeAreaView style={{backgroundColor:'#fff', flex:1}}>
      <View >
        <View style={{ alignItems: "center", marginTop: Platform.OS == "android" ? "35%":'50%' }}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 50 }}
          />
        </View>
        <View style={{alignSelf:'center', backgroundColor:'#fff',marginTop:30}}>
        <Text style={{margin:20, alignSelf:'center', fontSize:18, fontWeight:"bold", color:'black'}}>Enter Your OTP</Text>
        <OTPInputView
    style={{width: '80%', height: 100}}
    pinCount={6}
 
   
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
        setCode(code)
    })}
/>
        </View>
         <View style={{padding:23}}>
        <TouchableOpacity style={styles.button} onPress={()=>confirmCode()}>
          <Text style={{alignSelf:'center',color:'white', fontWeight:'bold', fontSize:17}}>Confirm OTP</Text>
        </TouchableOpacity> 
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.replace('OtpLogin')}>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:17}}>Resend OTP</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpInputScreen;

const styles = StyleSheet.create({
  inputField: {
    padding: 20,
    borderRadius: 13,
    backgroundColor: "lightgray",
    marginTop:10
  },
  FieldContainer: {
    padding: 23,
    marginBottom:-28
  },
  button: {
    padding: 20,
    borderRadius: 13,
    backgroundColor: "#32B7BA",
    
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },
 
  borderStyleHighLighted: {
    borderColor: "tomato",
  },
 
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color:'black',
    fontWeight:'bold',
    fontSize:23
  },
 
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});