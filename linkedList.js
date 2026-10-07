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
    let currentNode = this.headNode;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.nextNode;
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
    if (index < 0 || !Number.isInteger(index)) return undefined;
    let currentNode = this.headNode;
    let count = 0;
    while (currentNode.nextNode !== null && count <= index) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode === null ? undefined : currentNode.value;
  }
  pop() {
    if (this.headNode === null) {
      return undefined;
    } else {
      let newHeadNode = this.headNode.nextNode;
      this.headNode = newHeadNode;
    }
  }
  contains(value) {
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value !== value) {
        currentNode = currentNode.nextNode;
      } else {
        return true;
      }
    }
    return false;
  }
  findIndexvalue(value) {
    let index = 0;
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value !== value) {
        currentNode = currentNode.nextNode;
      } else {
        return index;
      }
      index++;
    }
    return currentNode === null ? -1 : index;
  }
}
