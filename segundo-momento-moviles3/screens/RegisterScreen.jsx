import {
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    StyleSheet,
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { useState, useEffect, React } from 'react';


//  const Stack = createNativeStackNavigator();


export default  function RegisterScreen({ navigation }) {
  const [mensajeError, setMensajeError] = useState('');  


  return (
    <View style={styles.container}>
      <Text style={styles.titulos}>Registro</Text>
    

    
    </View>
  );
}
