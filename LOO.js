
import { ActivityIndicator,View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'
import { set } from 'react-native-reanimated';
import Test4 from './Test4'
import { FlatList } from 'react-native-gesture-handler';
//import Patient from './Patient'


 
const LOO =({navigation}) => {
  
return(
  <View>
    
    <View>
    <Text style={{fontSize:40}}>{navigation.params.paramKey}</Text>
        
        
      </View>
  </View>


)
}

export default LOO;