/*Rent: contiene una UI para:
Guardar: se debe verificar que el usuario y número de placa existan en los arreglos respectivos
y la placa del carro esté disponible (con sus respectivas validaciones para todos sus datos).
Además, cuando se guarde, el carro debe quedar no disponible.
*/
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import {MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'; //npm install @rneui/themed @rneui/base
import { Icon } from 'react-native-vector-icons/FontAwesome'; //npm i react-native-vector-icons
import { styles } from "../assets/styles/styles";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//
import {carsRegisted} from "./CarScreen";
import {userRegistred} from "./RegisterScreen";


export const rentCars = [];

export default function RentScreen({navigation}){
 const [selectedDate, setSelectedDate] = useState(new Date());

    const [errormess, setErrormess ] = useState('');
    const {control, handleSubmit, formState: {errors}, reset} = useForm();
    
    //Fecha
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setSelectedDate(date);
      hideDatePicker();

    };

    // para guardar
    const verifiedUsuario = (data) => {
        
      const usuarioRegistrado = users.find((u) => u.usuario === data.usuario);
      const carroRegistrado = carsRegisted.find((u) => u.platenumber === data.platenumber)
      const carroRegistradoChecked = carsRegisted && carsRegisted.find((u) => u.isChecked === data.isChecked);

    if(usuarioRegistrado){
        console.log(usuarios, 'arreglo usuario');

        if(carroRegistrado){
            console.log(carsRegisted, 'arreglo carro');

            if(carroRegistrado.isChecked === false){
                const nuevoCarroRentar = { 
                    usuario: data.usuario,
                    platenumber: data.platenumber, 
                    brand: data.brand,
                    isChecked: "no disponible", 
                    selectedDate: selectedDate,

                  };
                  rentCars.push(nuevoCarroRentar);
                  const index = carsRegisted.indexOf(carroRegistrado);
                  carsRegisted[index] = { ...carroRegistrado, isChecked: "no disponible", rentadoPor: data.usuario };
                  setErrormess('');
                  reset();
                 console.log(carroRegistrado.brand)
                 console.log(selectedDate)
                  navigation.navigate('CarrosGuardados', {rentCars});

            }else{
                setErrormess('Este carro no está disponible para rentar')
                console.log("El carro no está disponible");
            }
        }else{
            setErrormess('Este carro no está registrado')
            console.log("El carro no se encuentra registrado");
        }
    }else{
        setErrormess('Este usuario no está registrado')
        console.log('El usuario no está registrado')

    }    

      }
    

    return(
      <View style={styles.container}>
      <Text style={styles.titulos}>Rentar Carros</Text>
         <Controller
        control={control}
        rules={{
          required: true,
        }}

        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label="usuario"
            theme={styles.theme}
            left={<TextInput.Icon icon="account"/>}
          />
        )}
        name="usuario"
        defaultValue=""
      />
      {errors.usuario?.type=="required" && <Text style={{ color: 'red' }}>El usuario es requerido</Text>}
      

<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label="platenumber"
            theme={styles.theme}
            left={<TextInput.Icon icon="account"/>}
          />
        )}
        name="platenumber"
        defaultValue=""
      />
      
      {errors.platenumber?.type=="required" && <Text style={{ color: 'red' }}>La placa es requerida</Text>}
     
      {/* --------  FECHA INPUT
            <Calendar value={selectedDate} onChange={setSelectedDate} />
       ------ */}
      



      <Text style={{color:'red'}}>{errormess}</Text>

       <Button 
          icon={() => <MaterialIcons name="login" color="#fff" size={24} />}
          style={styles.button}            
          mode="contained" 
          title="Rentar" 
          onPress={handleSubmit(verifiedUsuario)}>
          Rentar Carro
        </Button>

        <Button 
        style={styles.buttonRentados} 
        icon=""
        mode="contained" 
        onPress={() =>{           
            navigation.navigate('Car',{rentCars})         
        }}>
         <Text style={styles.buttonText}>Carros Rentados</Text>
        </Button>

        <Button 
        style={styles.buttonGuardados} 
        icon=""
        mode="contained" 
        onPress={() =>{           
            navigation.navigate('listOfCars')         
        }}>
         <Text style={styles.buttonText}>Carros Registrados</Text>
        </Button>




    
     

      </View>

    )};