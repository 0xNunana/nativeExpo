import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { useCallback, useState, useEffect } from 'react'
import Preview from '../components/Preview';
import ColorBox from '../components/ColorBox';
//import { TouchableOpacity } from 'react-native-gesture-handler'
const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const TOTAL = [{ pal: 'Solarized', colors: COLORS }, { pal: 'FRONTEND', colors: FRONTEND_MASTERS }, { pal: 'RAINBOW', colors: RAINBOW }]


const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    const colorFetcher = useCallback(
        async () => {
            const received = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');


            if (received.ok) {
                const formed = await received.json()
                setData(formed)
            }
        },
        [],
    )
    useEffect(() => {


        colorFetcher()
    }, [])




    const [count, setCount] = useState(0)
    const handleAdd = useCallback(
        () => {
            setCount(count => count + 1)
        },
        [],
    )
    const handleSub = useCallback(
        () => {
            setCount(count => count - 1)
        },
        [],
    )



    return (
        <SafeAreaView >
            <FlatList
                data={data}
                keyExtractor={item => item.paletteName}

                renderItem={({ item }) =>
                    <Preview press={() => navigation.navigate('Display', item)} look={item} />}

            />
            <View >
                <View style={{}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}> Counting Machine</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Count:{count}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <TouchableOpacity onPress={handleAdd}>
                        <Text style={{ backgroundColor: 'green', height: 50, width: 100 }}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSub}>
                        <Text style={{ marginLeft: 10, backgroundColor: 'blue', height: 50, width: 100 }}>-</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </SafeAreaView>











    )
}

export default Home

const styles = StyleSheet.create({})