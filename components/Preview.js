import { StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native'
import React from 'react'

const Preview = ({ press, look }) => {
    return (
        <TouchableOpacity onPress={press}>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5, fontWeight: 'bold', fontSize: 20 }}>{look.paletteName}</Text>
            <FlatList
                data={look.colors.slice(0, 5)}

                keyExtractor={item => item.colorName}
                horizontal={true}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: item.hexCode, height: 50, width: 50, marginHorizontal: 10, marginBottom: 30, elevation: 3, borderRadius: 5 }} />
                    //elevation is to give a shadow in android
                    //in ios, use shadowColor: '#000',
                    //shadowOffset: { width: 0, height: 1 },
                    //shadowOpacity: 0.3,
                    //shadowRadius: 1,

                }

            />
        </TouchableOpacity>
    )
}

export default Preview

const styles = StyleSheet.create({})