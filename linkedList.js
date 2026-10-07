import { Node } from "./node";

export class linkedList {
  constructor(name) {
    this.linkedList = [];
    this.name = name;
  }
  append(value) {
    const node = new Node(value);
    //set the other property of node here
    this.linkedList.push(node);
  }
  prepend(value) {
    const node = new Node(value);
    node.nextNode(this.linkedList[0]);
    this.linkedList.unshift(node);
  }
  size() {
    return this.linkedList.length;
  }
  head() {
    return this.linkedList.length;
    // if(this.linkedList.length <= 0){
    //     return undefined
    // }
  }
}
