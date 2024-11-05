import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

import ButtonsDisplay from '../components/ButtonsDisplay.js';
import {NumberInputChecker, StringInputChecker} from '../components/InputChecker.js';
import BoxInput from '../components/BoxInput.js';
import ViewWrapper from '../components/ViewWrapper.js';



export default function InputDisplay() {
    const [input, setInput] = useState("");
    //Similar to display, you need to assign all the buttons to their current and unique "display" useState
    const [display, setDisplay] = useState("")
    const [errorHandler, setErrorHandler] = useState("");

  return (
    <ViewWrapper>

      <Text>Display: {display}</Text>

      <BoxInput
        input = {input}
        setInput = {setInput}
        errorHandler= {errorHandler}
      />

      <ButtonsDisplay buttons={[
      { name: "Button 1", toPass: () => NumberInputChecker(input, setInput,setDisplay, setErrorHandler,true)},
      { name: "Button 2", toPass: () => NumberInputChecker(input, setInput,setDisplay, setErrorHandler,false)},
      { name: "Button 3", toPass: () => StringInputChecker(input, setInput,setDisplay, setErrorHandler)},
      { name: "Button 4", toPass: () => StringInputChecker(input, setInput,setDisplay, setErrorHandler)},
      // Add more buttons as needed
    ]} />

  </ViewWrapper>

  )
}



