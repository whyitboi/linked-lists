import { linkedList } from "./linkedList.js";

const testList = new linkedList();
const testList1 = new linkedList();

testList.append("dog");
testList.append("cat");
testList.append("parrot");
testList.append("hamster");
testList.append("snake");
testList.append("turtle");
console.log(testList.toString());

testList1.append(1);
testList1.append(2);
testList1.append(3);
console.log(testList1.toString());
testList1.insertAt(1, 10, 11);
console.log(testList1.toString());
