
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

function fun1({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#8EDFC2'}}  >
      <View style={{flex:1}}>
        <Image style ={{width: 100,
      height: 100,
      resizeMode: 'contain'
    }}
      source={require('./assets/NFDicon.jpg')}/>
      </View>
      <View style={{flex:4}}>
        <Text style={{fontSize: 30}}>
          Detection {"\n"}Smart{"\n"}Home{"\n"}
        </Text>
        
      </View>
      <View>
        <AppButtonLog style={{backgroundColor:'#FFF'}} title="Login" onPress={() => navigation.navigate('fun2')}/>
        <AppButtonLog style={{backgroundColor:'#FFF'}} title="Sign Up" onPress={() => navigation.navigate('Test3')}/>
        
      </View>
    </View>
  )
  
} 
const AppButtonLog = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#FFF',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

function fun2({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#8EDFC2'}}  >
    <View style={{flex:1}}>
      <Image style ={{width: 100,
    height: 100,
    resizeMode: 'contain'
  }}
    source={require('./assets/NFDicon.jpg')}/>
    </View>
    <View style={{flex:4}}>
      <Text style={{fontSize: 30}}>
        Detection {"\n"}Smart{"\n"}Home{"\n"}
      </Text>
      
    </View>
    <View>
      <AppButtonLog style={{backgroundColor:'#FFF'}} title="Patient " onPress={() => navigation.navigate('Test2')}/>
      <AppButtonLog style={{backgroundColor:'#FFF'}} title="Care Giver" onPress={() => navigation.navigate('Test3')}/>
      
    </View>
  </View>
  )
  
}

function Loading({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#8EDFC2',alignItems:'center',
  justifyContent:'center',}}>
    <Text style={{marginBottom:20 ,fontSize:30,fontWeight:'bold'}}>Loading Data ...</Text>
    <View style={{alignItems:'center',
  justifyContent:'center',}}>
      <Image style ={{width: 100,height: 100,resizeMode: 'contain'}}source={require('./assets/loader.jpg')} /> 
      <Button title="next" onPress={() => navigation.navigate('Test4')}></Button>
    </View>
      
  </View>)
  
}

function check({navigation}) {
  return(
   <View style={{flex:1,backgroundColor:'#8EDFC2'}} >
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40}}>
        Are you falling?
      </Text>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:170,left:37,top:107,backgroundColor:'#83E36B', borderStartColor:'#40E0D0',borderWidth:2  }} >
    <Image style ={{position:'absolute',width:162,height:162,left:90,top:5}}source={require('./assets/patient/check.png')}/>
    </TouchableOpacity>
      

    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:170,left:37,top:315,backgroundColor:'#F81919', borderStartColor:'#40E0D0',borderWidth:2  }}>
    <Image style ={{position:'absolute',width:162,height:162,left:90,top:5}}source={require('./assets/patient/wrong.png')}/>
    </TouchableOpacity>
    

    </View>
   </View> 
   
  )
  
}

function Type({navigation}) {
  return(
  <View style={{flex:1,backgroundColor:'#51DBA9'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>
          Pol
      </Text>
    </View>
    
    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:20,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Fall</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:100,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Near Fall</Text>
    </TouchableOpacity>
    </View>
    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:0,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Unhealty Body</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:80,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Slip/Stumble</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:160,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Drugs/Alchol</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:240,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Other Course</Text>
    </TouchableOpacity>
    <AppButtonComfirm title="Comfirm" onPress={() => navigation.navigate('Loading')} />
    </View>
  </View>
  )
 
}
const AppButtonComfirm = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);



const Test1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="fun1">
        <Stack.Screen name="fun1" component={fun1} />
        <Stack.Screen name="fun2" component={fun2} />
        <Stack.Screen name="Test2" component={Test2} />
        <Stack.Screen name="Test3" component={Test3} />
        <Stack.Screen name="Test4" component={Test4} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="check" component={check} />
        <Stack.Screen name="Type" component={Type} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default Test1;

