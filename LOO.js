
import { ScrollView,ActivityIndicator,View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'
import { set } from 'react-native-reanimated';
import Test4 from './Test4'
import { FlatList } from 'react-native-gesture-handler';
import { FloatingLabelInput } from 'react-native-floating-label-input';
//import Patient from './Patient'


 
const LOO =({navigation}) => {
  
  const [phone, setPhone] = useState('');
return(
 
   
    <View style={{padding: 50, flex: 1, backgroundColor: '#fff'}}>
      <FloatingLabelInput
        label={'label'}
        value={phone}
        leftComponent={
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/25/25231.png',
            }}
          />
        }
        isPassword
        onChangeText={(val) => setPhone(val)}
        
        
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
      />
    </View>
 


)
}

export default LOO;