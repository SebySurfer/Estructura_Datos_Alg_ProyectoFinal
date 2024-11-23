import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

export default function GraphView() {
  return (
    <View>
      <Svg height="400" width="400">
        {/* Nodes */}
        <Circle cx="50" cy="50" r="20" fill="blue" />
        <Circle cx="150" cy="150" r="20" fill="green" />
        <Circle cx="250" cy="50" r="20" fill="red" />

        {/* Edges */}
        <Line x1="50" y1="50" x2="150" y2="150" stroke="black" />
        <Line x1="150" y1="150" x2="250" y2="50" stroke="black" />
        <Line x1="50" y1="50" x2="250" y2="50" stroke="black" />
      </Svg>
    </View>
  );
}
