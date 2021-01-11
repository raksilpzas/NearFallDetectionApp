import React, { Component } from 'react'
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginFOrm from './LoginFOrm'

export default function Login() {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>NFD with m eis not be okncjdvbnwfe</Text>
    
    <View>
      
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  logoimage :{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo:{
    width: 100,
    height: 100
  },
  title:{
    color: '#FFF',
    marginTop: 1,
    width: 100,
    textAlign: 'center',
    opacity: 0.9


  }
})








