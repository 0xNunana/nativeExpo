import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <View>
        <Text style={styles.margina}>Styling Exercise by 0xNunana</Text></View>

      <View style={[styles.container, { backgroundColor: '#2aa198' }]}>
        <Text>Cyan</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#268bd2' }]}>
        <Text>Blue</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#d33682' }]}>
        <Text>Magenta</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#cb4b16' }]}>
        <Text>Orange</Text>
      </View>

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {


    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: "center",

  }
  ,
  margina: {
    backgroundColor: "lavender",



  }
})