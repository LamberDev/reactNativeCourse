import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreens = () => {
    return <View>
        <ImageDetail title="Forest" 
        imageSource={require('../../assets/forest.jpg')} 
        score={10} /> 

        <ImageDetail title="Beach" 
        imageSource={require('../../assets/beach.jpg')} 
        score={8}/>
         
        <ImageDetail title="Mountain" 
        imageSource={require('../../assets/mountain.jpg')} 
        score={6} />
    </View>
}

// Enviamos el titulo a nuestro componente de detalle que nosotros queremos en forma de props

const styles = StyleSheet.create({

});

export default ImageScreens;