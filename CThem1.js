
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory,DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'

import Count1 from './Count1';
import CStart from './CStart';

const MyTheme1 = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#EF8F8F',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const MyTheme2 = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#8EDFC2',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Stack = createStackNavigator();

function Themm1({navigation}) {
  const changeHeaderYellow = () => {
    // Function to change navigation options
    navigation.setOptions({
      backgroundColorStyle:{backgroundColor:'#8EDFC2'},
      title: 'Yellow Header',
      headerStyle: {
        backgroundColor: 'yellow', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  };
  return(
    
    
    <View>
     
        <Text>Coun1</Text>
        
        <Button title="Go to Themm2" onPress={() => { navigation.navigate('Themm2');}}/>
        <Button title="Go to Themm2" onPress={() => { navigation.navigate('Themm2');}}/>
        

    </View>
  )
  
}

function Themm2({navigation}) {
  const changeHeaderYellow = () => {
    // Function to change navigation options
    navigation.setOptions({
      backgroundColorStyle:{backgroundColor:'#8EDFC2'},
      title: 'Yellow Header',
      headerStyle: {
        backgroundColor: 'yellow', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  };

  const changeHeaderPink = () => {
    // Function to change navigation options
    navigation.setOptions({
      title: 'Pink Header',
      headerStyle: {
        backgroundColor: 'pink', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  };

  const changeHeaderOrange = () => {
    // Function to change navigation options
    navigation.setOptions({
      background:{backgroundColor:'yellow'},
      title: 'Orange Header',
      headerStyle: {
        backgroundColor: 'orange', //Set Header color
      },
      headerTintColor: 'black', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  };
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Dynamically Change React Navigation Value
          {'\n'}
          Update navigation Options
        </Text>

        {/* Change header color to yellow */}
        <TouchableOpacity
          onPress={changeHeaderYellow}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY YELLOW COLOR</Text>
        </TouchableOpacity>

        {/* Change header color to pink */}
        <TouchableOpacity
          onPress={changeHeaderPink}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY PINK COLOR</Text>
        </TouchableOpacity>

        {/* Change header color to orange */}
        <TouchableOpacity
          onPress={changeHeaderOrange}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY ORANGE COLOR</Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
    )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808080',
    borderRadius: 2,
    marginTop: 12,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

const CThem1 =()=>{
  return(
    <NavigationContainer theme={MyTheme1} >
      <Stack.Navigator initialRouteName="Themm1">
        <Stack.Screen  name="Themm1" component={Themm1} />
        <Stack.Screen  name="Themm2" component={Themm2} />
        <Stack.Screen  name="Count1" component={Count1} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
export default CThem1;
