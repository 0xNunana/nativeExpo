import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPal from './screens/ColorPal';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Display' component={ColorPal} options={({ route }) => ({ title: route.params.paletteName })} />
      </Stack.Navigator>

    </NavigationContainer>


  );
}

