import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from "react-native";

export default function ListaDobleLigada() {
  const [listaDeArmas, setListaDeArmas] = useState([]); 
  const [arma, setArma] = useState(""); 
  const [armaToDelete, setArmaToDelete] = useState(""); 
  const [error, setError] = useState("");

  const agregarArma = () => {
    if (arma.trim() === "") {
      setError("El nombre del arma no puede estar vacio.");
      return;
    }

    if (listaDeArmas.includes(arma)) {
      setError(`El arma "${arma}" ya existe en la lista.`);
      return;
    }

    setListaDeArmas((prevList) => [...prevList, arma]);
    setArma(""); 
    setError(""); 
  };

  const borrarArma = () => {
    if (armaToDelete.trim() === "") {
      setError("Por favor, ingrese el nombre del arma a borrar.");
      return;
    }

    if (!listaDeArmas.includes(armaToDelete)) {
      setError(`El arma "${armaToDelete}" no se encuentra en la lista.`);
      return;
    }

    setListaDeArmas((prevList) => prevList.filter((item) => item !== armaToDelete));
    setArmaToDelete(""); 
    setError(""); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Armamento</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del arma"
          value={arma}
          onChangeText={setArma}
        />
        <Button title="Agregar Arma" onPress={agregarArma} />

        <TextInput
          style={styles.input}
          placeholder="Nombre del arma para borrar"
          value={armaToDelete}
          onChangeText={setArmaToDelete}
        />
        <Button title="Borrar Arma" onPress={borrarArma} />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.subtitle}>Lista de Armas:</Text>
        {listaDeArmas.length === 0 ? (
          <Text style={styles.emptyList}>La lista está vacía.</Text>
        ) : (
          <FlatList
            data={listaDeArmas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Text style={styles.listItem}>
                {index + 1}. {item}
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
