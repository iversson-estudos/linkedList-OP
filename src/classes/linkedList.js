import { Node } from "./linkedListNode";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /*adds a new node on tail*/
  append(value) {
    /*creates new node*/
    const newNode = new Node(value);

    /*checks if list empty for the first insert if yes then the new node is both head and tail */
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*assigns current tail pointer to the new tail */
      this.tail.nextNode = newNode;
      /*updates the tail*/
      this.tail = newNode;
    }
  }
  /*adds new node on head*/
  prepend(value) {
    /*creates new node*/
    const newNode = new Node(value);

    /*checks if list empty for the first insert if yes then the new node is both head and tail */
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*assigns new node head pointer to the current head */
      newNode.nextNode = this.head;
      /*updates the tail*/
      this.head = newNode;
    }
  }
  /*RETURNS SIZE OF LIST */
  size() {
    let sum = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.nextNode;
      sum++;
    }
    return sum;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  /*GETS NODE BASED ON INDEX*/
  at(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentNode;
  }
  /*REMOVES LAST NODE OF LIST */
  pop() {
    /*IN CASE NO NODES */
    if (!this.head) {
      return;
    }
    /*IN CADE 1 NODE */
    if (!this.head.nextNode) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;
    /*RUNS THROUGH LIST TO REACH SECOND TO LAST NODE */
    while (currentNode.nextNode && currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    this.tail = currentNode;
    currentNode.nextNode = null;
  }
}

export { LinkedList };
