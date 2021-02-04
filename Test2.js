
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
 
const Test2 = ({navigation}) => {
  return (
    <View style={{flex:1 ,backgroundColor:'#E8F8F5'}}>
      <View style={{flex:1}}>
        <Text style={{fontSize:40,textAlign:'center'}}>
        Log In
        </Text>

      </View>
        <View style={{flex:4}}>
        
          <TextInput style={{placeholderTextColor:'#808B96',backgroundColor:'#fff',fontSize:30,paddingVertical:20}} placeholder="Phone Number" />
          <Button style={{borderRadius: 40/2,backgroundColor:'#7FB3D5'}}title="Get code"/>
         <TextInput style={{placeholderTextColor:'#808B96',backgroundColor:'#fff',fontSize:30,paddingVertical:20,marginTop:40}} placeholder="Verification Code"/>

        </View>
          <AppButtonLog3 title="Login" onPress={() => navigation.navigate('Test4',{countNumber:+0,Nearfall:+0})} />
        
      <View>
      </View>
    </View>
  );
};
const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{borderRadius: 40/2,
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
export default Test2;
