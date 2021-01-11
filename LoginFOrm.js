import React, { Component } from 'react'
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { TextInput } from 'react-native-gesture-handler'



export default function LoginFOrm() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
      <TextInput style={styles.input}
        placeholder="Hospital Number"
        placeholderTextColor="rgba(255,255,255,0.7)"
      />
      <TextInput style={styles.input}
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.7)"
      />
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>

      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  
  input:{
    
    backgroundColor: 'skyblue',
    marginTop:100,
    marginBottom: 20,
    paddingHorizontal: 10

  }
})









