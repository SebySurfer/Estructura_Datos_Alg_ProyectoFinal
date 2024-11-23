import { StyleSheet, Text, View, Button, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function OrdenamientoQuicksort() {
  const [pilotos, setPilotos] = useState([
    ["Alex C", 690],
    ["David H", 3002],
    ["Lorenzo C", 2050],
    ["Mario P", 1200],
    ["Laura M", 3550],
    ["Jorge R", 2785],
    ["Nina F", 1450],
    ["Carlos L", 3300],
    ["Sophie T", 2345],
    ["Mark Z", 760],
    ["Rita O", 2890],
    ["Antonio V", 1750],
    ["Isabel G", 3050],
    ["Luis D", 950],
    ["Emma W", 3990],
    ["Oscar B", 1400],
    ["Paula J", 3700],
    ["Miguel K", 1590],
    ["Julia A", 1805],
    ["Daniel N", 2500],
    ["Juan P", 2120],
    ["Diana Q", 3900],
    ["Eva S", 800],
    ["Raul T", 2850],
    ["Carlos G", 4100],
    ["Camila H", 3450],
    ["Bruno M", 1300],
    ["Marta B", 600],
    ["Victor F", 1995],
    ["Lucia L", 3750],
    ["Sara V", 1600],
    ["Tom A", 910],
    ["Sandra E", 2950],
  ]);

  const quickSort = (array, primero, ultimo) => {
    if (primero < ultimo) {
      const central = partition(array, primero, ultimo);
      quickSort(array, primero, central - 1);
      quickSort(array, central + 1, ultimo);
    }
  };

  const partition = (array, primero, ultimo) => {
    const pivot = array[ultimo][1];
    let i = primero - 1;
    for (let j = primero; j < ultimo; j++) {
      if (array[j][1] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    [array[i + 1], array[ultimo]] = [array[ultimo], array[i + 1]];
    return i + 1;
  };

  const sortPilots = () => {
    const arrayCopy = [...pilotos]; // Create a copy of the pilots array
    quickSort(arrayCopy, 0, arrayCopy.length - 1);
    setPilotos(arrayCopy); // Update the state with the sorted array
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Ordenamiento Quicksort</Text>

        {/* Display the List */}
        <Text style={styles.subtitle}>Pilotos (Horas de Vuelo)</Text>
        <FlatList
          data={pilotos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Text style={styles.listItem}>
              {index + 1}. {item[0]} - {item[1]} horas
            </Text>
          )}
        />

        {/* Sort Button */}
        <Button title="Ordenar Pilotos por Hora" onPress={sortPilots} />
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
