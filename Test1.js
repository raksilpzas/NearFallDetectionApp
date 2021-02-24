
import { ScrollView,ActivityIndicator,View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {ImageBackground,NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import React,{useState} from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input';





import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4';
//import Test5 from './Test5'
import Trend from './Trend'
import History from './History'
import Setting from './Setting';

import LOO from './LOO'
import HeartRate from './HeartRate';
import Test3Care from './Test3Care';
import Test2Care from './Test2Care';
import Test4Care from './Test4Care';



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
          
      <View style={{flex:4}}>
        <Image style ={{width: 400,
      height: 500,
      resizeMode: 'contain'
        }}
      source={require('./assets/Falling_Diary.png')}/>
      </View>         
          
          
      <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
          <View style={{position:'absolute',width:162,height:162,left:10,top:5}}>
              <Image   source={require('./assets/patient/wet-floor.png')}  style = {{opacity:0.1,marginLeft:80,width:250,height:204}}/>  
          </View>
      
          <AppButtonLog style={{backgroundColor:'#FFF'}} title="Login" onPress={() => navigation.navigate('Test2')}/>
          <AppButtonLog style={{backgroundColor:'#FFF'}} title="Sign Up" onPress={() => navigation.navigate('Test3')}/>
          
         
      </View>
      

        
    </View>
  )  
} 
const AppButtonLog = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{ borderRadius: 40/2,
  backgroundColor:'#FFF',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10,width:300,resizeMode: 'contain'}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

function fun2({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#8EDFC2'}}  >
    <View style={{flex:4}}>
        <Image style ={{width: 400,
      height: 500,
      resizeMode: 'contain'
        }}
      source={require('./assets/Falling_Diary.png')}/>
      </View>
    
    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
    <View style={{position:'absolute',width:162,height:162,left:10,top:5}}>
          <Image   source={require('./assets/patient/wet-floor.png')}  style = {{opacity:0.1,marginLeft:80,width:250,height:204}}/>  
        </View>
      <AppButtonLog style={{backgroundColor:'#FFF'}} title="Patient " onPress={() => navigation.navigate('fun1')}/>
      <AppButtonLog style={{backgroundColor:'#FFF'}} title="Care Giver" onPress={() => navigation.navigate('Care')}/>
      
    </View>
  </View>
  )
  
}

function Care({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#EF8F8F'}}  >
    <View style={{flex:4}}>
        <Image style ={{width: 400,
      height: 500,
      resizeMode: 'contain'
        }}
      source={require('./assets/Falling_Diary.png')}/>
      </View>
    
    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
    <View style={{position:'absolute',width:162,height:162,left:10,top:30}}>
          <Image   source={require('./assets/patient/wet-floor.png')}  style = {{opacity:0.1,marginLeft:80,width:250,height:204}}/>  
        </View>
      <AppButtonLog style={{backgroundColor:'#FFF'}} title="Login " onPress={() => navigation.navigate('Test2Care')}/>
      <AppButtonLog style={{backgroundColor:'#FFF'}} title="Sign Up" onPress={() => navigation.navigate('Test3Care')}/>
      
    </View>
  </View>
  )
  
}

function Addpatient({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#EF8F8F'}}  >
      
  
    
    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
      
    
    
    
    <View style={{position:'absolute',width:162,height:162,left:10,top:30}}>
          <Image   source={require('./assets/patient/wet-floor.png')}  style = {{opacity:0.1,marginLeft:80,width:250,height:204}}/>  
    </View>


    <View style={{flex:1.3}}>
      <TouchableHighlight onPress={() => navigation.navigate('Selectpatient')} style={{justifyContent:'center',alignItems:'center',position:'absolute',width:250,height:50,right:-125,top:20,backgroundColor:'#fff',borderStartColor:'#000',borderWidth:2}}>
        <Text style={{justifyContent:'center',alignItems:'center',fontSize:30}} >Caregiver</Text>
      </TouchableHighlight>

    </View>


    <View style={{flex:1}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    
        <TouchableOpacity  onPress={() => navigation.navigate('Selectpatient')} style={{ borderRadius: 40/2,position:'absolute',width:350,height:140,top:-300,justifyContent:'center',alignItems:'center',backgroundColor:'#4CBFD9', borderStartColor:'#40E0D0',borderWidth:2  }} >
          <Text style={{fontSize:30}}>Patients</Text>
          <Image style ={{position:'absolute',width:80,height:80,left:10,top:20}}source={require('./assets/caregiver/patient.png')}/>
        </TouchableOpacity>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() => navigation.navigate('AddPatient2')} style={{ position:'absolute',width:350,height:140,top:-140,justifyContent:'center',alignItems:'center',borderRadius: 40/2,backgroundColor:'#2EEBA7', borderStartColor:'#40E0D0',borderWidth:2  }} >
        <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:30,marginLeft:50}}>Add patients</Text>
           <Image style ={{position:'absolute',width:80,height:82,left:-40,top:-20}}source={require('./assets/caregiver/Addpatient.png')}/>
        </View>   
        </TouchableOpacity>
    </View>
    </View>

      
      
      
    </View>
  </View>
  )
  
}

function AddPatient2({navigation}) {
  const [HN, setHN] = useState('')
  return(
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>{HN}</Text>
      <TextInput 
      placeholder='Hospital Number (ID)'
      placeholderTextColor='#808B96'
      keyboardType='numeric'
      maxLength={8}
      onChangeText={(val)=> setHN(val)}
        style={{
        marginTop:40,borderRadius:40/2,
        boaderWidth:10,boaderColor:'#aaa',
        backgroundColor:'#8EDFC2',width:350,
        height:80,fontSize:30,paddingHorizontal:30
        }}
        
        />
  <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Addpatient')} style={{ borderRadius: 40/2,position:'absolute',width:350,height:80,top:500,justifyContent:'center',alignItems:'center',backgroundColor:'#8EDFC2', borderStartColor:'#40E0D0',borderWidth:2  }} >
      <Text style={{fontSize:30}}>Confirm</Text>
    </TouchableOpacity>
  </View>
      
    </View>
  )
}


function Loading({navigation}) {
  return(
    <View style={{flex:1,backgroundColor:'#8EDFC2',alignItems:'center',
  justifyContent:'center',}}>
    <Text style={{marginBottom:20 ,fontSize:30,fontWeight:'bold'}}>Loading Data ...</Text>
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size="large" color="#000"/> 
      <Button title="next" onPress={() => navigation.navigate('Test4')}></Button>
    </View>
      
  </View>)
  
}

function check({navigation,route,route2}) {

  const { countNumber,Nearfall} = route.params;
  

  return(

   <View style={{flex:1,backgroundColor:'#8EDFC2'}} >
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40}}>
        Are you falling?
      </Text>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Type',{countNumber,Nearfall})} style={{ borderRadius: 40/2,position:'absolute',width:339,height:170,left:37,top:107,backgroundColor:'#83E36B', borderStartColor:'#40E0D0',borderWidth:2  }} >
    <Image style ={{position:'absolute',width:162,height:162,left:90,top:5}}source={require('./assets/patient/check.png')}/>
    </TouchableOpacity>
      

    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Test4')} style={{borderRadius: 40/2, position:'absolute',width:339,height:170,left:37,top:315,backgroundColor:'#F81919', borderStartColor:'#40E0D0',borderWidth:2  }}>
    <Image style ={{position:'absolute',width:162,height:162,left:90,top:5}}source={require('./assets/patient/wrong.png')}/>
    </TouchableOpacity>
    

    </View>
   </View> 
   
  )
  
}
/*<Button title="Fall" onPress={increase}></Button>
        <Button title="NearFall" onPress={increaser}></Button>
        <Button title="reset" onPress={resete}></Button>
        <Button title="resetNearfall" onPress={reset}></Button>
        <Button title="resetALl" onPress={resetall}></Button>
*/
function Type({navigation,route}) {
  const { countNumber,Nearfall} = route.params;
  return(
  <View style={{flex:1,backgroundColor:'#51DBA9'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>
          Pol
      </Text>
    </View>
    
    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
    
    <TouchableOpacity onPress={() =>navigation.push('Type', {countNumber:countNumber+1})} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:20,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Fall</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>navigation.push('Type', {Nearfall:Nearfall+1})} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:100,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Near Fall</Text>
    </TouchableOpacity>
    </View>
    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:0,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Unhealty Body</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:80,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Slip/Stumble</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:160,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Drugs/Alchol</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{borderRadius: 40/2, position:'absolute',width:339,height:66,left:37,top:240,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Other Course</Text>
    </TouchableOpacity>
    </View>
    <View>
    <AppButtonComfirm  title="Comfirm" onPress={() => navigation.navigate('report',{countNumber,Nearfall})} />
    </View>
  </View>
  )
 
}
const AppButtonComfirm = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{borderRadius: 40/2,
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);
function Selectpatient({navigation,route}) {
  
  return(
  <View style={{flex:1,backgroundColor:'#E4A8AE'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>
          Patients
      </Text>
    </View>
    
    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={() =>navigation.navigate('Test4Care',{countNumber:+0,Nearfall:+0})} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:20,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
            <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>1. Wannasak penjakul</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>navigation.navigate('Test4Care',{countNumber:+0,Nearfall:+0})} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:120,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
            <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>2. Wannasak penjakul</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>navigation.navigate('Test4Care',{countNumber:+0,Nearfall:+0})} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:220,backgroundColor:'#fff', borderStartColor:'#40E0D0',borderWidth:2  }}>
            <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>3. Raksilp Chotemogko</Text>
      </TouchableOpacity>
    
    </View>
   
    
  </View>
  )
 
}

function splashScreen({navigation}) {
  setTimeout(()=>{
    navigation.navigate('fun2')
  },4000)
 
  return(
    <View style={{backgroundColor:'#66FFDA',alignItems:'center',justifyContent:'center',flex:1}}>
      <Image style={{flex:2,width:360}} source={require('./assets/Aboutus.png')}></Image>
    </View>
    
  )
  
}


function report({navigation,route}) {
  
  const { countNumber,Nearfall} = route.params;
  return(
    
    <View style={{flex:1}}>

      <View style={{flex:1.7,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>
          Report  {JSON.stringify(countNumber)}
        </Text>
        <Image
          style={{width: 120,height:120,borderRadius: 300/2}}
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',
          }}
          />
      </View>
      <View style={{flex:2.7}}>
      <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:30,backgroundColor:'#66FFDA', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Wannasak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Type')} style={{ borderRadius: 40/2,position:'absolute',width:339,height:66,left:37,top:110,backgroundColor:'#66FFDA', borderStartColor:'#40E0D0',borderWidth:2  }}>
        <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>0924790943</Text>
      </TouchableOpacity>
      </View>
      <View style={{borderRadius: 40/2,flex:3.2,backgroundColor:'#8EDFC2'}}>
      <TextInput multiline style={{borderRadius: 40/2,backgroundColor:'#8EDFC2',fontSize:30,paddingVertical:20}} placeholder="Detail...." placeholderTextColor="#808B96 "/>

      </View>
    <View >
    <AppButtonComfirm  title="Summit" onPress={() => navigation.navigate('Test4',{countNumber,Nearfall})} />
    </View>
    </View>

  )
  
}





const Test1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
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
        <Stack.Screen name="HeartRate" component={HeartRate} />
        <Stack.Screen name="LOO" component={LOO} />
        <Stack.Screen name="Test2Care" component={Test2Care} />
        <Stack.Screen name="Test3Care" component={Test3Care} />
        <Stack.Screen name="Test4Care" component={Test4Care} />
        <Stack.Screen name="Care" component={Care} />
        <Stack.Screen name="Addpatient" component={Addpatient} />
        <Stack.Screen name="Selectpatient" component={Selectpatient} />
        <Stack.Screen name="AddPatient2" component={AddPatient2} />
        <Stack.Screen name="splashScreen" component={splashScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default Test1;

