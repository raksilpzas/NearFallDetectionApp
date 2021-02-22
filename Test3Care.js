
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
 
const Test3Care = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [First, setFirst] = useState('');
  const [Last, setLast] = useState('');
  const [HN, setHN] = useState('');
  return (
    <View style={{padding: 50,flex:1 ,backgroundColor:'#E4A8AE'}}>
       <View style={{position:'absolute',width:162,height:162,top:250}}>
              <Image   source={require('./assets/patient/wet-floor.png')}  style = {{opacity:0.1,marginLeft:80,width:250,height:204}}/>  
          </View>
      
      
     
    
      <View style={{flex:1,marginTop:-60}}>
        
        <Text style={{color:'#fff',fontWeight:'bold',fontStyle:'italic',fontSize:40,textAlign:'center'}}>
        Sign up
        </Text>
        
        

      </View>
        <View style={{flex:4}}>
        <FloatingLabelInput
       value={First}
       staticLabel
       hintTextColor={'#aaa'}
       mask="ABCDEFGHJKLMNOP "
       hint="First Name"
       containerStyles={{ 
         marginTop:1,
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
         setFirst(value);
       }}
       
       
       
     />
      <FloatingLabelInput
       value={Last}
       staticLabel
       hintTextColor={'#aaa'}
       mask="ABCDEFGHJKLMNOP "
       hint="Last Name"
       containerStyles={{ 
         marginTop:10,
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
         setLast(value);
       }}
       
       
       
     />
      <FloatingLabelInput
       value={HN}
       staticLabel
       hintTextColor={'#aaa'}
       mask="99999999"
       hint="Hospital Number"
       keyboardType="numeric"
       containerStyles={{ 
         marginTop:10,
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
         setHN(value);
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
      <View style={{marginTop:10}} >
       <FloatingLabelInput
        value={pass}
        staticLabel
        hintTextColor={'#aaa'}
        mask="ABCDEFGHJKLMNOP "
        
        hint="password"
        containerStyles={{
          
          marginTop:1,
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
      
        
         
      </View>
          <AppButtonLog3 title="Sign Up" onPress={() => navigation.navigate('Test2Care')} />
      
            
          
            

        
    </View>
  );
};
const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{borderRadius: 40/2,
  backgroundColor:'#EF8F8F',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
 
export default Test3Care;

