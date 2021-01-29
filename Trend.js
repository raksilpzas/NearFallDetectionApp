
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


//import Patient from './Patient'


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
 
const Trend = ({navigation}) => {
  return (
    <View style={{ flex:1,alignItems:'center', backgroundColor: '#73C6B6' }}>
      
        <Text style={styles.MainText}> Trend </Text>
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: "#F1948A"}}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
      
                 
    </View>
  )
};

const AppButtonMainPatient = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#164D29',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'#fff',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
const Count = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#fff',marginTop:20, elevation:10,paddingVertical: 80,paddingHorizontal:50,marginVertical: 5,borderBottomColor:'#40E0D0',borderTopColor:'#40E0D0',borderStartColor:'#40E0D0',borderWidth:20}} >
    <Text style={{color:'#000',fontSize:50,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

const stylesMainPatient = StyleSheet.create({
  paddd: {
    paddingTop: 20,
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
 
export default Trend;

