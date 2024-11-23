import { StyleSheet, Text, View, FlatList, Button, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Arreglos() {
  const [input, setInput] = useState(""); 
  const [errorHandler, setErrorHandler] = useState(""); 
  const [listaDeInscripciones, setListaDeInscripciones] = useState([
    { codigo: 1, nombre: "Santiago Sanchez", gpa: 90, escuela: "Anahuac", estadoDeIns: "" },
    { codigo: 2, nombre: "Alexander Caldarino", gpa: 70, escuela: "Tech de Monterrey", estadoDeIns: "" },
    { codigo: 3, nombre: "Carlos Mendoza", gpa: 60, escuela: "Cambridge", estadoDeIns: "" },
    { codigo: 4, nombre: "Maria Gomez", gpa: 85, escuela: "UNAM", estadoDeIns: "" },
    { codigo: 5, nombre: "Lucia Herrera", gpa: 95, escuela: "UNAM", estadoDeIns: "" },
    { codigo: 6, nombre: "Jose Ruiz", gpa: 78, escuela: "Tech de Monterrey", estadoDeIns: "" },
    { codigo: 7, nombre: "Daniela Martinez", gpa: 88, escuela: "Anahuac", estadoDeIns: "" },
    { codigo: 8, nombre: "Pedro Fernandez", gpa: 82, escuela: "Cambridge", estadoDeIns: "" },
    { codigo: 9, nombre: "Andrea Lopez", gpa: 76, escuela: "UNAM", estadoDeIns: "" },
  ]);

  const updateEstado = (codigo, estado) => {
    const studentCode = parseInt(codigo, 10);

    const student = listaDeInscripciones.find((item) => item.codigo === studentCode);

    if (!student) {
      setErrorHandler("Código no válido. Por favor ingrese un código de estudiante existente.");
    } else {
      setListaDeInscripciones((prevList) =>
        prevList.map((item) =>
          item.codigo === studentCode ? { ...item, estadoDeIns: estado } : item
        )
      );
      setErrorHandler(""); 
      setInput(""); 
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Inscripciones</Text>

        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
          placeholder="Ingrese el codigo del estudiante"
        />

        {errorHandler ? <Text style={styles.error}>{errorHandler}</Text> : null}

        <View style={styles.buttonsContainer}>
          <Button title="Aceptar" onPress={() => updateEstado(input, "Aceptado")} color="green" />
          <Button title="Declinar" onPress={() => updateEstado(input, "Declinado")} color="red" />
        </View>

        <FlatList
          data={listaDeInscripciones}
          keyExtractor={(item) => item.codigo.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>
                Codigo: {item.codigo} : {item.nombre} - GPA: {item.gpa} - Escuela: {item.escuela} - Estado:{" "}
                {item.estadoDeIns || "Pendiente"}
              </Text>
            </View>
          )}
        />
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
