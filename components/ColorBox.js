import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ColorBox = ({ name }) => {
    return (
        <View style={styles.box} >
            <Text style={{ color: 'white' }} >{name}</Text>
        </View>
    )
}

export default ColorBox

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'purple',
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})