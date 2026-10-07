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
    while (currentNode !== null && count < index) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode === null ? undefined : currentNode.value;
  }
  pop() {
    if (this.headNode === null) {
      return undefined;
    } else {
      let oldHeadNodeValue = this.headNode.value;
      this.headNode = this.headNode.nextNode;
      return oldHeadNodeValue;
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
  findIndex(value) {
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
    return -1;
  }
  toString() {
    let listString = " ";
    if (this.headNode === null) {
      return listString;
    } else {
      let currentNode = this.headNode;
      while (currentNode !== null) {
        listString += `(${currentNode.value}) -> `;
        currentNode = currentNode.nextNode;
      }
    }
    listString += "null";
    return listString;
  }
  insertAt(index, ...values) {
    if (!Number.isInteger(index) || index < 0 || index > this.size()) {
      throw new RangeError("index out of bounds");
    }
    let currentNode = this.headNode;
    while (currentNode !== null && count < index) {
      currentNode = currentNode.nextNode;
    }
    for (const value of values) {
      const node = new Node(value);
      node.nextNode = currentNode.nextNode;
      currentNode.nextNode = node;
      currentNode = node;
    }
  }
}
