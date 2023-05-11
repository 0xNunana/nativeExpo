import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ColorBox = ({ colorName, hexCode }) => {
    return (
        <View style={[styles.box, { backgroundColor: hexCode, }]} >
            <Text style={{ color: 'white' }} >{colorName}</Text>
        </View>
    )
}

export default ColorBox

const styles = StyleSheet.create({
    box: {

        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})