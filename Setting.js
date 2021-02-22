
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
 
const Setting = ({navigation}) => {
  return (
    <View style={{ flex:1, backgroundColor: '#fff'  }}>

      <View style={{ alignItems:'center'}}>
        <Text style={{fontSize:30}}> Setting </Text>
      </View>
      <View style={stylesMain.paddd}>
        <Image
          style={{width: 120,height:120,borderRadius: 300/2}}
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',
          }}
          />
        <Text style={stylesMain.numbers}>Wannasak {'\n 092-4790943'} </Text>
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 2,}}/>
      <Text style={stylesMain.numbers}>Hospital number(Patient ID)</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 2,}}/>
      <Text style={{fontSize:30,color: '#000000'}}>Family</Text>
      <View style={{flexDirection:'row'}}>
      <Image
          style={{width: 100,height:100,borderRadius: 300/2}}
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',
          }}
          />
      <Image
          style={{marginTop:10,marginLeft:30,width: 60,height:60,borderRadius: 300/2}}
          source={require('./assets/patient/plus.png')}
          />
      <Image
          style={{marginTop:10,marginLeft:30,width: 60,height:60,borderRadius: 300/2}}
          source={require('./assets/patient/plus.png')}
          />
      </View>
      <View style={{ paddingTop:20 ,borderBottomColor: 'black', borderBottomWidth: 2,}}/>
      <View style={{flexDirection:'row'}}>
      <Image style ={{marginTop:15, marginLeft:5 ,marginRight:10,width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/global.png')}/>
        <Text style={{fontSize:30,color: '#000000'}}>Language</Text>
        
      </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 2,}}/>
      <View style={{flexDirection:'row'}}>
      <Image style ={{marginTop:15, marginLeft:5 ,marginRight:10,width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/lock.png')}/>
        <Text style={{fontSize:30,color: '#000000'}}>Change Password</Text>
        
      </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 2,}}/>
        <View style={{flexDirection:'row'}}>
      <Image style ={{marginTop:15, marginLeft:5 ,marginRight:10,width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/information.png')}/>
        <Text style={{fontSize:30,color: '#000000'}}>Help</Text>
        
      </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 2,flexDirection:'row'}}/>
        
        <TouchableOpacity onPress={() => navigation.navigate('fun2')} style={{ flex: 1,justifyContent: 'flex-end',marginTop:20,marginBottom: 36,width:200,backgroundColor:'#EF8F8F', borderStartColor:'#EF8F8F',borderWidth:2  }}>
          <Image style ={{marginVertical:-45, marginLeft:5 ,marginRight:10,width: 40,height: 40,resizeMode: 'contain'}}source={require('./assets/patient/arrow.png')}/>
          <Text style={{fontSize:30,marginLeft:30,textAlign:'center',marginBottom:20}}>Logout</Text>
        </TouchableOpacity>



      
                 
    </View>
  )
};
const AppButtonMainPatient = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#EF8F8F',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'#000',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
const Count = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#fff',marginTop:20, elevation:10,paddingVertical: 80,paddingHorizontal:50,marginVertical: 5,borderBottomColor:'#40E0D0',borderTopColor:'#40E0D0',borderStartColor:'#40E0D0',borderWidth:20}} >
    <Text style={{color:'#000',fontSize:50,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

const stylesMain = StyleSheet.create({
  paddd: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  numbers:{
    fontSize:30,
    color: '#000000',
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
 
export default Setting;

