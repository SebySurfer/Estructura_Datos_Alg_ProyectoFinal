import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'

function CustomButton(props) {
  return (
    <Button
    style={styles.button}

    title={props.name}
    onPress={props.toPass}

    />
  )
}

export default function ButtonsDisplay({ buttons }) {
  return (
    <View style={styles.buttonContainer}>
      
      {buttons.map((button, index) => (
        <View key={index} style={styles.buttonWrapper}>
          <CustomButton name={button.name} toPass={button.toPass} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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