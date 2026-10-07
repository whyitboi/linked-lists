import { Node } from "./node";

export class linkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
  }
  prepend(value) {
    const node = new Node(value);
    let currentNode = this.headNode;
    this.headNode = node;
    node.nextNode = currentNode;
  }
  size() {
    let size = 0;
    if (this.headNode === null) return size;
    let currentNode = this.headNode;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return size;
  }
  head() {
    if (this.headNode !== null) {
      return this.headNode.value;
    } else return undefined;
  }
  tail() {
    if (this.headNode === null) {
      return undefined;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }
  at(index) {
    if (index < 0 || !Number.isInteger(index) || this.headNode === null) return;
    let currentNode = this.headNode;
    let count = 0;
    while (currentNode.nextNode !== null && count <= index) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode.value;
  }
}
