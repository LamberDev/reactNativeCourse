import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {

   // let counter = 0;

    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increase" onPress={() =>{
            //Esto no!!
            // counter ++;

            setCounter(counter + 1);
        }}/>

        <Button title="Decrease" onPress={() =>{
            //Esto no!!
            // counter --;

            setCounter(counter - 1);
        }}/>

        <Text>Current Count: {counter} </Text>
    </View>
}

/*
    Props vs State

    Las props son el modo en el cual pasamos informacion del componente padre al hijo.

    El State se basa en que estado tienen las variables y como las actualizamos. Si yo actualizo la variable como hago mas 
    arriba en los comentarios no se actualiza en la pantalla. Tenemos que utilizar useState para poder modificar el valor. Ya que este
    UseState en cierta forma lo que hace es reiniiar la app.
 */

const styles = StyleSheet.create({

});

export default CounterScreen;