import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, title, score}) => { // Optimizando, nos traemos solo las props que deseamos utilizar


    /**
     * Recogemos con el argumento todas las props que enviamos desde el padre y reutilizamos este componente
     * Es necesario añadir el estilo para que se puedan ver las imagenes en el navegadr
     */
    
    return <View>
        <Image source={imageSource} style={{ width: 200, height: 100 }}/>
        <Text>{title}</Text>
        <Text> Image score - {score}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ImageDetail;