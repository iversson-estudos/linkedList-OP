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
}
