import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, TextInput, ScrollView, Switch } from 'react-native'
import { Picker } from '@react-native-picker/picker' //for selection
import React, { useCallback, useState, useEffect } from 'react'
import Preview from '../components/Preview';
import ColorBox from '../components/ColorBox';
//import { TouchableOpacity } from 'react-native-gesture-handler'


const FOODS = [
    '3ml',
    '6ml',
    '12ml',
    '50ml',
    '100ml'
]

const Home = ({ navigation, route }) => {
    const newest = route.params ? route.params.newPalette : undefined
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
    useEffect(() => {
        if (newest) {
            setData(data => [newest, ...data])
        }
    }, [newest])
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

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView>

            {/* <ScrollView style={{ marginBottom: 35 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>Input Name</Text>
                    <TextInput style={{ height: 50, elevation: 3, paddingLeft: 10 }} />

                </View>
                <View style={{ paddingHorizontal: 10 }}>

                    <Text>Input Phone Number</Text>
                    <TextInput style={{ height: 50, elevation: 3, paddingLeft: 10 }} keyboardType='numeric' />
                </View>
                <View style={{ paddingHorizontal: 10 }}>

                    <Text>Input Password</Text>
                    <TextInput style={{ height: 50, elevation: 3, paddingLeft: 10 }} secureTextEntry={true} />
                </View>
                <View>
                    <Text>off</Text>
                    <Switch onValueChange={toggleSwitch}
                        value={isEnabled} trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} />
                    <Text>ON</Text>
                </View>

                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingHorizontal: 15, paddingTop: 15, }}>Choose a size</Text>
                <Picker
                    style={{ elevation: 3, marginHorizontal: 10 }}

                    dropdownIconColor='green'
                    dropdownIconRippleColor='red'
                    prompt='Select a size'
                >
                    {FOODS.map(food => (
                        <Picker.Item label={food} value={food} />
                    ))}
                </Picker>




                <View style={{ paddingHorizontal: 10 }}>
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

            </ScrollView> */}
            <FlatList
                data={data}
                keyExtractor={item => item.paletteName}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                ListHeaderComponent={<TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate('Add Palette') }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5, color: 'teal', borderColor: 'teal', borderWidth: 1, marginTop: 5 }}> + Add a color scheme </Text>
                </TouchableOpacity>}
                renderItem={({ item }) =>
                    <Preview press={() => navigation.navigate('Display', item)} look={item} />}

            />



        </SafeAreaView>











    )
}

export default Home

const styles = StyleSheet.create({})