import { Text, View, Linking } from 'react-native';
import {styles} from '../assets/styles/styles';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
//import { usuariosArreglo as data } from '../usuariosArreglo.js';
//import { usuariosRegistrados } from './RegistroScreen';

  export default function LoginScreen({navigation}){
      const [usuario, setUsuario] = useState('');
      const [password, setPassword] = useState('');
      const [errormess, setErrormess] = useState('');
  
  

      return(
        <View style={styles.container}>
          <Text style={styles.titulos}>Inicio de Sesion</Text>
          <TextInput
            label="Usuario"
            mode="outlined"
            left={<TextInput.Icon icon="account"/>}
            onChangeText={usuario => setUsuario(usuario)}
            value={usuario}
            theme={styles.theme}

          />
        <TextInput
          style={{ marginTop:10}} 
          label="Password"
          mode="outlined"
          right={<TextInput.Icon icon="eye"/>}
          onChangeText={password => setPassword(password)}
          value={password}
          theme={styles.theme}
          secureTextEntry
        /> 

    <Button 
        style={styles.button} 
        icon="login"
        mode="contained" 
        onPress={() =>{ 
            navigation.navigate('RegisterScreen')
         

          
        
        }}>
          <Text style={styles.buttonText} >Ingresar</Text>
        </Button>

<Text style={styles.mensajesErrores}>{errormess}</Text>

  

   </View>
   );
 }