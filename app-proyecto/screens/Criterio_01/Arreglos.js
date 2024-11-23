
import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import ButtonsDisplay from '../../components/ButtonsDisplay'
import BoxInput from '../../components/BoxInput';
import { NumberInputChecker } from '../../components/InputChecker';

export default function Arreglos() {

  const [input, setInput] = useState("");
  //Similar to display, you need to assign all the buttons to their current and unique "display" useState
  const [display, setDisplay] = useState("")
  const [errorHandler, setErrorHandler] = useState("");
  return (
    <View>
       <Text>Display: {display}</Text>

        <BoxInput
          input = {input}
          setInput = {setInput}
          errorHandler= {errorHandler}
        />

        <ButtonsDisplay buttons={[
        { name: "Declinar", toPass: () => NumberInputChecker(input, setInput,setDisplay, setErrorHandler,false)},
        { name: "Aceptar", toPass: () => NumberInputChecker(input, setInput,setDisplay, setErrorHandler,false)},
              ]} />
    </View>
  )
}





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

const Aceptar = (index) => {
  const estudiante =  ListaDeInscripciones.find(pos => pos.codigo === index);
  if(estudiante){
    estudiante.estadoDeIns = "Aceptado"
  }

}

Declinar(2);
console.log(ListaDeInscripciones)








