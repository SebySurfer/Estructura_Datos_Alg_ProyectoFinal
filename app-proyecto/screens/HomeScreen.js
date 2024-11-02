import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
    <Button
    title='Go to Test'
    onPress={() => navigation.navigate("Test")}
    />
    </View>
  )
}

const styles = StyleSheet.create({})