
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'


import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4';
//import Patient from './Patient'
const Stack = createStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function pam({navigation}) {
  return(
    <View style={{ flex:1,alignItems: 'center', backgroundColor: '#73C6B6' }}>
      <Text style={styles.MainText}> Caregiver </Text>
      <Text style={styles.MainText}> 19/09/2020||21:36:20 </Text>

      <View style={{ flex:1,alignItems: 'center',justifyContent:'center'}}>
        <Button title="Patients ผู้ป่วย" size="sm" backgroundColor="#007bff" 
        onPress={() => navigation.navigate('pam2')}></Button>
      </View> 

    </View>
  )
  
}

function pam2({navigation}) {
  return(
    <View style={{ flex:1,alignItems: 'center', backgroundColor: '#73C6B6' }}>
      

      <View style={{ flex:1,alignItems: 'center',justifyContent:'center'}}>
        <Button title="2222222222222" size="sm" backgroundColor="#007bff" 
        onPress={() => navigation.navigate('Test2')}></Button>
      </View> 

    </View>
  )
  
}
 
const Test1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pam">
        <Stack.Screen name="pam" component={pam} />
        <Stack.Screen name="pam2" component={pam2} />
        <Stack.Screen name="Test2" component={Test2} />
        <Stack.Screen name="Test3" component={Test3} />
        <Stack.Screen name="Test4" component={Test4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default Test1;

