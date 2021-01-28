
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React from 'react'


import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4';
import Trend from './Trend'
import History from './History'

import Setting from './Setting';
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
    <TouchableOpacity onPress={() => navigation.navigate('Test4')} style={{ position:'absolute',width:339,height:170,left:37,top:315,backgroundColor:'#F81919', borderStartColor:'#40E0D0',borderWidth:2  }}>
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
    </View>
    <View>
    <AppButtonComfirm  title="Comfirm" onPress={() => navigation.navigate('report')} />
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

function report({navigation}) {
  return(
    <View style={{flex:1}}>
      <View style={{flex:1.7,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>
          Report
        </Text>
        <Image
          style={{width: 120,height:120,borderRadius: 300/2}}
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',
          }}
          />
      </View>
      <View style={{flex:2.7}}>
      <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:30,backgroundColor:'#66FFDA', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Wannasak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ position:'absolute',width:339,height:66,left:37,top:110,backgroundColor:'#66FFDA', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>0924790943</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:3.2,backgroundColor:'#8EDFC2'}}>
      <TextInput style={{backgroundColor:'#8EDFC2',fontSize:30,paddingVertical:20}} placeholder="Detail...." placeholderTextColor="#808B96 "/>

      </View>
    <View style={{}}>
    <AppButtonComfirm  title="Summit" onPress={() => navigation.navigate('Test4')} />
    </View>
    </View>

  )
  
}





const Test1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen name="fun1" component={fun1} />
        <Stack.Screen name="fun2" component={fun2} />
        <Stack.Screen name="Test2" component={Test2} />
        <Stack.Screen name="Test3" component={Test3} />
        <Stack.Screen name="Test4" component={Test4} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="check" component={check} />
        <Stack.Screen name="Type" component={Type} />
        <Stack.Screen name="report" component={report} />
        <Stack.Screen name="Trend" component={Trend} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default Test1;

