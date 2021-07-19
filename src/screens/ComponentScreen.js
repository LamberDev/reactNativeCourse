import React from 'react'; //  Libreria completa de React
import { Text, StyleSheet, View } from 'react-native'; // Importamos dos componentes solo

// Pasos de la creacion de componenetes
/**
 * 
 * 1 --> Importar librerias
 * 2 --> Crear funcion en la que devolvamos JSX (ComponentScreen)
 * 3 --> Aplicamos estilo, creando una variable de tipo StyleSheet utilizando la funcion crear y le pasamos objetos con naming 
 *      descriptivo.
 * 4 --> Añadimos el estilo al JSX
 * 5 --> Exportamos el componente
 */
const ComponentScreen = () => { // Arrow Function

    const greeting = 'Saludando desde una variable';
    const bye = <Text>Despidiendome desde una variable</Text>;

    /**
     * En los TEXT no se pueden pasar objectos
     */
    return (
        <View> 
            <Text style={styles.textStyle}> Esta es mi pantalla de componente utilizando JSX</Text>
            <Text style={{ fontSize: 30 }}> Esta es mi pantalla de componentes utilizando JS</Text>
            <Text>{greeting}</Text>
            {bye}
        </View>
    );
}

// Es mejor agregar estilo asi ya que s hay algun fallo es mucho mas descriptivo,tambien es cierto que la app no ejecuta

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;