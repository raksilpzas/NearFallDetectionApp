
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Patient from './Patient'
const drawer = createDrawerNavigator();
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Test4 = ({navigation}) => {
  return (
    
    <View style={{ flex:1,alignItems:'center', backgroundColor: '#51DBA9' }}>
      
        <Text style={styles.MainText}> Wannasak </Text>
        
      
      
        
        
        
      <View style={{alignItems: 'center',flexDirection: 'row',justifyContent: 'space-evenly',width: '100%',}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('HeartRate')}>
              <Image  source={require('./assets/patient/heart.png')}  style = {{marginTop:10,marginLeft:20,width:30,height:30}}/>   
        </TouchableOpacity>
          
          <Text style={{flex:4,marginLeft:60,fontSize:30,fontWeight:'bold',alignItems:'center',justifyContent:'center'}}> Assistance  </Text>
        <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('Setting')}>
              <Image  source={require('./assets/patient/sett.png')}  style = {{marginTop:10,marginRight:20,width:30,height:30}}/>   
        </TouchableOpacity>
      </View>
      
      
        
        <Text style={{textAlign:'center',color:'#fff',fontSize:20}}> Connected </Text>
      <View style={{paddingTop: 10,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-evenly',width: '100%',marginBottom: 20}}>
        <Text style={{fontSize:30,marginLeft:20}}>Fall</Text>
        <Text style={{fontSize:30,marginLeft:80}}>Near Fall</Text>
      </View>
      
      <View style={stylesMainPatient.paddd}>

          <Count title="50"></Count>
          
          <Count title="50"></Count>
              
      </View>
      <View>
        <AppButtonMainPatient title="Add Fall/Near Fall" onPress={() => navigation.navigate('check')}></AppButtonMainPatient>
      </View>   
      <View style={stylesMainPatient.paddd  }>

        <TouchableOpacity onPress={() => navigation.navigate('Trend')} style={{ borderRadius: 40/2,height: 90,width:170,backgroundColor:'#fff', borderStartColor:'##40E0D0',borderWidth:2  }}>
          <View style={{flexDirection:'row'}}>
             <Image style ={{marginTop:30,marginLeft:10,width: 30,height: 30,resizeMode: 'contain'}}source={require('./assets/patient/bar-chart.png')}/>
      
             <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Trend</Text>

             <Image style ={{marginTop:37 , width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/next.png')}/>


          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')} style={{ borderRadius: 40/2,height: 90,width:170,backgroundColor:'#fff', borderStartColor:'#000',borderWidth:2  }}>
          <View style={{flexDirection:'row'}}>
             <Image style ={{marginTop:35, marginLeft:10 , width: 30,height: 30,resizeMode: 'contain'}}source={require('./assets/patient/clock.png')}/>
             <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>History</Text>
             <Image style ={{marginTop:37 , width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/next.png')}/>
          </View>
        </TouchableOpacity>
             
      </View>
      
        
        
    </View>
  )
};
const AppButtonMainPatient = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{ borderRadius: 40/2,
  backgroundColor:'#164D29',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'#fff',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

const Count = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{ borderRadius: 80/2,
  backgroundColor:'#fff',marginTop:20, elevation:10,paddingVertical: 80,paddingHorizontal:50,marginVertical: 5,borderBottomColor:'#40E0D0',borderTopColor:'#40E0D0',borderStartColor:'#40E0D0',borderWidth:5}} >
    <Text style={{color:'#000',fontSize:50,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

const stylesMainPatient = StyleSheet.create({
  paddd: {
    
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  numbers:{
    fontSize:50,
    color: '#000000',
    fontWeight: 'bold',
    textAlign:'center'
  },
  verticaLine: {
    flex:1,
    height:'100%',
    width: 1,
    backgroundColor:'#000000',
    borderLeftColor: '#000000',
  }

});
 
export default Test4;

