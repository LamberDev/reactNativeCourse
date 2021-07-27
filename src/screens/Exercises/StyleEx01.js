import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const StyleEx01 = () => {
    return (
        <View style={styles.parentView}>
            <View style={styles.childRed}></View>
            <View style={styles.childGreen}></View>
            <View style={styles.childPurple}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        borderWidth: 1,
        height: 100,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    childRed: {
        height: 50,
        width: 50,
        backgroundColor: 'red', 
    },
    childGreen: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    childPurple: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    }

})

export default StyleEx01; 