import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import RBSheet from 'react-native-raw-bottom-sheet';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Dashboard = () => {

  const refRBSheet = useRef();
  const DATA = [
    {
      id: 'yesdghfjahjkfkdjf',
      image: require('../assets/images/OliviaParker.png'),
      name: 'Olivia Parker',
      discription:
        'Hi Doctor, i am a cardio patient. I need your \nhelp imidiately',
    },
    {
      id: 'gfhjsdgfhjdsgfhj',
      image: require('../assets/images/SophieKihm.png'),
      name: 'Sophie Kihm',
      discription: 'Yes',
    },
  ];
  const [items, setItems] = useState({});
  const [botttomdata, setBottomdata] = useState({});

  const BottomData = () => {
console.log(botttomdata)
    return <View style={{height: '100%', alignItems:'center', justifyContent:'center', paddingBottom:10}}>
        <View style={styles.imgView}>
        <Image
                        style={{height: 80, width: 80}}
                        resizeMode="contain"
                        source={botttomdata.image}
                      />
        </View>
        <Text style={styles.btmname}>{botttomdata.name}</Text>
        <TouchableOpacity style={styles.btmbtn}>
          <Text style={styles.btmbtntext}>Send Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btmbtn1}>
          <Text  style={styles.btmbtntext}>Call</Text>
        </TouchableOpacity>
       
    </View>;
  };

  const BottomSheetopn=(props)=>{
setBottomdata(props)
  refRBSheet.current.open();


  }

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = () => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <View
          style={{
            height: '100%',
            backgroundColor: 'teal',
          }}></View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
        }}>
        Dashboard
      </Text>
      <View style={{flex: 0.2}}>
        <Agenda
          loadItemsForMonth={loadItems}
          selected={'2017-05-16'}
          renderItem={renderItem}
          theme={{
            selectedDayBackgroundColor: '#32b7ba',
            contentStyle: {borderWidth: 1, height: 120},
          }}
        />
      </View>
      <ScrollView style={{flex: 0.8, backgroundColor: '#fff'}}>
        <View style={styles.container1}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                alignSelf: 'center',
              }}>
              Exam Rooms
            </Text>
            <TouchableOpacity style={styles.joinbtn}>
              <Text style={{fontSize: 18, color: 'white'}}>Join</Text>
              <Image
                style={{height: 15, width: 20}}
                resizeMode="contain"
                source={require('../assets/images/call.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={item => {
                return (
                  <TouchableOpacity onPress={() => BottomSheetopn(item.item)}>
                    <View style={styles.view} key={item.item.id}>
                      <View 
                        style={styles.imgView}>
                        <Image
                          style={{height: 60, width: 60}}
                          resizeMode="contain"
                          source={item.item.image}
                        />
                      </View>
                      <View style={{margin: 12}}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'black',
                          }}>
                          {item.item.name}
                        </Text>
                        <View style={{flexDirection: 'row', margin: 5}}>
                          <Image
                            style={{height: 20, width: 20}}
                            resizeMode="contain"
                            source={require('../assets/images/watch.png')}
                          />
                          <Text
                            style={{
                              color: 'gray',
                              fontSize: 13,
                              marginLeft: 10,
                            }}>
                            15:40, May 24
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.container1}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                alignSelf: 'center',
              }}>
              Upcoming Appointment
            </Text>
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={item => {
                return (
                  <TouchableOpacity onPress={() => BottomSheetopn(item.item)}>
                  <View style={styles.view} >
                    <View
                     style={styles.imgView}>
                      <Image
                        style={{height: 60, width: 60}}
                        resizeMode="contain"
                        source={item.item.image}
                      />
                    </View>
                    <View style={{margin: 12}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        {item.item.name}
                      </Text>
                      <View style={{flexDirection: 'row', margin: 5}}>
                        <Image
                          style={{height: 20, width: 20}}
                          resizeMode="contain"
                          source={require('../assets/images/watch.png')}
                        />
                        <Text
                          style={{color: 'gray', fontSize: 13, marginLeft: 10}}>
                          15:40, May 24
                        </Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <BottomData />
      </RBSheet>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container1: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  view: {
    height: 100,
    width: '100%',
    backgroundColor: '#EFF9F9',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 5,
  },
  joinbtn: {
    height: 45,
    width: 90,
    backgroundColor: '#32b7ba',
    borderRadius: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgView:
  {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#32b7ba',
  },
  btmname:{
    margin:10,
    fontWeight:'bold',
  },
  btmbtn:{
    height:40,
    width:'60%',
    backgroundColor:'purple',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  btmbtn1:{
    height:40,
    width:'60%',
    backgroundColor:'#32b7ba',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  btmbtntext:{
    fontSize:14,
    fontWeight:'bold',
    color:'white'
  }
});
