
import { ActivityIndicator,View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'
//import Patient from './Patient'


 
const LOO =() => {
  const [isLoarding,setIsloading] = React.useState(true);
  const [userToken,setUserToken] = React.useState(null);

if(isLoarding){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
      <ActivityIndicator size="large"/>
      
      
    </View>
  )
}
}

export default LOO;