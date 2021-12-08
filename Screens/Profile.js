import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth';
const Profile = ({navigation}) => {
  const  signOut=async()=>{
await auth()
.signOut()
.then(() => navigation.replace("LoginScreen"));
  }
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          alignSelf: "center",
          marginTop:10,
          fontSize: 23,
          fontWeight: "bold",
          color:'black'
        }}
      >
        Profile
      </Text>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginBottom: 13 }}>
          <Image
            source={require("../assets/images/SophieKihm.png")}
            style={{
              borderWidth: 3,
              borderColor: "#32B7BA",
              borderRadius: 111,
              width: 118,
              height: 118,
            }}
          />
        </View>
        <Text style={{ fontSize: 26, fontWeight: "bold", paddingBottom: 6 }}>
          Emma Smith
        </Text>
        <Text style={{ fontSize: 19, color: "#32B7BA" , paddingBottom: 36}}>Heart Surgeon</Text>
        <TouchableOpacity style={styles.button} onPress={()=>signOut()}>
          <Text style={{alignSelf:'center',color:'white'}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    button: {
        padding: 23,
        borderRadius: 13,
        backgroundColor: "#32B7BA",
        width:'85%'
      },
});