import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import  HomeScreen  from './HomeScreen';
//import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen'
import CarScreen from './CarScreen';
import ListaCarrosGuardadosScreen from './CarrosGuardadosScreen';
import RentarCarrosScreen from './RentarCarrosScreen';


const Tab = createBottomTabNavigator();

export default function HomeTabs(){
    return(
      <Tab.Navigator initialRouteName='Login'
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor: 'orange'
        
      }}
      >
        <Tab.Screen name='Login' component={LoginScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="home" size={25}/>)
        }}/>
        
    {/* <Tab.Screen name='Profile' component={ProfileScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="person" size={25}/>)
        }}/> 

                   <Tab.Screen name='Car' component={CarScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="favorite" size={25}/>)
        }}/>    
             <Tab.Screen name='CarrosGuardados' component={ListaCarrosGuardadosScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="bookmark" size={25}/>)
        }}/>    
              <Tab.Screen name='RentarCarros' component={RentarCarrosScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="chat" size={25}/>)
        }}/> 
        
        */}

        <Tab.Screen name='Registro' component={Re} options={{
            tabBarIcon: () => (<MaterialIcons name="login" size={25}/>)
        }}/>    
   

        </Tab.Navigator>
    )
  }
  