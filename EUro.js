import React from 'react'
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

/**หน้าLogin3 Getcode*/
function messageLog1() {
  Alert.alert('Log In',"hello")
  
  
}

function Login3(){
  return(
    
    <View style={{flex:1 ,backgroundColor:'#E8F8F5'}}>
      <View style={{flex:1}}>
        <Text style={{fontSize:40,textAlign:'center'}}>
        Log In
        </Text>

      </View>
        <View style={{flex:4}}>
        
          <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20}} placeholder="Phone Number" placeholderTextColor="#808B96 "/>
          <Button style={{backgroundColor:'#7FB3D5'}}title="Get code"/>
         <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20,marginTop:40}} placeholder="Verification Code" placeholderTextColor="#212F3D "/>

        </View>
          <AppButtonLog3 title="Login" onPress={messageLog1}/*onPress={() => navigation.navigate('home')}*/ />
        
      <View>
      </View>
    </View>
    
  )
}

const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

export default function EUro() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="1">

        <Stack.Screen name="1" component={Login3} />
        
        <Stack.Screen name="home" component={HomeScreen1} options={{
          title: 'Mr. raksilp',
          headerStyle: {
            backgroundColor: '#40E0D0',
          },
          headerTintColor: '#17202A',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 30,
            
          },
        }} />
        
        <Stack.Screen name="Details" component={DetailScreen} options={{
          title: 'Dr. raksilp',
          headerStyle: {
            backgroundColor: '#40E0D0',
          },
          headerTintColor: '#17202A',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 30,
            
          },
        }} /> 
        <Stack.Screen name="Addpatients" component={Addpatients} />
        

      </Stack.Navigator> 
    </NavigationContainer>  
  )
}
/*<Stack.Screen name="LoginFOrm"  component ={LoginFOrm} />*/
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  input:{
    backgroundColor: '#40E0D0',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 25

  },
  TextBotton: {
    
    backgroundColor: 'yellow',
    marginTop: 20,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    flexDirection: 'column',  
  },
  MainText: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 20,
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 145,
    marginVertical: 10
    
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 125,
    marginVertical: 10
  },
  appButtonContainer3: {
    elevation: 8,
    backgroundColor: "#7FB3D5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 125,
    marginVertical: 10
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
    
    
  }
});


