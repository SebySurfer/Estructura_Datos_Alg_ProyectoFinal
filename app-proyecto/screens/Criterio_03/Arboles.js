
/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Arboles() {
  return (
    <View>
      <Text>Arboles</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


*/

class Node{
  constructor(value){
    this.value = value;
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root === null
  }

  insert(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, newNode) {
    if(newNode.value < root.value){
      if(root.left === null){
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if(root.right === null){
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }
  search(root, value){
    if(!root){
      return false;
    } else {
      if(root.value === value){
        return true 
      } else if (value < root.value){
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

    delete(value){
      this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
      if(root === null){
        return root
      }

      if(value < root.value){
        root.left = this.deleteNode(root.left, value)
      } else if (value > root.value){
        root.right = this.deleteNode(root.right, value)
      } else {
        if(!root.left && !root.right){
         return null
        }
        if(!root.left){
          return root.right
        } else if (!root.right){
          return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right, root.value)
      } 
      return root
    }
      
    min(root) {
      while (root.left !== null) {
        root = root.left;
      }
      return root.value;
    }

    printTree(node = this.root, prefix = "", isLeft = true) {
      if (node === null) {
        return;
      }
  
      if (node.right !== null) {
        this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
      }
  
      console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
  
      if (node.left !== null) {
        this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
      }
    }

    
  }


  // Estos son los funciones que intergran ambos arboles,
  // donde uno sirve para agregar y borrar elementos (basandose en un tutorial de youtube), 
  // y otro para dar los tipos de ordenes sin que crear mas codigo (usado dentro de la libreria de buckets )


  const agregarElemento = (elemento) => {
    if(!arbolParaOrden.contains(elemento)){
      arbolParaOrden.add(elemento);
      tree.insert(elemento);
    } else {
      console.log("Ya existe")
    }
  }

  const borrarElemento = (elemento) => {
    if(arbolParaOrden.contains(elemento)){
      arbolParaOrden.remove(elemento);
      tree.delete(elemento);
  } else {
    console.log("No existe")
  }
}

const buscarElemento = (elemento) => {
  if(arbolParaOrden.contains(elemento)){
    console.log("Si existe");
  } else {
    console.log("No existe");
  }

}


const Inorden = () => {
    arbolParaOrden.inorderTraversal((element) => {
        console.log(element);
    });
};

const PostOrden = () => {
    arbolParaOrden.postorderTraversal((element) => {
        console.log(element);
    });
};

const Preorden = () => {
    arbolParaOrden.preorderTraversal((element) => {
        console.log(element);
    });
};


const buckets = require('buckets-js');
const arbolParaOrden = new buckets.BSTree(); // Arbol de la libreria para orden
const tree = new BinaryTree() // Arbol de codigo para acciones

/*
Tests:

agregarElemento(11);
agregarElemento(7);
agregarElemento(15);
agregarElemento(13);
agregarElemento(19);
agregarElemento(11);
agregarElemento(12);
agregarElemento(11);

tree.printTree();

buscarElemento(15);
borrarElemento(15)
buscarElemento(15);

tree.printTree();


Inorden();
Preorden();
PostOrden();



*/













