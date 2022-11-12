// 1. Trees Intro & Terminology

// Binary Search Trees

/*
             47
         21      76
      18   27  52  82          

*/

// Binary Search Tree Big O

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor(value) {
    const newNode = new Node(value);
    this.root = newNode;
  }
}

let myTree = new BTS(5);
console.log(myTree);
