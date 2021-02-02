
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions, TextInputComponent} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory, ThemeProvider} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React, { useState,Component } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryTheme } from "victory-native";


const Screen1 =({navigation})=>{
  const [userName, setUserName] = useState('');
  return(
    <View>
      <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Enter Any value'}
        />
      <Button
          title="Go Next"
          //Button Title
          onPress={() =>
            navigation.navigate('LOO', {
              paramKey: userName
            })
          }
        />

    </View>
  )


}
export default Screen1;
