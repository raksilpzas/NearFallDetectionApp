
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert, Dimensions} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryTheme } from "victory-native";


//import Patient from './Patient'


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const NearFall = [
  { nearfall: "day1", earnings: 20 },
  { nearfall: "day2", earnings: 5 },
  { nearfall: "day3", earnings: 8 },
  { nearfall: "day4", earnings: 10 }
];

const Fall = [
  { fall: "day1", earnings: 1 },
  { fall: "day2", earnings: 4 },
  { fall: "day3", earnings: 5 },
  { fall: "day4", earnings: 0 }
];
//theme={VictoryTheme.material} 
//<VictoryBar data1={data1.nearfall} />
//<VictoryBar data1={data1.fall} />
//style={{ Fall: { fill: "#c43a31" }}}
const Trend = ({navigation}) => {
  return (
    <View style={{ flex:1,alignItems:'center', backgroundColor: '#73C6B6' }}>
      
        <Text style={{fontSize:50}}> Trend </Text>
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: "#fff"}}>
        <VictoryChart width={350} >
            <VictoryAxis label="Day"/>
            <VictoryAxis dependentAxis label="Count" />
        
          <VictoryGroup offset={15} >
            <VictoryBar data={NearFall} x="nearfall" y="earnings" style={{data:{fill:'blue'}}} />
            <VictoryBar data={Fall} x="fall" y="earnings" style={{data:{fill:'orange'}}} />
          </VictoryGroup>
        </VictoryChart>
        
          <VictoryLegend 
          x={Dimensions.get('screen').width/2-50}
           data={[{name:'NearFall',symbol:{fill:'blue',},},{name:'Fall',symbol:{fill:'orange',},},]} />
         
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

