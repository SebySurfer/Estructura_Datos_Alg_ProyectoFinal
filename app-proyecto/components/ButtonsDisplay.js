import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import InputDisplayStyles from '../styles/InputDisplayStyles';

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
    <View style={InputDisplayStyles.buttonContainer}>
      
      {buttons.map((button, index) => (
        <View key={index} style={InputDisplayStyles.buttonWrapper}>
          <CustomButton name={button.name} toPass={button.toPass} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  
});