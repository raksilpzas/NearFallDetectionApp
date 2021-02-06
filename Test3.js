
import { ScrollView ,View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import { Kaede } from 'react-native-textinput-effects';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import React,{useState} from 'react'
//import Patient from './Patient'

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
 
const Test3 = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={{padding: 50,flex:1 ,backgroundColor:'#8EDFC2'}}>
      
      
     
    
      <View style={{flex:1,marginTop:-30}}>
        
        <Text style={{color:'#fff',fontWeight:'bold',fontStyle:'italic',fontSize:40,textAlign:'center'}}>
        Sign up
        </Text>
        
        

      </View>
        <View style={{flex:4}}>
        <FloatingLabelInput
       
       label="Name"
       value={pass}
       staticLabel
       hintTextColor={'#aaa'}
       mask="ABCDEFGHJKLMNOP "
       
       hint="Name"
       containerStyles={{
         
         marginTop:40,
         borderWidth: 2,
         paddingHorizontal: 10,
         backgroundColor: '#fff',
         borderColor: '#fff',
         borderRadius: 10,
         
       }}
       customLabelStyles={{
         colorFocused: '#fff',
         fontSizeFocused: 40,
         borderColor: '#fff'
       }}
       labelStyles={{
         backgroundColor: '#8EDFC2',
         
       }}
       inputStyles={{
         color: '#000',
         paddingHorizontal: 10,
         fontSize:30
       }}
       
       onChangeText={(value) => {
         setPass(value);
       }}
       
       
       
     />
          
            
            
            <FloatingLabelInput
        
        value={phone}
        staticLabel
        hintTextColor={'#aaa'}
        mask="999-999-9999"
        hint="Phone number"
        keyboardType="numeric"
        containerStyles={{
          
          marginTop:40,
          borderWidth: 2,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderRadius: 10,
          
          
          
        }}
        customLabelStyles={{
          colorFocused: '#fff',
          fontSizeFocused: 40,
          
        }}
        labelStyles={{
          backgroundColor: '#8EDFC2',
          paddingHorizontal: 1,
          
        }}
        inputStyles={{
          color: '#000',
          paddingHorizontal: 10,
          fontSize:30
        }}
        onChangeText={(value) => {
          setPhone(value);
        }}
      />
      <View style={{marginTop:40}} >
       <FloatingLabelInput
       
        label="Password"
        value={pass}
        staticLabel
        hintTextColor={'#aaa'}
        mask="ABCDEFGHJKLMNOP "
        
        hint="password"
        containerStyles={{
          
          marginTop:40,
          borderWidth: 2,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderRadius: 10,
          
        }}
        customLabelStyles={{
          colorFocused: '#fff',
          fontSizeFocused: 40,
          borderColor: '#fff'
        }}
        labelStyles={{
          backgroundColor: '#8EDFC2',
          
        }}
        inputStyles={{
          color: '#000',
          paddingHorizontal: 10,
          fontSize:30
        }}
        isPassword
        onChangeText={(value) => {
          setPass(value);
        }}
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
        
        
      />
      </View>
      
        
          <View style={{position:'absolute',width:162,height:162,left:-60,top:250}}>
              <Image   source={require('./assets/patient/wet-floor.png')}  style = {{opacity:0.1,marginLeft:80,width:250,height:204}}/>  
          </View>
      </View>
          <AppButtonLog3 title="Sign Up" onPress={() => navigation.navigate('Test2')} />
      
            
          
            

        
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

