import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
const buckets = require('buckets-js');

export default function Colas() {
  const [listaDeAviones, setListaDeAviones] = useState([
    ["B-2", 3],
    ["F-14", 4],
    ["F-5 Tiger II", 7],
    ["F-16", 5],
    ["MiG-21", 2],
  ]);

  const [colaDeAviones, setColaDeAviones] = useState(new buckets.Queue());

  const updateAvionCount = (index, avionName) => {
    setListaDeAviones((prevList) =>
      prevList.map((avion, i) =>
        i === index && avion[1] > 0 ? [avion[0], avion[1] - 1] : avion
      )
    );
    const newCola = new buckets.Queue(colaDeAviones.toArray());
    newCola.add(avionName);
    setColaDeAviones(newCola);
  };

  const despegarAvion = () => {
    const newCola = new buckets.Queue(colaDeAviones.toArray());
    newCola.dequeue(); // Remove the first airplane
    setColaDeAviones(newCola);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Aviones</Text>

        {/* Display the list of airplanes */}
        <FlatList
          data={listaDeAviones}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>
                {item[0]} - Count: {item[1]}
              </Text>
              <Button
                title={`Add ${item[0]}`}
                onPress={() => updateAvionCount(index, item[0])}
                disabled={item[1] === 0}
              />
            </View>
          )}
        />

        {/* Display the queue */}
        <Text style={styles.title}>Cola de Aviones</Text>
        {colaDeAviones.size() > 0 ? (
          colaDeAviones.toArray().map((avion, index) => (
            <Text key={index} style={styles.queueItem}>
              {index + 1}. {avion}
            </Text>
          ))
        ) : (
          <Text style={styles.emptyQueue}>La cola está vacía</Text>
        )}

        {/* Dequeue button */}
        <Button title="Despegar Avión" onPress={despegarAvion} disabled={colaDeAviones.size() === 0} />
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
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  queueItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
  emptyQueue: {
    fontSize: 16,
    color: "gray",
    fontStyle: "italic",
    marginTop: 10,
  },
});
