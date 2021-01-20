import React from 'react'
import { View, Text ,StyleSheet,Image, SafeAreaView ,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert} from 'react-native'
import {NavigationContainer, createAppContainer, createNavigatorFactory} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';





const Stack = createStackNavigator();

function AnimateScreen1() {
  return(
    <View style={{flex:1, backgroundColor:'#73C6B6',alignItems:'center',justifyContent:'center'}}>

      <Image style ={{width: 250, height: 150}}
      source={require('./assets/NFDicon.jpg')}/>
 
    </View>
  )
  
}

function Login2(){
  return(
    <View style={{flex:1,backgroundColor:'#73C6B6'}}  >
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
        <AppButtonLog style={{backgroundColor:'#FFF'}} title="Login"/>
        <AppButtonLog style={{backgroundColor:'#FFF'}} title="Password"/>
        
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


/**หน้าLogin3 Getcode*/
function messageLog1() {
  Alert.alert('Log In',"textttt")
  
  
}

function Login3(){
  return(
    
    <View style={{flex:1 ,backgroundColor:'#E8F8F5'}}>
      <View style={{flex:1}}>
        <Text style={{fontSize:40,textAlign:'center'}}>
        Log In
        </Text>

      </View>
        <View style={{flex:4}}>
        
          <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20}} placeholder="Phone Number" placeholderTextColor="#808B96 "/>
          <Button style={{backgroundColor:'#7FB3D5'}}title="Get code"/>
         <TextInput style={{backgroundColor:'#fff',fontSize:30,paddingVertical:20,marginTop:40}} placeholder="Verification Code" placeholderTextColor="#212F3D "/>

        </View>
          <AppButtonLog3 title="Login" onPress={messageLog1}/*onPress={() => navigation.navigate('home')}*/ />
        
      <View>
      </View>
    </View>
    
  )
}
function LoadingLog() {
  return(
  <View style={{flex:1,backgroundColor:'#73C6B6',alignItems:'center',
  justifyContent:'center',}}>
    <Text style={{marginBottom:20 ,fontSize:30,fontWeight:'bold'}}>Loading Data ...</Text>
    <View style={{alignItems:'center',
  justifyContent:'center',}}>
      <Image style ={{width: 100,height: 100,resizeMode: 'contain'}}source={require('./assets/loader.jpg')}/> 
    </View>
      
  </View>)

}
const AppButtonLog3 = ({ onPress,title }) => (
  <TouchableOpacity onPress={onPress} 
  style={{
  backgroundColor:'#66FFDA',marginTop:20, elevation:20,paddingVertical: 20,paddingHorizontal:10,marginVertical: 10}} >
    <Text style={{color:'',fontSize:30,textAlign:'center'}}>{title}</Text>
  </TouchableOpacity>
);

function mainPatient() {
  return(
    <View style={{ flex:1,alignItems:'center', backgroundColor: '#73C6B6' }}>
      
        <Text style={styles.MainText}> Wannasak </Text>
      <View style={{alignItems: 'center',flexDirection: 'row',justifyContent: 'space-evenly',width: '100%',}}>
        <Image style={{flex:1,marginTop:10,resizeMode:'contain',height:30,width:30}} source={require('./assets/patient/heart.png')}/>
        <Text style={{flex:4,marginLeft:40,fontSize:30,fontWeight:'bold',alignItems:'center',justifyContent:'center'}}> Assistance  </Text>
      </View>
        
        <Text style={{textAlign:'center',color:'#fff',fontSize:20}}> Connected </Text>
      <View style={stylesMainPatient.paddd}>

          <Count title="50"></Count>
          <View style={stylesMainPatient.verticalLine}></View>
          <Count title="50"></Count>
              
      </View>
      <View>
        <AppButtonMainPatient title="Add Fall/Near Fall"></AppButtonMainPatient>
      </View>   
      <View style={stylesMainPatient.paddd  }>

        <TouchableOpacity style={{ height: 90,width:170,backgroundColor:'#fff', borderStartColor:'##40E0D0',borderWidth:2  }}>
          <View style={{flexDirection:'row'}}>
             <Image style ={{marginTop:30,marginLeft:10,width: 30,height: 30,resizeMode: 'contain'}}source={require('./assets/patient/bar-chart.png')}/>
      
             <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>Trend</Text>

             <Image style ={{marginTop:37 , width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/next.png')}/>


          </View>
          
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 90,width:170,backgroundColor:'#fff', borderStartColor:'#000',borderWidth:2 }}>
          <View style={{flexDirection:'row'}}>
             <Image style ={{marginTop:35, marginLeft:10 , width: 30,height: 30,resizeMode: 'contain'}}source={require('./assets/patient/clock.png')}/>
             <Text style={{fontSize:30,textAlign:'center',marginTop:25,marginLeft:10}}>History</Text>
             <Image style ={{marginTop:37 , width: 20,height: 20,resizeMode: 'contain'}}source={require('./assets/patient/next.png')}/>
          </View>
        </TouchableOpacity>
             
      </View>
      
        
        
    </View>
  )
  
}
//<Text style={stylesMainPatient.numbers}>2</Text>
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


function HomeScreen1({navigation}) {
  return(
    <View style={{ flex:1,alignItems: 'center', backgroundColor: '#73C6B6' }}>
      <Text style={styles.MainText}> Caregiver </Text>
      <Text style={styles.MainText}> 19/09/2020||21:36:20 </Text>

      <View style={{ flex:1,alignItems: 'center',justifyContent:'center'}}>
        <AppButton title="Patients ผู้ป่วย" size="sm" backgroundColor="#007bff" 
        onPress={() => navigation.navigate('Details')}></AppButton>
        <AppButton2 title="Add Patient สบายๆ" size="sm" backgroundColor="#007bff" 
        onPress={() => navigation.navigate('Details')}></AppButton2>
        <AppButton2 title="Help Center" size="sm" backgroundColor="#fff" 
        onPress={() => navigation.navigate('Details')}></AppButton2> 
      </View> 

    </View>
  )
  
}


function Addpatients() {
  return(
    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
      <Text style={styles.MainText}> Raksilp Chotemongkolkul </Text>
      <Text style={{fontSize: 20,fontWeight: 'bold', marginBottom: 15}}> Raksilp</Text>
      
      
    </View>
  )
  
}


function DetailScreen(navigation) {
  return(

   
    <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
      
      <View style={{flex:1,backgroundColor: "#73C6B6"}}>
        <View style={{ marginTop:60, flex:1,alignItems: 'center',justifyContent:'center'}}>
          <Text style={styles.MainText}> Patients </Text>
          <Image
          style={{width: 200,height:200,borderRadius: 300/2}}
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',
          }}
          />
          <AppButton2 title="Home" size="sm" backgroundColor="#007bff" 
          onPress={() => navigation.navigate('home')}></AppButton2>
        </View >
        
        <View style={{marginTop: 200}}>
          <TextInput style={styles.input}
            placeholder="Hospital Number"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onSubmitEditing={()=>this.passwordInput.focus()}
          
          />
          <TextInput style={styles.input}
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          ref={(input)=> this.passwordInput = input}
          /*returnKeyType="Done"*/
          />
          <TouchableOpacity style={{backgroundColor:'#F1948A', paddingVertical: 15}}>
            <Text style={{textAlign:'center', color: '#FFF',fontSize:30}}>Login</Text>
          </TouchableOpacity>

        
        </View>
      </View>
      
      
    </KeyboardAvoidingView>
  
  )
  
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="1">

        <Stack.Screen name="1" component={mainPatient} />
        
        <Stack.Screen name="home" component={HomeScreen1} options={{
          title: 'Mr. raksilp',
          headerStyle: {
            backgroundColor: '#40E0D0',
          },
          headerTintColor: '#17202A',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 30,
            
          },
        }} />
        
        <Stack.Screen name="Details" component={DetailScreen} options={{
          title: 'Dr. raksilp',
          headerStyle: {
            backgroundColor: '#40E0D0',
          },
          headerTintColor: '#17202A',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 30,
            
          },
        }} /> 
        <Stack.Screen name="Addpatients" component={Addpatients} />
        

      </Stack.Navigator> 
    </NavigationContainer>  
  )
}
/*<Stack.Screen name="LoginFOrm"  component ={LoginFOrm} />*/

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  input:{
    backgroundColor: '#40E0D0',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 25

  },
  TextBotton: {
    
    backgroundColor: 'yellow',
    marginTop: 20,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    flexDirection: 'column',  
  },
  MainText: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 20,
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 145,
    marginVertical: 10
    
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 125,
    marginVertical: 10
  },
  appButtonContainer3: {
    elevation: 8,
    backgroundColor: "#7FB3D5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 125,
    marginVertical: 10
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
    
    
  }
});

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer1} >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const AppButton2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer2}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


/*<View style={{ flex:1,alignItems: 'center', backgroundColor: 'skyblue'}} >
      <Text style={styles.MainText}> Add paients </Text>
      <Text style={{fontSize: 20,fontWeight: 'bold', marginBottom: 15}}> Raksilp</Text>
    <View style={{ flex:1,alignItems: 'center',justifyContent:'center'}}>
      <Image
        style={{flex:1,width: 200,height: 300,borderRadius: 300/2}}
        source={{
          uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',
        }}
      />
    </View >
    
    <View style={{flex:1}}>
      <AppButton title="Raksilp" size="sm" backgroundColor="#007bff" 
      
      
      />
      <AppButton title="Chotemongkolkul" size="sm" backgroundColor="#007bff" />
      <AppButton title="Hey there!" size="sm" backgroundColor="#007bff" />
      <AppButton title="Hey there!" size="sm" backgroundColor="#007bff" /> 
    </View>
    <View style={{flex:1,marginTop: 50}}>
      <AppButton2 title="Assistance" size="sm" backgroundColor='black' />
      <AppButton2 title="Delete" size="sm" backgroundColor="#007bff" />
    </View>

    </View>*/


    /* ใส่รูปadd บนheader 
     options={{
    headerTitle: () => (
        <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/122082235_3414586465302910_2734779902747346109_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE5NhpllyU4FDmiQ1bayTRHXqptoAuLGfteqm2gC4sZ-z9NcsFMqr12Yh1sv0myUTzCRNcalEz4uE4cpe6p1_FG&_nc_ohc=QqhMfQrhc2QAX_xTC1u&_nc_ht=scontent.xx&oh=bd246b7b69db7b6fc528a4547473a517&oe=600595D7',}}
        />
    ),
    }} */












