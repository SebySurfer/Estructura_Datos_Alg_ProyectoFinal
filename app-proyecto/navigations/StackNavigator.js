import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen.js'
import TestOne from '../tests/TestOne.js'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Test' component={TestOne}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

