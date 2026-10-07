import { linkedList } from "./linkedList.js";
const testList = new linkedList();

testList.append(1);
testList.append(2);
testList.append(3);
console.log(testList.toString());

// testList.append("dog");
// testList.append("cat");
// testList.append("parrot");
// testList.append("hamster");
// testList.append("snake");
// testList.append("turtle");
testList.insertAt(1, 10, 11);
console.log(testList.toString());
