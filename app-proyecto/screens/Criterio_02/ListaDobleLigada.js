
/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaDobleLigada() {
  return (
    <View>
      <Text>ListaDobleLigada</Text>
    </View>
  )
}
*/
const buckets = require('buckets-js');
const ListaDeArmas = new buckets.LinkedList();

const AgregarArma = (arma) => {
  if(ListaDeArmas.isEmpty() === true){
    ListaDeArmas.add(arma, 0);
  } else {
    const index = ListaDeArmas.size();
    ListaDeArmas.add(arma, index)
  }
}

const MostrarLista = () => {
  console.log(ListaDeArmas.toArray());
}

const BorrarArma = (index) =>{
  if(ListaDeArmas.isEmpty() === true){
    console.log("Its empty")
  } else {
    ListaDeArmas.removeElementAtIndex(index)
  }
}




/* 
Tests: 
AgregarArma("Misil")
AgregarArma("Bomba")
AgregarArma("Misil 2")
MostrarLista();

BorrarArma(1);
MostrarLista();

*/








