/*Rent: contiene una UI para:
Guardar: se debe verificar que el usuario y número de placa existan en los arreglos respectivos
y la placa del carro esté disponible (con sus respectivas validaciones para todos sus datos).
Además, cuando se guarde, el carro debe quedar no disponible.
*/
import { View, Text, Button } from "react-native";
import { styles } from '../assets/styles/styles';

export default function Rent () {
    let username = "user123";
    let name = "user";
    let password = "admin123";
    return(
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom:10}}>Estamos en el Rent del Usuario</Text>
        <Button title='Register'
        onPress={()=>{
          navigation.navigate('Car',{username:username,name:name ,password:password })
        }}
        />
      </View>
    )
}