import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function Pilas() {
  const [pilaDeReportes, setPilaDeReportes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errorHandler, setErrorHandler] = useState("");

  const mandarReporte = () => {
    if (titulo.trim() === "" || descripcion.trim() === "") {
      setErrorHandler("Ambos son requeridos.");
      return;
    }
    const nuevoReporte = {
      Titulo: titulo,
      Descripcion: descripcion,
    };

    setPilaDeReportes((prevStack) => [nuevoReporte, ...prevStack]);
    setTitulo("");
    setDescripcion("");
    setErrorHandler(""); 
  };

  const leerYDescartarReporte = () => {
    if (pilaDeReportes.length === 0) {
      setErrorHandler("No reports to read.");
      return;
    }

    const reporteLeido = pilaDeReportes[0]; 
    console.log(`${reporteLeido.Titulo}: ${reporteLeido.Descripcion}`);

    setPilaDeReportes((prevStack) => prevStack.slice(1));
    setErrorHandler(""); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Pilas de Reportes</Text>

        <TextInput
          style={styles.input}
          placeholder="Titulo del reporte"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Descripcion del reporte"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />

        {errorHandler ? <Text style={styles.error}>{errorHandler}</Text> : null}

        <View style={styles.buttonsContainer}>
          <Button title="Mandar Reporte" onPress={mandarReporte} />
          <Button
            title="Leer y Descartar Reporte"
            onPress={leerYDescartarReporte}
            disabled={pilaDeReportes.length === 0}
          />
        </View>

        <Text style={styles.title}>Reportes en la Pila</Text>
        {pilaDeReportes.length > 0 ? (
          <FlatList
            data={pilaDeReportes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.reportContainer}>
                <Text style={styles.reportText}>
                  {index + 1}. {item.Titulo}: {item.Descripcion}
                </Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.emptyStack}>La pila esta vacia</Text>
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
  reportContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 3,
  },
  reportText: {
    fontSize: 16,
  },
  emptyStack: {
    fontSize: 16,
    color: "gray",
    fontStyle: "italic",
    marginTop: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
