
/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Arboles() {
  return (
    <View>
      <Text>Arboles</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


*/


const buckets = require('buckets-js');
const Arbol  = new buckets.BSTree();


const CrearNodo = (elemento) => {
  if(Arbol.contains(elemento)){
    console.log("Ya existe")
  } else {
    Arbol.add(elemento)
  }
}

const BuscarNodo = (elemento) => {
  if(Arbol.contains(elemento)){
    console.log("Si lo tiene")
  } else {
    console.log("No lo tiene")
  }
}

const EliminarNodo = (elemento) => {
  if(Arbol.contains(elemento)){
    Arbol.remove(elemento)
  } else {
    console.log("No existe el elemento")
  }
}


const mostrarArbol = () => {
  console.log(Arbol.toArray())
}



CrearNodo(2);
CrearNodo(7);
CrearNodo(9);
CrearNodo(1);
CrearNodo(4);
CrearNodo(2);

mostrarArbol();




