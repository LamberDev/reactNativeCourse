import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

    /**
     * Si probamos a poner TextInput y no hacer ada mas no se mostrara nada en la pantalla, aunque realmente este ahi ya que este ELEMENTO REQUIERE
     * QUE LE DEMOS UN ESTILO EN NUESTRA HOJA DE ESTILOS.
     * 
     * Esta etiqueta o elemento recibe varias props
     *      Como autoCapitalize que nos permite seleccionar si queremos o como queremos o cuando queremos que la primera letra de cada palabra se ponga en mayus
     *      Autocorrect que nos permite elegir si queremos que los textos se corrijan o no
     *      Value que es la propiedad que guarda el valor que escribimos
     *      onChangetEXT es una propiedad que nos avisa cada vez que el texto cambia
     * 
     * Para obtener el valor de un TextInput y poder utilizarlo vamos a necesitar siempre utilizar el estado de la manera que sale en el ejemplo      
     * */

    const [name, setName] = useState(''); //Utilizamos use state definiendo el estado, la funcion que cambia su valor y utilizamos el hook con el valor predeterminado del estado
    const [password, setPasswrod] = useState('');
    return (
        <View>
            <Text>Text Input Screen</Text>
            <Text>Enter name: </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value= {name}
                onChangeText={userInput => setName(userInput)}
            ></TextInput>

            <Text>My name is: {name}</Text> 

            <Text>Ejercicio: Aparecer y desparecer JSX con condicionales</Text> 

            <Text>Enter Password</Text> 

            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value= {password}
                onChangeText={userInput => setPasswrod(userInput)}
            ></TextInput>

            { password.length < 5 ?  <Text>Password must be longer than 5 characters</Text> : null}
            
            {/* utilizamos los operadores ternarios para ejercer una condicion, si es true se muestra el JSX sino no mse muestra nada */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
