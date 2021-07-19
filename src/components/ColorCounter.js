import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({colorName, onDecrease, onIncrease}) => {
    
    return <View>
        <Text>{colorName}</Text>
        <Button title="Increase"
            onPress={ () => {
              onIncrease(); // Actualizo el valor de la variable de estado en el componente padre
            }}
        />
        <Button title="Decrease"
            onPress={ () => {
              onDecrease();
            }}
        />
    </View>
}

const styles = StyleSheet.create({

});

export default ColorCounter;