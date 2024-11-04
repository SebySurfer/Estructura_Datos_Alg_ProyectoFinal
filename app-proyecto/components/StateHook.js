import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

import ButtonGrid from './MyButton';

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

    const updateDisplay = (needsNumber) => {

    if(needsNumber === true){
        let condition = false;

        for (let i = 0; i < input.length; i++){

            let toNumber = Number(input.slice(i, i+1)); // Slices each part of the string indiv, and converts it to a numner
            //If there's a conversion of a char, it will give out NaN (Not a Number)
            if(isNaN(toNumber)){ // Checks if its NOT a Number
                condition = true;
            }

        }

        if(condition){
            setErrorHandler("You need to send a number")
        } else {
            setErrorHandler("")
            setDisplay(input);
            setInput("");
        }

    } else {
        setErrorHandler("")
        setDisplay(input);
        setInput("");

    }

    }

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
      { name: "Button 1", toPass: () => updateDisplay(true)},
      { name: "Button 2", toPass: () => updateDisplay(true)},
      { name: "Button 3", toPass: () => updateDisplay(false)},
      { name: "Button 4", toPass: () => updateDisplay(false)},
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

