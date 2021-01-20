
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
    <View style={styles.container}>
      <Text sty>Public Landing Screen 333333</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Test3')}
      />
    </View>
  );
};
 
export default Test2;
