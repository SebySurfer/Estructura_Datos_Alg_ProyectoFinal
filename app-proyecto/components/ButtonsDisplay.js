import { StyleSheet, View, Button } from "react-native";
import React from "react";

export default function ButtonsDisplay({ buttons, style }) {
  return (
    <View style={[styles.container, style]}>
      {buttons.map((button, index) => (
        <View key={index} style={styles.buttonWrapper}>
          <Button title={button.name} onPress={button.toPass} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  buttonWrapper: {
    width: "80%", 
    marginVertical: 5, 
    borderWidth: 2,
    borderColor: "#007BFF", 
    borderRadius: 10, 
    overflow: "hidden", 
  },
});
