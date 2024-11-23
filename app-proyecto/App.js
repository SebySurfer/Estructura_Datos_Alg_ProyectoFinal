import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigations/StackNavigator.js';
import InputDisplay from './schemas/InputDisplay.js';
import GraphView from './components/GraphView.jsx';
import Arreglos from './screens/Criterio_01/Arreglos.js';
import Colas from './screens/Criterio_01/Colas.js';
import Pilas from './screens/Criterio_01/Pilas.js';
import BusquedaBinaria from './screens/Criterio_02/BusquedaBinaria.js';
import ListaDobleLigada from './screens/Criterio_02/ListaDobleLigada.js';
import OrdenamientoQuicksort from './screens/Criterio_02/OrdenamientoQuicksort.js';
import Arboles from './screens/Criterio_03/Arboles.js';
/*
    
    <StackNavigator/>
*/

export default function App() {
  return (
    <ListaDobleLigada/>
  )
}
