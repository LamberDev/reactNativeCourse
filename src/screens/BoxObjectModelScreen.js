import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Box Object Model es la doctrina del FrontEnd que abarca como colocamos un solo elemento 
 *  Utiliza la anhura, altura y el espacio de al rededor (padding, border y margin) 
 * 
 * Flex Box Model se encarga de colocar los elementos que se encuentran dentro de un padre
 *  A modo de columna de o de fila
 *  A un lado o a otro
 *  Ocupando todo el hueco disponible o no 
 *  etc
 *  Las propiedades que tiene vinculadas son:
 * 
 *      AlignItems: Es la prpiedad que nos permite como alinear los elementos hijos de un contenedor.
 * 
 *                    stretch (ocupan todo el ancho posible) Estas es la opcion por defecto que tiene React
 *                    flex-start (pegadas a la derecha)
 *                    center (los alinea en el center)
 *                    flex-end (pegadas a la izquierda)
 *      
 *      Flex Direction: Esta propiedad controla si los elementos hijos estan dispuestos de forma vertical u horizontal.
 * 
 *                      column (vertical) se muestran en forma de columnas esta es la opcion por defecto 
 *                      row (horizontal) se muestran en forma de fila
 *      
 *      Flex Direction vs Align Items --> Mucho ojo porque dependiendo de que valor tenga Flex Direction asi actuará align items. Recuerda que Flex Dir dice como estan dispuestos los elementos
 *      y Align simplemente los coloca dentro del padre.
 * 
 *      JustifyContent: Funciona distinto a alignItems y nos permite ademas alguna opcion más. Basicamente alignItems solo mueve los elementos en un eje dependiendo de l flex direction lo hace
 *                      de una manera o de otra. JustifyContent  mueve los elementos en los dos ejes
 *                      
 *                      Se observa my bien con el valor center Align Items dependiendo del felx direction te lo colocara o en el centro del eje y o del eje x
 *                      Mientras que justify content se coloca en el centro de ambos de ejes y se estira.
 *                      
 *                      JustifyContent tiene:   flex-start
 *                                              flex-end
 *                                              center
 *                                              space-between
 *                                              space-around
 * 
 * /////////////////HASTA AHHORA ESTAS PRPOPEDADES DE FLEX MODEL SE COLOCAN EN LOS ELEMENTOS PADRES PARA QUE AFECTEN A LOS HIJOS, VEAMOS LAS PROPIEDADES DE FLEX MODEL PARA LOS HIJOS/////////////////
 * 
 * La propiedad FLEX: 
 *      Esta propiedad recibe unos valores los cuales hace que a medida que se incrementa ese valor el elemento hijo va ocupando todo el espacio que puede (dependiendo del flexdirection sera en horizontal o vertical)
 *      Si tenemos 3 hijos y ados les ponemos un flex de 4 y a otro un flex de 2 esto hace que dos ocpen un 80 por ciento del esacio dsonible y el tro un 20.
 * 
 * La propiedad aLIGN-SELF
 *      Esta propiedad sobreescribe el align items que le ponemos al padre, hace lo mimso alinear objetos pero en este caso solo alineamos 1 el resto de elemento que no contengan esta propiedad
 *      Se alinenan como diga en elemento padre
 * 
 * 
 * //////////////////////// LA PROPIEDAD POSTITION ///////////////////////////////////////////////////////////////////////////////////////////////
 * 
 * La propiedad position es una propiedad que llevan por defecto los elementos hijo en 'relative' --> Relativa lo que manda el padre (center, flex-end, etc)
 *      Otro valor que se le puede añadir es ABSOLUTE esto hace que el elemento que lo lleve ignora algunas normas del padre (por ejemplo strecht) y ademas sus hermanos tamben le ignoran
 *      Position absolute se suele acompañar de otras propiedades para mover los elementos que son --> TOP, LEFT, BOTTOM, RIGHT
 *      Parece que funcionan como un margen, pero NO el margen es el espacio entre elementos sin embargo estas propiedaes solo desplazan el elemento NO AFECTA AL RESTO DE HERMANOS
 *                                                                                                                                              
 *  * */

const BoxObjectModel = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child 1</Text>
            <Text style={styles.textStyleTwo}>Child 2</Text>
            <Text style={styles.textStyleThree}>Child 3</Text>
            
            <View style={styles.viewStyle}>
                <Text>Ejemplo de USO DE POSTITION ABSOLUTE</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    viewStyle: {    
        borderWidth: 1,
        height: 200,
        borderColor: 'black'
    },

    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
        // marginVertical: 20,
        // marginHorizontal: 20 Si utilizamos la propuedad margin realizamos lo mismo
        // margin: 5
    },

    textStyleTwo: {
        borderWidth: 1,
        borderColor: 'red',
        //flex: 4
        // marginVertical: 20,
        // marginHorizontal: 20 Si utilizamos la propuedad margin realizamos lo mismo
        // margin: 5
        //alignSelf: 'center'
        position: 'absolute',
        top: 200
    },

    textStyleThree: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4
        // marginVertical: 20,
        // marginHorizontal: 20 Si utilizamos la propuedad margin realizamos lo mismo
        // margin: 5
    },
    // Ejemplo uso de absolute
    textAbsolute: {
        backgroundColor: 'cyan',
        fontSize: 18,
        color: 'white',
        //position: 'absolute',
        //top: 0,
        //right: 0,
        //left: 0,
        //bottom: 0
        ... StyleSheet.absoluteFillObject // Atajo para lograr lo de arriba
    }
});

export default BoxObjectModel;