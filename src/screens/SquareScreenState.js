import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

/*
    Este componente esta realizado con variables de estado y es perfectmente funcional
    Existe orta copia de este componente utilizando un reducer, que es otra manera de manejar el estado.
 */

const SquareScreenState = () => {

    /**
     * Definimos las variables de estado en el componente PADRE o en el componente que vaya a NECESITAR LEER/UTILIZAR dicha variable
     * Para cambiar el valor de esta varible de estado le pasamos funciones al componente hijo que actualizen esta variable
     */
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const setColor = (color, change) => {
        // color === 'red, 'green, 'blue
        // change +20 -20

        /**
         * Utilizamos operadores ternarios en el switch 
         * Primero se pone la condicion o condiciones que queremos evalluar
         * Despues se pone ?
         * Tras esto ponemos que queremos que haga el programa si se cumple la condicion (en nuestro caso null es decir nada)
         * Seguido de :
         * Y ya ponemos que queremos que pase si no se cumple la condicion en nuestro caso una funcion
         */
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null: setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null: setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null: setBlue(blue + change);
                return;
            default:
                return;
        }
    }
    return (
        <View>
            <ColorCounter colorName="Red" 
                onDecrease={ () => { setColor('red', -1 * COLOR_INCREMENT)}} // Enviamos como argumento la funcion que actualiza la variable
                onIncrease={() => { setColor('red' ,COLOR_INCREMENT)}}>
            </ColorCounter>

            <ColorCounter colorName="Green"
                onDecrease={ () => { setColor('green', -1 * COLOR_INCREMENT)}}
                onIncrease={() => { setColor('green' ,COLOR_INCREMENT)}}>

            </ColorCounter>

            <ColorCounter colorName="Blue"
                onDecrease={ () => { setColor('blue' , -1 * COLOR_INCREMENT)}}
                onIncrease={() => {setColor('blue' , COLOR_INCREMENT)}}> 
            </ColorCounter>

            <View style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SquareScreenState;