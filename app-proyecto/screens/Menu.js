import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


//Imports of all files 
import Arreglos from './Criterio_01/Arreglos'
import Colas from './Criterio_01/Colas'
import Pilas from './Criterio_01/Pilas'

import BusquedaBinaria from './Criterio_02/BusquedaBinaria'
import ListaDobleLigada from './Criterio_02/ListaDobleLigada'
import OrdenamientoQuicksort from './Criterio_02/OrdenamientoQuicksort'

import Arboles from './Criterio_03/Arboles'
import Grafos from './Criterio_03/Grafos'

import ButtonsDisplay from '../components/ButtonsDisplay'


export default function Menu({navigation}) {
  return (
    <View>
      <ButtonsDisplay buttons={[
      { name: "Arreglos", toPass: () => navigation.navigate("Arreglos")},
      { name: "Colas", toPass: () => navigation.navigate("Colas")},
      { name: "Pilas", toPass: () => navigation.navigate("Pilas")},
      { name: "Busqueda Binaria", toPass: () => navigation.navigate("Busqueda Binaria")},
      { name: "Lista Doble Ligada", toPass: () => navigation.navigate("Lista Doble Ligada")},
      { name: "Ordenamiento QuickSort", toPass: () => navigation.navigate("Ordenamiento QuickSort")},
      { name: "Arboles", toPass: () => navigation.navigate("Arboles")},
      { name: "Grafos", toPass: () => navigation.navigate("Grafos")},
      ]} />
    </View>
  )
}

const styles = StyleSheet.create({})