
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




const tree = new BinaryTree()

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(13);
tree.insert(19);
tree.insert(12);
tree.insert(14);


console.log(tree.isEmpty())

console.log(tree.search(tree.root, 10))
console.log(tree.search(tree.root, 15))

tree.printTree()

tree.delete(15)

tree.printTree()





