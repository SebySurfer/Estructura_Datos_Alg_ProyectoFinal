/*
 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Arreglos() {
  return (
    <View>
      <Text>Arreglos</Text>
    </View>
  )
}


 */



let ListaDeInscripciones = [
  {codigo: 1, nombre:"Santiango Sanchez", gpa:90, escuela:"Anahuac", estadoDeIns:"" }, 
  {codigo: 2, nombre:"Alexander Caldarino", gpa:70, escuela:"Tech de Monterrey", estadoDeIns:""  },
  {codigo: 3, nombre:"Carlos Mendoza", gpa:60, escuela:"Cambriage", estadoDeIns:""  },
  {codigo: 4, nombre: "Maria Gomez", gpa: 85, escuela: "UNAM", estadoDeIns:""  },
  {codigo: 5, nombre: "Lucia Herrera", gpa: 95, escuela: "UNAM", estadoDeIns:""  },
  {codigo: 6, nombre: "Jose Ruiz", gpa: 78, escuela: "Tech de Monterrey", estadoDeIns:""  },
  {codigo: 7, nombre: "Daniela Martinez", gpa: 88, escuela: "Anahuac", estadoDeIns:""  },
  {codigo: 8, nombre: "Pedro Fernandez", gpa: 82, escuela: "Cambridge", estadoDeIns:""  },
  {codigo: 9, nombre: "Andrea Lopez", gpa: 76, escuela: "UNAM", estadoDeIns:""  },

]


const Declinar = (index) => {
  const estudiante =  ListaDeInscripciones.find(pos => pos.codigo === index);
  if(estudiante){
    estudiante.estadoDeIns = "Declinado"
  }
}

const Aceptar = () => {
  const estudiante =  ListaDeInscripciones.find(pos => pos.codigo === index);
  if(estudiante){
    estudiante.estadoDeIns = "Aceptado"
  }

}

Declinar(2);
console.log(ListaDeInscripciones)








