import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigations/StackNavigator.js';
import InputDisplay from './schemas/InputDisplay.js';
import GraphView from './components/GraphView.jsx';
import Arreglos from './screens/Criterio_01/Arreglos.js';
import Colas from './screens/Criterio_01/Colas.js';
import Pilas from './screens/Criterio_01/Pilas.js';

/*
    
    <StackNavigator/>
*/

export default function App() {
  return (
    <Pilas/>
  )
}
