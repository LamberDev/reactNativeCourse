import React, {useState} from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';

const ColorScreen = () => {
    
    const [colors, setColors] = useState([]); // Valor por defecto ARRAY VACIO

    return (
        <View>
            <Button title="Add a Color"
            onPress={ () => {
                setColors([...colors, randomColor()]); // Copiamos el contenido del array dentro de un nuevo array y generamos el color
            }}/>

            <FlatList
            keyExtractor={(item) => item} // la key de cada elemento es el elemento en si ya que es unico al ser random
            data={colors} // El dato de nuestra lista es el array de colors
            renderItem={({item}) => { // POr cada elemento que recibamos devolvemos la view con el color que contenga el item
                return (
                    <View style={{height: 100, width: 100, backgroundColor: item}}></View>
                )
            }}
            />
        </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue} )`
}

const styles = StyleSheet.create({

})

export default ColorScreen;