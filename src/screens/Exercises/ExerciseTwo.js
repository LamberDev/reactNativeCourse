import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const ExerciseTwo = () => {
    const friends = [
        {name: 'Friend #1', age: 25 },
        {name: 'Friend #2', age: 28},
        {name: 'Friend #3',  age: 35},
        {name: 'Friend #4',  age: 45},
        {name: 'Friend #5', age: 29},
        {name: 'Friend #6', age: 88},
        {name: 'Friend #7',  age: 97},
        {name: 'Friend #8', age: 115}   
    ];

    return (
        <View>
            <FlatList
            keyExtractor = { friend => friend.name}
            data = {friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }
            }>

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        marginVertical: 50,
    }
})

export default ExerciseTwo