
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'

const Count3 =({navigation,route})=>{
  const { itemId } = route.params;
  

  return(
    <View>
     
        <Text>Count3</Text>
        <Text style={{fontSize:40}}> === {JSON.stringify(itemId)}</Text>
        <Button title="Count3" onPress={() => { navigation.navigate('count',{itemId});}}/>

    </View>
  )
}
export default Count3;
