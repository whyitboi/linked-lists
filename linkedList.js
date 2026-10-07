import { Node } from "./node";

export class linkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
    }
    node.nextNode = this.headNode;
    this.headNode = node;
    // this.headNode === null ? this.headNode = node :
  }
  prepend(value) {
    const node = new Node(value);
  }
  size() {}
  head() {}
}
