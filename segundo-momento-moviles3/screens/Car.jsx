//Car: contiene una UI para Guardar (con validaciones respectivas por cada campo respectivo) y Listar los carros (estado: disponible y no disponible)

import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

export default function Car () {
    let username = "user123";
    let name = "user";
    let password = "admin123";
    return(
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el Car del Usuario</Text>
        <Button title='Register'
        onPress={()=>{
          navigation.navigate('Car',{username:username,name:name ,password:password })
        }}
        />
      </View>
    )
}