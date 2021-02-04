
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'

import Count2 from './Count2'
import Count3 from './Count3'

const Stack = createStackNavigator();


  
const CStart =({navigation})=>{
  return(
    <View>
      <Text>
        Gogo
      </Text>
      <Button title="Count" onPress={() => { navigation.navigate('count',{itemId:0});}}/>
    </View>
  
    
  )
}
export default CStart;
