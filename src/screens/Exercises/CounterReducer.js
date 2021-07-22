import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const UNIT = 1;
// funcion reducer que recibe una variable de estado y un objeto que indica que se va a hacer con el estado y como lo va a hacer
const reducer = (state, action) => {
    
    switch (action.type) { // Depende de la acciona realizar...
        case 'increase':
            return {...state, count: state.count + action.payload}; // sumamos
        case 'decrease': 
            return {...state, count: state.count  - action.payload} // restamos
        
        default:
            return state; // la funcion reducer siempre devuelve un objeto que se pueda utilizar como estado
    }
}

const CounterReducer = () => {
    // Utilizo el hook useReducer definiendo una variable con el estado y la funcion que actualiza este estado, al hook le pasamos como prop
    // Una funcion reductora y el valor predeterminado del estado

    const [state, dispatch] = useReducer(reducer, { count: 0 });


    return <View>
        <Button title="Increase" onPress={() =>{
            dispatch({type: 'increase', payload: UNIT})
        }}/>

        <Button title="Decrease" onPress={() =>{
            dispatch({type: 'decrease', payload: UNIT})
        }}/>

        <Text>Current Count: {state.count} </Text>
    </View>
}


const styles = StyleSheet.create({

});

export default CounterReducer;