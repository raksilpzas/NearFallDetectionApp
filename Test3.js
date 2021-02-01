
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'
//import Patient from './Patient'

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
 
const Test3 = ({navigation}) => {
  return (
    <View style={{flex:1 ,backgroundColor:'#E8F8F5'}}>
      <View style={{flex:1}}>
        <Text style={{fontSize:40,textAlign:'center'}}>
        Sign Up
        </Text>

      </View>
        <View style={{flex:4}}>
        
          <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20}} placeholder="Phone Number" placeholderTextColor="#808B96 "/>
          <Button style={{borderRadius: 40/2,backgroundColor:'#7FB3D5'}}title="Get code"/>
         <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20,marginTop:40}} placeholder="Verification Code" placeholderTextColor="#212F3D "/>

        </View>
          <AppButtonLog3 title="Login" onPress={() => navigation.navigate('Test2')}/*onPress={() => navigation.navigate('home')}*/ />
        
      <View>
      </View>
    </View>
  );
};
const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{borderRadius: 40/2,
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
 
export default Test3;

