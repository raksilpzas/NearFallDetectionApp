
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryTheme } from "victory-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'


//import Patient from './Patient'


 


const HeartRate = ({navigation}) => {
  return (
    <View style={{ }}>
      <View style={{flexDirection:'row'}}>
        <Image  source={require('./assets/patient/heart.png')}  style = {{marginLeft:10,marginTop:5,width:30,height:30}}/>
      
        <Text style={{fontSize:30}}> Heartrate </Text>
      </View>
      <View style={{alignItems:'center', justifyContent:'center',marginTop:100}}>
        <TouchableOpacity style={{borderWidth:1,borderColor:'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:300,height:300,backgroundColor:'#01a699',borderRadius:150,}}>
        <View style={{flexDirection:'row'}}>
        <Icon name={"chevron-right"}  size={50} color="#fff" />
        <Text style={{fontSize:30,marginLeft:20}}>BPM</Text>
        </View>
          </TouchableOpacity>
        <Text style={{fontSize:30}}>Min: 72 bpm</Text>
        <Text style={{fontSize:30}}>Ang: 72 bpm</Text>
        <Text style={{fontSize:30}}>Max: 72 bpm</Text>

      </View>
      <AppButtonLog3  onPress={() => navigation.navigate('Loading')}/*onPress={() => navigation.navigate('home')}*/ />
     
      
        
                 
    </View>
  )
};

const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#01a699',marginTop:100, elevation:20,paddingVertical: 40,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
const Count = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#fff',marginTop:20, elevation:10,paddingVertical: 80,paddingHorizontal:50,marginVertical: 5,borderBottomColor:'#40E0D0',borderTopColor:'#40E0D0',borderStartColor:'#40E0D0',borderWidth:20}} >
    <Text style={{color:'#000',fontSize:50,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  paddd: {
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  }

});
 
export default HeartRate;

