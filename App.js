import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, SectionList, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';
const FOODSS = [
  'Apples',
  'Broccoli',
  'Cookies',
  'Doritos',
  'Eclairs'
];
const FOODS = [
  { title: 'Healthy', data: ['Apples', 'Broccoli'] },
  { title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs'] },
];
export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>

      <View>
        <Text style={styles.margina}>Styling Exercise by 0xNunana</Text>
        <View style={[styles.container, { backgroundColor: '#2aa198' }]}>
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
        </View>
        <SectionList
          sections={FOODS}
          keyExtractor={e => e}
          renderItem={({ item }) => <ColorBox name={item} />}
          renderSectionHeader={({ section }) => (<Text style={{ fontSize: 18, fontWeight: 'bold', backgroundColor: 'yellow' }}>{section.title}</Text>)}

        />

        <FlatList

          data={FOODSS}
          keyExtractor={item => item}
          renderItem={({ item }) => <ColorBox name={item} />}
        />

      </View>



      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>

  );
}

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