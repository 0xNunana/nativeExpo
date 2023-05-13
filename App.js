import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPal from './screens/ColorPal';
import { createStackNavigator } from '@react-navigation/stack';
import ColorModal from './screens/ColorModal';

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()
const MainStackScreen = () => {

  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={Home} />

      <MainStack.Screen name='Display' component={ColorPal} options={({ route }) => ({ title: route.params.paletteName })} />
    </MainStack.Navigator>
  )

}

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator>

        <RootStack.Screen name='Main' component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Add Palette" component={ColorModal} />
      </RootStack.Navigator>

    </NavigationContainer>


  );
}

