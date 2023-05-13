import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../assets/styles/styles";
import { useEffect, useState } from "react";
//import { usuariosArreglo as data } from '../usuariosArreglo.js';
//import { usuariosRegistrados } from './RegistroScreen';

  export default function LoginScreen({ navigation, route }) {
   
    const [loggin, setLoggin] = useState(true);
    const [usuarios,setUsuarios]= useState([]);
  
    const {
      handleSubmit,
      control,
      formState: { errors },
      reset,
    } = useForm({
      defaultValues: {
        user: "",
        password: "",
      },
    });

    useEffect(() => {
      if (route.params) {
        const {users} = route.params;
        setUsuarios(users)
         // console.log(route.params);
         console.log(users);
       }
    }, [route.params])
    

    console.log(usuarios)
    
  
    const onSubmit = (dataForm) => {
      console.log(usuarios)
      const { user, password } = dataForm;      
      const logeado = usuarios.find(
        (u) => u.username == user && u.password == password
      );
      if (logeado) {
        reset();
        setLoggin(true);
        navigation.navigate("CreateCar", user);
      } else {
        setLoggin(false);
      }
    }; 
  
    return (
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-zÑñáÁ]+$/g,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Usuario"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
            />
          )}
          name="user"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z-0-9]+$/g,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
            />
          )}
          name="password"
        />
        {errors.user?.type == "required" && (
          <Text style={{ color: "red" }}>
            Error, el dato usuario es requerido
          </Text>
        )}
        {errors.password?.type == "required" && (
          <Text style={{ color: "red" }}>Error, el dato nombre es requerido</Text>
        )}
        {errors.user?.type == "pattern" && (
          <Text style={{ color: "red" }}>El usuario solo puede ser letras</Text>
        )}
        {errors.password?.type == "pattern" && (
          <Text style={{ color: "red" }}>La contraseña debe ser solo letras</Text>
        )}
        <Text style={{ display: loggin ? "none" : "block", color: "red" }}>
          Usuario y/o contraseña incorrecto
        </Text>
        <Button
          icon="login"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={{ margin: "25px", width: "200px" }}
        >
          Ingresar
        </Button>
        <i
          onClick={() => {
            navigation.navigate("Register");
          }}
        >
          ¿No tienes cuenta? Regístrate
        </i>
      </View>
    );
  }