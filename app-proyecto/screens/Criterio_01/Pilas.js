/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pilas() {
  return (
    <View>
      <Text>Pilas</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


*/

const buckets = require('buckets-js');
const PilaDeReportes  = new buckets.Stack();

const MandarReporte = (titulo, des) => {
  const schemaReporte = {
    Titulo:titulo, 
    Descripcion:des
  };
  PilaDeReportes.add(schemaReporte)

}

const LeerYDescartarReporte = () =>{
  if(!PilaDeReportes.isEmpty()){
    const reporte  = PilaDeReportes.pop()
    console.log(reporte.Titulo+ ": "+reporte.Descripcion)
    

  } else {
    console.log("No reports")
  }
  
}


const desplegarReportes = () => {
  console.log(PilaDeReportes.toArray());
}

/*
Tests:

*/


MandarReporte("title 1", "lorem")
MandarReporte("title 2", "lorem 2")
desplegarReportes();

LeerYDescartarReporte();
desplegarReportes();
