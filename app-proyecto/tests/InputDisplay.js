import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

import ButtonsDisplay from '../components/ButtonsDisplay.js';
import {NumberInputChecker, StringInputChecker} from '../components/InputChecker.js';
import BoxInput from '../components/BoxInput.js';

/**
 * 
 * Your going to create only 2 types of functions:
 *  1. One that preforms the checks and validation of input data 
 *  2. The action of each unique button 
 */



export default function InputDisplay() {
    const [input, setInput] = useState("");
    //Similar to display, you need to assign all the buttons to their current and unique "display" useState
    const [display, setDisplay] = useState("")
    const [errorHandler, setErrorHandler] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>

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

    </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
  },
  container: {
    alignItems: 'center', // Centers the contents within this View
  },
  text: {
    marginBottom: 10, // Adds space between the text and button
    fontSize: 18, // Adjusts font size for better readability
  },
  input:{
    borderWidth: 1, 
    borderColor: 'black', 
    padding: 8, 
    margin: 10, 
    width: 200
  }
});

