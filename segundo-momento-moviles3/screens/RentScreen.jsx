/*Rent: contiene una UI para:
Guardar: se debe verificar que el usuario y número de placa existan en los arreglos respectivos
y la placa del carro esté disponible (con sus respectivas validaciones para todos sus datos).
Además, cuando se guarde, el carro debe quedar no disponible.
*/
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../assets/styles/styles";
import { useState } from "react";
let rent = [];

export default function Rent ({ navigation, route }) {
  const [existente, setExistente] = useState();
  console.log(route.params);
  const carInfo = route.params.rentCarInfo;
  const users = route.params.users;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      rentNumber: "",
      username: "",
      plateNumber: "",
    },
  });

  const onSubmit = (dataForm) => {
    const { rentNumber, username, plateNumber } = dataForm;
    const rentaExistente = rent.find((rent) => rent.numeroRenta == rentNumber);
    if (rentaExistente) {
      setExistente(true);
      return;
    } else {
      let usuarioValido = users.fidnd((user) => user.username == username);
      if (!usuarioValido) {
        setExistente(false);
        rent.push({
          numeroRenta: rentNumber,
          usuario: username,
          placa: plateNumber,
          fechaRenta: new Date().toLocaleDateString(),
          disponible: true,
        });
        console.log(rent);
        reset();
      }
    }
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de renta"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name="rentNumber"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-z]+$/g,
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
        name="username"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de placa"
            onBlur={onBlur}
            onChangeText={onChange}
            value={carInfo.platenumber}
            mode="outlined"
            disabled
          />
        )}
        name="plateNumber"
      />
      {errors.rentNumber?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato numero de renta es requerido
        </Text>
      )}
      {errors.rentNumber?.type == "pattern" && (
        <Text style={{ color: "red" }}>
          El numero de renta solo puede ser numeros
        </Text>
      )}
      {errors.username?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato usuario es requerido
        </Text>
      )}
      {errors.username?.type == "pattern" && (
        <Text style={{ color: "red" }}>El usuario solo puede ser letras</Text>
      )}
      {errors.plateNumber?.type == "required" && (
        <Text style={{ color: "red" }}>Error, el dato placa es requerido</Text>
      )}
      {errors.plateNumber?.type == "pattern" && (
        <Text style={{ color: "red" }}>La placa solo puede ser numeros</Text>
      )}
      <Text style={{ display: existente ? "block" : "none", color: "red" }}>
        Número de renta existente, pruebe usar otro
      </Text>
      <Button
        icon="car"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ margin: "25px", width: "200px" }}
      >
        Rentar
      </Button>
      <i
        onClick={() => {
          navigation.navigate("CreateCar");
        }}
      >
        Volver al inicio
      </i>
    </View>
  );
}