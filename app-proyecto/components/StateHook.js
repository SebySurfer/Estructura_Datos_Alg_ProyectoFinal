import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

import ButtonGrid from './MyButton.js';
import InputChecker from './InputChecker.js';

/**
 * 
 * Your going to create only 2 types of functions:
 *  1. One that preforms the checks and validation of input data 
 *  2. The action of each unique button 
 */



export default function StateHook() {
    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("")
    const [errorHandler, setErrorHandler] = useState("");



  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>

      <Text>Display: {display}</Text>

      <TextInput 
      style={styles.input} 
      placeholder='Write here btch' 
      onChangeText={(text) => setInput(text)}
      value={input}
      />

      <Text>{errorHandler}</Text>

      <ButtonGrid buttons={[
      { name: "Button 1", toPass: () => InputChecker(input, setInput,setDisplay, setErrorHandler,true, true)},
      { name: "Button 2", toPass: () => InputChecker(input, setInput,setDisplay, setErrorHandler,true, false)},
      { name: "Button 3", toPass: () => InputChecker(input, setInput,setDisplay, setErrorHandler,false, false)},
      { name: "Button 4", toPass: () => InputChecker(input, setInput,setDisplay, setErrorHandler,false, false)},
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

