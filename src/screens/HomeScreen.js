import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/**
 * El stack de navegacion de @React se encarga de establecer la navegacion y cuando un componente se inicia le envia un objeto
 * con muchos datos entre un objeto relativo a esta navegacion.
 *
 * @param {*} props Si recibimos esta prop podemos navegar entre pantallas utilizando la funcion Navigate de el objeto Navigation
 * 
 * Rara vez queremos coger completamente el objeto @param props completo entonces podemos simplemente obtener la parte que queramos de
 * el a traves de esta sentencia ({navigation}) y asi solo nos traemos el objeto navigation. Lo cual es mucho mas efectivo.
 *
 * 
 */
const HomeScreen = ({navigation}) => { // Nos traemos el objeto navigation de las props que nos manda el stack de React
  
  return <View>
    <Text style={styles.text}>Hi there</Text>
    <Button 
      title="Go to Components Demo"
      onPress = {() => navigation.navigate('Components') }
    />

    <Button 
      title="Go to List Demo"
      onPress = {() => navigation.navigate('List') }
    />  

  <Button 
      title="Go to ImageScreens"
      onPress = {() => navigation.navigate('ImageSreens') }
    />  
  
  <Button 
      title="Go to CounterScreen"
      onPress = {() => navigation.navigate('Counter') }
    />  
  <Button 
      title="Go to CounterReducer"
      onPress = {() => navigation.navigate('CounterReducer') }
    />  
  <Button 
      title="Go to ColorScreen"
      onPress = {() => navigation.navigate('Color') }
    />  
  
  <Button 
      title="Go to SquareScreen State"
      onPress = {() => navigation.navigate('SquareState') }
    />
  <Button 
      title="Go to SquareScreen Reducer"
      onPress = {() => navigation.navigate('SquareReducer') }
    />
  <Button 
      title="Go to TextScreen"
      onPress = {() => navigation.navigate('TextScreen') }
    />  

 {/* <TouchableOpacity onPress={() =>  navigation.navigate('List')}>
      <Text>Go To List Demo</Text>
      <Text>Go To List Demo</Text>
      <Text>Go To List Demo</Text>
    </TouchableOpacity> */}
    
  </View>
};

/**
 * Button es simplemente un boton que recobe ciertos props como title para ponerle texto y onPress que recibe una funcion
 * TpuchableOpacity en si mismo es un elemento que se puede clickar y aparece y se desvanece. Lo bueno que tiene es que es ampliamente 
 * MODIFICABLE ya que le podemos pasar, imagenes, texto, listas lo que queremos y tambien recibe props.
 */
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
