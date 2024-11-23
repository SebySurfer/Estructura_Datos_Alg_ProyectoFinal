import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from "react-native";

export default function ListaDobleLigada() {
  const [listaDeArmas, setListaDeArmas] = useState([]); // Using an array to track the list
  const [arma, setArma] = useState(""); // Input for adding a weapon
  const [indexToDelete, setIndexToDelete] = useState(""); // Input for deleting by index
  const [error, setError] = useState("");

  const agregarArma = () => {
    if (arma.trim() === "") {
      setError("El nombre del arma no puede estar vacío.");
      return;
    }

    // Add the weapon to the array and update state
    setListaDeArmas((prevList) => [...prevList, arma]);
    setArma(""); // Clear input field
    setError(""); // Clear errors
  };

  const borrarArma = () => {
    const index = parseInt(indexToDelete, 10);

    if (isNaN(index)) {
      setError("Por favor, ingrese un índice válido.");
      return;
    }

    if (index < 0 || index >= listaDeArmas.length) {
      setError("Índice fuera de rango.");
      return;
    }

    // Remove the weapon by index and update state
    setListaDeArmas((prevList) => prevList.filter((_, i) => i !== index));
    setIndexToDelete(""); // Clear input field
    setError(""); // Clear errors
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista Doble Ligada</Text>

        {/* Add Weapon Input */}
        <TextInput
          style={styles.input}
          placeholder="Nombre del arma"
          value={arma}
          onChangeText={setArma}
        />
        <Button title="Agregar Arma" onPress={agregarArma} />

        {/* Delete Weapon by Index Input */}
        <TextInput
          style={styles.input}
          placeholder="Índice para borrar"
          value={indexToDelete}
          onChangeText={setIndexToDelete}
          keyboardType="numeric"
        />
        <Button title="Borrar Arma" onPress={borrarArma} />

        {/* Error Message */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Display the List */}
        <Text style={styles.subtitle}>Lista de Armas:</Text>
        {listaDeArmas.length === 0 ? (
          <Text style={styles.emptyList}>La lista está vacía.</Text>
        ) : (
          <FlatList
            data={listaDeArmas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Text style={styles.listItem}>
                {index}. {item}
              </Text>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  emptyList: {
    fontSize: 16,
    color: "gray",
    fontStyle: "italic",
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
