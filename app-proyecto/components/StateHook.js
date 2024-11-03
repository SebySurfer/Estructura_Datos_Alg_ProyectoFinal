import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

export default function StateHook() {
    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("")

    const updateDisplay = () => {
      setDisplay(input);
      setInput("");
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

      <Button title='Set Input' onPress={updateDisplay}/>

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

