import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import BoxInput from '../../components/BoxInput';
import { NumberInputChecker } from '../../components/InputChecker';

export default function Arreglos() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");
  const [errorHandler, setErrorHandler] = useState("");
  
  // State for the list of students
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
    setListaDeInscripciones((prevList) =>
      prevList.map((item) =>
        item.codigo === codigo ? { ...item, estadoDeIns: estado } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>

    <View style={styles.container}>
      <Text style={styles.title}>Lista de Inscripciones</Text>

      {/* Display the list dynamically */}
      <FlatList
        data={listaDeInscripciones}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              {item.nombre} - GPA: {item.gpa} - Escuela: {item.escuela} - Estado:{" "}
              {item.estadoDeIns || "Pendiente"}
            </Text>
            <View style={styles.buttonsContainer}>
              <Button
                title="Aceptar"
                onPress={() => updateEstado(item.codigo, "Aceptado")}
                color="green"
              />
              <Button
                title="Declinar"
                onPress={() => updateEstado(item.codigo, "Declinado")}
                color="red"
              />
            </View>
          </View>
        )}
      />

      {/* Input and Error Handling */}
      <BoxInput input={input} setInput={setInput} errorHandler={errorHandler} />
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
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
