import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import  HomeScreen  from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import CarScreen from './CarScreen';
import Rent from './RentScreen';
import RentScreen from './RentScreen';

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
         <Tab.Screen name='Registro' component={RegisterScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="login" size={25}/>)
        }}/>   
                <Tab.Screen name='car' component={CarScreen} options={{
            tabBarIcon: () => (<FontAwesome5 name="car-alt" size={24} color="black" />)
        }}/>
                        <Tab.Screen name='Rent a Car' component={RentScreen} options={{
            tabBarIcon: () => (<MaterialIcons name="car-rental" size={24} color="black" />)
        }}/>
{/*
        
      */}
        
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

       

        </Tab.Navigator>
    )
  }
  