

/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Colas() {
  return (
    <View>
      <Text>Colas</Text>
    </View>
  )
}

 */

let listaDeAviones = [
  ["B-2", 3], 
  ["F-14", 4], 
  ["F-5 Tiger II", 7], 
  ["F-16", 5], 
  ["MiG-21", 2]
  ];

const getB2 = () => {
  if(listaDeAviones[0][1] !== 0){
    listaDeAviones[0][1] -= 1;
    ColaDeAviones.add("B-2")
  }
}

const getF14 = () =>{
  if(listaDeAviones[1][1] !== 0){
    listaDeAviones[1][1] -= 1;
    ColaDeAviones.add("F-14")
  }

}

const getF5 = () =>{
  if(listaDeAviones[2][1] !== 0){
    listaDeAviones[2][1] -= 1;
    ColaDeAviones.add("F-5 Tiger II")
  }

}

const getF16 = () =>{
  if(listaDeAviones[3][1] !== 0){
    listaDeAviones[3][1] -= 1;
    ColaDeAviones.add("F-16")
  }

}

  
const getMig = () =>{
  if(listaDeAviones[4][1] !== 0){
    listaDeAviones[4][1] -= 1;
    ColaDeAviones.add("MiG-21")
  }

}

const buckets = require('buckets-js');

// Create a new queue
const ColaDeAviones  = new buckets.Queue();

ColaDeAviones.add("F-14")
ColaDeAviones.add("F-16")
ColaDeAviones.add("B-2")
ColaDeAviones.add("MiG-21")


const Despegar = () =>{
  ColaDeAviones.dequeue();
}

const printLista = () => {
  console.log(ColaDeAviones.toArray());
}


/*
Tests:

printLista();
getMig();
getMig();

getB2();
getB2();

console.table(listaDeAviones)
printLista();

*/















