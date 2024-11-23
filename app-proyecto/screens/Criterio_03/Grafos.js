import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, SafeAreaView, Alert } from "react-native";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1]?.has(vertex2) &&
      this.adjacencyList[vertex2]?.has(vertex1)
    );
  }

  display() {
    const result = [];
    for (let vertex in this.adjacencyList) {
      result.push(`${vertex} -> ${[...this.adjacencyList[vertex]].join(", ")}`);
    }
    return result;
  }
}

export default function Grafos() {
  const [graph] = useState(new Graph());
  const [vertex, setVertex] = useState("");
  const [vertex1, setVertex1] = useState("");
  const [vertex2, setVertex2] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState("");

  const addVertex = () => {
    if (!vertex.trim()) {
      Alert.alert("Error", "El vértice no puede estar vacío.");
      return;
    }
    graph.addVertex(vertex);
    updateOutput();
    setVertex("");
  };

  const addEdge = () => {
    if (!vertex1.trim() || !vertex2.trim()) {
      Alert.alert("Error", "Ambos vértices deben ser ingresados.");
      return;
    }
    graph.addEdge(vertex1, vertex2);
    updateOutput();
    setVertex1("");
    setVertex2("");
  };

  const removeEdge = () => {
    if (!vertex1.trim() || !vertex2.trim()) {
      Alert.alert("Error", "Ambos vértices deben ser ingresados.");
      return;
    }
    graph.removeEdge(vertex1, vertex2);
    updateOutput();
    setVertex1("");
    setVertex2("");
  };

  const removeVertex = () => {
    if (!vertex.trim()) {
      Alert.alert("Error", "El vértice no puede estar vacío.");
      return;
    }
    graph.removeVertex(vertex);
    updateOutput();
    setVertex("");
  };

  const hasEdge = () => {
    if (!vertex1.trim() || !vertex2.trim()) {
      Alert.alert("Error", "Ambos vértices deben ser ingresados.");
      return;
    }
    const result = graph.hasEdge(vertex1, vertex2)
      ? `Existe una arista entre ${vertex1} y ${vertex2}.`
      : `No existe una arista entre ${vertex1} y ${vertex2}.`;
    setOutput([result]);
    setVertex1("");
    setVertex2("");
  };

  const updateOutput = () => {
    setOutput(graph.display());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Grafos</Text>

        {/* Add Vertex */}
        <TextInput
          style={styles.input}
          placeholder="Nombre de Aeropuerto"
          value={vertex}
          onChangeText={setVertex}
        />
        <Button title="Agregar Aeropuerto" onPress={addVertex} />

        {/* Add Edge */}
        <TextInput
          style={styles.input}
          placeholder="Aeropuerto X"
          value={vertex1}
          onChangeText={setVertex1}
        />
        <TextInput
          style={styles.input}
          placeholder="Aeropuerto Y"
          value={vertex2}
          onChangeText={setVertex2}
        />
        <Button title="Agregar Conexion de Aeropuerto" onPress={addEdge} />

        {/* Remove Edge */}
        <Button title="Eliminar Conexion" onPress={removeEdge} />

        {/* Remove Vertex */}
        <TextInput
          style={styles.input}
          placeholder="Nombre de Aeropuerto"
          value={vertex}
          onChangeText={setVertex}
        />
        <Button title="Eliminar Aeropuerto" onPress={removeVertex} />

        {/* Has Edge */}
        <Button title="Comprobar Conexion" onPress={hasEdge} />

        {/* Output */}
        <Text style={styles.subtitle}>Resultados:</Text>
        <View style={styles.resultsBox}>
          {output.map((line, index) => (
            <Text key={index} style={styles.resultLine}>
              {line}
            </Text>
          ))}
        </View>
      </ScrollView>
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
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  resultsBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  resultLine: {
    fontSize: 16,
  },
});
