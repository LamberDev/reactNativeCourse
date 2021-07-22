import React, {useReducer} from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
/*
    El REDUCER se utiliza cuando se cumplen las siguientes condiciones:
        Cuando tenemos muchas variables de estado que estan muy relacionadas
            Como nuestros colores que son 3 variables practicamnte iguales
        Y cuando esas varoables de estado conocemos perfectamente como se actualiza su valor
            Como es el caso de nuestros colores que solo utilzan 2 tipos de actualizacion de su valor (inremento decremento)
            Y ademas solo cambia de valor 6 veces ya que cada color puede variar 2 veces
    
    Por estas condiciones que reune nuestra app podemos aplicar un REDUCER
 */

/*
    ¿Que es un REDUCER? ---- Se podria decir que un REDUCER no es mas que una funcion que controla los cambios de un objeto. 
    
    Esta funcion o REDUCER tiene que cumplir estas caracteristicas:

        - Esta funcion debe de recibir dos argumentos que deben de ser 2 objetos

        - El primer argumento debe de contener todo nuestro estado
            En  nuestro caso nuestro estado es el COLOR entonces este argumento deberia de ser un objeto así:
                {red: 0, green:0; blue:0}
            Estamos dandole a este primer argumento un objeto, que contiene el estado y con el valor predeterminado. Muy parecido
            a utilizar useState.

        - El segundo argumento debe de ser un objeto que describa el cambio que se va a realizar en el estado , nuestro primer argumento
            podría tener un aspecto similar a este:
                {colorToChange: 'red', amount: 20}
            La idea es que con este segundo argumento nosotros lo obtengamos para que con sus propiedades actualizemos el primer argumento
            o estado
        
        Para realizar los cambios hay dos cosas que necesitamos tener en cuenta:

        - 1: Igual que con el estado, NUNCA vamos a cambiar el valor del estado o primer argumento de manera directa, es decir:
            estado.red = estado.red + 20 // NO SE HACE ASÍ
        - 2: En nuestra funcion REDUCER siempre vamos a devolver un OBJETO que será utilizado como EL PRIMER ARGUMENTO
 */

const COLOR_INCREMENT = 20;

// Por convencion la funcion de REDUCER se define fuera del componente
const reducer = (state, action) => {
// state === variable de estado // state === {red: number, green: number, blue: number}
// action === cambio que hacemos al estado // action === {colorToChange: 'red' | 'blue' | 'green', amount: 15/-15}
// por convencion en el objeto action se define la propiedad TYPE que es un String que define la operacion a realizar y PAYLOAD que son los datos que necesitamos para llevar a cabo el cambio


    switch(action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount};
             // Devuelvo un nuevo objeto { copiando el estado, modificando lo que quiero en este nuevo objeto}
             // Al final estoy devolviendo un objeto igual a STATE pero sin devolver STATE ni modificar el valor de STATE
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        
        default:
            return state; // Siempre en la funcion REDUCER se debe de devolver un objeto que se utilizara como PRIMER ARGUMENTO
            // Asi que incluso en el caso default devolemos el estado
    }
};
    
const SquareScreenStateReducer = () => {
    // creamos nuestra variable de reducer que nos devuelve el estado (state)
    // y nos devuelve el accionador, o disparador del reducer (dispatch) dispatch es la funcion que llamara al REDUCER pasandole
    // el action o el objeto que nos dira como cambiar el state
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter colorName="Red" 
                onDecrease={ () => { dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) }} // Enviamos como argumento la funcion que actualiza la variable
                onIncrease={() => { dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) }}>
            </ColorCounter>

            <ColorCounter colorName="Green"
                onDecrease={ () => { dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }) }}
                onIncrease={() => { dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT }) }}>

            </ColorCounter>

            <ColorCounter colorName="Blue"
                onDecrease={ () => { dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) }}
                onIncrease={() => { dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) }}> 
            </ColorCounter>

            <View style={{width: 150, height: 150, backgroundColor: state}}></View>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SquareScreenStateReducer;