import { StyleSheet, Text, View, SafeAreaView, SectionList, FlatList } from 'react-native'
import React from 'react'
import ColorBox from '../components/ColorBox';

const FOODS = [
    { title: 'Healthy', data: ['Apples', 'Broccoli'] },
    {
        title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs', 'Broccoli',
            'Banku',
            'Fufu',
            'Kkonte']
    },
];
const ColorPal = ({ route }) => {
    const { colors } = route.params
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>

            {/* <View><Text style={styles.margina}>Styling Exercise by 0xNunana</Text></View> */}

            {/* <View style={[styles.container, { backgroundColor: '#2aa198' }]}>
                <Text style={{ color: 'white' }}>Cyan</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#268bd2' }]}>
                <Text style={{ color: 'white' }}>Blue</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#d33682' }]}>
                <Text style={{ color: 'white' }}>Magenta</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#cb4b16', }]}>
                <Text style={{ color: 'white' }}>Orange</Text>
            </View> */}

            {/* <SectionList
                sections={FOODS}
                keyExtractor={e => e}
                ItemSeparatorComponent={() => (<Text style={{ backgroundColor: 'lavender' }}>yes</Text>)}
                renderItem={({ item }) => (<View>
                    <Text>{item}</Text>
                </View>)}
                renderSectionHeader={({ section }) => (<Text style={{ fontSize: 18, fontWeight: 'bold', backgroundColor: 'yellow' }}>{section.title}</Text>)}
                //

                ListEmptyComponent={<Text>List Empty</Text>}
            /> */}


            <FlatList

                data={colors}
                keyExtractor={item => item.colorName}

                renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
            />





            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    )
}

export default ColorPal

const styles = StyleSheet.create({
    container: {

        marginBottom: 5,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: "center",

    }
    ,
    margina: {
        backgroundColor: "lavender",
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 5,
        paddingVertical: 10



    }
})