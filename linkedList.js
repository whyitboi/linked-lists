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
        this.headNode = node;
      }
      currentNode.nextNode = node;
    }
  }
  prepend(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
    } else {
      let currentNode = this.headNode;
      this.headNode = node;
      node.nextNode = currentNode;
    }
  }
  size() {}
  head() {}
}
