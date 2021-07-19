import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [ // Creamos un array de objetos con una propiedad nombre
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'}
    ];

    /**
     * FlatList es un elemento que nos permite mostrar listas
     * Recibe dos Props
     *      data que es basicamente el array que va a mostrar
     *      y el renderItem que es la funcion que indica que va a mostrar, como y donde
     *      Es una arrow function en la que retornamos nomralmente el 'item' ya que este item es cada elemento del array
     *      Si pusieramos 'element' nos devolveria una gran cantidad de informacion
     *      La funcion tiene que devolver algo, en este caso devolvemos UN JSX de Texto en el que le pasamos el nombre del amigo
     * 
     * KEY ISSUE
     *  Las listas en React Native necesitan tener una prop KEY cuando van a mostrarse ya que react necesita mapear el objeto delcodigo
     * y el que muestra en la pantalla. Si le proporcionamos una key el rendimiento sera mejor.
     * 
     * Esta key se la podemos pasar como propiedad el array u objeto o con una propiedad desde la etiqueta. 
     * Esta propiedad se llama KEYEXTRACTOR y recibe una funcion que itera el array y le da a cada elemento una KEY la KEY debe cumplir las siguietes
     * reglas:
     *  - ser unico
     *  - ser string
     */

    return <View>
            <Text>List of Friends</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={friends} 
            keyExtractor={friend => friend.name}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
            />
         </View>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;