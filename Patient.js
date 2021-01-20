
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import React, { Component } from 'react'




function messageLog1() {
  Alert.alert('Log In',"Pass")
}

  
 // ref = {(input)=> this.passwordInput = input}
 
 export default function Patient() { {
   return (
  
   <View style={{flex:1 ,backgroundColor:'#73C6B6'}}>
      <View style={{flex:1}}>
       <Text style={{fontSize:40,textAlign:'center'}}>Log In</Text>
      </View>
      <View style={{flex:4}}>
        <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20}} 
          placeholder="Phone Number" 
          placeholderTextColor="#808B96 "
          returnKeyType="next"
          onSubmitEditing={()=> this.passwordInput.focus()}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button style={{backgroundColor:'#7FB3D5'}}title="Get code"/>
        <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20,marginTop:40}} 
          placeholder="Verification Code" 
          placeholderTextColor="#212F3D "
         />
      </View>
        <AppButtonLog3 
          title="Login" 
          onPress ={() =>this.props.navigation.navigate('P')} /*onPress={() => navigation.navigate('home')}*/ 
         />
  
    </View>
  
        
    
   )
 }
}
function P() {
  return(
    <View>
      <Text>
        ferpijberibo
      </Text>
    </View>
  )
  
}
 //onPress={messageLog1}
 

 const AppStackNavigator=createStackNavigator();
 

 const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
  );
 
 
