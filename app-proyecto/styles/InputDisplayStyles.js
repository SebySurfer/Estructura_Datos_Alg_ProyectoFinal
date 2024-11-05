import { StyleSheet } from 'react-native'
import React from 'react'

const InputDisplayStyles = StyleSheet.create({
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
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 16,
    },
    buttonWrapper: {
      width: '48%', // Adjusts two buttons per row
      marginBottom: 10,
    },
    button: {
      paddingVertical: 10,
    },
  });

  export default InputDisplayStyles;

  