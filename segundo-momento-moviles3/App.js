//import {  Text, View, Button } from 'react-native';
// tener en cuanta la sigueinte pag https://reactnavigation.org/docs/auth-flow/
//LIBRERIAS PARA EL MANEJO DE L NAVEGACION ENTRE PANTALLAS
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Car from './screens/CarScreen'
import ListOfCars from './screens/ListOfCars'
import RentCar from './screens/Rent';

//import User from './screens/HomeScreen';
//import Rent from './screens/Rent';

import HomeScreen from './screens/HomeScreen';
import HomeTabs from './screens/HomeTabs';

const Stack = createNativeStackNavigator();

/*
const getIsSignedIn = () => {
  // custom logic
  return true;
}*/

export default function App() {
  //const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
        
       
       

        {/*  {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={User} />
            <Stack.Screen name="Profile" component={Car} />
            <Stack.Screen name="Settings" component={Rent} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={User} />
            <Stack.Screen name="SignUp" component={User} />
          </>
        )} */} 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*
function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function CarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selecciona tu carro</Text>
    </View>
  );
}

function RentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Renta carro</Text>
    </View>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Car" component={Car} />
      <Tab.Screen name="Rent" component={Rent} />
    </Tab.Navigator>
  );
}

*/
