import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Grafos() {
  return (
    <View>
      <Text>Grafos</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

class Graph{
  constructor(){
    this.adjacencyList = {}
  }


  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }

    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)

  }

  removeEdge(vertex1, vertex2 ){
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return 
    }
    for(let adjacentVertex of this.adjacencyList[vertex]){
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }

  hasEdge(vertex1, vertex2){
    return(
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    )
  }

  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
    }
  }

}

//Test

const MyGraph = new Graph()

MyGraph.addVertex("A")
MyGraph.addVertex("B")

MyGraph.addEdge("A", "B")
vertex1.removeEdge("A", "B")