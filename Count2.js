
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'

const Count2 =({navigation,route})=>{

  const { itemId } = route.params;
  const [fall, setcounter] = useState(itemId);
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
        <Text style={{fontSize:40}}> === {JSON.stringify(itemId)}</Text>
        <Text>Count2</Text>
        <Button title="Count2" onPress={() => { navigation.navigate('Count3', {itemId});}}/>
        <Button title="Go to Details... again"onPress={() =>navigation.push('Count2', {itemId:itemId+2})}/>
        <Button title="Go to Details... again"onPress={() =>navigation.push('Count2', {itemId:itemId-itemId})}/>
        

    </View>
  )
}
export default Count2;
