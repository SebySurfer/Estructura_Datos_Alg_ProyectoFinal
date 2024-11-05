import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

/*

Variables to handle:
input=
setInput=
errorHandler=

*/

const BoxInput = (props) => {
  return(
    <View>

    <TextInput 
      style={styles.input} 
      placeholder='Escriba aqui' 
      onChangeText={(text) => props.setInput(text)}
      value={props.input}
      />

      <Text>{props.errorHandler}</Text>

    </View>

  )
    
}

export default BoxInput;

const styles = StyleSheet.create({
    input:{
    borderWidth: 1, 
    borderColor: 'black', 
    padding: 8, 
    margin: 10, 
    width: 200
  }
})

