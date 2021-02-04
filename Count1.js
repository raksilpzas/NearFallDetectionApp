
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'

import CStart from './CStart'
import Count2 from './Count2'
import Count3 from './Count3'

const Stack = createStackNavigator();

function count({navigation,route}) {
  const { itemId } = route.params;
  
  
  const [fall, setcounter] = useState(0);
  const [nearfall, setvalue] = useState(0);
  const increase = () =>{
    setcounter(fall+1)
  }
  const increaser =() =>{
    setvalue(nearfall+1)
  }
  const decrease = () =>{
    setcounter(fall-1)
  }

  const resete = () =>{
    setcounter(fall == 0)
  }
  const reset = () =>{
    setvalue(nearfall == 0)
  }
  const resetall =() =>{
    setvalue(nearfall==0),setcounter(fall==0)
  }
  return(
    <View>
     
        <Text>Coun1</Text>
        <Text style={{fontSize:40}}> === {JSON.stringify(itemId)}</Text>
        <Button title="Count" onPress={() => { navigation.navigate('Count2',{itemId:itemId});}}/>
        

    </View>
  )
  
}

function Loading({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#8EDFC2',alignItems:'center',justifyContent:'center',}}>
    <Text style={{marginBottom:20 ,fontSize:30,fontWeight:'bold'}}>Loading Data ...</Text>
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size="large" color="#000"/> 
      
    </View>
      
  </View>)
  
}

const Count1 =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CStart">
        <Stack.Screen name="Count2" component={Count2} />
        <Stack.Screen name="Count3" component={Count3} />
        <Stack.Screen name="count" component={count} />
        <Stack.Screen name="CStart" component={CStart} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
export default Count1;
