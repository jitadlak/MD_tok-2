import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";

const DATA = [
  {
    image: require("../assets/images/OliviaParker.png"),
    name: "Olivia Parker",
    discription:
      "Hi Doctor, i am a cardio patient",
  },
  {
    image: require("../assets/images/SophieKihm.png"),
    name: "Sophie Kihm",
    discription: "Yes",
  },
  {
    image: require("../assets/images/AmeliaWaston.png"),
    name: "Amelia Watson",
    discription: "Of course",
  },
  {
    image: require("../assets/images/WiliamSmith.png"),
    name: "Wiliam Smith",
    discription: "Thankss!!!",
  },
];

const AllPatients = () => {
  return (
    <View style={{ paddingTop: "5%" }}>
      <Text style={{ alignSelf: "center", fontSize: 28, fontWeight: "bold" , color:'black'}}>
        Dashboard
      </Text>
      <FlatList
        data={DATA}
        renderItem={(item) => {
          console.log("item", item);
          return (
            <View style={{ marginTop: 33 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  
                }}
              >
                <View style={{ flexDirection: "row", marginLeft: 9 }}>
                  <Image
                    source={item.item.image}
                    style={{
                      borderWidth: 3,
                      borderColor: "#32B7BA",
                      borderRadius: 33,
                      width: 68,
                      height: 68,
                      marginTop: -9,
                    }}
                  />
                  <View style={{ marginLeft: 13 }}>
                    <Text style={{ fontSize: 19, fontWeight: "bold", color:'black' }}>
                      {item.item.name}
                    </Text>
                    <Text style={{color:'black'}}>{item.item.discription}</Text>
                  </View>
                </View>
                <View style={{ paddingRight: 7 }}>
                  <Text style={{ color: "#32B7BA" }}>20:34</Text>
                  <View
                    style={{
                      borderWidth: 1,
                      width: 19,
                      height: 19,
                      borderRadius: 28,
                      justifyContent:'center',
                      
                      marginTop: 5,
                      backgroundColor: "#5123A4",
                    }}
                  >
                    <Text style={{ alignSelf: "center", color: "white",marginTop:-1 }}>
                      1
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AllPatients;

const styles = StyleSheet.create({});
 