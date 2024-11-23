import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from "react-native";
import { NumberInputChecker } from "../../components/InputChecker";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  min(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root.value;
  }

  search(root, value) {
    if (root === null) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  printTree(node = this.root, prefix = "", isLeft = true) {
    if (!node) return [];
    const result = [];
    if (node.right) {
      result.push(...this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));
    }
    result.push(prefix + (isLeft ? "└── " : "┌── ") + node.value);
    if (node.left) {
      result.push(...this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));
    }
    return result;
  }
}

export default function Arboles() {
  const [tree] = useState(new BinaryTree());
  const [element, setElement] = useState("");
  const [output, setOutput] = useState([]);
  const [treeOutput, setTreeOutput] = useState([]);
  const [error, setError] = useState("");

  const agregarElemento = () => {
    NumberInputChecker(
      element,
      setElement,
      () => {
        if (tree.search(tree.root, Number(element))) {
          setError(`El elemento ${element} ya existe en el árbol.`);
        } else {
          tree.insert(Number(element));
          setTreeOutput(tree.printTree());
          setError("");
        }
      },
      setError,
      false // Only allow whole numbers
    );
  };

  const borrarElemento = () => {
    if (!element) {
      Alert.alert("Error", "Ingrese un número.");
      return;
    }
    if (!tree.search(tree.root, Number(element))) {
      setError(`El elemento ${element} no se encuentra en el árbol.`);
    } else {
      tree.delete(Number(element));
      setTreeOutput(tree.printTree());
      setError("");
    }
    setElement("");
  };

  const buscarElemento = () => {
    if (!element) {
      Alert.alert("Error", "Ingrese un número.");
      return;
    }
    const found = tree.search(tree.root, Number(element));
    setOutput([`El elemento ${element} ${found ? "sí" : "no"} existe en el árbol.`]);
    setElement("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Árbol Binario</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        value={element}
        onChangeText={setElement}
        keyboardType="numeric"
      />

      <View style={styles.buttonsContainer}>
        <Button title="Agregar" onPress={agregarElemento} />
        <Button title="Borrar" onPress={borrarElemento} />
        <Button title="Buscar" onPress={buscarElemento} />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Text style={styles.subtitle}>Árbol:</Text>
      <View style={styles.treeBox}>
        {treeOutput.length === 0 ? (
          <Text style={styles.emptyTree}>El árbol está vacío.</Text>
        ) : (
          treeOutput.map((line, index) => (
            <Text key={index} style={styles.treeLine}>
              {line}
            </Text>
          ))
        )}
      </View>

      <Text style={styles.subtitle}>Resultados:</Text>
      <View style={styles.resultsBox}>
        {output.map((line, index) => (
          <Text key={index} style={styles.resultLine}>
            {line}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  treeBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  treeLine: {
    fontFamily: "monospace",
  },
  emptyTree: {
    fontStyle: "italic",
    color: "gray",
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
