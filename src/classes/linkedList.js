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
    /*IN CASE 1 NODE */
    if (!this.head.nextNode) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;
    /*RUNS THROUGH LIST TO REACH SECOND TO LAST NODE */
    while (currentNode.nextNode && currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    /*UPDATES NEW TAIL DELETES POINTER TO NEXT NODE */
    this.tail = currentNode;
    currentNode.nextNode = null;
  }

  /*SEARCHES LIST AND RETURNS TRUE OR FALSE IF VALUE FOUND OR NOT */
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  /*FINDS INDEX OF VALUE OR RETURNS NULL IF NOT FOUND */
  find(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let string = "";

    /*IN CASE ONLY 1 NODE */
    if (!currentNode.nextNode && currentNode) {
      string += " ( ";
      string += currentNode.value;
      string += " ) ->";
      return string + " null";
    }

    while (currentNode.nextNode) {
      string += " ( ";
      string += currentNode.value;
      string += " ) ->";
      currentNode = currentNode.nextNode;
    }

    return string + " null";
  }

  insertAt(value, index) {
    /*CHECK FOR NULL VALUES */
    if (
      value == null ||
      typeof index !== "number" ||
      index < 0 ||
      index > this.size()
    ) {
      return;
    }

    /*IF VALUE IS SET TO INSERT AT HEAD */
    if (index == 0) {
      this.prepend(value);
      return;
    }

    /*IF VALUE IS SET TO INSERT AT TAIL */
    if (index == this.size()) {
      this.append(value);
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    /*FINDS NODE WHERE TO INSERT NEW VALUE */
    while (currentNode.nextNode && currentIndex <= index - 1) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    /*CREATES NEW NODE WITH POINTER */
    const newNode = new Node(value, currentNode);
    previousNode.nextNode = newNode;
  }
}

export { LinkedList };
