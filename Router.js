import { Scene, Router } from 'react-native-router-flux';
import Home from './HomeScreen'
const AppComponent = () => {
    return(
      <Router>
        <Scene key="root">
          <Scene Key="Home" component={Home} title="Myhomepage"/>
  
        </Scene>
      </Router>
    )
  
  }