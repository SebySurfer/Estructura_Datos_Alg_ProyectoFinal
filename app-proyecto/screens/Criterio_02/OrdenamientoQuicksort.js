
/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function OrdenamientoQuicksort() {
  return (
    <View>
      <Text>OrdenamientoQuicksort</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
*/

function partition(array, primero, ultimo) {
  const pivot = array[ultimo][1]; 
  let i = primero - 1;
  for (let j = primero; j < ultimo; j++) {
      if (array[j][1] <= pivot) { 
          i++;
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
  [array[i + 1], array[ultimo]] = [array[ultimo], array[i + 1]];
  return i + 1;
}

function quickSort(array, primero, ultimo) {
  if (primero < ultimo) {
      const central = partition(array, primero, ultimo);
      quickSort(array, primero, central - 1);
      quickSort(array, central + 1, ultimo);
  }
}


// Total de horas promedio por piloto en aeronaves es de 500 - 4000
const PilotosPorHoraDeVuelo = [
  ["Alex C", 690], 
  ["David H", 3002], 
  ["Lorenzo C", 2050], 
  ["Mario P", 1200], 
  ["Laura M", 3550], 
  ["Jorge R", 2785], 
  ["Nina F", 1450], 
  ["Carlos L", 3300],
  ["Sophie T", 2345],
  ["Mark Z", 760],
  ["Rita O", 2890],
  ["Antonio V", 1750],
  ["Isabel G", 3050],
  ["Luis D", 950],
  ["Emma W", 3990],
  ["Oscar B", 1400],
  ["Paula J", 3700],
  ["Miguel K", 1590],
  ["Julia A", 1805],
  ["Daniel N", 2500],
  ["Juan P", 2120],
  ["Diana Q", 3900],
  ["Eva S", 800],
  ["Raul T", 2850],
  ["Carlos G", 4100],
  ["Camila H", 3450],
  ["Bruno M", 1300],
  ["Marta B", 600],
  ["Victor F", 1995],
  ["Lucia L", 3750],
  ["Sara V", 1600],
  ["Tom A", 910],
  ["Sandra E", 2950]
];

console.log("Arreglo desordenado: ")
console.log(PilotosPorHoraDeVuelo)

console.log("Arreglo ordenado: ")
const tamano = PilotosPorHoraDeVuelo.length;
quickSort(PilotosPorHoraDeVuelo, 0, tamano - 1);
console.log(PilotosPorHoraDeVuelo)


/*
Test Schema:

const a = [
  ["Alice", 7],
  ["Bob", 1],
  ["Charlie", 4],
  ["David", 10],
  ["Eve", 9],
  ["Frank", -2]
];

console.log("Arreglo sin ordenar:");
console.log(a);

const tamano = a.length;
quickSort(a, 0, tamano - 1);

console.log("Arreglo ordenado:");
console.log(a);

 */




