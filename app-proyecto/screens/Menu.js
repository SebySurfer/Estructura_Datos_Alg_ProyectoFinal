import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

//Imports of all files
import Arreglos from "./Criterio_01/Arreglos";
import Colas from "./Criterio_01/Colas";
import Pilas from "./Criterio_01/Pilas";

import BusquedaBinaria from "./Criterio_02/BusquedaBinaria";
import ListaDobleLigada from "./Criterio_02/ListaDobleLigada";
import OrdenamientoQuicksort from "./Criterio_02/OrdenamientoQuicksort";

import Arboles from "./Criterio_03/Arboles";
import Grafos from "./Criterio_03/Grafos";

import ButtonsDisplay from "../components/ButtonsDisplay";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonsDisplay
        buttons={[
          { name: "Arreglos", toPass: () => navigation.navigate("Arreglos") },
          { name: "Colas", toPass: () => navigation.navigate("Colas") },
          { name: "Pilas", toPass: () => navigation.navigate("Pilas") },
          { name: "Busqueda Binaria", toPass: () => navigation.navigate("Busqueda Binaria") },
          { name: "Lista Doble Ligada", toPass: () => navigation.navigate("Lista Doble Ligada") },
          { name: "Ordenamiento QuickSort", toPass: () => navigation.navigate("Ordenamiento QuickSort") },
          { name: "Arboles", toPass: () => navigation.navigate("Arboles") },
          { name: "Grafos", toPass: () => navigation.navigate("Grafos") },
        ]}
        style={styles.buttonsDisplay}
      />

      {/* Image Icon and Title */}
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/a.png")} // Replace with your image path
          style={styles.icon}
        />
        <Text style={styles.title}>De: Sebastian Willis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between", // Space buttons and icon evenly
    alignItems: "center", // Center content horizontally
    backgroundColor: "#f9f9f9", // Optional background color
  },
  buttonsDisplay: {
    width: "100%",
    justifyContent: "space-evenly",
  },
  iconContainer: {
    alignItems: "center", // Center image and text
    marginTop: 20,
  },
  icon: {
    width: 50, // Icon width
    height: 50, // Icon height
    marginBottom: 10, // Space between image and text
    borderRadius: 25,
  },
  title: {
    fontSize: 14, // Small text size
    fontWeight: "bold",
    color: "#333", // Text color
  },
});
