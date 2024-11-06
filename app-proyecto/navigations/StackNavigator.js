import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import Menu from '../screens/Menu.js'
import Arreglos from '../screens/Criterio_01/Arreglos.js'
import Colas from '../screens/Criterio_01/Colas.js'
import Pilas from '../screens/Criterio_01/Pilas.js'
import BusquedaBinaria from '../screens/Criterio_02/BusquedaBinaria.js'
import ListaDobleLigada from '../screens/Criterio_02/ListaDobleLigada.js'
import OrdenamientoQuicksort from '../screens/Criterio_02/OrdenamientoQuicksort.js'
import Arboles from '../screens/Criterio_03/Arboles.js'
import Grafos from '../screens/Criterio_03/Grafos.js'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name='Menu' component={Menu}/>

            <Stack.Screen name='Arreglos' component={Arreglos}/>
            <Stack.Screen name='Colas' component={Colas}/>
            <Stack.Screen name='Pilas' component={Pilas}/>

            <Stack.Screen name='Busqueda Binaria' component={BusquedaBinaria}/>
            <Stack.Screen name='Lista Doble Ligada' component={ListaDobleLigada}/>
            <Stack.Screen name='Ordenamiento QuickSort' component={OrdenamientoQuicksort}/>

            <Stack.Screen name='Arboles' component={Arboles}/>
            <Stack.Screen name='Grafos' component={Grafos}/>


        </Stack.Navigator>
    </NavigationContainer>
  )
}

