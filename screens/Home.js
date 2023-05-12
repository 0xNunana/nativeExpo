import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, RefreshControl } from 'react-native'
import React, { useCallback, useState, useEffect } from 'react'
import Preview from '../components/Preview';
import ColorBox from '../components/ColorBox';
//import { TouchableOpacity } from 'react-native-gesture-handler'


const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
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
    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true)
        await colorFetcher()
        setIsRefreshing(false)
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
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
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