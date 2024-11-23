import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function BusquedaBinaria() {
  const [ganadoresPilotos] = useState([
    [1981, "Francisco B", "Dawson J"],
    [1982, "Jason W", "Burny H"],
    [1983, "Michael P", "Oliver K"],
    [1984, "Robert T", "Carl S"],
    [1985, "Luis R", "Martin V"],
    [1986, "Chris D", "Alex H"],
    [1987, "Peter G", "Frank B"],
    [1988, "John M", "Harry L"],
    [1989, "Roger C", "Kevin F"],
    [1990, "Anthony N", "Walter O"],
    [1991, "Bill E", "George D"],
    [1992, "Sam U", "Clifford Z"],
    [1993, "Ivan K", "Tommy V"],
    [1994, "Randy S", "Doug L"],
    [1995, "Steve W", "Nick P"],
    [1996, "Ryan T", "Alan Y"],
    [1997, "Victor A", "Max R"],
    [1998, "Oscar Q", "Fred J"],
    [1999, "Derek N", "Lucas F"],
    [2000, "Liam B", "Mike C"],
    [2001, "Gary H", "Jack W"],
    [2002, "Henry J", "Neil G"],
    [2003, "Mason K", "Clark L"],
    [2004, "Edward M", "Paul O"],
    [2005, "Charles T", "Sam K"],
    [2006, "Joel H", "Nathan D"],
    [2007, "Shawn C", "Rick A"],
    [2008, "Ben R", "Vince E"],
    [2009, "Tyler L", "Jeff Z"],
    [2010, "Logan B", "Cameron W"],
    [2011, "Evan D", "Russell F"],
    [2012, "Aiden M", "Andy P"],
    [2013, "Cody V", "Bryan S"],
    [2014, "Mark T", "Wayne Q"],
    [2015, "Brad K", "Drew R"],
    [2016, "Terry P", "Jon S"],
    [2017, "Jake N", "Kurt D"],
    [2018, "Greg F", "Eric L"],
    [2019, "Dylan H", "Matt O"],
    [2020, "Adam B", "Shane R"],
    [2021, "Luke P", "Caleb S"],
    [2022, "Cole W", "Troy G"],
    [2023, "Ryan C", "Brett M"],
   
  ]);

  const [inputYear, setInputYear] = useState("");
  const [result, setResult] = useState("");
  const [errorHandler, setErrorHandler] = useState("");

  const buscarGanadorPorAño = (array, año) => {
    let inferior = 0;
    let superior = array.length - 1;

    while (inferior <= superior) {
      let medio = Math.floor((inferior + superior) / 2);
      let añoMedio = array[medio][0];

      if (añoMedio === año) {
        return array[medio];
      } else if (año < añoMedio) {
        superior = medio - 1;
      } else {
        inferior = medio + 1;
      }
    }
    return null; 
  };

  const handleSearch = () => {
    const year = parseInt(inputYear, 10);

    if (isNaN(year)) {
      setErrorHandler("Por favor, ingrese un año válido.");
      setResult("");
      return;
    }

    const searchResult = buscarGanadorPorAño(ganadoresPilotos, year);

    if (searchResult) {
      setResult(`Año ${searchResult[0]}: Piloto Principal: ${searchResult[1]}, Copiloto: ${searchResult[2]}`);
      setErrorHandler("");
    } else {
      setErrorHandler(`El año ${year} no fue encontrado en los registros.`);
      setResult("");
    }
    setInputYear(""); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Ganadores 1981 - 2023</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese un año"
          value={inputYear}
          onChangeText={setInputYear}
          keyboardType="numeric"
        />

        {errorHandler ? <Text style={styles.error}>{errorHandler}</Text> : null}

        <Button title="Buscar" onPress={handleSearch} />

        {result ? <Text style={styles.result}>{result}</Text> : null}
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
});
