import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import InputDisplayStyles from '../styles/InputDisplayStyles';

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
      style={InputDisplayStyles.input} 
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
   
})

