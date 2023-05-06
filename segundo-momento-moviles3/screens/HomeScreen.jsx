/*User: contiene una UI para capturar la información del usuario para:
o Registro:
▪ No se puede repetir el nombre del usuario (username) y solo aceptar letras y números
▪ El nombre (name) debe aceptar solo letras y/o espacios
▪ La contraseña debe tener letras y números
o Inicio de Sesión: Se debe verificar que el usuario y contraseña coincidan con uno de los objetos
almacenados en el arreglo respectivo
*/

import { View, Text, Button, Linking } from "react-native";
import { styles } from '../assets/styles/styles';


export default function HomeScreen ({navigation}){
    let username = "user123";
    let name = "user";
    let password = "admin123";
    return(
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el Registro del Usuario</Text>
        <Button title='Register'
        onPress={()=>{
          navigation.navigate('RegisterScreen')
        }}    
        />
        
        <Button title='Log In'
        onPress={()=>{
          navigation.navigate('LoginScreen')
          console.log()
        }}

        />
        
      </View>
    )
}


/*export default function Login (){
    let username = "user123";
    let password = "admin123";
    return(
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el Log in del Usuario</Text>
        <Button title='Log in'
        onPress={()=>{
          navigation.navigate('Car',{email:email, password:password })
        }}
        />
      </View>
    )
}*/