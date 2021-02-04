
import { ActivityIndicator,View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'
import { set } from 'react-native-reanimated';
import Test4 from './Test4'
import { FlatList } from 'react-native-gesture-handler';
//import Patient from './Patient'


 
const LOO =({navigation,route}) => {
  const { itemId, otherParam } = route.params;
  const [game,setcounter] = useState(otherParam)
  const increase = () =>{
    setcounter(game+1)
  }
  
return(
  <View>
    
    <View>
      <Text style={{fontSize:40}}>game: {game+0}</Text>   
      </View>
  </View>


)
}

export default LOO;