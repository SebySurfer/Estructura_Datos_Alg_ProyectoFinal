import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputDisplayStyles from '../styles/InputDisplayStyles'

const ViewWrapper = (props) => {
  return (
    <SafeAreaView style={InputDisplayStyles.safeArea}>
    <View style={InputDisplayStyles.container}>
    {props.children}
    </View>
    </SafeAreaView>
    
  )
}

export default ViewWrapper;