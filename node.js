export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
  set nextNode(nextNode) {
    this.nextNode = nextNode;
  }
}
