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
  ScrollView,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';
import auth, { firebase } from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({navigation}) => {
  const [email, setemail]= useState('')
  const [password, setPassword]= useState('')
  const [name, setName]= useState('')
  const [mobile, setMobile]= useState('')
  const [specialization, setSpecialization]= useState('')
  const [about, setAbout]= useState('')


  const uploadData=async()=>{
    console.log('upload function called')
    const id = uuid.v4();
    firestore()
      .collection('Doctors')
      .add({
        id: id,
        email: email,
        password: password,
        name: name,
        mobile: mobile,
        specialization: specialization,
        about: about,
       
      })
      .then(() => {
        console.log('Post Added !');
        
        setName(null);
        setPassword(null);
        setSpecialization(null);
        setemail(null);
        setMobile(null);
        setAbout(null);
         Snackbar.show({
            text: 'SignUp SuccessFully Please Login Now  !!',
            duration: Snackbar.LENGTH_SHORT,
          });
          navigation.navigate("LoginScreen")
      })
      .catch(error => {
        console.log(error);
      });
  }

  const createUser=async()=>{
      try {

            console.log('create function called')
        if(!email || !password || !name || !mobile || !specialization || !about)
      {
           return Snackbar.show({
            text: 'All Fields are Required !!',
            duration: Snackbar.LENGTH_SHORT,
          });
      }

        const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
          await result.user.sendEmailVerification()
          console.log(result.user)
          if(result.user){
           uploadData()
          }
          console.log(result)
      } catch (error) {
        console.log(error)
        return Snackbar.show({
          text: 'Something Wrong Happend !!',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <View >
        <View style={{ alignItems: "center", marginTop:'20%' }}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 50 }}
          />
        </View>
        <Text style={{alignSelf:'center', marginTop:20,
        fontSize:20, fontWeight:'bold', color:'black'
      }}>Login Using Mobile No</Text>
        <ScrollView style={styles.FieldContainer}>
        <View>
        <TextInput placeholder="Name"  style={styles.inputField} onChangeText={(e)=>setName(e)} />
       
        </View>
          <TextInput placeholder="Username" style={styles.inputField} onChangeText={(e)=>setemail(e)} />
          <View>
          <TextInput placeholder="Password"  style={styles.inputField} onChangeText={(e)=>setPassword(e)} />
         
          </View>
          <View>
          <TextInput placeholder="Mobile"  style={styles.inputField} onChangeText={(e)=>setMobile(e)} keyboardType="number-pad" />
         
          </View>
          <View>
          <TextInput placeholder="Doctor's Specialization"  style={styles.inputField} onChangeText={(e)=>setSpecialization(e)}  />
         
          </View>
          <View>
          <TextInput placeholder="About Doctor" multiline={true}  style={styles.inputField} onChangeText={(e)=>setAbout(e)} />
         
          </View>
          
          
          <View style={{padding:23}}>
          <TouchableOpacity style={styles.button} onPress={()=>createUser()}>
            <Text style={{alignSelf:'center',color:'white', fontSize:20, fontWeight:'bold'}}>Sign Up</Text>
          </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>navigation.navigate('OtpLogin')}>
              <Text style={{alignSelf:'center'}}>Login using Phone number</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
              <Text style={{alignSelf:'center'}}>Login using Email</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  inputField: {
    padding: 15,
    borderRadius: 13,
    backgroundColor: "lightgray",
    marginTop:10,
    color:'black',
    fontSize:18
  },
  FieldContainer: {
    padding: 23,
    marginBottom:-28,
    backgroundColor:'#fff'
  },
  button: {
    padding: 17,
    borderRadius: 13,
    backgroundColor: "#32B7BA",
    
  },
});